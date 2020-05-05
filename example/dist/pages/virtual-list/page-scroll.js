"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var height = tt.getSystemInfoSync().windowHeight;
var itemCount = 1000;

var items = _toConsumableArray(new Array(itemCount)).map(function (v, i) {
  return i;
});

Page({
  data: {
    disableScroll: false,
    height: height
  },
  onLoad: function onLoad() {
    this.updated(items);
  },
  updated: function updated(items) {
    var startTime = Date.now();
    this.virtualList = this.virtualList || this.selectComponent('#wux-virtual-list');
    this.virtualList.render(items, function () {
      var diffTime = Date.now() - startTime;
      console.log("onSuccess - render time: ".concat(diffTime, "ms"));
    });
  },
  loadData: function loadData() {
    var _this = this;

    if (itemCount >= 10000) return;
    if (this.data.disableScroll) return;
    this.setData({
      disableScroll: true
    });
    tt.showLoading();
    setTimeout(function () {
      itemCount += 1000;
      items = _toConsumableArray(new Array(itemCount)).map(function (v, i) {
        return i;
      });

      _this.updated(items);

      _this.setData({
        disableScroll: false
      });

      tt.hideLoading();
      tt.stopPullDownRefresh();
    }, 3000);
    console.log('loadData');
  },
  onChange: function onChange(e) {
    var _e$detail = e.detail,
        startIndex = _e$detail.startIndex,
        endIndex = _e$detail.endIndex;

    if (this.data.startIndex !== startIndex || this.data.endIndex !== endIndex) {
      this.setData(e.detail);
      console.log('onChange', e.detail);
    }
  },
  onPageScroll: function onPageScroll(e) {
    // 当页面滚动时调用组件 scrollHandler 方法
    this.virtualList.scrollHandler({
      detail: e
    }); // console.log('onPageScroll', e)
  },
  onReachBottom: function onReachBottom() {
    this.loadData();
    console.log('onReachBottom');
  },
  onPullDownRefresh: function onPullDownRefresh() {
    itemCount = 0;
    this.loadData();
    console.log('onPullDownRefresh');
  }
});
