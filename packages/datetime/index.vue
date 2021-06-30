<template>
  <div class="pl-datetime" :class="[
    calcSize ? 'pl-datetime--' + calcSize : '',
    {
      'is-disabled': calcDisabled,
      'pl-datetime--error': ruleMessage
    }
    ]">
    <div class="pl-datetime-cell" :class="{'pl-datetime-cell--label': label && !wrap, 'pl-datetime-cell--wrap': label && wrap}">
      <div :class="['pl-datetime-title', {'pl-datetime-title--require': required}]">
        <div class="pl-datetime-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-datetime-label" :class="{'pl-datetime-label--require': required}" v-if="label" :style="{width: calcLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>
      <div class="pl-datetime-value">
        <div class="pl-datetime-inner">
          <div class="pl-datetime-inner-flex" v-if="pickerOptions.isRange">
            <span v-if="startValue" class="title" @click="open()">{{getLabelFormat(startValue)}}</span>
            <span class="placeholder" v-else @click="open()">{{startPlaceholder}} </span>
            <span class="range-separator">{{rangeSeparator}}</span>
            <span v-if="endValue" class="title" @click="open()">{{getLabelFormat(endValue)}}</span>
            <span class="placeholder" v-else @click="open()">{{endPlaceholder}} </span>
          </div>
          <div v-else @click="open()">
            <span v-if="currentValue" class="title">{{getLabelFormat(currentValue)}}</span>
            <span class="placeholder" v-else>{{placeholder}} </span>
          </div>
        </div>
        <div class="pl-datetime-clear" @touchstart.stop.prevent="clear" @mousedown.stop.prevent="clear">
          <icon name="icon-roundclosefill" fill="#ccc" v-if="showClear"></icon>
        </div>
        <div class="pl-datetime-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </div>
    <div class="pl-datetime-error" v-if="ruleMessage">{{ruleMessage}}</div>

    <pl-month ref="month" @submit="submit"></pl-month>
    <pl-time ref="time" @submit="submit"></pl-time>
    <pl-date ref="datetime" @submit="submit"></pl-date>
  </div>
</template>

<script>
import icon from '../icon/index.vue'
import plMonth from './month.vue'
import plTime from './time.vue'
import plDate from './datetime.vue'
import { validate, getDateFromString, getDateString } from '../../src/assets/utils'

