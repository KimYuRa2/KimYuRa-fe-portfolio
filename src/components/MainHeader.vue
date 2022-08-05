<template>
    <header>
        <div id="header">
        <div class="h_logo">
            <a href=""></a>
        </div>
        <div class="h_menu">
            <a href="javascript:void(0)" @click="menuopen">
                <span></span>
                <span></span>
            </a>
        </div>
        </div>

    <div class="nav-wrap" id="navi" style="display: none;">
        <div class="nav-inner">
            <div class="logo_wrap">
                <div class="side_logo">
                    <a href="">
                    </a>
                </div>
                <div class="menuclose" @click="menuclose">
                    <a href="javascript:void(0)">
                    </a>
                </div>
            </div>
            <nav>
                <ul>
                    <li><router-link to="/intro">MAIN</router-link></li>
                    <li><router-link to="/aboutme">ABOUT ME</router-link></li>
                    <li><router-link to="/skilledu">SKILL & EDU</router-link></li>
                    <li><router-link to="/webclone">WEB CLONE</router-link></li>
                    <li><router-link to="/project">PROJECT</router-link></li>
                    <li><router-link to="/contactme">CONTACT ME</router-link></li>
                </ul>
            </nav>
            
        </div>
    </div>
    </header>
</template>

<script>
export default {
  data() {},
  methods: {
  	menuopen() {
    	console.log('hello');
        const menu=document.querySelector('#navi');
        // menu.style.display = 'block';
        menu.classList.add('show');

    },
    menuclose() {
    	console.log('bye');
        const menu=document.querySelector('#navi');
        // menu.style.display = 'block';
        menu.classList.remove('show');

    }
  }
}
</script>

<style scoped>
.logo_wrap{
    display:flex;
    justify-content: space-between;
    margin-bottom: 100px;
    align-items: center;
}
.side_logo{
    width:47px;
    height:47px;
}
.side_logo>a{
    display:block;
    width:100%;
    height:100%;
    background-image:url('../assets/images/free-icon-puzzle-786771.png');
    background-size:cover;
    background-position:center center;
    background-repeat: no-repeat;
}
.menuclose{
    width:35px;
    height:35px;
}
.menuclose>a{
    display:block;
    width:100%;
    height:100%;
    background-image:url('../assets/images/kindpng_11745.png');
    background-size:cover;
    background-position:center center;
    background-repeat: no-repeat;
}
.nav-wrap {
    top: 0;
    right: 0;
    position: fixed;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: none;
    z-index:10;
}
.nav-wrap .nav-inner {
    z-index:20;
    float: right;
    width: 800px;
    height: 100vh;
    background: #fff;
    padding: 68px 100px 100px;
    box-sizing:border-box;
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
    -webkit-transition: .5s ease;
    transition: .5s ease;
    line-height: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.nav-wrap.show .nav-inner {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
}
.show{
    display:block !important;
}
.nav-wrap nav li a {
    font-size: 35px;
    letter-spacing: -1.5px;
    color: #222;
}
.nav-wrap nav li a:hover {
    color: transparent;
    -webkit-text-stroke-color: #222;
    -webkit-text-stroke-width: thin;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
.nav-wrap nav li + li {
    margin-top: 35px;
}


</style>