(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var c=a(8),n=a(0),l=a.n(n),r=a(27),i=a.n(r);a(98);function o(e){var t=e.value,a=e.placeholder,r=e.className,i=e.onClickSearch,o=e.onChangeInput,s=Object(n.useState)(t),u=Object(c.a)(s,2),m=u[0],d=u[1];return l.a.createElement("div",{className:"SearchBar ".concat(r)},l.a.createElement("form",{onSubmit:function(e){i(m),e.preventDefault()}},l.a.createElement("label",null,l.a.createElement("input",{autoFocus:!0,type:"text",value:m,onChange:function(e){d(e.target.value),o(e.target.value),e.preventDefault()},placeholder:a}))))}o.defaultProps={value:"",placeholder:"",className:"",onClickSearch:function(e){},onChangeInput:function(e){}};var s=o,u=(a(99),a(6)),m=a(11);a(100);function d(e){var t=e.comic,a=e.onClick;return l.a.createElement("div",{className:"ItemSearchComic",onClick:function(){return a(t)}},l.a.createElement("img",{className:"ItemSearchComic__image",src:t.thumbnail,alt:"ItemComic"}),l.a.createElement("div",{className:"ItemSearchComic__description"},l.a.createElement("h1",{className:"white"},t.title),l.a.createElement("div",{className:"body white"})))}d.defaultProps={comic:{title:"",thumbnail:"",id:-1},onClick:function(e){}};var f=d,h=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(c.a)(i,2),s=o[0],u=o[1];function m(){s.current.offsetHeight+s.current.scrollTop<=s.current.scrollHeight-30||l||r(!0)}return Object(n.useEffect)(function(){if(s){var e=s.current;return e.addEventListener("scroll",m),function(){return e.removeEventListener("scroll",m)}}},[s]),Object(n.useEffect)(function(){l&&e()},[l]),[l,r,u]},v={filterResults:m.a};t.default=Object(u.c)(function(e){return{comicsFilter:e.catalog.comicsFilter,status:e.catalog.status}},v)(function(e){var t=e.isShowing,a=e.hide,r=e.onClickItem,o=e.comicsFilter,d=e.status,v=Object(u.d)(),b=Object(n.useState)(1),E=Object(c.a)(b,2),p=E[0],g=E[1],N=Object(n.useState)(o.filter),j=Object(c.a)(N,2),O=j[0],S=j[1],C=Object(n.useRef)(null),k=h(function(){o.hasMore&&(g(p+1),v(Object(m.a)(p+1,O)))}),w=Object(c.a)(k,3),I=w[0],y=w[1],F=w[2],_=d.isSearching&&d.isNewSearch;Object(n.useEffect)(function(){C.current&&F(C)},[t]),Object(n.useEffect)(function(){y(!1)},[o.items]);var x=function(e){e.length>=3&&(g(1),S(e),v(Object(m.a)(p,e)))};return t?i.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-overlay"}),l.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:a},l.a.createElement("i",{"aria-hidden":"true",className:"icon-close"}))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(s,{placeholder:"Search... Starts with. ex: Spider",value:O,onChangeInput:x,onClickSearch:x}),l.a.createElement("div",{className:"container-search",ref:C},_?l.a.createElement("div",{className:"container-search content-loading"},l.a.createElement("i",{className:"icon-loading"})):o.items.length?o.items.map(function(e,t){var a={thumbnail:e.thumbnail_small,title:e.title,id:e.id};return l.a.createElement(f,{onClick:function(){return t=e,void(r&&r(t));var t},key:t,comic:a})}):l.a.createElement("div",{className:"no-content"},"No results"),I?l.a.createElement("div",{className:"content-loading content-loading--small"},l.a.createElement("i",{className:"icon-loading"})):""))))),document.body):null})},98:function(e,t,a){},99:function(e,t,a){}}]);
//# sourceMappingURL=3.9aeb030f.chunk.js.map