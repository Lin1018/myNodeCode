const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');
const views = require('koa-views');
const ejs = require('ejs');

const routers = require('./routers/index.js');

app.use(static(path.join(__dirname, './static')));

app.use(views(path.join(__dirname, './views'),{
		extension: ejs
}));

app.use(routers.routes());

app.listen(3000);
console.log('3000');