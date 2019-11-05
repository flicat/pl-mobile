<template>
  <div class="pl-datetime" v-on="$listeners" :class="[
    calcSize ? 'pl-datetime--' + calcSize : '',
    {
      'is-disabled': calcDisabled,
      'pl-datetime--error': ruleMessage
    }
    ]">
    <div class="pl-datetime-cell">
      <div class="pl-datetime-label" :class="{'pl-datetime-label--require': required}" v-if="label" :style="{width: calcLabelWidth}">
        <slot name="label">{{label}}</slot>
      </div>
      <div class="pl-datetime-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="pl-datetime-inner">
        <div class="pl-datetime-inner-flex" v-if="isRange">
          <span v-if="startValue" class="title" @click="open('start')">{{startValue}}</span>
          <span class="placeholder" v-else @click="open('start')">{{startPlaceholder}}</span>
          <span class="range-separator">{{rangeSeparator}}</span>
          <span v-if="endValue" class="title" @click="open('end')">{{endValue}}</span>
          <span class="placeholder" v-else @click="open('end')">{{endPlaceholder}}</span>
        </div>
        <div v-else @click="open">
          <span v-if="currentValue" class="title">{{currentValue}}</span>
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
      <picker :options="datetimeOption" :defaultValue="defaultStartValue" :title="startPlaceholder" :prop="{label: 'label', value: 'value'}" @submit="submit" @cancel="cancel" ref="start-picker"></picker>
      <picker :options="datetimeOption" :defaultValue="defaultEndValue" :title="endPlaceholder" :prop="{label: 'label', value: 'value'}" @submit="submit" @cancel="cancel" ref="end-picker"></picker>
    </div>
    <div v-else>
      <picker :options="datetimeOption" :defaultValue="defaultValue" :title="placeholder" :prop="{label: 'label', value: 'value'}" @submit="submit" @cancel="cancel" ref="picker"></picker>
    </div>
  </div>
</template>

