const express = require("express");
const {
  createRepository,
  getRepositories,
  getRepository,
  updateRepository,
  deleteRepository,
} = require("../controllers/repositoryController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/repositories:
 *   post:
 *     summary: Create a repository
 *     tags: [Repositories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: my-project
 *               description:
 *                 type: string
 *                 example: My first Mini GitHub repository
 *               visibility:
 *                 type: string
 *                 enum: [public, private]
 *                 example: public
 *     responses:
 *       201:
 *         description: Repository created successfully
 *       400:
 *         description: Repository name is required
 *       401:
 *         description: Unauthorized
 */
router.post("/", protect, createRepository);

/**
 * @swagger
 * /api/repositories:
 *   get:
 *     summary: Get repositories
 *     tags: [Repositories]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Repositories fetched successfully
 *       401:
 *         description: Unauthorized
 */
router.get("/", protect, getRepositories);

/**
 * @swagger
 * /api/repositories/{id}:
 *   get:
 *     summary: Get a repository by ID
 *     tags: [Repositories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Repository ID
 *     responses:
 *       200:
 *         description: Repository fetched successfully
 *       404:
 *         description: Repository not found
 *       401:
 *         description: Unauthorized
 */
router.get("/:id", protect, getRepository);

/**
 * @swagger
 * /api/repositories/{id}:
 *   put:
 *     summary: Update a repository
 *     tags: [Repositories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
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
 *             properties:
 *               name:
 *                 type: string
 *                 example: updated-project
 *               description:
 *                 type: string
 *                 example: Updated repository description
 *               visibility:
 *                 type: string
 *                 enum: [public, private]
 *                 example: private
 *     responses:
 *       200:
 *         description: Repository updated successfully
 *       403:
 *         description: You do not have permission to update this repository
 *       404:
 *         description: Repository not found
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", protect, updateRepository);

/**
 * @swagger
 * /api/repositories/{id}:
 *   delete:
 *     summary: Delete a repository
 *     tags: [Repositories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Repository ID
 *     responses:
 *       200:
 *         description: Repository deleted successfully
 *       403:
 *         description: You do not have permission to delete this repository
 *       404:
 *         description: Repository not found
 *       401:
 *         description: Unauthorized
 */
router.delete("/:id", protect, deleteRepository);

module.exports = router;