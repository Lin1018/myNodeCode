const Router = require('koa-router');

// 子路由2
let page = new Router();
page.get('/404', async (ctx) => {
	ctx.body = '404 page!';
}).get('/hello', async (ctx) => {
	ctx.body = 'hello!';
});

module.exports = page;