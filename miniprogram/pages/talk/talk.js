// pages/talk/talk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 1,
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
    talkList: [{
      index: 0,
      imgUrl: 'http://p1.music.126.net/xhWAaHI-SIYP8ZMzL9NOqg==/109951164167032995.jpg',
      title: '你心目中前期宣传爆炸，后期拉垮的游戏有哪些？'
    }, {
      index: 1,
      imgUrl: 'http://p1.music.126.net/xhWAaHI-SIYP8ZMzL9NOqg==/109951164167032995.jpg',
      title: '2你心目中前期宣传爆炸，后期拉垮的游戏有哪些？'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://117.28.175.22:8000/api/login/', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log('sss',res.data)
      },
      fail (err) {
        console.log('eee',err)
      }
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

  },

  onChange: function (e) {
    const index = e.detail.current;
    this.setData({
      current: index //修改current的值
    });
  }
})