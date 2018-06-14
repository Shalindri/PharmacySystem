var issuedDrugcontroller=require('../Controllers/IssuedData.Controller');
var express=require('express');
var router=express.Router();



router.post('/',function(req,res){
    issuedDrugcontroller.insertIssuedData(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


module.exports=router;