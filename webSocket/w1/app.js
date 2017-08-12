const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({
	port: 3003
});

wss.on('connection', function(ws) {
	console.log(`[SERVER] connection()`);
	ws.on('message', function(message) {
		console.log(`[SERVER] Received: ${message}`);
		ws.send(`ECHO: ${message}`, (err) => {
			if (err) {
				console.log(`[SERVER] error: ${err}`);
			}
		});
	});

});

//ws客户端
let ws = new WebSocket('ws://localhost:3002/test');

//打开WebSocket连接后立刻发送一条消息
ws.on('open', function() {
	console.log(`[client] open()`);
	ws.send('hello!');
});

//响应收到的消息
ws.on('message', function (message) {
	console.log(`[client] received: ${message}`);
});
