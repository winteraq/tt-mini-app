"use strict";

var _index = require("../../dist/index");

var _data = _interopRequireDefault(require("../cascader/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Page({
  data: {
    checkbox: ['1'],
    radio: '1',
    "switch": true,
    picker: [],
    datePicker: [],
    popupSelect: '猎人',
    options1: [],
    options2: ['法官', '医生', '猎人', '学生', '记者', '其他']
  },
  onLoad: function onLoad() {
    this.setData({
      options1: _data["default"]
    });
  },
  onCheckboxChange: function onCheckboxChange(e) {
    var value = e.detail.value;
    var data = this.data.checkbox;
    var index = data.indexOf(value);
    var checkbox = index === -1 ? [].concat(_toConsumableArray(data), [value]) : data.filter(function (n) {
      return n !== value;
    });
    this.setData({
      checkbox: checkbox
    });
  },
  onRadioChange: function onRadioChange(e) {
    this.setData({
      radio: e.detail.value
    });
  },
  onSwitchChange: function onSwitchChange(e) {
    this.setData({
      "switch": e.detail.value
    });
  },
  onValueChange: function onValueChange(e) {
    this.setData({
      picker: e.detail.value
    });
  },
  onDatePickerChange: function onDatePickerChange(e) {
    this.setData({
      datePicker: e.detail.value
    });
  },
  onPopupSelectChange: function onPopupSelectChange(e) {
    this.setData({
      popupSelect: e.detail.value
    });
  },
  formSubmit: function formSubmit(e) {
    console.log('Default Form Submit \n', e.detail.value);
  },
  onSubmit: function onSubmit() {
    var _$wuxForm = (0, _index.$wuxForm)(),
        getFieldsValue = _$wuxForm.getFieldsValue,
        getFieldValue = _$wuxForm.getFieldValue,
        setFieldsValue = _$wuxForm.setFieldsValue;

    var value = getFieldsValue();
    console.log('Wux Form Submit \n', value);
  },
  onChange: function onChange(e) {
    var _e$detail = e.detail,
        form = _e$detail.form,
        changedValues = _e$detail.changedValues,
        allValues = _e$detail.allValues;
    console.log('onChange \n', changedValues, allValues);
  },
  onReset: function onReset() {
    var _$wuxForm2 = (0, _index.$wuxForm)(),
        getFieldsValue = _$wuxForm2.getFieldsValue,
        setFieldsValue = _$wuxForm2.setFieldsValue;

    var fields = getFieldsValue();

    for (var item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (Array.isArray(fields[item])) {
          fields[item] = [];

          if (item === 'slider') {
            fields[item] = [10, 80];
          }
        } else if (typeof fields[item] === 'boolean') {
          fields[item] = false;
        } else if (typeof fields[item] === 'number') {
          fields[item] = 0;
        } else {
          fields[item] = '';
        }
      }
    }

    setFieldsValue(_objectSpread({}, fields));
  }
});