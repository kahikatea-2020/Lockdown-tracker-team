const express = require("express");
const hbs = require("express-handlebars");

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

server.get("/", (req, res) => {
  res.send("Lockdown Goal Tracker");
});
