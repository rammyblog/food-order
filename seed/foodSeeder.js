require("dotenv").config();
var Food = require("../models/Food");

var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

var foods = [
  new Food({
    image:
      "https://res.cloudinary.com/rammy/image/upload/v1623193814/foodo/1117.jpg",
    name: "BOILED PLANTAIN + EFO RIRO",
    price: 1600,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/rammy/image/upload/v1623193872/foodo/1232.jpg",
    name: "FRIED RICE + BEEF + FRIED PLANTAIN",
    price: 1650,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/rammy/image/upload/v1623193924/foodo/945.jpg",
    name: "JOLLOF SPAGHETTI + CHICKEN",
    price: 1900,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/rammy/image/upload/v1623193987/foodo/946.jpg",
    name: "BASMATI FRIED RICE + CHICKEN",
    price: 2200,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/rammy/image/upload/v1623194027/foodo/947.jpg",
    name: "BASMATI FRIED RICE + CHICKEN + FRIED PLANTAIN",
    price: 2500,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/rammy/image/upload/v1623194083/foodo/1092.jpg",
    name: "BEANS PORRIDGE + PLANTAIN + BEEF",
    price: 1500,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/rammy/image/upload/v1623194131/foodo/1289.jpg",
    name: "JOLLOF RICE + GRILLED / FRIED CHICKEN + PLANTAIN",
    price: 2550,
  }),
  new Food({
    image:
      "https://res.cloudinary.com/rammy/image/upload/v1623194231/foodo/939.jpg",
    name: "EWA AGANYIN & SAUCE + PLANTAIN + PONMO",
    price: 1550,
  }),
];

var done = 0;
for (var i = 0; i < foods.length; i++) {
  foods[i].save(function (err, result) {
    done++;
    if (done === foods.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
