"use strict";

Page({
  data: {
    current: 1
  },
  onChange: function onChange(e) {
    console.log('onChange', e);
    this.setData({
      current: e.detail.current
    });
  }
});