const Repository = require("../models/Repository");

// Create repository
const createRepository = async (req, res) => {
  try {
    const { name, description, visibility } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Repository name is required",
        data: null,
      });
    }

    const repository = await Repository.create({
      name,
      description,
      visibility,
      owner: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Repository created successfully",
      data: repository,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create repository",
      data: null,
    });
  }
};

// Get all repositories
const getRepositories = async (req, res) => {
  try {
    const repositories = await Repository.find()
      .populate("owner", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Repositories fetched successfully",
      data: repositories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch repositories",
      data: null,
    });
  }
};

// Get single repository
const getRepository = async (req, res) => {
  try {
    const repository = await Repository.findById(req.params.id).populate(
      "owner",
      "username email"
    );

    if (!repository) {
      return res.status(404).json({
        success: false,
        message: "Repository not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Repository fetched successfully",
      data: repository,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch repository",
      data: null,
    });
  }
};

// Update repository
const updateRepository = async (req, res) => {
  try {
    const { name, description, visibility } = req.body;

    const repository = await Repository.findById(req.params.id);

    if (!repository) {
      return res.status(404).json({
        success: false,
        message: "Repository not found",
        data: null,
      });
    }

    // Check if the logged-in user owns the repository
    if (repository.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to update this repository",
        data: null,
      });
    }

    repository.name = name ?? repository.name;
    repository.description = description ?? repository.description;
    repository.visibility = visibility ?? repository.visibility;

    const updatedRepository = await repository.save();

    res.status(200).json({
      success: true,
      message: "Repository updated successfully",
      data: updatedRepository,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update repository",
      data: null,
    });
  }
};

// Delete repository
const deleteRepository = async (req, res) => {
  try {
    const repository = await Repository.findById(req.params.id);

    if (!repository) {
      return res.status(404).json({
        success: false,
        message: "Repository not found",
        data: null,
      });
    }

    // Check if the logged-in user owns the repository
    if (repository.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete this repository",
        data: null,
      });
    }

    await repository.deleteOne();

    res.status(200).json({
      success: true,
      message: "Repository deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete repository",
      data: null,
    });
  }
};

module.exports = {
  createRepository,
  getRepositories,
  getRepository,
  updateRepository,
  deleteRepository,
};