(this["webpackJsonpmy-test"]=this["webpackJsonpmy-test"]||[]).push([[0],{13:function(e,t,c){},30:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(5),i=c.n(r),s=(c(30),c(13),c(25)),o=c(11),u=c(3),j=c(12),b=c(22),d=c.n(b).a.create({baseURL:"https://api.chucknorris.io/jokes/",withCredentials:!0}),l=function(){return d.get("random")},h={icon_url:"",id:"",url:"",value:""},O=c(1),f=function(e){var t=e.jokeCard,c=e.img;return Object(O.jsxs)("div",{className:"jokeWrapper",children:[Object(O.jsx)("img",{src:c,alt:"ChuckFace",className:"ChuckFace"}),t]})},p=c(23),g=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),i=Object(o.a)(r,2),j=i[0],b=i[1],d=Object(u.b)(),h=Object(u.c)((function(e){return e.app.value})),g=Object(u.c)((function(e){return e.app.icon_url}));Object(n.useEffect)((function(){v()}),[c,a]),Object(n.useEffect)((function(){h&&b((function(e){return[].concat(Object(s.a)(e),[h])}))}),[h,c]);var v=function(){for(var e=0;e<10;e++)d((function(e){l().then((function(t){e({type:"APP/SET-CARD",cards:t.data})}))}))};return Object(O.jsx)("div",{className:"wrapperContent",children:Object(O.jsx)(p.a,{next:v,dataLength:j.length,hasMore:!0,scrollThreshold:.95,loader:Object(O.jsx)("h2",{children:"Loading..."}),children:j.map((function(e){return Object(O.jsx)(f,{jokeCard:e,img:g})}))})})},v=c.p+"static/media/chucknorris.8cef148e.png";var m=function(){var e=v;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:e,alt:"ChuckLogo",className:"ChuckLogo"})}),Object(O.jsx)(g,{})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))},C=c(7),k=c(24),L=Object(C.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-CARD":return Object(j.a)(Object(j.a)({},e),t.cards);default:return e}}}),F=Object(C.c)(L,Object(C.a)(k.a));i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(u.a,{store:F,children:Object(O.jsx)(m,{})})}),document.getElementById("root")),x()}},[[54,1,2]]]);
//# sourceMappingURL=main.6a054f7d.chunk.js.map