"use strict";

Page({
  data: {
    scrollTop: 0
  },
  onPageScroll: function onPageScroll(e) {
    console.log('onPageScroll', e.scrollTop);
    this.setData({
      scrollTop: e.scrollTop
    });
  },
  onLoad: function onLoad() {
    getApp().checkAudio();
  },
  onStick: function onStick(e) {
    console.log('onStick', e.detail);
  },
  onUnStick: function onUnStick(e) {
    console.log('onUnStick', e.detail);
  }
});