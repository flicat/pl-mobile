## datetime 日期选择框

### 基础用法

```html
<template>
  <pl-datetime label="日期：" placeholder="请选择日期" v-model="value" format="Y-M-D"></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        value: null
      }           
    }
  }
</script>
```

### 时间选择

```html
<template>
  <pl-datetime label="时间：" placeholder="请选择时间" type="time" v-model="value" format="Y-M-D"></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        value: null
      }           
    }
  }
</script>
```

### 时间日期选择
```html
<template>
  <pl-datetime label="日期与时间：" placeholder="请选择日期与时间" type="datetime" v-model="value" format="Y-M-D"></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        value: null
      }           
    }
  }
</script>
```

### 范围选择
```html
<template>
  <pl-datetime 
   label="日期与时间："
   startPlaceholder="请选择日期与时间" 
   endPlaceholder="请选择日期与时间" 
   type="datetime"
   v-model="value" 
   format="Y-M-D H:I" 
   isRange></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        value: ['2018-10-01 10:00', '2019-10-01 10:00']
      }           
    }
  }
</script>
```

### 范围选择选项
```html
<template>
  <pl-datetime 
   label="日期与时间："
   startPlaceholder="请选择日期与时间" 
   endPlaceholder="请选择日期与时间" 
   type="datetime"
   v-model="value" 
   format="Y-M-D H:I" 
   :options="options"
   isRange></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        value: ['2018-10-01 10:00', '2019-10-01 10:00'],
        options: {
          start: '2019-5-1 00:00',
          end: '2019-12-31 23:59',
          timeStep: '00:10'     
        },
      }           
    }
  }
</script>
```

### 自定义显示格式与返回格式
```html
<template>
  <pl-datetime
   label="日期与时间："
   placeholder="请选择日期与时间"
   type="datetime"
   v-model="value"
   format="Y年M月D日"
   valueFormat="Y-M-D"></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        value: null
      }           
    }
  }
</script>
```

### 动态设置日期范围
```html
<template>
  <pl-datetime 
   label="日期与时间："
   startPlaceholder="请选择日期与时间" 
   endPlaceholder="请选择日期与时间" 
   type="datetime"
   v-model="value" 
   format="Y-M-D H:I" 
   :options="options"
   isRange></pl-datetime>
</template>
<script>
  import {getDateFromString, getRangeDate} from "../../src/assets/utils/index";
  export default {
    data () {
      return {
        value: ['2018-10-01', '2019-10-07'],
        options: {
          onPick ({start, end, type}) {
            let start = getDateFromString(start)
            let end = getDateFromString(end)
            if (start && type === 'start') {
              this.start = start
              this.end = getRangeDate(7, 'Y-M-D', start)
            } else if (end && type === 'end') {
              this.start = getRangeDate(-7, 'Y-M-D', end)
              this.end = end
            } else {
              this.start = '2019-5-1'
              this.end = '2020-10-20'
            }
          },
          start: '2019-5-1',
          end: '2019-12-31'   
        },
      }           
    }
  }
</script>
```

### 表单验证
```html
<template>
  <pl-datetime label="日期：" :rules="rules" placeholder="请选择日期" v-model="value" format="Y-M-D"></pl-datetime>
</template>
<script>
  export default {
    data () {
      return {
        value: null,
        rules: [{required: true, message: '请选择', trigger: 'change'}]
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
| type             | 日历类型 | String | month / date / time / datetime | date |
| isRange          | 是否是范围选择 | Boolean | — | false |
| placeholder      | 日期占位内容 | String | — | — |
| startPlaceholder | 范围选择时开始日期的占位内容 | String | — | — |
| endPlaceholder   | 范围选择时开始日期的占位内容 | String | — | — |
| rangeSeparator   | 选择范围时的分隔符 | String | — | 至 |
| format           | 日期显示格式 | String | 参见日期格式 | Y-M-D |
| valueFormat      | 日期返回值格式 | String | 参见日期格式 | — |
| wrap       | label是否折行显示  | boolean   | —   | false   |
| disabled         | 是否禁用状态    | boolean   | —   | false   |
| readonly         | 是否只读状态 | Boolean | — | false |
| clearable        | 是否显示清除按钮 | boolean | —      |  false    |
| required         | 必填红色*号    | boolean   | —   | false   |
| label            | label文字    | string   | —   | —   |
| labelWidth       | label宽度    | string   | —   | —   |

### options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| onPick    | 日期选择事件，只在日期范围选择有效 | Function | — | — |
| start | 开始日期时间 | String / Date | — | 5年前 |
| end   | 结束日期时间 | String / Date | — | 5年后 |
| timeStep  | 时间间隔 | String | — | — |

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
