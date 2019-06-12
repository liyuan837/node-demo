const mysqlUtil = require('.././mysql/MysqlUtil');
const queryById = (id,callback) => {
    mysqlUtil.queryById("select * from t_project where id=?",[id],function (err,rows) {
        callback(rows)
    })
}

exports.queryById = queryById