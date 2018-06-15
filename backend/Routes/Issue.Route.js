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

router.get('/:Pres_Id', function(req,res) {
    IssueController.getIssue(req.params.id).then(function(data) {
        res.status(data.status).send(data);
    }).catch(function(err) {
        res.status(err.status).send(err.message);
    })
});

router.delete('/:Pres_Id', function(req,res) {
    IssueController.delete(req.params.id).then(function(response) {
        res.status(response.status).send(response);
    }).catch(function(err) {
        res.status(err.status).send(err.message);
    })
})

module.exports=router;