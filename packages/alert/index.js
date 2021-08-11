import plAlert from './index.vue'

// alert
export default function (Vue) {
  let Alert = Vue.extend({
    components: {
      plAlert
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
        createElement('plAlert', {
          props: {
            title: this.title,
            message: this.message,
            component: this.component,
            componentProps: this.componentProps,
            html: this.html,
            buttonText: this.buttonText,
            action: this.action
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
        componentProps: {},       // 子组件props
        html: false,               // 是否显示为HTML
        buttonText: '',            // 按钮文字
        action: () => { }           // 确认回调
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

  let alertDom = new Alert({
    el: document.createElement('div'),
  })

  async function showAlert({ title, message, component, componentProps, html, buttonText, action }) {
    alertDom.title = title || ''
    alertDom.component = component
    alertDom.componentProps = componentProps || {}
    alertDom.html = !!html && !component
    alertDom.message = !component && message || ''
    alertDom.buttonText = buttonText || '好'
    alertDom.show()

    await new Promise((resolve, reject) => {
      alertDom.action = async () => {
        await alertDom.hide()
        resolve(typeof action === 'function' ? action() : null)
      }
    })
  }

  Vue.prototype.$alert = showAlert
  document.body.appendChild(alertDom.$el)
}
