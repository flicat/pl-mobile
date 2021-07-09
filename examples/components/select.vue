<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-select v-model="value1" :options="data" @change="change"></pl-select>
    <pl-select v-model="value2" :options="data" @change="change2" multiple></pl-select>

    <h3>尺寸选择</h3>
    <pl-select placeholder="请选择选项" v-model="value1" :options="data" @change="change" size="large" clearable></pl-select>
    <pl-select placeholder="请选择选项" v-model="value2" :options="data" @change="change2" size="small" multiple clearable></pl-select>

    <h3>表单校验</h3>
    <pl-select label="请选择：" v-model="value1" :options="data" @change="change" :rules="rules1" clearable></pl-select>

    <h3>禁用</h3>
    <pl-select v-model="value1" :options="data" @change="change" disabled></pl-select>

    <h3>折行显示</h3>
    <pl-select label="请选择请选择请选择请选择请选择请选择请选择请选择请选择：" placeholder="请选择选项" v-model="value1" :options="data" @change="change" :rules="rules1" clearable wrap></pl-select>
    <pl-select label="请选择：" placeholder="请选择选项" v-model="value2" :options="data" @change="change2" :rules="rules2" ref="select1" multiple clearable wrap required></pl-select>

    <h3>自定义选项</h3>
    <pl-select label="请选择：" placeholder="请选择" v-model="value1" :options="data" @change="change" :rules="rules1" ref="select2" clearable required>
      <template v-slot="scope">
        <span>{{scope.item.label}}-{{scope.item.value}}</span>
      </template>
    </pl-select>

    <h3>前后图标</h3>
    <pl-select label="请选择：" placeholder="请选择" v-model="value1" :options="data" @change="change" :rules="rules1" ref="select3" clearable required>
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
      <pl-icon name="icon-people_fill" fill="#999" slot="append"></pl-icon>
    </pl-select>

    <br /><br /><br />
    <pl-cell :span="[1]">
      <pl-button type="success" @click="validate">表单校验</pl-button>
    </pl-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: null,
      value2: [],
      rules1: [{ required: true, message: '请选择', trigger: 'change', type: 'number' }],
      rules2: [{ required: true, message: '请选择', trigger: 'change' }],
      data: [
        { label: '选项1', value: 1, disabled: false },
        { label: '选项2', value: 2, disabled: false },
        { label: '选项3', value: 3, disabled: true },
        { label: '选项4', value: 4, disabled: false },
        { label: '选项5', value: 5, disabled: false },
        { label: '选项6', value: 6, disabled: false }
      ]
    }
  },
  methods: {
    async validate() {
      try {
        await this.$refs.select1.validate()
        await this.$refs.select2.validate()
        await this.$refs.select3.validate()
      } catch (e) {
        console.log('校验失败: ', e)
      }
    },
    change() {
      console.log('change::', this.value1)
    },
    change2() {
      console.log('change::', this.value2)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  /deep/ .pl-select {
    border-bottom: 1px solid #eee;
  }
}
</style>
