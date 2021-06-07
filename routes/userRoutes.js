const router = require("express").Router();
const { ensureAuth } = require("../middlewares/ensureAuth");
const {getCurrentUserController} = require('../controllers/userControllers')
router.get("/", ensureAuth, getCurrentUserController);

module.exports = router;
