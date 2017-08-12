var express = require('express');
var router = express.Router();
var models = require('../models/user.server.model.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user',function(req,res,next){
    var user = new models({
        user:'lin',
        password:'lin123'
    });
    user.save(function(err){
        if(err){
            console.log(err);
            return;
        }

        models.findOne(function(err,data){
            if(err){
                res.end('Error');
                return;
            }
            res.json(data);
        });
    });


});


module.exports = router;
