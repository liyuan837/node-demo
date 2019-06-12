const express = require("express")
//引入自行峰组昂的返回实体方法
const {getSuccess, getFailure} = require("./resp/ResponseEntity")

var app = express()
app.get("/admin/:id", function (req, res) {
    var id = req.params['id']

    getSuccess(res, id)
})

/**
 * 托底路由
 */
app.use(function (req, res, err) {
    getFailure(res, 404, "request url error")
})
app.listen(3333)
