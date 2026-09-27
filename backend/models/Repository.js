const mongoose = require("mongoose");

const repositorySchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      defauit: "",
      trim: true,
    },

    visibility:{
      type: String,
      enum: ["public", "private"],
      defauit:"public",
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose. model("Repository", repositorySchema);