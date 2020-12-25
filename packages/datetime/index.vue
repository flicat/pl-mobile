<template>
  <div class="pl-datetime" :class="[
    calcSize ? 'pl-datetime--' + calcSize : '',
    {
      'is-disabled': calcDisabled,
      'pl-datetime--error': ruleMessage
    }
    ]">
    <div class="pl-datetime-cell" :class="{'pl-datetime-cell--label': label}">
      <div class="pl-datetime-label" :class="{'pl-datetime-label--require': required}" v-if="label" :style="{width: calcLabelWidth}">
        <slot name="label">{{label}}</slot>
      </div>
      <div class="pl-datetime-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="pl-datetime-inner">
        <div class="pl-datetime-inner-flex" v-if="isRange">
          <span v-if="startValue" class="title" @click="open('start')">{{getLabelFormat(startValue)}}</span>
          <span class="placeholder" v-else @click="open('start')">{{startPlaceholder}}</span>
          <span class="range-separator">{{rangeSeparator}}</span>
          <span v-if="endValue" class="title" @click="open('end')">{{getLabelFormat(endValue)}}</span>
          <span class="placeholder" v-else @click="open('end')">{{endPlaceholder}}</span>
        </div>
        <div v-else @click="open()">
          <span v-if="currentValue" class="title">{{getLabelFormat(currentValue)}}</span>
          <span class="placeholder" v-else>{{placeholder}}</span>
        </div>
      </div>
      <div class="pl-datetime-clear" @touchstart.stop.prevent="clear" @mousedown.stop.prevent="clear">
        <icon name="icon-roundclosefill" fill="#ccc" v-if="showClear"></icon>
      </div>
      <div class="pl-datetime-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </div>
    <div class="pl-datetime-error" v-if="ruleMessage">{{ruleMessage}}</div>

    <div v-if="isRange">
      <picker :options="startDatetimeOption" :defaultValue="pickerStartValue" :title="startPlaceholder" :prop="pickerProp" @submit="submitStartDate" @cancel="cancel" ref="start-picker"></picker>
      <picker :options="endDatetimeOption" :defaultValue="pickerEndValue" :title="endPlaceholder" :prop="pickerProp" @submit="submitEndDate" @cancel="cancel" ref="end-picker"></picker>
    </div>
    <div v-else>
      <picker :options="datetimeOption" :defaultValue="pickerValue" :title="placeholder" :prop="pickerProp" @submit="submitDate" @cancel="cancel" ref="picker"></picker>
    </div>
  </div>
</template>

