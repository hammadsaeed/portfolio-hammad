(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),i=a.n(r),l=(a(9),a(3)),o=(a(10),function(e){var t=e.clickCircle,a=e.index,n=e.circleImg,r=e.currentSelection;return c.a.createElement("div",{className:"Circle-div ".concat(a===r?"circle-div-selected":""),onClick:function(){return t(a)}},n.length?c.a.createElement("img",{src:n,alt:"project-image",className:"project-image"}):c.a.createElement(c.a.Fragment,null))}),m=[{id:0,name:"none",backgroundColor:"#4f8a8b",titleImgSrc:""},{id:1,name:"yeelight",backgroundColor:"#4f8a8b",titleImgSrc:"/assets/bulb-image.png"},{id:2,name:"yeelight",backgroundColor:"#4f8a8b",titleImgSrc:"/assets/bulb-image.png"},{id:3,name:"tasker",backgroundColor:"blue",titleImgSrc:""}],s=function(){document.getElementById("canvasElement");return c.a.createElement("div",{className:"main-container"},c.a.createElement("img",{src:"/assets/rotated-right-arrow.svg",id:"rotated-arrow-main"}),c.a.createElement("div",{className:"name-title"},c.a.createElement("h1",{className:"greeting-title"}," Hi,"),c.a.createElement("h1",{className:"main-body-name"}," MY NAME IS HAMMAD")),c.a.createElement("img",{src:"/assets/right-up-arrow.png",id:"up-arrow-main"}),c.a.createElement("div",{className:"main-text-container"},c.a.createElement("h1",{className:"main-text-projects"},"Click the icons to view my projects")))},u="/assets/MyImage-no-bg.png";var g=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],r=t[1],i=(Object(n.useRef)(m[0]),function(e){r(e)});return c.a.createElement("div",{className:"App",style:{backgroundColor:"".concat(m[0].backgroundColor),transition:"backgroundColor 5s"}},c.a.createElement("img",{src:u,className:"my-picture border-picture"}),c.a.createElement("img",{src:u,className:"my-picture blur2"}),c.a.createElement("img",{src:u,className:"my-picture blur1"}),c.a.createElement("img",{src:u,className:"my-picture"}),a?c.a.createElement("div",null):c.a.createElement(s,null),c.a.createElement("div",{className:"Center-container",style:{top:"".concat(a?"10%":"60%"),transition:"top 1s"}},m.map((function(e,t){if(t)return c.a.createElement("div",{style:{padding:"2%"},key:"key-".concat(t)},c.a.createElement(o,{circleImg:e.titleImgSrc,clickCircle:i,index:t,currentSelection:a}))})),a?c.a.createElement("div",{className:"close-emoji",onClick:function(){return i(0)}},"\u2718"):c.a.createElement("div",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.1698be9f.chunk.js.map