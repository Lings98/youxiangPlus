// miniprogram/pages/editMe/editMe.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: wx.getStorageSync('userInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  uploadpPortrait () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          userInfo: {
            ...this.data.userInfo,
            portrait: res.tempFilePaths
          }
        })
      },
    })
  },

  eidtName (event) {
    this.setData({
      userInfo: {
        ...this.data.userInfo,
        name: event.detail.value
      }
    })
    
    // db.collection('users').add({
    //   data: {
    //     ...this.data.userInfo,
    //     createTime: db.serverDate()
    //   }
    // }).then((res) => {
    //   wx.showToast({
    //     title: '修改成功'
    //   })
    //   // wx.navigateBack()
    //   // const pages = getCurrentPages()
    //   // const prevPage = pages[pages.length - 2]
    //   // prevPage.onPullDownRefresh()
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})