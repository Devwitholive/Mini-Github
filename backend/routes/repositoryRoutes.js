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

router.post("/", protect, createRepository);
router.get("/", protect, getRepositories);
router.get("/:id", protect, getRepository);
router.put("/:id", protect, updateRepository);
router.delete("/:id", protect, deleteRepository);

module.exports = router;