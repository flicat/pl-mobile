!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.PlMobile=e():t.PlMobile=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=231)}({178:function(t,e,n){},231:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pl-confirm"},[n("div",{staticClass:"pl-confirm-inner"},[n("div",{staticClass:"pl-confirm-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"pl-confirm-content"},[t.component?n(t.component,{ref:"child",tag:"component"}):t.html?n("span",{domProps:{innerHTML:t._s(t.message)}}):n("span",[t._v(t._s(t.message))])],1),n("div",{staticClass:"pl-confirm-button-wrap"},[n("div",{staticClass:"pl-confirm-button-cancel",on:{click:t.onCancel}},[t._v(t._s(t.cancelText))]),n("div",{staticClass:"pl-confirm-button-submit",on:{click:t.onSubmit}},[t._v(t._s(t.submitText))])])])])};i._withStripped=!0;var o={name:"plConfirm",componentName:"plConfirm",props:{title:String,message:String,html:Boolean,component:Object,submitText:String,cancelText:String,submit:Function,cancel:Function},methods:{onSubmit:function(){var t=this;new Promise((function(e,n){t.$refs.child&&"function"==typeof t.$refs.child.submit?e(t.$refs.child.submit()):e()})).then((function(){"function"==typeof t.submit&&t.submit(),t.$emit("hide")}))},onCancel:function(){var t=this;new Promise((function(e,n){t.$refs.child&&"function"==typeof t.$refs.child.cancel?e(t.$refs.child.cancel()):e()})).then((function(){"function"==typeof t.cancel&&t.cancel(),t.$emit("hide")}))}}},s=(n(253),n(3)),c=Object(s.a)(o,i,[],!1,null,"1e5699af",null);c.options.__file="packages/confirm/index.vue";var r=c.exports;e.default=function(t){var e=new(t.extend({components:{plConfirm:r},render:function(t){var e=this;return this.display&&t("div",{style:{transition:"all 0.3s ease",opacity:this.visible?1:0}},[t("plConfirm",{props:{title:this.title,message:this.message,html:this.html,component:this.component,submitText:this.submitText,cancelText:this.cancelText,submit:this.submit,cancel:this.cancel},on:{hide:function(){e.hide()}}})])||null},data:function(){return{display:!1,visible:!1,title:"",message:"",html:!1,component:null,submitText:"",cancelText:"",submit:function(){},cancel:function(){}}},methods:{show:function(){var t=this;this.display=!0,this.$nextTick((function(){t.visible=!0}))},hide:function(){var t=this;this.visible=!1,setTimeout((function(){t.display=!1}),300)}}}))({el:document.createElement("div")});t.prototype.$confirm=function(t){var n=t.title,i=t.message,o=t.component,s=t.html,c=t.submitText,r=t.cancelText,l=t.submit,u=t.cancel;e.component=o,e.html=!!s&&!o,e.message=!o&&i||"",e.title=n||"",e.submitText=c||"确认",e.cancelText=r||"取消",e.submit=l||null,e.cancel=u||null,e.show()},document.body.appendChild(e.$el)}},253:function(t,e,n){"use strict";var i=n(178);n.n(i).a},3:function(t,e,n){"use strict";function i(t,e,n,i,o,s,c,r){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),c?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},u._ssrRegister=l):o&&(l=r?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var a=u.render;u.render=function(t,e){return l.call(e),a(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:u}}n.d(e,"a",(function(){return i}))}}).default}));