var express=require('express');
var router=express.Router();

var emailController=require('../Controllers/Mail.Controller');



router.get('/:Email', (req, res) => {
    emailController.getOne(req.params.Email).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});



module.exports=router;