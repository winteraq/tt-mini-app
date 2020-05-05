"use strict";

App({
  onLaunch: function onLaunch() {// this.checkAudio()
  },
  checkAudio: function checkAudio() {
    var _this = this;

    tt.getSystemInfo({
      success: function success(res) {
        if (res.platform !== 'devtools') {
          tt.getNetworkType({
            success: function success(res) {
              if (res.networkType === 'wifi') {
                _this.autoPlay();
              }
            }
          });
        }
      }
    });
  },
  autoPlay: function autoPlay() {
    var backgroundAudioManager = tt.getBackgroundAudioManager();
    backgroundAudioManager.title = '小鸡哔哔';
    backgroundAudioManager.epname = '洛天依小鸡哔哔';
    backgroundAudioManager.singer = '洛天依';
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000PKgrQ10ZW56.jpg?max_age=2592000';
    backgroundAudioManager.src = 'http://cdn.skyvow.cn/%E6%B4%9B%E5%A4%A9%E4%BE%9D%20-%20%E5%B0%8F%E9%B8%A1%E5%93%94%E5%93%94.mp3';
  }
});
