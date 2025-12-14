const Issue = require("../models/Issue");

// CREATE ISSUE
exports.createIssue = async (req, res) => {
  try {
    const issue = await Issue.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Issue reported successfully",
      issue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL ISSUES
exports.getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET MY ISSUES
exports.getMyIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ createdBy: req.user.id });
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
