"use strict";

Page({
  data: {
    items: [{
      type: 'radio',
      label: 'Updated',
      value: 'updated',
      checked: true,
      children: [{
        label: 'Recently updated',
        value: 'desc',
        checked: true // 默认选中

      }, {
        label: 'Least recently updated',
        value: 'asc'
      }],
      groups: ['001']
    }, {
      type: 'text',
      label: 'Forks',
      value: 'forks',
      groups: ['002']
    }, {
      type: 'sort',
      label: 'Stars',
      value: 'stars',
      groups: ['003']
    }, {
      type: 'filter',
      label: '筛选',
      value: 'filter',
      checked: true,
      children: [{
        type: 'radio',
        label: 'Languages（单选）',
        value: 'language',
        children: [{
          label: 'JavaScript',
          value: 'javascript'
        }, {
          label: 'HTML',
          value: 'html'
        }, {
          label: 'CSS',
          value: 'css'
        }, {
          label: 'TypeScript',
          value: 'typescript'
        }]
      }, {
        type: 'checkbox',
        label: 'Query（复选）',
        value: 'query',
        children: [{
          label: 'Angular',
          value: 'angular'
        }, {
          label: 'Vue',
          value: 'vue'
        }, {
          label: 'React',
          value: 'react',
          checked: true // 默认选中

        }, {
          label: 'Avalon',
          value: 'avalon'
        }]
      }, {
        type: 'checkbox',
        label: '配送方式',
        value: 'away',
        children: [{
          label: '京东配送',
          value: '1'
        }, {
          label: '货到付款',
          value: '2'
        }, {
          label: '仅看有货',
          value: '3'
        }, {
          label: '促销',
          value: '4'
        }, {
          label: '全球购',
          value: '5'
        }, {
          label: 'PLUS专享价',
          value: '6'
        }, {
          label: '新品',
          value: '7'
        }, {
          label: '配送全球',
          value: '8'
        }]
      }, {
        type: 'radio',
        label: '性别',
        value: 'gander',
        children: [{
          label: '男',
          value: '0'
        }, {
          label: '女',
          value: '1'
        }, {
          label: '通用',
          value: '2'
        }]
      }, {
        type: 'checkbox',
        label: '闭合方式',
        value: 'closed_mode',
        children: [{
          label: '卡扣',
          value: '0'
        }, {
          label: '拉链',
          value: '1'
        }, {
          label: '其他',
          value: '2'
        }]
      }, {
        type: 'checkbox',
        label: '轮子种类',
        value: 'wheel_type',
        children: [{
          label: '万向轮',
          value: '0'
        }, {
          label: '单向轮',
          value: '1'
        }, {
          label: '飞机轮',
          value: '2'
        }, {
          label: '其他',
          value: '3'
        }]
      }, {
        type: 'checkbox',
        label: '箱包硬度',
        value: 'wheel_type',
        children: [{
          label: '硬箱',
          value: '0'
        }, {
          label: '软硬结合',
          value: '1'
        }, {
          label: '软箱',
          value: '2'
        }, {
          label: '其他',
          value: '3'
        }]
      }, {
        type: 'checkbox',
        label: '适用场景',
        value: 'wheel_type',
        children: [{
          label: '旅行',
          value: '0'
        }, {
          label: '婚庆',
          value: '1'
        }, {
          label: '出差',
          value: '2'
        }, {
          label: '其他',
          value: '3'
        }]
      }],
      groups: ['001', '002', '003']
    }]
  },
  onLoad: function onLoad() {
    this.getRepos();
  },
  onChange: function onChange(e) {
    var _e$detail = e.detail,
        checkedItems = _e$detail.checkedItems,
        items = _e$detail.items,
        checkedValues = _e$detail.checkedValues;
    var params = {};
    console.log(checkedItems, items, checkedValues);
    checkedItems.forEach(function (n) {
      if (n.checked) {
        if (n.value === 'updated') {
          var selected = n.children.filter(function (n) {
            return n.checked;
          }).map(function (n) {
            return n.value;
          }).join(' ');
          params.sort = n.value;
          params.order = selected;
        } else if (n.value === 'stars') {
          params.sort = n.value;
          params.order = n.sort === 1 ? 'asc' : 'desc';
        } else if (n.value === 'forks') {
          params.sort = n.value;
        } else if (n.value === 'filter') {
          n.children.filter(function (n) {
            return n.selected;
          }).forEach(function (n) {
            if (n.value === 'language') {
              var _selected = n.children.filter(function (n) {
                return n.checked;
              }).map(function (n) {
                return n.value;
              }).join(' ');

              params.language = _selected;
            } else if (n.value === 'query') {
              var _selected2 = n.children.filter(function (n) {
                return n.checked;
              }).map(function (n) {
                return n.value;
              }).join(' ');

              params.query = _selected2;
            }
          });
        }
      }
    });
    console.log('params', params);
    this.getRepos(params);
  },
  getRepos: function getRepos() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var language = params.language || 'javascript';
    var query = params.query || 'react';
    var q = "".concat(query, "+language:").concat(language);
    var data = Object.assign({
      q: q,
      order: 'desc'
    }, params);
    tt.showLoading();
    tt.request({
      url: 'https://api.github.com/search/repositories',
      data: data,
      success: function success(res) {
        console.log(res);
        tt.hideLoading();

        _this.setData({
          repos: res.data.items.map(function (n) {
            return Object.assign({}, n, {
              date: n.created_at.substr(0, 7)
            });
          })
        });
      }
    });
  },
  onOpen: function onOpen(e) {
    this.setData({
      opened: true
    });
  },
  onClose: function onClose(e) {
    this.setData({
      opened: false
    });
  },

  /**
   * 阻止触摸移动
   */
  noop: function noop() {}
});
