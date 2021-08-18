<template>
  <div class="content" ref="wrap">
    <p><strong>侠客行</strong></p>
    <p><small>李白</small></p>
    <p>赵客缦胡缨，吴钩霜雪明。</p>
    <p>银鞍照白马，飒沓如流星。</p>
    <p>十步杀一人，千里不留行。</p>
    <p>事了拂衣去，深藏身与名。</p>
    <p>闲过信陵饮，脱剑膝前横。</p>
    <p>将炙啖朱亥，持觞劝侯嬴。</p>
    <p>三杯吐然诺，五岳倒为轻。</p>
    <p>眼花耳热后，意气素霓生。</p>
    <p>救赵挥金槌，邯郸先震惊。</p>
    <p>千秋二壮士，烜赫大梁城。</p>
    <p>纵死侠骨香，不惭世上英。</p>
    <p>谁能书阁下，白首太玄经。</p>
    <pl-go-top-button :target="wrap" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      wrap: null
    }
  },
  mounted() {
    this.wrap = this.$refs.wrap.parentNode
  }
}
</script>

<style>
p {
  line-height: 2em;
  color: #666;
  letter-spacing: 2px;
  text-align: center;
  font-size: 20px;
}
</style>
