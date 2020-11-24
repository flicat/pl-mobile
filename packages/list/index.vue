<template>
  <div class="pl-list">
    <div class="pl-list-wrap"
      ref="list"
      v-on="$listeners"
      @scroll.stop="handlerScroll($event)"
      @touchstart.stop="touchEvent($event)"
      @touchmove.stop="touchEvent($event)"
      @touchend.stop="touchEvent($event)"
      @touchcancel.stop="touchEvent($event)">

      <div class="pl-list-loading-top" v-show="translate < 0 && loading">
        <slot name="top-loading">
          <loading>{{loadingText}}</loading>
        </slot>
      </div>
      <div class="pl-list-refresh-tip" v-show="translate < 0 && !loading">
        <slot name="top-refresh">{{refreshText}}</slot>
      </div>
      <div class="pl-list-inner" :style="innerStyle" ref="inner">
        <slot></slot>
        <div class="pl-list-loading-bottom" v-show="(translate > 0 || loading) && !finished">
          <slot name="bottom-loading">
            <loading>{{loadingText}}</loading>
          </slot>
        </div>
        <div class="pl-list-loading-finished" v-show="translate > 0 && finished">
          <slot name="bottom-finished">{{finishedText}}</slot>
        </div>
      </div>
    </div>
    <go-top-button v-if="topButton" :target="$refs.list"></go-top-button>
  </div>
</template>

<script>
  import loading from '../loading/index.vue'
  import goTopButton from '../goTopButton/index.vue'

  export default {
    name: 'plList',
    componentName: 'plList',
    components: {
      loading,
      goTopButton
    },
    props: {
      // 是否处于加载状态，加载过程中不触发load事件
      loading: {
        type: Boolean,
        default: false
      },
      // 是否已加载完成，加载完成后不再触发load事件
      finished: {
        type: Boolean,
        default: false
      },
      // 是否滚动到底部自动加载，如果传入数字值则在距离该值的高度触发加载事件
      autoLoad: {
        type: [Boolean, Number],
        default: false
      },
      // 加载过程中的提示文案
      loadingText: {
        type: String,
         default: '加载中...'
      },
      // 下拉刷新的提示文案
      refreshText: {
        type: String,
         default: '松开刷新'
      },
      // 加载完成后的提示文案
      finishedText: {
        type: String,
         default: '加载完成'
      },
      // 加载失败后的提示文案
      errorText: {
        type: String,
         default: '加载失败'
      },
      topButton: Boolean    // 返回顶部按钮
    },
    data () {
      return {
        translate: 0,
        transition: null,
        transDiff: 0,
        canDrag: true,
        scrollTop: 0
      }
    },
    computed: {
      innerStyle () {
        return {
          'transform': `translateY(${-this.translate}px)`,
          'webkitTransform': `translateY(${-this.translate}px)`,
          ...(this.transition ? {
            'transition': this.transition,
            'webkitTransition': this.transition
          } : null)
        }
      }
    },
    mounted () {

    },
    methods: {
      // 触摸事件
      touchEvent (e) {
        let diff = 0

        switch (e.type) {
          case 'touchstart':
            this.scrollTop = this.$refs.list.scrollTop
            this.scrollBottom = this.$refs.list.scrollHeight - this.scrollTop - this.$refs.list.clientHeight
            this.canDrag = (this.scrollTop < 2 || this.scrollBottom < 2) && !this.loading

            this.transDiff = e.touches[0].clientY
            this.transition = 'none'
            break;
          case 'touchmove':
            if (this.canDrag) {
              diff = (this.transDiff - e.touches[0].clientY) / 2
              if ((this.scrollTop < 2 && diff < 0) || (this.scrollBottom < 2 && diff > 0)) {
                if (diff > 80) {
                  diff = 80
                }
                if (diff < -80) {
                  diff = -80
                }
                this.translate = diff
                e.preventDefault()
                e.stopPropagation()
              }
            }
            break;
          case 'touchend':
          case 'touchcancel':
            if (Math.abs(this.translate) >= 80 && !this.loading) {
              if (this.scrollTop < 2) {
                this.$emit('refresh')
              }
              if (this.scrollBottom < 2 && !this.finished) {
                this.$emit('load')
              }
            }
            this.$nextTick(() => {
              if (!this.loading || this.finished) {
                this.translate = 0
              }
            })

            this.transition = null
            break;
        }
      },
      // 滚动事件
      handlerScroll ({target: {scrollTop, clientHeight, scrollHeight}}) {
        if (this.autoLoad === false || this.finished || this.loading) {
          return false
        }
        if (scrollHeight - scrollTop - clientHeight <= Number(this.autoLoad)) {
          this.$emit('load')
        }
      }
    },
    watch: {
      'loading' (val) {
        if (!val) {
          this.translate = 0

          if (!this.finished && !this.loading) {
            // 如果加载内容的高度不够则继续加载下一页
            this.$nextTick(() => {
              if (this.$refs.list && this.$refs.inner && this.$refs.inner.scrollHeight <= this.$refs.list.clientHeight) {
                this.$emit('load')
              }
            })
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../src/assets/less/mixin.less";

  .pl-list {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    overscroll-behavior: contain; // 阻止滚动传播

    * {
      box-sizing: border-box;
    }

    &-wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }
    &-inner {
      position: relative;
      z-index: 2;
      transition: all 0.3s ease;
      will-change: transform, -webkit-transform;
    }

    &-loading-top,
    &-loading-bottom,
    &-loading-finished,
    &-refresh-tip {
      width: 100%;
      height: 80px;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--list-refresh-tip);
      font-size: 14px;
      position: absolute;
      left: 0;

      /deep/ .pl-icon {
        margin-right: 0.5em;
      }
    }
    &-loading-bottom,
    &-loading-finished {
      top: 100%;
    }
    &-loading-top,
    &-refresh-tip {
      top: 0;
    }
  }
</style>
