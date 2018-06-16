var Express = require("express");
var router = Express.Router();
var Controller = require("../Controllers/Drug.Controller");
var mongoose = require("../DBSchema/DBConfig");

//Drug routes

router.post("/drugs", function(req, res) {
  Controller.addDrug(req.body)
    .then(function(data) {
      res.status(data.status).send({ message: data.message });
    })
    .catch(function(err) {
      res.status(err.status).send({ message: err.message });
    });
});

router.get("/drugs", function(req, res) {
  Controller.getDrugs()
    .then(function(data) {
      res.status(data.status).send({ data: data.Drugdata });
    })
    .catch(function(err) {
      res.status(data.status).send({ message: err.message });
    });
});

//batch routes
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
  if (req.query.d) {
    console.log("inside in the exp query" + req.query.d);
    Controller.getDiff(req.query.d)
      .then(function(data) {
        res.status(data.status).send({ data: data.filterdata });
      })
      .catch(function(err) {
        res.status(data.status).send({ message: err.message });
      });
  } else {
    Controller.getBatch()
      .then(function(data) {
        res.status(data.status).send({ data: data.Batchdata });
      })
      .catch(function(err) {
        res.status(data.status).send({ message: err.message });
      });
  }
});
//update Drug
router.put("/drugs/:Brand_name", function(req, res) {
  Controller.updateDrug(req.params.Brand_name, req.body)
    .then(function(data) {
      res.status(data.status).send(data.message);
    })
    .catch(function(err) {
      res.status(err.status).send(err.message);
    });
});

router.delete("/drugs/:Brand_name", function(req, res) {
  Controller.deleteDrug(req.params.Brand_name)
    .then(function(data) {
      res.status(data.status).send(data.message);
    })
    .catch(function(err) {
      res.status(err.status).send(err.message);
    });
});


//Add Supplier
router.post("/supplier", function(req, res) {
  Controller.addSup(req.body)
    .then(function(data) {
      res.status(data.status).send({ message: data.message });
    })
    .catch(function(err) {
      res.status(err.status).send({ message: err.message });
    });
});

module.exports = router;
