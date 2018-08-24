//logs.js
var util = require('../../utils/util.js')
var API = require('../../utils/api.js')
Page({
  data: {
    page:1,
    productList:[],
    navigatorURL:"../productDetail/productDetail",
    
  },

  getData(){
    wx.showLoading({
      title: '正在加载',
    })
     var that = this;
     API.api.request(
       API.api.api_list,
     {page:that.data.page},
     function(res){
        wx.hideLoading();
        if(that.data.page == 1){
          that.setData({
              productList:res.data.return_data.list,
          })
        }else{
          var arr = that.data.productList
          Array.prototype.push.apply(arr,res.data.return_data.list)
          that.setData({productList:arr})
        }
     },function() {

      },function() {
        var a = [1,2,3];
        a.forEach(function(item,index){

        });
      })
  },

  onLoad: function () {
    this.getData()
   
  },
  onPullDownRefresh: function () {
    setTimeout(function(){

    },1000);
    var page = 1
    this.setData({page:page})
    this.getData()
  },
      // 上拉加载回调接口
   onReachBottom: function () {
    var page = this.data.page
    page++
    this.setData({page:page})
    this.getData()
   },

})
