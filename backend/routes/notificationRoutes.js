const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  const notifications = await Notification.find({ user: req.user.id }).sort({
    createdAt: -1,
  });
  res.json(notifications);
});

router.put("/:id/read", authMiddleware, async (req, res) => {
  await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
  res.json({ message: "Notification marked as read" });
});

module.exports = router;
