const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cart: { type: Object, required: true },
  reference: { type: String, required: true },
});

module.exports = model("Order", orderSchema);
