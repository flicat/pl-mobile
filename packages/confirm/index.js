import plConfirm from './index.vue'

// confirm
export default function (Vue) {
  let Confirm = Vue.extend({
    components: {
      plConfirm
    },
    render (createElement) {
      return this.display && createElement('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0
        }
      }, [
        createElement('plConfirm', {
          props: {
            title: this.title,
            message: this.message,
            html: this.html,
            component: this.component,
            componentProps: this.componentProps,
            submitText: this.submitText,
            cancelText: this.cancelText,
            submit: this.submit,
            cancel: this.cancel
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
        html: false,               // 是否显示为HTML
        component: null,          // 子组件
        componentProps: {},       // 子组件props
        submitText: '',            // 提交按钮文字
        cancelText: '',            // 取消按钮文字
        submit: () => {},           // 确认回调
        cancel: () => {}           // 取消回调
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

  let confirmDom = new Confirm({
    el: document.createElement('div'),
  })

  function showConfirm ({title, message, component, componentProps, html, submitText, cancelText, submit, cancel}) {
    confirmDom.component = component
    confirmDom.componentProps = componentProps || {}
    confirmDom.html = !!html && !component
    confirmDom.message = !component && message || ''
    confirmDom.title = title || ''
    confirmDom.submitText = submitText || '确认'
    confirmDom.cancelText = cancelText || '取消'
    confirmDom.submit = submit || null
    confirmDom.cancel = cancel || null
    confirmDom.show()
  }

  Vue.prototype.$confirm = showConfirm
  document.body.appendChild(confirmDom.$el)
}
