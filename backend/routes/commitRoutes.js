const express = require("express");

const {
  createCommit,
  getCommits,
  getCommit,
} = require("../controllers/commitController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/repositories/:repositoryId/commits",
  authMiddleware,
  createCommit
);

router.get(
  "/repositories/:repositoryId/commits",
  authMiddleware,
  getCommits
);

router.get(
  "/commits/:id",
  authMiddleware,
  getCommit
);

module.exports = router;

