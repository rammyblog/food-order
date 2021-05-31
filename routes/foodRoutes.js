const router = require("express").Router();
const { getAllFoods } = "../controllers/foodControllers";

router.get("/foods", getAllFoods);

module.exports = router;
