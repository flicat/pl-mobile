<template>
  <div class="content">
    <pl-steps :active="0">
      <pl-step-item>步骤一</pl-step-item>
      <pl-step-item>步骤二</pl-step-item>
      <pl-step-item>步骤三</pl-step-item>
    </pl-steps>

    <pl-steps :active="0" direction="horizontal">
      <pl-step-item>步骤一</pl-step-item>
      <pl-step-item>步骤二</pl-step-item>
      <pl-step-item>步骤三</pl-step-item>
    </pl-steps>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>

</style>
