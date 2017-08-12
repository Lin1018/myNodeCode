const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');
const common = require('./libs/common');

const db = mysql.createPool({host:'localhost',user:'root',password:'lin123',database:'blog'});

var server = express();
server.listen(3000);
server.use(cookieParser('afds09sdf0fdsf90f'));

var arr = [];
for(var i=0; i<10000; i++){
    arr.push('keys_'+Math.random());
}
server.use(cookieSession({name:'sess1',keys:'arr',maxAge:20*3600*1000}));

server.use(bodyParser.urlencoded({extened:false}))
server.use(multer({dest:'./upload'}).any());

server.set('view engine', 'html');
server.set('views', './template');
server.engine('html', consolidate.ejs);

server.get('/',function(req,res,next){
    db.query('SELECT * FROM banner_table',function(err,data){
        if(err){
            console.log(err);
            res.status(500).send('database error').end();
        }
        res.banners = data;
        next();
    });
});
server.get('/', function(req,res,next){
    db.query('SELECT ID,title,summary FROM article_table',function(err,data){
        if(err){
            console.log(err);
            res.status(500).send('database err').end();
        }
        res.articles = data;
        next();
    });
});
server.get('/',function(req,res){
    res.render('index.ejs',{banners:res.banners, articles:res.articles});
});
server.get('/article', function(req,res){
  if(req.query.id){
    if(req.query.act=='like'){
      //增加一个赞
      db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID='${req.query.id}'`, (err, data)=>{
        if(err){
          res.status(500).send('数据库有小问题').end();
          console.error(err);
        }else{
          //显示文章
          db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, (err, data)=>{
            if(err){
              res.status(500).send('数据有问题').end();
            }else{
              if(data.length==0){
                res.status(404).send('您请求的文章找不到').end();
              }else{
                var articleData=data[0];
                articleData.sDate=common.time2date(articleData.post_time);
                articleData.content=articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');

                res.render('conText.ejs', {
                  article_data: articleData
                });
              }
            }
          });
        }
      });
    }else{
      //显示文章
      db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, (err, data)=>{
        if(err){
          res.status(500).send('数据有问题').end();
        }else{
          if(data.length==0){
            res.status(404).send('您请求的文章找不到').end();
          }else{
            var articleData=data[0];
            articleData.sDate=common.time2date(articleData.post_time);
            articleData.content=articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');

            res.render('conText.ejs', {
              article_data: articleData
            });
          }
        }
      });
    }
  }else{
    res.status(404).send('您请求的文章找不到').end();
  }
});


server.use(static('./www'));
