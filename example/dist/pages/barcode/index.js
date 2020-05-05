"use strict";

Page({
  data: {
    number: '9787115335524',
    options: {
      // number: true,
      // prefix: true,
      // color: 'black',
      // debug: false,
      onValid: function onValid() {
        console.log('onValid');
      },
      onInvalid: function onInvalid() {
        console.log('onInvalid');
      },
      onSuccess: function onSuccess() {
        console.log('onSuccess');
      },
      onError: function onError() {
        console.log('onError');
      }
    }
  },
  onChange: function onChange(e) {
    this.setData({
      number: e.detail.value
    });
  }
});