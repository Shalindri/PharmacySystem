var mongoose = require("../DBSchema/DBConfig");
var IssuedSchema = mongoose.model('issue_data');

var Controller = function(){

    this.addIssue = function(data){
        return new Promise (function(resolve,reject){
            var issue = new IssuedSchema({
                Pres_Id: data.Pres_Id,
                Drug_name1: data.Drug_name1,
                Drug_name2: data.Drug_name2,
                Quantity1: data.Quantity1,
                Quantity2: data.Quantity2
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

    this.getIssue = function(Pres_Id){
        return new Promise(function(resolve,reject){
            IssuedSchema.find({_Pres_Id:Pres_Id}).exec().then(function(data){
                resolve({status:200,SearchedData:data});
            }).catch(function(err){
                reject({status:500,message:"Error"+err});
            })
        })

    }

    this.delete = function(Pres_Id) {
		return new Promise(function (resolve, reject) {
			IssuedSchema.remove({_Pres_Id:Pres_Id}).then(function() {
                resolve({'status': 200, 'message':'delete user'});
			}).catch(function(err) {
                reject({'status': 404, 'message':'err:-'+err});
            })
		})
	}


}

module.exports=new Controller();