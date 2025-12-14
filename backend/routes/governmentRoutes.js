const express = require("express");
const router = express.Router();

const {
  getGovernmentIssues,
  updateIssueStatus,
} = require("../controllers/governmentController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get(
  "/issues",
  authMiddleware,
  roleMiddleware("government"),
  getGovernmentIssues
);

router.put(
  "/issues/:id/status",
  authMiddleware,
  roleMiddleware("government"),
  updateIssueStatus
);

module.exports = router;
