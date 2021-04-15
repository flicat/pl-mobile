<template>
  <div class="pl-collapse" v-bind="$props" v-on="$listeners">
    <div class="pl-collapse-top" @click="toggle">
      <div class="pl-collapse-title">
        <slot name="title">{{title}}</slot>
      </div>
      <icon v-if="!disabled" name="icon-enter" fill="#ccc" :class="['icon-arrow', visible ? 'show' : 'hide']"></icon>
    </div>
    <div class="pl-collapse-content" v-show="currentValue">
      <div :class="['pl-collapse-inner', visible ? 'show' : 'hide']">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '../icon/index.vue'

// 效果优化，样式调整
export default {
  name: 'plCollapse',
  componentName: 'plCollapse',
  components: {
    icon
  },
  model: {
    event: '-pl-change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,        // 禁用
    title: String            // 标题
  },
  data() {
    return {
      currentValue: !!this.value,
      visible: !!this.value
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    toggle() {
      if (!this.disabled) {
        this.setCurrentValue(!this.visible)
      }
    },
    setCurrentValue(value) {
      if (value === this.visible) {
        return false
      }
      setTimeout(() => {
        this.currentValue = value
      }, !value ? 150 : 0)
      this.visible = value
      this.$emit('-pl-change', value)
      this.$emit('change', value)
    }
  },
  watch: {
    'value'(val) {
      this.setCurrentValue(val)
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes show {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes hide {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

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
    outline: 0 none;
    .icon-arrow {
      transition: all 150ms ease;
      &.show {
        transform: rotate(90deg);
      }
      &.hide {
        transform: rotate(0);
      }
    }
  }
  &-content {
    overflow: hidden;
  }
  &-inner {
    padding: 0 1.2em;
    &.show {
      animation: show 150ms linear forwards;
    }
    &.hide {
      animation: hide 150ms linear forwards;
    }
  }
}
</style>
