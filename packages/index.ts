// import type {App} from "vue";
import './less/global.less'
import './scss/style.scss'

import {
    add,
    cancelAnimationFrame,
    cancelRaf,
    checkIdNo,
    dateFormat,
    debounce,
    downloadFile,
    formatNumber,
    rafTimeout,
    requestAnimationFrame,
    throttle,
    toggleDark,
} from './utils'
import {
    bd09_To_gps84,
    gcj02_To_Bd09,
    gcj02_To_Gps84,
    gps84_To_Gcj02,
    gps84_To_bd09,
} from './utils/gps'
import {
    deleted,
    download,
    get,
    patch,
    post,
    put,
} from './utils/axios'

export {
    add,
    bd09_To_gps84,
    cancelAnimationFrame,
    cancelRaf,
    checkIdNo,
    dateFormat,
    debounce,
    deleted,
    download,
    downloadFile,
    formatNumber,
    gcj02_To_Bd09,
    gcj02_To_Gps84,
    get,
    gps84_To_Gcj02,
    gps84_To_bd09,
    patch,
    post,
    put,
    rafTimeout,
    requestAnimationFrame,
    throttle,
    toggleDark,
}
// const components: any[] = []
// const install = function (app: App) {
//     // 遍历注册所有组件
//     /*
//       component.__name ts报错
//       Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
//       Type 'undefined' is not assignable to type 'string'.ts(2345)
//       解决方式一：使用// @ts-ignore
//       解决方式二：使用类型断言 尖括号语法(<string>component.__name) 或 as语法(component.__name as string)
//     */
//     components.forEach(component => app.component(component.__name as string, component))
// }
// const ToolPlugins = {
//     install,
// }
// export default ToolPlugins