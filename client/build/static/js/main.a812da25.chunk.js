(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(t,n,e){},21:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(1),i=e(2),o=e.n(i),s=e(12),r=e.n(s),a=(e(20),e(14)),u=(e(21),e(13)),l=e.n(u),b=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],o=n[1];return Object(i.useEffect)((function(){l.a.get("/photos").then((function(t){var n=t.data;console.log(n);var e=n.map((function(t){return{id:t.id,thumb:t.urls.thumb,alt:t.alt_description}}));console.log(e),o(e)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Photoinsp"}),e.map((function(t){return Object(c.jsx)("img",{src:t.thumb,alt:t.alt},t.id)}))]})};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a812da25.chunk.js.map