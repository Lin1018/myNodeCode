const Koa = require('koa');
const Router = require('koa-router');

const home = require('./routes/home.js');
const page = require('./routes/page.js');

const app = new Koa();

// 装载所有子路由
let router = new Router()
router.use('/', home.routes())
router.use('/page', page.routes())

// 加载路由中间件
app.use(router.routes())

app.listen(3000);
console.log('Server 3000');