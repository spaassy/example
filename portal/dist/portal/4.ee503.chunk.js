(window.webpackJsonpportal_name_=window.webpackJsonpportal_name_||[]).push([[4],{130:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setTest=function(e){return{type:"SETTEST",payload:e}}},132:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(133)),l=u(a(143));function u(e){return e&&e.__esModule?e:{default:e}}var r=(new(a(15).SpaAssyRegister)).getRouters(),s=[];(0,l.default)(r).map((function(e){s.push.apply(s,(0,n.default)(r[e]))}));var o=[].concat(s);t.default=o},80:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=_(a(96)),u=_(a(99)),r=_(a(100)),s=_(a(101)),o=_(a(122)),d=_(a(0)),c=a(15),f=a(130),i=a(131),p=a(46),m=_(a(132));function _(e){return e&&e.__esModule?e:{default:e}}a(81);var y=(0,c.SpaAssyConnect)("portal")((function(e){return{store:e}}),{setTest:f.setTest})(n=function(e){function t(e){return(0,u.default)(this,t),(0,s.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e))}return(0,o.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return d.default.createElement("div",{className:"homeContent"},d.default.createElement("div",{className:"spaassy"}),d.default.createElement("span",{className:"welcome"},this.props.store.testReducer.str),d.default.createElement("br",null),d.default.createElement(p.Link,{to:"/demoTwo",className:"link"},"DemoTwo"),d.default.createElement("span",{style:{margin:"0 30px"}}),d.default.createElement(p.Link,{to:"/",className:"link"},"DemoOne"),d.default.createElement("span",{style:{marginBottom:"50px",display:"block"}}),d.default.createElement("div",{style:{width:"100%",height:"500px",backgroundColor:"#e5e5e5"}},(0,i.renderRoutes)(m.default)))}}]),t}(d.default.Component))||n;t.default=y}}]);