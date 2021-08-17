<template>
  <div class="pl-checkbox" :class="[
    calcSize ? 'pl-checkbox--' + calcSize : '',
    {
      'is-vertical': vertical,
      'is-disabled': calcDisabled,
      'pl-checkbox--error': ruleMessage
    }
    ]">
    <div class="pl-checkbox-cell" :class="{'pl-checkbox-cell--label': (label || $slots.label) && !wrap, 'pl-checkbox-cell--wrap': (label || $slots.label) && wrap}">
      <div class="pl-checkbox-title" :class="{'pl-checkbox-title--require': required}">
        <div class="pl-checkbox-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-checkbox-label" v-if="label || $slots.label" :style="{width: calcLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>
      <div class="pl-checkbox-value">
        <div class="pl-checkbox-inner">
          <template v-if="options && options.length">
            <div v-for="(item, i) in options" :key="i" class="pl-checkbox-item" :class="{'is-button': button, 'is-vertical': vertical}">
              <input type="checkbox" :disabled="calcDisabled || item[prop.disabled]" v-model="currentValue" :value="item[prop.value]" @change="emit">
              <icon v-if="!button" class="pl-checkbox-icon icon-unchecked" name="icon-kongjianweixuan"></icon>
              <icon v-if="!button" class="pl-checkbox-icon icon-checked" name="icon-kongjianxuanzhong"></icon>
              <span class="pl-checkbox-text">
                <slot :item="item">{{item[prop.label]}}</slot>
              </span>
            </div>
          </template>
          <template v-else>
            <div class="pl-checkbox-item pl-toggle-box" :class="{'is-toggle': button, 'is-vertical': !button && vertical}">
              <input type="checkbox" :disabled="calcDisabled" v-model="currentValue" :true-value="trueValue" :false-value="falseValue" @change="emit">
              <icon v-if="!button" class="pl-checkbox-icon icon-unchecked" name="icon-kongjianweixuan"></icon>
              <icon v-if="!button" class="pl-checkbox-icon icon-checked" name="icon-kongjianxuanzhong"></icon>
              <span class="pl-checkbox-text">
                <slot></slot>
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="pl-checkbox-error" v-if="ruleMessage">{{ruleMessage}}</div>
  </div>
</template>

<script>
import validate from '../../src/assets/utils/validate'
import icon from '../icon/index.vue'