<script>
  // datetime
  import picker from '../picker/index.vue'
  import icon from '../icon/index.vue'
  import {is, validate, getDateString, getDateFromString, getMonthDays} from '../../src/assets/utils'

  // 获取日期的分割字符串
  function getDateSplitArr (string) {
    let result = getDateFromString(string)
    if (result) {
      return [result.getFullYear(), result.getMonth(), result.getDate()]
    } else {
      return []
    }
  }

  // 获取时间的分割字符串
  function getTimeSplitArr (string) {
    let result = /\d{1,2}(:\d{1,2}){1,2}/.exec(String(string))
    if (result) {
      return result[0].split(':').map(item => Number(item))
    } else {
      return []
    }
  }

  // 默认配置
  const defaultOptions = {
    onPick: () => false,   // 设置禁用状态，参数为当前日期，要求返回 Boolean Function
    startDate: (new Date().getFullYear() - 5) + '-1-1',         // 开始时间
    endDate: (new Date().getFullYear() + 5) + '-12-31',         // 结束时间
    startTime: '00:00',     // 开始时间
    endTime: '23:59',       // 结束时间
    timeStep: '00:01'       // 间隔时间
  }

  export default {
    name: 'plDatetime',
    componentName: 'plDatetime',
    components: {
      picker,
      icon
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
        defaultValue: [],                                            // 日期选择框默认值

        startValue: is(this.value, 'array') && this.value[0] || null,// 开始默认值
        endValue: is(this.value, 'array') && this.value[1] || null,  // 结束默认值
        defaultStartValue: [],                                       // 开始日期选择框默认值
        defaultEndValue: [],                                         // 结束日期选择框默认值

        fromType: null,                                              // 日期选择框类型
        ruleMessage: '',

        pickerOptions: Object.assign({}, defaultOptions, this.options),
        handlers: []
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
      // 时间日期菜单选项
      datetimeOption () {
        return [
          /^(month|date|datetime)$/i.test(this.type) && this.getYear.bind(this) || null,
          /^(month|date|datetime)$/i.test(this.type) && this.getMonth.bind(this) || null,
          /^(date|datetime)$/i.test(this.type) && this.getDate.bind(this) || null,
          /^(time|datetime)$/i.test(this.type) && this.getHour.bind(this) || null,
          /^(time|datetime)$/i.test(this.type) && this.getMinute.bind(this) || null
        ].filter(Boolean)
      },
      // 最小年
      minYear () {
        if (this.isRange && this.fromType === 'end' && this.defaultStartValue && this.defaultStartValue.length) {
          return this.defaultStartValue[0]
        } else {
          return getDateFromString(this.pickerOptions.startDate).getFullYear()
        }
      },
      // 最大年
      maxYear () {
        if (this.isRange && this.fromType === 'start' && this.defaultEndValue && this.defaultEndValue.length) {
          return this.defaultEndValue[0]
        } else {
          return getDateFromString(this.pickerOptions.endDate).getFullYear()
        }
      },
      // 最小月
      minMonth () {
        if (this.isRange && this.fromType === 'end' && this.defaultStartValue && this.defaultStartValue.length) {
          return this.defaultStartValue[1]
        } else {
          return getDateFromString(this.pickerOptions.startDate).getMonth()
        }
      },
      // 最大月
      maxMonth () {
        if (this.isRange && this.fromType === 'start' && this.defaultEndValue && this.defaultEndValue.length) {
          return this.defaultEndValue[1]
        } else {
          return getDateFromString(this.pickerOptions.endDate).getMonth()
        }
      },
      // 最小日
      minDate () {
        if (this.isRange && this.fromType === 'end' && this.defaultStartValue && this.defaultStartValue.length) {
          return this.defaultStartValue[2]
        } else {
          return getDateFromString(this.pickerOptions.startDate).getDate()
        }
      },
      // 最大日
      maxDate () {
        if (this.isRange && this.fromType === 'start' && this.defaultEndValue && this.defaultEndValue.length) {
          return this.defaultEndValue[2]
        } else {
          return getDateFromString(this.pickerOptions.endDate).getDate()
        }
      },
      // 最小时
      minHour () {
        if (this.isRange && this.fromType === 'end' && this.defaultStartValue && this.defaultStartValue.length) {
          return this.defaultStartValue[this.defaultStartValue.length - 2]
        } else {
          return Number(this.pickerOptions.startTime.split(':')[0])
        }
      },
      // 最大时
      maxHour () {
        if (this.isRange && this.fromType === 'start' && this.defaultEndValue && this.defaultEndValue.length) {
          return this.defaultEndValue[this.defaultEndValue.length - 2]
        } else {
          return Number(this.pickerOptions.endTime.split(':')[0])
        }
      },
      // 最小分
      minMinute () {
        if (this.isRange && this.fromType === 'end' && this.defaultStartValue && this.defaultStartValue.length) {
          return this.defaultStartValue[this.defaultStartValue.length - 1]
        } else {
          return Number(this.pickerOptions.startTime.split(':')[1])
        }
      },
      // 最大分
      maxMinute () {
        if (this.isRange && this.fromType === 'start' && this.defaultEndValue && this.defaultEndValue.length) {
          return this.defaultEndValue[this.defaultEndValue.length - 1]
        } else {
          return Number(this.pickerOptions.endTime.split(':')[1])
        }
      }
    },
    created () {
      if (this.isRange && is(this.value, 'array') && this.value.length) {
        this.defaultStartValue = [...getDateSplitArr(this.value[0]), ...getTimeSplitArr(this.value[0])]
        this.defaultEndValue = [...getDateSplitArr(this.value[1]), ...getTimeSplitArr(this.value[1])]
      } else {
        this.defaultValue = [...getDateSplitArr(this.value), ...getTimeSplitArr(this.value)]
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
      // 打开选择框
      open (type) {
        if (this.calcDisabled || this.readonly) {
          return false
        }

        let picker
        if (this.isRange) {
          picker = this.$refs[type + '-picker']
          this.fromType = type
        } else {
          picker = this.$refs.picker
        }

        picker.setChildren(null, -1)
        picker.open()
      },
      // 关闭选择框
      cancel () {
        this.$emit('cancel')
      },
      submit (result) {
        let date = new Date()
        if (/^(month|date|datetime)$/i.test(this.type)) {
          date.setFullYear(result[0], result[1], result[2] || 1)
        }
        if (/^(time|datetime)$/i.test(this.type)) {
          date.setHours(result[result.length - 2], result[result.length - 1], 0, 0)
        }

        let value
        if (this.valueFormat) {
          value = getDateString(date, this.valueFormat)
        } else if (this.format) {
          value = getDateString(date, this.format)
        } else {
          value = date
        }

        if (this.isRange) {
          if (this.fromType === 'start') {
            this.defaultStartValue = result
            this.startValue = value
          } else {
            this.defaultEndValue = result
            this.endValue = value
          }
          if (is(this.pickerOptions.onPick, 'function')) {
            this.pickerOptions.onPick({start: this.startValue, end: this.endValue, type: this.fromType})
          }
          if (this.startValue && this.endValue) {
            this.setCurrentValue([this.startValue, this.endValue])
          }
        } else {
          this.defaultValue = result
          this.setCurrentValue(value)
        }
      },
      clear () {
        this.$set(this, 'defaultValue', [])
        this.$set(this, 'defaultStartValue', [])
        this.$set(this, 'defaultEndValue', [])
        this.$emit('input', '')
        this.$emit('change', '')
        this.$emit('clear')
        this.setCurrentValue(null)
      },
      setCurrentValue (value) {
        if (value === this.currentValue) {
          return false
        }
        this.currentValue = value
        if (this.isRange) {
          this.startValue = is(value, 'array') && value[0] || null
          this.endValue = is(value, 'array') && value[1] || null
        }

        this.validate()
        this.$emit('input', value)
        this.$emit('change', value)
      },
      // 获取年列表
      getYear () {
        let year = []
        for (let i = this.minYear; i <= this.maxYear; i++) {
          year.push({label: i + '年', value: i})
        }
        return year
      },
      // 获取月列表
      getMonth (year) {
        let month = []
        let min = year.value === this.minYear ? this.minMonth : 0
        let max = year.value === this.maxYear ? this.maxMonth : 11
        for (let i = min; i <= max; i++) {
          month.push({label: i + 1 + '月', value: i})
        }
        return month
      },
      // 获取日列表
      getDate (year, month) {
        let date = []
        let min = year.value === this.minYear && month.value === this.minMonth ? this.minDate : 1
        let max = year.value === this.maxYear && month.value === this.maxMonth ? this.maxDate : getMonthDays(year.value, month.value + 1)
        for (let i = min; i <= max; i++) {
          date.push({label: i + '日', value: i})
        }
        return date
      },
      // 获取小时列表
      getHour (year, month, date) {
        let step = this.pickerOptions.timeStep.split(':')[0] | 0
        if (step < 1) {
          step = 1
        }

        let min = this.minHour;     // 默认开始时间/已选开始时间的小时
        let max = this.maxHour;     // 默认结束时间/已选结束时间的小时

        if (this.isRange) {
          if (this.type === 'datetime') {
            min = year.value === this.minYear &&
              month.value === this.minMonth &&
              date.value === this.minDate &&
              this.minHour || 0
            max = year.value === this.maxYear &&
              month.value === this.maxMonth &&
              date.value === this.maxDate &&
              this.maxHour || 23
          }
        }
        if (max < min) {
          max += 24
        }

        let hours = []
        for (let i = min; i <= max; i += step) {
          hours.push({label: (i % 24) + '时', value: i % 24})
        }
        return hours
      },
      // 获取分钟列表
      getMinute (yearOrHour, month, date, hour) {
        let step = this.pickerOptions.timeStep.split(':')[1] | 0
        if (step < 1) {
          step = 1
        }

        let min = this.minMinute;     // 默认开始时间/已选开始时间的小时
        let max = this.maxMinute;     // 默认结束时间/已选结束时间的小时

        if (this.isRange) {
          if (this.type === 'datetime') {
            min = yearOrHour.value === this.minYear &&
              month.value === this.minMonth &&
              date.value === this.minDate &&
              hour.value === this.minHour &&
              this.minMinute || 0
            max = yearOrHour.value === this.maxYear &&
              month.value === this.maxMonth &&
              date.value === this.maxDate &&
              hour.value === this.maxHour &&
              this.maxMinute || 59
          } else if (this.type === 'time') {
            min = yearOrHour.value === this.minHour &&
              this.minMinute || 0
            max = yearOrHour.value === this.maxHour &&
              this.maxMinute || 59
          }
        }
        if (max < min) {
          max = 60
        }

        let minutes = []
        for (let i = min; i <= max; i += step) {
          minutes.push({label: (i % 60) + '分', value: i % 60})
        }
        return minutes
      }
    },
    watch: {
      'value': {
        handler (val) {
          this.setCurrentValue(val)
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
    background-color: #fff;
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
        color: #757575;
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
      background-color: #ebebe4;
    }
  }
</style>
