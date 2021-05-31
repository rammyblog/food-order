const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide the food name"],
    min: 3,
  },
  image: {
    type: String,
    match: [
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
      "Please provide a valid image url",
    ],
  },
  price: {
    type: Number,
    required: [true, "Please provide the price"],
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Food", foodSchema);


