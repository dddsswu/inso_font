<template>
  <div class="background">
    <div
      v-for="n in shineStar"
      :key="n"
      :class="n%2===1?'shinestar':'slowshinestar'"
      :style="'left:'+getWidth()+';top:'+getHeight()"
    ></div>
    <div class="moon"></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      shineStar: 300
    };
  },
  computed: {},
  methods: {
    getWidth() {
      let width = Math.random() * 100;
      return width + "%";
    },
    getHeight() {
      let height = Math.random() * 80 + 10;
      height += Math.random() * 5;
      return height + "%";
    }
  },
  created() {
    let _this = this;
    setTimeout(() => {
      _this.getHeight();
      _this.getWidth();
    }, 3000);
  }
};
</script>
<style lang="less" scoped>
.background {
  background-color: black;
  width: 100%;
  height: 100%;
  .shinestar {
    height: 0.1rem;
    width: 0.1rem;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.5);

    position: absolute;
    // animation: shine 5s infinite linear;
    animation: star 5s linear infinite;
  }
  .slowshinestar {
    height: 0.1rem;
    width: 0.1rem;
    background-color: white;
    position: absolute;
    animation: slowshine 10s linear infinite;
  }
  .shinestar::after {
    content: "";
    display: block;
    border: 1px solid #fff;
    border-width: 0px 90px 2px 90px;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.5);
    transform: rotate(-45deg);
  }
  .moon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #f5fffa;
    box-shadow: 0 0 60px #f5fffa;
    position: absolute;
    left: 80%;
    top: 150px;
    //animation: slowshine 10s linear;
  }
}
@keyframes star {
  0% {
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(-300px, 250px);
  }
}

@keyframes slowshine {
  0% {
    //opacity: 0;
    background-color: white;
  }
  50% {
    //opacity: 0.4;
    background-color: black;
  }
  100% {
    //opacity: 0;
    background-color: white;
  }
}
</style>