export default {
  name: 'plDatetime',
  componentName: 'plDatetime',
  components: {
    icon,
    plMonth,
    plTime,
    plDate
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
    value: [Date, String, Number, Array],
    size: String,                // 尺寸 可选值为 normal，large, small,
    type: String,                // 日历类型：month，date，time，datetime
    isRange: Boolean,            // 是否是范围选择
    placeholder: String,         // 日期占位内容
    startPlaceholder: String,    // 范围选择时开始日期的占位内容
    endPlaceholder: String,      // 范围选择时开始日期的占位内容
    rangeSeparator: {            // 选择范围时的分隔符
      type: String,
      default: '至'
    },
    options: Object,             // 当前时间日期选择器特有的选项
    format: String,              // 日期显示格式
    valueFormat: String,         // 日期返回值格式，Y-M-D H:I:S 不传则返回日期对象
    wrap: Boolean,            // label与value换行显示
    disabled: Boolean,           // 禁用
    readonly: Boolean,           // 只读
    required: Boolean,           // 必填 *号
    label: String,               // 左侧 label
    labelWidth: String,          // label 宽度
    clearable: Boolean           // 清除按钮
  },
  inject: {
    form: {
      default: null
    }
  },
  data() {
    return {
      currentValue: null,    // 日期（单选）
      startValue: null,// 开始日期（范围）
      endValue: null,  // 结束日期（范围）
      emitValue: null,  // 提交日期
      ruleMessage: ''
    }
  },
  computed: {
    // 清除按钮
    showClear() {
      return this.clearable && !this.calcDisabled && (this.currentValue || this.startValue || this.endValue)
    },
    // 计算后的size
    calcSize() {
      return this.size || this.form && this.form.size || 'normal'
    },
    // 计算后的labelWidth
    calcLabelWidth() {
      return this.labelWidth || this.form && this.form.labelWidth || null
    },
    // 计算后的disabled
    calcDisabled() {
      return this.disabled !== undefined ? this.disabled : this.form && this.form.disabled !== undefined ? this.form.disabled : false
    },
    // 计算后的日历设置
    pickerOptions() {
      let props = {}
      this.currentValue && (props.value = this.currentValue)
      this.startValue && (props.startValue = this.startValue)
      this.endValue && (props.endValue = this.endValue)
      this.type && (props.type = this.type)
      this.isRange && (props.isRange = this.isRange)
      this.valueFormat && (props.format = this.valueFormat)

      return Object.assign({
        type: 'date',
        isRange: false,
        format: 'Y-M-D'
      }, this.options, props)
    }
  },
  mounted() {
    if (this.form) {
      this.form.updateItems(this);
    }
  },
  methods: {
    validate() {
      return Promise.all(this.rules.map(rule => validate(rule, this.emitValue))).then(() => {
        this.ruleMessage = ''
        return Promise.resolve()
      }).catch(e => {
        this.ruleMessage = e
        return Promise.reject(e)
      })
    },
    clearValidate() {
      this.ruleMessage = ''
    },
    // 打开选择框
    open(options) {
      if (this.calcDisabled || this.readonly) {
        return false
      }
      if (!options) {
        options = this.pickerOptions
      }

      if (options.type === 'month') {
        this.$refs.month.open(options)
      } else if (options.type === 'time') {
        this.$refs.time.open(options)
      } else {
        this.$refs.datetime.open(options)
      }
    },

    // 标签展示格式
    getLabelFormat(date) {
      date = getDateFromString(date)
      let format = this.format || this.pickerOptions.format
      console.log(this.pickerOptions)
      if (format) {
        return getDateString(date, format)
      } else {
        return date
      }
    },
    // 提交日期
    submit(result) {
      if (this.pickerOptions.isRange) {
        this.emitValue = result.map(item => getDateString(item, this.pickerOptions.format) || null)
      } else {
        this.emitValue = getDateString(result, this.pickerOptions.format) || null
      }

      if (this.setCurrentValue(result)) {
        this.$emit('-pl-change', this.emitValue)
        this.$emit('change', this.emitValue)
      }
    },
    // 设置当前值
    setCurrentValue(value) {
      if (!this.pickerOptions.isRange && value === this.currentValue) {
        return false
      }
      if (this.pickerOptions.isRange && Array.isArray(value) && value[0] === this.startValue && value[1] === this.endValue) {
        return false
      }

      if (this.pickerOptions.isRange) {
        this.startValue = Array.isArray(value) ? value[0] : null
        this.endValue = Array.isArray(value) ? value[1] : null
      } else {
        this.currentValue = value || null
      }
      this.validate()

      return true
    },
    // 获取时间戳
    getTimeStamp(value) {
      let date = getDateFromString(value)

      if (date) {
        return +date
      }
      if (this.pickerOptions.type === 'time') {
        let matchTime = /\d{1,2}(:\d{1,2}){1,2}/.exec(value)
        if (matchTime && matchTime[0]) {
          let time = new Date()
          time.setHours.apply(time, matchTime[0].split(':'))
          return +time
        }
      }
      return null
    },
    // 清除方法
    clear() {
      this.$emit('-pl-change', null)
      this.$emit('change', null)
      this.$emit('clear')
      this.emitValue = null
      this.setCurrentValue(null)
    }
  },
  watch: {
    'value': {
      handler(val) {
        if (val === this.emitValue) {
          return false
        }
        let value
        if (this.pickerOptions.isRange && Array.isArray(val)) {
          value = val.map(item => this.getTimeStamp(item))
        } else {
          value = this.getTimeStamp(val)
        }
        this.emitValue = value
        this.setCurrentValue(value)
      },
      deep: true,
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

.pl-datetime {
  background-color: var(--input-bg);
  padding: 0 1.2rem;
  line-height: normal;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }
  &-cell {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    &--label {
      .pl-datetime-inner {
        text-align: right;
      }
    }
    &--wrap {
      flex-direction: column;

      .pl-datetime-title,
      .pl-datetime-value {
        width: 100%;
      }
      .pl-datetime-title {
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
    &--start {
      align-self: flex-start;
    }
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

    .placeholder,
    .title {
      overflow: hidden;
    }
    .placeholder {
      display: inline-block;
      color: var(--primary-text);
    }

    &-flex {
      width: 100%;
      display: flex;
      flex-direction: row;

      .placeholder,
      .title {
        display: block;
        text-align: center;
        flex: 1;
      }
      .range-separator {
        display: block;
        padding: 0 0.5em;
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
  &.is-disabled {
    background-color: var(--datetime-disabled-bg);
  }
}
</style>
