(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22292a"],{ced6:function(a,e,t){"use strict";t.r(e);var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("pl-tabs",{attrs:{type:"card"},on:{change:a.onChange},model:{value:a.active,callback:function(e){a.active=e},expression:"active"}},a._l(a.data,(function(e){return t("pl-tab-item",{key:e.name,attrs:{name:e.name,disabled:e.disabled,label:e.label}},[a._v("\n      这里是"+a._s(e.label)+"\n    ")])})),1),t("br"),t("br"),t("br"),t("pl-tabs",{attrs:{type:"button",position:"left"},model:{value:a.active,callback:function(e){a.active=e},expression:"active"}},a._l(a.data,(function(e){return t("pl-tab-item",{key:e.name,attrs:{name:e.name,disabled:e.disabled,label:e.label}},[a._v(a._s(e.label))])})),1),t("br"),t("br"),t("br"),t("pl-tabs",{attrs:{type:"card",position:"right"},model:{value:a.active,callback:function(e){a.active=e},expression:"active"}},a._l(a.data,(function(e){return t("pl-tab-item",{key:e.name,attrs:{name:e.name,disabled:e.disabled}},[t("span",{attrs:{slot:"title"},slot:"title"},[a._v("--"+a._s(e.label)+"--")]),t("span",[a._v(a._s(e.label))])])})),1)],1)},n=[],i={data:function(){return{active:"tab1",data:[{label:"选项1",name:"tab1",disabled:!1},{label:"选项2",name:"tab2",disabled:!1},{label:"选项3",name:"tab3",disabled:!0}]}},methods:{onChange:function(){console.log("onChange::",this.active)}}},s=i,b=t("2877"),c=Object(b["a"])(s,l,n,!1,null,"a3b63fba",null);e["default"]=c.exports}}]);