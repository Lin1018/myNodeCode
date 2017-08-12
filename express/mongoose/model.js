var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/lin111';
mongoose.connect(url);

var BookSchema = new mongoose.Schema({
    name:String,
    author: String
});

module.exports = mongoose.model("Book",BookSchema);
