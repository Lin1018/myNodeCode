const http = require('http');
const querystring = require('querystring');

http.createServer(function(req,res){
    var postData = '';
    req.on('data',function(chunk){
        postData += chunk;
    });
    req.on('end',function(){
        var json = querystring.parse(postData);
        console.log(json);
        res.end('1111');
    });

}).listen(3000);
