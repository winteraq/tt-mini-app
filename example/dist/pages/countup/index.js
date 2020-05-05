"use strict";

var _index = require("../../dist/index");

Page({
  data: {},
  onLoad: function onLoad() {
    this.c1 = new _index.$wuxCountUp(1, 1024, 0, 2, {
      printValue: function printValue(value) {
        this.setData({
          c1: value
        });
      }
    });
    this.c2 = new _index.$wuxCountUp(0, 88.88, 2, 2, {
      printValue: function printValue(value) {
        this.setData({
          c2: value
        });
      }
    });
    this.c3 = new _index.$wuxCountUp(0, 520, 0, 2, {
      printValue: function printValue(value) {
        this.setData({
          c3: value
        });
      }
    });
    this.c1.start();
    this.c2.start();
  },
  start: function start() {
    this.c3.start(function () {
      tt.showToast({
        title: '已完成'
      });
    });
  },
  reset: function reset() {
    this.c3.reset();
  },
  update: function update() {
    this.c3.update(1314);
  },
  pauseResume: function pauseResume() {
    this.c3.pauseResume();
  }
});
