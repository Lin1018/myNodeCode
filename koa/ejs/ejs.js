const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

app.use(views(path.join(__dirname,'./views'),{
	extension: 'ejs'
}));

app.use(async (ctx) => {
	let title ='hello';
	await ctx.render('index.ejs', {title});
});

app.listen(3000);
console.log('ejs 3000');