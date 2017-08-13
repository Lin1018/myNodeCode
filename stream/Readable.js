'use strict'
// 创建可读流
const Readable = require('stream').Readable;

class ToReadable extends Readable {
	constructor (iterator) {
		super();
		this.iterator = iterator;
	};

	// 子类需要实现该方法
	// 这是产生数据的逻辑
	_read () {
		const res = this.iterator.next();
		if (res.done) {
			// 数据资源已枯竭，调用push(null)通知流
			return this.push(null);
		}

		setTimeout(() => {
			// 通过push方法将数据添加到流中
			this.push(res.value + '\n');
		}, 1000);
	}
}

// module.exports = ToReadable;

const iterator = function (limit) {
	return {
		next: function () {
			if (limit--) {
				return { done: false, value: limit + Math.random() };
			}

			return { done: true };
		}
	}
}(10);

const readable = new ToReadable(iterator);

// 监听data事件，一次获取一个数据
readable.on('data', data => {
	process.stdout.write(data);
});

// 所有的数据均已经读完
readable.on('end', () => {
	process.stdout.write('DONE');
});