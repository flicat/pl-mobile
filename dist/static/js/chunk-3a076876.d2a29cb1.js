(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a076876"],{5598:function(t,e,n){"use strict";var o=n("b5e2"),c=n.n(o);c.a},"99af":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("pl-button",{attrs:{type:"primary"},on:{click:t.getImg}},[t._v("请求一张图片")]),t.src?n("img",{ref:"img",attrs:{src:t.src}}):t._e()],1)},c=[],i=(n("28a5"),{data:function(){return{src:""}},created:function(){this.$fetchConfig({headers:{Accept:"application/json, text/plain, */*"},baseUrl:location.origin}),this.$fetchDefine({getImg:{baseUrl:window.location.href.split("#")[0],url:"/logo.png",method:"get",type:"blob"}}),this.$fetchMiddleware((function(t){console.log("Middleware1::",t),t.then((function(t){t&&401===t.code&&console.log("Your parameters may be incorrect")})).catch((function(t){console.log("network error")}))})),this.$fetchMiddleware((function(t){t.then((function(t){console.log("Middleware2::",t)}))}))},methods:{getImg:function(){var t=this;this.$fetch.getImg({_:Date.now()}).then((function(e){e&&e.size>0&&(t.src=URL.createObjectURL(e))}))}}}),r=i,a=(n("5598"),n("2877")),s=Object(a["a"])(r,o,c,!1,null,"6b22e732",null);e["default"]=s.exports},b5e2:function(t,e,n){}}]);