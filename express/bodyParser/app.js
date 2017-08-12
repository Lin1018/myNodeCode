const express = require('express');
const es = require('express-static');
const bodyParse = require('./model/body-parser');
var server = express();

server.use(bodyParse);
server.use('/login',function(req,res){
    console.log(req.body);
});
server.use(es('./www'));
server.listen(3000);
console.log('3000');
