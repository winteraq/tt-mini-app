"use strict";

var _index = require("../../dist/index");

Page({
  data: {},
  onLoad: function onLoad() {},
  showNotification: function showNotification() {
    this.closeNotification = (0, _index.$wuxNotification)().show({
      image: 'http://cdn.skyvow.cn/logo.png',
      title: '宝宝',
      text: '嘤嘤嘤，人家拿小拳拳捶你胸口!!!',
      data: {
        message: '逗你玩的!!!'
      },
      duration: 3000,
      onClick: function onClick(data) {
        console.log(data);
      },
      onClose: function onClose(data) {
        console.log(data);
      }
    });
  },
  showNotificationReturn: function showNotificationReturn() {
    if (this.timeout) clearTimeout(this.timeout);
    var hide = (0, _index.$wuxNotification)().show({
      image: 'http://cdn.skyvow.cn/logo.png',
      title: '宝宝',
      text: '嘤嘤嘤，人家拿小拳拳捶你胸口!!!',
      data: {
        message: '逗你玩的!!!'
      },
      duration: 3000
    });
    this.timeout = setTimeout(hide, 1000);
  },
  showNotificationPromise: function showNotificationPromise() {
    var hide = (0, _index.$wuxNotification)().show({
      image: 'http://cdn.skyvow.cn/logo.png',
      title: '宝宝',
      text: '嘤嘤嘤，人家拿小拳拳捶你胸口!!!',
      data: {
        message: '逗你玩的!!!'
      },
      duration: 3000
    }); // hide.promise.then(() => console.log('success'))

    hide.then(function () {
      return console.log('success');
    });
  }
});