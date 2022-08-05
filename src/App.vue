<template>
  <mainheader></mainheader>
  <!-- <sidebar></sidebar> -->
  <div class="side_wrap">
    <ul>
      <li v-for="(sidemenu, i) in sidemenus" :key="i">
        <a ref="sidebar" v-bind:class="sidetext" href="" v-html="sidemenu"></a>
      </li>
    </ul>
  </div>

  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="30"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    :autoHeight="true"
    
    :modules="modules"
    :options="swiperOption"
    @slideChange="slideChangeTransitionStart"
    
    ref="mySwiper"
    class="mySwiper"
  >
     
    <swiper-slide style="overflow:hidden;"><intro></intro></swiper-slide>
    <swiper-slide style="overflow:hidden;"><about></about></swiper-slide>
    <swiper-slide style="overflow:hidden;"><skilledu></skilledu></swiper-slide>
    <swiper-slide style="overflow:hidden;"><webclone></webclone></swiper-slide>
    <swiper-slide style="overflow:hidden;"><project></project></swiper-slide>
    <swiper-slide style="overflow:hidden;"><contact></contact></swiper-slide>
    <!-- <swiper-slide><test></test></swiper-slide> -->
    
  </swiper>
  <!-- <scrolltop></scrolltop> -->
  
  <div class="bottom_page">
    <div><span id="bottomtext" ref="current_p">{{text1}}</span> / <span v-bind:class="bottomtext">6</span></div>
  </div>
</template>

<script>
import $ from 'jquery';
import mainheader from "./components/MainHeader.vue";
// import sidebar from "./components/SideMenu.vue";
import intro from "./components/intro.vue";
import about from "./components/about.vue";
import skilledu from "./components/skilledu.vue";
import webclone from "./components/webclone.vue";
import project from "./components/project.vue";
import contact from "./components/contact.vue";
// import test from "./components/test_component.vue";
// import scrolltop from './components/scrolltop.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";


import { ref } from "vue";

export default {
  name: "App",
  data() {

    return {
      bottomtext : 'bottomtext',
      sidetext:'sidetext',
      visible: false,
    };
  },
  mounted() {
    const mySwiper = ref("");
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("wheel",function(event){
       if (event.deltaY < 0) {
        mySwiper.value.mousewheel.enable();
      }
    })
  },
  computed: {
    swiper() {
      return this.mySwiper;
    },
  },

  components: {
    mainheader,
    // sidebar,
    Swiper,
    SwiperSlide,

    intro,
    about,
    skilledu,
    webclone,
    project,
    contact
    // scrolltop
  },
  // render : h=>h(test),
  setup() {
    const sidemenus = [
      "MAIN",
      "ABOUT ME",
      "SKILL & EDU",
      "WEB CLONE",
      "PROJECT",
      "CONTACT ME"
      
    ];
    // const sidebar = ref(null); //sidebar
    const current_p = ref(null); //현재 페이지번호
    const text1 = ref("1");
    const mySwiper = ref("");

     const bullet = ['1번', '2번', '3번'];
    const c_bullet= (index,className) => {
       return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
    }

    const stopWheel = () =>{
      console.log("마지막 페이지");
      //mySwiper.value.mousewheel.disable();
      //Swiper.mousewheel.disable();
    }
      
    
    const slideChangeTransitionStart = (index) => {
      /* 현재 슬라이드 인덱스번호를 받아 console창에 출력 : https://archijude.tistory.com/508 */
      console.log(index.activeIndex);
      console.log(sidemenus[index.activeIndex]);
      console.log("sidebar active index:" + sidemenus[index.activeIndex]);

      // for(i=0;i<6;i++){
      //   if(index.activeIndex == i){
      //     document.querySelectorAll('.sidetext')[i].classList.add('side_acti');
      //     console.log("tststs")
      //   }
      //   else{
      //     document.querySelectorAll('.sidetext')[i].classList.remove('side_acti');
      //   }
      // }

      if(index.activeIndex==0){
      // document.querySelectorAll('.sidetext').classList.remove('side_acti');
      //문제1) sidemenus[현재페이지인덱스]의 a태그에 side_acti(opacity:1)을 추가해서 글씨가 나타나게 함
        document.querySelectorAll('.sidetext')[index.activeIndex].classList.add('side_acti');
        text1.value=1;
        // document.getElementById('bottomtext').innerText("222");
      }
      if(index.activeIndex!=0){
        document.querySelectorAll('.sidetext')[0].classList.remove('side_acti');
      }

      if(index.activeIndex==1){
      // document.querySelectorAll('.sidetext').classList.remove('side_acti');
      //문제1) sidemenus[현재페이지인덱스]의 a태그에 side_acti(opacity:1)을 추가해서 글씨가 나타나게 함
      document.querySelectorAll('.sidetext')[index.activeIndex].classList.add('side_acti');
      text1.value=2;
      }
      if(index.activeIndex!=1){
        document.querySelectorAll('.sidetext')[1].classList.remove('side_acti');
      }
      if(index.activeIndex==2){
      // document.querySelectorAll('.sidetext').classList.remove('side_acti');
      //문제1) sidemenus[현재페이지인덱스]의 a태그에 side_acti(opacity:1)을 추가해서 글씨가 나타나게 함
      document.querySelectorAll('.sidetext')[index.activeIndex].classList.add('side_acti');
      text1.value=3;
      }
      if(index.activeIndex!=2){
        document.querySelectorAll('.sidetext')[2].classList.remove('side_acti');
      }
      if(index.activeIndex==3){
      // document.querySelectorAll('.sidetext').classList.remove('side_acti');
      //문제1) sidemenus[현재페이지인덱스]의 a태그에 side_acti(opacity:1)을 추가해서 글씨가 나타나게 함
      document.querySelectorAll('.sidetext')[index.activeIndex].classList.add('side_acti');
      text1.value=4;
      }
      if(index.activeIndex!=3){
        document.querySelectorAll('.sidetext')[3].classList.remove('side_acti');
      }
      if(index.activeIndex==4){
      // document.querySelectorAll('.sidetext').classList.remove('side_acti');
      //문제1) sidemenus[현재페이지인덱스]의 a태그에 side_acti(opacity:1)을 추가해서 글씨가 나타나게 함
      document.querySelectorAll('.sidetext')[index.activeIndex].classList.add('side_acti');
      text1.value=5;
      }
      if(index.activeIndex!=4){
        document.querySelectorAll('.sidetext')[4].classList.remove('side_acti');
      }
      if(index.activeIndex==5){
      // document.querySelectorAll('.sidetext').classList.remove('side_acti');
      //문제1) sidemenus[현재페이지인덱스]의 a태그에 side_acti(opacity:1)을 추가해서 글씨가 나타나게 함
      document.querySelectorAll('.sidetext')[index.activeIndex].classList.add('side_acti');
      text1.value=6;
      }
      if(index.activeIndex!=5){
        document.querySelectorAll('.sidetext')[5].classList.remove('side_acti');
      }
      




      // if (sidemenus[index.activeIndex]) {
      //   document
      //     .getElementsByClassName("sidetext")
      //     [i].classList.add("acti_side ");
      //   console.log("active in about me page !!!!");
      //   // sidemenus[index.activeIndex].$set(this.array[1], "a");
      //   // console.log(sidemenus);

      //   //문제1) sidemenus[현재페이지인덱스]의 a태그에 side_acti(opacity:1)을 추가해서 글씨가 나타나게 함
      //   // sidebar[index.activeIndex].classList.add('side_acti');

      //   //문제2) current_p 넘버를 index.activeIndex 값으로 변경해준다
      //   console.log(this.$refs.current_p.textContent);
      // }
    };


    return {
      c_bullet,
      sidemenus,
      modules: [Mousewheel, Pagination],
      slideChangeTransitionStart,
      stopWheel,
      current_p,
      mySwiper,
      text1
    };
  },
};
</script>

