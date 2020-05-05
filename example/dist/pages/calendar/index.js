"use strict";

var _index = require("../../dist/index");

Page({
  data: {
    value1: [],
    value2: [],
    value3: [],
    value4: []
  },
  openCalendar1: function openCalendar1() {
    var _this = this;

    (0, _index.$wuxCalendar)().open({
      value: this.data.value1,
      onChange: function onChange(values, displayValues) {
        console.log('onChange', values, displayValues);

        _this.setData({
          value1: displayValues
        });
      }
    });
  },
  openCalendar2: function openCalendar2() {
    var _this2 = this;

    (0, _index.$wuxCalendar)().open({
      value: this.data.value2,
      multiple: true,
      onChange: function onChange(values, displayValues) {
        console.log('onChange', values, displayValues);

        _this2.setData({
          value2: displayValues
        });
      }
    });
  },
  openCalendar3: function openCalendar3() {
    var _this3 = this;

    (0, _index.$wuxCalendar)().open({
      value: this.data.value3,
      direction: 'vertical',
      onChange: function onChange(values, displayValues) {
        console.log('onChange', values, displayValues);

        _this3.setData({
          value3: displayValues
        });
      }
    });
  },
  openCalendar4: function openCalendar4() {
    var _this4 = this;

    var now = new Date();
    var minDate = now.getTime();
    var maxDate = now.setDate(now.getDate() + 7);
    (0, _index.$wuxCalendar)().open({
      value: this.data.value4,
      minDate: minDate,
      maxDate: maxDate,
      onChange: function onChange(values, displayValues) {
        console.log('onChange', values, displayValues);

        _this4.setData({
          value4: displayValues
        });
      }
    });
  }
});