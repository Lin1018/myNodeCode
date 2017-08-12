const Router = require('koa-router');

let test = new Router();

test.get('/', (ctx) => {
	ctx.body = 'test router';
});

module.exports = test;