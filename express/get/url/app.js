const http = require('http');
const querystring = require('querystring');
const url = require('url');

http.createServer(function(req,res){
    if(req.url.indexOf('?') != -1){
        var pathname = url.parse(req.url,true).pathname;
        var query = url.parse(req.url).query;
        console.log(pathname,query);

        res.write('aaa');
        res.end();
    }else{
        return;
    }

}).listen(3001);
