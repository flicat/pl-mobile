(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0348e80"],{"07f8":function(a,e,l){"use strict";l.r(e);var t=function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",{staticClass:"content"},[l("h3",[a._v("基础用法")]),l("pl-radio",{attrs:{options:a.data},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("pl-radio",{attrs:{options:a.data,button:""},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("h3",[a._v("尺寸大小")]),l("pl-radio",{attrs:{options:a.data,size:"small"},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("pl-radio",{attrs:{options:a.data,size:"normal"},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("pl-radio",{attrs:{options:a.data,size:"large"},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("h3",[a._v("显示label")]),l("pl-radio",{attrs:{options:a.data,label:"请选择："},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("h3",[a._v("禁用")]),l("pl-radio",{attrs:{options:a.data,label:"请选择：",disabled:""},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("pl-radio",{attrs:{options:a.data,label:"请选择：",button:"",disabled:""},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("h3",[a._v("标题折行显示")]),l("pl-radio",{attrs:{options:a.data,label:"请选择请选择请选择请选择请选择请选择：",wrap:""},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("h3",[a._v("竖排样式")]),l("pl-radio",{attrs:{options:a.data,label:"请选择：",vertical:""},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("h3",[a._v("前置图标")]),l("pl-radio",{attrs:{options:a.data,label:"请选择：",wrap:"",required:""},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}},[l("pl-icon",{attrs:{slot:"prepend",name:"icon-dingwei",fill:"#999"},slot:"prepend"})],1),l("pl-radio",{attrs:{options:a.data,label:"请选择：",required:""},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}},[l("pl-icon",{attrs:{slot:"prepend",name:"icon-dingwei",fill:"#999"},slot:"prepend"})],1),l("h3",[a._v("自定义子节点")]),l("pl-radio",{attrs:{options:a.data,label:"单选：",labelWidth:"4em"},on:{change:a.onChange},scopedSlots:a._u([{key:"default",fn:function(e){return[a._v(a._s(e.item.label)+" - "+a._s(e.item.value))]}}]),model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("h3",[a._v("表单校验")]),l("pl-radio",{ref:"radio",attrs:{options:a.data,label:"请选择：",rules:a.rules,required:""},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),l("pl-cell",{attrs:{span:[1]}},[l("pl-button",{attrs:{type:"success"},on:{click:a.validate}},[a._v("表单校验")])],1)],1)},n=[],o=(l("96cf"),l("3b8d")),u={data:function(){return{value:null,data:[{label:"选项1",value:1,disabled:!1},{label:"选项2",value:2,disabled:!0},{label:"选项3",value:3,disabled:!1}],rules:[{required:!0,message:"请选择",trigger:"change",type:"number"}]}},methods:{validate:function(){var a=Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,this.$refs.radio.validate();case 3:this.$toast("校验成功"),a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),this.$toast("校验失败: "+a.t0);case 9:case"end":return a.stop()}}),a,this,[[0,6]])})));function e(){return a.apply(this,arguments)}return e}(),onChange:function(){console.log("onChange::",this.value)}}},i=u,s=(l("2662"),l("2877")),r=Object(s["a"])(i,t,n,!1,null,"4b7f87e8",null);e["default"]=r.exports},2662:function(a,e,l){"use strict";var t=l("2c65"),n=l.n(t);n.a},"2c65":function(a,e,l){}}]);