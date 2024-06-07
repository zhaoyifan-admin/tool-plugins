import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/less/global.less'

import ToolPlugins from '../packages'
// import ToolPlugins from '../dist/tool-plugins.js'
// import '../dist/style.css'

// import ToolPlugins from 'tool-plugins'
// import 'tool-plugins/css'

const app = createApp(App)
// window.rafTimeout = rafTimeout // 挂载到window上，全局可用，无需引入

app.use(router).use(ToolPlugins).mount('#app')
