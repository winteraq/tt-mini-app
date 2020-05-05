"use strict";

var _index = require("../../dist/index");

var _data = _interopRequireDefault(require("../cascader/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Page({
  data: {
    value1: [],
    value2: [],
    value3: [],
    options: [],
    province: [],
    loading: true
  },
  onLoad: function onLoad() {
    var _this = this;

    this.setData({
      options: _data["default"]
    });
    setTimeout(function () {
      _this.setData({
        province: _data["default"].map(function (v, i) {
          return _objectSpread(_objectSpread({}, v), {}, {
            disabled: i > 3,
            children: null
          });
        }),
        loading: false
      });
    }, 3000);
  },
  onValueChange1: function onValueChange1(e) {
    this.setData({
      value1: e.detail.value
    });
    console.log('onValueChange1', e.detail);
  },
  onValueChange2: function onValueChange2(e) {
    this.setData({
      value2: e.detail.value
    });
    console.log('onValueChange2', e.detail);
  },
  onValueChange3: function onValueChange3(e) {
    this.setData({
      value3: e.detail.value
    });
    console.log('onValueChange3', e.detail);
  }
});