const express = require("express");
const {
  createCommit,
  getCommits,
  getCommit,
} = require("../controllers/commitController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/repositories/{repositoryId}/commits:
 *   post:
 *     summary: Create a commit
 *     tags: [Commits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: repositoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: Repository ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *                 example: Added authentication feature
 *     responses:
 *       201:
 *         description: Commit created successfully
 *       400:
 *         description: Commit message is required
 *       404:
 *         description: Repository not found
 *       401:
 *         description: Unauthorized
 */
router.post(
  "/repositories/:repositoryId/commits",
  authMiddleware,
  createCommit
);

/**
 * @swagger
 * /api/repositories/{repositoryId}/commits:
 *   get:
 *     summary: Get commits for a repository
 *     tags: [Commits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: repositoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: Repository ID
 *     responses:
 *       200:
 *         description: Commits fetched successfully
 *       404:
 *         description: Repository not found
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/repositories/:repositoryId/commits",
  authMiddleware,
  getCommits
);

/**
 * @swagger
 * /api/commits/{id}:
 *   get:
 *     summary: Get a commit by ID
 *     tags: [Commits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Commit ID
 *     responses:
 *       200:
 *         description: Commit fetched successfully
 *       404:
 *         description: Commit not found
 *       401:
 *         description: Unauthorized
 */
router.get("/commits/:id", authMiddleware, getCommit);

module.exports = router;