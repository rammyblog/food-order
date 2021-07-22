const { Schema, model } = require("mongoose");

const couponSchema = new Schema({
  code: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  available: { type: Boolean, required: true, default: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
});

module.exports = model("Coupon", couponSchema);
