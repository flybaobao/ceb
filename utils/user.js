
var user = {
    userID:0,
    loginname:"",
    realName:"",
    idCard:"",
    userNickName:"",
    userIco:""
}

function resetUser(){
    user.userID=0;
    user.loginname="";
    user.realName="";
    wx.setStorageSync('userID', user.userID)
}

function getUser(){
    var userid = wx.getStorageSync('userID')
    if(userid > 0){
        user.userID = userid
    }
    return user;
}

function setUser(aUser){
    user = aUser;
    wx.setStorageSync('userID', aUser.userID)
}

module.exports  = {
    getUser:getUser,
    resetUser:resetUser,
    setuser:setUser
}