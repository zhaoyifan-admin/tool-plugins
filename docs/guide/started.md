# 快速上手

<BackTop />
<Watermark fullscreen content="Tool Plugins" />

## Install

::: code-group

```sh [npm]
$ npm install tool-plugins
```

```sh [pnpm]
$ pnpm add tool-plugins
```

```sh [yarn]
$ yarn add tool-plugins
```

```sh [bun]
$ bun add tool-plugins
```

:::

## Use Components

> **Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VueAmazingUI from 'tool-plugins'
import 'tool-plugins/css'

const app = createApp(App)
app.use(VueAmazingUI)

app.mount('#app')
```

> **Local**

```vue
<script setup lang="ts">
import { Button } from 'tool-plugins'
import 'tool-plugins/css'
</script>

<template>
  <Button></Button>
</template>
```

### Use Functions

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
