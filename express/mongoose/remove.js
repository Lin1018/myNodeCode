var mongoose = require('mongoose');

var Model = require("./model");


Model.remove({},function(err,data){
    console.log(data);
});
