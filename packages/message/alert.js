// alert
export default function (Vue) {
  let Alert = Vue.extend({
    render (createElement) {
      return this.display && createElement('div', {
        class: 'pl-alert',
        style: {
          display: 'flex',
          position: 'fixed',
          zIndex: 9999,
          left: '0',
          top: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0,
        }
      }, [
        createElement('div', {
          class: 'pl-alert-inner',
          style: {
            margin: 'auto',
            width: '80%',
            paddingTop: '1em',
            textAlign: 'center',
            backgroundColor: '#fff',
            borderRadius: '0.5em'
          }
        }, [
          createElement('div', {
            class: 'pl-alert-title',
            style: {
              color: '#333',
              paddingBottom: '1em',
              fontWeight: '700'
            }
          }, this.title),
          createElement('div', {
            class: 'pl-alert-content',
            domProps: this.html ? {innerHTML: this.message} : null,
            style: {
              color: '#666',
              lineHeight: '1.5em',
              padding: '0 1em 1em',
              borderBottom: '1px solid #EBEDFB'
            }
          }, this.html ? null : this.message),
          createElement('div', {
            class: 'pl-alert-button',
            on: {
              click: () => {
                this.confirm()
              }
            },
            style: {
              color: '#5074FF',
              lineHeight: '3em',
              fontWeight: '700'
            }
          }, this.buttonText)
        ])
      ]) || null
    },
    data: function () {
      return {
        display: false,
        visible: false,
        timer: null,

        title: '',                 // 弹框标题
        message: '',               // 弹框主体信息
        html: false,               // 是否显示为HTML
        buttonText: '',            // 按钮文字
        action: () => {}           // 确认回调
      }
    },
    methods: {
      confirm () {
        if (typeof this.action === 'function') {
          this.action()
        }
        this.hide()
      },
      show () {
        this.display = true
        this.$nextTick(() => {
          this.visible = true
        })
      },
      hide () {
        this.visible = false
        setTimeout(() => {
          this.display = false
        }, 300)
      }
    }
  })

  let alertDom = new Alert({
    el: document.createElement('div'),
  })

  function showAlert ({title, message, html, buttonText, action}) {
    alertDom.title = title || ''
    alertDom.message = message || ''
    alertDom.html = !!html
    alertDom.buttonText = buttonText || '好'
    alertDom.action = action || null
    alertDom.show()
  }

  Vue.prototype.$alert = showAlert
  document.body.appendChild(alertDom.$el)
}
