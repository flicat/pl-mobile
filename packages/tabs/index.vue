<template>
  <div class="pl-tabs" :class="['is-' + type, 'is-' + position]" ref="tabs">
    <div class="pl-tab-title"
      @touchstart="touchEvent($event)"
      @touchmove="touchEvent($event)"
      @touchend="touchEvent($event)"
      @touchcancel="touchEvent($event)">
      <div class="pl-tab-title-inner" ref="title" :style="titleStyle">
        <div class="tab-title"
          v-for="title in titleArray"
          :key="title.name"
          @click="setCurrentName(title.name, title.disabled)"
          ref="title-item"
          :class="{'is-active': title.name === currentName, 'is-disabled': title.disabled}">
          <div class="tab-title-text">
            <span v-if="title.label">{{title.label}}</span>
            <component v-else :is="title.titleSlot"></component>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plTabs',
    componentName: 'plTabs',
    model: {
      event: '-pl-change'
    },
    props: {
      // 风格类型：card/border-card/button
      type: {
        type: String,
        default: 'card'
      },
      // 绑定值，选中选项卡的 name：第一个选项卡的 name
      value: {
        type: [String, Number],
        default: ''
      },
      // 选项卡所在位置：top/right/bottom/left
      position: {
        type: String,
        default: 'top'
      },
    },
    provide () {
      return {
        tabs: this
      }
    },
    data () {
      return {
        currentName: this.value === undefined ? '' : this.value,        // 当前激活标签
        items: [],                                                      // 内容节点列表
        titles: [],                                                     // 标题节点列表

        tabSize: 0,                                                    // tab宽/高
        titleSize: 0,                                                  // 标题宽/高

        swipeDir: null,                                                  // 标题滑动方向
        transition: null,
        translate: 0,
        transDiff: 0,
        transStart: 0,
        transEnd: 0
      }
    },
    computed: {
      // 当前选中的标题节点
      currentTitleNode () {
        let index = this.titleArray.findIndex(item => item.name === this.currentName)
        if (this.titles.length) {
          return this.titles[index]
        } else {
          return null
        }
      },
      // 标题对象数组
      titleArray () {
        return this.items.map(item => {
          return {
            name: item.name,
            label: item.label,
            titleSlot: {
              render (h) {
                return h('span', null, item.$slots.title)
              }
            },
            disabled: item.disabled
          }
        })
      },
      // 标题
      titleStyle () {
        let transform = this.swipeDir === 'column' ? `translateX(${-this.translate}px)` : `none`

        return {
          transform,
          webkitTransform: transform,
          transition: this.transition,
          webkitTransition: this.transition
        }
      }
    },
    mounted () {
      this.updateItems()
    },
    methods: {
      setCurrentName (value, disabled) {
        if (disabled) {
          return false
        }
        if (this.currentName === value) {
          return false
        }
        this.currentName = value;
        this.$emit('-pl-change', value);
        this.$emit('change', value);
      },
      // 更新内容节点
      updateItems () {
        this.items = this.$children.filter(item => item.$options.name === 'plTabItem')
      },
      // 删除内容节点
      removeItem (item) {
        const items = this.items;
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
      },
      // 标题触摸事件
      touchEvent (e) {
        if (this.swipeDir === 'row' || this.tabSize >= this.titleSize) {
          return false
        }

        switch (e.type) {
          case 'touchstart':
            this.transDiff = this.translate

            this.transStart = e.touches[0].clientX
            this.transition = 'none'
            break;
          case 'touchmove':
            e.preventDefault()
            e.stopPropagation()

            this.transEnd = e.touches[0].clientX
            this.translate = this.transDiff + this.transStart - this.transEnd
            break;
          case 'touchend':
          case 'touchcancel':
            this.transition = null
            if (this.translate < 0) {
              this.translate = 0
            } else if (this.translate + this.tabSize > this.titleSize) {
              this.translate = this.titleSize - this.tabSize
            }
            break;
        }
      }
    },
    watch: {
      'value' (val) {
        this.currentName = val;
      },
      'titleArray' () {
        this.$nextTick(() => {
          // 更新标题节点
          if (this.$refs['title-item'] && this.$refs['title-item'].length) {
            this.titles = this.$refs['title-item']
          }

          this.swipeDir = /^(top|bottom)$/.test(this.position) ? 'column' : 'row'

          // 标题滑动方向，如果标题过长则返回
          if (this.swipeDir === 'column') {
            this.tabSize = this.$refs.tabs.clientWidth
            this.titleSize = this.$refs.title.scrollWidth
          }
        })
      },
      'currentTitleNode' (val) {
        let titleSize = this.titleSize
        let tabSize = this.tabSize

        // 如果标题在可是区域外则滚动至可见
        if (this.swipeDir === 'column' && val && titleSize > tabSize) {
          let width = val.offsetWidth
          let offset = val.offsetLeft + width - this.translate
          if (offset > tabSize - width) {
            this.translate += tabSize / 2
          } else if (offset < width * 2) {
            this.translate -= tabSize / 2
          }

          if (this.translate < 0) {
            this.translate = 0
          } else if (this.translate + tabSize > titleSize) {
            this.translate = titleSize - tabSize
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>

  .pl-tabs {
    display: grid;
    width: 100%;

    * {
      box-sizing: border-box;
    }

    .pl-tab-title {
      grid-area: title;
      overflow: hidden;
      background-color: var(--input-bg);
    }
    .pl-tab-title-inner {
      display: grid;
      transition: all 0.3s ease;

      .tab-title {
        display: flex;
        color: var(--primary-text);
        .tab-title-text {
          display: inline-block;
          position: relative;
          padding: 0.6em 1em;
          white-space: nowrap;
          line-height: normal;
          &::after {
            content: '';
            display: inline-block;
            position: absolute;
            transition: all 0.3s ease;
            background-color: var(--primary);
          }
        }
      }
    }
    .pl-tab-content {
      grid-area: content;
    }

    &.is-top,
    &.is-bottom {
      .pl-tab-title-inner {
        grid-auto-flow: column;
      }
      .tab-title-text {
        margin: 0 auto;
        height: 100%;
      }
      &.is-card {
        .tab-title-text::after {
          left: 100%;
          width: 0;
          height: 3px;
        }
        .is-active {
          .tab-title-text::after {
            left: 0;
            width: 100%;
          }
        }
        .is-active ~ .tab-title {
          .tab-title-text::after {
            left: 0;
          }
        }
      }
    }
    &.is-right,
    &.is-left {
      .pl-tab-title-inner {
        grid-auto-flow: row;
      }
      .tab-title-text {
        margin: auto 0;
        width: 100%;
      }
      &.is-card {
        .tab-title-text::after {
          top: 100%;
          width: 3px;
          height: 0;
        }
        .is-active {
          .tab-title-text::after {
            top: 0;
            height: 100%;
          }
        }
        .is-active ~ .tab-title {
          .tab-title-text::after {
            top: 0;
          }
        }
      }
    }
  }

  .is-card {
    .pl-tab-title-inner {
      position: relative;

      .tab-title-text {
        padding: 1em 1.2em;
      }
      .is-active {
        color: var(--default-text);
        font-weight: 700;
      }
      .is-disabled {
        color: var(--primary-text);
      }
    }
  }

  .is-border-card {
    .tab-title {
      border: 1px solid var(--tab-card-border);
      background-color: var(--tab-card-disabled-bg);
      &.is-disabled {
        background-color: var(--tab-card-disabled-bg);
      }
      &.is-active {
        background-color: transparent;
      }
    }
    .pl-tab-content {
      border: 1px solid var(--tab-card-border);
    }
    &.is-top {
      .tab-title {
        & + .tab-title {
          border-left: 0 none;
        }
        &.is-active {
          border-bottom: 0 none;
        }
      }
      .pl-tab-content {
        border-top: 0 none;
      }
    }
    &.is-bottom {
      .tab-title {
        & + .tab-title {
          border-left: 0 none;
        }
        &.is-active {
          border-top: 0 none;
        }
      }
      .pl-tab-content {
        border-bottom: 0 none;
      }
    }
    &.is-left {
      .tab-title {
        & + .tab-title {
          border-top: 0 none;
        }
        &.is-active {
          border-right: 0 none;
        }
      }
      .pl-tab-content {
        border-left: 0 none;
      }
    }
    &.is-right {
      .tab-title {
        & + .tab-title {
          border-top: 0 none;
        }
        &.is-active {
          border-left: 0 none;
        }
      }
      .pl-tab-content {
        border-right: 0 none;
      }
    }
  }

  .is-button {
    .pl-tab-title-inner {
      .tab-title {
        border: 1px solid var(--primary);
        color: var(--primary);

        &.is-active {
          background-color: var(--primary);
          color: var(--tab-button-active-text);
        }
        &.is-disabled {
          background-color: var(--disabled);
          border-color: var(--disabled);
        }
      }
    }

    &.is-top,
    &.is-bottom {
      .tab-title {
        &:first-child {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        &:last-child {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        & ~ .tab-title {
          border-left: 0 none;
        }
      }
    }
    &.is-right,
    &.is-left {
      .tab-title {
        &:first-child {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        &:last-child {
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        & ~ .tab-title {
          border-top: 0 none;
        }
      }
    }
  }

  .is-top {
    grid-template-rows: auto 1fr;
    grid-template-areas: 'title' 'content';

    &.is-card {
      .pl-tab-title {
        border-bottom: 1px solid var(--tab-border);
      }
      .tab-title-text::after {
        bottom: 0;
      }
    }
  }

  .is-bottom {
    grid-template-rows: 1fr auto;
    grid-template-areas: 'content' 'title';

    &.is-card {
      .pl-tab-title {
        border-top: 1px solid var(--tab-border);
      }
      .tab-title-text::after {
        top: 0;
      }
    }
  }

  .is-left {
    grid-template-columns: auto 1fr;
    grid-template-areas: 'title content';

    &.is-card {
      .pl-tab-title {
        border-right: 1px solid var(--tab-border);
      }
      .tab-title-text::after {
        right: 0;
      }
    }
  }

  .is-right {
    grid-template-columns: 1fr auto;
    grid-template-areas: 'content title';

    &.is-card {
      .pl-tab-title {
        border-left: 1px solid var(--tab-border);
      }
      .tab-title-text::after {
        left: 0;
      }
    }
  }
</style>
