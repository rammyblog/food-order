require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Mongodb connect success");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
