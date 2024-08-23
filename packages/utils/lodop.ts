import {message} from 'ant-design-vue';
//用双端口加载主JS文件Lodop.js(或CLodopfuncs.js兼容老版本)以防其中某端口被占:
let MainJS: string = "CLodopfuncs.js",
    URL_WS1: string = "ws://localhost:8080/" + MainJS,
    URL_WS2: string = "ws://localhost:18000/" + MainJS,
    URL_HTTP1: string = "ws://localhost:8080/" + MainJS,
    URL_HTTP2: string = "ws://localhost:18000/" + MainJS,
    URL_HTTP3: string = "https://localhost.lodop.net:8443/" + MainJS;

let CreatedOKLodopObject: any, CLodopIsLocal: any, LoadJsState: any;

// 判断是否需要CLodop(那些不支持插件的浏览器):

function needCLodop() {
    try {
        let ua: any = navigator.userAgent;
        if (ua.match(/Android/i) || ua.match(/Windows\sPhone/i) || ua.match(/iPhone|iPod|iPad/i) || ua.match(/Edge\D?\d+/i)) return true;
        let verTrident: boolean = ua.match(/Trident\D?\d+/i);
        let verIE: any = ua.match(/MSIE\D?\d+/i);
        let verOPR: any = ua.match(/OPR\D?\d+/i);
        let verFF: any = ua.match(/Firefox\D?\d+/i);
        let x64: any = ua.match(/x64/i);
        if (!verTrident && !verIE && x64) return true;
        else if (verFF) {
            verFF = verFF[0].match(/\d+/);
            if (verFF[0] >= 41 || x64) return true;
        } else if (verOPR) {
            verOPR = verOPR[0].match(/\d+/);
            if (verOPR[0] >= 32) return true;
        } else if ((!verTrident) && (!verIE)) {
            let verChrome: any = ua.match(/Chrome\D?\d+/i);
            if (verChrome) {
                verChrome = verChrome[0].match(/\d+/);
                if (verChrome[0] >= 41) return true;
            }
        }
        return false;
    } catch (err: any) {
        console.log("err:========>", err)
        return true;
    }
}

// 检查加载成功与否，如没成功则用http(s)再试
// 低版本CLODOP6.561/Lodop7.043及前)用本方法
function checkOrTryHttp() {
    if (window.getCLodop) {
        LoadJsState = "complete";
        return true;
    }
    if (LoadJsState == "loadingB" || LoadJsState == "complete") return;
    LoadJsState = "loadingB";
    let head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    let JS1 = document.createElement("script")
        , JS2 = document.createElement("script")
        , JS3 = document.createElement("script");
    JS1.src = URL_HTTP1;
    JS2.src = URL_HTTP2;
    JS3.src = URL_HTTP3;
    JS1.onload = JS2.onload = JS3.onload = JS2.onerror = JS3.onerror = function () {
        LoadJsState = "complete";
    }
    JS1.onerror = function () {
        if (window.location.protocol !== 'https:')
            head.insertBefore(JS2, head.firstChild); else
            head.insertBefore(JS3, head.firstChild);
    }
    head.insertBefore(JS1, head.firstChild);
}

// 加载Lodop对象的主过程:
(function loadCLodop() {
    if (!needCLodop()) return;
    CLodopIsLocal = !!((URL_WS1 + URL_WS2).match(/\/\/localho|\/\/127.0.0./i));
    LoadJsState = "loadingA";
    if (!window.WebSocket && window.MozWebSocket) window.WebSocket = window.MozWebSocket;
    //ws方式速度快(小于200ms)且可避免CORS错误,但要求Lodop版本足够新:
    try {
        let WSK1 = new WebSocket(URL_WS1);
        WSK1.onopen = function () {
            setTimeout("checkOrTryHttp()", 200);
        }
        WSK1.onmessage = function (e) {
            if (!window.getCLodop) eval(e.data);
        }
        WSK1.onerror = function () {
            let WSK2 = new WebSocket(URL_WS2);
            WSK2.onopen = function () {
                setTimeout("checkOrTryHttp()", 200);
            }
            WSK2.onmessage = function (e) {
                if (!window.getCLodop) eval(e.data);
            }
            WSK2.onerror = function () {
                checkOrTryHttp();
            }
        }
    } catch (e) {
        checkOrTryHttp();
    }
})();

