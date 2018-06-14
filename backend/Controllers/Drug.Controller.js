var mongoose=require('../DBSchema/DBConfig');
var drug_schema=mongoose.model('batch');



var DrugController=function(){

this.checkDrug = (Drug) => {
    return new Promise((resolve, reject) => {
        console.log(Drug);
        var Drug_name = new RegExp(["^", Drug, "$"].join(""), "i");
        drug_schema.find({Drug:Drug_name}).then((data) => {
            resolve({status: 200, data: data});
        }).catch(err => {
            reject({status: 500, message: "Error:- " + err});
        })
    })
    }



this.insertBatch=function(data){
    return new Promise(function(resolve,reject){
        var Drugs=drug_schema({
            Drug:data.Drug,
            Exp:data.Exp,
            Md:data.Md,
            Qty:data.Qty
            
        })
        Drugs.save().then(function(){
            resolve({status: 200, message: "Added new Drugs batch"})
        }).catch(err => {
            reject({status:500, message: "Error:- "+err});
        })
    })

}


this.updateBatch = (Drug, data) => {
    return new Promise(function (resolve, reject) {
        drug_schema.update({Drug:Drug},data).then(function(){
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
