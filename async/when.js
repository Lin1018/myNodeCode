const http = require('http')
const when = require('when')
const fs = require('fs')

function fr(path){
    var defer = when.defer();
    fs.readFile(path, function(err,data){
        if(err){
            defer.reject(err);
        }
        defer.resolve(data);
    });

    return defer.promise;
}

function fget(url){
    var defer = when.defer();
    var data = '';
    http.get(url, function(res){

        res.on('data', function(chunk){
            data += chunk;
        })

        res.on('end', function(){
            defer.resolve(data);
        })

        res.on('error', function(err){
            defer.reject(err);
        })
    });

    return defer.promise;
}

function fsave(data){
    var defer = when.defer();

    fs.write('rss.html', data, function(err,data){
        if(err){
            defer.reject(err);
        }
        defer.resolve(data);
    })

    return defer.promise;
}

fr('address.txt')
    .then(fget)
    .then(fsave)
    .catch(function(err){
        console.log(err);
    })
