const SUCCESS_CODE = 200;
const SUCCESS_MSG = "success";
const ERROR_CODE = 201;
const ERROR_MSG = "failure";

const getSuccess = (res,data,resMsg) => {
    let result = {
        resCode:SUCCESS_CODE,
        resMsg:resMsg == null ? SUCCESS_MSG : resMsg,
        data:data
    }
    // res.writeHead(SUCCESS_CODE, {"Content-type":"application/json; charset=utf-8"});
    res.send(JSON.stringify(result));
};

const getFailure = (res,resCode,resMsg) => {
    let result = {
        resCode:resCode == null ? ERROR_CODE : resCode,
        resMsg:resMsg == null ? ERROR_MSG : resMsg
    }
    // res.writeHead(resCode == null ? ERROR_CODE : resCode, {"Content-type":"application/json; charset=utf-8"});
    res.send(JSON.stringify(result));
};

exports.getSuccess = getSuccess
exports.getFailure = getFailure