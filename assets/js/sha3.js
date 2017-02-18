/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 HMAC implementation as defined in FIPS PUB 198a

 Copyright Brian Turek 2008-2016
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnston
*/
'use strict';(function(K){function n(d,b,g){var a=0,e=[],h=0,f,r,c,k,l,y,q,A,p=!1,n=[],w=[],t,x=!1,u=!1;g=g||{};f=g.encoding||"UTF8";t=g.numRounds||1;c=C(b,f);if(t!==parseInt(t,10)||1>t)throw Error("numRounds must a integer >= 1");if(0===d.lastIndexOf("SHA3-",0)||0===d.lastIndexOf("SHAKE",0)){var B=6;y=z;A=function(a){var b=[],d;for(d=0;5>d;d+=1)b[d]=a[d].slice();return b};if("SHA3-224"===d)l=1152,k=224;else if("SHA3-256"===d)l=1088,k=256;else if("SHA3-384"===d)l=832,k=384;else if("SHA3-512"===d)l=
576,k=512;else if("SHAKE128"===d)l=1344,k=-1,B=31,u=!0;else if("SHAKE256"===d)l=1088,k=-1,B=31,u=!0;else throw Error("Chosen SHA variant is not supported");q=function(a,d,b,e,h){b=l;var g=B,f,r=[],k=b>>>5,c=0,m=d>>>5;for(f=0;f<m&&d>=b;f+=k)e=z(a.slice(f,f+k),e),d-=b;a=a.slice(f);for(d%=b;a.length<k;)a.push(0);f=d>>>3;a[f>>2]^=g<<24-f%4*8;a[k-1]^=128;for(e=z(a,e);32*r.length<h;){a=e[c%5][c/5|0];r.push((a.b&255)<<24|(a.b&65280)<<8|(a.b&16711680)>>8|a.b>>>24);if(32*r.length>=h)break;r.push((a.a&255)<<
24|(a.a&65280)<<8|(a.a&16711680)>>8|a.a>>>24);c+=1;0===64*c%b&&z(null,e)}return r}}else throw Error("Chosen SHA variant is not supported");r=v(d);this.setHMACKey=function(b,e,h){var g;if(!0===p)throw Error("HMAC key already set");if(!0===x)throw Error("Cannot set HMAC key after calling update");if(!0===u)throw Error("SHAKE is not supported for HMAC");f=(h||{}).encoding||"UTF8";e=C(e,f)(b);b=e.binLen;e=e.value;g=l>>>3;h=g/4-1;if(g<b/8){for(e=q(e,b,0,v(d),k);e.length<=h;)e.push(0);e[h]&=4294967040}else if(g>
b/8){for(;e.length<=h;)e.push(0);e[h]&=4294967040}for(b=0;b<=h;b+=1)n[b]=e[b]^909522486,w[b]=e[b]^1549556828;r=y(n,r);a=l;p=!0};this.update=function(b){var d,f,g,k=0,D=l>>>5;d=c(b,e,h);b=d.binLen;f=d.value;d=b>>>5;for(g=0;g<d;g+=D)k+l<=b&&(r=y(f.slice(g,g+D),r),k+=l);a+=k;e=f.slice(k>>>5);h=b%l;x=!0};this.getHash=function(b,g){var f,c,l,m;if(!0===p)throw Error("Cannot call getHash after setting HMAC key");l=E(g);if(!0===u){if(-1===l.shakeLen)throw Error("shakeLen must be specified in options");k=
l.shakeLen}switch(b){case "HEX":f=function(a){return F(a,k,l)};break;case "B64":f=function(a){return G(a,k,l)};break;case "BYTES":f=function(a){return H(a,k)};break;case "ARRAYBUFFER":try{c=new ArrayBuffer(0)}catch(L){throw Error("ARRAYBUFFER not supported by this environment");}f=function(a){return I(a,k)};break;default:throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");}m=q(e.slice(),h,a,A(r),k);for(c=1;c<t;c+=1)!0===u&&0!==k%32&&(m[m.length-1]&=4294967040<<24-k%32),m=q(m,k,0,v(d),k);
return f(m)};this.getHMAC=function(b,f){var g,c,m,n;if(!1===p)throw Error("Cannot call getHMAC without first setting HMAC key");m=E(f);switch(b){case "HEX":g=function(a){return F(a,k,m)};break;case "B64":g=function(a){return G(a,k,m)};break;case "BYTES":g=function(a){return H(a,k)};break;case "ARRAYBUFFER":try{g=new ArrayBuffer(0)}catch(L){throw Error("ARRAYBUFFER not supported by this environment");}g=function(a){return I(a,k)};break;default:throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
}c=q(e.slice(),h,a,A(r),k);n=y(w,v(d));n=q(c,k,l,n,k);return g(n)}}function c(d,b){this.a=d;this.b=b}function M(d,b,g){var a=d.length,e,h,f,c,m;b=b||[0];g=g||0;m=g>>>3;if(0!==a%2)throw Error("String of HEX type must be in byte increments");for(e=0;e<a;e+=2){h=parseInt(d.substr(e,2),16);if(isNaN(h))throw Error("String of HEX type contains invalid characters");c=(e>>>1)+m;for(f=c>>>2;b.length<=f;)b.push(0);b[f]|=h<<8*(3-c%4)}return{value:b,binLen:4*a+g}}function N(d,b,g){var a=[],e,h,f,c,a=b||[0];g=
g||0;h=g>>>3;for(e=0;e<d.length;e+=1)b=d.charCodeAt(e),c=e+h,f=c>>>2,a.length<=f&&a.push(0),a[f]|=b<<8*(3-c%4);return{value:a,binLen:8*d.length+g}}function O(d,b,g){var a=[],e=0,h,f,c,m,k,l,a=b||[0];g=g||0;b=g>>>3;if(-1===d.search(/^[a-zA-Z0-9=+\/]+$/))throw Error("Invalid character in base-64 string");f=d.indexOf("=");d=d.replace(/\=/g,"");if(-1!==f&&f<d.length)throw Error("Invalid '=' found in base-64 string");for(f=0;f<d.length;f+=4){k=d.substr(f,4);for(c=m=0;c<k.length;c+=1)h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(k[c]),
m|=h<<18-6*c;for(c=0;c<k.length-1;c+=1){l=e+b;for(h=l>>>2;a.length<=h;)a.push(0);a[h]|=(m>>>16-8*c&255)<<8*(3-l%4);e+=1}}return{value:a,binLen:8*e+g}}function P(d,b,g){var a=[],e,h,f,a=b||[0];g=g||0;e=g>>>3;for(b=0;b<d.byteLength;b+=1)f=b+e,h=f>>>2,a.length<=h&&a.push(0),a[h]|=d[b]<<8*(3-f%4);return{value:a,binLen:8*d.byteLength+g}}function F(d,b,g){var a="";b/=8;var e,h;for(e=0;e<b;e+=1)h=d[e>>>2]>>>8*(3-e%4),a+="0123456789abcdef".charAt(h>>>4&15)+"0123456789abcdef".charAt(h&15);return g.outputUpper?
a.toUpperCase():a}function G(d,b,g){var a="",e=b/8,h,f,c;for(h=0;h<e;h+=3)for(f=h+1<e?d[h+1>>>2]:0,c=h+2<e?d[h+2>>>2]:0,c=(d[h>>>2]>>>8*(3-h%4)&255)<<16|(f>>>8*(3-(h+1)%4)&255)<<8|c>>>8*(3-(h+2)%4)&255,f=0;4>f;f+=1)8*h+6*f<=b?a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c>>>6*(3-f)&63):a+=g.b64Pad;return a}function H(d,b){var c="",a=b/8,e,h;for(e=0;e<a;e+=1)h=d[e>>>2]>>>8*(3-e%4)&255,c+=String.fromCharCode(h);return c}function I(d,b){var c=b/8,a,e=new ArrayBuffer(c);
for(a=0;a<c;a+=1)e[a]=d[a>>>2]>>>8*(3-a%4)&255;return e}function E(d){var b={outputUpper:!1,b64Pad:"=",shakeLen:-1};d=d||{};b.outputUpper=d.outputUpper||!1;!0===d.hasOwnProperty("b64Pad")&&(b.b64Pad=d.b64Pad);if(!0===d.hasOwnProperty("shakeLen")){if(0!==d.shakeLen%8)throw Error("shakeLen must be a multiple of 8");b.shakeLen=d.shakeLen}if("boolean"!==typeof b.outputUpper)throw Error("Invalid outputUpper formatting option");if("string"!==typeof b.b64Pad)throw Error("Invalid b64Pad formatting option");
return b}function C(d,b){var c;switch(b){case "UTF8":case "UTF16BE":case "UTF16LE":break;default:throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");}switch(d){case "HEX":c=M;break;case "TEXT":c=function(a,d,c){var f=[],g=[],m=0,k,l,n,q,p,f=d||[0];d=c||0;n=d>>>3;if("UTF8"===b)for(k=0;k<a.length;k+=1)for(c=a.charCodeAt(k),g=[],128>c?g.push(c):2048>c?(g.push(192|c>>>6),g.push(128|c&63)):55296>c||57344<=c?g.push(224|c>>>12,128|c>>>6&63,128|c&63):(k+=1,c=65536+((c&1023)<<10|a.charCodeAt(k)&1023),
g.push(240|c>>>18,128|c>>>12&63,128|c>>>6&63,128|c&63)),l=0;l<g.length;l+=1){p=m+n;for(q=p>>>2;f.length<=q;)f.push(0);f[q]|=g[l]<<8*(3-p%4);m+=1}else if("UTF16BE"===b||"UTF16LE"===b)for(k=0;k<a.length;k+=1){c=a.charCodeAt(k);"UTF16LE"===b&&(l=c&255,c=l<<8|c>>>8);p=m+n;for(q=p>>>2;f.length<=q;)f.push(0);f[q]|=c<<8*(2-p%4);m+=2}return{value:f,binLen:8*m+d}};break;case "B64":c=O;break;case "BYTES":c=N;break;case "ARRAYBUFFER":try{c=new ArrayBuffer(0)}catch(a){throw Error("ARRAYBUFFER not supported by this environment");
}c=P;break;default:throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");}return c}function w(d,b){return 32<b?(b=b-32,new c(d.b<<b|d.a>>>32-b,d.a<<b|d.b>>>32-b)):0!==b?new c(d.a<<b|d.b>>>32-b,d.b<<b|d.a>>>32-b):d}function p(d){var b=0,g=0,a;for(a=0;a<arguments.length;a+=1)b^=arguments[a].b,g^=arguments[a].a;return new c(g,b)}function v(d){var b=[];if(0===d.lastIndexOf("SHA3-",0)||0===d.lastIndexOf("SHAKE",0))for(d=0;5>d;d+=1)b[d]=[new c(0,0),new c(0,0),new c(0,0),new c(0,0),new c(0,
0)];else throw Error("No SHA variants supported");return b}function z(d,b){var g,a,e,h,f=[],n=[];if(null!==d)for(a=0;a<d.length;a+=2)b[(a>>>1)%5][(a>>>1)/5|0]=p(b[(a>>>1)%5][(a>>>1)/5|0],new c((d[a+1]&255)<<24|(d[a+1]&65280)<<8|(d[a+1]&16711680)>>>8|d[a+1]>>>24,(d[a]&255)<<24|(d[a]&65280)<<8|(d[a]&16711680)>>>8|d[a]>>>24));for(g=0;24>g;g+=1){h=v("SHA3-");for(a=0;5>a;a+=1)f[a]=p(b[a][0],b[a][1],b[a][2],b[a][3],b[a][4]);for(a=0;5>a;a+=1)n[a]=p(f[(a+4)%5],w(f[(a+1)%5],1));for(a=0;5>a;a+=1)for(e=0;5>
e;e+=1)b[a][e]=p(b[a][e],n[a]);for(a=0;5>a;a+=1)for(e=0;5>e;e+=1)h[e][(2*a+3*e)%5]=w(b[a][e],x[a][e]);for(a=0;5>a;a+=1)for(e=0;5>e;e+=1)b[a][e]=p(h[a][e],new c(~h[(a+1)%5][e].a&h[(a+2)%5][e].a,~h[(a+1)%5][e].b&h[(a+2)%5][e].b));b[0][0]=p(b[0][0],J[g])}return b}var x,J;J=[new c(0,1),new c(0,32898),new c(2147483648,32906),new c(2147483648,2147516416),new c(0,32907),new c(0,2147483649),new c(2147483648,2147516545),new c(2147483648,32777),new c(0,138),new c(0,136),new c(0,2147516425),new c(0,2147483658),
new c(0,2147516555),new c(2147483648,139),new c(2147483648,32905),new c(2147483648,32771),new c(2147483648,32770),new c(2147483648,128),new c(0,32778),new c(2147483648,2147483658),new c(2147483648,2147516545),new c(2147483648,32896),new c(0,2147483649),new c(2147483648,2147516424)];x=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];"function"===typeof define&&define.amd?define(function(){return n}):"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&
(module.exports=n),exports=n):K.jsSHA=n})(this);