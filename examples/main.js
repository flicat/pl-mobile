import Vue from 'vue'
import App from './App.vue'
import router from './router'
import UIMobile from '../src'

Vue.use(UIMobile)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
