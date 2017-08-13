// 创建可写流
const Writable = require('stream').Writable;

const writable = Writable();

// 实现write方法
// 这是将数据写入底层的逻辑
writable._write = function (data, enc, next) {
	// 将流中的数据写入底层
	process.stdout.write(data.toString().toUpperCase());
	// 写入完成时，调用next()方法通知流传入下一个数据
	process.nextTick(next);
};

// 将一个数据写入流中
writable.write('a' + '\n');
writable.write('b' + '\n');
writable.write('c' + '\n');

// 再无数据写入流时，需要调用end方法
writable.end();

// 所有数据均已写入底层
writable.on('finish', () => {
	process.stdout.write('DONE');
});