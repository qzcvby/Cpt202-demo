// pages/order/order.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    hiddenModal: true,
    currtab: 0,
    swipertab: [{ name: '已完成', index: 0 }],
  },
  listenerButton:function() {
    this.setData({
        hiddenModal: !this.data.hiddenModal
    })
  },

  listenerConfirm:function() {
    this.setData({
        hiddenModal: true
    })
  },

  listenerCancel:function() {
    this.setData({
        hiddenModal: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面渲染完成
    this.getDeviceInfo()
    this.orderShow()
  },
 
  getDeviceInfo: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },
 
  /**
  * @Explain：选项卡点击切换
  */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },
 
  tabChange: function (e) {
    this.setData({ currtab: e.detail.current })
    this.orderShow()
  },
 
  orderShow: function () {
    let that = this
    switch (this.data.currtab) {
      case 0:
        that.alreadyShow()
        break
      case 1:
        that.waitPayShow()
        break
      case 2:
        that.lostShow()
        break
    }
  },
  alreadyShow: function(){
    this.setData({
      alreadyOrder: [{ name: "羽毛球场地", state: "查看入场券", time: "2021-09-30 14:00-16:00", status: "待入场", url: "../../images/bad0.png", money: "132" }, { name: "健身票", state: "查看入场券", time: "2021-10-12 18:00-20:00", status: "待入场", url: "../../images/bad3.jpg", money: "30" }]
    })
  },
 
  waitPayShow:function(){
    this.setData({
      waitPayOrder: [{ name: "足球场一号", state: "待付款", time: "2021-10-14 14:00-16:00", status: "未开始", url: "../../images/bad1.jpg", money: "186" }],
    })
  },
 
  lostShow: function () {
    this.setData({
      lostOrder: [{ name: "足球场一号", state: "已取消", time: "2021-10-4 10:00-12:00", status: "未开始", url: "../../images/bad1.jpg", money: "122" }],
    })
  },
  jumpPage: function(params){
    wx.navigateTo({
      url:"/pages/category/category"
    })
  }
 
  
})
