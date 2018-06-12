var mongoose = require("../DBSchema/DBConfig");
var PaymentSchema = mongoose.model('payment_data');


var Controller = function(){

    this.addPayment = function(data){
        return new Promise (function(resolve,reject){
            var Payment = new PaymentSchema({
                BillNo: data.BillNo,
                Pres_Id: data.Pres_Id,
                PayDate: data.PayDate,
                Total: data.Total
            });

            Payment.save().then(function(){
                resolve({status:200, message:"Payment added"});
            }).catch(function(err){
                reject({status:500, message:"Error"+err});
            })
        })
    }
    

    this.getAll = function(){
        return new Promise(function(resolve,reject){
            PaymentSchema.find().exec().then(function(data){
                resolve({status:200, PaymentData:data});
            }).catch(function(err){
                reject({status:500, message:"Error"+err});
            })
        })
    }

    
}

module.exports=new Controller();