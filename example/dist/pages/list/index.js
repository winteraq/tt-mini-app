"use strict";

Page({
  onContact: function onContact(e) {
    console.log('onContact', e);
  },
  onGotUserInfo: function onGotUserInfo(e) {
    console.log('onGotUserInfo', e);
  },
  onGotPhoneNumber: function onGotPhoneNumber(e) {
    console.log('onGotPhoneNumber', e);
  }
});