"use strict";

var _require = require('../../dist/index'),
    $wuxActionSheet = _require.$wuxActionSheet;

Page({
  data: {},
  onLoad: function onLoad() {},
  showActionSheet1: function showActionSheet1() {
    tt.showActionSheet({
      itemList: ['实例菜单', '实例菜单']
    });
  },
  showActionSheet2: function showActionSheet2() {
    $wuxActionSheet().showSheet({
      titleText: '自定义操作',
      buttons: [{
        text: 'Go Dialog'
      }, {
        text: 'Go Toast'
      }],
      buttonClicked: function buttonClicked(index, item) {
        index === 0 && tt.navigateTo({
          url: '/pages/dialog/index'
        });
        index === 1 && tt.navigateTo({
          url: '/pages/toast/index'
        });
        return true;
      },
      cancelText: '取消',
      cancel: function cancel() {},
      destructiveText: '删除',
      destructiveButtonClicked: function destructiveButtonClicked() {}
    });
  },
  showActionSheet3: function showActionSheet3() {
    if (this.timeout) clearTimeout(this.timeout);
    var hideSheet = $wuxActionSheet().showSheet({
      theme: 'wx',
      titleText: '三秒后自动关闭',
      buttons: [{
        text: '实例菜单'
      }, {
        text: '实例菜单'
      }],
      buttonClicked: function buttonClicked(index, item) {
        return true;
      }
    });
    this.timeout = setTimeout(hideSheet, 3000);
  }
});
