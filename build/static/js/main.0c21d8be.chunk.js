(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(15),a=t.n(r),o=t(3),u=t(0),i=function(e){var n=e.persons,t=e.deletePerson;return n.map((function(e){return Object(u.jsxs)("p",{children:[e.name," ",e.number,Object(u.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.id)}))},s=function(e){return Object(u.jsxs)("form",{onSubmit:e.addPerson,children:[Object(u.jsxs)("div",{children:["name:",Object(u.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(u.jsxs)("div",{children:["number:",Object(u.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.notification;return null===n?null:Object(u.jsx)("div",{className:n.type,children:n.message})},l=function(e){return Object(u.jsx)("input",{value:e.value,onChange:e.onChange})},b=t(4),f=t.n(b),h="/api/persons",j=function(){return f.a.get(h).then((function(e){return e.data}))},m=function(e){return f.a.post(h,e).then((function(e){return e.data}))},O=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),b=Object(o.a)(a,2),f=b[0],h=b[1],v=Object(c.useState)(""),x=Object(o.a)(v,2),g=x[0],w=x[1],C=Object(c.useState)(""),N=Object(o.a)(C,2),k=N[0],y=N[1],S=Object(c.useState)(null),P=Object(o.a)(S,2),D=P[0],E=P[1];Object(c.useEffect)((function(){j().then((function(e){r(e)}))}),[]);var J=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";E({message:e,type:n}),setTimeout((function(){E(null)}),5e3)},L=0===k.length?t:t.filter((function(e){return e.name.toLowerCase().indexOf(k.toLowerCase())>0}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(d,{notification:D}),"filter shown with:",Object(u.jsx)(l,{value:k,onChange:function(e){y(e.target.value)}}),Object(u.jsx)("h3",{children:"add a new"}),Object(u.jsx)(s,{handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){w(e.target.value)},newNumber:g,newName:f,addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===f}));n?window.confirm("".concat(n.name," already in phonebook, replace the old number with new one?"))&&O(n.id,{name:n.name,number:g}).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e}))),J("Changed number of  ".concat(n.name)),h(""),w("")})):m({name:f,number:g}).then((function(e){r(t.concat(e)),J("Added ".concat(f)),h(""),w("")})).catch((function(e){console.log(e.response.data.error),J("".concat(e.response.data.error," "),"error")}))}}),Object(u.jsx)("h3",{children:"Numbers"}),Object(u.jsx)(i,{persons:L,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name))&&p(e).then((function(c){r(t.filter((function(n){return n.id!==e}))),J("Deleted ".concat(n.name))})).catch((function(){r(t.filter((function(n){return n.id!==e}))),J("".concat(n.name," had already been removed"),"error")}))}})]})};t(40);a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0c21d8be.chunk.js.map