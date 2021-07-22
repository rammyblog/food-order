const Coupon = require("../models/Coupon");
const { couponValidator } = require("../utils/validation");

const validationObject = {
  coupon: couponValidator,
};

const handleValidation = (body, type) => {
  const { error } = validationObject[type](body);
  if (error) {
    throw Error(error.details[0].message);
  }
};
const getCoupons = async(req, res) => {
  try {
    const coupons = await Coupon.find({});
    return res.status(200).json(coupons);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error_msg: error.message });
  }
};

const getSingleCoupon = async(req, res) => {
  try {
    const coupon = await Coupon.findOne({ code: req.params.code });
    return res.status(200).json(coupon);
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};

const generateCoupon = async(req, res) => {
  try {
    await handleValidation(req.body, "coupon");
    const { code } = req.body;
    const codeExists = await Coupon.findOne({ code });
    if (codeExists) {
      return res.status(400).json({ error_msg: "Coupon code already exists" });
    }
    const coupon = new Coupon(req.body);
    const savedCoupon = await coupon.save();
    return res.status(201).json({ coupon: savedCoupon });
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};

module.exports = { getCoupons, getSingleCoupon, generateCoupon };
