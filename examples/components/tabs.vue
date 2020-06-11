<template>
  <div class="content">
    <pl-tabs v-model="active" type="card" @change="onChange">
      <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name">
        这里是{{item.label}}
      </pl-tab-item>
    </pl-tabs>
    <br/><br/><br/>
    <pl-tabs v-model="active" type="button" position="left">
      <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :key="item.name" :label="item.label">{{item.label}}</pl-tab-item>
    </pl-tabs>
  </div>
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
    },
    methods: {
      onChange () {
        console.log('onChange::', this.active)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
