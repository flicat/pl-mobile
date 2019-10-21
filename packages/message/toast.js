// toast
export default function (Vue) {
  let Toast = Vue.extend({
    render (createElement) {
      return this.display && createElement('div', {
        class: 'pl-toast',
        style: {
          display: 'block',
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
      }, this.text) || null
    },
    data: function () {
      return {
        display: false,
        visible: false,
        timer: null,
        duration: 3000,
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

  function showToast (text, duration) {
    toastDom.text = text
    if (typeof duration === 'number') {
      toastDom.duration = duration
    }
    toastDom.show()
  }

  Vue.prototype.$toast = showToast
  document.body.appendChild(toastDom.$el)
}
