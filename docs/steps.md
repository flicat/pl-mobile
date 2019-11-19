## steps 步骤条

### 基础用法

```html
<template>
  <pl-steps :active="0">
    <pl-step-item>步骤一</pl-step-item>  
    <pl-step-item>步骤二</pl-step-item>  
    <pl-step-item>步骤三</pl-step-item>  
  </pl-steps>
</template>
```

### 横向步骤条

```html
<template>
  <pl-steps :active="0" direction="horizontal">
    <pl-step-item>步骤一</pl-step-item>  
    <pl-step-item>步骤二</pl-step-item>  
    <pl-step-item>步骤三</pl-step-item>  
  </pl-steps>
</template>
```

### Steps Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| active      | 当前步骤 | Number | —            |  0    |
| activeColor | 当前激活的颜色 | String | —            |  #67c23a  |
| direction   | 显示方向  | String | vertical / horizontal |  vertical  |
| fold        | 是否默认折叠 | Boolean | —            |  false   |

### StepItem Slots
| name      | 说明    | 
|---------- |-------- |
| (default)  |   列表子选项   |
| icon       |   步骤图标   |
