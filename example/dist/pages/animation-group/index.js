"use strict";

Page({
  data: {
    animations: ['fadeIn', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'zoom', 'punch', 'custom'],
    example: {
      animation: 'fadeIn',
      classNames: 'wux-animate--fadeIn',
      enter: true,
      exit: true,
      "in": false
    }
  },
  onClick: function onClick(e) {
    var index = e.currentTarget.dataset.index;
    var animation = this.data.animations[index];
    var classNames = "wux-animate--".concat(animation);
    this.setData({
      'example.in': true,
      'example.classNames': classNames,
      'example.animation': animation
    });
  },
  onEnter: function onEnter(e) {
    console.log('onEnter', e.detail);
  },
  onEntering: function onEntering(e) {
    console.log('onEntering', e.detail);
  },
  onEntered: function onEntered(e) {
    var _this = this;

    console.log('onEntered', e.detail); // delay 300ms close animation

    setTimeout(function () {
      return _this.setData({
        'example.in': false
      });
    }, 300);
  },
  onExit: function onExit() {
    console.log('onExit');
  },
  onExiting: function onExiting() {
    console.log('onExiting');
  },
  onExited: function onExited() {
    console.log('onExited');
  },
  onChange: function onChange(e) {
    console.log('onChange', e.detail);
  }
});