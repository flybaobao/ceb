var API_Module = require('../../utils/api.js')
var CONSTANT = require('../../utils/constant.js')
Page({  
  data:{
      productID:0,
      product:{},
      incomeDuration:"0天"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      productID:options.productID
    });
     // 页面渲染完成
    wx.setNavigationBarTitle({
      title: '详情',
      success: function(res) {
        
      }
    });

    // 获取数据
    wx.showNavigationBarLoading();
    var that = this;
    API_Module.api.request(API_Module.api.api_detail,{
        productID:that.data.productID,
      },function(res){
        that.setData({product:res.data.return_data});
        console.log(that.data.product);
        wx.hideNavigationBarLoading();
        that.reload();
                
      },function() {
                wx.hideNavigationBarLoading();

      },function() {
                wx.hideNavigationBarLoading();

      });
  },
  onReady:function(){
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },

/* ------ reload UI ------ */
  reload:function(){
    let typed = this.data.product.baseInfo.type;
    var incomeTitle= (typed == CONSTANT.ProductType.INTRESTING_TYPE)?"剩余收益天数":"期限";

    let repaymentType = this.data.product.baseInfo.repaymentType;
    let period = this.data.product.baseInfo.period;
    var repaymentTitle = "";
    if(repaymentType == CONSTANT.RepaymentType.DAY_TYPE){
      repaymentTitle = incomeTitle + period + "天";
    }else{
      repaymentTitle = incomeTitle + period/30 + "月";
    }
     this.setData({incomeDuration:repaymentTitle});

  },

/* ------ 事件 ------ */
  sub:function(event){
    console.log(event);
  },

  add:function(event){

  }
})