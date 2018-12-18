<template>
  <ul class="footer">
    <li>
      <dl>
        <dt><img src="../assets/img/首页.png" alt=""></dt>
        <dd>配送到家</dd>
      </dl>
    </li>
    <li>
      <dl>
        <dt><img src="../assets/img/fen-lei.png" alt=""></dt>
        <dd>分类</dd>
      </dl>
    </li>
    <li>
      <dl>
        <dt><img src="../assets/img/huiyuan.png" alt=""></dt>
        <dd>会员</dd>
      </dl>
    </li>
    <li>
      <dl>
        <dt><img src="../assets/img/gouwuche.png" alt=""></dt>
        <dd>购物车</dd>
      </dl>
    </li>
    <li>
      <dl>
        <dt><img src="../assets/img/wo-de.png" alt=""></dt>
        <dd>我的</dd>
      </dl>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
*{
  list-style: none;
}
ul{
  width:100%;
  height: auto;
  display: flex;
  border-top: 1px solid #ccc;
  li{
    flex: 1;
    text-align: center;
  }
}
img{
  width:60px;
  height:60px;
}
</style>
