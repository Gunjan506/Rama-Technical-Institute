const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Temporary admin credentials
const ADMIN_USERNAME = "admin";

// Hashed version of "admin123"
const HASHED_PASSWORD =
  "$2b$10$L6QKxg5nHqQx9JvA6Q0M3u4k3e6j5K1rYtJ0Y0hL5v7j9Y1Qm2v8K";

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username !== ADMIN_USERNAME) {
    return res.status(401).json({
      success: false,
      message: "Invalid Username or Password",
    });
  }

  const isMatch = await bcrypt.compare(password, HASHED_PASSWORD);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid Username or Password",
    });
  }

  const token = jwt.sign(
    { username: ADMIN_USERNAME },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    success: true,
    message: "Login Successful",
    token,
  });
});

module.exports = router;