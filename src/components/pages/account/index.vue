<template>
  <div>
    <top-header :class="$style.header">
      <template v-slot:left>
        <div :class="$style.left">
          <span :class="$style.iconfont" class="iconfont">&#xe632;</span>
        </div>
      </template>
    </top-header>
    <div :class="$style.loginBox" v-if="!isLogin">
      <p>
        登录网易云音乐
        <br>手机电脑多端同步,尽享海量高品质音乐
      </p>
      <div :class="$style.btn" @click="handleShowLogin">立即登录</div>
    </div>
    <div :class="$style.profileBox" v-else>
      <div :class="$style.profileHeader">
        <div :class="$style.information">
          <div :class="$style.avator">
            <img :src="profile.avatarUrl" alt>
          </div>
          <div :class="$style.nickname">{{profile.nickname}}</div>
        </div>
        <div :class="$style.signInBtn">签到</div>
      </div>
      <ul>
        <li>
          <div :class="$style.number">{{profile.eventCount}}</div>
          <p>动态</p>
        </li>
        <li @click="handleGoFollows">
          <div :class="$style.number">{{profile.follows}}</div>
          <p>关注</p>
        </li>
        <li>
          <div :class="$style.number">{{profile.followeds}}</div>
          <p>粉丝</p>
        </li>
        <li>
          <div>
            <span :class="$style.iconfont" class="iconfont">&#xe70d;</span>
          </div>
          <p>编辑资料</p>
        </li>
      </ul>
    </div>
    <list-item :list="listArr1"></list-item>
    <list-item :list="listArr2"></list-item>
    <list-item :list="listArr3"></list-item>
    <div :class="$style.logoutBtn" @click="handleLogout" v-if="isLogin">退出登录</div>
    <van-popup :class="$style.loginPopup" v-model="show" position="bottom" :overlay="false">
      <div :class="$style.closeBtn" @click="handleCloseLoginPopup">
        <span :class="$style.iconfont" class="iconfont">&#xe677;</span>
      </div>
      <div :class="$style.btnGroup">
        <div :class="$style.btn" @click="handleLoginForm(0)">手机号登录</div>
        <div :class="$style.btn" @click="handleLoginForm(1)">邮箱登录</div>
      </div>
    </van-popup>
    <van-popup :class="$style.formBoxPopup" v-model="formShow" position="right" :overlay="false">
      <top-header :class="$style.header">
        <template v-slot:left>
          <div :class="$style.left" @click="handleHideFormBoxPopup">
            <span :class="$style.iconfont" class="iconfont">&#xe646;</span>
          </div>
        </template>
        <template v-slot:main>
          <div :class="$style.main">使用网易邮箱登录</div>
        </template>
        <template v-slot:right>
          <div :class="$style.main"></div>
        </template>
      </top-header>
      <van-cell-group :class="$style.emailForm">
        <van-field :class="$style.input" v-model="email" placeholder="登录邮箱"/>
        <van-field :class="$style.input" v-model="password" placeholder="密码"/>
      </van-cell-group>
      <div :class="$style.loginBtn" @click="handleEmailLogin">登录</div>
    </van-popup>
  </div>
</template>

