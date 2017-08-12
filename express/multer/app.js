const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const pathLib = require('path');

var server = express();
server.listen(3000);

//添加cookies
server.use(cookieParser('sdfadf90df8df8dff8'));

//使用session
var arr = [];
for(var i=0; i<100000; i++){
    arr.push('key_'+Math.random());
}
server.use(cookieSession({name:'sess1',keys:arr,maxAge:20*3600*1000}));

//解析get/post数据
server.use(bodyParser.urlencoded({extended:false}));

//获取上传文件
server.use(multer({dest:'./upload'}).any());

//获取用户请求
server.use('/',function(req,res){
    /*以下代码文件上传成功，但是报错*/
    /*var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path,newName,function(err){
        if(err){
            console.log('上传失败');
        }else{
            console.log(req.query,req.body,req.Cookies,req.session,req.files);
            res.send('上传成功');
        }
    });*/
    console.log(req.query,req.body,req.Cookies,req.session,req.files);
            res.send('上传成功');
});

console.log('Server running at port 3000');
