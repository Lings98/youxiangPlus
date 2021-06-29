// miniprogram/pages/talkDetail/talkDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    isCanDraw: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nickName: wx.getStorageSync('nickName') || '',
      avatarUrl: wx.getStorageSync('avatarUrl') || ''
    })
  },

  handleClose() {
    this.setData({
      isCanDraw: !this.data.isCanDraw
    })
  },

  getUserInfo(e) {
    console.log(e.detail)
    if (e.detail.errMsg === 'getUserInfo:ok') {
      wx.setStorageSync('avatarUrl', e.detail.userInfo.avatarUrl)
      wx.setStorageSync('nickName', e.detail.userInfo.nickName)
      this.setData({
        nickName: e.detail.userInfo.nickName,
        avatarUrl: e.detail.userInfo.avatarUrl,
        isCanDraw: !this.data.isCanDraw
      })
    }
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