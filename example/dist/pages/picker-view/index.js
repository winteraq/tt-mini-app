"use strict";

var seasons = [['王', '马', '蔡'], ['撕葱', '粑粑', '🏀']];
Page({
  data: {
    value: ['蔡', '🏀'],
    options: seasons
  },
  onValueChange: function onValueChange(e) {
    this.setData({
      value: e.detail.value
    });
    console.log('onValueChange', e.detail);
  }
});