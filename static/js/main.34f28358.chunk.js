(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/html-programming.15861e3b.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/Westerbork.6d9d23a9.JPG"},36:function(e,t,a){e.exports=a.p+"static/media/lariks.096ada18.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/hanze.14ce26ac.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/entrance.4def5a20.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/quinto.f356f085.png"},40:function(e,t,a){e.exports=a.p+"static/media/powerchainger.bcb93dd4.JPG"},41:function(e,t,a){e.exports=a.p+"static/media/movieapp.f1d5befe.png"},42:function(e,t,a){e.exports=a.p+"static/media/simulation.ee518851.png"},43:function(e,t,a){e.exports=a.p+"static/media/reversi.124f75e3.png"},44:function(e,t,a){e.exports=a.p+"static/media/profilepic.6a2c6944.jpg"},48:function(e,t,a){e.exports=a(65)},53:function(e,t,a){},54:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},55:function(e,t,a){},56:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/picture.b84f39fe.jpg"},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(33),l=a.n(r),o=(a(53),a(54),a(55),a(10)),c=a(5),s=a(13),m=a(11),d=a(14),u=a(9),p=a.n(u),h=(a(56),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){p()(document).ready(function(){p()(window).on("scroll",function(){p()(window).scrollTop()>=20?p()(".navi").addClass("compressed"):p()(".navi").removeClass("compressed")})}),p()(document).ready(function(){p()(".navbar a, footer a[href='#myPage']").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;p()("html, body").animate({scrollTop:p()(t).offset().top},900,function(){window.location.hash=t})}}),p()(window).scroll(function(){p()(".slideanim").each(function(){p()(this).offset().top<p()(window).scrollTop()+600&&p()(this).addClass("slide")})})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-custom navi fixed-top",style:{paddingLeft:"5%",paddingRight:"5%"}},i.a.createElement("a",{className:"navbar-brand",href:"#root"},"Robbert Batterink"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCustom","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse rounded",id:"navbarCustom",style:{backgroundColor:"black"}},i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#info"},"About me")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#projects"},"Projects")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact me"))))))}}]),t}(n.Component)),g=(a(21),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{backgroundColor:"#6AA4B8"}},i.a.createElement("div",{className:"containerLeft bg-dark"},i.a.createElement("h1",null,"Contact information")," ",i.a.createElement("br",null),"Name: Robbert Batterink",i.a.createElement("br",null),"Address: Stroekmaat 35, Westerbork",i.a.createElement("br",null),"Phone: 0621325787",i.a.createElement("br",null),"Email: robbertbatterink@hotmail.nl / r.t.batterink@st.hanze.nl",i.a.createElement("br",null),"linkedin: https://www.linkedin.com/in/robbert-batterink-765621161/",i.a.createElement("br",null),"CV: https://docs.google.com/document/d/1LGvHwWE4dARPpfFQHYaH_k4-m78wNSQ4t8lU6HASM2g/edit?usp=sharing"))}}]),t}(n.Component)),b=a(76),f=a(77),v=a(78),E=a(79),w=(a(31),a(15)),k=a(75),y=(a(32),a(24)),j=a(35),N=a.n(j),x=a(36),O=a.n(x),I=a(37),A=a.n(I),C=a(38),T=a.n(C),R=a(39),S=a.n(R),B=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={pictures:[{image:N.a,title:"Westerbork",link:"https://nl.wikipedia.org/wiki/Westerbork_(dorp)",index:0},{image:O.a,title:"Vincent van Gogh",link:"https://www.csvincentvangogh.nl/lariks.aspx",index:1},{image:A.a,title:"Hanze",link:"https://www.hanze.nl/nld/",index:2},{image:T.a,title:"Entrance",link:"https://www.en-tran-ce.org/",index:3},{image:S.a,title:"Quinto",link:"http://www.vvquinto.nl/",index:4}]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{backgroundColor:"#6AA4B8"}},i.a.createElement("div",{className:"containerLeft bg-dark"},i.a.createElement(k.a,{container:!0,spacing:3},i.a.createElement(k.a,{item:!0,xs:12,sm:6},i.a.createElement("h1",null,"About me"),i.a.createElement("div",{className:"intro",id:"introduction"},"My name is Robbert Batterink and I live in the village of Westerbork in Drenthe, The Netherlands. I am a student at the Hanze Hogeschool of applied sciences in Groningen to become a software engineer. I am currently in my third year and looking for an internship."),i.a.createElement("div",{className:"intro",id:"education"},"I finished highschool in Assen at Vincent van Gogh Lariks where I did HAVO with a package in nature and technology. This is where I fistly came in contact with programming because I chose informatics as an extra subject and since then I wanted to do something with software development. After that I went to Groningen where I currently am and where I also did a minor in Smart Energy at Entrance because I was interested in IT in the energy sector."),i.a.createElement("div",{className:"intro",id:"hobbies"},"I also have a few hobbies, I play volleyball in my home town, I also like to play games in my spare time with friends, Also do some small coding projects in my spare time because I like to expand my programming knowledge. Going out during the weekends with friends is also something I do.")),i.a.createElement(k.a,{item:!0,xs:12,sm:6},i.a.createElement("div",{className:"slideshow"},i.a.createElement(w.c,{style:{height:"50%"},naturalSlideWidth:100,naturalSlideHeight:60,totalSlides:this.state.pictures.length,isPlaying:!0,dragEnabled:!1},i.a.createElement(w.e,null,this.state.pictures.map(function(e){var t=e.image,a=e.title,n=e.link,r=e.index;return i.a.createElement(w.d,{index:r,key:t},i.a.createElement(b.a,null,i.a.createElement(f.a,{image:t,title:a,style:{height:"100%",paddingTop:"50%"}}),i.a.createElement(v.a,null,i.a.createElement(E.a,null,a,i.a.createElement("a",{href:n,target:"_blank"},i.a.createElement(y.b,{className:"link"}))))))})),i.a.createElement("div",{className:"text-center",style:{paddingTop:5}},i.a.createElement(w.a,{type:"button",className:"btn btn-info"},"Back"),i.a.createElement(w.b,{type:"button",className:"btn btn-info",style:{marginLeft:15}},"Next"))))))))}}]),t}(n.Component),P=a(40),M=a.n(P),W=a(41),H=a.n(W),G=a(42),J=a.n(G),L=a(43),z=a.n(L),V=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={pictures:[{image:M.a,title:"PowerChainger",link:"https://gitlab.com/RobbertBatterink/powerchainger",index:0},{image:H.a,title:"MovieApp",link:"https://github.com/bigoner18/MovieApp-2.4",index:1},{image:J.a,title:"Simulation",link:"https://gitlab.com/nvbln/project-parkeer-garage",index:2},{image:z.a,title:"Reversi A.I",link:"https://github.com/robbertbatterink/game-framework",index:3}]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{backgroundColor:"#6AA4B8"}},i.a.createElement("div",{className:"containerRight bg-dark"},i.a.createElement(k.a,{container:!0,spacing:3},i.a.createElement(k.a,{item:!0,xs:12,sm:6},i.a.createElement("h1",null,"Projects"),i.a.createElement("div",{className:"intro",id:"Minor"},"During my School career I have done some small and minor projects. I have also worked on some larger projects including my Minor project where I worked with a international multidisiplinairy team on a social energy marketplace with the use of Blockchain, ReactJS and Python."),i.a.createElement("div",{className:"intro",id:"MovieApp"},"Most of my larger projects are school projects. These include a ReactJS and Python application where we wanted to make a movie based social media platform where you could write reviews and recommend movies to your friends."),i.a.createElement("div",{className:"intro",id:"CarPark"},"My Java projects include a Simulation for a parking garage where we needed to simulate cars comming in and out of the garage together with cars who have reservations."),i.a.createElement("div",{className:"intro",id:"Reversie"},"I also worked on an A.I that you could play reversie against. On this project I worked on the A.I itself and also the overall MVC design.")),i.a.createElement(k.a,{item:!0,xs:12,sm:6},i.a.createElement("div",{className:"slideshow"},i.a.createElement(w.c,{style:{height:"50%"},naturalSlideWidth:100,naturalSlideHeight:60,totalSlides:this.state.pictures.length,isPlaying:!0,dragEnabled:!1},i.a.createElement(w.e,null,this.state.pictures.map(function(e){var t=e.image,a=e.title,n=e.link,r=e.index;return i.a.createElement(w.d,{index:r,key:t},i.a.createElement(b.a,null,i.a.createElement(f.a,{image:t,title:a,style:{height:"100%",paddingTop:"50%"}}),i.a.createElement(v.a,null,i.a.createElement(E.a,null,a,i.a.createElement("a",{href:n,target:"_blank"},i.a.createElement(y.a,{className:"git"}))))))})),i.a.createElement("div",{className:"text-center",style:{paddingTop:5}},i.a.createElement(w.a,{type:"button",className:"btn btn-info"},"Back"),i.a.createElement(w.b,{type:"button",className:"btn btn-info",style:{marginLeft:15}},"Next"))))))))}}]),t}(n.Component),_=a(26),D=a.n(_),F=(a(63),a(44)),Q=a.n(F),q=(a(64),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"landing"},i.a.createElement("div",{className:"pic",style:{background:"url("+D.a+")",height:"80vh",justifyContent:"center",alignItems:"center"}},i.a.createElement("img",{src:D.a,style:{position:"absolute",height:"80vh",width:"100%"}}),i.a.createElement("div",{className:"container center text-center",style:{zIndex:10,position:"relative",color:"white",justifyContent:"center",alignItems:"center",paddingTop:15}},i.a.createElement("h1",{className:"text"},"ROBBERT BATTERINK"),i.a.createElement("h3",{className:"text"},"SOFTWARE ENGINEER"),i.a.createElement("a",{href:"https://www.linkedin.com/in/robbert-batterink-765621161/",target:"_blank"},i.a.createElement("img",{src:Q.a,className:"rounded-circle box-shadow",id:"img2"})))))}}]),t}(n.Component)),K=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"bg-dark"},"Footer")}}]),t}(n.Component);var U=function(){return i.a.createElement("div",{className:"App",id:"home",style:{paddingTop:"20vh"}},i.a.createElement(h,null),i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(q,null),i.a.createElement("div",{className:"spacer1",id:"info"}),i.a.createElement(B,null),i.a.createElement("div",{className:"spacer2",id:"projects"}),i.a.createElement(V,null),i.a.createElement("div",{className:"spacer3",id:"contact"}),i.a.createElement(g,null),i.a.createElement("div",{className:"spacer4"})),i.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.34f28358.chunk.js.map