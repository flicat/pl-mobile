<template>
  <div class="pl-range" :class="[
    calcSize ? 'pl-range--' + calcSize : '',
    {
      'is-disabled': calcDisabled,
      'pl-range--error': ruleMessage
    }
    ]">
    <div class="pl-range-cell" :class="{'pl-range-cell--label': label && !wrap, 'pl-range-cell--wrap': label && wrap}">
      <div :class="['pl-range-title', {'pl-range-title--require': required}]">
        <div class="pl-range-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-range-label" :class="{'pl-range-label--require': required}" v-if="label" :style="{width: calcLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>

      <div class="pl-range-value">
        <div class="pl-range-inner">
          <div class="slider-runnable-track" ref="track">
            <div class="progress" :style="progressStyle"></div>
            <div class="thumb"
              :style="thumbStyle"
              @touchstart="touchEvent($event)"
              @touchmove="touchEvent($event)"
              @touchend="touchEvent($event)"
              @touchcancel="touchEvent($event)">
              <slot name="thumb">
                <div class="thumb-icon"></div>
              </slot>
            </div>
          </div>
        </div>
        <div class="pl-range-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </div>
    <div class="pl-range-error" v-if="ruleMessage">{{ruleMessage}}</div>
  </div>
</template>

<script>
  import {validate} from '../../src/assets/utils'

  export default {
    name: 'plRange',
    componentName: 'plRange',
    model: {
      event: '-pl-change'
    },
    props: {
      rules: {          // 验证规则
        type: Array,
        default () {
          return []
        }
      },
      size: String,     // 尺寸 可选值为 normal，large, small,
      value: Number,
      // 最小值
      min: {
        type: Number,
        default: 0,
      },
      // 最大值
      max: {
        type: Number,
        default: 100,
      },
      // step进度间隔
      step: {
        type: Number,
        default: 1,
      },
      wrap: Boolean,            // label与value换行显示
      disabled: Boolean,            // 禁用
      required: Boolean,            // 必填 *号
      label: String,                // 左侧 label
      labelWidth: String            // label 宽度
    },
    inject: {
      form: {
        default: null
      }
    },
    data () {
      return {
        currentValue: this.value === undefined ? '' : this.value,
        ruleMessage: '',     // 验证错误提示信息,

        rangeWidth: 0,
        transDiff: 0,
        transStart: 0,
        transEnd: 0
      }
    },
    computed: {
      diff () {
        return this.currentValue / (this.max - this.min) * this.rangeWidth
      },
      progressStyle () {
        return {
          width: this.diff + 'px'
        }
      },
      thumbStyle () {
        return {
          'transform': `translateX(${this.diff}px)`,
          '-webkit-transform': `translateX(${this.diff}px)`
        }
      },
      calcSize () {
        return this.size || this.form && this.form.size || 'normal'
      },
      calcLabelWidth () {
        return this.labelWidth || this.form && this.form.labelWidth || null
      },
      calcDisabled () {
        return this.disabled !== undefined ? this.disabled : this.form && this.form.disabled !== undefined ? this.form.disabled : false
      }
    },
    mounted () {
      if (this.$refs['track']) {
        this.rangeWidth = this.$refs['track'].clientWidth
      }
      if (this.form) {
        this.form.updateItems(this);
      }
    },
    methods: {
      // 手动验证方法
      validate () {
        return Promise.all(this.rules.map(rule => validate(rule, this.currentValue))).then(() => {
          this.ruleMessage = ''
          return Promise.resolve()
        }).catch(e => {
          this.ruleMessage = e
          return Promise.reject(e)
        })
      },
      clearValidate () {
        this.ruleMessage = ''
      },
      setCurrentValue (value) {
        if (value === this.currentValue) {
          return false
        }
        this.currentValue = value
      },
      touchEvent (e) {
        if (this.calcDisabled) {
          return false
        }
        let currentValue = 0

        switch (e.type) {
          case 'touchstart':
            this.transStart = e.touches[0].clientX
            this.transDiff = this.diff
            break;
          case 'touchmove':
            e.preventDefault()
            e.stopPropagation()
            this.transEnd = e.touches[0].clientX
            currentValue = Math.round((this.transDiff + this.transEnd - this.transStart) / this.rangeWidth * (this.max - this.min) / this.step) * this.step
            if (currentValue < this.min) {
              currentValue = this.min
            }
            if (currentValue > this.max) {
              currentValue = this.max
            }
            this.currentValue = currentValue
            this.$emit('-pl-change', this.currentValue)
            this.$emit('change', this.currentValue)
            break;
          case 'touchend':
          case 'touchcancel':
            this.validate()
            break;
        }
      }
    },
    watch: {
      'value' (val) {
        this.setCurrentValue(val)
      }
    },
    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      if (this.form) {
        this.form.removeItem(this);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../src/assets/less/mixin.less";

  .pl-range {
    padding: 0 1.2rem;
    line-height: normal;

    * {
      box-sizing: border-box;
    }

    &-cell {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;

      &--label {
        .pl-range-title {
          padding: 1em 0;
        }
      }
      &--wrap {
        flex-direction: column;

        .pl-range-title,
        .pl-range-value {
          width: 100%;
        }
        .pl-range-title {
          padding-top: 1em;
        }
        .pl-range-value {
          padding: 0.6em 0;
        }
      }
    }
    &-title,
    &-value {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      flex-direction: row;
    }
    &-title {
      &--require {
        &::before {
          display: inline-block;
          width: 0.6rem;
          content: '*';
          color: var(--danger);
          margin-left: -0.6rem;
        }
      }
    }
    &-value {
      flex: 1;
    }

    &--large {
      font-size: 1.2em;
    }
    &--small {
      font-size: 0.8em;
    }
    &--normal {

    }
    &--error {
      position: relative;
    }
    &-inner {
      box-sizing: border-box;
      padding: 1em;
      flex: 1;
      width: 100%;
    }
    &-append,
    &-prepend {
      text-align: center;
    }
    &-append {
      padding-left: 0.4em;
    }
    &-prepend {
      padding-right: 0.4em;
    }
    .pl-range-label {
      padding-right: 0.4em;
    }
    .slider-runnable-track {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 3px;
      background: var(--range-bar);
      border-radius: 2px;

      .progress,
      .thumb {
        position: absolute;
        left: 0;
        top: 0;
      }
      .progress {
        z-index: 0;
        height: 3px;
        border-radius: 2px;
        background: var(--range-progress);
      }
      .thumb {
        z-index: 2;

        &-icon {
          background: var(--range-thumb);
          width: 1.6em;
          height: 1.6em;
          line-height: 1.6em;
          text-align: center;
          border-radius: 50%;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
          transform: translate(-50%, -50%);
        }
      }
    }
    &-error {
      padding: 0 0.5em;
      color: var(--danger);
      line-height: 2em;
    }
    &.is-disabled {
      .slider-runnable-track {
        .progress {
          background-color: var(--range-disabled-bg);
        }
      }
    }
  }
</style>
