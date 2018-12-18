<template>
  <div class="main">
    <ul class="hander">
      <router-link to="/class/supermarket"><li>多点超市</li></router-link>
      <router-link to="/class/global"><li>全球精选</li></router-link>
    </ul>
    
    <router-view></router-view>
  </div>
</template>

<script>
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
