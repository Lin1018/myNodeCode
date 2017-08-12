const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');

app.use(static(
	path.join(__dirname, './public')
));

// app.use(async (ctx) => {
// 	ctx.body = 'hello,world';
// });
app.listen(3000);
console.log('Server running at 3000');