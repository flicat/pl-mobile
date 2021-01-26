<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-select v-model="value1" :options="data" @change="change"></pl-select>
    <pl-select v-model="value2" :options="data" @change="change2" multiple></pl-select>

    <h3>尺寸选择</h3>
    <pl-select placeholder="请选择选项" v-model="value1" :options="data" @change="change" size="large" clearable></pl-select>
    <pl-select placeholder="请选择选项" v-model="value2" :options="data" @change="change2" size="small" multiple clearable></pl-select>

    <h3>表单校验</h3>
    <pl-select label="请选择：" ref="select" v-model="value1" :options="data" @change="change" :rules="rules" clearable></pl-select>

    <h3>禁用</h3>
    <pl-select v-model="value1" :options="data"  @change="change" disabled></pl-select>

    <h3>折行显示</h3>
    <pl-select label="请选择请选择请选择请选择请选择请选择请选择请选择请选择：" placeholder="请选择选项" v-model="value1" :options="data" @change="change" :rules="rules" clearable wrap></pl-select>
    <pl-select label="请选择：" placeholder="请选择选项" v-model="value2" :options="data" @change="change2" :rules="rules" multiple clearable wrap required></pl-select>

    <h3>自定义选项</h3>
    <pl-select label="请选择：" placeholder="请选择" v-model="value1" :options="data" @change="change" :rules="rules" clearable required>
      <template v-slot="scope">
        <span>{{scope.item.label}}-{{scope.item.value}}</span>
      </template>
    </pl-select>

    <h3>前后图标</h3>
    <pl-select label="请选择：" placeholder="请选择" v-model="value1" :options="data" @change="change" :rules="rules" clearable required>
       <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
      <pl-icon name="icon-people_fill" fill="#999" slot="append"></pl-icon>
    </pl-select>

    <br/><br/><br/>
    <pl-cell :span="[1]">
      <pl-button type="primary" @click="submit">提交</pl-button>
    </pl-cell>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value1: null,
        value2: [],
        rules: [{required: true, message: '请选择', trigger: 'change'}],
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: false},
          {label: '选项3', value: 3, disabled: true},
          {label: '选项4', value: 4, disabled: false},
          {label: '选项5', value: 5, disabled: false},
          {label: '选项6', value: 6, disabled: false}
        ]
      }
    },
    methods: {
      submit () {
        this.$refs.select.validate().then(() => {
          // 提交
        })
      },
      change () {
        console.log('change::', this.value1)
      },
      change2 () {
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
