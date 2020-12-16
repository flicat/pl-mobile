<template>
  <div class="pl-swipe">
    <div class="pl-swipe-wrap">
      <div class="pl-swipe-list"
        ref="list"
        :style="listStyle"
        @touchstart="handlerTouchStart($event)"
        @touchmove="handlerTouchMove($event)"
        @touchend="handlerTouchEnd($event)"
        @touchcancel="handlerTouchEnd($event)">
        <slot></slot>
      </div>
    </div>
    <div class="pl-indicators" v-if="indicators">
      <svg
        viewBox="0 0 100 100"
        class="indicator-item"
        v-for="i in children.length"
        :key="i"
        :style="{width: indicatorSize, height: indicatorSize}">
        <circle cx="50" cy="50" r="50" :style="{fill: currentIndex === i - 1 || (i === 1 && currentIndex === children.length) || (i === children.length && currentIndex === -1) ? indicatorActiveColor : indicatorColor}"></circle>
      </svg>
    </div>
  </div>
</template>

<script>
  // swipe
  export default {
    name: 'plSwipe',
    componentName: 'plSwipe',
    provide () {
      return {
        swipes: this
      }
    },
    props: {
      auto: Number,       // 自动轮播间隔，单位为 ms
      duration: {         // 动画时长，单位为 ms
        type: Number,
        default: 300
      },
      index: {              // 初始位置索引值
        type: Number,
        default: 0
      },
      loop: Boolean,        // 是否开启循环播放
      indicators: {         // 是否显示指示器
        type: Boolean,
        default: true
      },
      indicatorColor: {      // 指示器颜色
        type: String,
        default: '#fff'
      },
      indicatorActiveColor: {  // 指示器激活颜色
        type: String,
        default: '#5074FF'
      },
      indicatorSize: {        // 指示器大小
        type: String,
        default: '0.5em'
      },
      vertical: Boolean,        // 是否为纵向滚动
      touchable: {              // 是否可以通过手势滑动
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        scrollList: null,             // 滚动的dom节点
        children: [],                 // 子节点列表
        autoTimer: null,        // 自动播放

        currentIndex: this.index === undefined ? '' : this.index,  // 当前滚动的index
        translate: 0,
        transStart: 0,
        transEnd: 0
      }
    },
    computed: {
      listStyle () {
        return {
          transition: `all ${this.duration}ms ease`,
          webkitTransition: `all ${this.duration}ms ease`
        }
      },
      // 三个子节点才能开启无限轮播
      canLoop () {
        return this.loop && this.children.length > 2
      }
    },
    mounted () {
      this.scrollList = this.$refs['list']
      this.translate = this.currentIndex * this.itemSize()
      this.scrollTo()
      this.startAutoScroll()
    },
    methods: {
      // 轮播图的实际尺寸 px
      itemSize () {
        if (this.scrollList) {
          return this.vertical ? this.scrollList.clientHeight : this.scrollList.clientWidth
        } else {
          return 0
        }
      },
      // 更新内容节点
      updateItems () {
        this.children = this.$children.filter(item => item.$options.name === 'plSwipeItem')
      },
      // 滚动方法
      scrollTo (animate) {
        let list = this.scrollList
        list.style.transitionDuration = list.style.webkitTransitionDuration = animate ? `${this.duration}ms` : `0ms`
        list.style.transform = list.style.webkitTransform = `translate${this.vertical ? 'Y' : 'X'}(${-this.translate}px)`
      },
      // 自动滚动方法
      autoScroll () {
        let max = this.canLoop ? this.children.length : this.children.length - 1
        this.currentIndex++
        if (this.currentIndex > max) {
          this.currentIndex = 0
        }
        if (this.canLoop && this.currentIndex === max) {
          this.moveToHead()
        }
        this.translate = this.currentIndex * this.itemSize()
        this.scrollTo(true)
      },
      // 开始定时滚动
      startAutoScroll () {
        if (this.autoTimer) {
          clearInterval(this.autoTimer)
        }
        if (this.auto && this.auto > 0 && this.children.length > 1) {
          this.autoTimer = setInterval(() => {
            this.autoScroll()
          }, this.auto)
        }
      },
      // 停止定时滚动
      stopAutoScroll () {
        if (this.autoTimer) {
          clearInterval(this.autoTimer)
        }
      },
      // 触摸事件
      handlerTouchStart (e) {
        if (!this.touchable) {
          return false
        }

        this.transDiff = this.translate
        this.transStart = this.vertical ? e.touches[0].clientY : e.touches[0].clientX
        this.scrollList.style.transitionDuration = this.scrollList.style.webkitTransitionDuration = `0ms`
        this.stopAutoScroll()
      },
      // 触摸事件
      handlerTouchMove (e) {
        if (!this.touchable) {
          return false
        }
        e.preventDefault()
        e.stopPropagation()

        this.transEnd = this.vertical ? e.touches[0].clientY : e.touches[0].clientX
        this.translate = this.transDiff + this.transStart - this.transEnd
        this.scrollList.style.transform = this.scrollList.style.webkitTransform = `translate${this.vertical ? 'Y' : 'X'}(${-this.translate}px)`
      },
      // 触摸事件
      handlerTouchEnd (e) {
        if (!this.touchable) {
          return false
        }
        e.preventDefault()
        e.stopPropagation()

        let min = this.canLoop ? -1 : 0
        let max = this.canLoop ? this.children.length : this.children.length - 1

        // 左划减1右划加1
        this.currentIndex += this.transStart - this.transEnd > 0 ? 1 : -1

        if (this.currentIndex <= min) {
          this.currentIndex = min
          if (this.canLoop) {
            this.moveToEnd()
          }
        }
        if (this.currentIndex >= max) {
          this.currentIndex = max
          if (this.canLoop) {
            this.moveToHead()
          }
        }
        this.translate = this.currentIndex * this.itemSize()

        this.scrollTo(true)
        this.startAutoScroll()
      },
      // 将队头调至队尾
      setFirstChild (act) {
        if (act) {
          this.children[0].setTranslate(this.children.length * this.itemSize())
        } else {
          this.children[0].setTranslate(0)
        }
      },
      // 将队尾调至队头
      setLastChild (act) {
        if (act) {
          this.children[this.children.length - 1].setTranslate(-this.children.length * this.itemSize())
        } else {
          this.children[this.children.length - 1].setTranslate(0)
        }
      },
      // 队头无缝衔接至队尾
      moveToEnd () {
        setTimeout(() => {
          this.currentIndex = this.children.length - 1
          this.translate = this.currentIndex * this.itemSize()
          this.scrollTo()
        }, this.duration)
      },
      // 队尾无缝衔接至队头
      moveToHead () {
        setTimeout(() => {
          this.currentIndex = 0
          this.translate = this.currentIndex * this.itemSize()
          this.scrollTo()
        }, this.duration)
      }
    },
    watch: {
      // 监听滚动事件
      currentIndex (val) {
        if (this.canLoop) {
          this.setFirstChild(val >= this.children.length - 1)
          this.setLastChild(val <= 0)
        }
        if (val > this.children.length - 1) {
          val = this.children.length - 1
        }
        if (val < 0) {
          val = 0
        }
        this.$emit('scroll', val)
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-swipe {
    overflow: hidden;
    box-sizing: content-box;
    position: relative;

    * {
      box-sizing: border-box;
    }

    .pl-swipe-wrap {
      overflow: hidden;

      .pl-swipe-list {
        position: relative;
        will-change: transform, -webkit-transform;
      }
    }

    .pl-indicators {
      position: absolute;
      left: 0;
      bottom: 0.6em;
      display: flex;
      width: 100%;
      text-align: center;
      justify-content: center;

      .indicator-item {
        display: block;
        margin: 0 3px;
      }
    }
  }
</style>
