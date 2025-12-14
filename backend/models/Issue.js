const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Road", "Garbage", "Water", "Electricity", "Other"],
      required: true,
    },
    severity: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    image: {
      type: String, // image path
    },
    location: {
      lat: Number,
      lng: Number,
    },
    area: {
      type: String,
    },
    authorityType: {
      type: String,
      enum: ["government", "club"],
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved"],
      default: "Pending",
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    proofImage: {
        type: String
    },
    resolutionNote: {
        type: String
    },
    resolvedAt: {
         type: Date
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    activityLog: [
  {
    message: String,
    date: { type: Date, default: Date.now },
  },
],

  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", issueSchema);
