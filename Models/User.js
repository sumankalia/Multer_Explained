const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
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

module.exports = User = mongoose.model("User", UserSchema);
