"use strict";

Page({
  onSuccess: function onSuccess() {
    tt.navigateTo({
      url: '../../pages/result/success'
    });
  },
  onError: function onError() {
    tt.navigateTo({
      url: '../../pages/result/error'
    });
  }
});
