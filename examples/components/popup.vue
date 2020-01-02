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
    <pl-popup :position="position" ref="popup">
      <div class="popup-inner" :class="[position]">这是一个弹框</div>
    </pl-popup>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        position: 'center'
      }
    },
    methods: {
      open (position) {
        this.position = position
        this.$refs.popup.open()
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
