const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const appointmentRoutes = require('./routes/appointment');
const paymentRoutes = require('./routes/payment');
const feedbackRoutes = require('./routes/feedback');
require('dotenv').config();

const app = express();

app.use(express.json());

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));



// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Patient Management System API!');
});

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
