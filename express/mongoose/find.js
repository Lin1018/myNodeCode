var mongoose = require('mongoose');

var Model = require('./model');


Model.find({},function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});
