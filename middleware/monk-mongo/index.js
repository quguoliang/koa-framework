const monk = require('monk');
const url = require('./key');
const db = monk(url.mongodbURL);
exports.db = db;