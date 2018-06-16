var express=require('express');
var router=express.Router();
var EmpController=require('../Controllers/Emp.Controller');


router.post('/',function(req,res){
    EmpController.insert(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});
router.get('/', (req, res) => {
    EmpController.get().then(data => {
        res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});


router.get('/:Emp_Id', (req, res) => {
    EmpController.getOne(req.params.Emp_Id).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});




router.put('/:Emp_Id', (req, res) => {
    EmpController.update(req.params.id, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

module.exports=router;