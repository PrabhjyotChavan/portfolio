(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/react-icon.f0793d9f.svg"},19:function(e,a,t){e.exports=t.p+"static/media/linkedin.1666c203.svg"},20:function(e,a,t){e.exports=t.p+"static/media/github.2d288538.svg"},21:function(e,a,t){e.exports=t.p+"static/media/python.a1872cef.svg"},22:function(e,a,t){e.exports=t.p+"static/media/wordpress.bd215f7e.svg"},23:function(e,a,t){e.exports=t.p+"static/media/html-icon.c83aaf39.svg"},24:function(e,a,t){e.exports=t.p+"static/media/css-icon.c64430b2.svg"},25:function(e,a,t){e.exports=t.p+"static/media/js-icon.dc2fc5be.svg"},26:function(e,a,t){e.exports=t.p+"static/media/typescript-icon.9e8bfce4.svg"},27:function(e,a,t){e.exports=t.p+"static/media/bootstrap-icon.47eb3019.svg"},343:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(55),l=t.n(i),o=t(6);const c=o.b.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .logo{
    font-size: 2.8rem;
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,span{
      font-size: 3rem;
      width: 3rem;
    }
  }


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
    p{
      font-size: 1.2rem;
    }
  }
`;var m=t(13),s=t.n(m),d=t(19),p=t.n(d),g=t(20),h=t.n(g),u=t(59),f=t.n(u);function b(){return r.a.createElement(c,{className:"footer"},r.a.createElement("a",{href:"https://github.com/PrabhjyotChavan",className:"logo"},r.a.createElement("span",null,"Prabhjyot Chavan")),r.a.createElement("div",null,r.a.createElement("p",null,"This Website was made with ",r.a.createElement("img",{src:s.a,alt:"React"}))),r.a.createElement("div",{className:"social-media"},r.a.createElement("a",{href:"https://www.linkedin.com/in/prabhjyot-chavan",target:"_blank",rel:"noreferrer"},r.a.createElement("img",{src:p.a,alt:"Linkedin"})),r.a.createElement("a",{href:"https://github.com/PrabhjyotChavan",target:"_blank",rel:"noreferrer"},r.a.createElement("img",{src:h.a,alt:"GitHub"})),r.a.createElement("a",{href:"https://www.instagram.com/perky_prabhjyot",target:"_blank",rel:"noreferrer"},r.a.createElement("img",{src:f.a,alt:"Instagram"}))))}const E=o.b.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  
  background-color: #21212150;
  
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    a{
      color: #FFFF;
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button{
        padding: 0.6rem 2rem;
      }

      &:hover{
        filter: brightness(0.6);
      }
    }

  }

  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu{
    width: 2rem;
    height: 0.2rem;
    background: #FFFF;
    position: relative;
    cursor: pointer;
    display: none;

    &:before{
      bottom: 0.5rem;
    }
    &:after{
      top: 0.5rem;
    }


    &.active:before{
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after{
      top: 0;
      transform: rotate(135deg);
    }

    &.active{
      background-color: rgba(0, 0, 0, 0);
    }

  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #FFFF;
    cursor: pointer;
    transition: .6s;
  }


  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  @media only screen and (max-width: 800px) {
    label {
    position: relative;
   }
  }

  label:after {
    content: '';
    background: #FFF;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
   transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  @media (max-width: 960px){
    padding: 1.8rem 3rem;

    .menu{
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);

      a.button{
        background-color: var(--pink);
      }

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }
  }
  
`;var v=t(9),y=t(11),x=t(60),w=t.n(x);function k(){const[e,a]=Object(n.useState)(!1);function t(){a(!1)}return r.a.createElement(E,{className:"header-fixed"},r.a.createElement(v.a,null,r.a.createElement(y.a,{smooth:!0,to:"#home",className:"logo"}),r.a.createElement("input",{onChange:function(){document.getElementsByTagName("html")[0].classList.toggle("light")},className:"container_toggle",type:"checkbox",id:"switch",name:"mode"}),r.a.createElement("label",{htmlFor:"switch"},"Toggle"),r.a.createElement("nav",{className:e?"active":""},r.a.createElement(y.b,{smooth:!0,to:"#home",onClick:t},"Home"),r.a.createElement(y.b,{smooth:!0,to:"#about",onClick:t},"About me"),r.a.createElement(y.b,{smooth:!0,to:"#contact",onClick:t},"Contact"),r.a.createElement("a",{href:w.a,download:!0,className:"button"},"Resume")),r.a.createElement("div",{"aria-expanded":e?"true":"false","aria-haspopup":"true","aria-label":e?"Fechar menu":"Abrir menu",className:e?"menu active":"menu",onClick:()=>{a(!e)}})))}var I=t(61),N=t.n(I);const F=o.b.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 740px){
    padding: 0 4rem;
  }

  @media(max-width: 360px){
    padding: 0 2rem;
  }
