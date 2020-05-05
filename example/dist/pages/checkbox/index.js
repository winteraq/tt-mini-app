"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Page({
  data: {
    value1: ['1'],
    value2: ['1'],
    value3: ['1'],
    value4: ['1'],
    value5: ['1'],
    options: [{
      title: 'Java',
      value: '1'
    }, {
      title: 'PHP',
      value: '2'
    }] // options: ['1', '2'],

  },
  onChange: function onChange(field, e) {
    var value = e.detail.value;
    var data = this.data[field];
    var index = data.indexOf(value);
    var current = index === -1 ? [].concat(_toConsumableArray(data), [value]) : data.filter(function (n) {
      return n !== value;
    });
    this.setData(_defineProperty({}, field, current));
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
  },
  onChange1: function onChange1(e) {
    this.onChange('value1', e);
  },
  onChange2: function onChange2(e) {
    this.onChange('value2', e);
  },
  onChange3: function onChange3(e) {
    this.onChange('value3', e);
  },
  onChange4: function onChange4(e) {
    this.onChange('value4', e);
  },
  onChange5: function onChange5(e) {
    this.onChange('value5', e);
  },
  formSubmit: function formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
  }
});