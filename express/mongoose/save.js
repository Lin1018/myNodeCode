var mongoose = require('mongoose');

var Model = require('./model');

var book = new Model({
    name : 'nodejs1',
    author : 'lin1'
});

book.save(function(err){
    console.log('success');
});
