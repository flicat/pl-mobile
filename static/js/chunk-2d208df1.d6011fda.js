(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208df1"],{a749:function(e,a,l){"use strict";l.r(a);var r=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"content"},[l("pl-form",{ref:"form",attrs:{labelWidth:"5em"}},[l("pl-input",{ref:"input",attrs:{rules:e.rules.input,required:"",label:"名字："},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("pl-select",{attrs:{options:e.options,rules:e.rules.select,label:"请选择：",required:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("pl-range",{attrs:{rules:e.rules.range,min:0,max:100,step:1,label:"请选择：",labelWidth:"5em",required:""},model:{value:e.rangeValue,callback:function(a){e.rangeValue=a},expression:"rangeValue"}},[l("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("0%")]),l("span",{attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.rangeValue)+"%")])]),l("pl-radio",{attrs:{options:e.options,rules:e.rules.radio,label:"单选：",required:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("pl-checkbox",{ref:"checkbox",attrs:{options:e.options,rules:e.rules.checkbox,required:"",label:"多选："},model:{value:e.checkboxValue,callback:function(a){e.checkboxValue=a},expression:"checkboxValue"}}),l("p",[l("pl-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},t=[],s={data:function(){return{value:"",rangeValue:null,checkboxValue:[],options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}],rules:{input:[{required:!0,message:"请输入",trigger:"blur"}],select:[{required:!0,message:"请输入",trigger:"change"}],range:[{required:!0,message:"请输入",trigger:"change",type:"number"}],checkbox:[{required:!0,message:"请输入",trigger:"change",type:"array"}],radio:[{required:!0,message:"请输入",trigger:"change"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate().then((function(a){e.$toast("校验成功")})).catch((function(a){console.log(a),e.$toast("校验失败")}))}}},u=s,n=l("2877"),o=Object(n["a"])(u,r,t,!1,null,"3fc5449b",null);a["default"]=o.exports}}]);