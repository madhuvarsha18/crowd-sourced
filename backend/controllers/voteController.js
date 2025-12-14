const Vote = require("../models/Vote");
const Issue = require("../models/Issue");

// UPVOTE ISSUE
exports.upvoteIssue = async (req, res) => {
  try {
    const issueId = req.params.id;

    // Check duplicate vote
    const alreadyVoted = await Vote.findOne({
      issue: issueId,
      user: req.user.id,
    });

    if (alreadyVoted) {
      return res.status(400).json({ message: "Already voted" });
    }

    // Save vote
    await Vote.create({
      issue: issueId,
      user: req.user.id,
    });

    // Increment upvotes
    const issue = await Issue.findByIdAndUpdate(
      issueId,
      { $inc: { upvotes: 1 } },
      { new: true }
    );

    res.json({
      message: "Upvoted successfully",
      upvotes: issue.upvotes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
