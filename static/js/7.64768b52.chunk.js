(this["webpackJsonpthe-rolistes-pod"]=this["webpackJsonpthe-rolistes-pod"]||[]).push([[7],{162:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(1),c=t(7),s=t(66),i=t.n(s),o=t(67);var m=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];e.apply(this,n),a.apply(this,n)}}),null)};function p(e){return!e||"#"===e.trim()}var u=l.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,s=e.disabled,i=e.onKeyDown,o=Object(c.a)(e,["as","disabled","onKeyDown"]),u=function(e){var a=o.href,t=o.onClick;(s||p(a))&&e.preventDefault(),s?e.stopPropagation():t&&t(e)};return p(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),s&&(o.tabIndex=-1,o["aria-disabled"]=!0),l.a.createElement(n,Object(r.a)({ref:a},o,{onClick:u,onKeyDown:m((function(e){" "===e.key&&(e.preventDefault(),u(e))}),i)}))}));u.displayName="SafeAnchor";var d=u,E=l.a.forwardRef((function(e,a){var t=e.active,n=e.disabled,s=e.className,o=e.style,m=e.activeLabel,p=e.children,u=Object(c.a)(e,["active","disabled","className","style","activeLabel","children"]),E=t||n?"span":d;return l.a.createElement("li",{ref:a,style:o,className:i()(s,"page-item",{active:t,disabled:n})},l.a.createElement(E,Object(r.a)({className:"page-link",disabled:n},u),p,t&&m&&l.a.createElement("span",{className:"sr-only"},m)))}));E.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},E.displayName="PageItem";var f=E;function h(e,a,t){function n(e){var n=e.children,r=Object(c.a)(e,["children"]);return l.a.createElement(E,r,l.a.createElement("span",{"aria-hidden":"true"},n||a),l.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),n.displayName=e,n}var _=h("First","\xab"),w=h("Prev","\u2039","Previous"),g=h("Ellipsis","\u2026","More"),N=h("Next","\u203a"),y=h("Last","\xbb"),v=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,m=e.size,p=Object(c.a)(e,["bsPrefix","className","children","size"]),u=Object(o.a)(t,"pagination");return l.a.createElement("ul",Object(r.a)({ref:a},p,{className:i()(n,u,m&&u+"-"+m)}),s)}));v.First=_,v.Prev=w,v.Ellipsis=g,v.Item=f,v.Next=N,v.Last=y;var b=v;a.a=function(e){var a,t=e.currentPage,n=[];a=Math.ceil(e.totalRecords/e.pageLimit);for(var r=function(a){n.push(l.a.createElement(b.Item,{key:a,onClick:function(){return e.clicked(a)},active:a===t,href:"#top"},a))},c=1;c<=a;c++)r(c);return l.a.createElement("div",null,l.a.createElement(b,{size:"sm"},n))}},165:function(e,a,t){"use strict";var n=t(171),l=t(65),r=t(64),c=t(0),s=t.n(c),i=t(166),o=t.n(i),m=t(198),p=t(199),u=t(24),d=t(97),E=t.n(d);a.a=function(e){return s.a.createElement(u.a,null,s.a.createElement("div",{className:E.a.item_box_right},s.a.createElement(m.a,null,s.a.createElement(p.a,{xs:12},s.a.createElement("h2",{className:E.a.section_title},"Stay Connected"))),s.a.createElement(m.a,null,s.a.createElement(p.a,{xs:12},s.a.createElement("h3",{className:o.a.side_title},"Follow")),s.a.createElement(m.a,{className:o.a.side_icons},s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://www.facebook.com/Rolistespod/",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.a,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://twitter.com/rolistespod",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.f,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://www.instagram.com/rolistespod/?hl=en",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.b,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://www.tiktok.com/@rolistespod?lang=en",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.e,"aria-hidden":"true"})))))),s.a.createElement(m.a,null,s.a.createElement(p.a,{xs:12},s.a.createElement("h3",{className:o.a.side_title},"Listen")),s.a.createElement(m.a,{className:o.a.side_icons},s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom?si=f8oaIyG1QU2cgrBeDlLP5A",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.d,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.c,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.g,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"http://www.stitcher.com/podcast/the-rolistes-podcast",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:l.e,"aria-hidden":"true"})))))),s.a.createElement(m.a,null,s.a.createElement(p.a,{xs:12},s.a.createElement("h3",{className:o.a.side_title},"Contact Us")),s.a.createElement(m.a,{className:o.a.side_icons},s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"mailto:rolistespod@gmail.com",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:l.d,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://twitter.com/rolistespod",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.f,"aria-hidden":"true"})))),s.a.createElement(p.a,{xs:3},s.a.createElement("a",{href:"https://www.facebook.com/Rolistespod/",className:o.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.a,"aria-hidden":"true"}))))))))}},166:function(e,a,t){e.exports={SideLink:"Follow_SideLink__asUKs",side_title:"Follow_side_title__15wVB",side_icons:"Follow_side_icons__QI3Ty"}},167:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(198),c=t(199),s=t(24),i=t(168),o=t.n(i),m=t(169),p=t.n(m),u=t(170),d=t.n(u),E=t(97),f=t.n(E);a.a=function(e){return l.a.createElement(s.a,null,l.a.createElement(r.a,null,l.a.createElement(c.a,{xs:12},l.a.createElement("div",{className:f.a.item_box_right},l.a.createElement("h2",{className:f.a.section_title},"Support Us"),l.a.createElement("a",{href:"https://www.patreon.com/RolistesPod"},l.a.createElement("img",{src:p.a,className:[d.a.Support_Img,d.a.Support_Img_Patreon].join(" "),alt:"Support me on Patreon","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.paypal.com/paypalme/rolistespod/"},l.a.createElement("img",{src:o.a,className:[d.a.Support_Img,d.a.Support_Img_Paypal].join(" "),alt:"Donate with Paypal","aria-hidden":"true"}))))))}},168:function(e,a,t){e.exports=t.p+"static/media/paypal-button.4cc1a483.png"},169:function(e,a,t){e.exports=t.p+"static/media/patreon-button.05bf0e82.png"},170:function(e,a,t){e.exports={Support_Img:"Support_Support_Img__1ApLA",Support_Img_Patreon:"Support_Support_Img_Patreon__Hw23Q",Support_Img_Paypal:"Support_Support_Img_Paypal__CPrgK"}},192:function(e,a,t){},200:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t(163),s=(t(192),t(161)),i=t(198),o=t(199),m=t(165),p=t(167),u=t(162),d=t(164),E=t(97),f=t.n(E),h=t(4);a.default=function(e){var a=Object(h.g)().pageId;return Object(n.useEffect)((function(){window.scrollTo(0,0)})),l.a.createElement(r.a,null,l.a.createElement(s.a,null,l.a.createElement(i.a,null,l.a.createElement(o.a,{lg:8,xs:12,className:[f.a.no_padding_right,f.a.no_padding_smallscreen].join(" ")},l.a.createElement(c.a,{type:e.type,pageTitle:a}),l.a.createElement(u.a,null)),l.a.createElement(o.a,{lg:4,xs:12},l.a.createElement(i.a,null,l.a.createElement(o.a,{xs:12,className:f.a.no_padding_smallscreen},l.a.createElement(m.a,null)),l.a.createElement(o.a,{xs:12,className:f.a.no_padding_smallscreen},l.a.createElement(p.a,null)),l.a.createElement(o.a,{xs:12,className:f.a.no_padding_smallscreen},l.a.createElement(c.a,{type:"RECOMMENDED",postType:e.type,pageTitle:a})),l.a.createElement(o.a,{xs:12,className:f.a.no_padding_smallscreen},l.a.createElement(c.a,{type:"RECENT",postType:e.type})))))),l.a.createElement(d.a,null))}}}]);
//# sourceMappingURL=7.64768b52.chunk.js.map