(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return r}),a.d(t,"c",function(){return o});var n=["REQUEST","SUCCESS","FAILURE","CANCEL","RESET"],c=function(e){var t={};return n.forEach(function(a){t[a]="".concat(e,"_").concat(a)}),t},i=c("LOAD_ALL_COMICS"),r=c("FILTER_COMICS"),o="SELECT_COMIC"},11:function(e,t,a){"use strict";var n=a(3),c=a(20),i=a.n(c),r=a(30),o=a(10),s=a(14),l=a(19),u=a(41),m=a.n(u),d=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"getComics",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({page:1,count:10,name:"",titleStartsWith:""},e),a=(new Date).getTime(),n=m.a.MD5(a+"c5ba2dfb45dfc5333a9aea2df50d38c24a6f60a4faf8af7e43d0c4c73a956d278bad1431").toString(),c=t.page-1,i="?apikey=".concat("faf8af7e43d0c4c73a956d278bad1431","&ts=").concat(a,"&hash=").concat(n,"&limit=").concat(t.count,"&offset=").concat(c);t.name&&(i=i.concat("&name=".concat(t.name))),t.titleStartsWith&&(i=i.concat("&titleStartsWith=".concat(t.titleStartsWith))),t.orderBy&&(i=i.concat("&orderBy=".concat(t.orderBy)));var r="".concat("https://gateway.marvel.com:443").concat("/v1/public/comics").concat(i);return fetch(r)}}]),e}(),f=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"comicAdapter",value:function(e){return{id:e.id,title:e.title,description:e.description,pages:e.pageCount,thumbnail:"".concat(e.thumbnail.path.replace("http","https"),"/portrait_uncanny.").concat(e.thumbnail.extension),thumbnail_small:"".concat(e.thumbnail.path.replace("http","https"),"/portrait_medium.").concat(e.thumbnail.extension),price:e.prices.filter(function(e){return"printPrice"===e.type})[0].price||"??",dates:e.dates.filter(function(e){return"onsaleDate"===e.type})[0],creators:e.creators.items.map(function(e){return{name:e.name,role:e.role}})}}}]),e}();a.d(t,"b",function(){return h}),a.d(t,"a",function(){return b}),a.d(t,"c",function(){return p});var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var a=Object(r.a)(i.a.mark(function a(n,c){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:g({page:e,orderBy:t},o.b)(n,c).then(function(e){return n(e)});case 1:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},b=function(e,t){return function(){var a=Object(r.a)(i.a.mark(function a(c,r){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:g({page:e,titleStartsWith:t},o.a)(c,r).then(function(e){c(Object(n.a)({},e,{payload:t}))});case 1:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},p=function(e){return{type:o.c,payload:e}},g=function(e,t){return function(){var a=Object(r.a)(i.a.mark(function a(n,c){var r,o,s,l,u,m;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:t.REQUEST,payload:e.titleStartsWith}),a.next=3,d.getComics(e).then(function(e){return e.json()}).catch(function(e){n({type:t.FAILURE,message:e.message})});case 3:return r=a.sent,o=r.data,s=o.results,l=o.total,u=o.offset,m=o.count,a.abrupt("return",Promise.resolve({type:t.SUCCESS,comics:s.map(function(e){return f.comicAdapter(e)}),total:l,page:u+1,orderBy:e.orderBy||"",hasMore:Boolean(l>m&&u<l)}));case 6:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()}},43:function(e,t,a){e.exports=a.p+"static/media/logo.ee0b56fe.png"},48:function(e,t,a){e.exports=a(95)},53:function(e,t,a){},78:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(27),r=a.n(i),o=(a(53),a(8)),s=a(11),l=(a(78),a(6)),u=(a(83),a(43)),m=a.n(u);function d(e){var t=e.className,a=e.iconLeft,n=e.IconRight,i=e.onClickLeftIcon,r=e.onClickRightIcon;return c.a.createElement("div",{className:"Header ".concat(t)},c.a.createElement("div",{className:"col col__left"},c.a.createElement("i",{className:a,onClick:i})),c.a.createElement("div",{className:"col col__center"},c.a.createElement("img",{src:m.a,alt:"Logo"})),c.a.createElement("div",{className:"col col__right"},c.a.createElement("i",{className:n,onClick:r})))}d.defaultProps={className:"",iconLeft:"",IconRight:"",onClickLeftIcon:function(){},onClickRightIcon:function(){}};var f=d;a(84);var h={loadAllComics:s.b},b=Object(l.c)(function(e){return{comics:e.catalog.comics,status:e.catalog.status}},h)(function(e){e.comics;var t=e.status,a=Object(l.d)(),i=Object(n.useState)({name:"",type:""}),r=Object(o.a)(i,2),u=r[0],m=r[1],d=[{name:"Titulo",value:"title"},{name:"Modificacion",value:"modified"},{name:"Numero Issue",value:"issueNumber"},{name:"Fecha de venta",value:"onsaleDate"}].map(function(e,t){var n="";return e.value===u.name&&(n="asc"===u.type?c.a.createElement("i",{className:"icon-cheveron-down"}):c.a.createElement("i",{className:"icon-cheveron-up"})),c.a.createElement("div",{className:"text-body",key:t,onClick:function(){return function(e){var t={};t=u.name!==e?{name:e,type:"asc"}:u.name===e&&"asc"===u.type?{name:e,type:"desc"}:{name:"",type:""},m(t);var n="".concat("desc"===t.type?"-":"").concat(t.name);a(Object(s.b)(1,n))}(e.value)}},e.name,n)});return c.a.createElement("div",{className:"sidebar-content"},c.a.createElement("h2",null,"Order"),d,c.a.createElement("div",{className:"content-loading ".concat(t.isLoading?"show":"")},c.a.createElement("i",{className:"icon-loading"})))}),p=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return{isShowing:a,toggle:function(){c(!a)}}},g=a(44),v=a(16),E=function(e){return{type:"CHANGE_CURRENT_SLIDER",payload:e}},O=(a(86),a(87),a(45)),y=a.n(O);a(90),a(91);function j(e){var t=e.thumbnail,a=e.thumbnail_small,i=e.className,r=Object(n.useState)(!1),s=Object(o.a)(r,2),l=s[0],u=s[1],m=Object(n.useRef)();return Object(n.useEffect)(function(){var e=m.current;e&&e.complete&&u(!0)},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("figure",{className:i},c.a.createElement("div",{className:"blurred ".concat(l?"loaded":""," "),style:{backgroundImage:"url('".concat(a,"')")}}),c.a.createElement("img",{className:"".concat(l?"loaded":""),ref:m,onLoad:function(){return u(!0)},src:t,alt:"img-tag"})))}j.defaultProps={className:"",thumbnail:"",thumbnail_small:""};var w=j;function S(e){var t=e.comic,a=e.onClick,n=e.className;return c.a.createElement("div",{className:"ItemComic ".concat(n),onClick:function(){return a(t)}},c.a.createElement(w,{className:"ItemComic__image",thumbnail_small:t.thumbnail_small,thumbnail:t.thumbnail}),c.a.createElement("h1",{className:"white"},t.title),c.a.createElement("div",{className:"text-body white"},"$",t.price))}S.defaultProps={comic:{thumbnail:"",title:"",price:"??"},className:"",onClick:function(e){}};var N=S;a(92);function C(e){var t=e.items,a=e.history,i=e.currentSlide,r=Object(l.d)(),u=Object(n.useState)(),m=Object(o.a)(u,2),d=m[0],f=m[1],h=Object(n.useState)(""),b=Object(o.a)(h,2),p=b[0],g=b[1],v=t.items.map(function(e,t){return c.a.createElement("div",{className:"carousel-slide",key:t},c.a.createElement(N,{onClick:function(){return w(e,t)},comic:e}))});Object(n.useEffect)(function(){j()},[i]),Object(n.useEffect)(function(){d&&d.slideTo(0,0)},[t.orderBy]),Object(n.useEffect)(function(){d&&(g("animate"),d.on("slideChange",function(){var e=d.activeIndex;r(E(e))}))},[d]);var O=function(e){r(Object(s.c)(e)),a.push("/detail")},j=function(){i+4>=t.items.length&&!t.isLoading&&r(Object(s.b)(t.page+1,t.orderBy))},w=function(e,a){var n=d.activeIndex,c=t.items[n];e.id===c.id?O(e):(d.slideTo(a,600),setTimeout(function(){return O(e)},700)),r(E(a))},S={grabCursor:!1,slidesPerView:"auto",centeredSlides:!0,spaceBetween:50,initialSlide:i,shouldSwiperUpdate:!0};return c.a.createElement(y.a,Object.assign({containerClass:"swiper-container ".concat(p)},S,{getSwiper:f}),v)}C.defaultProps={items:[],currentSlide:1};var k={changeCurrentSlider:E},_=Object(l.c)(function(e){return{items:e.catalog.comics,currentSlide:e.carousel.currentSlide}},k)(C);a(93);var I=Object(l.c)(function(e){return{comic:e.catalog.comicDetail}})(function(e){var t=e.comic,a=e.history,i=Object(n.useState)(""),r=Object(o.a)(i,2),s=r[0],l=r[1];Object(n.useEffect)(function(){t.id&&-1!==t.id?(t.creators=t.creators||[],setTimeout(function(){return l("animate")},100)):a.push("/")},[]);var u=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"label white"},"Description"),c.a.createElement("div",{className:"text-body white"},t.description),c.a.createElement("div",{className:"content-creators"},t.creators.map(function(e,t){return c.a.createElement("div",{className:"creator",key:t},c.a.createElement("div",{className:"label white creator__title"},e.role),c.a.createElement("div",{className:"text-body white creator__name"},e.name))})));return t.id?c.a.createElement("div",{className:"Detail-page ".concat(s)},c.a.createElement("div",{className:"content-left"},c.a.createElement(N,{comic:t})),c.a.createElement("div",{className:"content-right"},c.a.createElement("h1",{className:"white"},t.title),c.a.createElement("div",{className:"label white"},"$ ",t.price," - ",t.pages," Pages"),c.a.createElement("div",{className:"content-body"},u)),c.a.createElement("div",{className:"content-body"},u)):""});var L=function(e){return function(t){return c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(e,t))}},R=c.a.createElement("div",null,c.a.createElement(v.d,null,c.a.createElement(v.b,{exact:!0,path:"/",component:L(_),key:"home"}),c.a.createElement(v.b,{path:"/detail",component:L(I),key:"detail"}),c.a.createElement(v.a,{to:"/"}))),D=a(24),F=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,101))});var T={loadAllComics:s.b,selectComic:s.c},U=Object(l.c)(function(e){return{comics:e.catalog.comics,status:e.catalog.status,pathname:e.router.location.pathname}},T)(function(e){var t=e.comics,a=e.status,i=e.history,r=(e.pathname,Object(l.d)()),u=Object(n.useState)(!1),m=Object(o.a)(u,2),d=m[0],h=m[1],v=p(),E=v.isShowing,O=v.toggle,y=0===t.items.length&&a.isLoading;return c.a.createElement(g.a,{sidebar:c.a.createElement(b,null),open:d,onSetOpen:h,sidebarClassName:"sidebar",overlayClassName:"overlay",styles:{sidebar:{background:"white"}}},c.a.createElement("div",{className:"page ".concat(a.isInDetail?"page__detail":"page__home")},c.a.createElement(f,{className:"Header ".concat(y?"Header--loading":"Header--mini"),iconLeft:"".concat(a.isInDetail?"icon-back":"icon-menu"),IconRight:"icon-search",onClickLeftIcon:function(){a.isInDetail?(i.goBack(),setTimeout(function(){r(Object(s.c)({creators:[]}))})):h(!0)},onClickRightIcon:function(){O()}}),c.a.createElement(n.Suspense,{fallback:c.a.createElement(c.a.Fragment,null,"Loading...")},c.a.createElement(D.a,{history:i},R),c.a.createElement(F,{onClickItem:function(e){O(),r(Object(s.c)(e)),i.push("/detail")},isShowing:E,hide:O})),c.a.createElement("div",{className:"text-body white copyright ".concat(a.isInDetail?"detail":"")},"Data provided by Marvel \xa9 ",(new Date).getFullYear())))}),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var x=a(17),M=a(13),W=a(40),P=a(47),H=a(3),Q=a(10),$={status:{isLoading:!1,isSearching:!1,isInDetail:!1,isNewSearch:!1},comicDetail:{id:-1,title:"",description:"",thumbnail:"",thumbnail_small:"",price:"",dates:{},creators:[]},comics:{hasMore:!0,page:1,orderBy:"",items:[],original:[],count:12,total:0},comicsFilter:{hasMore:!0,items:[],original:[],count:12,total:0,filter:""}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.b.REQUEST:return Object(H.a)({},e,{status:Object(H.a)({},e.status,{isLoading:!0}),comics:Object(H.a)({},e.comics)});case Q.b.SUCCESS:return Object(H.a)({},e,{status:Object(H.a)({},e.status,{isLoading:!1}),comics:Object(H.a)({},e.comics,{total:t.total,hasMore:t.hasMore,page:t.page,orderBy:t.orderBy,items:t.orderBy!==e.comics.orderBy?t.comics:e.comics.items.concat(t.comics),original:e.comics.items})});case Q.b.FAILURE:return Object(H.a)({},e,{status:Object(H.a)({},e.status,{isLoading:!1}),comics:Object(H.a)({},e.comics,{items:t.comics})});case Q.a.REQUEST:return Object(H.a)({},e,{status:Object(H.a)({},e.status,{isLoading:!1,isSearching:!0,isNewSearch:e.comicsFilter.filter!==t.payload}),comicsFilter:Object(H.a)({},e.comicsFilter,{filter:t.payload})});case Q.a.SUCCESS:return Object(H.a)({},e,{status:Object(H.a)({},e.status,{isSearching:!1}),comicsFilter:Object(H.a)({},e.comicsFilter,{total:t.total,items:e.status.isNewSearch?t.comics:e.comicsFilter.items.concat(t.comics),hasMore:t.hasMore,filter:t.payload,original:e.comicsFilter.items})});case Q.a.FAILURE:return Object(H.a)({},e,{status:Object(H.a)({},e.status,{isSearching:!1}),comicsFilter:Object(H.a)({},e.comicsFilter,{filter:"",items:e.comicsFilter.original})});case Q.c:return Object(H.a)({},e,{comicDetail:t.payload,status:Object(H.a)({},e.status,{isInDetail:t.payload.id})});default:return e}},J={currentSlide:1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CURRENT_SLIDER":return Object(H.a)({},e,{currentSlide:t.payload});default:return e}},X=function(e){return Object(x.c)({catalog:G,carousel:V,router:Object(D.b)(e)})},z=Object(M.a)();var Y=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d;return Object(x.e)(X(z),e,t(Object(x.a)(Object(W.a)(z),P.a)))}();window.store=Y,r.a.render(c.a.createElement(l.a,{store:Y},c.a.createElement(v.c,{history:z},c.a.createElement(U,{history:z}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/sw.js");A?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):B(t,e)})}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.30ce47ff.chunk.js.map