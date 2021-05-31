const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  username: {
    type: String,
    required: true,
    min: 3,
    max: 50,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    min: 3,
    max: 50,
    unique: true,
  },
  userType: {
    type: String,
    required: true,
    enum: ["member", "admin"],
    default: "member",
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
    select: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.getSignedToken = function () {
  return jwt.sign({ _id: this._id }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

module.exports = model("User", userSchema);
