<template>
  <div class="pl-select" :class="[
    calcSize ? 'pl-select--' + calcSize : '',
    multiple ? 'pl-select--multiple' : '',
    {
      'is-disabled': calcDisabled,
      'pl-select--error': ruleMessage && calcShowError
    }
    ]">
    <div class="pl-select-cell" :class="{'pl-select-cell--label': (label || $slots.label) && !wrap, 'pl-select-cell--wrap': wrap && (label || $slots.label)}">
      <div class="pl-select-title" :class="{'pl-select-title--require': required}">
        <div class="pl-select-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-select-label" v-if="label || $slots.label" :style="{width: calcLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>
      <div class="pl-select-value">
        <div class="pl-select-inner" @click="open">
          <span v-if="multiple && currentValue && currentValue.length" class="title">
            <em class="tag" v-for="(item, i) in currentValue" :key="i">{{calcOptions.get(item)}}</em>
          </span>
          <span v-else-if="!multiple && calcOptions.get(currentValue)">{{calcOptions.get(currentValue)}}</span>
          <span class="placeholder" v-else>{{placeholder}}</span>
        </div>
        <div class="pl-select-clear" @touchstart.stop.prevent="clear" @mousedown.stop.prevent="clear" v-show="showClear">
          <icon name="icon-roundclosefill" fill="#ccc"></icon>
        </div>
        <div class="pl-select-icon">
          <icon name="icon-unfold1" class="icon-arrow" fill="#ccc"></icon>
        </div>
        <div class="pl-select-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </div>
    <div class="pl-select-error" v-if="ruleMessage && calcShowError">{{ruleMessage}}</div>

    <popup ref="picker" position="bottom">
      <div class="pl-select-popup-content">
        <div class="pl-select-popup-top">
          <div class="pl-select-popup-btn--cancel" @click="close">取消</div>
          <div class="pl-select-popup-title">{{placeholder}}</div>
          <div class="pl-select-popup-btn--submit" @click="submit">确认</div>
        </div>
        <div class="pl-select-popup-inner">
          <ul class="pl-select-popup-inner-row">
            <li class="pl-select-popup-inner-item" v-for="(item, i) in options" :key="i">
              <input :type="multiple ? 'checkbox' : 'radio'" class="inner-input" v-model="popupValue" :value="getValue(item)" :disabled="item.disabled">
              <span>
                <slot :item="item">{{item[prop.label]}}</slot>
              </span>
              <icon name="icon-duigou" class="checked-icon"></icon>
            </li>
          </ul>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import icon from '../icon/index.vue'
import popup from '../popup/index.vue'
import { is, getType, nullish } from '../../src/assets/utils'
import validate from '../../src/assets/utils/validate'

