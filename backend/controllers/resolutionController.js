const Issue = require("../models/Issue");
const User = require("../models/User");
const sendNotification = require("../utils/notify");

exports.resolveIssue = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.status = "Resolved";
    issue.proofImage = req.file ? req.file.path : null;
    issue.resolutionNote = req.body.note;
    issue.resolvedAt = new Date();

    // Activity log
    issue.activityLog.push({
      message: "Issue resolved with proof uploaded",
    });

    await issue.save();

    // Notify user
    await sendNotification(
      issue.createdBy,
      `Your issue "${issue.title}" has been resolved`
    );

    // Award credits to club
    if (req.user.role === "club") {
      const club = await User.findById(req.user.id);
      club.credits += 10;
      await club.save();
    }

    res.json({
      message: "Issue resolved successfully",
      issue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
