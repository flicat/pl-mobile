import Vue from 'vue'
import App from './App.vue'
import UIMobile from '../src/index.js'
// import UIMobile from 'ui-mobile'

Vue.use(UIMobile)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
