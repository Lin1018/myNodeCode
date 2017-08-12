const path = require('path');

var str = 'c:\\www\\lin\\a.html';

var obj=path.parse(str);

console.log(obj);
console.log(path.parse(str).ext);
