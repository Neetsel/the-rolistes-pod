(this["webpackJsonpthe-rolistes-pod"]=this["webpackJsonpthe-rolistes-pod"]||[]).push([[5],{162:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(1),c=t(7),s=t(66),i=t.n(s),o=t(67);var m=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.apply(this,n),a.apply(this,n)}}),null)};function u(e){return!e||"#"===e.trim()}var d=r.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,s=e.disabled,i=e.onKeyDown,o=Object(c.a)(e,["as","disabled","onKeyDown"]),d=function(e){var a=o.href,t=o.onClick;(s||u(a))&&e.preventDefault(),s?e.stopPropagation():t&&t(e)};return u(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),s&&(o.tabIndex=-1,o["aria-disabled"]=!0),r.a.createElement(n,Object(l.a)({ref:a},o,{onClick:d,onKeyDown:m((function(e){" "===e.key&&(e.preventDefault(),d(e))}),i)}))}));d.displayName="SafeAnchor";var p=d,E=r.a.forwardRef((function(e,a){var t=e.active,n=e.disabled,s=e.className,o=e.style,m=e.activeLabel,u=e.children,d=Object(c.a)(e,["active","disabled","className","style","activeLabel","children"]),E=t||n?"span":p;return r.a.createElement("li",{ref:a,style:o,className:i()(s,"page-item",{active:t,disabled:n})},r.a.createElement(E,Object(l.a)({className:"page-link",disabled:n},d),u,t&&m&&r.a.createElement("span",{className:"sr-only"},m)))}));E.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},E.displayName="PageItem";var f=E;function h(e,a,t){function n(e){var n=e.children,l=Object(c.a)(e,["children"]);return r.a.createElement(E,l,r.a.createElement("span",{"aria-hidden":"true"},n||a),r.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),n.displayName=e,n}var _=h("First","\xab"),w=h("Prev","\u2039","Previous"),g=h("Ellipsis","\u2026","More"),N=h("Next","\u203a"),b=h("Last","\xbb"),v=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,m=e.size,u=Object(c.a)(e,["bsPrefix","className","children","size"]),d=Object(o.a)(t,"pagination");return r.a.createElement("ul",Object(l.a)({ref:a},u,{className:i()(n,d,m&&d+"-"+m)}),s)}));v.First=_,v.Prev=w,v.Ellipsis=g,v.Item=f,v.Next=N,v.Last=b;var x=v;a.a=function(e){var a,t=e.currentPage,n=[];a=Math.ceil(e.totalRecords/e.pageLimit);for(var l=function(a){n.push(r.a.createElement(x.Item,{key:a,onClick:function(){return e.clicked(a)},active:a===t,href:"#top"},a))},c=1;c<=a;c++)l(c);return r.a.createElement("div",null,r.a.createElement(x,{size:"sm"},n))}},165:function(e,a,t){"use strict";var n=t(171),r=t(65),l=t(64),c=t(0),s=t.n(c),i=t(166),o=t.n(i),m=t(198),u=t(199),d=t(24),p=t(97),E=t.n(p);a.a=function(e){return s.a.createElement(d.a,null,s.a.createElement("div",{className:E.a.item_box_right},s.a.createElement(m.a,null,s.a.createElement(u.a,{xs:12},s.a.createElement("h2",{className:E.a.section_title},"Stay Connected"))),s.a.createElement(m.a,null,s.a.createElement(u.a,{xs:12},s.a.createElement("h3",{className:o.a.side_title},"Follow")),s.a.createElement(m.a,{className:o.a.side_icons},s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://www.facebook.com/Rolistespod/",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:n.a,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://twitter.com/rolistespod",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:n.f,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://www.instagram.com/rolistespod/?hl=en",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:n.b,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://www.tiktok.com/@rolistespod?lang=en",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:n.e,"aria-hidden":"true"})))))),s.a.createElement(m.a,null,s.a.createElement(u.a,{xs:12},s.a.createElement("h3",{className:o.a.side_title},"Listen")),s.a.createElement(m.a,{className:o.a.side_icons},s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom?si=f8oaIyG1QU2cgrBeDlLP5A",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:n.d,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:n.c,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:n.g,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"http://www.stitcher.com/podcast/the-rolistes-podcast",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:r.e,"aria-hidden":"true"})))))),s.a.createElement(m.a,null,s.a.createElement(u.a,{xs:12},s.a.createElement("h3",{className:o.a.side_title},"Contact Us")),s.a.createElement(m.a,{className:o.a.side_icons},s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"mailto:rolistespod@gmail.com",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:r.d,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://twitter.com/rolistespod",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:n.f,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://www.facebook.com/Rolistespod/",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(l.a,{icon:n.a,"aria-hidden":"true"}))))))))}},166:function(e,a,t){e.exports={SideLink:"Follow_SideLink__Ox2dA",side_title:"Follow_side_title__1Ouq3",side_icons:"Follow_side_icons__jGrt-"}},167:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(198),c=t(199),s=t(24),i=t(168),o=t.n(i),m=t(169),u=t.n(m),d=t(170),p=t.n(d),E=t(97),f=t.n(E);a.a=function(e){return r.a.createElement(s.a,null,r.a.createElement(l.a,null,r.a.createElement(c.a,{xs:12},r.a.createElement("div",{className:f.a.item_box_right},r.a.createElement("h2",{className:f.a.section_title},"Support Us"),r.a.createElement("a",{href:"https://www.patreon.com/RolistesPod"},r.a.createElement("img",{src:u.a,className:[p.a.Support_Img,p.a.Support_Img_Patreon].join(" "),alt:"Support me on Patreon","aria-hidden":"true"})),r.a.createElement("a",{href:"https://www.paypal.com/paypalme/rolistespod/"},r.a.createElement("img",{src:o.a,className:[p.a.Support_Img,p.a.Support_Img_Paypal].join(" "),alt:"Donate with Paypal","aria-hidden":"true"}))))))}},168:function(e,a,t){e.exports=t.p+"static/media/paypal-button.4cc1a483.png"},169:function(e,a,t){e.exports=t.p+"static/media/patreon-button.05bf0e82.png"},170:function(e,a,t){e.exports={Support_Img:"Support_Support_Img__EWQOZ",Support_Img_Patreon:"Support_Support_Img_Patreon__1BGqU",Support_Img_Paypal:"Support_Support_Img_Paypal__2GfJN"}},194:function(e,a,t){},202:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t(163),s=(t(194),t(162)),i=t(161),o=t(198),m=t(199),u=t(165),d=t(167),p=t(164),E=t(33),f=t(25),h=t(97),_=t.n(h);a.default=Object(f.b)((function(e){return{news:e.posts.news,gondo:e.posts.gondo,currentPageNews:e.posts.currentPageNews}}),(function(e){return{onSetCurrentPageNews:function(a){return e(E.d(a))}}}))((function(e){Object(n.useEffect)((function(){window.scrollTo(0,0)}));var a=10*e.currentPageNews,t=a-10;return r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(m.a,{lg:8,xs:12,className:[_.a.no_padding_right,_.a.no_padding_smallscreen].join(" ")},r.a.createElement(c.a,Object.assign({},e,{type:"INTROGONDO"})),r.a.createElement("div",{className:_.a.item_box_left},r.a.createElement("h2",{className:_.a.section_title},"Latest Paris Gondo News"),r.a.createElement(c.a,Object.assign({},e,{type:"GONDO",indexOfFirstPost:t,indexOfLastPost:a})),r.a.createElement(s.a,{totalRecords:e.gondo.length,pageLimit:10,clicked:function(a){return e.onSetCurrentPageNews(a)},currentPage:e.currentPageNews}))),r.a.createElement(m.a,{lg:4,xs:12},r.a.createElement(o.a,null,r.a.createElement(m.a,{xs:12,className:_.a.no_padding_smallscreen},r.a.createElement(u.a,null)),r.a.createElement(m.a,{xs:12,className:_.a.no_padding_smallscreen},r.a.createElement(d.a,null)))))),r.a.createElement(p.a,null))}))}}]);
//# sourceMappingURL=5.e0f41159.chunk.js.map