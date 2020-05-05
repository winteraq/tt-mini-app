"use strict";

var _components = _interopRequireDefault(require("./components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Page({
  data: {
    components: _components["default"]
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '一套组件化、可复用、易扩展的微信小程序 UI 组件库'
    };
  }
});