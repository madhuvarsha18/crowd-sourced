const express = require("express");
const router = express.Router();
const upload = require("../config/upload");
const { resolveIssue } = require("../controllers/resolutionController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.put(
  "/:id/resolve",
  authMiddleware,
  roleMiddleware("government", "club"),
  upload.single("proofImage"),
  resolveIssue
);

module.exports = router;
