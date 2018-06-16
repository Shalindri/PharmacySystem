var express=require('express');
var router=express.Router();

var LogController=require('../Controllers/Pass.Controller');




router.get('/:Password', (req, res) => {
    LogController.getOne(req.params.Password).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});



/*router.get('/:Email/:Password', (req, res) => {
    LogController.getOne(req.params.email,req.params.password).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});
*/

module.exports=router;