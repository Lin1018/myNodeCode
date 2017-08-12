const mysql = require('mysql');
const async = require('async');

var db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'lin123',
    database: 'test'
});

var sqls = {
    'select': `select * from user`,
    'insert': `insert into user (user,password) value('lin4','lin123')`,
    'select': `select * from user where ID=3`
}
var tasks = ['select','insert']

async.eachSeries(tasks, function(item,callback){
    db.query(sqls[item], function(err,data){
        console.log(data);
        callback(err);
    });
},function(err,data){
    console.log(err);
});
