import DefaultTheme from 'vitepress/theme'
import './global.less' // global less
// import ToolPlugins from 'tool-plugins'
// import 'tool-plugins/css'
import ToolPlugins from '../../../dist/tool-plugins'
import '../../../dist/style.css'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(ToolPlugins)
  }
}
