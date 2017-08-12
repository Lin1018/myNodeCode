const jade = require('jade');
const fs = require('fs');

jade.renderFile('./1.jade',{
    pretty:true,
},function(err,data){
    if(err){
        throw err;
    }else{
        console.log(data);
    }
    fs.writeFile('./test.html',data,function(err){
        if(err)
            throw err;
        else
            console.log('成功');
    });
});
