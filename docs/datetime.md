## datetime 日期选择框
### 基础用法
```html
<template>
  <pl-datetime placeholder="请选择日期" v-model="date" type="date"></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        date: null
      }
    }
  }
</script>
```

### 时间选择
```html
<template>
  <pl-datetime label="请选择时间：" v-model="time" type="time" valueFormat="H:I" clearable></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        time: null
      }
    }
  }
</script>
```

### 月份选择
```html
<template>
   <pl-datetime label="请选择月份：" v-model="month" type="month" valueFormat="Y-M" clearable></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        month: null
      }
    }
  }
</script>
```

### 自定义显示格式与返回格式
```html
<template>
  <pl-datetime placeholder="请选择日期" v-model="date" type="date" valueFormat="Y-M-D H:I:S" format="Y年M月D日" clearable></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        date: null
      }
    }
  }
</script>
```

### 范围选择
```html
<template>
  <div>
    <pl-datetime startPlaceholder="开始时间" endPlaceholder="结束时间" v-model="timeRange" type="time" valueFormat="H:I" isRange clearable></pl-datetime>
    <pl-datetime startPlaceholder="开始日期" endPlaceholder="结束日期" v-model="dateRange" type="date" isRange clearable></pl-datetime>
    <pl-datetime startPlaceholder="开始月份" endPlaceholder="结束月份" v-model="monthRange" type="month" valueFormat="Y-M" isRange clearable></pl-datetime>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        timeRange: [],
        dateRange: [],
        monthRange: []
      }
    }
  }
</script>
```

### 设置日期可选范围
```html
<template>
    <pl-datetime startPlaceholder="开始日期" endPlaceholder="结束日期" :options="dateRangeOption" v-model="dateRange" type="date" valueFormat="Y-M-D H:I:S" isRange clearable></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        dateRange: [],
        dateRangeOption: {
          min: -3,
          max: 9,
          startLabel: '入住',
          endLabel: '离店',
          format: 'Y-M-D',
          selectRange: 14,
          disabledDate(time) {
            return time >= 1619798400000 && time <= 1620144000000
          }
        }
      }
    }
  }
</script>
```

### 表单验证
```html
<template>
  <div>
    <pl-datetime label="请选择日期：" placeholder="请选择日期" v-model="date" type="date" ref="datetime" :rules="rules" required></pl-datetime>
    <p>
      <pl-button type="success" @click="validate">校验</pl-button>
    </p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        date: null,
        rules: [{ required: true, message: '请选择', trigger: 'change' }]
      }
    },
    methods: {
      validate() {
        this.$refs['datetime'].validate()
      }
    }
  }
</script>
```

### 手动打开日历
```html
<template>
  <div>
    <pl-button type="success" @click="open">打开日历</pl-button>
    <p>{{popupResult}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        popupResult: null
      }
    },
    methods: {
      async open() {
        this.popupResult = await this.$calendar({
          value: '2021-10-20 09:21',
          startValue: '2020-12-1 18:45',
          endValue: '2021-4-30 6:15',
          min: -1,
          max: 11,
          dateLabel: '选中',
          startLabel: '开始',
          endLabel: '结束',
          type: 'date',
          isRange: false,
          format: 'Y-M-D H:I:S',
          selectRange: 10,
          disabledDate() {
            return false
          }
        })
      }
    }
  }
</script>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| rules            | 验证规则 [rules](./docs/form.md)   | Array  | —            |   —     |
| size             | 尺寸  | String    | normal / large / small   |  normal    |
| options          | 选项   | Object | 参见options | 参见options |
| type             | 日历类型 | String | month / date / time | date |
| isRange          | 是否是范围选择 | Boolean | — | false |
| placeholder      | 日期占位内容 | String | — | — |
| startPlaceholder | 范围选择时开始日期的占位内容 | String | — | — |
| endPlaceholder   | 范围选择时开始日期的占位内容 | String | — | — |
| rangeSeparator   | 选择范围时的分隔符 | String | — | 至 |
| format           | 日期显示格式 | String | 参见日期格式 | Y-M-D |
| valueFormat      | 日期返回值格式 | String | 参见日期格式 | — |
| wrap             | label是否折行显示  | boolean   | —   | false   |
| disabled         | 是否禁用状态    | boolean   | —   | false   |
| readonly         | 是否只读状态 | Boolean | — | false |
| clearable        | 是否显示清除按钮 | boolean | —      |  false    |
| required         | 必填红色*号    | boolean   | —   | false   |
| label            | label文字    | string   | —   | —   |
| labelWidth       | label宽度    | string   | —   | —   |

### options
| 参数       | 必填  | 说明               | 类型          | 可选值       | 默认值   |
|---------- |-------|-------------------|-------------  |-------- | -------- |
| value        | 否 | 默认日期（单选）     | String / Date | — | — |
| startValue   | 否 | 默认开始日期（范围）  | String / Date | — | — |
| endValue     | 否 | 默认结束日期（范围）  | String / Date | — | — |
| min          | 否 | 日历生成开始月/年    | Number         | — | 0(月)，0(年) |
| max          | 否 | 日历生成结束月/年    | Number         | — | 11(月)，5(年) |
| dateLabel    | 否 | 日期下标（单选）     | String         | — | — |
| startLabel   | 否 | 日期下标（范围）     | String         | — | 开始 |
| endLabel     | 否 | 日期下标（范围）     | String         | — | 结束 |
| type         | 否 | 日历类型            | String         | month / date / time | date |
| isRange      | 否 | 是否是范围选择       | Boolean       | — | false |
| format       | 否 | 日期显示格式         | String        | 参见日期格式 | Y-M-D |
| selectRange  | 否 | 日期/月份前后可选范围 | Number        | — | — |
| disabledDate | 否 | 不可选日期/月份      | Function      | — | — |

### 日期格式
| 标识符      | 说明    |
|---------- |-------- |
| Y | 4位数年 |
| M | 2位数月 |
| D | 2位数日 |
| H | 2位数时 |
| I | 2位数分 |
| S | 2位数秒 |
| m | 月 |
| d | 日 |
| h | 时 |
| i | 分 |
| s | 秒 |

### Slots
| name      | 说明    |
|---------- |-------- |
| label     |   label文字   |
| prepend   |   输入框前置内容  |
| append    |   输入框后置内容 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change     |   value更改事件   | 更改后的value |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| validate | 表单验证方法 | — |
| clearValidate | 清除验证错误提示 | — |
