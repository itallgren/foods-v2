const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const apiRouter = require("./routes/api.js");

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once("open", function () {
  console.log("DB connected successfully");
});

const app = express();

app.use(cors());

// Routing
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;