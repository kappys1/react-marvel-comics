(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/logo.ee0b56fe.png"},32:function(e,t,a){e.exports=a(78)},37:function(e,t,a){},62:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(14),r=a.n(i),o=(a(37),a(3)),s=a(2),l=a(10),u=a.n(l),m=a(17),d=["REQUEST","SUCCESS","FAILURE","CANCEL","RESET"],f=function(e){var t={};return d.forEach(function(a){t[a]="".concat(e,"_").concat(a)}),t},h=f("LOAD_ALL_COMICS"),b=f("FILTER_COMICS"),v=a(6),E=a(9),p=a(27),g=a.n(p),O=function(){function e(){Object(v.a)(this,e)}return Object(E.a)(e,null,[{key:"getComics",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({page:1,count:10,name:"",titleStartsWith:""},e),a=(new Date).getTime(),c=g.a.MD5(a+"c5ba2dfb45dfc5333a9aea2df50d38c24a6f60a4faf8af7e43d0c4c73a956d278bad1431").toString(),n=t.page-1,i="?apikey=".concat("faf8af7e43d0c4c73a956d278bad1431","&ts=").concat(a,"&hash=").concat(c,"&limit=").concat(t.count,"&offset=").concat(n);t.name&&(i=i.concat("&name=".concat(t.name))),t.titleStartsWith&&(i=i.concat("&titleStartsWith=".concat(t.titleStartsWith)));var r="".concat("https://gateway.marvel.com:443").concat("/v1/public/comics").concat(i);return fetch(r)}}]),e}(),j=function(){function e(){Object(v.a)(this,e)}return Object(E.a)(e,null,[{key:"comicAdapter",value:function(e){return{id:e.id,title:e.title,description:e.description,thumbnail:"".concat(e.thumbnail.path.replace("http","https"),"/portrait_uncanny.").concat(e.thumbnail.extension),price:e.prices.filter(function(e){return"printPrice"===e.type})[0].price||"??",dates:e.dates.filter(function(e){return"onsaleDate"===e.type})[0],creators:e.creators.items.map(function(e){return{name:e.name,role:e.role}})}}}]),e}(),S=function(e){return function(){var t=Object(m.a)(u.a.mark(function t(a,c){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:w({page:e},h)(a,c).then(function(e){return a(e)});case 1:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},C=function(e,t){return function(){var a=Object(m.a)(u.a.mark(function a(c,n){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:w({page:e,titleStartsWith:t},b)(c,n).then(function(e){c(Object(s.a)({},e,{payload:t}))});case 1:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},N=function(e){return{type:"SELECT_COMIC",payload:e}},w=function(e,t){return function(){var a=Object(m.a)(u.a.mark(function a(c,n){var i,r,o,s,l,m;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c({type:t.REQUEST,payload:e.titleStartsWith}),a.next=3,O.getComics(e).then(function(e){return e.json()}).catch(function(e){c({type:t.FAILURE,message:e.message})});case 3:return i=a.sent,r=i.data,o=r.results,s=r.total,l=r.offset,m=r.count,a.abrupt("return",Promise.resolve({type:t.SUCCESS,comics:o.map(function(e){return j.comicAdapter(e)}),total:s,hasMore:Boolean(s>m&&l<s)}));case 6:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},y=(a(62),a(5)),k=(a(67),a(29)),I=a.n(k);var _=function(e){var t=e.className,a=e.showBackButton,c=e.onClickSearch,i=e.onClickBack;return n.a.createElement("div",{className:"Header ".concat(t)},n.a.createElement("div",{className:"col col__left"},a?n.a.createElement("i",{className:"icon-back",onClick:i}):""),n.a.createElement("div",{className:"col col__center"},n.a.createElement("img",{src:I.a,alt:"Logo"})),n.a.createElement("div",{className:"col col__right"},n.a.createElement("i",{className:"icon-search",onClick:c})))},F=(a(68),a(69),a(30)),L=a.n(F);a(72);function D(e){var t=e.comic,a=e.onClick,c=e.className;return n.a.createElement("div",{className:"ItemComic ".concat(c),onClick:function(){return a?a(t):null}},n.a.createElement("img",{className:"ItemComic__image",src:t.thumbnail,alt:"ItemComic"}),n.a.createElement("h1",{className:"white"},t.title),n.a.createElement("div",{className:"text-body white"},"$",t.price))}D.defaultProps={comic:{},className:""};var x=D;a(73);function T(e){var t=e.items,a=e.initSlide,i=e.onSlideChange,r=e.onClickItemComic,s=Object(c.useState)(),l=Object(o.a)(s,2),u=l[0],m=l[1],d=Object(c.useState)(a),f=Object(o.a)(d,2),h=f[0],b=f[1],v=Object(c.useState)(""),E=Object(o.a)(v,2),p=E[0],g=E[1],O=t.items.map(function(e,t){return n.a.createElement("div",{className:"carousel-slide",key:t},n.a.createElement(x,{onClick:function(){return j(e,t)},comic:e}))});Object(c.useEffect)(function(){i&&i(h)},[h,i]),Object(c.useEffect)(function(){u&&(setTimeout(function(){return g("animate")},100),u.on("slideChange",function(){var e=u.activeIndex;b(e)}))},[u]);var j=function(e,a){var c=u.activeIndex,n=t.items[c];e.id===n.id?r&&r(e):(u.slideTo(a),setTimeout(function(){return r(e)},700)),b(a)},S={grabCursor:!1,slidesPerView:"auto",centeredSlides:!0,spaceBetween:50,initialSlide:h,shouldSwiperUpdate:!0};return n.a.createElement(L.a,Object.assign({containerClass:"swiper-container ".concat(p)},S,{getSwiper:m}),O)}T.defaultProps={items:{items:[]}};var M=T,U=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return{isShowing:a,toggle:function(){n(!a)}}};a(74);var B=function(e){var t=e.value,a=(e.className,e.onClickSearch),i=e.onChangeInput,r=Object(c.useState)(t),s=Object(o.a)(r,2),l=s[0],u=s[1];return n.a.createElement("div",{className:"SearchBar"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a&&a(l)}},n.a.createElement("label",null,n.a.createElement("input",{autoFocus:!0,type:"text",value:l,onChange:function(e){u(e.target.value),i&&i(e.target.value),e.preventDefault()},placeholder:"Search ..."}))))};a(75),a(76);function R(e){var t=e.comic,a=void 0===t?{}:t,c=e.onClick;return n.a.createElement("div",{className:"ItemSearchComic",onClick:function(){return c?c(a):null}},n.a.createElement("img",{className:"ItemSearchComic__image",src:a.thumbnail,alt:"ItemComic"}),n.a.createElement("div",{className:"ItemSearchComic__description"},n.a.createElement("h1",{className:"white"},a.title),n.a.createElement("div",{className:"body white"})))}R.defaultProps={comic:{}};var A=R,W=function(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),l=s[0],u=s[1];function m(){l.current.offsetHeight+l.current.scrollTop!==l.current.scrollHeight||n||i(!0)}return Object(c.useEffect)(function(){if(l){var e=l.current;return e.addEventListener("scroll",m),function(){return e.removeEventListener("scroll",m)}}},[l]),Object(c.useEffect)(function(){n&&e()},[n]),[n,i,u]},P={filterResults:C},H=Object(y.b)(function(e){return{comicsFilter:e.catalog.comicsFilter,status:e.catalog.status}},P)(function(e){var t=e.isShowing,a=e.hide,i=e.onClickItem,s=e.comicsFilter,l=e.status,u=Object(y.c)(),m=Object(c.useState)(1),d=Object(o.a)(m,2),f=d[0],h=d[1],b=Object(c.useState)(s.filter),v=Object(o.a)(b,2),E=v[0],p=v[1],g=Object(c.useRef)(null),O=W(function(){s.hasMore&&(h(f+1),console.log(f),u(C(f+1,E)))}),j=Object(o.a)(O,3),S=j[0],N=j[1],w=j[2],k=l.isSearching&&l.isNewSearch;Object(c.useEffect)(function(){g.current&&w(g)},[t,w]),Object(c.useEffect)(function(){console.log("finish"),N(!1)},[s.items,N]);var I=function(e){e.length>=3&&(h(1),p(e),u(C(f,e)))};return t?r.a.createPortal(n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"modal-overlay"}),n.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:a},n.a.createElement("i",{"aria-hidden":"true",className:"icon-close"}))),n.a.createElement("div",{className:"modal-body"},n.a.createElement(B,{value:E,onChangeInput:I,onClickSearch:I}),n.a.createElement("div",{className:"container-search",ref:g},k?n.a.createElement("div",{className:"container-search content-loading"},n.a.createElement("i",{className:"icon-loading"})):s.items.length?s.items.map(function(e,t){return n.a.createElement(A,{onClick:function(){return t=e,void(i&&i(t));var t},key:t,comic:e})}):n.a.createElement("div",{className:"no-content"},"No results"),S?n.a.createElement("div",null,n.a.createElement("i",{className:"icon-loading"})):""))))),document.body):null});a(77);var Q=Object(y.b)(function(e){return{comic:e.catalog.comicDetail}})(function(e){var t=e.comic,a=Object(c.useState)(""),i=Object(o.a)(a,2),r=i[0],s=i[1];Object(c.useEffect)(function(){setTimeout(function(){return s("animate")},100)},[]);var l=n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"label white"},"Description"),n.a.createElement("div",{className:"text-body white"},t.description),n.a.createElement("div",{className:"content-creators"},t.creators.map(function(e,t){return n.a.createElement("div",{className:"creator",key:t},n.a.createElement("div",{className:"label white creator__title"},e.role),n.a.createElement("div",{className:"text-body white creator__name"},e.name))})));return t?n.a.createElement("div",{className:"Detail-page ".concat(r)},n.a.createElement("div",{className:"content-left"},n.a.createElement(x,{comic:t})),n.a.createElement("div",{className:"content-right"},n.a.createElement("h1",{className:"white"},t.title),n.a.createElement("div",{className:"label white"},"$ ",t.price),n.a.createElement("div",{className:"content-body"},l)),n.a.createElement("div",{className:"content-body"},l)):""});var $={loadAllComics:S,selectComic:N},J=Object(y.b)(function(e){return{comics:e.catalog.comics,status:e.catalog.status}},$)(function(e){var t=e.comics,a=e.status,i=Object(y.c)(),r=Object(c.useState)(1),s=Object(o.a)(r,2),l=s[0],u=s[1],m=Object(c.useState)(0),d=Object(o.a)(m,2),f=d[0],h=d[1],b=U(),v=b.isShowing,E=b.toggle,p=function(e){e+2>=t.items.length&&!a.isLoading&&(u(l+1),i(S(l))),h(e)};return n.a.createElement("div",{className:"page ".concat(a.isInDetail?"page__detail":"page__home")},n.a.createElement(_,{className:"Header--mini",showBackButton:a.isInDetail,onClickBack:function(){i(N({}))},onClickSearch:function(){E()}}),a.isInDetail?n.a.createElement(Q,{items:t,onSlideChange:p}):n.a.createElement(M,{initSlide:f,items:t,onClickItemComic:function(e){i(N(e))},onSlideChange:p}),n.a.createElement(H,{onClickItem:function(e){E(),i(N(e))},isShowing:v,hide:E}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(15),q=a(31),z={status:{isLoading:!1,isSearching:!1,isInDetail:!1,isNewSearch:!1},comicDetail:{id:-1,title:"",description:"",thumbnail:"",price:"",dates:{},creators:[]},comics:{hasMore:!0,items:[],original:[],count:12,total:0},comicsFilter:{hasMore:!0,items:[],original:[],count:12,total:0,filter:""}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.REQUEST:return Object(s.a)({},e,{status:Object(s.a)({},e.status,{isLoading:!0}),comics:Object(s.a)({},e.comics)});case h.SUCCESS:return Object(s.a)({},e,{status:Object(s.a)({},e.status,{isLoading:!1}),comics:Object(s.a)({},e.comics,{total:t.total,hasMore:t.hasMore,items:e.comics.items.concat(t.comics),original:e.comics.items})});case h.FAILURE:return Object(s.a)({},e,{status:Object(s.a)({},e.status,{isLoading:!1}),comics:Object(s.a)({},e.comics,{items:t.comics})});case b.REQUEST:return Object(s.a)({},e,{status:Object(s.a)({},e.status,{isLoading:!1,isSearching:!0,isNewSearch:e.comicsFilter.filter!==t.payload}),comicsFilter:Object(s.a)({},e.comicsFilter,{filter:t.payload})});case b.SUCCESS:return Object(s.a)({},e,{status:Object(s.a)({},e.status,{isSearching:!1}),comicsFilter:Object(s.a)({},e.comicsFilter,{total:t.total,items:e.status.isNewSearch?t.comics:e.comicsFilter.items.concat(t.comics),hasMore:t.hasMore,filter:t.payload,original:e.comicsFilter.items})});case b.CANCEL:return Object(s.a)({},e,{status:Object(s.a)({},e.status,{isSearching:!1}),comicsFilter:Object(s.a)({},e.comicsFilter,{filter:"",items:e.comicsFilter.original})});case"SELECT_COMIC":return Object(s.a)({},e,{comicDetail:t.payload,status:Object(s.a)({},e.status,{isInDetail:t.payload.id})});default:return e}};var K=function(){var e=Object(V.c)({catalog:G});return Object(V.d)(e,Object(V.a)(q.a))}();window.store=K,r.a.render(n.a.createElement(y.a,{store:K},n.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.205f009d.chunk.js.map