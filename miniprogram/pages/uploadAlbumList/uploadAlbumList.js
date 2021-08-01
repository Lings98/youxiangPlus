// miniprogram/pages/uploadAlbumList/uploadAlbumList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    switchList:[{
      index: 0,
      name:'审核中 · 2'
    },{
      index: 1,
      name:'未通过 · 1'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  switchTap (event){
    console.log(event)
    this.setData({
      activeIndex: event.target.dataset.index
    })
  },

  onUpload () {
    wx.navigateTo({
      url: `../../pages/uploadAlbum/uploadAlbum`,
    })
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