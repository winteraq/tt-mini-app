"use strict";

var _index = require("../../dist/index");

Page({
  data: {},
  onLoad: function onLoad() {
    this.c1 = new _index.$wuxCountDown({
      date: 'June 7, 2087 15:03:25',
      render: function render(date) {
        var years = this.leadingZeros(date.years, 4) + ' 年 ';
        var days = this.leadingZeros(date.days, 3) + ' 天 ';
        var hours = this.leadingZeros(date.hours, 2) + ' 时 ';
        var min = this.leadingZeros(date.min, 2) + ' 分 ';
        var sec = this.leadingZeros(date.sec, 2) + ' 秒 ';
        this.setData({
          c1: years + days + hours + min + sec
        });
      }
    });
    this.c3 = new _index.$wuxCountDown({
      date: +new Date() + 60000 * 20,
      render: function render(date) {
        var min = this.leadingZeros(date.min, 2) + ' 分 ';
        var sec = this.leadingZeros(date.sec, 2) + ' 秒 ';
        this.setData({
          c3: min + sec
        });
      }
    });
  },
  vcode: function vcode() {
    if (this.c2 && this.c2.interval) return !1;
    this.c2 = new _index.$wuxCountDown({
      date: +new Date() + 60000,
      onEnd: function onEnd() {
        this.setData({
          c2: '重新获取验证码'
        });
      },
      render: function render(date) {
        var sec = this.leadingZeros(date.sec, 2) + ' 秒 ';
        date.sec !== 0 && this.setData({
          c2: sec
        });
      }
    });
  },
  stop: function stop() {
    this.c3.stop();
  },
  start: function start() {
    this.c3.start();
  },
  update: function update() {
    this.c3.update(+new Date() + 60000 * 30);
  }
});