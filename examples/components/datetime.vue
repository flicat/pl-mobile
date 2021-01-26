<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-datetime placeholder="请选择日期" :options="option1" v-model="value" type="datetime"></pl-datetime>
    <pl-datetime placeholder="请选择时间" :options="option3" v-model="value3" type="time"></pl-datetime>
    <pl-datetime startPlaceholder="开始日期" endPlaceholder="结束日期" :options="option2" v-model="value2" type="datetime" isRange></pl-datetime>


    <h3>尺寸大小</h3>
    <pl-datetime label="日期：" placeholder="请选择日期" :options="option1" v-model="value" type="datetime" size="small"></pl-datetime>
    <pl-datetime label="日期：" placeholder="请选择日期" :options="option1" v-model="value" type="datetime" size="normal"></pl-datetime>
    <pl-datetime label="日期：" placeholder="请选择日期" :options="option1" v-model="value" type="datetime" size="large"></pl-datetime>



    <h3>禁用</h3>
    <pl-datetime label="日期：" placeholder="请选择日期" :options="option1" v-model="value" type="datetime" disabled></pl-datetime>



    <h3>标题换行</h3>
    <pl-datetime label="请选择一个你喜欢的日期：" placeholder="请选择日期" :options="option1" v-model="value" type="datetime"  wrap></pl-datetime>


    <h3>必填</h3>
    <pl-datetime label="日期：" ref="date-picker" placeholder="请选择日期" :options="option1" v-model="value" type="datetime" required></pl-datetime>


    <h3>图标填充</h3>
    <pl-datetime label="日期：" placeholder="请选择日期" :options="option1" v-model="value" :rules="rules" type="datetime" size="small" clearable>
      <pl-icon name="icon-time" slot="prepend"></pl-icon>
      <pl-icon name="icon-time" slot="append"></pl-icon>
    </pl-datetime>
    <p>
      <pl-button type="success" @click="validate">校验</pl-button>
    </p>
  </div>
</template>
<script>
  import {getDateFromString, getRangeDate} from "../../src/assets/utils/index";

  export default {
    data () {
      return {
        value: '2019-12-21',
        value2: ['2018-10-20', '2019-8-15'],
        value3: null,
        option1: {
          start: '2011-12-31 10:40',
          end: '2022-1-1 08:30',
          timeStep: '00:10'       // 间隔时间
        },
        option2: {
          onPick ({start, end, type}) {
            let startDate = getDateFromString(start)
            let endDate = getDateFromString(end)
            if (startDate && type === 'start') {
              this.start = startDate
              this.end = getRangeDate(7, 'Y-M-D', startDate)
            } else if (endDate && type === 'end') {
              this.start = getRangeDate(-7, 'Y-M-D', endDate)
              this.end = endDate
            } else {
              this.start = '2012-12-31 23:59'
              this.end = '2020-1-1 00:00'
            }
          },
          start: '2012-12-31 23:59',
          end: '2020-1-1 00:00'
        },
        option3: {
          start: '00:00',
          end: '23:59',
          timeStep: '00:10'       // 间隔时间
        },
        rules: [{required: true, message: '请选择', trigger: 'change'}]
      }
    },
    methods: {
      onChange (val) {
        console.log('onChange::', val)
      },
      validate () {
        this.$refs['date-picker'].validate()
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-datetime {
    outline: 1px dashed rgba(255, 0, 0, 0.2);
    margin-bottom: 0.5rem;
  }
</style>
