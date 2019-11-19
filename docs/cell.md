## cell 列布局

### 基础用法

```html
<pl-cell :span="[1, 1]">
  <p>段落1</p>
  <p>段落2</p>
</pl-cell>
```

### 定义具体宽度

```html
<pl-cell :span="['50%', '4rem']">
  <p>段落1</p>
  <p>段落2</p>
</pl-cell>
```

### 定义间隔

```html
<pl-cell :span="[1, 1]" gap="20px">
  <p>段落1</p>
  <p>段落2</p>
</pl-cell>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction | 排列方式   | string  |   column / row            |    row     |
| span      | 栏数   | Array    | —   |     —    |
| gap       | 间隔   | string    | — | —   |
| justifyContent | 横向排列方式   | string    | stretch / start / end / center / space-between / space-around / space-evenly | space-evenly   |
| alignContent  | 纵向排列方式    | string   | stretch / start / end / center / space-between / space-around / space-evenly   | center   |

### Slots
| name      | 说明    | 
|---------- |-------- |
| (default)     |   内容   |
