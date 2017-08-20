'use strict'

exports.reply = function* (next) {
	var message = this.weixin;

	if (message.MsgType === 'event') {
		if (message.Event === 'subscribe') {
			if (message.EventKey) {
				console.log('扫描二维码进来：' + message.EventKey + '' + message.ticket);
			}

			this.body = '欢迎订阅微笑影业公众号！\r';
		} else if (message.Event === 'unsubscribe') {
			console.log('取消关注！');
			this.body = '';
		}

	} else {

	}

	yield next;
}