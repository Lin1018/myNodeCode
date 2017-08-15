// 通过流读取数据，适合操作大文件
const fs = require('fs');

fs.createReadStream('Transform.js').pipe(process.stdout);