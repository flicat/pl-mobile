<template>
  <div class="pl-to-top" v-if="scrollTop > offset" @click="scrollToTop">
    <icon name="icon-up"></icon>
  </div>
</template>

<script>
  import icon from '../icon/index.vue'

  export default {
    name: 'plGoTopButton',
    componentName: 'plGoTopButton',
    components: {
      icon
    },
    props: {
      target: [Node, Window],         // 滚动的对象
      offset: {                     // 偏移量，显示返回顶部按钮的位置
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        scrollTop: 0
      }
    },
    methods: {
      scrollToTop () {
        let target = this.target
        let top = this.scrollTop
        let step = top / 1000 * 60
        let animate = () => {
          top -= step
          if (top < 0) {
            top = 0
          } else {
            requestAnimationFrame(animate)
          }
          target.scrollTop = top
        }
        animate()
        this.scrollTop = 0
      },
      scrollHandler (e) {
        this.scrollTop = e.target.scrollTop
      }
    },
    beforeDestroy () {
      if (this.target) {
        this.target.removeEventListener('scroll', this.scrollHandler)
      }
    },
    watch: {
      target: {
        handler (val) {
          if (val) {
            val.addEventListener('scroll', this.scrollHandler)
          }
        },
        immediate: true
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../src/assets/less/mixin.less";

  .pl-to-top {
    position: fixed;
    z-index: 99;
    .width(40);
    .height(40);
    .line-height(38);
    .right(22);
    .bottom(22);
    background: var(--input-bg);
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.15);
    border-radius: 50%;
    text-align: center;
    .font-size(22);
    color: var(--to-top-text);

    * {
      box-sizing: border-box;
    }
  }
</style>
