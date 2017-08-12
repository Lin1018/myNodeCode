const Router = require('koa-router');

let page = new Router();

page.get('/', async (ctx) => {
	ctx.body = 'hello';
});

page.get('/test', (ctx) => {
	ctx.body = 'test';
});

module.exports = page;