<template>
  <div id="app">
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
    
    <router-view></router-view>
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

<style>
</style>
