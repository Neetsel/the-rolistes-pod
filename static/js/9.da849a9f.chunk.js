(this["webpackJsonpthe-rolistes-pod"]=this["webpackJsonpthe-rolistes-pod"]||[]).push([[9],{191:function(e,t,n){},192:function(e,t,n){},200:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),o=n(191),s=n.n(o),u=function(e){return a.a.createElement("button",{className:[s.a.Button,s.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)},i=(n(192),n(159)),l=n(195),d=n(196),P=n(170),C=n(160),f=n(186),p=n(62),g=n(24),m=n(95),y=n.n(m);t.default=Object(g.b)((function(e){return{podcast:e.posts.podcast,currentPagePodcast:e.posts.currentPagePodcast,currentCategoryPodcast:e.posts.currentCategoryPodcast,currentCategorySize:e.posts.currentCategorySize}}),(function(e){return{onSetCurrentPagePodcast:function(t){return e(p.e(t))},onSetCurrentCategoryPodcast:function(t){return e(p.b(t))}}}))((function(e){var t=24*e.currentPagePodcast,n=t-24;Object(r.useEffect)((function(){e.onSetCurrentPagePodcast(1),e.onSetCurrentCategoryPodcast("podcast")}),[]);return a.a.createElement(c.a,null,a.a.createElement(i.a,null,a.a.createElement("div",{className:y.a.item_box},a.a.createElement("h1",{className:y.a.section_title},"Podcast"),a.a.createElement(u,{type:"TOGGLE",clicked:function(){return e.onSetCurrentCategoryPodcast("podcast")}},"ALL"),a.a.createElement(u,{type:"TOGGLE",clicked:function(){return e.onSetCurrentCategoryPodcast("the-rolistes-podcast")}},"The Rolistes Podcast"),a.a.createElement(u,{type:"TOGGLE",clicked:function(){return e.onSetCurrentCategoryPodcast("the-rolistes-present")}},"The Rolistes Present"),a.a.createElement(u,{type:"TOGGLE",clicked:function(){return e.onSetCurrentCategoryPodcast("cafe-rolistes")}},"Cafe Rolistes"),a.a.createElement(u,{type:"TOGGLE",clicked:function(){return e.onSetCurrentCategoryPodcast("film-studies")}},"Film Studies"),a.a.createElement(l.a,null,a.a.createElement(d.a,{xs:12},a.a.createElement(P.a,Object.assign({},e,{type:"PODCAST",filterCategory:e.currentCategoryPodcast,indexOfFirstPost:n,indexOfLastPost:t})),a.a.createElement(f.a,{totalRecords:e.currentCategorySize,pageLimit:24,clicked:function(t){return e.onSetCurrentPagePodcast(t)},currentPage:e.currentPagePodcast}))))),a.a.createElement(C.a,null))}))}}]);
//# sourceMappingURL=9.da849a9f.chunk.js.map