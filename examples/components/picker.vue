<template>
  <div class="content">
    <pl-button @click="open" type="primary">{{value.length ? getDateString(value.join('-'), 'Y年M月D日') : '打开日期选择器'}}</pl-button>
    <pl-picker title="选择" :options="data" :prop="props" ref="picker" @submit="submit" :defaultValue="value">
      <!-- <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template> -->
    </pl-picker>
  </div>
</template>
<script>
import { getMonthDays, getDateString } from '../../src/assets/utils/index.js'

export default {
  data() {
    return {
      value: [],
      data: [
        function () {
          return new Array(20).fill('').map((i, index) => ({ label: index + 1990 + '年', value: index + 1990 }))
        },
        function () {
          return new Array(12).fill('').map((i, index) => ({ label: index + 1 + '月', value: index + 1 }))
        },
        function (year, month) {
          return new Array(getMonthDays(year, month)).fill('').map((i, index) => ({ label: index + 1 + '日', value: index + 1 }))
        }
      ],
      props: {
        label: 'label',
        value: 'value'
      }
    }
  },
  methods: {
    getDateString,
    open() {
      this.$refs.picker.open()
    },
    submit(val) {
      this.value = val
    }
  }
}
</script>
