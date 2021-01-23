(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),s=n(16),a=n.n(s),i=n(4),l=n(12),u=n(10),d=n(14),h=n.n(d),j=n(18),b=n(19),p=n.n(b),f=Object(l.b)("photos/fetchPhotos",function(){var e=Object(j.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/photos",{params:{page:t}});case 2:return n=e.sent,r=n.data.map((function(e){return{alt:e.alt_description,photoId:e.id,thumbUrl:e.urls.thumb}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(l.c)({name:"photolist",initialState:{photolist:[],page:1,status:"idle",error:null},reducers:{},extraReducers:function(e){e.addCase(f.pending,(function(e,t){e.status="loading",e.error=null})).addCase(f.fulfilled,(function(e,t){console.log("fulfilled action: ",t.payload),Array.isArray(t.payload)?(e.status="succeeded",e.page=e.page+1,e.photolist=e.photolist.concat(t.payload)):(e.status="failed",e.error="Could not load photos.")})).addCase(f.rejected,(function(e,t){console.log("failed action: ",t),e.status="failed",e.error="Could not load photos."}))}}).reducer,m=Object(l.b)("photo/fetchPhoto",function(){var e=Object(j.a)(h.a.mark((function e(t){var n,r,o,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/photos/".concat(t));case 2:return n=e.sent,r=n.data,o=new Date(r.created_at),c=o.toLocaleString("en-BG"),s={alt:r.alt_description,createdAt:c,fullUrl:r.urls.full,photoId:r.id,regularUrl:r.urls.regular,thumbUrl:r.urls.thumb,userId:r.user.id,userImgUrl:r.user.profile_image.small,userRealName:r.user.name,username:r.user.username},e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(l.c)({name:"photo",initialState:{photoId:"",photo:{},status:"idle",error:null},reducers:{},extraReducers:function(e){e.addCase(m.pending,(function(e,t){e.status="loading",e.error=null})).addCase(m.fulfilled,(function(e,t){console.log("fulfilled action: ",t),e.status="succeeded",e.photoId=t.payload.photoId,e.photo=t.payload})).addCase(m.rejected,(function(e,t){console.log("failed action: ",t),e.status="failed",e.error="Could not load photo."}))}}).reducer,g=Object(u.c)({photolist:O,photo:x}),v=Object(l.a)({reducer:g}),N=(n(67),n(11)),w=(n(68),n(3)),y=n(82),I=(n(69),function(){var e=Object(w.g)(),t="/"===e.pathname;return Object(r.jsxs)("nav",{children:[Object(r.jsx)(N.b,{to:"/",className:"home",children:"Photoinsp"}),t&&Object(r.jsx)(N.b,{to:{pathname:"/info",state:{background:e}},className:"info",children:Object(r.jsx)(y.a,{})})]})}),k=(n(71),function(e){e.photoId;var t=e.thumbUrl,n=e.alt;return Object(r.jsx)("img",{src:t,alt:n,className:"thumbnail"})}),U=(n(72),function(e){var t=e.handleShowMore;return Object(r.jsx)("div",{className:"show-more",children:Object(r.jsx)("button",{onClick:function(){return t()},className:"show-more-button",children:"Show more"})})}),C=n(83),E=(n(73),1),S=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.photolist.photolist})),n=Object(i.c)((function(e){return e.photolist.status})),c=Object(i.c)((function(e){return e.photolist.page})),s=Object(i.c)((function(e){return e.photolist.error}));Object(o.useEffect)((function(){"idle"===n&&e(f(c))}),[n,c,e]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"flex-container",children:t.map((function(e){return Object(r.jsx)(N.b,{to:{pathname:"/photos/".concat(e.photoId)},className:"flex-item",children:Object(r.jsx)(k,{photoId:e.photoId,thumbUrl:e.thumbUrl,alt:e.alt})},E+=1)}))}),"loading"===n&&Object(r.jsx)(C.a,{className:"loading"}),"succeeded"===n&&Object(r.jsx)(U,{handleShowMore:function(){e(f(c))}}),"failed"===n&&Object(r.jsx)("div",{className:"error",children:s})]})},_=(n(74),function(e){var t=e.children,n=Object(w.f)(),c=Object(o.useRef)(null),s=function(){n.replace({pathname:"/"})},a=function(e){null===c.current||c.current.contains(e.target)||s()};return Object(o.useEffect)((function(){return document.addEventListener("mousedown",a),function(){return document.removeEventListener("mousedown",a)}})),Object(o.useEffect)((function(){function e(e){27===e.keyCode&&s()}return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}})),Object(r.jsx)("div",{className:"modal-bg",role:"dialog","aria-modal":"true",children:Object(r.jsxs)("div",{ref:c,className:"modal-wrapper",children:[Object(r.jsx)("button",{onClick:function(){return s()},className:"close",children:"X"}),t]})})}),A=(n(75),function(){return Object(r.jsxs)("div",{className:"info-content",children:[Object(r.jsx)("h3",{children:"What is this?"}),Object(r.jsx)("p",{children:"This app is created for you to enjoy beautiful photographs shared by people from all around the world."}),Object(r.jsx)("p",{children:"Here you can calm down and focus on the essential - the photographs. There are no notifications or anything else that could distract you."}),Object(r.jsx)("h3",{children:"Whose photos are these?"}),Object(r.jsxs)("p",{children:["This app fetches data from"," ",Object(r.jsx)("a",{href:"https://unsplash.com/developers",target:"_blank",rel:"noreferrer",children:"Unsplash API"}),". Every photo view has a link to the original full-sized photo."]}),Object(r.jsx)("h3",{children:"Who made this?"}),Object(r.jsxs)("p",{children:["The app is created by a hobbyist web developer"," ",Object(r.jsx)("a",{href:"https://github.com/nellileinonen",target:"_blank",rel:"noreferrer",children:"Nelli Leinonen"}),"."," ","Source code on"," ",Object(r.jsx)("a",{href:"https://github.com/nellileinonen/photoinsp",target:"_blank",rel:"noreferrer",children:"GitHub"}),"."]})]})}),L=(n(76),function(){var e=Object(i.c)((function(e){return e.photo.photo.createdAt})),t=Object(i.c)((function(e){return e.photo.photo.fullUrl}));return Object(r.jsxs)("div",{className:"photo-meta",children:[e,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:"Full-sized"})]})}),P=(n(77),function(){var e=Object(i.c)((function(e){return e.photo.photo.userImgUrl})),t=Object(i.c)((function(e){return e.photo.photo.userRealName})),n=Object(i.c)((function(e){return e.photo.photo.username}));return Object(r.jsxs)("div",{className:"user-intro",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:e,alt:"",className:"user-img"})}),Object(r.jsx)("div",{className:"user-name",children:Object(r.jsxs)("p",{children:[t,Object(r.jsx)("br",{}),"Username: ",n]})})]})}),R=(n(78),function(e){var t=e.photoId,n=Object(i.b)(),c=Object(i.c)((function(e){return e.photo.photo})),s=Object(i.c)((function(e){return e.photo.status})),a=Object(i.c)((function(e){return e.photo.error}));return Object(o.useEffect)((function(){n(m(t))}),[n,t]),Object(r.jsxs)("div",{className:"photo-view",children:["loading"===s&&Object(r.jsx)(C.a,{className:"loading"}),"succeeded"===s&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{src:c.regularUrl,alt:c.alt,className:"regular-photo"}),Object(r.jsx)(L,{}),Object(r.jsx)(P,{})]}),"failed"===s&&Object(r.jsx)("div",{className:"error",children:a})]})}),T=(n(79),function(){return Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:"Photoinsp"}),Object(r.jsx)("h2",{children:"Browse photos, relax and get inspired"}),Object(r.jsx)("div",{className:"divider",children:Object(r.jsx)("span",{className:"line"})})]})}),B=function(){var e=Object(w.g)(),t=e.state&&e.state.background,n="",o=e.pathname.split("/");return 3===o.length&&"photos"===o[1]&&(n=o.pop()),Object(r.jsxs)("div",{children:[Object(r.jsxs)(w.c,{location:t||e,children:[Object(r.jsxs)(w.a,{exact:!0,path:"/",children:[Object(r.jsx)(T,{}),Object(r.jsx)(S,{})]}),Object(r.jsx)(w.a,{path:"/info",children:Object(r.jsx)(_,{children:Object(r.jsx)(A,{})})}),Object(r.jsx)(w.a,{path:"/photos/:photoId",children:Object(r.jsx)(R,{photoId:n})})]}),t&&Object(r.jsx)(w.a,{path:"/info",children:Object(r.jsx)(_,{children:Object(r.jsx)(A,{})})})]})},M=function(){return Object(r.jsx)(N.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(I,{}),Object(r.jsx)(B,{})]})})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i.a,{store:v,children:Object(r.jsx)(M,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.26c21db5.chunk.js.map