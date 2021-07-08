<template>
  <div class="pl-confirm">
    <div class="pl-confirm-inner">
      <div class="pl-confirm-title">{{title}}</div>
      <div class="pl-confirm-content">
        <component v-if="component" :is="component" ref="child" v-bind="componentProps"></component>
        <span v-else-if="html" v-html="message"></span>
        <span v-else>{{message}}</span>
      </div>
      <div class="pl-confirm-button-wrap">
        <div class="pl-confirm-button-cancel" @click="onCancel">{{cancelText}}</div>
        <div class="pl-confirm-button-submit" @click="onSubmit">{{submitText}}</div>
      </div>
    </div>
  </div>
</template>


<script>
// confirm
export default {
  name: 'plConfirm',
  componentName: 'plConfirm',
  props: {
    title: String,                 // 弹框标题
    message: String,               // 弹框主体信息
    html: Boolean,                 // 是否显示为HTML
    component: Object,             // 子组件,
    componentProps: Object,        // 子组件props,
    submitText: String,            // 提交按钮文字
    cancelText: String,            // 取消按钮文字
    submit: Function,              // 确认回调
    cancel: Function               // 取消回调
  },
  methods: {
    async onSubmit() {
      await new Promise((resolve, reject) => {
        if (this.$refs.child && typeof this.$refs.child.submit === 'function') {
          resolve(this.$refs.child.submit())
        } else {
          resolve()
        }
      })
      if (typeof this.submit === 'function') {
        await this.submit()
      }
    },
    async onCancel() {
      await new Promise((resolve, reject) => {
        if (this.$refs.child && typeof this.$refs.child.cancel === 'function') {
          resolve(this.$refs.child.cancel())
        } else {
          resolve()
        }
      })
      if (typeof this.cancel === 'function') {
        await this.cancel()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pl-confirm {
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
    &-wrap {
      line-height: 3em;
      display: table;
      width: 100%;
      font-weight: 700;
    }
    &-cancel {
      color: var(--default);
      display: table-cell;
      width: 50%;
      border-right: 1px solid rgb(235, 237, 251);
    }
    &-submit {
      color: var(--primary);
      display: table-cell;
      width: 50%;
    }
  }
}
</style>
