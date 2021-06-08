const router = require("express").Router();
const { ensureAuth } = require("../middlewares/ensureAuth");
const {
  createOrderController,
  getUserOrdersController,
} = require("../controllers/orderController");

router.post("/", ensureAuth, createOrderController);

router.get("/", ensureAuth, getUserOrdersController);

module.exports = router;
