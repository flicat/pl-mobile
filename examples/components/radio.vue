<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-radio v-model="value" :options="data"></pl-radio>
    <pl-radio v-model="value" :options="data" button></pl-radio>

    <h3>尺寸大小</h3>
    <pl-radio v-model="value" :options="data" size="small"></pl-radio>
    <pl-radio v-model="value" :options="data" size="normal"></pl-radio>
    <pl-radio v-model="value" :options="data" size="large"></pl-radio>


    <h3>显示label</h3>
    <pl-radio v-model="value" :options="data" label="请选择："></pl-radio>


    <h3>禁用</h3>
    <pl-radio v-model="value" :options="data" label="请选择：" disabled></pl-radio>
    <pl-radio v-model="value" :options="data" label="请选择：" button disabled></pl-radio>


    <h3>必填</h3>
    <pl-radio v-model="value" :options="data" label="请选择：" :rules="rules" required></pl-radio>

    <h3>标题折行显示</h3>
    <pl-radio v-model="value" :options="data" label="请选择请选择请选择请选择请选择请选择：" :rules="rules" wrap></pl-radio>


    <h3>竖排样式</h3>
    <pl-radio v-model="value" :options="data" label="请选择：" :rules="rules" vertical></pl-radio>

    <h3>前置图标</h3>
    <pl-radio v-model="value" :options="data" label="请选择：" :rules="rules" wrap required>
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
    </pl-radio>
    <pl-radio v-model="value" :options="data" label="请选择：" :rules="rules" required>
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
    </pl-radio>

    <h3>自定义子节点</h3>
    <pl-radio v-model="value" :options="data" label="单选：" labelWidth="4em" @change="onChange">
      <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
    </pl-radio>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: [],
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: true},
          {label: '选项3', value: 3, disabled: false}
        ],
        rules: [{required: true, message: '请选择', trigger: 'change'}]
      }
    },
    methods: {
      onChange () {
        console.log('onChange::', this.value)
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-radio {
    border-bottom: 1px dotted #ddd;
  }
</style>
