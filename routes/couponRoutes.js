const router = require("express").Router();

router.get("/", (req, res) => {
  return res.json({ hello: "hwllo" });
});

module.exports = router;
