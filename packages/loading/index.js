import plLoading from './index.vue'

/* istanbul ignore next */
plLoading.install = function (Vue) {
  Vue.component(plLoading.name, plLoading);

  // loading
  const Loading = Vue.extend({
    components: {
      plLoading
    },
    render(createElement) {
      return createElement('div', {
        class: 'loading',
        style: {
          display: this.isShow ? 'flex' : 'none',
          position: this.isPart ? 'absolute' : 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
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

  const loadingMap = new WeakMap()

  // loading节点
  const createLoadingNode = (isPart) => {
    return new Loading({
      el: document.createElement('div'),
      data: function () {
        return {
          isPart,
          vertical: true,
          isShow: false,
          text: ''
        }
      }
    })
  }
  // loading控制class
  class LoadingClass {
    isPart = false
    target = null
    vNodeDom = null
    loadingCount = 0
    constructor({ target, isPart }) {
      this.isPart = isPart
      this.target = target
      this.vNodeDom = createLoadingNode(isPart)
    }
    __show({ vertical = true, text } = {}) {
      if (!this.vNodeDom || !this.target) {
        return false
      }
      if (this.loadingCount === 0) {
        if (this.isPart) {
          this.target.classList.add('pl-loading-wrap')
        }
        this.target.appendChild(this.vNodeDom.$el)
        if (!loadingMap.has(this.target)) {
          loadingMap.set(this.target, this)
        }
      }
      this.vNodeDom.isShow = true
      this.vNodeDom.text = text
      this.vNodeDom.vertical = vertical
      this.loadingCount++
    }
    close() {
      if (!this.vNodeDom || !this.target) {
        return false
      }
      this.loadingCount--
      if (this.loadingCount <= 0) {
        if (this.isPart) {
          this.target.classList.remove('pl-loading-wrap')
        }
        this.vNodeDom.isShow = false
        this.target.removeChild(this.vNodeDom.$el)
        loadingMap.delete(this.target)
        this.target = null
        this.vNodeDom = null
      }
    }
  }

  // loading对象控制函数
  const createLoading = (options) => {
    if (loadingMap.has(options.target)) {
      return loadingMap.get(options.target)
    } else {
      const loading = new LoadingClass(options)
      loadingMap.set(options.target, loading)
      return loading
    }
  }

  // 显示loading
  const showLoading = function ({ text = '', vertical = true, target } = {}) {
    const loading = createLoading({
      target: target || document.body,
      isPart: target !== document.body
    })
    loading.__show({
      vertical,
      text
    })
    return loading
  }

  // 指令注册
  const directiveMap = new Map()
  class DirectiveLoading {
    target = null
    loading = null
    argMap = new Map()
    constructor(target) {
      this.target = target
    }
    createLoading(text) {
      if (this.loading) {
        this.loading.__show({ text })
      } else {
        this.loading = showLoading({
          text,
          target: this.target
        })
      }
      return this.loading
    }
    toggle(text, isShow) {
      this.argMap.set(text, isShow)
      const currentLoading = [...this.argMap].reverse().find(item => item[1])
      if (currentLoading) {
        this.createLoading(currentLoading[0])
      } else if (this.loading) {
        this.loading.loadingCount = 0
        this.loading.close()
        this.loading = null
      }
    }
  }

  const getDirectiveTarget = (el, arg, value) => {
    let target
    if (directiveMap.has(el)) {
      target = directiveMap.get(el)
    } else {
      target = new DirectiveLoading(el, arg, value)
      directiveMap.set(el, target)
    }
    return target
  }

  Vue.directive('loading', {
    inserted(el, { arg = '', value }) {
      let target = getDirectiveTarget(el)
      target.toggle(arg, value)
    },
    update(el, { arg = '', value }) {
      let target = getDirectiveTarget(el)
      target.toggle(arg, value)
    }
  })

  Vue.prototype.$loading = showLoading
};

export default plLoading;
