/* 將字符串转换成日期对象
 * @param {Date, String} dateStr
 */
export function getDateFromString (dateStr) {
  let date = null

  if (dateStr instanceof Date) {
    date = new Date(dateStr)
  } else if (/^(string|number)$/.test(typeof dateStr)) {
    // 匹配日期
    let matchDate = /(\d{4})([年/-])(\d{1,2})(月|\2)(\d{1,2})/.exec(dateStr)

    if (matchDate) {
      date = new Date([matchDate[1], matchDate[3], matchDate[5]].join('/'))

      // 匹配时间
      let matchTime = /\d{1,2}(:\d{1,2}){1,2}/.exec(dateStr)

      if (!!date.getTime() && matchTime && matchTime[0]) {
        date.setHours.apply(date, matchTime[0].split(':'))
      }
    } else {
      if (/^\d+$/.test(dateStr)) {
        dateStr -= 0
      }
      // 时间戳或其他格式
      date = new Date(dateStr)
    }
  }

  return String(date) === 'Invalid Date' ? null : date
}

/* 將日期对象转换成字符串
 * @param {Date, timestamp} date
 * @param {String} format
 */
export function getDateString (date, format = 'Y-M-D') {
  date = getDateFromString(date)

  if (!date) {
    return ''
  }

  let padStr = function (str) {
    return String(str).padStart(2, '0')
  }

  let weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  let weeks2 = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

  if (date.toString() !== 'Invalid Date') {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let week = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    return format.replace(/y+/ig, year)
      .replace(/m+/g, month)
      .replace(/d+/g, day)
      .replace(/M+/g, padStr(month))
      .replace(/D+/g, padStr(day))
      .replace(/h+/g, hours)
      .replace(/i+/g, minutes)
      .replace(/s+/g, seconds)
      .replace(/H+/g, padStr(hours))
      .replace(/I+/g, padStr(minutes))
      .replace(/S+/g, padStr(seconds))
      .replace(/w+/g, weeks[week])
      .replace(/W+/g, weeks2[week])
  } else {
    return ''
  }
}

// 获取基于baseTime的n天后的日期，如果没有baseTime则默认今天之后的日期
export function getRangeDate (day, format, baseTime) {
  day = day | 0 || 0

  let date
  if (baseTime) {
    date = getDateFromString(baseTime)
  } else {
    date = new Date()
  }

  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + day)

  if (format) {
    return getDateString(date, format)
  } else {
    return date
  }
}

// 获取一个月的天数
export function getMonthDays (yy, mm) {
  yy = Number(yy)
  mm = Number(mm)
  let getCheckYear = function (yy) {
    return yy % 100 === 0 ? yy % 400 === 0 : yy % 4 === 0
  }

  if (getCheckYear(yy) && mm === 2) {
    return 29
  }

  if (!getCheckYear(yy) && mm === 2) {
    return 28
  }

  if (mm === 4 || mm === 6 || mm === 9 || mm === 11) {
    return 30
  }

  return 31
}

/* 比较两个日期相差的天数 */
export function getDayDiff (date1, date2) {
  let _date1 = getDateFromString(date1)
  let _date2 = getDateFromString(date2)

  _date1.setHours(0, 0, 0, 0)
  _date2.setHours(0, 0, 0, 0)

  return Math.ceil((_date2 - _date1) / 86400000)
}

/* 比较两个日期相差的月份 */
export function getMonthDiff (date1, date2) {
  let year1 = new Date(date1).getFullYear()
  let month1 = new Date(date1).getMonth()
  let day1 = new Date(date1).getDate()
  let year2 = new Date(date2).getFullYear()
  let month2 = new Date(date2).getMonth()
  let day2 = new Date(date2).getDate()

  let diff
  if (year1 === year2) {
    diff = month2 - month1
  } else {
    diff = (year2 - year1) * 12 + month2 - month1
  }

  if (day2 >= day1) {
    diff++
  }
  return diff
}

/* 类型判断 */
export function is (target, ...type) {
  let typeString = Object.prototype.toString.call(target).match(/\[object (\w+)\]/)[1].toLowerCase()
  return  type.indexOf(typeString) > -1
}

// 验证方法
/** 支持的属性
 * trigger: 'change',
 * type: 'string|number|boolean|function',
 * required: true,
 * message: '',
 * pattern: / /,
 * validator: function (rule, value, callback) {},
 * length: 0,
 * range: {min: 0, max: 0}
 */
export function validate (rule, value) {
  return new Promise((resolve, reject) => {
    if (is(rule.validator, 'function')) {
      rule.validator(rule, value, function (err) {
        if (err) {
          return reject(err.message)
        }
      })
    }

    if (!rule.required && (is(value, 'null', 'undefined') || value === '')) {
      return resolve()
    } else if (rule.required && (is(value, 'null', 'undefined') || value === '')) {
      return reject(rule.message)
    } else {
      if (is(rule.type, 'string')) {
        if (!is(value, rule.type)) {
          return reject(rule.message)
        }
        if (is(value, 'array') && !value.length) {
          return reject(rule.message)
        }
      }

      if (is(rule.pattern, 'regexp') && !rule.pattern.test(value)) {
        return reject(rule.message)
      }

      if (is(rule.length, 'number')) {
        if ((is(value, 'string') || is(value, 'number')) && String(value).length !== rule.length) {
          return reject(rule.message)
        }
        if (is(value, 'array') && value.length !== rule.length) {
          return reject(rule.message)
        }
      }
      if (is(rule.range, 'object') && is(rule.range.min, 'number') && is(rule.range.max, 'number') && (value > rule.range.max || value < rule.range.min)) {
        return reject(rule.message)
      }

      return resolve()
    }
  })
}

