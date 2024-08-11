const express = require('express');
const Appointment = require('../models/Appointment');
const auth = require('../middleware/auth');  // Middleware to protect routes

const router = express.Router();

// Create an appointment
router.post('/', auth, async (req, res) => {
  const { date, details } = req.body;

  try {
    const appointment = new Appointment({
      userId: req.user.id,
      date,
      details
    });

    await appointment.save();
    res.json(appointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
