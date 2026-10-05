const express = require("express");
const { getProfile } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Get the logged-in user's profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile fetched successfully
 *       401:
 *         description: Unauthorized request or invalid/expired token
 */
router.get("/profile", protect, getProfile);

module.exports = router;