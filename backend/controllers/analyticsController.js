const Issue = require("../models/Issue");
const User = require("../models/User");

exports.getAnalytics = async (req, res) => {
  const totalIssues = await Issue.countDocuments();
  const resolvedIssues = await Issue.countDocuments({ status: "Resolved" });
  const pendingIssues = await Issue.countDocuments({ status: "Pending" });

  res.json({
    totalIssues,
    resolvedIssues,
    pendingIssues,
    resolutionRate:
      totalIssues > 0
        ? ((resolvedIssues / totalIssues) * 100).toFixed(2) + "%"
        : "0%",
  });
};
