const Koa = require('koa')
const path = require('path')
const app = new Koa()
// const bodyParser = require('koa-bodyparser')

const uploadFile = require('./util/upload');

// app.use(bodyParser())

app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    //当GET请求时候返回表单页面
    let html = `
      <h1>koa2 upload demo</h1>
      <form method='post' action='/upload.json' enctype='multipart/form-data'>
      <p>file upload</p>
      <span>picName:</span><input name='picName' type='name'><br/>
      <input name='file' type='file'/><br/>
      <input type='submit' value='submit'>
      </form>
    `;
    ctx.body = html;
  } else if (ctx.url === '/upload.json' && ctx.method === 'POST') {
    let result = { success: false };
    let serverFilePath = path.join(__dirname, 'upload-files');

    //上传文件事件
    result = await uploadFile(ctx, {
      fileType: 'album',  //common or album
      path: serverFilePath
    });

    ctx.body = result;
  } else {
    //其他请求显示404
    ctx.body = '<h1>404!</h1>';
  }

});

app.listen(3000);
console.log('[demo] upload-simple is starting at port 3000');