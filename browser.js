// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"",u=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,i,u,a;if(null==n)return o.call(n);r=n[f],a=f,t=null!=(u=n)&&e.call(u,a);try{n[f]=void 0}catch(t){return o.call(n)}return i=o.call(n),t?n[f]=r:delete n[f],i}:function(n){return o.call(n)},a="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof y)return!1;try{t=new y(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?c:function(){throw new Error("not implemented")};var l,p=t,A="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,t,r;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),r=t,n=(A&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var U,b=l,m="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var n,t,r;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),r=t,n=(m&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var h,N=U,F="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,g="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,65536,65537]),r=t,n=(F&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?g:function(){throw new Error("not implemented")};var j,E={uint16:h,uint8:N};(j=new E.uint16(1))[0]=4660;var T=52===new E.uint8(j.buffer)[0],I=!0===T?1:0,x=new b(1),O=new p(x.buffer);function q(n){return x[0]=n,O[I]}var G=!0===T?1:0,M=new b(1),P=new p(M.buffer),V=1023,Y=Number.NEGATIVE_INFINITY,_=.6931471803691238,k=1.9082149292705877e-10,z=0x40000000000000,B=.3333333333333333,C=1048575,D=2146435072,H=1048576,J=1072693248;function K(t){var r,o,e,i,f,u,a,y,c,l,p,A;return 0===t?Y:n(t)||t<0?NaN:(f=0,(o=q(t))<H&&(f-=54,o=q(t*=z)),o>=D?t+t:(f+=(o>>20)-V|0,f+=(y=614244+(o&=C)&1048576|0)>>20|0,a=(t=function(n,t){return M[0]=n,P[G]=t>>>0,M[0]}(t,o|y^J))-1,(C&2+o)<3?0===a?0===f?0:f*_+f*k:(u=a*a*(.5-B*a),0===f?a-u:f*_-(u-f*k-a)):(y=o-398458|0,c=440401-o|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(y|=c)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*_-(r-(l*(r+u)+f*k)-a)):0===f?a-l*(a-u):f*_-(l*(a-u)-f*k-a))))}var L=Math.sqrt;return function(t){var r;return n(t)||t<=0?NaN:(r=K(1+t),L(((2+t)*r-2*t)/(2*t*r*r)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).stdev=t();
//# sourceMappingURL=browser.js.map
