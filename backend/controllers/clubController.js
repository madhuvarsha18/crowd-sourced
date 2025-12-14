const Issue = require("../models/Issue");

// View club issues
exports.getClubIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ authorityType: "club" });
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update issue status
exports.updateIssueStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const issue = await Issue.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({
      message: "Issue status updated",
      issue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
