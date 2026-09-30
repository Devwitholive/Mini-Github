const Repository = require("../models/Repository");

//create repository
const createRepository = async (req, res) => {
  try{
    const { name, description, visibility } = req.body;

    const repository = await Repository.create({
      name,
      description,
      visibility,
      owner: req.user._id,
    });

    res.status(201).json(repository);
  } catch (error) {
    res.status(500).json({
      message: "failed to create respository",
      error: error.message,
    });
  }
};

//Get all repositories
const getRepositories = async (req, res) => {
  try {
    const repositories = await Repository.find()
     .populate("owner", "name email")
      .sort({ createdAt: -1 });

   res.status(200).json(respositories);
 } catch (error) {
   res.status(500).json({
    message: " Failed to fetch repositories",
    error: error.message,
   });
 }
};

// Get single repository
const getRepository = async (req, res) => {
  try {
    const respository = await Repository.findById(req. params.id)
    .populate ("owner", "name email");

    if (!respository) {
      return res. status(404).json({
        message: "Repository not found",
      });
    }
    
   res.status(200).json(respository);
 } catch (error) {
   res.status(500).json({
    message: " Failed to fetch repository",
    error: error.message,
   });
  }
};

// Update repository
const updateRepository = async (req, res) => {
  try {
    const { name, description, visibility } =req.boby;

    const repository = await Repository. findById(req.params.id);

    if (!repository) {
      return res.status(404).json({
        message: "Repository not found",
      });
    }

    repository.name = name ?? repository.name;
    repository.description = description ?? repository.description;
    repository.visibility = visibility ?? repository. visibility;

    const updatedRepository = await repository.save();

    res.status(200).json(updatedRepository);
 } catch (error) {
   res.status(500).json({
    message: "Failed to update repository",
    error: error.message,
   });
  }
};

//delete repository
const deleteRepository = async (req, res) => {
  try {
    const repository = await Repository.findById(req.params.id);

    if (!repository) {
      return res.status(404).json({
        message: "Repository not found",
      });
    }
    await repository.deleteOne();

    res.status(200).json({
      message:"Repository deleted successfully",
    });
 } catch (error) {
   res.status(500).json({
    message: "Failed to delete repository",
    error: error.message,
   });
  }
};

module.exports = {
  createRepository,
  getRepositories,
  getRepository,
  updateRepository,
  deleteRepository,
};




