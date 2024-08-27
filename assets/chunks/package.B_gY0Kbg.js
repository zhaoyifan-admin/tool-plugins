const s="tool-plugins",e="1.0.71",i="module",t=["dist","package.json","README.md"],o="./dist/tool-plugins.umd.cjs",n="./dist/tool-plugins.js",u="./dist/tool-plugins.js",p="dist/tool-plugins.iife.js",l={"./dist/style.css":"./dist/style.css","./css":"./dist/style.css",".":{import:"./dist/tool-plugins.js",require:"./dist/tool-plugins.umd.cjs"}},r={dev:"vite","docs:dev":"vitepress dev docs --port 8000 --open","docs:build":"vitepress build docs","docs:deploy":"sh scripts/deploy.sh",build:"run-s clean build:lib",clean:"rimraf ./dist","build:lib":"run-p type-check build:es build:browser","type-check":"vue-tsc --noEmit","build:es":"vite build","build:browser":"vite -f iife build",pub:"sh scripts/publish.sh",push:"sh scripts/push.sh",preview:"vite preview",lint:"eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"},c={"@vuepic/vue-datepicker":"8.7.0","@vueuse/core":"^10.10.0","@vueuse/integrations":"^10.10.0","ant-design-vue":"4.x",axios:"^1.7.2","core-js":"^3.37.1","date-fns":"^3.6.0","element-plus":"^2.7.8","naive-ui":"^2.38.2",qrcode:"^1.5.3",sass:"^1.77.6",swiper:"^11.1.4","tool-plugins":"^1.0.0",vue:"^3.4.27","vue-router":"^4.3.2"},d={"@rollup/plugin-terser":"^0.4.4","@rushstack/eslint-patch":"^1.10.3","@types/node":"^20.12.13","@vitejs/plugin-vue":"^5.0.4","@vue/eslint-config-typescript":"^13.0.0","@vue/tsconfig":"^0.5.1",eslint:"^9.3.0","eslint-plugin-vue":"^9.26.0",less:"^4.2.0",minimist:"^1.2.8","npm-run-all":"^4.1.5",prettier:"^3.2.5",rimraf:"^5.0.7","rollup-plugin-visualizer":"^5.12.0",typescript:"^5.4.5","unplugin-vue-components":"^0.27.0",vite:"^5.2.12",vitepress:"^1.2.2","vue-tsc":"^2.0.19"},a="An Amazing Vue3 UI Components Library.",g={type:"git",url:"git+https://github.com/zhaoyifan-admin/tool-plugins.git.git"},v=["Vue3","TS","Vite","Less","Amazing","UI","Components","Tools"],m="Tantanzi",h="MIT",b={url:"https://github.com/zhaoyifan-admin/tool-plugins/issues"},y="https://themusecatcher.github.io/vue-amazing-ui",f=["> 1%","last 2 versions","not dead"],j={name:s,version:e,private:!1,type:i,files:t,main:o,module:n,browser:u,unpkg:p,exports:l,scripts:r,dependencies:c,devDependencies:d,description:a,repository:g,keywords:v,author:m,license:h,bugs:b,homepage:y,browserslist:f};export{j as p};
