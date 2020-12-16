## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

使用`type`、`round`和`circle`属性来定义 Button 的样式。

```html
<pl-cell>
  <pl-button type="default">默认按钮</pl-button>
  <pl-button type="primary">主要按钮</pl-button>
  <pl-button type="success">成功按钮</pl-button>
  <pl-button type="warning">警告按钮</pl-button>
  <pl-button type="danger">危险按钮</pl-button>
</pl-cell>

<pl-cell>
  <pl-button round>圆角按钮</pl-button>
  <pl-button type="primary" round>主要按钮</pl-button>
  <pl-button type="success" round>成功按钮</pl-button>
  <pl-button type="warning" round>警告按钮</pl-button>
  <pl-button type="danger" round>危险按钮</pl-button>
</pl-cell>
```

### 禁用状态

按钮不可用状态。

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<pl-cell>
  <pl-button disabled>默认按钮</pl-button>
  <pl-button type="primary" disabled>主要按钮</pl-button>
  <pl-button type="success" disabled>成功按钮</pl-button>
  <pl-button type="warning" disabled>警告按钮</pl-button>
  <pl-button type="danger" disabled>危险按钮</pl-button>
</pl-cell>
```

### 文字按钮

没有边框和背景色的按钮。

```html
<pl-button type="text">文字按钮</pl-button>
<pl-button type="text" disabled>文字按钮</pl-button>
```

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

额外的尺寸：`normal`、`small`、`lager`，通过设置`size`属性来配置它们。

```html
<pl-cell>
  <pl-button>默认按钮</pl-button>
  <pl-button size="small">小型按钮</pl-button>
  <pl-button size="lager">大型按钮</pl-button>
</pl-cell>
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   normal / small / lager            |    normal     |
| type     | 类型   | string    |   default / primary / success / warning / danger / text |     default    |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| plain     | 是否空心按钮    | boolean   | —   | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |

### Slots
| name      | 说明    | 
|---------- |-------- |
| (default)     |   按钮inner   |
