"use strict";

var _index = require("../../dist/index");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getList = function getList() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return _toConsumableArray(new Array(count)).map(function (n, i) {
    return {
      title: "Pull down ".concat(i + step),
      content: 'Wux Weapp'
    };
  });
};

Page({
  data: {
    items: [],
    count: 0,
    scrollTop: 0
  },
  onLoad: function onLoad() {
    (0, _index.$startWuxRefresher)();
  },
  onPageScroll: function onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    });
  },
  onPulling: function onPulling() {
    console.log('onPulling');
  },
  onRefresh: function onRefresh() {
    var _this = this;

    console.log('onRefresh');
    this.setData({
      count: 10
    });
    setTimeout(function () {
      _this.setData({
        items: getList()
      });

      (0, _index.$stopWuxRefresher)();
    }, 3000);
  },
  onLoadmore: function onLoadmore() {
    var _this2 = this;

    console.log('onLoadmore');
    setTimeout(function () {
      _this2.setData({
        items: [].concat(_toConsumableArray(_this2.data.items), _toConsumableArray(getList(10, _this2.data.count))),
        count: _this2.data.count + 10
      });

      if (_this2.data.items.length < 30) {
        (0, _index.$stopWuxLoader)();
      } else {
        console.log('没有更多数据');
        (0, _index.$stopWuxLoader)('#wux-refresher', _this2, true);
      }
    }, 3000);
  }
});