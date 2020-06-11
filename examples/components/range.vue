<template>
  <div class="content">
    <pl-range v-model="value" :min="0" :max="100" :step="1" label="请选择：" labelWidth="5em" @change="onChange">
      <span slot="prepend">0%</span>
      <span slot="append">100%</span>
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
