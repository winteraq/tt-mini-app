"use strict";

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Page({
  data: {
    options1: _data["default"],
    value1: [],
    options2: [{
      value: 'beijing',
      label: '北京',
      isLeaf: false
    }, {
      value: 'hangzhou',
      label: '杭州',
      isLeaf: false
    }],
    value2: []
  },
  onOpen1: function onOpen1() {
    this.setData({
      visible1: true
    });
  },
  onClose1: function onClose1() {
    this.setData({
      visible1: false
    });
  },
  onChange1: function onChange1(e) {
    this.setData({
      title1: e.detail.options.map(function (n) {
        return n.label;
      }).join('/')
    });
    console.log('onChange1', e.detail);
  },
  onOpen2: function onOpen2() {
    this.setData({
      visible2: true
    });
  },
  onClose2: function onClose2() {
    this.setData({
      visible2: false
    });
  },
  onChange2: function onChange2(e) {
    console.log('onChange2', e.detail);
    this.setData({
      value2: e.detail.value,
      title2: e.detail.done && e.detail.options.map(function (n) {
        return n.label;
      }).join('/')
    });
  },
  onLoadOptions: function onLoadOptions(e) {
    var _this = this;

    console.log('onLoadOptions', e.detail);
    var value = e.detail.value;

    var options2 = _toConsumableArray(this.data.options2);

    tt.showLoading({
      mask: true
    });
    setTimeout(function () {
      if (value[value.length - 1] === 'beijing') {
        options2.forEach(function (n) {
          if (n.value === 'beijing') {
            n.children = [{
              value: 'baidu',
              label: '百度'
            }, {
              value: 'sina',
              label: '新浪'
            }];
          }
        });
      } else if (value[value.length - 1] === 'hangzhou') {
        options2.forEach(function (n) {
          if (n.value === 'hangzhou') {
            n.children = [{
              value: 'ali',
              label: '阿里巴巴'
            }, {
              value: '163',
              label: '网易'
            }];
          }
        });
      }

      tt.hideLoading();

      _this.setData({
        value2: value,
        options2: options2
      });
    }, 1000);
  }
});
