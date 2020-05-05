"use strict";

var _index = require("../../dist/index");

Page({
  showToptips1: function showToptips1() {
    (0, _index.$wuxToptips)().show({
      icon: 'cancel',
      hidden: false,
      text: 'Toptips Title',
      duration: 3000,
      success: function success() {}
    });
  },
  showToptips2: function showToptips2() {
    (0, _index.$wuxToptips)().success({
      hidden: false,
      text: 'Toptips Title',
      duration: 3000,
      success: function success() {}
    });
  },
  showToptips3: function showToptips3() {
    (0, _index.$wuxToptips)().info({
      hidden: false,
      text: 'Toptips Title',
      duration: 3000,
      success: function success() {}
    });
  },
  showToptips4: function showToptips4() {
    (0, _index.$wuxToptips)().warn({
      hidden: false,
      text: 'Toptips Title',
      duration: 3000,
      success: function success() {}
    });
  },
  showToptips5: function showToptips5() {
    (0, _index.$wuxToptips)().error({
      hidden: false,
      text: 'Toptips Title',
      duration: 3000,
      success: function success() {}
    });
  },
  showToptips6: function showToptips6() {
    if (this.timeout) clearTimeout(this.timeout);
    var hide = (0, _index.$wuxToptips)().show({
      icon: 'cancel',
      hidden: false,
      text: 'Toptips Title',
      duration: 3000
    });
    this.timeout = setTimeout(hide, 1000);
  },
  showToptips7: function showToptips7() {
    var hide = (0, _index.$wuxToptips)().show({
      icon: 'cancel',
      hidden: false,
      text: 'Toptips Title',
      duration: 3000
    }); // hide.promise.then(() => console.log('success'))

    hide.then(function () {
      return console.log('success');
    });
  }
});