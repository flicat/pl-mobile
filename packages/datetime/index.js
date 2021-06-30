import Datetime from './index.vue';
import plMonth from './month.vue'
import plTime from './time.vue'
import plDate from './datetime.vue'
import { getDateString } from '../../src/assets/utils'

/* istanbul ignore next */
Datetime.install = function (Vue) {
  Vue.component(Datetime.name, Datetime);

  let Calendar = Vue.extend({
    components: {
      plMonth,
      plTime,
      plDate
    },
    render(createElement) {
      return this.display && createElement('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0
        }
      }, [
        createElement('plMonth', {
          ref: 'month'
        }),
        createElement('plTime', {
          ref: 'time'
        }),
        createElement('plDate', {
          ref: 'date'
        })
      ]) || null
    },
    data: function () {
      return {
        display: false,
        visible: false,
        options: {}
      }
    },
    methods: {
      show() {
        this.display = true
        this.$nextTick(() => {
          this.visible = true

          const type = this.options.type
          if (type === 'month') {
            this.$refs.month.open(this.options)
          } else if (type === 'time') {
            this.$refs.time.open(this.options)
          } else {
            this.$refs.date.open(this.options)
          }
        })
      },
      hide() {
        this.visible = false
        setTimeout(() => {
          this.display = false
        }, 300)
      }
    }
  })

  let calendarDom = new Calendar({
    el: document.createElement('div'),
  })

  function showCalendar(options) {
    return new Promise((resolve, reject) => {
      calendarDom.options = Object.assign({}, options, {
        callback: result => {
          let time = result
          if (options.format) {
            if (options.isRange) {
              time = result.map(item => getDateString(item, options.format))
            } else {
              time = getDateString(result, options.format)
            }
          }
          resolve(time)
        }
      })
      calendarDom.show()
    })
  }

  Vue.prototype.$calendar = showCalendar
  document.body.appendChild(calendarDom.$el)
};

export default Datetime;
