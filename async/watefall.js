const async = require('async');


var task1 = function(callback){
    console.log('task1');
    callback(null, 1);
}

var task2 = function(num, callback){
    console.log('task2');
    console.log('task1传入的：' + num)
    callback('myerr');
}

var task3 = function(num, callback){
    console.log('task3');
    console.log('task2传入的：'+ num);
    callback(null,num+1);
}

async.waterfall([task1, task2, task3],function(err,result){
    console.log('waterfall');
    if(err){
        console.log(err);
    }
    console.log('result:'+result);
})
