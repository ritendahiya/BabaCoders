const nodemailer = require("nodemailer");
require("dotenv").config();
exports.mailSender = async (req, res) => {
  try {
    const { email, link } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: "healthcaree2024project@gmail.com",
        pass: "hgqi egex yjtg pghi",
      },
    });

    const info = await transporter.sendMail({
      from: "SudyNotion",
      to: `${email}`,
      subject: title,
      html: `<div>link for the meeting is ${link}</div>`,
    });
    console.log(info);
    return res.status(200).json({
      success: true,
      message: "Link send to doctor",
    });
  } catch (error) {
    console.log(error);
  }
};
