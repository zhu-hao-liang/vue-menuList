<template>
  <swiper :options="swiperOption" ref="mySwiper" class="wrapper-login"  v-if="list.length">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in list" :key="index">
      <img :src="item" alt class="slideImg" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { setTimeout } from "timers";
export default {
  name: "carrousel",
  data() {
    return {
      list: [],
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination"
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        notNextTick: true,
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      }
    };
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    //this.swiper.slideTo(3, 1000, false);
    setTimeout(() => {
      this.list = [
        require("./images/1.jpg"),
        require("./images/2.jpg"),
        require("./images/3.jpg"),
        require("./images/4.jpg")
      ];
    }, 20);
  },

  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style  scoped>
.slideImg {
  width: 100%;
  height: 200px;
}
.wrapper-login >>> .swiper-pagination-bullet {
  height: 1px;
}
</style>
