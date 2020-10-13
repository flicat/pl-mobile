## 移动端UI框架 
基于Vue的移动端UI框架

### 安装
```
npm i pl-mobile --save
```

### 使用
```
import PlMobile from 'pl-mobile'
import 'pl-mobile/lib/style/index.css'
Vue.use(PlMobile)
```
*注意：这里需要单独引入样式文件*


### 按需引入
通过使用饿了么团队开发的[`babel-plugin-component`](https://github.com/ElementUI/babel-plugin-component)
插件来实现按需引入
#### 安装插件
```
npm i babel-plugin-component -D
```
#### 配置babel
```
{
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "pl-mobile",
        "styleLibraryName": "style"
      }
    ]
  ]
}
```
#### 在项目中引用
```
<template>
  <div>
    <pl-button type="default">按钮</pl-button>
  </div>
</template>

<script>
import {fetch, button} from 'pl-mobile'
Vue.use(PlFetch)

export default {
  components: {
    'pl-button': button
  }
}
</script>
```

### 组件列表
>- [button](./docs/button.md)
> - [canvas](./docs/canvas.md)
>- [cell](./docs/cell.md)
>- [checkbox](./docs/checkbox.md)
>- [collapse](./docs/collapse.md)
>- [datetime](./docs/datetime.md)
>- [fetch](./docs/fetch.md)
>- [form](./docs/form.md)
>- [goTopButton](./docs/goTopButton.md)
>- [icon](./docs/icon.md)
>- [input](./docs/input.md)
>- [list](./docs/list.md)
>- [loading](./docs/loading.md)
>- [alert](./docs/message.md)
>- [confirm](./docs/message.md)
>- [toast](./docs/message.md)
>- [picker](./docs/picker.md)
>- [popup](./docs/popup.md)
>- [progress](./docs/progress.md)
>- [radio](./docs/radio.md)
>- [range](./docs/range.md)
>- [select](./docs/select.md)
>- [steps](./docs/steps.md)
>- [stepItem](./docs/steps.md)
>- [swipe](./docs/swipe.md)
>- [swipeItem](./docs/swipe.md)
>- [tabs](./docs/tabs.md)
>- [tabItem](./docs/tabs.md)
>- [upload](./docs/upload.md)

### css全局变量
```css
:root {
  /* global */
  --default: #BEC5CB;
  --primary: #5074FF;
  --success: #67c23a;
  --warning: #e6a23c;
  --danger: #f56c6c;

  --primary-light: #5074FF;
  --danger-light: #FA9191;

  --default-text: #1E3259;
  --info-text: #1D3456;
  --primary-text: #757575;
  --success-text: #3D7D11;
  --warning-text: #DE5E05;
  --error-text: #FF5555;

  --overtime: #FFE7E7;
  --progress: #CEF5CA;
  --not-started: #FFEAC7;
  --disabled: #E2E5F0;

  --tag-bg: #9898B6;
  --input-bg: #fff;

  /* button */
  --button-text-color: #fff;

  /* canvas */
  --canvas-bg: #ffffdc;

  /* checkbox */
  --checkbox-disabled-text: #c8c9cc;
  --checkbox-disabled-border: #dcdfe6;
  --checkbox-disabled-bg: #ebedf0;
  --checkbox-text: #333;
  --checkbox-bg: #dcdfe6;
  --checkbox-vertical-border: #f0f0f0;
  --checkbox-button-border: #dcdfe6;
  --checkbox-button-text: #fff;
  --checkbox-button-disabled-bg: #ebebe4;
  --checkbox-button-disabled-text: #999;

  /* datetime */
  --datetime-disabled-bg: #ebebe4;

  /* to-top */
  --to-top-text: #C1CEFF;

  /* list */
  --list-refresh-tip: #ccc;

  /* loading */
  --loading-text: #999;

  /* picker */
  --picker-text: #333;
  --picker-bg: #fff;
  --picker-btn-cancle: #bec5cb;
  --picker-btn-submit: #3388FF;
  --picker-border: #ebedf0;

  /* progress */
  --progress-inner: #EBEDFB;

  /* radio */
  --radio-text: #333;
  --radio-disabled-text: #c8c9cc;
  --radio-button-text: #fff;
  --radio-button-border: #dcdfe6;
  --radio-button-disabled-text: #999;
  --radio-button-disabled-bg: #ebebe4;
  --radio-vertical-border: #f0f0f0;

  /* range */
  --range-bar: #EBEDFB;
  --range-progress: #5074FF;
  --range-thumb: #fff;
  --range-text: #999;
  --range-disabled-bg: #9D9FA8;

  /* select */
  --select-color: #fff;
  --select-disabled-bg: #ebebe4;
  --select-popup-color: #333;
  --select-popup-bg: #fff;
  --select-popup-border: #ebedf0;

  /* steps */
  --steps-toggle-text: #9898B6;
  --steps-line: #F2F3F5;
  --steps-icon: #DCDEE0;

  /* tab */
  --tab-card-border: #e4e7ed;
  --tab-card-disabled-bg: #f6f6f6;
  --tab-button-active-text: #fff;
  --tab-border: #EFF2F5;

  /* upload */
  --upload-del-text: #ccc;
  --upload-add-button: #EBEDFB;
}
```
