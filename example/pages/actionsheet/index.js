const { $wuxActionSheet } = require('../../dist/index')
Page({
  data: {},
  onLoad() {},
  showActionSheet1() {
    tt.showActionSheet({
      itemList: ['实例菜单', '实例菜单'],
    })
  },
  showActionSheet2() {
    $wuxActionSheet().then((res) => {
      res.showSheet({
        titleText: '自定义操作',
        buttons: [
          {
            text: 'Go Dialog',
          },
          {
            text: 'Go Toast',
          },
        ],
        buttonClicked(index, item) {
          index === 0 &&
            tt.navigateTo({
              url: '/pages/dialog/index',
            })

          index === 1 &&
            tt.navigateTo({
              url: '/pages/toast/index',
            })

          return true
        },
        cancelText: '取消',
        cancel() {},
        destructiveText: '删除',
        destructiveButtonClicked() {},
      })
    })
  },
  showActionSheet3() {
    if (this.timeout) clearTimeout(this.timeout)

    const hideSheet = $wuxActionSheet((res) => {
      res.showSheet({
        theme: 'wx',
        titleText: '三秒后自动关闭',
        buttons: [
          {
            text: '实例菜单',
          },
          {
            text: '实例菜单',
          },
        ],
        buttonClicked(index, item) {
          return true
        },
      })
    })

    this.timeout = setTimeout(hideSheet, 3000)
  },
})
