(this["webpackJsonpthe-rolistes-pod"]=this["webpackJsonpthe-rolistes-pod"]||[]).push([[1],{133:function(e,t){},135:function(e,t){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),o=n.n(c),u=(n(96),n(90)),l=n(23),i=(n(97),n(81)),s=n.n(i),d=n(82),m=n.n(d),f=function(e){return r.a.createElement("div",{className:m.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:"",alt:"Logo"}))},p=n(83),E=n.n(p),g=n(52),h=n.n(g),w=n(14),b=function(e){return r.a.createElement("li",{className:h.a.NavigationItem},r.a.createElement(w.c,{to:e.link,exact:!0,activeClassName:h.a.active},e.children))},_=function(e){return r.a.createElement("ul",{className:E.a.NavigationItems},r.a.createElement(b,{link:"/news"},"News"),r.a.createElement(b,{link:"/podcast"},"Podcast"),r.a.createElement(b,{link:"/paris_gondo"},"Paris Gondo"),r.a.createElement(b,{link:"/about_us"},"About Us"))},D=n(84),v=n.n(D),O=function(e){return r.a.createElement("div",{className:v.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},S=function(e){return r.a.createElement("h1",null)},P=n(149),T=function(e){return r.a.createElement("header",null,r.a.createElement(P.a,null,r.a.createElement(O,{clicked:e.DrawerToggleClicked}),r.a.createElement("nav",null,r.a.createElement(w.c,{to:"/",exact:!0},r.a.createElement("div",{className:s.a.Logo},r.a.createElement(f,null))),r.a.createElement(_,null)),r.a.createElement("div",null,r.a.createElement(S,null))))},y=n(19),C=n.n(y),k=n(85),N=n.n(k),j=function(e){return e.show?r.a.createElement("div",{className:N.a.Backdrop,onClick:e.clicked}):null},L=function(e){var t=[C.a.SideDrawer,C.a.Close];return e.open&&(t=[C.a.SideDrawer,C.a.Open]),r.a.createElement(l.a,null,r.a.createElement(j,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement("div",{className:C.a.Logo},r.a.createElement(f,null)),r.a.createElement("nav",null,r.a.createElement(_,null))))},x=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],o=n[1];return r.a.createElement(l.a,{id:"top"},r.a.createElement(T,{drawerToggleClicked:function(){o(!c)}}),r.a.createElement(L,{open:c,closed:function(){o(!1)}}),r.a.createElement("main",null,e.children))},A=n(58),R=n(24),U=n(2),F=(n(146),r.a.lazy((function(){return n.e(7).then(n.bind(null,181))}))),I=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,184))})),z=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,182))})),B=r.a.lazy((function(){return n.e(6).then(n.bind(null,185))})),G=r.a.lazy((function(){return n.e(8).then(n.bind(null,183))})),W=Object(U.h)(Object(R.b)(null,(function(e){return{onFetchPosts:function(){return e(A.a())}}}))((function(e){var t=e.onFetchPosts;Object(a.useEffect)((function(){t()}),[]);var n=r.a.createElement(U.c,null,r.a.createElement(U.a,{path:"/news/:pageId",render:function(e){return r.a.createElement(I,Object.assign({},e,{type:"FULLNEWS"}))}}),r.a.createElement(U.a,{path:"/news",render:function(e){return r.a.createElement(z,e)}}),r.a.createElement(U.a,{path:"/:year/:month/:day/:pageId",render:function(e){return r.a.createElement(I,Object.assign({},e,{type:"FULLPODCAST"}))}}),r.a.createElement(U.a,{path:"/podcast",exact:!0,render:function(e){return r.a.createElement(B,e)}}),r.a.createElement(U.a,{path:"/paris_gondo",render:function(e){return r.a.createElement(I,e)}}),r.a.createElement(U.a,{path:"/about_us",render:function(e){return r.a.createElement(G,e)}}),r.a.createElement(U.a,{path:"/",render:function(e){return r.a.createElement(F,e)}}));return r.a.createElement(x,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("p",null,"Loading...")},n))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(16),X=n(89),J=n(5),M=n(10),V=function(e,t){return Object(M.a)(Object(M.a)({},e),t)},$={posts:[],news:[],podcast:[],gondo:[],loading:!1,loaded:!1,currentPageNews:1,currentPagePodcast:1,currentCategoryPodcast:"podcast"},q=function(e,t){return V(e,{loading:!0})},Y=function(e,t){return V(e,{posts:t.posts,news:t.news,podcast:t.podcast,gondo:t.gondo,loading:!1,loaded:!0})},Z=function(e,t){return V(e,{loading:!1})},K=function(e,t){return V(e,{currentPageNews:t.currentPageNews})},Q=function(e,t){return V(e,{currentPagePodcast:t.currentPagePodcast})},ee=function(e,t){return V(e,{currentCategoryPodcast:t.currentCategoryPodcast})},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J.b:return q(e);case J.c:return Y(e,t);case J.a:return Z(e);case J.e:return K(e,t);case J.f:return Q(e,t);case J.d:return ee(e,t);default:return e}},ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,ae=Object(H.c)({posts:te}),re=Object(H.e)(ae,ne(Object(H.a)(X.a))),ce=r.a.createElement(r.a.StrictMode,null,r.a.createElement(R.a,{store:re},r.a.createElement(w.a,{basename:"/the-rolistes-pod"},r.a.createElement(W,null))));o.a.render(ce,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1U2Xk",Logo:"SideDrawer_Logo__2mTtT",Open:"SideDrawer_Open__2s3Zs",Close:"SideDrawer_Close__2VD2S"}},23:function(e,t,n){"use strict";t.a=function(e){return e.children}},5:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return l}));var a="FETCH_POSTS_START",r="FETCH_POSTS_SUCCESS",c="FETCH_POSTS_FAILED",o="SET_CURRENT_PAGE_NEWS",u="SET_CURRENT_PAGE_PODCAST",l="SET_CURRENT_CATEGORY_PODCAST"},52:function(e,t,n){},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(10),r=n(5),c=n(86),o=n.n(c),u=n(87),l=n.n(u),i=function(e){return{type:r.e,currentPageNews:e}},s=function(e){return{type:r.f,currentPagePodcast:e}},d=function(e){return{type:r.d,currentCategoryPodcast:e}},m=function(){return function(e){e({type:r.b}),o.a.get(l.a,{"Content-Type":"application/xml; charset=utf-8"}).then((function(t){var c,o,u,l,i=new(n(118).Parser),s=[],d=[],m=[],f=[];i.parseString(t.data,(function(e,t){for(var n in t.rss.channel[0].item){s.push(Object(a.a)(Object(a.a)({},t.rss.channel[0].item[n]),{},{id:n})),console.log("test");var r=new Date,c=new Date(s[n].pubDate[0]);s[n].pubDate[0]=c.toDateString();var o=s[n]["content:encoded"][0].replace(/\[audio/,"<audio controls");if(o=o.replace(/mp3\"\]/,'mp3"></audio><br>'),s[n]["content:encoded"][0]=o,s[n].category&&("publish"===s[n]["wp:status"][0]||"future"===s[n]["wp:status"][0]&&r.getTime()>c.getTime()))for(var u=0;u<s[n].category.length;u++)switch(s[n].category[u].$.nicename){case"news":d.push(Object(a.a)(Object(a.a)({},s[n]),{},{id:n}));break;case"podcast":m.push(Object(a.a)(Object(a.a)({},s[n]),{},{id:n}));break;case"paris-gondo":f.push(Object(a.a)(Object(a.a)({},s[n]),{},{id:n}))}}m.sort((function(e,t){return new Date(t.pubDate[0])-new Date(e.pubDate[0])})),d.sort((function(e,t){return new Date(t.pubDate[0])-new Date(e.pubDate[0])})),f.sort((function(e,t){return new Date(t.pubDate[0])-new Date(e.pubDate[0])})),console.log(s),console.log(d),console.log(m),console.log(f)})),e((c=s,o=d,u=m,l=f,{type:r.c,posts:c,news:o,podcast:u,gondo:l,loaded:!0}))})).catch((function(t){console.log(t),e(function(e){return{type:r.a,error:e}}(t))}))}}},81:function(e,t,n){},82:function(e,t,n){e.exports={Logo:"Logo_Logo__3Enht"}},83:function(e,t,n){},84:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3Ezcq"}},85:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3y6h0"}},87:function(e,t,n){e.exports=n.p+"static/media/therolistespodcast.136fedad.xml"},91:function(e,t,n){e.exports=n(147)},96:function(e,t,n){},97:function(e,t,n){}},[[91,2,3]]]);
//# sourceMappingURL=main.81080413.chunk.js.map