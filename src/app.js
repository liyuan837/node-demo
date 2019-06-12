var http = require("http")
var url = require("url")
var path = require("path")
var express = require("express")

const {getSuccess,getFailure} = require("./src/ResponseEntity")

var app = express()
app.get("/admin/:id",function (req,res) {
    var id = req.params['id']
    getSuccess(res,id)
})

/**
 * 托底路由
 */
app.use(function (req,res,err) {
    getFailure(res,404,"request url error")
})
app.listen(3333)
