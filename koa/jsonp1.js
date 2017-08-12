const Koa = require('koa');
const app = new Koa();
const jsonp = require('koa-jsonp');

// 使用jsonp中间件
app.use(jsonp());

app.use( async (ctx) => {
	let returnData = {
		sucess: true,
		data: {
			text: 'this is a jsonp api',
			time: new Date().getTime()
		}
	}

	ctx.body = returnData;
});

app.listen(3000);
console.log('3000');