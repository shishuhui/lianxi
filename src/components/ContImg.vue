<template>
  <div class="imgItem">
    <img src="https://img.dmallcdn.com/mIndex/201809/fe7ddfa5-b9c9-483d-b80f-f987f5790345_750H" alt="">
    <div>
      <img v-for="(item, index) in img" :key="index" :src="item.image" alt="">
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    data () {
      return {
        img: []
      }
    },
    mounted () {
      Axios.get('/api/home/optimization').then(res => {
        this.img = res.data.data
      })
    }
  }
</script>

<style scoped>
.imgItem>img{
  width: 100%;
}
.imgItem div{
   width: 100%;
  height: auto;
   display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.imgItem div img{
  width: 33.33%;
}
</style>
