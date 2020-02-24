<template>
  <div class="content">
    <pl-swipe height="12em" @scroll="onScroll" :auto="2000" loop>
      <div>
        <pl-swipe-item class="pl-swipe-item">1</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">2</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">3</pl-swipe-item>
        <pl-swipe-item class="pl-swipe-item">4</pl-swipe-item>
      </div>
    </pl-swipe>
  </div>
</template>

<script>
  export default {
    methods: {
      onScroll (index) {
        console.log('index: ', index)
      },
      submit () {
        return new Promise((resolve, reject) => {
          this.$loadingShow('提交中。。。')
          setTimeout(() => {
            resolve()
            this.$loadingHide()
            this.$toast('提交成功')
          }, 2000)
        })
      },
      cancel () {
        return new Promise((resolve, reject) => {
          this.$loadingShow('取消中。。。')
          setTimeout(() => {
            reject()
            this.$loadingHide()
            this.$toast('取消失败')
          }, 2000)
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .pl-swipe-item {
    text-align: center;
    font-size: 56px;
    line-height: 12rem;

    &:nth-child(1) {
      background-color: #f56c6c;
    }
    &:nth-child(2) {
      background-color: #f5d770;
    }
    &:nth-child(3) {
      background-color: #68f565;
    }
    &:nth-child(4) {
      background-color: #9b6ff5;
    }
  }
</style>
