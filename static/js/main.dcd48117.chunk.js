(this["webpackJsonpthe-rolistes-pod"]=this["webpackJsonpthe-rolistes-pod"]||[]).push([[2],{102:function(e,t,n){},103:function(e,t,n){e.exports=n.p+"static/media/BellGothicStd-Black.9e6b41f5.otf"},104:function(e,t,n){e.exports=n.p+"static/media/BellGothicStd-Bold.1f8feea2.otf"},105:function(e,t,n){e.exports=n.p+"static/media/BellGothicStd-Light.66c20974.otf"},106:function(e,t,n){e.exports=n.p+"static/media/Johnston100-Light.21868666.ttf"},107:function(e,t,n){e.exports=n.p+"static/media/Johnston100-Medium.062a8593.ttf"},108:function(e,t,n){e.exports=n.p+"static/media/Johnston100-Regular.253afa68.ttf"},109:function(e,t,n){},146:function(e,t){},148:function(e,t){},158:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(31),c=n.n(o),i=(n(102),n(103),n(104),n(105),n(106),n(107),n(108),n(89)),l=n(24),s=(n(109),n(55)),u=n.n(s),_=n(56),p=n.n(_),d=n(54),m=n.n(d),f=function(e){return r.a.createElement("div",{className:p.a.LogoSection},r.a.createElement("img",{src:m.a,alt:"Logo",className:p.a.LogoImg}))},g=n(18),E=n.n(g),h=n(57),b=n.n(h),w=n(13),v=function(e){return r.a.createElement("li",{className:b.a.NavigationItem},r.a.createElement(w.c,{to:e.link,exact:!0,activeClassName:b.a.active},e.children))},S=n(67),N=n.n(S),O=function(e){return r.a.createElement("ul",{className:E.a.NavigationItems},r.a.createElement(w.c,{to:"/",exact:!0},r.a.createElement(f,null)),r.a.createElement("span",{className:E.a.SpacingNav}),r.a.createElement(v,{link:"/news"},"News"),r.a.createElement("span",{className:E.a.VerticalLine}),r.a.createElement(v,{link:"/podcast"},"Podcast"),r.a.createElement("span",{className:E.a.VerticalLine}),r.a.createElement(v,{link:"/paris_gondo"},"Paris Gondo"),r.a.createElement("span",{className:E.a.VerticalLine}),r.a.createElement(v,{link:"/about_us"},"About Us"),r.a.createElement("a",{href:"https://www.patreon.com/RolistesPod",className:E.a.supportLink},r.a.createElement("img",{src:N.a,alt:"Support me on Patreon","aria-hidden":"true"})))},D=n(62),P=n(90),y=n.n(P),T=n(63),k=function(e){return r.a.createElement("div",{className:y.a.DrawerToggle},r.a.createElement(w.c,{to:"/",exact:!0},r.a.createElement(f,null)),r.a.createElement("span",{onClick:e.clicked},r.a.createElement(D.a,{icon:T.b,"aria-hidden":"true"})))},C=function(e){return r.a.createElement("h1",null)},x=n(160),L=function(e){return r.a.createElement("header",{className:u.a.Toolbar},r.a.createElement(x.a,null,r.a.createElement("nav",null,r.a.createElement("div",{className:u.a.DesktopOnly},r.a.createElement(O,null))),r.a.createElement(k,{clicked:e.drawerToggleClicked}),r.a.createElement("div",null,r.a.createElement(C,null))))},j=n(23),A=n.n(j),I=n(91),R=n.n(I),B=function(e){return e.show?r.a.createElement("div",{className:R.a.Backdrop,onClick:e.clicked}):null},F=function(e){var t=[A.a.SideDrawer,A.a.Close];return e.open&&(t=[A.a.SideDrawer,A.a.Open]),r.a.createElement(l.a,null,r.a.createElement(B,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement("nav",null,r.a.createElement(O,null))))},z=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],c=n[1];return r.a.createElement(l.a,{id:"top"},r.a.createElement(L,{drawerToggleClicked:function(){c(!o)}}),r.a.createElement(F,{open:o,closed:function(){c(!1)}}),r.a.createElement("main",null,e.children))},U=n(66),V=n(25),W=n(3),G=(n(96),r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,195))}))),H=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,200))})),J=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,198))})),M=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,201))})),Q=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,199))})),Y=Object(W.h)(Object(V.b)(null,(function(e){return{onFetchPosts:function(){return e(U.a())}}}))((function(e){var t=e.onFetchPosts;Object(a.useEffect)((function(){t()}),[]);var n=r.a.createElement(W.c,null,r.a.createElement(W.a,{path:"/news/:pageId",render:function(e){return r.a.createElement(H,Object.assign({},e,{type:"FULLNEWS"}))}}),r.a.createElement(W.a,{path:"/news",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(W.a,{path:"/:year/:month/:day/:pageId",render:function(e){return r.a.createElement(H,Object.assign({},e,{type:"FULLPODCAST"}))}}),r.a.createElement(W.a,{path:"/podcast",exact:!0,render:function(e){return r.a.createElement(M,e)}}),r.a.createElement(W.a,{path:"/paris_gondo",render:function(e){return r.a.createElement(H,e)}}),r.a.createElement(W.a,{path:"/about_us",render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(W.a,{path:"/",render:function(e){return r.a.createElement(G,e)}}));return r.a.createElement(z,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("p",null,"Loading...")},n))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(17),Z=n(95),q=n(7),$=n(6),K=function(e,t){return Object($.a)(Object($.a)({},e),t)},ee={posts:[],news:[],podcast:[],gondo:[],comingSoon:[],loading:!1,loaded:!1,currentPageNews:1,currentPagePodcast:1,currentCategoryPodcast:"podcast",currentCategorySize:1},te=function(e,t){return K(e,{loading:!0})},ne=function(e,t){return K(e,{posts:t.posts,news:t.news,podcast:t.podcast,gondo:t.gondo,comingSoon:t.comingSoon,loading:!1,loaded:!0})},ae=function(e,t){return K(e,{loading:!1})},re=function(e,t){return K(e,{currentPageNews:t.currentPageNews})},oe=function(e,t){return K(e,{currentPagePodcast:t.currentPagePodcast})},ce=function(e,t){return K(e,{currentCategoryPodcast:t.currentCategoryPodcast})},ie=function(e,t){return K(e,{currentCategorySize:t.currentCategorySize})},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.b:return te(e);case q.c:return ne(e,t);case q.a:return ae(e);case q.f:return re(e,t);case q.g:return oe(e,t);case q.d:return ce(e,t);case q.e:return ie(e,t);default:return e}},se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,ue=Object(X.c)({posts:le}),_e=Object(X.e)(ue,se(Object(X.a)(Z.a))),pe=r.a.createElement(r.a.StrictMode,null,r.a.createElement(V.a,{store:_e},r.a.createElement(w.a,{basename:"/the-rolistes-pod"},r.a.createElement(Y,null))));c.a.render(pe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__28dgW",SpacingNav:"NavigationItems_SpacingNav__me0VR",VerticalLine:"NavigationItems_VerticalLine__2e_WP",supportLink:"NavigationItems_supportLink__2PHWP"}},23:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1smFZ",Logo:"SideDrawer_Logo__1e5gd",Open:"SideDrawer_Open__25BQ6",Close:"SideDrawer_Close__31osy"}},24:function(e,t,n){"use strict";t.a=function(e){return e.children}},54:function(e,t,n){e.exports=n.p+"static/media/Logo_Nav_Side.1932e93a.jpg"},55:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3CObN",Logo:"Toolbar_Logo__2Im9n",DesktopOnly:"Toolbar_DesktopOnly__D3HW-"}},56:function(e,t,n){e.exports={LogoImg:"Logo_LogoImg__1tqcT",LogoSection:"Logo_LogoSection__2T10E"}},57:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__H4J5I",active:"NavigationItem_active__2mEge"}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return p}));var a=n(6),r=n(7),o=n(92),c=n.n(o),i=n(93),l=n.n(i),s=function(e){return{type:r.f,currentPageNews:e}},u=function(e){return{type:r.g,currentPagePodcast:e}},_=function(e){return{type:r.d,currentCategoryPodcast:e}},p=function(e){return{type:r.e,currentCategorySize:e}},d=function(e,t){var n=0;for(var a in t["wp:postmeta"])"_thumbnail_id"===t["wp:postmeta"][a]["wp:meta_key"][0]&&(n=t["wp:postmeta"][a]["wp:meta_value"][0]);for(var r in e)if(e[r]["wp:post_id"][0]==n)return e[r]["wp:attachment_url"][0];return""},m=function(e,t){var n=e.replace(/(<([^>]+)>)/gi,""),a=(n=n.replace(/\s+/g," ")).split(" ");if(a.length<t)return e;for(var r="",o=0;o<t;o++)r=r+" "+a[o]+" ";return r},f=function(){return function(e){e({type:r.b}),c.a.get(l.a,{"Content-Type":"application/xml; charset=utf-8"}).then((function(t){var o,c,i,l,s,u=new(n(131).Parser),_=[],p=[],f=[],g=[],E=[],h=[];u.parseString(t.data,(function(e,t){for(var n in t.rss.channel[0].item)"attachment"===t.rss.channel[0].item[n]["wp:post_type"][0]?p.push(Object(a.a)(Object(a.a)({},t.rss.channel[0].item[n]),{},{id:n})):_.push(Object(a.a)(Object(a.a)({},t.rss.channel[0].item[n]),{},{id:n}));for(var r in _){var o=new Date,c=new Date(_[r].pubDate[0]);_[r].pubDate[0]=c.toDateString();var i=_[r]["content:encoded"][0].replace(/\[audio/,"<audio controls");if(i=i.replace(/mp3\"\]/,'mp3"></audio><br>'),_[r]["content:encoded"][0]=i,_[r].category&&("publish"===_[r]["wp:status"][0]||"future"===_[r]["wp:status"][0]&&o.getTime()>c.getTime()))for(var l=d(p,_[r]),s=0;s<_[r].category.length;s++)switch(_[r].category[s].$.nicename){case"news":var u=m(_[r]["content:encoded"][0],40);f.push(Object(a.a)(Object(a.a)({},_[r]),{},{cover:l,excerpt:u,id:r}));break;case"podcast":g.push(Object(a.a)(Object(a.a)({},_[r]),{},{cover:l,id:r}));break;case"paris-gondo":E.push(Object(a.a)(Object(a.a)({},_[r]),{},{id:r}));break;case"coming-soon":h.push(Object(a.a)(Object(a.a)({},_[r]),{},{id:r}))}}g.sort((function(e,t){return new Date(t.pubDate[0])-new Date(e.pubDate[0])})),f.sort((function(e,t){return new Date(t.pubDate[0])-new Date(e.pubDate[0])})),E.sort((function(e,t){return new Date(t.pubDate[0])-new Date(e.pubDate[0])})),h.sort((function(e,t){return new Date(t.pubDate[0])-new Date(e.pubDate[0])}))})),e((o=_,c=f,i=g,l=E,s=h,{type:r.c,posts:o,news:c,podcast:i,gondo:l,comingSoon:s,loaded:!0}))})).catch((function(t){console.log(t),e(function(e){return{type:r.a,error:e}}(t))}))}}},67:function(e,t,n){e.exports=n.p+"static/media/become_a_patron_button_BnW - Black.066e9fba.png"},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s}));var a="FETCH_POSTS_START",r="FETCH_POSTS_SUCCESS",o="FETCH_POSTS_FAILED",c="SET_CURRENT_PAGE_NEWS",i="SET_CURRENT_PAGE_PODCAST",l="SET_CURRENT_CATEGORY_PODCAST",s="SET_CURRENT_CATEGORY_SIZE"},90:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__18_jt"}},91:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__v6z2c"}},93:function(e,t,n){e.exports=n.p+"static/media/therolistespodcast.a4f75a6e.xml"},96:function(e,t,n){e.exports={section_title:"App_section_title__20Vif",section_title_footer:"App_section_title_footer__1vDnP",section_title_podcast:"App_section_title_podcast__8ZmEY",section_title_article:"App_section_title_article__2JIiV",item_box_footer:"App_item_box_footer__mgQ-t",noPadding:"App_noPadding__mcqty",no_padding_right:"App_no_padding_right__2NPvF",date_article:"App_date_article__3oLvj",img_scale_animate:"App_img_scale_animate__3w4j8",date:"App_date__1BWaN",date_home:"App_date_home__2HiU9",title_home_secondary:"App_title_home_secondary__2w_OQ",item_box:"App_item_box__2aYlQ",item_box_left:"App_item_box_left__d9VX5",item_box_right:"App_item_box_right__25ES3",continue_reading:"App_continue_reading__13gRM",no_padding_smallscreen:"App_no_padding_smallscreen__2ukF2"}},97:function(e,t,n){e.exports=n(158)}},[[97,3,4]]]);
//# sourceMappingURL=main.dcd48117.chunk.js.map