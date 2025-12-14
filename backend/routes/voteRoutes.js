const express = require("express");
const router = express.Router();
const { upvoteIssue } = require("../controllers/voteController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/:id/upvote", authMiddleware, upvoteIssue);

module.exports = router;
