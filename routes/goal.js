const express = require("express");

const utils = require("./utils");

const routes = express.Router();

module.exports = goal;

routes.get("/goal/:id", (req, res) => {
  res.send(`[test] Goal: ${req.params.id}`);
  // res.redirect("goal.html");
});
