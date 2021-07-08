<template>
  <div class="pl-alert">
    <div class="pl-alert-inner">
      <div class="pl-alert-title">{{title}}</div>
      <div class="pl-alert-content">
        <component v-if="component" :is="component" ref="child" v-bind="componentProps"></component>
        <span v-else-if="html" v-html="message"></span>
        <span v-else>{{message}}</span>
      </div>
      <div class="pl-alert-button" @click="confirm">{{buttonText}}</div>
    </div>
  </div>
</template>


<script>
// alert
export default {
  name: 'plAlert',
  componentName: 'plAlert',
  props: {
    title: String,         // 弹框标题
    message: String,       // 弹框主体信息
    component: Object,             // 子组件,
    componentProps: Object,        // 子组件props,
    html: Boolean,          // 是否显示为HTML
    buttonText: String,     // 按钮文字
    action: Function        // 确认回调
  },
  methods: {
    async confirm() {
      await new Promise((resolve, reject) => {
        if (this.$refs.child && typeof this.$refs.child.submit === 'function') {
          resolve(this.$refs.child.submit())
        } else {
          resolve()
        }
      })
      if (typeof this.action === 'function') {
        await this.action()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pl-alert {
  display: flex;
  position: fixed;
  z-index: 998;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  &-inner {
    margin: auto;
    width: 80%;
    padding-top: 1em;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 0.5em;
  }
  &-title {
    color: var(--title-color);
    padding-bottom: 1em;
    font-weight: 700;
  }
  &-content {
    color: var(--content-color);
    line-height: 1.5em;
    padding: 0 1em 1em;
    border-bottom: 1px solid rgb(235, 237, 251);
  }
  &-button {
    color: var(--primary);
    line-height: 3em;
    font-weight: 700;
  }
}
</style>
