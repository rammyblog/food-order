const router = require("express").Router();

// Controllers
const {
  registerController,
  loginController,
} = require("../controllers/authControllers");

// @desc To register users
// api/auth/register
router.post("/register", registerController);

// @desc To login a user
// api/auth/login
router.post("/login", loginController);

module.exports = router;