<script>
import TopHeader from "@/components/base/TopHeader";
import ListItem from "@/components/base/ListItem";
import {
  emailLogin,
  userSubcount,
  checkLoginStatus,
  logout
} from "@/request/api";
import localStorage from "localStorage";
export default {
  // name:"account"
  components: {
    TopHeader,
    ListItem
  },
  data() {
    return {
      email: "",
      password: "",
      show: false,
      profile: {},
      formShow: false,
      isLogin: false,
      listArr1: [
        {
          icon: "&#xe70a;",
          text: "口袋铃声",
          type: "arrow"
        }
      ],
      listArr2: [
        {
          icon: "&#xe609;",
          text: "设置",
          type: "arrow"
        },
        {
          icon: "&#xe633;",
          text: "夜间模式",
          type: "switch"
        },
        {
          icon: "&#xe685;",
          text: "定时关闭",
          type: "arrow"
        },
        {
          icon: "&#xe685;",
          text: "音乐闹钟",
          type: "arrow"
        }
      ],
      listArr3: [
        {
          icon: "&#xe621;",
          text: "我要直播",
          type: "arrow"
        },
        {
          icon: "&#xe6fb;",
          text: "分享网易云音乐",
          type: "arrow"
        },
        {
          icon: "&#xe634;",
          text: "关于",
          type: "arrow"
        }
      ]
    };
  },
  mounted() {
    this.handleCheckLoginStatus();
  },
  methods: {
    handleGoFollows() {
      this.$router.push("/account/follows");
    },
    handleLogout() {
      logout().then(res => {
        if (res.data.code === 200) {
          this.$toast("退出登录成功");
          this.$router.replace("/");
        }
      });
    },
    handleCheckLoginStatus() {
      checkLoginStatus().then(res => {
        if (res.data.code === 200) {
          this.profile = JSON.parse(localStorage.getItem("profile"));
          this.isLogin = true;
        } else {
          localStorage.removeItem("profile");
          this.isLogin = false;
        }
      });
    },
    handleShowLogin() {
      this.show = true;
    },
    handleCloseLoginPopup() {
      this.show = false;
    },
    handleLoginForm(type) {
      this.formShow = true;
    },
    handleHideFormBoxPopup() {
      this.formShow = false;
    },
    handleEmailLogin() {
      console.log(this.email);
      console.log(this.password);
      if (!this.email && !this.password) {
        this.$toast("邮箱或者密码不能为空");
        return;
      }
      emailLogin(this.email, this.password).then(res => {
        if (res.data.code === 200) {
          localStorage.setItem("profile", JSON.stringify(res.data.profile));
          this.$router.push("/");
        } else {
          this.$toast("输入有误,请重新输入");
        }
      });
    }
  }
};
</script>
<style lang="scss">
</style>
<style module lang="scss">
.logoutBtn {
  border-top: solid 15px #f8f8f8;
  //   display: flex;
  height: 90px;
  background: #fff;
  color: #ca3e2f;
  font-weight: 700;
  text-align: center;
  line-height: 90px;
  //   justify-content: space-between;
  //   align-items: center;
}
.profileBox {
  margin: 0 30px;
  .profileHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .information {
      display: flex;
      align-items: center;
      .avator {
        width: 150px;
        border-radius: 150px;
        overflow: hidden;
        img {
          display: block;
          max-width: 100%;
        }
      }
      .nickname {
        font-size: 30px;
        margin-left: 30px;
      }
    }
    .signInBtn {
      padding: 12px 20px;
      border: solid 1px #cccccc;
      font-size: 20px;
      border-radius: 50px;
    }
  }
  ul {
    margin-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    li {
      flex: 1;
      text-align: center;
      font-size: 24px;
      p {
        margin-top: 15px;
      }
      .iconfont {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
}
.loginPopup {
  height: 100vh;
  background: #ca3e2f;
  .closeBtn {
    position: absolute;
    top: 30px;
    left: 30px;
    .iconfont {
      color: #fff;
      font-size: 40px;
    }
  }
  .btnGroup {
    position: absolute;
    bottom: 0;
    width: 100%;
    .btn {
      margin: 0 135px 30px;
      height: 120px;
      background: #fff;
      color: #ca3e2f;
      text-align: center;
      line-height: 120px;
      border-radius: 100px;
      font-weight: 700;
    }
  }
}
.formBoxPopup {
  z-index: 3000;
  width: 100vw;
  background: #fff;
  height: 100vh;
  .main {
    text-align: center;
    font-size: 28px;
  }

  .emailForm {
    .input {
      font-size: 30px;
      margin-top: 30px;
      input {
        text-indent: 30px;
      }
    }
  }
  .loginBtn {
    margin: 0 30px;
    height: 60px;
    background: #ca3e2f;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    line-height: 60px;
    margin-top: 50px;
  }
}
.loginBox {
  text-align: center;
  font-size: 30px;
  line-height: 1.6em;
  .btn {
    margin: 30px 30px 50px;
    border: solid 1px #d9d9d9;
    font-size: 30px;
    padding: 15px 0;
    border-radius: 30px;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  margin: 30px 0;
  > div {
    flex: 1;
  }
  .left {
    margin: 0 30px 0 40px;
    .iconfont {
      font-size: 44px;
    }
  }
}
</style>