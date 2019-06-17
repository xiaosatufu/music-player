<template>
  <div>
    <!-- home page -->
    <!-- <header :class="$style.header">
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
    </header>-->

    <top-header :class="$style.header">
      <template v-slot:left>
        <div :class="$style.left">
          <span :class="$style.iconfont" class="iconfont">&#xe6b7;</span>
        </div>
      </template>
      <template v-slot:main>
        <div :class="$style.main">
          <div :class="$style.input">
            <span class="iconfont" :class="$style.iconfont">&#xe66f;</span>
            <input type="text" placeholder="搜索音乐、视频、歌词、电台">
          </div>
        </div>
      </template>
      <template v-slot:right>
        <div :class="$style.right">
          <span :class="$style.iconfont" class="iconfont">&#xe629;</span>
        </div>
      </template>
    </top-header>

    <swiper-item :banner="banner" v-if="banner.length>0"></swiper-item>
    <pannel-item :class="$style.pannel">
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
    </pannel-item>
    <single-line></single-line>
    <pannel-item :class="$style.pannelList" title="推荐歌单" subTitle="歌单广场">
      <ul>
        <li v-for="item in personalizedList" :key="item.id">
          <div :class="$style.imgBox">
            <img :src="item.picUrl" alt>
            <div :class="$style.playNum">
              <span :class="$style.iconfont" class="iconfont">&#xe629;</span>
              {{item.playCount | formatCount}}万
            </div>
          </div>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </pannel-item>
    <single-line></single-line>
    <pannel-item
      :class="$style.new"
      :titleArr="['新碟','新歌']"
      :subTitleArr="['更多新碟','新歌推荐']"
      @handleToggle="handleToggle"
    >
      <ul>
        <li v-for="(item,index) in theMiddleList" :key="index">
          <div :class="$style.imgBox">
            <img :src="item.picUrl" alt>
          </div>
          <p class="name">{{item.name}}</p>
          <p class="company">{{item.company}}</p>
        </li>
      </ul>
    </pannel-item>
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
    </div>-->
  </div>
</template>

<script>
import {
  getBanner,
  getPersonalized,
  getTopAlbum,
  getTopSong
} from "@/request/api";

import SwiperItem from "@/components/base/SwiperItem/index.vue";
import TopHeader from "@/components/base/TopHeader";
import PannelItem from "@/components/base/PannelItem";
import SingleLine from "@/components/base/SingleLine";

export default {
  components: {
    SwiperItem,
    TopHeader,
    PannelItem,
    SingleLine
  },
  data() {
    return {
      banner: [],
      personalizedList: [],
      topAlbumList: [],
      topSongList: [],
      theMiddleList: [],
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {},
  filters: {
    formatCount(count) {
      // console.log()
      return parseInt(count / 10000);
    }
  },
  mounted() {
    this.initBanner();
    this.initPersonalized();
    this.initTopAlbum();
    // this.initGetTopSong()
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    initBanner() {
      getBanner().then(res => {
        if (res.data.code === 200) {
          this.banner = res.data.banners;
          // console.log(this.banner);
        }
      });
    },
    initPersonalized() {
      getPersonalized().then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.personalizedList = res.data.result.splice(0, 6);
        }
      });
    },
    initTopAlbum() {
      getTopAlbum().then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          this.topAlbumList = this.theMiddleList = res.data.albums.splice(0, 3);
          // this.theMiddleList =
        }
      });
    },
    initGetTopSong() {
      getTopSong().then(res => {
        if (res.data.code !== 200) return;
        this.topSongList = res.data.data.splice(0, 3);
        // console.log(this.topSongList)
        this.theMiddleList = this.topSongList.map(item => item.album);
        // console.log(aaa)
        // console.log(aaa)
        // console.log(this.topSongList)
      });
    },
    handleToggle(val) {
      val===0?this.initTopAlbum():this.initGetTopSong()
    
    }
  }
};
</script>
<style scoped>
/* @import "~@/assets/styles/swiper.min.css"; */
</style>
<style module lang="scss">
// .fixed {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
// }
.new {
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 220px;
      font-size: 12px;
      .imgBox {
        img {
          width: 220px;
        }
      }
      .name {
        margin-bottom: 5px;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        display: -webkit-box;
      }
    }
  }
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
.pannelList {
  ul {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      // flex:1;
      width: 220px;
      margin-bottom: 15px;
      .imgBox {
        width: 220px;
        position: relative;
        img {
          display: block;
          max-width: 100%;
        }
        .playNum {
          position: absolute;
          top: 7px;
          right: 11px;
          font-size: 12px;
          color: #fff;
          .iconfont {
            font-size: 14px;
          }
        }
      }
      p {
        font-size: 12px;
        color: #474747;
        line-height: 1.4em;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        display: -webkit-box;
      }
    }
  }
}
// .onepxline {
//   width: 100%;
//   height: 1px;
//   background: #efefef;
//   margin: 30px 0;
// }
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
        font-size: 12px;
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