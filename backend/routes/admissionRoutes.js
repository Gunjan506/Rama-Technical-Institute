const express = require("express");
const router = express.Router();

const Admission = require("../models/Admission");
const nodemailer = require("nodemailer");

// ===============================
// Create Admission Enquiry
// ===============================
router.post("/", async (req, res) => {
  console.log("Admission route called");
  try {

    // Save enquiry in MongoDB
    const admission = await Admission.create(req.body);

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Admission Enquiry Received",
      text: `
New Admission Enquiry:

Name: ${req.body.name}
Email: ${req.body.email}
Phone: ${req.body.phone}
Course: ${req.body.course}
      `,
    });
console.log("Email sent successfully");
    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: admission,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
// ===============================
// Get All Enquiries
// ===============================
router.get("/", async (req, res) => {
  try {

    const admissions = await Admission.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: admissions.length,
      data: admissions,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});


// ===============================
// Get Single Enquiry
// ===============================
router.get("/:id", async (req, res) => {
  try {

    const admission = await Admission.findById(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: admission,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});


// ===============================
// Update Enquiry
// ===============================
router.put("/:id", async (req, res) => {
  try {

    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );


    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Enquiry updated successfully",
      data: admission,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});


// ===============================
// Delete Enquiry
// ===============================
router.delete("/:id", async (req, res) => {
  try {

    const admission = await Admission.findByIdAndDelete(
      req.params.id
    );


    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully",
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});


module.exports = router;