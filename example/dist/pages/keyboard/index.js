"use strict";

var _index = require("../../dist/index");

Page({
  data: {},
  onLoad: function onLoad() {},
  open: function open() {
    (0, _index.$wuxKeyBoard)().show({
      callback: function callback(value) {
        console.log("\u8F93\u5165\u7684\u5BC6\u7801\u662F\uFF1A".concat(value));
        return true;
      }
    });
  },
  openWitdhDisorder: function openWitdhDisorder() {
    (0, _index.$wuxKeyBoard)().show({
      disorder: true,
      callback: function callback(value) {
        console.log("\u8F93\u5165\u7684\u5BC6\u7801\u662F\uFF1A".concat(value));
        return false;
      }
    });
  },
  openWithPromiseCallback: function openWithPromiseCallback() {
    var http = function http(obj) {
      return new Promise(function (resolve, reject) {
        obj.success = function (res) {
          return resolve(res);
        };

        obj.fail = function (res) {
          return reject(res);
        };

        tt.request(obj);
      });
    };

    (0, _index.$wuxKeyBoard)().show({
      callback: function callback(value) {
        console.log("\u8F93\u5165\u7684\u5BC6\u7801\u662F\uFF1A".concat(value));
        tt.showLoading({
          title: '验证支付密码'
        });
        return http({
          url: 'https://www.skyvow.cn/api/user/sign/in',
          method: 'POST',
          data: {
            username: 'admin',
            password: value
          }
        }).then(function (res) {
          var data = res.data;
          console.log(data);
          tt.hideLoading();
          tt.showToast({
            title: data.meta.message,
            duration: 3000
          });

          if (data.meta.code !== 0) {
            return Promise.reject(data.meta.message);
          }
        });
      }
    });
  },
  openPlain: function openPlain() {
    var fn = function fn(title) {
      tt.hideLoading();
      tt.showToast({
        title: title,
        duration: 3000
      });
    };

    (0, _index.$wuxKeyBoard)().show({
      className: 'className',
      titleText: '安全键盘',
      cancelText: '取消',
      inputText: '输入数字密码',
      showCancel: true,
      disorder: false,
      maxlength: 4,
      closeOnReject: false,
      callback: function callback(value) {
        console.log("\u8F93\u5165\u7684\u5BC6\u7801\u662F\uFF1A".concat(value));
        tt.showLoading({
          title: '验证支付密码'
        });
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            return Math.ceil(Math.random() * 10) >= 6 ? resolve(fn('密码正确')) : reject(fn('密码错误'));
          }, 3000);
        });
      }
    });
  },
  openTimed: function openTimed() {
    clearTimeout(this.timeout);
    var hide = (0, _index.$wuxKeyBoard)().show({
      password: false,
      maxlength: -1,
      onChange: function onChange(value) {
        console.log("\u8F93\u5165\u7684\u5BC6\u7801\u662F\uFF1A".concat(value));
      },
      onClose: function onClose(value) {
        return false;
      }
    });
    this.timeout = setTimeout(hide, 3000);
  }
});
