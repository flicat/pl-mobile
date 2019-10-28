<template>
  <div class="content">
    <pl-select ref="select" :rules="rules" v-model="value" :options="data" @change="change" @cancel="cancel">
      <template v-slot="scope">
        <span>{{scope.item.label}}-{{scope.item.value}}</span>
      </template>
    </pl-select>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        rules: [{required: true, message: '请输入', trigger: 'change'}],
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: true}
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
