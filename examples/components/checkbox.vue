<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-checkbox v-model="value" :options="data" />
    <pl-checkbox v-model="value" :options="data" button />

    <h3>尺寸大小</h3>
    <pl-checkbox v-model="value" :options="data" size="small" />
    <pl-checkbox v-model="value" :options="data" size="normal" />
    <pl-checkbox v-model="value" :options="data" size="large" />

    <h3>显示label</h3>
    <pl-checkbox v-model="value" :options="data" label="请选择：" />
    <pl-checkbox v-model="value" :options="data" label="请选择：" wrap />

    <h3>禁用</h3>
    <pl-checkbox v-model="value" :options="data" label="请选择：" disabled />

    <h3>前置图标</h3>
    <pl-checkbox v-model="value" :options="data" label="请选择：">
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
    </pl-checkbox>
    <pl-checkbox v-model="value" :options="data" label="请选择：" wrap required>
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
    </pl-checkbox>

    <h3>竖排样式</h3>
    <pl-checkbox v-model="value" :options="data" required vertical />
    <pl-checkbox v-model="value" :options="data" label="请选择：" required vertical />

    <h3>开关按钮</h3>
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false">开关</pl-checkbox>
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false" button>开关</pl-checkbox>
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false" label="请选择："></pl-checkbox>
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false" label="请选择：" button></pl-checkbox>

    <h3>自定义子项</h3>
    <pl-checkbox v-model="value" :options="data">
      <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
    </pl-checkbox>

    <h3>必填</h3>
    <pl-checkbox v-model="value" :options="data" :rules="rules1" ref="box1" label="请选择：" required />
    <pl-checkbox v-model="boolValue" :trueValue="true" :falseValue="false" :rules="rules2" ref="box2" label="请选择：" button required></pl-checkbox>

    <pl-cell :span="[1]">
      <pl-button type="success" @click="validate">表单校验</pl-button>
    </pl-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boolValue: null,
      value: [],
      data: [
        { label: '选项1', value: 1, disabled: false },
        { label: '选项2', value: 2, disabled: true },
        { label: '选项3', value: 3, disabled: false }
      ],
      rules1: [{ required: true, message: '请选择', trigger: 'change' }],
      rules2: [{ required: true, message: '请选择', trigger: 'change', type: 'boolean' }]
    }
  },
  methods: {
    onChange() {
      console.log('onChange::', this.value)
    },
    async validate() {
      try {
        await this.$refs['box1'].validate()
        await this.$refs['box2'].validate()
        this.$toast('校验成功')
      } catch (e) {
        this.$toast('校验失败: ' + e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pl-checkbox {
  border-bottom: 1px solid #ddd;
}
</style>
