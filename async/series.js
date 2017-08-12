const async = require('async');

var task1 = function(callback){
    console.log('task1');
    callback(null, 'task1');
}

var task2 = function(callback){
    console.log('task2');
    callback(null, 'task2');
}

var task3 = function(callback){
    console.log('task3');
    callback('myerr');
}

var task4 = function(callback){
    console.log('task4');
    callback(null, 'task4');
}

async.series([task1, task2, task3, task4], function(err,result){
    console.log('result:')
    if(err){
        console.log(err);
    }
    console.log(result);
});
