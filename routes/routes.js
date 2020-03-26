/*
GET Home route '/'  home.hbs
'/' redirects to '/home'

GET edit page '/goal/edit/:id' goalEdit.hbs [STRETCH]
POST setting new goals
res.render(goalEdit.hbs, user.json(specific goal based on id))

GET Each goal '/goal/:id' goal.hbs
res.render(goal.hbs, user.json(specific goal based on id)))
*/
const express = require("express");

const routes = express.Router();

module.exports = routes;

routes.get("/", (req, res) => {
  res.send("testing Home route");
  // res.redirect("home.html");
});
