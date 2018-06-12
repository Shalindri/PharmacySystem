var mongoose = require("../DBSchema/DBConfig");
var IssuedSchema = mongoose.model('issue_data');

var Controller = function(){

    this.addIssue = function(data){
        return new Promise (function(resolve,reject){
            var issue = new IssuedSchema({
                Pres_Id: data.Pres_Id,
                Drug_name: data.Drug_name,
                Issue_Date: data.Issue_Date,
                Quantity: data.Quantity,
                unit_price: data.unit_price
            });

            issue.save().then(function(){
                resolve({status:200, message:"Payment added"});
            }).catch(function(err){
                reject({status:500, message:"Error"+err});
            })
        })
    }
    

    this.getAll = function(){
        return new Promise(function(resolve,reject){
            IssuedSchema.find().exec().then(function(data){
                resolve({status:200, IssuedData:data});
            }).catch(function(err){
                reject({status:500, message:"Error"+err});
            })
        })
    }


}

module.exports=new Controller();