## 移动端UI框架 
*（未完成）*

#### git模块
> 安装：
```
npm i git+http://120.78.240.72:8012/gitlab/liyuelong/ui-mobile.git --save
```

> 使用：
```
import UIMobile from 'ui-mobile'
Vue.use(UIMobile)
```

#### 阿里云OSS
> 安装： 
```
<link rel="stylesheet" href="http://poly-apt-oss.oss-cn-shenzhen.aliyuncs.com/poly-frontend-oss/ui-mobile/app.css">
<script src="http://poly-apt-oss.oss-cn-shenzhen.aliyuncs.com/poly-frontend-oss/ui-mobile/index.js"></script>
```
> 使用： 
``` 
Vue.use(UIMobile)
```

### 组件列表
>- [button](./docs/button.md)
>- [cell](./docs/cell.md)
>- [checkbox](./docs/checkbox.md)
>- [collapse](./docs/collapse.md)
>- [datetime](./docs/datetime.md)
> - [form](./docs/form.md)
> - [goTopButton](./docs/goTopButton.md)
>- [icon](./docs/icon.md)
>- [input](./docs/input.md)
>- [list](./docs/list.md)
>- [loading](./docs/loading.md)
>- [message](./docs/message.md)
>- [picker](./docs/picker.md)
>- [progress](./docs/progress.md)
>- [radio](./docs/radio.md)
>- [range](./docs/range.md)
>- [select](./docs/select.md)
>- [steps](./docs/steps.md)
>- [swipe](./docs/swipe.md)
>- [tabs](./docs/tabs.md)
>- [upload](./docs/upload.md)

### css全局变量
```css
:root {
  --default: #BEC5CB;
  --primary: #5074FF;
  --success: #67c23a;
  --warning: #e6a23c;
  --danger: #f56c6c;
  --primary-light: #5074FF;
  --danger-light: #FA9191;
  --default-text: #1E3259;
  --info-text: #1D3456;
  --primary-text: #9898B6;
  --success-text: #3D7D11;
  --warning-text: #DE5E05;
  --error-text: #FF5555;
  --overtime: #FFE7E7;
  --progress: #CEF5CA;
  --not-started: #FFEAC7;
  --disabled: #E2E5F0;
  --tag-bg: #9898B6;
}
```
