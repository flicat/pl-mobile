<template>
  <div class="content">
    <pl-steps :active="0" activeColor="#67c23a" showFold>
      <pl-step-item>
        <h4>步骤一的标题</h4>
        <p>步骤一的描述</p>
      </pl-step-item>
      <pl-step-item>
        <h4>步骤二的标题</h4>
        <p>步骤二的描述</p>
      </pl-step-item>
      <pl-step-item>
        <h4>步骤三的标题</h4>
        <p>步骤三的描述</p>
      </pl-step-item>
    </pl-steps>
    <hr>
    <pl-steps :active="0" activeColor="#67c23a" direction="horizontal">
      <pl-step-item>步骤一</pl-step-item>
      <pl-step-item>步骤二</pl-step-item>
      <pl-step-item>步骤三</pl-step-item>
    </pl-steps>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
h4 {
  margin: 0 0 0.5em;
  line-height: 1em;
}
</style>
