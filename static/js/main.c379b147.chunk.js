(this["webpackJsonpsiligong-hacktoberfest-2019"]=this["webpackJsonpsiligong-hacktoberfest-2019"]||[]).push([[0],{11:function(e,n,t){e.exports=t.p+"static/media/hacktoberfest.00a9aabe.svg"},12:function(e,n,t){e.exports=t.p+"static/media/siligong.7c63af93.png"},17:function(e,n,t){e.exports=t(27)},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),i=t.n(o),c=t(13),l=t(1),u={theme:{color:"#D5EBF2",background:"#152347",link:"#FFF34E",linkHover:"#D110B8",spacing:"1rem"}},m={theme:{color:"#152347",background:"#D5EBF2",link:"#4B57EA",linkHover:"#69BE5A",spacing:"1rem"}},s=function(e){return"dark"===e?u.theme:m.theme},h=t(2),f=t(8),g=t.n(f);function d(){var e=Object(h.a)(["\n  ",";\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    align-items: center;\n    background: ",";\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    min-height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    transition: all 0.25s linear;\n  }\n"]);return d=function(){return e},e}var b=Object(l.createGlobalStyle)(d(),g.a,(function(e){return e.theme.background}),(function(e){return e.theme.color}));function p(){var e=Object(h.a)(["\n  padding: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media (min-width: 720px) {\n    flex-direction: row;\n  }\n\n  a {\n    display: block;\n    margin: ",";\n\n    &:hover {\n      img {\n        transform: scale(1.1) rotate(15deg);\n      }\n    }\n  }\n\n  img {\n    height: 20rem;\n    width: 20rem;\n    max-width: 100%;\n    transition: 0.3s;\n  }\n"]);return p=function(){return e},e}var v=l.default.header(p(),(function(e){return e.theme.spacing}),(function(e){return e.theme.spacing}));function k(){var e=Object(h.a)(["\n  width: 2vw;\n  border: 0;\n"]);return k=function(){return e},e}var w=l.default.img(k()),E=function(e){var n=e.title,t=e.link,r=e.image,o=e.hero;return a.a.createElement("a",{href:t,title:n,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(w,{src:r,alt:n,hero:o}))},j=t(11),y=t.n(j),O=t(12),x=t.n(O),S=function(){return a.a.createElement(v,null,a.a.createElement(E,{title:"Hacktoberfest",image:y.a,link:"https://hacktoberfest.digitalocean.com",hero:!0}),a.a.createElement(E,{title:"Siligong Valley",image:x.a,link:"https://www.siligongvalley.com",hero:!0}))};function B(){var e=Object(h.a)(["\n  padding: ",";\n  width: 100%;\n  max-width: 1280;\n  margin: 0 auto;\n"]);return B=function(){return e},e}var F=l.default.section(B(),(function(e){return e.theme.spacing})),H=t(16);function A(){var e=Object(h.a)(["\n  color: ",";\n  transition: 0.3s;\n\n  &:hover {\n    color: ","\n  }\n"]);return A=function(){return e},e}var z=l.default.a(A(),(function(e){return e.theme.link}),(function(e){return e.theme.linkHover})),I=function(e){var n=e.href,t=e.children,r=Object(H.a)(e,["href","children"]);return a.a.createElement(z,Object.assign({href:n,target:"_blank",rel:"noopener noreferrer"},r),t)};function W(){var e=Object(h.a)(["\n  text-align: center;\n"]);return W=function(){return e},e}var D=Object(l.default)(F)(W()),M=function(){return a.a.createElement(D,null,a.a.createElement("h1",null,"Welcome to"," ",a.a.createElement(I,{href:"https://www.siligongvalley.com"},"SiligongValley")," ",a.a.createElement(I,{href:"https://hacktoberfest.digitalocean.com"},"#Hacktoberfest")," ","2019"))},T=function(){return a.a.createElement(F,null,a.a.createElement("h2",null,"Sponsors"),a.a.createElement("p",null,"A big thank you to ",a.a.createElement(I,{href:"https://www.accelo.com/"},"Accelo")," for having us in their new Wollongong office and supplying pizza and drinks!"))};function J(){var e=Object(h.a)(["0 1em 0 0"]);return J=function(){return e},e}function V(){var e=Object(h.a)(["0 0 0 1em"]);return V=function(){return e},e}function _(){var e=Object(h.a)(["\n  display: block;\n  border: 2px solid ",";\n  background: ",";\n  border-radius: 0.75em;\n  text-decoration: none;\n  position: absolute;\n  top: ",";\n  right: ",";\n  cursor: pointer;\n  font-size: 2rem;\n  width: 2.5em;\n  padding: ",";\n  transition: 0.3s;\n"]);return _=function(){return e},e}var C=l.default.button(_(),(function(e){return e.theme.color}),(function(e){return e.theme.background}),(function(e){return e.theme.spacing}),(function(e){return e.theme.spacing}),(function(e){return"light theme"===e.title?Object(l.css)(V()):Object(l.css)(J())})),G={light:"\ud83d\ude0e",dark:"\ud83c\udf1a"},P=function(e){var n=e.theme,t=e.toggleTheme;return a.a.createElement(C,{onClick:t,title:"".concat(n," theme")},G[n])},R=function(){var e=window.localStorage.getItem("theme"),n=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";"light"!==e&&"dark"!==e||(n=e);var t=Object(r.useState)(n),o=Object(c.a)(t,2),i=o[0],u=o[1];return a.a.createElement(l.ThemeProvider,{theme:s(i)},a.a.createElement("div",null,a.a.createElement(P,{theme:i,toggleTheme:function(){var e="light"===i?"dark":"light";u(e),window.localStorage.setItem("theme",e)}}),a.a.createElement(b,null),a.a.createElement(S,null),a.a.createElement(M,null),a.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.c379b147.chunk.js.map