const cookie = require("cookie");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

// MIDDLEWARE FUNCTION TO CHECK IF THE USER IS LOGGED IN
const checkLoggedIn = (req, res, next) => {
  // Parse the cookies from the request
  const cookies = cookie.parse(req.headers.cookie || "");

  // Retrieve the 'token' cookie
  const token = cookies.token;

  // If no token is found, proceed to the next middleware
  if (!token) {
    return next();
  }

  // Verify the token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return next();
    }

    req.isLoggedIn = true;
    req.userId = decoded.id;
    next();
  });
};

module.exports = {
  checkLoggedIn,
};
