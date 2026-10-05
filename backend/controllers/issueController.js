const Issue = require("../models/Issue");
const Repository = require("../models/Repository");

// CREATE ISSUE
const createIssue = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { repositoryId } = req.params;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Issue title and description are required",
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

    const issue = await Issue.create({
      title,
      description,
      author: req.user._id,
      repository: repositoryId,
    });

    res.status(201).json({
      success: true,
      message: "Issue created successfully",
      data: issue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: null,
    });
  }
};

// GET ALL ISSUES FOR A REPOSITORY
const getIssues = async (req, res) => {
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

    const issues = await Issue.find({
      repository: repositoryId,
    })
      .populate("author", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Issues fetched successfully",
      data: issues,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: null,
    });
  }
};

// UPDATE ISSUE
const updateIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const issue = await Issue.findById(id);

    if (!issue) {
      return res.status(404).json({
        success: false,
        message: "Issue not found",
        data: null,
      });
    }

    // Check if the logged-in user is the issue author
    if (issue.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to update this issue",
        data: null,
      });
    }

    issue.title = title ?? issue.title;
    issue.description =
      description !== undefined ? description : issue.description;
    issue.status = status ?? issue.status;

    await issue.save();

    res.status(200).json({
      success: true,
      message: "Issue updated successfully",
      data: issue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: null,
    });
  }
};

// DELETE ISSUE
const deleteIssue = async (req, res) => {
  try {
    const { id } = req.params;

    const issue = await Issue.findById(id);

    if (!issue) {
      return res.status(404).json({
        success: false,
        message: "Issue not found",
        data: null,
      });
    }

    // Check if the logged-in user is the issue author
    if (issue.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete this issue",
        data: null,
      });
    }

    await Issue.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Issue deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: null,
    });
  }
};

module.exports = {
  createIssue,
  getIssues,
  updateIssue,
  deleteIssue,
};