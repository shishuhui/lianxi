<template>
  <div class="main">
    <div class="top">

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    let login = sessionStorage.getItem('login')
    if(login === 'true'){
      console.log('111')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.top{
  width: 100%;
  height: 130px;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  background: -webkit-linear-gradient(left, #fe9151 , #fe7252); 
  background: -o-linear-gradient(right, #fe9151, #fe7252);
  background: -moz-linear-gradient(right, #fe9151, #fe7252);
  background: linear-gradient(to right, #fe9151 , #fe7252);
}
</style>
