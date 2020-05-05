"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Page({
  data: {
    value1: '',
    value2: '',
    value3: '',
    displayValue1: '请选择',
    displayValue2: '请选择',
    displayValue3: '请选择',
    options1: ['法官', '医生', '猎人', '学生', '记者', '其他'],
    options2: [{
      title: 'iPhone 3GS',
      value: '001'
    }, {
      title: 'iPhone 5',
      value: '002'
    }, {
      title: 'iPhone 5S',
      value: '003'
    }, {
      title: 'iPhone 6',
      value: '004'
    }, {
      title: 'iPhone 6S',
      value: '005'
    }, {
      title: 'iPhone 6P',
      value: '006'
    }, {
      title: 'iPhone 6SP',
      value: '007'
    }, {
      title: 'iPhone SE',
      value: '008'
    }, {
      title: 'iPhone 7',
      value: '009'
    }],
    options3: [{
      title: '画画',
      value: '1'
    }, {
      title: '打球',
      value: '2'
    }, {
      title: '唱歌',
      value: '3'
    }, {
      title: '游泳',
      value: '4'
    }, {
      title: '健身',
      value: '5'
    }, {
      title: '睡觉',
      value: '6'
    }]
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
    var index = e.currentTarget.dataset.index;
    console.log("onValueChange".concat(index), e.detail);
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