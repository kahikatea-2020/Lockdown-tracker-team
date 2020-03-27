const goal = require("express").Router();
const utils = require("../utils/helper");
module.exports = goal;

goal.get("/:id", (req, res) => {
  utils.readGoal(req.params.id, (err, viewData) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).render("view", viewData);
  });
});

goal.post("/addGoal/:id", (req, res) => {
  const progHours = req.body.progressHours;
  utils.addProgress(req.params.id, progHours, (err, viewData) => {
    if (err) return res.sen(err.message);
    res.redirect(`../${req.params.id}`);
  });
});

goal.post("/addProgress/:id", (req, res) => {
  const { params, body } = req;
  utils.addProgress(params.id, body.progressHours, (err, viewData) => {
    if (err) return res.status(500).send(err.message);
    res.redirect(`/goal/${params.id}`);
  });
});
