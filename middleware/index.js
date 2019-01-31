const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');

module.exports = (koa) => {
    koa.use(bodyParser());
    koa.use(koaBody({}));
}