(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),i=n.n(r),s=(n(98),n(7)),o=n.n(s),l=n(10),j=n(13),u=(n(99),n(184)),d=n(177),b=n(179),p=n(180),h=n(57),m=n(181),x=n(182),O=n(183),f=n(174),g=Object(f.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),v=n(2);var y=function(e){var t=e.product,n=e.onClick,a=g();return Object(v.jsxs)(d.a,{className:a.root,children:[Object(v.jsx)(b.a,{className:a.media,image:t.media.source,title:t.name,s:!0}),Object(v.jsxs)(p.a,{children:[Object(v.jsxs)("div",{className:a.cardContent,children:[Object(v.jsx)(h.a,{variant:"h5",gutterBottom:!0,children:t.name}),Object(v.jsx)(h.a,{variant:"h5",children:t.price.formatted_with_symbol})]}),Object(v.jsx)(h.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary"})]}),Object(v.jsx)(m.a,{disableSpacing:!0,className:a.CardActions,children:Object(v.jsx)(x.a,{"aria-label":"add-to-cart",onClick:function(){return n(t.id,1)},children:Object(v.jsx)(O.a,{})})})]})},k=n(14),C=Object(f.a)((function(e){var t;return{toolbar:e.mixins.toolbar,content:(t={flexGrow:1,background:"rgb(131,58,180)"},Object(k.a)(t,"background","linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(71,140,228,1) 100%, rgba(252,176,69,1) 100%)"),Object(k.a)(t,"padding",e.spacing(3)),t),root:{flexGrow:1}}}));var w=function(e){var t=e.products,n=e.handleClick,a=C();return Object(v.jsxs)("main",{className:a.content,children:[Object(v.jsx)("div",{className:a.toolbar}),Object(v.jsx)(u.a,{container:!0,spacing:4,justify:"center",children:t.map((function(e){return Object(v.jsx)(u.a,{item:!0,xs:12,sm:6,md:4,lg:4,children:Object(v.jsx)(y,{product:e,onClick:n})},e.id)}))})]})},S=n(185),N=n(186),_=n(187),T=n.p+"static/media/commerce.457bea4f.png",B=n(188),L=n(18),q=Object(f.a)((function(e){return{appBar:Object(k.a)({boxShadow:"none",backgroundColor:"black",color:"#fff",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none",color:"coral"},image:{marginRight:"10px"},menuButton:Object(k.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(k.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(L.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(L.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},icon:{color:"coral"},inputInput:Object(k.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),E=n(15),I=n(24);var F=function(e){var t=e.totalItems,n=q(),a=Object(E.f)();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(S.a,{className:n.appBar,position:"fixed",color:"inherint",children:Object(v.jsxs)(N.a,{children:[Object(v.jsxs)(h.a,{component:I.b,to:"/shop",className:n.title,color:"inherint",variant:"h4",children:[Object(v.jsx)("img",{src:T,height:"60px",alt:"Commerce.js",className:n.image}),"Winter Shopping"]}),Object(v.jsx)("div",{className:n.grow}),"/shop"===a.pathname&&Object(v.jsx)("div",{className:n.button,children:Object(v.jsx)(x.a,{component:I.b,to:"/shop/cart","aria-label":"Show Cart Times",className:n.icon,color:"inherint",children:Object(v.jsx)(_.a,{badgeContent:t,color:"secondary",children:Object(v.jsx)(B.a,{})})})})]})})})},R=n(80),W=new(n.n(R).a)("pk_test_30157fe5fc110fe81a7e61c710c7501f10dac5d24b4c9"),A=n(189),D=n(190),P=Object(f.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(k.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(k.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),z=Object(f.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}}));var G=function(e){var t=e.item,n=e.removeCart,a=e.handleUpdateCart,c=z();return Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{image:t.media.source,className:c.media},t.name),Object(v.jsxs)(p.a,{className:c.cardContent,children:[Object(v.jsx)(h.a,{variant:"h6",children:t.name}),Object(v.jsx)(h.a,{variant:"h5",children:t.line_total.formatted_with_symbol})]}),Object(v.jsxs)(m.a,{className:c.cardActions,children:[Object(v.jsxs)("div",{className:c.buttons,children:[Object(v.jsx)(A.a,{type:"button",size:"small",onClick:function(){return a(t.id,t.quantity-1)},children:"-"}),Object(v.jsx)(h.a,{children:t.quantity}),Object(v.jsx)(A.a,{type:"button",size:"small",onClick:function(){return a(t.id,t.quantity+1)},children:"+"})]}),Object(v.jsx)(A.a,{variant:"contained",onClick:function(){return n(t.id)},type:"button",color:"secondary",children:"Remove"})]})]})};var U=function(e){var t=e.cart,n=e.removeCart,a=e.handleUpdateCart,c=e.emptyCart,r=P(),i=function(){return Object(v.jsxs)(h.a,{variant:"subtitle1",children:["You have no items Shopping Cart. ",Object(v.jsx)(I.b,{to:"/",children:"Add Something Here"})]})},s=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{container:!0,spacing:3,children:t.line_items.map((function(e){return Object(v.jsx)(u.a,{item:!0,xs:12,sm:3,children:Object(v.jsx)("div",{children:Object(v.jsx)(G,{item:e,removeCart:n,handleUpdateCart:a})})})}))}),Object(v.jsxs)("div",{className:r.cardDetails,children:[Object(v.jsxs)(h.a,{variant:"h4",children:["SubTotal: ",t.subtotal.formatted_with_symbol," "]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(A.a,{className:r.emptyButton,onClick:c,type:"button",size:"large",variant:"contained",color:"secondary",children:"Empty Cart"}),Object(v.jsx)(A.a,{className:r.checkoutButton,type:"button",size:"large",variant:"contained",color:"primary",component:I.b,to:"/checkout",children:"Checkout"})]})]})]})};return t.line_items?Object(v.jsxs)(D.a,{children:[Object(v.jsx)("div",{className:r.toolbar}),Object(v.jsx)(h.a,{className:r.title,variant:"h3",children:"Your Shopping Cart"}),t.line_items.length?Object(v.jsx)(s,{}):Object(v.jsx)(i,{})]}):"Loading..."},Y=n(83),M=n(201),H=n(197),J=n(199),Q=n(33),Z=n(202),K=n(198),V=n(194),X=n(45),$=n(200);var ee=function(e){var t=e.name,n=e.label,a=Object(X.d)().control;return Object(v.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(X.a,{render:function(e){var t=e.field;return Object(v.jsx)($.a,Object(Q.a)(Object(Q.a)({},t),{},{fullWidth:!0,label:n,required:!0}))},control:a,name:t})})};var te=function(e){var t=e.checkoutToken,n=e.next,c=Object(X.c)(),r=Object(a.useState)([]),i=Object(j.a)(r,2),s=i[0],d=i[1],b=Object(a.useState)(""),p=Object(j.a)(b,2),m=p[0],x=p[1],O=Object(a.useState)([]),f=Object(j.a)(O,2),g=f[0],y=f[1],k=Object(a.useState)(""),C=Object(j.a)(k,2),w=C[0],S=C[1],N=Object(a.useState)([]),_=Object(j.a)(N,2),T=_[0],B=_[1],L=Object(a.useState)(""),q=Object(j.a)(L,2),E=q[0],F=q[1],R=Object.entries(s).map((function(e){var t=Object(j.a)(e,2);return{id:t[0],label:t[1]}})),D=Object.entries(g).map((function(e){var t=Object(j.a)(e,2);return{id:t[0],label:t[1]}})),P=T.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),z=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,console.log(a),d(a),x(Object.keys(a)[0]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,console.log(a),y(a),S(Object.keys(a)[0]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:null,e.next=3,W.checkout.getShippingOptions(t,{country:n,region:a});case 3:c=e.sent,B(c),F(c[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){z(t.id),console.log(t.id)}),[]),Object(a.useEffect)((function(){m&&G(m)}),[m]),Object(a.useEffect)((function(){w&&U(t.id,m,w)}),[w]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.a,{variant:"h5",gutterBottom:!0,children:"Shipping Address"}),Object(v.jsx)(X.b,Object(Q.a)(Object(Q.a)({},c),{},{children:Object(v.jsxs)("form",{onSubmit:c.handleSubmit((function(e){return n(Object(Q.a)(Object(Q.a)({},e),{},{shippingcountry:m,subDivition:w,shippingOption:E}))})),children:[Object(v.jsxs)(u.a,{container:!0,spacing:3,children:[Object(v.jsx)(ee,{required:!0,name:"firstName",label:"First Name"}),Object(v.jsx)(ee,{required:!0,name:"lastName",label:"Last Name"}),Object(v.jsx)(ee,{required:!0,name:"address",label:"Address"}),Object(v.jsx)(ee,{required:!0,name:"email",label:"Email"}),Object(v.jsx)(ee,{required:!0,name:"city",label:"City"}),Object(v.jsx)(ee,{required:!0,name:"zipcode",label:"Zip Code"}),Object(v.jsxs)(u.a,{item:!0,xs:12,sm:6,children:[Object(v.jsx)(Z.a,{children:"Shipping Country"}),Object(v.jsx)(K.a,{value:m,fullWidth:!0,onChange:function(e){return x(e.target.value)},children:R.map((function(e){return Object(v.jsxs)(V.a,{value:e.id,children:[" ",e.label]},e.id)}))})]}),Object(v.jsxs)(u.a,{item:!0,xs:12,sm:6,children:[Object(v.jsx)(Z.a,{children:"SubDivitions"}),Object(v.jsx)(K.a,{value:w,fullWidth:!0,onChange:function(e){return S(e.target.value)},children:D.map((function(e){return Object(v.jsx)(V.a,{value:e.id,children:e.label},e.id)}))})]}),Object(v.jsxs)(u.a,{item:!0,xs:12,sm:6,children:[Object(v.jsx)(Z.a,{children:"Shipping Options"}),Object(v.jsx)(K.a,{value:E,fullWidth:!0,onChange:function(e){return F(e.target.value)},children:P.map((function(e){return Object(v.jsx)(V.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(v.jsx)(A.a,{component:I.b,to:"/cart",variant:"outlined",color:"secondary",children:"Back To Cart"}),Object(v.jsx)(A.a,{type:"submit",color:"primary",variant:"outlined",children:"Next"})]})]})}))]})},ne=n(56),ae=n(193),ce=n(144),re=n(195);var ie=function(e){var t=e.checkoutToken;return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{gutterBottom:!0,variant:"h5",children:"Order Summary"}),Object(v.jsxs)(ae.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(v.jsxs)(ce.a,{style:{padding:"10px 0"},children:[Object(v.jsx)(re.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(v.jsx)(h.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(v.jsxs)(ce.a,{style:{padding:"10px 0"},children:[Object(v.jsx)(re.a,{primary:"Total"}),Object(v.jsxs)(h.a,{variant:"subtitle1",style:{fontWeight:"700"},children:[" ",t.live.subtotal.formatted_with_symbol]})]})]})]})},se=n(196),oe=n(81);var le=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{variant:"h5",style:{color:"green",fontWeight:500},children:"ThankYou For Your Purchase"}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"space-between"}})]})},je=Object(oe.a)("...");var ue=function(e){var t=e.checkoutToken,n=e.backStep;return Object(v.jsxs)("div",{children:[Object(v.jsx)(ie,{checkoutToken:t}),Object(v.jsx)(se.a,{}),Object(v.jsx)(h.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment Method"}),Object(v.jsx)(ne.Elements,{stripe:je,children:Object(v.jsx)(ne.ElementsConsumer,{children:function(e){e.elements;var a=e.stripe;return Object(v.jsxs)("form",{children:[Object(v.jsx)(ne.CardElement,{}),Object(v.jsx)("br",{})," ",Object(v.jsx)("br",{}),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(v.jsx)(A.a,{variant:"contained",color:"primary",onClick:n,children:" Back"}),Object(v.jsxs)(A.a,{type:"submit",component:le,variant:"contained",color:"primary",disabled:!a,children:[" Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},de=Object(f.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(k.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(k.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(k.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),be=["Shipping Address","Payment Details"];var pe=function(e){var t=e.cart,n=Object(a.useState)(0),c=Object(j.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(null),u=Object(j.a)(s,2),d=u[0],b=u[1],p=Object(a.useState)({}),m=Object(j.a)(p,2),x=(m[0],m[1]),O=de();Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,console.log(n),b(n),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var f=function(){return i((function(e){return e-1}))},g=function(e){x(e),i((function(e){return e+1}))},y=function(){return Object(v.jsx)("div",{children:"Confirmation"})},k=function(){return 0===r?Object(v.jsx)(te,{checkoutToken:d,next:g}):Object(v.jsx)(ue,{backStep:f,checkoutToken:d})};return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:O.toolbar,children:Object(v.jsx)("main",{className:O.layout,children:Object(v.jsxs)(Y.a,{className:O.paper,children:[Object(v.jsx)(h.a,{align:"center",variant:"h4",children:"Checkout"}),Object(v.jsx)(M.a,{activeStep:r,className:O.stepper,children:be.map((function(e){return Object(v.jsx)(H.a,{children:Object(v.jsx)(J.a,{children:e})},e)}))}),r===be.length?Object(v.jsx)(y,{}):d&&Object(v.jsx)(k,{})]})})})})};n(142);var he=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"offer"})})};var me=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(j.a)(r,2),s=i[0],u=i[1],d=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.products.list();case 2:t=e.sent,n=t.data,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,W.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.cart.add(t,n);case 2:a=e.sent,u(a.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.cart.remove(t);case 2:n=e.sent,a=n.cart,u(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.cart.empty();case 2:t=e.sent,n=t.cart,u(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.cart.update(t,{quantity:n});case 2:a=e.sent,c=a.cart,u(c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d(),b()}),[]),Object(v.jsx)(I.a,{children:Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(E.c,{children:[Object(v.jsxs)(E.a,{exact:!0,path:"/shop",children:[Object(v.jsx)(F,{totalItems:s.total_items}),Object(v.jsx)(he,{}),Object(v.jsx)(w,{products:n,handleClick:p})]}),Object(v.jsx)(E.a,{exact:!0,path:"/shop/cart",children:Object(v.jsx)(U,{cart:s,removeCart:h,handleUpdateCart:x,emptyCart:m})}),Object(v.jsx)(E.a,{exact:!0,path:"/checkout",children:Object(v.jsx)(pe,{cart:s})})]})})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(me,{})}),document.getElementById("root")),xe()},98:function(e,t,n){},99:function(e,t,n){}},[[143,1,2]]]);
//# sourceMappingURL=main.c68b3273.chunk.js.map