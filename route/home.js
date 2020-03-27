const routes = require("express").Router();
const utils = require("../utils/helper");

module.exports = routes;

routes.get("/", (req, res) => {
  utils.readAllGoal((err, viewData) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).render("home", viewData);
  });
});
