<template>
  <div class="content">
    <pl-datetime
      ref="date-picker1"
      :rules="rules"
      label="日期"
      labelWidth="4em"
      @change="onChange"
      placeholder="请选择日期"
      :options="option1"
      v-model="value"
      type="datetime"
      clearable
      format="Y-M-D H:I"
      valueFormat="Y-M-D H:I:S">
      <span slot="label">日期：</span>
    </pl-datetime>
    <pl-datetime
      ref="date-picker2"
      :rules="rules"
      label="日期："
      labelWidth="4em"
      @change="onChange"
      startPlaceholder="请选择开始日期"
      endPlaceholder="请选择结束日期"
      range-separator="至"
      :options="option2"
      v-model="value2"
      type="datetime"
      isRange
      clearable
      format="Y-M-D H:I:S">
      <pl-icon name="icon-time" slot="prepend"></pl-icon>
    </pl-datetime>
    <pl-datetime
      ref="date-picker3"
      :rules="rules"
      label="时间："
      labelWidth="4em"
      @change="onChange"
      startPlaceholder="请选择开始时间"
      endPlaceholder="请选择结束时间"
      range-separator="至"
      :options="option3"
      v-model="value3"
      type="time"
      isRange
      clearable
      format="H:I:S">
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
        value: null,
        value2: null,
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
        [1, 2, 3]
        .map(i => 'date-picker' + i)
        .map(name => this.$refs[name])
        .filter(Boolean)
        .map(picker => picker.validate())
      }
    }
  }
</script>

<style lang="less" scoped>
  input {
    width: 300px;
  }
</style>
