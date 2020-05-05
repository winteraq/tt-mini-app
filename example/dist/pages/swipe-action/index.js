"use strict";

Page({
  data: {
    right: [{
      text: 'Cancel',
      style: 'background-color: #ddd; color: white'
    }, {
      text: 'Delete',
      style: 'background-color: #F4333C; color: white'
    }],
    left: [{
      text: 'Reply',
      style: 'background-color: #108ee9; color: white'
    }, {
      text: 'Cancel',
      style: 'background-color: #ddd; color: white'
    }]
  },
  onClick: function onClick(e) {
    console.log('onClick', e.detail);

    if (e.detail.data) {
      tt.showModal({
        title: "The data is ".concat(e.detail.data),
        showCancel: !1
      });
    }
  },
  onShare: function onShare() {
    console.log('onShare');
  },
  onCellClick: function onCellClick() {
    console.log('onCellClick');
  }
});
