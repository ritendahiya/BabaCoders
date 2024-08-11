const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: 'Success' }, // 'Success', 'Failed', etc.
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
