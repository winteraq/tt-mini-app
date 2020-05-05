<h1 align="center">头条小程序组件</h1>

<div align="center">
    <p>一套组件化、可复用、易扩展的头条小程序</p>
    <a href="https://github.com/winteraq/tt-mini-app/" target="_blank">
        <img alt="star this repo" src="https://img.shields.io/github/stars/winteraq/tt-mini-app" />
    </a>
    <a href="https://github.com/winteraq/tt-mini-app/fork" target="_blank">
        <img alt="fork this repo" src="https://img.shields.io/github/forks/winteraq/tt-mini-app" />
    </a>
    <a href="https://circleci.com/gh/winteraq/tt-mini-app" target="_blank">
        <img alt="circleci" src="https://img.shields.io/circleci/build/github/winteraq/tt-mini-app/master.svg?label=circleci" />
    </a>
    <a href="https://travis-ci.org/winteraq/tt-mini-app" target="_blank">
        <img alt="travis" src="https://img.shields.io/travis/winteraq/tt-mini-app.svg?label=travis" />
    </a>
    <a href="https://github.com/winteraq/tt-mini-app/actions" target="_blank">
        <img alt="github workflow" src="https://img.shields.io/github/workflow/status/winteraq/tt-mini-app/test?label=github workflow" />
    </a>
    <br />
    <a href="https://www.npmjs.com/package/tt-mp" target="_blank">
        <img alt="npm" src="https://img.shields.io/npm/v/tt-mp.svg" />
    </a>
    <a href="https://www.npmjs.com/package/tt-mp" target="_blank">
        <img alt="downloads" src="https://img.shields.io/npm/dm/tt-mp.svg" />
    </a>
    <a href="https://www.npmjs.com/package/tt-mp" target="_blank">
        <img alt="downloads" src="https://img.shields.io/npm/dt/tt-mp.svg" />
    </a>
    <a href="https://www.npmjs.com/package/tt-mp" target="_blank">
        <img alt="license" src="https://img.shields.io/npm/l/tt-mp.svg" />
    </a>
    <br />
    <a href="https://github.com/winteraq/tt-mini-app-sublime-snippets" target="_blank">
        <img alt="Snippets for Sublime" src="https://img.shields.io/badge/Snippets%20for-Sublime-blue" />
    </a>
    <a href="https://github.com/winteraq/tt-mini-app-snippets" target="_blank">
        <img alt="Snippets for VScode" src="https://img.shields.io/badge/Snippets%20for-VScode-blue" />
    </a>
    <a href="https://github.com/winteraq/tt-mini-app-atom-snippets" target="_blank">
        <img alt="Snippets for Atom" src="https://img.shields.io/badge/Snippets%20for-Atom-blue" />
    </a>
</div>

# 快速上手

## 使用之前

在开始使用之前，你需要先阅读 [头条小程序自定义组件](https://open.feishu.cn/document/uYjL24iN/uQDMx4CNwEjL0ATM) 的相关文档。

## 如何安装

### 方式一. 通过 npm 安装

通过 `npm` 安装，需要依赖小程序基础库 `2.2.1` 以上版本，同时依赖开发者工具的 `npm` 构建，[详见 npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

```bash
# Using npm
npm i tt-mp -S --production

# Using yarn
yarn add tt-mp --production
```

### 方式二. 通过下载代码

通过 [GitHub](https://github.com/winteraq/tt-mini-app/) 下载 `tt-mp` 的代码，然后 将 `packages/lib/` 目录拷贝到自己的项目中。

- `packages/lib/` - 压缩版（ES5）
- `packages/es/` - 未压缩版（ES6，使用时需要开启 `ES6 转 ES5`，位于开发者工具右上角-详情-本地配置）

```bash
git clone https://github.com/winteraq/tt-mini-app.git
cd tt-mp
```

### 方法三. 选择需要的模块，量身定制

参考 [量身定制](https://wuxui.com/#/customize-theme)。

## 如何使用

按照如下的方式使用组件，以 `Button` 为例，其它组件在对应的文档页查看：

### 在 page.json 中引入组件

```json
"usingComponents": {
    "wux-button": "../../dist/button/index"
}
```

### 在 page.wxml 中使用组件

```html
<wux-button size="small">Button</wux-button>
<wux-button size="default">Button</wux-button>
<wux-button size="large">Button</wux-button>
```

### 组件库文件体积过大的问题

随着组件库越来越丰富，文件的体积也越来越大，某些时候我们可能只需要其中的一个或多个组件，如果直接引入整个组件库的话是不合适的，这时候就需要我们将要使用到组件给单独抽离出来。

1. 使用 [量身定制](https://wuxui.com/#/customize-theme) 功能自动抽离组件（官方推荐）。

2. 手动抽离组件，也很简单直接拷贝 `packages/` 目录下对应的组件即可，当然某些组件存在依赖关系，则抽离过程会相对复杂一些，以 ActionSheet、Badge、Button 为例。

```
demo/
  |-actionsheet/
  |-animation-group/
  |-backdrop/
  |-badge/
  |-button/
  |-helpers/
  |-index.js
```

- 首先将 `lib/` 目录下对应组件（如 `actionsheet`）拷贝至 `demo` 目录；
- 其次看其对应目录下 `index.json` 是否存在依赖组件，若存在则一一拷贝；
- 然后看组件是否依靠 JavaScript 主动调用（查看对应文档可得知或存在 `index.js` 文件中），是则拷贝 `index.js` 文件，并删除不需要的组件引用；
- 最后查看组件目录下 `index.js` 是否存在对帮助方法的引用，若存在则拷贝 `helpers` 目录（抑或直接拷贝不管是否存在引用）。


## License

MIT
