<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-input placeholder="姓名、手机、电话" type="text" v-model="value" size="normal" />

    <h3>尺寸大小</h3>
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model="value" size="small" />
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model="value" size="normal" />
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model="value" size="large" />

    <h3>禁用</h3>
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model="value" disabled />
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="textarea" rows="5" v-model="value" disabled />

    <h3>标题折行</h3>
    <pl-input label="请输入请输入请输入请输入请输入请输入请输入请输入请输入请输入：" placeholder="姓名、手机、电话" type="text" v-model="value" required wrap clearable />
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="textarea" rows="5" v-model="value" required wrap clearable />

    <h3>图标填充</h3>
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model="value" required clearable>
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
      <pl-icon name="icon-people_fill" fill="#999" slot="append"></pl-icon>
    </pl-input>
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="textarea" rows="5" v-model="value" required wrap clearable>
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
      <pl-icon name="icon-people_fill" fill="#999" slot="append"></pl-icon>
    </pl-input>

    <h3>表单校验</h3>
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model="value" :rules="rules" ref="input" required clearable />

    <pl-cell :span="[1]">
      <pl-button type="success" @click="validate">表单校验</pl-button>
    </pl-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      rules: [{ required: true, message: '请输入', trigger: 'blur' }]
    }
  },
  methods: {
    async validate() {
      try {
        await this.$refs.input.validate()
        this.$toast('校验成功')
      } catch (e) {
        this.$toast('校验失败: ' + e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pl-input {
  /deep/ .pl-input-cell {
    border-bottom: 1px solid #ddd;
  }
}
</style>
