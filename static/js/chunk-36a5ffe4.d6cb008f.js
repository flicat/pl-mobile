(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36a5ffe4","chunk-86b877c6"],{"360c":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"content"},[i("pl-button",{on:{click:t.alert}},[t._v("弹窗")]),i("pl-button",{on:{click:t.confirm}},[t._v("确认弹窗")]),i("pl-button",{on:{click:t.toast}},[t._v("消息提醒")]),i("pl-button",{on:{click:t.dialog1}},[t._v("模态框1")]),i("pl-button",{on:{click:t.dialog2}},[t._v("模态框2")])],1)},o=[],s=i("7b83"),l={methods:{alert:function(){this.$alert({title:"提示",message:"这个一个弹窗！",buttonText:"确定",action:function(){console.log("确定")}})},confirm:function(){this.$confirm({title:"提示",message:"这个一个确认弹窗！",submitText:"确定",cancelText:"取消",submit:function(){console.log("确定")},cancel:function(){console.log("取消")}})},dialog1:function(){this.$alert({component:s["default"],submitText:"确定",cancelText:"取消",action:function(){console.log("确定")}})},dialog2:function(){this.$confirm({component:s["default"],submitText:"确定",cancelText:"取消",submit:function(){console.log("确定")},cancel:function(){console.log("取消")}})},toast:function(){this.$toast("消息提醒",3e3)}}},c=l,a=(i("dfd4"),i("2877")),u=Object(a["a"])(c,e,o,!1,null,"30b8ff33",null);n["default"]=u.exports},"7b83":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"content"},[i("pl-swipe",{attrs:{auto:2e3,loop:""},on:{scroll:t.onScroll1}},[i("div",[i("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("1")]),i("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("2")]),i("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("3")]),i("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("4")])],1)]),i("p",[t._v(t._s(t.scrollIndex1+1)+" / 4")]),i("pl-swipe",{attrs:{auto:2e3,vertical:""},on:{scroll:t.onScroll2}},[i("div",[i("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("1")]),i("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("2")]),i("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("3")]),i("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("4")])],1)]),i("p",[t._v(t._s(t.scrollIndex2+1)+" / 4")])],1)},o=[],s={data:function(){return{scrollIndex1:0,scrollIndex2:0}},methods:{onScroll1:function(t){this.scrollIndex1=t},onScroll2:function(t){this.scrollIndex2=t},submit:function(){var t=this;return new Promise((function(n,i){t.$loadingShow("提交中。。。"),setTimeout((function(){n(),t.$loadingHide(),t.$toast("提交成功")}),2e3)}))},cancel:function(){var t=this;return new Promise((function(n,i){t.$loadingShow("取消中。。。"),setTimeout((function(){i(),t.$loadingHide(),t.$toast("取消失败")}),2e3)}))}}},l=s,c=(i("f43d"),i("2877")),a=Object(c["a"])(l,e,o,!1,null,"68d3074e",null);n["default"]=a.exports},cc7b:function(t,n,i){},d128:function(t,n,i){},dfd4:function(t,n,i){"use strict";var e=i("cc7b"),o=i.n(e);o.a},f43d:function(t,n,i){"use strict";var e=i("d128"),o=i.n(e);o.a}}]);