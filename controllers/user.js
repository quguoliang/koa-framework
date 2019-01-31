const service = require('../service/user.js');

let login = async (ctx, next) => {
    const data = service.login(); 
    ctx.body = data;

}

module.exports = [
    {
        path: '/user/login',
        type: "GET",
        methods: login
    }
]