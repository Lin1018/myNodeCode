const path = require('path');
const fs = require('fs');
const Busboy = require('busboy');

function uploadFile( ctx, options ){
	let req = ctx.req;
	let res = ctx.res;
	let busboy = new Busboy({headers: req.headers});

	//获取类型
	let fileType = options.fileType || 'common';
	let filePath = path.join( options.path, fileType);
	let mkdirResult = mkdirsSync( filePath );

	return new Promise( (resolve, reject) => {
		console.log('文件上传中...');
		let result = {
			success: false,
			message: '',
			formData: {},
			fileData: null
		};

		// 解析请求文件
		busboy.on('file', function(field, file, filename){
			let fileName = Math.random().toString(16).substr(2) + '.' + getExtName(filename);
			let _uploadFilePath = path.join(filePath,filename);
			let saveTo = _uploadFilePath;

			// 将文件写入指定路径
			file.pipe(fs.createWriteStream(saveTo));

			// 文件写入结束
			file.on('end', function(){
				result.success = true;
				result.message = '文件上传成功！';
				result.fileData = {
					imgUrl: `//${ctx.host}/image/${fileType}/${fileName}`
				};

				console.log('文件上传成功！');
				resolve(result);
			});
		});

		// 解析表单其他字段数据
		busboy.on('field', function(fieldname, value){
			console.log('表单字段数据: \n['+ fieldname + ']: ' + value);
			result.formData.fieldname = value;
		})

		// 解析结束事件
		busboy.on('finish', function(){
			console.log('文件上传结束！');
			resolve(result);
		});

		// 解析错误事件
		busboy.on('error', function(err){
			console.log('文件上传错误！');
			reject(result);
		});

		req.pipe(busboy);
	});

}

// 创建上传文件目录
function mkdirsSync(dirname) {
	if (fs.existsSync(dirname)) { 
		return true;
	} else{
		 if (mkdirsSync(path.dirname(dirname))) {
			fs.mkdirSync( dirname );
			return true;
		}	
	}
};

// 获取文件的扩展名
function getExtName(filename) {
	let fileList = filename.split('.');
	return fileList[fileList.length -1];
};

module.exports = uploadFile;