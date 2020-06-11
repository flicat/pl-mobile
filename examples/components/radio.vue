<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-radio v-model="value" :options="data" label="单选：" labelWidth="4em" @change="onChange">
      <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
    </pl-radio>
    <h3>表单验证</h3>
    <pl-radio v-model="value" :options="data" :rules="rules" required ref="radio"></pl-radio>
    <h3>按钮样式</h3>
    <pl-radio v-model="value" :options="data" button></pl-radio>
    <h3>竖向排列</h3>
    <pl-radio v-model="value" :options="data" vertical></pl-radio>
    <pl-radio v-model="value" :options="data" button vertical></pl-radio>
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
