// components/comment/comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    actionSheetHidden: {
      type: Boolean,
      default: true
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    commentVal: ''
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
    bindTextAreaBlur: function(e) {
      this.setData({
        commentVal: e.detail.value
      })
    },
    onClose(){
      this.setData({
        actionSheetHidden: true
      })
    }
  }
})
