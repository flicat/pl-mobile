import plAlert from './index.vue'

// alert
export default function (Vue) {
  let Alert = Vue.extend({
    components: {
      plAlert
    },
    render (createElement) {
      return this.display && createElement('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0
    }
      }, [
        createElement('plAlert', {
          props: {
            title: this.title,
            message: this.message,
            component: this.component,
            html: this.html,
            buttonText: this.buttonText,
            action: this.action
          },
          on: {
            hide: () => {
              this.hide()
            }
          }
        })
      ]) || null
    },
    data: function () {
      return {
        display: false,
        visible: false,

        title: '',                 // 弹框标题
        message: '',               // 弹框主体信息
        component: null,          // 子组件
        html: false,               // 是否显示为HTML
        buttonText: '',            // 按钮文字
        action: () => {}           // 确认回调
      }
    },
    methods: {
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

  function showAlert ({title, message, component, html, buttonText, action}) {
    alertDom.title = title || ''
    alertDom.component = component
    alertDom.html = !!html && !component
    alertDom.message = !component && message || ''
    alertDom.buttonText = buttonText || '好'
    alertDom.action = action || null
    alertDom.show()
  }

  Vue.prototype.$alert = showAlert
  document.body.appendChild(alertDom.$el)
}
