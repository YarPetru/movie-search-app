"use strict";(self.webpackChunkmovie_search_app=self.webpackChunkmovie_search_app||[]).push([[392],{4290:function(t,e,r){r.d(e,{Z:function(){return c}});var n=r(2043),a=r(184),c=function(){return(0,a.jsx)(n.v,{color:"#5e3e53"})}},4392:function(t,e,r){r.r(e),r.d(e,{CastPage:function(){return g}});var n=r(5861),a=r(885),c=r(7757),s=r.n(c),u=r(6871),o=r(2791),i=r(8479),p=r(4290),f=r(4390),l="Cast_castList__ARoWn",d="Cast_actorItem__fXEWx",v="Cast_actorCard__1vCPH",h="Cast_photo__lvFLf",m="Cast_character__tKDlA",_="Cast_name__6UbFm",x=r(184),w=function(){var t=function(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],i=(0,o.useState)("idle"),p=(0,a.Z)(i,2),l=p[0],d=p[1],v=(0,o.useState)(null),h=(0,a.Z)(v,2),m=h[0],_=h[1],x=(0,u.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d("pending"),t.next=4,(0,f.zv)(x);case 4:e=t.sent,c(e),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),d("resolved"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),_(t.t0),d("rejected");case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[x]),{cast:r,error:m,status:l}}(),e=t.cast,r=t.error,c=t.status;return(0,x.jsxs)(x.Fragment,{children:["pending"===c&&(0,x.jsx)(p.Z,{}),"rejected"===c&&(0,i.ZP)("Oops. Something went wrong. Please try again. ".concat(r.message),{icon:"\ud83d\ude13",style:{borderRadius:"10px",background:"#333",color:"#fff"}}),"resolved"===c&&(0,x.jsx)("ul",{className:l,children:e.map((function(t){return(0,x.jsx)("li",{className:d,children:(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)("img",{className:h,src:t.profile_path?"https://image.tmdb.org/t/p/w200/".concat(t.profile_path):"http://www.axisplumbing.com.au/wp-content/uploads/2018/11/Avatar-200x300.jpg",alt:t.name}),(0,x.jsx)("h3",{className:_,children:t.name}),(0,x.jsxs)("p",{className:m,children:["Character: ",t.character]})]})},t.credit_id)}))})]})};function g(){return(0,x.jsx)(w,{})}},4390:function(t,e,r){r.d(e,{Ph:function(){return p},TP:function(){return f},tx:function(){return d},z5:function(){return i},zv:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),u=r.n(s),o="9cba2b56fa6de0f8781209edaebd8957";u().defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/search/movie?api_key=".concat(o,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=392.8147d62f.chunk.js.map