require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes");

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
