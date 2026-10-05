const express = require("express");
const {
  addCollaborator,
  getCollaborators,
  removeCollaborator,
} = require("../controllers/collaboratorController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/repositories/{repositoryId}/collaborators:
 *   post:
 *     summary: Add a collaborator to a repository
 *     tags: [Collaborators]
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
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 64f123456789abcdef123456
 *     responses:
 *       201:
 *         description: Collaborator added successfully
 *       400:
 *         description: Invalid collaborator request
 *       403:
 *         description: You do not have permission to add collaborators
 *       404:
 *         description: Repository or user not found
 *       401:
 *         description: Unauthorized
 */
router.post(
  "/repositories/:repositoryId/collaborators",
  authMiddleware,
  addCollaborator
);

/**
 * @swagger
 * /api/repositories/{repositoryId}/collaborators:
 *   get:
 *     summary: Get repository collaborators
 *     tags: [Collaborators]
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
 *         description: Collaborators fetched successfully
 *       404:
 *         description: Repository not found
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/repositories/:repositoryId/collaborators",
  authMiddleware,
  getCollaborators
);

/**
 * @swagger
 * /api/repositories/{repositoryId}/collaborators/{userId}:
 *   delete:
 *     summary: Remove a collaborator from a repository
 *     tags: [Collaborators]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: repositoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: Repository ID
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Collaborator removed successfully
 *       403:
 *         description: You do not have permission to remove collaborators
 *       404:
 *         description: Repository or collaborator not found
 *       401:
 *         description: Unauthorized
 */
router.delete(
  "/repositories/:repositoryId/collaborators/:userId",
  authMiddleware,
  removeCollaborator
);

module.exports = router;