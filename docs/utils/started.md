# 快速上手<BackTop />

## 简要介绍

开箱即用！

## 使用方式

```vue
<script setup lang="ts">
import {
  dateFormat,
  requestAnimationFrame,
  cancelAnimationFrame,
  rafTimeout,
  cancelRaf,
  throttle,
  debounce,
  add,
  downloadFile,
  formatNumber,
  toggleDark,
  useEventListener
} from 'tool-plugins'
</script>
```

## 常用工具函数

Function name | Descriptions | Arguments
--- | :--- | :---
dateFormat | 简单易用的日期格式化函数！ | (timestamp: number&#124;string&#124;Date, format = 'YYYY-MM-DD HH:mm:ss') => string
requestAnimationFrame | 针对不同浏览器进行兼容处理！ | 使用方式不变
cancelAnimationFrame | 针对不同浏览器进行兼容处理！ | 使用方式不变
rafTimeout | 使用 requestAnimationFrame 实现的定时器函数，等效替代 (setTimeout 和 setInterval)！ | (func: Function, delay = 0, interval = false) => object
cancelRaf | 用于取消 rafTimeout 函数！ | (raf: { id: number }) => void
throttle | 使用 rafTimeout 实现的节流函数！ | (fn: Function, delay = 300) => any
debounce | 使用 rafTimeout 实现的防抖函数！ | (fn: Function, delay = 300) => any
add | 消除js加减精度问题的加法函数！ | (num1: number, num2: number) => number
downloadFile | 下载文件并自定义文件名，未传 name 时，从文件地址中自动获取文件名称！ | (url: string, name: string) => void
formatNumber | 数字格式化函数！ | (value: number&#124;string, decimal = 2, split = ',') => string
toggleDark | 一键切换暗黑模式函数！ | () => void
gps84_To_Gcj02 | 84 to 火星坐标系 (GCJ-02) | (lon: number, lat: number) => void
gcj02_To_Gps84 | 火星坐标系 (GCJ-02) to 84 | (lon: number, lat: number) => void
gps84_To_bd09 | gps84转为bd09 | (lon: number, lat: number) => void
bd09_To_gps84 | bd09转为gps84 | (lon: number, lat: number) => void
gcj02_To_Bd09 | 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换 | (lon: number, lat: number) => void
