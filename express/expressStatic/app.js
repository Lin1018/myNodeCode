const express = require('express');
const es = require('express-static');

var server = express();
var users = {
    'lin' : '1234',
    'zhangsan' : '12345'
};

server.get('/login',function(req,res){
    console.log(req.query);
    var user = req.query['user'];
    var pass = req.query['pass'];

    if(users[user] == null){
        res.send('用户不存在');
    }else{
        if(users[pass] != pass){
            res.send({'ok':'false','msg':'密码错误'});
        }else{
            res.send({'ok':'false','msg':'登陆成功'});
        }
    }

});

server.use(es('./www'));

server.listen(3000);
console.log('3000');
