// components/personalAlbum/personalAlbum.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isReview: {
      type: Boolean,
      default: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    slideButtons: [{
      type: 'warn',
      text: '删除'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    slideButtonTap(e) {
      console.log('slide button tap', e.detail)
    }
  }
})
