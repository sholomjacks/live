(this.webpackJsonphackers=this.webpackJsonphackers||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},39:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(28),c=a.n(r),l=a(9),s=a(10),i=a(11),g=a(12),u=a(30),m=a(7),d=function(e){Object(g.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null)}}]),a}(n.Component),h=a(15),p=a.n(h),k=a(29),f=(a(39),"https://pure-garden-36017.herokuapp.com"),v=a(40),b={href:window.location.href},O=function(e){Object(g.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={welcomeMessage:null,logged_in:!1,validating:!0},e.componentDidMount=Object(k.a)(p.a.mark((function t(){var a,n,o,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("false"===localStorage.getItem("logged_in")||!localStorage.getItem("token")){t.next=7;break}return t.next=3,v.post("".concat(f,"/username"),{token:localStorage.getItem("token")});case 3:a=t.sent,e.setState({welcomeMessage:"Welcome ".concat(a.data.username," to PADAH - Hackers!"),logged_in:"local storage yes",validating:!1}),t.next=18;break;case 7:return e.setState({validating:!0}),t.next=10,v.post("".concat(f,"/beginner-token"),b).catch((function(e){return console.warn("IDK",e)}));case 10:return n=t.sent,console.log("token: "+n.data.token),localStorage.setItem("token",n.data.token),t.next=15,v.post("".concat(f,"/username"),{token:localStorage.getItem("token")},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 15:o=t.sent,console.log("Logged in: ".concat(o.data.username)),o.data.username?(r=o.data.username,c="Welcome ".concat(r," to PADAH - Hackers!"),e.setState({logged_in:!0}),e.setState({welcomeMessage:c}),e.setState({validating:!1}),localStorage.setItem("logged_in",!0)):!1!==o.data.message&&void 0!==o.data.message||(e.setState({logged_in:!1,validating:!1}),localStorage.setItem("logged_in",!1));case 18:case"end":return t.stop()}}),t)}))),e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.validating?o.a.createElement("div",{class:"center"},o.a.createElement("div",{class:"loader"})):this.state.logged_in?this.state.welcomeMessage&&this.state.logged_in||"local storage yes"===this.state.logged_in?o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,this.state.welcomeMessage)):null:o.a.createElement(o.a.Fragment,null,"NOT LOGGED IN"))}}]),a}(n.Component),w=function(e){Object(g.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",component:O}),o.a.createElement(m.a,{component:d})))}}]),a}(o.a.Component);c.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ac8eaad0.chunk.js.map