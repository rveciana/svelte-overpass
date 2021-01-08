var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let g,m;function v(){if(void 0===g){g=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){g=!0}}return g}function w(t){m=t}function b(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const $=[],y=[],M=[],_=[],x=Promise.resolve();let k=!1;function E(t){M.push(t)}let T=!1;const P=new Set;function A(){if(!T){T=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];w(e),O(e.$$)}for(w(null),$.length=0;y.length;)y.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];P.has(e)||(P.add(e),e())}M.length=0}while($.length);for(;_.length;)_.pop()();k=!1,T=!1,P.clear()}}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const S=new Set;function I(t,e){-1===t.$$.dirty[0]&&($.push(t),k||(k=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(i,a,s,c,u,d,h=[-1]){const f=m;w(i);const p=a.props||{},g=i.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:h,skip_bound:!1};let v=!1;if(g.ctx=s?s(i,p,((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&u(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),v&&I(i,t)),e})):[],g.update(),v=!0,o(g.before_update),g.fragment=!!c&&c(g.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();a.intro&&((b=i.$$.fragment)&&b.i&&(S.delete(b),b.i($))),function(t,n,i){const{fragment:a,on_mount:s,on_destroy:l,after_update:c}=t.$$;a&&a.m(n,i),E((()=>{const n=s.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(E)}(i,a.target,a.anchor),A()}var b,$;w(f)}var W=.9996,C=.00669438,L=Math.pow(C,2),R=Math.pow(C,3),z=C/(1-C),j=1-C/4-3*L/64-5*R/256,q=3*C/8+3*L/32+45*R/1024,H=15*L/256+45*R/1024,B=35*R/3072,X=6378137,F="CDEFGHJKLMNPQRSTUVWXX";function G(t,e,n){if(t>84||t<-80)throw new RangeError("latitude out of range (must be between 80 deg S and 84 deg N)");if(e>180||e<-180)throw new RangeError("longitude out of range (must be between 180 deg W and 180 deg E)");var o,r=D(t),i=Math.sin(r),a=Math.cos(r),s=Math.tan(r),l=Math.pow(s,2),c=Math.pow(s,4);o=void 0===n?function(t,e){if(56<=t&&t<64&&3<=e&&e<12)return 32;if(72<=t&&t<=84&&e>=0){if(e<9)return 31;if(e<21)return 33;if(e<33)return 35;if(e<42)return 37}return Math.floor((e+180)/6)+1}(t,e):n;var u=function(t){return-80<=t&&t<=84?F[Math.floor((t+80)/8)]:null}(t),d=D(e),h=D(function(t){return 6*(t-1)-180+3}(o)),f=X/Math.sqrt(1-C*i*i),p=z*a*a,g=a*(d-h),m=Math.pow(g,2),v=Math.pow(g,3),w=Math.pow(g,4),b=Math.pow(g,5),$=Math.pow(g,6),y=X*(j*r-q*Math.sin(2*r)+H*Math.sin(4*r)-B*Math.sin(6*r)),M=W*(y+f*s*(m/2+w/24*(5-l+9*p+4*p*p)+$/720*(61-58*l+c+600*p-330*z)));return t<0&&(M+=1e7),{easting:W*f*(g+v/6*(1-l+p)+b/120*(5-18*l+c+72*p-58*z))+5e5,northing:M,zoneNum:o,zoneLetter:u}}function D(t){return t*Math.PI/180}const J=(t,e,n,o)=>{var r,i;if(0===e)return;t.width=e,t.height=e;const a=t.getContext("2d");K(a,o),a.save(),a.shadowOffsetX=0,a.shadowOffsetY=0,a.shadowColor="black",a.shadowBlur=4,a.strokeStyle="gray",a.fillStyle="blanchedalmond",a.textAlign="center",a.lineWidth=4,a.translate(a.canvas.width/2,a.canvas.height/2);const s=(null===(r=n[0])||void 0===r?void 0:r.dist)||0,l=(null===(i=n[9])||void 0===i?void 0:i.dist)||0;n.forEach(((t,e)=>{if(e<=10){const e=-Math.PI/2+Math.PI*(t.dir-o)/180,r=(n=t.dist,a.canvas.width/4+a.canvas.width/5*(n-s)/(l-s));a.strokeText(t.name,r*Math.cos(e),r*Math.sin(e)),a.fillText(t.name,r*Math.cos(e),r*Math.sin(e))}var n})),a.rotate(Math.PI/2),a.restore()},K=(t,e)=>{const n=t.canvas.width/2,o=t.canvas.height/2;t.save(),t.translate(n,o),t.rotate(-Math.PI*e/180),t.font="14px Arial";const r=["N","E","S","W"];for(let e=0;e<4;e++)t.beginPath(),t.moveTo(0,0),t.lineTo(0,-o/2),t.lineTo(-n/12,-o/12),t.lineTo(0,0),t.fill(),t.beginPath(),t.moveTo(0,0),t.lineTo(0,-o/2),t.lineTo(n/12,-o/12),t.lineTo(0,0),t.stroke(),t.fillText(r[e],-5,-5-o/2),t.rotate(Math.PI/2);t.restore()};function Q(t,e,n){const o=t.slice();return o[17]=e[n],o}function U(e){let n,o,r,i,h=e[17].label+"";return{c(){n=c("option"),o=u(h),r=d(),n.__value=i=e[17].value,n.value=n.__value},m(t,e){s(t,n,e),a(n,o),a(n,r)},p:t,d(t){t&&l(n)}}}function V(e){let n,o,r,i,u,g,m,w,b,$=e[4],y=[];for(let t=0;t<$.length;t+=1)y[t]=U(Q(e,$,t));return{c(){n=c("main"),o=c("canvas"),r=d(),i=c("select");for(let t=0;t<y.length;t+=1)y[t].c();u=d(),g=c("div"),g.innerHTML='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',void 0===e[3]&&E((()=>e[13].call(i))),f(g,"class","copyright svelte-ck44os"),f(n,"class","svelte-ck44os"),E((()=>e[14].call(n)))},m(t,d){s(t,n,d),a(n,o),e[12](o),a(n,r),a(n,i);for(let t=0;t<y.length;t+=1)y[t].m(i,null);p(i,e[3]),a(n,u),a(n,g),m=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=c("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=v();let r;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=h(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=h(n.contentWindow,"resize",e)}),a(t,n),()=>{(o||r&&n.contentWindow)&&r(),l(n)}}(n,e[14].bind(n)),w||(b=h(i,"change",e[13]),w=!0)},p(t,[e]){if(16&e){let n;for($=t[4],n=0;n<$.length;n+=1){const o=Q(t,$,n);y[n]?y[n].p(o,e):(y[n]=U(o),y[n].c(),y[n].m(i,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=$.length}24&e&&p(i,t[3])},i:t,o:t,d(t){t&&l(n),e[12](null),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(y,t),m(),w=!1,b()}}}function Y(t,e,n){let o,r,i=0,a=0,s=0,l=0,c=0,u=0,d=0,h=[],f="bar";const p=[{value:"bar",label:"Bar"},{value:"restaurant",label:"Restaurant"},{value:"school",label:"School"},{value:"place_of_worship",label:"Place of Worship"}];b((()=>{navigator.geolocation?navigator.geolocation.watchPosition(m,(()=>{console.log("ERROR")}),{enableHighAccuracy:!1,timeout:6e4,maximumAge:0}):alert("NO GEOLOCATION"),window.addEventListener("deviceorientationabsolute",g)}));const g=t=>{var e,o;if(!t.alpha)return void n(9,d=0);const r=(null!==(o=null===(e=null===screen||void 0===screen?void 0:screen.orientation)||void 0===e?void 0:e.type)&&void 0!==o?o:"portrait-primary").split("-"),i="portrait"===r[0]?0:90,a="secondary"===r[1]?i-180:i;n(9,d=a-t.alpha)},m=t=>{n(5,s=t.coords.longitude),n(6,l=t.coords.latitude),n(7,({easting:c,northing:u}=G(l,s)),c,n(8,u))};return t.$$.update=()=>{if(488&t.$$.dirty){fetch(`https://overpass.kumi.systems/api/interpreter?data=[out:json][timeout:25000];node["amenity"="${f}"](around:1000,${l},${s});out body;>;out skel qt;`).then((t=>t.json())).then((t=>{n(10,h=t.elements.map((t=>{const{easting:e,northing:n}=G(t.lat,t.lon),o=Math.sqrt(Math.pow(e-c,2)+Math.pow(n-u,2)),r=180/Math.PI*Math.atan2((e-c)/o,(n-u)/o);return{name:t.tags.name,lng:t.lon,lat:t.lat,dist:o,dir:r}})).filter((t=>void 0!==t.name)).sort(((t,e)=>t.dist-e.dist)))})).catch((t=>{console.error("There has been a problem with the overpass API:",t)}))}3&t.$$.dirty&&n(11,o=Math.min(a>i?i:a,500)),3588&t.$$.dirty&&J(r,o,h,d)},[i,a,r,f,p,s,l,c,u,d,h,o,function(t){y[t?"unshift":"push"]((()=>{r=t,n(2,r)}))},function(){f=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(3,f),n(4,p)},function(){a=this.clientWidth,i=this.clientHeight,n(1,a),n(0,i)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,Y,V,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
