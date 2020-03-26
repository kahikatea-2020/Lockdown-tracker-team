const router = require("express").Router();

module.exports = router;

router.get("/", (req, res) => {
  res.render("lists");
});
router.get("/add", (req, res) => {
  res.render("addTracker");
});
