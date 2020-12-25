<template>
  <div class="content">
    <pl-form labelWidth="5em" ref="form">
      <pl-datetime :rules="rules.datetime" label="日期" placeholder="请选择日期" v-model="dateValue" type="datetime"></pl-datetime>
      <pl-input v-model="value" :rules="rules.input" required ref="input" label="名字：" />
      <pl-select :options="options" :rules="rules.select" v-model="value" label="请选择：" required></pl-select>
      <pl-range v-model="rangeValue" :rules="rules.range" :min="0" :max="100" :step="1" label="请选择：" labelWidth="5em" required>
        <span slot="prepend">0%</span>
        <span slot="append">{{rangeValue}}%</span>
      </pl-range>
      <pl-radio v-model="value" :options="options" :rules="rules.radio" label="单选：" required></pl-radio>
      <pl-checkbox v-model="checkboxValue" :options="options" :rules="rules.checkbox" required ref="checkbox" label="多选："></pl-checkbox>
      <pl-cell :span="[1, 1]" gap="1em">
        <pl-button @click="reset" type="primary">清除验证消息</pl-button>
        <pl-button @click="submit" type="primary">提交</pl-button>
      </pl-cell>
    </pl-form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        dateValue: '',
        rangeValue: null,
        checkboxValue: [],
        options: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2},
          {label: '选项3', value: 3}
        ],
        rules: {
          datetime: [{required: true, message: '请输入', trigger: 'blur'}],
          input: [{required: true, message: '请输入', trigger: 'blur'}],
          select: [{required: true, message: '请输入', trigger: 'change'}],
          range: [{required: true, message: '请输入', trigger: 'change', type: 'number'}],
          checkbox: [{required: true, message: '请输入', trigger: 'change', type: 'array'}],
          radio: [{required: true, message: '请输入', trigger: 'change'}]
        }
      }
    },
    methods: {
      reset () {
        this.$refs['form'].clearValidate()
      },
      submit () {
        this.$refs['form'].validate().then(e => {
          this.$toast('校验成功')
        }).catch(e => {
          console.log(e)
          this.$toast('校验失败')
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
