var mongoose=require('../DBSchema/DBConfig');
var issued_schema=mongoose.model('issue_data');



var IssuedDrugController=function(){


this.insertIssuedData=function(data){
    return new Promise(function(resolve,reject){
        var i_drugs=issued_schema({
            Pres_Id:data.Pres_Id,
            Drug_name1:data.Drug_name1,
            Drug_name2:data.Drug_name2,
            Issue_Date:new Date(),
            Quantity1:data.Quantity1,
            Quantity2:data.Quantity2
        })
        i_drugs.save().then(function(){
            resolve({status: 200, message: "Added new Issued Drugs"})
        }).catch(err => {
            reject({status: 500, message: "Error:- "+err});
        })
    })

}
}


module.exports=new IssuedDrugController();
