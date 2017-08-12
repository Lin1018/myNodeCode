const Koa = require('koa');
const app = new Koa();

//获取get数据
app.use( async (ctx) => {
	let url = ctx.url;
	//从request对象获取
	let req_query = request.query;
	let req_querystring = request.querystring;

	//从上下文直接获取
	let ctx_query = ctx.query;
	let ctx_querystring = ctx.querystring;

	ctx.body = {
		url,
		req_query,
		req_querystring,
		ctx_query,
		ctx_querystring
	}
})

app.listen(3000);
console.log('server running 3000');