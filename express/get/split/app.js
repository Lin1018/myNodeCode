const http = require('http');

http.createServer(function(req,res){
    var json = {};
    var arr = req.url.split('?');
    var pathName = arr[0];
    var arr1 = arr[1].split('&');
    for(var i=0; i<arr1.length; i++){
        var arr2 = arr1[i].split('=');
        json[arr2[0]] = arr2[1];
    }
    console.log(pathName,json);
    res.write('aaa');
    res.end();


}).listen(3001);
