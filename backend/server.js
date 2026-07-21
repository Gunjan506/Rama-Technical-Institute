const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");

require("dotenv").config();
dns.setServers(["8.8.8.8", "8.8.4.4"]);

console.log("MONGO_URI =", process.env.MONGO_URI);

const admissionRoutes = require("./routes/admissionRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:");
    console.error(err);
  });

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Rama Technical Institute Backend Running");
});

// Test API
app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend API is working successfully!",
  });
});

// Admission Routes
app.use("/api/admission", admissionRoutes);

// Admin Routes
app.use("/api/admin", adminRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});