<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-tabs v-model="active" type="card" @change="onChange">
      <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name">这里是{{item.label}}</pl-tab-item>
    </pl-tabs>
    <pl-tabs v-model="active" type="border-card" @change="onChange">
      <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name">这里是{{item.label}}</pl-tab-item>
    </pl-tabs>
    <pl-tabs v-model="active" type="button" @change="onChange">
      <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name">这里是{{item.label}}</pl-tab-item>
    </pl-tabs>

    <h3>选项卡所在位置</h3>
    <pl-tabs v-model="active" type="card" position="top" @change="onChange">
      <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name">这里是{{item.label}}</pl-tab-item>
    </pl-tabs>


    <pl-tabs v-model="active" type="button" position="right" @change="onChange">
      <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name">这里是{{item.label}}</pl-tab-item>
    </pl-tabs>

    <pl-tabs v-model="active" type="border-card" position="bottom" @change="onChange">
      <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name">这里是{{item.label}}</pl-tab-item>
    </pl-tabs>

    <pl-tabs v-model="active" type="card" position="left" @change="onChange">
      <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name">这里是{{item.label}}</pl-tab-item>
    </pl-tabs>


    <h3>自定义标题</h3>
    <pl-tabs v-model="active" type="card">
      <pl-tab-item v-for="item in data" :name="item.name" :disabled="item.disabled" :key="item.name">
        <span slot="title">--{{item.label}}--</span>
        <span>{{item.label}}</span>
      </pl-tab-item>
    </pl-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 'tab1',
        data: [
          {label: '选项1', name: 'tab1'},
          {label: '选项2', name: 'tab2'},
          {label: '选项3', name: 'tab3'},
          {label: '选项4', name: 'tab4'},
          {label: '选项5', name: 'tab5'}
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
  .pl-tabs {
    margin-bottom: 50px;
  }
</style>
