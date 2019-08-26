## message 消息弹框

### alert 弹框

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

### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title      | 标题       | String  | —            |   —     |
| message    | 消息内容     | String    | —   |  —    |
| html       | 消息内容（HTML） | String    | — | —   |
| buttonText | 确定按钮文字   | String    | — | —   |
| action     | 确定后回调函数  | Function | —   | —   |



### confirm 弹框

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
          }
          cancel: () => {
            // 取消
          }
        })
      }      
    }
  }
</script>
```

### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title      | 标题         | String | —  | — |
| message    | 消息内容         | String | —  | — |
| html       | 消息内容（HTML）   | String | —  | — |
| submitText | 确定按钮文字  | String| —  | — |
| cancelText | 取消钮文字 | String| —  | — |
| submit     | 确定后回调函数 | Function | —  | — |
| cancel     | 取消后回调函数 | Function | —  | — |




### toast 提示信息

```html
<script>
  export default {
    methods: {
      message () {
        this.$toast('消息提醒', 3000)    // 提示信息， 持续时间（可选，默认3000毫秒）
      }      
    }
  }
</script>
```


