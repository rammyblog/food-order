const Food = require("../models/Food");

const getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find({})
    } catch (error) {
        
    }
};

module.exports = { getAllFoods };
