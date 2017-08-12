const Router = require('koa-router');
let router = new Router();

const home = require('./home');
const page = require('./page');
const news = require('./news');
const test = require('./test');

router.use('/', home.routes());
router.use('/page', page.routes());
router.use('/news', news.routes());
router.use('/test', test.routes());

module.exports = router;