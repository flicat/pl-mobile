<template>
  <div class="pl-step" :class="['pl-step--' + direction]">
    <div class="pl-step-circle">
      <slot name="icon">
        <icon v-if="active" name="icon-btn_choose" :fill="activeColor"></icon>
        <i class="icon-default" v-else></i>
      </slot>
      <div v-if="!isLast" class="pl-step-line"></div>
    </div>
    <div class="pl-step-title" :style="{color: active ? activeColor : '#9898B6'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import icon from '../icon/index.vue'

  // step-item
  export default {
    name: 'plStepItem',
    componentName: 'plStepItem',
    components: {
      icon
    },
    inject: {
      steps: {
        default: {}
      }
    },
    data () {
      return {};
    },
    computed: {
      isFirst () {
        return this.steps.items.indexOf(this) === 0
      },
      isLast () {
        return this.steps.items.indexOf(this) === this.steps.items.length - 1
      },
      active () {
        const index = this.steps.items.indexOf(this)
        const active = this.steps.active
        return index === active
      },
      activeColor () {
        return this.steps.activeColor || 'currentColor'
      },
      direction () {
        return this.steps.direction
      }
    },

    mounted () {
      this.steps.updateItems();
    },
    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.steps.removeItem(this);
    }
  }
</script>

<style lang="less" scoped>
  @import "../../src/assets/less/mixin.less";
  .pl-step {
    position: relative;

    * {
      box-sizing: border-box;
    }

    .pl-step-circle {
      display: flex;
      position: absolute;
    }
    .icon-default {
      display: inline-block;
    }

    &--vertical {
      padding-left: 2em;
      padding-bottom: 1em;

      .pl-step-title {
        text-align: left;
      }
      .pl-step-circle {
        flex-direction: column;
        width: 1.2em;
        left: 0;
        top: 0;
        bottom: 0;

        .pl-step-line {
          width: 0.6em;
          flex: 1;
          margin-top: 0.2em;
          border-right: 1px solid var(--steps-line);
        }
        .icon-default {
          width: 1em;
          height: 1em;
          border: 0.3em solid transparent;
          border-radius: 50%;
          background-color: var(--steps-icon);
          background-clip: content-box;
        }
      }
    }
    &--horizontal {
      flex: 1;
      padding-bottom: 2em;

      .pl-step-title {
        text-align: center;
      }
      .pl-step-circle {
        flex-direction: row;
        height: 1.2em;
        left: 0;
        bottom: 0;
        right: 0;
        transform: translateX(calc(50% - 0.6em));

        .pl-step-line {
          height: 0.6em;
          flex: 1;
          margin-left: 0.2em;
          border-bottom: 1px solid var(--steps-line);
        }
        .icon-default {
          width: 0.5em;
          height: 0.5em;
          border-top: 1px solid var(--steps-icon);
          border-right: 1px solid var(--steps-icon);
          transform: rotate(45deg);
          transform-origin: -50% 50%;
        }
      }
    }
  }
</style>
