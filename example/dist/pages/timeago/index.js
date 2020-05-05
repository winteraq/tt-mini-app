"use strict";

Page({
  data: {
    to: null,
    lang: 'zh_CN'
  },
  onLoad: function onLoad() {
    this.setData({
      to: new Date().getTime()
    });
  },
  onChange: function onChange(e) {
    console.log(e);
    var _e$detail = e.detail,
        key = _e$detail.key,
        values = _e$detail.values;
    var lang = values[key];
    this.setData({
      lang: lang
    });
  }
});