<template>
  <div class="content">
    <div class="swipe-1">
      <pl-swipe @scroll="onScroll1" :auto="2000" loop>
        <div>
          <pl-swipe-item class="pl-swipe-item">1</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">2</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">3</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">4</pl-swipe-item>
        </div>
      </pl-swipe>
      <p>{{scrollIndex1 + 1}} / 4</p>
    </div>
    <div class="swipe-2" v-if="!isMsg">
      <pl-swipe @scroll="onScroll2" :auto="2000" vertical>
        <div>
          <pl-swipe-item class="pl-swipe-item">1</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">2</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">3</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">4</pl-swipe-item>
        </div>
      </pl-swipe>
      <p>{{scrollIndex2 + 1}} / 4</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isMsg: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        scrollIndex1: 0,
        scrollIndex2: 0
      }
    },
    methods: {
      onScroll1 (index) {
        this.scrollIndex1 = index
      },
      onScroll2 (index) {
        this.scrollIndex2 = index
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
    width: 100%;
    height: 12rem;
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
  p {
    text-align: center;
  }
</style>
