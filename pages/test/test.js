//index.js
//获取应用实例

const app = getApp()
Page({
 
  /**
   * 页面的初始数据
   */

  data: {
    session: [{
      name: 'A场',
      id: 1
    },
    {
      name: 'B场',
      id: 2
    },
    {
      name: 'C场',
      id: 1
    },
    {
      name: 'D场',
      id: 2
    },
    
  ],
    /**
     * 选中的位置
     */
    list: [],
    /**
     * status 
     * 1 可预订 
     * 2 已售完 
     * 3 已选择
     
     * 
     */
    obj: [
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
      ],
 
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        
      ],
 
 
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
       
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
       
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
       
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
       
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
       
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
       
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
       
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
       
      ],
      [{
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
        {
          "status": 1,
          "price": 60
        },
       
      ],
     
 
    ],
    time: [
      
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ],
 
    area: [
    "1号场",
      "2号场",
      "3号场",
      "4号场",
     
    ],
   
    submitTitle: '提交订单',
    /**
     * 日期选中
     */
    datePosition: 0,
    /**
     * 场次选中
     */
    sessionPosition: 0,
    /**
     * 上拖动效果越界
     */
    offsetTop: 0,
    /**
     * 做拖动效果越界
     */
    offsetLeft: 0,
    /**
     * 调整左边的滚动条位置
     */
    left: 0,
    /**
     * 调整上的滚动条位置
     */
    top: 0,
    /**
     * 选座区域最小高度
     */
    min: 200,
    /**
     * 选座区域最大高度
     */
    max: 1500,
 
    /**
     * 场地价格
     */
    price: 0,
  },
  /**
   * 确认订单
   */
  
  confirm: function(e) {
    if (this.data.price <= 0) {
      wx.showToast({
        title: '最少选择1场',
        icon: 'none',
        duration: 2000
      })
      return
    }
 
 
    var session = this.data.session[this.data.sessionPosition].name
    var date = this.data.date[this.data.datePosition].subTitle
    // console.log(session)
    // console.log(date)
    // console.log(this.data.list)
    var data = {
      allPrice: this.data.price,
      session: session,
      date: date,
      list: this.data.list
    }
    console.log(data)

  },
  /**
   * 选择场次
   */
  chooseSession(e) {
    var index = parseInt(e.currentTarget.id)
    if (index != this.data.sessionPosition) {
      this.setData({
        sessionPosition: index
      })
    }
   const name =e.currentTarget.dataset.name
   console.log(name)
   return name
   
     
    // if (index != this.data.sessionPosition) {
    //   this.setData({
    //     sessionPosition : index
        
    //   })
     
    // }
 
  },
  /**
   * 选择日期
   */
  // chooseDate: function(e) {
  //   var index = parseInt(e.currentTarget.id)
  //   if (index != this.data.datePosition) {
  //     this.setData({
  //       datePosition: index
  //     })
  //   }
  // },
  bindChange: function(e) {
    //  console.log(e) 
    var x = e.detail.x
    var y = e.detail.y
    var offsetTop = 0;
    if (y > 0) {
      offsetTop += y
    }
    var offsetLeft = 0;
    if (x > 0) {
      offsetLeft += x;
    }
 
 
    this.setData({
      left: x,
      offsetLeft: offsetLeft,
      offsetTop: offsetTop,
      top: y
    })
  },
  choose: function(e) {
    var index = parseInt(e.currentTarget.id)
    if (index != this.data.areaPosition) {
      this.setData({
       areaPosition: index
      })
    }
   console.log(index)
    var p = e.currentTarget.id.split(",")
    var i = parseInt(p[0])
    var j = parseInt(p[1])
    var id = i + ',' + j // 1,2 
    var item = this.data.obj[i][j]
    console.log(item)
    //    1 可预订 
    //    2 已售完
    //   3 已选择
    //     4 我的预订
    //       5 锁定
    //         
    var status = item.status
  
    /**
     * 可预订
     */
    if (status == 1) {
      //判断数组长度最多选4个座位
      if (this.data.list.length == 4) {
        wx.showToast({
          title: '最多选择4场',
          icon: 'none',
          duration: 2000
        })
        return
      }
      /**
       * 判断上下是否是靠近的
       * i,j
       * 可以选择
       * 0,0
       * 1,0
       * 不能选择
       * 0,0
       * 1,2
       */
      var arithmeticList = []
      var isAdd = false
      for (var index in this.data.list) {
        var temp = this.data.list[index].id.split(",");
        var x = parseInt(temp[0])
        var y = parseInt(temp[1])
        if (y == j) {
          //判断在一列
          arithmeticList.push(x)
          isAdd = true
        }
      };
      /**
       * 判断等差数列
       */
      if (null != arithmeticList && isAdd && arithmeticList.length > 0) {
        var tempArithmeticList = arithmeticList
        tempArithmeticList.push(i)
        if (!this.isArithmeticList(tempArithmeticList)) {
          wx.showToast({
            title: '请选择两个连续的场地',
            icon: 'none',
            duration: 2000
          })
          return
        }
      }
      item.status = 3
      /**
       * 生成框里的数据
       */
      this.data.list.push({
        price: this.data.obj[i][j].price,
        time: this.data.time[i] + '-' + this.data.time[i + 1],
        area: this.data.session[this.data.sessionPosition].name ,
        id: id,
      
      })
      var info=this.data.list[0].time +this.data.list[0].area
    
      // console.log(info)
      // wx.setStorageSync('info', info);
      // this.setData({
      //   info:info
      // })
      
      // console.log(price)
      /**
       * 计算价格
       */
      
      var title = this.getTitle(this.data.list)
      console.log(title)
      this.setData({
        submitTitle: title,
        obj: this.data.obj,
        list: this.data.list
      })
  
    } else if (status == 3) {
      //i j
      var arithmeticList = []
      var isAdd = false
      for (var index in this.data.list) {
        var temp = this.data.list[index].id.split(",");
        var x = parseInt(temp[0])
        var y = parseInt(temp[1])
        if (y == j && x != i) {
          //判断在一列
          arithmeticList.push(x)
          isAdd = true
        }
      };
      if (null != arithmeticList && isAdd && arithmeticList.length > 0) {
        if (!this.isArithmeticList(arithmeticList)) {
          wx.showToast({
            title: '请选择两个连续的场地',
            icon: 'none',
            duration: 2000
          })
          return
        }
      }
      /**
       * 已选择 取消选择
       */
      item.status = 1
      for (var m = 0; m < this.data.list.length; m++) {
        if (this.data.list[m].id == id) {
          this.data.list.splice(m, 1)
          break;
        }
      }
      /**
       * 计算价格
       */
      var title = this.getTitle(this.data.list)
      this.setData({
        submitTitle: title,
        obj: this.data.obj,
        list: this.data.list
      })
    } else if (status == 2) {
      wx.showToast({
        title: '已售空',
        icon: 'none',
        duration: 2000
      })
    }
  
  },




  getTitle: function(list) {
    if (list.length <= 0) {
      this.setData({
        price: 0
      })
      return '提交订单'
    }
    this.data.price = 0
    for (var index in list) {
      this.data.price += list[index].price
    }
    this.setData({
      price: this.data.price
    })
    return '￥' + this.data.price + '提交订单'
  },
  /**
   * 判断是否为等差数列
   */
  isArithmeticList: function(list) {
    var tempArithmeticList = this.sortarr(list)
    for (var i = 0; i < tempArithmeticList.length - 1; i++) {
      var res = tempArithmeticList[i + 1] - tempArithmeticList[i]
      if (res < 0) res = res * -1;
      if (res != 1) {
        wx.showToast({
          title: '请选择两个连续的场地',
          icon: 'none',
          duration: 2000
        })
        return false
      }
    }
    return true
  },
  /**
   * 排序
   */
  sortarr: function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var h = this.data.time.length
    var w = this.data.area.length
    var offsetH = h * 58 + h * 2
    var offsetW = w * 960 + h * 2
    var currentH = offsetH
    console.log(this.data.obj.length)
    // console.log(offsetH)
    /**
     * 最大宽度
     */
    // if (offsetW < 670) {
    //   offsetW = 670
    // }
    // if (offsetH < this.data.min) {
    //   offsetH = this.data.min
    // }
    /**
     * 设置最高高度
     */
    if (offsetH > this.data.max) {
      // offsetH = this.data.max
      currentH = this.data.max
    }
    this.setData({
      offsetH: offsetH,
      offsetW: offsetW,
      currentH: currentH
    })
  },
  // i_name:function(res){
  //   this.setData({
  //     name: res.detail.value
  //   })
  //  },
  
  jumpPage:function(options){
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },
//   onclick: function (e) {
//     var time=e.currentTarget.dataset.time
//     var area=e.currentTarget.dataset.area
//     console.log(time)
//     console.log(area)
//     return time,area
// },
// go:function(e){
//   var time=e.currentTarget.dataset.item.time;
//   console.log(time)
  
// } ,
  tobuy:function(event){
  
  

    wx.showModal({
      title:'订场须知',
      content:"1.本场馆的开放时间为9:00-22:00\r\n 2.请持二维码作为入场凭证 \t 3.请保管好个人物品",
      success:function(res){
        if(res.confirm){
        
          wx.navigateTo({
            url: '/pages/orderInformation/orderInformation'
           })
          
          // wx.showModal({
          //   title: '提示',
          //   content: '预定成功！可在我的订单中查询',
          //   showCancel:false,
          //   success: function(res){
          //     if(res.confirm){
          //       console.log('用户点击了确认')
          //     }
          //   }
          // })
        
        }
      }
    })
  },
  // onReady: function () {
  //   //获得popup组件
  //   this.popup = this.selectComponent("#popup");
  // },
 
  // showPopup() {
  //   this.popup.showPopup();
  // },

  // //取消事件
  // _error() {
  //   console.log('你点击了取消');
  //   this.popup.hidePopup();
  // },
  // //确认事件
  // getUserInfo(){
  //   // console.log('你点击了确认');
  //   this.popup.getUserInfo();
  // },
 
    
  }
)
