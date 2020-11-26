(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7465bd2d"],{"3016e":function(s,a,t){"use strict";t.r(a);var v=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},l=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"markdown-body"},[t("h2",[s._v("canvas 签字板")]),t("h3",[s._v("基础用法")]),t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"content"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("pl-canvas")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"canvas"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"canvas"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("pl-canvas")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("pl-button")]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"clear"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("清除画布"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("pl-button")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("pl-button")]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"getImageDataUrl"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("获取dataURL"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("pl-button")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v("\n      }\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      clear () {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.canvas.clear()\n      },\n      getImageDataUrl () {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".src = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.canvas.getImageDataUrl()\n      }\n    }\n  }\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("获取 jpg 格式的 Blob 图片对象")]),t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"content"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("pl-canvas")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"canvas"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"canvas"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("pl-canvas")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("pl-button")]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"getImageBlob"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("获取BLob"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("pl-button")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v("\n      }\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      getImageBlob () {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" result = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.canvas.getImageBlob("),t("span",{staticClass:"hljs-string"},[s._v("'image/jpeg'")]),s._v(")\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".src = URL.createObjectURL(result)\n      }\n    }\n  }\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("横向画板")]),t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"content"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("pl-canvas")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"canvas"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"canvas"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("orientation")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"right"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"placeholder"')]),s._v(">")]),s._v("请在此处签名"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("pl-canvas")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("Attributes")]),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),t("th",[s._v("说明")]),t("th",[s._v("类型")]),t("th",[s._v("可选值")]),t("th",[s._v("默认值")])])]),t("tbody",[t("tr",[t("td",[s._v("size")]),t("td",[s._v("笔触大小")]),t("td",[s._v("Number")]),t("td",[s._v("—")]),t("td",[s._v("14")])]),t("tr",[t("td",[s._v("orientation")]),t("td",[s._v("画布朝向")]),t("td",[s._v("String")]),t("td",[s._v("top / right / bottom / left")]),t("td",[s._v("top")])]),t("tr",[t("td",[s._v("penId")]),t("td",[s._v("笔触id")]),t("td",[s._v("Number")]),t("td",[s._v("0 / 1")]),t("td",[s._v("0")])]),t("tr",[t("td",[s._v("fillStyle")]),t("td",[s._v("canvas背景色，设置后会遮挡住placeholder，如果需要导出jpg图片，则必须设置，否则会产生黑底")]),t("td",[s._v("String")]),t("td",[s._v("—")]),t("td",[s._v("—")])])])]),t("h3",[s._v("Slots")]),t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),t("th",[s._v("说明")])])]),t("tbody",[t("tr",[t("td",[s._v("placeholder")]),t("td",[s._v("画布空白遮罩")])])])]),t("h3",[s._v("Methods")]),t("table",[t("thead",[t("tr",[t("th",[s._v("方法名")]),t("th",[s._v("说明")]),t("th",[s._v("参数")])])]),t("tbody",[t("tr",[t("td",[s._v("clear")]),t("td",[s._v("清空画板")]),t("td",[s._v("—")])]),t("tr",[t("td",[s._v("getImageDataUrl")]),t("td",[s._v("获取图像 DataUrl")]),t("td",[s._v("[type, encoderOptions]")])]),t("tr",[t("td",[s._v("getImageBlob")]),t("td",[s._v("获取图像 Blob")]),t("td",[s._v("[type, encoderOptions]")])])])]),t("h3",[s._v("Events")]),t("table",[t("thead",[t("tr",[t("th",[s._v("事件名称")]),t("th",[s._v("说明")]),t("th",[s._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[s._v("drawStart")]),t("td",[s._v("开始绘画")]),t("td",[s._v("—")])]),t("tr",[t("td",[s._v("drawing")]),t("td",[s._v("绘画中")]),t("td",[s._v("—")])]),t("tr",[t("td",[s._v("drawEnd")]),t("td",[s._v("绘画结束")]),t("td",[s._v("—")])]),t("tr",[t("td",[s._v("clear")]),t("td",[s._v("清除画布")]),t("td",[s._v("—")])])])])])}],_=t("2877"),n={},c=Object(_["a"])(n,v,l,!1,null,null,null);a["default"]=c.exports}}]);