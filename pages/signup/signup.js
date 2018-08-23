var apiModule = require('../../utils/api.js')
var utilsModule = require('../../utils/util.js')

Page({
  data:{
    codeBtnTitle:"获取验证码",
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '', // 分享标题
      desc: '', // 分享描述
      path: '' // 分享路径
    }
  },


  timeout:60,
  timer:"",
  mobile:"",

  //获取验证码
  getCode:function(event){
    if (this.timer <= 0){
        var that = this;
        this.timer = setInterval(function(){
        that.timeout --;
        that.setData({codeBtnTitle:that.timeout + "秒"});
        if(that.timeout <= 0){
          that.setData({codeBtnTitle:"获取验证码"});
          that.timeout = 60;
        }
      },1000);
      console.log(that.mobile);
      apiModule.api.request(apiModule.api.api_getvercode,{
        verycodetype:0,
        phonenum:that.mobile
      },function(res){
        console.log(res);
      },function() {
      },function() {
      }); 
    }
  },

  //注册
  signupClick:function(event){

    var mobile =  event.detail.value.mobile;
    var password =  event.detail.value.password;
    var code =  event.detail.value.code;

    var re_mobile  = /^1\d{10}$/;
    var re_mobile_result =  re_mobile.test(mobile);
    if (!re_mobile_result){
    }

    apiModule.api.request(apiModule.api.api_signup,{
        phonenum:mobile,
        password:utilsModule.md5(password),
        vercode:code,
        invcode:0
      },function(res){
        
         wx.showToast({
             title: res.data.message,
             duration: 2000,
             complete:function(){
                wx.navigateBack();
             }
          });
      },function() {
      },function() {
      });
  },

  //显示密码
  appearPassword:function(event){

  },
  //手机号码输入完毕 (无效)
  mobileEnd:function(e){
  },

  mobileInput:function(e){
    this.mobile = e.detail.value;
    console.log("----->",this.mobile);
  }
})