import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PlMobile from '../src'

Vue.use(PlMobile)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
