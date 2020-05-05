"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getDateString() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  return {
    year: date.getFullYear() + '',
    month: date.getMonth() + '',
    day: date.getDate() + '',
    hour: date.getHours() + '',
    minute: date.getMinutes() + ''
  };
}

var _getDateString = getDateString(),
    year = _getDateString.year,
    month = _getDateString.month,
    day = _getDateString.day,
    hour = _getDateString.hour,
    minute = _getDateString.minute;

Page({
  data: {
    value1: [year, month, day, hour, minute],
    value2: [year, month, day],
    value3: [year, month],
    value4: [year],
    value5: [hour, minute],
    value6: [year, month, day, hour, minute, '1'],
    value7: [hour, minute, '1'],
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
  setValue: function setValue(values, key) {
    var _this$setData;

    this.setData((_this$setData = {}, _defineProperty(_this$setData, "value".concat(key), values.value), _defineProperty(_this$setData, "displayValue".concat(key), values.displayValue.join(' ')), _this$setData));
  },
  onValueChange: function onValueChange(e) {
    var index = e.currentTarget.dataset.index;
    this.setValue(e.detail, index);
    console.log("onValueChange".concat(index), e.detail);
  }
});