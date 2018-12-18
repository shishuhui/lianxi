<template>
  <div class="wrap">
    <h3><span @click="backPrve">&lt;</span> 登录</h3>
    <img src="//img.dmallcdn.com/common/964135f3-19de-4ab7-a9ba-512b10acd452_750H" alt="">
    <div class="login">
      <input type="text" name="phone" v-model="phone" placeholder="请输入手机号" class="phone"/> 
      <template>
        <button 
          class="getCode"
          @click="getMsgCode" 
          :disabled="isMsgCode"
          v-if="!isSendMsg"
        >获取验证码</button>
        <button 
          class="disabled"
          disabled="true"
          v-else
        >{{time}}秒后重新获取</button>
      </template>
      <input type="text" name="msgCode" v-model="msgCode" placeholder="请输入验证码"/>
      <span>验视手机视为已阅读并同意<b>用户协议</b></span>
      <button class="btn" @click="login" :disabled="isLogin">登录</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      phone: '',
      msgCode: '',
      isSendMsg: false,
      time: 10,
      msg: ''
    }
  },
  computed: {
    isMsgCode () {
      var reg = /[0-9]{11}/;
      return !reg.test(this.phone)
    },
    isLogin () {
      if (this.phone != '' && this.msgCode.length == 7) {
        return false
      }
      return true
    }
  },
  methods: {
    //登录方法
    login () {
      axios.post('/api/user/login', {
        number: this.phone,
        msgCode: this.msgCode
      }).then((res) => {
        sessionStorage.setItem('login', true)
        this.msg = res.data.msg
        if (this.msg === '登录成功') {
          console.log(this.msg)
          this.$router.back()
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 验证码发送倒计时
    msgCodeTime () {
      var interval = setInterval(() => {
        this.time -= 1;
        if (this.time <= 0) {
          clearInterval(interval);
          this.isSendMsg = false;
          this.time = 10;
        }
      }, 1000)
    },
    //发送验证码
    getMsgCode () {
      axios.get('/api/user/msgCode',{
        params: {
          number: this.phone
        }
      }).then((res) => {
        this.isSendMsg = true;
        this.msgCodeTime();
      }).catch((error) => {
        console.log(error)
      })
    },
    backPrve () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  width: 100%;
  height: 100%;
  background: #eee;
}
  h3{
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    position: relative;
    span{
      display: inline-block;
      width: 60px;
      height: 60px;
      line-height: 60px;
      color:#fff;
      border-radius: 50%;
      background: #000;
      position: absolute;
      top: 20px;
      left: 40px;
    }
  }
  img{
    width: 100%;
    height:auto;
  }
  .login{
    width: 100%;
    position: relative;
    input{
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      height:100px;
      border:1px solid #eee;
    }
    .getCode{    
      padding: 5px 10px;
      height: 60px;
      border: 1px solid #f86b0d;
      background: #fff;
      position: absolute;
      top: 20px;
      right: 20px;
      border-radius: 10px;
      z-index: 10;
    }
    .disabled{
      padding: 5px 10px;
      height: 60px;
      border: 1px solid #ccc;
      background: #eee;
      position: absolute;
      top: 20px;
      right: 20px;
      border-radius: 10px;
    }
    span{
      display: block;
      text-align: right;
      margin-right: 40px;
      b{
        color: #f86b0d;
        line-height: 100px;
      }
    }
    .btn{
      width: 96%;
      height: 80px;
      display: block;
      margin: 0 auto;
      border: none;
      font-size: 38px;
      border-radius: 10px;
      background: rgb(248, 107, 13);
      color: #fff;
    }
  }
</style>