const Koa = require('koa');
const session = require('koa-session-minimal');
const mysqlSession = require('koa-mysql-session');

const app = new Koa();

//配置存储session信息的mysql
let store = new mysqlSession({
	user: 'root',
	password: 'lin123',
	database: 'koa',
	host: 'localhost'
});

let cookie = {
	maxAge: '',
	expires: '',
	path: '',
	domai: '',
	httpOnly: '',
	overwrite: '',
	secure: '',
	sameSite: '',
	signed: '',
};

//使用session中间件
app.use(session({
	key: 'sess_id',
	store: store,
	cookie: cookie
}));

app.use(async (ctx) => {
	//设置session
	if(ctx.url === '/set'){
		ctx.session = {
			user_id: Math.random().toString(16).substr(2),
			count: 0
		}
		ctx.body = ctx.session;
	} else if (ctx.url === '/'){
		ctx.session.count = ctx.session.count +1;
		ctx.body = ctx.session;
	}
});

app.listen(3000);
console.log('server 3000');