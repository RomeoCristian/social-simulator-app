(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(2),s=t(33),r=t.n(s),c=(t(41),t(5)),i=t(3),o=t(23),l=t(36),j=t(1),d=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{className:"navbar bg-primary",children:[Object(j.jsx)("h1",{children:Object(j.jsx)(c.b,{to:"/index",children:"SociaL in"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)(c.b,{to:"/",children:[Object(j.jsx)(o.a,{})," Home"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(c.b,{to:"/login",children:[Object(j.jsx)(o.b,{})," Log in"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(c.b,{to:"/register",children:[Object(j.jsx)(l.a,{}),"Sign up"]})})]})]})})},u=function(){return Object(j.jsx)("div",{className:"landing",children:Object(j.jsx)("div",{className:"dark-overlay",children:Object(j.jsx)("div",{className:"landing-inner",children:Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)(c.b,{to:"/register",className:"btn btn-primary",children:"Sign Up"}),Object(j.jsx)(c.b,{to:"/login",className:"btn btn-primary",children:"Login"})]})})})})},b=t(7),m=t(12),p=t.n(m),O=t(16),h=t(19),x=t(18),g=t(17),f=t.n(g),v=function(){var e=Object(n.useState)({name:"",email:"",password:"",confirmationPassword:""}),a=Object(h.a)(e,2),t=a[0],s=a[1],r=t.name,i=t.email,o=t.password,l=t.confirmationPassword,d=function(){var e=Object(O.a)(p.a.mark((function e(a){var t,n,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o===l){e.next=5;break}console.log("Passwords do not match"),e.next=18;break;case 5:return t={name:r,email:i,password:o},e.prev=6,n={headers:{"Content-Type":"application/json"}},s=JSON.stringify(t),e.next=11,f.a.post("/api/users",s,n);case 11:c=e.sent,console.log(c.data),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),console.log(e.t0.response.data);case 18:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(a){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"large text-primary",children:"Sign Up"}),Object(j.jsxs)("p",{className:"lead",children:[Object(j.jsx)(x.a,{})," Create your account"]}),Object(j.jsxs)("form",{className:"form",onSubmit:function(e){return d(e)},children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:r,onChange:function(e){return s(Object(b.a)(Object(b.a)({},t),{},{name:e.target.value}))},required:!0})}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:i,onChange:function(e){return s(Object(b.a)(Object(b.a)({},t),{},{email:e.target.value}))},required:!0}),Object(j.jsx)("small",{className:"form-text",children:"This site uses Gravatar so if you want a profile image, use a Gravatar email"})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:o,onChange:function(e){return s(Object(b.a)(Object(b.a)({},t),{},{password:e.target.value}))},minLength:"6",autocomplete:"on"})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"confirmationPassword",value:l,onChange:function(e){return s(Object(b.a)(Object(b.a)({},t),{},{confirmationPassword:e.target.value}))},minLength:"6",autocomplete:"on"})}),Object(j.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Register"})]}),Object(j.jsxs)("p",{className:"my-1",children:["Already have an account? ",Object(j.jsx)(c.b,{to:"/login",children:"Sign In"})]})]})},N=function(){var e=Object(n.useState)({name:"",email:"",password:"",confirmationPassword:""}),a=Object(h.a)(e,2),t=a[0],s=a[1],r=t.email,i=t.password,o=function(){var e=Object(O.a)(p.a.mark((function e(a){var t,n,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={email:r,password:i},e.prev=2,n={headers:{"Content-Type":"application/json"}},s=JSON.stringify(t),e.next=7,f.a.post("/api/auth",s,n);case 7:c=e.sent,console.log(c.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(a){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"large text-primary",children:"Sign in"}),Object(j.jsxs)("p",{className:"lead",children:[Object(j.jsx)(x.a,{})," Sing Into your account"]}),Object(j.jsxs)("form",{className:"form",onSubmit:function(e){return o(e)},children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:r,onChange:function(e){return s(Object(b.a)(Object(b.a)({},t),{},{email:e.target.value}))},required:!0,autocomplete:"on"})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:i,onChange:function(e){return s(Object(b.a)(Object(b.a)({},t),{},{password:e.target.value}))},minLength:"6"})}),Object(j.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Login"})]}),Object(j.jsxs)("p",{className:"my-1",children:["Don't have an account? ",Object(j.jsx)(c.b,{to:"/register",children:"Sign Up"})]})]})},w=function(){return Object(j.jsx)(c.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)(i.a,{exact:!0,path:"/",component:u}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/register",component:v}),Object(j.jsx)(i.a,{exact:!0,path:"/login",component:N})]})]})})};r.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.0d8c6e12.chunk.js.map