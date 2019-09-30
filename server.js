const Koa = require('koa');
const router = require('./router');
const middleware = require('./middleware');

const koa = new Koa();

router(koa);
middleware(koa);

koa.listen(2345, ()=>{
    console.log("The service is already running on port 2345");
});

