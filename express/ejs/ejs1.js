const ejs = require('ejs');

ejs.renderFile('./1.ejs',{type:'admin'},function(err,data){
        if(err)
            throw err;
        else
            console.log(data);
});
