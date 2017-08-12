const Router = require('koa-router');

let home = new Router();

home.get('/', async (ctx) => {
	let title ='hello';
	await ctx.render('home.ejs', {title});
});

module.exports = home;
