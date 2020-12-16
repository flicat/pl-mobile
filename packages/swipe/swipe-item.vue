<template>
  <div class="pl-swipe-item" :style="{
          position: index === 0 ? '' : 'absolute',
          left: swipes.vertical ? 0 : index * 100 + '%',
          top: swipes.vertical ? index * 100 + '%' : 0,
          transform: `translate${swipes.vertical ? 'Y' : 'X'}(${translate}px)`,
          webkitTransform: `translate${swipes.vertical ? 'Y' : 'X'}(${translate}px)`
        }">
    <slot></slot>
  </div>
</template>

<script>
  // swipe
  export default {
    name: 'plSwipeItem',
    componentName: 'plSwipeItem',
    inject: {
      swipes: {
        default: {}
      }
    },
    data () {
      return {
        index: 0,
        translate: 0
      }
    },
    mounted () {
      this.swipes.updateItems();
      this.index = this.swipes.$children.indexOf(this)
    },
    methods: {
      setTranslate (val) {
        this.$set(this, 'translate', val)
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-swipe-item {
    width: 100%;
    height: 100%;
    overflow: hidden;
    will-change: transform, -webkit-transform;

    > * {
      box-sizing: border-box;
    }
  }
</style>
