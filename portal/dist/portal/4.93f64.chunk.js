(window.webpackJsonpportal_name_=window.webpackJsonpportal_name_||[]).push([[4],{132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setTest=function(e){return{type:"SETTEST",payload:e}}},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(135)),u=o(n(145)),l=n(14);o(n(148));function o(e){return e&&e.__esModule?e:{default:e}}var r=(new l.SpaAssyRegister).getRouters(),s=[];(0,u.default)(r).map((function(e){s.push.apply(s,(0,a.default)(r[e]))}));var c=[].concat(s);t.default=c},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(0,n(14).AsyncComponent)(),u=[{path:"/",exact:!0,component:a((function(){return n.e(5).then(n.t.bind(null,149,7))}))},{path:"/demoTwo",component:a((function(){return n.e(6).then(n.t.bind(null,150,7))}))}];t.default=u},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,u=_(n(90)),l=_(n(93)),o=_(n(94)),r=_(n(95)),s=_(n(102)),c=_(n(0)),d=n(14),f=n(132),i=n(133),p=n(48),m=_(n(134));function _(e){return e&&e.__esModule?e:{default:e}}n(83);var y=(0,d.SpaAssyConnect)("portal")((function(e){return{store:e}}),{setTest:f.setTest})(a=function(e){function t(e){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"homeContent"},c.default.createElement("div",{className:"spaassy"}),c.default.createElement("span",{className:"welcome"},this.props.store.testReducer.str),c.default.createElement("br",null),c.default.createElement(p.Link,{to:"/demoTwo",className:"link"},"DemoTwo"),c.default.createElement("span",{style:{margin:"0 30px"}}),c.default.createElement(p.Link,{to:"/",className:"link"},"DemoOne"),c.default.createElement("span",{style:{marginBottom:"50px",display:"block"}}),(0,i.renderRoutes)(m.default))}}]),t}(c.default.Component))||a;t.default=y}}]);