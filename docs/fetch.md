## fetch 接口请求

### 基础用法

#### 1、定义默认配置
```
Vue.prototype.$fetchConfig({
  baseUrl: 'https://www.demo.com'
});
```

#### 2、定义接口
```
Vue.prototype.$fetchDefine({
  getLogo: {
    url: 'logo.png',
    method: 'get',
    type: 'blob'
  },
  userLogin: {
    url: 'user/login',
    method: 'post'
  }
}, 'my_api') // namespace
```

#### 3、发起一个请求
```
Vue.prototype.$fetch.my_api.getLogo({
  _: Date.now()
}).then(data => {
  console.log(data) // Blob data
})
// get https://www.demo.com/logo.png?_=1597907390637
```
#### 4、指定post请求
```
Vue.prototype.$fetch.my_api.getLogo.post().then(data => {
  console.log(data)
})
```
#### 5、自定义header
```
Vue.prototype.$fetch.my_api.getLogo.header({
  token: 'my-token'
}).get().then(data => {
  console.log(data)
})
```
#### 6、自定义配置
```
Vue.prototype.$fetch.my_api.getLogo({
  _: Date.now()
}, {
  baseUrl: 'https://www.test.com',
  url: 'my_pic.jpg',
  method: 'post',
  headers: {
    'Cookie': 'my-cookie'
  }    
}).then(data => {
  console.log(data) // Blob data
})
// get https://www.test.com/my_pic.jpg?_=1597907390637
```
#### 7、url拼接
```
Vue.prototype.$fetch.my_api.userLogin.url('jerry', '13565498754')({
  data: MyFormData
}).then(data => {
  console.log(data)
})
// post https://www.demo.com/user/login/jerry/13565498754
```
#### 8、添加一个全局结果处理函数
```
Vue.prototype.$fetchMiddleware(function (res, options) {
  res.then(data => {
    if (!data) {
      console.log('Your parameters may be incorrect')
    }
  }).catch(e => {
    console.error('network error')
  })
})
```


### 在组件中使用

```html
<script>
  export default {
    methods: {
      getLogo () {
        this.$fetch.my_api.getLogo({
          _: Date.now()
        }).then(data => {
          if (data && data.size > 0) {
            this.src = URL.createObjectURL(data)
          }
        })
      }           
    }
  }
</script>
```


### Methods
| 方法名 | 说明 | 参数 | 参数描述 |返回值 | 
| ---- | ---- | ---- | ---- | ---- |
| $fetch | 接口api对象，根据 $fetchDefine 定义 API 路径和名称 | \<data>[, options] | data：请求的数据 | fetchHandler |
| $fetchConfig | 设置默认请求配置 | \<options> | — | — |
| $fetchDefine | 定义API | \<APIMap>[, namespace] | APIMap：定义API名称和配置，格式为 {name: \<options>}，namespace：接口命名空间 | — |
| $fetchMiddleware | 添加请求结果拦截函数 | \<function> | — | Promise |


### options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| url        | 请求URL地址 | String | — | — |            
| baseUrl    | 请求URL域名 | String | — | — |            
| method     | 请求使用的方法，如 GET、POST | String | — | POST |            
| data       | 请求的数据 | Object | Object / Blob / BufferSource / FormData / URLSearchParams / USVString | — |            
| headers    | 请求的头信息 | Object | — | — |            
| type       | 请求的数据类型 | String | json / blob / arrayBuffer / formData / text | json |            
| mode       | 请求的模式 | String | cors / no-cors / same-origin | — |            
| credentials| 请求的 credentials 。为了在当前域名内自动发送 cookie ， 必须提供这个选项 | String | omit / same-origin / include | — |            
| cache      | 请求的 cache 模式 | String | default / no-store / reload / no-cache / force-cache / only-if-cached | no-cache |            
| signal     | AbortSignal 接口表示一个信号对象（ signal object ），它允许您通过 AbortController 对象与DOM请求（如Fetch）进行通信并在需要时将其中止。 | AbortController | — | — |   
| redirect   | 根据请求地址转成get请求，直接重定向URL  | Boolean | — | false |          
| onDownload | onDownload 回调方法 | Function | — | — |          


### fetchHandler
| 方法 | 说明 | 参数 | 返回值 | 
|----- |------ |-------- |------ |
| url     | url拼接 | \<string>[, string]... | fetchHandler |
| headers | 自定义请求头，会跟默认头信息合并 | \<object> |  fetchHandler |
| get     | 强制发起get请求（忽略接口定义和默认设置） |  \<data>[, options] | Promise对象  |
| post    | 强制发起post请求（忽略接口定义和默认设置） | \<data>[, options]  |  Promise对象 |

