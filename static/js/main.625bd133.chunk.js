(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(4),s=n(5),l=n(8),b=n(7),r=n(1),o=n.n(r),d=n(6),j=n.n(d),u=n(0),h=function(t){var e=t.tabs,n=t.tablId,c=t.onSelect;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("ul",{className:"Tabs",children:e.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{type:"button",className:j()("button",{active:n.id===t.id}),onClick:function(){n.id!==t.id&&c(t)},children:t.title})},t.id)}))})})},O=(n(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),m=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={selectedTab:O[0]},t.handleSelect=function(e){t.state.selectedTab.id!==e.id&&t.setState({selectedTab:e})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Selected tab is: ".concat(t.title)}),Object(u.jsx)(h,{tabs:O,tablId:t,onSelect:this.handleSelect}),Object(u.jsx)("div",{className:"content",children:t.content})]})}}]),n}(o.a.Component),p=m;a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.625bd133.chunk.js.map