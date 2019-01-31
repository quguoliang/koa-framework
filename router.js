const fs = require('fs');

//读取文件
function addControllers(router,dir){

    var files = fs.readdir('./controllers',(err,files)=>{
        var js_files = files.filter((f)=>{
            return f.endsWith('.js');
        });
       
        for(let file of js_files){
            let mappingList = require(__dirname+'/'+dir+'/'+file);
            mappingList.forEach( mapping => {
                addMapping(router, mapping.type, mapping.path, mapping.methods);
            });      
        }
    })
   
   
}

//判断请求方法
function addMapping(router, type, path, methods){
    switch(type){
        case 'GET':
            router.get(path, methods);
            return;
        case 'POST':
            router.post(path, methods);
            return;
        case 'PUT':
            router.put(path, methods);
            return;
        case 'DELETE':
            router.delete(path, methods);
            return;
        default:
            console.log(`Please enter the correct request type, the current type is ${type}`);
            return;
    }
}


module.exports = (koa, filename) => {
    const dir = filename || 'controllers';
    const router = require('koa-router')();
    addControllers(router, dir);
    koa.use(router.routes());
    koa.use(router.allowedMethods());
}