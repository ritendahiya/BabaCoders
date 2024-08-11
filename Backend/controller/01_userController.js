const bcrypt = require("bcrypt");
// const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const userModal = require("../models/01_userModal");
// const { OAuth2Client } = require("google-auth-library");

const { JWT_SECRET } = process.env;
// const client = new OAuth2Client(GOOGLE_CLIENT_ID);

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    // Check if the user is already logged in
    if (req.isLoggedIn) {
      return res.status(200).json({ message: "User already logged in" });
    }

    const { email, password } = req.body;
    console.log("🚀 ~ loginUser ~ password:", password);
    console.log("🚀 ~ loginUser ~ email:", email);

    // Find the user by email using Sequelize
    const user = await userModal.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    console.log("🚀 ~ loginUser ~ user:", user.dataValues);

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Store the token as an HttpOnly cookie on the client side
    res.cookie("token", token, { httpOnly: true });

    console.log(`User id 👉 ${user.id} Logged-In successfully ✅`);

    res.json({
      status: 1,
      message: "Logged-In successfully",
      data: user,
      token: token,
    });
  } catch (err) {
    return res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await userModal.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("🚀 ~ registerUser ~ hashedPassword:", hashedPassword);

    // // Create a new user
    const newUser = await userModal.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully", data: newUser });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
