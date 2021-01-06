var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function s(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function l(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let h,f;function p(){if(void 0===h){h=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){h=!0}}return h}function g(t){f=t}function m(t){(function(){if(!f)throw new Error("Function called outside component initialization");return f})().$$.on_mount.push(t)}const w=[],v=[],$=[],b=[],M=Promise.resolve();let y=!1;function x(t){$.push(t)}let _=!1;const E=new Set;function k(){if(!_){_=!0;do{for(let t=0;t<w.length;t+=1){const n=w[t];g(n),T(n.$$)}for(g(null),w.length=0;v.length;)v.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];E.has(n)||(E.add(n),n())}$.length=0}while(w.length);for(;b.length;)b.pop()();y=!1,_=!1,E.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const A=new Set;function P(t,n){-1===t.$$.dirty[0]&&(w.push(t),y||(y=!0,M.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(i,a,c,u,l,d,h=[-1]){const p=f;g(i);const m=a.props||{},w=i.$$={fragment:null,ctx:null,props:d,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:h,skip_bound:!1};let v=!1;if(w.ctx=c?c(i,m,((t,n,...e)=>{const o=e.length?e[0]:n;return w.ctx&&l(w.ctx[t],w.ctx[t]=o)&&(!w.skip_bound&&w.bound[t]&&w.bound[t](o),v&&P(i,t)),n})):[],w.update(),v=!0,o(w.before_update),w.fragment=!!u&&u(w.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);w.fragment&&w.fragment.l(t),t.forEach(s)}else w.fragment&&w.fragment.c();a.intro&&(($=i.$$.fragment)&&$.i&&(A.delete($),$.i(b))),function(t,e,i){const{fragment:a,on_mount:s,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,i),x((()=>{const e=s.map(n).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(x)}(i,a.target,a.anchor),k()}var $,b;g(p)}var O=.9996,I=.00669438,W=Math.pow(I,2),S=Math.pow(I,3),z=I/(1-I),C=1-I/4-3*W/64-5*S/256,R=3*I/8+3*W/32+45*S/1024,L=15*W/256+45*S/1024,j=35*S/3072,q=6378137,D="CDEFGHJKLMNPQRSTUVWXX";function X(t,n,e){if(t>84||t<-80)throw new RangeError("latitude out of range (must be between 80 deg S and 84 deg N)");if(n>180||n<-180)throw new RangeError("longitude out of range (must be between 180 deg W and 180 deg E)");var o,r=B(t),i=Math.sin(r),a=Math.cos(r),s=Math.tan(r),c=Math.pow(s,2),u=Math.pow(s,4);o=void 0===e?function(t,n){if(56<=t&&t<64&&3<=n&&n<12)return 32;if(72<=t&&t<=84&&n>=0){if(n<9)return 31;if(n<21)return 33;if(n<33)return 35;if(n<42)return 37}return Math.floor((n+180)/6)+1}(t,n):e;var l=function(t){return-80<=t&&t<=84?D[Math.floor((t+80)/8)]:null}(t),d=B(n),h=B(function(t){return 6*(t-1)-180+3}(o)),f=q/Math.sqrt(1-I*i*i),p=z*a*a,g=a*(d-h),m=Math.pow(g,2),w=Math.pow(g,3),v=Math.pow(g,4),$=Math.pow(g,5),b=Math.pow(g,6),M=q*(C*r-R*Math.sin(2*r)+L*Math.sin(4*r)-j*Math.sin(6*r)),y=O*(M+f*s*(m/2+v/24*(5-c+9*p+4*p*p)+b/720*(61-58*c+u+600*p-330*z)));return t<0&&(y+=1e7),{easting:O*f*(g+w/6*(1-c+p)+$/120*(5-18*c+u+72*p-58*z))+5e5,northing:y,zoneNum:o,zoneLetter:l}}function B(t){return t*Math.PI/180}const F=(t,n,e,o)=>{var r,i;t.width=n,t.height=n;const a=t.getContext("2d");console.log("DRAW",a.canvas.width),G(a,o),a.save(),a.shadowOffsetX=0,a.shadowOffsetY=0,a.shadowColor="black",a.shadowBlur=4,a.strokeStyle="gray",a.fillStyle="blanchedalmond",a.textAlign="center",a.lineWidth=4,a.translate(a.canvas.width/2,a.canvas.height/2);const s=(null===(r=e[0])||void 0===r?void 0:r.dist)||0,c=(null===(i=e[9])||void 0===i?void 0:i.dist)||0;e.forEach(((t,n)=>{if(n<=10){const n=-Math.PI/2+Math.PI*(t.dir-o)/180,r=(e=t.dist,a.canvas.width/4+a.canvas.width/5*(e-s)/(c-s));a.strokeText(t.name,r*Math.cos(n),r*Math.sin(n)),a.fillText(t.name,r*Math.cos(n),r*Math.sin(n))}var e})),a.rotate(Math.PI/2),a.restore(),console.log("DONE")},G=(t,n)=>{const e=t.canvas.width/2,o=t.canvas.height/2;t.save(),t.translate(e,o),t.rotate(-Math.PI*n/180),t.font="14px Arial";const r=["N","E","S","W"];for(let n=0;n<4;n++)t.beginPath(),t.moveTo(0,0),t.lineTo(0,-o/2),t.lineTo(-e/12,-o/12),t.lineTo(0,0),t.fill(),t.beginPath(),t.moveTo(0,0),t.lineTo(0,-o/2),t.lineTo(e/12,-o/12),t.lineTo(0,0),t.stroke(),t.fillText(r[n],-5,-5-o/2),t.rotate(Math.PI/2);t.restore()};function H(n){let e,o,r,i,h;return{c(){e=c("main"),o=c("canvas"),r=u(" "),i=u(n[0]),d(o,"width",n[0]),d(o,"height",n[0]),d(e,"class","svelte-1p8fxlt"),x((()=>n[5].call(e)))},m(t,u){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,u),a(e,o),n[4](o),a(e,r),a(e,i),h=function(t,n){"static"===getComputedStyle(t).position&&(t.style.position="relative");const e=c("iframe");e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1;const o=p();let r;return o?(e.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=l(window,"message",(t=>{t.source===e.contentWindow&&n()}))):(e.src="about:blank",e.onload=()=>{r=l(e.contentWindow,"resize",n)}),a(t,e),()=>{(o||r&&e.contentWindow)&&r(),s(e)}}(e,n[5].bind(e))},p(t,[n]){1&n&&d(o,"width",t[0]),1&n&&d(o,"height",t[0]),1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(i,t[0])},i:t,o:t,d(t){t&&s(e),n[4](null),h()}}}function J(t,n,e){let o,r=0,i=0,a=0,s=0,c=[];return m((()=>{navigator.geolocation?navigator.geolocation.watchPosition((function(t){i=t.coords.longitude,a=t.coords.latitude;const{easting:n,northing:o}=X(a,i);fetch(`https://overpass.kumi.systems/api/interpreter?data=[out:json][timeout:25000];node["amenity"="bar"](around:1000,${a},${i});out body;>;out skel qt;`).then((t=>t.json())).then((t=>{e(3,c=t.elements.map((t=>{const{easting:e,northing:r,zoneNum:i}=X(t.lat,t.lon),a=Math.sqrt(Math.pow(e-n,2)+Math.pow(r-o,2)),s=180/Math.PI*Math.atan2((e-n)/a,(r-o)/a);return{name:t.tags.name,lng:t.lon,lat:t.lat,dist:a,dir:s}})).filter((t=>void 0!==t.name)).sort(((t,n)=>t.dist-n.dist)))})).catch((t=>{console.error("There has been a problem with the overpass API:",t)}))}),(()=>{console.log("ERROR")}),{enableHighAccuracy:!1,timeout:6e4,maximumAge:0}):alert("NO GEOLOCATION"),window.addEventListener("deviceorientation",(t=>{var n;e(2,s=null!==(n=t.alpha)&&void 0!==n?n:0)}),!0)})),t.$$.update=()=>{15&t.$$.dirty&&r&&F(o,r,c,s)},[r,o,s,c,function(t){v[t?"unshift":"push"]((()=>{o=t,e(1,o)}))},function(){r=this.clientWidth,e(0,r)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,J,H,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
