<template>
  <div class="content">
    <pl-cell :span="['6em', '6em', '6em', '6em', '6em', 1]" gap="15px" justifyContent="start">
      <span><pl-button type="default">默认按钮</pl-button></span>
      <span><pl-button type="primary">主要按钮</pl-button></span>
      <span><pl-button type="success">成功按钮</pl-button></span>
      <span><pl-button type="warning">警告按钮</pl-button></span>
      <span><pl-button type="danger">危险按钮</pl-button></span>
    </pl-cell>

    <pl-cell :span="['6em', '6em', '6em', '6em', '6em', 1]" gap="15px" justifyContent="start">
      <span><pl-button round>圆角按钮</pl-button></span>
      <span><pl-button type="primary" round>主要按钮</pl-button></span>
      <span><pl-button type="success" round>成功按钮</pl-button></span>
      <span><pl-button type="warning" round>警告按钮</pl-button></span>
      <span><pl-button type="danger" round>危险按钮</pl-button></span>
    </pl-cell>

    <pl-cell :span="['6em', '6em', '6em', '6em', '6em', 1]" gap="15px" justifyContent="start">
      <span><pl-button disabled>默认按钮</pl-button></span>
      <span><pl-button type="primary" disabled>主要按钮</pl-button></span>
      <span><pl-button type="success" disabled>成功按钮</pl-button></span>
      <span><pl-button type="warning" disabled>警告按钮</pl-button></span>
      <span><pl-button type="danger" disabled>危险按钮</pl-button></span>
    </pl-cell>

    <pl-cell :span="['6em', '6em', 1]" gap="15px" justifyContent="start">
      <span><pl-button type="text">文字按钮</pl-button></span>
      <span><pl-button type="text" disabled>文字按钮</pl-button></span>
    </pl-cell>

    <pl-cell :span="['6em', '6em', '10em', 1]" gap="15px" justifyContent="start">
      <span><pl-button>默认按钮</pl-button></span>
      <span><pl-button size="small">小型按钮</pl-button></span>
      <span><pl-button size="lager">大型按钮</pl-button></span>
    </pl-cell>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
.content {
  /deep/ .pl-cell {
    width: 100%;
    margin: 15px 30px;
  }
}
</style>
