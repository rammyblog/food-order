const router = require("express").Router();
const {
  getSingleCoupon,
  generateCoupon,
  getCoupons,
} = require("../controllers/couponControllers");
const { ensureAdmin, ensureAuth } = require("../middlewares/ensureAuth");

router.get("/", getCoupons);
router.post("/", ensureAuth, ensureAdmin, generateCoupon);
router.get("/:code", getSingleCoupon);

module.exports = router;
