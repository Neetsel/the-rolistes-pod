(this["webpackJsonpthe-rolistes-pod"]=this["webpackJsonpthe-rolistes-pod"]||[]).push([[5],{100:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(176),r=a(130),o=a(12);t.a=function(e){return l.a.createElement(o.a,null,l.a.createElement(c.a,null,l.a.createElement(r.a,{xs:12},l.a.createElement("h2",null,l.a.createElement("span",null,"Contact Us")),l.a.createElement("p",null,"Email: rolistespod@gmail.com"),l.a.createElement("p",null,"Twitter: @rolistespod"),l.a.createElement("p",null,"Facebook: @rolistespod"))))}},101:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(176),r=a(130),o=a(12),s=a(102),i=a.n(s),u=a(103),m=a.n(u);a(104);t.a=function(e){return l.a.createElement(o.a,null,l.a.createElement(c.a,null,l.a.createElement(r.a,{xs:12},l.a.createElement("h2",null,l.a.createElement("span",null,"Support Us"))),l.a.createElement(r.a,{xs:12},l.a.createElement("a",{href:"https://www.patreon.com/RolistesPod"},l.a.createElement("img",{src:m.a,alt:"Support me on Patreon","aria-hidden":"true"}))),l.a.createElement(r.a,{xs:12},l.a.createElement("a",{href:"https://www.paypal.com/paypalme/rolistespod/"},l.a.createElement("img",{src:i.a,alt:"Donate with Paypal","aria-hidden":"true"})))))}},102:function(e,t,a){e.exports=a.p+"static/media/paypal-button.4cc1a483.png"},103:function(e,t,a){e.exports=a.p+"static/media/patreon-button.05bf0e82.png"},104:function(e,t,a){},173:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(12),r=a(68),o=(a(173),a(66)),s=a(50),i=a(176),u=a(130),m=a(98),p=a(100),d=a(101),E=a(55);t.default=function(e){return l.a.createElement(c.a,null,l.a.createElement(s.a,null,l.a.createElement(i.a,null,l.a.createElement(u.a,{lg:8,xs:12},l.a.createElement(r.a,Object.assign({},e,{type:"NEWS"})),l.a.createElement(o.a,null)),l.a.createElement(u.a,{lg:4,xs:12},l.a.createElement(i.a,null,l.a.createElement(u.a,{xs:12},l.a.createElement(m.a,null)),l.a.createElement(u.a,{xs:12},l.a.createElement(p.a,null)),l.a.createElement(u.a,{xs:12},l.a.createElement(d.a,null)))))),l.a.createElement(E.a,null))}},55:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(12);t.a=function(e){return l.a.createElement(c.a,null,"Footer")}},56:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(130),r=a(7);a(12),a(57);t.a=function(e){return l.a.createElement(c.a,{xs:12},l.a.createElement(r.b,{to:e.location+"/"+e.postName},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.author),l.a.createElement("p",null,e.date),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.article}})))}},57:function(e,t,a){},60:function(e,t,a){},61:function(e,t){},63:function(e,t,a){e.exports=a.p+"static/media/therolistespodcast.136fedad.xml"},65:function(e,t,a){e.exports={Loader:"Spinner_Loader__1u8qb",load2:"Spinner_load2__1Bcn_"}},66:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=(a(67),a(180));t.a=function(e){var t=[];Math.ceil(0);for(var a=1;a<=5;a++)t.push(l.a.createElement(c.a.Item,{key:a,active:1===a},a));return l.a.createElement("div",null,l.a.createElement(c.a,{size:"sm"},t))}},67:function(e,t,a){},68:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(56),r=a(130),o=a(7),s=a(12),i=function(e){return l.a.createElement(s.a,null,l.a.createElement(r.a,{xs:12,md:6,lg:4},l.a.createElement(o.b,{to:"/2020/15/16/"+e.postName},l.a.createElement("img",{src:"",alt:""}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,e.date),l.a.createElement("h1",null,e.title))))))},u=(a(60),function(e){return l.a.createElement(r.a,{xs:12},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.author),l.a.createElement("p",null,e.date),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))}),m=(a(61),a(16)),p=a(13),d=a(74),E=a.n(d),h=a(63),f=a.n(h),w=function(){return function(e){e({type:p.b}),E.a.get(f.a,{"Content-Type":"application/xml; charset=utf-8"}).then((function(t){var n,l,c,r,o=new(a(75).Parser),s=[],i=[],u=[],d=[];o.parseString(t.data,(function(e,t){for(var a in t.rss.channel[0].item){s.push(Object(m.a)(Object(m.a)({},t.rss.channel[0].item[a]),{},{id:a})),console.log("test");var n=new Date,l=new Date(s[a].pubDate[0]);s[a].pubDate[0]=l.toDateString();var c=s[a]["content:encoded"][0].replace(/\[audio/,"<audio controls");if(c=c.replace(/mp3\"\]/,'mp3"></audio><br>'),s[a]["content:encoded"][0]=c,s[a].category&&("publish"===s[a]["wp:status"][0]||"future"===s[a]["wp:status"][0]&&n.getTime()>l.getTime()))for(var r=0;r<s[a].category.length;r++)switch(s[a].category[r].$.nicename){case"news":i.push(Object(m.a)(Object(m.a)({},s[a]),{},{id:a}));break;case"podcast":u.push(Object(m.a)(Object(m.a)({},s[a]),{},{id:a}));break;case"paris-gondo":d.push(Object(m.a)(Object(m.a)({},s[a]),{},{id:a}))}}u.sort((function(e,t){return new Date(t.pubDate[0])-new Date(e.pubDate[0])})),i.sort((function(e,t){return new Date(t.pubDate[0])-new Date(e.pubDate[0])})),d.sort((function(e,t){return new Date(t.pubDate[0])-new Date(e.pubDate[0])})),console.log(s),console.log(i),console.log(u),console.log(d)})),e((n=s,l=i,c=u,r=d,{type:p.c,posts:n,news:l,podcast:c,gondo:r,loaded:!0}))})).catch((function(t){console.log(t),e(function(e){return{type:p.a,error:e}}(t))}))}},b=a(25),g=a(65),x=a.n(g),v=function(){return l.a.createElement("div",{className:x.a.Loader},"Loading...")},k=a(176),y=a(2);t.a=Object(b.b)((function(e){return{news:e.posts.news,podcast:e.posts.podcast,loading:e.posts.loading,loaded:e.posts.loaded}}),(function(e){return{onFetchPosts:function(){return e(w())}}}))((function(e){var t=e.onFetchPosts;Object(n.useEffect)((function(){e.loaded||t()}),[]);var a=function(e,t){console.log("Start Test");for(var a=0;a<e.length;a++)if(console.log(e[a]["wp:post_name"][0]),e[a]["wp:post_name"][0]===t)return console.log("Found in: ",a),a},r=l.a.createElement(v,null),o=0,s=Object(y.f)();if(console.log(s),!e.loading&e.loaded)switch(e.type){case"NEWS":r=e.news.map((function(e){return l.a.createElement(c.a,{key:e.id,author:e["dc:creator"][0],title:e.title,article:e["content:encoded"][0],date:e.pubDate[0],postName:e["wp:post_name"][0],location:s.pathname})}));break;case"PODCAST":r=e.podcast.map((function(e){return l.a.createElement(i,{key:e.id,date:e.pubDate[0],title:e.title,content:e["content:encoded"][0],postName:e["wp:post_name"][0],location:s.pathname})}));break;case"FULLNEWS":o=a(e.news,e.pageTitle);var m=e.news;r=l.a.createElement(u,{key:m[o].id,author:m[o]["dc:creator"][0],title:m[o].title,content:m[o]["content:encoded"][0],date:m[o].pubDate[0]});break;case"FULLPODCAST":o=a(e.podcast,e.pageTitle);var p=e.podcast;r=l.a.createElement(u,{key:p[o].id,author:p[o]["dc:creator"][0],date:p[o].pubDate[0],title:p[o].title,content:p[o]["content:encoded"][0]})}return l.a.createElement(k.a,null,r)}))},93:function(e,t){},94:function(e,t){},98:function(e,t,a){"use strict";var n=a(126),l=a(127),c=a(125),r=a(0),o=a.n(r),s=a(99),i=a.n(s),u=a(176),m=a(130),p=a(12);t.a=function(e){return o.a.createElement(p.a,null,o.a.createElement(u.a,null,o.a.createElement(m.a,{xs:12},o.a.createElement("h2",null,o.a.createElement("span",null,"Stay Connected")))),o.a.createElement(u.a,null,o.a.createElement(m.a,{xs:12},o.a.createElement("h3",null,"Follow")),o.a.createElement(u.a,null,o.a.createElement(m.a,{xs:3},o.a.createElement("a",{href:"https://www.facebook.com/Rolistespod/",className:i.a.SideLink},o.a.createElement("span",null,o.a.createElement(c.a,{icon:n.b,"aria-hidden":"true"})))),o.a.createElement(m.a,{xs:3},o.a.createElement("a",{href:"https://twitter.com/rolistespod",className:i.a.SideLink},o.a.createElement("span",null,o.a.createElement(c.a,{icon:n.f,"aria-hidden":"true"})))),o.a.createElement(m.a,{xs:3},o.a.createElement("a",{href:"https://www.instagram.com/rolistespod/?hl=en",className:i.a.SideLink},o.a.createElement("span",null,o.a.createElement(c.a,{icon:n.c,"aria-hidden":"true"})))),o.a.createElement(m.a,{xs:3},o.a.createElement("a",{href:"https://www.tiktok.com/@rolistespod?lang=en",className:i.a.SideLink},o.a.createElement("span",null,o.a.createElement(c.a,{icon:n.e,"aria-hidden":"true"})))))),o.a.createElement(u.a,null,o.a.createElement(m.a,{xs:12},o.a.createElement("h3",null,"Listen")),o.a.createElement(u.a,null,o.a.createElement(m.a,{xs:3},o.a.createElement("a",{href:"https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom?si=f8oaIyG1QU2cgrBeDlLP5A",className:i.a.SideLink},o.a.createElement("span",null,o.a.createElement(c.a,{icon:n.d,"aria-hidden":"true"})))),o.a.createElement(m.a,{xs:3},o.a.createElement("a",{href:"https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191",className:i.a.SideLink},o.a.createElement("span",null,o.a.createElement(c.a,{icon:n.a,"aria-hidden":"true"})))),o.a.createElement(m.a,{xs:3},o.a.createElement("a",{href:"https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg",className:i.a.SideLink},o.a.createElement("span",null,o.a.createElement(c.a,{icon:n.g,"aria-hidden":"true"})))),o.a.createElement(m.a,{xs:3},o.a.createElement("a",{href:"http://www.stitcher.com/podcast/the-rolistes-podcast",className:i.a.SideLink},o.a.createElement("span",null,o.a.createElement(c.a,{icon:l.a,"aria-hidden":"true"})))))))}},99:function(e,t,a){e.exports={SideLink:"Follow_SideLink__Ox2dA"}}}]);
//# sourceMappingURL=5.f5b9a4a5.chunk.js.map