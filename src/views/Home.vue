<template >
  <div class="content_home">
    <app-leftslider :username="username" :isLogined="isLogined" :blog="true" :textblog="true"></app-leftslider>
    <div class="main_fun">
      <app-image></app-image>
      <div class="msg_box">
        <span>留言板：</span>
        <app-msgbox></app-msgbox>
      </div>
    </div>

    <app-rightslider
      :username="username"
      :isLogined="isLogined"
      :posthope="true"
      :clock="true"
      :groupchat="true"
    ></app-rightslider>
  </div>
</template>
<script>
import msgBox from "../components/homeimage/msgbox.vue";
import LeftSlider from "../components/leftSlider.vue";
import RightSlider from "../components/rightSlider.vue";
import Image from "../components/homeimage/Homeimage.vue";
import { mapState } from "vuex";
export default {
  components: {
    "app-leftslider": LeftSlider,
    "app-image": Image,
    "app-rightslider": RightSlider,
    "app-msgbox": msgBox
  },
  computed: {
    ...mapState(["username", "isLogined"])
  },
};
</script>
<style scoped lang="less">
@import url("../components/css/common.less");
.content_home {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .main_fun {
    height: 100%;
    width: @home-width;
    display: flex;
    flex-wrap: wrap;
    .msg_box {
      margin-top: 0.5rem;
      height: auto;
      width: 100%;
      background-color: rgb(235, 235, 235);
      span {
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .main_fun {
    width: 100% !important;
  }
}
</style>

