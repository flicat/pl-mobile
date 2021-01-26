<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-checkbox v-model="value" :options="data" />
    <pl-checkbox v-model="value" :options="data" button/>

    <h3>尺寸大小</h3>
    <pl-checkbox v-model="value" :options="data" size="small" />
    <pl-checkbox v-model="value" :options="data" size="normal" />
    <pl-checkbox v-model="value" :options="data" size="large" />

    <h3>显示label</h3>
    <pl-checkbox v-model="value" :options="data" label="请选择：" />
    <pl-checkbox v-model="value" :options="data" label="请选择：" wrap />

    <h3>禁用</h3>
    <pl-checkbox v-model="value" :options="data" label="请选择：" disabled />

    <h3>必填</h3>
    <pl-checkbox v-model="value" :options="data" :rules="rules" label="请选择：" required />

    <h3>前置图标</h3>
    <pl-checkbox v-model="value" :options="data" :rules="rules" label="请选择：">
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
    </pl-checkbox>
    <pl-checkbox v-model="value" :options="data" :rules="rules" label="请选择：" wrap required>
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
    </pl-checkbox>

    <h3>竖排样式</h3>
    <pl-checkbox v-model="value" :options="data" :rules="rules" required vertical />
    <pl-checkbox v-model="value" :options="data" :rules="rules" label="请选择：" required vertical />


    <h3>开关按钮</h3>
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false">开关</pl-checkbox>
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false" button>开关</pl-checkbox>
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false" label="请选择："></pl-checkbox>
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false" label="请选择：" button></pl-checkbox>



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
      },
      onChange () {
        console.log('onChange::', this.value)
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-checkbox {
    border-bottom: 1px solid #ddd;
  }
</style>
