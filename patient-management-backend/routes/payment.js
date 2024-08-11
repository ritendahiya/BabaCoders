const express = require('express');
const Payment = require('../models/Payment');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/payment', auth, async (req, res) => {
  const { patientId, amount, paymentMethod, status } = req.body;
  try {
    const payment = new Payment({ patientId, amount, paymentMethod, status });
    await payment.save();
    res.status(201).json({ msg: 'Payment recorded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
