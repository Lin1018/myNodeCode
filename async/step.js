const step = require('step');
const fs = require('fs');

step(
	function readFile(){
		fs.readFile('address.txt','utf-8',this);
	},
	function readFile2(content1){
		fs.readFile('ttt.js','utf8',this)
	},
	function done(err,content1){
		console.log(content1);
	}
);


