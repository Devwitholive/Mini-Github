const Commit = require("../models/Commit");
const Repository = require("../models/Repository");

//Create a commit
const createCommit = async (req, res) => {
  try {
    const { message } = req.body;
    const { repositoryId } = req.params;

    if (!message) {
      return res.status(400).json({
        message: "Commit message is required",
      });
    }

    const repository = await Repository.findById(repositoryId);

    if (!repository) {
      return res.status(404).json({
        message: "Repository not found",
      });
    }

    const commit = await Commit.create({
      message,
      author: req.user._id,
      repository: repositoryId,
    });

    res.status(201).json({
      message: "Commit created successfully",
      commit,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create commit",
      error: error.message,
    });
  }
};

//View all commits
const getCommits = async (req, res) => {
  try {
    const { repositoryId } = req.params;

    const repository = await Repository.findById(repositoryId);

    if (!repository) {
      return res.status(404).json({
        message: "Repository not found",
      });
    }

    const commits = await Commit.find({
      repository: repositoryId,
    })
      .populate("author", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      commits,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch commits",
      error: error.message,
    });
  }
};

//View one individual commit
const getCommit = async (req, res) => {
  try {
    const commit = await Commit.findById(req.params.id)
      .populate("author", "username email")
      .populate("repository", "name");

    if (!commit) {
      return res.status(404).json({
        message: "Commit not found",
      });
    }

    res.status(200).json({
      commit,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch commit",
      error: error.message,
    });
  }
};

module.exports = {
  createCommit,
  getCommits,
  getCommit,
};
