(this.webpackJsonpfacerecognitionllama=this.webpackJsonpfacerecognitionllama||[]).push([[0],{325:function(e,t,n){},343:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){},349:function(e,t,n){},352:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n.n(a),o=n(30),i=n.n(o),c=n(36),r=n(14),l=n(15),h=n(17),d=n(16),u=(n(113),n(325),n(2)),p=function(e){var t=e.imageUrl,n=e.boxes;return Object(u.jsx)("div",{className:"center ma",children:Object(u.jsxs)("div",{className:"absolute mt2",children:[Object(u.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),n.map((function(e){return Object(u.jsx)("div",{className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}},"box".concat(e.topRow).concat(e.rightCol))}))]})})},m=n(355),b=n(357),j=n(358),g=n(356),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).toggle=function(){a.setState({dropdownOpen:!a.state.dropdownOpen})},a.state={dropdownOpen:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"pa4 tc",children:Object(u.jsxs)(m.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,drop:"left",children:[Object(u.jsx)(b.a,{tag:"span",onClick:this.toggle,"data-toggle":"dropdown","aria-expanded":this.state.dropdownOpen,children:Object(u.jsx)("img",{src:"http://tachyons.io/img/logo.jpg",className:"br-100 h3 w3 dib",alt:"avatar"})}),Object(u.jsxs)(j.a,{className:"b--transparent shadow-5",style:{marginLeft:"-6rem",backgroundColor:"rgba(255, 255, 255, 0.5)"},children:[Object(u.jsx)(g.a,{onClick:function(){return e.props.toggleModal()},children:"View Profile"}),Object(u.jsx)(g.a,{onClick:function(){return e.props.onRouteChange("signout")},children:"Sign Out"})]})]})})}}]),n}(s.a.Component),O=function(e){var t=e.onRouteChange,n=e.isSignedIn,a=e.toggleModal;return n?Object(u.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(u.jsx)(f,{onRouteChange:t,toggleModal:a})}):Object(u.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(u.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(u.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},x=(n(343),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.saveAuthTokenInSessions=function(e){window.sessionStorage.setItem("token",e)},a.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e&&"true"===e.success&&(a.saveAuthTokenInSessions(e.token),fetch("http://localhost:3000/profile/".concat(e.userId),{method:"get",headers:{"Content-Type":"application/json",Authorization:e.token}}).then((function(e){return e.json()})).then((function(e){e&&e.email&&(a.props.loadUser(e),a.props.onRouteChange("home"))})))})).catch(console.log)},a.state={signInEmail:"",signInPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(u.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(u.jsx)("div",{className:"lh-copy mt3",children:Object(u.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(s.a.Component)),w=(n(344),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("".concat(nodeURL,"/register"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e&&"true"===e.success&&(a.saveAuthTokenInSessions(e.token),fetch("".concat(nodeURL,"/profile/").concat(e.userId),{method:"get",headers:{"Content-Type":"application/json",Authorization:e.token}}).then((function(e){return e.json()})).then((function(e){e&&e.email&&(a.props.loadUser(e),a.props.onRouteChange("home"))})))}))},a.state={email:"",password:"",name:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(s.a.Component)),v=n(108),C=n.n(v),N=n.p+"static/media/llama.6d3dacee.png",y=(n(345),function(){return Object(u.jsx)("div",{className:"ma4 mt0",children:Object(u.jsx)(C.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(u.jsx)("div",{className:"Tilt-inner pa3",children:Object(u.jsx)("img",{style:{paddingTop:"5px"},alt:"logo",src:N})})})})}),k=(n(346),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"f3",children:"This Magic Llama will detect faces in your pictures. Git it a try."}),Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(u.jsx)("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),Object(u.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),S=function(e){var t=e.name,n=e.entries;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"white f3",children:"".concat(t,", your current entry count is...")}),Object(u.jsx)("div",{className:"white f1",children:n})]})},I=(n(347),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onProfileUpdate=function(e){fetch("http://localhost:3000/profile/".concat(a.props.user.id),{method:"post",headers:{"Content-Type":"application/json",Authorization:window.sessionStorage.getItem("token")},body:JSON.stringify({formInput:e})}).then((function(t){200!==t.status&&304!==t.status||(a.props.toggleModal(),a.props.loadUser(Object(c.a)(Object(c.a)({},a.props.user),e)))})).catch(console.log)},a.onFormChange=function(e){switch(e.target.name){case"user-name":a.setState({name:e.target.value});break;case"user-age":a.setState({age:e.target.value});break;case"user-pet":a.setState({pet:e.target.value});break;default:return}},a.state={name:a.props.user.name,age:a.props.user.age,pet:a.props.user.pet},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.toggleModal,a=t.user,s=this.state,o=s.name,i=s.age,c=s.pet;return Object(u.jsx)("div",{className:"profile-modal",children:Object(u.jsxs)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white",children:[Object(u.jsxs)("main",{className:"pa4 black-80 w-80",children:[Object(u.jsx)("img",{src:"http://tachyons.io/img/logo.jpg",className:"h3 w3 dib",alt:"avatar"}),Object(u.jsx)("h1",{children:o}),Object(u.jsx)("h4",{children:"Images submitted: ".concat(a.entries)}),Object(u.jsx)("p",{children:"Member since: ".concat(new Date(a.joined).toLocaleDateString())}),Object(u.jsx)("hr",{}),Object(u.jsx)("label",{className:"mt2 fw6",htmlFor:"user-name",children:"Name:"}),Object(u.jsx)("input",{onChange:this.onFormChange,type:"text",name:"user-name",className:"pa2 ba w-100",placeholder:o}),Object(u.jsx)("label",{className:"mt2 fw6",htmlFor:"user-age",children:"Age:"}),Object(u.jsx)("input",{onChange:this.onFormChange,type:"text",name:"user-age",className:"pa2 ba w-100",placeholder:i}),Object(u.jsx)("label",{className:"mt2 fw6",htmlFor:"user-pet",children:"Favourite Pet:"}),Object(u.jsx)("input",{onChange:this.onFormChange,type:"text",name:"user-pet",className:"pa2 ba w-100",placeholder:c}),Object(u.jsxs)("div",{className:"mt4",style:{display:"flex",justifyContent:"space-evenly"},children:[Object(u.jsx)("button",{className:"b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20",onClick:function(){return e.onProfileUpdate({name:o,age:i,pet:c})},children:"Save"}),Object(u.jsx)("button",{className:"b pa2 grow pointer hover-white w-40 bg-light-red b--black-20",onClick:n,children:"Cancel"})]})]}),Object(u.jsx)("div",{className:"modal-close",onClick:n,children:"\xd7"})]})})}}]),n}(a.Component)),R=(n(348),document.getElementById("modal-root")),U=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).el=document.createElement("div"),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){R.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){R.removeChild(this.el)}},{key:"render",value:function(){return i.a.createPortal(this.props.children,this.el)}}]),n}(s.a.Component),P="https://smart-llama-app-node-server.herokuapp.com",T=(n(349),{input:"",imageUrl:"",boxes:[],route:"signin",isProfileOpen:!1,isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:"",age:0,pet:""}}),F=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).loadUser=function(t){console.log(t),e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=document.getElementById("inputimage"),n=Number(t.width),a=Number(t.height);return e.outputs[0].data.regions.map((function(e){var t=e.region_info.bounding_box;return{leftCol:t.left_col*n,topRow:t.top_row*a,rightCol:n-t.right_col*n,bottomRow:a-t.bottom_row*a}}))},e.displayFaceBox=function(t){e.setState({boxes:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("".concat(P,"/imageurl"),{method:"post",headers:{"Content-Type":"application/json",Authorization:window.sessionStorage.getItem("token")},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("".concat(P,"/image"),{method:"put",headers:{"Content-Type":"application/json",Authorization:window.sessionStorage.getItem("token")},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t.entries}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){if("signout"===t)return e.setState(T);"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.toggleModal=function(){e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{isProfileOpen:!e.isProfileOpen})}))},e.state=T,e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.sessionStorage.getItem("token");t&&fetch("".concat(P,"/signin"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:t}}).then((function(e){return e.json()})).then((function(n){n&&n.id&&fetch("".concat(P,"//profile/").concat(n.id),{method:"GET",headers:{"Content-Type":"application/json",Authorization:t}}).then((function(e){return e.json()})).then((function(t){t&&t.email&&(e.loadUser(t),e.onRouteChange("home"))}))})).catch(console.log)}},{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.boxes,o=e.isProfileOpen,i=e.user;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{isSignedIn:t,onRouteChange:this.onRouteChange,toggleModal:this.toggleModal}),o&&Object(u.jsx)(U,{children:Object(u.jsx)(I,{isProfileOpen:o,toggleModal:this.toggleModal,user:i,loadUser:this.loadUser})}),"home"===a?Object(u.jsxs)("div",{children:[Object(u.jsx)(y,{}),Object(u.jsx)(S,{name:this.state.user.name,entries:this.state.user.entries}),Object(u.jsx)(k,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(u.jsx)(p,{boxes:s,imageUrl:n})]}):"signin"===a?Object(u.jsx)(x,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(u.jsx)(w,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component);n(350),n(351),n(352);i.a.render(Object(u.jsx)(F,{}),document.getElementById("root"))}},[[353,1,2]]]);
//# sourceMappingURL=main.2b6bd260.chunk.js.map