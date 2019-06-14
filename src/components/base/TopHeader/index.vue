<template>
    <header :class="$style.header">
        <slot></slot>
        <slot></slot>
        <slot></slot>
      <!-- <div :class="$style.left">
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
      </div> -->
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style module lang="scss">

</style>