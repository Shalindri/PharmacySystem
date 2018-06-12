var mongoose = require("../DBSchema/DBConfig");
var drugSchema = mongoose.model("drug");

var Controller = function() {
  this.addDrug = function(data) {
    return new Promise(function(resolve, reject) {
      var Drug = new DrugSchema({
        id: data.id,
        name: data.name,

        price: data.price
      });
      //save food details. save function in schema model
      FoodItem.save()
        .then(function() {
          resolve({ status: 200, message: "Food item added " });
        })
        .catch(function(err) {
          reject({ status: 500, message: "Error: " + err });
        });
    });
  };
};
