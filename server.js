const express = require("express");
const dotenv = require("dotenv");
const config = require("./config/app");

const app = express();
app.set("config", config); // the system configrationsx

app.set("port", process.env.DEV_APP_PORT);
app.use(require("./src/Routes"));
app.listen(3000);
module.exports = app;
