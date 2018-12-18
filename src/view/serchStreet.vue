<template>
  <div class="wrap">
    <div class="search">
      <img @click="backPrve" class="left" src="../static/left.png" alt="">
      <div>
        <img @click="backPrve" src="../static/search.png" alt="">
        <input type="text" placeholder="小区、街道、大厦" v-model="search">
        <span v-show="isShow" @click="cancel" class="cancel">X</span>
      </div>
      <button>确认</button>
    </div>
    <div class="content">
      <div id="container"></div>
      <ul class="around">
        <li v-for="(item, index) in around" :key="index" @click="getName(item.name)">
          <p>{{item.name}}</p>
          <p>{{item.address}}</p>
        </li>
      </ul>
    </div>
    <div v-if="list.length>0" class="dialog">
      <ul class="container">
        <li v-for="(item, index) in list" :key="index" @click="getName(item.name)">
          <p>{{item.name}}</p>
          <p>{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import map from '../utils/map'

export default {
  data () {
    return {
      search: '',
      list: [],
      isShow: false,
      around: []
    }
  },
  watch: {
    search(newkey, oldkey) {
      if (newkey) {
        this.searchData()
        this.isShow = true
      } else {
        this.list = [],
        this.isShow = false
      }
    }
  },
  mounted () {
    map.drawMap().then(positionPicker => {
      positionPicker.on('success', (positionResult) => {
        this.around = positionResult.regeocode.pois
        console.log(positionResult.regeocode.pois)
      })
      positionPicker.on('fail', (positionResult) => {
        console.log(positionResult)
      })
    })
  },
  methods: {
    cancel () {
      this.search = [],
      this.list = []
    },
    async searchData () {
      let city = localStorage.getItem('Prvince')
      let CityData = await map.getSearchMap(city, this.search)
      this.list = CityData.tips
    },
    backPrve () {
      this.$router.back()
    },
    getName (name) {
      this.$router.push({path: '/addAddress', query: {msg: name}})
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .search{
    width: 100%;
    padding:20px 1%;
    box-sizing: border-box;
    box-shadow: 0 0 20px rgba(0,0,0,.2);
    margin: 0 auto;
    display: flex;
    .left{
    display: inline-block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-right: 20px;
    font-weight: 800;
    border-radius: 50%;
    background: rgba(0,0,0,0.9);
    color: #fff;
    }
    >div{
      width: 80%;
      border:1px solid #ccc;
      display: flex;
      .cancel{
        width: 40px;
        height: 40px;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid #ccc;
        line-height: 40px;
        text-align: center;
        margin: 10px;
      }
      input{
        flex: 1;
        border: 0;
        height: 60px;
      }
      img{
        width: 40px;
        height: 40px;
        margin: 0 10px;
        position: relative;
        top: 10px;
      }
    }
    button{
      width: 120px;
      border: 0;
      background: 0;
      color:#ccc;
    }
  }
  .dialog{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 93%;
    background: #f6f6f6;
    .container{
      width: 100%;
      height: 94%;
      margin: 0 auto;
      height: auto;
      li{
        padding: 10px 20px;
        box-sizing: border-box;
        border-bottom:1px solid #ccc;
        p{
          line-height: 60px;
          &:nth-child(2){
            line-height: 40px;
            font-size: 28px;
            color :#999;
          }
        }
      }
    }
  }
}
.content{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
#container{
  width:100%;
  height:400px;
  background:#FFF;
}
.around{
  width: 100%;
  flex: 1;
  overflow: auto;
  li{
    padding: 10px 10px;
    box-sizing: border-box;
    border-bottom:1px solid #ccc;
    p{
      line-height: 60px;
      &:nth-child(2){
        line-height: 40px;
        font-size: 28px;
        color :#999;
      }
    }
  }
}
</style>
