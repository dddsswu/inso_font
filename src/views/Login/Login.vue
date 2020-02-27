<template>
  <div class="content">
    <!-- 放入背景图 -->
    <div class="background_img">
      <!-- 居中的登录框 -->
      <div class="login_box">
        <div v-show="msg" class="app-input errormsg">
          <p>{{msg}}</p>
        </div>
        <div class="app-input">
          账号：
          <input type="text" v-model="user.username" />
        </div>
        <div class="app-input">
          密码：
          <input type="password" v-model="user.password" />
        </div>
        <div class="app-input">
          验证码：
          <input type="text" v-model="inputCode" />
        </div>
          <div class="yanzhengma">验证码：{{randomCode}}</div>
        <div class="app-input">
          <button class="app-button" @click="Submit">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      randomCode: false,
      pending: false,
      user: { username: "", password: "" },
      inputCode: "",
      msg: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    compareCode(code1, code2) {
      let c1 = code1.toLowerCase();
      let c2 = code2.toLowerCase();
      return c1 === c2 ? true : false;
    },
    async Submit() {
      if (this.pending) return;
      if (this.user.username === "" || this.user.password === "")
        return (this.msg = "账号/密码不能为空");
      if (this.inputCode === "") return (this.msg = "验证码不能为空");
      this.pending = true;
      if (this.compareCode(this.randomCode, this.inputCode)) {
        //输入正确
        try {
          let res = await this.$ajax("/login", "POST", this.user);
          if (res.data.code === 0) return (this.msg = res.data.msg);
          else {
            this.login({ isLogined: true, username: res.data.username });
            this.$alert("登录成功").then(() => {
              this.$router.push("/");
            });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        //输入错误
        this.msg = "请输入正确验证码";
        this.inputCode = "";
        this.pending = false;
        this.$alert(this.msg).then(() => {
          this.init();
        });
      }
      this.pending = false;
    },

    async init() {
      let res = await this.$ajax("/login", "GET");
      console.log(res);
      this.randomCode = res.data.randomCode;
    }
  },
  created() {
    this.init();
  }
};
</script>

<style scoped lang='less'  >
@import "../../components/css/common.less";
.content {
  height: 100%;
  .background_img {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-image: url("../../assets/images/login.jpg");
  }
}
.login_box {
  position: absolute;
  height: 25rem;
  width: 25rem;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  text-align: center;
  opacity: 0.4;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.errormsg {
  color: @app-red;
  p {
    margin-block-start: 0.5em;
  }
}
.yanzhengma{
    width: 60%;
        margin: -1rem;
        height: 2rem;   
}
</style>