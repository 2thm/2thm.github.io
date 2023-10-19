var Ru=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var m0=Ru(no=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="156",hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cu=0,So=1,Pu=2,xc=1,Lu=2,En=3,An=0,wt=1,sn=2,On=0,zi=1,yo=2,Mo=3,Eo=4,Uu=5,Ui=100,Du=101,Iu=102,To=103,bo=104,Fu=200,Nu=201,Ou=202,Bu=203,Sc=204,yc=205,ku=206,zu=207,Gu=208,Hu=209,Vu=210,Wu=0,Xu=1,Yu=2,wa=3,qu=4,ju=5,Ku=6,Zu=7,Ts=0,Ju=1,Qu=2,Bn=0,$u=1,eh=2,th=3,nh=4,ih=5,Mc=300,Vi=301,Wi=302,Ra=303,Ca=304,bs=306,Pa=1e3,an=1001,La=1002,At=1003,Ao=1004,Gs=1005,Ut=1006,rh=1007,Er=1008,kn=1009,sh=1010,ah=1011,Va=1012,Ec=1013,Fn=1014,Nn=1015,Tr=1016,Tc=1017,bc=1018,Zn=1020,oh=1021,on=1023,lh=1024,ch=1025,Jn=1026,Xi=1027,uh=1028,Ac=1029,hh=1030,wc=1031,Rc=1033,Hs=33776,Vs=33777,Ws=33778,Xs=33779,wo=35840,Ro=35841,Co=35842,Po=35843,fh=36196,Lo=37492,Uo=37496,Do=37808,Io=37809,Fo=37810,No=37811,Oo=37812,Bo=37813,ko=37814,zo=37815,Go=37816,Ho=37817,Vo=37818,Wo=37819,Xo=37820,Yo=37821,Ys=36492,qo=36494,jo=36495,dh=36283,Ko=36284,Zo=36285,Jo=36286,Cc=3e3,Qn=3001,ph=3200,Pc=3201,Wa=0,mh=1,$n="",tt="srgb",fn="srgb-linear",As="display-p3",qs=7680,gh=519,_h=512,vh=513,xh=514,Sh=515,yh=516,Mh=517,Eh=518,Th=519,Qo=35044,$o="300 es",Ua=1035,Tn=2e3,Ss=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const pr=Math.PI/180,br=180/Math.PI;function ai(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[s&255]+xt[s>>8&255]+xt[s>>16&255]+xt[s>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function Xa(s,e){return(s%e+e)%e}function bh(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Ah(s,e,t){return s!==e?(t-s)/(e-s):0}function mr(s,e,t){return(1-t)*s+t*e}function wh(s,e,t,i){return mr(s,e,1-Math.exp(-t*i))}function Rh(s,e=1){return e-Math.abs(Xa(s,e*2)-e)}function Ch(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ph(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Lh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Uh(s,e){return s+Math.random()*(e-s)}function Dh(s){return s*(.5-Math.random())}function Ih(s){s!==void 0&&(el=s);let e=el+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fh(s){return s*pr}function Nh(s){return s*br}function Da(s){return(s&s-1)===0&&s!==0}function Oh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ys(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Bh(s,e,t,i,n){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Di(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ms={DEG2RAD:pr,RAD2DEG:br,generateUUID:ai,clamp:dt,euclideanModulo:Xa,mapLinear:bh,inverseLerp:Ah,lerp:mr,damp:wh,pingpong:Rh,smoothstep:Ch,smootherstep:Ph,randInt:Lh,randFloat:Uh,randFloatSpread:Dh,seededRandom:Ih,degToRad:Fh,radToDeg:Nh,isPowerOfTwo:Da,ceilPowerOfTwo:Oh,floorPowerOfTwo:ys,setQuaternionFromProperEuler:Bh,normalize:Tt,denormalize:Di};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,n,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=n[0],p=n[3],m=n[6],S=n[1],v=n[4],x=n[7],E=n[2],A=n[5],b=n[8];return r[0]=o*_+a*S+l*E,r[3]=o*p+a*v+l*A,r[6]=o*m+a*x+l*b,r[1]=c*_+u*S+h*E,r[4]=c*p+u*v+h*A,r[7]=c*m+u*x+h*b,r[2]=f*_+d*S+g*E,r[5]=f*p+d*v+g*A,r[8]=f*m+d*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+n*r*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(n*c-u*i)*_,e[2]=(a*i-n*o)*_,e[3]=f*_,e[4]=(u*t-n*l)*_,e[5]=(n*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(js.makeScale(e,t)),this}rotate(e){return this.premultiply(js.makeRotation(-e)),this}translate(e,t){return this.premultiply(js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const js=new je;function Lc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Es(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kh(){const s=Es("canvas");return s.style.display="block",s}const tl={};function gr(s){s in tl||(tl[s]=!0,console.warn(s))}function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const zh=new je().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Gh=new je().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Hh(s){return s.convertSRGBToLinear().applyMatrix3(Gh)}function Vh(s){return s.applyMatrix3(zh).convertLinearToSRGB()}const Wh={[fn]:s=>s,[tt]:s=>s.convertSRGBToLinear(),[As]:Hh},Xh={[fn]:s=>s,[tt]:s=>s.convertLinearToSRGB(),[As]:Vh},Qt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return fn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Wh[e],n=Xh[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let di;class Uc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=Es("canvas")),di.width=e.width,di.height=e.height;const i=di.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yh=0;class Dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Zs(n[o].image)):r.push(Zs(n[o]))}else r=Zs(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function Zs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qh=0;class Dt extends si{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=an,n=an,r=Ut,o=Er,a=on,l=kn,c=Dt.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=ai(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Qn?tt:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?Qn:Cc}set encoding(e){gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qn?tt:$n}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Mc;Dt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,n=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,E=(m+1)/2,A=(u+f)/4,b=(h+_)/4,F=(g+p)/4;return v>x&&v>E?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=A/i,r=b/i):x>E?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=A/n,r=F/n):E<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(E),i=b/r,n=F/r),this.set(i,n,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qn?tt:$n),this.texture=new Dt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ut,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ic extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=At,this.minFilter=At,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kh extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=At,this.minFilter=At,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,m*S);p=Math.sin(p*A)/E,a=Math.sin(a*A)/E}const x=a*S;if(l=l*p+f*x,c=c*p+d*x,u=u*p+g*x,h=h*p+_*x,p===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(n/2),h=a(r/2),f=l(i/2),d=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-n)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+n*c-r*l,this._y=n*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-n*a,this._w=o*u-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=n*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,u=l*i+a*t-r*n,h=l*n+r*i-o*t,f=-r*t-o*i-a*n;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Js.copy(this).projectOnVector(e),this.sub(Js)}reflect(e){return this.sub(Js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new W,nl=new ni;class qi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),pi.copy(e.boundingBox),pi.applyMatrix4(e.matrixWorld),this.union(pi);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)vn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vn)}else n.boundingBox===null&&n.computeBoundingBox(),pi.copy(n.boundingBox),pi.applyMatrix4(e.matrixWorld),this.union(pi)}const i=e.children;for(let n=0,r=i.length;n<r;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),zr.subVectors(this.max,or),mi.subVectors(e.a,or),gi.subVectors(e.b,or),_i.subVectors(e.c,or),Pn.subVectors(gi,mi),Ln.subVectors(_i,gi),Hn.subVectors(mi,_i);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Hn.z,Hn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Hn.z,0,-Hn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Hn.y,Hn.x,0];return!Qs(t,mi,gi,_i,zr)||(t=[1,0,0,0,1,0,0,0,1],!Qs(t,mi,gi,_i,zr))?!1:(Gr.crossVectors(Pn,Ln),t=[Gr.x,Gr.y,Gr.z],Qs(t,mi,gi,_i,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new W,new W,new W,new W,new W,new W,new W,new W],vn=new W,pi=new qi,mi=new W,gi=new W,_i=new W,Pn=new W,Ln=new W,Hn=new W,or=new W,zr=new W,Gr=new W,Vn=new W;function Qs(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Vn.fromArray(s,r);const a=n.x*Math.abs(Vn.x)+n.y*Math.abs(Vn.y)+n.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),u=i.dot(Vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Zh=new qi,lr=new W,$s=new W;class Cr{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zh.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(lr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add($s)),this.expandByPoint(lr.copy(e.center).sub($s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new W,ea=new W,Hr=new W,Un=new W,ta=new W,Vr=new W,na=new W;class Ya{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ea.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(ea);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),a=Un.dot(this.direction),l=-Un.dot(Hr),c=Un.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(ea).addScaledVector(Hr,f),d}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const i=xn.dot(this.direction),n=xn.dot(xn)-i*i,r=e.radius*e.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,n,r){ta.subVectors(t,e),Vr.subVectors(i,e),na.crossVectors(ta,Vr);let o=this.direction.dot(na),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,e);const l=a*this.direction.dot(Vr.crossVectors(Un,Vr));if(l<0)return null;const c=a*this.direction.dot(ta.cross(Un));if(c<0||l+c>o)return null;const u=-a*Un.dot(na);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,n,r,o,a,l,c,u,h,f,d,g,_,p){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,u,h,f,d,g,_,p)}set(e,t,i,n,r,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),o=1/vi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jh,e,Qh)}lookAt(e,t,i){const n=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Dn.crossVectors(i,Ot),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Dn.crossVectors(i,Ot)),Dn.normalize(),Wr.crossVectors(Ot,Dn),n[0]=Dn.x,n[4]=Wr.x,n[8]=Ot.x,n[1]=Dn.y,n[5]=Wr.y,n[9]=Ot.y,n[2]=Dn.z,n[6]=Wr.z,n[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],S=i[3],v=i[7],x=i[11],E=i[15],A=n[0],b=n[4],F=n[8],T=n[12],y=n[1],G=n[5],U=n[9],P=n[13],I=n[2],B=n[6],X=n[10],H=n[14],q=n[3],V=n[7],k=n[11],w=n[15];return r[0]=o*A+a*y+l*I+c*q,r[4]=o*b+a*G+l*B+c*V,r[8]=o*F+a*U+l*X+c*k,r[12]=o*T+a*P+l*H+c*w,r[1]=u*A+h*y+f*I+d*q,r[5]=u*b+h*G+f*B+d*V,r[9]=u*F+h*U+f*X+d*k,r[13]=u*T+h*P+f*H+d*w,r[2]=g*A+_*y+p*I+m*q,r[6]=g*b+_*G+p*B+m*V,r[10]=g*F+_*U+p*X+m*k,r[14]=g*T+_*P+p*H+m*w,r[3]=S*A+v*y+x*I+E*q,r[7]=S*b+v*G+x*B+E*V,r[11]=S*F+v*U+x*X+E*k,r[15]=S*T+v*P+x*H+E*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*h-n*c*h-r*a*f+i*c*f+n*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-n*o*d+n*c*u-r*l*u)+p*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+m*(-n*a*u-t*l*h+t*a*f+n*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,v=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,x=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,E=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,A=t*S+i*v+n*x+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=S*b,e[1]=(_*f*r-h*p*r-_*n*d+i*p*d+h*n*m-i*f*m)*b,e[2]=(a*p*r-_*l*r+_*n*c-i*p*c-a*n*m+i*l*m)*b,e[3]=(h*l*r-a*f*r-h*n*c+i*f*c+a*n*d-i*l*d)*b,e[4]=v*b,e[5]=(u*p*r-g*f*r+g*n*d-t*p*d-u*n*m+t*f*m)*b,e[6]=(g*l*r-o*p*r-g*n*c+t*p*c+o*n*m-t*l*m)*b,e[7]=(o*f*r-u*l*r+u*n*c-t*f*c-o*n*d+t*l*d)*b,e[8]=x*b,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*m-t*h*m)*b,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*m+t*a*m)*b,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*b,e[12]=E*b,e[13]=(u*_*n-g*h*n+g*i*f-t*_*f-u*i*p+t*h*p)*b,e[14]=(g*a*n-o*_*n-g*i*l+t*_*l+o*i*p-t*a*p)*b,e[15]=(o*h*n-u*a*n+u*i*l-t*h*l-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,u*a+i,u*l-n*o,0,c*l-n*a,u*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,p=o*h,m=a*h,S=l*c,v=l*u,x=l*h,E=i.x,A=i.y,b=i.z;return n[0]=(1-(_+m))*E,n[1]=(d+x)*E,n[2]=(g-v)*E,n[3]=0,n[4]=(d-x)*A,n[5]=(1-(f+m))*A,n[6]=(p+S)*A,n[7]=0,n[8]=(g+v)*b,n[9]=(p-S)*b,n[10]=(1-(f+_))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=vi.set(n[0],n[1],n[2]).length();const o=vi.set(n[4],n[5],n[6]).length(),a=vi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],$t.copy(this);const c=1/r,u=1/o,h=1/a;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,o,a=Tn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-n),h=(t+e)/(t-e),f=(i+n)/(i-n);let d,g;if(a===Tn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ss)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Tn){const l=this.elements,c=1/(t-e),u=1/(i-n),h=1/(o-r),f=(t+e)*c,d=(i+n)*u;let g,_;if(a===Tn)g=(o+r)*h,_=-2*h;else if(a===Ss)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vi=new W,$t=new rt,Jh=new W(0,0,0),Qh=new W(1,1,1),Dn=new W,Wr=new W,Ot=new W,il=new rt,rl=new ni;class ws{constructor(e=0,t=0,i=0,n=ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ws.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $h=0;const sl=new W,xi=new ni,Sn=new rt,Xr=new W,cr=new W,ef=new W,tf=new ni,al=new W(1,0,0),ol=new W(0,1,0),ll=new W(0,0,1),nf={type:"added"},rf={type:"removed"};class pt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new W,t=new ws,i=new ni,n=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new rt},normalMatrix:{value:new je}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(al,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return sl.copy(e).applyQuaternion(this.quaternion),this.position.add(sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(al,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xr.copy(e):Xr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(cr,Xr,this.up):Sn.lookAt(Xr,cr,this.up),this.quaternion.setFromRotationMatrix(Sn),n&&(Sn.extractRotation(n.matrixWorld),xi.setFromRotationMatrix(Sn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,ef),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}pt.DEFAULT_UP=new W(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new W,yn=new W,ia=new W,Mn=new W,Si=new W,yi=new W,cl=new W,ra=new W,sa=new W,aa=new W;let Yr=!1;class nn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),en.subVectors(e,t),n.cross(en);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){en.subVectors(n,t),yn.subVectors(i,t),ia.subVectors(e,t);const o=en.dot(en),a=en.dot(yn),l=en.dot(ia),c=yn.dot(yn),u=yn.dot(ia),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Mn),Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(e,t,i,n,r,o,a,l){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),this.getInterpolation(e,t,i,n,r,o,a,l)}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,Mn),l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l}static isFrontFacing(e,t,i,n){return en.subVectors(i,t),yn.subVectors(e,t),en.cross(yn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),en.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),nn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let o,a;Si.subVectors(n,i),yi.subVectors(r,i),ra.subVectors(e,i);const l=Si.dot(ra),c=yi.dot(ra);if(l<=0&&c<=0)return t.copy(i);sa.subVectors(e,n);const u=Si.dot(sa),h=yi.dot(sa);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Si,o);aa.subVectors(e,r);const d=Si.dot(aa),g=yi.dot(aa);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(yi,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return cl.subVectors(r,n),a=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(cl,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(Si,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let sf=0;class oi extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=zi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=yc,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==An&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tn={h:0,s:0,l:0},qr={h:0,s:0,l:0};function oa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Qt.workingColorSpace){if(e=Xa(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=oa(o,r,e+1/3),this.g=oa(o,r,e),this.b=oa(o,r,e-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(e,t=tt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){const i=Nc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return Qt.fromWorkingColorSpace(St.copy(this),e),Math.round(dt(St.r*255,0,255))*65536+Math.round(dt(St.g*255,0,255))*256+Math.round(dt(St.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.fromWorkingColorSpace(St.copy(this),t);const i=St.r,n=St.g,r=St.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=tt){Qt.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,n=St.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(tn),tn.h+=e,tn.s+=t,tn.l+=i,this.setHSL(tn.h,tn.s,tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tn),e.getHSL(qr);const i=mr(tn.h,qr.h,t),n=mr(tn.s,qr.s,t),r=mr(tn.l,qr.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Ke;Ke.NAMES=Nc;class Pr extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new W,jr=new Re;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qo,this.updateRange={offset:0,count:-1},this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Oc extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bc extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class It extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let af=0;const Wt=new rt,la=new pt,Mi=new W,Bt=new qi,ur=new qi,ft=new W;class kt extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?Bc:Oc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return la.lookAt(e),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Bt.min,ur.min),Bt.expandByPoint(ft),ft.addVectors(Bt.max,ur.max),Bt.expandByPoint(ft)):(Bt.expandByPoint(ur.min),Bt.expandByPoint(ur.max))}Bt.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)ft.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ft.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(e,c),ft.add(Mi)),n=Math.max(n,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new W,u[y]=new W;const h=new W,f=new W,d=new W,g=new Re,_=new Re,p=new Re,m=new W,S=new W;function v(y,G,U){h.fromArray(n,y*3),f.fromArray(n,G*3),d.fromArray(n,U*3),g.fromArray(o,y*2),_.fromArray(o,G*2),p.fromArray(o,U*2),f.sub(h),d.sub(h),_.sub(g),p.sub(g);const P=1/(_.x*p.y-p.x*_.y);isFinite(P)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(P),S.copy(d).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(P),c[y].add(m),c[G].add(m),c[U].add(m),u[y].add(S),u[G].add(S),u[U].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let y=0,G=x.length;y<G;++y){const U=x[y],P=U.start,I=U.count;for(let B=P,X=P+I;B<X;B+=3)v(i[B+0],i[B+1],i[B+2])}const E=new W,A=new W,b=new W,F=new W;function T(y){b.fromArray(r,y*3),F.copy(b);const G=c[y];E.copy(G),E.sub(b.multiplyScalar(b.dot(G))).normalize(),A.crossVectors(F,G);const P=A.dot(u[y])<0?-1:1;l[y*4]=E.x,l[y*4+1]=E.y,l[y*4+2]=E.z,l[y*4+3]=P}for(let y=0,G=x.length;y<G;++y){const U=x[y],P=U.start,I=U.count;for(let B=P,X=P+I;B<X;B+=3)T(i[B+0]),T(i[B+1]),T(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(n,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(n,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new ln(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new rt,Wn=new Ya,Kr=new Cr,hl=new W,Ei=new W,Ti=new W,bi=new W,ca=new W,Zr=new W,Jr=new Re,Qr=new Re,$r=new Re,fl=new W,dl=new W,pl=new W,es=new W,ts=new W;class Mt extends pt{constructor(e=new kt,t=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ca.fromBufferAttribute(h,e),o?Zr.addScaledVector(ca,u):Zr.addScaledVector(ca.sub(t),u))}t.add(Zr)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(Kr.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Kr,hl)===null||Wn.origin.distanceToSquared(hl)>(e.far-e.near)**2))&&(ul.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(ul),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=S,E=v;x<E;x+=3){const A=a.getX(x),b=a.getX(x+1),F=a.getX(x+2);n=ns(this,m,e,i,c,u,h,A,b,F),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);n=ns(this,o,e,i,c,u,h,S,v,x),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=S,E=v;x<E;x+=3){const A=x,b=x+1,F=x+2;n=ns(this,m,e,i,c,u,h,A,b,F),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=p,v=p+1,x=p+2;n=ns(this,o,e,i,c,u,h,S,v,x),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function of(s,e,t,i,n,r,o,a){let l;if(e.side===wt?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===An,a),l===null)return null;ts.copy(a),ts.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:s}}function ns(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,Ei),s.getVertexPosition(l,Ti),s.getVertexPosition(c,bi);const u=of(s,e,t,i,Ei,Ti,bi,es);if(u){n&&(Jr.fromBufferAttribute(n,a),Qr.fromBufferAttribute(n,l),$r.fromBufferAttribute(n,c),u.uv=nn.getInterpolation(es,Ei,Ti,bi,Jr,Qr,$r,new Re)),r&&(Jr.fromBufferAttribute(r,a),Qr.fromBufferAttribute(r,l),$r.fromBufferAttribute(r,c),u.uv1=nn.getInterpolation(es,Ei,Ti,bi,Jr,Qr,$r,new Re),u.uv2=u.uv1),o&&(fl.fromBufferAttribute(o,a),dl.fromBufferAttribute(o,l),pl.fromBufferAttribute(o,c),u.normal=nn.getInterpolation(es,Ei,Ti,bi,fl,dl,pl,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new W,materialIndex:0};nn.getNormal(Ei,Ti,bi,h.normal),u.face=h}return u}class zn extends kt{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function g(_,p,m,S,v,x,E,A,b,F,T){const y=x/b,G=E/F,U=x/2,P=E/2,I=A/2,B=b+1,X=F+1;let H=0,q=0;const V=new W;for(let k=0;k<X;k++){const w=k*G-P;for(let D=0;D<B;D++){const K=D*y-U;V[_]=K*S,V[p]=w*v,V[m]=I,c.push(V.x,V.y,V.z),V[_]=0,V[p]=0,V[m]=A>0?1:-1,u.push(V.x,V.y,V.z),h.push(D/b),h.push(1-k/F),H+=1}}for(let k=0;k<F;k++)for(let w=0;w<b;w++){const D=f+w+B*k,K=f+w+B*(k+1),Y=f+(w+1)+B*(k+1),j=f+(w+1)+B*k;l.push(D,K,j),l.push(K,Y,j),q+=6}a.addGroup(d,q,T),d+=q,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function bt(s){const e={};for(let t=0;t<s.length;t++){const i=Yi(s[t]);for(const n in i)e[n]=i[n]}return e}function lf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kc(s){return s.getRenderTarget()===null?s.outputColorSpace:fn}const zc={clone:Yi,merge:bt};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gc extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends Gc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return br*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,wi=1;class hf extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const n=new Yt(Ai,wi,e,t);n.layers=this.layers,this.add(n);const r=new Yt(Ai,wi,e,t);r.layers=this.layers,this.add(r);const o=new Yt(Ai,wi,e,t);o.layers=this.layers,this.add(o);const a=new Yt(Ai,wi,e,t);a.layers=this.layers,this.add(a);const l=new Yt(Ai,wi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Ai,wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Hc extends Dt{constructor(e,t,i,n,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,i,n,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ff extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qn?tt:$n),this.texture=new Hc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new zn(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wt,blending:On});r.uniforms.tEquirect.value=t;const o=new Mt(n,r),a=t.minFilter;return t.minFilter===Er&&(t.minFilter=Ut),new hf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}}const ua=new W,df=new W,pf=new je;class In{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ua.subVectors(i,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ua),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pf.getNormalMatrix(e),n=this.coplanarPoint(ua).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Cr,is=new W;class qa{constructor(e=new In,t=new In,i=new In,n=new In,r=new In,o=new In){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn){const i=this.planes,n=e.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],g=n[9],_=n[10],p=n[11],m=n[12],S=n[13],v=n[14],x=n[15];if(i[0].setComponents(l-r,f-c,p-d,x-m).normalize(),i[1].setComponents(l+r,f+c,p+d,x+m).normalize(),i[2].setComponents(l+o,f+u,p+g,x+S).normalize(),i[3].setComponents(l-o,f-u,p-g,x-S).normalize(),i[4].setComponents(l-a,f-h,p-_,x-v).normalize(),t===Tn)i[5].setComponents(l+a,f+h,p+_,x+v).normalize();else if(t===Ss)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(is.x=n.normal.x>0?e.max.x:e.min.x,is.y=n.normal.y>0?e.max.y:e.min.y,is.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vc(){let s=null,e=!1,t=null,i=null;function n(r,o){t(r,o),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function mf(s,e){const t=e.isWebGL2,i=new WeakMap;function n(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(s.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,n(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class ji extends kt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*f-o;for(let v=0;v<c;v++){const x=v*h-r;g.push(x,-S,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const v=S+c*m,x=S+c*(m+1),E=S+1+c*(m+1),A=S+1+c*m;d.push(v,x,A),d.push(x,E,A)}this.setIndex(d),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.widthSegments,e.heightSegments)}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_d=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Up=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:gf,alphahash_pars_fragment:_f,alphamap_fragment:vf,alphamap_pars_fragment:xf,alphatest_fragment:Sf,alphatest_pars_fragment:yf,aomap_fragment:Mf,aomap_pars_fragment:Ef,begin_vertex:Tf,beginnormal_vertex:bf,bsdfs:Af,iridescence_fragment:wf,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Uf,color_fragment:Df,color_pars_fragment:If,color_pars_vertex:Ff,color_vertex:Nf,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:kf,displacementmap_pars_vertex:zf,displacementmap_vertex:Gf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Vf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:Yf,envmap_common_pars_fragment:qf,envmap_pars_fragment:jf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:od,envmap_vertex:Zf,fog_vertex:Jf,fog_pars_vertex:Qf,fog_fragment:$f,fog_pars_fragment:ed,gradientmap_pars_fragment:td,lightmap_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:rd,lights_lambert_pars_fragment:sd,lights_pars_begin:ad,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:ud,lights_phong_pars_fragment:hd,lights_physical_fragment:fd,lights_physical_pars_fragment:dd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:Sd,map_fragment:yd,map_pars_fragment:Md,map_particle_fragment:Ed,map_particle_pars_fragment:Td,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Ad,morphcolor_vertex:wd,morphnormal_vertex:Rd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Ud,normal_pars_fragment:Dd,normal_pars_vertex:Id,normal_vertex:Fd,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:zd,opaque_fragment:Gd,packing:Hd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:Yd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:$d,skinning_pars_vertex:ep,skinning_vertex:tp,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:rp,tonemapping_fragment:sp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:up,uv_vertex:hp,worldpos_vertex:fp,background_vert:dp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:vp,depth_vert:xp,depth_frag:Sp,distanceRGBA_vert:yp,distanceRGBA_frag:Mp,equirect_vert:Ep,equirect_frag:Tp,linedashed_vert:bp,linedashed_frag:Ap,meshbasic_vert:wp,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Up,meshnormal_vert:Dp,meshnormal_frag:Ip,meshphong_vert:Fp,meshphong_frag:Np,meshphysical_vert:Op,meshphysical_frag:Bp,meshtoon_vert:kp,meshtoon_frag:zp,points_vert:Gp,points_frag:Hp,shadow_vert:Vp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:Yp},Le={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},hn={basic:{uniforms:bt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:bt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:bt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:bt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:bt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:bt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:bt([Le.points,Le.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:bt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:bt([Le.common,Le.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:bt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:bt([Le.sprite,Le.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:bt([Le.common,Le.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:bt([Le.lights,Le.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};hn.physical={uniforms:bt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const rs={r:0,b:0,g:0};function qp(s,e,t,i,n,r,o){const a=new Ke(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(p,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===bs)?(u===void 0&&(u=new Mt(new zn(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Yi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=v.colorSpace!==tt,(h!==v||f!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mt(new ji(2,2),new ii({name:"BackgroundMaterial",uniforms:Yi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=v.colorSpace!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(rs,kc(s)),i.buffers.color.setClear(rs.r,rs.g,rs.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function jp(s,e,t,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(I,B,X,H,q){let V=!1;if(o){const k=_(H,X,B);c!==k&&(c=k,d(c.object)),V=m(I,H,X,q),V&&S(I,H,X,q)}else{const k=B.wireframe===!0;(c.geometry!==H.id||c.program!==X.id||c.wireframe!==k)&&(c.geometry=H.id,c.program=X.id,c.wireframe=k,V=!0)}q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,F(I,B,X,H),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return i.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,B,X){const H=X.wireframe===!0;let q=a[I.id];q===void 0&&(q={},a[I.id]=q);let V=q[B.id];V===void 0&&(V={},q[B.id]=V);let k=V[H];return k===void 0&&(k=p(f()),V[H]=k),k}function p(I){const B=[],X=[],H=[];for(let q=0;q<n;q++)B[q]=0,X[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:H,object:I,attributes:{},index:null}}function m(I,B,X,H){const q=c.attributes,V=B.attributes;let k=0;const w=X.getAttributes();for(const D in w)if(w[D].location>=0){const Y=q[D];let j=V[D];if(j===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),Y===void 0||Y.attribute!==j||j&&Y.data!==j.data)return!0;k++}return c.attributesNum!==k||c.index!==H}function S(I,B,X,H){const q={},V=B.attributes;let k=0;const w=X.getAttributes();for(const D in w)if(w[D].location>=0){let Y=V[D];Y===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));const j={};j.attribute=Y,Y&&Y.data&&(j.data=Y.data),q[D]=j,k++}c.attributes=q,c.attributesNum=k,c.index=H}function v(){const I=c.newAttributes;for(let B=0,X=I.length;B<X;B++)I[B]=0}function x(I){E(I,0)}function E(I,B){const X=c.newAttributes,H=c.enabledAttributes,q=c.attributeDivisors;X[I]=1,H[I]===0&&(s.enableVertexAttribArray(I),H[I]=1),q[I]!==B&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),q[I]=B)}function A(){const I=c.newAttributes,B=c.enabledAttributes;for(let X=0,H=B.length;X<H;X++)B[X]!==I[X]&&(s.disableVertexAttribArray(X),B[X]=0)}function b(I,B,X,H,q,V,k){k===!0?s.vertexAttribIPointer(I,B,X,q,V):s.vertexAttribPointer(I,B,X,H,q,V)}function F(I,B,X,H){if(i.isWebGL2===!1&&(I.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=H.attributes,V=X.getAttributes(),k=B.defaultAttributeValues;for(const w in V){const D=V[w];if(D.location>=0){let K=q[w];if(K===void 0&&(w==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),w==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const Y=K.normalized,j=K.itemSize,le=t.get(K);if(le===void 0)continue;const Q=le.buffer,ie=le.type,Te=le.bytesPerElement,Ue=i.isWebGL2===!0&&(ie===s.INT||ie===s.UNSIGNED_INT||K.gpuType===Ec);if(K.isInterleavedBufferAttribute){const pe=K.data,C=pe.stride,ve=K.offset;if(pe.isInstancedInterleavedBuffer){for(let $=0;$<D.locationSize;$++)E(D.location+$,pe.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let $=0;$<D.locationSize;$++)x(D.location+$);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let $=0;$<D.locationSize;$++)b(D.location+$,j/D.locationSize,ie,Y,C*Te,(ve+j/D.locationSize*$)*Te,Ue)}else{if(K.isInstancedBufferAttribute){for(let pe=0;pe<D.locationSize;pe++)E(D.location+pe,K.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<D.locationSize;pe++)x(D.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let pe=0;pe<D.locationSize;pe++)b(D.location+pe,j/D.locationSize,ie,Y,j*Te,j/D.locationSize*pe*Te,Ue)}}else if(k!==void 0){const Y=k[w];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(D.location,Y);break;case 3:s.vertexAttrib3fv(D.location,Y);break;case 4:s.vertexAttrib4fv(D.location,Y);break;default:s.vertexAttrib1fv(D.location,Y)}}}}A()}function T(){U();for(const I in a){const B=a[I];for(const X in B){const H=B[X];for(const q in H)g(H[q].object),delete H[q];delete B[X]}delete a[I]}}function y(I){if(a[I.id]===void 0)return;const B=a[I.id];for(const X in B){const H=B[X];for(const q in H)g(H[q].object),delete H[q];delete B[X]}delete a[I.id]}function G(I){for(const B in a){const X=a[B];if(X[I.id]===void 0)continue;const H=X[I.id];for(const q in H)g(H[q].object),delete H[q];delete X[I.id]}}function U(){P(),u=!0,c!==l&&(c=l,d(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:x,disableUnusedAttributes:A}}function Kp(s,e,t,i){const n=i.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(n)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Zp(s,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=o||e.has("OES_texture_float"),E=v&&x,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:A}}function Jp(s){const e=this;let t=null,i=0,n=!1,r=!1;const o=new In,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!n||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,v=S*4;let x=m.clippingState||null;l.value=x,x=u(g,f,v,d);for(let E=0;E!==v;++E)x[E]=t[E];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Qp(s){let e=new WeakMap;function t(o,a){return a===Ra?o.mapping=Vi:a===Ca&&(o.mapping=Wi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ra||a===Ca)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ff(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Wc extends Gc{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,ml=[.125,.215,.35,.446,.526,.582],jn=20,ha=new Wc,gl=new Ke;let fa=null;const qn=(1+Math.sqrt(5))/2,Ri=1/qn,_l=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,qn,Ri),new W(0,qn,-Ri),new W(Ri,0,qn),new W(-Ri,0,qn),new W(qn,Ri,0),new W(-qn,Ri,0)];class vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){fa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fa),e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Tr,format:on,colorSpace:fn,depthBuffer:!1},n=xl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(r)),this._blurMaterial=em(r,e,t)}return n}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,i,n){const a=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(gl),u.toneMapping=Bn,u.autoClear=!1;const d=new Pr({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new Mt(new zn,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(gl),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;ss(n,S*v,m>2?v:0,v,v),u.setRenderTarget(n),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Vi||e.mapping===Wi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=_l[(n-1)%_l.length];this._blur(e,n-1,n,r,o)}t.autoClear=i}_blur(e,t,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",r),this._halfBlur(o,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*jn-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):jn;p>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jn}`);const m=[];let S=0;for(let b=0;b<jn;++b){const F=b/_,T=Math.exp(-F*F/2);m.push(T),b===0?S+=T:b<p&&(S+=2*T)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[n],E=3*x*(n>v-Ni?n-v+Ni:0),A=4*(this._cubeSize-x);ss(t,E,A,3*x,2*x),l.setRenderTarget(t),l.render(h,ha)}}function $p(s){const e=[],t=[],i=[];let n=s;const r=s-Ni+1+ml.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>s-Ni?l=ml[o-s+Ni-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*d),v=new Float32Array(p*g*d),x=new Float32Array(m*g*d);for(let A=0;A<d;A++){const b=A%3*2/3-1,F=A>2?0:-1,T=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];S.set(T,_*g*A),v.set(f,p*g*A);const y=[A,A,A,A,A,A];x.set(y,m*g*A)}const E=new kt;E.setAttribute("position",new ln(S,_)),E.setAttribute("uv",new ln(v,p)),E.setAttribute("faceIndex",new ln(x,m)),e.push(E),n>Ni&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xl(s,e,t){const i=new ti(s,e,t);return i.texture.mapping=bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function em(s,e,t){const i=new Float32Array(jn),n=new W(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Sl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function yl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tm(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ra||l===Ca,u=l===Vi||l===Wi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new vl(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&n(h)){t===null&&(t=new vl(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nm(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function im(s,e,t,i){const n={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete n[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let v=0,x=S.length;v<x;v+=3){const E=S[v+0],A=S[v+1],b=S[v+2];f.push(E,A,A,b,b,E)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,x=S.length/3-1;v<x;v+=3){const E=v+0,A=v+1,b=v+2;f.push(E,A,A,b,b,E)}}else return;const p=new(Lc(f)?Bc:Oc)(f,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rm(s,e,t,i){const n=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let _,p;if(n)_=s,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function sm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function am(s,e){return s[0]-e[0]}function om(s,e){return Math.abs(e[1])-Math.abs(s[1])}function lm(s,e,t){const i={},n=new Float32Array(8),r=new WeakMap,o=new ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let B=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var d=B;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let T=0;v===!0&&(T=1),x===!0&&(T=2),E===!0&&(T=3);let y=u.attributes.position.count*T,G=1;y>e.maxTextureSize&&(G=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const U=new Float32Array(y*G*4*_),P=new Ic(U,y,G,_);P.type=Nn,P.needsUpdate=!0;const I=T*4;for(let X=0;X<_;X++){const H=A[X],q=b[X],V=F[X],k=y*G*4*X;for(let w=0;w<H.count;w++){const D=w*I;v===!0&&(o.fromBufferAttribute(H,w),U[k+D+0]=o.x,U[k+D+1]=o.y,U[k+D+2]=o.z,U[k+D+3]=0),x===!0&&(o.fromBufferAttribute(q,w),U[k+D+4]=o.x,U[k+D+5]=o.y,U[k+D+6]=o.z,U[k+D+7]=0),E===!0&&(o.fromBufferAttribute(V,w),U[k+D+8]=o.x,U[k+D+9]=o.y,U[k+D+10]=o.z,U[k+D+11]=V.itemSize===4?o.w:1)}}p={count:_,texture:P,size:new Re(y,G)},r.set(u,p),u.addEventListener("dispose",B)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const S=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<g;x++){const E=_[x];E[0]=x,E[1]=f[x]}_.sort(om);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(am);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const E=a[x],A=E[0],b=E[1];A!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+x)!==p[A]&&u.setAttribute("morphTarget"+x,p[A]),m&&u.getAttribute("morphNormal"+x)!==m[A]&&u.setAttribute("morphNormal"+x,m[A]),n[x]=b,S+=b):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),n[x]=0)}const v=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function cm(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Xc=new Dt,Yc=new Ic,qc=new Kh,jc=new Hc,Ml=[],El=[],Tl=new Float32Array(16),bl=new Float32Array(9),Al=new Float32Array(4);function Ki(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Ml[n];if(r===void 0&&(r=new Float32Array(n),Ml[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ut(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function ht(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Rs(s,e){let t=El[e];t===void 0&&(t=new Int32Array(e),El[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function um(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2fv(this.addr,e),ht(t,e)}}function fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;s.uniform3fv(this.addr,e),ht(t,e)}}function dm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4fv(this.addr,e),ht(t,e)}}function pm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;Al.set(i),s.uniformMatrix2fv(this.addr,!1,Al),ht(t,i)}}function mm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;bl.set(i),s.uniformMatrix3fv(this.addr,!1,bl),ht(t,i)}}function gm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;Tl.set(i),s.uniformMatrix4fv(this.addr,!1,Tl),ht(t,i)}}function _m(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2iv(this.addr,e),ht(t,e)}}function xm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;s.uniform3iv(this.addr,e),ht(t,e)}}function Sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4iv(this.addr,e),ht(t,e)}}function ym(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2uiv(this.addr,e),ht(t,e)}}function Em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;s.uniform3uiv(this.addr,e),ht(t,e)}}function Tm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4uiv(this.addr,e),ht(t,e)}}function bm(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Xc,n)}function Am(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||qc,n)}function wm(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||jc,n)}function Rm(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Yc,n)}function Cm(s){switch(s){case 5126:return um;case 35664:return hm;case 35665:return fm;case 35666:return dm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return Sm;case 5125:return ym;case 36294:return Mm;case 36295:return Em;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(s,e){s.uniform1fv(this.addr,e)}function Lm(s,e){const t=Ki(e,this.size,2);s.uniform2fv(this.addr,t)}function Um(s,e){const t=Ki(e,this.size,3);s.uniform3fv(this.addr,t)}function Dm(s,e){const t=Ki(e,this.size,4);s.uniform4fv(this.addr,t)}function Im(s,e){const t=Ki(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Fm(s,e){const t=Ki(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Nm(s,e){const t=Ki(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Om(s,e){s.uniform1iv(this.addr,e)}function Bm(s,e){s.uniform2iv(this.addr,e)}function km(s,e){s.uniform3iv(this.addr,e)}function zm(s,e){s.uniform4iv(this.addr,e)}function Gm(s,e){s.uniform1uiv(this.addr,e)}function Hm(s,e){s.uniform2uiv(this.addr,e)}function Vm(s,e){s.uniform3uiv(this.addr,e)}function Wm(s,e){s.uniform4uiv(this.addr,e)}function Xm(s,e,t){const i=this.cache,n=e.length,r=Rs(t,n);ut(i,r)||(s.uniform1iv(this.addr,r),ht(i,r));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Xc,r[o])}function Ym(s,e,t){const i=this.cache,n=e.length,r=Rs(t,n);ut(i,r)||(s.uniform1iv(this.addr,r),ht(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||qc,r[o])}function qm(s,e,t){const i=this.cache,n=e.length,r=Rs(t,n);ut(i,r)||(s.uniform1iv(this.addr,r),ht(i,r));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||jc,r[o])}function jm(s,e,t){const i=this.cache,n=e.length,r=Rs(t,n);ut(i,r)||(s.uniform1iv(this.addr,r),ht(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Yc,r[o])}function Km(s){switch(s){case 5126:return Pm;case 35664:return Lm;case 35665:return Um;case 35666:return Dm;case 35674:return Im;case 35675:return Fm;case 35676:return Nm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return km;case 35669:case 35673:return zm;case 5125:return Gm;case 36294:return Hm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return jm}}class Zm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Cm(t.type)}}class Jm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Km(t.type)}}class Qm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(e,t[a.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function wl(s,e){s.seq.push(e),s.map[e.id]=e}function $m(s,e,t){const i=s.name,n=i.length;for(da.lastIndex=0;;){const r=da.exec(i),o=da.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){wl(t,c===void 0?new Zm(a,s,e):new Jm(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Qm(a),wl(t,h)),t=h}}}class gs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),o=e.getUniformLocation(t,r.name);$m(r,o,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Rl(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let eg=0;function tg(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ng(s){switch(s){case fn:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Cl(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+tg(s.getShaderSource(e),o)}else return n}function ig(s,e){const t=ng(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function rg(s,e){let t;switch(e){case $u:t="Linear";break;case eh:t="Reinhard";break;case th:t="OptimizedCineon";break;case nh:t="ACESFilmic";break;case ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function ag(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function og(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function dr(s){return s!==""}function Pl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(s){return s.replace(lg,ug)}const cg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ug(s,e){let t=qe[e];if(t===void 0){const i=cg.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(s){return s.replace(hg,fg)}function fg(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Dl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vi:case Wi:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function gg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ts:e="ENVMAP_BLENDING_MULTIPLY";break;case Ju:e="ENVMAP_BLENDING_MIX";break;case Qu:e="ENVMAP_BLENDING_ADD";break}return e}function _g(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vg(s,e,t,i){const n=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dg(t),c=pg(t),u=mg(t),h=gg(t),f=_g(t),d=t.isWebGL2?"":sg(t),g=ag(r),_=n.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`)):(p=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),m=[d,Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Bn?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ig("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Ia(o),o=Pl(o,t),o=Ll(o,t),a=Ia(a),a=Pl(a,t),a=Ll(a,t),o=Ul(o),a=Ul(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===$o?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=S+p+o,x=S+m+a,E=Rl(n,n.VERTEX_SHADER,v),A=Rl(n,n.FRAGMENT_SHADER,x);if(n.attachShader(_,E),n.attachShader(_,A),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_),s.debug.checkShaderErrors){const T=n.getProgramInfoLog(_).trim(),y=n.getShaderInfoLog(E).trim(),G=n.getShaderInfoLog(A).trim();let U=!0,P=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,E,A);else{const I=Cl(n,E,"vertex"),B=Cl(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Program Info Log: `+T+`
`+I+`
`+B)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(y===""||G==="")&&(P=!1);P&&(this.diagnostics={runnable:U,programLog:T,vertexShader:{log:y,prefix:p},fragmentShader:{log:G,prefix:m}})}n.deleteShader(E),n.deleteShader(A);let b;this.getUniforms=function(){return b===void 0&&(b=new gs(n,_)),b};let F;return this.getAttributes=function(){return F===void 0&&(F=og(n,_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let xg=0;class Sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yg(e),t.set(e,i)),i}}class yg{constructor(e){this.id=xg++,this.code=e,this.usedTimes=0}}function Mg(s,e,t,i,n,r,o){const a=new Fc,l=new Sg,c=[],u=n.isWebGL2,h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return T===0?"uv":`uv${T}`}function p(T,y,G,U,P){const I=U.fog,B=P.geometry,X=T.isMeshStandardMaterial?U.environment:null,H=(T.isMeshStandardMaterial?t:e).get(T.envMap||X),q=H&&H.mapping===bs?H.image.height:null,V=g[T.type];T.precision!==null&&(d=n.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const k=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,w=k!==void 0?k.length:0;let D=0;B.morphAttributes.position!==void 0&&(D=1),B.morphAttributes.normal!==void 0&&(D=2),B.morphAttributes.color!==void 0&&(D=3);let K,Y,j,le;if(V){const Ve=hn[V];K=Ve.vertexShader,Y=Ve.fragmentShader}else K=T.vertexShader,Y=T.fragmentShader,l.update(T),j=l.getVertexShaderID(T),le=l.getFragmentShaderID(T);const Q=s.getRenderTarget(),ie=P.isInstancedMesh===!0,Te=!!T.map,Ue=!!T.matcap,pe=!!H,C=!!T.aoMap,ve=!!T.lightMap,$=!!T.bumpMap,ce=!!T.normalMap,oe=!!T.displacementMap,Ce=!!T.emissiveMap,ae=!!T.metalnessMap,me=!!T.roughnessMap,Me=T.anisotropy>0,re=T.clearcoat>0,Pe=T.iridescence>0,R=T.sheen>0,M=T.transmission>0,z=Me&&!!T.anisotropyMap,Se=re&&!!T.clearcoatMap,ee=re&&!!T.clearcoatNormalMap,he=re&&!!T.clearcoatRoughnessMap,be=Pe&&!!T.iridescenceMap,_e=Pe&&!!T.iridescenceThicknessMap,Z=R&&!!T.sheenColorMap,N=R&&!!T.sheenRoughnessMap,se=!!T.specularMap,xe=!!T.specularColorMap,ue=!!T.specularIntensityMap,Ee=M&&!!T.transmissionMap,De=M&&!!T.thicknessMap,ke=!!T.gradientMap,O=!!T.alphaMap,ge=T.alphaTest>0,J=!!T.alphaHash,Ae=!!T.extensions,ye=!!B.attributes.uv1,Ie=!!B.attributes.uv2,ze=!!B.attributes.uv3;let Ne=Bn;return T.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ne=s.toneMapping),{isWebGL2:u,shaderID:V,shaderType:T.type,shaderName:T.name,vertexShader:K,fragmentShader:Y,defines:T.defines,customVertexShaderID:j,customFragmentShaderID:le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,instancing:ie,instancingColor:ie&&P.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:fn,map:Te,matcap:Ue,envMap:pe,envMapMode:pe&&H.mapping,envMapCubeUVHeight:q,aoMap:C,lightMap:ve,bumpMap:$,normalMap:ce,displacementMap:f&&oe,emissiveMap:Ce,normalMapObjectSpace:ce&&T.normalMapType===mh,normalMapTangentSpace:ce&&T.normalMapType===Wa,metalnessMap:ae,roughnessMap:me,anisotropy:Me,anisotropyMap:z,clearcoat:re,clearcoatMap:Se,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,iridescence:Pe,iridescenceMap:be,iridescenceThicknessMap:_e,sheen:R,sheenColorMap:Z,sheenRoughnessMap:N,specularMap:se,specularColorMap:xe,specularIntensityMap:ue,transmission:M,transmissionMap:Ee,thicknessMap:De,gradientMap:ke,opaque:T.transparent===!1&&T.blending===zi,alphaMap:O,alphaTest:ge,alphaHash:J,combine:T.combine,mapUv:Te&&_(T.map.channel),aoMapUv:C&&_(T.aoMap.channel),lightMapUv:ve&&_(T.lightMap.channel),bumpMapUv:$&&_(T.bumpMap.channel),normalMapUv:ce&&_(T.normalMap.channel),displacementMapUv:oe&&_(T.displacementMap.channel),emissiveMapUv:Ce&&_(T.emissiveMap.channel),metalnessMapUv:ae&&_(T.metalnessMap.channel),roughnessMapUv:me&&_(T.roughnessMap.channel),anisotropyMapUv:z&&_(T.anisotropyMap.channel),clearcoatMapUv:Se&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:N&&_(T.sheenRoughnessMap.channel),specularMapUv:se&&_(T.specularMap.channel),specularColorMapUv:xe&&_(T.specularColorMap.channel),specularIntensityMapUv:ue&&_(T.specularIntensityMap.channel),transmissionMapUv:Ee&&_(T.transmissionMap.channel),thicknessMapUv:De&&_(T.thicknessMap.channel),alphaMapUv:O&&_(T.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ce||Me),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:ye,vertexUv2s:Ie,vertexUv3s:ze,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Te||O),fog:!!I,useFog:T.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:D,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Te&&T.map.isVideoTexture===!0&&T.map.colorSpace===tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===sn,flipSided:T.side===wt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Ae&&T.extensions.derivatives===!0,extensionFragDepth:Ae&&T.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function m(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)y.push(G),y.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(S(y,T),v(y,T),y.push(s.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function S(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function v(T,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function x(T){const y=g[T.type];let G;if(y){const U=hn[y];G=zc.clone(U.uniforms)}else G=T.uniforms;return G}function E(T,y){let G;for(let U=0,P=c.length;U<P;U++){const I=c[U];if(I.cacheKey===y){G=I,++G.usedTimes;break}}return G===void 0&&(G=new vg(s,y,T,r),c.push(G)),G}function A(T){if(--T.usedTimes===0){const y=c.indexOf(T);c[y]=c[c.length-1],c.pop(),T.destroy()}}function b(T){l.remove(T)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:F}}function Eg(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Tg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Il(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fl(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(h,f,d,g,_,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||Tg),i.length>1&&i.sort(f||Il),n.length>1&&n.sort(f||Il)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:u,sort:c}}function bg(){let s=new WeakMap;function e(i,n){const r=s.get(i);let o;return r===void 0?(o=new Fl,s.set(i,[o])):n>=r.length?(o=new Fl,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ag(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ke};break;case"SpotLight":t={position:new W,direction:new W,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function wg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Rg=0;function Cg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Pg(s,e){const t=new Ag,i=wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)n.probe.push(new W);const r=new W,o=new rt,a=new rt;function l(u,h){let f=0,d=0,g=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let _=0,p=0,m=0,S=0,v=0,x=0,E=0,A=0,b=0,F=0;u.sort(Cg);const T=h===!0?Math.PI:1;for(let G=0,U=u.length;G<U;G++){const P=u[G],I=P.color,B=P.intensity,X=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=I.r*B*T,d+=I.g*B*T,g+=I.b*B*T;else if(P.isLightProbe)for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],B);else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const V=P.shadow,k=i.get(P);k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[_]=k,n.directionalShadowMap[_]=H,n.directionalShadowMatrix[_]=P.shadow.matrix,x++}n.directional[_]=q,_++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(I).multiplyScalar(B*T),q.distance=X,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[m]=q;const V=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,V.updateMatrices(P),P.castShadow&&F++),n.spotLightMatrix[m]=V.matrix,P.castShadow){const k=i.get(P);k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[m]=k,n.spotShadowMap[m]=H,A++}m++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(I).multiplyScalar(B),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[S]=q,S++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*T),q.distance=P.distance,q.decay=P.decay,P.castShadow){const V=P.shadow,k=i.get(P);k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=P.shadow.matrix,E++}n.point[p]=q,p++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(B*T),q.groundColor.copy(P.groundColor).multiplyScalar(B*T),n.hemi[v]=q,v++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=g;const y=n.hash;(y.directionalLength!==_||y.pointLength!==p||y.spotLength!==m||y.rectAreaLength!==S||y.hemiLength!==v||y.numDirectionalShadows!==x||y.numPointShadows!==E||y.numSpotShadows!==A||y.numSpotMaps!==b)&&(n.directional.length=_,n.spot.length=m,n.rectArea.length=S,n.point.length=p,n.hemi.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+b-F,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=F,y.directionalLength=_,y.pointLength=p,y.spotLength=m,y.rectAreaLength=S,y.hemiLength=v,y.numDirectionalShadows=x,y.numPointShadows=E,y.numSpotShadows=A,y.numSpotMaps=b,n.version=Rg++)}function c(u,h){let f=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const x=u[S];if(x.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(x.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),a.identity(),o.copy(x.matrixWorld),o.premultiply(m),a.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const E=n.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:n}}function Nl(s,e){const t=new Pg(s,e),i=[],n=[];function r(){i.length=0,n.length=0}function o(h){i.push(h)}function a(h){n.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lg(s,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Nl(s,e),t.set(r,[l])):o>=a.length?(l=new Nl(s,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class Kc extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zc extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ig(s,e,t){let i=new qa;const n=new Re,r=new Re,o=new ot,a=new Kc({depthPacking:Pc}),l=new Zc,c={},u=t.maxTextureSize,h={[An]:wt,[wt]:An,[sn]:sn},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Ug,fragmentShader:Dg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let m=this.type;this.render=function(E,A,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const F=s.getRenderTarget(),T=s.getActiveCubeFace(),y=s.getActiveMipmapLevel(),G=s.state;G.setBlending(On),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const U=m!==En&&this.type===En,P=m===En&&this.type!==En;for(let I=0,B=E.length;I<B;I++){const X=E[I],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const q=H.getFrameExtents();if(n.multiply(q),r.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/q.x),n.x=r.x*q.x,H.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/q.y),n.y=r.y*q.y,H.mapSize.y=r.y)),H.map===null||U===!0||P===!0){const k=this.type!==En?{minFilter:At,magFilter:At}:{};H.map!==null&&H.map.dispose(),H.map=new ti(n.x,n.y,k),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const V=H.getViewportCount();for(let k=0;k<V;k++){const w=H.getViewport(k);o.set(r.x*w.x,r.y*w.y,r.x*w.z,r.y*w.w),G.viewport(o),H.updateMatrices(X,k),i=H.getFrustum(),x(A,b,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===En&&S(H,b),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(F,T,y)};function S(E,A){const b=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ti(n.x,n.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,b,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,b,d,_,null)}function v(E,A,b,F){let T=null;const y=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(y!==void 0)T=y;else if(T=b.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=T.uuid,U=A.uuid;let P=c[G];P===void 0&&(P={},c[G]=P);let I=P[U];I===void 0&&(I=T.clone(),P[U]=I),T=I}if(T.visible=A.visible,T.wireframe=A.wireframe,F===En?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const G=s.properties.get(T);G.light=b}return T}function x(E,A,b,F,T){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===En)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const U=e.update(E),P=E.material;if(Array.isArray(P)){const I=U.groups;for(let B=0,X=I.length;B<X;B++){const H=I[B],q=P[H.materialIndex];if(q&&q.visible){const V=v(E,q,F,T);s.renderBufferDirect(b,null,U,V,E,H)}}}else if(P.visible){const I=v(E,P,F,T);s.renderBufferDirect(b,null,U,I,E,null)}}const G=E.children;for(let U=0,P=G.length;U<P;U++)x(G[U],A,b,F,T)}}function Fg(s,e,t){const i=t.isWebGL2;function n(){let O=!1;const ge=new ot;let J=null;const Ae=new ot(0,0,0,0);return{setMask:function(ye){J!==ye&&!O&&(s.colorMask(ye,ye,ye,ye),J=ye)},setLocked:function(ye){O=ye},setClear:function(ye,Ie,ze,Ne,Be){Be===!0&&(ye*=Ne,Ie*=Ne,ze*=Ne),ge.set(ye,Ie,ze,Ne),Ae.equals(ge)===!1&&(s.clearColor(ye,Ie,ze,Ne),Ae.copy(ge))},reset:function(){O=!1,J=null,Ae.set(-1,0,0,0)}}}function r(){let O=!1,ge=null,J=null,Ae=null;return{setTest:function(ye){ye?Q(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(ye){ge!==ye&&!O&&(s.depthMask(ye),ge=ye)},setFunc:function(ye){if(J!==ye){switch(ye){case Wu:s.depthFunc(s.NEVER);break;case Xu:s.depthFunc(s.ALWAYS);break;case Yu:s.depthFunc(s.LESS);break;case wa:s.depthFunc(s.LEQUAL);break;case qu:s.depthFunc(s.EQUAL);break;case ju:s.depthFunc(s.GEQUAL);break;case Ku:s.depthFunc(s.GREATER);break;case Zu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ye}},setLocked:function(ye){O=ye},setClear:function(ye){Ae!==ye&&(s.clearDepth(ye),Ae=ye)},reset:function(){O=!1,ge=null,J=null,Ae=null}}}function o(){let O=!1,ge=null,J=null,Ae=null,ye=null,Ie=null,ze=null,Ne=null,Be=null;return{setTest:function(Ve){O||(Ve?Q(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(Ve){ge!==Ve&&!O&&(s.stencilMask(Ve),ge=Ve)},setFunc:function(Ve,Qe,Ze){(J!==Ve||Ae!==Qe||ye!==Ze)&&(s.stencilFunc(Ve,Qe,Ze),J=Ve,Ae=Qe,ye=Ze)},setOp:function(Ve,Qe,Ze){(Ie!==Ve||ze!==Qe||Ne!==Ze)&&(s.stencilOp(Ve,Qe,Ze),Ie=Ve,ze=Qe,Ne=Ze)},setLocked:function(Ve){O=Ve},setClear:function(Ve){Be!==Ve&&(s.clearStencil(Ve),Be=Ve)},reset:function(){O=!1,ge=null,J=null,Ae=null,ye=null,Ie=null,ze=null,Ne=null,Be=null}}}const a=new n,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,x=null,E=null,A=null,b=null,F=null,T=!1,y=null,G=null,U=null,P=null,I=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=H>=1):q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=H>=2);let V=null,k={};const w=s.getParameter(s.SCISSOR_BOX),D=s.getParameter(s.VIEWPORT),K=new ot().fromArray(w),Y=new ot().fromArray(D);function j(O,ge,J,Ae){const ye=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(O,Ie),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<J;ze++)i&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(ge,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(ge+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return Ie}const le={};le[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(s.DEPTH_TEST),l.setFunc(wa),oe(!1),Ce(So),Q(s.CULL_FACE),$(On);function Q(O){f[O]!==!0&&(s.enable(O),f[O]=!0)}function ie(O){f[O]!==!1&&(s.disable(O),f[O]=!1)}function Te(O,ge){return d[O]!==ge?(s.bindFramebuffer(O,ge),d[O]=ge,i&&(O===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ge),O===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ge)),!0):!1}function Ue(O,ge){let J=_,Ae=!1;if(O)if(J=g.get(ge),J===void 0&&(J=[],g.set(ge,J)),O.isWebGLMultipleRenderTargets){const ye=O.texture;if(J.length!==ye.length||J[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,ze=ye.length;Ie<ze;Ie++)J[Ie]=s.COLOR_ATTACHMENT0+Ie;J.length=ye.length,Ae=!0}}else J[0]!==s.COLOR_ATTACHMENT0&&(J[0]=s.COLOR_ATTACHMENT0,Ae=!0);else J[0]!==s.BACK&&(J[0]=s.BACK,Ae=!0);Ae&&(t.isWebGL2?s.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function pe(O){return p!==O?(s.useProgram(O),p=O,!0):!1}const C={[Ui]:s.FUNC_ADD,[Du]:s.FUNC_SUBTRACT,[Iu]:s.FUNC_REVERSE_SUBTRACT};if(i)C[To]=s.MIN,C[bo]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(C[To]=O.MIN_EXT,C[bo]=O.MAX_EXT)}const ve={[Fu]:s.ZERO,[Nu]:s.ONE,[Ou]:s.SRC_COLOR,[Sc]:s.SRC_ALPHA,[Vu]:s.SRC_ALPHA_SATURATE,[Gu]:s.DST_COLOR,[ku]:s.DST_ALPHA,[Bu]:s.ONE_MINUS_SRC_COLOR,[yc]:s.ONE_MINUS_SRC_ALPHA,[Hu]:s.ONE_MINUS_DST_COLOR,[zu]:s.ONE_MINUS_DST_ALPHA};function $(O,ge,J,Ae,ye,Ie,ze,Ne){if(O===On){m===!0&&(ie(s.BLEND),m=!1);return}if(m===!1&&(Q(s.BLEND),m=!0),O!==Uu){if(O!==S||Ne!==T){if((v!==Ui||A!==Ui)&&(s.blendEquation(s.FUNC_ADD),v=Ui,A=Ui),Ne)switch(O){case zi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yo:s.blendFunc(s.ONE,s.ONE);break;case Mo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Mo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,E=null,b=null,F=null,S=O,T=Ne}return}ye=ye||ge,Ie=Ie||J,ze=ze||Ae,(ge!==v||ye!==A)&&(s.blendEquationSeparate(C[ge],C[ye]),v=ge,A=ye),(J!==x||Ae!==E||Ie!==b||ze!==F)&&(s.blendFuncSeparate(ve[J],ve[Ae],ve[Ie],ve[ze]),x=J,E=Ae,b=Ie,F=ze),S=O,T=!1}function ce(O,ge){O.side===sn?ie(s.CULL_FACE):Q(s.CULL_FACE);let J=O.side===wt;ge&&(J=!J),oe(J),O.blending===zi&&O.transparent===!1?$(On):$(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Ae=O.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),me(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(O){y!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),y=O)}function Ce(O){O!==Cu?(Q(s.CULL_FACE),O!==G&&(O===So?s.cullFace(s.BACK):O===Pu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),G=O}function ae(O){O!==U&&(X&&s.lineWidth(O),U=O)}function me(O,ge,J){O?(Q(s.POLYGON_OFFSET_FILL),(P!==ge||I!==J)&&(s.polygonOffset(ge,J),P=ge,I=J)):ie(s.POLYGON_OFFSET_FILL)}function Me(O){O?Q(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function re(O){O===void 0&&(O=s.TEXTURE0+B-1),V!==O&&(s.activeTexture(O),V=O)}function Pe(O,ge,J){J===void 0&&(V===null?J=s.TEXTURE0+B-1:J=V);let Ae=k[J];Ae===void 0&&(Ae={type:void 0,texture:void 0},k[J]=Ae),(Ae.type!==O||Ae.texture!==ge)&&(V!==J&&(s.activeTexture(J),V=J),s.bindTexture(O,ge||le[O]),Ae.type=O,Ae.texture=ge)}function R(){const O=k[V];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function N(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(O){K.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),K.copy(O))}function ue(O){Y.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Y.copy(O))}function Ee(O,ge){let J=h.get(ge);J===void 0&&(J=new WeakMap,h.set(ge,J));let Ae=J.get(O);Ae===void 0&&(Ae=s.getUniformBlockIndex(ge,O.name),J.set(O,Ae))}function De(O,ge){const Ae=h.get(ge).get(O);u.get(ge)!==Ae&&(s.uniformBlockBinding(ge,Ae,O.__bindingPointIndex),u.set(ge,Ae))}function ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},V=null,k={},d={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,x=null,E=null,A=null,b=null,F=null,T=!1,y=null,G=null,U=null,P=null,I=null,K.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Q,disable:ie,bindFramebuffer:Te,drawBuffers:Ue,useProgram:pe,setBlending:$,setMaterial:ce,setFlipSided:oe,setCullFace:Ce,setLineWidth:ae,setPolygonOffset:me,setScissorTest:Me,activeTexture:re,bindTexture:Pe,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:N,texImage3D:se,updateUBOMapping:Ee,uniformBlockBinding:De,texStorage2D:_e,texStorage3D:Z,texSubImage2D:Se,texSubImage3D:ee,compressedTexSubImage2D:he,compressedTexSubImage3D:be,scissor:xe,viewport:ue,reset:ke}}function Ng(s,e,t,i,n,r,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,h=n.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,M){return m?new OffscreenCanvas(R,M):Es("canvas")}function v(R,M,z,Se){let ee=1;if((R.width>Se||R.height>Se)&&(ee=Se/Math.max(R.width,R.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const he=M?ys:Math.floor,be=he(ee*R.width),_e=he(ee*R.height);_===void 0&&(_=S(be,_e));const Z=z?S(be,_e):_;return Z.width=be,Z.height=_e,Z.getContext("2d").drawImage(R,0,0,be,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+be+"x"+_e+")."),Z}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return Da(R.width)&&Da(R.height)}function E(R){return a?!1:R.wrapS!==an||R.wrapT!==an||R.minFilter!==At&&R.minFilter!==Ut}function A(R,M){return R.generateMipmaps&&M&&R.minFilter!==At&&R.minFilter!==Ut}function b(R){s.generateMipmap(R)}function F(R,M,z,Se,ee=!1){if(a===!1)return M;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he=M;return M===s.RED&&(z===s.FLOAT&&(he=s.R32F),z===s.HALF_FLOAT&&(he=s.R16F),z===s.UNSIGNED_BYTE&&(he=s.R8)),M===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(he=s.R8UI),z===s.UNSIGNED_SHORT&&(he=s.R16UI),z===s.UNSIGNED_INT&&(he=s.R32UI),z===s.BYTE&&(he=s.R8I),z===s.SHORT&&(he=s.R16I),z===s.INT&&(he=s.R32I)),M===s.RG&&(z===s.FLOAT&&(he=s.RG32F),z===s.HALF_FLOAT&&(he=s.RG16F),z===s.UNSIGNED_BYTE&&(he=s.RG8)),M===s.RGBA&&(z===s.FLOAT&&(he=s.RGBA32F),z===s.HALF_FLOAT&&(he=s.RGBA16F),z===s.UNSIGNED_BYTE&&(he=Se===tt&&ee===!1?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)),(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function T(R,M,z){return A(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==At&&R.minFilter!==Ut?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function y(R){return R===At||R===Ao||R===Gs?s.NEAREST:s.LINEAR}function G(R){const M=R.target;M.removeEventListener("dispose",G),P(M),M.isVideoTexture&&g.delete(M)}function U(R){const M=R.target;M.removeEventListener("dispose",U),B(M)}function P(R){const M=i.get(R);if(M.__webglInit===void 0)return;const z=R.source,Se=p.get(z);if(Se){const ee=Se[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(R),Object.keys(Se).length===0&&p.delete(z)}i.remove(R)}function I(R){const M=i.get(R);s.deleteTexture(M.__webglTexture);const z=R.source,Se=p.get(z);delete Se[M.__cacheKey],o.memory.textures--}function B(R){const M=R.texture,z=i.get(R),Se=i.get(M);if(Se.__webglTexture!==void 0&&(s.deleteTexture(Se.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(z.__webglFramebuffer[ee]))for(let he=0;he<z.__webglFramebuffer[ee].length;he++)s.deleteFramebuffer(z.__webglFramebuffer[ee][he]);else s.deleteFramebuffer(z.__webglFramebuffer[ee]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[ee])}else{if(Array.isArray(z.__webglFramebuffer))for(let ee=0;ee<z.__webglFramebuffer.length;ee++)s.deleteFramebuffer(z.__webglFramebuffer[ee]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,he=M.length;ee<he;ee++){const be=i.get(M[ee]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(R)}let X=0;function H(){X=0}function q(){const R=X;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),X+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function k(R,M){const z=i.get(R);if(R.isVideoTexture&&re(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Se=R.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(z,R,M);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+M)}function w(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Te(z,R,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+M)}function D(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Te(z,R,M);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+M)}function K(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Ue(z,R,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+M)}const Y={[Pa]:s.REPEAT,[an]:s.CLAMP_TO_EDGE,[La]:s.MIRRORED_REPEAT},j={[At]:s.NEAREST,[Ao]:s.NEAREST_MIPMAP_NEAREST,[Gs]:s.NEAREST_MIPMAP_LINEAR,[Ut]:s.LINEAR,[rh]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},le={[_h]:s.NEVER,[Th]:s.ALWAYS,[vh]:s.LESS,[Sh]:s.LEQUAL,[xh]:s.EQUAL,[Eh]:s.GEQUAL,[yh]:s.GREATER,[Mh]:s.NOTEQUAL};function Q(R,M,z){if(z?(s.texParameteri(R,s.TEXTURE_WRAP_S,Y[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Y[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Y[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,j[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,j[M.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==an||M.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,y(M.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,y(M.minFilter)),M.minFilter!==At&&M.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===At||M.minFilter!==Gs&&M.minFilter!==Er||M.type===Nn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Tr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(s.texParameterf(R,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ie(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",G));const Se=M.source;let ee=p.get(Se);ee===void 0&&(ee={},p.set(Se,ee));const he=V(M);if(he!==R.__cacheKey){ee[he]===void 0&&(ee[he]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[he].usedTimes++;const be=ee[R.__cacheKey];be!==void 0&&(ee[R.__cacheKey].usedTimes--,be.usedTimes===0&&I(M)),R.__cacheKey=he,R.__webglTexture=ee[he].texture}return z}function Te(R,M,z){let Se=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Se=s.TEXTURE_3D);const ee=ie(R,M),he=M.source;t.bindTexture(Se,R.__webglTexture,s.TEXTURE0+z);const be=i.get(he);if(he.version!==be.__version||ee===!0){t.activeTexture(s.TEXTURE0+z),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const _e=E(M)&&x(M.image)===!1;let Z=v(M.image,_e,!1,u);Z=Pe(M,Z);const N=x(Z)||a,se=r.convert(M.format,M.colorSpace);let xe=r.convert(M.type),ue=F(M.internalFormat,se,xe,M.colorSpace,M.isVideoTexture);Q(Se,M,N);let Ee;const De=M.mipmaps,ke=a&&M.isVideoTexture!==!0,O=be.__version===void 0||ee===!0,ge=T(M,Z,N);if(M.isDepthTexture)ue=s.DEPTH_COMPONENT,a?M.type===Nn?ue=s.DEPTH_COMPONENT32F:M.type===Fn?ue=s.DEPTH_COMPONENT24:M.type===Zn?ue=s.DEPTH24_STENCIL8:ue=s.DEPTH_COMPONENT16:M.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Jn&&ue===s.DEPTH_COMPONENT&&M.type!==Va&&M.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Fn,xe=r.convert(M.type)),M.format===Xi&&ue===s.DEPTH_COMPONENT&&(ue=s.DEPTH_STENCIL,M.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Zn,xe=r.convert(M.type))),O&&(ke?t.texStorage2D(s.TEXTURE_2D,1,ue,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,ue,Z.width,Z.height,0,se,xe,null));else if(M.isDataTexture)if(De.length>0&&N){ke&&O&&t.texStorage2D(s.TEXTURE_2D,ge,ue,De[0].width,De[0].height);for(let J=0,Ae=De.length;J<Ae;J++)Ee=De[J],ke?t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ee.width,Ee.height,se,xe,Ee.data):t.texImage2D(s.TEXTURE_2D,J,ue,Ee.width,Ee.height,0,se,xe,Ee.data);M.generateMipmaps=!1}else ke?(O&&t.texStorage2D(s.TEXTURE_2D,ge,ue,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,se,xe,Z.data)):t.texImage2D(s.TEXTURE_2D,0,ue,Z.width,Z.height,0,se,xe,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&O&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ue,De[0].width,De[0].height,Z.depth);for(let J=0,Ae=De.length;J<Ae;J++)Ee=De[J],M.format!==on?se!==null?ke?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,Z.depth,se,Ee.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,ue,Ee.width,Ee.height,Z.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,Z.depth,se,xe,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,ue,Ee.width,Ee.height,Z.depth,0,se,xe,Ee.data)}else{ke&&O&&t.texStorage2D(s.TEXTURE_2D,ge,ue,De[0].width,De[0].height);for(let J=0,Ae=De.length;J<Ae;J++)Ee=De[J],M.format!==on?se!==null?ke?t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,Ee.width,Ee.height,se,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,J,ue,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ee.width,Ee.height,se,xe,Ee.data):t.texImage2D(s.TEXTURE_2D,J,ue,Ee.width,Ee.height,0,se,xe,Ee.data)}else if(M.isDataArrayTexture)ke?(O&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ue,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,se,xe,Z.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,Z.width,Z.height,Z.depth,0,se,xe,Z.data);else if(M.isData3DTexture)ke?(O&&t.texStorage3D(s.TEXTURE_3D,ge,ue,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,se,xe,Z.data)):t.texImage3D(s.TEXTURE_3D,0,ue,Z.width,Z.height,Z.depth,0,se,xe,Z.data);else if(M.isFramebufferTexture){if(O)if(ke)t.texStorage2D(s.TEXTURE_2D,ge,ue,Z.width,Z.height);else{let J=Z.width,Ae=Z.height;for(let ye=0;ye<ge;ye++)t.texImage2D(s.TEXTURE_2D,ye,ue,J,Ae,0,se,xe,null),J>>=1,Ae>>=1}}else if(De.length>0&&N){ke&&O&&t.texStorage2D(s.TEXTURE_2D,ge,ue,De[0].width,De[0].height);for(let J=0,Ae=De.length;J<Ae;J++)Ee=De[J],ke?t.texSubImage2D(s.TEXTURE_2D,J,0,0,se,xe,Ee):t.texImage2D(s.TEXTURE_2D,J,ue,se,xe,Ee);M.generateMipmaps=!1}else ke?(O&&t.texStorage2D(s.TEXTURE_2D,ge,ue,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,se,xe,Z)):t.texImage2D(s.TEXTURE_2D,0,ue,se,xe,Z);A(M,N)&&b(Se),be.__version=he.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ue(R,M,z){if(M.image.length!==6)return;const Se=ie(R,M),ee=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);const he=i.get(ee);if(ee.version!==he.__version||Se===!0){t.activeTexture(s.TEXTURE0+z),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,_e=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let J=0;J<6;J++)!be&&!_e?Z[J]=v(M.image[J],!1,!0,c):Z[J]=_e?M.image[J].image:M.image[J],Z[J]=Pe(M,Z[J]);const N=Z[0],se=x(N)||a,xe=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),Ee=F(M.internalFormat,xe,ue,M.colorSpace),De=a&&M.isVideoTexture!==!0,ke=he.__version===void 0||Se===!0;let O=T(M,N,se);Q(s.TEXTURE_CUBE_MAP,M,se);let ge;if(be){De&&ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,O,Ee,N.width,N.height);for(let J=0;J<6;J++){ge=Z[J].mipmaps;for(let Ae=0;Ae<ge.length;Ae++){const ye=ge[Ae];M.format!==on?xe!==null?De?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,ye.width,ye.height,xe,ue,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,Ee,ye.width,ye.height,0,xe,ue,ye.data)}}}else{ge=M.mipmaps,De&&ke&&(ge.length>0&&O++,t.texStorage2D(s.TEXTURE_CUBE_MAP,O,Ee,Z[0].width,Z[0].height));for(let J=0;J<6;J++)if(_e){De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Z[J].width,Z[J].height,xe,ue,Z[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ee,Z[J].width,Z[J].height,0,xe,ue,Z[J].data);for(let Ae=0;Ae<ge.length;Ae++){const Ie=ge[Ae].image[J].image;De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,Ie.width,Ie.height,xe,ue,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,Ee,Ie.width,Ie.height,0,xe,ue,Ie.data)}}else{De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe,ue,Z[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ee,xe,ue,Z[J]);for(let Ae=0;Ae<ge.length;Ae++){const ye=ge[Ae];De?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,xe,ue,ye.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,Ee,xe,ue,ye.image[J])}}}A(M,se)&&b(s.TEXTURE_CUBE_MAP),he.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function pe(R,M,z,Se,ee,he){const be=r.convert(z.format,z.colorSpace),_e=r.convert(z.type),Z=F(z.internalFormat,be,_e,z.colorSpace);if(!i.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>he),xe=Math.max(1,M.height>>he);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,he,Z,se,xe,M.depth,0,be,_e,null):t.texImage2D(ee,he,Z,se,xe,0,be,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Me(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,ee,i.get(z).__webglTexture,0,me(M)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,ee,i.get(z).__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function C(R,M,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let Se=s.DEPTH_COMPONENT16;if(z||Me(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Nn?Se=s.DEPTH_COMPONENT32F:ee.type===Fn&&(Se=s.DEPTH_COMPONENT24));const he=me(M);Me(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,Se,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,he,Se,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,Se,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const Se=me(M);z&&Me(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,s.DEPTH24_STENCIL8,M.width,M.height):Me(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const Se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<Se.length;ee++){const he=Se[ee],be=r.convert(he.format,he.colorSpace),_e=r.convert(he.type),Z=F(he.internalFormat,be,_e,he.colorSpace),N=me(M);z&&Me(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,N,Z,M.width,M.height):Me(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N,Z,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Z,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const Se=i.get(M.depthTexture).__webglTexture,ee=me(M);if(M.depthTexture.format===Jn)Me(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(M.depthTexture.format===Xi)Me(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function $(R){const M=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ve(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Se]),M.__webglDepthbuffer[Se]=s.createRenderbuffer(),C(M.__webglDepthbuffer[Se],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),C(M.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(R,M,z){const Se=i.get(R);M!==void 0&&pe(Se.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&$(R)}function oe(R){const M=R.texture,z=i.get(R),Se=i.get(M);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=M.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,he=R.isWebGLMultipleRenderTargets===!0,be=x(R)||a;if(ee){z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[_e]=[];for(let Z=0;Z<M.mipmaps.length;Z++)z.__webglFramebuffer[_e][Z]=s.createFramebuffer()}else z.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)z.__webglFramebuffer[_e]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(he)if(n.drawBuffers){const _e=R.texture;for(let Z=0,N=_e.length;Z<N;Z++){const se=i.get(_e[Z]);se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Me(R)===!1){const _e=he?M:[M];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<_e.length;Z++){const N=_e[Z];z.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);const se=r.convert(N.format,N.colorSpace),xe=r.convert(N.type),ue=F(N.internalFormat,se,xe,N.colorSpace,R.isXRRenderTarget===!0),Ee=me(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,ue,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),C(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),Q(s.TEXTURE_CUBE_MAP,M,be);for(let _e=0;_e<6;_e++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)pe(z.__webglFramebuffer[_e][Z],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Z);else pe(z.__webglFramebuffer[_e],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);A(M,be)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const _e=R.texture;for(let Z=0,N=_e.length;Z<N;Z++){const se=_e[Z],xe=i.get(se);t.bindTexture(s.TEXTURE_2D,xe.__webglTexture),Q(s.TEXTURE_2D,se,be),pe(z.__webglFramebuffer,R,se,s.COLOR_ATTACHMENT0+Z,s.TEXTURE_2D,0),A(se,be)&&b(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?_e=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,Se.__webglTexture),Q(_e,M,be),a&&M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)pe(z.__webglFramebuffer[Z],R,M,s.COLOR_ATTACHMENT0,_e,Z);else pe(z.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,_e,0);A(M,be)&&b(_e),t.unbindTexture()}R.depthBuffer&&$(R)}function Ce(R){const M=x(R)||a,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Se=0,ee=z.length;Se<ee;Se++){const he=z[Se];if(A(he,M)){const be=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_e=i.get(he).__webglTexture;t.bindTexture(be,_e),b(be),t.unbindTexture()}}}function ae(R){if(a&&R.samples>0&&Me(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,Se=R.height;let ee=s.COLOR_BUFFER_BIT;const he=[],be=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=i.get(R),Z=R.isWebGLMultipleRenderTargets===!0;if(Z)for(let N=0;N<M.length;N++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let N=0;N<M.length;N++){he.push(s.COLOR_ATTACHMENT0+N),R.depthBuffer&&he.push(be);const se=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(se===!1&&(R.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),Z&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[N]),se===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[be]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[be])),Z){const xe=i.get(M[N]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,z,Se,0,0,z,Se,ee,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let N=0;N<M.length;N++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.RENDERBUFFER,_e.__webglColorRenderbuffer[N]);const se=i.get(M[N]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.TEXTURE_2D,se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function me(R){return Math.min(h,R.samples)}function Me(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function re(R){const M=o.render.frame;g.get(R)!==M&&(g.set(R,M),R.update())}function Pe(R,M){const z=R.colorSpace,Se=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ua||z!==fn&&z!==$n&&(z===tt||z===As?a===!1?e.has("EXT_sRGB")===!0&&Se===on?(R.format=Ua,R.minFilter=Ut,R.generateMipmaps=!1):M=Uc.sRGBToLinear(M):(Se!==on||ee!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.setTexture2D=k,this.setTexture2DArray=w,this.setTexture3D=D,this.setTextureCube=K,this.rebindTextures=ce,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Me}const Og=0,ct=1;function Bg(s,e,t){const i=t.isWebGL2;function n(r,o=$n){let a;const l=o===tt||o===As?ct:Og;if(r===kn)return s.UNSIGNED_BYTE;if(r===Tc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===bc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===sh)return s.BYTE;if(r===ah)return s.SHORT;if(r===Va)return s.UNSIGNED_SHORT;if(r===Ec)return s.INT;if(r===Fn)return s.UNSIGNED_INT;if(r===Nn)return s.FLOAT;if(r===Tr)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===oh)return s.ALPHA;if(r===on)return s.RGBA;if(r===lh)return s.LUMINANCE;if(r===ch)return s.LUMINANCE_ALPHA;if(r===Jn)return s.DEPTH_COMPONENT;if(r===Xi)return s.DEPTH_STENCIL;if(r===Ua)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===uh)return s.RED;if(r===Ac)return s.RED_INTEGER;if(r===hh)return s.RG;if(r===wc)return s.RG_INTEGER;if(r===Rc)return s.RGBA_INTEGER;if(r===Hs||r===Vs||r===Ws||r===Xs)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ws)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wo||r===Ro||r===Co||r===Po)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===wo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ro)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Po)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lo||r===Uo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Lo)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Uo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Do||r===Io||r===Fo||r===No||r===Oo||r===Bo||r===ko||r===zo||r===Go||r===Ho||r===Vo||r===Wo||r===Xo||r===Yo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Do)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Io)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===No)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ko)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Go)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ho)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yo)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ys||r===qo||r===jo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ys)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dh||r===Ko||r===Zo||r===Jo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ys)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ko)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zn?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class kg extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let as=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const zg={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new as;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Gg extends Dt{constructor(e,t,i,n,r,o,a,l,c,u){if(u=u!==void 0?u:Jn,u!==Jn&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jn&&(i=Fn),i===void 0&&u===Xi&&(i=Zn),super(null,n,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hg extends si{constructor(e,t){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const S=[],v=[],x=new Yt;x.layers.enable(1),x.viewport=new ot;const E=new Yt;E.layers.enable(2),E.viewport=new ot;const A=[x,E],b=new kg;b.layers.enable(1),b.layers.enable(2);let F=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let D=S[w];return D===void 0&&(D=new pa,S[w]=D),D.getTargetRaySpace()},this.getControllerGrip=function(w){let D=S[w];return D===void 0&&(D=new pa,S[w]=D),D.getGripSpace()},this.getHand=function(w){let D=S[w];return D===void 0&&(D=new pa,S[w]=D),D.getHandSpace()};function y(w){const D=v.indexOf(w.inputSource);if(D===-1)return;const K=S[D];K!==void 0&&(K.update(w.inputSource,w.frame,c||o),K.dispatchEvent({type:w.type,data:w.inputSource}))}function G(){n.removeEventListener("select",y),n.removeEventListener("selectstart",y),n.removeEventListener("selectend",y),n.removeEventListener("squeeze",y),n.removeEventListener("squeezestart",y),n.removeEventListener("squeezeend",y),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",U);for(let w=0;w<S.length;w++){const D=v[w];D!==null&&(v[w]=null,S[w].disconnect(D))}F=null,T=null,e.setRenderTarget(p),d=null,f=null,h=null,n=null,m=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){r=w,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){a=w,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(w){c=w},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(w){if(n=w,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",y),n.addEventListener("selectstart",y),n.addEventListener("selectend",y),n.addEventListener("squeeze",y),n.addEventListener("squeezestart",y),n.addEventListener("squeezeend",y),n.addEventListener("end",G),n.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const D={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,D),n.updateRenderState({baseLayer:d}),m=new ti(d.framebufferWidth,d.framebufferHeight,{format:on,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let D=null,K=null,Y=null;_.depth&&(Y=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=_.stencil?Xi:Jn,K=_.stencil?Zn:Fn);const j={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(j),n.updateRenderState({layers:[f]}),m=new ti(f.textureWidth,f.textureHeight,{format:on,type:kn,depthTexture:new Gg(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const le=e.properties.get(m);le.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),k.setContext(n),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(w){for(let D=0;D<w.removed.length;D++){const K=w.removed[D],Y=v.indexOf(K);Y>=0&&(v[Y]=null,S[Y].disconnect(K))}for(let D=0;D<w.added.length;D++){const K=w.added[D];let Y=v.indexOf(K);if(Y===-1){for(let le=0;le<S.length;le++)if(le>=v.length){v.push(K),Y=le;break}else if(v[le]===null){v[le]=K,Y=le;break}if(Y===-1)break}const j=S[Y];j&&j.connect(K)}}const P=new W,I=new W;function B(w,D,K){P.setFromMatrixPosition(D.matrixWorld),I.setFromMatrixPosition(K.matrixWorld);const Y=P.distanceTo(I),j=D.projectionMatrix.elements,le=K.projectionMatrix.elements,Q=j[14]/(j[10]-1),ie=j[14]/(j[10]+1),Te=(j[9]+1)/j[5],Ue=(j[9]-1)/j[5],pe=(j[8]-1)/j[0],C=(le[8]+1)/le[0],ve=Q*pe,$=Q*C,ce=Y/(-pe+C),oe=ce*-pe;D.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(oe),w.translateZ(ce),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();const Ce=Q+ce,ae=ie+ce,me=ve-oe,Me=$+(Y-oe),re=Te*ie/ae*Ce,Pe=Ue*ie/ae*Ce;w.projectionMatrix.makePerspective(me,Me,re,Pe,Ce,ae),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}function X(w,D){D===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(D.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(n===null)return;b.near=E.near=x.near=w.near,b.far=E.far=x.far=w.far,(F!==b.near||T!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),F=b.near,T=b.far);const D=w.parent,K=b.cameras;X(b,D);for(let Y=0;Y<K.length;Y++)X(K[Y],D);K.length===2?B(b,x,E):b.projectionMatrix.copy(x.projectionMatrix),H(w,b,D)};function H(w,D,K){K===null?w.matrix.copy(D.matrixWorld):(w.matrix.copy(K.matrixWorld),w.matrix.invert(),w.matrix.multiply(D.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(D.projectionMatrix),w.projectionMatrixInverse.copy(D.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=br*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(w){l=w,f!==null&&(f.fixedFoveation=w),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=w)};let q=null;function V(w,D){if(u=D.getViewerPose(c||o),g=D,u!==null){const K=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Y=!1;K.length!==b.cameras.length&&(b.cameras.length=0,Y=!0);for(let j=0;j<K.length;j++){const le=K[j];let Q=null;if(d!==null)Q=d.getViewport(le);else{const Te=h.getViewSubImage(f,le);Q=Te.viewport,j===0&&(e.setRenderTargetTextures(m,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(m))}let ie=A[j];ie===void 0&&(ie=new Yt,ie.layers.enable(j),ie.viewport=new ot,A[j]=ie),ie.matrix.fromArray(le.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(le.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Q.x,Q.y,Q.width,Q.height),j===0&&(b.matrix.copy(ie.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Y===!0&&b.cameras.push(ie)}}for(let K=0;K<S.length;K++){const Y=v[K],j=S[K];Y!==null&&j!==void 0&&j.update(Y,D,c||o)}q&&q(w,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}const k=new Vc;k.setAnimationLoop(V),this.setAnimationLoop=function(w){q=w},this.dispose=function(){}}}function Vg(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,kc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,S,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===wt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===wt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Wg(s,e,t,i){let n={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const x=v.program;i.uniformBlockBinding(S,x)}function c(S,v){let x=n[S.id];x===void 0&&(g(S),x=u(S),n[S.id]=x,S.addEventListener("dispose",p));const E=v.program;i.updateUBOMapping(S,E);const A=e.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function u(S){const v=h();S.__bindingPointIndex=v;const x=s.createBuffer(),E=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=n[S.id],x=S.uniforms,E=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,b=x.length;A<b;A++){const F=x[A];if(d(F,A,E)===!0){const T=F.__offset,y=Array.isArray(F.value)?F.value:[F.value];let G=0;for(let U=0;U<y.length;U++){const P=y[U],I=_(P);typeof P=="number"?(F.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,T+G,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=P.elements[0],F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=P.elements[0],F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=P.elements[0]):(P.toArray(F.__data,G),G+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,T,F.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,v,x){const E=S.value;if(x[v]===void 0){if(typeof E=="number")x[v]=E;else{const A=Array.isArray(E)?E:[E],b=[];for(let F=0;F<A.length;F++)b.push(A[F].clone());x[v]=b}return!0}else if(typeof E=="number"){if(x[v]!==E)return x[v]=E,!0}else{const A=Array.isArray(x[v])?x[v]:[x[v]],b=Array.isArray(E)?E:[E];for(let F=0;F<A.length;F++){const T=A[F];if(T.equals(b[F])===!1)return T.copy(b[F]),!0}}return!1}function g(S){const v=S.uniforms;let x=0;const E=16;let A=0;for(let b=0,F=v.length;b<F;b++){const T=v[b],y={boundary:0,storage:0},G=Array.isArray(T.value)?T.value:[T.value];for(let U=0,P=G.length;U<P;U++){const I=G[U],B=_(I);y.boundary+=B.boundary,y.storage+=B.storage}if(T.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,b>0){A=x%E;const U=E-A;A!==0&&U-y.boundary<0&&(x+=E-A,T.__offset=x)}x+=y.storage}return A=x%E,A>0&&(x+=E-A),S.__size=x,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function m(){for(const S in n)s.deleteBuffer(n[S]);o=[],n={},r={}}return{bind:l,update:c,dispose:m}}class Jc{constructor(e={}){const{canvas:t=kh(),context:i=null,depth:n=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const v=this;let x=!1,E=0,A=0,b=null,F=-1,T=null;const y=new ot,G=new ot;let U=null;const P=new Ke(0);let I=0,B=t.width,X=t.height,H=1,q=null,V=null;const k=new ot(0,0,B,X),w=new ot(0,0,B,X);let D=!1;const K=new qa;let Y=!1,j=!1,le=null;const Q=new rt,ie=new Re,Te=new W,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return b===null?H:1}let C=i;function ve(L,te){for(let de=0;de<L.length;de++){const ne=L[de],fe=t.getContext(ne,te);if(fe!==null)return fe}return null}try{const L={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ha}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),C===null){const te=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&te.shift(),C=ve(te,L),C===null)throw ve(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let $,ce,oe,Ce,ae,me,Me,re,Pe,R,M,z,Se,ee,he,be,_e,Z,N,se,xe,ue,Ee,De;function ke(){$=new nm(C),ce=new Zp(C,$,e),$.init(ce),ue=new Bg(C,$,ce),oe=new Fg(C,$,ce),Ce=new sm(C),ae=new Eg,me=new Ng(C,$,oe,ae,ce,ue,Ce),Me=new Qp(v),re=new tm(v),Pe=new mf(C,ce),Ee=new jp(C,$,Pe,ce),R=new im(C,Pe,Ce,Ee),M=new cm(C,R,Pe,Ce),N=new lm(C,ce,me),be=new Jp(ae),z=new Mg(v,Me,re,$,ce,Ee,be),Se=new Vg(v,ae),ee=new bg,he=new Lg($,ce),Z=new qp(v,Me,re,oe,M,f,l),_e=new Ig(v,M,ce),De=new Wg(C,Ce,ce,oe),se=new Kp(C,$,Ce,ce),xe=new rm(C,$,Ce,ce),Ce.programs=z.programs,v.capabilities=ce,v.extensions=$,v.properties=ae,v.renderLists=ee,v.shadowMap=_e,v.state=oe,v.info=Ce}ke();const O=new Hg(v,C);this.xr=O,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const L=$.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=$.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(L){L!==void 0&&(H=L,this.setSize(B,X,!1))},this.getSize=function(L){return L.set(B,X)},this.setSize=function(L,te,de=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,X=te,t.width=Math.floor(L*H),t.height=Math.floor(te*H),de===!0&&(t.style.width=L+"px",t.style.height=te+"px"),this.setViewport(0,0,L,te)},this.getDrawingBufferSize=function(L){return L.set(B*H,X*H).floor()},this.setDrawingBufferSize=function(L,te,de){B=L,X=te,H=de,t.width=Math.floor(L*de),t.height=Math.floor(te*de),this.setViewport(0,0,L,te)},this.getCurrentViewport=function(L){return L.copy(y)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,te,de,ne){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,te,de,ne),oe.viewport(y.copy(k).multiplyScalar(H).floor())},this.getScissor=function(L){return L.copy(w)},this.setScissor=function(L,te,de,ne){L.isVector4?w.set(L.x,L.y,L.z,L.w):w.set(L,te,de,ne),oe.scissor(G.copy(w).multiplyScalar(H).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(L){oe.setScissorTest(D=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){V=L},this.getClearColor=function(L){return L.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(L=!0,te=!0,de=!0){let ne=0;if(L){let fe=!1;if(b!==null){const Fe=b.texture.format;fe=Fe===Rc||Fe===wc||Fe===Ac}if(fe){const Fe=b.texture.type,Oe=Fe===kn||Fe===Fn||Fe===Va||Fe===Zn||Fe===Tc||Fe===bc,Ge=Z.getClearColor(),He=Z.getClearAlpha(),Xe=Ge.r,we=Ge.g,We=Ge.b;Oe?(d[0]=Xe,d[1]=we,d[2]=We,d[3]=He,C.clearBufferuiv(C.COLOR,0,d)):(g[0]=Xe,g[1]=we,g[2]=We,g[3]=He,C.clearBufferiv(C.COLOR,0,g))}else ne|=C.COLOR_BUFFER_BIT}te&&(ne|=C.DEPTH_BUFFER_BIT),de&&(ne|=C.STENCIL_BUFFER_BIT),C.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ee.dispose(),he.dispose(),ae.dispose(),Me.dispose(),re.dispose(),M.dispose(),Ee.dispose(),De.dispose(),z.dispose(),O.dispose(),O.removeEventListener("sessionstart",Ve),O.removeEventListener("sessionend",Qe),le&&(le.dispose(),le=null),Ze.stop()};function ge(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const L=Ce.autoReset,te=_e.enabled,de=_e.autoUpdate,ne=_e.needsUpdate,fe=_e.type;ke(),Ce.autoReset=L,_e.enabled=te,_e.autoUpdate=de,_e.needsUpdate=ne,_e.type=fe}function Ae(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ye(L){const te=L.target;te.removeEventListener("dispose",ye),Ie(te)}function Ie(L){ze(L),ae.remove(L)}function ze(L){const te=ae.get(L).programs;te!==void 0&&(te.forEach(function(de){z.releaseProgram(de)}),L.isShaderMaterial&&z.releaseShaderCache(L))}this.renderBufferDirect=function(L,te,de,ne,fe,Fe){te===null&&(te=Ue);const Oe=fe.isMesh&&fe.matrixWorld.determinant()<0,Ge=mt(L,te,de,ne,fe);oe.setMaterial(ne,Oe);let He=de.index,Xe=1;if(ne.wireframe===!0){if(He=R.getWireframeAttribute(de),He===void 0)return;Xe=2}const we=de.drawRange,We=de.attributes.position;let $e=we.start*Xe,Je=(we.start+we.count)*Xe;Fe!==null&&($e=Math.max($e,Fe.start*Xe),Je=Math.min(Je,(Fe.start+Fe.count)*Xe)),He!==null?($e=Math.max($e,0),Je=Math.min(Je,He.count)):We!=null&&($e=Math.max($e,0),Je=Math.min(Je,We.count));const gt=Je-$e;if(gt<0||gt===1/0)return;Ee.setup(fe,ne,Ge,de,He);let Ht,et=se;if(He!==null&&(Ht=Pe.get(He),et=xe,et.setIndex(Ht)),fe.isMesh)ne.wireframe===!0?(oe.setLineWidth(ne.wireframeLinewidth*pe()),et.setMode(C.LINES)):et.setMode(C.TRIANGLES);else if(fe.isLine){let Ye=ne.linewidth;Ye===void 0&&(Ye=1),oe.setLineWidth(Ye*pe()),fe.isLineSegments?et.setMode(C.LINES):fe.isLineLoop?et.setMode(C.LINE_LOOP):et.setMode(C.LINE_STRIP)}else fe.isPoints?et.setMode(C.POINTS):fe.isSprite&&et.setMode(C.TRIANGLES);if(fe.isInstancedMesh)et.renderInstances($e,gt,fe.count);else if(de.isInstancedBufferGeometry){const Ye=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,wn=Math.min(de.instanceCount,Ye);et.renderInstances($e,gt,wn)}else et.render($e,gt)},this.compile=function(L,te){function de(ne,fe,Fe){ne.transparent===!0&&ne.side===sn&&ne.forceSinglePass===!1?(ne.side=wt,ne.needsUpdate=!0,zt(ne,fe,Fe),ne.side=An,ne.needsUpdate=!0,zt(ne,fe,Fe),ne.side=sn):zt(ne,fe,Fe)}p=he.get(L),p.init(),S.push(p),L.traverseVisible(function(ne){ne.isLight&&ne.layers.test(te.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),p.setupLights(v._useLegacyLights),L.traverse(function(ne){const fe=ne.material;if(fe)if(Array.isArray(fe))for(let Fe=0;Fe<fe.length;Fe++){const Oe=fe[Fe];de(Oe,L,ne)}else de(fe,L,ne)}),S.pop(),p=null};let Ne=null;function Be(L){Ne&&Ne(L)}function Ve(){Ze.stop()}function Qe(){Ze.start()}const Ze=new Vc;Ze.setAnimationLoop(Be),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(L){Ne=L,O.setAnimationLoop(L),L===null?Ze.stop():Ze.start()},O.addEventListener("sessionstart",Ve),O.addEventListener("sessionend",Qe),this.render=function(L,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(te),te=O.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,te,b),p=he.get(L,S.length),p.init(),S.push(p),Q.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),K.setFromProjectionMatrix(Q),j=this.localClippingEnabled,Y=be.init(this.clippingPlanes,j),_=ee.get(L,m.length),_.init(),m.push(_),lt(L,te,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,V),this.info.render.frame++,Y===!0&&be.beginShadows();const de=p.state.shadowsArray;if(_e.render(de,L,te),Y===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(_,L),p.setupLights(v._useLegacyLights),te.isArrayCamera){const ne=te.cameras;for(let fe=0,Fe=ne.length;fe<Fe;fe++){const Oe=ne[fe];Rt(_,L,Oe,Oe.viewport)}}else Rt(_,L,te);b!==null&&(me.updateMultisampleRenderTarget(b),me.updateRenderTargetMipmap(b)),L.isScene===!0&&L.onAfterRender(v,L,te),Ee.resetDefaultState(),F=-1,T=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function lt(L,te,de,ne){if(L.visible===!1)return;if(L.layers.test(te.layers)){if(L.isGroup)de=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(te);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||K.intersectsSprite(L)){ne&&Te.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Q);const Oe=M.update(L),Ge=L.material;Ge.visible&&_.push(L,Oe,Ge,de,Te.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||K.intersectsObject(L))){const Oe=M.update(L),Ge=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Te.copy(L.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Te.copy(Oe.boundingSphere.center)),Te.applyMatrix4(L.matrixWorld).applyMatrix4(Q)),Array.isArray(Ge)){const He=Oe.groups;for(let Xe=0,we=He.length;Xe<we;Xe++){const We=He[Xe],$e=Ge[We.materialIndex];$e&&$e.visible&&_.push(L,Oe,$e,de,Te.z,We)}}else Ge.visible&&_.push(L,Oe,Ge,de,Te.z,null)}}const Fe=L.children;for(let Oe=0,Ge=Fe.length;Oe<Ge;Oe++)lt(Fe[Oe],te,de,ne)}function Rt(L,te,de,ne){const fe=L.opaque,Fe=L.transmissive,Oe=L.transparent;p.setupLightsView(de),Y===!0&&be.setGlobalState(v.clippingPlanes,de),Fe.length>0&&cn(fe,Fe,te,de),ne&&oe.viewport(y.copy(ne)),fe.length>0&&Ct(fe,te,de),Fe.length>0&&Ct(Fe,te,de),Oe.length>0&&Ct(Oe,te,de),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function cn(L,te,de,ne){const fe=ce.isWebGL2;le===null&&(le=new ti(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?Tr:kn,minFilter:Er,samples:fe?4:0})),v.getDrawingBufferSize(ie),fe?le.setSize(ie.x,ie.y):le.setSize(ys(ie.x),ys(ie.y));const Fe=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(P),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=Bn,Ct(L,de,ne),me.updateMultisampleRenderTarget(le),me.updateRenderTargetMipmap(le);let Ge=!1;for(let He=0,Xe=te.length;He<Xe;He++){const we=te[He],We=we.object,$e=we.geometry,Je=we.material,gt=we.group;if(Je.side===sn&&We.layers.test(ne.layers)){const Ht=Je.side;Je.side=wt,Je.needsUpdate=!0,jt(We,de,ne,$e,Je,gt),Je.side=Ht,Je.needsUpdate=!0,Ge=!0}}Ge===!0&&(me.updateMultisampleRenderTarget(le),me.updateRenderTargetMipmap(le)),v.setRenderTarget(Fe),v.setClearColor(P,I),v.toneMapping=Oe}function Ct(L,te,de){const ne=te.isScene===!0?te.overrideMaterial:null;for(let fe=0,Fe=L.length;fe<Fe;fe++){const Oe=L[fe],Ge=Oe.object,He=Oe.geometry,Xe=ne===null?Oe.material:ne,we=Oe.group;Ge.layers.test(de.layers)&&jt(Ge,te,de,He,Xe,we)}}function jt(L,te,de,ne,fe,Fe){L.onBeforeRender(v,te,de,ne,fe,Fe),L.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),fe.onBeforeRender(v,te,de,ne,L,Fe),fe.transparent===!0&&fe.side===sn&&fe.forceSinglePass===!1?(fe.side=wt,fe.needsUpdate=!0,v.renderBufferDirect(de,te,ne,fe,L,Fe),fe.side=An,fe.needsUpdate=!0,v.renderBufferDirect(de,te,ne,fe,L,Fe),fe.side=sn):v.renderBufferDirect(de,te,ne,fe,L,Fe),L.onAfterRender(v,te,de,ne,fe,Fe)}function zt(L,te,de){te.isScene!==!0&&(te=Ue);const ne=ae.get(L),fe=p.state.lights,Fe=p.state.shadowsArray,Oe=fe.state.version,Ge=z.getParameters(L,fe.state,Fe,te,de),He=z.getProgramCacheKey(Ge);let Xe=ne.programs;ne.environment=L.isMeshStandardMaterial?te.environment:null,ne.fog=te.fog,ne.envMap=(L.isMeshStandardMaterial?re:Me).get(L.envMap||ne.environment),Xe===void 0&&(L.addEventListener("dispose",ye),Xe=new Map,ne.programs=Xe);let we=Xe.get(He);if(we!==void 0){if(ne.currentProgram===we&&ne.lightsStateVersion===Oe)return Gt(L,Ge),we}else Ge.uniforms=z.getUniforms(L),L.onBuild(de,Ge,v),L.onBeforeCompile(Ge,v),we=z.acquireProgram(Ge,He),Xe.set(He,we),ne.uniforms=Ge.uniforms;const We=ne.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=be.uniform),Gt(L,Ge),ne.needsLights=Ur(L),ne.lightsStateVersion=Oe,ne.needsLights&&(We.ambientLightColor.value=fe.state.ambient,We.lightProbe.value=fe.state.probe,We.directionalLights.value=fe.state.directional,We.directionalLightShadows.value=fe.state.directionalShadow,We.spotLights.value=fe.state.spot,We.spotLightShadows.value=fe.state.spotShadow,We.rectAreaLights.value=fe.state.rectArea,We.ltc_1.value=fe.state.rectAreaLTC1,We.ltc_2.value=fe.state.rectAreaLTC2,We.pointLights.value=fe.state.point,We.pointLightShadows.value=fe.state.pointShadow,We.hemisphereLights.value=fe.state.hemi,We.directionalShadowMap.value=fe.state.directionalShadowMap,We.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,We.spotShadowMap.value=fe.state.spotShadowMap,We.spotLightMatrix.value=fe.state.spotLightMatrix,We.spotLightMap.value=fe.state.spotLightMap,We.pointShadowMap.value=fe.state.pointShadowMap,We.pointShadowMatrix.value=fe.state.pointShadowMatrix);const $e=we.getUniforms(),Je=gs.seqWithValue($e.seq,We);return ne.currentProgram=we,ne.uniformsList=Je,we}function Gt(L,te){const de=ae.get(L);de.outputColorSpace=te.outputColorSpace,de.instancing=te.instancing,de.instancingColor=te.instancingColor,de.skinning=te.skinning,de.morphTargets=te.morphTargets,de.morphNormals=te.morphNormals,de.morphColors=te.morphColors,de.morphTargetsCount=te.morphTargetsCount,de.numClippingPlanes=te.numClippingPlanes,de.numIntersection=te.numClipIntersection,de.vertexAlphas=te.vertexAlphas,de.vertexTangents=te.vertexTangents,de.toneMapping=te.toneMapping}function mt(L,te,de,ne,fe){te.isScene!==!0&&(te=Ue),me.resetTextureUnits();const Fe=te.fog,Oe=ne.isMeshStandardMaterial?te.environment:null,Ge=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:fn,He=(ne.isMeshStandardMaterial?re:Me).get(ne.envMap||Oe),Xe=ne.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,we=!!de.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),We=!!de.morphAttributes.position,$e=!!de.morphAttributes.normal,Je=!!de.morphAttributes.color;let gt=Bn;ne.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=v.toneMapping);const Ht=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,et=Ht!==void 0?Ht.length:0,Ye=ae.get(ne),wn=p.state.lights;if(Y===!0&&(j===!0||L!==T)){const _t=L===T&&ne.id===F;be.setState(ne,L,_t)}let nt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==wn.state.version||Ye.outputColorSpace!==Ge||fe.isInstancedMesh&&Ye.instancing===!1||!fe.isInstancedMesh&&Ye.instancing===!0||fe.isSkinnedMesh&&Ye.skinning===!1||!fe.isSkinnedMesh&&Ye.skinning===!0||fe.isInstancedMesh&&Ye.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&Ye.instancingColor===!1&&fe.instanceColor!==null||Ye.envMap!==He||ne.fog===!0&&Ye.fog!==Fe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==be.numPlanes||Ye.numIntersection!==be.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==we||Ye.morphTargets!==We||Ye.morphNormals!==$e||Ye.morphColors!==Je||Ye.toneMapping!==gt||ce.isWebGL2===!0&&Ye.morphTargetsCount!==et)&&(nt=!0):(nt=!0,Ye.__version=ne.version);let Vt=Ye.currentProgram;nt===!0&&(Vt=zt(ne,te,fe));let Ji=!1,gn=!1,li=!1;const st=Vt.getUniforms(),Kt=Ye.uniforms;if(oe.useProgram(Vt.program)&&(Ji=!0,gn=!0,li=!0),ne.id!==F&&(F=ne.id,gn=!0),Ji||T!==L){st.setValue(C,"projectionMatrix",L.projectionMatrix),st.setValue(C,"viewMatrix",L.matrixWorldInverse);const _t=st.map.cameraPosition;_t!==void 0&&_t.setValue(C,Te.setFromMatrixPosition(L.matrixWorld)),ce.logarithmicDepthBuffer&&st.setValue(C,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&st.setValue(C,"isOrthographic",L.isOrthographicCamera===!0),T!==L&&(T=L,gn=!0,li=!0)}if(fe.isSkinnedMesh){st.setOptional(C,fe,"bindMatrix"),st.setOptional(C,fe,"bindMatrixInverse");const _t=fe.skeleton;_t&&(ce.floatVertexTextures?(_t.boneTexture===null&&_t.computeBoneTexture(),st.setValue(C,"boneTexture",_t.boneTexture,me),st.setValue(C,"boneTextureSize",_t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const un=de.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0&&ce.isWebGL2===!0)&&N.update(fe,de,Vt),(gn||Ye.receiveShadow!==fe.receiveShadow)&&(Ye.receiveShadow=fe.receiveShadow,st.setValue(C,"receiveShadow",fe.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Kt.envMap.value=He,Kt.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),gn&&(st.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&mn(Kt,li),Fe&&ne.fog===!0&&Se.refreshFogUniforms(Kt,Fe),Se.refreshMaterialUniforms(Kt,ne,H,X,le),gs.upload(C,Ye.uniformsList,Kt,me)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(gs.upload(C,Ye.uniformsList,Kt,me),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&st.setValue(C,"center",fe.center),st.setValue(C,"modelViewMatrix",fe.modelViewMatrix),st.setValue(C,"normalMatrix",fe.normalMatrix),st.setValue(C,"modelMatrix",fe.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const _t=ne.uniformsGroups;for(let Gn=0,Qi=_t.length;Gn<Qi;Gn++)if(ce.isWebGL2){const Ft=_t[Gn];De.update(Ft,Vt),De.bind(Ft,Vt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vt}function mn(L,te){L.ambientLightColor.needsUpdate=te,L.lightProbe.needsUpdate=te,L.directionalLights.needsUpdate=te,L.directionalLightShadows.needsUpdate=te,L.pointLights.needsUpdate=te,L.pointLightShadows.needsUpdate=te,L.spotLights.needsUpdate=te,L.spotLightShadows.needsUpdate=te,L.rectAreaLights.needsUpdate=te,L.hemisphereLights.needsUpdate=te}function Ur(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(L,te,de){ae.get(L.texture).__webglTexture=te,ae.get(L.depthTexture).__webglTexture=de;const ne=ae.get(L);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=de===void 0,ne.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,te){const de=ae.get(L);de.__webglFramebuffer=te,de.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(L,te=0,de=0){b=L,E=te,A=de;let ne=!0,fe=null,Fe=!1,Oe=!1;if(L){const He=ae.get(L);He.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(C.FRAMEBUFFER,null),ne=!1):He.__webglFramebuffer===void 0?me.setupRenderTarget(L):He.__hasExternalTextures&&me.rebindTextures(L,ae.get(L.texture).__webglTexture,ae.get(L.depthTexture).__webglTexture);const Xe=L.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const we=ae.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(we[te])?fe=we[te][de]:fe=we[te],Fe=!0):ce.isWebGL2&&L.samples>0&&me.useMultisampledRTT(L)===!1?fe=ae.get(L).__webglMultisampledFramebuffer:Array.isArray(we)?fe=we[de]:fe=we,y.copy(L.viewport),G.copy(L.scissor),U=L.scissorTest}else y.copy(k).multiplyScalar(H).floor(),G.copy(w).multiplyScalar(H).floor(),U=D;if(oe.bindFramebuffer(C.FRAMEBUFFER,fe)&&ce.drawBuffers&&ne&&oe.drawBuffers(L,fe),oe.viewport(y),oe.scissor(G),oe.setScissorTest(U),Fe){const He=ae.get(L.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+te,He.__webglTexture,de)}else if(Oe){const He=ae.get(L.texture),Xe=te||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,He.__webglTexture,de||0,Xe)}F=-1},this.readRenderTargetPixels=function(L,te,de,ne,fe,Fe,Oe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ae.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){oe.bindFramebuffer(C.FRAMEBUFFER,Ge);try{const He=L.texture,Xe=He.format,we=He.type;if(Xe!==on&&ue.convert(Xe)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=we===Tr&&($.has("EXT_color_buffer_half_float")||ce.isWebGL2&&$.has("EXT_color_buffer_float"));if(we!==kn&&ue.convert(we)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===Nn&&(ce.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=L.width-ne&&de>=0&&de<=L.height-fe&&C.readPixels(te,de,ne,fe,ue.convert(Xe),ue.convert(we),Fe)}finally{const He=b!==null?ae.get(b).__webglFramebuffer:null;oe.bindFramebuffer(C.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(L,te,de=0){const ne=Math.pow(2,-de),fe=Math.floor(te.image.width*ne),Fe=Math.floor(te.image.height*ne);me.setTexture2D(te,0),C.copyTexSubImage2D(C.TEXTURE_2D,de,0,0,L.x,L.y,fe,Fe),oe.unbindTexture()},this.copyTextureToTexture=function(L,te,de,ne=0){const fe=te.image.width,Fe=te.image.height,Oe=ue.convert(de.format),Ge=ue.convert(de.type);me.setTexture2D(de,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,de.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,de.unpackAlignment),te.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ne,L.x,L.y,fe,Fe,Oe,Ge,te.image.data):te.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ne,L.x,L.y,te.mipmaps[0].width,te.mipmaps[0].height,Oe,te.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,ne,L.x,L.y,Oe,Ge,te.image),ne===0&&de.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(L,te,de,ne,fe=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=L.max.x-L.min.x+1,Oe=L.max.y-L.min.y+1,Ge=L.max.z-L.min.z+1,He=ue.convert(ne.format),Xe=ue.convert(ne.type);let we;if(ne.isData3DTexture)me.setTexture3D(ne,0),we=C.TEXTURE_3D;else if(ne.isDataArrayTexture)me.setTexture2DArray(ne,0),we=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,ne.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,ne.unpackAlignment);const We=C.getParameter(C.UNPACK_ROW_LENGTH),$e=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Je=C.getParameter(C.UNPACK_SKIP_PIXELS),gt=C.getParameter(C.UNPACK_SKIP_ROWS),Ht=C.getParameter(C.UNPACK_SKIP_IMAGES),et=de.isCompressedTexture?de.mipmaps[0]:de.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,et.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,et.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,L.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,L.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,L.min.z),de.isDataTexture||de.isData3DTexture?C.texSubImage3D(we,fe,te.x,te.y,te.z,Fe,Oe,Ge,He,Xe,et.data):de.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(we,fe,te.x,te.y,te.z,Fe,Oe,Ge,He,et.data)):C.texSubImage3D(we,fe,te.x,te.y,te.z,Fe,Oe,Ge,He,Xe,et),C.pixelStorei(C.UNPACK_ROW_LENGTH,We),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$e),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Je),C.pixelStorei(C.UNPACK_SKIP_ROWS,gt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ht),fe===0&&ne.generateMipmaps&&C.generateMipmap(we),oe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?me.setTextureCube(L,0):L.isData3DTexture?me.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?me.setTexture2DArray(L,0):me.setTexture2D(L,0),oe.unbindTexture()},this.resetState=function(){E=0,A=0,b=null,oe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?Qn:Cc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qn?tt:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Xg extends Jc{}Xg.prototype.isWebGL1Renderer=!0;class Ka{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new Ka(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Yg extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class qg extends ln{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Qc extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new W,Bl=new W,kl=new rt,ma=new Ya,os=new Cr;class jg extends pt{constructor(e=new kt,t=new Qc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Ol.fromBufferAttribute(t,n-1),Bl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Ol.distanceTo(Bl);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(n),os.radius+=r,e.ray.intersectsSphere(os)===!1)return;kl.copy(n).invert(),ma.copy(e.ray).applyMatrix4(kl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new W,u=new W,h=new W,f=new W,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=m,x=S-1;v<x;v+=d){const E=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,A),ma.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(f);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let v=m,x=S-1;v<x;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),ma.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const zl=new W,Gl=new W;class Kg extends jg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)zl.fromBufferAttribute(t,n),Gl.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+zl.distanceTo(Gl);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const u=i[n],f=i[n+1]-u,d=(o-u)/f;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new Re:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new W,n=[],r=[],o=[],a=new W,l=new rt;for(let d=0;d<=e;d++){const g=d/e;n[d]=this.getTangentAt(g,new W)}r[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(dt(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos(dt(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Za extends pn{constructor(e=0,t=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new Re,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zg extends Za{constructor(e,t,i,n,r,o){super(e,t,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ja(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,n(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+i*a}}}const ls=new W,ga=new Ja,_a=new Ja,va=new Ja;class $c extends pn{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new W){const i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=n[(a-1)%r]:(ls.subVectors(n[0],n[1]).add(n[0]),c=ls);const h=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?u=n[(a+2)%r]:(ls.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=ls),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ga.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,p),_a.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,p),va.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),_a.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),va.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ga.calc(l),_a.calc(l),va.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hl(s,e,t,i,n){const r=(i-e)*.5,o=(n-t)*.5,a=s*s,l=s*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*s+t}function Jg(s,e){const t=1-s;return t*t*e}function Qg(s,e){return 2*(1-s)*s*e}function $g(s,e){return s*s*e}function _r(s,e,t,i){return Jg(s,e)+Qg(s,t)+$g(s,i)}function e_(s,e){const t=1-s;return t*t*t*e}function t_(s,e){const t=1-s;return 3*t*t*s*e}function n_(s,e){return 3*(1-s)*s*s*e}function i_(s,e){return s*s*s*e}function vr(s,e,t,i,n){return e_(s,e)+t_(s,t)+n_(s,i)+i_(s,n)}class eu extends pn{constructor(e=new Re,t=new Re,i=new Re,n=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Re){const i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vr(e,n.x,r.x,o.x,a.x),vr(e,n.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class r_ extends pn{constructor(e=new W,t=new W,i=new W,n=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new W){const i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vr(e,n.x,r.x,o.x,a.x),vr(e,n.y,r.y,o.y,a.y),vr(e,n.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qa extends pn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class s_ extends pn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tu extends pn{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){const i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(_r(e,n.x,r.x,o.x),_r(e,n.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a_ extends pn{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){const i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(_r(e,n.x,r.x,o.x),_r(e,n.y,r.y,o.y),_r(e,n.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nu extends pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,n=this.points,r=(n.length-1)*e,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],u=n[o>n.length-2?n.length-1:o+1],h=n[o>n.length-3?n.length-1:o+2];return i.set(Hl(a,l.x,c.x,u.x,h.x),Hl(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Re().fromArray(n))}return this}}var iu=Object.freeze({__proto__:null,ArcCurve:Zg,CatmullRomCurve3:$c,CubicBezierCurve:eu,CubicBezierCurve3:r_,EllipseCurve:Za,LineCurve:Qa,LineCurve3:s_,QuadraticBezierCurve:tu,QuadraticBezierCurve3:a_,SplineCurve:nu});class o_ extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Qa(t,e))}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new iu[n.type]().fromJSON(n))}return this}}class Vl extends o_{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Qa(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new tu(this.currentPoint.clone(),new Re(e,t),new Re(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,o){const a=new eu(this.currentPoint.clone(),new Re(e,t),new Re(i,n),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new nu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,n,r,o),this}absarc(e,t,i,n,r,o){return this.absellipse(e,t,i,i,n,r,o),this}ellipse(e,t,i,n,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,n,r,o,a,l),this}absellipse(e,t,i,n,r,o,a,l){const c=new Za(e,t,i,n,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ru extends Vl{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Vl().fromJSON(n))}return this}}const l_={triangulate:function(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=su(s,0,n,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=d_(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<n;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Ar(r,o,t,a,l,d,0),o}};function su(s,e,t,i,n){let r,o;if(n===T_(s,e,t,i)>0)for(r=e;r<t;r+=i)o=Wl(r,s[r],s[r+1],o);else for(r=t-i;r>=e;r-=i)o=Wl(r,s[r],s[r+1],o);return o&&Cs(o,o.next)&&(Rr(o),o=o.next),o}function ri(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(Cs(t,t.next)||it(t.prev,t,t.next)===0)){if(Rr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ar(s,e,t,i,n,r,o){if(!s)return;!o&&r&&v_(s,i,n,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?u_(s,i,n,r):c_(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Rr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=h_(ri(s),e,t),Ar(s,e,t,i,n,r,2)):o===2&&f_(s,e,t,i,n,r):Ar(ri(s),e,t,i,n,r,1);break}}}function c_(s){const e=s.prev,t=s,i=s.next;if(it(e,t,i)>=0)return!1;const n=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=n<r?n<o?n:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=n>r?n>o?n:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Oi(n,a,r,l,o,c,g.x,g.y)&&it(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function u_(s,e,t,i){const n=s.prev,r=s,o=s.next;if(it(n,r,o)>=0)return!1;const a=n.x,l=r.x,c=o.x,u=n.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=Fa(d,g,e,t,i),S=Fa(_,p,e,t,i);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=m&&x&&x.z<=S;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==n&&v!==o&&Oi(a,u,l,h,c,f,v.x,v.y)&&it(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==n&&x!==o&&Oi(a,u,l,h,c,f,x.x,x.y)&&it(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==n&&v!==o&&Oi(a,u,l,h,c,f,v.x,v.y)&&it(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==n&&x!==o&&Oi(a,u,l,h,c,f,x.x,x.y)&&it(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function h_(s,e,t){let i=s;do{const n=i.prev,r=i.next.next;!Cs(n,r)&&au(n,i,i.next,r)&&wr(n,r)&&wr(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Rr(i),Rr(i.next),i=s=r),i=i.next}while(i!==s);return ri(i)}function f_(s,e,t,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&y_(o,a)){let l=ou(o,a);o=ri(o,o.next),l=ri(l,l.next),Ar(o,e,t,i,n,r,0),Ar(l,e,t,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function d_(s,e,t,i){const n=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:s.length,c=su(s,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(S_(c));for(n.sort(p_),r=0;r<n.length;r++)t=m_(n[r],t);return t}function p_(s,e){return s.x-e.x}function m_(s,e){const t=g_(s,e);if(!t)return e;const i=ou(t,s);return ri(i,i.next),ri(t,t.next)}function g_(s,e){let t=e,i=-1/0,n;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,n=t.x<t.next.x?t:t.next,f===r))return n}t=t.next}while(t!==e);if(!n)return null;const a=n,l=n.x,c=n.y;let u=1/0,h;t=n;do r>=t.x&&t.x>=l&&r!==t.x&&Oi(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),wr(t,s)&&(h<u||h===u&&(t.x>n.x||t.x===n.x&&__(n,t)))&&(n=t,u=h)),t=t.next;while(t!==a);return n}function __(s,e){return it(s.prev,s,e.prev)<0&&it(e.next,s,s.next)<0}function v_(s,e,t,i){let n=s;do n.z===0&&(n.z=Fa(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,x_(n)}function x_(s){let e,t,i,n,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(o>1);return s}function Fa(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function S_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Oi(s,e,t,i,n,r,o,a){return(n-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(n-o)*(i-a)}function y_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!M_(s,e)&&(wr(s,e)&&wr(e,s)&&E_(s,e)&&(it(s.prev,s,e.prev)||it(s,e.prev,e))||Cs(s,e)&&it(s.prev,s,s.next)>0&&it(e.prev,e,e.next)>0)}function it(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Cs(s,e){return s.x===e.x&&s.y===e.y}function au(s,e,t,i){const n=us(it(s,e,t)),r=us(it(s,e,i)),o=us(it(t,i,s)),a=us(it(t,i,e));return!!(n!==r&&o!==a||n===0&&cs(s,t,e)||r===0&&cs(s,i,e)||o===0&&cs(t,s,i)||a===0&&cs(t,e,i))}function cs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function us(s){return s>0?1:s<0?-1:0}function M_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&au(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function wr(s,e){return it(s.prev,s,s.next)<0?it(s,e,s.next)>=0&&it(s,s.prev,e)>=0:it(s,e,s.prev)<0||it(s,s.next,e)<0}function E_(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function ou(s,e){const t=new Na(s.i,s.x,s.y),i=new Na(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Wl(s,e,t,i){const n=new Na(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Rr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Na(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function T_(s,e,t,i){let n=0;for(let r=e,o=t-i;r<t;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}class xr{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return xr.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];Xl(e),Yl(i,e);let o=e.length;t.forEach(Xl);for(let l=0;l<t.length;l++)n.push(o),o+=t[l].length,Yl(i,t[l]);const a=l_.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Xl(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Yl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class $a extends kt{constructor(e=new ru([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new It(n,3)),this.setAttribute("uv",new It(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:b_;let v,x=!1,E,A,b,F;m&&(v=m.getSpacedPoints(u),x=!0,f=!1,E=m.computeFrenetFrames(u,!1),A=new W,b=new W,F=new W),f||(p=0,d=0,g=0,_=0);const T=a.extractPoints(c);let y=T.shape;const G=T.holes;if(!xr.isClockWise(y)){y=y.reverse();for(let C=0,ve=G.length;C<ve;C++){const $=G[C];xr.isClockWise($)&&(G[C]=$.reverse())}}const P=xr.triangulateShape(y,G),I=y;for(let C=0,ve=G.length;C<ve;C++){const $=G[C];y=y.concat($)}function B(C,ve,$){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(ve,$)}const X=y.length,H=P.length;function q(C,ve,$){let ce,oe,Ce;const ae=C.x-ve.x,me=C.y-ve.y,Me=$.x-C.x,re=$.y-C.y,Pe=ae*ae+me*me,R=ae*re-me*Me;if(Math.abs(R)>Number.EPSILON){const M=Math.sqrt(Pe),z=Math.sqrt(Me*Me+re*re),Se=ve.x-me/M,ee=ve.y+ae/M,he=$.x-re/z,be=$.y+Me/z,_e=((he-Se)*re-(be-ee)*Me)/(ae*re-me*Me);ce=Se+ae*_e-C.x,oe=ee+me*_e-C.y;const Z=ce*ce+oe*oe;if(Z<=2)return new Re(ce,oe);Ce=Math.sqrt(Z/2)}else{let M=!1;ae>Number.EPSILON?Me>Number.EPSILON&&(M=!0):ae<-Number.EPSILON?Me<-Number.EPSILON&&(M=!0):Math.sign(me)===Math.sign(re)&&(M=!0),M?(ce=-me,oe=ae,Ce=Math.sqrt(Pe)):(ce=ae,oe=me,Ce=Math.sqrt(Pe/2))}return new Re(ce/Ce,oe/Ce)}const V=[];for(let C=0,ve=I.length,$=ve-1,ce=C+1;C<ve;C++,$++,ce++)$===ve&&($=0),ce===ve&&(ce=0),V[C]=q(I[C],I[$],I[ce]);const k=[];let w,D=V.concat();for(let C=0,ve=G.length;C<ve;C++){const $=G[C];w=[];for(let ce=0,oe=$.length,Ce=oe-1,ae=ce+1;ce<oe;ce++,Ce++,ae++)Ce===oe&&(Ce=0),ae===oe&&(ae=0),w[ce]=q($[ce],$[Ce],$[ae]);k.push(w),D=D.concat(w)}for(let C=0;C<p;C++){const ve=C/p,$=d*Math.cos(ve*Math.PI/2),ce=g*Math.sin(ve*Math.PI/2)+_;for(let oe=0,Ce=I.length;oe<Ce;oe++){const ae=B(I[oe],V[oe],ce);Q(ae.x,ae.y,-$)}for(let oe=0,Ce=G.length;oe<Ce;oe++){const ae=G[oe];w=k[oe];for(let me=0,Me=ae.length;me<Me;me++){const re=B(ae[me],w[me],ce);Q(re.x,re.y,-$)}}}const K=g+_;for(let C=0;C<X;C++){const ve=f?B(y[C],D[C],K):y[C];x?(b.copy(E.normals[0]).multiplyScalar(ve.x),A.copy(E.binormals[0]).multiplyScalar(ve.y),F.copy(v[0]).add(b).add(A),Q(F.x,F.y,F.z)):Q(ve.x,ve.y,0)}for(let C=1;C<=u;C++)for(let ve=0;ve<X;ve++){const $=f?B(y[ve],D[ve],K):y[ve];x?(b.copy(E.normals[C]).multiplyScalar($.x),A.copy(E.binormals[C]).multiplyScalar($.y),F.copy(v[C]).add(b).add(A),Q(F.x,F.y,F.z)):Q($.x,$.y,h/u*C)}for(let C=p-1;C>=0;C--){const ve=C/p,$=d*Math.cos(ve*Math.PI/2),ce=g*Math.sin(ve*Math.PI/2)+_;for(let oe=0,Ce=I.length;oe<Ce;oe++){const ae=B(I[oe],V[oe],ce);Q(ae.x,ae.y,h+$)}for(let oe=0,Ce=G.length;oe<Ce;oe++){const ae=G[oe];w=k[oe];for(let me=0,Me=ae.length;me<Me;me++){const re=B(ae[me],w[me],ce);x?Q(re.x,re.y+v[u-1].y,v[u-1].x+$):Q(re.x,re.y,h+$)}}}Y(),j();function Y(){const C=n.length/3;if(f){let ve=0,$=X*ve;for(let ce=0;ce<H;ce++){const oe=P[ce];ie(oe[2]+$,oe[1]+$,oe[0]+$)}ve=u+p*2,$=X*ve;for(let ce=0;ce<H;ce++){const oe=P[ce];ie(oe[0]+$,oe[1]+$,oe[2]+$)}}else{for(let ve=0;ve<H;ve++){const $=P[ve];ie($[2],$[1],$[0])}for(let ve=0;ve<H;ve++){const $=P[ve];ie($[0]+X*u,$[1]+X*u,$[2]+X*u)}}i.addGroup(C,n.length/3-C,0)}function j(){const C=n.length/3;let ve=0;le(I,ve),ve+=I.length;for(let $=0,ce=G.length;$<ce;$++){const oe=G[$];le(oe,ve),ve+=oe.length}i.addGroup(C,n.length/3-C,1)}function le(C,ve){let $=C.length;for(;--$>=0;){const ce=$;let oe=$-1;oe<0&&(oe=C.length-1);for(let Ce=0,ae=u+p*2;Ce<ae;Ce++){const me=X*Ce,Me=X*(Ce+1),re=ve+ce+me,Pe=ve+oe+me,R=ve+oe+Me,M=ve+ce+Me;Te(re,Pe,R,M)}}}function Q(C,ve,$){l.push(C),l.push(ve),l.push($)}function ie(C,ve,$){Ue(C),Ue(ve),Ue($);const ce=n.length/3,oe=S.generateTopUV(i,n,ce-3,ce-2,ce-1);pe(oe[0]),pe(oe[1]),pe(oe[2])}function Te(C,ve,$,ce){Ue(C),Ue(ve),Ue(ce),Ue(ve),Ue($),Ue(ce);const oe=n.length/3,Ce=S.generateSideWallUV(i,n,oe-6,oe-3,oe-2,oe-1);pe(Ce[0]),pe(Ce[1]),pe(Ce[3]),pe(Ce[1]),pe(Ce[2]),pe(Ce[3])}function Ue(C){n.push(l[C*3+0]),n.push(l[C*3+1]),n.push(l[C*3+2])}function pe(C){r.push(C.x),r.push(C.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return A_(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new iu[n.type]().fromJSON(n)),new $a(i,e.options)}}const b_={generateTopUV:function(s,e,t,i,n){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[n*3],u=e[n*3+1];return[new Re(r,o),new Re(a,l),new Re(c,u)]},generateSideWallUV:function(s,e,t,i,n,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[n*3],d=e[n*3+1],g=e[n*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Re(o,1-l),new Re(c,1-h),new Re(f,1-g),new Re(_,1-m)]:[new Re(a,1-l),new Re(u,1-h),new Re(d,1-g),new Re(p,1-m)]}};function A_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class lu extends oi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class w_ extends oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cu extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class R_ extends cu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xa=new rt,ql=new W,jl=new W;class C_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(ql),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class P_ extends C_{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class L_ extends cu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new P_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class U_ extends kt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Kl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class D_ extends Kg{constructor(e=10,t=10,i=4473924,n=8947848){i=new Ke(i),n=new Ke(n);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?i:n;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new kt;u.setAttribute("position",new It(l,3)),u.setAttribute("color",new It(c,3));const h=new Qc({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);const Zl={type:"change"},Sa={type:"start"},Jl={type:"end"},hs=new Ya,Ql=new In,I_=Math.cos(70*Ms.DEG2RAD);class F_ extends si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",M),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Zl),i.update(),r=n.NONE},this.update=function(){const N=new W,se=new ni().setFromUnitVectors(e.up,new W(0,1,0)),xe=se.clone().invert(),ue=new W,Ee=new ni,De=new W,ke=2*Math.PI;return function(ge=null){const J=i.object.position;N.copy(J).sub(i.target),N.applyQuaternion(se),a.setFromVector3(N),i.autoRotate&&r===n.NONE&&G(T(ge)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ae=i.minAzimuthAngle,ye=i.maxAzimuthAngle;isFinite(Ae)&&isFinite(ye)&&(Ae<-Math.PI?Ae+=ke:Ae>Math.PI&&(Ae-=ke),ye<-Math.PI?ye+=ke:ye>Math.PI&&(ye-=ke),Ae<=ye?a.theta=Math.max(Ae,Math.min(ye,a.theta)):a.theta=a.theta>(Ae+ye)/2?Math.max(Ae,a.theta):Math.min(ye,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&A||i.object.isOrthographicCamera?a.radius=V(a.radius):a.radius=V(a.radius*c),N.setFromSpherical(a),N.applyQuaternion(xe),J.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Ie=!1;if(i.zoomToCursor&&A){let ze=null;if(i.object.isPerspectiveCamera){const Ne=N.length();ze=V(Ne*c);const Be=Ne-ze;i.object.position.addScaledVector(x,Be),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ne=new W(E.x,E.y,0);Ne.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ie=!0;const Be=new W(E.x,E.y,0);Be.unproject(i.object),i.object.position.sub(Be).add(Ne),i.object.updateMatrixWorld(),ze=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ze!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ze).add(i.object.position):(hs.origin.copy(i.object.position),hs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(hs.direction))<I_?e.lookAt(i.target):(Ql.setFromNormalAndCoplanarPoint(i.object.up,i.target),hs.intersectPlane(Ql,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ie=!0);return c=1,A=!1,Ie||ue.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o||De.distanceToSquared(i.target)>0?(i.dispatchEvent(Zl),ue.copy(i.object.position),Ee.copy(i.object.quaternion),De.copy(i.target),Ie=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",ae),i.domElement.removeEventListener("pointercancel",Me),i.domElement.removeEventListener("wheel",R),i.domElement.removeEventListener("pointermove",me),i.domElement.removeEventListener("pointerup",Me),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",M),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=n.NONE;const o=1e-6,a=new Kl,l=new Kl;let c=1;const u=new W,h=new Re,f=new Re,d=new Re,g=new Re,_=new Re,p=new Re,m=new Re,S=new Re,v=new Re,x=new W,E=new Re;let A=!1;const b=[],F={};function T(N){return N!==null?2*Math.PI/60*i.autoRotateSpeed*N:2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function G(N){l.theta-=N}function U(N){l.phi-=N}const P=function(){const N=new W;return function(xe,ue){N.setFromMatrixColumn(ue,0),N.multiplyScalar(-xe),u.add(N)}}(),I=function(){const N=new W;return function(xe,ue){i.screenSpacePanning===!0?N.setFromMatrixColumn(ue,1):(N.setFromMatrixColumn(ue,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(xe),u.add(N)}}(),B=function(){const N=new W;return function(xe,ue){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const De=i.object.position;N.copy(De).sub(i.target);let ke=N.length();ke*=Math.tan(i.object.fov/2*Math.PI/180),P(2*xe*ke/Ee.clientHeight,i.object.matrix),I(2*ue*ke/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(P(xe*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),I(ue*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(N){if(!i.zoomToCursor)return;A=!0;const se=i.domElement.getBoundingClientRect(),xe=N.clientX-se.left,ue=N.clientY-se.top,Ee=se.width,De=se.height;E.x=xe/Ee*2-1,E.y=-(ue/De)*2+1,x.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function V(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function k(N){h.set(N.clientX,N.clientY)}function w(N){q(N),m.set(N.clientX,N.clientY)}function D(N){g.set(N.clientX,N.clientY)}function K(N){f.set(N.clientX,N.clientY),d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const se=i.domElement;G(2*Math.PI*d.x/se.clientHeight),U(2*Math.PI*d.y/se.clientHeight),h.copy(f),i.update()}function Y(N){S.set(N.clientX,N.clientY),v.subVectors(S,m),v.y>0?X(y()):v.y<0&&H(y()),m.copy(S),i.update()}function j(N){_.set(N.clientX,N.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),B(p.x,p.y),g.copy(_),i.update()}function le(N){q(N),N.deltaY<0?H(y()):N.deltaY>0&&X(y()),i.update()}function Q(N){let se=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),se=!0;break}se&&(N.preventDefault(),i.update())}function ie(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const N=.5*(b[0].pageX+b[1].pageX),se=.5*(b[0].pageY+b[1].pageY);h.set(N,se)}}function Te(){if(b.length===1)g.set(b[0].pageX,b[0].pageY);else{const N=.5*(b[0].pageX+b[1].pageX),se=.5*(b[0].pageY+b[1].pageY);g.set(N,se)}}function Ue(){const N=b[0].pageX-b[1].pageX,se=b[0].pageY-b[1].pageY,xe=Math.sqrt(N*N+se*se);m.set(0,xe)}function pe(){i.enableZoom&&Ue(),i.enablePan&&Te()}function C(){i.enableZoom&&Ue(),i.enableRotate&&ie()}function ve(N){if(b.length==1)f.set(N.pageX,N.pageY);else{const xe=Z(N),ue=.5*(N.pageX+xe.x),Ee=.5*(N.pageY+xe.y);f.set(ue,Ee)}d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const se=i.domElement;G(2*Math.PI*d.x/se.clientHeight),U(2*Math.PI*d.y/se.clientHeight),h.copy(f)}function $(N){if(b.length===1)_.set(N.pageX,N.pageY);else{const se=Z(N),xe=.5*(N.pageX+se.x),ue=.5*(N.pageY+se.y);_.set(xe,ue)}p.subVectors(_,g).multiplyScalar(i.panSpeed),B(p.x,p.y),g.copy(_)}function ce(N){const se=Z(N),xe=N.pageX-se.x,ue=N.pageY-se.y,Ee=Math.sqrt(xe*xe+ue*ue);S.set(0,Ee),v.set(0,Math.pow(S.y/m.y,i.zoomSpeed)),X(v.y),m.copy(S)}function oe(N){i.enableZoom&&ce(N),i.enablePan&&$(N)}function Ce(N){i.enableZoom&&ce(N),i.enableRotate&&ve(N)}function ae(N){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",me),i.domElement.addEventListener("pointerup",Me)),he(N),N.pointerType==="touch"?z(N):re(N))}function me(N){i.enabled!==!1&&(N.pointerType==="touch"?Se(N):Pe(N))}function Me(N){be(N),b.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",me),i.domElement.removeEventListener("pointerup",Me)),i.dispatchEvent(Jl),r=n.NONE}function re(N){let se;switch(N.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case hi.DOLLY:if(i.enableZoom===!1)return;w(N),r=n.DOLLY;break;case hi.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;D(N),r=n.PAN}else{if(i.enableRotate===!1)return;k(N),r=n.ROTATE}break;case hi.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;k(N),r=n.ROTATE}else{if(i.enablePan===!1)return;D(N),r=n.PAN}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(Sa)}function Pe(N){switch(r){case n.ROTATE:if(i.enableRotate===!1)return;K(N);break;case n.DOLLY:if(i.enableZoom===!1)return;Y(N);break;case n.PAN:if(i.enablePan===!1)return;j(N);break}}function R(N){i.enabled===!1||i.enableZoom===!1||r!==n.NONE||(N.preventDefault(),i.dispatchEvent(Sa),le(N),i.dispatchEvent(Jl))}function M(N){i.enabled===!1||i.enablePan===!1||Q(N)}function z(N){switch(_e(N),b.length){case 1:switch(i.touches.ONE){case fi.ROTATE:if(i.enableRotate===!1)return;ie(),r=n.TOUCH_ROTATE;break;case fi.PAN:if(i.enablePan===!1)return;Te(),r=n.TOUCH_PAN;break;default:r=n.NONE}break;case 2:switch(i.touches.TWO){case fi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;pe(),r=n.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;C(),r=n.TOUCH_DOLLY_ROTATE;break;default:r=n.NONE}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(Sa)}function Se(N){switch(_e(N),r){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(N),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;$(N),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;oe(N),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ce(N),i.update();break;default:r=n.NONE}}function ee(N){i.enabled!==!1&&N.preventDefault()}function he(N){b.push(N)}function be(N){delete F[N.pointerId];for(let se=0;se<b.length;se++)if(b[se].pointerId==N.pointerId){b.splice(se,1);return}}function _e(N){let se=F[N.pointerId];se===void 0&&(se=new Re,F[N.pointerId]=se),se.set(N.pageX,N.pageY)}function Z(N){const se=N.pointerId===b[0].pointerId?b[1]:b[0];return F[se.pointerId]}i.domElement.addEventListener("contextmenu",ee),i.domElement.addEventListener("pointerdown",ae),i.domElement.addEventListener("pointercancel",Me),i.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}function N_(){var s=Object.create(null);function e(n,r){var o=n.id,a=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[o])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=i("<"+a+">.init",c),u&&(u=i("<"+a+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[o]={id:o,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var o,a=n.id,l=n.args;(!s[a]||typeof s[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=s[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=s[a].getTransferables&&s[a].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function i(n,r){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(n){var r=n.data,o=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function O_(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var uu=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return uu=function(){return s},s},B_=0,k_=0,ya=!1,Sr=Object.create(null),yr=Object.create(null),Oa=Object.create(null);function Zi(s){if((!s||typeof s.init!="function")&&!ya)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId;if(!uu())return O_(s);n==null&&(n="#default");var r="workerModule"+ ++B_,o=s.name||r,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(ya=!0,c=Zi({workerId:n,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+_s(c)+`
)}`}),ya=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=$l(n,"registerModule",l.workerModuleData);var h=function(){a=null,yr[n].delete(h)};(yr[n]||(yr[n]=new Set)).add(h)}return a.then(function(f){var d=f.isCallable;if(d)return $l(n,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:o,dependencies:e,init:_s(t),getTransferables:i&&_s(i)},l}function z_(s){yr[s]&&yr[s].forEach(function(e){e()}),Sr[s]&&(Sr[s].terminate(),delete Sr[s])}function _s(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function G_(s){var e=Sr[s];if(!e){var t=_s(N_);e=Sr[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,o=Oa[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Oa[r],o(n)}}return e}function $l(s,e,t){return new Promise(function(i,n){var r=++k_;Oa[r]=function(o){o.success?i(o.result):n(new Error("Error in worker "+e+" call: "+o.error))},G_(s).postMessage({messageId:r,action:e,data:t})})}function hu(){var s=function(e){function t(V,k,w,D,K,Y,j,le){var Q=1-j;le.x=Q*Q*V+2*Q*j*w+j*j*K,le.y=Q*Q*k+2*Q*j*D+j*j*Y}function i(V,k,w,D,K,Y,j,le,Q,ie){var Te=1-Q;ie.x=Te*Te*Te*V+3*Te*Te*Q*w+3*Te*Q*Q*K+Q*Q*Q*j,ie.y=Te*Te*Te*k+3*Te*Te*Q*D+3*Te*Q*Q*Y+Q*Q*Q*le}function n(V,k){for(var w=/([MLQCZ])([^MLQCZ]*)/g,D,K,Y,j,le;D=w.exec(V);){var Q=D[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ie){return parseFloat(ie)});switch(D[1]){case"M":j=K=Q[0],le=Y=Q[1];break;case"L":(Q[0]!==j||Q[1]!==le)&&k("L",j,le,j=Q[0],le=Q[1]);break;case"Q":{k("Q",j,le,j=Q[2],le=Q[3],Q[0],Q[1]);break}case"C":{k("C",j,le,j=Q[4],le=Q[5],Q[0],Q[1],Q[2],Q[3]);break}case"Z":(j!==K||le!==Y)&&k("L",j,le,K,Y);break}}}function r(V,k,w){w===void 0&&(w=16);var D={x:0,y:0};n(V,function(K,Y,j,le,Q,ie,Te,Ue,pe){switch(K){case"L":k(Y,j,le,Q);break;case"Q":{for(var C=Y,ve=j,$=1;$<w;$++)t(Y,j,ie,Te,le,Q,$/(w-1),D),k(C,ve,D.x,D.y),C=D.x,ve=D.y;break}case"C":{for(var ce=Y,oe=j,Ce=1;Ce<w;Ce++)i(Y,j,ie,Te,Ue,pe,le,Q,Ce/(w-1),D),k(ce,oe,D.x,D.y),ce=D.x,oe=D.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(V,k){var w=V.getContext?V.getContext("webgl",c):V,D=l.get(w);if(!D){let ce=function(re){var Pe=Y[re];if(!Pe&&(Pe=Y[re]=w.getExtension(re),!Pe))throw new Error(re+" not supported");return Pe},oe=function(re,Pe){var R=w.createShader(Pe);return w.shaderSource(R,re),w.compileShader(R),R},Ce=function(re,Pe,R,M){if(!j[re]){var z={},Se={},ee=w.createProgram();w.attachShader(ee,oe(Pe,w.VERTEX_SHADER)),w.attachShader(ee,oe(R,w.FRAGMENT_SHADER)),w.linkProgram(ee),j[re]={program:ee,transaction:function(be){w.useProgram(ee),be({setUniform:function(Z,N){for(var se=[],xe=arguments.length-2;xe-- >0;)se[xe]=arguments[xe+2];var ue=Se[N]||(Se[N]=w.getUniformLocation(ee,N));w["uniform"+Z].apply(w,[ue].concat(se))},setAttribute:function(Z,N,se,xe,ue){var Ee=z[Z];Ee||(Ee=z[Z]={buf:w.createBuffer(),loc:w.getAttribLocation(ee,Z),data:null}),w.bindBuffer(w.ARRAY_BUFFER,Ee.buf),w.vertexAttribPointer(Ee.loc,N,w.FLOAT,!1,0,0),w.enableVertexAttribArray(Ee.loc),K?w.vertexAttribDivisor(Ee.loc,xe):ce("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ee.loc,xe),ue!==Ee.data&&(w.bufferData(w.ARRAY_BUFFER,ue,se),Ee.data=ue)}})}}}j[re].transaction(M)},ae=function(re,Pe){Q++;try{w.activeTexture(w.TEXTURE0+Q);var R=le[re];R||(R=le[re]=w.createTexture(),w.bindTexture(w.TEXTURE_2D,R),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MIN_FILTER,w.NEAREST),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MAG_FILTER,w.NEAREST)),w.bindTexture(w.TEXTURE_2D,R),Pe(R,Q)}finally{Q--}},me=function(re,Pe,R){var M=w.createFramebuffer();ie.push(M),w.bindFramebuffer(w.FRAMEBUFFER,M),w.activeTexture(w.TEXTURE0+Pe),w.bindTexture(w.TEXTURE_2D,re),w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,re,0);try{R(M)}finally{w.deleteFramebuffer(M),w.bindFramebuffer(w.FRAMEBUFFER,ie[--ie.length-1]||null)}},Me=function(){Y={},j={},le={},Q=-1,ie.length=0};var Te=ce,Ue=oe,pe=Ce,C=ae,ve=me,$=Me,K=typeof WebGL2RenderingContext<"u"&&w instanceof WebGL2RenderingContext,Y={},j={},le={},Q=-1,ie=[];w.canvas.addEventListener("webglcontextlost",function(re){Me(),re.preventDefault()},!1),l.set(w,D={gl:w,isWebGL2:K,getExtension:ce,withProgram:Ce,withTexture:ae,withTextureFramebuffer:me,handleContextLoss:Me})}k(D)}function h(V,k,w,D,K,Y,j,le){j===void 0&&(j=15),le===void 0&&(le=null),u(V,function(Q){var ie=Q.gl,Te=Q.withProgram,Ue=Q.withTexture;Ue("copy",function(pe,C){ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,K,Y,0,ie.RGBA,ie.UNSIGNED_BYTE,k),Te("copy",o,a,function(ve){var $=ve.setUniform,ce=ve.setAttribute;ce("aUV",2,ie.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),$("1i","image",C),ie.bindFramebuffer(ie.FRAMEBUFFER,le||null),ie.disable(ie.BLEND),ie.colorMask(j&8,j&4,j&2,j&1),ie.viewport(w,D,K,Y),ie.scissor(w,D,K,Y),ie.drawArrays(ie.TRIANGLES,0,3)})})})}function f(V,k,w){var D=V.width,K=V.height;u(V,function(Y){var j=Y.gl,le=new Uint8Array(D*K*4);j.readPixels(0,0,D,K,j.RGBA,j.UNSIGNED_BYTE,le),V.width=k,V.height=w,h(j,le,0,0,D,K)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(V,k,w,D,K,Y){Y===void 0&&(Y=1);var j=new Uint8Array(V*k),le=D[2]-D[0],Q=D[3]-D[1],ie=[];r(w,function(ce,oe,Ce,ae){ie.push({x1:ce,y1:oe,x2:Ce,y2:ae,minX:Math.min(ce,Ce),minY:Math.min(oe,ae),maxX:Math.max(ce,Ce),maxY:Math.max(oe,ae)})}),ie.sort(function(ce,oe){return ce.maxX-oe.maxX});for(var Te=0;Te<V;Te++)for(var Ue=0;Ue<k;Ue++){var pe=ve(D[0]+le*(Te+.5)/V,D[1]+Q*(Ue+.5)/k),C=Math.pow(1-Math.abs(pe)/K,Y)/2;pe<0&&(C=1-C),C=Math.max(0,Math.min(255,Math.round(C*255))),j[Ue*V+Te]=C}return j;function ve(ce,oe){for(var Ce=1/0,ae=1/0,me=ie.length;me--;){var Me=ie[me];if(Me.maxX+ae<=ce)break;if(ce+ae>Me.minX&&oe-ae<Me.maxY&&oe+ae>Me.minY){var re=m(ce,oe,Me.x1,Me.y1,Me.x2,Me.y2);re<Ce&&(Ce=re,ae=Math.sqrt(Ce))}}return $(ce,oe)&&(ae=-ae),ae}function $(ce,oe){for(var Ce=0,ae=ie.length;ae--;){var me=ie[ae];if(me.maxX<=ce)break;var Me=me.y1>oe!=me.y2>oe&&ce<(me.x2-me.x1)*(oe-me.y1)/(me.y2-me.y1)+me.x1;Me&&(Ce+=me.y1<me.y2?1:-1)}return Ce!==0}}function _(V,k,w,D,K,Y,j,le,Q,ie){Y===void 0&&(Y=1),le===void 0&&(le=0),Q===void 0&&(Q=0),ie===void 0&&(ie=0),p(V,k,w,D,K,Y,j,null,le,Q,ie)}function p(V,k,w,D,K,Y,j,le,Q,ie,Te){Y===void 0&&(Y=1),Q===void 0&&(Q=0),ie===void 0&&(ie=0),Te===void 0&&(Te=0);for(var Ue=g(V,k,w,D,K,Y),pe=new Uint8Array(Ue.length*4),C=0;C<Ue.length;C++)pe[C*4+Te]=Ue[C];h(j,pe,Q,ie,V,k,1<<3-Te,le)}function m(V,k,w,D,K,Y){var j=K-w,le=Y-D,Q=j*j+le*le,ie=Q?Math.max(0,Math.min(1,((V-w)*j+(k-D)*le)/Q)):0,Te=V-(w+ie*j),Ue=k-(D+ie*le);return Te*Te+Ue*Ue}var S=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:p}),v="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",E="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",A=new Float32Array([0,0,2,0,0,2]),b=null,F=!1,T={},y=new WeakMap;function G(V){if(!F&&!B(V))throw new Error("WebGL generation not supported")}function U(V,k,w,D,K,Y,j){if(Y===void 0&&(Y=1),j===void 0&&(j=null),!j&&(j=b,!j)){var le=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!le)throw new Error("OffscreenCanvas or DOM canvas not supported");j=b=le.getContext("webgl",{depth:!1})}G(j);var Q=new Uint8Array(V*k*4);u(j,function(pe){var C=pe.gl,ve=pe.withTexture,$=pe.withTextureFramebuffer;ve("readable",function(ce,oe){C.texImage2D(C.TEXTURE_2D,0,C.RGBA,V,k,0,C.RGBA,C.UNSIGNED_BYTE,null),$(ce,oe,function(Ce){I(V,k,w,D,K,Y,C,Ce,0,0,0),C.readPixels(0,0,V,k,C.RGBA,C.UNSIGNED_BYTE,Q)})})});for(var ie=new Uint8Array(V*k),Te=0,Ue=0;Te<Q.length;Te+=4)ie[Ue++]=Q[Te];return ie}function P(V,k,w,D,K,Y,j,le,Q,ie){Y===void 0&&(Y=1),le===void 0&&(le=0),Q===void 0&&(Q=0),ie===void 0&&(ie=0),I(V,k,w,D,K,Y,j,null,le,Q,ie)}function I(V,k,w,D,K,Y,j,le,Q,ie,Te){Y===void 0&&(Y=1),Q===void 0&&(Q=0),ie===void 0&&(ie=0),Te===void 0&&(Te=0),G(j);var Ue=[];r(w,function(pe,C,ve,$){Ue.push(pe,C,ve,$)}),Ue=new Float32Array(Ue),u(j,function(pe){var C=pe.gl,ve=pe.isWebGL2,$=pe.getExtension,ce=pe.withProgram,oe=pe.withTexture,Ce=pe.withTextureFramebuffer,ae=pe.handleContextLoss;if(oe("rawDistances",function(me,Me){(V!==me._lastWidth||k!==me._lastHeight)&&C.texImage2D(C.TEXTURE_2D,0,C.RGBA,me._lastWidth=V,me._lastHeight=k,0,C.RGBA,C.UNSIGNED_BYTE,null),ce("main",v,x,function(re){var Pe=re.setAttribute,R=re.setUniform,M=!ve&&$("ANGLE_instanced_arrays"),z=!ve&&$("EXT_blend_minmax");Pe("aUV",2,C.STATIC_DRAW,0,A),Pe("aLineSegment",4,C.DYNAMIC_DRAW,1,Ue),R.apply(void 0,["4f","uGlyphBounds"].concat(D)),R("1f","uMaxDistance",K),R("1f","uExponent",Y),Ce(me,Me,function(Se){C.enable(C.BLEND),C.colorMask(!0,!0,!0,!0),C.viewport(0,0,V,k),C.scissor(0,0,V,k),C.blendFunc(C.ONE,C.ONE),C.blendEquationSeparate(C.FUNC_ADD,ve?C.MAX:z.MAX_EXT),C.clear(C.COLOR_BUFFER_BIT),ve?C.drawArraysInstanced(C.TRIANGLES,0,3,Ue.length/4):M.drawArraysInstancedANGLE(C.TRIANGLES,0,3,Ue.length/4)})}),ce("post",o,E,function(re){re.setAttribute("aUV",2,C.STATIC_DRAW,0,A),re.setUniform("1i","tex",Me),C.bindFramebuffer(C.FRAMEBUFFER,le),C.disable(C.BLEND),C.colorMask(Te===0,Te===1,Te===2,Te===3),C.viewport(Q,ie,V,k),C.scissor(Q,ie,V,k),C.drawArrays(C.TRIANGLES,0,3)})}),C.isContextLost())throw ae(),new Error("webgl context lost")})}function B(V){var k=!V||V===b?T:V.canvas||V,w=y.get(k);if(w===void 0){F=!0;var D=null;try{var K=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],Y=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,V);w=Y&&K.length===Y.length&&Y.every(function(j,le){return j===K[le]}),w||(D="bad trial run results",console.info(K,Y))}catch(j){w=!1,D=j.message}D&&console.warn("WebGL SDF generation not supported:",D),F=!1,y.set(k,w)}return w}var X=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:P,generateIntoFramebuffer:I,isSupported:B});function H(V,k,w,D,K,Y){K===void 0&&(K=Math.max(D[2]-D[0],D[3]-D[1])/2),Y===void 0&&(Y=1);try{return U.apply(X,arguments)}catch(j){return console.info("WebGL SDF generation failed, falling back to JS",j),g.apply(S,arguments)}}function q(V,k,w,D,K,Y,j,le,Q,ie){K===void 0&&(K=Math.max(D[2]-D[0],D[3]-D[1])/2),Y===void 0&&(Y=1),le===void 0&&(le=0),Q===void 0&&(Q=0),ie===void 0&&(ie=0);try{return P.apply(X,arguments)}catch(Te){return console.info("WebGL SDF generation failed, falling back to JS",Te),_.apply(S,arguments)}}return e.forEachPathCommand=n,e.generate=H,e.generateIntoCanvas=q,e.javascript=S,e.pathToLineSegments=r,e.webgl=X,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function H_(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(ae,me){i[ae]=1<<me+1,n[i[ae]]=ae}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,o=i.L|i.R|i.AL,a=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function h(){if(!u){u=new Map;var ae=function(Me){if(t.hasOwnProperty(Me)){var re=0;t[Me].split(",").forEach(function(Pe){var R=Pe.split("+"),M=R[0],z=R[1];M=parseInt(M,36),z=z?parseInt(z,36):0,u.set(re+=M,i[Me]);for(var Se=0;Se<z;Se++)u.set(++re,i[Me])})}};for(var me in t)ae(me)}}function f(ae){return h(),u.get(ae.codePointAt(0))||i.L}function d(ae){return n[f(ae)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(ae,me){var Me=36,re=0,Pe=new Map,R=me&&new Map,M;return ae.split(",").forEach(function z(Se){if(Se.indexOf("+")!==-1)for(var ee=+Se;ee--;)z(M);else{M=Se;var he=Se.split(">"),be=he[0],_e=he[1];be=String.fromCodePoint(re+=parseInt(be,Me)),_e=String.fromCodePoint(re+=parseInt(_e,Me)),Pe.set(be,_e),me&&R.set(_e,be)}}),{map:Pe,reverseMap:R}}var p,m,S;function v(){if(!p){var ae=_(g.pairs,!0),me=ae.map,Me=ae.reverseMap;p=me,m=Me,S=_(g.canonical,!1).map}}function x(ae){return v(),p.get(ae)||null}function E(ae){return v(),m.get(ae)||null}function A(ae){return v(),S.get(ae)||null}var b=i.L,F=i.R,T=i.EN,y=i.ES,G=i.ET,U=i.AN,P=i.CS,I=i.B,B=i.S,X=i.ON,H=i.BN,q=i.NSM,V=i.AL,k=i.LRO,w=i.RLO,D=i.LRE,K=i.RLE,Y=i.PDF,j=i.LRI,le=i.RLI,Q=i.FSI,ie=i.PDI;function Te(ae,me){for(var Me=125,re=new Uint32Array(ae.length),Pe=0;Pe<ae.length;Pe++)re[Pe]=f(ae[Pe]);var R=new Map;function M(Pt,Jt){var Lt=re[Pt];re[Pt]=Jt,R.set(Lt,R.get(Lt)-1),Lt&a&&R.set(a,R.get(a)-1),R.set(Jt,(R.get(Jt)||0)+1),Jt&a&&R.set(a,(R.get(a)||0)+1)}for(var z=new Uint8Array(ae.length),Se=new Map,ee=[],he=null,be=0;be<ae.length;be++)he||ee.push(he={start:be,end:ae.length-1,level:me==="rtl"?1:me==="ltr"?0:vo(be,!1)}),re[be]&I&&(he.end=be,he=null);for(var _e=K|D|w|k|r|ie|Y|I,Z=function(Pt){return Pt+(Pt&1?1:2)},N=function(Pt){return Pt+(Pt&1?2:1)},se=0;se<ee.length;se++){he=ee[se];var xe=[{_level:he.level,_override:0,_isolate:0}],ue=void 0,Ee=0,De=0,ke=0;R.clear();for(var O=he.start;O<=he.end;O++){var ge=re[O];if(ue=xe[xe.length-1],R.set(ge,(R.get(ge)||0)+1),ge&a&&R.set(a,(R.get(a)||0)+1),ge&_e)if(ge&(K|D)){z[O]=ue._level;var J=(ge===K?N:Z)(ue._level);J<=Me&&!Ee&&!De?xe.push({_level:J,_override:0,_isolate:0}):Ee||De++}else if(ge&(w|k)){z[O]=ue._level;var Ae=(ge===w?N:Z)(ue._level);Ae<=Me&&!Ee&&!De?xe.push({_level:Ae,_override:ge&w?F:b,_isolate:0}):Ee||De++}else if(ge&r){ge&Q&&(ge=vo(O+1,!0)===1?le:j),z[O]=ue._level,ue._override&&M(O,ue._override);var ye=(ge===le?N:Z)(ue._level);ye<=Me&&Ee===0&&De===0?(ke++,xe.push({_level:ye,_override:0,_isolate:1,_isolInitIndex:O})):Ee++}else if(ge&ie){if(Ee>0)Ee--;else if(ke>0){for(De=0;!xe[xe.length-1]._isolate;)xe.pop();var Ie=xe[xe.length-1]._isolInitIndex;Ie!=null&&(Se.set(Ie,O),Se.set(O,Ie)),xe.pop(),ke--}ue=xe[xe.length-1],z[O]=ue._level,ue._override&&M(O,ue._override)}else ge&Y?(Ee===0&&(De>0?De--:!ue._isolate&&xe.length>1&&(xe.pop(),ue=xe[xe.length-1])),z[O]=ue._level):ge&I&&(z[O]=he.level);else z[O]=ue._level,ue._override&&ge!==H&&M(O,ue._override)}for(var ze=[],Ne=null,Be=he.start;Be<=he.end;Be++){var Ve=re[Be];if(!(Ve&l)){var Qe=z[Be],Ze=Ve&r,lt=Ve===ie;Ne&&Qe===Ne._level?(Ne._end=Be,Ne._endsWithIsolInit=Ze):ze.push(Ne={_start:Be,_end:Be,_level:Qe,_startsWithPDI:lt,_endsWithIsolInit:Ze})}}for(var Rt=[],cn=0;cn<ze.length;cn++){var Ct=ze[cn];if(!Ct._startsWithPDI||Ct._startsWithPDI&&!Se.has(Ct._start)){for(var jt=[Ne=Ct],zt=void 0;Ne&&Ne._endsWithIsolInit&&(zt=Se.get(Ne._end))!=null;)for(var Gt=cn+1;Gt<ze.length;Gt++)if(ze[Gt]._start===zt){jt.push(Ne=ze[Gt]);break}for(var mt=[],mn=0;mn<jt.length;mn++)for(var Ur=jt[mn],L=Ur._start;L<=Ur._end;L++)mt.push(L);for(var te=z[mt[0]],de=he.level,ne=mt[0]-1;ne>=0;ne--)if(!(re[ne]&l)){de=z[ne];break}var fe=mt[mt.length-1],Fe=z[fe],Oe=he.level;if(!(re[fe]&r)){for(var Ge=fe+1;Ge<=he.end;Ge++)if(!(re[Ge]&l)){Oe=z[Ge];break}}Rt.push({_seqIndices:mt,_sosType:Math.max(de,te)%2?F:b,_eosType:Math.max(Oe,Fe)%2?F:b})}}for(var He=0;He<Rt.length;He++){var Xe=Rt[He],we=Xe._seqIndices,We=Xe._sosType,$e=Xe._eosType,Je=z[we[0]]&1?F:b;if(R.get(q))for(var gt=0;gt<we.length;gt++){var Ht=we[gt];if(re[Ht]&q){for(var et=We,Ye=gt-1;Ye>=0;Ye--)if(!(re[we[Ye]]&l)){et=re[we[Ye]];break}M(Ht,et&(r|ie)?X:et)}}if(R.get(T))for(var wn=0;wn<we.length;wn++){var nt=we[wn];if(re[nt]&T)for(var Vt=wn-1;Vt>=-1;Vt--){var Ji=Vt===-1?We:re[we[Vt]];if(Ji&o){Ji===V&&M(nt,U);break}}}if(R.get(V))for(var gn=0;gn<we.length;gn++){var li=we[gn];re[li]&V&&M(li,F)}if(R.get(y)||R.get(P))for(var st=1;st<we.length-1;st++){var Kt=we[st];if(re[Kt]&(y|P)){for(var un=0,_t=0,Gn=st-1;Gn>=0&&(un=re[we[Gn]],!!(un&l));Gn--);for(var Qi=st+1;Qi<we.length&&(_t=re[we[Qi]],!!(_t&l));Qi++);un===_t&&(re[Kt]===y?un===T:un&(T|U))&&M(Kt,un)}}if(R.get(T))for(var Ft=0;Ft<we.length;Ft++){var bu=we[Ft];if(re[bu]&T){for(var Dr=Ft-1;Dr>=0&&re[we[Dr]]&(G|l);Dr--)M(we[Dr],T);for(Ft++;Ft<we.length&&re[we[Ft]]&(G|l|T);Ft++)re[we[Ft]]!==T&&M(we[Ft],T)}}if(R.get(G)||R.get(y)||R.get(P))for(var $i=0;$i<we.length;$i++){var ro=we[$i];if(re[ro]&(G|y|P)){M(ro,X);for(var Ir=$i-1;Ir>=0&&re[we[Ir]]&l;Ir--)M(we[Ir],X);for(var Fr=$i+1;Fr<we.length&&re[we[Fr]]&l;Fr++)M(we[Fr],X)}}if(R.get(T))for(var Ls=0,so=We;Ls<we.length;Ls++){var ao=we[Ls],Us=re[ao];Us&T?so===b&&M(ao,b):Us&o&&(so=Us)}if(R.get(a)){var er=F|T|U,oo=er|b,Nr=[];{for(var ci=[],ui=0;ui<we.length;ui++)if(re[we[ui]]&a){var tr=ae[we[ui]],lo=void 0;if(x(tr)!==null)if(ci.length<63)ci.push({char:tr,seqIndex:ui});else break;else if((lo=E(tr))!==null)for(var nr=ci.length-1;nr>=0;nr--){var Ds=ci[nr].char;if(Ds===lo||Ds===E(A(tr))||x(A(Ds))===tr){Nr.push([ci[nr].seqIndex,ui]),ci.length=nr;break}}}Nr.sort(function(Pt,Jt){return Pt[0]-Jt[0]})}for(var Is=0;Is<Nr.length;Is++){for(var co=Nr[Is],Or=co[0],Fs=co[1],uo=!1,Zt=0,Ns=Or+1;Ns<Fs;Ns++){var ho=we[Ns];if(re[ho]&oo){uo=!0;var fo=re[ho]&er?F:b;if(fo===Je){Zt=fo;break}}}if(uo&&!Zt){Zt=We;for(var Os=Or-1;Os>=0;Os--){var po=we[Os];if(re[po]&oo){var mo=re[po]&er?F:b;mo!==Je?Zt=mo:Zt=Je;break}}}if(Zt){if(re[we[Or]]=re[we[Fs]]=Zt,Zt!==Je){for(var ir=Or+1;ir<we.length;ir++)if(!(re[we[ir]]&l)){f(ae[we[ir]])&q&&(re[we[ir]]=Zt);break}}if(Zt!==Je){for(var rr=Fs+1;rr<we.length;rr++)if(!(re[we[rr]]&l)){f(ae[we[rr]])&q&&(re[we[rr]]=Zt);break}}}}for(var Rn=0;Rn<we.length;Rn++)if(re[we[Rn]]&a){for(var go=Rn,Bs=Rn,ks=We,sr=Rn-1;sr>=0;sr--)if(re[we[sr]]&l)go=sr;else{ks=re[we[sr]]&er?F:b;break}for(var _o=$e,ar=Rn+1;ar<we.length;ar++)if(re[we[ar]]&(a|l))Bs=ar;else{_o=re[we[ar]]&er?F:b;break}for(var zs=go;zs<=Bs;zs++)re[we[zs]]=ks===_o?ks:Je;Rn=Bs}}}for(var Nt=he.start;Nt<=he.end;Nt++){var Au=z[Nt],Br=re[Nt];if(Au&1?Br&(b|T|U)&&z[Nt]++:Br&F?z[Nt]++:Br&(U|T)&&(z[Nt]+=2),Br&l&&(z[Nt]=Nt===0?he.level:z[Nt-1]),Nt===he.end||f(ae[Nt])&(B|I))for(var kr=Nt;kr>=0&&f(ae[kr])&c;kr--)z[kr]=he.level}}return{levels:z,paragraphs:ee};function vo(Pt,Jt){for(var Lt=Pt;Lt<ae.length;Lt++){var Cn=re[Lt];if(Cn&(F|V))return 1;if(Cn&(I|b)||Jt&&Cn===ie)return 0;if(Cn&r){var xo=wu(Lt);Lt=xo===-1?ae.length:xo}}return 0}function wu(Pt){for(var Jt=1,Lt=Pt+1;Lt<ae.length;Lt++){var Cn=re[Lt];if(Cn&I)break;if(Cn&ie){if(--Jt===0)return Lt}else Cn&r&&Jt++}return-1}}var Ue="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",pe;function C(){if(!pe){var ae=_(Ue,!0),me=ae.map,Me=ae.reverseMap;Me.forEach(function(re,Pe){me.set(Pe,re)}),pe=me}}function ve(ae){return C(),pe.get(ae)||null}function $(ae,me,Me,re){var Pe=ae.length;Me=Math.max(0,Me==null?0:+Me),re=Math.min(Pe-1,re==null?Pe-1:+re);for(var R=new Map,M=Me;M<=re;M++)if(me[M]&1){var z=ve(ae[M]);z!==null&&R.set(M,z)}return R}function ce(ae,me,Me,re){var Pe=ae.length;Me=Math.max(0,Me==null?0:+Me),re=Math.min(Pe-1,re==null?Pe-1:+re);var R=[];return me.paragraphs.forEach(function(M){var z=Math.max(Me,M.start),Se=Math.min(re,M.end);if(z<Se){for(var ee=me.levels.slice(z,Se+1),he=Se;he>=z&&f(ae[he])&c;he--)ee[he]=M.level;for(var be=M.level,_e=1/0,Z=0;Z<ee.length;Z++){var N=ee[Z];N>be&&(be=N),N<_e&&(_e=N|1)}for(var se=be;se>=_e;se--)for(var xe=0;xe<ee.length;xe++)if(ee[xe]>=se){for(var ue=xe;xe+1<ee.length&&ee[xe+1]>=se;)xe++;xe>ue&&R.push([ue+z,xe+z])}}}),R}function oe(ae,me,Me,re){var Pe=Ce(ae,me,Me,re),R=[].concat(ae);return Pe.forEach(function(M,z){R[z]=(me.levels[M]&1?ve(ae[M]):null)||ae[M]}),R.join("")}function Ce(ae,me,Me,re){for(var Pe=ce(ae,me,Me,re),R=[],M=0;M<ae.length;M++)R[M]=M;return Pe.forEach(function(z){for(var Se=z[0],ee=z[1],he=R.slice(Se,ee+1),be=he.length;be--;)R[ee-be]=he[be]}),R}return e.closingToOpeningBracket=E,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=A,e.getEmbeddingLevels=Te,e.getMirroredCharacter=ve,e.getMirroredCharactersMap=$,e.getReorderSegments=ce,e.getReorderedIndices=Ce,e.getReorderedString=oe,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const fu=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ba(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=qe[n];return r?Ba(r):i}return s.replace(e,t)}const vt=[];for(let s=0;s<256;s++)vt[s]=(s<16?"0":"")+s.toString(16);function V_(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toUpperCase()}const Yn=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},W_=Date.now(),ec=new WeakMap,tc=new Map;let X_=1e10;function ka(s,e){const t=K_(e);let i=ec.get(s);if(i||ec.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=tc[h];if(!f){const d=Y_(this,c,e,t);f=tc[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,Yn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-W_}}),this[n]&&this[n](c)},o=function(){return a(e.chained?s:s.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:X_++}),u.uuid=V_(),u.uniforms=Yn({},c.uniforms,e.uniforms),u.defines=Yn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Yn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(Yn(this.extensions,c.extensions),Yn(this.defines,c.defines),Yn(this.uniforms,zc.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=ka(s.isDerivedMaterial?s.getDepthMaterial():new Kc({depthPacking:Pc}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=ka(s.isDerivedMaterial?s.getDistanceMaterial():new Zc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[t]=o,new o}function Y_(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=i;if(r=r||"",o=o||"",a=a||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=Ba(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Ba(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(f){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(_.push(p),"")),h=`${f}
${_.join(`
`)}
${h}`}if(g){const _=`
uniform float ${g};
`;r=_+r,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,o=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,p,m,S)=>/\battribute\s+vec[23]\s+$/.test(S.substr(0,m))?p:`troika_${p}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=nc(e,n,r,o,a),t=nc(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function nc(s,e,t,i,n){return(i||n||t)&&(s=s.replace(fu,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function q_(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let j_=0;const ic=new Map;function K_(s){const e=JSON.stringify(s,q_);let t=ic.get(e);return t==null&&ic.set(e,t=++j_),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Z_(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(n){var r=e._bin,o=new Uint8Array(n);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(o,a);a+=4,c.push(e._readFont(o,h))}return c}return[e._readFont(o,0)]},_readFont:function(n,r){var o=e._bin,a=r;o.readFixed(n,r),r+=4;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:n,_offset:a},h={},f=0;f<l;f++){var d=o.readASCII(n,r,4);r+=4,o.readUint(n,r),r+=4;var g=o.readUint(n,r);r+=4;var _=o.readUint(n,r);r+=4,h[d]={offset:g,length:_}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(n,h[p].offset,h[p].length,u))}return u},_tabOffset:function(n,r,o){for(var a=e._bin,l=a.readUshort(n,o+4),c=o+12,u=0;u<l;u++){var h=a.readASCII(n,c,4);c+=4,a.readUint(n,c),c+=4;var f=a.readUint(n,c);if(c+=4,a.readUint(n,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(n,r+2*l));return a},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(n[r+l]);return a},readUnicode:function(n,r,o){for(var a="",l=0;l<o;l++){var c=n[r++]<<8|n[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,o){var a=e._bin._tdec;return a&&r==0&&o==n.length?a.decode(n):e._bin.readASCII(n,r,o)},readBytes:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(n[r+l]);return a},readASCIIArray:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(n[r+l]));return a},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,o,a,l){var c=e._bin,u={},h=r;c.readFixed(n,r),r+=4;var f=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var g=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,r,o){var a=e._bin,l=r,c=[],u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=a.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+f,o);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,o){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(n,r),r+=2,c.flag=a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var d=a.readUshort(n,r);r+=2;var g=o(n,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var r=0,o=0;o<32;o++)n>>>o&1&&r++;return r},e._lctf.readClassDef=function(n,r){var o=e._bin,a=[],l=o.readUshort(n,r);if(r+=2,l==1){var c=o.readUshort(n,r);r+=2;var u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++)a.push(c+h),a.push(c+h),a.push(o.readUshort(n,r)),r+=2}if(l==2){var f=o.readUshort(n,r);for(r+=2,h=0;h<f;h++)a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2}return a},e._lctf.getInterval=function(n,r){for(var o=0;o<n.length;o+=3){var a=n[o],l=n[o+1];if(n[o+2],a<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(n,r){var o=e._bin,a={};a.fmt=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(n,r,l)),a.fmt==2&&(a.tab=o.readUshorts(n,r,3*l)),a},e._lctf.coverageIndex=function(n,r){var o=n.tab;if(n.fmt==1)return o.indexOf(r);if(n.fmt==2){var a=e._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},e._lctf.readFeatureList=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readASCII(n,r,4);r+=4;var f=o.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,a+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.featureParams=a+c);var u=o.readUshort(n,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(o.readUshort(n,r+2*h));return l},e._lctf.readScriptList=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readASCII(n,r,4);r+=4;var f=o.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(n,a+f)}return l},e._lctf.readScriptTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,a+c));var u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=o.readASCII(n,r,4);r+=4;var d=o.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(n,a+d)}return l},e._lctf.readLangSysTable=function(n,r){var o=e._bin,a={};o.readUshort(n,r),r+=2,a.reqFeature=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.features=o.readUshorts(n,r,l),a},e.CFF={},e.CFF.parse=function(n,r,o){var a=e._bin;(n=new Uint8Array(n.buffer,r,o))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(n,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],g=[];r=e.CFF.readIndex(n,r,g);var _=[];for(u=0;u<g.length-1;u++)_.push(a.readASCII(n,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,g=[],r=e.CFF.readIndex(n,r,g);var p=[];for(u=0;u<g.length-1;u++)p.push(a.readBytes(n,r+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(n,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var S=e.CFF.readDict(n,r+m[u],r+m[u+1]);e.CFF._readFDict(n,S,_),d.FDArray.push(S)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var v=n[r];if(r++,v!=3)throw v;var x=a.readUshort(n,r);for(r+=2,u=0;u<x+1;u++)d.FDSelect.push(a.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(n,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(n,r,o){var a=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var h=0;h<l.length-1;h++)o.Subrs.push(a.readBytes(n,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,o){e._bin;var a=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)a.push(n[r+u]);return a},e.CFF.readCharset=function(n,r,o){var a=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<o;u++){var h=a.readUshort(n,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){h=a.readUshort(n,r),r+=2;var f=0;for(c==1?(f=n[r],r++):(f=a.readUshort(n,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,r,o){var a=e._bin,l=a.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)o.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)o.push(a.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&a.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,o){var a=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=a.readShort(n,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=a.readInt(n,r+1)/65535,u=5),o.val=f??"o"+h,o.size=u},e.CFF.readCharString=function(n,r,o){for(var a=r+o,l=e._bin,c=[];r<a;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(n,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,r+1)/65535,f=5),c.push(g??"o"+d),r+=f}return c},e.CFF.readDict=function(n,r,o){for(var a=e._bin,l={},c=[];r<o;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;if(u==28&&(g=a.readShort(n,r+1),f=3),u==29&&(g=a.readInt(n,r+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=a.readInt(n,r+1)/65535,f=5,"unknown number";if(u==30){var _=[];for(f=1;;){var p=n[r+f];f++;var m=p>>4,S=15&p;if(m!=15&&_.push(m),S!=15&&_.push(S),S==15)break}for(var v="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],E=0;E<_.length;E++)v+=x[_[E]];g=parseFloat(v)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),r+=f}return l},e.cmap={},e.cmap.parse=function(n,r,o){n=new Uint8Array(n.buffer,r,o),r=0;var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=a.readUshort(n,r);r+=2;var d=a.readUshort(n,r);r+=2;var g=a.readUint(n,r);r+=4;var _="p"+f+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var S=a.readUshort(n,g);S==0?m=e.cmap.parse0(n,g):S==4?m=e.cmap.parse4(n,g):S==6?m=e.cmap.parse6(n,g):S==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+S,f,d,g),l.tables.push(m)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=p}return l},e.cmap.parse0=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(n[r+c]);return a},e.cmap.parse4=function(n,r){var o=e._bin,a=r,l={};l.format=o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;var h=u/2;l.searchRange=o.readUshort(n,r),r+=2,l.entrySelector=o.readUshort(n,r),r+=2,l.rangeShift=o.readUshort(n,r),r+=2,l.endCount=o.readUshorts(n,r,h),r+=2*h,r+=2,l.startCount=o.readUshorts(n,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(o.readShort(n,r)),r+=2;for(l.idRangeOffset=o.readUshorts(n,r,h),r+=2*h,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,a.firstCode=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(n,r)),r+=2;return a},e.cmap.parse12=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,r+=2,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4;var l=o.readUint(n,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=o.readUint(n,u+0),f=o.readUint(n,u+4),d=o.readUint(n,u+8);a.groups.push([h,f,d])}return a},e.glyf={},e.glyf.parse=function(n,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var o=e._bin,a=n._data,l=e._tabOffset(a,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,l)),l+=2;var h=o.readUshort(a,l);if(l+=2,a.length-l<h)return null;c.instructions=o.readBytes(a,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=a[l];if(l++,c.flags.push(d),(8&d)!=0){var g=a[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?a[l]:-a[l]),l++):m?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?a[l]:-a[l]),l++):m?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var S=0,v=0;for(u=0;u<f;u++)S+=c.xs[u],v+=c.ys[u],c.xs[u]=S,c.ys[u]=v}else{var x;c.parts=[];do{x=o.readUshort(a,l),l+=2;var E={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(E),E.glyphIndex=o.readUshort(a,l),l+=2,1&x){var A=o.readShort(a,l);l+=2;var b=o.readShort(a,l);l+=2}else A=o.readInt8(a,l),l++,b=o.readInt8(a,l),l++;2&x?(E.m.tx=A,E.m.ty=b):(E.p1=A,E.p2=b),8&x?(E.m.a=E.m.d=o.readF2dot14(a,l),l+=2):64&x?(E.m.a=o.readF2dot14(a,l),l+=2,E.m.d=o.readF2dot14(a,l),l+=2):128&x&&(E.m.a=o.readF2dot14(a,l),l+=2,E.m.b=o.readF2dot14(a,l),l+=2,E.m.c=o.readF2dot14(a,l),l+=2,E.m.d=o.readF2dot14(a,l),l+=2)}while(32&x);if(256&x){var F=o.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<F;u++)c.instr.push(a[l]),l++}}return c},e.GPOS={},e.GPOS.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GPOS.subt)},e.GPOS.subt=function(n,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(n,o);o+=2;var d=e._lctf.numOfOnes(f);f!=0&&(u.pos=e.GPOS.readValueRecord(n,o,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,o),o+=2;var g=l.readUshort(n,o);o+=2,d=e._lctf.numOfOnes(f);var _=e._lctf.numOfOnes(g);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,o);o+=2;for(var m=0;m<p;m++){var S=c+l.readUshort(n,o);o+=2;var v=l.readUshort(n,S);S+=2;for(var x=[],E=0;E<v;E++){var A=l.readUshort(n,S);S+=2,f!=0&&(U=e.GPOS.readValueRecord(n,S,f),S+=2*d),g!=0&&(P=e.GPOS.readValueRecord(n,S,g),S+=2*_),x.push({gid2:A,val1:U,val2:P})}u.pairsets.push(x)}}if(u.fmt==2){var b=l.readUshort(n,o);o+=2;var F=l.readUshort(n,o);o+=2;var T=l.readUshort(n,o);o+=2;var y=l.readUshort(n,o);for(o+=2,u.classDef1=e._lctf.readClassDef(n,c+b),u.classDef2=e._lctf.readClassDef(n,c+F),u.matrix=[],m=0;m<T;m++){var G=[];for(E=0;E<y;E++){var U=null,P=null;f!=0&&(U=e.GPOS.readValueRecord(n,o,f),o+=2*d),g!=0&&(P=e.GPOS.readValueRecord(n,o,g),o+=2*_),G.push({val1:U,val2:P})}u.matrix.push(G)}}}else{if(r==9&&u.fmt==1){var I=l.readUshort(n,o);o+=2;var B=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=I;else if(a.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(n,a.ltype,c+B)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(n,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(n,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(n,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(n,r):0),r+=8&o?2:0,l},e.GSUB={},e.GSUB.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GSUB.subt)},e.GSUB.subt=function(n,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,r!=1&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,o),o+=2;else if(u.fmt==2){var f=l.readUshort(n,o);o+=2,u.newg=l.readUshorts(n,o,f),o+=2*u.newg.length}}else if(r==4){u.vals=[],f=l.readUshort(n,o),o+=2;for(var d=0;d<f;d++){var g=l.readUshort(n,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+g))}}else if(r==5&&u.fmt==2){if(u.fmt==2){var _=l.readUshort(n,o);o+=2,u.cDef=e._lctf.readClassDef(n,c+_),u.scset=[];var p=l.readUshort(n,o);for(o+=2,d=0;d<p;d++){var m=l.readUshort(n,o);o+=2,u.scset.push(m==0?null:e.GSUB.readSubClassSet(n,c+m))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,o),o+=2;for(var S=[],v=0;v<f;v++)S.push(e._lctf.readCoverage(n,c+l.readUshort(n,o+2*v)));o+=2*f,d==0&&(u.backCvg=S),d==1&&(u.inptCvg=S),d==2&&(u.ahedCvg=S)}f=l.readUshort(n,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,o,f)}}else{if(r==7&&u.fmt==1){var x=l.readUshort(n,o);o+=2;var E=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=x;else if(a.ltype!=x)throw"invalid extension substitution";return e.GSUB.subt(n,a.ltype,c+E)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var o=e._bin.readUshort,a=r,l=[],c=o(n,r);r+=2;for(var u=0;u<c;u++){var h=o(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,a+h))}return l},e.GSUB.readSubClassRule=function(n,r){var o=e._bin.readUshort,a={},l=o(n,r),c=o(n,r+=2);r+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(o(n,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),a},e.GSUB.readSubstLookupRecords=function(n,r,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(n,r),a(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,a+h))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(n,r);r+=2,c==1&&u--,a[l[c]]=o.readUshorts(n,r,u),r+=2*a[l[c]].length}return u=o.readUshort(n,r),r+=2,a.subst=o.readUshorts(n,r,2*u),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,a+h))}return l},e.GSUB.readLigature=function(n,r){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(n,r)),r+=2;return a},e.head={},e.head.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.fontRevision=a.readFixed(n,r),r+=4,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4,l.flags=a.readUshort(n,r),r+=2,l.unitsPerEm=a.readUshort(n,r),r+=2,l.created=a.readUint64(n,r),r+=8,l.modified=a.readUint64(n,r),r+=8,l.xMin=a.readShort(n,r),r+=2,l.yMin=a.readShort(n,r),r+=2,l.xMax=a.readShort(n,r),r+=2,l.yMax=a.readShort(n,r),r+=2,l.macStyle=a.readUshort(n,r),r+=2,l.lowestRecPPEM=a.readUshort(n,r),r+=2,l.fontDirectionHint=a.readShort(n,r),r+=2,l.indexToLocFormat=a.readShort(n,r),r+=2,l.glyphDataFormat=a.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.ascender=a.readShort(n,r),r+=2,l.descender=a.readShort(n,r),r+=2,l.lineGap=a.readShort(n,r),r+=2,l.advanceWidthMax=a.readUshort(n,r),r+=2,l.minLeftSideBearing=a.readShort(n,r),r+=2,l.minRightSideBearing=a.readShort(n,r),r+=2,l.xMaxExtent=a.readShort(n,r),r+=2,l.caretSlopeRise=a.readShort(n,r),r+=2,l.caretSlopeRun=a.readShort(n,r),r+=2,l.caretOffset=a.readShort(n,r),r+=2,r+=8,l.metricDataFormat=a.readShort(n,r),r+=2,l.numberOfHMetrics=a.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<a.maxp.numGlyphs;f++)f<a.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,h=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,r,o,a){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,o,a);var u=l.readUshort(n,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,o=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(n,r,h)}return h},e.kern.parseV1=function(n,r,o,a){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,r),r+=4;var f=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,o){var a=e._bin,l=-1,c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2;var f=a.readUshort(n,r);r+=2;var d=a.readShort(n,r);r+=2,h!=l&&(o.glyph1.push(h),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return r},e.loca={},e.loca.parse=function(n,r,o,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,h=a.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,o){var a=e._bin,l={},c=a.readUint(n,r);return r+=4,l.numGlyphs=a.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(n,r),r+=2,l.maxContours=a.readUshort(n,r),r+=2,l.maxCompositePoints=a.readUshort(n,r),r+=2,l.maxCompositeContours=a.readUshort(n,r),r+=2,l.maxZones=a.readUshort(n,r),r+=2,l.maxTwilightPoints=a.readUshort(n,r),r+=2,l.maxStorage=a.readUshort(n,r),r+=2,l.maxFunctionDefs=a.readUshort(n,r),r+=2,l.maxInstructionDefs=a.readUshort(n,r),r+=2,l.maxStackElements=a.readUshort(n,r),r+=2,l.maxSizeOfInstructions=a.readUshort(n,r),r+=2,l.maxComponentElements=a.readUshort(n,r),r+=2,l.maxComponentDepth=a.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,o){var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var g=a.readUshort(n,r);r+=2;var _=a.readUshort(n,r);r+=2;var p=a.readUshort(n,r);r+=2;var m=a.readUshort(n,r);r+=2;var S=a.readUshort(n,r);r+=2;var v=a.readUshort(n,r);r+=2;var x,E=h[m],A=f+12*c+v;if(g==0)x=a.readUnicode(n,A,S/2);else if(g==3&&_==0)x=a.readUnicode(n,A,S/2);else if(_==0)x=a.readASCII(n,A,S);else if(_==1)x=a.readUnicode(n,A,S/2);else if(_==3)x=a.readUnicode(n,A,S/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;x=a.readASCII(n,A,S),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var b="p"+g+","+p.toString(16);l[b]==null&&(l[b]={}),l[b][E!==void 0?E:m]=x,l[b]._lang=p}for(var F in l)if(l[F].postScriptName!=null&&l[F]._lang==1033)return l[F];for(var F in l)if(l[F].postScriptName!=null&&l[F]._lang==0)return l[F];for(var F in l)if(l[F].postScriptName!=null&&l[F]._lang==3084)return l[F];for(var F in l)if(l[F].postScriptName!=null)return l[F];for(var F in l){u=F;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,o){var a=e._bin.readUshort(n,r);r+=2;var l={};if(a==0)e["OS/2"].version0(n,r,l);else if(a==1)e["OS/2"].version1(n,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(n,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(n,r),r+=2,o.usWeightClass=a.readUshort(n,r),r+=2,o.usWidthClass=a.readUshort(n,r),r+=2,o.fsType=a.readUshort(n,r),r+=2,o.ySubscriptXSize=a.readShort(n,r),r+=2,o.ySubscriptYSize=a.readShort(n,r),r+=2,o.ySubscriptXOffset=a.readShort(n,r),r+=2,o.ySubscriptYOffset=a.readShort(n,r),r+=2,o.ySuperscriptXSize=a.readShort(n,r),r+=2,o.ySuperscriptYSize=a.readShort(n,r),r+=2,o.ySuperscriptXOffset=a.readShort(n,r),r+=2,o.ySuperscriptYOffset=a.readShort(n,r),r+=2,o.yStrikeoutSize=a.readShort(n,r),r+=2,o.yStrikeoutPosition=a.readShort(n,r),r+=2,o.sFamilyClass=a.readShort(n,r),r+=2,o.panose=a.readBytes(n,r,10),r+=10,o.ulUnicodeRange1=a.readUint(n,r),r+=4,o.ulUnicodeRange2=a.readUint(n,r),r+=4,o.ulUnicodeRange3=a.readUint(n,r),r+=4,o.ulUnicodeRange4=a.readUint(n,r),r+=4,o.achVendID=[a.readInt8(n,r),a.readInt8(n,r+1),a.readInt8(n,r+2),a.readInt8(n,r+3)],r+=4,o.fsSelection=a.readUshort(n,r),r+=2,o.usFirstCharIndex=a.readUshort(n,r),r+=2,o.usLastCharIndex=a.readUshort(n,r),r+=2,o.sTypoAscender=a.readShort(n,r),r+=2,o.sTypoDescender=a.readShort(n,r),r+=2,o.sTypoLineGap=a.readShort(n,r),r+=2,o.usWinAscent=a.readUshort(n,r),r+=2,o.usWinDescent=a.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,o){var a=e._bin;return r=e["OS/2"].version0(n,r,o),o.ulCodePageRange1=a.readUint(n,r),r+=4,o.ulCodePageRange2=a.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,o){var a=e._bin;return r=e["OS/2"].version1(n,r,o),o.sxHeight=a.readShort(n,r),r+=2,o.sCapHeight=a.readShort(n,r),r+=2,o.usDefault=a.readUshort(n,r),r+=2,o.usBreak=a.readUshort(n,r),r+=2,o.usMaxContext=a.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,o){var a=e._bin;return r=e["OS/2"].version2(n,r,o),o.usLowerOpticalPointSize=a.readUshort(n,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,o){var a=e._bin,l={};return l.version=a.readFixed(n,r),r+=4,l.italicAngle=a.readFixed(n,r),r+=4,l.underlinePosition=a.readShort(n,r),r+=2,l.underlineThickness=a.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var o=n.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var a=n.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),n.SVG.entries[r]=a),a)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,o)}else n.glyf&&e.U._drawGlyf(r,n,o);return o},e.U._drawGlyf=function(n,r,o){var a=r.glyf[n];a==null&&(a=r.glyf[n]=e.glyf._parseGlyf(r,n)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,r,o))},e.U._simpleGlyph=function(n,r){for(var o=0;o<n.noc;o++){for(var a=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=a;c<=l;c++){var u=c==a?l:c-1,h=c==l?a:c+1,f=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[h],_=n.xs[c],p=n.ys[c];if(c==a)if(f){if(!d){e.U.P.moveTo(r,_,p);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+_)/2,(n.ys[u]+p)/2);f?d&&e.U.P.lineTo(r,_,p):g?e.U.P.qcurveTo(r,_,p,n.xs[h],n.ys[h]):e.U.P.qcurveTo(r,_,p,(_+n.xs[h])/2,(p+n.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,o){for(var a=0;a<n.parts.length;a++){var l={cmds:[],crds:[]},c=n.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];o.crds.push(f*u.a+d*u.b+u.tx),o.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)o.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,r){var o=e._lctf.getInterval(r,n);return o==-1?0:r[o+2]},e.U.getPairAdjustment=function(n,r,o){var a=!1;if(n.GPOS)for(var l=n.GPOS,c=l.lookupList,u=l.featureList,h=[],f=0;f<u.length;f++){var d=u[f];if(d.tag=="kern"){a=!0;for(var g=0;g<d.tab.length;g++)if(!h[d.tab[g]]){h[d.tab[g]]=!0;for(var _=c[d.tab[g]],p=0;p<_.tabs.length;p++)if(_.tabs[p]!=null){var m,S=_.tabs[p];if((!S.coverage||(m=e._lctf.coverageIndex(S.coverage,r))!=-1)&&_.ltype!=1){if(_.ltype==2){var v=null;if(S.fmt==1){var x=S.pairsets[m];for(f=0;f<x.length;f++)x[f].gid2==o&&(v=x[f])}else if(S.fmt==2){var E=e.U._getGlyphClass(r,S.classDef1),A=e.U._getGlyphClass(o,S.classDef2);v=S.matrix[E][A]}if(v){var b=0;return v.val1&&v.val1[2]&&(b+=v.val1[2]),v.val2&&v.val2[0]&&(b+=v.val2[0]),b}}}}}}}if(n.kern&&!a){var F=n.kern.glyph1.indexOf(r);if(F!=-1){var T=n.kern.rval[F].glyph2.indexOf(o);if(T!=-1)return n.kern.rval[F].vals[T]}}return 0},e.U._applySubs=function(n,r,o,a){for(var l=n.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,h=o.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[r]))!=-1){if(o.ltype==1)n[r],h.fmt==1?n[r]=n[r]+h.delta:n[r]=h.newg[u];else if(o.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],_=g.chain.length;if(!(_>l)){for(var p=!0,m=0,S=0;S<_;S++){for(;n[r+m+(1+S)]==-1;)m++;g.chain[S]!=n[r+m+(1+S)]&&(p=!1)}if(p){for(n[r]=g.nglyph,S=0;S<_+m;S++)n[r+S+1]=-1;break}}}else if(o.ltype==5&&h.fmt==2)for(var v=e._lctf.getInterval(h.cDef,n[r]),x=h.cDef[v+2],E=h.scset[x],A=0;A<E.length;A++){var b=E[A],F=b.input;if(!(F.length>l)){for(p=!0,S=0;S<F.length;S++){var T=e._lctf.getInterval(h.cDef,n[r+1+S]);if(v==-1&&h.cDef[T+2]!=F[S]){p=!1;break}}if(p){var y=b.substLookupRecords;for(d=0;d<y.length;d+=2)y[d],y[d+1]}}}else if(o.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,r)||!e.U._glsCovered(n,h.ahedCvg,r+h.inptCvg.length))continue;var G=h.lookupRec;for(A=0;A<G.length;A+=2){v=G[A];var U=a[G[A+1]];e.U._applySubs(n,r+v,U,a)}}}}},e.U._glsCovered=function(n,r,o){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],n[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)a.crds.push(f.crds[d]+l),a.crds.push(f.crds[d+1]);for(o&&a.cmds.push(o),d=0;d<f.cmds.length;d++)a.cmds.push(f.cmds[d]);o&&a.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return a},e.U.P={},e.U.P.moveTo=function(n,r,o){n.cmds.push("M"),n.crds.push(r,o)},e.U.P.lineTo=function(n,r,o){n.cmds.push("L"),n.crds.push(r,o)},e.U.P.curveTo=function(n,r,o,a,l,c,u){n.cmds.push("C"),n.crds.push(r,o,a,l,c,u)},e.U.P.qcurveTo=function(n,r,o,a,l){n.cmds.push("Q"),n.crds.push(r,o,a,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,o,a,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,g=0,_=r.x,p=r.y,m=0,S=0,v=0,x=0,E=0,A=0,b=0,F=0,T=0,y=0,G={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,G);var U=G.val;if(g+=G.size,U=="o1"||U=="o18")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o4")c.length>1&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o5")for(;c.length>0;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);else if(U=="o6"||U=="o7")for(var P=c.length,I=U=="o6",B=0;B<P;B++){var X=c.shift();I?_+=X:p+=X,I=!I,e.U.P.lineTo(l,_,p)}else if(U=="o8"||U=="o24"){P=c.length;for(var H=0;H+6<=P;)m=_+c.shift(),S=p+c.shift(),v=m+c.shift(),x=S+c.shift(),_=v+c.shift(),p=x+c.shift(),e.U.P.curveTo(l,m,S,v,x,_,p),H+=6;U=="o24"&&(_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(S=p,v=(m=_+c.shift())+c.shift(),y=x=S+c.shift(),A=x,F=p,_=(b=(E=(T=v+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,v,x,T,y),e.U.P.curveTo(l,E,A,b,F,_,p)),U=="o1235"&&(m=_+c.shift(),S=p+c.shift(),v=m+c.shift(),x=S+c.shift(),T=v+c.shift(),y=x+c.shift(),E=T+c.shift(),A=y+c.shift(),b=E+c.shift(),F=A+c.shift(),_=b+c.shift(),p=F+c.shift(),c.shift(),e.U.P.curveTo(l,m,S,v,x,T,y),e.U.P.curveTo(l,E,A,b,F,_,p)),U=="o1236"&&(m=_+c.shift(),S=p+c.shift(),v=m+c.shift(),y=x=S+c.shift(),A=x,b=(E=(T=v+c.shift())+c.shift())+c.shift(),F=A+c.shift(),_=b+c.shift(),e.U.P.curveTo(l,m,S,v,x,T,y),e.U.P.curveTo(l,E,A,b,F,_,p)),U=="o1237"&&(m=_+c.shift(),S=p+c.shift(),v=m+c.shift(),x=S+c.shift(),T=v+c.shift(),y=x+c.shift(),E=T+c.shift(),A=y+c.shift(),b=E+c.shift(),F=A+c.shift(),Math.abs(b-_)>Math.abs(F-p)?_=b+c.shift():p=F+c.shift(),e.U.P.curveTo(l,m,S,v,x,T,y),e.U.P.curveTo(l,E,A,b,F,_,p));else if(U=="o14"){if(c.length>0&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),c.length==4){var q=c.shift(),V=c.shift(),k=c.shift(),w=c.shift(),D=e.CFF.glyphBySE(o,k),K=e.CFF.glyphBySE(o,w);e.U._drawCFF(o.CharStrings[D],r,o,a,l),r.x=q,r.y=V,e.U._drawCFF(o.CharStrings[K],r,o,a,l)}d&&(e.U.P.closePath(l),d=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(U=="o21")c.length>2&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),p+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o22")c.length>1&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o25"){for(;c.length>6;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);m=_+c.shift(),S=p+c.shift(),v=m+c.shift(),x=S+c.shift(),_=v+c.shift(),p=x+c.shift(),e.U.P.curveTo(l,m,S,v,x,_,p)}else if(U=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)m=_,S=p+c.shift(),_=v=m+c.shift(),p=(x=S+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,v,x,_,p);else if(U=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)S=p,v=(m=_+c.shift())+c.shift(),x=S+c.shift(),_=v+c.shift(),p=x,e.U.P.curveTo(l,m,S,v,x,_,p);else if(U=="o10"||U=="o29"){var Y=U=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var j=c.pop(),le=Y.Subrs[j+Y.Bias];r.x=_,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF(le,r,o,a,l),_=r.x,p=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(U=="o30"||U=="o31"){var Q=c.length,ie=(H=0,U=="o31");for(H+=Q-(P=-3&Q);H<P;)ie?(S=p,v=(m=_+c.shift())+c.shift(),p=(x=S+c.shift())+c.shift(),P-H==5?(_=v+c.shift(),H++):_=v,ie=!1):(m=_,S=p+c.shift(),v=m+c.shift(),x=S+c.shift(),_=v+c.shift(),P-H==5?(p=x+c.shift(),H++):p=x,ie=!0),e.U.P.curveTo(l,m,S,v,x,_,p),H+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,n),U;c.push(U)}}}r.x=_,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function J_(){return function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(U,P){for(var I=new t(31),B=0;B<31;++B)I[B]=P+=1<<U[B-1];var X=new i(I[30]);for(B=1;B<30;++B)for(var H=I[B];H<I[B+1];++H)X[H]=H-I[B]<<5|B;return[I,X]},l=a(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=a(r,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(U,P,I){for(var B=U.length,X=0,H=new t(P);X<B;++X)++H[U[X]-1];var q,V=new t(P);for(X=0;X<P;++X)V[X]=V[X-1]+H[X-1]<<1;if(I){q=new t(1<<P);var k=15-P;for(X=0;X<B;++X)if(U[X])for(var w=X<<4|U[X],D=P-U[X],K=V[U[X]-1]++<<D,Y=K|(1<<D)-1;K<=Y;++K)q[f[K]>>>k]=w}else for(q=new t(B),X=0;X<B;++X)U[X]&&(q[X]=f[V[U[X]-1]++]>>>15-U[X]);return q},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var S=_(p,9,1),v=_(m,5,1),x=function(U){for(var P=U[0],I=1;I<U.length;++I)U[I]>P&&(P=U[I]);return P},E=function(U,P,I){var B=P/8|0;return(U[B]|U[B+1]<<8)>>(7&P)&I},A=function(U,P){var I=P/8|0;return(U[I]|U[I+1]<<8|U[I+2]<<16)>>(7&P)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],F=function(U,P,I){var B=new Error(P||b[U]);if(B.code=U,Error.captureStackTrace&&Error.captureStackTrace(B,F),!I)throw B;return B},T=function(U,P,I){var B=U.length;if(!B||I&&!I.l&&B<5)return P||new e(0);var X=!P||I,H=!I||I.i;I||(I={}),P||(P=new e(3*B));var q,V=function(ue){var Ee=P.length;if(ue>Ee){var De=new e(Math.max(2*Ee,ue));De.set(P),P=De}},k=I.f||0,w=I.p||0,D=I.b||0,K=I.l,Y=I.d,j=I.m,le=I.n,Q=8*B;do{if(!K){I.f=k=E(U,w,1);var ie=E(U,w+1,3);if(w+=3,!ie){var Te=U[(Me=((q=w)/8|0)+(7&q&&1)+4)-4]|U[Me-3]<<8,Ue=Me+Te;if(Ue>B){H&&F(0);break}X&&V(D+Te),P.set(U.subarray(Me,Ue),D),I.b=D+=Te,I.p=w=8*Ue;continue}if(ie==1)K=S,Y=v,j=9,le=5;else if(ie==2){var pe=E(U,w,31)+257,C=E(U,w+10,15)+4,ve=pe+E(U,w+5,31)+1;w+=14;for(var $=new e(ve),ce=new e(19),oe=0;oe<C;++oe)ce[o[oe]]=E(U,w+3*oe,7);w+=3*C;var Ce=x(ce),ae=(1<<Ce)-1,me=_(ce,Ce,1);for(oe=0;oe<ve;){var Me,re=me[E(U,w,ae)];if(w+=15&re,(Me=re>>>4)<16)$[oe++]=Me;else{var Pe=0,R=0;for(Me==16?(R=3+E(U,w,3),w+=2,Pe=$[oe-1]):Me==17?(R=3+E(U,w,7),w+=3):Me==18&&(R=11+E(U,w,127),w+=7);R--;)$[oe++]=Pe}}var M=$.subarray(0,pe),z=$.subarray(pe);j=x(M),le=x(z),K=_(M,j,1),Y=_(z,le,1)}else F(1);if(w>Q){H&&F(0);break}}X&&V(D+131072);for(var Se=(1<<j)-1,ee=(1<<le)-1,he=w;;he=w){var be=(Pe=K[A(U,w)&Se])>>>4;if((w+=15&Pe)>Q){H&&F(0);break}if(Pe||F(2),be<256)P[D++]=be;else{if(be==256){he=w,K=null;break}var _e=be-254;if(be>264){var Z=n[oe=be-257];_e=E(U,w,(1<<Z)-1)+c[oe],w+=Z}var N=Y[A(U,w)&ee],se=N>>>4;if(N||F(3),w+=15&N,z=h[se],se>3&&(Z=r[se],z+=A(U,w)&(1<<Z)-1,w+=Z),w>Q){H&&F(0);break}X&&V(D+131072);for(var xe=D+_e;D<xe;D+=4)P[D]=P[D-z],P[D+1]=P[D+1-z],P[D+2]=P[D+2-z],P[D+3]=P[D+3-z];D=xe}}I.l=K,I.p=he,I.b=D,K&&(k=1,I.m=j,I.d=Y,I.n=le)}while(!k);return D==P.length?P:function(ue,Ee,De){(Ee==null||Ee<0)&&(Ee=0),(De==null||De>ue.length)&&(De=ue.length);var ke=new(ue instanceof t?t:ue instanceof i?i:e)(De-Ee);return ke.set(ue.subarray(Ee,De)),ke}(P,0,D)},y=new e(0),G=typeof TextDecoder<"u"&&new TextDecoder;try{G.decode(y,{stream:!0})}catch{}return s.convert_streams=function(U){var P=new DataView(U),I=0;function B(){var pe=P.getUint16(I);return I+=2,pe}function X(){var pe=P.getUint32(I);return I+=4,pe}function H(pe){Te.setUint16(Ue,pe),Ue+=2}function q(pe){Te.setUint32(Ue,pe),Ue+=4}for(var V={signature:X(),flavor:X(),length:X(),numTables:B(),reserved:B(),totalSfntSize:X(),majorVersion:B(),minorVersion:B(),metaOffset:X(),metaLength:X(),metaOrigLength:X(),privOffset:X(),privLength:X()},k=0;Math.pow(2,k)<=V.numTables;)k++;k--;for(var w=16*Math.pow(2,k),D=16*V.numTables-w,K=12,Y=[],j=0;j<V.numTables;j++)Y.push({tag:X(),offset:X(),compLength:X(),origLength:X(),origChecksum:X()}),K+=16;var le,Q=new Uint8Array(12+16*Y.length+Y.reduce(function(pe,C){return pe+C.origLength+4},0)),ie=Q.buffer,Te=new DataView(ie),Ue=0;return q(V.flavor),H(V.numTables),H(w),H(k),H(D),Y.forEach(function(pe){q(pe.tag),q(pe.origChecksum),q(K),q(pe.origLength),pe.outOffset=K,(K+=pe.origLength)%4!=0&&(K+=4-K%4)}),Y.forEach(function(pe){var C,ve=U.slice(pe.offset,pe.offset+pe.compLength);if(pe.compLength!=pe.origLength){var $=new Uint8Array(pe.origLength);C=new Uint8Array(ve,2),T(C,$)}else $=new Uint8Array(ve);Q.set($,pe.outOffset);var ce=0;(K=pe.outOffset+pe.origLength)%4!=0&&(ce=4-K%4),Q.set(new Uint8Array(ce).buffer,pe.outOffset+pe.origLength),le=K+ce}),ie.slice(0,le)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function Q_(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,o=4,a=8,l=16,c=32;let u;function h(E){if(!u){const A={R:r,L:n,D:o,C:l,U:c,T:a};u=new Map;for(let b in i){let F=0;i[b].split(",").forEach(T=>{let[y,G]=T.split("+");y=parseInt(y,36),G=G?parseInt(G,36):0,u.set(F+=y,A[b]);for(let U=G;U--;)u.set(++F,A[b])})}}return u.get(E)||c}const f=1,d=2,g=3,_=4,p=[null,"isol","init","fina","medi"];function m(E){const A=new Uint8Array(E.length);let b=c,F=f,T=-1;for(let y=0;y<E.length;y++){const G=E.codePointAt(y);let U=h(G)|0,P=f;U&a||(b&(n|o|l)?U&(r|o|l)?(P=g,(F===f||F===g)&&A[T]++):U&(n|c)&&(F===d||F===_)&&A[T]--:b&(r|c)&&(F===d||F===_)&&A[T]--,F=A[y]=P,b=U,T=y,G>65535&&y++)}return A}function S(E,A){const b=[];for(let T=0;T<A.length;T++){const y=A.codePointAt(T);y>65535&&T++,b.push(s.U.codeToGlyph(E,y))}const F=E.GSUB;if(F){const{lookupList:T,featureList:y}=F;let G;const U=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,P=[];y.forEach(I=>{if(U.test(I.tag))for(let B=0;B<I.tab.length;B++){if(P[I.tab[B]])continue;P[I.tab[B]]=!0;const X=T[I.tab[B]],H=/^(isol|init|fina|medi)$/.test(I.tag);H&&!G&&(G=m(A));for(let q=0;q<b.length;q++)(!G||!H||p[G[q]]===I.tag)&&s.U._applySubs(b,q,X,T)}})}return b}function v(...E){for(let A=0;A<E.length;A++)if(typeof E[A]=="number")return E[A]}function x(E){const A=Object.create(null),b=E["OS/2"],F=E.hhea,T=E.head.unitsPerEm,y=v(b&&b.sTypoAscender,F&&F.ascender,T),G={unitsPerEm:T,ascender:y,descender:v(b&&b.sTypoDescender,F&&F.descender,0),capHeight:v(b&&b.sCapHeight,y),xHeight:v(b&&b.sxHeight,y),lineGap:v(b&&b.sTypoLineGap,F&&F.lineGap),supportsCodePoint(U){return s.U.codeToGlyph(E,U)>0},forEachGlyph(U,P,I,B){let X=0;const H=1/G.unitsPerEm*P,q=S(E,U);let V=0,k=-1;return q.forEach((w,D)=>{if(w!==-1){let K=A[w];if(!K){const{cmds:Y,crds:j}=s.U.glyphToPath(E,w);let le="",Q=0;for(let C=0,ve=Y.length;C<ve;C++){const $=t[Y[C]];le+=Y[C];for(let ce=1;ce<=$;ce++)le+=(ce>1?",":"")+j[Q++]}let ie,Te,Ue,pe;if(j.length){ie=Te=1/0,Ue=pe=-1/0;for(let C=0,ve=j.length;C<ve;C+=2){let $=j[C],ce=j[C+1];$<ie&&(ie=$),ce<Te&&(Te=ce),$>Ue&&(Ue=$),ce>pe&&(pe=ce)}}else ie=Ue=Te=pe=0;K=A[w]={index:w,advanceWidth:E.hmtx.aWidth[w],xMin:ie,yMin:Te,xMax:Ue,yMax:pe,path:le,pathCommandCount:Y.length}}k!==-1&&(X+=s.U.getPairAdjustment(E,k,w)*H),B.call(null,K,X,V),K.advanceWidth&&(X+=K.advanceWidth*H),I&&(X+=I*P),k=w}V+=U.codePointAt(V)>65535?2:1}),X}};return G}return function(A){const b=new Uint8Array(A,0,4),F=s._bin.readASCII(b,0,4);if(F==="wOFF")A=e(A);else if(F==="wOF2")throw new Error("woff2 fonts not supported");return x(s.parse(A)[0])}}const $_=Zi({name:"Typr Font Parser",dependencies:[Z_,J_,Q_],init(s,e,t){const i=s(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.0 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function ev(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(v){var x=v>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&v))},e.prototype.has=function(v){var x=this.buckets.get(v>>5);return x!==void 0&&(x&1<<(31&v))!=0},e.prototype.serialize=function(){var v=[];return this.buckets.forEach(function(x,E){v.push((+E).toString(36)+":"+x.toString(36))}),v.join(",")},e.prototype.deserialize=function(v){var x=this;this.buckets.clear(),v.split(",").forEach(function(E){var A=E.split(":");x.buckets.set(parseInt(A[0],36),parseInt(A[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(v){var x=function(A){return A&n}(v).toString(16),E=function(A){return(A&n)+t-1}(v).toString(16);return"codepoint-index/plane"+(v>>16)+"/"+x+"-"+E+".json"}function o(v,x){var E=v&i,A=x.codePointAt(E/6|0);return((A=(A||48)-48)&1<<E%6)!=0}function a(v,x){var E;(E=v,E.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(A){return A.split("-").map(function(b){return parseInt(b.trim(),16)})})).forEach(function(A){var b=A[0],F=A[1];F===void 0&&(F=b),x(b,F)})}function l(v,x){a(v,function(E,A){for(var b=E;b<=A;b++)x(b)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.0/packages/data";function d(v){var x=h.get(v);return x||(x=new e,l(v.ranges,function(E){return x.add(E)}),h.set(v,x)),x}var g,_=new Map;function p(v,x,E){return v[x]?x:v[E]?E:function(A){for(var b in A)return b}(v)}function m(v,x){var E=x;if(!v.includes(E)){E=1/0;for(var A=0;A<v.length;A++)Math.abs(v[A]-x)<Math.abs(E-x)&&(E=v[A])}return E}function S(v){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(x){g.add(x)})),g.has(v)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(v,x){x===void 0&&(x={});var E=x.lang;E===void 0&&(E="en");var A=x.category;A===void 0&&(A="sans-serif");var b=x.style;b===void 0&&(b="normal");var F=x.weight;F===void 0&&(F=400);var T=(x.dataUrl||f).replace(/\/$/g,""),y=new Map,G=new Uint8Array(v.length),U={},P={},I=new Array(v.length),B=new Map,X=!1;function H(k){var w=_.get(k);return w||(w=fetch(T+"/"+k).then(function(D){if(!D.ok)throw new Error(D.statusText);return D.json().then(function(K){if(!Array.isArray(K)||K[0]!==1)throw new Error("Incorrect schema version; need 1, got "+K[0]);return K[1]})}).catch(function(D){if(T!==f)return X||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+T+'", trying default CDN. '+D.message),X=!0),T=f,_.delete(k),H(k);throw D}),_.set(k,w)),w}for(var q=function(k){var w=v.codePointAt(k),D=r(w);I[k]=D,c[D]||B.has(D)||B.set(D,H(D).then(function(K){c[D]=K})),w>65535&&(k++,V=k)},V=0;V<v.length;V++)q(V);return Promise.all(B.values()).then(function(){B.clear();for(var k=function(D){var K=v.codePointAt(D),Y=null,j=c[I[D]];e:for(var le in j){var Q=P[le];if(Q===void 0&&(Q=P[le]=new RegExp(le).test(E)),Q){for(var ie in j[le])if(o(K,j[le][ie])){Y=ie;break e}}}Y||(console.debug("No font coverage for U+"+K.toString(16)),Y="latin"),I[D]=Y,u[Y]||B.has(Y)||B.set(Y,H("font-meta/"+Y+".json").then(function(Te){u[Y]=Te})),K>65535&&(D++,w=D)},w=0;w<v.length;w++)k(w);return Promise.all(B.values())}).then(function(){for(var k,w=null,D=0;D<v.length;D++){var K=v.codePointAt(D);if(w&&(S(K)||d(w).has(K)))G[D]=G[D-1];else{w=u[I[D]];var Y=U[w.id];if(!Y){var j=w.typeforms,le=p(j,A,"sans-serif"),Q=p(j[le],b,"normal"),ie=m((k=j[le])===null||k===void 0?void 0:k[Q],F);Y=U[w.id]=T+"/font-files/"+w.id+"/"+le+"."+Q+"."+ie+".woff"}var Te=y.get(Y);Te==null&&(Te=y.size,y.set(Y,Te)),G[D]=Te}K>65535&&(D++,G[D]=G[D-1])}return{fontUrls:Array.from(y.keys()),chars:G}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function tv(s,e){const t=Object.create(null),i=Object.create(null);function n(o,a){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=o,a(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(o,a){let l=t[o];l?a(l):i[o]?i[o].push(a):(i[o]=[a],n(o,c=>{c.src=o,t[o]=c,i[o].forEach(u=>u(c)),delete i[o]}))}return function(o,a,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(o.length),g=[];o.length||S();const _=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(x=>!x.lang||x.lang.test(l)).reverse(),c.length){let b=0;(function F(T=0){for(let y=T,G=o.length;y<G;y++){const U=o.codePointAt(y);if(b===1&&g[d[y-1]].supportsCodePoint(U)||/\s/.test(o[y]))d[y]=d[y-1],b===2&&(p[p.length-1][1]=y);else for(let P=d[y],I=c.length;P<=I;P++)if(P===I){const B=b===2?p[p.length-1]:p[p.length]=[y,y];B[1]=y,b=2}else{d[y]=P;const{src:B,unicodeRange:X}=c[P];if(!X||v(U,X)){const H=t[B];if(!H){r(B,()=>{F(y)});return}if(H.supportsCodePoint(U)){let q=_.get(H);typeof q!="number"&&(q=g.length,g.push(H),_.set(H,q)),d[y]=q,b=1;break}}}U>65535&&y+1<G&&(d[y+1]=d[y],y++,b===2&&(p[p.length-1][1]=y))}m()})()}else p.push([0,o.length-1]),m();function m(){if(p.length){const x=p.map(E=>o.substring(E[0],E[1]+1)).join(`
`);e.getFontsForString(x,{lang:l,style:u,weight:h,dataUrl:f}).then(({fontUrls:E,chars:A})=>{const b=g.length;let F=0;p.forEach(y=>{for(let G=0,U=y[1]-y[0];G<=U;G++)d[y[0]+G]=A[F++]+b;F++});let T=0;E.forEach((y,G)=>{r(y,U=>{g[G+b]=U,++T===E.length&&S()})})})}else S()}function S(){a({chars:d,fonts:g})}function v(x,E){for(let A=0;A<E.length;A++){const[b,F=b]=E[A];if(b<=x&&x<=F)return!0}return!1}}}const nv=Zi({name:"FontResolver",dependencies:[tv,$_,ev],init(s,e,t){return s(e,t())}});function iv(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:_,fonts:p,style:m,weight:S,preResolvedFonts:v,unicodeFontsURL:x},E){const A=({chars:b,fonts:F})=>{let T,y;const G=[];for(let U=0;U<b.length;U++)b[U]!==y?(y=b[U],G.push(T={start:U,end:U,fontObj:F[b[U]]})):T.end=U;E(G)};v?A(v):s(g,A,{lang:_,fonts:p,style:m,weight:S,unicodeFontsURL:x})}function a({text:g="",font:_,lang:p="en",sdfGlyphSize:m=64,fontSize:S=400,fontWeight:v=1,fontStyle:x="normal",letterSpacing:E=0,lineHeight:A="normal",maxWidth:b=1/0,direction:F,textAlign:T="left",textIndent:y=0,whiteSpace:G="normal",overflowWrap:U="normal",anchorX:P=0,anchorY:I=0,metricsOnly:B=!1,unicodeFontsURL:X,preResolvedFonts:H=null,includeCaretPositions:q=!1,chunkedBoundsSize:V=8192,colorRanges:k=null},w){const D=h(),K={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),S=+S,E=+E,b=+b,A=A||"normal",y=+y,o({text:g,lang:p,style:x,weight:v,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:X,preResolvedFonts:H},Y=>{K.fontLoad=h()-D;const j=isFinite(b);let le=null,Q=null,ie=null,Te=null,Ue=null,pe=null,C=null,ve=null,$=0,ce=0,oe=G!=="nowrap";const Ce=new Map,ae=h();let me=y,Me=0,re=new f;const Pe=[re];Y.forEach(ee=>{const{fontObj:he}=ee,{ascender:be,descender:_e,unitsPerEm:Z,lineGap:N,capHeight:se,xHeight:xe}=he;let ue=Ce.get(he);if(!ue){const ge=S/Z,J=A==="normal"?(be-_e+N)*ge:A*S,Ae=(J-(be-_e)*ge)/2,ye=Math.min(J,(be-_e)*ge),Ie=(be+_e)/2*ge+ye/2;ue={index:Ce.size,src:he.src,fontObj:he,fontSizeMult:ge,unitsPerEm:Z,ascender:be*ge,descender:_e*ge,capHeight:se*ge,xHeight:xe*ge,lineHeight:J,baseline:-Ae-be*ge,caretTop:(be+_e)/2*ge+ye/2,caretBottom:Ie-ye},Ce.set(he,ue)}const{fontSizeMult:Ee}=ue,De=g.slice(ee.start,ee.end+1);let ke,O;he.forEachGlyph(De,S,E,(ge,J,Ae)=>{J+=Me,Ae+=ee.start,ke=J,O=ge;const ye=g.charAt(Ae),Ie=ge.advanceWidth*Ee,ze=re.count;let Ne;if("isEmpty"in ge||(ge.isWhitespace=!!ye&&new RegExp(n).test(ye),ge.canBreakAfter=!!ye&&r.test(ye),ge.isEmpty=ge.xMin===ge.xMax||ge.yMin===ge.yMax||i.test(ye)),!ge.isWhitespace&&!ge.isEmpty&&ce++,oe&&j&&!ge.isWhitespace&&J+Ie+me>b&&ze){if(re.glyphAt(ze-1).glyphObj.canBreakAfter)Ne=new f,me=-J;else for(let Ve=ze;Ve--;)if(Ve===0&&U==="break-word"){Ne=new f,me=-J;break}else if(re.glyphAt(Ve).glyphObj.canBreakAfter){Ne=re.splitAt(Ve+1);const Qe=Ne.glyphAt(0).x;me-=Qe;for(let Ze=Ne.count;Ze--;)Ne.glyphAt(Ze).x-=Qe;break}Ne&&(re.isSoftWrapped=!0,re=Ne,Pe.push(re),$=b)}let Be=re.glyphAt(re.count);Be.glyphObj=ge,Be.x=J+me,Be.width=Ie,Be.charIndex=Ae,Be.fontData=ue,ye===`
`&&(re=new f,Pe.push(re),me=-(J+Ie+E*S)+y)}),Me=ke+O.advanceWidth*Ee+E*S});let R=0;Pe.forEach(ee=>{let he=!0;for(let be=ee.count;be--;){const _e=ee.glyphAt(be);he&&!_e.glyphObj.isWhitespace&&(ee.width=_e.x+_e.width,ee.width>$&&($=ee.width),he=!1);let{lineHeight:Z,capHeight:N,xHeight:se,baseline:xe}=_e.fontData;Z>ee.lineHeight&&(ee.lineHeight=Z);const ue=xe-ee.baseline;ue<0&&(ee.baseline+=ue,ee.cap+=ue,ee.ex+=ue),ee.cap=Math.max(ee.cap,ee.baseline+N),ee.ex=Math.max(ee.ex,ee.baseline+se)}ee.baseline-=R,ee.cap-=R,ee.ex-=R,R+=ee.lineHeight});let M=0,z=0;if(P&&(typeof P=="number"?M=-P:typeof P=="string"&&(M=-$*(P==="left"?0:P==="center"?.5:P==="right"?1:c(P)))),I&&(typeof I=="number"?z=-I:typeof I=="string"&&(z=I==="top"?0:I==="top-baseline"?-Pe[0].baseline:I==="top-cap"?-Pe[0].cap:I==="top-ex"?-Pe[0].ex:I==="middle"?R/2:I==="bottom"?R:I==="bottom-baseline"?Pe[Pe.length-1].baseline:c(I)*R)),!B){const ee=e.getEmbeddingLevels(g,F);le=new Uint16Array(ce),Q=new Uint8Array(ce),ie=new Float32Array(ce*2),Te={},C=[1/0,1/0,-1/0,-1/0],ve=[],q&&(pe=new Float32Array(g.length*4)),k&&(Ue=new Uint8Array(ce*3));let he=0,be=-1,_e=-1,Z,N;if(Pe.forEach((se,xe)=>{let{count:ue,width:Ee}=se;if(ue>0){let De=0;for(let ye=ue;ye--&&se.glyphAt(ye).glyphObj.isWhitespace;)De++;let ke=0,O=0;if(T==="center")ke=($-Ee)/2;else if(T==="right")ke=$-Ee;else if(T==="justify"&&se.isSoftWrapped){let ye=0;for(let Ie=ue-De;Ie--;)se.glyphAt(Ie).glyphObj.isWhitespace&&ye++;O=($-Ee)/ye}if(O||ke){let ye=0;for(let Ie=0;Ie<ue;Ie++){let ze=se.glyphAt(Ie);const Ne=ze.glyphObj;ze.x+=ke+ye,O!==0&&Ne.isWhitespace&&Ie<ue-De&&(ye+=O,ze.width+=O)}}const ge=e.getReorderSegments(g,ee,se.glyphAt(0).charIndex,se.glyphAt(se.count-1).charIndex);for(let ye=0;ye<ge.length;ye++){const[Ie,ze]=ge[ye];let Ne=1/0,Be=-1/0;for(let Ve=0;Ve<ue;Ve++)if(se.glyphAt(Ve).charIndex>=Ie){let Qe=Ve,Ze=Ve;for(;Ze<ue;Ze++){let lt=se.glyphAt(Ze);if(lt.charIndex>ze)break;Ze<ue-De&&(Ne=Math.min(Ne,lt.x),Be=Math.max(Be,lt.x+lt.width))}for(let lt=Qe;lt<Ze;lt++){const Rt=se.glyphAt(lt);Rt.x=Be-(Rt.x+Rt.width-Ne)}break}}let J;const Ae=ye=>J=ye;for(let ye=0;ye<ue;ye++){const Ie=se.glyphAt(ye);J=Ie.glyphObj;const ze=J.index,Ne=ee.levels[Ie.charIndex]&1;if(Ne){const Be=e.getMirroredCharacter(g[Ie.charIndex]);Be&&Ie.fontData.fontObj.forEachGlyph(Be,0,0,Ae)}if(q){const{charIndex:Be,fontData:Ve}=Ie,Qe=Ie.x+M,Ze=Ie.x+Ie.width+M;pe[Be*4]=Ne?Ze:Qe,pe[Be*4+1]=Ne?Qe:Ze,pe[Be*4+2]=se.baseline+Ve.caretBottom+z,pe[Be*4+3]=se.baseline+Ve.caretTop+z;const lt=Be-be;lt>1&&u(pe,be,lt),be=Be}if(k){const{charIndex:Be}=Ie;for(;Be>_e;)_e++,k.hasOwnProperty(_e)&&(N=k[_e])}if(!J.isWhitespace&&!J.isEmpty){const Be=he++,{fontSizeMult:Ve,src:Qe,index:Ze}=Ie.fontData,lt=Te[Qe]||(Te[Qe]={});lt[ze]||(lt[ze]={path:J.path,pathBounds:[J.xMin,J.yMin,J.xMax,J.yMax]});const Rt=Ie.x+M,cn=se.baseline+z;ie[Be*2]=Rt,ie[Be*2+1]=cn;const Ct=Rt+J.xMin*Ve,jt=cn+J.yMin*Ve,zt=Rt+J.xMax*Ve,Gt=cn+J.yMax*Ve;Ct<C[0]&&(C[0]=Ct),jt<C[1]&&(C[1]=jt),zt>C[2]&&(C[2]=zt),Gt>C[3]&&(C[3]=Gt),Be%V===0&&(Z={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},ve.push(Z)),Z.end++;const mt=Z.rect;if(Ct<mt[0]&&(mt[0]=Ct),jt<mt[1]&&(mt[1]=jt),zt>mt[2]&&(mt[2]=zt),Gt>mt[3]&&(mt[3]=Gt),le[Be]=ze,Q[Be]=Ze,k){const mn=Be*3;Ue[mn]=N>>16&255,Ue[mn+1]=N>>8&255,Ue[mn+2]=N&255}}}}}),pe){const se=g.length-be;se>1&&u(pe,be,se)}}const Se=[];Ce.forEach(({index:ee,src:he,unitsPerEm:be,ascender:_e,descender:Z,lineHeight:N,capHeight:se,xHeight:xe})=>{Se[ee]={src:he,unitsPerEm:be,ascender:_e,descender:Z,lineHeight:N,capHeight:se,xHeight:xe}}),K.typesetting=h()-ae,w({glyphIds:le,glyphFontIndices:Q,glyphPositions:ie,glyphData:Te,fontData:Se,caretPositions:pe,glyphColors:Ue,chunkedBounds:ve,fontSize:S,topBaseline:z+Pe[0].baseline,blockBounds:[M,z-R,M+$,z],visibleBounds:C,timings:K})})}function l(g,_){a({...g,metricsOnly:!0},p=>{const[m,S,v,x]=p.blockBounds;_({width:v-m,height:x-S})})}function c(g){let _=g.match(/^([\d.]+)%$/),p=_?parseFloat(_[1]):NaN;return isNaN(p)?0:p/100}function u(g,_,p){const m=g[_*4],S=g[_*4+1],v=g[_*4+2],x=g[_*4+3],E=(S-m)/p;for(let A=0;A<p;A++){const b=(_+A)*4;g[b]=m+E*A,g[b+1]=m+E*(A+1),g[b+2]=v,g[b+3]=x}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=f.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new f;return _.data=this.data.splice(g*d.length),_}},f.flyweight=d.reduce((g,_,p,m)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+p]},set(S){this.data[this.index*d.length+p]=S}}),g),{data:null,index:0}),{typeset:a,measure:l}}const ei=()=>(self.performance||Date).now(),Ps=hu();let rc;function rv(s,e,t,i,n,r,o,a,l,c,u=!0){return u?av(s,e,t,i,n,r,o,a,l,c).then(null,h=>(rc||(console.warn("WebGL SDF generation failed, falling back to JS",h),rc=!0),ac(s,e,t,i,n,r,o,a,l,c))):ac(s,e,t,i,n,r,o,a,l,c)}const vs=[],sv=5;let za=0;function du(){const s=ei();for(;vs.length&&ei()-s<sv;)vs.shift()();za=vs.length?setTimeout(du,0):0}const av=(...s)=>new Promise((e,t)=>{vs.push(()=>{const i=ei();try{Ps.webgl.generateIntoCanvas(...s),e({timing:ei()-i})}catch(n){t(n)}}),za||(za=setTimeout(du,0))}),ov=4,lv=2e3,sc={};let cv=0;function ac(s,e,t,i,n,r,o,a,l,c){const u="TroikaTextSDFGenerator_JS_"+cv++%ov;let h=sc[u];return h||(h=sc[u]={workerModule:Zi({name:u,workerId:u,dependencies:[hu,ei],init(f,d){const g=f().javascript.generate;return function(..._){const p=d();return{textureData:g(..._),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,i,n,r).then(({textureData:f,timing:d})=>{const g=ei(),_=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)_[p*4+c]=f[p];return Ps.webglUtils.renderImageData(o,_,a,l,s,e,1<<3-c),d+=ei()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{z_(u)},lv)),{timing:d}})}function uv(s){s._warm||(Ps.webgl.isSupported(s),s._warm=!0)}const hv=Ps.webglUtils.resizeWebGLCanvasWithoutClearing,Ii={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},fv=new Ke;function Ci(){return(self.performance||Date).now()}const oc=Object.create(null);function dv(s,e){s=mv({},s);const t=Ci(),{defaultFontURL:i}=Ii,n=[];if(i&&n.push({label:"default",src:lc(i)}),s.font&&n.push({label:"user",src:lc(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Ii.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Ii.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=fv.set(g).getHex()),f[d]=g}s.colorRanges=f}Object.freeze(s);const{textureWidth:r,sdfExponent:o}=Ii,{sdfGlyphSize:a}=s,l=r/a*4;let c=oc[a];if(!c){const f=document.createElement("canvas");f.width=r,f.height=a*256/l,c=oc[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new Dt(f,void 0,void 0,void 0,Ut,Ut),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,pv(c)}const{sdfTexture:u,sdfCanvas:h}=c;_v(s).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:p,fontSize:m,timings:S}=f,v=[],x=new Float32Array(d.length*4);let E=0,A=0;const b=Ci(),F=_.map(P=>{let I=c.glyphsByFont.get(P.src);return I||c.glyphsByFont.set(P.src,I=new Map),I});d.forEach((P,I)=>{const B=g[I],{src:X,unitsPerEm:H}=_[B];let q=F[B].get(P);if(!q){const{path:K,pathBounds:Y}=f.glyphData[X][P],j=Math.max(Y[2]-Y[0],Y[3]-Y[1])/a*(Ii.sdfMargin*a+.5),le=c.glyphCount++,Q=[Y[0]-j,Y[1]-j,Y[2]+j,Y[3]+j];F[B].set(P,q={path:K,atlasIndex:le,sdfViewBox:Q}),v.push(q)}const{sdfViewBox:V}=q,k=p[A++],w=p[A++],D=m/H;x[E++]=k+V[0]*D,x[E++]=w+V[1]*D,x[E++]=k+V[2]*D,x[E++]=w+V[3]*D,d[I]=q.atlasIndex}),S.quads=(S.quads||0)+(Ci()-b);const T=Ci();S.sdf={};const y=h.height,G=Math.ceil(c.glyphCount/l),U=Math.pow(2,Math.ceil(Math.log2(G*a)));U>y&&(console.info(`Increasing SDF texture size ${y}->${U}`),hv(h,r,U),u.dispose()),Promise.all(v.map(P=>pu(P,c,s.gpuAccelerateSDF).then(({timing:I})=>{S.sdf[P.atlasIndex]=I}))).then(()=>{v.length&&!c.contextLost&&(mu(c),u.needsUpdate=!0),S.sdfTotal=Ci()-T,S.total=Ci()-t,e(Object.freeze({parameters:s,sdfTexture:u,sdfGlyphSize:a,sdfExponent:o,glyphBounds:x,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{c.contextLost||uv(h)})}function pu({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=Ii,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(a/i)*i,f=Math.floor(u/(a/i))*i,d=e%4;return rv(i,i,s,t,c,l,n,h,f,d,o)}function pv(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(pu(r,s,!0))})}),Promise.all(i).then(()=>{mu(s),s.sdfTexture.needsUpdate=!0})})}function mv(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let fs;function lc(s){return fs||(fs=typeof document>"u"?{}:document.createElement("a")),fs.href=s,fs.href}function mu(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==i*n*4)&&(o=new Uint8Array(i*n*4),t.image={width:i,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,o)}}const gv=Zi({name:"Typesetter",dependencies:[iv,nv,H_],init(s,e,t){return s(e,t())}}),_v=Zi({name:"Typesetter",dependencies:[gv],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),cc={};function vv(s){let e=cc[s];if(!e){const t=new ji(1,1,s,s),i=t.clone(),n=t.attributes,r=i.attributes,o=new kt,a=n.uv.count;for(let l=0;l<a;l++)r.position.array[l*3]*=-1,r.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{o.setAttribute(l,new It([...n[l].array,...r[l].array],n[l].itemSize))}),o.setIndex([...t.index.array,...i.index.array.map(l=>l+a)]),o.translate(.5,.5,0),e=cc[s]=o}return e}const xv="aTroikaGlyphBounds",uc="aTroikaGlyphIndex",Sv="aTroikaGlyphColor";class yv extends U_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Cr,this.boundingBox=new qi}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===wt?t/2:0,e===sn?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=vv(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){Ma(this,xv,e,4),Ma(this,uc,t,1),Ma(this,Sv,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:o,max:a,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,_=r((d+u)/h)!==r((g+u)/h)?-f:o(l(d)*f,l(g)*f),p=r((d-u)/h)!==r((g-u)/h)?f:a(l(d)*f,l(g)*f),m=r((d+n)/h)!==r((g+n)/h)?f*2:a(f-c(d)*f,f-c(g)*f);i.min.set(_,e[1],t<0?-m:0),i.max.set(p,e[3],t<0?0:m)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(uc).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function Ma(s,e,t,i){const n=s.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(s.setAttribute(e,new qg(t,i)),delete s._maxInstanceCount,s.dispose()):n&&s.deleteAttribute(e)}const Mv=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Ev=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Tv=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,bv=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Av(s){const e=ka(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Re},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ot(0,0,0,0)},uTroikaClipRect:{value:new ot(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Re},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ke},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new je},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Mv,vertexTransform:Ev,fragmentDefs:Tv,fragmentColorTransform:bv,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(fu,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const eo=new Pr({color:16777215,side:sn,transparent:!0}),hc=8421504,fc=new rt,ds=new W,Ea=new W,hr=[],wv=new W,Ta="+x+y";function dc(s){return Array.isArray(s)?s[0]:s}let gu=()=>{const s=new Mt(new ji(1,1),eo);return gu=()=>s,s},_u=()=>{const s=new Mt(new ji(1,1,32,1),eo);return _u=()=>s,s};const Rv={type:"syncstart"},Cv={type:"synccomplete"},vu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Pv=vu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class xu extends Mt{constructor(){const e=new yv;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang="en",this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=hc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Ta,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Rv),dv({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(Cv),e&&e()})))}onBeforeRender(e,t,i,n,r,o){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=An}onAfterRender(e,t,i,n,r,o){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=eo.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Av(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return dc(this.material).getDepthMaterial()}get customDistanceMaterial(){return dc(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:a,blockBounds:l}=n;i.uTroikaSDFTexture.value=a,i.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,g,_=0,p=0;if(t){let{outlineWidth:S,outlineOffsetX:v,outlineOffsetY:x,outlineBlur:E,outlineOpacity:A}=this;c=this._parsePercent(S)||0,u=Math.max(0,this._parsePercent(E)||0),f=A,_=this._parsePercent(v)||0,p=this._parsePercent(x)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??hc),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaDistanceOffset.value=c,i.uTroikaPositionOffset.value.set(_,p),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)i.uTroikaClipRect.value.fromArray(m);else{const S=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-S,l[1]-S,l[2]+S,l[3]+S)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new Ke;(r!==a._input||typeof r=="object")&&a.set(a._input=r)}let o=this.orientation||Ta;if(o!==e._orientation){let a=i.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==Ta&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;ds.set(0,0,0)[u]=c==="-"?1:-1,Ea.set(0,0,0)[f]=h==="-"?-1:1,fc.lookAt(wv,ds.cross(Ea),Ea),a.setFromMatrix4(fc)}else a.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Re){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Re){return ds.copy(e),this.localPositionToTextCoords(this.worldToLocal(ds),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,o=n?_u():gu(),a=o.geometry,{position:l,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const f=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,hr.length=0,o.raycast(e,hr);for(let u=0;u<hr.length;u++)hr[u].object=this,t.push(hr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Pv.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}vu.forEach(s=>{const e="_private_"+s;Object.defineProperty(xu.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});var Hi=Object.freeze({Linear:Object.freeze({None:function(s){return s},In:function(s){return this.None(s)},Out:function(s){return this.None(s)},InOut:function(s){return this.None(s)}}),Quadratic:Object.freeze({In:function(s){return s*s},Out:function(s){return s*(2-s)},InOut:function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)}}),Cubic:Object.freeze({In:function(s){return s*s*s},Out:function(s){return--s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)}}),Quartic:Object.freeze({In:function(s){return s*s*s*s},Out:function(s){return 1- --s*s*s*s},InOut:function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)}}),Quintic:Object.freeze({In:function(s){return s*s*s*s*s},Out:function(s){return--s*s*s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)}}),Sinusoidal:Object.freeze({In:function(s){return 1-Math.sin((1-s)*Math.PI/2)},Out:function(s){return Math.sin(s*Math.PI/2)},InOut:function(s){return .5*(1-Math.sin(Math.PI*(.5-s)))}}),Exponential:Object.freeze({In:function(s){return s===0?0:Math.pow(1024,s-1)},Out:function(s){return s===1?1:1-Math.pow(2,-10*s)},InOut:function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)}}),Circular:Object.freeze({In:function(s){return 1-Math.sqrt(1-s*s)},Out:function(s){return Math.sqrt(1- --s*s)},InOut:function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)}}),Elastic:Object.freeze({In:function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},Out:function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},InOut:function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(s){var e=1.70158;return s===1?1:s*s*((e+1)*s-e)},Out:function(s){var e=1.70158;return s===0?0:--s*s*((e+1)*s+e)+1},InOut:function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)}}),Bounce:Object.freeze({In:function(s){return 1-Hi.Bounce.Out(1-s)},Out:function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},InOut:function(s){return s<.5?Hi.Bounce.In(s*2)*.5:Hi.Bounce.Out(s*2-1)*.5+.5}}),generatePow:function(s){return s===void 0&&(s=4),s=s<Number.EPSILON?Number.EPSILON:s,s=s>1e4?1e4:s,{In:function(e){return Math.pow(e,s)},Out:function(e){return 1-Math.pow(1-e,s)},InOut:function(e){return e<.5?Math.pow(e*2,s)/2:(1-Math.pow(2-e*2,s))/2+.5}}}}),Bi=function(){return performance.now()},Su=function(){function s(){this._tweens={},this._tweensAddedDuringUpdate={}}return s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},s.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},s.prototype.update=function(e,t){e===void 0&&(e=Bi()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var n=0;n<i.length;n++){var r=this._tweens[i[n]],o=!t;r&&r.update(e,o)===!1&&!t&&delete this._tweens[i[n]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},s}(),Kn={Linear:function(s,e){var t=s.length-1,i=t*e,n=Math.floor(i),r=Kn.Utils.Linear;return e<0?r(s[0],s[1],i):e>1?r(s[t],s[t-1],t-i):r(s[n],s[n+1>t?t:n+1],i-n)},Bezier:function(s,e){for(var t=0,i=s.length-1,n=Math.pow,r=Kn.Utils.Bernstein,o=0;o<=i;o++)t+=n(1-e,i-o)*n(e,o)*s[o]*r(i,o);return t},CatmullRom:function(s,e){var t=s.length-1,i=t*e,n=Math.floor(i),r=Kn.Utils.CatmullRom;return s[0]===s[t]?(e<0&&(n=Math.floor(i=t*(1+e))),r(s[(n-1+t)%t],s[n],s[(n+1)%t],s[(n+2)%t],i-n)):e<0?s[0]-(r(s[0],s[0],s[1],s[1],-i)-s[0]):e>1?s[t]-(r(s[t],s[t],s[t-1],s[t-1],i-t)-s[t]):r(s[n?n-1:0],s[n],s[t<n+1?t:n+1],s[t<n+2?t:n+2],i-n)},Utils:{Linear:function(s,e,t){return(e-s)*t+s},Bernstein:function(s,e){var t=Kn.Utils.Factorial;return t(s)/t(e)/t(s-e)},Factorial:function(){var s=[1];return function(e){var t=1;if(s[e])return s[e];for(var i=e;i>1;i--)t*=i;return s[e]=t,t}}(),CatmullRom:function(s,e,t,i,n){var r=(t-s)*.5,o=(i-e)*.5,a=n*n,l=n*a;return(2*e-2*t+r+o)*l+(-3*e+3*t-2*r-o)*a+r*n+e}}},to=function(){function s(){}return s.nextId=function(){return s._nextId++},s._nextId=0,s}(),Ga=new Su,Lv=function(){function s(e,t){t===void 0&&(t=Ga),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Hi.Linear.None,this._interpolationFunction=Kn.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=to.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},s.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},s.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},s.prototype.start=function(e,t){if(e===void 0&&(e=Bi()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var n={};for(var r in this._valuesEnd)n[r]=this._valuesEnd[r];this._valuesEnd=n}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},s.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},s.prototype._setupProperties=function(e,t,i,n,r){for(var o in i){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(u){var h=i[o];if(h.length===0)continue;for(var f=[a],d=0,g=h.length;d<g;d+=1){var _=this._handleRelativeValue(a,h[d]);if(isNaN(_)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(_)}u&&(i[o]=f)}if((c==="object"||l)&&a&&!u){t[o]=l?[]:{};var p=a;for(var m in p)t[o][m]=p[m];n[o]=l?[]:{};var h=i[o];if(!this._isDynamic){var S={};for(var m in h)S[m]=h[m];i[o]=h=S}this._setupProperties(p,t[o],h,n[o],r)}else(typeof t[o]>"u"||r)&&(t[o]=a),l||(t[o]*=1),u?n[o]=i[o].slice().reverse():n[o]=t[o]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},s.prototype.pause=function(e){return e===void 0&&(e=Bi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},s.prototype.resume=function(e){return e===void 0&&(e=Bi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return e===void 0&&(e=Ga),this._group=e,this},s.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},s.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},s.prototype.easing=function(e){return e===void 0&&(e=Hi.Linear.None),this._easingFunction=e,this},s.prototype.interpolation=function(e){return e===void 0&&(e=Kn.Linear),this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){if(e===void 0&&(e=Bi()),t===void 0&&(t=!0),this._isPaused)return!0;var i,n,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>r)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),n=(e-this._startTime)/this._duration,n=this._duration===0||n>1?1:n;var o=this._easingFunction(n);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,n),n===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(e,t,i,n){for(var r in i)if(t[r]!==void 0){var o=t[r]||0,a=i[r],l=Array.isArray(e[r]),c=Array.isArray(a),u=!l&&c;u?e[r]=this._interpolationFunction(a,n):typeof a=="object"&&a?this._updateProperties(e[r],o,a,n):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*n))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s}(),Uv="21.0.0",Dv=to.nextId,dn=Ga,Iv=dn.getAll.bind(dn),Fv=dn.removeAll.bind(dn),Nv=dn.add.bind(dn),Ov=dn.remove.bind(dn),Bv=dn.update.bind(dn),no={Easing:Hi,Group:Su,Interpolation:Kn,now:Bi,Sequence:to,nextId:Dv,Tween:Lv,VERSION:Uv,getAll:Iv,removeAll:Fv,add:Nv,remove:Ov,update:Bv};const bn=11102230246251565e-32,yt=134217729,kv=(3+8*bn)*bn;function ba(s,e,t,i,n){let r,o,a,l,c=e[0],u=i[0],h=0,f=0;u>c==u>-c?(r=c,c=e[++h]):(r=u,u=i[++f]);let d=0;if(h<s&&f<t)for(u>c==u>-c?(o=c+r,a=r-(o-c),c=e[++h]):(o=u+r,a=r-(o-u),u=i[++f]),r=o,a!==0&&(n[d++]=a);h<s&&f<t;)u>c==u>-c?(o=r+c,l=o-r,a=r-(o-l)+(c-l),c=e[++h]):(o=r+u,l=o-r,a=r-(o-l)+(u-l),u=i[++f]),r=o,a!==0&&(n[d++]=a);for(;h<s;)o=r+c,l=o-r,a=r-(o-l)+(c-l),c=e[++h],r=o,a!==0&&(n[d++]=a);for(;f<t;)o=r+u,l=o-r,a=r-(o-l)+(u-l),u=i[++f],r=o,a!==0&&(n[d++]=a);return(r!==0||d===0)&&(n[d++]=r),d}function zv(s,e){let t=e[0];for(let i=1;i<s;i++)t+=e[i];return t}function Lr(s){return new Float64Array(s)}const Gv=(3+16*bn)*bn,Hv=(2+12*bn)*bn,Vv=(9+64*bn)*bn*bn,Pi=Lr(4),pc=Lr(8),mc=Lr(12),gc=Lr(16),Et=Lr(4);function Wv(s,e,t,i,n,r,o){let a,l,c,u,h,f,d,g,_,p,m,S,v,x,E,A,b,F;const T=s-n,y=t-n,G=e-r,U=i-r;x=T*U,f=yt*T,d=f-(f-T),g=T-d,f=yt*U,_=f-(f-U),p=U-_,E=g*p-(x-d*_-g*_-d*p),A=G*y,f=yt*G,d=f-(f-G),g=G-d,f=yt*y,_=f-(f-y),p=y-_,b=g*p-(A-d*_-g*_-d*p),m=E-b,h=E-m,Pi[0]=E-(m+h)+(h-b),S=x+m,h=S-x,v=x-(S-h)+(m-h),m=v-A,h=v-m,Pi[1]=v-(m+h)+(h-A),F=S+m,h=F-S,Pi[2]=S-(F-h)+(m-h),Pi[3]=F;let P=zv(4,Pi),I=Hv*o;if(P>=I||-P>=I||(h=s-T,a=s-(T+h)+(h-n),h=t-y,c=t-(y+h)+(h-n),h=e-G,l=e-(G+h)+(h-r),h=i-U,u=i-(U+h)+(h-r),a===0&&l===0&&c===0&&u===0)||(I=Vv*o+kv*Math.abs(P),P+=T*u+U*a-(G*c+y*l),P>=I||-P>=I))return P;x=a*U,f=yt*a,d=f-(f-a),g=a-d,f=yt*U,_=f-(f-U),p=U-_,E=g*p-(x-d*_-g*_-d*p),A=l*y,f=yt*l,d=f-(f-l),g=l-d,f=yt*y,_=f-(f-y),p=y-_,b=g*p-(A-d*_-g*_-d*p),m=E-b,h=E-m,Et[0]=E-(m+h)+(h-b),S=x+m,h=S-x,v=x-(S-h)+(m-h),m=v-A,h=v-m,Et[1]=v-(m+h)+(h-A),F=S+m,h=F-S,Et[2]=S-(F-h)+(m-h),Et[3]=F;const B=ba(4,Pi,4,Et,pc);x=T*u,f=yt*T,d=f-(f-T),g=T-d,f=yt*u,_=f-(f-u),p=u-_,E=g*p-(x-d*_-g*_-d*p),A=G*c,f=yt*G,d=f-(f-G),g=G-d,f=yt*c,_=f-(f-c),p=c-_,b=g*p-(A-d*_-g*_-d*p),m=E-b,h=E-m,Et[0]=E-(m+h)+(h-b),S=x+m,h=S-x,v=x-(S-h)+(m-h),m=v-A,h=v-m,Et[1]=v-(m+h)+(h-A),F=S+m,h=F-S,Et[2]=S-(F-h)+(m-h),Et[3]=F;const X=ba(B,pc,4,Et,mc);x=a*u,f=yt*a,d=f-(f-a),g=a-d,f=yt*u,_=f-(f-u),p=u-_,E=g*p-(x-d*_-g*_-d*p),A=l*c,f=yt*l,d=f-(f-l),g=l-d,f=yt*c,_=f-(f-c),p=c-_,b=g*p-(A-d*_-g*_-d*p),m=E-b,h=E-m,Et[0]=E-(m+h)+(h-b),S=x+m,h=S-x,v=x-(S-h)+(m-h),m=v-A,h=v-m,Et[1]=v-(m+h)+(h-A),F=S+m,h=F-S,Et[2]=S-(F-h)+(m-h),Et[3]=F;const H=ba(X,mc,4,Et,gc);return gc[H-1]}function ps(s,e,t,i,n,r){const o=(e-r)*(t-n),a=(s-n)*(i-r),l=o-a,c=Math.abs(o+a);return Math.abs(l)>=Gv*c?l:-Wv(s,e,t,i,n,r,c)}const _c=Math.pow(2,-52),ms=new Uint32Array(512);class io{static from(e,t=Kv,i=Zv){const n=e.length,r=new Float64Array(n*2);for(let o=0;o<n;o++){const a=e[o];r[2*o]=t(a),r[2*o+1]=i(a)}return new io(r)}constructor(e){const t=e.length>>1;if(t>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;const i=Math.max(2*t-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.update()}update(){const{coords:e,_hullPrev:t,_hullNext:i,_hullTri:n,_hullHash:r}=this,o=e.length>>1;let a=1/0,l=1/0,c=-1/0,u=-1/0;for(let y=0;y<o;y++){const G=e[2*y],U=e[2*y+1];G<a&&(a=G),U<l&&(l=U),G>c&&(c=G),U>u&&(u=U),this._ids[y]=y}const h=(a+c)/2,f=(l+u)/2;let d=1/0,g,_,p;for(let y=0;y<o;y++){const G=Aa(h,f,e[2*y],e[2*y+1]);G<d&&(g=y,d=G)}const m=e[2*g],S=e[2*g+1];d=1/0;for(let y=0;y<o;y++){if(y===g)continue;const G=Aa(m,S,e[2*y],e[2*y+1]);G<d&&G>0&&(_=y,d=G)}let v=e[2*_],x=e[2*_+1],E=1/0;for(let y=0;y<o;y++){if(y===g||y===_)continue;const G=qv(m,S,v,x,e[2*y],e[2*y+1]);G<E&&(p=y,E=G)}let A=e[2*p],b=e[2*p+1];if(E===1/0){for(let U=0;U<o;U++)this._dists[U]=e[2*U]-e[0]||e[2*U+1]-e[1];ki(this._ids,this._dists,0,o-1);const y=new Uint32Array(o);let G=0;for(let U=0,P=-1/0;U<o;U++){const I=this._ids[U];this._dists[I]>P&&(y[G++]=I,P=this._dists[I])}this.hull=y.subarray(0,G),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(ps(m,S,v,x,A,b)<0){const y=_,G=v,U=x;_=p,v=A,x=b,p=y,A=G,b=U}const F=jv(m,S,v,x,A,b);this._cx=F.x,this._cy=F.y;for(let y=0;y<o;y++)this._dists[y]=Aa(e[2*y],e[2*y+1],F.x,F.y);ki(this._ids,this._dists,0,o-1),this._hullStart=g;let T=3;i[g]=t[p]=_,i[_]=t[g]=p,i[p]=t[_]=g,n[g]=0,n[_]=1,n[p]=2,r.fill(-1),r[this._hashKey(m,S)]=g,r[this._hashKey(v,x)]=_,r[this._hashKey(A,b)]=p,this.trianglesLen=0,this._addTriangle(g,_,p,-1,-1,-1);for(let y=0,G,U;y<this._ids.length;y++){const P=this._ids[y],I=e[2*P],B=e[2*P+1];if(y>0&&Math.abs(I-G)<=_c&&Math.abs(B-U)<=_c||(G=I,U=B,P===g||P===_||P===p))continue;let X=0;for(let w=0,D=this._hashKey(I,B);w<this._hashSize&&(X=r[(D+w)%this._hashSize],!(X!==-1&&X!==i[X]));w++);X=t[X];let H=X,q;for(;q=i[H],ps(I,B,e[2*H],e[2*H+1],e[2*q],e[2*q+1])>=0;)if(H=q,H===X){H=-1;break}if(H===-1)continue;let V=this._addTriangle(H,P,i[H],-1,-1,n[H]);n[P]=this._legalize(V+2),n[H]=V,T++;let k=i[H];for(;q=i[k],ps(I,B,e[2*k],e[2*k+1],e[2*q],e[2*q+1])<0;)V=this._addTriangle(k,P,q,n[P],-1,n[k]),n[P]=this._legalize(V+2),i[k]=k,T--,k=q;if(H===X)for(;q=t[H],ps(I,B,e[2*q],e[2*q+1],e[2*H],e[2*H+1])<0;)V=this._addTriangle(q,P,H,-1,n[H],n[q]),this._legalize(V+2),n[q]=V,i[H]=H,T--,H=q;this._hullStart=t[P]=H,i[H]=t[k]=P,i[P]=k,r[this._hashKey(I,B)]=P,r[this._hashKey(e[2*H],e[2*H+1])]=H}this.hull=new Uint32Array(T);for(let y=0,G=this._hullStart;y<T;y++)this.hull[y]=G,G=i[G];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(Xv(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:t,_halfedges:i,coords:n}=this;let r=0,o=0;for(;;){const a=i[e],l=e-e%3;if(o=l+(e+2)%3,a===-1){if(r===0)break;e=ms[--r];continue}const c=a-a%3,u=l+(e+1)%3,h=c+(a+2)%3,f=t[o],d=t[e],g=t[u],_=t[h];if(Yv(n[2*f],n[2*f+1],n[2*d],n[2*d+1],n[2*g],n[2*g+1],n[2*_],n[2*_+1])){t[e]=_,t[a]=f;const m=i[h];if(m===-1){let v=this._hullStart;do{if(this._hullTri[v]===h){this._hullTri[v]=e;break}v=this._hullPrev[v]}while(v!==this._hullStart)}this._link(e,m),this._link(a,i[o]),this._link(o,h);const S=c+(a+1)%3;r<ms.length&&(ms[r++]=S)}else{if(r===0)break;e=ms[--r]}}return o}_link(e,t){this._halfedges[e]=t,t!==-1&&(this._halfedges[t]=e)}_addTriangle(e,t,i,n,r,o){const a=this.trianglesLen;return this._triangles[a]=e,this._triangles[a+1]=t,this._triangles[a+2]=i,this._link(a,n),this._link(a+1,r),this._link(a+2,o),this.trianglesLen+=3,a}}function Xv(s,e){const t=s/(Math.abs(s)+Math.abs(e));return(e>0?3-t:1+t)/4}function Aa(s,e,t,i){const n=s-t,r=e-i;return n*n+r*r}function Yv(s,e,t,i,n,r,o,a){const l=s-o,c=e-a,u=t-o,h=i-a,f=n-o,d=r-a,g=l*l+c*c,_=u*u+h*h,p=f*f+d*d;return l*(h*p-_*d)-c*(u*p-_*f)+g*(u*d-h*f)<0}function qv(s,e,t,i,n,r){const o=t-s,a=i-e,l=n-s,c=r-e,u=o*o+a*a,h=l*l+c*c,f=.5/(o*c-a*l),d=(c*u-a*h)*f,g=(o*h-l*u)*f;return d*d+g*g}function jv(s,e,t,i,n,r){const o=t-s,a=i-e,l=n-s,c=r-e,u=o*o+a*a,h=l*l+c*c,f=.5/(o*c-a*l),d=s+(c*u-a*h)*f,g=e+(o*h-l*u)*f;return{x:d,y:g}}function ki(s,e,t,i){if(i-t<=20)for(let n=t+1;n<=i;n++){const r=s[n],o=e[r];let a=n-1;for(;a>=t&&e[s[a]]>o;)s[a+1]=s[a--];s[a+1]=r}else{const n=t+i>>1;let r=t+1,o=i;fr(s,n,r),e[s[t]]>e[s[i]]&&fr(s,t,i),e[s[r]]>e[s[i]]&&fr(s,r,i),e[s[t]]>e[s[r]]&&fr(s,t,r);const a=s[r],l=e[a];for(;;){do r++;while(e[s[r]]<l);do o--;while(e[s[o]]>l);if(o<r)break;fr(s,r,o)}s[t+1]=s[o],s[o]=a,i-r+1>=o-t?(ki(s,e,r,i),ki(s,e,t,o-1)):(ki(s,e,t,o-1),ki(s,e,r,i))}}function fr(s,e,t){const i=s[e];s[e]=s[t],s[t]=i}function Kv(s){return s[0]}function Zv(s){return s[1]}var yu=0,qt,Xt,Fi,rn,xs;let Mu={rand_vect:function(){let s=Math.random()*2*Math.PI;return{x:Math.cos(s),y:Math.sin(s)}},dot_prod_grid:function(s,e,t,i){let n,r={x:s-t,y:e-i};return this.gradients[[t,i]]?n=this.gradients[[t,i]]:(n=this.rand_vect(),this.gradients[[t,i]]=n),r.x*n.x+r.y*n.y},smootherstep:function(s){return 6*s**5-15*s**4+10*s**3},interp:function(s,e,t){return e+this.smootherstep(s)*(t-e)},seed:function(){this.gradients={},this.memory={}},get:function(s,e){if(this.memory.hasOwnProperty([s,e]))return this.memory[[s,e]];let t=Math.floor(s),i=Math.floor(e),n=this.dot_prod_grid(s,e,t,i),r=this.dot_prod_grid(s,e,t+1,i),o=this.dot_prod_grid(s,e,t,i+1),a=this.dot_prod_grid(s,e,t+1,i+1),l=this.interp(s-t,n,r),c=this.interp(s-t,o,a),u=this.interp(e-i,l,c);return this.memory[[s,e]]=u,u}};Mu.seed();function Jv(){qt=new Yg,Xt=new Yt(75,window.innerWidth/window.innerHeight,.1,1e4),qt.fog=new Ka(3747402,.001),Fi=new Jc({antialias:!0}),Fi.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Fi.domElement),Fi.setClearColor(3747402,1),Xt.position.set(0,5,-10),new F_(Xt,Fi.domElement);var s=document.querySelector("#statusText");s.addEventListener("click",function(){console.log("çlick"),l0()}),document.getElementById("slider").addEventListener("input",function(){yu=this.value,document.getElementById("sliderval").textContent=this.value+"%"});var e=new D_(10,10);qt.add(e);var t=new R_("yellow","crimson");qt.add(t);var i=new L_("white",10.5);i.position.set(1,1,1),qt.add(i);const n=new xu;qt.add(n),n.text="Just a 3D text",n.fontSize=.2,n.position.y=-1,n.position.x=-.7,n.color=10053375,n.sync()}function Qv(){const s=new zn(1,1,1),e=new lu({color:Ms.randInt(0,16777215)});rn=new Mt(s,e),qt.add(rn),rn.position.set(-3,0,0)}function $v(){Jv(),Qv(),n0("ispegui.gpx")}$v();Tu();function e0(s){const e=new $c(s),t={steps:1024,bevelEnabled:!0,extrudePath:e},i=new ru([new Re(.6,-4.5),new Re(.6,4.5),new Re(.1,4.5),new Re(.1,-4.5)]),n=new $a(i,t);var r=new lu({color:7420606,specular:2236962,shininess:25,transparent:!0,opacity:.7});const o=new Mt(n,r);console.log(o),qt.add(o),i0(e)}function t0(s){var e={x:1e3,z:1e3},t=[];for(let a=0;a<s.length;a++){let l=s[a].x,c=s[a].z,u=s[a].y;t.push(new W(l,u,c));let h=4;t.push(new W(l-h,u-1,c)),t.push(new W(l+h,u-1,c)),t.push(new W(l,u-1,c-h)),t.push(new W(l,u-1,c+h));let f=l+Ms.randFloatSpread(e.x),d=c+Ms.randFloatSpread(e.z),g=u+Mu.get(l/e.x*5,c/e.z*5)*100,_=new W(f,g,d);f0(_,s,50)==!1&&t.push(_)}var i=new kt().setFromPoints(t),n=io.from(t.map(a=>[a.x,a.z])),r=[];for(let a=0;a<n.triangles.length;a++)r.push(n.triangles[a]);i.setIndex(r),i.computeVertexNormals();var o=new Mt(i,new w_({color:5965960,wireframe:!1}));qt.add(o)}function n0(s){const e=new XMLHttpRequest;e.open("GET",s,!0),e.onload=function(){if(e.status>=200&&e.status<400){const n=e.responseText,r=h0(n);var t=[];r.forEach(o=>{t.push(new W(o.x,o.z,o.y))});var i=t[t.length-1].y-t[0].y;console.log(t[t.length-1].y),console.log(t[0].y),console.log("elevation gain:"+i),e0(t),t0(t)}else console.error("Error loading the file")},e.onerror=function(){console.error("Network error")},e.send()}function i0(s){const t=s.getLength();console.log(t);for(let i=0;i<=1;i+=2/t){const n=s.getPointAt(i),r=new zn(.1,.1,.1),o=new Pr({color:15793920}),a=new Mt(r,o);a.position.set(n.x,n.y,n.z),qt.add(a)}xs=s,Eu=!0}var Eu=!1;const r0=10,s0=r0*(1e3/3600);let Li=0;function a0(){Mr||(Mr=Date.now());const e=(Date.now()-Mr)/1e3,t=xs.getPointAt(Li);rn.position.copy(t);const i=s0*e/xs.getLength();Li+=i,Li>1&&(Li=0);let n=p0(xs,Li);console.log(`Slope at t = ${Li}: ${n.toFixed(2)}%`),o0(rn)}let Mr=Date.now();function o0(s){const e=Date.now(),t=(e-Mr)/1e3,r=s.position.distanceTo(s.previousPosition||s.position)/t*3.6;console.log(`Current Speed: ${r.toFixed(2)} km/h`),Mr=e,s.previousPosition=s.position.clone()}function l0(){ftmsSensor.connect().then(()=>ftmsSensor.startNotificationsIndoorBikeData().then(u0)).then(()=>setInterval(c0,1e3)).catch(s=>{console.log(s)})}function c0(){ftmsSensor.setSlope(yu)}function u0(s){s.addEventListener("characteristicvaluechanged",e=>{var t=ftmsSensor.parseIndoorBikeData(e.target.value);let i=Math.round(t.speedInKph);console.log(i+" &#x2764;"),statusText.innerHTML=t.speedInKph+" kph -  "+t.power+" watt"})}function h0(s){const t=new DOMParser().parseFromString(s,"text/xml"),i=[],n=t.querySelectorAll("trkpt");let r=!1;const o=[];return n.forEach(a=>{const l=parseFloat(a.getAttribute("lat")),c=parseFloat(a.getAttribute("lon")),u=parseFloat(a.querySelector("ele").textContent);var h=d0(l,c,u);r==!1&&(r=!0,o.x=h.x,o.y=h.y,o.z=h.z),h.x-=o.x,h.y-=o.y,h.z-=o.z;const f=new zn(1,1,1),d=new Pr({color:65280}),g=new Mt(f,d);g.position.set(h.x,h.z,h.y),qt.add(g),i.push(h)}),i}function f0(s,e,t){for(const i of e)if((s.x-i.x)**2+(s.z-i.z)**2<t**2)return!0;return!1}function d0(s,e,t){const n=s*Math.PI/180,o=6371e3*(e*Math.PI/180)*Math.cos(n),a=6371e3*n;return{x:o,z:t,y:a}}function p0(s,e){s.getPointAt(e);const t=s.getTangentAt(e).normalize();return Math.atan2(t.y,t.length())*(180/Math.PI)}let vc=new W;function Tu(){if(requestAnimationFrame(Tu),rn.rotation.x+=.01,rn.rotation.y+=.01,no.update(),Eu==!0){a0();const s=.105,e=rn.position.clone().sub(vc).normalize(),t=rn.position.clone().add(e.clone().multiplyScalar(-5));Xt.position.x+=(t.x-Xt.position.x)*s,Xt.position.y+=(t.y-Xt.position.y)*s,Xt.position.z+=(t.z-Xt.position.z)*s;const i=.2;Xt.position.y+=i;const n=rn.position.clone().add(e);Xt.lookAt(n),vc.copy(rn.position)}Fi.render(qt,Xt)}(function(){class s{constructor(){this.device=null,this.server=null,this._characteristics=new Map}connect(){return navigator.bluetooth.requestDevice({filters:[{services:["heart_rate"]}]}).then(t=>(this.device=t,t.gatt.connect())).then(t=>(this.server=t,t.getPrimaryService("heart_rate"))).then(t=>this._cacheCharacteristic(t,"heart_rate_measurement"))}startNotificationsHeartRateMeasurement(){return this._startNotifications("heart_rate_measurement")}stopNotificationsHeartRateMeasurement(){return this._stopNotifications("heart_rate_measurement")}parseHeartRate(t){t=t.buffer?t:new DataView(t);let i=t.getUint8(0),n=i&1,r={},o=1;n?(r.heartRate=t.getUint16(o,!0),o+=2):(r.heartRate=t.getUint8(o),o+=1);let a=i&2;if(i&4&&(r.contactDetected=!!a),i&8&&(r.energyExpended=t.getUint16(o,!0),o+=2),i&16){let h=[];for(;o+1<t.byteLength;o+=2)h.push(t.getUint16(o,!0));r.rrIntervals=h}return r}_cacheCharacteristic(t,i){return t.getCharacteristic(i).then(n=>{this._characteristics.set(i,n)})}_readCharacteristicValue(t){return this._characteristics.get(t).readValue().then(n=>(n=n.buffer?n:new DataView(n),n))}_writeCharacteristicValue(t,i){return this._characteristics.get(t).writeValue(i)}_startNotifications(t){let i=this._characteristics.get(t);return i.startNotifications().then(()=>i)}_stopNotifications(t){let i=this._characteristics.get(t);return i.stopNotifications().then(()=>i)}}window.heartRateSensor=new s})();(function(){class s{constructor(){this.device=null,this.server=null,this._characteristics=new Map,this.gotFeature=!1}connect(){return navigator.bluetooth.requestDevice({filters:[{services:["fitness_machine"]}]}).then(t=>(this.device=t,t.gatt.connect())).then(t=>(this.server=t,t.getPrimaryService("fitness_machine"))).then(t=>(console.log("a"),this._cacheCharacteristic(t,"fitness_machine_control_point"),this._cacheCharacteristic(t,"indoor_bike_data")))}startNotificationsIndoorBikeData(){return this._startNotifications("indoor_bike_data")}stopNotificationsIndoorBikeData(){return this._stopNotifications("indoor_bike_data")}setSlope(t){console.log("in set slope");let i=40,n=51,r=Math.floor(t/.01),o=new Uint8Array(new Uint16Array([r]).buffer),a=new Uint8Array([17,0,0,o[0],o[1],i,n]),l=this._characteristics.get("fitness_machine_control_point");console.log(l),l.writeValueWithResponse(a).then(()=>{console.log("write successfully")}).catch(c=>{console.log(c)})}parseIndoorBikeData(t){t=t.buffer?t:new DataView(t);let i=t.getUint16(0,!0),n={},r=2;return i&1||(n.speedInKph=t.getUint16(r,!0)*.01,r+=2),i&2&&(r+=2),i&4&&(r+=2),i&8&&(r+=2),i&16&&(r+=3),i&32&&(r+=2),i&64&&(n.power=t.getUint16(r,!0)),n}_cacheCharacteristic(t,i){return t.getCharacteristic(i).then(n=>{this._characteristics.set(i,n)})}_readCharacteristicValue(t){return this._characteristics.get(t).readValue().then(n=>(n=n.buffer?n:new DataView(n),n))}_writeCharacteristicValue(t,i){return this._characteristics.get(t).writeValue(i)}_startNotifications(t){let i=this._characteristics.get(t);return i.startNotifications().then(()=>i)}_stopNotifications(t){let i=this._characteristics.get(t);return i.stopNotifications().then(()=>i)}}window.ftmsSensor=new s})()});export default m0();
