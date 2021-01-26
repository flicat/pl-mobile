<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-range v-model="value" :min="0" :max="100" :step="1" @change="onChange"></pl-range>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange"></pl-range>

    <h3>尺寸大小</h3>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" size="small"></pl-range>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" size="normal"></pl-range>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" size="large"></pl-range>

    <h3>标题换行</h3>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" wrap></pl-range>

    <h3>禁用</h3>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" disabled></pl-range>

    <h3>必填</h3>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" required></pl-range>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" required wrap></pl-range>

    <h3>图标填充</h3>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" required>
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
      <span slot="append">{{value}}%</span>
    </pl-range>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" required wrap>
      <pl-icon name="icon-dingwei" fill="#999" slot="prepend"></pl-icon>
      <span slot="append">{{value}}%</span>
    </pl-range>

    <h3>自定义滑块</h3>
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" required>
      <span slot="thumb" class="thumb">{{value}}%</span>
    </pl-range>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: 0
      }
    },
    methods: {
      onChange () {
        console.log('onChange::', this.value)
      }
    }
  }
</script>

<style lang="less" scoped>
  .thumb {
    padding: 0.2em 0.5em;
    border-radius: 0.5rem;
    text-align: center;
    background-color: #5fd3ff;
    color: #fff;
    transform: translate(-50%, -50%);
  }
</style>
