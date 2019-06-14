<template>
  <div id="app">
    <!-- <router-link to="/foo">foo</router-link> -->
    <!-- <router-link to="/bar">bar</router-link> -->
    
    <router-view></router-view>
    <!-- <div :class="$style.dd">
      <p>dddd</p>
      <div :class="$style.cc">ccc</div>
    </div> -->
  </div>
</template>

<script>
import { getTopArtists } from "./request/api/test";
export default {
  name: "app",
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss" module>
.dd {
  // font-size: 150px;
  color: red;
  p {
    font-size: 120px;
  }
  .cc {
    width: 20px;
    height:20px;
    border:solid 1px red;
  }
}
</style>
