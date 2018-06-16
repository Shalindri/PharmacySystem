var express=require('express');
var router=express.Router();
var EController=require('../Controllers/Emp.Controller');


router.post('/',function(req,res){
    EController.insertduty(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/', (req, res) => {
    EController.get().then(data => {
        res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});




module.exports=router;