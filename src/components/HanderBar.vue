<template>
<div class="">
  <ul class="hander">
    <li class="native">多点超市</li>
    <li>全球精选</li>
  </ul>
  <div class="swiper-cont border">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><slot></slot></div>
      <div class="swiper-slide"></div>
    </div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data () {
    return {
    }
  },
  mounted () {
    new Swiper('.swiper-cont', {})
  }
}
</script>

<style lang="less" scoped>
ul{
  width:50%;
  height: 100px;
  line-height: 96px;
  display: flex;
  flex-wrap: wrap;
  li{
    width: 140px;
    margin: 0 20px;
  }
}
</style>
