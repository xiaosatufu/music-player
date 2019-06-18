<template>
  <div>
    <top-header :class="$style.header">
      <template v-slot:left>
        <div :class="$style.left">
          <span :class="$style.iconfont" class="iconfont">&#xe632;</span>
        </div>
      </template>
    </top-header>
  </div>
</template>

<script>
import TopHeader from "@/components/base/TopHeader";
export default {
    components:{
        TopHeader
    }
};
</script>

<style module lang="scss">
.header {
    
}
</style>