<template>
  <div class="content">
    <pl-button @click="open">打开</pl-button>
    <pl-picker title="选择" :options="data" :prop="props" ref="picker" @submit="submit" :defaultValue="value">
      <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
    </pl-picker>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: [2, 6],
        data: {
          children: [
            {label: '选项1', value: 1, children: [
              {label: '子选项3', value: 3},
              {label: '子选项4', value: 4}
            ]},
            {label: '选项2', value: 2, children: [
              {label: '子选项5', value: 5},
              {label: '子选项6', value: 6}
            ]}
          ]
        },
        props: {
          label: 'label',
          value: 'value',
          children: 'children'
        }
      }
    },
    methods: {
      open () {
        this.$refs.picker.open()
      },
      submit (val) {
        this.value = val
      }
    }
  }
</script>
