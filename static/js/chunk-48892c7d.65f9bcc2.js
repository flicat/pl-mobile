(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48892c7d","chunk-08dd0da9"],{"26e5":function(t,e,s){"use strict";var i=s("5498"),n=s.n(i);n.a},"360c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("pl-cell",{attrs:{span:[1,1],gap:"1rem"}},[s("pl-button",{attrs:{type:"primary"},on:{click:t.alert}},[t._v("弹窗")]),s("pl-button",{attrs:{type:"primary"},on:{click:t.dialog1}},[t._v("模态框")])],1),s("pl-cell",{attrs:{span:[1,1],gap:"1rem"}},[s("pl-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确认弹窗")]),s("pl-button",{attrs:{type:"primary"},on:{click:t.dialog2}},[t._v("确认模态框")])],1),s("pl-cell",{attrs:{span:[1,1],gap:"1rem"}},[s("pl-button",{attrs:{type:"primary"},on:{click:t.toast}},[t._v("消息提醒")])],1)],1)},n=[],o=s("7b83"),l={methods:{alert:function(){this.$alert({title:"提示",message:"这个一个弹窗！",buttonText:"确定",action:function(){console.log("确定")}})},confirm:function(){this.$confirm({title:"提示",message:"这个一个确认弹窗！",submitText:"确定",cancelText:"取消",submit:function(){console.log("确定")},cancel:function(){console.log("取消")}})},dialog1:function(){this.$alert({component:o["default"],componentProps:{isMsg:!0},submitText:"确定",cancelText:"取消",action:function(){console.log("确定")}})},dialog2:function(){this.$confirm({component:o["default"],componentProps:{isMsg:!0},submitText:"确定",cancelText:"取消",submit:function(){console.log("确定")},cancel:function(){console.log("取消")}})},toast:function(){this.$toast("消息提醒",3e3)}}},c=l,a=(s("26e5"),s("2877")),p=Object(a["a"])(c,i,n,!1,null,"6115a0e4",null);e["default"]=p.exports},"447e":function(t,e,s){},5498:function(t,e,s){},"7b83":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"swipe-1"},[s("pl-swipe",{attrs:{auto:2e3,loop:""},on:{scroll:t.onScroll1}},[s("div",[s("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("1")]),s("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("2")]),s("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("3")]),s("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("4")])],1)]),s("p",[t._v(t._s(t.scrollIndex1+1)+" / 4")])],1),t.isMsg?t._e():s("div",{staticClass:"swipe-2"},[s("pl-swipe",{attrs:{auto:2e3,vertical:""},on:{scroll:t.onScroll2}},[s("div",[s("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("1")]),s("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("2")]),s("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("3")]),s("pl-swipe-item",{staticClass:"pl-swipe-item"},[t._v("4")])],1)]),s("p",[t._v(t._s(t.scrollIndex2+1)+" / 4")])],1)])},n=[],o={props:{isMsg:{type:Boolean,default:!1}},data:function(){return{scrollIndex1:0,scrollIndex2:0}},methods:{onScroll1:function(t){this.scrollIndex1=t},onScroll2:function(t){this.scrollIndex2=t},submit:function(){var t=this;return new Promise((function(e,s){t.$loadingShow("提交中。。。"),setTimeout((function(){e(),t.$loadingHide(),t.$toast("提交成功")}),2e3)}))},cancel:function(){var t=this;return new Promise((function(e,s){t.$loadingShow("取消中。。。"),setTimeout((function(){s("取消失败"),t.$loadingHide(),t.$toast("取消失败")}),2e3)}))}}},l=o,c=(s("ad27"),s("2877")),a=Object(c["a"])(l,i,n,!1,null,"67e54160",null);e["default"]=a.exports},ad27:function(t,e,s){"use strict";var i=s("447e"),n=s.n(i);n.a}}]);