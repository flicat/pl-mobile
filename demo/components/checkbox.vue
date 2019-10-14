<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-checkbox v-model="value" :data="data" />

    <h3>显示label的用法</h3>
    <pl-checkbox v-model="value" :data="data" label="请选择：" labelWidth="5em" />

    <h3>表单验证</h3>
    <pl-checkbox v-model="value" :data="data" :rules="rules" required ref="checkbox" />

    <h3>开关按钮</h3>
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false">开关</pl-checkbox>

    <h3>自定义子项</h3>
    <pl-checkbox v-model="value" :data="data">
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
          {label: '选项2', value: 2, disabled: true}
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
