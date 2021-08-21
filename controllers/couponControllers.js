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
const getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({});
    return res.status(200).json(coupons);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error_msg: error.message });
  }
};


const getSingleCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOne({ _id: req.params.id });
    if (!coupon) {
      return res.status(404).json({ error_msg: "Coupon not found" });
    }
    return res.status(200).json(coupon);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error_msg: error.message });
  }
};

// Check from and to date
const generateCoupon = async (req, res) => {
  try {
    await handleValidation(req.body, "coupon");
    const { code } = req.body;
    const codeExists = await Coupon.findOne({ code });
    if (codeExists) {
      return res.status(400).json({ error_msg: "Coupon code already exists" });
    }
    if(req.body.fromDate > req.body.toDate){
      return res.status(400).json({ error_msg: "Redeem from date cannot be greater than redeem to date" });
    }
    const coupon = new Coupon(req.body);
    const savedCoupon = await coupon.save();
    return res.status(201).json({ coupon: savedCoupon });
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};


const editCoupon = async (req, res) => {
  try {
    await handleValidation(req.body, "coupon");
   const coupon = await Coupon.findOne({ _id: req.params.id });
   const { code } = req.body;
   if(code !== coupon.code){
     const codeExists = await Coupon.findOne({ code });
     if (codeExists) {
      return res.status(400).json({ error_msg: "Coupon code already exists" });
    }
  }else{
    delete req.body.code
  }

    if(req.body.fromDate > req.body.toDate){
      return res.status(400).json({ error_msg: "Redeem from date cannot be greater than redeem to date" });
    }
    const editedCoupon = await Coupon.findOneAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).json({ coupon: editedCoupon });
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};

module.exports = { getCoupons, getSingleCoupon, generateCoupon, editCoupon };
