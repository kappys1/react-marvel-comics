(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a(0),l=a.n(n),r=a(17),i=a.n(r);a(79);var o=function(e){var t=e.value,a=(e.className,e.onClickSearch),r=e.onChangeInput,i=Object(n.useState)(t),o=Object(c.a)(i,2),s=o[0],u=o[1];return l.a.createElement("div",{className:"SearchBar"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a&&a(s)}},l.a.createElement("label",null,l.a.createElement("input",{autoFocus:!0,type:"text",value:s,onChange:function(e){u(e.target.value),r&&r(e.target.value),e.preventDefault()},placeholder:"Search ..."}))))},s=(a(80),a(16)),u=a(10);a(81);function m(e){var t=e.comic,a=void 0===t?{}:t,c=e.onClick;return l.a.createElement("div",{className:"ItemSearchComic",onClick:function(){return c?c(a):null}},l.a.createElement("img",{className:"ItemSearchComic__image",src:a.thumbnail,alt:"ItemComic"}),l.a.createElement("div",{className:"ItemSearchComic__description"},l.a.createElement("h1",{className:"white"},a.title),l.a.createElement("div",{className:"body white"})))}m.defaultProps={comic:{}};var d=m,f=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(c.a)(i,2),s=o[0],u=o[1];function m(){s.current.offsetHeight+s.current.scrollTop!==s.current.scrollHeight||l||r(!0)}return Object(n.useEffect)(function(){if(s){var e=s.current;return e.addEventListener("scroll",m),function(){return e.removeEventListener("scroll",m)}}},[s]),Object(n.useEffect)(function(){l&&e()},[l]),[l,r,u]},v={filterResults:u.a};t.default=Object(s.b)(function(e){return{comicsFilter:e.catalog.comicsFilter,status:e.catalog.status}},v)(function(e){var t=e.isShowing,a=e.hide,r=e.onClickItem,m=e.comicsFilter,v=e.status,b=Object(s.c)(),h=Object(n.useState)(1),E=Object(c.a)(h,2),g=E[0],N=E[1],j=Object(n.useState)(m.filter),O=Object(c.a)(j,2),p=O[0],S=O[1],C=Object(n.useRef)(null),w=f(function(){m.hasMore&&(N(g+1),console.log(g),b(Object(u.a)(g+1,p)))}),k=Object(c.a)(w,3),I=k[0],y=k[1],F=k[2],_=v.isSearching&&v.isNewSearch;Object(n.useEffect)(function(){C.current&&F(C)},[t,F]),Object(n.useEffect)(function(){console.log("finish"),y(!1)},[m.items,y]);var x=function(e){e.length>=3&&(N(1),S(e),b(Object(u.a)(g,e)))};return t?i.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-overlay"}),l.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:a},l.a.createElement("i",{"aria-hidden":"true",className:"icon-close"}))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(o,{value:p,onChangeInput:x,onClickSearch:x}),l.a.createElement("div",{className:"container-search",ref:C},_?l.a.createElement("div",{className:"container-search content-loading"},l.a.createElement("i",{className:"icon-loading"})):m.items.length?m.items.map(function(e,t){return l.a.createElement(d,{onClick:function(){return t=e,void(r&&r(t));var t},key:t,comic:e})}):l.a.createElement("div",{className:"no-content"},"No results"),I?l.a.createElement("div",null,l.a.createElement("i",{className:"icon-loading"})):""))))),document.body):null})}}]);
//# sourceMappingURL=3.f5fd0c36.chunk.js.map