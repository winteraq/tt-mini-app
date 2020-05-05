"use strict";

var _index = require("../../dist/index");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Page({
  data: {
    urls: ['http://cdn.skyvow.cn/logo.png', 'http://cdn.skyvow.cn/logo.png', 'http://cdn.skyvow.cn/logo.png', 'http://cdn.skyvow.cn/logo.png']
  },
  onLoad: function onLoad() {},
  showGallery: function showGallery(e) {
    var _this = this,
        _this$$wuxGallery$sho;

    var current = e.currentTarget.dataset.current;
    var urls = this.data.urls;
    this.$wuxGallery = (0, _index.$wuxGallery)();
    this.$wuxGallery.show((_this$$wuxGallery$sho = {
      current: current,
      urls: urls
    }, _defineProperty(_this$$wuxGallery$sho, 'delete', function _delete(current, urls) {
      urls.splice(current, 1);

      _this.setData({
        urls: urls
      });

      return true;
    }), _defineProperty(_this$$wuxGallery$sho, "cancel", function cancel() {
      console.log('Close gallery');
    }), _defineProperty(_this$$wuxGallery$sho, "onTap", function onTap(current, urls) {
      console.log(current, urls);
      return true;
    }), _defineProperty(_this$$wuxGallery$sho, "onChange", function onChange(e) {
      console.log(e);
    }), _this$$wuxGallery$sho));
  },
  showGallery2: function showGallery2(e) {
    var current = e.currentTarget.dataset.current;
    var urls = this.data.urls;
    (0, _index.$wuxGallery)().show(_defineProperty({
      current: current,
      urls: urls.map(function (n) {
        return {
          image: n,
          remark: n
        };
      }),
      indicatorDots: true,
      indicatorColor: '#fff',
      indicatorActiveColor: '#04BE02',
      icon: 'http://cdn.skyvow.cn/logo.png'
    }, 'delete', function _delete(current, urls) {
      console.log('onIconClick');
      return true;
    }));
  },
  previewImage: function previewImage(e) {
    var current = e.currentTarget.dataset.current;
    var urls = this.data.urls;
    tt.previewImage({
      current: current,
      urls: urls
    });
  }
});
