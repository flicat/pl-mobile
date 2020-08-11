## tab 选项卡

### 基础用法

```html
<template>
  <pl-tabs v-model="active" type="button">
    <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name">
      这里是{{item.label}}
    </pl-tab-item>
  </pl-tabs>
</template>
<script>
  export default {
    data () {
      return {
        active: 'tab1',
        data: [
          {label: '选项1', name: 'tab1', disabled: false},
          {label: '选项2', name: 'tab2', disabled: false},
          {label: '选项3', name: 'tab3', disabled: true}
        ]
      }
    }
  }
</script>
```

### 侧边菜单

```html
<template>
  <pl-tabs v-model="active" type="button" position="left">
    <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled">{{item.label}}</pl-tab-item>
  </pl-tabs>
</template>
<script>
  export default {
    data () {
      return {
        active: 'tab1',
        data: [
          {label: '选项1', name: 'tab1', disabled: false},
          {label: '选项2', name: 'tab2', disabled: false},
          {label: '选项3', name: 'tab3', disabled: true}
        ]
      }           
    }
  }
</script>
```



### 自定义标题

```html
<template>
  <pl-tabs v-model="active" type="card" position="right">
    <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :key="item.name">
      <span slot="title">--{{item.label}}--</span>
      <span>{{item.label}}</span>
    </pl-tab-item>
  </pl-tabs>
</template>
<script>
  export default {
    data () {
      return {
        active: 'tab1',
        data: [
          {label: '选项1', name: 'tab1'},
          {label: '选项2', name: 'tab2'},
          {label: '选项3', name: 'tab3'}
        ]
      }           
    }
  }
</script>
```


### Tabs Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type      | 风格类型 | String | card / border-card / button |  card   |
| position  | 选项卡所在位置 | String | top / right / bottom / left  |  top   |

### Tabs Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change     |   value更改事件   | 更改后的value | 


### TabItem Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | tab页标题 | String | —            |   —     |
| name      | 与选项卡 value 对应的标识符 | [String, Number] | —            |   —     |
| disabled  | 标签是否可点击 | Boolean | —            |  false   |


### TabItem Slots
| name      | 说明    | 
|---------- |-------- |
| (default)     |   tab页内容   |
| title     |   自定义标题   |
