<template>
  <div class="content">
    <div class="wrapperL" ref="wrapperL">
      <div class="left">
        <ul>
          <li v-for="(item, index) in left" :key="index"  @click="getRight(index)">{{item.categoryName}}</li>
        </ul>
      </div>
    </div>
    <div class="wrapperR" ref="wrapperR">
        <div class="top"  ref="top">
          <div>
            <ul>
              <li >全部</li>
              <li v-for="(file, index) in bandeList" :key="index" >{{file.categoryName}}</li>
            </ul>
            <img src="../../../../static/filter.png" class="filter" alt="">
          </div>
        </div>
        <div class="product" ref="product">
          <div class="right">
            <ul class="con">
              <li v-for="(item, index) in con" :key="index">
                <dl>
                  <dt><img :src="item.imageList[0]" alt=""></dt>
                  <dd>
                    <p>{{item.name}}</p>
                    <i>￥{{Math.floor(item.newPrice*100)/100}}</i><br>
                    <i class="font">￥{{item.price}}</i><br>
                    <span @click="addCart(item)">+</span>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>  
</template>

<script>
import Axios from 'axios'
import BScroll from 'better-scroll'
export default {
    data () {
      return {
        left: [],
        bandeList: [],
        con:[],
        parentId: 871
      }
    },
    mounted () {
      Axios.get('/api/category/list').then(res => {
        this.left = res.data[0].children
        this.bandeList = this.left[0].children
      })
      Axios.get('/api/product/list',{
        params:{
          categoryId: this.parentId
        }
      }).then(res => {
        this.con = res.data.data
      })
      let leftScroll = new BScroll(this.$refs.wrapperL, {
          click:true
      })
      let rightScroll =new BScroll(this.$refs.product, {
          click:true
      })
      
    },
    methods: {
      getRight ( index) {
        Axios.get('/api/product/list',{
          params:{
            categoryId: this.parentId+index
          }
        }).then(res => {
          this.con = res.data.data
        })
      },
      addCart(item){
        Axios.post('/api/cart/add', {
          productId: item.id
        }).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    width:100%;
    height:100%;
    display: flex;
    .wrapperL{
      width:20%;
      text-align: center;
      line-height: 100px;
      overflow: auto;
      border-right: 1px solid #ccc;
      margin-right: 20px;
    }
    .wrapperR{
      flex: 1;
      height:100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      .top{
        width:86%;
        line-height: 80px;
        ul{
          overflow: auto;
          white-space: nowrap;
          li{
            display: inline-block;
            margin-right: 20px;
          }
        }
        
      }
      .filter{
        position: absolute;;
        right: 0px;
        top: 0px;
        width: 100px;
        height: 100px
      }
      .right{
        flex: 1;
      }
      .con{
        flex: 1;
        width: 100%;
        overflow: auto;
        li dl{
          display: flex;
          margin-bottom: 20px;
          dt{
            width: 30%;
            height: auto;
            img{
              width: 100%;
              padding-right: 20px;
              box-sizing: border-box;
            }
          }
          dd{
            flex: 1;
            position: relative;
            p{
              font-size: 20px;
              line-height: 80px;
            }
            i{
              font-style: normal;
              line-height: 40px;
              &:nth-of-type(2){
                color:#999;
              }

            }
            .font{
              text-decoration: line-through;
            }
            span{
              position: absolute;
              bottom: 40px;
              right: 40px;
              width: 40px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              background: #f63;
              color: #fff;
            }
          }
        }
      }
    }
    .product{
      width: 100%;
      height: 100%;
      position:absolute;
      top: 80px;
      right: 0px;
      overflow: hidden;
      z-index: 1;
      .right{
        padding-bottom: 80px;
        box-sizing: border-box;
      }
    }
  }
</style>
