const mongoose = require("mongoose");

const commitSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    repository: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Repository",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Commit", commitSchema);