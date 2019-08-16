/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/6/28 028
 * @description Description
 */

import Vue from 'vue'
import Loading from './loading'
import Alert from './message/alert'
import Confirm from './message/confirm'
import Toast from './message/toast'

Vue.use(Loading)
Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast)

// 引入第三方js
// Vue.component('remoteJs', {
//   render(createElement) {
//     return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
//   },
//   props: {
//     src: { type: String, required: true },
//   }
// })

Vue.component('pl-button', () => import('./button'))
Vue.component('pl-cell', () => import('./cell'))
Vue.component('pl-checkbox', () => import('./checkbox'))
Vue.component('pl-collapse', () => import('./collapse'))
// Vue.component('pl-datetime', () => import('./datetime'))
// Vue.component('pl-dialog', () => import('./dialog'))
// Vue.component('pl-form', () => import('./form'))
Vue.component('pl-go-top-button', () => import('./goTopButton'))
Vue.component('pl-icon', () => import('./icon'))
Vue.component('pl-input', () => import('./input'))
Vue.component('pl-list', () => import('./list'))
Vue.component('pl-loading', () => import('./loading/loading.vue'))
Vue.component('pl-picker', () => import('./picker'))
Vue.component('pl-progress', () => import('./progress'))
Vue.component('pl-radio', () => import('./radio'))
Vue.component('pl-range', () => import('./range'))
Vue.component('pl-select', () => import('./select'))
Vue.component('pl-steps', () => import('./steps'))
Vue.component('pl-step-item', () => import('./steps/step-item'))
// Vue.component('pl-swipe', () => import('./swipe'))
Vue.component('pl-tab-item', () => import('./tabs/tab-item'))
Vue.component('pl-tabs', () => import('./tabs'))
Vue.component('pl-upload', () => import('./upload'))
