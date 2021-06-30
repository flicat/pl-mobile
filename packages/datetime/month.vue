<template>
  <div :class="['pl-datetime-popup', show ? '' : 'hidden']">
    <div class="month-wrap">
      <div class="month-list">
        <div class="month-item" v-for="month in yearList" :key="month.title">
          <div class="title-date">{{month.title}}</div>
          <div class="date-list">
            <div v-for="date in month.dateArr" :key="date.timeStamp" @click="onTapDate(date)" :class="['date-item', date.status, date.disabled ? 'disabled' : '']">
              <span class="date-label">{{date.label}}月</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrap">
      <button class="btn-submit" type="primary" @click="submit">选择月份</button>
    </div>
  </div>
</template>

<script>
import {
  getDateFromString,
  getMonthDiff
} from '../../src/assets/utils'

// 日历默认配置信息
const defaultOption = {
  value: null,        // 默认日期（单选）
  startValue: null,        // 默认开始日期（范围）
  endValue: null,          // 默认结束日期（范围）
  min: 0,                 // 日历最小年份
  max: 5,                 // 日历最大年份
  dateLabel: '',          // 日期下标（单选）
  startLabel: '开始',     // 日期下标（范围）
  endLabel: '结束',       // 日期下标（范围）
  isRange: false,         // 是否是范围选择
  selectRange: null,      // 月份可选最大范围
  disabledDate() {       // 不可选日期
    return false
  }
}

export default {
  name: 'plMonthPopup',
  componentName: 'plMonthPopup',
  data() {
    return {
      options: Object.assign({}, defaultOption),
      yearList: [],
      show: false
    }
  },
  methods: {
    // 提取日期
    getMonthValue(dateStr) {
      if (dateStr) {
        let date = getDateFromString(dateStr)
        if (date) {
          date.setHours(0, 0, 0, 0)
          return +date
        }
      }
      return null
    },
    // 初始化配置
    open(options) {
      Object.assign(this.options, defaultOption, options)
      if (this.options.isRange) {
        this.options.startValue = this.getMonthValue(this.options.startValue)
        this.options.endValue = this.getMonthValue(this.options.endValue)
      } else {
        this.options.value = this.getMonthValue(this.options.value)
      }

      this.createCalendar()
      this.show = true
    },
    // 关闭日历
    close() {
      this.show = false
    },
    // 生成日历
    createCalendar() {
      let { min, max } = this.options
      let nowYear = (new Date()).getFullYear()

      let yearList = []
      let minYear = nowYear + Math.min(min, max)
      let maxYear = nowYear + Math.max(min, max)

      for (let i = minYear; i <= maxYear; i++) {
        let monthDate = this.createYear(i)
        yearList.push(monthDate)
      }

      this.yearList = yearList
    },
    // 生成年份
    createYear(diff) {
      let _options = this.options
      let year = {
        title: diff + '年',    // 月份标题
        dateArr: []             // 日期数组
      }
      for (let i = 1; i <= 12; i++) {
        let timeStamp = +getDateFromString([diff, i, 1].join('-'))
        year.dateArr.push({
          label: i,
          timeStamp,
          _options,
          // 日期状态，禁用、已选择、区间
          get status() {
            let { isRange, startValue, endValue, value } = this._options
            if (value === this.timeStamp ||
              startValue === this.timeStamp ||
              endValue === this.timeStamp) {
              return 'current'
            }
            if (isRange &&
              startValue &&
              endValue &&
              startValue < this.timeStamp &&
              endValue > this.timeStamp) {
              return 'active'
            }
            return 'normal'
          },
          // 是否禁用
          get disabled() {
            let { disabledDate, selectRange, isRange, startValue, endValue } = this._options

            let disabled = typeof disabledDate === 'function' ? disabledDate.call(this._options, this.timeStamp) : false
            if (isRange && selectRange > 0 && startValue) {
              // 超出指定范围的日期
              let daysDiff = Math.abs(getMonthDiff(this.timeStamp, startValue))
              if (startValue && !endValue) {
                return disabled || daysDiff > selectRange
              }
            }
            return disabled
          }
        })
      }

      return year
    },
    // 日期点击事件
    onTapDate({ timeStamp, disabled } = {}) {
      if (!timeStamp || disabled) {
        return false
      }
      let { isRange, startValue, endValue } = this.options

      if (isRange) {
        if (endValue || !startValue) {
          this.options.startValue = timeStamp
          this.options.endValue = null
        } else {
          if (timeStamp < startValue) {
            this.options.startValue = timeStamp
            this.options.endValue = startValue
          } else {
            this.options.endValue = timeStamp
          }
        }
      } else {
        this.options.value = timeStamp
      }
    },

    // 提交结果
    submit() {
      let { value, startValue, endValue, isRange } = this.options
      // 如果选择了禁用日期则不能提交
      if (this.yearList.some(month => month.dateArr.some(date => date.disabled && /current|active/.test(date.status)))) {
        return false
      }
      // 日期范围没有选择不能提交
      if (isRange && (!startValue || !endValue)) {
        return false
      }

      let result = isRange ? [startValue, endValue] : value
      // 直接唤起的回调
      if (typeof this.options.callback === 'function') {
        this.options.callback(result)
      }

      this.$emit('submit', result)
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../src/assets/less/mixin.less";

.pl-datetime-popup {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--datetime-bg);

  &.hidden {
    display: none;
  }

  .month-wrap {
    width: 100%;
    flex: 1;
    overflow: scroll;

    .month-item {
      .padding-top(25);

      .title-date {
        .font-size(15);
        color: var(--info-text);
        font-weight: 700;
        .margin-bottom(7);
        text-align: center;
      }
      .date-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        .date-item {
          text-align: center;
          .height(60);
          .line-height(60);
          color: var(--info-text);

          &.current {
            background: var(--datetime-current-bg);
            border-radius: 2px;
            color: var(--datetime-current-text);
          }
          &.active {
            background: var(--datetime-active-bg);
            border-radius: 2px;
          }
          &.disabled {
            color: var(--datetime-disabled-text);
          }
          .date-label {
            .font-size(15);
            font-weight: 700;
          }
        }
      }
    }
  }
  .btn-wrap {
    width: 100%;
    .height(60);
    display: flex;
    border-top: 1px solid var(--datetime-button-top-border);

    .btn-submit {
      .width(320);
      .height(44);
      .line-height(44);
      text-align: center;
      .font-size(15);
      font-weight: normal;
      color: var(--datetime-button-text-color);
      margin: auto;
      padding: 0;
      background: var(--datetime-button-bg);
      .border-radius(5);
      border: 0 none;
      outline: 0 none;
    }
  }
}
</style>
