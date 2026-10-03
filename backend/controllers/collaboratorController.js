const Repository = require("../models/Repository");
const User = require("../models/User");

// ADD COLLABORATOR
const addCollaborator = async (req, res) => {
  try {
    const { repositoryId } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
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

    // Only the repository owner can add collaborators
    if (repository.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to add collaborators",
        data: null,
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    const alreadyCollaborator = repository.collaborators.some(
      (collaboratorId) => collaboratorId.toString() === userId
    );

    if (alreadyCollaborator) {
      return res.status(400).json({
        success: false,
        message: "User is already a collaborator",
        data: null,
      });
    }

    if (repository.owner.toString() === userId) {
      return res.status(400).json({
        success: false,
        message: "Repository owner is already a member of the repository",
        data: null,
      });
    }

    repository.collaborators.push(userId);

    await repository.save();

    res.status(201).json({
      success: true,
      message: "Collaborator added successfully",
      data: repository,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: null,
    });
  }
};

// VIEW COLLABORATORS
const getCollaborators = async (req, res) => {
  try {
    const { repositoryId } = req.params;

    const repository = await Repository.findById(repositoryId)
      .populate("owner", "username email")
      .populate("collaborators", "username email");

    if (!repository) {
      return res.status(404).json({
        success: false,
        message: "Repository not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Collaborators fetched successfully",
      data: {
        owner: repository.owner,
        collaborators: repository.collaborators,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: null,
    });
  }
};

// REMOVE COLLABORATOR
const removeCollaborator = async (req, res) => {
  try {
    const { repositoryId, userId } = req.params;

    const repository = await Repository.findById(repositoryId);

    if (!repository) {
      return res.status(404).json({
        success: false,
        message: "Repository not found",
        data: null,
      });
    }

    // Only the repository owner can remove collaborators
    if (repository.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to remove collaborators",
        data: null,
      });
    }

    const collaboratorExists = repository.collaborators.some(
      (collaboratorId) => collaboratorId.toString() === userId
    );

    if (!collaboratorExists) {
      return res.status(404).json({
        success: false,
        message: "Collaborator not found",
        data: null,
      });
    }

    repository.collaborators = repository.collaborators.filter(
      (collaboratorId) => collaboratorId.toString() !== userId
    );

    await repository.save();

    res.status(200).json({
      success: true,
      message: "Collaborator removed successfully",
      data: repository,
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
  addCollaborator,
  getCollaborators,
  removeCollaborator,
};