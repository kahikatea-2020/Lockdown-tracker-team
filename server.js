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

server.use("/", require("./route/routes"));
server.use("/goal", require("./route/goal"));
