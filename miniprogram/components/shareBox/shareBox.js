Component({
  properties: {
    //属性值可以在组件使用时指定
    isCanDraw: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        newVal && this.drawPic()
      }
    }
  },
  data: {
    imgDraw: {}, //绘制图片的大对象
    sharePath: '', //生成的分享图
    visible: false
  },
  methods: {
    handleClose() {
      this.setData({
        visible: false
      })
      this.triggerEvent('close')
    },
    drawPic() {
      if (this.data.sharePath) { //如果已经绘制过了本地保存有图片不需要重新绘制
        this.setData({
          visible: true
        })
        this.triggerEvent('initData') 
        return
      }
      wx.showLoading({
        title: '生成中'
      })
      this.setData({
        imgDraw: {
          width: '480rpx',
          height: '880rpx',
          background: '#ffffff',
          position: 'relative',
          views: [
            {
              type: 'image',
              url: '../../images/logo.png',
              css: {
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '400rpx',
                borderRadius: '0px 0px 0px 32px'
              },
            },
            {
              type: 'text',
              text: `你心目中前期宣传爆炸，后期拉垮\n的游戏有哪些？`,
              css: {
                top: '480rpx',
                left: '32rpx',
                lineHeight: '40rpx',
                fontWeight: '500',
                fontSize: '28rpx',
                color: '#262528'
              }
            },
            {
              type: 'text',
              text: `你心目中前期宣传爆炸，后期拉垮的游戏有哪\n些？你心目中前期宣传爆炸，后期拉垮的游戏有\n哪些？你心目中前期宣传爆炸，后期拉垮的游戏\n有哪些呢？`,
              css: {
                top: '576rpx',
                left: '32rpx',
                lineHeight: '32rpx',
                fontWeight: '300',
                fontSize: '20rpx',
                color: '#A3A3A3'
              }
            },
            {
              type: 'text',
              text: `游享Plus`,
              css: {
                top: '752rpx',
                left: '32rpx',
                fontWeight: '500',
                fontSize: '40rpx',
                color: 'rgba(38, 37, 40, 0.16)'
              }
            },
            {
              type: 'text',
              text: `长按识别小程序码 参与互动`,
              css: {
                top: '816rpx',
                left: '32rpx',
                fontWeight: '500',
                fontSize: '20rpx',
                color: '#A3A3A3'
              }
            },
            {
              type: 'image',
              url: '../../images/code.png',
              css: {
                top: '752rpx',
                right: '32rpx',
                width: '96rpx',
                height: '96rpx',
              },
            }
          ]
        }
      })
    },
    onImgErr(e) {
      wx.hideLoading()
      wx.showToast({
        title: '生成分享图失败，请刷新页面重试'
      })
    },
    onImgOK(e) {
      wx.hideLoading()
      this.setData({
        sharePath: e.detail.path,
        visible: true,
      })
      //通知外部绘制完成，重置isCanDraw为false
      this.triggerEvent('initData') 
    },
    preventDefault() { },
    // 保存图片
    handleSavePhoto() {
      wx.showLoading({
        title: '正在保存...',
        mask: true
      })
      wx.saveImageToPhotosAlbum({
        filePath: this.data.sharePath,
        success: () => {
          wx.showToast({
            title: '保存成功'
          })
          setTimeout(() => {
            this.setData({
              visible: false
            })
            this.triggerEvent('close')
          }, 300)
        },
        fail: () => {
          wx.getSetting({
            success: res => {
              let authSetting = res.authSetting
              if (!authSetting['scope.writePhotosAlbum']) {
                wx.showModal({
                  title: '提示',
                  content: '您未开启保存图片到相册的权限，请点击确定去开启权限！',
                  success(res) {
                    if (res.confirm) {
                      wx.openSetting()
                    }
                  }
                })
              }
            }
          })
          setTimeout(() => {
            wx.hideLoading()
            this.setData({
              visible: false
            })
            this.triggerEvent('close')
          }, 300)
        }
      })
    }
  }
})
