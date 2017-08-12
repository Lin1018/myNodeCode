//原生实现jsonp
const Koa = require('koa');
const app = new Koa();

app.use( async function( ctx ){
	// 如果jsonp的请求为GET
	if(ctx.method === 'GET' && ctx.url.split('?')[0] === '/getData.jsonp'){
		let callbackName = ctx.query.callback || 'callback';
		let returnData = {
			success:true,
			data: {
				text: 'this is a jsonp',
				time: new Date().getTime()
			}
		};

    	let jsonpStr = `${callbackName}(${JSON.stringify(returnData)})`;
    	// 用text/JavaScript, 让请求支持跨域获取
    	ctx.type = 'text/javascript';

		ctx.body = jsonpStr;
	} else {
		ctx.body = 'hello, jsonp';
	}
});

app.listen(3000);
console.log('3000');