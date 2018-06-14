var Express = require('express');
var router = Express.Router();
var Controller = require("../Controllers/Drug.Controller");


router.post("/batch", function(req, res) {
    Controller.addBatch(req.body)
      .then(function(data) {
        res.status(data.status).send({ message: data.message });
      })
      .catch(function(err) {
        res.status(err.status).send({ message: err.message });
      });
  });
  
  router.get("/batch", function(req, res) {
    Controller.getBatch()
      .then(function(data) {
        res.status(data.status).send({ data: data.Batchdata });
      })
      .catch(function(err) {
        res.status(data.status).send({ message: err.message });
      });
  });

module.exports=router;