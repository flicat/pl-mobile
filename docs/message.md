## message 消息弹框

### alert 弹框
#### 基础用法
```html
<script>
  export default {
    methods: {
      message () {
        this.$alert({
          title: '提示',
          message: '这个一个弹窗！',
          buttonText: '确定',
          action: () => {
            // 确定
          }
        })
      }
    }
  }
</script>
```
#### 自定义组件弹窗
```html
<script>
   import swipe from './swipe.vue'
   export default {
    methods: {
      message () {
        this.$alert({
          component: swipe,
          componentProps: {
            isMsg: true
          },
          buttonText: '确定',
          action: () => {
            // 确定
          }
        })
      }
    }
  }
</script>
```
#### 使用 Promise
```html
<script>
   import swipe from './swipe.vue'
   export default {
    methods: {
      message () {
        this.$alert({
          component: swipe,
          componentProps: {
            isMsg: true
          },
          buttonText: '确定'
        }).then(() => {
          // 确定
        })
      }
    }
  }
</script>
```
> Options.component 必须是**vue组件**， 弹窗触发 submit/cancel
> 回调时会先调用组件的 submit 方法，组件的 submit 方法可返回
> 一个 Promise 对象

### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title      | 标题       | String  | —            |   —     |
| message    | 消息内容     | String    | —   |  —    |
| component  | 子组件弹窗内容 | Object | —  | — |
| componentProps  | 子组件props | Object | —  | — |
| html       | 消息内容是否是HTML   | Boolean | —  | false |
| buttonText | 确定按钮文字   | String    | — | 好   |
| action     | 确定后回调函数  | Function | —   | —   |



### confirm 弹框
#### 基础用法
```html
<script>
  export default {
    methods: {
      message () {
        this.$confirm({
          title: '提示',
          message: '这个一个确认弹窗！',
          submitText: '确定',
          cancelText: '取消',
          submit: () => {
            // 确定
          },
          cancel: () => {
            // 取消
          }
        })
      }
    }
  }
</script>
```
#### 自定义组件弹窗
```html
<script>
   import swipe from './swipe.vue'
   export default {
    methods: {
      message () {
        this.$confirm({
          component: swipe,
          componentProps: {
            isMsg: true
          },
          submitText: '确定',
          cancelText: '取消',
          submit: () => {
            // 确定
            console.log('确定')
          },
          cancel: () => {
            // 取消
            console.log('取消')
          }
        })
      }
    }
  }
</script>
```
#### 使用 Promise
```html
<script>
  export default {
    methods: {
      message () {
        this.$confirm({
          title: '提示',
          message: '这个一个确认弹窗！',
          submitText: '确定',
          cancelText: '取消'
        }).then(() => {
          // 确定
        }).catch(() => {
          // 取消
        })
      }
    }
  }
</script>
```
> Options.component 必须是**vue组件**， 弹窗触发 submit/cancel
> 回调时会先调用组件的 submit/cancel 方法，组件的 submit/cancel 方法可返回
> 一个 Promise 对象

### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title      | 标题         | String | —  | — |
| message    | 消息内容         | String | —  | — |
| component  | 子组件弹窗内容 | Object | —  | — |
| componentProps  | 子组件props | Object | —  | — |
| html       | 消息内容是否是HTML   | Boolean | —  | false |
| submitText | 确定按钮文字  | String| —  | 确认 |
| cancelText | 取消钮文字 | String| —  | 取消 |
| submit     | 确定后回调函数 | Function | —  | — |
| cancel     | 取消后回调函数 | Function | —  | — |






### toast 提示信息

```html
<script>
  export default {
    methods: {
      message () {
        this.$toast(message[, duration, html])
      }
    }
  }
</script>
```
#### 使用 Promise

```html
<script>
  export default {
    methods: {
      message () {
        this.$toast('消息提醒1', 2000).then(() => {
          this.$toast('<strong>消息提醒2</strong>', 2000, true)
        })
      }
    }
  }
</script>
```
### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| message    | 提示信息         | String | —  | — |
| duration   | 持续时间（毫秒，可选) | Number | —  | 3000 |
| html       | 消息内容是否是HTML   | Boolean | —  | false |

