const Issue = require("../models/Issue");
const sendNotification = require("../utils/notify");
// View government issues
exports.getGovernmentIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ authorityType: "government" });
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

exports.updateIssueStatus = async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  issue.status = req.body.status;
  issue.activityLog.push({
    message: `Status changed to ${req.body.status}`,
  });

  await issue.save();

  await sendNotification(
    issue.createdBy,
    `Your issue "${issue.title}" status updated to ${req.body.status}`
  );

  res.json({ message: "Status updated", issue });
};