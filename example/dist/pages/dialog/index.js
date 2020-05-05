"use strict";

var _index = require("../../dist/index");

Page({
  data: {},
  onLoad: function onLoad() {},
  open: function open() {
    if (this.timeout) clearTimeout(this.timeout);
    var hideDialog = (0, _index.$wuxDialog)().open({
      resetOnClose: true,
      title: '三秒后自动关闭',
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      buttons: [{
        text: '取消'
      }, {
        text: '确定',
        type: 'primary',
        onTap: function onTap(e) {
          console.log(e);
        }
      }]
    });
    this.timeout = setTimeout(hideDialog, 3000);
  },
  confirm: function confirm() {
    (0, _index.$wuxDialog)().confirm({
      resetOnClose: true,
      closable: true,
      title: '定制冰激凌',
      content: '你确定要吃我的冰淇淋吗？',
      onConfirm: function onConfirm(e) {
        console.log('凭什么吃我的冰淇淋！');
      },
      onCancel: function onCancel(e) {
        console.log('谢谢你不吃之恩！');
      }
    });
  },
  alert: function alert() {
    (0, _index.$wuxDialog)().alert({
      resetOnClose: true,
      title: '不要吃果冻',
      content: '它们可能是用旧的皮鞋帮做的！',
      onConfirm: function onConfirm(e) {
        console.log('感谢上帝，你没吃鞋帮！');
      }
    });
  },
  prompt: function prompt() {
    var alert = function alert(content) {
      (0, _index.$wuxDialog)('#wux-dialog--alert').alert({
        resetOnClose: true,
        title: '提示',
        content: content
      });
    };

    (0, _index.$wuxDialog)().prompt({
      resetOnClose: true,
      title: '提示',
      content: '密码为8位数字',
      fieldtype: 'number',
      password: !0,
      defaultText: '',
      placeholder: '请输入Wi-Fi密码',
      maxlength: 8,
      onConfirm: function onConfirm(e, response) {
        var content = response.length === 8 ? "Wi-Fi\u5BC6\u7801\u5230\u624B\u4E86: ".concat(response) : '请输入正确的Wi-Fi密码';
        alert(content);
      }
    });
  },
  custom: function custom() {
    var alert = function alert(content) {
      (0, _index.$wuxDialog)('#wux-dialog--alert').alert({
        resetOnClose: true,
        title: '提示',
        content: content
      });
    };

    (0, _index.$wuxDialog)().open({
      resetOnClose: true,
      title: '我是标题',
      content: '我是自定义的对话框！',
      buttons: [{
        text: '现金支付',
        type: 'primary',
        onTap: function onTap(e) {
          alert('你选择了现金支付！');
        }
      }, {
        text: '微信支付',
        type: 'primary',
        onTap: function onTap(e) {
          alert('你选择了微信支付！');
        }
      }, {
        text: '取消'
      }]
    });
  },
  vertical: function vertical() {
    (0, _index.$wuxDialog)().open({
      resetOnClose: true,
      title: '请问需要反馈什么问题？',
      content: '你也可以在个人页的反馈帮助中心里找到这个功能',
      verticalButtons: !0,
      buttons: [{
        text: '遇到问题',
        bold: !0
      }, {
        text: '意见建议',
        bold: !0
      }, {
        text: '没啥事',
        bold: !0
      }]
    });
  },
  openType: function openType() {
    (0, _index.$wuxDialog)().open({
      resetOnClose: true,
      title: '提示',
      content: '获取用户信息',
      buttons: [{
        text: '取消'
      }, {
        text: '确定',
        type: 'primary',
        openType: 'getUserInfo',
        onGetUserInfo: function onGetUserInfo(e) {
          console.log(e);
        }
      }]
    });
  }
});