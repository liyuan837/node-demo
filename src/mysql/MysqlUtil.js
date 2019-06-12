const mysql = require('mysql');
const pool = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    database:'pd_db',
    user:'root',
    password:'123456'
})
function queryById(sql,params,callback) {
    pool.query(sql,params,callback);
}
exports.queryById = queryById