<style>
@font-face {
  font-family: "Pretendard-Bold";
  src: local("Pretendard-Bold"),
    url("./assets/fonts/Pretendard-Bold.otf") format("truetype");
}
@import "./assets/css/main.css";
@import "./assets/css/reset.css";
@import "./assets/css/common.css";


#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  /* background: #fff; */
  font-family: "Pretendard-Bold", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
  overflow:hidden;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
}
.swiper-pagination-vertical.swiper-pagination-bullets,
.swiper-vertical > .swiper-pagination-bullets {
  right: 20px;
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: var(--swiper-pagination-bullet-vertical-gap, 12px) 7px;
  display: block;
}
.swiper-pagination-bullet:hover {
  transform: scale(1.5, 1.5);
  transition: 0.4s;
}

/* :root {
    --swiper-theme-color: #6D7177;
} */

.swiper-pagination-bullet-active {
  --swiper-theme-color: #6d7177;
}

.footerslide{
  width:100%;
  height:60%;
  /* background-color:yellow; */
}
.swiper-wrapper>div:nth-child(6){
  width:100%;
  /* height:60% !important; */
  background-color:#fff;
}

/* header */
#header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  touch-action: none;
  transform: translate3d(0px, 0px, 0px);
  padding: 50px 20px 0 20px;
  width: 100%;
  /* background-color: aquamarine; */
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.h_logo {
  width: 50px;
  height: 63px;
}
.h_logo > a {
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("./assets/images/free-icon-puzzle-786771.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.h_menu {
  width: 45px;
  height: 63px;

  box-sizing: border-box;
}
.h_menu > a {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: url('./assets/images/123.png');
      background-size:100% 100%;
      background-repeat: no-repeat; */
}
.h_menu span {
  display: block;
  background-color: #000;
  width: 100%;
  height: 2px;
  margin-top: 10px;
}

/* 현재페이지 */
.bottom_page {
  position: absolute;
  z-index: 3;
  right: 44px;
  bottom: 50px;
  display: block;
  font-size: 18px;
  color: #000;
}
.current_p {
}

/* sidebar */
.side_wrap {
  /* background-color: yellow; */
  position: absolute;
  z-index: 3;
  right: 44px;
  top: 50%;
  transform: translate(0, -50%);
  display: block;
}
.side_wrap li {
  text-align: right;
  margin-top: 0px;
}
.side_wrap a {
  display: block;
  font-size: 15px;
  color: #6d7177;
  opacity: 0;
}

.sidetext{
    color:#000;
    font-size:20px;
    display: block;
}
.side_acti {
  /* sidemenu 현재페이지 이름 보이게 하기 */
  opacity: 1 !important;
}

.bottomtext{
  color: #999;


}

.mySwiper2 .swiper-pagination-vertical.swiper-pagination-bullets,
.mySwiper2 .swiper-vertical > .swiper-pagination-bullets {
  /* https://velog.io/@kyh196201/2021.06.28-vue3-swipervue-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0 */
    top:90px !important;
    right:90px !important;
    /* left:0 !important; */
    display:flex;
}


.mySwiper2 .swiper-pagination-bullets.swiper-pagination-horizontal{
  bottom:50px !important;
  /* top:80px !important; */
  right:-330px !important;
  /* left:0 !important; */
  margin-right:90px;
  z-index: 15 !important;
}

.mySwiper2 .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: var(--swiper-pagination-bullet-vertical-gap, 12px) 7px;
    display: block;
}

