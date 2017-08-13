// // Readable未设置objectMode时
// const Readable = require('stream').Readable;

// const readable = Readable();

// readable.push('a');
// readable.push('b');
// readable.push(null);

// readable.on('data', data => {
// 	console.log(data);
// });


//Readable设置objectMode后
const Readable = require('stream').Readable;

const readable = Readable({ objectMode: true });

readable.push('a');
readable.push('b');
readable.push([1,2,3]);
readable.push(null);

readable.on('data', data => {
	console.log(data);
});