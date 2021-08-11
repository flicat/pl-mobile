import plToast from './index.vue'

// toast
export default function (Vue) {
  let Toast = Vue.extend({
    components: {
      plToast
    },
    render(createElement) {
      return this.display && createElement('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0,
          position: 'relative',
          zIndex: 998
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

        html: false,               // 是否显示为HTML
        text: ''
      }
    },
    methods: {
      show() {
        this.display = true
        this.$nextTick(() => {
          this.visible = true
        })
      },
      async hide() {
        await new Promise((resolve) => {
          this.visible = false
          setTimeout(() => {
            this.display = false
            resolve()
          }, 300)
        })
      }
    }
  })

  let toastDom = new Toast({
    el: document.createElement('div')
  })

  async function showToast(text, duration, html = false) {
    toastDom.text = text
    toastDom.html = html
    toastDom.show()
    duration |= 0

    if (!duration || !/\d+/.test(duration)) {
      duration = 3000
    }

    await new Promise((resolve, reject) => {
      clearTimeout(toastDom.timer)
      toastDom.timer = setTimeout(async () => {
        await toastDom.hide()
        resolve()
      }, duration)
    })
  }

  Vue.prototype.$toast = showToast
  document.body.appendChild(toastDom.$el)
}
