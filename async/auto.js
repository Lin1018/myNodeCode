const async = require('async');

async.auto({

    task1: function(callback){
        console.log('task1');
        setTimeout(function(){
            callback(null, 'task1111');
        },1000);
    },

    task2: function(callback){
        console.log('task2');
        setTimeout(function(){
            callback(null, 'task2222');
        },1000);
    },

    task3:('task1', 'task2', function(callback){
        console.log('task3');
        setTimeout(function(){
            callback(null, 'task33333');
        },1000);
    }),

    task4:('task3', function(callback){
        console.log('task4');
        setTimeout(function(){
            callback(null, 'task4444');
        },1000);
    })

},function(err, result){
    console.log('auto:');
    if(err){
        console.log(err);
    }

    console.log(result);
})
