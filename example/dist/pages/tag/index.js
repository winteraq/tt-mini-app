"use strict";

Page({
  data: {
    visible: true
  },
  onClose: function onClose(e) {
    console.log('onClose', e);
  },
  onChange: function onChange(e) {
    var _this = this;

    console.log('onChange', e);

    if (!e.detail.value) {
      tt.showModal({
        title: 'Sure to delete?',
        success: function success(res) {
          if (res.confirm) {
            _this.setData({
              visible: e.detail.value
            });
          }
        }
      });
    }
  },
  onToggle: function onToggle() {
    this.setData({
      visible: !this.data.visible
    });
  }
});
