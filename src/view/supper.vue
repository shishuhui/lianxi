<template>
  <div id="wrap">
    <router-view></router-view>
    <ul class="footer">
      <router-link to="/home">
        <li>
          <dl>
            <dt><img src="../assets/img/首页.png" alt=""></dt>
            <dd>配送到家</dd>
          </dl>
        </li>
      </router-link>
      <router-link to="/class">
      <li>
        <dl>
          <dt><img src="../assets/img/fen-lei.png" alt=""></dt>
          <dd>分类</dd>
        </dl>
      </li>
      </router-link>
      <router-link to="/vip">
      <li>
        <dl>
          <dt><img src="../assets/img/huiyuan.png" alt=""></dt>
          <dd>会员</dd>
        </dl>
      </li>
      </router-link>
      <router-link to="/cart">
      <li>
        <dl>
          <dt><img src="../assets/img/gouwuche.png" alt=""></dt>
          <dd>购物车</dd>
        </dl>
      </li>
      </router-link>
      <router-link to="/my">
      <li>
        <dl>
          <dt><img src="../assets/img/wo-de.png" alt=""></dt>
          <dd>我的</dd>
        </dl>
      </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
#wrap{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.map{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  background: #fff;
}
.main{
    flex: 1;
  }
.border{
  border: 10px solid #eee;
}
*{
  list-style: none;
}
.footer{
  width:100%;
  height: auto;
  display: flex;
  border-top: 1px solid #ccc;
  
}
a {
    flex: 1;
    text-align: center;
    color: #ccc;
  }
img{
  width:60px;
  height:auto;
}
</style>
