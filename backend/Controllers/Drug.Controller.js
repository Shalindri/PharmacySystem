var mongoose = require("../DBSchema/DBConfig");
var batchSchema = mongoose.model('batch');

var Controller = function(){

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


}

module.exports=new Controller();