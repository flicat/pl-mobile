<template>
  <div class="pl-collapse" v-on="$listeners" :class="{'pl-collapse--active': currentValue}">
    <div class="pl-collapse-top" @click="toggle">
      <div class="pl-collapse-title">
        <slot name="title">{{title}}</slot>
      </div>
      <icon v-if="!disabled" name="icon-enter" fill="#ccc" class="icon-arrow"></icon>
    </div>
    <div class="pl-collapse-content" :style="{height: contentHeight}">
      <div class="pl-collapse-inner" ref="inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import icon from '../icon/index.vue'

  export default {
    name: 'plCollapse',
    componentName: 'plCollapse',
    components: {
      icon
    },
    props: {
      size: {         // 尺寸 可选值为 normal，large, small
        type: String,
        default: 'normal'
      },
      value: {
        type: Boolean,
        default: false
      },
      disabled: Boolean,        // 禁用
      title: String            // 标题
    },
    data () {
      return {
        currentValue: this.value === undefined ? false : this.value,
        contentHeight: this.value ? 'auto' : '0',
        inner: null
      }
    },
    computed: {

    },
    mounted () {
      this.inner = this.$refs.inner
    },
    methods: {
      toggle () {
        if (!this.disabled) {
          this.setCurrentValue(!this.currentValue)
        }
      },
      setCurrentValue (value) {
        if (value === this.currentValue) {
          return false
        }
        this.currentValue = value
        this.$emit('input', value)
        this.$emit('change', value)

        this.contentHeight = this.inner.scrollHeight + 'px'
        if (value) {
          setTimeout(() => {
            this.contentHeight = 'auto'
          }, 300)
        } else {
          setTimeout(() => {
            this.contentHeight = '0'
          }, 0)
        }
      }
    },
    watch: {
      'value' (val) {
        this.setCurrentValue(val)
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-collapse {
    * {
      box-sizing: border-box;
    }
    &-top {
      display: flex;
      padding: 1em 1.2em;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .icon-arrow {
        transition: all 0.3s ease;
      }
    }
    &-content {
      overflow: hidden;
      transition: all 0.3s ease;
    }
    &-inner {
      transform: translateY(-100%);
      transition: all 0.3s ease;
    }

    &--active {
      > .pl-collapse-top {
        > .icon-arrow {
          transform: rotate(90deg);
        }
      }
      > .pl-collapse-content {
        > .pl-collapse-inner {
          transform: translateY(0);
        }
      }
    }
  }
</style>
