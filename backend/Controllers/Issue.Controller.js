var mongoose=require('../DBSchema/DBConfig');
var pres_schema=mongoose.model('pres_data');



var IssueController=function(){

this.getPrescription = (Pid) => {
    return new Promise((resolve, reject) => {
        console.log(Pid);
        var PID = new RegExp(["^", Pid, "$"].join(""), "i");
        pres_schema.find({Pid:PID}).then((data) => {
            resolve({status: 200, data: data});
        }).catch(err => {
            reject({status: 500, message: "Error:- " + err});
        })
    })
    }



this.insert=function(data){
    return new Promise(function(resolve,reject){
        var Prescription=pres_schema({
            Pid:data.Pid,
            Patient_name:data.Patient_name,
            Pres_Id:data.Pres_Id,
            Create_Date:new Date(),
            Drug_type1:data.Drug_type1,
            Drug_type2:data.Drug_type2,
            Dosage:data.Dosage,
            Frequency:data.Frequency,
            Period:data.Period

        })
        Prescription.save().then(function(){
            resolve({status: 200, message: "Added new Prescription"})
        }).catch(err => {
            reject({status: 500, message: "Error:- "+err});
        })
    })

}

this.getAllPres = () => {
    return new Promise((resolve, reject) => {
        pres_schema.find().exec().then((data) => {
            resolve({status: 200, data: data});
        }).catch(err => {
            reject({status: 500, message: "Error:- " + err});
        })
    })
}


}


module.exports=new IssueController();
