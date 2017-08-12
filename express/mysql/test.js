const mysql = require('mysql');

var db = mysql.createConnection({host:'localhost',user:'root',password:'lin123',database:'blog'});

db.query('SELECT * FROM `user_table`;', function(err,data){
    if(err)
        console.log('err',err);
    else{
        console.log('success');
        console.log(data);
        console.log(JSON.stringify(data));
    }
});
