// 通过bodyparser中间件解析Post数据
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');  

app.use(bodyParser());

app.use( async (ctx) => {
	if (ctx.url === '/' && ctx.method === 'GET'){
		let html = `
			<h1>koa2 bodyparser</h1>
			<form action='/' method='post'>
				name: <input type='name' name='name'><br/>
				password: <input type='password' name='password'><br/>
				<input type='submit' value='submit'>
			</form>
		`
		ctx.body = html;
	} else if (ctx.url === '/' && ctx.method === 'POST'){
		let postData = ctx.request.body;
		console.log(postData);
		ctx.body = postData;
	} else {
		ctx.body = '<h1>404</h1>';
	}
})

app.listen(3000);
console.log('3000');