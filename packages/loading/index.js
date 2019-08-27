import Vue from 'vue'
import plLoading from './loading.vue'

// loading
let loading = Vue.extend({
  components: {
    plLoading
  },
  render (createElement) {
    return createElement('div', {
      class: 'loading',
      style: {
        display: this.isShow ? 'flex' : 'none',
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }
    }, [
      createElement('plLoading', {
        props: {
          vertical: this.vertical
        },
        style: {
          color: '#fff',
          margin: 'auto'
        }
      }, this.text)
    ])
  }
})

let loadingDom = new loading({
  el: document.createElement('div'),
  data: function () {
    return {
      vertical: true,
      isShow: false,
      text: ''
    }
  }
})

let loadingCount = 0

function showLoading (text, vertical) {
  loadingCount++
  loadingDom.isShow = true
  loadingDom.text = text
  if (typeof vertical === 'boolean') {
    loadingDom.vertical = vertical
  }
}

function hideLoading () {
  loadingCount--
  loadingDom.isShow = loadingCount > 0
}

/* istanbul ignore next */
List.install = function(Vue) {
  Vue.component(plLoading.name, plLoading);
  Vue.prototype.$loadingShow = showLoading
  Vue.prototype.$loadingHide = hideLoading
  document.body.appendChild(loadingDom.$el)
};

export default List;
