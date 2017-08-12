const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const static = require('koa-static');
const views = require('koa-views');

const uploadFile = require('./util/upload.js');

const app = new Koa();

// 使用模板引擎中间件
app.use(views(
	path.join(__dirname, './views'), 
	{ extension: 'ejs' }
));

// 使用静态文件中间件
app.use(static(
	path.join(__dirname, './public')
));

app.use( async (ctx) => {
	let title = 'this is title';
	if(ctx.method === 'GET' && ctx.url === '/') {
		await ctx.render('index.ejs',{
		 title
		});
	} else if (ctx.url === '/upload' && ctx.method === 'POST'){
		let result = {
			success: false
		};
		let serverFilePath = path.join(__dirname, 'public/images');
		let options = {
			fileType: 'heads',
			path: serverFilePath
		};
		result = await uploadFile( ctx, options );

		ctx.body = result;
	} else {
		ctx.body = `
			<h1>404</h1>
		`;
	}
});

app.listen(3000);
console.log('server 3000');