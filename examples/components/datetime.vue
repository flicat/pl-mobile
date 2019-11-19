<template>
  <div class="content">
    <pl-datetime
      ref="date-picker1"
      :rules="rules"
      label="日期"
      labelWidth="4em"
      @change="onChange"
      placeholder="请选择日期"
      :options="options"
      v-model="value"
      type="datetime"
      clearable
      format="Y-M-D H:I:S">
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
      :options="options"
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
      :options="options"
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
        options: {
          onPick ({start, end, type}) {
            let startDate = getDateFromString(start)
            let endDate = getDateFromString(end)
            if (startDate && type === 'start') {
              this.startDate = startDate
              this.endDate = getRangeDate(7, 'Y-M-D', startDate)
            } else if (endDate && type === 'end') {
              this.startDate = getRangeDate(-7, 'Y-M-D', endDate)
              this.endDate = endDate
            } else {
              this.startDate = '2019-5-1'
              this.endDate = '2020-10-20'
            }
          },
          startDate: '2019-5-1',
          endDate: '2019-12-31',
          startTime: '8:30',     // 开始时间
          endTime: '8:20',       // 结束时间
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
        this.$refs['date-picker1'].validate()
        this.$refs['date-picker2'].validate()
        this.$refs['date-picker3'].validate()
      }
    }
  }
</script>

<style lang="less" scoped>
  input {
    width: 300px;
  }
</style>
