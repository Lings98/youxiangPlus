// miniprogram/pages/uploadAlbum/uploadAlbum.js
let MAX_IMG_NUM = 9
let MAX_WORD_NUM = 5
let albumName = ''
const db = wx.cloud.database()
let userInfo = {}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pics: [], 
    keyWords: [],
    keyWord: '',
    hiddenmodalput: true ,
    array: ['无版权资源', '转载资源', '原创作品']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
    userInfo = options
  },

  bindPickerChange (e) {
    this.setData({
      index: e.detail.value
    })
  },

  onInput (event) {
    albumName = event.detail.value
  },

  onChooseImage () {
    let count = MAX_IMG_NUM - this.data.pics.length
    wx.chooseImage({
      count,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          pics: this.data.pics.concat(res.tempFilePaths)
        })
      },
    })
  },

  delPic (event) {
    this.data.pics.splice(event.currentTarget.dataset.index, 1)
    this.setData({
      pics: this.data.pics
    })
  },

  prevPic (event) {
    let current = event.currentTarget.dataset.pic
    wx.previewImage({
      current,
      urls: this.data.pics,
    })
  },

  addWord () {
    this.setData({
      hiddenmodalput: false,
      keyWord: ''
    });
  },

  delWord (event) {
    this.data.keyWords.splice(event.currentTarget.dataset.index, 1)
    this.setData({
      keyWords: this.data.keyWords
    })
  },

  onRelease () {
    if (!this.data.pics.length) {
      wx.showModal({
        title: '请添加图片'
      })
      return
    }
    if(!albumName.trim()){
      wx.showModal({
        title: '请输入专辑名称'
      })
      return
    }
    if (!this.data.keyWords.length) {
      wx.showModal({
        title: '请添加关键词'
      })
      return
    }
    wx.showLoading({
      title: '发布中',
      mask: true
    })
    let promiseArr = []
    let fileIDs = []
    for(let i = 0; i < this.data.pics.length; i++){
      let p = new Promise((resolve,reject) => {
        let item = this.data.pics[i]
        let suffix = /\.\w+$/.exec(item)[0]
        wx.cloud.uploadFile({
          cloudPath: 'album/' + Date.now() + '-' + Math.random() * 100000 + suffix,
          filePath: item,
          success: (res) => {
            fileIDs = fileIDs.concat(res.fileID)
            resolve()
          },
          fail: (err) => {
            console.error(err)
            reject()
          }
        })
      })
      promiseArr.push(p)
    }
    Promise.all(promiseArr).then((res) => {
      console.log('all',res)
      db.collection('album').add({
        data: {
          ...userInfo,
          albumName,
          pics: fileIDs,
          keyWords: this.data.keyWords,
          createTime: db.serverDate()
        }
      }).then((res) => {
        wx.hideLoading()
        wx.showToast({
          title: '发布成功',
        })
        // wx.navigateBack()
        // const pages = getCurrentPages()
        // const prevPage = pages[pages.length - 2]
        // prevPage.onPullDownRefresh()
      })
    }).catch((err) => {
      wx.hideLoading()
      wx.showToast({
        title: '发布失败',
      })
    })
  },

  keyInput (event) {
    this.setData({
      keyWord: event.detail.value
    })
  },

  //取消按钮
  cancel () {
    this.setData({
      hiddenmodalput: true,
      keyWord: ''
    });
  },
  //确认
  confirm (event) {
    if (!this.data.keyWord) {
      wx.showModal({
        title: '请输入关键词'
      })
      return
    }
    this.setData({
      hiddenmodalput: true,
      keyWords: this.data.keyWords.concat(this.data.keyWord)
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