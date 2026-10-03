const express = require("express");

const {
  addCollaborator,
  getCollaborators,
  removeCollaborator,
} = require("../controllers/collaboratorController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add collaborator
router.post(
  "/repositories/:repositoryId/collaborators",
  authMiddleware,
  addCollaborator
);

// View collaborators
router.get(
  "/repositories/:repositoryId/collaborators",
  authMiddleware,
  getCollaborators
);

// Remove collaborator
router.delete(
  "/repositories/:repositoryId/collaborators/:userId",
  authMiddleware,
  removeCollaborator
);

module.exports = router;