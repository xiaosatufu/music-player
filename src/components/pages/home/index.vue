<template>
  <div>
    <!-- home page -->
    <header :class="$style.header">
      <div :class="$style.left">
        <span :class="$style.iconfont" class="iconfont">&#xe6b7;</span>
      </div>
      <div :class="$style.main">
        <div :class="$style.input">
          <span class="iconfont" :class="$style.iconfont">&#xe66f;</span>
          <input type="text" placeholder="搜索音乐、视频、歌词、电台">
        </div>
      </div>
      <div :class="$style.right">
        <span :class="$style.iconfont" class="iconfont">&#xe629;</span>
      </div>
    </header>

    <swiper-item :banner="banner" v-if="banner.length>0">

    </swiper-item>

    <!-- <div :class="$style.pannel">
      <div :class="$style.item" class="item">
        <div class="icon">
          <img src="~@/assets/images/icon-calc.jpg" alt>
        </div>
        <p>每日推荐</p>
      </div>
      <div :class="$style.item" class="item">
        <div class="icon">
          <img src="~@/assets/images/icon-list.jpg" alt>
        </div>
        <p>歌单</p>
      </div>
      <div :class="$style.item" class="item">
        <div class="icon">
          <img src="~@/assets/images/icon-rank.jpg" alt>
        </div>
        <p>排行榜</p>
      </div>
      <div :class="$style.item" class="item">
        <div class="icon">
          <img src="~@/assets/images/icon-radio.jpg" alt>
        </div>
        <p>电台</p>
      </div>
      <div :class="$style.item" class="item">
        <div class="icon">
          <img src="~@/assets/images/icon-live.jpg" alt>
        </div>
        <p>直播</p>
      </div>
    </div>

    <div :class="$style.onepxline"></div>

    <div :class="[$style.pannel,$style.fixed]">
      <div :class="$style.item" class="item">
        <div class="icon">
          <img src="~@/assets/images/icon-calc.jpg" alt>
        </div>
        <p>发现</p>
      </div>
      <div :class="$style.item" class="item">
        <div class="icon">
          <img src="~@/assets/images/icon-list.jpg" alt>
        </div>
        <p>视频</p>
      </div>
      <div :class="$style.item" class="item">
        <div class="icon">
          <img src="~@/assets/images/icon-rank.jpg" alt>
        </div>
        <p>我的</p>
      </div>
      <div :class="$style.item" class="item">
        <div class="icon">
          <img src="~@/assets/images/icon-radio.jpg" alt>
        </div>
        <p>朋友</p>
      </div>
      <div :class="$style.item" class="item">
        <div class="icon">
          <img src="~@/assets/images/icon-live.jpg" alt>
        </div>
        <p>账号</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getBanner } from "@/request/api";

import SwiperItem from '@/components/base/SwiperItem/index.vue'

export default {
  components: {
    SwiperItem
  },
  data() {
    return {
      banner: [],
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
  },
  mounted() {
    this.initBanner();
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    initBanner() {
      getBanner().then(res => {
        if (res.data.code === 200) {
          this.banner = res.data.banners;
          console.log(this.banner);
        }
      });
    }
  }
};
</script>
<style scoped>
@import "~@/assets/styles/swiper.min.css";
</style>
<style module lang="scss">
.fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
.pannel {
  margin-top: 30px;
  display: flex;
  .item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #575757;
    img {
      width: 84px;
    }
  }
}
.onepxline {
  width: 100%;
  height: 1px;
  background: #efefef;
  margin: 30px 0;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  margin: 30px 0;
  .main {
    flex: 1;
    .input {
      width: 100%;
      height: 64px;
      border-radius: 50px;
      background: #f7f7f7;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 40px;
        margin: 0 15px;
      }
      input {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        box-sizing: border-box;
        color: #999;
        height: 100%;
      }
    }
  }
  .left {
    margin: 0 30px 0 40px;
    .iconfont {
      font-size: 44px;
    }
  }
  .right {
    margin: 0 40px 0 30px;
    .iconfont {
      font-size: 50px;
      font-weight: 700;
    }
  }
}
</style>