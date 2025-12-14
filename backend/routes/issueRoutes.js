const express = require("express");
const router = express.Router();
const {
  createIssue,
  getAllIssues,
  getMyIssues,
} = require("../controllers/issueController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createIssue);
router.get("/", getAllIssues);
router.get("/my", authMiddleware, getMyIssues);

module.exports = router;
