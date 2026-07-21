const express = require("express");
const router = express.Router();

const Admission = require("../models/Admission");


// ===============================
// Create Admission Enquiry
// ===============================
router.post("/", async (req, res) => {
  try {
    const admission = new Admission(req.body);

    await admission.save();

    res.status(201).json({
      success: true,
      message: "Admission enquiry submitted successfully.",
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