<template>
  <div class="pl-radio" :class="[
    calcSize ? 'pl-radio--' + calcSize : '',
    {
      'is-vertical': vertical,
      'is-disabled': calcDisabled,
      'pl-radio--error': ruleMessage
    }
    ]">
    <div class="pl-radio-cell" :class="{'pl-radio-cell--label': (label || $slots.label) && !wrap, 'pl-radio-cell--wrap': (label || $slots.label) && wrap}">
      <div class="pl-radio-title" :class="{'pl-radio-title--require': required}">
        <div class="pl-radio-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-radio-label" v-if="label || $slots.label" :style="{width: calcLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>
      <div class="pl-radio-value">
        <div class="pl-radio-inner">
          <div class="pl-radio-item" v-for="(item, i) in options" :key="i" :class="{'is-active': item[prop.value] === currentValue, 'is-disabled': calcDisabled || item[prop.disabled], 'is-button': button, 'is-vertical': vertical}" @click="!(calcDisabled || item[prop.disabled]) && emit(item[prop.value])">
            <icon v-if="!button" class="pl-radio-icon" :name="item[prop.value] === currentValue ? 'icon-btn_choose' : 'icon-btn_cicle_unchoose'" :fill="calcDisabled || item[prop.disabled] ? '#ebedf0' : item[prop.value] === currentValue ? '@primary' : '#dcdfe6'"></icon>
            <span>
              <slot :item="item">{{item[prop.label]}}</slot>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-radio-error" v-if="ruleMessage">{{ruleMessage}}</div>
  </div>
</template>

<script>
import validate from '../../src/assets/utils/validate'
import icon from '../icon/index.vue'

// radio
export default {
  name: 'plRadio',
  componentName: 'plRadio',
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
    options: {          // 单选选项
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
      return validate(this.rules, this.currentValue).then(() => {
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
    emit(value) {
      if (value === this.currentValue) {
        return false
      }
      this.currentValue = value
      this.validate()
      this.$emit('-pl-change', value)
      this.$emit('change', value)
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

.pl-radio {
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
      .pl-radio-inner {
        text-align: right;
        justify-content: flex-end;
        .pl-radio-item {
          margin: 0 0 0 1em;
        }
      }
    }
    &--wrap {
      flex-direction: column;

      .pl-radio-title,
      .pl-radio-value {
        width: 100%;
      }
      .pl-radio-title {
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
  .pl-radio-label {
    padding-right: 0.4em;
  }
  .pl-radio-item {
    position: relative;
    display: inline-table;
    margin: 0 1em 0 0;
    padding: 0.3em 0;
    color: var(--radio-text);

    .pl-radio-icon {
      margin-right: 0.5em;
      font-size: 1em;

      & + span {
        display: inline-block;
        vertical-align: middle;
      }
    }
    &.is-vertical {
      display: table;
      width: 100%;
      margin-right: 0;
      line-height: 1em;

      .pl-radio-icon {
        position: absolute;
        right: 0.5em;
      }
      &.is-button {
        text-align: left;
      }
      &:not(.is-button) {
        padding: 1em 2.5em 1em 0;

        &:not(:last-child) {
          border-bottom: 1px solid var(--radio-vertical-border);
        }
      }
    }
    &.is-button {
      margin: 0;
      padding: 0.5em;
      border: 1px solid var(--radio-button-border);

      .pl-radio-icon {
        display: none;
      }
      &:not(.is-vertical) {
        &:not(:last-child) {
          border-right: 0 none;
        }
        &:first-child {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        &:last-child {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
      &.is-vertical {
        padding: 1em 0.5em;

        &:not(:last-child) {
          border-bottom: 0 none;
        }
        &:first-child {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        &:last-child {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
      &.is-active {
        background-color: var(--primary);
        color: var(--radio-button-text);
      }
      &.is-disabled {
        background-color: var(--radio-button-disabled-bg);
        border-color: var(--radio-button-disabled-bg);
        color: var(--radio-button-disabled-text);
      }
    }
    &.is-active {
      color: var(--primary);
      border-color: var(--primary);
    }
    &.is-disabled {
      color: var(--radio-disabled-text);
    }
  }

  &-error {
    padding: 0 0.5em;
    color: var(--danger);
    line-height: 2em;
  }

  &.is-vertical {
    .pl-radio-inner {
      padding: 0;
    }
  }
}
</style>
