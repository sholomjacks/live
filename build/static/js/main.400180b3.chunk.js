(this.webpackJsonpcodecademy=this.webpackJsonpcodecademy||[]).push([[0],{117:function(e,t,a){},123:function(e,t,a){e.exports=a(234)},131:function(e,t){},133:function(e,t){},164:function(e,t){},165:function(e,t){},224:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},229:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(119),c=a.n(l),o=a(4),i=a(5),s=a(7),u=a(6),m=a(8),d=a(120),h=a(24),b=[{username:"sholom",password:"jacks"},{username:"mastermind",password:"emmer"},{username:"mendel",password:"jacks"},{username:"MENDEL",password:"ZARCHI"}],p=a(69),E=a(207);function f(){var e=localStorage.getItem("hash");!0===p.compare("bcrypt-connection-secured",e)&&(window.location="/cmds")}var w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={cmd:"",go:!1,track:!1,usernamet:"",addAccount:!1,usernamea:"",passworda:"",view:"password"},a.runcmd=function(e){"Add Account"===e&&a.setState({addAccount:!0})},a.gousername=function(e){var t=localStorage.getItem("hash");!0===p.compareSync("bcrypt-connection-secured",t)&&(window.location="/admin/usernames")},a.show=function(){"password"===a.state.view?a.setState({view:"text"}):"text"===a.state.view&&a.setState({view:"password"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=E.get("padah-backend.herokuapp.com/valid-users").catch((function(){console.error()}));return alert(t),!0===this.state.addAccount?r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,r.a.createElement("input",{type:"text",required:!0,value:this.state.usernamea,onChange:function(t){return e.setState({usernamea:t.target.value})}}),r.a.createElement("div",{class:"label-text"},"New username")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:this.state.view,required:!0,value:this.state.passworda,onChange:function(t){return e.setState({passworda:t.target.value})}}),r.a.createElement("div",{className:"label-text"},"New password")),r.a.createElement("img",{id:"fontlc",src:"https://cdn2.iconfinder.com/data/icons/flaticons-solid/18/eye-1-512.png",alt:"Show Password",width:"50",onClick:this.show}),r.a.createElement("button",{onClick:function(){return e.gousername(e.state.usernamet)}},"Add account")):r.a.createElement("div",null,r.a.createElement("title",null,"Admin Commands"),r.a.createElement("label",null,r.a.createElement("input",{type:"text",required:!0,value:this.state.cmd,onChange:function(t){e.setState({cmd:t.target.value}),e.state.cmd.toUpperCase()}}),r.a.createElement("div",{class:"label-text"},"Command")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:function(){return e.runcmd(e.state.cmd)}},"Run"),r.a.createElement("button",{onClick:f},"Commands"))}}]),t}(r.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"first"},"Commands:"),r.a.createElement("h2",{id:"firstl"},r.a.createElement("br",null),r.a.createElement("br",null),"AddAcount: Will ask for username and password wich will become a new account.",r.a.createElement("br",null),r.a.createElement("br",null),"DeleteAccount: Will ask for account name and then delete that account.",r.a.createElement("br",null),r.a.createElement("br",null),"Track: Will ask for the persons username and then track what he is doing."))}}]),t}(r.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Thank you for your submission")}}]),t}(r.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Contact")}}]),t}(r.a.Component);function y(){!0===document.getElementById("one").checked&&localStorage.setItem("intro","no"),window.location="/home"}var O,k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={href:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){"no"===(localStorage.getItem("intro")||"")&&(window.location="/home")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello!")," ",r.a.createElement("br",null)," ",r.a.createElement("h2",null,"welcome to the secret world of PADAH (Professional Agency of Detectives And Hackers).",r.a.createElement("br",null)," Now you will be directed to your Home Page.",r.a.createElement("br",null)),r.a.createElement("section",{className:"Show-again"},r.a.createElement("input",{id:"one",type:"checkbox"}),r.a.createElement("label",{for:"one"},"Don't Show Again")),r.a.createElement("section",{className:"button"},r.a.createElement("button",{onClick:y},"Go To Home")))}}]),t}(r.a.Component),C=a(240),S=a(237),x=a(236),A=a(239),I=a(238),q=(a(224),a(117),a(225),a(226),a(69)),N=new(a(227))("hello"),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",router:!1,view:"password"},a.show=function(){"password"===a.state.view?a.setState({view:"text"}):a.setState({view:"password"})},a.login=function(e,t){0!==Object(C.a)(e)&&0!==Object(C.a)(t)&&(a.is_valid(e,t)?(a.setState({router:!0}),O=q.hashSync("bcrypt-connection-secured"),localStorage.setItem("hash",O),window.location="/intro"):alert("The login is incorrect."))},a.is_valid=function(e,t){return Object(S.a)(Object(x.a)(0),C.a,Object(A.a)(Object(I.a)("password",t)),Object(A.a)(Object(I.a)("username",e)))(b)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=N.encrypt(b);localStorage.setItem("users",e);var t=localStorage.getItem("hash")||"";if(!0===q.compareSync("bcrypt-connection-secured",t)){var a=localStorage.getItem("intro");window.location="no"!==a?"/intro":"/home"}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{class:"text-box"},r.a.createElement("a",{href:"/signup",class:"btn btn-white btn-animate"},"Sign Up")),r.a.createElement("center",null,r.a.createElement("section",{className:"overlay"},r.a.createElement("h1",{id:"first"},"Sign In"),r.a.createElement("label",null,r.a.createElement("input",{type:"text",required:!0,onChange:function(t){e.setState({username:t.target.value})}}),r.a.createElement("div",{class:"label-text"},"Username")),r.a.createElement("label",null,r.a.createElement("input",{type:this.state.view,required:!0,onChange:function(t){e.setState({password:t.target.value})}}),r.a.createElement("div",{class:"label-text"},"Password")),r.a.createElement("img",{id:"fontlc",src:"https://cdn2.iconfinder.com/data/icons/flaticons-solid/18/eye-1-512.png",alt:"Show Password",width:"50",onClick:this.show}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.login(e.state.username,e.state.password)}},"Submit"))))}}]),t}(r.a.Component),U=a(228),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",first_name:"",last_name:"",view:"password",email:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=U.encode("first-name: ".concat(this.state.first_name));if(""!==this.state.first_name&&""!==this.state.last_name){alert(t);var a=U.decode(t);alert(a)}return r.a.createElement("center",null,r.a.createElement("h1",{id:"first"},"Sign Up"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"text",required:!0,onChange:function(t){e.setState({username:t.target.value})}}),r.a.createElement("div",{class:"label-text"},"Username")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:this.state.view,required:!0,onChange:function(t){e.setState({password:t.target.value})}}),r.a.createElement("div",{class:"label-text"},"Password")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"text",required:!0,onChange:function(t){e.setState({first_name:t.target.value})}}),r.a.createElement("div",{class:"label-text"},"First Name")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"text",required:!0,onChange:function(t){e.setState({last_name:t.target.value})}}),r.a.createElement("div",{class:"label-text"},"Last Name")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"email",required:!0,onChange:function(t){e.setState({email:t.target.value})}}),r.a.createElement("div",{class:"label-text"},"E-mail Address")),r.a.createElement("h1",null,"Please Read Before Signing Up"),r.a.createElement("p",null,r.a.createElement("br",null),"  You will not forsure get an account.",r.a.createElement("br",null),"  This form will be sent to the team of developers and",r.a.createElement("br",null),"  we will consider giving you an account.",r.a.createElement("br",null),"  Thank you for visiting,",r.a.createElement("br",null),"  Sholom Jacks, chief of development."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"/signup/confirmed/submission-id=".concat(t),class:"btn btn-white btn-animate"},"Sign Up"))}}]),t}(r.a.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Unavailable"),r.a.createElement("h2",null,"You do not have access to the usernames.",r.a.createElement("br",null)," You must figure the usernames out yourself"))}}]),t}(r.a.Component);a(229);function H(e){null!==localStorage.getItem("hash")&&(window.location=e)}var T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome, User!"),r.a.createElement("h2",null,"Commands"),r.a.createElement("img",{id:"firstlc",src:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/terminal-512.png",alt:"Commands",height:"50",onClick:function(){return H("/admin")}}),r.a.createElement("h2",null,"Games"),r.a.createElement("img",{id:"firstlc",src:"https://www.vippng.com/png/full/355-3554420_gamer-profile-png-icon-font-awesome-game-icon.png",alt:"Games",height:"50",onClick:function(){return H("/games")}}))}}]),t}(r.a.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Games"),r.a.createElement("br",null),r.a.createElement("h2",null,"Games will be coming soon....",r.a.createElement("br",null),"for now you can join roblox"),r.a.createElement("a",{href:"https://www.roblox.com"},"here!"))}}]),t}(r.a.Component),G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/home",component:T}),r.a.createElement(h.a,{exact:!0,path:"/intro",component:k}),r.a.createElement(h.a,{exact:!0,path:"/contact",component:j}),r.a.createElement(h.a,{exact:!0,path:"/",component:_}),r.a.createElement(h.a,{exact:!0,path:"/admin",component:w}),r.a.createElement(h.a,{exact:!0,path:"/cmds",component:g}),r.a.createElement(h.a,{exact:!0,path:"/admin/usernames",component:D}),r.a.createElement(h.a,{exact:!0,path:"/signup",component:P}),r.a.createElement(h.a,{path:"/signup/confirmed",component:v}),r.a.createElement(h.a,{exact:!0,path:"/games",component:F}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.400180b3.chunk.js.map