export default {
  name: 'plSelect',
  componentName: 'plSelect',
  components: {
    icon,
    popup
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
    value: {
      default: ''
    },
    size: String,     // 尺寸 可选值为 normal，large, small,
    placeholder: String,
    options: {         // 下拉选项
      type: Array,
      default() {
        return []
      }
    },
    prop: {
      type: Object,  // 显示的标签和返回的值 {label, value}
      default() {
        return { label: 'label', value: 'value' }
      }
    },
    wrap: Boolean,            // label与value换行显示
    multiple: Boolean,        // 多选
    disabled: {           // 禁用
      type: Boolean,
      default: undefined
    },
    showError: {           // 禁用
      type: Boolean,
      default: undefined
    },
    readonly: Boolean,        // 只读
    required: Boolean,        // 必填 *号
    label: String,            // 左侧 label
    labelWidth: String,       // label 宽度
    clearable: {              // 清除按钮
      type: Boolean,
      default: false
    }
  },
  inject: {
    form: {
      default: null
    }
  },
  data() {
    return {
      currentValue: this.value === undefined ? null : this.value,
      popupValue: null,

      ruleMessage: '',
      handlers: []
    }
  },
  computed: {
    showClear() {
      return this.clearable && !this.calcDisabled && (!this.multiple ? this.currentValue : this.currentValue.length)
    },
    calcOptions() {
      return new Map(this.options.map(item => [this.getValue(item), this.getLabel(item)]))
    },
    calcSize() {
      return nullish(this.size, this.form && this.form.size, 'normal')
    },
    calcLabelWidth() {
      return nullish(this.labelWidth, this.form && this.form.labelWidth, null)
    },
    calcDisabled() {
      return nullish(this.disabled, this.form && this.form.disabled, false)
    },
    calcShowError() {
      return nullish(this.showError, this.form && this.form.showError, true)
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
      let type = 'string'
      if (this.multiple) {
        type = 'array'
      } else if (this.calcOptions.get(this.currentValue)) {
        type = getType(this.currentValue)
      }
      return validate(this.rules, this.currentValue, type).then(() => {
        this.ruleMessage = ''
      }).catch(result => {
        this.ruleMessage = result.errors[0].message
        return Promise.reject(this.ruleMessage)
      })
    },
    clearValidate() {
      this.ruleMessage = ''
    },
    open() {
      if (this.calcDisabled || this.readonly || !this.options.length) {
        return false
      }
      if (Array.isArray(this.currentValue)) {
        this.popupValue = [...this.currentValue]
      } else {
        this.popupValue = this.currentValue
      }
      this.$refs.picker.open()
    },
    close() {
      this.$refs.picker.close()
    },
    clear() {
      let defaultVal
      if (this.multiple) {
        defaultVal = []
      } else {
        defaultVal = this.options.length && typeof this.options[0][this.prop.value] === 'string' ? '' : null
      }
      this.$emit('-pl-change', defaultVal)
      this.$emit('change', defaultVal)
      this.$emit('clear')
      this.setCurrentValue(defaultVal)
    },
    setCurrentValue(value) {
      if (value === this.currentValue) {
        return false
      }
      this.currentValue = value
      this.validate()
    },
    submit() {
      this.setCurrentValue(this.popupValue)
      this.emit()
    },
    emit() {
      this.$emit('-pl-change', this.currentValue)
      this.$emit('change', this.currentValue)
      this.close()
    },
    // 获取标签名，如果没有指定 prop 则返回对象本身
    getLabel(target) {
      return this.prop.label ? target[this.prop.label] : String(target)
    },
    // 获取值，如果没有指定 prop 则返回对象本身
    getValue(target) {
      return this.prop.value ? target[this.prop.value] : target
    }
  },
  watch: {
    'value': {
      handler(val) {
        if (this.multiple && !is(val, 'array')) {
          this.currentValue = []
        } else {
          this.setCurrentValue(val)
        }
      },
      immediate: true
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

.pl-select {
  background-color: var(--input-bg);
  padding: 0 1.2rem;
  line-height: normal;
  position: relative;

  * {
    box-sizing: border-box;
  }

  &-cell {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;

    &--label {
      .pl-select-inner {
        text-align: right;
      }
    }
    &--wrap {
      flex-direction: column;

      .pl-select-title,
      .pl-select-value {
        width: 100%;
      }
      .pl-select-title {
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      display: inline-block;
    }
    .placeholder {
      color: var(--primary-text);
    }
  }
  &--multiple {
    .pl-select-inner {
      white-space: normal;

      .tag {
        font-style: normal;
        margin: 2px 5px 2px 0;
        display: inline-block;
        padding: 0 0.3em;
        height: 100%;
        background-color: var(--tag-bg);
        color: var(--select-color);
        border-radius: 2px;
        white-space: nowrap;
      }
    }
  }
  &-label {
    padding-right: 0.4em;
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
  &-clear {
    margin-left: 0.4em;

    .icon-clear {
      width: 1.2em;
      height: 1.2em;
      vertical-align: bottom;
    }
  }
  &-error {
    padding: 0 0.5em;
    color: var(--danger);
    line-height: 2em;
  }
  &-icon {
    .icon-arrow {
      /*display: block;*/
      /*width: 0;*/
      /*height: 0;*/
      /*border: 3px solid;*/
      /*border-color: transparent transparent currentColor currentColor;*/
      /*transform: rotate(-45deg);*/
      /*transform-origin: 0 0;*/
      /*opacity: 0.6;*/
    }
  }

  &.is-disabled {
    color: var(--disabled);
  }

  .pl-select-popup {
    &-content {
      position: relative;
      z-index: 1;
      .font-size(16);
      color: var(--select-popup-color);
      background-color: var(--select-popup-bg);
    }

    &-top {
      .height(44);
      .line-height(44);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-top: 1px solid var(--picker-border);
      border-bottom: 1px solid var(--picker-border);
    }
    &-btn {
      &--cancel,
      &--submit {
        .font-size(14);
        .margin(0, 20);
      }
      &--cancel {
        color: var(--picker-btn-cancle);
      }
      &--submit {
        color: var(--picker-btn-submit);
      }
    }
    &-inner {
      max-height: 70vh;
      .min-height(150);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow: hidden;
      overscroll-behavior: contain; // 阻止滚动传播

      &-row {
        width: 100%;
        overflow: auto;
        margin: 0;
        padding: 0;
        list-style: none;
        -webkit-overflow-scrolling: auto;
      }
      &-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        padding: 0 1.2em;
        .height(50);
        .line-height(50);
        border-bottom: 1px solid var(--select-popup-border);

        &:last-child {
          border-bottom: 0 none;
        }
        .checked-icon {
          margin-left: auto;
          display: none;

          /deep/ svg {
            fill: var(--primary);
          }
        }
        .inner-input {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          margin: 0;

          &:checked ~ .checked-icon {
            display: block;
          }
          &:checked ~ span {
            color: var(--primary);
          }
          &:disabled ~ span {
            color: var(--disabled);
          }
        }
      }
    }
  }
}
</style>
