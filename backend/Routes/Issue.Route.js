var Express = require('express');
var router = Express.Router();
var IssueController = require("../Controllers/Issue.Controller");

router.post('/', function(req,res){
    IssueController.addIssue(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(function(err){
        res.status(data.status).send({message:err.message});
    })
})


router.get('/',function(req,res){
    IssueController.getAll().then(function(data){
        res.status(data.status).send({data:data.IssuedData});
    }).catch(function(err){
        res.status(data.status).send({message:err.message});
    })
})

module.exports=router;