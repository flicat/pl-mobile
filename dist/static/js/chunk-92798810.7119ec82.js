(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92798810"],{"16c9":function(e,l,a){"use strict";var t=a("84cf"),o=a.n(t);o.a},"84cf":function(e,l,a){},ee9b:function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"content"},[a("h3",[e._v("基础用法")]),a("pl-checkbox",{attrs:{options:e.data},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{attrs:{options:e.data,button:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("尺寸大小")]),a("pl-checkbox",{attrs:{options:e.data,size:"small"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{attrs:{options:e.data,size:"normal"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{attrs:{options:e.data,size:"large"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("显示label")]),a("pl-checkbox",{attrs:{options:e.data,label:"请选择："},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{attrs:{options:e.data,label:"请选择：",wrap:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("禁用")]),a("pl-checkbox",{attrs:{options:e.data,label:"请选择：",disabled:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("前置图标")]),a("pl-checkbox",{attrs:{options:e.data,label:"请选择："},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},[a("pl-icon",{attrs:{slot:"prepend",name:"icon-dingwei",fill:"#999"},slot:"prepend"})],1),a("pl-checkbox",{attrs:{options:e.data,label:"请选择：",wrap:"",required:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},[a("pl-icon",{attrs:{slot:"prepend",name:"icon-dingwei",fill:"#999"},slot:"prepend"})],1),a("h3",[e._v("竖排样式")]),a("pl-checkbox",{attrs:{options:e.data,required:"",vertical:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{attrs:{options:e.data,label:"请选择：",required:"",vertical:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("开关按钮")]),a("pl-checkbox",{attrs:{trueValue:!0,falseValue:!1},model:{value:e.boolValue,callback:function(l){e.boolValue=l},expression:"boolValue"}},[e._v("开关")]),a("pl-checkbox",{attrs:{trueValue:!0,falseValue:!1,button:""},model:{value:e.boolValue,callback:function(l){e.boolValue=l},expression:"boolValue"}},[e._v("开关")]),a("pl-checkbox",{attrs:{trueValue:!0,falseValue:!1,label:"请选择："},model:{value:e.boolValue,callback:function(l){e.boolValue=l},expression:"boolValue"}}),a("pl-checkbox",{attrs:{trueValue:!0,falseValue:!1,label:"请选择：",button:""},model:{value:e.boolValue,callback:function(l){e.boolValue=l},expression:"boolValue"}}),a("h3",[e._v("自定义子项")]),a("pl-checkbox",{attrs:{options:e.data},scopedSlots:e._u([{key:"default",fn:function(l){return[e._v(e._s(l.item.label)+" - "+e._s(l.item.value))]}}]),model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("h3",[e._v("必填")]),a("pl-checkbox",{ref:"box1",attrs:{options:e.data,rules:e.rules1,label:"请选择：",required:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}}),a("pl-checkbox",{ref:"box2",attrs:{trueValue:!0,falseValue:!1,rules:e.rules2,label:"请选择：",button:"",required:""},model:{value:e.boolValue,callback:function(l){e.boolValue=l},expression:"boolValue"}}),a("pl-cell",{attrs:{span:[1]}},[a("pl-button",{attrs:{type:"success"},on:{click:e.validate}},[e._v("表单校验")])],1)],1)},o=[],u=(a("96cf"),a("3b8d")),n={data:function(){return{boolValue:null,value:[],data:[{label:"选项1",value:1,disabled:!1},{label:"选项2",value:2,disabled:!0},{label:"选项3",value:3,disabled:!1}],rules1:[{required:!0,message:"请选择",trigger:"change"}],rules2:[{required:!0,message:"请选择",trigger:"change",type:"boolean"}]}},methods:{onChange:function(){console.log("onChange::",this.value)},validate:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$refs["box1"].validate();case 3:return e.next=5,this.$refs["box2"].validate();case 5:this.$toast("校验成功"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$toast("校验失败: "+e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function l(){return e.apply(this,arguments)}return l}()}},c=n,s=(a("16c9"),a("2877")),r=Object(s["a"])(c,t,o,!1,null,"287572db",null);l["default"]=r.exports}}]);