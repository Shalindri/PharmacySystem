var Express = require("express");
var router = Express.Router();
var Controller = require("../Controllers/Drug.Controller");
var mongoose = require("../DBSchema/DBConfig");

router.post("/", function(req, res) {
  Controller.addDrug(req.body)
    .then(function(data) {
      res.status(data.status).send({ message: data.message });
    })
    .catch(function(err) {
      res.status(err.status).send({ message: err.message });
    });
});

module.exports = router;
