const express = require("express");
const foodRouter = require("./foodRouter.js");
const foodCategoryRouter = require("./foodCategoryRouter.js");

const app = express();

app.use("/foods/", foodRouter);
app.use("/foodcategories/", foodCategoryRouter);

module.exports = app;