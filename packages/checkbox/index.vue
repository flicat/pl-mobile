<template>
  <div class="pl-checkbox" :class="[
    calcSize ? 'pl-checkbox--' + calcSize : '',
    {
      'is-vertical': vertical,
      'is-disabled': calcDisabled,
      'pl-checkbox--error': ruleMessage
    }
    ]">
    <div class="pl-checkbox-cell" :class="{'pl-checkbox-cell--label': label}">
      <div class="pl-checkbox-label" :class="{'pl-checkbox-label--require': required}" v-if="label" :style="{width: calcLabelWidth}">
        <slot name="label">{{label}}</slot>
      </div>
      <div class="pl-checkbox-inner">
        <template v-if="options && options.length">
          <div v-for="(item, i) in options" :key="i" class="pl-checkbox-item" :class="{'is-button': button, 'is-vertical': vertical}">
            <input type="checkbox" :disabled="calcDisabled || item[prop.disabled]" v-model="currentValue" :value="item[prop.value]" @change="emit">
            <icon v-if="!button" class="pl-checkbox-icon icon-unchecked" name="icon-kongjianweixuan"></icon>
            <icon v-if="!button" class="pl-checkbox-icon icon-checked" name="icon-kongjianxuanzhong"></icon>
            <span class="pl-checkbox-text"><slot :item="item">{{item[prop.label]}}</slot></span>
          </div>
        </template>
        <template v-else>
          <div class="pl-checkbox-item" :class="{'is-button': button, 'is-vertical': vertical}">
            <input type="checkbox" :disabled="calcDisabled" v-model="currentValue" :true-value="trueValue" :false-value="falseValue" @change="emit">
            <icon v-if="!button" class="pl-checkbox-icon icon-unchecked" name="icon-kongjianweixuan"></icon>
            <icon v-if="!button" class="pl-checkbox-icon icon-checked" name="icon-kongjianxuanzhong"></icon>
            <span class="pl-checkbox-text"><slot></slot></span>
          </div>
        </template>
      </div>
    </div>
    <div class="pl-checkbox-error" v-if="ruleMessage">{{ruleMessage}}</div>
  </div>
</template>

<script>
  import {validate} from '../../src/assets/utils'
  import icon from '../icon'

  // checkbox
  export default {
    name: 'plCheckbox',
    componentName: 'plCheckbox',
    components: {
      icon
    },
    model: {
      event: 'change'
    },
    props: {
      rules: {          // 验证规则
        type: Array,
        default () {
          return []
        }
      },
      size: String,     // 尺寸 可选值为 normal，large, small,
      options: {          // 多选选项
        type: Array,
        default () {
          return []
        }
      },
      prop: {          // key与value
        type: Object,
        default () {
          return {label: 'label', value: 'value', disabled: 'disabled'}
        }
      },
      value: {
        default: null
      },
      trueValue: {
        default: null
      },
      falseValue: {
        default: null
      },
      disabled: Boolean,            // 禁用
      required: Boolean,            // 必填 *号
      button: Boolean,              // 是否是按钮样式
      vertical: Boolean,            // 是否是竖向排列
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
        ruleMessage: ''     // 验证错误提示信息
      }
    },
    computed: {
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
      emit () {
        this.validate()
        this.$emit('change', this.currentValue)
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

  .pl-checkbox {
    background-color: var(--input-bg);
    padding: 0 1.2em;
    line-height: normal;

    * {
      box-sizing: border-box;
    }

    &-cell {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      &--label {
        .pl-checkbox-inner {
          text-align: right;
        }
      }
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
      padding: 1em 0;
      flex: 1;
    }
    .pl-checkbox-label {
      padding-right: 0.4em;

      &--require {
        position: relative;
        &::before {
          position: absolute;
          content: '*';
          color: var(--danger);
          left: -0.6em;
          top: 30%;
        }
      }
    }
    .pl-checkbox-item {
      position: relative;
      display: inline-table;
      margin-right: 1em;

      input {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        opacity: 0;
        -webkit-appearance: none;

        &:checked {
          & ~ .pl-checkbox-text {
            color: var(--primary);
            border-color: var(--primary);
          }
          & ~ .icon-unchecked {
            display: none;
          }
          & ~ .icon-checked {
            display: inline-block;
          }
          & ~ .pl-checkbox-icon {
            /deep/ svg {
              fill: var(--primary);
            }
          }
        }
        &:disabled {
          & ~ .pl-checkbox-text {
            color: var(--checkbox-disabled-text);
            border-color: var(--checkbox-disabled-border);
          }
          & ~ .pl-checkbox-icon {
            /deep/ svg {
              fill: var(--checkbox-disabled-bg);
            }
          }
        }
      }
      .pl-checkbox-text {
        color: var(--checkbox-text);
        display: inline-block;
        vertical-align: middle;
      }
      .pl-checkbox-icon {
        margin-right: 0.5em;
        font-size: 1em;

        &.icon-unchecked {
          display: inline-block;
        }
        &.icon-checked {
          display: none;
        }
        /deep/ svg {
          fill: var(--checkbox-bg);
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &.is-vertical {
        display: block;
        width: 100%;
        margin-right: 0;
        padding: 1em 0;
        line-height: 1em;
        border-bottom: 1px solid var(--checkbox-vertical-border);

        .pl-checkbox-icon {
          position: absolute;
          right: 0.5em;
        }
        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: 0 none;
        }
      }
      &.is-button {
        margin: 0;

        .pl-checkbox-text {
          display: block;
          width: 100%;
          height: 100%;
          border: 1px solid var(--checkbox-button-border);
          padding: 0.5em;
          line-height: 1em;
        }
        .pl-checkbox-icon {
          display: none;
        }
        &:first-child ~ :not(.is-vertical) {
          .pl-checkbox-text {
            border-left: 0 none;
          }
        }
        &:first-child {
          .pl-checkbox-text {
            border-radius: 5px 0 0 5px;
          }
        }
        &:last-child {
          .pl-checkbox-text {
            border-radius: 0 5px 5px 0;
          }
        }

        &.is-vertical {
          padding: 0;
          border-bottom: 0 none;

          .pl-checkbox-text {
            padding: 1em 0.5em;
          }
          &:not(:last-child) {
            .pl-checkbox-text {
              border-bottom: 0 none;
            }
          }
          &:first-child {
            .pl-checkbox-text {
              border-radius: 5px 5px 0 0;
            }
          }
          &:last-child {
            .pl-checkbox-text {
              border-radius: 0 0 5px 5px;
            }
          }
        }
        input {
          &:checked ~ .pl-checkbox-text {
            background-color: var(--primary);
            color: var(--checkbox-button-text);
          }
          &:disabled ~ .pl-checkbox-text {
            background-color: var(--checkbox-button-disabled-bg);
            color: var(--checkbox-button-disabled-text);
          }
        }
      }
    }

    &-error {
      padding: 0 0.5em;
      color: var(--danger);
      line-height: 2em;
    }

    &.is-vertical {
      .pl-checkbox-label {
        align-self: flex-start;
        margin-top: 1em;
      }
      .pl-checkbox-inner {
        padding: 0;
      }
    }
  }
</style>
