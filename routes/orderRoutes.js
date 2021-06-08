const router = require("express").Router();
const { ensureAuth } = require("../middlewares/ensureAuth");
const {
  createOrderController,
  getUserOrdersController,
  getSingleUserOrderController,
} = require("../controllers/orderController");

router.post("/", ensureAuth, createOrderController);

router.get("/", ensureAuth, getUserOrdersController);
router.get("/:id", ensureAuth, getSingleUserOrderController);

module.exports = router;
