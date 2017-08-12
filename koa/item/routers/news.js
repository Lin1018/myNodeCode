const Router = require('koa-router');

let news = new Router();
news.get('/news', async (ctx) => {
	ctx.body = 'news';
});

module.exports = news;
