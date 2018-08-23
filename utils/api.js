var utilsModule = require('/util.js');
var user = require('/user.js');

const host = "https://interface.8518.com/app/gatewayV4.php";
let common_parameters = {
    platformID:1,
    systemversion:10.0,
    udid:"4D349CE1-16F0-4753-988A-6EA584B24F12",
    userID:0,
    version:"3.1.0"
}

//https://interface.8518.com/app/gatewayV4.php?invcode=&password=3f2cf36a0963cf127ce8b5f1eb91a447&phonenum=14343430010&platformID=1&service=register&signature=6b9fee9fd94ae29fcbee5d12017bf0b2&systemversion=10.0&udid=4D349CE1-16F0-4753-988A-6EA584B24F12&userID=0&vercode=141414&version=3.1.0
function getSignature(){
    
}

function mergeJson(jsonbject1, jsonbject2) {
    var resultJsonObject={};
    for(var attr in jsonbject1){
        resultJsonObject[attr]=jsonbject1[attr];
    }
    for(var attr in jsonbject2){
        resultJsonObject[attr]=jsonbject2[attr];
    }
    return resultJsonObject;
}


function getSignature(data){
    var keys = [];
    for(var key in data){
        keys.push(key);
    }
    keys = keys.sort();
    var signature = "";
    for (var i=0;i<keys.length;i++){
        var key = keys[i];
        var value = data[key];
        signature += (key + "=" + value);
    }
    signature += "yDcIZn:r[=";
    signature = utilsModule.md5(utilsModule.md5(signature));
    return signature;
}

var requset = function (api,parameter,success,fail,complete){
    parameter["service"] = api;
    parameter["userID"] = user.getUser().userID;
    var data = mergeJson(common_parameters,parameter);
    data["signature"] = getSignature(data);
    wx.request({
      url: host,
      data: data,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){

          if(res.data.ret != 0){
              wx.showToast({
                title: res.data.message,
                duration: 2000
            });
            setTimeout(function(){
                wx.hideToast()
            },2000);

          }else{
              success(res);
          }
      },
      fail: fail,
      complete: complete
    })
}

/* 接口类  */
var Api = {
    api_login: "login",
    api_signup: "register",
    api_getvercode: "getvercode",
    api_detail: "detail",
    api_list:"list",
    api_home:"qualityproductlist",
    api_center:"center",
    request:requset
}

/* 暴露接口  */
module.exports = {
    api:Api
}

//https://interface.8518.com/app/gatewayV4.php?platformID=1&productID=10001812&service=detail&signature=c15514cbc7a4805aa9d3adbd76252641&systemversion=10.0&udid=4D349CE1-16F0-4753-988A-6EA584B24F12&userID=0&version=3.3.0