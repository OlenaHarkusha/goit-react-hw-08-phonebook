"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[373],{373:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(4087),i=t(5946),s=t(1836),a=t(2503),l=t(8208),o=t(5442),u=t(4224),m=t(5705),c=t(9434),x=t(4324),p=t(2941),h=t(8007),d=t(184),b=function(){var e=(0,c.I0)(),n=(0,c.v9)(p.Af),t=(0,s.p)(),i=(0,m.TA)({initialValues:{name:"",number:""},onSubmit:function(n){var r=n.name,s=n.number,a=r.toLowerCase();b(a)?t({title:"".concat(r," is already in your contact list"),position:"top",status:"error",duration:9e3,isClosable:!0}):""!==r.trim()&&" "!==s.trim()?(e((0,x.Dk)({name:r,number:s})),i.resetForm()):t({title:"the field must not be empty",position:"top",status:"error",duration:9e3,isClosable:!0})},validationSchema:h.Ry({name:h.Z_().min(4,"Must be 4 characters or more").required("Required"),number:h.Z_().min(6,"Must be 6 characters or more").required("Required")})}),b=function(e){return n.some((function(n){return n.name.toLowerCase().includes(e)}))};return(0,d.jsx)(r.xu,{p:"10px",display:"flex",justifyContent:"center",children:(0,d.jsxs)(a.m.form,{onSubmit:i.handleSubmit,w:"80%",children:[(0,d.jsxs)(l.l,{mb:"10px",children:["Name",(0,d.jsx)(o.I,{type:"text",name:"name",onChange:i.handleChange,value:i.values.name,mt:"10px",bg:"white"})]}),(0,d.jsxs)(l.l,{mb:"10px",children:["Number",(0,d.jsx)(o.I,{type:"tel",name:"number",onChange:i.handleChange,value:i.values.number,mt:"10px",bg:"white"})]}),(0,d.jsx)(u.z,{type:"submit",mt:"10px",colorScheme:"purple",children:"Add Contact"})]})})},j=t(527),f=function(){var e=(0,c.v9)(p.AD),n=(0,c.I0)();return(0,d.jsx)(o.I,{placeholder:"Find contacts by name",type:"text",name:"filter",value:e,onChange:function(e){n((0,j.xO)(e.target.value))},bg:"white",mb:"20px"})},C=t(3204),y=t(3541),v=t(2791),g=t(8348),w=t(2347),k=t(9975),I=t(581),S=t(3182),N=t(1211),z=t(7970),A=t(1216),_=function(e){var n=e.initName,t=e.initNumber,i=e.id,s=e.onClose,p=(0,c.I0)(),h=(0,m.TA)({initialValues:{name:n,number:t},onSubmit:function(e){var n={name:e.name,number:e.number};p((0,x.mP)({contact:n,id:i})),h.resetForm()}});return(0,d.jsx)(r.xu,{p:"10px",display:"flex",justifyContent:"center",children:(0,d.jsxs)(a.m.form,{onSubmit:h.handleSubmit,w:"80%",children:[(0,d.jsxs)(l.l,{mb:"10px",children:["Name",(0,d.jsx)(o.I,{type:"text",name:"name",onChange:h.handleChange,value:h.values.name,mt:"10px",bg:"white"})]}),(0,d.jsxs)(l.l,{mb:"10px",children:["Number",(0,d.jsx)(o.I,{type:"tel",name:"number",onChange:h.handleChange,value:h.values.number,mt:"10px",bg:"white"})]}),(0,d.jsx)(u.z,{type:"submit",mt:"10px",colorScheme:"purple",onClick:s,children:"Edit Contact"})]})})},q=function(e){var n=e.item,t=(0,g.q)(),i=t.isOpen,s=t.onOpen,a=t.onClose,l=(0,c.I0)();return(0,d.jsxs)(y.HC,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,d.jsxs)(w.x,{children:[n.name,": ",n.number]}),(0,d.jsxs)(r.xu,{display:"flex",gap:"10px",children:[(0,d.jsx)(u.z,{type:"button",onClick:function(){return l((0,x.GK)(n.id))},colorScheme:"purple",size:"sm",children:"Delete contact"}),(0,d.jsx)(u.z,{type:"button",onClick:s,colorScheme:"purple",size:"sm",children:"Edit contact"}),(0,d.jsxs)(k.u_,{isOpen:i,onClose:a,children:[(0,d.jsx)(I.Z,{}),(0,d.jsxs)(S.h,{children:[(0,d.jsx)(N.x,{children:"Modal Title"}),(0,d.jsx)(z.o,{}),(0,d.jsx)(A.f,{children:(0,d.jsx)(_,{initName:n.name,initNumber:n.number,id:n.id,onClose:a})})]})]})]})]},n.id)},D=function(){var e=(0,c.v9)(p.RZ),n=(0,c.I0)(),t=(0,c.v9)(p.xU);return(0,v.useEffect)((function(){n((0,x.yF)())}),[n]),t?(0,d.jsx)(C.$,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"purple.500",size:"xl",m:"0 auto"}):(0,d.jsx)(y.aV,{display:"flex",flexDirection:"column",gap:"10px",children:e.map((function(e){return(0,d.jsx)(q,{item:e},e.id)}))})},F=function(){return(0,d.jsxs)(r.xu,{p:"20px",children:[(0,d.jsx)(i.X,{as:"h1",color:"purple.900",textAlign:"center",mb:"10px",children:"Phonebook"}),(0,d.jsx)(b,{}),(0,d.jsx)(i.X,{as:"h2",color:"purple.900",textAlign:"center",mb:"10px",children:"Contacts"}),(0,d.jsx)(f,{}),(0,d.jsx)(D,{})]})}}}]);
//# sourceMappingURL=373.fccc65bf.chunk.js.map