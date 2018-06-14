var issuecontroller=require('../Controllers/Issue.controller');
var express=require('express');
var router=express.Router();


router.get('/:Pid', (req, res) => {
    issuecontroller.getPrescription(req.params.Pid).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.post('/',function(req,res){
    issuecontroller.insert(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


module.exports=router;