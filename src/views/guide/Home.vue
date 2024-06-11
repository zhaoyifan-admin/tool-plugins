<script setup lang="ts">
import pkg from '/package.json'
import { ref, computed } from 'vue'
import { routes } from '@/router'
const installData = ref([
  {
    header: 'Install',
    text: `pnpm i vue-amazing-ui\n# or\nyarn add vue-amazing-ui\n# or\nnpm i vue-amazing-ui`
  }
])
// import.meta.glob 都支持以字符串形式导入文件，类似于 以字符串形式导入资源
const modules = import.meta.glob('../../../package.json', { eager: true })
const url = '../../../package.json'
// 字符串类型对象
type Recordable<T = any> = Record<string, T>
const dependencies = (modules as Recordable)[url].dependencies
console.log('dependencies', dependencies)

const collapseData = ref([
  {
    header: '以上工具函数 API 使用时直接引入即可:',
    text: `<script setup lang="ts">
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
} from 'vue-amazing-ui'
<\/script>`
  }
])
const activeKey = ref(0)
const sum = computed(() => {
  return (routes[0].children as Array<any>).length - 2
})
function onOpen () {
  // 打开一个新的窗口，并导航到指定的URL
  // let newWindow = window.open() // 在当前浏览器窗口中打开一个空的标签页
  // let newWindow = window.open('http://localhost:9000/backtop') // 在当前浏览器窗口中打开新的标签页
  // let newWindow = window.open('http://localhost:9000/backtop', 'Backtop') // 在当前浏览器窗口中打开新的标签页
   // 使用弹窗形式打开新的标签页，不指定left，top时，默认紧靠电脑桌面左上角
  let newWindow = window.open('http://localhost:9000/backtop', '_blank', 'popup,width=800,height=600')
  // newWindow?.resizeTo(800, 600)
  // newWindow?.moveTo(100, 100)
}
</script>
<template>
  <div>
    <Space align="top" :gap="6">
      <h1>Tool Plugins</h1>
      <a-tag color="orangered">
        {{ pkg.version }}
      </a-tag>
    </Space>
    <br/>
    <br/>
<!--    <Button type="primary" @click="onOpen">Open New Window</Button>-->
    <a-descriptions class="mb10 mt30" title="生产环境依赖 (dependencies)" :column="{md: 2, lg: 3, xl: 4}">
      <a-descriptions-item :label="dependency" v-for="(version, dependency) in pkg.dependencies" :key="dependency">
        <a-tag color="volcano">{{ version }}</a-tag>
      </a-descriptions-item>
    </a-descriptions>
    <a-descriptions class="mb10 mt30" title="开发环境依赖 (devDependencies)" :column="{md: 2, lg: 3, xl: 4}">
      <a-descriptions-item :label="dependency" v-for="(version, dependency) in pkg.devDependencies" :key="dependency">
        <a-tag color="cyan">{{ version }}</a-tag>
      </a-descriptions-item>
    </a-descriptions>
    <h2 class="mt30">常用工具函数：</h2>
    <ul class="m-list">
      <li class="u-tip mb10 mt10"><a-tag color="geekblue">dateFormat</a-tag>: 简单易用的日期格式化函数！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">requestAnimationFrame</a-tag>: 针对不同浏览器进行兼容处理！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">cancelAnimationFrame</a-tag>: 针对不同浏览器进行兼容处理！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">rafTimeout</a-tag>: 使用 requestAnimationFrame 实现的定时器函数，等效替代 (setTimeout 和 setInterval)！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">cancelRaf</a-tag>: 用于取消 rafTimeout 函数！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">throttle</a-tag>: 节流函数！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">debounce</a-tag>: 防抖函数！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">add</a-tag>: 消除js加减精度问题的加法函数！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">downloadFile</a-tag>: 下载文件并自定义文件名，未传文件名时，从文件地址中自动获取文件名称！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">formatNumber</a-tag>: 数字格式化函数！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">toggleDark</a-tag>: 一键切换暗黑模式函数！</li>
      <li class="u-tip mb10"><a-tag color="geekblue">useEventListener</a-tag>: 自动添加和清除 DOM 事件监听器函数！</li>
    </ul>
    <Collapse
      lang="vue3"
      :fontSize="16"
      :collapseData="collapseData"
      v-model:activeKey="activeKey"
      copyable />
  </div>
</template>
<style lang="less">
.u-head {
  font-size: 16px;
}
.u-text {
  font-size: 16px;
}
</style>
