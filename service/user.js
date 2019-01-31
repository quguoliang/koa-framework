const db = require('../middleware/monk-mongo/index').db;
const user = db.get('users');



let login = function (name,password) {
    user.insert([{'_id':5607,name:'qubaba'}])
    const data = {msg:'success', code:1}
    return data;
}
module.exports = {
    login: login,
}