var mongoose = require ('../DBSchema/DBConfig');
var schema =mongoose.model('employee');

var controller =function(){

  
    this.getOne = (Email) => {
        return new Promise((resolve, reject) => {
            schema.find({Email:Email}).exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }


 

}

module.exports=new controller();