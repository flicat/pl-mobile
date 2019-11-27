<template>
  <div class="pl-cell" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  import {is} from '../../src/assets/utils'

  export default {
    name: 'plCell',
    componentName: 'plCell',
    props: {
      direction: {          // 排列方式  column，row
        type: String,
        default: 'row'
      },
      span: Array,
      gap: String,
      justifyContent: {
        type: String,      // 横向排列方式：stretch | start | end | center | space-between | space-around | space-evenly
        default: 'space-evenly'
      },
      alignContent: {
        type: String,      // 纵向排列方式：stretch | start | end | center | space-between | space-around | space-evenly
        default: 'center'
      }
    },
    computed: {
      templates () {
        if (this.span && this.span.length) {
          return this.span.filter(item => item && (is(item, 'string') || is(item, 'number'))).map(item => {
            if (is(item, 'number')) {
              return item + 'fr'
            } else {
              return item
            }
          }).join(' ')
        }
        return null
      },
      rowStyle () {
        return {
          ...(this.templates ? {[this.direction === 'row' ? 'grid-template-columns' : 'grid-template-rows']: this.templates} : null),
          ...(this.gap ? {[this.direction === 'row' ? 'grid-column-gap' : 'grid-row-gap']: this.gap} : null),
          ...(this.justifyContent ? {'justify-content': this.justifyContent} : null),
          ...(this.alignContent ? {'align-content': this.alignContent} : null)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pl-cell {
    display: grid;
    width: 100%;
    background-color: #fff;
  }
</style>
