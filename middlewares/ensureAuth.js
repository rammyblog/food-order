require("dotenv").config();
const jwt = require("jsonwebtoken");

function ensureAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    return next();
  } catch (error) {
    return res.status(400).json({ error_msg: "invalid token" });
  }
}

function ensureAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.sendStatus(403);
  }
  return next();
}
module.exports = { ensureAuth, ensureAdmin };
