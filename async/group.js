const step = require('step');
const fs = require('fs');

step(
	function readDir(){
		fs.readdir(__dirname,this);  
	},
	function readFile(err,results){
		if(err){
			throw err;
		}
		var group = this.group();
		results.forEach(function(filename){
			if(/\.txt$/.test(filename)){
				fs.readFile(__dirname+'/'+filename,'utf8',group());
			}
		});
	},
	function showAll(err,files){
		if(err){
			throw err;
		}
		console.log(files)
	}
)