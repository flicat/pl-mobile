<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-cell :span="[1, 1]">
      <p>段落1</p>
      <p>段落2</p>
    </pl-cell>

    <h3>定义具体宽度</h3>
    <pl-cell :span="['50%', '4rem']">
      <p>段落1</p>
      <p>段落2</p>
    </pl-cell>

    <h3>定义间隔</h3>
    <pl-cell :span="[1, 1]" gap="20px">
      <p>段落1</p>
      <p>段落2</p>
    </pl-cell>

    <h3>竖向排列</h3>
    <pl-cell :span="[1, 1]" gap="5px" direction="column">
      <p>段落1</p>
      <p>段落2</p>
    </pl-cell>

    <h3>纵横交错</h3>
    <pl-cell :span="[1, 1]" gap="5px" direction="row" alignItems="stretch">
      <pl-cell :span="[1, 1]" gap="5px" direction="column">
        <p>段落1</p>
        <p>段落2</p>
      </pl-cell>
      <p>段落3</p>
    </pl-cell>
  </div>
</template>
<script>

</script>

<style lang="less" scoped>
  .content {
    p {
      margin: 0;

      &:nth-child(even) {
        background-color: #67c23a;
      }
      &:nth-child(odd) {
        background-color: #f56c6c;
      }
    }
  }
</style>
