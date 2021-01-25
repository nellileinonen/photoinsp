(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){},80:function(e,t,r){},81:function(e,t,r){},82:function(e,t,r){},83:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),c=r.n(o),a=r(18),s=r.n(a),i=r(2),l=r(6),u=r(13),h=r(11),d=r.n(h),j=r(14),p=r(15),b=r.n(p),f=Object(l.b)("photolist/fetchPhotos",function(){var e=Object(j.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/photolist",{params:{page:t}});case 2:return r=e.sent,n=r.data.map((function(e){return{alt:e.alt_description,photoId:e.id,thumbUrl:e.urls.thumb}})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(l.c)({name:"photolist",initialState:{photolist:[],status:"idle",page:1,error:null},reducers:{},extraReducers:function(e){e.addCase(f.pending,(function(e,t){e.status="loading",e.error=null})).addCase(f.fulfilled,(function(e,t){if(Array.isArray(t.payload)){var r=t.payload.filter((function(t){return r=t,"undefined"===typeof e.photolist.find((function(e){return e.photoId===r.photoId}));var r}));r.length>0?(e.status="succeeded",e.page=e.page+1,e.photolist=e.photolist.concat(r)):(e.status="failed",e.error="Could not load photos. Please, refresh the page to get the newest content!")}else e.status="failed",e.error="Could not load photos."})).addCase(f.rejected,(function(e,t){e.status="failed",e.error="Could not load photos."}))}}).reducer,m=Object(l.b)("photo/fetchPhoto",function(){var e=Object(j.a)(d.a.mark((function e(t){var r,n,o,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/photolist/".concat(t));case 2:return r=e.sent,n=r.data,o=new Date(n.created_at),c=o.toLocaleString("en-BG"),a={alt:n.alt_description,createdAt:c,fullUrl:n.urls.full,photoId:n.id,regularUrl:n.urls.regular,thumbUrl:n.urls.thumb,userId:n.user.id,userImgUrl:n.user.profile_image.small,userRealName:n.user.name,username:n.user.username},e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(l.c)({name:"photo",initialState:{photoId:"",photo:{},status:"idle",error:null},reducers:{},extraReducers:function(e){e.addCase(m.pending,(function(e,t){e.status="loading",e.error=null})).addCase(m.fulfilled,(function(e,t){e.status="succeeded",e.photoId=t.payload.photoId,e.photo=t.payload})).addCase(m.rejected,(function(e,t){e.status="failed",e.error="Could not load photo."}))}}).reducer,g=Object(l.b)("photographer/fetchPhotographer",function(){var e=Object(j.a)(d.a.mark((function e(t){var r,n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/photographer/".concat(t));case 2:return r=e.sent,n=r.data,o={photographerId:n.id,username:t,firstName:n.first_name,lastName:n.last_name,bio:n.bio,totalPhotos:n.total_photos,totalCollections:n.total_collections,profileImg:n.profile_image.large,photographerPhotosUrl:n.links.photos},e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(l.c)({name:"photographer",initialState:{photographer:{},status:"idle",error:null},reducers:{},extraReducers:function(e){e.addCase(g.pending,(function(e,t){e.status="loading",e.error=null})).addCase(g.fulfilled,(function(e,t){e.status="succeeded",e.photographer=t.payload})).addCase(g.rejected,(function(e,t){e.status="failed",e.error="Could not load photographer info."}))}}).reducer,N=Object(l.b)("photographer/fetchPhotographerPhotolist",function(){var e=Object(j.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/photographer/".concat(t,"/photos"));case 2:return r=e.sent,n=r.data.map((function(e){return{alt:e.alt_description,photoId:e.id,thumbUrl:e.urls.thumb}})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(l.c)({name:"photographerPhotolist",initialState:{photolist:[],username:"",status:"idle",page:1,error:null},reducers:{},extraReducers:function(e){e.addCase(N.pending,(function(e,t){e.status="loading",e.error=null})).addCase(N.fulfilled,(function(e,t){e.status="succeeded",e.photolist=t.payload})).addCase(N.rejected,(function(e,t){e.status="failed",e.error="Could not load photographer's photos."}))}}).reducer,y=Object(u.c)({photolist:O,photo:x,photographer:v,photographerPhotolist:w}),C=Object(l.a)({reducer:y}),I=r(8),k=r(4),P=r(85),U=(r(67),function(){var e=Object(k.h)(),t="/"===e.pathname;return Object(n.jsxs)("nav",{children:[Object(n.jsx)(I.b,{to:"/",className:"home",children:"Photoinsp"}),t&&Object(n.jsx)(I.b,{to:{pathname:"/info",state:{background:e}},className:"info",children:Object(n.jsx)(P.a,{})})]})}),_=(r(69),function(e){var t=e.thumbUrl,r=e.alt;return Object(n.jsx)("img",{src:t,alt:r,className:"thumbnail"})}),E=(r(70),function(e){var t=e.thumbnails;return Object(n.jsx)("div",{className:"flex-container",children:t.map((function(e){return Object(n.jsx)(I.b,{to:{pathname:"/photos/".concat(e.photoId)},className:"flex-item",children:Object(n.jsx)(_,{thumbUrl:e.thumbUrl,alt:e.alt})},e.photoId)}))})}),S=(r(71),function(e){var t=e.handleShowMore;return Object(n.jsx)("div",{className:"show-more",children:Object(n.jsx)("button",{onClick:function(){return t()},className:"show-more-button",children:"Show more"})})}),M=r(86),R=(r(72),function(){return Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)(M.a,{})})}),A=(r(73),function(e){var t=e.errorMsg;return Object(n.jsx)("div",{className:"error",children:null!==t?Object(n.jsx)("p",{children:t}):Object(n.jsx)("p",{children:"Could not load content."})})}),L=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.photolist.photolist})),r=Object(i.c)((function(e){return e.photolist.status})),c=Object(i.c)((function(e){return e.photolist.page})),a=Object(i.c)((function(e){return e.photolist.error}));Object(o.useEffect)((function(){"idle"===r&&e(f(c))}),[r,c,e]);return Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{thumbnails:t}),"loading"===r&&Object(n.jsx)(R,{}),"succeeded"===r&&Object(n.jsx)(S,{handleShowMore:function(){e(f(c))}}),"failed"===r&&Object(n.jsx)(A,{errorMsg:a})]})},T=(r(74),function(e){var t=e.children,r=Object(k.g)(),c=Object(o.useRef)(null),a=function(){r.replace({pathname:"/"})},s=function(e){null===c.current||c.current.contains(e.target)||a()};return Object(o.useEffect)((function(){return document.addEventListener("mousedown",s),function(){return document.removeEventListener("mousedown",s)}})),Object(o.useEffect)((function(){function e(e){"Escape"===e.key&&a()}return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}})),Object(n.jsx)("div",{className:"modal-bg",role:"dialog","aria-modal":"true",children:Object(n.jsxs)("div",{ref:c,className:"modal-wrapper",children:[Object(n.jsx)("button",{onClick:function(){return a()},className:"close",children:"X"}),t]})})}),B=(r(75),function(){return Object(n.jsxs)("div",{className:"info-content",children:[Object(n.jsx)("h3",{children:"What is this?"}),Object(n.jsx)("p",{children:"This app is created for you to enjoy beautiful photographs shared by people from all around the world."}),Object(n.jsx)("p",{children:"Here you can calm down and focus on the essential - the photographs. There are no notifications or anything else that could distract you."}),Object(n.jsx)("h3",{children:"Whose photos are these?"}),Object(n.jsxs)("p",{children:["This app fetches data from"," ",Object(n.jsx)("a",{href:"https://unsplash.com/developers",target:"_blank",rel:"noreferrer",children:"Unsplash API"}),". Every photo view has a link to the original full-sized photo."]}),Object(n.jsx)("h3",{children:"Who made this?"}),Object(n.jsxs)("p",{children:["The app is created by a hobbyist web developer"," ",Object(n.jsx)("a",{href:"https://github.com/nellileinonen",target:"_blank",rel:"noreferrer",children:"Nelli Leinonen"}),"."," ","Source code on"," ",Object(n.jsx)("a",{href:"https://github.com/nellileinonen/photoinsp",target:"_blank",rel:"noreferrer",children:"GitHub"}),"."]})]})}),F=(r(76),function(){var e=Object(i.c)((function(e){return e.photo.photo.createdAt})),t=Object(i.c)((function(e){return e.photo.photo.fullUrl}));return Object(n.jsxs)("div",{className:"photo-meta",children:[e,Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:"Full-sized"})]})}),W=(r(77),function(){var e=Object(i.c)((function(e){return e.photo.photo.userImgUrl})),t=Object(i.c)((function(e){return e.photo.photo.userRealName})),r=Object(i.c)((function(e){return e.photo.photo.username}));return Object(n.jsxs)("div",{className:"photographer-intro",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:e,alt:"",className:"photographer-img"})}),Object(n.jsx)("div",{className:"photographer-name",children:Object(n.jsxs)("p",{children:[Object(n.jsx)(I.b,{to:{pathname:"/photographer/".concat(r)},children:t}),Object(n.jsx)("br",{}),"Username: ",r]})})]})}),z=(r(78),function(e){var t=e.photoId,r=Object(i.b)(),c=Object(i.c)((function(e){return e.photo.photo})),a=Object(i.c)((function(e){return e.photo.status})),s=Object(i.c)((function(e){return e.photo.error}));return Object(o.useEffect)((function(){r(m(t))}),[r,t]),Object(n.jsxs)("div",{className:"photo-view",children:["loading"===a&&Object(n.jsx)(M.a,{className:"loading"}),"succeeded"===a&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:c.regularUrl,alt:c.alt,className:"regular-photo"}),Object(n.jsx)(F,{}),Object(n.jsx)(W,{})]}),"failed"===a&&Object(n.jsx)("div",{className:"error",children:s})]})}),G=(r(79),function(){return Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"Photoinsp"}),Object(n.jsx)("h2",{children:"Browse photos, relax and get inspired"}),Object(n.jsx)("div",{className:"divider",children:Object(n.jsx)("span",{className:"line"})})]})}),H=(r(80),function(){return Object(n.jsx)("div",{className:"no-match",children:Object(n.jsxs)("p",{children:["The page you requested could not be found.",Object(n.jsx)("br",{}),"Please, continue browsing to the"," ",Object(n.jsx)(I.b,{to:"/",children:"front page"}),"."]})})}),J=function(e){var t=e.username,r=Object(i.b)(),c=Object(i.c)((function(e){return e.photographerPhotolist.photolist})),a=Object(i.c)((function(e){return e.photographerPhotolist.status})),s=Object(i.c)((function(e){return e.photographerPhotolist.error}));return Object(o.useEffect)((function(){r(N(t))}),[r,t]),Object(n.jsxs)("div",{className:"photographer-photolist",children:[Object(n.jsx)(E,{thumbnails:c}),"loading"===a&&Object(n.jsx)(R,{}),"failed"===a&&Object(n.jsx)(A,{errorMsg:s})]})},q=(r(81),function(e){var t=e.username,r=Object(i.b)(),c=Object(i.c)((function(e){return e.photographer.photographer})),a=Object(i.c)((function(e){return e.photographer.status})),s=Object(i.c)((function(e){return e.photographer.error})),l=c.firstName,u=c.lastName,h="".concat(l," ").concat(u),d=c.bio,j=c.totalPhotos,p=c.totalCollections;return Object(o.useEffect)((function(){r(g(t))}),[r,t]),Object(n.jsxs)("div",{className:"photographer-view",children:["loading"===a&&Object(n.jsx)(R,{}),"succeeded"===a&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"flex-container photographer-container",children:[Object(n.jsxs)("div",{className:"flex-item",children:[Object(n.jsx)("img",{src:c.profileImg,alt:h,className:"profile-img"}),Object(n.jsxs)("h2",{children:[l,Object(n.jsx)("br",{}),u]})]}),Object(n.jsxs)("div",{className:"flex-item",children:[Object(n.jsx)("p",{children:d}),Object(n.jsxs)("p",{children:["Username: ",t,Object(n.jsx)("br",{}),"Photos: ",j,Object(n.jsx)("br",{}),"Collections: ",p]})]})]}),Object(n.jsx)(J,{username:t})]}),"failed"===a&&Object(n.jsx)(A,{errorMsg:s})]})}),D=function(){var e=Object(k.h)(),t=e.state&&e.state.background,r="";if(void 0!==typeof e.pathname){var o=e.pathname.split("/");3!==o.length||"photos"!==o[1]&&"photographer"!==o[1]||(r=o.pop())}return Object(n.jsxs)("div",{children:[Object(n.jsxs)(k.d,{location:t||e,children:[Object(n.jsxs)(k.b,{exact:!0,path:"/",children:[Object(n.jsx)(G,{}),Object(n.jsx)(L,{})]}),Object(n.jsx)(k.b,{path:"/info",children:Object(n.jsx)(T,{children:Object(n.jsx)(B,{})})}),Object(n.jsx)(k.b,{exact:!0,path:"/photos",children:Object(n.jsx)(k.a,{to:"/"})}),Object(n.jsx)(k.b,{path:"/photos/:photoId",children:Object(n.jsx)(z,{photoId:r})}),Object(n.jsx)(k.b,{path:"/photographer/:username",children:Object(n.jsx)(q,{username:r})}),Object(n.jsx)(k.b,{path:"*",children:Object(n.jsx)(H,{})})]}),t&&Object(n.jsx)(k.b,{path:"/info",children:Object(n.jsx)(T,{children:Object(n.jsx)(B,{})})})]})},X=(r(82),function(){return Object(n.jsx)(I.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(U,{}),Object(n.jsx)(D,{})]})})});s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(i.a,{store:C,children:Object(n.jsx)(X,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.704e6c2f.chunk.js.map