const mongoose = require("mongoose");

const BugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "open", enum: ["open", "in-progress", "resolved"] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Bug", BugSchema);