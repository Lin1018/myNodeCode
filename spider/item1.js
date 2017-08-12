const http = require('http');
const url = 'http://www.imooc.com/learn/348';

http.get(url, function(res) {
    var html = '';

    res.on('data', function(chunk){
        html += chunk;
    });

    res.on('end', function(){
        console.log(html);
    });

    res.on('error', function(err){
        console.log('获取章节出错！');
    });

});