`,j=o.b.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`;var z=t(3),C=t.n(z),P=t(62),L=t.n(P),U=t(63),H=t.n(U);function S(){return r.a.createElement(j,{id:"home"},r.a.createElement("div",{className:"hero-text"},r.a.createElement(C.a,{animateIn:"fadeInUp"},r.a.createElement("p",null,"Hello ",r.a.createElement("img",{src:H.a,alt:"Hello",width:"20px"}),", I'm")),r.a.createElement(C.a,{animateIn:"fadeInUp",delay:200},r.a.createElement("h1",null,"Prabhjyot Chavan")),r.a.createElement(C.a,{animateIn:"fadeInUp",delay:400},r.a.createElement("h3",null,"Software Engineer")),r.a.createElement(C.a,{animateIn:"fadeInUp",delay:600},r.a.createElement("p",{className:"small-resume"},"3+ Year Experience")),r.a.createElement(C.a,{animateIn:"fadeInUp",delay:800},r.a.createElement(v.a,null,r.a.createElement(y.b,{smooth:!0,to:"#contact",className:"button"},"Contact"))),r.a.createElement(C.a,{animateIn:"fadeInUp",delay:1e3},r.a.createElement("div",{className:"social-media"},r.a.createElement("a",{href:"https://www.linkedin.com/in/prabhjyot-chavan",target:"_blank",rel:"noreferrer"},r.a.createElement("img",{src:p.a,alt:"Linkedin"})),r.a.createElement("a",{href:"https://github.com/PrabhjyotChavan/",target:"_blank",rel:"noreferrer"},r.a.createElement("img",{src:h.a,alt:"GitHub"}))))),r.a.createElement("div",{className:"hero-image"},r.a.createElement(C.a,{animateIn:"fadeInRight",delay:1e3},r.a.createElement("img",{src:L.a,alt:"Ilustra\xe7\xe3o"}))))}const D=o.b.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`;var R=t(64),_=t.n(R),M=t(21),T=t.n(M),X=t(65),A=t.n(X),W=t(22),B=t.n(W),G=t(23),J=t.n(G),V=t(24),q=t.n(V),Y=t(25),O=t.n(Y),K=t(26),Q=t.n(K),Z=t(27),$=t.n(Z);function ee(){return r.a.createElement(D,{id:"about"},r.a.createElement("div",{className:"about-text"},r.a.createElement(C.a,{animateIn:"fadeInLeft"},r.a.createElement("h2",null,"About me")),r.a.createElement(C.a,{animateIn:"fadeInLeft",delay:100},r.a.createElement("p",null,"Hi there! I'm Prabhjyot Chavan, an enthusiastic Software Engineer skilled in web development, machine learning, and scalable software solutions")),r.a.createElement(C.a,{animateIn:"fadeInLeft",delay:200,style:{marginTop:"2rem",marginBottom:"2rem"}},r.a.createElement("p",null,"I build responsive web applications, fine-tune ML models, and implement robust backend services.")),r.a.createElement(C.a,{animateIn:"fadeInLeft",delay:300},r.a.createElement("p",null,"I also work with CMS platforms like WordPress and WIX to streamline content management.")),r.a.createElement(C.a,{animateIn:"fadeInLeft",delay:400},r.a.createElement("div",{className:"education"},r.a.createElement("h3",null,"Education:"),r.a.createElement("h4",null," Master's of Science in Data Science"),r.a.createElement("p",null,"University of North Dakota | September 2024 - Present"),r.a.createElement("p",null,"3.67GPA")),r.a.createElement("div",{className:"education"},r.a.createElement("h3",null,"Education:"),r.a.createElement("h4",null," Bachalor's if Engineering in Computer Engineering"),r.a.createElement("p",null,"Dr.D.Y.Patil Institute of Technology, Pimpri | May 2015 - May 2020"),r.a.createElement("p",null,"6.71 SGPA"))),r.a.createElement(C.a,{animateIn:"fadeInLeft",delay:550},r.a.createElement("div",{className:"experience"},r.a.createElement("h3",null,"Experience:"),r.a.createElement("h4",null,"Technical Lead"),r.a.createElement("p",null,"Royoch Innovations Pvt. Ltd | December 2021 - July 2024"),r.a.createElement("p",null,"Ahilyanagar, India")),r.a.createElement("div",{className:"experience"},r.a.createElement("h3",null,"Experience:"),r.a.createElement("h4",null,"Software Engineer"),r.a.createElement("p",null,"D10X | December 2020 - November 2021"),r.a.createElement("p",null,"Pune, India"))),r.a.createElement(C.a,{animateIn:"fadeInLeft",delay:400},r.a.createElement("h3",null,"Here are my main skills:")),r.a.createElement("div",{className:"hard-skills"},r.a.createElement("div",{className:"hability"},r.a.createElement(C.a,{animateIn:"fadeInUp",delay:100},r.a.createElement("img",{src:T.a,alt:"python"}))),r.a.createElement("div",{className:"hability"},r.a.createElement(C.a,{animateIn:"fadeInUp",delay:120},r.a.createElement("img",{src:O.a,alt:"JavaScript"}))),r.a.createElement("div",{className:"hability"},r.a.createElement(C.a,{animateIn:"fadeInUp",delay:130},r.a.createElement("img",{src:s.a,alt:"React"}))),r.a.createElement("div",{className:"hability"},r.a.createElement(C.a,{animateIn:"fadeInUp",delay:140},r.a.createElement("img",{src:Q.a,alt:"Typescript"}))),r.a.createElement("div",{className:"hability"},r.a.createElement(C.a,{animateIn:"fadeInUp",delay:160},r.a.createElement("img",{src:B.a,alt:"Wordpress"}))),r.a.createElement("div",{className:"hability"},r.a.createElement(C.a,{animateIn:"fadeInUp",delay:170},r.a.createElement("img",{src:A.a,alt:"wix"}))),r.a.createElement("div",{className:"hability"},r.a.createElement(C.a,{animateIn:"fadeInUp",delay:180},r.a.createElement("img",{src:J.a,alt:"Html"}))),r.a.createElement("div",{className:"hability"},r.a.createElement(C.a,{animateIn:"fadeInUp",delay:190},r.a.createElement("img",{src:q.a,alt:"Css"}))),r.a.createElement("div",{className:"hability"},r.a.createElement(C.a,{animateIn:"fadeInUp",delay:200},r.a.createElement("img",{src:$.a,alt:"bootstrap"}))))),r.a.createElement("div",{className:"about-image"},r.a.createElement(C.a,{animateIn:"fadeInRight",delay:210},r.a.createElement("img",{src:_.a,alt:"Profile Pic"}))))}const ae=o.b.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 30rem;
      gap: 2rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img{
        width: 4rem;
      }
      a{
        color: var(--black);
        font-weight: 500;
      }
      &:hover{
        background-color: var(--pink);
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        
      }
    }
  }
  
`;var te=t(66),ne=t.n(te),re=t(67),ie=t.n(re);function le(){return r.a.createElement(ae,{id:"contact"},r.a.createElement("header",null,r.a.createElement("h2",null,"Contact")),r.a.createElement("div",{className:"contacts"},r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:prabhjoytchavan@gmail.com"},r.a.createElement("img",{src:ne.a,alt:"Email"})),r.a.createElement("a",{href:"mailto:prabhjoytchavan@gmail.com"},"prabhjoytchavan@gmail.com")),r.a.createElement("div",null,r.a.createElement("a",{href:"tel:+17012156684"},r.a.createElement("img",{src:ie.a,alt:"Phone No"})),r.a.createElement("a",{href:"tel:+17012156684"},"(+1) 701-215-6684"))))}var oe=t(68),ce=t.n(oe),me=t(69),se=t.n(me),de=t(70),pe=t.n(de),ge=t(71),he=t.n(ge);function ue(){return r.a.createElement(F,null,r.a.createElement(N.a,{id:"tsparticles",options:{fullScreen:{enable:!0,zIndex:1},detectRetina:!0,fpsLimit:60,interactivity:{events:{onClick:{enable:!0,mode:"push"},onDiv:{elementId:"repulse-div",enable:!1,mode:"repulse"},onHover:{enable:!0,mode:"bubble",parallax:{enable:!1,force:60,smooth:10}},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:2},connect:{distance:80,lineLinked:{opacity:.5},radius:60},grab:{distance:400,lineLinked:{opacity:1}},push:{quantity:2},remove:{quantity:2},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},lineLinked:{blink:!1,color:"#000",consent:!1,distance:150,enable:!1,opacity:.4,width:1},move:{attract:{enable:!1,rotate:{x:600,y:1200}},bounce:!1,direction:"none",enable:!0,outMode:"out",random:!1,speed:2,straight:!1},number:{density:{enable:!0,area:800},limit:20,value:15},opacity:{animation:{enable:!0,minimumValue:.2,speed:1,sync:!1},random:!0,value:1},rotate:{animation:{enable:!0,speed:5,sync:!1},direction:"random",random:!0,value:0},shape:{character:{fill:!1,font:"Verdana",style:"",value:"*",weight:"400"},image:[{src:$.a,width:20,height:20},{src:q.a,width:20,height:20},{src:B.a,width:20,height:20},{src:se.a,width:20,height:20},{src:J.a,width:20,height:20},{src:O.a,width:20,height:20},{src:T.a,width:20,height:20},{src:ce.a,width:20,height:20},{src:s.a,width:20,height:20},{src:pe.a,width:20,height:20},{src:Q.a,width:20,height:20},{src:he.a,width:20,height:20}],polygon:{sides:5},stroke:{color:"#000000",width:0},type:"image"},size:{animation:{enable:!1,minimumValue:.1,speed:40,sync:!1},random:!1,value:16}},polygon:{draw:{enable:!1,lineColor:"#ffffff",lineWidth:.5},move:{radius:10},scale:1,url:""},background:{image:"",position:"50% 50%",repeat:"no-repeat",size:"cover"}}}),r.a.createElement(S,null),r.a.createElement(ee,null),r.a.createElement(le,null))}const fe=o.a`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }
`;t(342);var be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,null),r.a.createElement(k,null),r.a.createElement(ue,null),r.a.createElement(b,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root"))},59:function(e,a,t){e.exports=t.p+"static/media/instagram.9f02f35b.svg"},60:function(e,a,t){e.exports=t.p+"static/media/Prabhjyot Chavan Resume.808c89aa.pdf"},62:function(e,a,t){e.exports=t.p+"static/media/illustration.4dcd022f.svg"},63:function(e,a,t){e.exports=t.p+"static/media/Hello.26df447c.gif"},64:function(e,a,t){e.exports=t.p+"static/media/profile_pic.02d8300a.png"},65:function(e,a,t){e.exports=t.p+"static/media/wix.8590d2ad.png"},66:function(e,a,t){e.exports=t.p+"static/media/email-icon.ba36d463.svg"},67:function(e,a,t){e.exports=t.p+"static/media/phone-icon.f75615dd.svg"},68:function(e,a,t){e.exports=t.p+"static/media/java.832331d4.svg"},69:function(e,a,t){e.exports=t.p+"static/media/shopify.80fae0a1.svg"},70:function(e,a,t){e.exports=t.p+"static/media/sass-icon.470548b4.svg"},71:function(e,a,t){e.exports=t.p+"static/media/vue-icon.22efb7c2.svg"},72:function(e,a,t){e.exports=t(343)}},[[72,1,2]]]);
//# sourceMappingURL=main.ad71323e.chunk.js.map