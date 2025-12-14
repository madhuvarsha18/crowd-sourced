const express = require("express");
const router = express.Router();

const {
  getClubIssues,
  updateIssueStatus,
} = require("../controllers/clubController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get(
  "/issues",
  authMiddleware,
  roleMiddleware("club"),
  getClubIssues
);

router.put(
  "/issues/:id/status",
  authMiddleware,
  roleMiddleware("club"),
  updateIssueStatus
);

module.exports = router;
