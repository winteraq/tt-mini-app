"use strict";

Page({
  data: {},
  onLoad: function onLoad() {},
  onChange: function onChange(e) {
    console.log("\u9A8C\u8BC1\u7801\uFF1A".concat(e.detail.value));
  },
  onClick: function onClick() {
    var canvas = this.selectComponent('#custom-canvas');
    canvas && canvas.draw();
  }
});