const Food = require("../models/Food");

const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find({ available: true });
    return res.status(200).json(foods);
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};

module.exports = { getAllFoods };
