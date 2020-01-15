<template>
  <div class="content">
    <h3>基础用法</h3>
    <p>
      <pl-button type="primary" @click="open('center')">居中弹出</pl-button>
    </p>
    <p>
      <pl-button type="primary" @click="open('left')">左边弹出</pl-button>
    </p>
    <p>
      <pl-button type="primary" @click="open('right')">右边弹出</pl-button>
    </p>
    <p>
      <pl-button type="primary" @click="open('top')">上面弹出</pl-button>
    </p>
    <p>
      <pl-button type="primary" @click="open('bottom')">下面弹出</pl-button>
    </p>

    <pl-popup position="center" ref="popup-center">
      <div class="popup-inner center">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="left" ref="popup-left">
      <div class="popup-inner left">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="right" ref="popup-right">
      <div class="popup-inner right">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="top" ref="popup-top">
      <div class="popup-inner top">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="bottom" ref="popup-bottom">
      <div class="popup-inner bottom">这是一个弹框</div>
    </pl-popup>
  </div>
</template>
<script>
  export default {
    methods: {
      open (position) {
        this.$refs['popup-' + position].open()
      }
    }
  }
</script>

<style lang="less" scoped>
  .popup-inner {
    background-color: #fff;
    &.center {
      width: 10em;
      height: 10em;
    }
    &.left,
    &.right {
      width: 70vw;
      height: 100%;
    }
    &.top,
    &.bottom {
      width: 100%;
      height: 50vh;
    }
  }
</style>
