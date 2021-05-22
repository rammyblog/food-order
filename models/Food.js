const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  image: {
    type: String,
    // change default
    default: "https://google.com",
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

module.exports = model("Food", foodSchema);
