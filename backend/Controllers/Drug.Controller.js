var mongoose = require("../DBSchema/DBConfig");
var drugSchema = mongoose.model("drug");

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
          resolve({ status: 200, message: "Drug added " });
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
};

module.exports = new Controller();
