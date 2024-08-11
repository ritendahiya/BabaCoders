require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// const userRoutes = require("./routes/user");
// const appointmentRoutes = require("./routes/appointment");
// const paymentRoutes = require("./routes/payment");
// const feedbackRoutes = require("./routes/feedback");
const app = express();
app.use(cors());
const sqlDBConnect = require("./config/sql_connect");
const authRouter = require("./routes/01_userRoute");

app.use(express.json());

// Use routes
app.use("/api/auth", authRouter);
// app.use('/api/users', userRoutes);
// app.use('/api/appointments', appointmentRoutes);
// app.use('/api/payments', paymentRoutes);
// app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
