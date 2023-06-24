<template>
  <div id="home">
    <div
      class="mask_ban_touch"
      v-if="!flag"
    ></div>

    <div
      :style="{ background: `url(${imgUrl})` }"
      :class="['wrapper', 'bg-blur']"
    >
      <div :class="['img_shadow', { img_shadow_show: imgLoded }]"></div>
      <div class="inner" @click="goToBlog">
        <img
          :class="['R_logo', { R_logo_top: flag }]"
          src="../assets/logo.svg"
        />
        <div :class="['hello', { hello_bottom: flag }]">
          <div>{{ slogan[i] }}</div>
          <div class="hello_bottom_text">
            点击以访问 {{ $config.BLOG_NAME }}
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <a href="https://beian.miit.gov.cn/" rel="external nofollow noreferrer" target="_blank">粤ICP备2022014981号</a>
    </div>
  </div>
</template>

<script>
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
export default {
  name: "home",
  data() {
    this.startTime = new Date();
    return {
      flag: false,
      slogan: [],
      i: 0,
      imgLoded: false,
      imgUrl: ""
    };
  },
  methods: {
    goToBlog() {
      window.location.href = this.$config.BLOG_URL;
    },
  },
  mounted() {
    setTimeout(() => {
      this.flag = true;
    }, 1300);
    // 图片懒加载
    this.imgUrl = this.$config.BACKGROUND_IMG_URL;
    var img = new Image();
    img.src = this.imgUrl;
    img.onload = () => {
      this.imgLoded = true;
    };
    this.slogan = this.$config.SLOGAN;
    this.i = randomNum(0, this.slogan.length - 1);
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .mask_ban_touch {
    width: 100%; 
    height: 100%; 
    z-index: 999; 
    position: absolute;
  }
  .wrapper {
    background-size: cover !important;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100%;
    animation: logoEnter 1.2s;
    animation-fill-mode: forwards;
    transition: all 0.8s;
    .inner {
      position: relative;
      cursor: pointer;
      user-select: none;
      .R_logo {
        height: 7rem;
        position: absolute;
        transform: translate(-50%, -50%);
        transition: all 1s;
        top: 0;
      }
      .R_logo_top {
        top: -3.2rem;
      }
      .hello {
        color: #ffffff;
        width: 24rem;
        text-align: center;
        position: absolute;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        opacity: 0;
        top: 100px;
        transition: all 1s;
      }
      .hello_bottom {
        opacity: 1;
        top: 3.5rem;
        .hello_bottom_text {
          font-size: 1rem;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #fff;
        }
      }
    }
  }
  .img_shadow {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #0095b6;
    overflow: hidden;
    transition: all 0.5s;
  }
  .img_shadow_show {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .wrapper_blur {
    filter: blur(1px);
  }
  .bottom {
    font-size: 2rem;
    position: absolute;
    color: #fff;
    bottom: 0%;
    opacity: 0;
    transition: all 1s;
    text-align: center;
    .bottom-info {
      font-size: 1rem;
      margin-top: 5px;
      animation: float 4s infinite ease-in-out;
    }
  }
}

@media screen and (max-width: 900px) {
  #home {
    .center_wrapper {
      .center_inner {
        width: 100%;
        bottom: 0px;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes logoEnter {
  0% {
    opacity: 0;
    width: 0rem;
    height: 0rem;
  }
  20% {
    opacity: 1;
    width: 15rem;
    height: 15rem;
  }
  80% {
    transform: rotate(360deg);
    width: 15rem;
    height: 15rem;
  }
  100% {
    transform: rotate(360deg);
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 5px 0;
  background: rgba(255, 255, 255, .2);
  a {
    color: #ffffff;
  }
}
</style>
