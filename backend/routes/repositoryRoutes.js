const express = require ("express");

const {
  createRepository,
  getRepositories,
  getRepository,
  updateRepository,
  deleteRepository,
} = require("../controllers/repositoryController");

const router = express.Router();

router.post("/", createRepository);

router.get("/", getRepositories );

router.get("/:id", getRepository);

router.put("/:id", updateRepository);

router.delete("/:id", deleteRepository);

module.exports = router;

