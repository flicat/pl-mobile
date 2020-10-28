(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddd68"],{"82a9":function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},l=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"markdown-body"},[a("h2",[s._v("移动端UI框架")]),a("p",[s._v("基于Vue的移动端UI框架")]),a("h3",[s._v("安装")]),a("pre",[a("code",[s._v("npm i pl-mobile --save\n")])]),a("h3",[s._v("使用")]),a("pre",[a("code",[s._v("import PlMobile from 'pl-mobile'\nimport 'pl-mobile/lib/style/index.css'\nVue.use(PlMobile)\n")])]),a("p",[a("em",[s._v("注意：这里需要单独引入样式文件")])]),a("h3",[s._v("按需引入")]),a("p",[s._v("通过使用饿了么团队开发的"),a("a",{attrs:{href:"https://github.com/ElementUI/babel-plugin-component"}},[a("code",[s._v("babel-plugin-component")])]),s._v("\n插件来实现按需引入")]),a("h4",[s._v("安装插件")]),a("pre",[a("code",[s._v("npm i babel-plugin-component@1.1.1 -D\n")])]),a("h4",[s._v("配置babel")]),a("pre",[a("code",[s._v('{\n  presets: [\n    \'@vue/app\'\n  ],\n  plugins: [\n    [\n      "component",\n      {\n        "libraryName": "pl-mobile",\n        "styleLibraryName": "style"\n      }\n    ]\n  ]\n}\n')])]),a("h4",[s._v("在项目中引用")]),a("pre",[a("code",[s._v("<template>\n  <div>\n    <pl-button type=\"default\">按钮</pl-button>\n  </div>\n</template>\n\n<script>\nimport {fetch, button} from 'pl-mobile'\nVue.use(PlFetch)\n\nexport default {\n  components: {\n    'pl-button': button\n  }\n}\n<\/script>\n")])]),a("h3",[s._v("组件列表")]),a("blockquote",[a("ul",[a("li",[a("a",{attrs:{href:"#/docs/button"}},[s._v("button")])]),a("li",[a("a",{attrs:{href:"#/docs/canvas"}},[s._v("canvas")])]),a("li",[a("a",{attrs:{href:"#/docs/cell"}},[s._v("cell")])]),a("li",[a("a",{attrs:{href:"#/docs/checkbox"}},[s._v("checkbox")])]),a("li",[a("a",{attrs:{href:"#/docs/collapse"}},[s._v("collapse")])]),a("li",[a("a",{attrs:{href:"#/docs/datetime"}},[s._v("datetime")])]),a("li",[a("a",{attrs:{href:"#/docs/fetch"}},[s._v("fetch")])]),a("li",[a("a",{attrs:{href:"#/docs/form"}},[s._v("form")])]),a("li",[a("a",{attrs:{href:"#/docs/goTopButton"}},[s._v("goTopButton")])]),a("li",[a("a",{attrs:{href:"#/docs/icon"}},[s._v("icon")])]),a("li",[a("a",{attrs:{href:"#/docs/input"}},[s._v("input")])]),a("li",[a("a",{attrs:{href:"#/docs/list"}},[s._v("list")])]),a("li",[a("a",{attrs:{href:"#/docs/loading"}},[s._v("loading")])]),a("li",[a("a",{attrs:{href:"#/docs/message"}},[s._v("alert")])]),a("li",[a("a",{attrs:{href:"#/docs/message"}},[s._v("confirm")])]),a("li",[a("a",{attrs:{href:"#/docs/message"}},[s._v("toast")])]),a("li",[a("a",{attrs:{href:"#/docs/picker"}},[s._v("picker")])]),a("li",[a("a",{attrs:{href:"#/docs/popup"}},[s._v("popup")])]),a("li",[a("a",{attrs:{href:"#/docs/progress"}},[s._v("progress")])]),a("li",[a("a",{attrs:{href:"#/docs/radio"}},[s._v("radio")])]),a("li",[a("a",{attrs:{href:"#/docs/range"}},[s._v("range")])]),a("li",[a("a",{attrs:{href:"#/docs/select"}},[s._v("select")])]),a("li",[a("a",{attrs:{href:"#/docs/steps"}},[s._v("steps")])]),a("li",[a("a",{attrs:{href:"#/docs/steps"}},[s._v("stepItem")])]),a("li",[a("a",{attrs:{href:"#/docs/swipe"}},[s._v("swipe")])]),a("li",[a("a",{attrs:{href:"#/docs/swipe"}},[s._v("swipeItem")])]),a("li",[a("a",{attrs:{href:"#/docs/tabs"}},[s._v("tabs")])]),a("li",[a("a",{attrs:{href:"#/docs/tabs"}},[s._v("tabItem")])]),a("li",[a("a",{attrs:{href:"#/docs/upload"}},[s._v("upload")])])])]),a("h3",[s._v("css全局变量")]),a("pre",[a("code",{staticClass:"language-css"},[a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":root")]),s._v(" {\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* global */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--default")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#BEC5CB")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--primary")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#5074FF")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--success")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#67c23a")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--warning")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#e6a23c")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--danger")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#f56c6c")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--primary-light")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#5074FF")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--danger-light")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#FA9191")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--default-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#1E3259")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--info-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#1D3456")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--primary-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#757575")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--success-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#3D7D11")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--warning-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#DE5E05")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--error-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#FF5555")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--overtime")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#FFE7E7")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--progress")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#CEF5CA")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--not-started")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#FFEAC7")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--disabled")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#E2E5F0")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--tag-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#9898B6")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--input-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* button */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--button-text-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* canvas */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--canvas-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#ffffdc")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* checkbox */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--checkbox-disabled-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#c8c9cc")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--checkbox-disabled-border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#dcdfe6")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--checkbox-disabled-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#ebedf0")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--checkbox-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#333")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--checkbox-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#dcdfe6")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--checkbox-vertical-border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#f0f0f0")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--checkbox-button-border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#dcdfe6")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--checkbox-button-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--checkbox-button-disabled-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#ebebe4")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--checkbox-button-disabled-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#999")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* datetime */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--datetime-disabled-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#ebebe4")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* to-top */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--to-top-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#C1CEFF")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* list */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--list-refresh-tip")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#ccc")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* loading */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--loading-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#999")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* picker */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--picker-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#333")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--picker-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--picker-btn-cancle")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#bec5cb")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--picker-btn-submit")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#3388FF")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--picker-border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#ebedf0")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* progress */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--progress-inner")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#EBEDFB")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* radio */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--radio-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#333")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--radio-disabled-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#c8c9cc")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--radio-button-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--radio-button-border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#dcdfe6")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--radio-button-disabled-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#999")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--radio-button-disabled-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#ebebe4")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--radio-vertical-border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#f0f0f0")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* range */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--range-bar")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#EBEDFB")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--range-progress")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#5074FF")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--range-thumb")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--range-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#999")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--range-disabled-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#9D9FA8")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* select */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--select-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--select-disabled-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#ebebe4")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--select-popup-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#333")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--select-popup-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--select-popup-border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#ebedf0")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* steps */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--steps-toggle-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#9898B6")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--steps-line")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#F2F3F5")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--steps-icon")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#DCDEE0")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* tab */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--tab-card-border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#e4e7ed")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--tab-card-disabled-bg")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#f6f6f6")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--tab-button-active-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--tab-border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#EFF2F5")]),s._v(";\n\n  "),a("span",{staticClass:"hljs-comment"},[s._v("/* upload */")]),s._v("\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--upload-del-text")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#ccc")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("--upload-add-button")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#EBEDFB")]),s._v(";\n}\n")])])])}],e=a("2877"),v={},_=Object(e["a"])(v,n,l,!1,null,null,null);t["default"]=_.exports}}]);