.mySwiper2 .swiper-pagination-bullet{
  width:60px;
  height:10px;
}
.mySwiper2 .swiper-pagination-bullet{
  border-radius : 0;
} 
.mySwiper2 .swiper-button-next,
.mySwiper2 .swiper-rtl .swiper-button-prev{
  right:50px;
}
.mySwiper2 .swiper-pagination-bullet:hover {
    transform: scale(1, 1) !important;
    transition: 0.4s;
    /* background-color:yellow; */
}

/* mySwiper3 custom (webclone) */
/* .mySwiper3 .swiper-button-prev,
.mySwiper3 .swiper-button-next {
  width: 50%;
  height: 100%;
  top: 0;
  margin: 0;
  transition: cursor 0.3s;

  /* &::after {
    display: none;
  }
} */

/* .mySwiper3 .swiper-button-prev {
  left: 0;
  cursor: url(https://i.ibb.co/jh8Y5f5/iconfinder-left-arrow-476327.png) 32 32,
    auto;
}

.mySwiper3 .swiper-button-next {
  right: 0;
  cursor: url(https://i.ibb.co/PtH8dC5/iconfinder-right-arrow-476325.png) 32 32,
    auto;
} */





/* background 이미지 rotate 관련 css */
.bg {
  /* position:relative; */
}
.bg .rotate {
  -webkit-animation: rotateBox 25s linear infinite;
  animation: rotateBox 25s linear infinite;
  top: 50%;
  left: 50%;
  position: absolute;
  will-change: transform;

  -webkit-transform: translate(-50%, -50%) rotate(0);
  -ms-transform: translate(-50%, -50%) rotate(0);
  transform: translate(-50%, -50%) rotate(0);
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;

  width: 850px;
  height: 850px;
}
.bg .rotate > span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 700px;
  height: 700px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  will-change: transform;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  transition: filter 0.25s cubic-bezier(0.48, 0.04, 0.22, 0.99),
    -webkit-transform 0.25s cubic-bezier(0.48, 0.04, 0.22, 0.99);
  -webkit-filter: blur(4.5rem);
  filter: blur(4.5rem);
  position: absolute;
}
.bg .rotate > span.bg-img01 {
  left: 50%;
  top: 0;
  -webkit-transform: translateX(-50%) rotate(50deg);
  -ms-transform: translateX(-50%) rotate(50deg);
  transform: translateX(-50%) rotate(50deg);
  -webkit-animation: bgAni1 18s linear infinite;
  animation: bgAni1 18s linear infinite;
}
.bg .rotate > span.bg-img02 {
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
  left: 0;
  bottom: 0;
  -webkit-animation: bgAni2 18s linear infinite 1s;
  animation: bgAni2 18s linear infinite 1s;
  opacity: 0.8;
}
.bg .rotate > span.bg-img03 {
  right: 0;
  bottom: 0;
  -webkit-transform: rotate(80deg);
  -ms-transform: rotate(80deg);
  transform: rotate(80deg);
  -webkit-animation: bgAni3 18s linear infinite 0.5s;
  animation: bgAni3 18s linear infinite 0.5s;
}
@keyframes rotateBox {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0);
  }

  100% {
    -webkit-transform: translate(-50%, -50%) rotate(-360deg);
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@keyframes bgAni1 {
  0% {
    -webkit-transform: translateX(-50%) rotate(50deg);
    transform: translateX(-50%) rotate(50deg);
  }
  100% {
    -webkit-transform: translateX(-50%) rotate(410deg);
    transform: translateX(-50%) rotate(410deg);
  }
}
@keyframes bgAni2 {
  0% {
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
  }
  100% {
    -webkit-transform: rotate(400deg);
    transform: rotate(400deg);
  }
}
@keyframes bgAni3 {
  0% {
    -webkit-transform: rotate(80deg);
    transform: rotate(80deg);
  }
  100% {
    -webkit-transform: rotate(-280deg);
    transform: rotate(-280deg);
  }
}
</style>
