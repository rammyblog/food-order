const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  foods: [
    {
      type: Schema.types.ObjectId,
      ref: "Food",
    },
  ],
  user: {
    type: Schema.types.ObjectId,
    ref: "User",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unitAmount: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

module.exports = model("Order", orderSchema);
