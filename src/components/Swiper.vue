<template>
  <swiper :options="swiperOption" ref="mySwiper" class="home-banner" v-if="getBanner.length>0">
    <swiper-slide v-for="(item, index) in getBanner" :key="index">
      <img :src="item.image" />
    </swiper-slide>\
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    getBanner: Array
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-slide{
  width:100%;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
