"use strict";

Page({
  data: {
    current: 1
  },
  onClick: function onClick() {
    var current = this.data.current + 1 > 2 ? 0 : this.data.current + 1;
    this.setData({
      current: current
    });
  }
});