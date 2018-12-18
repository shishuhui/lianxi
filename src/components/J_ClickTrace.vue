<template>
  <div class="imgItem">
    <img src="https://img.dmallcdn.com/mIndex/201809/13336179-8c72-43f9-9cd0-e6bca5b74fcc_750H" alt="">
    <div>
      <div>
        <img src="https://img.dmallcdn.com/20180911/ef82b64e-f144-497b-bf74-6b5d0adc8de0_360x360H" alt="">
        <p>安岳柠檬【精】4粒</p>
        <div class="price">
          <span>￥9.90</span>1
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20180911/d6588428-b688-483f-a6f3-ec6f2e4386c1_360x360H" alt="">
        <p>白心火龙果【精】1粒</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/201503/8a5d8893-546a-41fd-b99b-fec01d8c787b_360x360H" alt="">
        <p>进口脐橙【盒】4粒</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20180906/16110980-1f1c-40fc-8b54-88a379047b2a_360x360H" alt="">
        <p>胡萝卜【精】500g</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20180906/7f975581-e27a-49b4-a1aa-585f30e64c11_360x360H" alt="">
        <p>黄瓜 【精】600g</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20180809/ba5928a8-c634-49dd-bf3c-9f46852f9b1e_360x360H" alt="">
        <p>沙地红心蜜薯 【精】 1kg</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20170727/a27d485b-8382-4638-935f-58a247390eb1_360x360H" alt="">
        <p>缤纷田园鲜鸡蛋 30枚</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20170817/73f84923-794d-4a6c-bb99-38b7ae2f7791_360x360H" alt="">
        <p>德青源安心生态鲜鸡蛋 20枚装</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20170817/4f02c398-270d-47ed-adee-afb4c78528f6_360x360H" alt="">
        <p>正大鲜鸡蛋 15枚</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20180823/85f1accc-e711-40bb-a438-b604d4747ca1_360x360H" alt="">
        <p>通脊【散】 500g</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20180408/5c212a57-d799-41b0-a287-cc07b1ac88cf_360x360H" alt="">
        <p>精前腿 400g</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20180404/2db950a4-b059-4912-a0eb-123805b03cd1_360x360H" alt="">
        <p>腔排【散】 1kg</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20171129/4193455d-0fac-4794-b556-444474431da6_360x360H" alt="">
        <p>阿根廷红虾仁【散】 500g</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20170426/18c7dde4-1dbb-46c5-bed7-47813dfa5532_360x360H" alt="">
        <p>带鱼B级2条【散】 600g</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
      <div>
        <img src="https://img.dmallcdn.com/20170815/8b9ec626-76c5-4e11-ba98-cb605c7535a8_360x360H" alt="">
        <p>去头红虾【散】 500g</p>
        <div class="price">
          <span>￥9.90</span>
          <span>+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.imgItem>img{
  width: 100%;
}
.imgItem>div{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  div{
    width:33.33%;
    img{
      width:100%;
    }
    p{
      height: 100px;
      line-height: 50px;
      margin-bottom:20px;
      padding: 0 10px;
    }
    .price{
      width: 100%;
      color:#f63;
      display: flex;
      justify-content: space-around;
      span{
        &:nth-child(2){
        padding:4px 10px;
        border: 1px solid #f63;
        border-radius: 4px;
        font-size: 24px;
        }
      }
    }
  }
}
</style>
