var drugcontroller=require('../Controllers/Drug.controller');
var express=require('express');
var router=express.Router();


router.get('/:Drug', (req, res) => {
    drugcontroller.checkDrug(req.params.Drug).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.post('/',function(req,res){
    drugcontroller.insertBatch(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


router.put('/:Drug',function(req,res){
    drugcontroller.updateBatch(req.params.Drug,req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});


router.get('/', (req, res) => {
    drugcontroller.getAll().then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});






module.exports=router;