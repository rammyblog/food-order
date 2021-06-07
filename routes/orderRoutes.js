const router = require("express").Router();
const { ensureAuth } = require("../middlewares/ensureAuth");
const { createOrderController } = require("../controllers/orderController");

router.post("/", ensureAuth, createOrderController);

module.exports = router;
