<template id="aboutp">

  <div class="bgImages">
    <div class="bg">
      <div class="rotate">
        <span class="bg-img01">
          <img src="../assets/images/circle_img1.png" alt="bg1">
        </span>
        <span class="bg-img02">
          <img src="../assets/images/circle_img2.png" alt="bg2">
        </span>
        <span class="bg-img03">
          <img src="../assets/images/circle_img3.png" alt="bg3">
        </span>
      </div>
    </div>
  </div>


  <!-- about me -->
  <div class="about_div">
    <div class="about_l">
      <div class="about_t">ABOUT ME</div>
      <div class="about_mid">
        <p>안녕하세요</p>
        <p>
          <span class="font-white">김유라</span>입니다.
        </p>
      </div>
      <div class="about_mid2">
        소통하며 개발하는 프론트엔드 개발자입니다.
        <br>
        소프트웨어 전공으로 배운 백엔드 지식을 기반으로 함께 소통하며,
        <br>
        열린 사고와 태도를 바탕으로 새로운 것을 알아감에 두려워 하지 않습니다.
        <br>
        사용자의 관점에서 생각하고, 누구나 편하게 이용할 수 있는 웹을 만드는 사람이 되겠습니다.
      </div>

      <div class="about_bottom">
        <div>
          <div class="about_icon aicon1"></div>
          <div class="about_txt">ura3118@naver.com</div> 
        </div>
        <div>
          <div class="about_icon aicon2"></div>
          <div class="about_txt">
            <a href="">Github</a>
          </div> 
        </div>
        <div>
          <div class="about_icon aicon3"></div>
          <div class="about_txt">010 - 4814 - 3118</div> 
        </div>
      </div>
    </div>

    <!-- skill -->
    <div class="about_r">
      <div v-if="hover1p" class="skill1_p">
        <CircleProgress :percent="percent" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>
      <div v-if="hover2p" class="skill1_p">
        <CircleProgress :percent="percent2" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>
      <div v-if="hover3p" class="skill1_p">
        <CircleProgress :percent="percent3" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>
      <div v-if="hover4p" class="skill1_p">
        <CircleProgress :percent="percent4" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>
      <div v-if="hover5p" class="skill1_p">
        <CircleProgress :percent="percent5" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>
      <div v-if="hover6p" class="skill1_p">
        <CircleProgress :percent="percent6" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>
      <div v-if="hover7p" class="skill1_p">
        <CircleProgress :percent="percent7" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>
      <div v-if="hover8p" class="skill1_p">
        <CircleProgress :percent="percent8" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>
      <div v-if="hover9p" class="skill1_p">
        <CircleProgress :percent="percent9" :viewport="true" :show-percent="false" :is-gradient="true" :gradient="{
          angle: 90,
          startColor: '#fff',
          stopColor: '#ED8B86'
          }"
        />
      </div>

      <div v-if="hover" id="skill1">
        <div class="img1"></div>
      </div>
      <div v-if="hover2" id="skill1">
        <div class="img2"></div>
      </div>
      <div v-if="hover3" id="skill1">
        <div class="img3"></div>
      </div>
      <div v-if="hover4" id="skill1">
        <div class="img4"></div>
      </div>
      <div v-if="hover5" id="skill1">
        <div class="img5"></div>
      </div>
      <div v-if="hover6" id="skill1">
        <div class="img6"></div>
      </div>
      <div v-if="hover7" id="skill1">
        <div class="img7"></div>
      </div>
      <div v-if="hover8" id="skill1">
        <div class="img8"></div>
      </div>
      <div v-if="hover9" id="skill1">
        <div class="img9"></div>
      </div>

      <div class="box">
        <div class="ball" :class="{hovering: ishovering}">
            <div class="line1" >
              <div style="position:absolute; top:10%; right:-35px; tansform:translate(0,-50%);">
                <a href="" @mouseover="hover=true; hover1p=true; ishovering=true;"  @mouseleave="hover=false;hover1p=false; ishovering=false;" style="display:block;width:100%; height:120%;">HTML &nbsp;&nbsp;&nbsp;</a>
              </div>
              
              <!-- <div style="position:absolute; top:70px; right:-10px;">h</div> -->
            </div>
  
            <div class="line2">
              <div style="position:absolute; top:20%; right:-35px; tansform:translate(0,-50%);">
                <a href="" @mouseenter="hover2=true; hover2p=true; ishovering=true;" @mouseleave="hover2=false; hover2p=false; ishovering=false;" style="display:block;width:100%; height:120%;">CSS &nbsp;&nbsp;&nbsp;</a>
              </div>
              <!-- <div style="position:absolute; top:40px; right:0;">2</div> -->
            </div>
            <div class="line3">
              <div style="position:absolute; top:30%; right:-95px; tansform:translate(0,-50%);">
                <a href="" @mouseenter="hover3=true; hover3p=true; ishovering=true;" @mouseleave="hover3=false; hover3p=false; ishovering=false;" style="display:block;width:100%; height:120%;">JavaScript &nbsp;&nbsp;&nbsp;</a>
              </div>
            </div>
            <div class="line4">
              <div style="position:absolute; top:40%; right:-65px; tansform:translate(0,-50%);">
                <a href="" @mouseenter="hover4=true;  hover4p=true; ishovering=true;" @mouseleave="hover4=false; hover4p=false; ishovering=false;" style="display:block;width:100%; height:120%;">Vue.js &nbsp;&nbsp;&nbsp;</a>
              </div>
            </div>
            <div class="line5">
              <div style="position:absolute; top:50%; right:-75px; tansform:translate(0,-50%);">
                <a href="" @mouseenter="hover5=true; hover5p=true; ishovering=true;" @mouseleave="hover5=false; hover5p=false; ishovering=false;" style="display:block;width:100%; height:120%;">NODE.js &nbsp;&nbsp;&nbsp;</a>
              </div>
            </div>
            <div class="line6">
              <div style="position:absolute; top:60%; right:-55px; tansform:translate(0,-50%);">
                <a href="" @mouseenter="hover6=true; hover6p=true; ishovering=true;" @mouseleave="hover6=false; hover6p=false; ishovering=false;" style="display:block;width:100%; height:120%;">jQuery &nbsp;&nbsp;&nbsp;</a>
              </div>
            </div>
            <div class="line7">
              <div style="position:absolute; top:70%; right:-55px; tansform:translate(0,-50%);">
                <a href="" @mouseenter="hover7=true; hover7p=true; ishovering=true;" @mouseleave="hover7=false; hover7p=false; ishovering=false;" style="display:block;width:100%; height:120%;">MySQL &nbsp;&nbsp;&nbsp;</a>
              </div>
            </div>
            <div class="line8">
              <div style="position:absolute; top:80%; right:-40px; tansform:translate(0,-50%);">
                <a href="" @mouseenter="hover8=true; hover8p=true; ishovering=true;" @mouseleave="hover8=false; hover8p=false; ishovering=false;" style="display:block;width:100%; height:120%;">Github &nbsp;&nbsp;&nbsp;</a>
              </div>
            </div>
            <div class="line9">
              <div style="position:absolute; top:90%; right:-25px; tansform:translate(0,-50%);">
                <a href="" @mouseenter="hover9=true; hover9p=true; ishovering=true;" @mouseleave="hover9=false; hover9p=false; ishovering=false;" style="display:block;width:100%; height:120%;">Heroku &nbsp;&nbsp;&nbsp;</a>
              </div>
            </div>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
