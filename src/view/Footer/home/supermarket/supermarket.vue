<template>
  <div class="content">
    <Swiper :getBanner.sync="banner"></Swiper>
    <Nav></Nav>
    <div class="J_ItemImage">
      <img src="https://img.dmallcdn.com/mIndex/201809/52784bb1-9922-432c-a4ed-87821c619d1e_750H" alt="">
    </div>
    <ul class="J_ClickTrace">
      <li><img src="https://img.dmallcdn.com/mIndex/201809/751a985d-6660-4ea1-afc5-6b8810d973a6_750H" alt=""></li>
      <li><img src="https://img.dmallcdn.com/mIndex/201809/3c5a1e45-c0fb-411b-b57e-3d781677bbf0_480x480H" alt=""></li>
      <li><img src="https://img.dmallcdn.com/mIndex/201809/2dbae4f9-7088-478b-b2fa-5eaa411280f7_480x480H" alt=""><img src="https://img.dmallcdn.com/mIndex/201809/4eed5bcd-b498-4679-a1eb-9f96808b0cda_480x480H" alt=""></li>
    </ul>
    <ContImg></ContImg>
    <Fresh></Fresh>
  </div>
</template>

<script>
import Axios from 'axios';
import Swiper from "@/components/Swiper";
import Nav from "@/components/Nav";
import ContImg from "@/components/ContImg";
import Fresh from "@/components/J_ClickTrace";
export default {
    data() {
        return {
            banner: []
        }
    },
    components: {
        Swiper,
        Nav,
        ContImg,
        Fresh
    },
    mounted () {
        Axios.get('/api/home/banner').then(res => {
            this.banner = res.data.data
        })
    }
};
</script>

<style lang="less" scoped>
.J_ItemImage {
    width: 96%;
    height: auto;
    margin: 0 auto;
    display: flex;
    img {
        width: 100%;
        height: 240px;
    }
}
.J_ClickTrace {
    margin-top: 10px;
    padding: 0.3px;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    line-height: 0;
    li {
        display: inline-block;
        width: 49%;
        margin: 0;
        img {
            width: 100%;
            height: auto;
        }
        &:nth-child(1) {
            width: 100%;
        }
    }
}
</style>
