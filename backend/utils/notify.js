const Notification = require("../models/Notification");

const sendNotification = async (userId, message) => {
  await Notification.create({
    user: userId,
    message,
  });
};

module.exports = sendNotification;
