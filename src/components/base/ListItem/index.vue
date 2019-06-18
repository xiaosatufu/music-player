<template>
  <div>
    <ul :class="$style.list">
      <li v-for="(item,index) in list" :key="index">
        <div :class="$style.left">
          <div :class="$style.iconfont" class="iconfont" v-html="item.icon"></div>
          <div :class="$style.text">{{item.text}}</div>
        </div>
        <div :class="$style.right">
          <template v-if="item.type==='arrow'">
            <span :class="$style.iconfont" class="iconfont">&#xe770;</span>
          </template>
          <template v-else>
            <van-switch v-model="checked" active-color="#000" size="30"/>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data(){
      return {
          checked:false
      }
  }
  
};
</script>

<style module lang="scss">
.list {
  border-top: solid 15px #f8f8f8;
  li {
    display: flex;
    height: 90px;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 50px;
        padding: 0 20px;
      }
      .text {
        font-size: 30px;
      }
    }
    .right {
      padding-right: 30px;
      .iconfont {
        font-size: 50px;
      }
    }
  }
}
</style>