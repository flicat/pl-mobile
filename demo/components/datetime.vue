<template>
  <div class="content">
    <pl-datetime
      ref="date-picker1"
      :rules="rules"
      label="日期："
      labelWidth="4em"
      @change="onChange"
      placeholder="请选择日期"
      :options="options"
      v-model="value"
      type="datetime"
      clearable
      format="Y-M-D H:I:S"></pl-datetime>
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
      format="Y-M-D H:I:S"></pl-datetime>
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
      format="H:I:S"></pl-datetime>
    <p>
      <pl-button type="success" @click="validate">校验</pl-button>
    </p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: null,
        value2: null,
        value3: null,
        options: {
          startDate: '2017-10-20',
          endDate: '2020-5-1',
          startTime: '18:30',     // 开始时间
          endTime: '8:30',       // 结束时间
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
