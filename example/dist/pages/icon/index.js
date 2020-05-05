"use strict";

var _data = require("./data");

Page({
  data: {
    style: 'ios',
    icons: _data.icons,
    logos: _data.logos
  },
  onChange: function onChange(e) {
    var style = e.detail.key === 0 ? 'ios' : 'md';
    this.setData({
      style: style
    });
  }
});