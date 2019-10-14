<template>
  <div class="content">
    <pl-cell :span="['6em', '6em', '6em', 1]" gap="10px">
      <pl-button @click="alert">弹窗</pl-button>
      <pl-button @click="confirm">确认弹窗</pl-button>
      <pl-button @click="toast">消息提醒</pl-button>
    </pl-cell>
  </div>
</template>
<script>
  export default {
    methods: {
      alert () {
        this.$alert({
          title: '提示',
          message: '这个一个弹窗！',
          buttonText: '确定',
          action: () => {
            // 确定
          }
        })
      },
      confirm () {
        this.$confirm({
          title: '提示',
          message: '这个一个确认弹窗！',
          submitText: '确定',
          cancelText: '取消',
          submit: () => {
            // 确定
          },
          cancel: () => {
            // 取消
          }
        })
      },
      toast () {
        this.$toast('消息提醒', 3000)    // 提示信息， 持续时间（可选，默认3000毫秒）
      }

    }
  }
</script>

<style lang="less" scoped>

</style>
