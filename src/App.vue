<template>
  <div id="app" :class="$style.app">
    <!-- <router-link to="/foo">foo</router-link> -->
    <!-- <router-link to="/bar">bar</router-link> -->

    <router-view></router-view>
    <!-- <div :class="$style.dd">
      <p>dddd</p>
      <div :class="$style.cc">ccc</div>
    </div>-->
    <pannel-item :class="$style.footer">
      <ul>
        <li v-for="(item,index) in navList" :key="index" :class="{[$style.active]:index===active}">
          <div :class="$style.icon">
            <span :class="$style.iconfont" class="iconfont" v-html="item.icon"></span>
          </div>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </pannel-item>
  </div>
</template>

<script>
import PannelItem from "@/components/base/PannelItem";
export default {
  name: "app",
  components: {
    PannelItem
  },
  data() {
    return {
      active: 0,
      navList: [
        {
          icon: "&#xe725;",
          text: "发现"
        },
        {
          icon: "&#xe613;",
          text: "视频"
        },
        {
          icon: "&#xe700;",
          text: "我的"
        },
        {
          icon: "&#xe61a;",
          text: "朋友"
        },
        {
          icon: "&#xe660;",
          text: "账号"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" module>
.app {
  margin-bottom: 130px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding-bottom: 15px;
  ul {
    display: flex;
    justify-content: center;
    text-align: center;
    li {
      flex: 1;
      font-size: 14px;
      .icon {
        font-size: 50px;
        width: 60px;
        height: 60px;
        margin:0 auto;
        .iconfont {
          font-size: 50px;
        }
      }
      p {
        margin-top: 10px;
      }
      &.active {
        .icon {
          background: red;
          color: #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          color: red;
        }
        // background: red;
        // color:#fff;
        // border-radius: 100px;
      }
    }
  }
}
</style>
