<template>
  <div class="content">
    <pl-progress fill="#0f0" :progress="progress" />
    <pl-cell :span="[2, 1]">
      <span>当前进度</span>
      <pl-progress fill="#0f0" :progress="progress" type="circle" />
    </pl-cell>
    <pl-cell :span="[2, 1]" class="big-size">
      <pl-progress fill="#0f0" :progress="progress" />
      <pl-progress fill="#0f0" :progress="progress" type="circle" />
    </pl-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 99.99
    }
  },
  mounted() {
    setTimeout(() => {
      this.progress = 60
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
.big-size {
  font-size: 50px;
}
</style>
