const Commit = require("../models/Commit");
const Repository = require("../models/Repository");

// Create a commit
const createCommit = async (req, res) => {
  try {
    const { message } = req.body;
    const { repositoryId } = req.params;

    // Validate required field
    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Commit message is required",
        data: null,
      });
    }

    const repository = await Repository.findById(repositoryId);

    if (!repository) {
      return res.status(404).json({
        success: false,
        message: "Repository not found",
        data: null,
      });
    }

    const commit = await Commit.create({
      message,
      author: req.user._id,
      repository: repositoryId,
    });

    res.status(201).json({
      success: true,
      message: "Commit created successfully",
      data: commit,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create commit",
      data: null,
    });
  }
};

// View all commits
const getCommits = async (req, res) => {
  try {
    const { repositoryId } = req.params;

    const repository = await Repository.findById(repositoryId);

    if (!repository) {
      return res.status(404).json({
        success: false,
        message: "Repository not found",
        data: null,
      });
    }

    const commits = await Commit.find({
      repository: repositoryId,
    })
      .populate("author", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Commits fetched successfully",
      data: commits,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch commits",
      data: null,
    });
  }
};

// View one individual commit
const getCommit = async (req, res) => {
  try {
    const commit = await Commit.findById(req.params.id)
      .populate("author", "username email")
      .populate("repository", "name");

    if (!commit) {
      return res.status(404).json({
        success: false,
        message: "Commit not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Commit fetched successfully",
      data: commit,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch commit",
      data: null,
    });
  }
};

module.exports = {
  createCommit,
  getCommits,
  getCommit,
};