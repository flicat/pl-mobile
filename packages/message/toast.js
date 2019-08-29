import Vue from 'vue'

// toast
let Toast = Vue.extend({
  render (createElement) {
    return createElement('div', {
      class: 'pl-toast',
      style: {
        display: this.display,
        position: 'fixed',
        zIndex: 9999,
        left: '50%',
        top: '75%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#d6d6d6',
        borderRadius: '3px',
        padding: '0.3em 1em',
        lineHeight: 'normal',
        textAlign: 'center',
        maxWidth: '90%',
        wordBreak: 'break-all',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.3s ease',
        opacity: this.visible ? 1 : 0,
      }
    }, this.text)
  },
  data: function () {
    return {
      display: 'none',
      visible: false,
      timer: null,
      duration: 3000,
      text: ''
    }
  },
  methods: {
    show () {
      this.display = 'block'
      this.$nextTick(() => {
        this.visible = true
      })

      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.hide()
      }, this.duration)
    },
    hide () {
      this.visible = false
      setTimeout(() => {
        this.display = 'none'
      }, 300)
    }
  }
})

let toastDom = new Toast({
  el: document.createElement('div')
})

function showToast (text, duration) {
  toastDom.text = text
  if (typeof duration === 'number') {
    toastDom.duration = duration
  }
  toastDom.show()
}

export default function (Vue) {
  Vue.prototype.$toast = showToast
  document.body.appendChild(toastDom.$el)
}
