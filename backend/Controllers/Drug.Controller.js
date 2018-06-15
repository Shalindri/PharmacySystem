var mongoose=require('../DBSchema/DBConfig');
var drug_schema=mongoose.model('batch');



var DrugController=function(){

this.checkDrug = (Brand_name) => {
    return new Promise((resolve, reject) => {
        console.log(Brand_name);
        var Drug_name = new RegExp(["^", Brand_name, "$"].join(""), "i");
        drug_schema.find({Brand_name:Drug_name}).then((data) => {
            resolve({status: 200, data: data});
        }).catch(err => {
            reject({status: 500, message: "Error:- " + err});
        })
    })
    }



this.insertBatch=function(data){
    return new Promise(function(resolve,reject){
        var Drugs=drug_schema({
            Brand_name:data.Brand_name,
            Exp:data.Exp,
            Mfg:data.Mfg,
            Qty:data.Qty
            
        })
        Drugs.save().then(function(){
            resolve({status: 200, message: "Added new Drugs batch"})
        }).catch(err => {
            reject({status:500, message: "Error:- "+err});
        })
    })

}


this.updateBatch = (Brand_name, data) => {
    return new Promise(function (resolve, reject) {
        drug_schema.update({Brand_name:Brand_name},data).then(function(){
            resolve({status:200,message:"Updated Batch successfully"});
        }).catch(function(err){
            reject({status:404,message:"Error "+err})
        })
    })
}


this.getAll = () => {
    return new Promise((resolve, reject) => {
        drug_schema.find().exec().then((data) => {
            resolve({status: 200, data: data});
        }).catch(err => {
            reject({status: 500, message: "Error:- " + err});
        })
    })
}

}


module.exports=new DrugController();
