(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8a9d186"],{"1c13":function(e,l,a){},4951:function(e,l,a){"use strict";var o=a("1c13"),u=a.n(o);u.a},ee9b:function(e,l,a){"use strict";a.r(l);var o=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"content"},[a("h3",[e._v("基础用法")]),a("pl-checkbox",{attrs:{options:e.data},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{attrs:{options:e.data,button:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("尺寸大小")]),a("pl-checkbox",{attrs:{options:e.data,size:"small"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{attrs:{options:e.data,size:"normal"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{attrs:{options:e.data,size:"large"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("显示label")]),a("pl-checkbox",{attrs:{options:e.data,label:"请选择："},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{attrs:{options:e.data,label:"请选择：",wrap:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("禁用")]),a("pl-checkbox",{attrs:{options:e.data,label:"请选择：",disabled:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("必填")]),a("pl-checkbox",{attrs:{options:e.data,rules:e.rules,label:"请选择：",required:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("前置图标")]),a("pl-checkbox",{attrs:{options:e.data,rules:e.rules,label:"请选择："},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},[a("pl-icon",{attrs:{slot:"prepend",name:"icon-dingwei",fill:"#999"},slot:"prepend"})],1),a("pl-checkbox",{attrs:{options:e.data,rules:e.rules,label:"请选择：",wrap:"",required:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},[a("pl-icon",{attrs:{slot:"prepend",name:"icon-dingwei",fill:"#999"},slot:"prepend"})],1),a("h3",[e._v("竖排样式")]),a("pl-checkbox",{attrs:{options:e.data,rules:e.rules,required:"",vertical:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{attrs:{options:e.data,rules:e.rules,label:"请选择：",required:"",vertical:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("开关按钮")]),a("pl-checkbox",{attrs:{trueValue:!0,falseValue:!1},model:{value:e.boolValue,callback:function(l){e.boolValue=l},expression:"boolValue"}},[e._v("开关")]),a("pl-checkbox",{attrs:{trueValue:!0,falseValue:!1,button:""},model:{value:e.boolValue,callback:function(l){e.boolValue=l},expression:"boolValue"}},[e._v("开关")]),a("pl-checkbox",{attrs:{trueValue:!0,falseValue:!1,label:"请选择："},model:{value:e.boolValue,callback:function(l){e.boolValue=l},expression:"boolValue"}}),a("pl-checkbox",{attrs:{trueValue:!0,falseValue:!1,label:"请选择：",button:""},model:{value:e.boolValue,callback:function(l){e.boolValue=l},expression:"boolValue"}}),a("h3",[e._v("自定义子项")]),a("pl-checkbox",{attrs:{options:e.data},scopedSlots:e._u([{key:"default",fn:function(l){return[e._v(e._s(l.item.label)+" - "+e._s(l.item.value))]}}]),model:{value:e.value,callback:function(l){e.value=l},expression:"value"}})],1)},u=[],t={data:function(){return{boolValue:!0,value:[],data:[{label:"选项1",value:1,disabled:!1},{label:"选项2",value:2,disabled:!0},{label:"选项3",value:3,disabled:!1}],rules:[{required:!0,message:"请选择",trigger:"change"}]}},methods:{submit:function(){this.$refs.checkbox.validate().then((function(){}))},onChange:function(){console.log("onChange::",this.value)}}},c=t,n=(a("4951"),a("2877")),s=Object(n["a"])(c,o,u,!1,null,"73e16eca",null);l["default"]=s.exports}}]);