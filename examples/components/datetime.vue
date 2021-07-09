<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-datetime placeholder="请选择日期" v-model="date" type="date"></pl-datetime>

    <h3>时间选择</h3>
    <pl-datetime label="请选择时间：" v-model="time" type="time" @change="onChange" valueFormat="H:I" clearable></pl-datetime>
    <pl-datetime startPlaceholder="开始时间" endPlaceholder="结束时间" v-model="timeRange" type="time" @change="onChange" valueFormat="H:I" isRange clearable></pl-datetime>

    <h3>日期选择</h3>
    <pl-datetime label="请选择日期：" labelWidth="8em" placeholder="请选择日期" v-model="date" type="date" @change="onChange" clearable></pl-datetime>
    <pl-datetime startPlaceholder="开始日期" endPlaceholder="结束日期" v-model="dateRange" type="date" @change="onChange" isRange clearable></pl-datetime>

    <h3>月份选择</h3>
    <pl-datetime label="请选择月份：" v-model="month" type="month" @change="onChange" valueFormat="Y-M" clearable></pl-datetime>
    <pl-datetime startPlaceholder="开始月份" endPlaceholder="结束月份" v-model="monthRange" type="month" @change="onChange" valueFormat="Y-M" isRange clearable></pl-datetime>

    <h3>自定义显示格式与返回格式</h3>
    <pl-datetime placeholder="请选择日期" v-model="date" type="date" @change="onChange" valueFormat="Y-M-D H:I:S" format="Y年M月D日" clearable></pl-datetime>

    <h3>设置日期可选范围</h3>
    <pl-datetime startPlaceholder="开始日期" endPlaceholder="结束日期" :options="dateRangeOption" v-model="dateRange" type="date" @change="onChange" valueFormat="Y-M-D H:I:S" format="Y-M-D" isRange clearable></pl-datetime>
    <pl-datetime startPlaceholder="开始月份" endPlaceholder="结束月份" :options="monthRangeOption" v-model="monthRange" type="month" @change="onChange" valueFormat="Y-M-D H:I:S" format="Y-M" isRange clearable></pl-datetime>

    <h3>表单验证</h3>
    <pl-datetime label="请选择时间：" placeholder="请选择时间" ref="datetime1" v-model="time" type="time" @change="onChange" valueFormat="H:I" :rules="rules1" required clearable></pl-datetime>
    <pl-datetime label="请选择日期：" placeholder="请选择日期" :options="dateOption" v-model="date" type="date" @change="onChange" ref="datetime2" :rules="rules1" required clearable></pl-datetime>
    <pl-datetime label="请选择日期范围：" startPlaceholder="开始日期" endPlaceholder="结束日期" :options="dateRangeOption" v-model="dateRange" type="date" @change="onChange" ref="datetime3" :rules="rules2" required isRange clearable></pl-datetime>

    <pl-cell :span="[1,1]" gap="1em">
      <pl-button type="success" @click="validate">表单校验</pl-button>
      <pl-button type="success" @click="open">{{popupResult || '打开日历'}}</pl-button>
    </pl-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: '',
      month: '',
      time: '',
      dateRange: [],
      monthRange: [],
      timeRange: [],
      popupResult: '',

      dateOption: {
        min: -1,
        max: 6,
        dateLabel: '已选',
        format: 'Y-M-D',
        disabledDate(time) {
          return /^(0|6)$/.test(new Date(time).getDay())
        }
      },
      monthOption: {
        min: 0,
        max: 5,
        dateLabel: '已选',
        format: 'Y-M',
        disabledDate(time) {
          return /^(0|11)$/.test(new Date(time).getMonth())
        }
      },
      timeOption: {
        value: '',
        format: 'Y-M-D H:I:S',
        isRange: false
      },
      dateRangeOption: {
        min: -3,
        max: 9,
        startLabel: '入住',
        endLabel: '离店',
        format: 'Y-M-D',
        selectRange: 14,
        disabledDate(time) {
          return time >= 1619798400000 && time <= 1620144000000
        }
      },
      monthRangeOption: {
        format: 'Y-M',
        min: -1,
        max: 5,
        selectRange: 6,
        disabledDate(time) {
          return new Date(time).getMonth() === 0
        }
      },
      timeRangeOption: {
        min: 7,
        max: 23,
        format: 'H:I'
      },

      rules1: [{ required: true, message: '请选择日期', trigger: 'change' }],
      rules2: [{ required: true, message: '请选择范围', trigger: 'change' }]
    }
  },
  methods: {
    onChange(val) {
      console.log('onChange::', val)
    },
    async validate() {
      try {
        await this.$refs['datetime1'].validate()
        await this.$refs['datetime2'].validate()
        await this.$refs['datetime3'].validate()
      } catch (e) {
        console.log('校验失败: ', e)
      }
    },
    async open() {
      this.popupResult = await this.$calendar({
        value: '2021-10-20 09:21',
        startValue: '2020-12-1 18:45',
        endValue: '2021-4-30 6:15',
        min: -1,
        max: 11,
        dateLabel: '选中',
        startLabel: '开始',
        endLabel: '结束',
        type: 'date',
        isRange: false,
        format: 'Y-M-D',
        selectRange: 10,
        disabledDate() {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.pl-datetime {
  margin-bottom: 0.5rem;
}
</style>