// checkbox
export default {
  name: 'plCheckbox',
  componentName: 'plCheckbox',
  components: {
    icon
  },
  model: {
    event: '-pl-change'
  },
  props: {
    rules: {          // 验证规则
      type: Array,
      default() {
        return []
      }
    },
    size: String,     // 尺寸 可选值为 normal，large, small,
    options: {          // 多选选项
      type: Array,
      default() {
        return []
      }
    },
    prop: {          // key与value
      type: Object,
      default() {
        return { label: 'label', value: 'value', disabled: 'disabled' }
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
    wrap: Boolean,            // label与value换行显示
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
  data() {
    return {
      currentValue: this.value === undefined ? '' : this.value,
      ruleMessage: ''     // 验证错误提示信息
    }
  },
  computed: {
    calcSize() {
      return this.size || this.form && this.form.size || 'normal'
    },
    calcLabelWidth() {
      return this.labelWidth || this.form && this.form.labelWidth || null
    },
    calcDisabled() {
      return this.disabled !== undefined ? this.disabled : this.form && this.form.disabled !== undefined ? this.form.disabled : false
    }
  },
  mounted() {
    if (this.form) {
      this.form.updateItems(this);
    }
  },
  methods: {
    // 手动验证方法
    validate() {
      if (!Array.isArray(this.rules) || !this.rules.length) {
        return false
      }
      return validate(this.rules, this.currentValue, 'array').then(() => {
        this.ruleMessage = ''
      }).catch(result => {
        this.ruleMessage = result.errors[0].message
        return Promise.reject(this.ruleMessage)
      })
    },
    clearValidate() {
      this.ruleMessage = ''
    },
    setCurrentValue(value) {
      if (value === this.currentValue) {
        return false
      }
      this.currentValue = value
      this.validate()
    },
    emit() {
      this.validate()
      this.$emit('-pl-change', this.currentValue)
      this.$emit('change', this.currentValue)
    }
  },
  watch: {
    'value'(val) {
      this.setCurrentValue(val)
    }
  },
  destroyed() {
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
      .pl-checkbox-inner {
        text-align: right;
        justify-content: flex-end;
        .pl-checkbox-item {
          margin: 0 0 0 1em;
        }
      }
    }
    &--wrap {
      flex-direction: column;

      .pl-checkbox-title,
      .pl-checkbox-value {
        width: 100%;
      }
      .pl-checkbox-title {
        padding-top: 1em;
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
    padding-top: 1em;
    align-self: flex-start;
    &--require {
      &::before {
        display: inline-block;
        width: 0.6rem;
        content: "*";
        color: var(--danger);
        margin-left: -0.6rem;
      }
    }
  }
  &-value {
    flex: 1;
  }
  &-prepend {
    text-align: center;
    padding-right: 0.4em;
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
    padding: 0.7em 0;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .pl-checkbox-label {
    padding-right: 0.4em;
  }
  .pl-checkbox-item {
    position: relative;
    display: inline-table;
    margin: 0 1em 0 0;
    padding: 0.3em 0;

    input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      opacity: 0;
      margin: 0;
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
      margin-left: 0.5em;
      color: var(--checkbox-text);
      display: inline-block;
      vertical-align: middle;
    }
    .pl-checkbox-icon {
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
    &.is-vertical {
      display: block;
      width: 100%;
      margin-right: 0;
      padding: 1em 2.5em 1em 0;
      line-height: 1em;
      border-bottom: 1px solid var(--checkbox-vertical-border);

      .pl-checkbox-icon {
        position: absolute;
        right: 0.5rem;
      }
      &:last-child {
        border-bottom: 0 none;
      }
    }
    &.is-button {
      margin: 0;
      padding: 0;

      .pl-checkbox-text {
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid var(--checkbox-button-border);
        padding: 0.5em;
        line-height: 1em;
        margin-left: 0;
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
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }
      &:last-child {
        .pl-checkbox-text {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }

      &.is-vertical {
        padding: 0;
        border-bottom: 0 none;

        .pl-checkbox-text {
          border-radius: 0;
          padding: 1em 0.5em;
          text-align: left;
        }
        &:not(:last-child) {
          .pl-checkbox-text {
            border-bottom: 0 none;
          }
        }
        &:first-child {
          .pl-checkbox-text {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
        }
        &:last-child {
          .pl-checkbox-text {
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }
      input[type="checkbox"] {
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
  .pl-toggle-box {
    &.is-toggle {
      .pl-checkbox-text {
        position: relative;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        border-radius: 1.6em;
        height: 1.5em;
        box-sizing: content-box;
        margin-left: 0;

        &::before {
          position: absolute;
          content: "";
          display: block;
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          background-color: var(--checkbox-toggle-color);
        }
      }
      input[type="checkbox"] {
        & ~ .pl-checkbox-text {
          color: var(--checkbox-toggle-color);
          background-color: var(--checkbox-toggle-unchecked-bg);
          padding: 1px 0.7em 1px 1.9em;
          &::before {
            top: 1px;
            right: auto;
            left: 1px;
          }
        }
        &:checked ~ .pl-checkbox-text {
          color: var(--checkbox-toggle-color);
          background-color: var(--checkbox-toggle-checked-bg);
          padding: 1px 1.9em 1px 0.7em;
          &::before {
            top: 1px;
            left: auto;
            right: 1px;
          }
        }
        &:disabled ~ .pl-checkbox-text {
          color: var(--checkbox-toggle-color);
          background-color: var(--disabled);
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
    .pl-checkbox-inner {
      padding: 0;
    }
  }
}
</style>
