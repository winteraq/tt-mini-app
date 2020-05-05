"use strict";

Page({
  data: {
    value: 'https://github.com/wux-weapp/wux-weapp',
    fgColor: 'black'
  },
  onChange: function onChange(e) {
    var value = e.detail.value;
    var fgColor = this.randomColor();
    this.setData({
      value: value,
      fgColor: fgColor
    });
  },
  previewImage: function previewImage() {
    // 在自定义组件下，当前组件实例的 this，以操作组件内 <canvas> 组件
    var that = this.selectComponent('#qrcode');
    tt.canvasToTempFilePath({
      canvasId: 'wux-qrcode',
      success: function success(res) {
        tt.previewImage({
          urls: [res.tempFilePath]
        });
      }
    }, that);
  },
  randomColor: function randomColor() {
    var colorStr = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase();
    var length = colorStr.length;
    var prefixStr = '000000'.substring(0, 6 - colorStr.length);
    return "#".concat(prefixStr).concat(colorStr);
  }
});
