(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){},80:function(e,t,r){},81:function(e,t,r){},82:function(e,t,r){},83:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),c=r.n(o),a=r(18),s=r.n(a),i=r(2),l=r(6),u=r(13),h=r(11),d=r.n(h),p=r(14),j=r(15),b=r.n(j),f=Object(l.b)("photolist/fetchPhotos",function(){var e=Object(p.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/photolist",{params:{page:t}});case 2:return r=e.sent,n=r.data.map((function(e){return{alt:e.alt_description,photoId:e.id,thumbUrl:e.urls.thumb,username:e.user.username}})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(l.c)({name:"photolist",initialState:{photolist:[],status:"idle",page:1,error:null},reducers:{},extraReducers:function(e){e.addCase(f.pending,(function(e,t){e.status="loading",e.error=null})).addCase(f.fulfilled,(function(e,t){if(Array.isArray(t.payload)){var r=t.payload.filter((function(t){return r=t,"undefined"===typeof e.photolist.find((function(e){return e.photoId===r.photoId}));var r}));r.length>0?(e.status="succeeded",e.page=e.page+1,e.photolist=e.photolist.concat(r)):(e.status="failed",e.error="Could not load photos. Please, refresh the page to get the newest content!")}else e.status="failed",e.error="Could not load photos."})).addCase(f.rejected,(function(e,t){e.status="failed",e.error="Could not load photos."}))}}).reducer,m=Object(l.b)("photo/fetchPhoto",function(){var e=Object(p.a)(d.a.mark((function e(t){var r,n,o,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/photolist/".concat(t));case 2:return r=e.sent,n=r.data,o=new Date(n.created_at),c=o.toLocaleString("en-BG"),a={alt:n.alt_description,createdAt:c,fullUrl:n.urls.full,photoId:n.id,regularUrl:n.urls.regular,thumbUrl:n.urls.thumb,userId:n.user.id,userImgUrl:n.user.profile_image.small,userRealName:n.user.name,username:n.user.username},e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(l.c)({name:"photo",initialState:{photoId:"",photo:{},status:"idle",error:null},reducers:{},extraReducers:function(e){e.addCase(m.pending,(function(e,t){e.status="loading",e.error=null})).addCase(m.fulfilled,(function(e,t){e.status="succeeded",e.photoId=t.payload.photoId,e.photo=t.payload})).addCase(m.rejected,(function(e,t){e.status="failed",e.error="Could not load photo."}))}}).reducer,g=Object(l.b)("photographer/fetchPhotographer",function(){var e=Object(p.a)(d.a.mark((function e(t){var r,n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/photographer/".concat(t));case 2:return r=e.sent,n=r.data,o={photographerId:n.id,username:t,firstName:n.first_name,lastName:n.last_name,bio:n.bio,totalPhotos:n.total_photos,totalCollections:n.total_collections,profileImg:n.profile_image.large,photographerPhotosUrl:n.links.photos},e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(l.c)({name:"photographer",initialState:{photographer:{},status:"idle",error:null},reducers:{},extraReducers:function(e){e.addCase(g.pending,(function(e,t){e.status="loading",e.error=null})).addCase(g.fulfilled,(function(e,t){e.status="succeeded",e.photographer=t.payload})).addCase(g.rejected,(function(e,t){e.status="failed",e.error="Could not load photographer info."}))}}).reducer,N=Object(l.b)("photographerPhotolist/fetchPhotographerPhotolist",function(){var e=Object(p.a)(d.a.mark((function e(t){var r,n,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,n=t.pageNumber,e.next=3,b.a.get("/photographer/".concat(r,"/photos"),{params:{page:n}});case 3:return o=e.sent,c=o.data.map((function(e){return{alt:e.alt_description,photoId:e.id,thumbUrl:e.urls.thumb,username:e.user.username}})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(l.c)({name:"photographerPhotolist",initialState:{photolist:[],username:"",status:"idle",page:1,error:null},reducers:{reset:function(e,t){e.photolist=[],e.username="",e.status="idle",e.page=1,e.error=null}},extraReducers:function(e){e.addCase(N.pending,(function(e,t){e.status="loading",e.error=null})).addCase(N.fulfilled,(function(e,t){if(Array.isArray(t.payload)){var r=t.payload.filter((function(t){return r=t,"undefined"===typeof e.photolist.find((function(e){return e.photoId===r.photoId}));var r}));if(r.length>0){e.status="succeeded",e.page=e.page+1,e.photolist=e.photolist.concat(r);var n=r[0].username;n!==e.username&&(e.username=n)}else e.status="failed",e.error="This was the end. You've seen all the photos!"}else e.status="failed",e.error="Could not load photos."})).addCase(N.rejected,(function(e,t){e.status="failed",e.error="Could not load photographer's photos."}))}}),w=(y.actions.reset,y.reducer),C=Object(u.c)({photolist:O,photo:x,photographer:v,photographerPhotolist:w}),I=Object(l.a)({reducer:C}),P=r(8),k=r(4),U=r(85),_=(r(67),function(){var e=Object(k.h)(),t="/"===e.pathname;return Object(n.jsxs)("nav",{children:[Object(n.jsx)(P.b,{to:"/",className:"home",children:"Photoinsp"}),t&&Object(n.jsx)(P.b,{to:{pathname:"/info",state:{background:e}},className:"info",children:Object(n.jsx)(U.a,{})})]})}),E=(r(69),function(e){var t=e.thumbUrl,r=e.alt;return Object(n.jsx)("img",{src:t,alt:r,className:"thumbnail"})}),S=(r(70),function(e){var t=e.thumbnails;return Object(n.jsx)("div",{className:"flex-container",children:t.map((function(e){return Object(n.jsx)(P.b,{to:{pathname:"/photos/".concat(e.photoId)},className:"flex-item",children:Object(n.jsx)(E,{thumbUrl:e.thumbUrl,alt:e.alt})},e.photoId)}))})}),A=(r(71),function(e){var t=e.handleShowMore;return Object(n.jsx)("div",{className:"show-more",children:Object(n.jsx)("button",{onClick:function(){return t()},className:"show-more-button",children:"Show more"})})}),M=r(86),R=(r(72),function(){return Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)(M.a,{})})}),L=(r(73),function(e){var t=e.errorMsg;return Object(n.jsx)("div",{className:"error",children:null!==t?Object(n.jsx)("p",{children:t}):Object(n.jsx)("p",{children:"Could not load content."})})}),T=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.photolist.photolist})),r=Object(i.c)((function(e){return e.photolist.status})),c=Object(i.c)((function(e){return e.photolist.page})),a=Object(i.c)((function(e){return e.photolist.error}));Object(o.useEffect)((function(){"idle"===r&&e(f(c))}),[r,c,e]);return Object(n.jsxs)("div",{children:[Object(n.jsx)(S,{thumbnails:t}),"loading"===r&&Object(n.jsx)(R,{}),"succeeded"===r&&Object(n.jsx)(A,{handleShowMore:function(){e(f(c))}}),"failed"===r&&Object(n.jsx)(L,{errorMsg:a})]})},B=(r(74),function(e){var t=e.children,r=Object(k.g)(),c=Object(o.useRef)(null),a=function(){r.replace({pathname:"/"})},s=function(e){null===c.current||c.current.contains(e.target)||a()};return Object(o.useEffect)((function(){return document.addEventListener("mousedown",s),function(){return document.removeEventListener("mousedown",s)}})),Object(o.useEffect)((function(){function e(e){"Escape"===e.key&&a()}return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}})),Object(n.jsx)("div",{className:"modal-bg",role:"dialog","aria-modal":"true",children:Object(n.jsxs)("div",{ref:c,className:"modal-wrapper",children:[Object(n.jsx)("button",{type:"button",onClick:function(){return a()},className:"close",children:"X"}),t]})})}),F=(r(75),function(){return Object(n.jsxs)("div",{className:"info-content",children:[Object(n.jsx)("h3",{children:"What is this?"}),Object(n.jsx)("p",{children:"This app is created for you to enjoy beautiful photographs shared by people from all around the world."}),Object(n.jsx)("p",{children:"Here you can calm down and focus on the essential - the photographs. There are no notifications or anything else that could distract you."}),Object(n.jsx)("h3",{children:"Whose photos are these?"}),Object(n.jsxs)("p",{children:["This app fetches data from"," ",Object(n.jsx)("a",{href:"https://unsplash.com/developers",target:"_blank",rel:"noreferrer",children:"Unsplash API"}),". Every photo view has a link to the original full-sized photo."]}),Object(n.jsx)("h3",{children:"Who made this?"}),Object(n.jsxs)("p",{children:["The app is created by a hobbyist web developer"," ",Object(n.jsx)("a",{href:"https://github.com/nellileinonen",target:"_blank",rel:"noreferrer",children:"Nelli Leinonen"}),"."," ","Source code on"," ",Object(n.jsx)("a",{href:"https://github.com/nellileinonen/photoinsp",target:"_blank",rel:"noreferrer",children:"GitHub"}),"."]})]})}),W=(r(76),function(){var e=Object(i.c)((function(e){return e.photo.photo.createdAt})),t=Object(i.c)((function(e){return e.photo.photo.fullUrl}));return Object(n.jsxs)("div",{className:"photo-meta",children:[e,Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:"Full-sized"})]})}),z=(r(77),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.photo.photo.userImgUrl})),r=Object(i.c)((function(e){return e.photo.photo.userRealName})),o=Object(i.c)((function(e){return e.photo.photo.username}));return Object(n.jsxs)("div",{className:"photographer-intro",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:t,alt:"",className:"photographer-img"})}),Object(n.jsx)("div",{className:"photographer-name",children:Object(n.jsxs)("p",{children:[Object(n.jsx)(P.b,{to:{pathname:"/photographer/".concat(o)},onClick:function(){e({type:"photographerPhotolist/reset"})},children:r}),Object(n.jsx)("br",{}),"Username:",o]})})]})}),G=(r(78),function(e){var t=e.photoId,r=Object(i.b)(),c=Object(i.c)((function(e){return e.photo.photo})),a=Object(i.c)((function(e){return e.photo.status})),s=Object(i.c)((function(e){return e.photo.error}));return Object(o.useEffect)((function(){r(m(t))}),[r,t]),Object(n.jsxs)("div",{className:"photo-view",children:["loading"===a&&Object(n.jsx)(M.a,{className:"loading"}),"succeeded"===a&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:c.regularUrl,alt:c.alt,className:"regular-photo"}),Object(n.jsx)(W,{}),Object(n.jsx)(z,{})]}),"failed"===a&&Object(n.jsx)("div",{className:"error",children:s})]})}),H=(r(79),function(){return Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"Photoinsp"}),Object(n.jsx)("h2",{children:"Browse photos, relax and get inspired"}),Object(n.jsx)("div",{className:"divider",children:Object(n.jsx)("span",{className:"line"})})]})}),J=(r(80),function(){return Object(n.jsx)("div",{className:"no-match",children:Object(n.jsxs)("p",{children:["The page you requested could not be found.",Object(n.jsx)("br",{}),"Please, continue browsing to the"," ",Object(n.jsx)(P.b,{to:"/",children:"front page"}),"."]})})}),q=function(e){var t=e.username,r=Object(i.b)(),c=Object(i.c)((function(e){return e.photographerPhotolist.photolist})),a=Object(i.c)((function(e){return e.photographerPhotolist.status})),s=Object(i.c)((function(e){return e.photographerPhotolist.page})),l=Object(i.c)((function(e){return e.photographerPhotolist.error}));Object(o.useEffect)((function(){"idle"===a&&r(N({username:t,pageNumber:s}))}),[r,t,a,s]);return Object(n.jsxs)("div",{className:"photographer-photolist",children:[Object(n.jsx)(S,{thumbnails:c}),"loading"===a&&Object(n.jsx)(R,{}),"succeeded"===a&&Object(n.jsx)(A,{handleShowMore:function(){r(N({username:t,pageNumber:s}))}}),"failed"===a&&Object(n.jsx)(L,{errorMsg:l})]})},D=(r(81),function(e){var t=e.username,r=Object(i.b)(),c=Object(i.c)((function(e){return e.photographer.photographer})),a=Object(i.c)((function(e){return e.photographer.status})),s=Object(i.c)((function(e){return e.photographer.error})),l=c.profileImg,u=c.firstName,h=c.lastName,d="".concat(u," ").concat(h),p=c.bio,j=c.totalPhotos,b=c.totalCollections;return Object(o.useEffect)((function(){r(g(t))}),[r,t]),Object(n.jsxs)("div",{className:"photographer-view",children:["loading"===a&&Object(n.jsx)(R,{}),"succeeded"===a&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"flex-container photographer-container",children:[Object(n.jsxs)("div",{className:"flex-item",children:[Object(n.jsx)("img",{src:l,alt:d,className:"profile-img"}),Object(n.jsxs)("h2",{children:[u,Object(n.jsx)("br",{}),h]})]}),Object(n.jsxs)("div",{className:"flex-item",children:[Object(n.jsx)("p",{children:p}),Object(n.jsxs)("p",{children:["Username:",t,Object(n.jsx)("br",{}),"Photos:",j,Object(n.jsx)("br",{}),"Collections:",b]})]})]}),Object(n.jsx)(q,{username:t})]}),"failed"===a&&Object(n.jsx)(L,{errorMsg:s})]})}),X=function(){var e=Object(k.h)(),t=e.state&&e.state.background,r="";if(void 0!==typeof e.pathname){var o=e.pathname.split("/");3!==o.length||"photos"!==o[1]&&"photographer"!==o[1]||(r=o.pop())}return Object(n.jsxs)("div",{children:[Object(n.jsxs)(k.d,{location:t||e,children:[Object(n.jsxs)(k.b,{exact:!0,path:"/",children:[Object(n.jsx)(H,{}),Object(n.jsx)(T,{})]}),Object(n.jsx)(k.b,{path:"/info",children:Object(n.jsx)(B,{children:Object(n.jsx)(F,{})})}),Object(n.jsx)(k.b,{exact:!0,path:"/photos",children:Object(n.jsx)(k.a,{to:"/"})}),Object(n.jsx)(k.b,{path:"/photos/:photoId",children:Object(n.jsx)(G,{photoId:r})}),Object(n.jsx)(k.b,{path:"/photographer/:username",children:Object(n.jsx)(D,{username:r})}),Object(n.jsx)(k.b,{path:"*",children:Object(n.jsx)(J,{})})]}),t&&Object(n.jsx)(k.b,{path:"/info",children:Object(n.jsx)(B,{children:Object(n.jsx)(F,{})})})]})},Y=(r(82),function(){return Object(n.jsx)(P.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(_,{}),Object(n.jsx)(X,{})]})})});s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(i.a,{store:I,children:Object(n.jsx)(Y,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.32103e9f.chunk.js.map