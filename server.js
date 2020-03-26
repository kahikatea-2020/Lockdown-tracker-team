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
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));
server.use("/test", require("./route/lists"));

server.get("/", (req, res) => {
  res.send("Lockdown Goal Tracker Homepage");
});
