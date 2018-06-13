var Express = require('express');
var router = Express.Router();
var drugController = require("../Controllers/Drug.Controller");

router.post('/', function(req,res){
    drugController.addOrder(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(function(err){
        res.status(data.status).send({message:err.message});
    })
})


router.get('/',function(req,res){
    drugController.getAll().then(function(data){
        res.status(data.status).send({data:data.orderData});
    }).catch(function(err){
        res.status(data.status).send({message:err.message});
    })
})

module.exports=router;