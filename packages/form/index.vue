<template>
  <div class="pl-form" v-bind="$props">
    <slot></slot>
  </div>
</template>

<script>
// form
export default {
  name: 'plForm',
  componentName: 'plForm',
  props: {
    size: String,        // 尺寸 可选值为 normal，large, small,
    labelWidth: String,  // label 宽度
    disabled: {           // 禁用
      type: Boolean,
      default: undefined
    },
    showError: {           // 禁用
      type: Boolean,
      default: undefined
    }
  },
  provide() {
    return {
      form: this
    }
  },
  data() {
    return {
      children: []
    }
  },
  methods: {
    // 更新内容节点
    updateItems(item) {
      if (this.children.indexOf(item) < 0) {
        this.children.push(item)
      }
    },
    // 删除内容节点
    removeItem(item) {
      const index = this.children.indexOf(item);
      if (index > -1) {
        this.children.splice(index, 1);
      }
    },
    // 手动验证方法
    validate() {
      return Promise.all(this.children.map(item => item.validate())).then(() => {
        return Promise.resolve()
      }).catch(e => {
        return Promise.reject(e)
      })
    },
    clearValidate() {
      this.children.map(item => item.clearValidate())
    }
  }
}
</script>

<style lang="less" scoped>
.pl-form {
  * {
    box-sizing: border-box;
  }
}
</style>
