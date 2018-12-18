<template>
  <div class="wrap" >
    <div class="header">
      <span @click="backPrve">&lt;</span>
      <h4>编辑地址</h4>
      <div v-if="tip">请选择城市</div>
    </div>
    <ul class="content">
      <li><span>联系人</span><input type="text" placeholder="请输入联系人" v-model="name"></li>
      <li><span>手机号</span><input type="text" placeholder="请输入手机号" v-model="phone"></li>
      <li>
        <span>地址</span>
        <div class="city">
          <span @click="getCity" >{{prvince}}</span>
          <ul v-show="show">
            <li v-for="(item, index) in cityLIst" :key="index" @click="getPrvince(item.name)">{{item.name}}}</li>
          </ul>
        </div>
        <div @click="getStreet">{{street}}</div>
      </li>
      <li><span>详细地址</span><input type="text" placeholder="请输入详细地址" v-model="address"></li>
    </ul>
    <button @click="addLocation">完成</button>
  </div>
</template>

<script>
import map from '../utils/map'
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      phone: '',
      address: '',
      show: false,
      tip: false,
      cityLIst: [],
      prvince: '',
      street: '请选择小区、街道、大厦'
    }
  },
  methods: {
    addLocation(){
      axios.post('/api/user/addsite', {
        name: this.name,
        phone: this.phone,
        prvince: this.prvince,
        street: this.street,
        address: this.address
      }).then((data)=>{
        console.log(data)
        if (data) {
          this.$router.push('/location')
        }
      })
    },
    getCity () {
      this.show = true
      map.getPrvince().then((res) => {
        this.cityLIst = res.districtList[0].districtList
      })
    },
    getPrvince (name) {
      console.log(name)
      localStorage.setItem('Prvince', name)
      this.show = false
    },
    getStreet () {
      if (this.prvince === '') {
        this.tip = true
        setTimeout(()=>{
          this.tip = false
        }, 3000)
      }else{
        this.$router.push('/searchStreet')
      }
    },
    backPrve () {
      this.$router.push('/location')
    }
  },
  mounted () {
    if(localStorage.getItem('Prvince')) {
      this.prvince = localStorage.getItem('Prvince')
    }else{
      this.prvince = '请选择'
    }
    if(this.$router.history.current.query.msg) {
      this.street = this.$router.history.current.query.msg
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  font-size: 24px;
}
.header{
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  position: relative;
  box-shadow: 0px 10px 6px #eee;
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
.content{
  background: #fff;
  li{
    border-bottom: 1px solid #eee;
    line-height: 100px;
    height: 100px;
    display: flex;
    span{
      margin: 0 30px;
    }
    input{
      border: none;
    }
    div{
      margin: 0 10px;
      width: 200px;
      span{
        overflow: hidden;
        width: 100%;
        height: 100%; 
      }
      &:nth-child(3){
        width: 400px;
        overflow: hidden;
      }
    }
  }
}
.city{
  position: relative;
  ul{
    position: absolute;
    background: #fff;
    border: 1px solid #ccc;
    top: 80px;
    left: 0;
    width: 300px;
    height: 900px;
    overflow: auto;
    text-align: center;
    li{
      height: 80px;
      width: 100%;
      text-align: center;
      line-height: 80px;
    }
  }
}
button{
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: #ff712b;
  border: 0;
  margin-top: 20px;
  background: #fff;
}
</style>
