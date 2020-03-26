const express = require("express");
const hbs = require("express-handlebars");

const routes = require("./routes/routes");
const goal = require("./routes/goal");

const server = express();

module.exports = server;

server.engine(
  "hbs",
  hbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);
server.set("view engine", "hbs");
server.use(express.urlencoded({ extended: false }));
server.use(express.static("public"));

server.get("/", (req, res) => {
  res.render();
});
server.use("/goals/:id", goal);

/* STRETCH
server.get("/goal/edit/:id", (req, res) => {
  res.redirect("goal.html");
});
*/
