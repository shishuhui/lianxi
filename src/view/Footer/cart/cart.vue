<template>
  <div class="main">
    <div class="top">
      <p>多点君需要你的详细地址哟~</p>
      <p>送至：{{address}}</p>
    </div>
    <section class="J_CartArea" v-if="list.length">
      <!--  分区模块  -->   
      <h4 class="business">
        <span :class="isCheckAll?'checkAll':'uncheck'" @click="checkAll"></span>
        <img class="logo" src="../../../static/right.png"> 
        <span class="J_Link"> 多点超市 (百旺店)</span>
        <img class="logo" src="../../../static/right.png" alt="">
      </h4> 
      <div class="goods-list">
        <ul class="">
          <li v-for="(item, index) in list" :key="index" class="J_GoodsList J_CheckAllList" data-salespromotiontips="" data-giftstocktips="" data-count="1"
            data-stock="3" data-sku="100382303" data-suitid="" data-erpstoreid="206" data-waretype="1" data-checked="true">
            <span :class="isCheck?'checkAll':'uncheck'"></span>
            <div class="info" style="">
              <div class="J_Link" data-defaultlink="#item/view/item/item:id=1-206-100382303">
                <div class="name">{{item.name}}</div>
                <span class="price">
                  ¥<strong>{{item.newPrice.toFixed(2)}}</strong></span>
              </div>
              <div class="act" style="padding-left:20px">
                <i class="minus" @click="minus(item.id, item.num-1)">-</i>
                <span class="stnum"> {{item.num}} </span>
                <i class="add" @click="add(item.id, item.num+1)">+</i>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="total">
          <div class="orange">合计：
            <sup>¥</sup>
            <strong>{{price.toFixed(2)}}</strong>（不含运费）
          </div>
          <div class="discount">促销已抵扣金额：¥0.00</div>
        <button @click="order">选好了</button>
      </div>  
    </section>
    <div class="empty" v-else>
      <img src="//img.dmallcdn.com//dshop/201805/324b1ec1-0ada-410e-8970-23cc28812c9b" alt="">
      <p>购物车还没有商品</p>
      <button class="btn" @click="addCart">我要买买买</button>
    </div>
  </div>  
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      list: [],
      isCheckAll: false,
      isCheck: false,
      price: 0,
      address: ''
    }
  },
  methods: {
    order () {
      this.$router.push('/orderInfo')
    },
    checkAll () {
      this.isCheckAll = !this.isCheckAll,
      this.isCheck = !this.isCheck
      let RMB = this.price
      this.list.forEach(function(item) {
        RMB +=item.num*item.newPrice
      })
      this.price = RMB
      if(this.isCheckAll === false) {
        this.price = 0;
      }
      console.log(this.price)
    },
    addCart () {
      this.$router.push('/class/supermarket')
    },
    minus (productId, num) {
      Axios.post('/api/cart/setnum',{
        productId,
        num
      }).then(res => {
        this.loading()
      })
    },
    add (productId, num) {
      Axios.post('/api/cart/setnum',{
        productId,
        num
      }).then(res => {
      this.loading()
      })
    },
    loading () {
      Axios.get('/api/cart/list').then(res => {
        this.list = res.data
      })
    }
  },
  mounted () {
    this.loading()
    this.address = localStorage.getItem('wxLocation')
  }
}
</script>

<style scoped lang="scss">
  .J_CartArea{
    margin-bottom: 40px;
    margin: 20px 0;
    background: #fff;
    .business{
      height: 88px;
      line-height: 88px;
      font-size: 28px;
      color: #ccc;
      padding-left: 80px;
      padding-right: 30px;
      box-sizing: border-box;
      position: relative;
      .logo {
        width: 50px;
        line-height: 88px;
        padding: 0 30px;
        position: absolute;
        right: 10px;
        top:30%;
      }
      
    }
    .goods{
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding-left: 40px;
      padding-right: 30px;
      box-sizing: border-box;
      position: relative;
      .goto{
        width: 50px;
        margin-top: -20px;
        position: absolute;
        img{
          width: 50px;
        }
      }
    }
    .goods-list {
      li {
        padding-left: 80px;
        overflow: hidden;
        position: relative;
        .check {
          width: 80px;
          height: 100%;
          text-align: center;
          position: absolute;
          left: 0;
          top: 0;

          i {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -30px;
            margin-top: -30px;
          }
        }

        .info {
          padding-top: 20px;
          padding-right: 240px;
          padding-bottom: 20px;
        }

        .act {
          position: absolute;
          right: 20px;
          top: 50%;
          margin-top: -30px;
          height: 60px;
          line-height: 60px;
          display: flex;
          i{
            font-style: normal;
            padding: 0 20px;
            border: 1px solid #ff7b38;
          }
          .stnum {
            display: inline-block;
            width: 60px;
            text-align: center;
            font-weight: 700;
          }
        }
      }

    }
  }
  .total{
    width: 100%;
    padding: 20px 40px;
    line-height: 50px;
    position: relative;
    box-sizing: border-box;
    .orange{
      color:#ff7b38;
    }
    .discount{
      font-size: 16px;
      color: #999;
    }
    button{
      position: absolute;
      top: 30%;
      right: 20px;
      border: 1px solid #f86b0d;
      background: #f86b0d;
      padding:10px 20px;
      color: #fff;
      border-radius: 10px;
      z-index: 10;
    }
  }
  .checkAll{
    display: inline-block;
    line-height: 88px;
    text-align: center;
    width: 50px;
    height: 50px;
    position: absolute;
    top:20px;
    left: 20px;
    background: url(../../../static/check.png) no-repeat;
  }
  .uncheck{
    display: inline-block;
    line-height: 88px;
    text-align: center;
    width: 50px;
    height: 50px;
    position: absolute;
    top:20px;
    left: 20px;
    background: url(../../../static/uncheck.png) no-repeat;
  }
  .main{
    background: #f2f2f2;
  }
  .top{
    width: 100%;
    height: 120px;
    background: #fff url(https://static.dmall.com/kayak-project/cart/dist/cart/common/image/shoppingline.png) 0 0 repeat-x;
    padding: 20px;
    box-sizing: border-box;
    p:nth-child(2){
      font-size: 10px;
      color:#666;
      line-height: 50px;
    }
  }
  .empty{
    img{
      height: auto;
      display: block;
      margin: 100px auto 50px;
      width: 200px;
    }
    p{
      text-align: center;
      color:#999;
      font-size: 30px;
      line-height: 100px;
    }
    .btn{
      display: block;
      margin: 0 auto;
      border-radius: 10px;
      color: #fff;
      padding: 0 44px;
      height: 88px;
      line-height: 88px;
      background: #ff7b38;
      border: 1px solid #ff7b38;
      font-size: 28px;
    }
  }
</style>
