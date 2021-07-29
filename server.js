require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const path = require("path");

// Routes
const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const couponRoutes = require("./routes/couponRoutes");

// Connect to mongo db
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan("tiny"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/coupons", couponRoutes);

let url;

app.get("*", (req, res, next) => {
  url = req.originalUrl;
  next();
});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  // Set static folder
  console.log(url);
  url === "/dashboard"
    ? app.use(express.static("admin/build"))
    : app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    if (req.originalUrl === "/dashboard") {
      res.sendFile(path.resolve(__dirname, "admin", "build", "index.html"));
    } else {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    }
  });
}

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
