import './less/global.less'
import './scss/style.scss'
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
    checkIdNo,
} from './utils'
import {
    gps84_To_bd09,
    gps84_To_Gcj02,
    gcj02_To_Gps84,
    bd09_To_gps84,
    gcj02_To_Bd09
} from './utils/gps'
import type {App} from "vue";

export {
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
    checkIdNo,
}
const components: any[] = [
    gps84_To_Gcj02,
    gcj02_To_Gps84,
    gps84_To_bd09,
    bd09_To_gps84,
    gcj02_To_Bd09
]
const install = function (app: App) {
    // 遍历注册所有组件
    /*
      component.__name ts报错
      Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      Type 'undefined' is not assignable to type 'string'.ts(2345)
      解决方式一：使用// @ts-ignore
      解决方式二：使用类型断言 尖括号语法(<string>component.__name) 或 as语法(component.__name as string)
    */
    components.forEach(component => app.component(component.__name as string, component))
}
const ToolPlugins = {
    install,
}
export default ToolPlugins