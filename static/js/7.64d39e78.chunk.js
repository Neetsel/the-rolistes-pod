(this["webpackJsonpthe-rolistes-pod"]=this["webpackJsonpthe-rolistes-pod"]||[]).push([[7],{162:function(e,a,t){},163:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(162),t(1)),c=t(5),s=t(63),i=t.n(s),m=t(64);var o=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];e.apply(this,n),a.apply(this,n)}}),null)};function u(e){return!e||"#"===e.trim()}var d=l.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,s=e.disabled,i=e.onKeyDown,m=Object(c.a)(e,["as","disabled","onKeyDown"]),d=function(e){var a=m.href,t=m.onClick;(s||u(a))&&e.preventDefault(),s?e.stopPropagation():t&&t(e)};return u(m.href)&&(m.role=m.role||"button",m.href=m.href||"#"),s&&(m.tabIndex=-1,m["aria-disabled"]=!0),l.a.createElement(n,Object(r.a)({ref:a},m,{onClick:d,onKeyDown:o((function(e){" "===e.key&&(e.preventDefault(),d(e))}),i)}))}));d.displayName="SafeAnchor";var E=d,p=l.a.forwardRef((function(e,a){var t=e.active,n=e.disabled,s=e.className,m=e.style,o=e.activeLabel,u=e.children,d=Object(c.a)(e,["active","disabled","className","style","activeLabel","children"]),p=t||n?"span":E;return l.a.createElement("li",{ref:a,style:m,className:i()(s,"page-item",{active:t,disabled:n})},l.a.createElement(p,Object(r.a)({className:"page-link",disabled:n},d),u,t&&o&&l.a.createElement("span",{className:"sr-only"},o)))}));p.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},p.displayName="PageItem";var f=p;function h(e,a,t){function n(e){var n=e.children,r=Object(c.a)(e,["children"]);return l.a.createElement(p,r,l.a.createElement("span",{"aria-hidden":"true"},n||a),l.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),n.displayName=e,n}var w=h("First","\xab"),v=h("Prev","\u2039","Previous"),_=h("Ellipsis","\u2026","More"),N=h("Next","\u203a"),b=h("Last","\xbb"),x=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,o=e.size,u=Object(c.a)(e,["bsPrefix","className","children","size"]),d=Object(m.a)(t,"pagination");return l.a.createElement("ul",Object(r.a)({ref:a},u,{className:i()(n,d,o&&d+"-"+o)}),s)}));x.First=w,x.Prev=v,x.Ellipsis=_,x.Item=f,x.Next=N,x.Last=b;var g=x;a.a=function(e){var a,t=e.currentPage,n=[];a=Math.ceil(e.totalRecords/e.pageLimit);for(var r=function(a){n.push(l.a.createElement(g.Item,{key:a,onClick:function(){return e.clicked(a)},active:a===t,href:"#top"},a))},c=1;c<=a;c++)r(c);return l.a.createElement("div",null,l.a.createElement(g,{size:"sm"},n))}},173:function(e,a,t){"use strict";var n=t(164),l=t(62),r=t(61),c=t(0),s=t.n(c),i=t(174),m=t.n(i),o=t(196),u=t(197),d=t(24),E=t(96),p=t.n(E);a.a=function(e){return s.a.createElement(d.a,null,s.a.createElement("div",{className:p.a.item_box_right},s.a.createElement(o.a,null,s.a.createElement(u.a,{xs:12},s.a.createElement("h2",{className:p.a.section_title},"Stay Connected"))),s.a.createElement(o.a,null,s.a.createElement(u.a,{xs:12},s.a.createElement("h3",{className:m.a.side_title},"Follow")),s.a.createElement(o.a,{className:m.a.side_icons},s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://www.facebook.com/Rolistespod/",className:m.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.b,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://twitter.com/rolistespod",className:m.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.f,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://www.instagram.com/rolistespod/?hl=en",className:m.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.c,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://www.tiktok.com/@rolistespod?lang=en",className:m.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.e,"aria-hidden":"true"})))))),s.a.createElement(o.a,null,s.a.createElement(u.a,{xs:12},s.a.createElement("h3",{className:m.a.side_title},"Listen")),s.a.createElement(o.a,{className:m.a.side_icons},s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom?si=f8oaIyG1QU2cgrBeDlLP5A",className:m.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.d,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191",className:m.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.a,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg",className:m.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:n.g,"aria-hidden":"true"})))),s.a.createElement(u.a,{xs:3},s.a.createElement("a",{href:"http://www.stitcher.com/podcast/the-rolistes-podcast",className:m.a.SideLink},s.a.createElement("span",null,s.a.createElement(r.a,{icon:l.d,"aria-hidden":"true"}))))))))}},174:function(e,a,t){e.exports={SideLink:"Follow_SideLink__2rxiq",side_title:"Follow_side_title__t3K0a",side_icons:"Follow_side_icons__WGzh_"}},175:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(196),c=t(197),s=t(24),i=t(96),m=t.n(i);a.a=function(e){return l.a.createElement(s.a,null,l.a.createElement(r.a,null,l.a.createElement(c.a,{xs:12},l.a.createElement("div",{className:m.a.item_box_right},l.a.createElement("h2",{className:m.a.section_title},"Contact Us"),l.a.createElement("p",null,"Email: "),l.a.createElement("p",null,"Twitter: @rolistespod"),l.a.createElement("p",null,"Facebook: @rolistespod")))))}},176:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(196),c=t(197),s=t(24),i=t(177),m=t.n(i),o=t(178),u=t.n(o),d=(t(179),t(96)),E=t.n(d);a.a=function(e){return l.a.createElement(s.a,null,l.a.createElement(r.a,null,l.a.createElement(c.a,{xs:12},l.a.createElement("div",{className:E.a.item_box_right},l.a.createElement("h2",{className:E.a.section_title},"Support Us"),l.a.createElement("a",{href:"https://www.patreon.com/RolistesPod"},l.a.createElement("img",{src:u.a,alt:"Support me on Patreon","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.paypal.com/paypalme/rolistespod/"},l.a.createElement("img",{src:m.a,alt:"Donate with Paypal","aria-hidden":"true"}))))))}},177:function(e,a,t){e.exports=t.p+"static/media/paypal-button.4cc1a483.png"},178:function(e,a,t){e.exports=t.p+"static/media/patreon-button.05bf0e82.png"},179:function(e,a,t){},190:function(e,a,t){},200:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t(165),s=(t(190),t(160)),i=t(196),m=t(197),o=t(173),u=t(175),d=t(176),E=t(96),p=t.n(E),f=function(e){return l.a.createElement(r.a,null,l.a.createElement("div",{className:p.a.item_box_right},l.a.createElement("h2",{className:p.a.section_title},"Recommended")))},h=function(e){return l.a.createElement(r.a,null,l.a.createElement("div",{className:p.a.item_box_right},l.a.createElement("h2",{className:p.a.section_title},"Recent")))},w=t(163),v=t(161),_=t(3);a.default=function(e){var a=Object(_.g)().pageId;return Object(n.useEffect)((function(){window.scrollTo(0,0)})),l.a.createElement(r.a,null,l.a.createElement(s.a,null,l.a.createElement(i.a,null,l.a.createElement(m.a,{lg:8,xs:12},l.a.createElement(c.a,{type:e.type,pageTitle:a}),l.a.createElement(w.a,null)),l.a.createElement(m.a,{lg:4,xs:12},l.a.createElement(i.a,null,l.a.createElement(m.a,{xs:12,className:p.a.no_padding_smallscreen},l.a.createElement(o.a,null)),l.a.createElement(m.a,{xs:12,className:p.a.no_padding_smallscreen},l.a.createElement(u.a,null)),l.a.createElement(m.a,{xs:12,className:p.a.no_padding_smallscreen},l.a.createElement(d.a,null)),l.a.createElement(m.a,{xs:12,className:p.a.no_padding_smallscreen},l.a.createElement(f,null)),l.a.createElement(m.a,{xs:12,className:p.a.no_padding_smallscreen},l.a.createElement(h,null)))))),l.a.createElement(v.a,null))}}}]);
//# sourceMappingURL=7.64d39e78.chunk.js.map