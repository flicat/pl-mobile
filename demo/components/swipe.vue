<template>
  <div class="content">
    <pl-swipe width="600px" height="300px" @scroll="onScroll" :auto="2000" loop>
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
          setTimeout(() => {
            resolve()
          }, 3000)
        })
      },
      cancel () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject()
          }, 3000)
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .pl-swipe-item {
    text-align: center;
    font-size: 56px;
    line-height: 300px;

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
