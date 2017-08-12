
function promise4(num){
    return new Promise(function(resolve, refect){
        console.log('起床');
        resolve(num);
    });
}

function promise(num){
    return new Promise(function(resolve, reject){
        if(num >= 0.1){
            console.log('叫车');
            resolve(num);
        }else{
            reject('电量不足');
        }

    });
}

function promise1(result){
    return new Promise(function(resolve, reject){
            console.log('洗刷');
            resolve(result);
    });
}

function promise2(result){
    return new Promise(function(resolve, reject){
        if(result >= 0.1){
            console.log('车来了');
            resolve('上车');
        }else{
            reject();
        }
    });
}

promise4(0.1)
    .then(function(result){
        return Promise.all([
            promise(result),
            promise1(result),

        ])
    })
    .then(function(result){
        return promise2(result[0]);
    })
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    });
