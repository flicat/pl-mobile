(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a86a4600"],{"0321":function(t,i,e){"use strict";var n=e("cfea"),s=e.n(n);s.a},"7b83":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("pl-swipe",{attrs:{height:"12em",auto:2e3,loop:""},on:{scroll:t.onScroll}},[e("div",[e("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("1")]),e("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("2")]),e("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("3")]),e("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("4")])],1)])],1)},s=[],o={methods:{onScroll:function(t){console.log("index: ",t)},submit:function(){var t=this;return new Promise((function(i,e){t.$loadingShow("提交中。。。"),setTimeout((function(){i(),t.$loadingHide(),t.$toast("提交成功")}),2e3)}))},cancel:function(){var t=this;return new Promise((function(i,e){t.$loadingShow("取消中。。。"),setTimeout((function(){e(),t.$loadingHide(),t.$toast("取消失败")}),2e3)}))}}},a=o,l=(e("0321"),e("2877")),c=Object(l["a"])(a,n,s,!1,null,"2c26310a",null);i["default"]=c.exports},cfea:function(t,i,e){}}]);