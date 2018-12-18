<template>
  <div class="location-page">
    <div class="top">
      <img @click="backPrve" class="left" src="../static/left.png" alt="">
      <div>北京市</div><br>
      <div class="search">
        <div>
          <img src="../static/search.png" alt="">
          <input type="text" placeholder="小区、街道、大厦" v-model="search">
        </div>
        <button @click="cancel">取消</button>
      </div>
      <p @click="getArround">定位当前地址: </p>
    </div>
    <ul id="container" v-if="list">
      <li v-for="(item, index) in list" :key="index" @click="getName(item.name)">
        <p>{{item.district}}</p>
        <p>{{item.name}}</p>
      </li>
    </ul> 
    <div class="myAddress">
      <dl v-for="(item, index) in myAddress" :key="index" >
        <dt>
          <input type="radio">
        </dt>
        <dd>
          <div>{{item.name}}</div>
          <p>{{item.phone}}</p>
          <p>{{item.prvince}}&nbsp;&nbsp;{{item.street}}&nbsp;&nbsp;{{item.address}}交话费四大皆空是的是的</p>
        </dd>
        <dd class="set"><img src="../static/修 改.png" alt=""></dd>
      </dl>
    </div>
    <div class="footer" @click="addAddress"><span>+</span>添加新地址</div>
    <div v-if="dialog" class="bg" @click="hide"></div>
    <div v-if="dialog" class="dialog"  style="overflow:auto;">
      <ul id="container">
        <li v-for="(item, index) in around" :key="index" @click="getName(item.name)">
          <p>{{item.name}}</p>
          <p>{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template> 

<script>
  import map from '../utils/map'
  import Axios from 'axios'

  export default {
    data () {
      return {
        search: '',
        city: '全国',
        address: '',
        list: [],
        dialog: false,
        around: [],
        myAddress: []
      }
    },
    watch: {
      search(newkey, oldkey) {
        if (newkey) {
          this.searchData()
        } else {
          this.list = []
        }
      }
    },
    methods: {
      backPrve () {
        this.$router.push('/home/supermarket')
      },
      home () {
        this.$router.push('/home/supermarket')
      },
      async searchData () {
        let CityData = await map.getSearchMap(this.city, this.search)
        this.list = CityData.tips
      },
      getName (name) {
        localStorage.setItem('wxLocation', name)
        this.$router.push({path:'/home'})
      },
      addAddress () {
        if (sessionStorage.getItem('login') === 'true') {
          this.$router.push('/addAddress')
        }else{
          this.$router.push('/login')
        }
      },
      getArround () {
        console.log(this.around, 'around')
        this.dialog = !this.dialog
        this.list = []
      },
      hide () {
        this.dialog = !this.dialog
      },
      cancel () {
        this.search = ''
        this.list = []
      }
    },
    mounted() {
      Axios.get('/api/user/selectAll')
      .then((res) => {
        console.log(res)
        this.myAddress = res.data.data
      })
      map.getLocation().then((data) => {
        this.around = data.pois
      }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>

<style scoped lang="scss">
.bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8)
}
.dialog{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70%;
  background: #fff;
}
.location-page{
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  .top{
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
    .left{
      display: inline-block;
      line-height: 60px;
      text-align: center;
      width: 60px;
      margin-right: 80px;
      font-size: 40px;
      font-weight: 800;
      border-radius: 50%;
      height: 60px;
      background: rgba(0,0,0,0.9);
      color: #fff;
    }
    div{
      height: 60px;
      line-height: 60px;
      display: inline-block;
    }
    .search{
      width: 100%;
      margin: 60px auto;
      display: flex;
      >div{
        width: 80%;
        border:1px solid #ccc;
        display: flex;
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
        margin-left: 20px;
      }
    }
  }
  .myAddress{
    width: 100%;
    height: auto;
    dl{
      width: 100%;
      height: 200px;
      height: auto;
      padding: 20px 0;
      background: #fff;
      margin: 20px 0;
      display: flex;
      position: relative;
      dt{
        width: 100px;
        text-align: center;
        line-height: 120px;
      }
      dd{
        flex: 1;
        padding-right: 20px;
        box-sizing: border-box;
        div{
          font-size: 32px;
        }
        p{
          font-size: 28px;
          color: #999;
        }
      }
      .set{
        position: absolute;
        top:20px;
        right: 20px;
        img{
          width: 50px;
          height: auto;
        }
      }
    }
  }
  #container{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    height: auto;
    background: rgba(0, 0, 0, 0.8);
    li{
      background: #f2f2f2;
      padding: 0 40px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      p{
        line-height: 60px;
        &:nth-child(2){
          color: #666;
        }
      }
    }
  }
  .footer{
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    position: absolute;
    bottom: 0px;
    background: #fff;
    color: #ff712b;
    span{
      font-weight: 800;
      margin-right: 10px
    }
  }
}
</style>