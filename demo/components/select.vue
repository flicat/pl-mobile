<template>
  <div class="content">
    <pl-select label="请选择：" labelWidth="5em" ref="select" :rules="rules" v-model="value1" :options="data" @change="change" @cancel="cancel" clearable>
      <template v-slot="scope">
        <span>{{scope.item.label}}-{{scope.item.value}}</span>
      </template>
    </pl-select>
    <pl-select label="请选择：" labelWidth="5em" v-model="value2" :options="data" @change="change" @cancel="cancel" multiple clearable></pl-select>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value1: 3,
        value2: [1, 2],
        rules: [{required: true, message: '请输入', trigger: 'change'}],
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: false},
          {label: '选项3', value: 3, disabled: true}
        ]
      }
    },
    methods: {
      submit () {
        this.$refs.select.validate().then(() => {
          // 提交
        })
      },
      change (value) {
        console.log('change::', value)
      },
      cancel () {
        console.log('cancel')
      }
    }
  }
</script>

<style lang="less" scoped>
  .content {
    background-color: #d9d9d9;
  }
</style>
