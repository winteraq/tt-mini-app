"use strict";

Page({
  onClick: function onClick(e) {
    this.setData({
      spinning: !this.data.spinning
    });
  }
});