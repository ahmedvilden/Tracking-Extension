(window["webpackJsonpreact-chrome-extension-boilerplate"]=window["webpackJsonpreact-chrome-extension-boilerplate"]||[]).push([[0],{180:function(e,t,a){e.exports=a(277)},185:function(e,t,a){},277:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(10),i=a.n(o),c=a(56),r=a(24),m=(a(185),a(186),function(){return{windowPosition:{x:100,y:100}}}),s=l.a.createContext({}),u=function(e){var t=e.children,a=m().windowPosition,o=Object(n.useState)(void 0),i=Object(r.a)(o,2),c=i[0],u=i[1];return Object(n.useEffect)((function(){window.addEventListener("message",(function(e){e.source===window&&e.data.type&&"EXTENSION_ID_RESULT"===e.data.type&&u(e.data.extensionId)}))}),[]),l.a.createElement(s.Provider,{value:{extensionId:c,getExtensionId:function(){window.postMessage({type:"GET_EXTENSION_ID"},"*")},windowPosition:a}},t)},d=a(36),g=a(74),p=a.n(g),E=l.a.createContext({}),f=(l.a.createContext({}),function(e){var t=e.children,a=Object(n.useState)(!1),o=Object(r.a)(a,2),i=o[0],m=(o[1],Object(n.useState)(!1)),s=Object(r.a)(m,2),u=(s[0],s[1]),g=Object(n.useState)(JSON.parse(localStorage.getItem("ActionsList"))),f=Object(r.a)(g,2),h=f[0],S=f[1],b=l.a.useState(""),A=Object(r.a)(b,2),v=A[0],O=(A[1],l.a.useState("")),I=Object(r.a)(O,2),x=I[0],C=I[1],j=Object(n.useState)(""),y=Object(r.a)(j,2),k=y[0],T=y[1],N=Object(n.useState)(""),w=Object(r.a)(N,2),D=w[0],F=w[1],M=Object(n.useState)(""),L=Object(r.a)(M,2),W=L[0],G=L[1],J=l.a.useState(!1),z=Object(r.a)(J,2),B=z[0],Y=z[1],H=l.a.useState(!1),R=Object(r.a)(H,2),U=R[0],Q=R[1],K=l.a.useState(!1),V=Object(r.a)(K,2),X=V[0],q=V[1],P=l.a.useState(!1),Z=Object(r.a)(P,2),_=Z[0],$=Z[1],ee=function(){Y(!0)},te=Object(n.useReducer)((function(e,t){return Object(c.a)(Object(c.a)({},e),t)}),{name:""}),ae=Object(r.a)(te,2),ne=ae[0],le=ae[1],oe=Object(n.useReducer)((function(e,t){return Object(c.a)(Object(c.a)({},e),t)}),{nameInput:""}),ie=Object(r.a)(oe,2),ce=ie[0],re=ie[1];Object(n.useEffect)((function(){}),[D]),Object(n.useEffect)((function(){}),[W]),Object(n.useEffect)((function(){}),[x]);var me=l.a.useState(!1),se=Object(r.a)(me,2),ue=se[0],ge=se[1];Object(n.useEffect)((function(){function e(){var e=localStorage.getItem("aelement");e&&(console.log(e),S(e))}return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[]),Object(n.useEffect)((function(){}),[h]),Object(n.useEffect)((function(){window.addEventListener("message",(function(e){if(e.data.type&&"Action"===e.data.type){if(null!=localStorage.getItem("ActionsList")){var t=JSON.parse(localStorage.getItem("ActionsList"));e.data.action.group=t.length+1,t.push(e.data.action),localStorage.setItem("ActionsList",JSON.stringify(t))}else{var a=[];a.push(e.data.action),localStorage.setItem("ActionsList",JSON.stringify(a))}p.a.post("http://127.0.0.1:5000/Tracking",{message:"adding",sessionId:parseInt(localStorage.getItem("TSid")),activities:e.data.action,validateStatus:function(){return!0}}).then((function(e){console.log(e.status)})).then(S(JSON.parse(localStorage.getItem("ActionsList")),console.log(h))).catch((function(e){console.log(e)}))}}))}),[]);return l.a.createElement(E.Provider,{value:{PauseTracking:function(){de("TrackingP")},stopTracking:function(e){p.a.post("http://127.0.0.1:5000/Tracking",{message:"stopping",data:parseInt(localStorage.getItem("TSid")),toopen:e}).then((function(e){localStorage.clear(),console.log(e)})).then((function(){de("TWroute")})).catch((function(e){console.log(e)}))},isTracking:i,handleSubmit:function(e){e.preventDefault();var t={formInput:ne};p.a.post("http://127.0.0.1:5000/Tracking",{message:"Starting",FileName:t.formInput.name,windowLocation:window.location.href}).then((function(e){u(!0),localStorage.setItem("TSid",JSON.stringify(e.data.data.data)),de("TrackingSession"),window.postMessage({type:"started"},"*")})).catch((function(e){console.log(e)}))},handleInput:function(e){var t=e.target.name,a=e.target.value;le(Object(d.a)({},t,a))},formInput:ne,deleteAction:function(e){p.a.post("http://127.0.0.1:5000/Tracking",{message:"deleting",actid:e,id:parseInt(localStorage.getItem("TSid"))}).then(function(e){for(var t=JSON.parse(localStorage.getItem("ActionsList")),a=0;a<t.length;a++)t[a].name===e&&(t.splice(a,1),localStorage.setItem("ActionsList",JSON.stringify(t)),S(JSON.parse(localStorage.getItem("ActionsList"))))}(e)).catch((function(e){console.log(e)})).then(ee()).catch((function(e){console.log(e)}))},handleClickOpen:function(){ge(!0)},handleClose:function(){ge(!1)},open:ue,EditFormSubmit:function(e){e.preventDefault(),console.log("prevented")},handleSelectChange:function(e){C(e.target.value)},NewName:v,EditForm:function(e){localStorage.setItem("ActionToEdit",JSON.stringify(e)),de("EditAction")},age:x,condition:k,onConditionDropdownSelected:function(e){T(e.target.value)},handleNewCondition:function(e){F(e.target.value)},handleNewGroup:function(e){G(e.target.value)},handleNameInput:function(e){var t=e.target.name,a=e.target.value;re(Object(d.a)({},t,a))},handleEditSubmit:function(e){e.preventDefault();var t={nameInput:ce},a=JSON.parse(localStorage.getItem("ActionToEdit"));a=a.Item,p.a.post("http://127.0.0.1:5000/Tracking",{message:"editActivity",actid:parseInt(localStorage.getItem("TSid")),actiontoedit:a,ActivityName:t.nameInput.nameInput,condition:D,group:W,id:parseInt(localStorage.getItem("TSid"))}).then((function(e){var t=e.data.data.data2.action,n=e.data.data.data.action;console.log(n.name),console.log(t.name);for(var l=JSON.parse(localStorage.getItem("ActionsList")),o=0;o<l.length;o++)l[o].name===a.name&&(l[o].name!=t.name&&(l[o].name=t.name),localStorage.setItem("ActionsList",JSON.stringify(l)),S(JSON.parse(localStorage.getItem("ActionsList"))))})).then(void Q(!0)).catch((function(e){console.log(e)})).then(de("TrackingSession")).catch((function(e){console.log(e)}))},goback:function(){de("TrackingSession")},handleClickSnack:ee,handleCloseSnack:function(e,t){"clickaway"!==t&&Y(!1)},openSnack:B,setOpenSnack:Y,openEditSnack:U,setOpenEditSnack:Q,handleCloseEditSnack:function(e,t){"clickaway"!==t&&Q(!1)},openSlideDialog:X,setOpenSlideDialog:q,handleClickOpenSlideDialog:function(){q(!0)},handleCloseSlideDialog:function(){q(!1)},handleopenLoading:function(){$(!0)},handlecloseLoading:function(){$(!1)},openLoading:_}},t)}),h=a(335),S=a(139),b=a(325),A=a(324),v=a(151),O=a(320),I=a(322),x=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}}})),C=function(){var e=x();return l.a.createElement(ue.Consumer,null,(function(t){var a=t.handleRoute;return l.a.createElement(I.a,{component:"main",maxWidth:"xs"},l.a.createElement(A.a,null),l.a.createElement("div",{className:e.paper},l.a.createElement("img",{className:"authImg",src:"data:image/png;base64,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"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a,{component:"h1",variant:"h5"},"Activity tracking Extension"),l.a.createElement(E,null,(function(e){return Object(S.a)(e),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{variant:"outlined",fullWidth:!0,autoFocus:!0,onClick:function(){a("TrackingIP")}},"Start"))})),l.a.createElement("br",null),l.a.createElement("br",null)))}))},j=a(143),y=a(144),k=a(326),T=Object(O.a)((function(e){return Object(d.a)({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},submit:{margin:e.spacing(3,0,2)},form:{width:"100%",marginTop:e.spacing(1)}},"submit",{margin:e.spacing(3,0,2)})})),N=function(){var e=T();return l.a.createElement(ue.Consumer,null,(function(t){t.handleRoute;return l.a.createElement(I.a,{component:"main",maxWidth:"xs"},l.a.createElement(A.a,null),l.a.createElement(E.Consumer,null,(function(t){var a=t.handleInput,n=t.handleSubmit;return l.a.createElement("div",{className:e.paper},l.a.createElement(v.a,{component:"h3",variant:"h5"},"Start a new tracking session"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j.a,{icon:y.a,size:"6x",color:"#3D0FCF"}),l.a.createElement("form",{onSubmit:n,className:e.form},l.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Your file name",name:"name",autoFocus:!0,onChange:a}),l.a.createElement(b.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",className:e.submit,id:"ExtBtn"},"Create session")))})))}))},w=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}}})),D=function(e){var t=w(),a=e.session;return l.a.createElement(ue.Consumer,null,(function(e){var n=e.handleRoute;return l.a.createElement(I.a,{component:"main",maxWidth:"xs"},l.a.createElement(A.a,null),l.a.createElement("div",{className:t.paper},l.a.createElement(v.a,{component:"h1",variant:"h5"},"Tracking Paused for session ",a),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{variant:"outlined",fullWidth:!0,autoFocus:!0,id:"ExtBtn",onClick:function(){n("TrackingSession")}},"Resume Tracking")))}))},F=a(334),M=a(75),L=a(41),W=a(336),G=a(347),J=a(343),z=(a(129),a(342)),B=a(339),Y=a(338),H=a(341),R=a(332),U=a(330),Q=a(331),K=a(329),V=a(285),X=a(344),q=W.a.Meta;function P(e){return l.a.createElement(B.a,Object.assign({elevation:6,variant:"filled"},e))}var Z=function(e){return l.a.createElement(E.Consumer,null,(function(t){var a=t.deleteAction,n=(t.handleClickOpen,t.open),o=t.handleClose,i=t.EditFormSubmit,c=t.onDropdownSelected,r=t.EditForm,m=(t.handleClickSnack,t.handleCloseSnack),s=t.openSnack;t.setOpenSnack;return l.a.createElement("div",null,l.a.createElement(W.a,{style:{margin:"5px"},id:"ExtModal",cover:l.a.createElement("img",{id:"ExtModal",src:"https://findicons.com/files/icons/1579/devine/256/file.png"}),actions:[l.a.createElement(Y.a,{icon:l.a.createElement(G.a,null),id:"ExtBtn",onClick:function(){return r(e)}}),l.a.createElement(Y.a,{icon:l.a.createElement(J.a,null),onClick:function(){a(e.Item.name)},id:"ExtBtn"}),l.a.createElement(z.a,{open:s,autoHideDuration:6e3,onClose:m},l.a.createElement(P,{onClose:m,severity:"success"},"Action deleted successfully!"))]},l.a.createElement(q,{id:"ExtModal",title:e.Item.type,description:e.Item.name})),l.a.createElement(H.a,{open:n,onClose:o,"aria-labelledby":"form-dialog-title",id:"ExtBtn",maxWidth:!0},l.a.createElement(K.a,{id:"form-dialog-title"},"Edit Action"),l.a.createElement(U.a,null,l.a.createElement(Q.a,null,"Action Infos :"),l.a.createElement(k.a,{autoFocus:!0,margin:"dense",id:"name",label:"Action name: "+e.Item.name,type:"email",fullWidth:!0}),l.a.createElement(V.a,{autoFocus:!0,onChange:c},function(){var e=[];return JSON.parse(localStorage.getItem("ActionsList")).map((function(t){return e.push(l.a.createElement(X.a,{value:t.name},t.name))})),e}())),l.a.createElement(R.a,null,l.a.createElement(Y.a,{onClick:o,color:"primary"},"Cancel"),l.a.createElement(Y.a,{onClick:i,color:"primary"},"Subscribe"))))}))},_=a(337),$=a(333),ee=Object(O.a)((function(e){return Object(d.a)({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},paper2:{display:"flex",flexDirection:"column",overflow:"auto",maxHeight:500},submit:{margin:e.spacing(3,0,2)},form:{width:"100%",marginTop:e.spacing(1)}},"submit",{margin:e.spacing(3,0,2)})}));function te(e){return l.a.createElement(B.a,Object.assign({elevation:6,variant:"filled"},e))}var ae=l.a.forwardRef((function(e,t){return l.a.createElement($.a,Object.assign({direction:"up",ref:t},e))})),ne=function(){var e=ee(),t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],i=a[1],c=function(e){i(e.target.value)};return l.a.createElement(ue.Consumer,null,(function(t){t.handleRoute;return l.a.createElement("div",{id:"ExtModal"},l.a.createElement(A.a,null),l.a.createElement(E.Consumer,null,(function(t){t.lastAction;var a=t.PauseTracking,n=t.stopTracking,i=t.openSlideDialog,r=(t.setOpenSlideDialog,t.handleClickOpenSlideDialog),m=t.handleCloseSlideDialog,s=(t.handleopenLoading,t.handlecloseLoading,t.openLoading,t.openEditSnack),u=t.handleCloseEditSnack;return l.a.createElement("div",{className:e.paper,id:"ExtModal"},l.a.createElement(v.a,{component:"h3",variant:"h5"},"Tracking session started"),l.a.createElement("br",null),l.a.createElement(F.a,{orientation:"left"},"Actions :"),l.a.createElement(b.a,{id:"ExtModal",variant:"contained",color:"primary",onClick:function(){return a()}},"Pause Tracking"),l.a.createElement("br",null),l.a.createElement(b.a,{id:"ExtModal",variant:"contained",color:"primary",onClick:function(){return r()}},"Stop tracking"),l.a.createElement(H.a,{open:i,TransitionComponent:ae,keepMounted:!0,onClose:m,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},l.a.createElement(K.a,{id:"alert-dialog-slide-title"},"Tracking Stopped"),l.a.createElement(U.a,{id:"ExtModal"},l.a.createElement(Q.a,{id:"alert-dialog-slide-description"},"Tracking Completed, Do you want to open the specifications file ?")),l.a.createElement(R.a,null,l.a.createElement(b.a,{onClick:function(){return n(!0)},color:"primary",id:"ExtModal"},"Open"),l.a.createElement(b.a,{onClick:function(){return n(!1)},color:"primary",id:"ExtModal"},"Skip"))),l.a.createElement("br",null),null!=localStorage.getItem("ActionsList")?l.a.createElement(F.a,{orientation:"left"},"Tracked Actions : ",JSON.parse(localStorage.getItem("ActionsList")).length):l.a.createElement(l.a.Fragment,null),null!=localStorage.getItem("ActionsList")?l.a.createElement("div",{className:e.paper2,id:"ExtModal"},l.a.createElement(_.a,{display:"flex",justifyContent:"center",m:1,p:1},l.a.createElement(_.a,{p:1},l.a.createElement(k.a,{id:"standard-basic",label:"Search for an action",onChange:c,value:o}))),l.a.createElement(I.a,{id:"ExtModal"},l.a.createElement(z.a,{open:s,autoHideDuration:6e3,onClose:u},l.a.createElement(te,{onClose:u,severity:"success"},"Action edited successfully!")),l.a.createElement(M.a,{gutter:{xs:8,sm:16,md:24,lg:32}},Object.keys(JSON.parse(localStorage.getItem("ActionsList"))).filter((function(e){return JSON.parse(localStorage.getItem("ActionsList"))[e].name.toLowerCase().includes(o.toLowerCase())})).map((function(e){return l.a.createElement(L.a,{className:"gutter-row",span:12},l.a.createElement(Z,{Item:JSON.parse(localStorage.getItem("ActionsList"))[e]}))}))))):l.a.createElement(v.a,{component:"h3",variant:"h5"},"No actions tracked"))})))}))},le=a(287),oe=a(282),ie=a(281),ce=a(345),re=Object(O.a)((function(e){var t;return t={paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},paper2:{display:"flex",flexDirection:"column",overflow:"auto",maxHeight:500},submit:{margin:e.spacing(3,0,2)},form:{width:"100%",marginTop:e.spacing(3),display:"flex",flexDirection:"column",alignItems:"center"}},Object(d.a)(t,"submit",{margin:e.spacing(3,0,2)}),Object(d.a)(t,"paper2",{display:"flex",flexDirection:"column",overflow:"auto",maxHeight:500}),Object(d.a)(t,"formControl",{margin:e.spacing(1),minWidth:120}),t}));var me=function(e){var t=re(),a=JSON.parse(localStorage.getItem("ActionToEdit"));return l.a.createElement(E.Consumer,null,(function(e){var n=e.handleSelectChange,o=e.age,i=e.onConditionDropdownSelected,c=e.condition,r=e.handleNewCondition,m=e.handleNewGroup,s=e.handleNameInput,u=e.handleEditSubmit,d=e.goback;e.handleCloseEditSnack,e.openEditSnack;return l.a.createElement("div",{className:t.paper,id:"ExtModal",style:{width:"100%"}},l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(_.a,{id:"ExtModal",display:"flex",p:1},l.a.createElement(_.a,{flexGrow:1,p:1,id:"ExtModal"},l.a.createElement(ce.a,{onClick:d})),l.a.createElement(_.a,{p:1,fontWeight:"bold",color:"blue",id:"ExtModal"},"Action Edit"))),l.a.createElement(F.a,{orientation:"left"},"General Info"),l.a.createElement("form",{onSubmit:u,className:t.form,id:"ExtModal"},l.a.createElement(k.a,{label:"Action Name",id:"nameInput",name:"nameInput",defaultValue:a.Item.name,onChange:s}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(le.a,{id:"demo-simple-select-label"},"Select Action Type"),"click_selenium"==a.Item.type?l.a.createElement(V.a,{autoFous:!0,onChange:n},l.a.createElement(X.a,{value:"seleniumClick"},"selenium click")):"navigate"==a.Item.type?l.a.createElement(V.a,{autoFocus:!0,onChange:n},l.a.createElement(X.a,{value:"navigateto"},"Navigation")):"FormSubmit"==a.Item.type?l.a.createElement(V.a,{autoFocus:!0,onChange:n},l.a.createElement(X.a,{value:"FormSubmit"},"Form Submit")):l.a.createElement(V.a,{autoFocus:!0,onChange:n},l.a.createElement(X.a,{value:"read"},"Read")),""!=o?l.a.createElement(F.a,{orientation:"left"},"Action Informations"):l.a.createElement("div",{id:"ExtModal"}),""!=o?l.a.createElement("div",{className:t.paper2,id:"ExtModal"},l.a.createElement(I.a,null,l.a.createElement(M.a,{gutter:{xs:8,sm:16,md:24,lg:32}},l.a.createElement(v.a,{component:"h3",variant:"h5"},"Action Edit")),l.a.createElement("br",null),l.a.createElement(ie.a,{className:t.formControl},l.a.createElement(le.a,{id:"demo-simple-select-helper-label"},"Condition"),l.a.createElement(V.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",onChange:i},l.a.createElement(X.a,{value:"false"},"False"),l.a.createElement(X.a,{value:"true"},"True"))),l.a.createElement("br",null),l.a.createElement(ie.a,{className:t.formControl},l.a.createElement(V.a,{autoFocus:!0,onChange:m},JSON.parse(localStorage.getItem("ActionsList")).map((function(e,t,a){return l.a.createElement(X.a,{value:e.name},e.name)}))),l.a.createElement(oe.a,null,"Select Action Group")),"true"==c?l.a.createElement("div",{id:"ExtModal"},l.a.createElement(ie.a,{className:t.formControl},l.a.createElement(V.a,{autoFocus:!0,onChange:r},JSON.parse(localStorage.getItem("ActionsList")).map((function(e){return l.a.createElement(X.a,{value:e.name},e.name)}))),l.a.createElement(oe.a,null,"Select Action Condition")),l.a.createElement(b.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",className:t.submit,id:"ExtBtn"},"Edit Action")):l.a.createElement(b.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",className:t.submit,id:"ExtBtn"},"Edit Action"))):l.a.createElement(l.a.Fragment,null)))}))},se=function(){return l.a.createElement(ue.Consumer,null,(function(e){return l.a.createElement("div",{id:"ExtModal"},l.a.createElement(h.a,{isShown:!0,onCloseComplete:function(){},preventBodyScrolling:!0,id:"ExtModal"},"TrackingIP"==localStorage.getItem("TWroute")?l.a.createElement(N,null):"TrackingSession"==localStorage.getItem("TWroute")?l.a.createElement(ne,{session:localStorage.getItem("TSid")}):"TrackingP"==localStorage.getItem("TWroute")?l.a.createElement(D,{session:localStorage.getItem("TSid")}):"EditAction"==localStorage.getItem("TWroute")?l.a.createElement(me,null):l.a.createElement(C,null)))}))},ue=l.a.createContext(),de=function(){};var ge=function(){var e=localStorage.getItem("TWroute");console.log(e),void 0!=e&&null!=e||(e="Home");var t=Object(n.useReducer)((function(e,t){return Object(c.a)(Object(c.a)({},e),t)}),{route:e}),a=Object(r.a)(t,2),o=a[0],i=a[1];return de=function(e){localStorage.setItem("TWroute",e),i(localStorage.getItem("TWroute"))},l.a.createElement(ue.Provider,{value:{globalRouting:o,setGlobalRouting:i,handleRoute:de}},l.a.createElement(u,null,l.a.createElement(f,null,l.a.createElement(se,null))))};i.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(ge,null)),document.getElementById("modal-window"))}},[[180,1,2]]]);
//# sourceMappingURL=main.06f4010e.chunk.js.map