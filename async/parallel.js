const async = require('async');

var task1 = function(callback){
    console.log('task1');
    setTimeout(function(){
        callback(null, 'task1');
    },700)
}

var task2 = function(callback){
    console.log('task2');
    setTimeout(function(){
        callback(null,'task2');
    },600)
}

var task3 = function(callback){
    console.log('task3');
    setTimeout(function(){
        callback(null, 'task3');
    },400)
}

async.parallel({task1,task2,task3},function(err, result){
    console.log('paralel');
    if(err){
        console.log(err);
    }
    console.log(result);
})

//限制并发数1
async.parallelLimit([task1,task2,task3],1,function(err,result){
    console.log(result)
});