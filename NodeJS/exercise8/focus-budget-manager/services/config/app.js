const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  consign = require("consign"),
  cors = require("cors"),
  passport = require("passport"),
  passportConfig = require("./passport")(passport),
  jwt = require("jsonwebtoken"),
  config = require("./index.js"),
  database = require("./database")(mongoose, config);

app.set("budgetsecret", config.secret);
consign({ cwd: "services" })
  .include("BudgetManagerAPI/app/setup")
  .then("BudgetManagerAPI/app/api")
  .then("BudgetManagerAPI/app/routes")
  .into(app);
module.exports = app;
