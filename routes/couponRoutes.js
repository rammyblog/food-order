const router = require("express").Router();
const {
  getSingleCoupon,
  generateCoupon,
  getCoupons,
  editCoupon,
  getSingleCouponByCode
} = require("../controllers/couponControllers");
const { ensureAdmin, ensureAuth } = require("../middlewares/ensureAuth");

router.get("/", getCoupons);
router.post("/", ensureAuth, ensureAdmin, generateCoupon);
router.put("/:id", ensureAuth, ensureAdmin, editCoupon);
router.get("/:id", getSingleCoupon);
router.get('/code/:code', getSingleCouponByCode)


module.exports = router;
