<template>
  <div class="content">
    <pl-radio v-model="value" :options="data" label="单选：" labelWidth="4em">
      <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
    </pl-radio>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: [],
        data: [
          {label: '选项1', value: 1, disabled: false},
          {label: '选项2', value: 2, disabled: true},
          {label: '选项3', value: 3, disabled: false}
        ]
      }
    }
  }
</script>
