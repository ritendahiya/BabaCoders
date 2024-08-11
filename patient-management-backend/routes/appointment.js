const express = require("express");
const Appointment = require("../models/Appointment");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/appointment", auth, async (req, res) => {
  const { patientId, doctorId, date, time, reason } = req.body;
  try {
    const appointment = new Appointment({
      patientId,
      doctorId,
      date,
      time,
      reason,
    });
    await appointment.save();
    res.status(201).json({ msg: "Appointment created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
