<template>
  <div class="pl-range" :class="[
    calcSize ? 'pl-range--' + calcSize : '',
    {
      'is-disabled': calcDisabled,
      'pl-range--error': ruleMessage
    }
    ]">
    <div class="pl-range-cell">
      <div class="pl-range-label" :class="{'pl-range-label--require': required}" v-if="label" :style="{width: calcLabelWidth}">
        <slot name="label">{{label}}</slot>
      </div>
      <div class="pl-range-inner">
        <div class="slider-runnable-track" ref="track">
          <div class="progress" :style="progressStyle"></div>
          <div class="thumb"
            :style="thumbStyle"
            @touchstart="touchEvent($event)"
            @touchmove="touchEvent($event)"
            @touchend="touchEvent($event)"
            @touchcancel="touchEvent($event)"></div>
        </div>
        <div class="pl-range-slot">
          <div class="pl-range-prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
          </div>
          <div class="pl-range-append" v-if="$slots.append">
            <slot name="append"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-range-error" v-if="ruleMessage">{{ruleMessage}}</div>
  </div>
</template>

<script>
  import {validate} from '../../src/assets/utils'

  // range
  export default {
    name: 'plRange',
    componentName: 'plRange',
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
            this.$emit('input', this.currentValue)
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
  @import "../../src/assets/less/variables.less";
  @import "../../src/assets/less/mixin.less";

  .pl-range {
    padding: 0 1.2em;
    line-height: normal;

    * {
      box-sizing: border-box;
    }

    &-cell {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
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
    .pl-range-label {
      padding-right: 0.4em;

      &--require {
        position: relative;
        &::before {
          position: absolute;
          content: '*';
          color: @danger;
          left: -0.6em;
          top: 30%;
        }
      }
    }
    .slider-runnable-track {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 3px;
      background: #EBEDFB;
      border-radius: 2px;

      .progress,
      .thumb {
        position: absolute;
        z-index: 0;
      }
      .progress {
        left: 0;
        top: 0;
        height: 3px;
        border-radius: 2px;
        background: #5074FF;
      }
      .thumb {
        left: -0.8em;
        top: -0.8em;
        z-index: 2;
        background: #FFF;
        width: 1.6em;
        height: 1.6em;
        line-height: 1.6em;
        text-align: center;
        border-radius: 50%;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
      }
    }
    .pl-range-slot {
      display: table;
      width: 100%;
      font-size: smaller;
      color: #999;
      line-height: 2em;

      .pl-range-prepend,
      .pl-range-append {
        display: table-cell;
      }
      .pl-range-prepend {
        text-align: left;
      }
      .pl-range-append {
        text-align: right;
      }
    }

    &-error {
      padding: 0 0.5em;
      color: @danger;
      line-height: 2em;
    }
    &.is-disabled {
      .slider-runnable-track {
        .progress {
          background-color: #9D9FA8;
        }
      }
    }
  }
</style>
