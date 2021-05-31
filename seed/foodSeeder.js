require("dotenv").config();
var Food = require("../models/Food");

var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

var foods = [
  new Food({
    image: "https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg",
    name: "DOUBLE CHEESE MARGHERITA",
    price: 269,
  }),
  new Food({
    image: "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg",
    name: "PEPPY PANEER",

    price: 209,
  }),
  new Food({
    image: "https://www.dominos.co.in/files/items/Paneer_Makhni.jpg",
    name: "PANEER MAKHANI",
    price: 99,
  }),
  new Food({
    image: "https://www.dominos.co.in/files/items/Paneer_Makhni.jpg",
    name: "PANEER MAKHANI",
    price: 99,
  }),
  new Food({
    image: "https://www.dominos.co.in/files/items/Paneer_Makhni.jpg",
    name: "PANEER MAKHANI",
    price: 99,
  }),
  new Food({
    image: "https://www.dominos.co.in/files/items/Paneer_Makhni.jpg",
    name: "PANEER MAKHANI",
    price: 99,
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


