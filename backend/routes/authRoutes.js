const router = require("express").Router();

// Controllers
const { registerController } = require("../controllers/authControllers");

// @desc To register users
// api/auth/register
router.post("/register", registerController);

module.exports = router;
