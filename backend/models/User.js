const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "club", "government"],
      default: "user",
    },
    address: {
      type: String,
    },
    location: {
      lat: Number,
      lng: Number,
    },
    credits: {
    type: Number,
    default: 0
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
