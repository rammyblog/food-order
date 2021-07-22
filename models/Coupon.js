const { Schema, model } = require("mongoose");

const couponSchema = new Schema({
  code: { type: String, required: true, min: 3, unique: true },
  description: { type: String },
  percent_off: { type: Number, required: true },
  available: { type: Boolean, required: true, default: true },
  redeem_from: { type: Date, required: true },
  redeem_to: { type: Date, required: true },
});

module.exports = model("Coupon", couponSchema);
