# tool-plugins

*目前共有 `12` 个常用工具函数，并且持续探索更新中...！*<br/>
*开箱即用！*

## Document & Online preview

[Tool Plugins](https://zhaoyifan-admin.github.io/tool-plugins/)

## Install

```bash
npm install tool-plugins
# or
pnpm add tool-plugins
# or
yarn add tool-plugins
# or
bun add tool-plugins
```

## Use Components

**Global**

```ts

```

## Use CDN

```html
<script src="https://unpkg.com/tool-plugins@latest"></script>
```

## Project

- Get the project code

```sh
git clone https://github.com/zhaoyifan-admin/tool-plugins.git
```

- Install dependencies

```sh
cd tool-plugins

pnpm i
```

- Run project

```sh
pnpm dev
```

## Details

[My CSDN Blogs](https://blog.csdn.net/Dandrose)

## Functions

Function name | Descriptions | Arguments
:-- | :-- | :--
dateFormat | 简单易用的日期格式化函数！ | (timestamp: number &#124; string &#124; Date, format = 'YYYY-MM-DD HH:mm:ss') => string
requestAnimationFrame | 针对不同浏览器进行兼容处理！ | 使用方式不变
cancelAnimationFrame | 针对不同浏览器进行兼容处理！ | 使用方式不变
rafTimeout | 使用 requestAnimationFrame 实现的定时器函数，等效替代 (setTimeout 和 setInterval)！ | (func: Function, delay = 0, interval = false) => object
cancelRaf | 用于取消 rafTimeout 函数！ | (raf: { id: number }) => void
throttle | 节流函数！ | (fn: Function, delay = 300) => any
debounce | 防抖函数！ | (fn: Function, delay = 300) => any
add | 消除js加减精度问题的加法函数！ | (num1: number, num2: number) => number
downloadFile | 下载文件并自定义文件名！ | (url: string, name: string) => void
formatNumber | 数字格式化函数！ | (value: number &#124; string, precision = 2, separator = ',', decimal = '.', prefix = '', suffix = '') => string
toggleDark | 一键切换暗黑模式函数！ | () => void
useEventListener | 自动添加和清除 DOM 事件监听器！ | (target: any, event: string, callback: Function) => void
