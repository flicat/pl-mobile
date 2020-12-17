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

### 竖向排列
``` 
<pl-cell :span="[1, 1]" gap="5px" direction="column"> 
  <p>段落1</p>
  <p>段落2</p> 
</pl-cell>
```

### 纵横交错
```
<pl-cell :span="[1, 1]" gap="5px" direction="row" alignItems="stretch">
  <pl-cell :span="[1, 1]" gap="5px" direction="column">
    <p>段落1</p>
    <p>段落2</p>
  </pl-cell>
  <p>段落3</p>
</pl-cell>
```
   
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction | 排列方式   | string  |   column / row            |    row     |
| span      | 栏数   | Array    | \<grid-template-columns\>, \<grid-template-rows\>   |     —    |
| gap       | 间隔   | string    |       \<grid-gap\>           | —   |
| justifyItems  | 横向排列方式   | string    |   normal / baseline / stretch / start / end / center / flex-start / flex-end / left / right / self-start / self-end / revert / legacy | normal |
| alignItems   | 纵向排列方式    | string   |   normal / baseline / flex-start / flex-end / start / end / center / self-start / self-end / stretch / baseline   | center |
| justifyContent | 横向排列方式   | string    |   normal / left / right / stretch / start / end / center / flex-start / flex-end / space-between / space-around / space-evenly / revert | normal |
| alignContent  | 纵向排列方式    | string   |   normal / baseline / stretch / start / end / center / flex-start / flex-end / space-between / space-around / space-evenly / revert   | normal |

### Slots
| name      | 说明    | 
|---------- |-------- |
| (default)     |   内容   |
