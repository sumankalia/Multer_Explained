const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    files: [{
      type: String,
      required: true,
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = Upload = mongoose.model("Upload", UploadSchema);
