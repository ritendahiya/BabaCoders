const express = require('express');
const Feedback = require('../models/Feedback');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/feedback', auth, async (req, res) => {
  const { patientId, doctorId, feedback } = req.body;
  try {
    const newFeedback = new Feedback({ patientId, doctorId, feedback });
    await newFeedback.save();
    res.status(201).json({ msg: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
