var mongoose = require("../DBSchema/DBConfig");
var orderSchema = mongoose.model('order');

var Controller = function(){

    this.addOrder = function(data){
        return new Promise (function(resolve,reject){
            var order = new orderSchema({
                Order_Id: data.Order_Id,
                Drug_name: data.Drug_name,
                Quantity: data.Quantity,
                Supplier: data.Supplier
            });

            order.save().then(function(){
                resolve({status:200, message:"Payment added"});
            }).catch(function(err){
                reject({status:500, message:"Error"+err});
            })
        })
    }
    

    this.getAll = function(){
        return new Promise(function(resolve,reject){
            orderSchema.find().exec().then(function(data){
                resolve({status:200, orderData:data});
            }).catch(function(err){
                reject({status:500, message:"Error"+err});
            })
        })
    }


}

module.exports=new Controller();