---
layout: home

title: Tool Plugins
titleTemplate: Amazing UI Components Library

hero:
  name: Tool Plugins
  text: Amazing UI 组件库
  tagline: 基于 Vue3 + TS + Vite 开发
  image:
    src: /amazing-logo.svg
    alt: Tool Plugins
  actions:
    - theme: brand
      text: Get Started
      link: /utils/started
    - theme: alt
      text: View on GitHub
      link: https://github.com/zhaoyifan-admin/tool-plugins
    - theme: alt
      text: View on NPM
      link: https://www.npmjs.com/package/tool-plugins
features:
  - icon: 🛠️
    title: 开发依赖
    details: 描述
  - icon: 🚀
    title: 开箱即用
    details: 目前共有 56 个常用基础 UI 组件，以及 12 个常用工具函数
  - icon: ⚡️
    title: border-box
    details: '所有组件 CSS 样式均使用 box-sizing: border-box; 模式'
---

<Watermark fullscreen content="Tool Plugins" />

<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchVersion } from './.vitepress/utils/fetchVersion'
import pkg from '../package.json'

const dependencies = pkg.dependencies
const devDependencies = pkg.devDependencies
function getVersion (target: string): string {
  for (let name of Object.keys(dependencies)) {
    if (name === target) {
      return dependencies[name].replace('^', '')
    }
  }
  for (let name of Object.keys(devDependencies)) {
    if (name === target) {
      return devDependencies[name].replace('^', '')
    }
  }
  return ''
}
function fetchDesc () {
  const featureDetails: any = document.querySelector('div.VPFeatures.VPHomeFeatures > div.container > div.items :first-child > div.VPLink.no-icon.VPFeature .box > p.details')
  const developDesc = `采用 Vue@${getVersion('vue')} + TypeScript@${getVersion('typescript')} + Vite@${getVersion('vite')} + Less@${getVersion('less')} 实现`
  featureDetails.textContent = developDesc
}
onMounted(() => {
  fetchVersion()
  fetchDesc()
})
</script>
