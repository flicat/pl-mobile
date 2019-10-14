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
  </div>
</template>
<script>

</script>

<style lang="less" scoped>
  .content {
    p {
      &:first-child {
        background-color: #67c23a;
      }
      &:last-child {
        background-color: #f56c6c;
      }
    }
  }
</style>
