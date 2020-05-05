"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var itemCount = 100;

var items = _toConsumableArray(new Array(itemCount)).map(function (v, i) {
  return i;
});

Page({
  data: {
    disableScroll: false,
    height: 300,
    itemHeight: 50,
    itemBuffer: 30,
    scrollToIndex: 0,
    scrollWithAnimation: false
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
  loadData: function loadData(e) {
    var _this = this;

    if (itemCount >= 1000) return;
    if (this.data.disableScroll) return;
    this.setData({
      disableScroll: true
    });
    tt.showLoading();
    setTimeout(function () {
      itemCount += 100;
      items = _toConsumableArray(new Array(itemCount)).map(function (v, i) {
        return i;
      });

      _this.updated(items);

      _this.setData({
        disableScroll: false
      });

      tt.hideLoading();
    }, 3000);
    console.log('loadData', e.detail);
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
  onScrollToLower: function onScrollToLower(e) {
    this.loadData(e);
    console.log('onScrollToLower', e);
  },
  onInputBlur: function onInputBlur(e) {
    var meta = e.currentTarget.dataset.meta;
    this.setData(_defineProperty({}, meta, e.detail.value));
    console.log('onInputBlur', e);
  },
  onSwicth: function onSwicth(e) {
    var meta = e.currentTarget.dataset.meta;
    this.setData(_defineProperty({}, meta, e.detail.value));
    console.log('onSwicth', e);
  }
});
