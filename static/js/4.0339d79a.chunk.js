(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var c=a(10),n=a(0),l=a.n(n),r=a(17),i=a.n(r);a(78);var o=function(e){var t=e.value,a=e.placeholder,r=e.className,i=e.onClickSearch,o=e.onChangeInput,s=Object(n.useState)(t),m=Object(c.a)(s,2),u=m[0],d=m[1];return l.a.createElement("div",{className:"SearchBar ".concat(r)},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i&&i(u)}},l.a.createElement("label",null,l.a.createElement("input",{autoFocus:!0,type:"text",value:u,onChange:function(e){d(e.target.value),o&&o(e.target.value),e.preventDefault()},placeholder:a}))))},s=(a(79),a(8)),m=a(6);a(80);function u(e){var t=e.comic,a=e.onClick;return l.a.createElement("div",{className:"ItemSearchComic",onClick:function(){return a?a(t):null}},l.a.createElement("img",{className:"ItemSearchComic__image",src:t.image,alt:"ItemComic"}),l.a.createElement("div",{className:"ItemSearchComic__description"},l.a.createElement("h1",{className:"white"},t.title),l.a.createElement("div",{className:"body white"})))}u.defaultProps={comic:{title:"",image:"",id:-1}};var d=u,f=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(c.a)(i,2),s=o[0],m=o[1];function u(){s.current.offsetHeight+s.current.scrollTop<=s.current.scrollHeight-30||l||r(!0)}return Object(n.useEffect)(function(){if(s){var e=s.current;return e.addEventListener("scroll",u),function(){return e.removeEventListener("scroll",u)}}},[s]),Object(n.useEffect)(function(){l&&e()},[l]),[l,r,m]},v={filterResults:m.a};t.default=Object(s.b)(function(e){return{comicsFilter:e.catalog.comicsFilter,status:e.catalog.status}},v)(function(e){var t=e.isShowing,a=e.hide,r=e.onClickItem,u=e.comicsFilter,v=e.status,b=Object(s.c)(),h=Object(n.useState)(1),E=Object(c.a)(h,2),g=E[0],p=E[1],N=Object(n.useState)(u.filter),j=Object(c.a)(N,2),O=j[0],S=j[1],C=Object(n.useRef)(null),w=f(function(){u.hasMore&&(p(g+1),b(Object(m.a)(g+1,O)))}),k=Object(c.a)(w,3),I=k[0],y=k[1],F=k[2],_=v.isSearching&&v.isNewSearch;Object(n.useEffect)(function(){C.current&&F(C)},[t]),Object(n.useEffect)(function(){y(!1)},[u.items]);var x=function(e){e.length>=3&&(p(1),S(e),b(Object(m.a)(g,e)))};return t?i.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-overlay"}),l.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:a},l.a.createElement("i",{"aria-hidden":"true",className:"icon-close"}))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(o,{placeholder:"Search... Starts with. ex: Spider",value:O,onChangeInput:x,onClickSearch:x}),l.a.createElement("div",{className:"container-search",ref:C},_?l.a.createElement("div",{className:"container-search content-loading"},l.a.createElement("i",{className:"icon-loading"})):u.items.length?u.items.map(function(e,t){var a={image:e.thumbnail_small,title:e.title,id:e.id};return l.a.createElement(d,{onClick:function(){return t=e,void(r&&r(t));var t},key:t,comic:a})}):l.a.createElement("div",{className:"no-content"},"No results"),I?l.a.createElement("div",{className:"content-loading content-loading--small"},l.a.createElement("i",{className:"icon-loading"})):""))))),document.body):null})}}]);
//# sourceMappingURL=4.0339d79a.chunk.js.map