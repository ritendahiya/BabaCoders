const express = require("express");
const authController = require("../controller/01_userController");
const { checkLoggedIn } = require("../middleware/01_userMiddleware");
const authRouter = express.Router();

// LOGIN USER
authRouter.post("/login", checkLoggedIn, async (req, res) => {
  try {
    await authController.loginUser(req, res);
    // const result =
    // res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// REGISTER USER
// authRouter.post("/register", checkLoggedIn, async (req, res) => {
authRouter.post("/register", async (req, res) => {
  try {
    await authController.registerUser(req, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// LOGOUT USER
// authRouter.get("/logout", checkLoggedIn, (req, res) => {
//   if (!req.isLoggedIn) {
//     return res.status(200).json({
//       status: 0,
//       message: "User is already logged out",
//       user: null,
//     });
//   }

//   res
//     .clearCookie("token")
//     .status(200)
//     .json({
//       status: 1,
//       message: "Logged out successfully",
//       user: {
//         id: req.userId,
//       },
//     });
// });

// EXPORT THE ROUTER
module.exports = authRouter;