<script>
  // TODO 选择样式修改
  import picker from '../picker/index.vue'
  import icon from '../icon/index.vue'
  import {
    is,
    validate,
    getDateString,
    getDateFromString,
    getMonthDays,
    getRangeDate,
    getDayDiff
  } from '../../src/assets/utils'

  // 默认配置
  const defaultOptions = {
    onPick: () => false,   // 日期选择事件，只在日期范围选择有效
    start: getDateFromString((new Date().getFullYear() - 5) + '-1-1 00:00:00'),
    end: getDateFromString((new Date().getFullYear() + 5) + '-12-31 23:59:59'),
    timeStep: '00:01'       // 间隔时间
  }

  export default {
    name: 'plDatetime',
    componentName: 'plDatetime',
    components: {
      picker,
      icon
    },
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
      value: [Date, String, Number, Array],
      size: String,                // 尺寸 可选值为 normal，large, small,
      type: {                      // 日历类型：month，date，time，datetime
        type: String,
        default: 'date'
      },
      isRange: Boolean,            // 是否是范围选择
      placeholder: String,         // 日期占位内容
      startPlaceholder: String,    // 范围选择时开始日期的占位内容
      endPlaceholder: String,      // 范围选择时开始日期的占位内容
      rangeSeparator: {            // 选择范围时的分隔符
        type: String,
        default: '至'
      },
      options: Object,             // 当前时间日期选择器特有的选项
      format: {                    // 日期显示格式
        type: String,
        default: 'Y-M-D'
      },
      valueFormat: String,         // 日期返回值格式，Y-M-D H:I:S 不传则返回日期对象
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
    data () {
      return {
        currentValue: this.value === undefined ? '' : this.value,    // 默认值
        startValue: Array.isArray(this.value) ? this.value[0] : null,// 开始默认值
        endValue: Array.isArray(this.value) ? this.value[1] : null,  // 结束默认值

        pickerValue: [],                                            // 日期选择框默认值
        pickerStartValue: [],                                       // 开始日期选择框默认值
        pickerEndValue: [],                                         // 结束日期选择框默认值

        pickerOptions: {},
        pickerProp: {label: 'label', value: 'value'},   // 日期选择框类型

        ruleMessage: ''
      }
    },
    computed: {
      // 清除按钮
      showClear () {
        return this.clearable && !this.calcDisabled && (this.currentValue || this.startValue || this.endValue)
      },
      // 计算后的size
      calcSize () {
        return this.size || this.form && this.form.size || 'normal'
      },
      // 计算后的labelWidth
      calcLabelWidth () {
        return this.labelWidth || this.form && this.form.labelWidth || null
      },
      // 计算后的disabled
      calcDisabled () {
        return this.disabled !== undefined ? this.disabled : this.form && this.form.disabled !== undefined ? this.form.disabled : false
      },
      // 开始日期选择框 options
      startDatetimeOption () {
        return this.getDatetimeOption('start')
      },
      // 结束日期选择框 options
      endDatetimeOption () {
        return this.getDatetimeOption('end')
      },
      // 日期选择框 options
      datetimeOption () {
        return this.getDatetimeOption()
      },
      // 开始日期提交方法
      submitStartDate () {
        return this.submit.bind(this, 'start')
      },
      // 结束日期提交方法
      submitEndDate () {
        return this.submit.bind(this, 'end')
      },
      // 日期提交方法
      submitDate () {
        return this.submit.bind(this, null)
      }
    },
    mounted () {
      if (this.form) {
        this.form.updateItems(this);
      }
    },
    methods: {
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
      // 合并配置
      mergeOption () {
        Object.keys(defaultOptions).forEach(name => {
          this.pickerOptions[name] = this.options && this.options[name] || defaultOptions[name]
        })
      },
      // 打开选择框
      open (type) {
        if (this.calcDisabled || this.readonly) {
          return false
        }

        let picker, options = this.pickerOptions

        if (type) {
          if (type === 'start') {
            this.pickerStartValue = this.getArrayByDate(this.startValue || options.start)
          } else if (type === 'end') {
            this.pickerEndValue = this.getArrayByDate(this.endValue || options.end)
          }
          picker = this.$refs[type + '-picker']
        } else {
          this.pickerValue = this.getArrayByDate(this.currentValue || options.start)
          picker = this.$refs.picker
        }

        picker.setChildren(null, -1)
        picker.open()
      },
      // 关闭选择框
      cancel () {
        this.$emit('cancel')
      },

      getDateTime (dateString) {
        let date = getDateFromString(dateString)
        if (!date && dateString && this.type === 'time') {
          let matchTime = /\d{1,2}(:\d{1,2}){1,2}/.exec(dateString)
          if (matchTime) {
            date = new Date()
            date.setHours.apply(date, matchTime[0].split(':'))
          }
        }
        return date
      },
      getLabelFormat (date) {
        let dateObj = this.getDateTime(date)
        if (this.format) {
          return getDateString(dateObj, this.format)
        } else if (this.valueFormat) {
          return getDateString(dateObj, this.valueFormat)
        } else {
          return dateObj
        }
      },
      getValueFormat (date) {
        if (this.valueFormat) {
          return getDateString(date, this.valueFormat)
        } else if (this.format) {
          return getDateString(date, this.format)
        } else {
          return date
        }
      },
      getDateByArray (result) {
        let date = new Date()
        if (/^(month|date|datetime)$/i.test(this.type)) {
          date.setFullYear(result[0], result[1], result[2] || 1)
        }
        if (/^(time|datetime)$/i.test(this.type)) {
          date.setHours(result[result.length - 2], result[result.length - 1], 0, 0)
        }
        return date
      },
      getArrayByDate (dateStr) {
        let date = this.getDateTime(dateStr)
        if (!date) {
          return []
        }

        return [
          /^(month|date|datetime)$/i.test(this.type) ? date.getFullYear() : null,
          /^(month|date|datetime)$/i.test(this.type) ? date.getMonth() : null,
          /^(date|datetime)$/i.test(this.type) ? date.getDate() : null,
          /^(time|datetime)$/i.test(this.type) ? date.getHours() : null,
          /^(time|datetime)$/i.test(this.type) ? date.getMinutes() : null
        ].filter(item => item !== null)
      },
      // 时间日期菜单选项
      getDatetimeOption (action) {
        return [
          /^(month|date|datetime)$/i.test(this.type) && this.optionMethod(action, this.optionList.bind(this, 'year', '年', null, null)).bind(this) || null,
          /^(month|date|datetime)$/i.test(this.type) && this.optionMethod(action, this.optionList.bind(this, 'month', '月', 0, 11)).bind(this) || null,
          /^(date|datetime)$/i.test(this.type) && this.optionMethod(action, this.optionList.bind(this, 'date', '日', 1, null)).bind(this) || null,
          /^(time|datetime)$/i.test(this.type) && this.optionMethod(action, this.optionList.bind(this, 'hour', '时', 0, 23)).bind(this) || null,
          /^(time|datetime)$/i.test(this.type) && this.optionMethod(action, this.optionList.bind(this, 'minute', '分', 0, 59)).bind(this) || null
        ].filter(item => item !== null)
      },
      optionMethod (action, method) {
        if (action) {
          if (action === 'start') {
            return function (...args) {
              return method(this.pickerOptions.start, this.endValue || this.pickerOptions.end, ...args)
            }
          } else if (action === 'end') {
            return function (...args) {
              return method(this.startValue || this.pickerOptions.start, this.pickerOptions.end, ...args)
            }
          }
        } else {
          return function (...args) {
            return method(this.pickerOptions.start, this.pickerOptions.end, ...args)
          }
        }
      },
      optionList (name, label, defaultMinDate, defaultMaxDate, minDate, maxDate, ...args) {
        let parentVal = args.map(item => item ? item.value : '-').join('-')
        let minDateArr = this.getArrayByDate(minDate)
        let maxDateArr = this.getArrayByDate(maxDate)
        let step = 1

        if (/^(hour|minute)$/.test(name) && this.pickerOptions.timeStep) {
          let [hourStep, minuteStep] = this.pickerOptions.timeStep.split(':').map(item => Number(item))
          if (name === 'hour') {
            step = hourStep
          }
          if (name === 'minute') {
            step = minuteStep
          }
          if (step < 1) {
            step = 1
          }
        }

        if (name === 'date' && args[0] && args[1]) {
          defaultMaxDate = getMonthDays(args[0].value, args[1].value + 1) || 30
        }

        let min = !args.length || new RegExp(`^${parentVal}`).test(minDateArr.join('-')) ? minDateArr[args.length] : defaultMinDate
        let max = !args.length || new RegExp(`^${parentVal}`).test(maxDateArr.join('-')) ? maxDateArr[args.length] : defaultMaxDate
        if (name === 'hour' && min > max) {
          max += 24
        }

        let result = []
        for (let i = min; i <= max; i += step) {
          let val = i
          let text
          if (name === 'hour') {
            val %= 24
          }
          if (name === 'month') {
            text = val + 1 + label
          } else {
            text = val + label
          }
          result.push({label: text, value: val})
        }
        return result
      },

      submit (action, result) {
        let date = this.getDateByArray(result)
        let value = this.getValueFormat(date)

        if (action) {
          if (action === 'start') {
            // 赋值表单
            this.startValue = value
          } else {
            // 赋值表单
            this.endValue = value
          }
          // 触发 Pick 事件
          this.pickerOptions.onPick({start: this.startValue, end: this.endValue, type: action})

          // 如果开始值和结束值都集齐了则修改
          if (this.startValue && this.endValue) {
            this.setCurrentValue([this.startValue, this.endValue])
          }
        } else {
          // 赋值表单
          this.setCurrentValue(value)
        }
        this.$emit('-pl-change', this.currentValue)
        this.$emit('change', this.currentValue)
      },

      setCurrentValue (value) {
        if (value === this.currentValue) {
          return false
        }
        this.currentValue = value

        if (this.isRange) {
          this.startValue = Array.isArray(value) ? value[0] : null
          this.endValue = Array.isArray(value) ? value[1] : null
        }
        this.validate()
      },
      clear () {
        this.$emit('-pl-change', '')
        this.$emit('change', '')
        this.$emit('clear')
        this.setCurrentValue(null)
      }
    },
    watch: {
      'value': {
        handler (val) {
          this.setCurrentValue(val)
        },
        deep: true
      },
      'options': {
        handler () {
          this.mergeOption()
        },
        immediate: true
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

  .pl-datetime {
    background-color: var(--input-bg);
    padding: 0 1.2em;
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
      padding: 0 0.4em;

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
