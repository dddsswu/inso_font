<template>
  <div class="content">
    <div class="header_box">
      <div class="logo">
        <span>{{ logomsg }}</span>
      </div>
      <div @click="toHome" class="main_box">{{ title }}</div>
      <div class="user">
        <div v-if="isLogined">
          <span>你好：{{ username }}</span>
          <span @click="loginout">退出</span>
        </div>
        <div v-if="!isLogined">
          <span>未登录&emsp;&emsp;</span>
          <router-link to="/login">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: function() {
    return {
      logomsg: "蜗牛中...",
      title: "醉后不知天在水，满床星梦压星河。"
    };
  },
  computed: {
    ...mapState(["isLogined", "username"])
  },
  methods: {
    ...mapActions(["loginout"]),
    toHome() {
      this.$router.push("/");
    },
    loginout() {
      let _this = this;
      this.$confirm("你想要退出嘛？").then(
        () => {
          _this.loginout();
          _this.$router.go("/");
        },
        () => {}
      );
    }
  }
};
</script>

<style scoped lang="less">
@import "./css/common.less";
.content {
  color: @app-orgen;
  font-size: 0.9rem;
  height: 2rem;
  width: 100%;
  .header_box {
    display: flex;
    text-align: center;
    .logo {
      border-right: 1px solid red;
      width: 20%;
    }
    .main_box {
      border-right: 1px solid red;
      width: 59.9%;
    }
    .user {
      color: @app-red;
      width: 20%;
    }
  }
}
@media screen and(max-width: 700px) {
  .logo {
    display: none;
  }
  .user {
    width: 40% !important;
  }
}
</style>
