// components/actionSheet/actionSheet.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    actionSheetHidden: {
      type: Boolean,
      default: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    isCanDraw: false,
    isIphoneX: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    listenerActionSheet(){
      this.setData({
        actionSheetHidden: !this.data.actionSheetHidden
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
  }
})
