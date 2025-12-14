const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const issueRoutes = require("./routes/issueRoutes");
const voteRoutes = require("./routes/voteRoutes");
const governmentRoutes = require("./routes/governmentRoutes");
const clubRoutes = require("./routes/clubRoutes");
const resolutionRoutes = require("./routes/resolutionRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const path = require("path");
const app = express();
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/issues", issueRoutes);
app.use("/api/votes", voteRoutes);
app.use("/api/government", governmentRoutes);
app.use("/api/club", clubRoutes);
app.use("/api/resolution", resolutionRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/notifications", notificationRoutes);

app.use("/api/analytics", analyticsRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Crowdsourced Civic Issue System API is running");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
