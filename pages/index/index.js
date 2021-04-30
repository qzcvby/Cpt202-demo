// 引入用来发送请求的方法 一定要把路径补全
// import {request} from "../../request/index.js";

var app = getApp()
//Page Object
Page({
  data: {
    //轮播图数组
    swiperList:['https://z3.ax1x.com/2021/04/18/cIYnqx.jpg',
          'https://z3.ax1x.com/2021/04/18/cIYeMR.jpg',
    'https://z3.ax1x.com/2021/04/18/cIYKZ6.jpg',
    'https://z3.ax1x.com/2021/04/18/cIYms1.jpg'],
    
    //导航数组
    catesList:['https://z3.ax1x.com/2021/04/18/cIo3tK.png',
    'https://z3.ax1x.com/2021/04/18/cIoQTx.png',
      'https://z3.ax1x.com/2021/04/18/cIoM01.png',
      'https://z3.ax1x.com/2021/04/18/cIo1k6.png',
      ],
    
  },
  getLocation:function(){
    var that=this
    wx.getLocation({
      type: 'wgs84', 
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude:31.277002,//要去的纬度-地址
          longitude:120.749341,//要去的经度-地址
          name: "西交利物浦大学体育馆",
          address: 'XJTLU 大学体育馆'
        })
      }
    })
  },
  //options(Object)
  onLoad: function(options){
    var that=this
    // wx.getLocation({
    //   type: 'wgs84', 
    //   success: function (res) {
    //     wx.openLocation({//​使用微信内置地图查看位置。
    //       latitude: 31.277002,//要去的纬度-地址
    //       longitude: 120.749341,//要去的经度-地址
    //       name: "西交利物浦大学体育馆",
    //       address: 'XJTLU 大学体育馆'
    //     })
    //   }
    // })
    //页面开始加载 就会触发 
    //1 发送异步请求，获取轮播图数据 优化通过es6 promise解决问题
    //2 
    // var reqTask = wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result)=>{
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   },
    // });

    // request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    // .then(result=>{
    //           this.setData({
    //       swiperList:result.data.message
    //     })
    // })
    //this.getSwiperList();
    //this.getSwiperList1();

    //this.getCateList();
  },
  //获取轮播图数据
  getSwiperList(){
    request({url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    .then(result=>{
          this.setData({
          swiperList:result.data.message
        })
    })
  },
  //获取分类导航数据
  getCateList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(result=>{
              this.setData({
          catesList:result.data.message
        })
    })
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});