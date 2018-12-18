<style lang="scss" scoped>
  .wrap{
    width: 100%;
    height: 100%;
}
  .header{
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #f2f2f2;
  div{
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    color: #fff;
    background: rgba(255, 113, 43, 0.8);
  }
  span{
    position: absolute;
    top: 20px;
    left: 20px;
    display: inline-block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-weight: 800;
    border-radius: 50%;
    background: rgba(0,0,0,0.9);
    color: #fff;
  }
  h4{
    width: 100%;
  }
}
</style>
<template>
  <div class="wrap">
    <div class="header">
      <span @click="backPrve">&lt;</span>
      <h4>确认订单</h4>
    </div>
  </div>
</template>
<script>
  import Axios from 'axios'
  export default {
    data () {
      return {
      }
    },
    mounted () {

    },
    methods: {
      backPrve () {
        this.$router.back()
        Axios.get('/api/user/selectAll')
        .then((res) => {
          console.log(res)
          this.myAddress = res.data.data
        })
      }
    }
  }
</script>
