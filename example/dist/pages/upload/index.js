"use strict";

Page({
  data: {
    fileList: [{
      uid: 0,
      status: 'uploading',
      url: 'http://cdn.skyvow.cn/qrcode.jpg'
    }, {
      uid: 1,
      status: 'done',
      url: 'http://cdn.skyvow.cn/qrcode.jpg'
    }, {
      uid: 2,
      status: 'error',
      url: 'http://cdn.skyvow.cn/qrcode.jpg'
    }]
  },
  onChange: function onChange(e) {
    console.log('onChange', e);
    var _e$detail = e.detail,
        file = _e$detail.file,
        fileList = _e$detail.fileList;

    if (file.status === 'uploading') {
      this.setData({
        progress: 0
      });
      tt.showLoading();
    } else if (file.status === 'done') {
      this.setData({
        imageUrl: file.url
      });
    } // Controlled state should set fileList


    this.setData({
      fileList: fileList
    });
  },
  onSuccess: function onSuccess(e) {
    console.log('onSuccess', e);
  },
  onFail: function onFail(e) {
    console.log('onFail', e);
  },
  onComplete: function onComplete(e) {
    console.log('onComplete', e);
    tt.hideLoading();
  },
  onProgress: function onProgress(e) {
    console.log('onProgress', e);
    this.setData({
      progress: e.detail.file.progress
    });
  },
  onPreview: function onPreview(e) {
    console.log('onPreview', e);
    var _e$detail2 = e.detail,
        file = _e$detail2.file,
        fileList = _e$detail2.fileList;
    tt.previewImage({
      current: file.url,
      urls: fileList.map(function (n) {
        return n.url;
      })
    });
  },
  onRemove: function onRemove(e) {
    var _this = this;

    var _e$detail3 = e.detail,
        file = _e$detail3.file,
        fileList = _e$detail3.fileList;
    tt.showModal({
      content: '确定删除？',
      success: function success(res) {
        if (res.confirm) {
          _this.setData({
            fileList: fileList.filter(function (n) {
              return n.uid !== file.uid;
            })
          });
        }
      }
    });
  }
});
