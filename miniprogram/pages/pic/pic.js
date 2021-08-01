// pages/pic/pic.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    albumList: [],
    leftPics: [],
    rightPics: [],
    wantList: [{}, {}, {}, {}, {}],
    searchVal: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('2121',options)
    if (options.search) {
      this.setData({
        searchVal: options.search
      })
    }
    
    this.getAlbum(); 
  },

  getAlbum (start = 0) {
    wx.showLoading({
      title: '加载中'
    })
    wx.cloud.callFunction({
      name: 'album',
      data: {
        start,
        count: 5,
        $url: 'albumList'
      }
    }).then((res) => {
      let result = res.result.data
      let picsList = []
      let albumList = []
      result.forEach(item1 => {
        item1.pics = item1.pics.map((item2) => {
          return {
            id: item1._id,
            url: item2
          }
        })
        picsList = picsList.concat(item1.pics)
        albumList = albumList.concat([item1.pics[0]])
      })
      !start && this.setData({
        albumList: albumList.slice(0, 5)
      })
      this.setData({
        list: this.data.list.concat(result),
        leftPics: this.data.leftPics.concat(picsList.filter((item, index) => index % 2 !== 0)),
        rightPics: this.data.rightPics.concat(picsList.filter((item, index) => index % 2 === 0))
      })
      wx.hideLoading()
    })
  },

  onSearch() {
    wx.navigateTo({
      url: `../../pages/searchPic/searchPic`,
    })
  },

  onRelease() {
    const keyword = this.data.searchVal
    wx.navigateTo({
      url: `../../pages/releaseKeyword/releaseKeyword?keyword=${keyword}`,
    })
  },
  goAlbum(){
    wx.navigateTo({
      url: `../../pages/albumDetail/albumDetail`
    })
  },

  goPic() {
    wx.navigateTo({
      url: `../../pages/picDetail/picDetail`
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
    this.getAlbum(this.data.list.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})