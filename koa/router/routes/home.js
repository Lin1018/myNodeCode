const Router = require('koa-router');

// 子路由1
let home = new Router;
home.get('/', async (ctx) => {
	let html = `
	 <ul>
	 	<li><a href ='/page/hello'>hello</a></li>
	 	<li><a href ='/page/404'>404</a></li>
	`;
	ctx.body = html;
})

module.exports = home;