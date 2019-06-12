//引入请求路由组件
const express = require("express")
//引入自行峰组昂的返回实体方法
const {getSuccess, getFailure} = require(".././resp/ResponseEntity")
const userDao = require(".././dao/UserDao")
var app = express()
app.get("/user/:id", function (req, res) {
    var id = req.params['id']
    userDao.queryById(id,function (err,rows) {
        if(err){
            getFailure()
        }else{
            getSuccess(res, rows)
        }
    })
})