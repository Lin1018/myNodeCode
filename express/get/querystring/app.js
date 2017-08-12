const http = require('http');
const querystring = require('querystring');

http.createServer(function(req,res){
    if(req.url.indexOf('?') != -1){
        var arr = req.url.split('?');
        var json = querystring.parse(arr[1]);
        console.log(arr[0],json);
        res.write('aaa');
        res.end();
    }else{
        return;
    }

}).listen(3001);
