(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67f9776f"],{"0860":function(t,a,n){"use strict";var i=n("5d5b"),e=n.n(i);e.a},"5d5b":function(t,a,n){},d3af:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),n("div",{staticClass:"list"},[n("pl-list",{staticClass:"pl-list",attrs:{autoLoad:50,loading:t.loading,finished:t.finished,refreshText:"松开刷新",loadingText:"加载中...",finishedText:"加载完成",errorText:"加载失败"},on:{refresh:t.reload,load:t.load}},[t._l(t.data,(function(a){return n("p",{key:a.value},[t._v(t._s(a.label))])})),n("span",{attrs:{slot:"top-loading"},slot:"top-loading"},[t._v("努力重刷中...")]),n("span",{attrs:{slot:"top-refresh"},slot:"top-refresh"},[t._v("放开重刷")]),n("span",{attrs:{slot:"bottom-loading"},slot:"bottom-loading"},[t._v("努力加载中...")]),n("span",{attrs:{slot:"bottom-finished"},slot:"bottom-finished"},[t._v("全部加载完啦")])],2)],1)])},e=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"title"},[n("h4",[t._v("滚动列表 "),n("em",[t._v("下拉刷新")]),n("em",[t._v("上拉加载")])])])}],s={data:function(){return{loading:!1,finished:!1,page:1,data:[]}},created:function(){this.reload()},methods:{reload:function(){var t=this;this.page=1,this.finished=!1,this.loading=!0,this.getData().then((function(a){t.loading=!1,t.data=a}))},load:function(){var t=this;this.page++,this.finished=!1,this.loading=!0,this.getData().then((function(a){t.loading=!1,t.data=t.data.concat(a),t.finished=t.data.length>=30}))},getData:function(){var t=this;return new Promise((function(a,n){for(var i=[],e=1;e<11;e++){var s=e+10*(t.page-1);i.push({label:"选项"+s,value:s})}setTimeout((function(){a(i)}),3e3)}))}}},o=s,l=(n("0860"),n("2877")),d=Object(l["a"])(o,i,e,!1,null,"cab6c1d4",null);a["default"]=d.exports}}]);