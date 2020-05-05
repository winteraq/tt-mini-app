"use strict";

var _index = require("../../dist/index");

Page({
  data: {},
  onLoad: function onLoad() {},
  showLoading: function showLoading() {
    var _this = this;

    this.$wuxLoading = (0, _index.$wuxLoading)();
    this.$wuxLoading.show({
      text: '数据加载中'
    });
    setTimeout(function () {
      _this.$wuxLoading.hide();
    }, 1500);
  }
});