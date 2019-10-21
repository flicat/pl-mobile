// confirm
export default function (Vue) {
  let Confirm = Vue.extend({
    render (createElement) {
      return this.display && createElement('div', {
        class: 'pl-confirm',
        style: {
          display: 'flex',
          position: 'fixed',
          zIndex: 999,
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
          class: 'pl-confirm-inner',
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
            class: 'pl-confirm-title',
            style: {
              color: '#333',
              paddingBottom: '1em',
              fontWeight: '700'
            }
          }, this.title),
          createElement('div', {
            class: 'pl-confirm-content',
            domProps: this.html ? {innerHTML: this.message} : null,
            style: {
              color: '#666',
              lineHeight: '1.5em',
              padding: '0 1em 1em',
              borderBottom: '1px solid #EBEDFB'
            }
          }, [this.component ? createElement(this.component) : this.html ? null : this.message]),
          createElement('div', {
            class: 'pl-confirm-button-wrap',
            style: {
              lineHeight: '3em',
              display: 'table',
              width: '100%',
              fontWeight: '700'
            }
          }, [
            createElement('div', {
              class: 'pl-confirm-button-cancel',
              style: {
                color: '#333',
                display: 'table-cell',
                width: '50%',
                borderRight: '1px solid #EBEDFB'
              },
              on: {
                click: () => {
                  this.onCancel()
                }
              }
            }, this.cancelText),
            createElement('div', {
              class: 'pl-confirm-button-submit',
              style: {
                color: '#5074FF',
                display: 'table-cell',
                width: '50%'
              },
              on: {
                click: () => {
                  this.onSubmit()
                }
              }
            }, this.submitText)
          ])
        ])
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
        submitText: '',            // 提交按钮文字
        cancelText: '',            // 取消按钮文字
        submit: () => {},           // 确认回调
        cancel: () => {}           // 取消回调
      }
    },
    methods: {
      onSubmit () {
        new Promise((resolve, reject) => {
          if (this.$children[0] && typeof this.$children[0].submit === 'function') {
            resolve(this.$children[0].submit())
          } else {
            resolve()
          }
        }).then(() => {
          if (typeof this.submit === 'function') {
            this.submit()
          }
          this.hide()
        })
      },
      onCancel () {
        new Promise((resolve, reject) => {
          if (this.$children[0] && typeof this.$children[0].cancel === 'function') {
            resolve(this.$children[0].cancel())
          } else {
            resolve()
          }
        }).then(() => {
          if (typeof this.cancel === 'function') {
            this.cancel()
          }
          this.hide()
        })
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

  let confirmDom = new Confirm({
    el: document.createElement('div'),
  })

  function showConfirm ({title, message, component, html, submitText, cancelText, submit, cancel}) {
    confirmDom.component = component
    confirmDom.html = !!html && !confirmDom.component
    confirmDom.message = !confirmDom.component && message || ''
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
