<template>
  <div class="pl-steps" :class="['pl-steps--' + direction]">
    <div class="pl-steps-items" :class="{'pl-steps-fold': isFold}">
      <slot></slot>
    </div>
    <div class="pl-steps-toggle" v-if="direction === 'vertical' && items.length > 1" @click="toggle">
      <span v-if="isFold"><icon fill="#C2C5CE" name="icon-icon_more_down"></icon>展开</span>
      <span v-else><icon fill="#C2C5CE" name="icon-icon_more_up"></icon>收起</span>
    </div>
  </div>
</template>

<script>
  import icon from '../icon/index.vue'

  // steps
  export default {
    name: 'plSteps',
    componentName: 'plSteps',
    components: {
      icon
    },
    provide () {
      return {
        steps: this
      }
    },
    props: {
      active: {              //  当前步骤 0
        type: Number,
        default: 0
      },
      activeColor: {              //  当前激活的颜色
        type: String,
        default: '#67c23a'
      },
      direction: {               // 显示方向，可选值为 vertical horizontal
        type: String,
        default: 'vertical'
      },
      fold: {                // 是否默认折叠
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentItem: this.active === undefined ? 0 : this.active,        // 当前激活标签
        isFold: this.fold === undefined ? true : this.fold,              // 是否折叠
        items: []                                                        // 内容节点列表
      }
    },
    computed: {

    },
    mounted () {
      this.updateItems()
    },
    methods: {
      setCurrentItem (value) {
        if (this.currentItem === value) {
          return false
        }
        this.currentItem = value;
      },
      // 更新内容节点
      updateItems () {
        this.items = this.$children.filter(item => item.$options.name === 'plStepItem')
      },
      // 删除内容节点
      removeItem (item) {
        const items = this.items;
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
      },
      // 展开/收起
      toggle () {
        this.isFold = !this.isFold
      }
    },
    watch: {
      'active' (val) {
        this.setCurrentItem(val)
      },
      'fold' (val) {
        this.isFold = val
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../src/assets/less/mixin.less";
  .pl-steps {
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    padding: 0 1.2rem;

    * {
      box-sizing: border-box;
    }

    .pl-steps-items {
      display: flex;
    }
    .pl-steps-toggle {
      width: 100%;
      text-align: center;
      .font-size(10);
      color: var(--steps-toggle-text);
      padding: 1em 0;

      /deep/ .pl-icon {
        vertical-align: text-bottom;
        margin-right: 0.2em;
      }
    }

    &--horizontal {
      .pl-steps-items {
        flex-direction: row;
      }
    }
    &--vertical {
      .pl-steps-items {
        flex-direction: column;
      }
      .pl-steps-fold {
        /deep/ .pl-step + .pl-step {
          display: none;
        }
      }
    }
  }
</style>
