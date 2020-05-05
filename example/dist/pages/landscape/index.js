"use strict";

Page({
  data: {
    visible1: false,
    visible2: false
  },
  onOpen1: function onOpen1() {
    this.setData({
      visible1: true
    });
  },
  onOpen2: function onOpen2() {
    this.setData({
      visible2: true
    });
  },
  onClose1: function onClose1() {
    this.setData({
      visible1: false
    });
  },
  onClose2: function onClose2() {
    this.setData({
      visible2: false
    });
  }
});