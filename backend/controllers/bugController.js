const Bug = require("../models/Bug");

// Create a new bug
exports.createBug = async (req, res) => {
  try {
    console.log("Request body:", req.body); 
    const bug = new Bug(req.body);
    await bug.save();
    console.log("Bug created:", bug); 
    res.status(201).json(bug);
  } catch (err) {
    console.error("Error creating bug:", err); 
    res.status(400).json({ message: err.message });
  }
};

// Get all bugs
exports.getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a bug
exports.updateBug = async (req, res) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bug) {
      return res.status(404).json({ message: "Bug not found" });
    }
    res.status(200).json(bug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a bug
exports.deleteBug = async (req, res) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) {
      return res.status(404).json({ message: "Bug not found" });
    }
    res.status(200).json({ message: "Bug deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};