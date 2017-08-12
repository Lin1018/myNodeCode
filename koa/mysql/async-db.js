const mysql = require('mysql');

// mysql配置
let config = {
	host: '127.0.0.1',
	user: 'root',
	password: 'lin123',
	database: 'koa'
}
// 创建连接池
const pool = mysql.createPool(config);

// 用promise封装mysql
let query = function(sql, values) {
	return new Promise((resolve, reject) => {
		pool.getConnection(function(err, connection) {
			if (err) {
				reject(err);
			} else {
				connection.query(sql, values, (err, rows) => {
					if (err) {
						reject(err);
					} else {
						resolve(rows);
					}
					connection.release();
				});
			}
		});
	});
}

module.exports = query;