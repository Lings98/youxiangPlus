// components/picButton/picButton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isPic: {
      type: Boolean,
      default: false
    },
    isIphoneX: {
      type: Boolean,
      default: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showActionsheet: false,
    groups: [
      { text: 'view > button', value: 1 },
      { text: '生成分享海报', value: 2 }
    ],
    isPic: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close: function () {
      this.setData({
        showActionsheet: false
      })
    },
    btnClick(e) {
      if (e.detail.value === 1) {
        
        // wx.showShareMenu({
        //   withShareTicket: true,
        //   menus: ['shareAppMessage', 'shareTimeline'],
        //   success () {
        //     console.log('success')
        //   },
        //   fail () {
        //     console.log('fail')
        //   }
        // })
      } else if (e.detail.value === 2) {
        console.log('分享成海报')
      }
      this.close()
    },
    openAction() {
      this.setData({
        showActionsheet: true
      })
    },
    onEdit() {
      wx.navigateTo({
        url: `../../pages/uploadAlbum/uploadAlbum`,
      })
    },
    onComment() {
      this.triggerEvent('onOpen')
    }
  }
})
