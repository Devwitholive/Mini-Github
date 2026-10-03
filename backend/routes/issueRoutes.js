const express = require("express");

const {
  createIssue,
  getIssues,
  updateIssue,
  deleteIssue,
} = require("../controllers/issueController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create issue
router.post(
  "/repositories/:repositoryId/issues",
  authMiddleware,
  createIssue
);

// Get all issues
router.get(
  "/repositories/:repositoryId/issues",
  authMiddleware,
  getIssues
);

// Update issue
router.put(
  "/issues/:id",
  authMiddleware,
  updateIssue
);

// Delete issue
router.delete(
  "/issues/:id",
  authMiddleware,
  deleteIssue
);

module.exports = router;