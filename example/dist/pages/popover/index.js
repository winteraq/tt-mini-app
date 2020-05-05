"use strict";

Page({
  data: {
    visible: false
  },
  hide: function hide() {
    this.setData({
      visible: false
    });
  },
  onChange: function onChange(e) {
    console.log('onChange', e);
    this.setData({
      visible: e.detail.visible
    });
  }
});