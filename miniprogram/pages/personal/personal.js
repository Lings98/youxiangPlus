// miniprogram/pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    swiperImgUrls: [{
      index: 0,
      url: 'http://p1.music.126.net/oeH9rlBAj3UNkhOmfog8Hw==/109951164169407335.jpg',
    },
    {
      index: 1,
      url: 'http://p1.music.126.net/xhWAaHI-SIYP8ZMzL9NOqg==/109951164167032995.jpg',
    },
    {
      index: 2,
      url: 'http://p1.music.126.net/Yo-FjrJTQ9clkDkuUCTtUg==/109951164169441928.jpg',
    }],
    switchIndex: 1,
    switchList: [
      {
        index: 0,
        text: '互动'
      }, {
        index: 1,
        text: '关注'
      }, {
        index: 2,
        text: '专辑'
      }
    ],
    slideButtons:  [{
      type: 'warn',
      text: '删除',
    }]
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  slideButtonTap(e) {
    console.log('slide button tap', e.detail)
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

  onChange (e) {
    const index = e.detail.current;
    this.setData({
      current: index //修改current的值
    });
  },

 
  onSwitch(e) {
    const index = e.target.dataset.index;
    this.setData({
      switchIndex: index //修改switchIndex的值
    });
  },

  goBack () {
    wx.navigateBack()
  }
  

  
})