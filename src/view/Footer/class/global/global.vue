<template>
  <div class="content">
    <div class="wrapperL" ref="wrapperL">
      <div class="left">
        <ul>
          <li v-for="(item, index) in left" :key="index"  @click="getRight(item)">{{item.categoryName}}</li>
        </ul>
      </div>
    </div>
    <div class="wrapperR" ref="wrapperR">
      <div class="right">
        <!-- <ul class="top">
          <li >全部</li>
          <li v-for="(file, index) in bandeList.childCategoryList" :key="index" >{{file.categoryName}}</li>
        </ul>
        <ul class="con">
          <li v-for="(item, index) in con" :key="index">
            <dl>
              <dt><img :src="item.wareImg" alt=""></dt>
              <dd>
                <p>{{item.wareName}}</p>
                <h4>￥{{item.warePrice/100}}</h4>
                <span>+</span>
              </dd>
            </dl>
          </li>
        </ul> -->
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
        con:[]
      }
    },
    mounted () {
      Axios.get('/api/category/list').then(res => {
        this.left = res.data[1].children
      })
      new BScroll(this.$refs.wrapperL, {
          click:true
      })
      new BScroll(this.$refs.wrapperR, {
          click:true
      })
    }
  }
</script>

<style lang="less" scoped>
  .content{
    width:100%;
    height:100%;
    display: flex;
    .wrapperL{
      width:30%;
      text-align: center;
      line-height: 100px;
      overflow: auto;
      border-right: 1px solid #ccc;
      margin-right: 10px;
    }
    .wrapperR{
      width:100%;
      height:100%;
      display: flex;
      flex-direction: column;
      .top{
        height:40px;
        overflow: auto;
        line-height: 40px;
        text-align: center;
        display: flex;
        flex-wrap: nowrap;
        li{
          margin-right: 10px;
        }
      }
      .con{
        flex: 1;
        width: 100%;
        overflow: auto;
        li dl{
          display: flex;
          margin-bottom: 10px;
          dt{
            width: 30%;
            height: auto;
            img{
              width: 100%;
              padding-right: 10px;
              box-sizing: border-box;
            }
          }
          dd{
            flex: 1;
            position: relative;
            span{
              position: absolute;
              bottom: 20px;
              right: 20px;
              width: 20px;
              height: 20px;
              line-height: 20px;
              text-align: center;
              background: #f63;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
