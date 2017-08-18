// 对用户输入进行过滤
var xss = require('xss');
var html = xss('<script>alert("xss");</script>');
console.log(html);