// 获取LODOP对象主过程,判断是否安装、需否升级:
export function getLodop(oOBJECT: any, oEMBED: any) {
    let strLodopInstall = "打印控件未安装!点击这里<a href='install_lodop32.exe' target='_self'>执行安装</a>";
    let strLodopUpdate = "打印控件需要升级!点击这里<a href='install_lodop32.exe' target='_self'>执行升级</a>";
    let strLodop64Install = "打印控件未安装!点击这里<a href='install_lodop64.exe' target='_self'>执行安装</a>";
    let strLodop64Update = "打印控件需要升级!点击这里<a href='install_lodop64.exe' target='_self'>执行升级</a>";
    let strCLodopInstallA = "<br><font color='#FF00FF'>Web打印服务CLodop未安装启动，点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>下载执行安装</a>";
    let strCLodopInstallB = "<br>（若此前已安装过，可<a href='CLodop.protocol:setup' target='_self'>点这里直接再次启动</a>）";
    let strCLodopUpdate = "<br><font color='#FF00FF'>Web打印服务CLodop需升级!点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>执行升级</a>";
    let strLodop7FontTag = "<br><font color='#FF00FF'>Web打印服务Lodop7";
    let strLodop7HrefX86 = "点击这里<a href='Lodop7_Linux_X86_64.tar.gz' target='_self'>下载安装</a>(下载后解压，点击lodop文件开始执行)";
    let strLodop7HrefARM = "点击这里<a href='Lodop7_Linux_ARM64.tar.gz'  target='_self'>下载安装</a>(下载后解压，点击lodop文件开始执行)";
    let strLodop7Install_X86 = strLodop7FontTag + "未安装启动，" + strLodop7HrefX86;
    let strLodop7Install_ARM = strLodop7FontTag + "未安装启动，" + strLodop7HrefARM;
    let strLodop7Update_X86 = strLodop7FontTag + "需升级，" + strLodop7HrefX86;
    let strLodop7Update_ARM = strLodop7FontTag + "需升级，" + strLodop7HrefARM;
    let strInstallOK = "，成功后请刷新本页面或重启浏览器。</font>";
    let LODOP;
    try {
        let isWinIE = (/MSIE/i.test(navigator.userAgent)) || (/Trident/i.test(navigator.userAgent));
        let isWinIE64 = isWinIE && (/x64/i.test(navigator.userAgent));
        let isLinuxX86 = (/Linux/i.test(navigator.platform)) && (/x86/i.test(navigator.platform));
        let isLinuxARM = (/Linux/i.test(navigator.platform)) && (/aarch/i.test(navigator.platform));

        if (needCLodop() || isLinuxX86 || isLinuxARM) {
            try {
                LODOP = window.getCLodop();
            } catch (err) {
            }
            if (!LODOP && LoadJsState !== "complete") {
                if (!LoadJsState)
                    alert("未曾加载Lodop主JS文件，请先调用loadCLodop过程."); else
                    alert("网页还没下载完毕，请稍等一下再操作.");
                return;
            }
            let strAlertMessage;
            if (!LODOP) {
                if (isLinuxX86)
                    strAlertMessage = strLodop7Install_X86;
                else if (isLinuxARM)
                    strAlertMessage = strLodop7Install_ARM;
                else
                    strAlertMessage = strCLodopInstallA + (CLodopIsLocal ? strCLodopInstallB : "");
                message.info(strAlertMessage + strInstallOK);
                return;
            } else {
                if (isLinuxX86 && LODOP.CVERSION < "7.0.7.5")
                    strAlertMessage = strLodop7Update_X86;
                else if (isLinuxARM && LODOP.CVERSION < "7.0.7.5")
                    strAlertMessage = strLodop7Update_ARM;
                else if (LODOP.CVERSION < "6.6.0.2")
                    strAlertMessage = strCLodopUpdate;
                if (strAlertMessage)
                    message.info(strAlertMessage + strInstallOK);
            }
        } else {
            //==如果页面有Lodop插件就直接使用,否则新建:==
            if (oOBJECT || oEMBED) {
                if (isWinIE)
                    LODOP = oOBJECT;
                else
                    LODOP = oEMBED;
            } else if (!CreatedOKLodopObject) {
                LODOP = document.createElement("object");
                LODOP.setAttribute("width", '0');
                LODOP.setAttribute("height", '0');
                LODOP.setAttribute("style", "position:absolute;left:0px;top:-100px;width:0px;height:0px;");
                if (isWinIE)
                    LODOP.setAttribute("classid", "clsid:2105C259-1E0C-4534-8141-A753534CB4CA");
                else
                    LODOP.setAttribute("type", "application/x-print-lodop");
                document.documentElement.appendChild(LODOP);
                CreatedOKLodopObject = LODOP;
            } else
                LODOP = CreatedOKLodopObject;
            //==Lodop插件未安装时提示下载地址:==
            if ((!LODOP) || (!LODOP.VERSION)) {
                message.info((isWinIE64 ? strLodop64Install : strLodopInstall) + strInstallOK);
                return LODOP;
            }
            if (LODOP.VERSION < "6.2.2.6") {
                message.info((isWinIE64 ? strLodop64Update : strLodopUpdate) + strInstallOK);
            }
        }
        //===如下空白位置适合调用统一功能(如注册语句、语言选择等):=======================


        //===============================================================================
        return LODOP;
    } catch (err) {
        console.log("getLodop出错:" + err);
    }
}