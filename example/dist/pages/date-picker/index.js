"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Page({
  data: {
    value1: [],
    value2: [],
    value3: [],
    value4: [],
    value5: [],
    value6: [],
    value7: [],
    value8: [],
    value9: [],
    displayValue1: '请选择',
    displayValue2: '请选择',
    displayValue3: '请选择',
    displayValue4: '请选择',
    displayValue5: '请选择',
    displayValue6: '请选择',
    displayValue7: '请选择',
    displayValue8: '请选择',
    displayValue9: '请选择',
    lang: 'zh_CN'
  },
  onChange: function onChange(e) {
    console.log(e);
    var _e$detail = e.detail,
        key = _e$detail.key,
        values = _e$detail.values;
    var lang = values[key];
    this.setData({
      lang: lang
    });
  },
  setValue: function setValue(values, key, mode) {
    var _this$setData;

    this.setData((_this$setData = {}, _defineProperty(_this$setData, "value".concat(key), values.value), _defineProperty(_this$setData, "displayValue".concat(key), values.label), _this$setData));
  },
  onConfirm: function onConfirm(e) {
    var _e$currentTarget$data = e.currentTarget.dataset,
        index = _e$currentTarget$data.index,
        mode = _e$currentTarget$data.mode;
    this.setValue(e.detail, index, mode);
    console.log("onConfirm".concat(index), e.detail);
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