import { reactive } from '@vue/reactivity';
import { ref, onMounted } from "vue";
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";


//기존 코드에서는 props, data, methods가 같은 계층에 존재했습니다.
// 하지만 Vue3에서는 props와 setup이 같은 계층에 존재하고,
// data는 state로,
// method 들은 각각의 기명함수로 작성되어
// 한번에 반환되도록 변화하였습니다.

//state의 경우에도 그냥 선언하는 것이 아니라, vue reactive를 사용하게 되었습니다.
// Reactive(반응형)는 Vue가 반응형 시스템을 유지하기 위해서 사용하는 
// 간단한 JavaScript 객체입니다. 

/* setup
: template 에서 사용하고자하는 변수, 함수등을 정의한뒤,

객체에 하나씩 골라담아, return 해주면

template 에서 해당 변수와 함수를 접근할수있다.. 
https://zakelstorm.tistory.com/127 참고
*/

export default{
  name: 'intro-page',
  data(){ //데이터의 값들을 화면에 표시하기 위함
    console.log("");
    console.log("[MainComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");
    console.log("sum : " + this.$getSum(40,50));
    console.log("");

    return {
      //data: "MAIN" // [데이터 정의]
      hover:false,
      hover1p:false,
      hover2:false,
      hover2p:false,
      hover3:false,
      hover3p:false,
      hover4:false,
      hover4p:false,
      hover5:false,
      hover5p:false,
      hover6:false,
      hover6p:false,
      hover7:false,
      hover7p:false,
      hover8:false,
      hover8p:false,
      hover9:false,
      hover9p:false,

      stoptest : false,
      ishovering : false
    }    
  },
  props: {
  },
  components:{
    CircleProgress: CircleProgress,
  },
  setup(){
    /* data / methods / computed / lifecycle hooks */

    const percent = ref(85); //html
    const percent2 = ref(95); //css
    const percent3 = ref(87); //js
    const percent4 = ref(70); //vue
    const percent5 = ref(82); //node
    const percent6 = ref(84); //jqeury
    const percent7 = ref(88); //mysql
    const percent8 = ref(86); //github
    const percent9 = ref(92); //heroku




    onMounted(() => {
        setInterval(() => {
          if (percent.value === 0) {
            percent.value = 85;
          } 
        }, 1000);
        setInterval(() => {
          if (percent2.value === 0) {
            percent2.value = 95;
          } 
        }, 1000);
         setInterval(() => {
          if (percent3.value === 0) {
            percent3.value = 87;
          }
        }, 1000);
         setInterval(() => {
          if (percent4.value === 0) {
            percent4.value = 70;
          } 
        }, 1000);
         setInterval(() => {
          if (percent5.value === 0) {
            percent5.value = 82;
          } 
        }, 1000);
         setInterval(() => {
          if (percent6.value === 0) {
            percent6.value = 84;
          }
        }, 1000);
         setInterval(() => {
          if (percent7.value === 0) {
            percent7.value = 88;
          }
        }, 1000);
         setInterval(() => {
          if (percent8.value === 0) {
            percent8.value = 86;
          }
        }, 1000);
         setInterval(() => {
          if (percent9.value === 0) {
            percent9.value = 92;
          }
        }, 1000);
      });

      const state = reactive({
        
      })

      const test = () =>{
        //test method
      }

      return{
        test,
        state,
        percent,
        percent2,
        percent3,
        percent4,
        percent5,
        percent6,
        percent7,
        percent8,
        percent9,
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hovering{
  animation-play-state: paused !important;
  -webkit-animation-play-state: paused !important;
}

.about_div{
  display:flex;
  z-index:5;
  width:100%;
  height:60%;
}
.about_l{
  overflow: hidden;
  padding-left: 300px;
  box-sizing: border-box;
  width:50%;
  height:100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:auto;
}
.about_t{
  color:#BBBBBB;
  font-size:16px;
}
.about_mid{
  font-size:60px;
}
.about_mid>p{
  line-height: 82px;
}
.font-white{
  color: transparent;
  -webkit-text-stroke-color: #222;
  -webkit-text-stroke-width: thin;
}
.about_mid2{
  margin-top: 40px;
  font-size:18px;
}

.about_bottom{
  margin-top:38px;
}
.about_bottom>div:nth-child(2) a{
  color:#000;
  display:block;
}
.about_bottom>div{
  display:flex;
  margin-bottom: 13px;
}
.about_icon{
 
  display: block;
  width:30px;
  height:30px;
}
.aicon1{
  background-image: url("../assets/images/pngwing.com (12).png");
  background-size:100% 100%;
}
.aicon2{
   background-image: url("../assets/images/git-hub.png");
  background-size:100% 100%;
}
.aicon3{
   background-image: url("../assets/images/pngwing.com (13).png");
  background-size:100% 100%;
}
.about_txt{
  font-size: 18px;
  margin-left:13px;
}

.about_r{
   /* background-color:blue; */
   width:50%;
  height:100%;
}

/****** progressbar *******/
.vue3-circular-progressbar{
  width: 400px !important;
  height: 400px !important;
  position:absolute !important;
  top:50% !important;
  right:20% !important;
  transform: translate(0,-50%) !important;
  z-index: 1000 !important;
  opacity: 0.8 !important;
}
/* .vue3-circular-progressbar circle:nth-child(1){
  stroke-width: 5 !important;
} */
/* .vue3-circular-progressbar .current-counter{
  font-size: 100px !important;
  font-weight: bold !important;
} */

/************* skill *************/

.about_r{
  /* padding-right: 200px; */
    box-sizing: border-box;
    overflow: hidden;
}

.box{
            width: 400px;
            height: 400px;
            position: absolute;
            top: 50%;
            right: 20%;
            transform:translate(0,-50%);
            perspective-origin: 50% 50%;
            perspective: 3000px;
}

.ball{
  margin: auto;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  animation: ball3d 20s infinite linear;
  
}


@keyframes ball3d{
            0%{transform: rotateY(0deg);}
            100%{transform: rotateY(360deg);}
}


.ball:after{
            content: " ";
            display: block;
            width: 1px;
            height: 500px;
            /* background-color: #007069; */
            transform: translateX(150px) translateY(-100px);
}

.ball > div{
            position: absolute;
            width: 100%;
            height: 100%;
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 100%;
}
.ball a{
  color:#ED8B86;
}
        .line1{transform: rotateY(0);}
        .line2{transform: rotateY(36deg);}
        .line3{transform: rotateY(72deg);}
        .line4{transform: rotateY(108deg);}
        .line5{transform: rotateY(144deg);}
        .line6{transform: rotateY(180deg);}
        .line7{transform: rotateY(216deg);}
        .line8{transform: rotateY(252deg);}
        .line9{transform: rotateY(288deg);}

.skill1_p{
  /* CircleProgress를 담을 div */
  display:block;
  z-index: 1000;
}

#skill1{
  /* html 이미지를 담을 div */
  width:200px;
  height:200px;

  position:absolute;
  top: 50%;
  right: 25%;
  transform:translate(0,-50%);
  display:block;
}

#skill1 .img1{
  /* html 이미지 */
  width:100%;
  height:100%;
  background-image:url('../assets/images/about1.png');
  background-size:cover;
}
#skill1 .img2{
  width:100%;
  height:100%;
  background-image:url('../assets/images/about2.png');
  background-size:cover;
}
#skill1 .img3{
  width:100%;
  height:100%;
  background-image:url('../assets/images/about3.png');
  background-size:cover;
}
#skill1 .img4{
  width:100%;
  height:100%;
  background-image:url('../assets/images/about4.png');
  background-size:cover;
}
#skill1 .img5{
  width:100%;
  height:100%;
  background-image:url('../assets/images/about5.png');
  background-size:cover;
}
#skill1 .img6{
  width:100%;
  height:100%;
  background-image:url('../assets/images/about6.png');
  background-size:cover;
}
#skill1 .img7{
  width:100%;
  height:100%;
  background-image:url('../assets/images/about7.png');
  background-size:cover;
}
#skill1 .img8{
  width:100%;
  height:100%;
  background-image:url('../assets/images/about8.png');
  background-size:cover;
}
#skill1 .img9{
  width:100%;
  height:100%;
  background-image:url('../assets/images/about9.png');
  background-size:cover;
}        




@keyframes fadein{
  /* 페이지 로드 시 투명이었다가 하나씩 나타나기 */
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}



@media only screen and (max-width: 1600px) {
  .about_l{
  padding-left: 200px;
  }
  
.box{
  
            width: 400px;
            height: 400px;
            position: absolute;
            top: 50%;
            /* left: 70%; */
            right: 15%;
            transform:translate(0,-50%);
            /* margin: -150px 0 0 -150px; */
            perspective-origin: 50% 50%;
            perspective: 3000px;
            /* animation: camera3d 30s infinite linear; */
}
#skill1{
  /* html 이미지를 담을 div */
  width:400px;
  height:400px;

  position:absolute;
  top: 50%;
  right: 15%;
  transform:translate(0,-50%);
  display:block;
}
.vue3-circular-progressbar{
  width: 400px !important;
  height: 400px !important;
  position:absolute !important;
  top:50% !important;
  right:15% !important;
  transform: translate(0,-50%) !important;
  z-index: 1000 !important;
  opacity: 0.8 !important;
}

}
</style>