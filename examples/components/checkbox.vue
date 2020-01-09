<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-checkbox v-model="value" :options="data" />

    <h3>显示label的用法</h3>
    <pl-checkbox v-model="value" :options="data" label="请选择：" labelWidth="5em" />

    <h3>表单验证</h3>
    <pl-checkbox v-model="value" :options="data" :rules="rules" required ref="checkbox" />

    <h3>竖排样式</h3>
    <pl-checkbox v-model="value" vertical :options="data" />

    <h3>按钮样式</h3>
    <pl-checkbox v-model="value" button :options="data" />
    <pl-checkbox v-model="value" button vertical :options="data" />

    <h3>开关按钮</h3>
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false">开关</pl-checkbox>

    <h3>自定义子项</h3>
    <pl-checkbox v-model="value" :options="data">
      <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
    </pl-checkbox>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        boolValue: true,
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
      submit () {
        this.$refs.checkbox.validate().then(() => {
          // 提交
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
