var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function s(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function l(){return u(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function f(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let p,g;function m(){if(void 0===p){p=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){p=!0}}return p}function w(t){g=t}function v(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const $=[],b=[],y=[],M=[],x=Promise.resolve();let _=!1;function E(t){y.push(t)}let k=!1;const T=new Set;function P(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];w(n),A(n.$$)}for(w(null),$.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];T.has(n)||(T.add(n),n())}y.length=0}while($.length);for(;M.length;)M.pop()();_=!1,k=!1,T.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const I=new Set;function N(t,n){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,x.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(i,a,c,u,l,d,h=[-1]){const f=g;w(i);const p=a.props||{},m=i.$$={fragment:null,ctx:null,props:d,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:h,skip_bound:!1};let v=!1;if(m.ctx=c?c(i,p,((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),v&&N(i,t)),n})):[],m.update(),v=!0,o(m.before_update),m.fragment=!!u&&u(m.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);m.fragment&&m.fragment.l(t),t.forEach(s)}else m.fragment&&m.fragment.c();a.intro&&(($=i.$$.fragment)&&$.i&&(I.delete($),$.i(b))),function(t,e,i){const{fragment:a,on_mount:s,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,i),E((()=>{const e=s.map(n).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(E)}(i,a.target,a.anchor),P()}var $,b;w(f)}var S=.9996,W=.00669438,z=Math.pow(W,2),C=Math.pow(W,3),L=W/(1-W),R=1-W/4-3*z/64-5*C/256,j=3*W/8+3*z/32+45*C/1024,q=15*z/256+45*C/1024,H=35*C/3072,X=6378137,B="CDEFGHJKLMNPQRSTUVWXX";function F(t,n,e){if(t>84||t<-80)throw new RangeError("latitude out of range (must be between 80 deg S and 84 deg N)");if(n>180||n<-180)throw new RangeError("longitude out of range (must be between 180 deg W and 180 deg E)");var o,r=G(t),i=Math.sin(r),a=Math.cos(r),s=Math.tan(r),c=Math.pow(s,2),u=Math.pow(s,4);o=void 0===e?function(t,n){if(56<=t&&t<64&&3<=n&&n<12)return 32;if(72<=t&&t<=84&&n>=0){if(n<9)return 31;if(n<21)return 33;if(n<33)return 35;if(n<42)return 37}return Math.floor((n+180)/6)+1}(t,n):e;var l=function(t){return-80<=t&&t<=84?B[Math.floor((t+80)/8)]:null}(t),d=G(n),h=G(function(t){return 6*(t-1)-180+3}(o)),f=X/Math.sqrt(1-W*i*i),p=L*a*a,g=a*(d-h),m=Math.pow(g,2),w=Math.pow(g,3),v=Math.pow(g,4),$=Math.pow(g,5),b=Math.pow(g,6),y=X*(R*r-j*Math.sin(2*r)+q*Math.sin(4*r)-H*Math.sin(6*r)),M=S*(y+f*s*(m/2+v/24*(5-c+9*p+4*p*p)+b/720*(61-58*c+u+600*p-330*L)));return t<0&&(M+=1e7),{easting:S*f*(g+w/6*(1-c+p)+$/120*(5-18*c+u+72*p-58*L))+5e5,northing:M,zoneNum:o,zoneLetter:l}}function G(t){return t*Math.PI/180}const D=(t,n,e,o)=>{var r,i;if(0===n)return;t.width=n,t.height=n;const a=t.getContext("2d");J(a,o),a.save(),a.shadowOffsetX=0,a.shadowOffsetY=0,a.shadowColor="black",a.shadowBlur=4,a.strokeStyle="gray",a.fillStyle="blanchedalmond",a.textAlign="center",a.lineWidth=4,a.translate(a.canvas.width/2,a.canvas.height/2);const s=(null===(r=e[0])||void 0===r?void 0:r.dist)||0,c=(null===(i=e[9])||void 0===i?void 0:i.dist)||0;e.forEach(((t,n)=>{if(n<=10){const n=-Math.PI/2+Math.PI*(t.dir-o)/180,r=(e=t.dist,a.canvas.width/4+a.canvas.width/5*(e-s)/(c-s));a.strokeText(t.name,r*Math.cos(n),r*Math.sin(n)),a.fillText(t.name,r*Math.cos(n),r*Math.sin(n))}var e})),a.rotate(Math.PI/2),a.restore()},J=(t,n)=>{const e=t.canvas.width/2,o=t.canvas.height/2;t.save(),t.translate(e,o),t.rotate(-Math.PI*n/180),t.font="14px Arial";const r=["N","E","S","W"];for(let n=0;n<4;n++)t.beginPath(),t.moveTo(0,0),t.lineTo(0,-o/2),t.lineTo(-e/12,-o/12),t.lineTo(0,0),t.fill(),t.beginPath(),t.moveTo(0,0),t.lineTo(0,-o/2),t.lineTo(e/12,-o/12),t.lineTo(0,0),t.stroke(),t.fillText(r[n],-5,-5-o/2),t.rotate(Math.PI/2);t.restore()};function K(n){let e,o,r,i,p,g,w,v,$,b=screen.orientation.type+"";return{c(){e=c("main"),o=c("canvas"),r=l(),i=u(n[5]),p=l(),g=u(n[3]),w=l(),v=u(b),h(o,"width",n[4]),h(o,"height",n[4]),h(e,"class","svelte-1p8fxlt"),E((()=>n[8].call(e)))},m(t,u){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,u),a(e,o),n[7](o),a(e,r),a(e,i),a(e,p),a(e,g),a(e,w),a(e,v),$=function(t,n){"static"===getComputedStyle(t).position&&(t.style.position="relative");const e=c("iframe");e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1;const o=m();let r;return o?(e.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=d(window,"message",(t=>{t.source===e.contentWindow&&n()}))):(e.src="about:blank",e.onload=()=>{r=d(e.contentWindow,"resize",n)}),a(t,e),()=>{(o||r&&e.contentWindow)&&r(),s(e)}}(e,n[8].bind(e))},p(t,[n]){16&n&&h(o,"width",t[4]),16&n&&h(o,"height",t[4]),32&n&&f(i,t[5]),8&n&&f(g,t[3])},i:t,o:t,d(t){t&&s(e),n[7](null),$()}}}function Q(t,n,e){let o,r,i=0,a=0,s=0,c=0,u=0,l=[],d=0;v((()=>{navigator.geolocation?navigator.geolocation.watchPosition(f,(()=>{console.log("ERROR")}),{enableHighAccuracy:!1,timeout:6e4,maximumAge:0}):alert("NO GEOLOCATION"),window.addEventListener("deviceorientation",h)}));const h=t=>{var n,o,r;const i=(null!==(o=null===(n=null===screen||void 0===screen?void 0:screen.orientation)||void 0===n?void 0:n.type)&&void 0!==o?o:"portrait-primary").split("-")[0];let a=0;"landscape"===i&&(a-=90),"secondary"===i[1]&&(a-=180),e(5,d=a),e(3,u=null!==(r=a-t.alpha)&&void 0!==r?r:0)},f=t=>{s=t.coords.longitude,c=t.coords.latitude;const{easting:n,northing:o}=F(c,s);fetch(`https://overpass.kumi.systems/api/interpreter?data=[out:json][timeout:25000];node["amenity"="bar"](around:1000,${c},${s});out body;>;out skel qt;`).then((t=>t.json())).then((t=>{e(6,l=t.elements.map((t=>{const{easting:e,northing:r,zoneNum:i}=F(t.lat,t.lon),a=Math.sqrt(Math.pow(e-n,2)+Math.pow(r-o,2)),s=180/Math.PI*Math.atan2((e-n)/a,(r-o)/a);return{name:t.tags.name,lng:t.lon,lat:t.lat,dist:a,dir:s}})).filter((t=>void 0!==t.name)).sort(((t,n)=>t.dist-n.dist)))})).catch((t=>{console.error("There has been a problem with the overpass API:",t)}))};return t.$$.update=()=>{3&t.$$.dirty&&e(4,o=Math.min(a>i?i:a,500)),92&t.$$.dirty&&D(r,o,l,u)},[i,a,r,u,o,d,l,function(t){b[t?"unshift":"push"]((()=>{r=t,e(2,r)}))},function(){a=this.clientWidth,i=this.clientHeight,e(1,a),e(0,i)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,Q,K,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
