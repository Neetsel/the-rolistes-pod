(this["webpackJsonpthe-rolistes-pod"]=this["webpackJsonpthe-rolistes-pod"]||[]).push([[7],{150:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(161),c=a(14);a(23),a(151);t.a=function(e){return l.a.createElement(r.a,{xs:12},l.a.createElement(c.b,{to:e.location+"/"+e.postName},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.author),l.a.createElement("p",null,e.date),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.article}})))}},151:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(169),c=a(161),o=a(23);a(153);t.a=function(e){return l.a.createElement(o.a,null,l.a.createElement(r.a,null,l.a.createElement(c.a,null,"Coming Soon")))}},153:function(e,t,a){},154:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(23);t.a=function(e){return l.a.createElement(r.a,null,"Footer")}},155:function(e,t,a){},156:function(e,t){},157:function(e,t,a){e.exports={Loader:"Spinner_Loader__1u8qb",load2:"Spinner_load2__1Bcn_"}},158:function(e,t,a){"use strict";var n=a(9),l=a(0),r=a.n(l),c=a(150),o=a(161),s=a(14),i=a(23),u=function(e){return r.a.createElement(i.a,null,r.a.createElement(o.a,{xs:12,md:6,lg:4},r.a.createElement(s.b,{to:"/2020/15/16/"+e.postName},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,e.date),r.a.createElement("h1",null,e.title))))))},m=(a(155),function(e){return r.a.createElement(o.a,{xs:12},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.author),r.a.createElement("p",null,e.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))}),d=a(169),p=function(e){var t=[];for(var a in e.news)t.push({key:e.news[a].id,date:e.news[a].pubDate[0],title:e.news[a].title,content:e.news[a]["content:encoded"][0],postName:e.news[a]["wp:post_name"][0],location:e.location});var n=r.a.createElement(s.b,{to:t[0].location+"news/"+t[0].postName},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,t[0].date),r.a.createElement("h1",null,t[0].title))));t.shift();var l=t.map((function(e){return r.a.createElement(o.a,{xs:12,md:6,key:e.key},r.a.createElement(s.b,{to:e.location+"news/"+e.postName},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,e.date),r.a.createElement("h1",null,e.title)))))}));return console.log(l),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(o.a,{xs:12,lg:5},n),r.a.createElement(o.a,{xs:12,lg:7},r.a.createElement(d.a,null,l))))},E=function(e){var t=[];for(var a in e.podcast)t.push({key:e.podcast[a].id,date:e.podcast[a].pubDate[0],title:e.podcast[a].title,content:e.podcast[a]["content:encoded"][0],postName:e.podcast[a]["wp:post_name"][0],location:e.location});var n=r.a.createElement(s.b,{to:t[0].location+"2020/15/16/"+t[0].postName},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,t[0].date),r.a.createElement("h1",null,t[0].title))));t.shift();var l=t.map((function(e){return r.a.createElement(o.a,{xs:12,md:6,key:e.key},r.a.createElement(s.b,{to:e.location+"2020/15/16/"+e.postName},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,e.date),r.a.createElement("h1",null,e.title)))))}));return r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(o.a,{xs:12,lg:5},n),r.a.createElement(o.a,{xs:12,lg:7},r.a.createElement(d.a,null,l))))},f=(a(156),a(58),a(24)),v=a(157),h=a.n(v),b=function(){return r.a.createElement("div",{className:h.a.Loader},"Loading...")},g=a(2),w=a(152);t.a=Object(f.b)((function(e){return{news:e.posts.news,podcast:e.posts.podcast,loading:e.posts.loading,loaded:e.posts.loaded}}))((function(e){var t=function(e,t){console.log("Start Test");for(var a=0;a<e.length;a++)if(console.log(e[a]["wp:post_name"][0]),e[a]["wp:post_name"][0]===t)return console.log("Found in: ",a),a},a=function(e,t){for(var a=1;a<e.length;a++)for(var n=0;n<e[a].category.length;n++)if(e[a].category[n].$.nicename===t)return a},l=r.a.createElement(b,null),o=0,s=Object(g.f)();if(console.log(s),!e.loading&e.loaded)switch(e.type){case"NEWS":l=e.news.slice(e.indexOfFirstPost,e.indexOfLastPost).map((function(e){return r.a.createElement(c.a,{key:e.id,author:e["dc:creator"][0],title:e.title,article:e["content:encoded"][0],date:e.pubDate[0],postName:e["wp:post_name"][0],location:s.pathname})}));break;case"PODCAST":l=e.podcast.slice(e.indexOfFirstPost,e.indexOfLastPost).map((function(e){return r.a.createElement(u,{key:e.id,date:e.pubDate[0],title:e.title,content:e["content:encoded"][0],postName:e["wp:post_name"][0],location:s.pathname})}));break;case"FULLNEWS":o=t(e.news,e.pageTitle);var i=e.news;l=r.a.createElement(m,{key:i[o].id,author:i[o]["dc:creator"][0],title:i[o].title,content:i[o]["content:encoded"][0],date:i[o].pubDate[0]});break;case"FULLPODCAST":o=t(e.podcast,e.pageTitle);var f=e.podcast;l=r.a.createElement(m,{key:f[o].id,author:f[o]["dc:creator"][0],date:f[o].pubDate[0],title:f[o].title,content:f[o]["content:encoded"][0]});break;case"LATEST":var v=function(e,t){for(var a=[],l=0;l<t;l++)a.push(Object(n.a)(Object(n.a)({},e[l]),{},{latest:0==l,id:l}));return a}(e.news,5),h=function(e,t){var l=[];l.push(Object(n.a)(Object(n.a)({},e[0]),{},{latest:!0,id:0}));for(var r=["the-rolistes-podcast","the-rolistes-present","cafe-rolistes","film-studies"],c=0,o=0;o<r.length;o++)c=a(e,r[o]),l.push(Object(n.a)(Object(n.a)({},e[c]),{},{latest:!0,id:o+1}));return l}(e.podcast);l=r.a.createElement("div",null,r.a.createElement(w.a,null),r.a.createElement(p,{news:v,location:s.pathname}),r.a.createElement(E,{podcast:h,location:s.pathname}))}return r.a.createElement(d.a,null,l)}))},161:function(e,t,a){"use strict";var n=a(1),l=a(4),r=a(56),c=a.n(r),o=a(0),s=a.n(o),i=a(57),u=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,m=void 0===o?"div":o,d=Object(l.a)(e,["bsPrefix","className","as"]),p=Object(i.a)(a,"col"),E=[],f=[];return u.forEach((function(e){var t,a,n,l=d[e];if(delete d[e],"object"===typeof l&&null!=l){var r=l.span;t=void 0===r||r,a=l.offset,n=l.order}else t=l;var c="xs"!==e?"-"+e:"";t&&E.push(!0===t?""+p+c:""+p+c+"-"+t),null!=n&&f.push("order"+c+"-"+n),null!=a&&f.push("offset"+c+"-"+a)})),E.length||E.push(p),s.a.createElement(m,Object(n.a)({},d,{ref:t,className:c.a.apply(void 0,[r].concat(E,f))}))}));m.displayName="Col",t.a=m},169:function(e,t,a){"use strict";var n=a(1),l=a(4),r=a(56),c=a.n(r),o=a(0),s=a.n(o),i=a(57),u=["xl","lg","md","sm","xs"],m=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.noGutters,m=e.as,d=void 0===m?"div":m,p=Object(l.a)(e,["bsPrefix","className","noGutters","as"]),E=Object(i.a)(a,"row"),f=E+"-cols",v=[];return u.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&v.push(""+f+n+"-"+t)})),s.a.createElement(d,Object(n.a)({ref:t},p,{className:c.a.apply(void 0,[r,E,o&&"no-gutters"].concat(v))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},173:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=(a(152),a(173),a(154)),o=a(149),s=a(158);t.default=function(e){return l.a.createElement(r.a,null,l.a.createElement(o.a,null,l.a.createElement(s.a,Object.assign({},e,{type:"LATEST"}))),l.a.createElement(c.a,null))}}}]);
//# sourceMappingURL=7.2c9d9819.chunk.js.map