<template>
  <div class="location-page">
    <img src="../static/logo-slogan.png" class="login" />
    <div class="map-box">
      <i></i>
      <em></em>
      <span></span>
    </div>
  </div>
</template> 

<script>

  export default {
    name: 'map',
    data () {
      return {}
    },
    mounted () {
      setTimeout(() => {
        this.$router.push('/home/supermarket')
      }, 5000)
    }
  }
</script>

<style scoped lang="scss">
.location-page {
  .login {
    width: 200px;
    display: block;
    margin: 20% auto;
  }
  .map-box {
    box-shadow: inset 0 0 20px #e8e8e8;
    background: url(../static/map.png) no-repeat;
    background-size: 150%;
    overflow: hidden;
    width: 376px;
    height: 376px;
    border-radius: 100%;
    margin: 0 auto;
    animation: movemap 5s infinite ease-out;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    i {
      z-index: 2;
      display: block;
      width: 64px;
      height: 76px;
      margin: auto;
      background: url(../static/geo-tag-large.png) no-repeat;
      background-size: 100%;
    }
    em, span {
      z-index: 1;
      -webkit-transform: scale(0 ,0) translate(-50%, -50%);
      display: block;
      height: 96px;
      width: 96px;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 48px;
      border: 1px solid #ff712b;
      transform-origin: top left;
      margin-top: 80px;
    }
    em {
      animation: movecircle 1.8s infinite linear;
    }
    span {
      background-color: #ff712b;
      animation: movecircle2 1.8s infinite linear;
    }
  }
}

@keyframes movemap{
  0%,100%{
    background-position:0 0;
  }
  25%{
    background-position:-120px 0;
  }
  50%{
    background-position:-120px -120px;
  }
  75%{
    background-position:0 -120px;
  }
}
@keyframes movecircle{
  0%{
    -webkit-transform:scale(0 ,0)  translate(-50%, -50%);
    opacity:0
  }
  50%{
    -webkit-transform:scale(1 ,.5)  translate(-50%, -50%);
    opacity:1
  }
  100%{
    -webkit-transform:scale(1.6 ,.8)  translate(-50%, -50%);
    opacity:0
  }
}
@keyframes movecircle2{
  0%{
    -webkit-transform:scale(0 ,0)  translate(-50%, -50%);
    opacity:0
  }
  50%{
    -webkit-transform:scale(1 ,.5)  translate(-50%, -50%);
    opacity:.3
  }
  100%{
    -webkit-transform:scale(1.6 ,.8)  translate(-50%, -50%);
    opacity:0
  }
}

</style>
