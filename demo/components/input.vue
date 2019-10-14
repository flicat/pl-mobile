<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-input type="text" v-model="value" />

    <h3>文本域</h3>
    <pl-input type="textarea" rows="5" cols="10" v-model="value" />

    <h3>表单验证</h3>
    <pl-input v-model="value" :rules="rules" required ref="input" />

  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        rules: [{required: true, message: '请输入', trigger: 'change'}]
      }
    },
    methods: {
      submit () {
        this.$refs.input.validate().then(() => {
          // 提交
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
