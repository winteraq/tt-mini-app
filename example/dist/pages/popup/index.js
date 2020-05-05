"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Page({
  data: {
    visible1: false,
    visible2: false
  },
  open1: function open1() {
    this.setData({
      visible1: true
    });
  },
  open2: function open2() {
    this.setData({
      visible2: true
    });
  },
  close1: function close1() {
    this.setData({
      visible1: false
    });
  },
  close2: function close2() {
    this.setData({
      visible2: false
    });
  },
  onClose: function onClose(key) {
    console.log('onClose');
    this.setData(_defineProperty({}, key, false));
  },
  onClose1: function onClose1() {
    this.onClose('visible1');
  },
  onClose2: function onClose2() {
    this.onClose('visible2');
  },
  onClosed1: function onClosed1() {
    console.log('onClosed');
  }
});