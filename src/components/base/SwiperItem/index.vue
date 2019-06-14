<template>
  <div :class="$style.banner">
    <swiper :options="swiperOption" :class="$style.swiper">
      <!-- slides -->
      <swiper-slide v-for="(item) in banner" :key="item.bannerId">
        <img :src="item.pic">
        <div :class="$style.label" :style="{backgroundColor:item.titleColor}">{{item.typeTitle}}</div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    banner: {
      type: Array,
      required: true
    },
    titleColor: {
      type: String,
      default: ""
    },
    typeTitle: {
      type: String,
      default: ""
    },
    swiperOption: {
      type: Object,
      default() {
        return {
          loop: true,
          autoplay:{
              disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination"
          }
        };
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
@import "~@/assets/styles/swiper.min.css";
</style>
<style module lang="scss">
.banner {
  margin: 0 30px;
  .swiper {
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    .label {
      width: 120px;
      height: 40px;
      position: absolute;
      background: red;
      bottom: 0;
      right: 0;
      font-size: 12px;
      text-align: center;
      line-height: 40px;
      border-top-left-radius: 15px;
      color: #fff;
    }
    img {
      max-width: 100%;
      display: block;
    }
  }
}
</style>