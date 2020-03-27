const goal = require("express").Router();
const utils = require("../utils/helper");
module.exports = goal;

goal.get("/addGoal", (req, res) => {
  res.render("add");
});

goal.post("/addGoal", (req, res) => {
  utils.addGoal(req.body, (err, viewData) => {
    res.redirect("/");
  });
});

goal.post("/edit/:id", (req, res) => {});

goal.post("/delete/:id", (req, res) => {});

// replaced /edit/:id with below (to be more specific)
goal.post("/addProgress/:id", (req, res) => {
  const { params, body } = req;
  utils.addProgress(params.id, body.progressHours, (err, viewData) => {
    if (err) return res.status(500).send(err.message);
    res.redirect(`/goal/${params.id}`);
  });
});

goal.get("/:id", (req, res) => {
  utils.readGoal(req.params.id, (err, viewData) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).render("view", viewData);
  });
});
