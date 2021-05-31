const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  user: {
    type: Schema.types.ObjectId,
    ref: "User",
    required: true,
  },
  cart: { type: Object, required: true },
  address: { type: String, required: true },
  paymentId: { type: String, required: true },
});

module.exports = model("Order", orderSchema);
