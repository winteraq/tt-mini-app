"use strict";

Page({
  data: {
    icon: {
      type: 'warn',
      color: '#ef473a'
    },
    buttons: [{
      type: 'balanced',
      block: true,
      text: '确定'
    }, {
      type: 'light',
      block: true,
      text: '返回'
    }]
  },
  onClick: function onClick(e) {
    console.log(e);
    var index = e.detail.index;
    index === 0 && tt.showModal({
      title: 'Thank you for your support!',
      showCancel: !1
    });
    index === 1 && tt.navigateBack();
  }
});
