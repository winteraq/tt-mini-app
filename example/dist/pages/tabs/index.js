"use strict";

Page({
  data: {
    current: 'tab1',
    tabs: [{
      key: 'tab1',
      title: 'Tab 1',
      content: 'Content of tab 1'
    }, {
      key: 'tab2',
      title: 'Tab 2',
      content: 'Content of tab 2'
    }, {
      key: 'tab3',
      title: 'Tab 3',
      content: 'Content of tab 3'
    }]
  },
  onChange: function onChange(e) {
    console.log('onChange', e);
    this.setData({
      current: e.detail.key
    });
  },
  onTabsChange: function onTabsChange(e) {
    console.log('onTabsChange', e);
    var key = e.detail.key;
    var index = this.data.tabs.map(function (n) {
      return n.key;
    }).indexOf(key);
    this.setData({
      key: key,
      index: index
    });
  },
  onSwiperChange: function onSwiperChange(e) {
    console.log('onSwiperChange', e);
    var _e$detail = e.detail,
        index = _e$detail.current,
        source = _e$detail.source;
    var key = this.data.tabs[index].key;

    if (!!source) {
      this.setData({
        key: key,
        index: index
      });
    }
  }
});