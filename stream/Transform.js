// Transform中可写端写入的数据转换后添加到可读端
'use strict'
const Transform = require('stream').Transform;

class Rotate extends Transform {
	constructor() {
		super();
	};

	// 讲可写端写入的数据变换后添加到可读端
	_transform(buf, enc, next) {

		var res = buf.toString();
		// 调用push方法将变换后的数据添加到可读端
		this.push(res);
		// 调用next方法准备处理下一个
		next();
	}
}

var transform = new Rotate();

transform.write('hello, ');
transform.write('world!');
transform.end();

transform.on('data', data => {
	process.stdout.write(data);
});