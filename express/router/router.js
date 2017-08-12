const express = require('express');
const consolidate = require('consolidate');

var server = express();
var routerUser = express.Router();
var routerNews = express.Router();
server.use('/user', routerUser);
server.use('/news', routerNews);
routerUser.get('/1.html',function(req,res){
    res.send('1111');
});
routerNews.get('/2.html', function(req,res){
    res.send('2222');
});

server.listen(3000);
