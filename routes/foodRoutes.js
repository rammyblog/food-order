const router = require("express").Router();
const { getAllFoods } = require("../controllers/foodControllers");

router.get("/", getAllFoods);

module.exports = router;
