const express = require("express");
const foodRouter = require("./foodRouter.js");

const app = express();

app.use("/foods/", foodRouter);

module.exports = app;