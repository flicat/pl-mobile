(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d98d552"],{2382:function(t,e,i){"use strict";var a=i("4eed"),n=i.n(a);n.a},"4eed":function(t,e,i){},d3af:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),i("div",{staticClass:"list"},[i("pl-list",{staticClass:"pl-list",attrs:{autoLoad:100,loading:t.loading,finished:t.finished,refreshText:"松开刷新",loadingText:"加载中...",finishedText:"加载完成",errorText:"加载失败"},on:{refresh:t.reload,load:t.load}},t._l(t.data,(function(e){return i("p",{key:e.value},[t._v(t._s(e.label))])})),0)],1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h4",[t._v("滚动列表 "),i("em",[t._v("下拉刷新")]),i("em",[t._v("上拉加载")])])])}],s=(i("96cf"),i("3b8d")),r={data:function(){return{loading:!1,finished:!1,page:1,size:10,data:[],totalSize:50}},created:function(){this.reload()},methods:{reload:function(){this.page=1,this.finished=!1,this.getData()},load:function(){if(this.finished)return!1;this.page++,this.getData()},getData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,new Promise((function(t,e){for(var a=[],n=1;n<=i.size;n++){var s=n+i.size*(i.page-1);a.push({label:"选项"+s,value:s})}setTimeout((function(){t(a)}),1e3)}));case 3:e=t.sent,1===this.page?this.data=e:this.data=this.data.concat(e),this.finished=this.data.length>=this.totalSize,this.loading=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},o=r,l=(i("2382"),i("2877")),c=Object(l["a"])(o,a,n,!1,null,"589a9e1c",null);e["default"]=c.exports}}]);