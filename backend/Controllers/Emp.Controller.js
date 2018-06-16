var mongoose = require ('../DBSchema/DBConfig');
var schema =mongoose.model('employee');
var dutyschema =mongoose.model('duty');

var controller =function(){

    this.insert=function(data){
        return new Promise(function(resolve,reject){
            var emp=schema({
                Emp_Id:data.Emp_Id,
                Type:data.Type,
                Emp_name:data.Emp_name,
                Email:data.Email,
                Password:data.Password,
                 Address:data.Address,
                Telephone:data.Telephone,
                Date:data.Date
               
            })
            emp.save().then(function(){
                resolve({status: 200, message: "Added a new employee"})
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })
    }

    
    this.getOne = (Emp_Id) => {
        return new Promise((resolve, reject) => {
            console.log(Emp_Id);
            var emp = new RegExp(["^", Emp_Id, "$"].join(""), "i");
            schema.find({Emp_Id:emp}).then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
 
    this.insertduty=function(data){
        return new Promise(function(resolve,reject){
            var empduty=dutyschema({
                Duty_Id:data.Duty_Id,
                Emp_Id:data.Emp_Id,
                Date:data.Date,
                TimeTo:data.TimeTo,
                TimeFrom:data.TimeFrom,
               
               
            })
            empduty.save().then(function(){
                resolve({status: 200, message: "Added a new duty"})
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })
    }

    
    this.getOne = (Emp_Id) => {
        return new Promise((resolve, reject) => {
            console.log(Emp_Id);
            var emp = new RegExp(["^", Emp_Id, "$"].join(""), "i");
            schema.find({Emp_Id:emp}).then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
 

    this.get = () => {
        return new Promise((resolve, reject) => {

            dutyschema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.update = function(id, updateData) {
		return new Promise((resolve, reject) => {
		  schema.update({_Emp_Id: id}, updateData).then(() => {
                resolve({'status': 200, 'message':'update user'});
			}).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
		})
	}

}

module.exports=new controller();