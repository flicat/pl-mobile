(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54c0b7d9"],{"0321":function(t,i,e){"use strict";var n=e("fca8"),s=e.n(n);s.a},"7b83":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("pl-swipe",{attrs:{height:"12em",auto:2e3,loop:""},on:{scroll:t.onScroll}},[e("div",[e("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("1")]),e("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("2")]),e("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("3")]),e("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("4")])],1)])],1)},s=[],o={methods:{onScroll:function(t){console.log("index: ",t)},submit:function(){var t=this;return new Promise(function(i,e){t.$loadingShow("提交中。。。"),setTimeout(function(){i(),t.$loadingHide(),t.$toast("提交成功")},2e3)})},cancel:function(){var t=this;return new Promise(function(i,e){t.$loadingShow("取消中。。。"),setTimeout(function(){e(),t.$loadingHide(),t.$toast("取消失败")},2e3)})}}},c=o,l=(e("0321"),e("2877")),a=Object(l["a"])(c,n,s,!1,null,"2c26310a",null);i["default"]=a.exports},fca8:function(t,i,e){}}]);