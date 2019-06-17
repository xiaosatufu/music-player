<template>
  <div :class="$style.pannel">
    <div :class="$style.nav">
      <div :class="$style.title" v-if="title">{{title}}</div>
      <div v-if="titleArr.length>0" :class="$style.titleArr">
        <div
          :class="{[$style.title]:true,[$style.active]:index===defaultActive}"
          v-for="(item,index) in titleArr"
          @click="handleToggle(index)"
          :key="index"
        >{{item}}</div>
      </div>
      <div :class="$style.subtitle" v-if="subTitle">{{subTitle}}</div>
      <div v-if="subTitleArr.length>0" :class="$style.subTitleArr">
        <div
          :class="$style.title"
          v-show="index===defaultActive"
          v-for="(item,index) in subTitleArr"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <!-- <div :class="$style.listContainer"> -->
    <slot></slot>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    titleArr: {
      type: Array,
      default: () => []
    },
    subTitleArr: {
      type: Array,
      default: () => []
    },
    subTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      defaultActive: 0
    };
  },
  methods: {
    handleToggle(index) {
      this.defaultActive = index;
      this.$emit('handleToggle',index)
    }
  }
};
</script>

<style module lang="scss">
.pannel {
  margin: 0 30px;
  .nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 12px;
    align-items: center;
    .title {
      font-weight: 700;
      font-size: 24px;
    }
    .subtitle {
      border: solid 1px #e6e6e6;
      padding: 10px 20px;
      border-radius: 30px;
    }
    .subTitleArr {
      .title {
        border: solid 1px #e6e6e6;
        padding: 10px 20px;
        border-radius: 30px;
        font-weight:normal;
      }
    }

    .titleArr {
      display: flex;
      .title {
        font-size: 16px;
        padding: 0 10px;
        font-weight: normal;
        color: #929292;
        &.active {
          font-weight: 700;
          color: #000;
          font-size: 18px;
        }
        &:last-child {
          border-left: solid 1px #f4f4f4;
        }
      }
    }
  }
}
</style>