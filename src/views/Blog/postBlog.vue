<template>
  <div class="blog_box">
    <app-leftslider @app-addphoto="addphoto($event)" :photo="true"></app-leftslider>
    <textarea class="input_code" v-model="msg"></textarea>
    <div class="show_box">
      <div class="img_box"><img v-if="laste" :src="laste" /></div>  
      <div class="input_blog" v-html="msg"></div>
    </div>
    <input
      @change="drawpic"
      style="display:none"
      type="file"
      ref="photo"
      multiple="false"
      accept="image/*"
    />
  </div>
</template>
<script>
import leftSlider from "../../components/leftSlider";
export default {
  data: function() {
    return {
      msg: "",
      count: 0,
      photo: [],
      laste: ""
    };
  },
  components: {
    "app-leftslider": leftSlider
  },
  methods: {
    addphoto(val) {
      if (val) {
        let node = this.$refs.photo;
        node.click();
      }
    },
    drawpic(e) {
      let _this = this;
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 720;
      const ctx = canvas.getContext("2d");
      var files = e.target.files;
      var image = new Image();
      image.src = window.URL.createObjectURL(files[0]);
      image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        var base64Img = canvas.toDataURL("image/jpg", 0.8);
        _this.laste = base64Img;
      };
      //var dataURL = canvas.toDataURL()
      console.log(_this.laste);
    }
  }
};
</script>

<style lang="less" scoped>
.blog_box {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  .input_code {
    width: 40%;
    resize: none;
    height: 100%;
  }
  .show_box {
      width: 40%;
     display: flex; 
     flex-wrap: wrap;
     align-items: flex-start;
    .img_box{
        width: 100%;
        height: 40%;
      border: 1px solid yellow;

    img {
      width: 100%;
      height: 100%;
    }
    }
    .input_blog {
        margin-top: -14rem;
      width: 100%;
      //border: 1px solid yellow;
    }
  }
}
</style>