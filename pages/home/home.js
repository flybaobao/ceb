//logs.js
var util = require('../../utils/util.js')
var API = require('../../utils/api.js')
Page({
  data: {
    imgUrls: [],
    announceTitles: [],
    list: [],
    navigatorURL: "../productDetail/productDetail",

  },

  getData() {
    wx.showLoading({
      title: '正在加载',
    })
    var that = this;
    API.api.request(
      API.api.api_home, {},
      function (res) {
        wx.hideLoading();
        that.setData({
          imgUrls: res.data.return_data.banner,
          announceTitles: res.data.return_data.announcement,
          list: res.data.return_data.list,
        })

      }, function () {

      }, function () {

      })
  },

  onLoad: function () {
    this.getData()
  },


  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value

    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  pageJump: function (event) {
    console.log(event.currentTarget.id);
    switch (event.currentTarget.id) {
      case "tap1":
        console.log(1111),
          wx.navigateTo({
            url: '',
          })

        break;
      case "tap2":
        console.log(2222),
          wx.navigateTo({
            url: '',
          })

        break;
      case "tap3":
        console.log(3333),
          wx.navigateTo({
            url: '',
          })

        break;
      case "tap4":
        console.log(4444),
          wx.navigateTo({
            url: '',
          })

        break;
    }

  },


  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 1000);

    var page = 1
    this.setData({ page: page })
    this.getData()
  },
  // 上拉加载回调接口
  onReachBottom: function () {
    var page = this.data.page
    page++
    this.setData({ page: page })
    this.getData()
  },

})
