const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cart: { type: Object, required: true },
  coupon: { type: Schema.Types.ObjectId, ref: "Coupon" },
  reference: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

module.exports = model("Order", orderSchema);
