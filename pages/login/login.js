
var apiModule = require('../../utils/api.js')
var utilsModule = require('../../utils/util.js')
var user = require('../../utils/user.js')
Page({
  data: {

  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    wx.hideNavigationBarLoading();

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  loginClick: function (event) {
    var mobile = event.detail.value.mobile;
    var password = event.detail.value.password;

    var re_mobile = /^1\d{10}$/;
    var re_mobile_result = re_mobile.test(mobile);
    if (!re_mobile_result) {
    }

    apiModule.api.request(apiModule.api.api_login, {
      phonenum: mobile,
      password: utilsModule.md5(password),
    }, function (res) {

      user.setUser(res.data.return_data);
      console.log(user.user);
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
        success: function (res) {

        },
        fail: function () {

        },
        complete: function () {

        }
      })
    }, function () {
    }, function () {
    });
  },


  registClick: function (event) {
    //注册
    console.log(event);
    wx.navigateTo({
      url: '/pages/signup/signup',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }

})