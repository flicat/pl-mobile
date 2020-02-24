<template>
  <div class="content" ref="wrap">
    <p>1</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <p>2</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <p>3</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <pl-go-top-button :target="wrap" />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        wrap: null
      }
    },
    mounted () {
      this.wrap = this.$refs.wrap.parentNode
    }
  }
</script>

<style>

</style>
