## list 列表

### 基础用法

```html
<template>
  <pl-list :loading="loading" :finished="finished">
    <p v-for="item in data" :key="item.value">{{item.label}}</p>  
  </pl-list>
</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        finished: false,
        data: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2}
        ]
      }           
    }
  }
</script>
```


### 下拉刷新

```html
<template>
  <pl-list :loading="loading" :finished="finished" @refresh="reload">
    <p v-for="item in data" :key="item.value">{{item.label}}</p>  
  </pl-list>
</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        finished: false,
        data: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2}
        ]
      }           
    },
    methods: {
      reload () {
        this.finished = false
        // load date
      }
    }
  }
</script>
```



### 上拉加载

```html
<template>
  <pl-list :loading="loading" :finished="finished" @load="load">
    <p v-for="item in data" :key="item.value">{{item.label}}</p>  
  </pl-list>
</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        finished: false,
        data: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2}
        ]
      }           
    },
    methods: {
      load () {
        // load date
      }
    }
  }
</script>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| loading      |  是否处于加载状态，加载过程中不触发load事件   | Boolean | —    | false |
| finished     | 是否已加载完成，加载完成后不再触发load事件 | Boolean | —            | false |
| loadingText  | 加载过程中的提示文字| String | —            | 加载中... |
| finishedText | 加载完成后的提示文字 | String | —            | 加载完成 |
| errorText    | 加载失败后的提示文字 | String | —            | 加载失败 |
| topButton    | 是否显示返回顶部按钮 | Boolean | —            | false |

### Slots
| name      | 说明    | 
|---------- |-------- |
| (default)     |   列表项   |


### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| refresh     |   下拉刷新事件   | — | 
| load     |   上拉加载事件   | — | 


