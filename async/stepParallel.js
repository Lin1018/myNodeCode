const step = require('step');
const fs = require('fs');

step(
	function readFile(){
		fs.readFile('address.txt','utf-8',this.parallel());
		fs.readFile('ttt.js','utf8',this.parallel())
	},
	function done(err,content1,content2){
		// console.log(content1);
		// console.log(content2);
		// console.log(err);
		for(var i=0; i<arguments.length; i++)
		console.log(arguments[i])
	}
);


