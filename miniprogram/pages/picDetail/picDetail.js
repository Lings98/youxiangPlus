// miniprogram/pages/picDetail/picDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentHidden: true,
    isPic: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isIphoneX: this.isIphoneX()
    })
  },

  isIphoneX() {
    let info = wx.getSystemInfoSync();
    if (/iPhone X/i.test(info.model)) {
      return true;
    } else {
      return false;
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

  },

  onOpen () {
    this.setData({
      commentHidden: false
    })
  },
  previewImg(){
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ['http://p1.music.126.net/xhWAaHI-SIYP8ZMzL9NOqg==/109951164167032995.jpg'] // 需要预览的图片http链接列表
    })
  }
})