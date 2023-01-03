/* 
    route 요청에 대한 처리하는 곳
    path를 추가하면 주소별 페이지를 사용할 수 있게 됨
    상세한 설정은 vue-router 홈페이지의 가이드 문서를 참고하면 된다.
 */

// import {createRouter, createWebHistory} from "vue-router";
//import Home from "../components/intro.vue";
// import Aboutme from "../components/about.vue";
// import SkillEdu from "../components/skilledu.vue";
// import WebClone from "../components/webclone.vue";
// import Project from "../components/project.vue";
// import ContactMe from "../components/contact.vue";
const Home = () => {
    return import('../components/intro.vue')
}
const Aboutme = () =>{
    return import('../components/about.vue')
}
const SkillEdu = () =>{
    return import('../components/skilledu.vue')
}
const WebClone = () => {
    return import('../components/webclone.vue')
}
const Project = () => {
    return import('../components/project.vue')
}
const ContactMe = () => {
    return import('../components/contact.vue')
}
const detail1 = () => {
    return import('../components/detail1.vue')
}

const routes = [
    // {
    //     path : "/", redirect : '/intro' // path : "/"라고 치면 redirect : '/home' 으로 redirect하여 실행.
    // },
    {
        path: "/intro",
        name : "intro",
        component : Home,
    },
    {
        path : "/aboutme",
        name : "aboutme",
        // component : List,
        // component : ()=>import('../views/list-page.vue')
        component : Aboutme
    },
    {
        path : "/skilledu",
        name : "skilledu",
        component : SkillEdu
    },
    {
        path : "/webclone",
        name : "webclone",
        component : WebClone
    },
    {
        path : "/project",
        name : "project",
        component : Project
    },
    {
        path : "/contactme",
        name : "contactme",
        component : ContactMe
    },
    {
        path : "/detail1",
        name : "detail1",
        component : detail1
    },
]

// const router = createRouter({
//     history : createWebHistory(), //2.x대 버전을 설치하시면 작동을 안합니다.
//     routes,
// })

export default routes;