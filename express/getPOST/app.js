const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const url = require('url');

http.createServer(function(req,res){
    if(req.url == '/favicon.ico'){
        return;
    }
    var obj = url.parse(req.url,true);
    var pathName = obj.pathname;
    var get = obj.query;

    var postData = '';
    req.on('data',function(chunk){
        postData += chunk;
    })
    req.on('end',function(){
        var post = querystring.parse(postData);
        console.log(pathName,get, post);
    });

    var fileName = './www' + pathName;
    fs.readFile(fileName,function(err,data){
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    });

}).listen(3000);
