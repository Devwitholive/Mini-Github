const express = require("express");
const {
  createIssue,
  getIssues,
  updateIssue,
  deleteIssue,
} = require("../controllers/issueController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/repositories/{repositoryId}/issues:
 *   post:
 *     summary: Create an issue
 *     tags: [Issues]
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
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: Login button not working
 *               description:
 *                 type: string
 *                 example: The login button does not respond when clicked.
 *     responses:
 *       201:
 *         description: Issue created successfully
 *       400:
 *         description: Issue title and description are required
 *       404:
 *         description: Repository not found
 *       401:
 *         description: Unauthorized
 */
router.post(
  "/repositories/:repositoryId/issues",
  authMiddleware,
  createIssue
);

/**
 * @swagger
 * /api/repositories/{repositoryId}/issues:
 *   get:
 *     summary: Get issues for a repository
 *     tags: [Issues]
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
 *         description: Issues fetched successfully
 *       404:
 *         description: Repository not found
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/repositories/:repositoryId/issues",
  authMiddleware,
  getIssues
);

/**
 * @swagger
 * /api/issues/{id}:
 *   put:
 *     summary: Update an issue
 *     tags: [Issues]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Issue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Login button fixed
 *               description:
 *                 type: string
 *                 example: The login button issue has been resolved.
 *               status:
 *                 type: string
 *                 enum: [open, closed]
 *                 example: closed
 *     responses:
 *       200:
 *         description: Issue updated successfully
 *       403:
 *         description: You do not have permission to update this issue
 *       404:
 *         description: Issue not found
 *       401:
 *         description: Unauthorized
 */
router.put("/issues/:id", authMiddleware, updateIssue);

/**
 * @swagger
 * /api/issues/{id}:
 *   delete:
 *     summary: Delete an issue
 *     tags: [Issues]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Issue ID
 *     responses:
 *       200:
 *         description: Issue deleted successfully
 *       403:
 *         description: You do not have permission to delete this issue
 *       404:
 *         description: Issue not found
 *       401:
 *         description: Unauthorized
 */
router.delete("/issues/:id", authMiddleware, deleteIssue);

module.exports = router;