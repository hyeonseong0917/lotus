/*! For license information please see 849.js.LICENSE.txt */
"use strict";(self.webpackChunkloatus_web=self.webpackChunkloatus_web||[]).push([[849],{8678:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(7294);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const a=function(t){var e,r,a=(e=(0,n.useState)(t),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],l=a[1];return[i,(0,n.useCallback)((function(t){l(t.target.value)}),[l]),l]}},2543:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(3757),o=r(3564),a=r(1817);const i=function(t,e){return(0,n.ZP)(t&&localStorage.getItem("accessToken")?[t,localStorage.getItem("accessToken")]:null,o.Z,{onErrorRetry:function(t,r,n,o,i){i.retryCount<3&&a.Z.post("http://k8s-default-lotuseks-7a795447b1-1658253416.ap-northeast-2.elb.amazonaws.com/auth/reissue",{},{withCredentials:!1,headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken")),refreshToken:e}}).then((function(t){localStorage.setItem("accessToken",t.data.data)})).catch((function(t){return t}))}})}},2849:(t,e,r)=>{r.r(e),r.d(e,{default:()=>J});var n=r(7294),o=r(2440),a=r(576),i=r(6867),l=r(417),c=r(7109),u=r(9334),s=r(2658),f=r(7122),h=r(2572),m=r(2224),p=r(1007),d=r(6914),y=r(4603),v=r(6645),b=r(2543),g=r(9250),w=r(6182),E=r.n(w),k=r(8753),Z=r(3992),x={};var S,A,O,j=r(932),I=r(1508),L=(0,j.Z)(I.Z)(S||(A=["\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: aliceblue;\n  border: 2px solid #000;\n  boxshadow: 24;\n  p: 4;\n  padding: 5px;\n"],O||(O=A.slice(0)),S=Object.freeze(Object.defineProperties(A,{raw:{value:Object.freeze(O)}})))),T=r(8678),C=r(1817),_=r(5678),P=function(t){var e=t.data;return n.createElement(a.ZP,null,n.createElement(l.Z,null,n.createElement(c.Z,{src:e.User.profileImage||E().url(e.User.email,{d:"retro"})})),n.createElement(u.Z,{primary:e.content,secondary:n.createElement(n.Fragment,null,n.createElement(s.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"},e.User.characterName||e.User.nickname),"- ",n.createElement(k.Z,{date:e.createdAt}))}))};const z=(0,n.memo)(P);var N=r(7484),U=r.n(N);function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const G=function(t){var e,r,a=(e=(0,v.Z)(["refreshToken"]),r=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],i=(0,b.Z)(void 0!==t.url?"http://k8s-default-lotuseks-7a795447b1-1658253416.ap-northeast-2.elb.amazonaws.com"+"/api/channels/".concat(t.url,"/parties/").concat(t.name,"/chats?perPage=20&page=1"):null,a.refreshToken),l=i.data;return i.error,i.mutate,n.createElement(o.Z,{sx:{height:"500px",overflow:"auto"}},null==l?void 0:l.sort((function(t,e){return U()(t.createdAt).diff(e.createdAt)})).map((function(t,e){return n.createElement(z,{data:t,key:e})})))};var M=r(6446),$=r(6723),B=r(270),D=r(6307);function W(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const R=function(t){var e=localStorage.getItem("accessToken"),r=W((0,v.Z)(["refreshToken"]),1)[0],o=W((0,T.Z)(""),3),a=o[0],l=o[1],c=o[2],u=(0,b.Z)(void 0!==t.url?"http://k8s-default-lotuseks-7a795447b1-1658253416.ap-northeast-2.elb.amazonaws.com"+"/api/channels/".concat(t.url,"/parties/").concat(t.name,"/chats?perPage=20&page=1"):null,r.refreshToken),s=(u.data,u.error,u.mutate),f=(0,n.useCallback)((function(r){r.preventDefault(),a?C.Z.post("http://k8s-default-lotuseks-7a795447b1-1658253416.ap-northeast-2.elb.amazonaws.com"+"/api/channels/".concat(t.url,"/parties/").concat(t.name,"/chats"),{content:a},{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){s(),c("")})).catch((function(t){_.Am.error(t.message)})):_.Am.error("메시지 내용이 없습니다")}),[a]);return n.createElement("form",{onSubmit:f},n.createElement(M.Z,{fullWidth:!0,variant:"filled"},n.createElement($.Z,{fullWidth:!0,endAdornment:n.createElement(B.Z,{position:"end"},n.createElement(i.Z,{type:"submit"},n.createElement(D.Z,null))),value:a,onChange:l})))};function q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const J=function(){var t=localStorage.getItem("accessToken"),e=q((0,v.Z)(["refreshToken"]),1)[0],r=(0,b.Z)("/auth/my",e.refreshToken),w=r.data,S=(r.error,r.mutate,(0,g.UO)()),A=q((0,n.useState)(!1),2),O=A[0],j=A[1],P=q((0,n.useState)(!1),2),z=P[0],N=P[1],U=q((0,T.Z)(""),3),F=U[0],M=U[1],$=U[2],B=q((0,n.useState)(""),2),D=(B[0],B[1],(0,b.Z)("http://k8s-default-lotuseks-7a795447b1-1658253416.ap-northeast-2.elb.amazonaws.com"+"/api/channels/".concat(S.url,"/parties"),e.refreshToken)),W=D.data,Y=(D.error,D.mutate),H=(0,b.Z)(w?"http://k8s-default-lotuseks-7a795447b1-1658253416.ap-northeast-2.elb.amazonaws.com"+"/api/channels/".concat(S.url,"/parties/my/").concat(w.userId):null,e.refreshToken),J=H.data,K=(H.error,H.mutate),Q=q(function(t){console.log("rerender",t);var e=(0,n.useCallback)((function(){t&&(x[t].disconnect(),delete x[t])}),[t]);return t?(x[t]||(x[t]=(0,Z.io)("".concat("http://k8s-default-lotuseks-7a795447b1-1658253416.ap-northeast-2.elb.amazonaws.com/api/","/ws-").concat(t),{transports:["websocket"]})),[x[t],e]):[void 0,e]}(S.url),2),V=Q[0],X=Q[1],tt=(0,n.useCallback)((function(){j(!1),N(!1),$("")}),[]),et=(0,n.useCallback)((function(e){e.preventDefault(),F?C.Z.post("http://k8s-default-lotuseks-7a795447b1-1658253416.ap-northeast-2.elb.amazonaws.com"+"/api/channels/".concat(S.url,"/parties"),{name:F},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){K(),Y(),_.Am.success(t.data.message),tt(),$("")})).catch((function(t){_.Am.error(t.message)})):_.Am.error("파티 제목을 입력해 주세요.")}),[F]);return(0,n.useEffect)((function(){J&&w&&V&&V.emit("login",{id:w.userId,parties:J.map((function(t){return t.id}))})}),[V,J,w]),(0,n.useEffect)((function(){return function(){X()}}),[S.url,X]),n.createElement(I.Z,{height:"600px",overflow:"auto"},n.createElement(o.Z,null,null==W?void 0:W.map((function(t,e){return n.createElement(a.ZP,{key:e,alignItems:"flex-start",secondaryAction:n.createElement(i.Z,{edge:"end","aria-label":"comments",onClick:function(){N(!0),$(t.name)}},n.createElement(y.Z,null))},n.createElement(l.Z,null,n.createElement(c.Z,{alt:t.Owner.nickname,src:t.Owner.profileImage||E().url(t.Owner.email)})),n.createElement(u.Z,{primary:n.createElement(n.Fragment,null,t.name),secondary:n.createElement(n.Fragment,null,n.createElement(s.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"},t.Owner.characterName||t.Owner.nickname),n.createElement(s.Z,{variant:"body2"}),n.createElement(s.Z,null,n.createElement(k.Z,{date:t.createdAt})))}))}))),n.createElement(f.Z,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:50,right:50},icon:n.createElement(h.Z,null),onClick:function(){j(!0)}}),n.createElement(m.Z,{open:O,onClose:tt,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},n.createElement(L,{position:"absolute"},n.createElement(s.Z,{id:"modal-modal-title",variant:"h6",component:"h2"},"파티 정보를 입력하세요."),n.createElement("form",{onSubmit:et},n.createElement(p.Z,{id:"standard-basic",label:"파티제목",variant:"standard",value:F,onChange:M}),n.createElement(d.Z,{type:"submit"},"생성하기")))),n.createElement(m.Z,{open:z,onClose:tt,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},n.createElement(L,{position:"absolute",width:"800px",height:"600px"},n.createElement(G,{url:S.url,name:F}),n.createElement(R,{url:S.url,name:F}))))}},3564:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(1817);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),l=new O(o||[]);return n(i,"_invoke",{value:Z(t,r,l)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var m={};function p(){}function d(){}function y(){}var v={};s(v,l,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(j([])));g&&g!==e&&r.call(g,l)&&(v=g);var w=y.prototype=p.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function a(n,i,l,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==o(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){a("next",t,l,c)}),(function(t){a("throw",t,l,c)})):e.resolve(f).then((function(t){s.value=t,l(s)}),(function(t){return a("throw",t,l,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function Z(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=x(i,r);if(l){if(l===m)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:I}}function I(){return{value:void 0,done:!0}}return d.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:d,configurable:!0}),d.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(k.prototype),s(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),s(w,u,"Generator"),s(w,l,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t,e,r,n,o,a,i){try{var l=t[a](i),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}const c=function(){var t,e=(t=a().mark((function t(e){var r,o,l,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=2,r=function(t){if(Array.isArray(t))return t}(a=e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(a,u)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(a,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=r[0],l=r[1],t.next=3,n.Z.get(o,{withCredentials:!1,headers:l?{Authorization:"Bearer ".concat(l)}:{}}).then((function(t){return t.data.data})).catch((function(t){return null}));case 3:if(null!==(c=t.sent)){t.next=7;break}throw new Error("errro");case 7:return t.abrupt("return",c);case 8:case"end":return t.stop()}var a,u}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){l(a,n,o,i,c,"next",t)}function c(t){l(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}()}}]);