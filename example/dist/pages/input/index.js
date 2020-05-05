"use strict";

var isTel = function isTel(value) {
  return !/^1[34578]\d{9}$/.test(value);
};

Page({
  onChange: function onChange(e) {
    console.log('onChange', e);
    this.setData({
      error: isTel(e.detail.value),
      value: e.detail.value
    });
  },
  onFocus: function onFocus(e) {
    this.setData({
      error: isTel(e.detail.value)
    });
    console.log('onFocus', e);
  },
  onBlur: function onBlur(e) {
    this.setData({
      error: isTel(e.detail.value)
    });
    console.log('onBlur', e);
  },
  onConfirm: function onConfirm(e) {
    console.log('onConfirm', e);
  },
  onClear: function onClear(e) {
    console.log('onClear', e);
    this.setData({
      error: true,
      value: ''
    });
  },
  onError: function onError() {
    tt.showModal({
      title: 'Please enter 11 digits',
      showCancel: !1
    });
  }
});
