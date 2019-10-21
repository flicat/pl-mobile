<template>
  <div class="pl-swipe-item" :style="{
          width: swipes.width,
          height: swipes.height,
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
        default: () => ({})
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
    position: absolute;

    * {
      box-sizing: border-box;
    }
  }
</style>
