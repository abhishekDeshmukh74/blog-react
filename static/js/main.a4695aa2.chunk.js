(this["webpackJsonpblog-react"]=this["webpackJsonpblog-react"]||[]).push([[0],{37:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},70:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(12),s=c.n(r),i=(c(49),c(50),c(16)),o=c.n(i),l=c(22),d=c(21),j=c(17),u=c(23),b=c.n(u),p=(c(70),c(15)),O=(c(37),c(2));var h=function(e){var t=e.id,c=e.title,n=e.body,a=e.userId,r=Object(p.b)();return Object(O.jsxs)("div",{className:"blog-post",onClick:function(){r({type:"SELECT_BLOG",payload:{id:t,title:c,body:n,userId:a}})},children:[Object(O.jsxs)("h2",{children:[t,": ",c]}),Object(O.jsx)("p",{children:n})]})},f="https://jsonplaceholder.typicode.com/";var x=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(d.a)(r,2),i=s[0],u=s[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(f,"posts"));case 2:t=e.sent,c=t.data,a(c),u(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{className:"blog-list",children:[Object(O.jsx)("input",{className:"search-box",type:"text",id:"filter",placeholder:"Search for blog title...",onChange:function(e){var t=e.target.value,n=c.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));u(n)}}),i.map((function(e){var t=e.id,c=e.title,n=e.userId,a=e.body;return Object(O.jsx)(j.b,{to:"/blog/".concat(t),children:Object(O.jsx)(h,{id:t,title:c,userId:n,body:a},t)})}))]})},m=c(3),v=c(97);c(81);var g=function(e){e.id,e.postId;var t=e.name,c=e.email;return e.body,Object(O.jsxs)("div",{className:"comment",children:[Object(O.jsxs)("p",{children:["name: ",t]}),Object(O.jsxs)("p",{children:["email: ",c]})]})};var y=function(){var e=Object(m.f)().id,t=Object(p.c)((function(e){return e.selectedBlog})),c=Object(n.useState)([]),a=Object(d.a)(c,2),r=a[0],s=a[1];console.log("selectedBlog:",t);var i=function(){var t=Object(l.a)(o.a.mark((function t(){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat(f,"comments?postId=").concat(e));case 2:c=t.sent,n=c.data,s(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"blog-details",children:[Object(O.jsxs)("h2",{children:[e,": ",t.title]}),Object(O.jsx)("p",{children:t.body}),Object(O.jsx)(v.a,{onClick:i,children:"Load Comments"}),Object(O.jsx)("div",{className:"comments",children:r.map((function(e){var t=e.id,c=e.postId,n=e.name,a=e.email,r=e.body;return Object(O.jsx)(g,{id:t,postId:c,name:n,email:a,body:r},t)}))})]})};var C=function(){return Object(O.jsxs)(j.a,{children:[Object(O.jsx)("div",{className:"App"}),Object(O.jsxs)(m.c,{children:[Object(O.jsx)(m.a,{exact:!0,path:"/",children:Object(O.jsx)(x,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/blog/:id",children:Object(O.jsx)(y,{})})]})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,98)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},w=c(43),L=c(28),B={selectedBlog:null},S=Object(w.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_BLOG":return Object(L.a)(Object(L.a)({},e),{},{selectedBlog:t.payload});default:return e}}));s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(p.a,{store:S,children:Object(O.jsx)(C,{})})}),document.getElementById("root")),I()}},[[82,1,2]]]);
//# sourceMappingURL=main.a4695aa2.chunk.js.map