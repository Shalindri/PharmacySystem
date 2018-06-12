var Express = require('express');
var router = Express.Router();
var Controller = require("../Controllers/Payment.Controller");


router.post('/', function(req,res){
    Controller.addPayment(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(function(err){
        res.status(data.status).send({message:err.message});
    })
})

router.get('/',function(req,res){
    Controller.getAll().then(function(data){
        res.status(data.status).send({data:data.PaymentData});
    }).catch(function(err){
        res.status(data.status).send({message:err.message});
    })
})

module.exports=router;