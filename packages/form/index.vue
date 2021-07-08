<template>
  <div class="pl-form" v-bind="$props">
    <slot></slot>
  </div>
</template>

<script>
// form
// TODO 验证插件替换为 async-validator
export default {
  name: 'plForm',
  componentName: 'plForm',
  props: {
    size: String,        // 尺寸 可选值为 normal，large, small,
    labelWidth: String,  // label 宽度
    disabled: Boolean    // 禁用
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
