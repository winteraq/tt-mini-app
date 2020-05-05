"use strict";

Page({
  data: {
    value: ''
  },
  onChange: function onChange(e) {
    console.log('onChange', e);
    this.setData({
      value: e.detail.value
    });
  },
  onFocus: function onFocus(e) {
    console.log('onFocus', e);
  },
  onBlur: function onBlur(e) {
    console.log('onBlur', e);
  },
  onConfirm: function onConfirm(e) {
    console.log('onConfirm', e);
  },
  onClear: function onClear(e) {
    console.log('onClear', e);
    this.setData({
      value: ''
    });
  },
  onCancel: function onCancel(e) {
    console.log('onCancel', e);
  }
});