"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Page({
  data: {
    value1: '1',
    value2: '1',
    value3: '1',
    value4: '1',
    value5: '1',
    options: [{
      title: 'Java',
      value: '1'
    }, {
      title: 'PHP',
      value: '2'
    }] // options: ['1', '2'],

  },
  onChange: function onChange(field, e) {
    this.setData(_defineProperty({}, field, e.detail.value));
    console.log('radio发生change事件，携带value值为：', e.detail);
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