//logs.js
var util = require('../../utils/util.js')
var API = require('../../utils/api.js')
Page({
    data: {
        imgUrls: [],
        announceTitles: []
    },

    getData() {
        var that = this;
        API.api.request(
            API.api.api_home, {},
            function (res) {
                wx.stopPullDownRefresh()
                that.setData({
                    imgUrls: res.data.return_data.banner,
                    announceTitles: res.data.return_data.announcement,
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

    onPullDownRefresh: function () {
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
