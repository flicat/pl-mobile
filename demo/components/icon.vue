<template>
  <pl-tabs v-model="active" position="left">
    <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name">
      这里是{{item.label}}
    </pl-tab-item>
  </pl-tabs>
</template>
<script>
  export default {
    data () {
      return {
        active: 'tab1',
        data: [
          {label: '选项1', name: 'tab1', disabled: false},
          {label: '选项2', name: 'tab2', disabled: false},
          {label: '选项3', name: 'tab3', disabled: true}
        ]
      }
    }
  }
</script>

<style>

</style>
