"use strict";

var _index = require("../../dist/index");

Page({
  data: {
    locks: 0
  },
  onLoad: function onLoad() {
    this.$wuxBackdrop = (0, _index.$wuxBackdrop)();
  },
  retain: function retain() {
    this.$wuxBackdrop.retain();
    this.setData({
      locks: this.$wuxBackdrop.backdropHolds
    });
  },
  release: function release() {
    this.$wuxBackdrop.release();
    this.setData({
      locks: this.$wuxBackdrop.backdropHolds
    });
  }
});