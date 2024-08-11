const express = require('express');
const Payment = require('../models/Payment');
const auth = require('../middleware/auth');

const router = express.Router();

// Record a payment
router.post('/', auth, async (req, res) => {
  const { amount } = req.body;

  try {
    const payment = new Payment({
      userId: req.user.id,
      amount
    });

    await payment.save();
    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
