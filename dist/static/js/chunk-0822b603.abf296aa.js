(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0822b603"],{3346:function(t,a,e){},"8ed0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("pl-canvas",{ref:"canvas",staticClass:"canvas",attrs:{penId:0,orientation:"right"}},[e("span",{attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("请在此处签名")])]),e("pl-cell",{attrs:{span:[1,1,1],gap:"10px"}},[e("pl-button",{attrs:{type:"primary"},on:{click:t.clear}},[t._v("清除画布")]),e("pl-button",{attrs:{type:"primary"},on:{click:t.getImageDataUrl}},[t._v("获取dataURL")]),e("pl-button",{attrs:{type:"primary"},on:{click:t.getImageBlob}},[t._v("获取BLob")])],1),e("div",{staticClass:"preview"},[t.src?e("img",{attrs:{src:t.src,alt:""}}):t._e()])],1)},r=[],c={data:function(){return{src:""}},methods:{clear:function(){this.$refs.canvas.clear()},getImageDataUrl:function(){var t=this.$refs.canvas.getImageDataUrl();console.log("getImageDataUrl:: ",t),this.src=t},getImageBlob:function(){var t=this.$refs.canvas.getImageBlob();console.log("getImageBlob:: ",t),this.src=URL.createObjectURL(t)}}},n=c,l=(e("ee52"),e("2877")),o=Object(l["a"])(n,s,r,!1,null,"8037ce16",null);a["default"]=o.exports},ee52:function(t,a,e){"use strict";var s=e("3346"),r=e.n(s);r.a}}]);