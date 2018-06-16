var mongoose = require ('../DBSchema/DBConfig');
var schema =mongoose.model('employee');

var controller =function(){

  
    this.getOne = (Password) => {
        return new Promise((resolve, reject) => {
            schema.find({Password:Password}).exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

  
/*
    this.getOne = (email,password) => {
        return new Promise((resolve, reject) => {
            schema.find({Email:email,Password:password}).exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }*/

 

}

module.exports=new controller();