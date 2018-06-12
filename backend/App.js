const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
var routes = require("./Routes");
var mongoose = require("mongoose");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS,PUT,PATCH,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/", routes);

app.listen(8080, "localhost", function(err) {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  console.log("Server listening to port 8080");
});
