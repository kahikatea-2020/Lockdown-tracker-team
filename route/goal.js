const goal = require("express").Router();
const utils = require("../utils/helper");
module.exports = goal;

goal.get("/:id", (req, res) => {
  utils.readGoal(req.params.id, (err, viewData) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).render("edit", viewData);
  });
});

goal.post("/edit/:id", (req, res) => {
  const progHours = req.body.progressHours;
  utils.editGoal(req.params.id, progHours, (err, viewData) => {
    if (err) return res.sen(err.message);
    res.redirect(`../${req.params.id}`);
  });
});
