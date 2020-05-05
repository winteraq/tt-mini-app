"use strict";

Page({
  data: {
    value: [0]
  },
  onChange: function onChange(e) {
    console.log('onChange', e.detail.value);
    this.setData({
      value: e.detail.value
    });
  },
  afterChange: function afterChange(e) {
    console.log('afterChange', e.detail.value);
    this.setData({
      value: e.detail.value
    });
  }
});