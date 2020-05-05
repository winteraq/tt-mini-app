"use strict";

Page({
  data: {
    current: 1
  },
  onLoad: function onLoad() {
    this.key = Math.floor(Math.random() * 3);
  },
  onChange: function onChange(e) {
    console.log(e);

    if (e.detail.key === this.key) {
      return tt.showModal({
        title: 'No switching is allowed',
        showCancel: !1
      });
    }

    this.setData({
      current: e.detail.key
    });
  }
});
