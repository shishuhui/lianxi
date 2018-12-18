<template>
  <div class="main">
    <div class="map" @click="location">当前位置是： {{this.address}}</div>
    <ul class="hander">
      <router-link to="/home/supermarket"><li>多点超市</li></router-link>
      <router-link to="/home/global"><li>全球精选</li></router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import map from '../../../utils/map';
  export default {
    data() {
      return {
        address: ''
      }
    },
    mounted () { 
      if(localStorage.getItem('wxLocation')){
        this.address = localStorage.getItem('wxLocation')
      }else{
        map.getLocation().then((data) => {
          this.address = data.formattedAddress
          localStorage.setItem('wxLocation', data.formattedAddress)
        }).catch(() => {
          console.log('失败')
        })
      }
    },
    methods: {
      location() {
        this.$router.push('/location')
      }
    }
  }
</script>

<style lang="less" scoped>
.map{
  width: 100%;
  height: 80px;
  overflow: hidden;
  padding: 0 20px;
  box-sizing: border-box;
  line-height: 80px;
  border-bottom: 1px solid #ccc;
}
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
a{
  color: #000;
}
.main{
  display: flex;
  flex-direction: column;
  .content{
    flex: 1;
    overflow: auto;
  }
}
</style>
