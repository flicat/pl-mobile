(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20638e60"],{"0fd0":function(e,a,l){"use strict";var t=l("80f7"),n=l.n(t);n.a},"7ea3":function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"content"},[l("h3",[e._v("基础用法")]),l("pl-select",{attrs:{options:e.data},on:{change:e.change},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("pl-select",{attrs:{options:e.data,multiple:""},on:{change:e.change2},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),l("h3",[e._v("尺寸选择")]),l("pl-select",{attrs:{placeholder:"请选择选项",options:e.data,size:"large",clearable:""},on:{change:e.change},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("pl-select",{attrs:{placeholder:"请选择选项",options:e.data,size:"small",multiple:"",clearable:""},on:{change:e.change2},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),l("h3",[e._v("禁用")]),l("pl-select",{attrs:{options:e.data,disabled:""},on:{change:e.change},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("h3",[e._v("折行显示")]),l("pl-select",{attrs:{label:"请选择请选择请选择请选择请选择请选择请选择请选择请选择：",placeholder:"请选择选项",options:e.data,clearable:"",wrap:""},on:{change:e.change},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("pl-select",{attrs:{label:"请选择：",placeholder:"请选择选项",options:e.data,multiple:"",clearable:"",wrap:"",required:""},on:{change:e.change2},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),l("h3",[e._v("自定义选项")]),l("pl-select",{attrs:{label:"请选择：",placeholder:"请选择",options:e.data,clearable:"",required:""},on:{change:e.change},scopedSlots:e._u([{key:"default",fn:function(a){return[l("span",[e._v(e._s(a.item.label)+"-"+e._s(a.item.value))])]}}]),model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("h3",[e._v("前后图标")]),l("pl-select",{attrs:{label:"请选择：",placeholder:"请选择",options:e.data,clearable:"",required:""},on:{change:e.change},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}},[l("pl-icon",{attrs:{slot:"prepend",name:"icon-dingwei",fill:"#999"},slot:"prepend"}),l("pl-icon",{attrs:{slot:"append",name:"icon-people_fill",fill:"#999"},slot:"append"})],1),l("h3",[e._v("表单校验")]),l("pl-select",{ref:"select1",attrs:{label:"请选择：",placeholder:"请选择选项",options:e.data,rules:e.rules1,clearable:"",required:""},on:{change:e.change},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("pl-select",{ref:"select2",attrs:{label:"请选择：",placeholder:"请选择选项",options:e.data,rules:e.rules2,multiple:"",clearable:"",required:""},on:{change:e.change2},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),l("pl-cell",{attrs:{span:[1]}},[l("pl-button",{attrs:{type:"success"},on:{click:e.validate}},[e._v("表单校验")])],1)],1)},n=[],c=(l("96cf"),l("1da1")),s={data:function(){return{value1:null,value2:[],rules1:[{required:!0,message:"请选择",trigger:"change"}],rules2:[{required:!0,message:"请选择",trigger:"change"}],data:[{label:"选项1",value:1,disabled:!1},{label:"选项2",value:2,disabled:!1},{label:"选项3",value:3,disabled:!0},{label:"选项4",value:4,disabled:!1},{label:"选项5",value:5,disabled:!1},{label:"选项6",value:6,disabled:!1}]}},methods:{validate:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$refs.select1.validate();case 3:return e.next=5,this.$refs.select2.validate();case 5:this.$toast("校验成功"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$toast("校验失败: "+e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function a(){return e.apply(this,arguments)}return a}(),change:function(){console.log("change::",this.value1)},change2:function(){console.log("change::",this.value2)}}},u=s,o=(l("0fd0"),l("2877")),r=Object(o["a"])(u,t,n,!1,null,"759e752a",null);a["default"]=r.exports},"80f7":function(e,a,l){}}]);