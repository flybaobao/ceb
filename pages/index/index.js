//index.js
var user = require('../../utils/user.js')
var api = require('../../utils/api.js')
Page({
  data: {
    user:{},
    centerData:{},
    incomeTotal:0
  },
  //事件处理函数
  onLoad: function () {

  },

  onShow:function(res){
    var that = this;
    if(user.getUser().userID <= 0){
      wx.showModal({
              title: '提示',
              content: '你还未登录，请登录/注册超额宝',
                success: function(res) {
                if (res.confirm) {
                    wx.navigateTo({
                      url: '/pages/login/login',
                      success: function(res){
                        
                      },
                      fail: function() {
                        
                      },
                      complete: function() {
                        
                      }
                    })
                  }else{
                    wx.switchTab({
                      url: '/pages/list/productList',
                      success: function(res){
                        // success
                      },
                      fail: function() {
                        // fail
                      },
                      complete: function() {
                        // complete
                      }
                    })
                  }
              }
        })
    }else{
      api.api.request(api.api.api_center,{},function(res){
          console.log(res);
          that.reload(res.data.return_data);
      })
    }
  },

  reload:function(centerData){
     this.setData({user:user.getUser()})
     this.setData({centerData:centerData})
      var incomeTotal = 
      Number(this.data.centerData.cumulativeRevenue)
        + Number(this.data.centerData.totalSinapotIncome)
        + Number(this.data.centerData.redPacketMoney)
        + Number(this.data.centerData.ticketMoney)
          + Number(this.data.centerData.commissionMoney)
          + Number(this.data.centerData.commission);
      this.setData({incomeTotal:incomeTotal.toFixed(2)})
  },
  goLogin:function(){
      wx.navigateTo({
        url: '../login/login',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  },
  gotoSetting:function(){
    var that = this;
    wx.showActionSheet({
      itemList: ['退出登录'],
      success: function(res) {
        console.log(res.tapIndex);
        user.resetUser();
        that.reload({});
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
  gotoMyinvest:function(){
      wx.navigateTo({
        url: '../myinvest/myinvest',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  }
})
