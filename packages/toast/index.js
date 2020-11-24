import plToast from './index.vue'

// toast
export default function (Vue) {
  let Toast = Vue.extend({
    components: {
      plToast
    },
    render (createElement) {
      return this.display && createElement('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0,
          willChange: 'opacity'
        }
      }, [
        createElement('plToast', {
          props: {
            text: this.text,
            html: this.html
          }
        })
      ]) || null
    },
    data: function () {
      return {
        display: false,
        visible: false,
        timer: null,

        duration: 3000,
        html: false,               // 是否显示为HTML
        text: ''
      }
    },
    methods: {
      show () {
        this.display = true
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
          this.display = false
        }, 300)
      }
    }
  })

  let toastDom = new Toast({
    el: document.createElement('div')
  })

  function showToast (text, duration, html = false) {
    toastDom.text = text
    toastDom.html = html
    if (typeof duration === 'number') {
      toastDom.duration = duration
    }
    toastDom.show()
  }

  Vue.prototype.$toast = showToast
  document.body.appendChild(toastDom.$el)
}
