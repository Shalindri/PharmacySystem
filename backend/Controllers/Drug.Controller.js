var mongoose = require("../DBSchema/DBConfig");
var drugSchema = mongoose.model("drug");
var batchSchema = mongoose.model("batch");
var supSchema = mongoose.model("sup");

var Controller = function() {
  this.addDrug = function(data) {
    return new Promise(function(resolve, reject) {
      var Drug = new drugSchema({
        Brand_name: data.Brand_name,
        Generic_name: data.Generic_name,
        Dosage: data.Dosage,
        Category: data.Category,
        Type: data.Type,
        Unit_price: data.Unit_price,
        Selling_price: data.Selling_price,
        Danger_level: data.Danger_level,
        Reorder_level: data.Reorder_level,
        Supplier: data.Supplier
      });
      //save Drug details. save function in schema model
      Drug.save()
        .then(function() {
          resolve({ status: 200, message: "A new Drug added " });
        })
        .catch(function(err) {
          reject({ status: 500, message: "Error: " + err });
        });
    });
  };

  this.getDrugs = function() {
    return new Promise(function(resolve, reject) {
      drugSchema
        .find()
        .exec()
        .then(function(data) {
          resolve({ status: 200, Drugdata: data });
        })
        .catch(function(err) {
          reject({ status: 404, message: "No Drug data" });
        });
    });
  };

  //batch controllers

  this.addBatch = function(data) {
    return new Promise(function(resolve, reject) {
      var Batch = new batchSchema({
        Brand_name: data.Brand_name,
        Batch_number: data.Batch_number,
        Batch_type: data.Batch_type,
        Content: data.Content,
        No_packages: data.No_packages,
        No_items: data.No_items,
        Qty: data.Qty,
        Mfg: data.Mfg,
        Exp: data.Exp
      });

      Batch.save()
        .then(function() {
          resolve({ status: 200, message: "A new Batch added " });
        })
        .catch(function(err) {
          reject({ status: 500, message: "Error: " + err });
        });
    });
  };

  this.getBatch = function() {
    return new Promise(function(resolve, reject) {
      batchSchema
        .find()
        .exec()
        .then(function(data) {
          resolve({ status: 200, Batchdata: data });
        })
        .catch(function(err) {
          reject({ status: 404, message: "No Batch data" });
        });
    });
  };

  ////get the all the drugs which are
  //expired

  this.getDiff = function(d) {
    console.log("inside in ***!! new controller Date:");

    console.log("formated Date:");
    return new Promise(function(resolve, reject) {
      batchSchema
        .find({
          Exp: {
            $lt: Mfg
          }
        })
        .then(function(data) {
          resolve({ status: 200, filterdata: data });
        })
        .catch(function(err) {
          reject({ status: 404, message: "No Filter Batch data" });
        });
    });
  };

  this.updateDrug = function(bname, drugDetails) {
    return new Promise(function(resolve, reject) {
      drugSchema
        .update({ Brand_name: bname }, drugDetails)
        .then(function(data) {
          resolve({ status: 200, message: "Drug updated" });
        })
        .catch(function(reason) {
          reject({ status: 500, message: "Error occured" + reason });
        });
    });
  };

  this.deleteDrug = function(_id) {
    return new Promise(function(resolve, reject) {
      drugSchema
        .remove({ _id: _id })
        .then(function() {
          resolve({ status: 200, message: "Drug deleted" });
        })
        .catch(function(reason) {
          reject({ status: 500, message: "Error occured" + reason });
        });
    });
  };

  //Supplier Controller

  this.addSup = function(data) {
    return new Promise(function(resolve, reject) {
      var sup = new supSchema({
        Supplier: data.Supplier,
        Email: data.Email,
        Address: data.Address,
        Tel: data.Tel
      });

      sup
        .save()
        .then(function() {
          resolve({ status: 200, message: "A new Sup added " });
        })
        .catch(function(err) {
          reject({ status: 500, message: "Error: " + err });
        });
    });
  };
};

module.exports = new Controller();
