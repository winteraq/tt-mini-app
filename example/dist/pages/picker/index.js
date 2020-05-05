"use strict";

var _data = _interopRequireDefault(require("../cascader/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var seasons = [['王', '马', '蔡'], ['撕葱', '粑粑', '🏀']];
var provinceLite = [{
  value: 'bj',
  label: '北京市'
}, {
  value: 'zj',
  label: '浙江省'
}, {
  value: 'gd',
  label: '广东省',
  disabled: true
}, {
  value: 'hn',
  label: '海南省'
}, {
  value: 'cq',
  label: '重庆市'
}, {
  value: 'sc',
  label: '四川省'
}];
Page({
  data: {
    value1: ['320000', '320800', '320831'],
    value2: [],
    value3: [],
    value4: [],
    asyncCols: 1,
    asyncOptions: provinceLite,
    displayValue1: '请选择',
    displayValue2: '请选择',
    displayValue3: '请选择',
    displayValue4: '请选择',
    options: [],
    seasons: seasons
  },
  onLoad: function onLoad() {
    this.setData({
      options: _data["default"]
    });
  },
  setValue: function setValue(values, key) {
    var _this$setData;

    this.setData((_this$setData = {}, _defineProperty(_this$setData, "value".concat(key), values.value), _defineProperty(_this$setData, "displayValue".concat(key), values.label), _this$setData));
  },
  onConfirm: function onConfirm(e) {
    var index = e.currentTarget.dataset.index;
    this.setValue(e.detail, index);
    console.log("onConfirm".concat(index), e.detail);
  },
  onValueChange: function onValueChange(e) {
    var _this = this;

    var index = e.currentTarget.dataset.index;
    console.log("onValueChange".concat(index), e.detail);

    if (index === '4') {
      this.setValue(e.detail, index);
      this.setData({
        loading: true
      });
      setTimeout(function () {
        var val = e.detail.value;

        var d = _toConsumableArray(_this.data.asyncOptions);

        var value4 = _toConsumableArray(val);

        var colNum = 1;

        if (val[0] === 'zj') {
          d.forEach(function (i) {
            if (i.value === 'zj') {
              colNum = 2;

              if (!i.children) {
                i.children = [{
                  value: 'zj-nb',
                  label: '宁波'
                }, {
                  value: 'zj-hz',
                  label: '杭州'
                }];
                value4.push('zj-nb');
              } else if (val[1] === 'zj-hz') {
                i.children.forEach(function (j) {
                  if (j.value === 'zj-hz') {
                    j.children = [{
                      value: 'zj-hz-xh',
                      label: '西湖区'
                    }];
                    value4.push('zj-hz-xh');
                  }
                });
                colNum = 3;
              }
            }
          });
        } else {
          colNum = 1;
        }

        _this.setData({
          asyncOptions: d,
          asyncCols: colNum,
          value4: value4,
          loading: false
        });
      }, 300);
    }
  },
  onVisibleChange: function onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible
    });
  },
  onClick: function onClick() {
    this.setData({
      visible: true
    });
  }
});