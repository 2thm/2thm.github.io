var Oh=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Wx=Oh(Wo=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="156",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nh=0,hl=1,Bh=2,Mu=1,kh=2,Un=3,Fn=0,Pt=1,ln=2,jn=0,tr=1,fl=2,dl=3,pl=4,zh=5,Xi=100,Gh=101,Hh=102,ml=103,gl=104,Vh=200,Wh=201,Xh=202,Yh=203,bu=204,Eu=205,jh=206,qh=207,Kh=208,Jh=209,Zh=210,Qh=0,$h=1,ef=2,ro=3,tf=4,nf=5,rf=6,sf=7,ea=0,af=1,of=2,qn=0,lf=1,cf=2,uf=3,hf=4,ff=5,Tu=300,rr=301,sr=302,so=303,ao=304,ta=306,oo=1e3,cn=1001,lo=1002,Lt=1003,_l=1004,_a=1005,Ot=1006,df=1007,Yr=1008,Kn=1009,pf=1010,mf=1011,Ro=1012,wu=1013,Xn=1014,Yn=1015,jr=1016,Au=1017,Cu=1018,ci=1020,gf=1021,un=1023,_f=1024,vf=1025,ui=1026,ar=1027,xf=1028,Ru=1029,yf=1030,Lu=1031,Pu=1033,va=33776,xa=33777,ya=33778,Sa=33779,vl=35840,xl=35841,yl=35842,Sl=35843,Sf=36196,Ml=37492,bl=37496,El=37808,Tl=37809,wl=37810,Al=37811,Cl=37812,Rl=37813,Ll=37814,Pl=37815,Ul=37816,Dl=37817,Il=37818,Fl=37819,Ol=37820,Nl=37821,Ma=36492,Bl=36494,kl=36495,Mf=36283,zl=36284,Gl=36285,Hl=36286,Uu=3e3,hi=3001,bf=3200,Du=3201,Lo=0,Ef=1,fi="",rt="srgb",yn="srgb-linear",na="display-p3",ba=7680,Tf=519,wf=512,Af=513,Cf=514,Rf=515,Lf=516,Pf=517,Uf=518,Df=519,Vl=35044,Wl="300 es",co=1035,Dn=2e3,js=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const Ir=Math.PI/180,qr=180/Math.PI;function xi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function Po(r,e){return(r%e+e)%e}function If(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Ff(r,e,t){return r!==e?(t-r)/(e-r):0}function Fr(r,e,t){return(1-t)*r+t*e}function Of(r,e,t,i){return Fr(r,e,1-Math.exp(-t*i))}function Nf(r,e=1){return e-Math.abs(Po(r,e*2)-e)}function Bf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function kf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function zf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Gf(r,e){return r+Math.random()*(e-r)}function Hf(r){return r*(.5-Math.random())}function Vf(r){r!==void 0&&(Xl=r);let e=Xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wf(r){return r*Ir}function Xf(r){return r*qr}function uo(r){return(r&r-1)===0&&r!==0}function Yf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function qs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jf(r,e,t,i,n){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ct(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ks={DEG2RAD:Ir,RAD2DEG:qr,generateUUID:xi,clamp:_t,euclideanModulo:Po,mapLinear:If,inverseLerp:Ff,lerp:Fr,damp:Of,pingpong:Nf,smoothstep:Bf,smootherstep:kf,randInt:zf,randFloat:Gf,randFloatSpread:Hf,seededRandom:Vf,degToRad:Wf,radToDeg:Xf,isPowerOfTwo:uo,ceilPowerOfTwo:Yf,floorPowerOfTwo:qs,setQuaternionFromProperEuler:jf,normalize:Ct,denormalize:Yi};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,n,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c)}set(e,t,i,n,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=n[0],p=n[3],m=n[6],y=n[1],v=n[4],x=n[7],M=n[2],w=n[5],T=n[8];return s[0]=o*_+a*y+l*M,s[3]=o*p+a*v+l*w,s[6]=o*m+a*x+l*T,s[1]=c*_+u*y+h*M,s[4]=c*p+u*v+h*w,s[7]=c*m+u*x+h*T,s[2]=f*_+d*y+g*M,s[5]=f*p+d*v+g*w,s[8]=f*m+d*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(n*c-u*i)*_,e[2]=(a*i-n*o)*_,e[3]=f*_,e[4]=(u*t-n*l)*_,e[5]=(n*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new Ze;function Iu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Js(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qf(){const r=Js("canvas");return r.style.display="block",r}const Yl={};function Or(r){r in Yl||(Yl[r]=!0,console.warn(r))}function nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ta(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Kf=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Jf=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Zf(r){return r.convertSRGBToLinear().applyMatrix3(Jf)}function Qf(r){return r.applyMatrix3(Kf).convertLinearToSRGB()}const $f={[yn]:r=>r,[rt]:r=>r.convertSRGBToLinear(),[na]:Zf},ed={[yn]:r=>r,[rt]:r=>r.convertLinearToSRGB(),[na]:Qf},nn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return yn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=$f[e],n=ed[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ai;class Fu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Js("canvas")),Ai.width=e.width,Ai.height=e.height;const i=Ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=nr(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let td=0;class Ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(wa(n[o].image)):s.push(wa(n[o]))}else s=wa(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Fu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nd=0;class Nt extends vi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=cn,n=cn,s=Ot,o=Yr,a=un,l=Kn,c=Nt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=xi(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===hi?rt:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?hi:Uu}set encoding(e){Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===hi?rt:fi}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Tu;Nt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,n=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,M=(m+1)/2,w=(u+f)/4,T=(h+_)/4,F=(g+p)/4;return v>x&&v>M?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=w/i,s=T/i):x>M?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=w/n,s=F/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=T/s,n=F/s),this.set(i,n,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class id extends vi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(Or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===hi?rt:fi),this.texture=new Nt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ot,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ou(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends id{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nu extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rd extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const M=Math.sqrt(v),w=Math.atan2(M,m*y);p=Math.sin(p*w)/M,a=Math.sin(a*w)/M}const x=a*y;if(l=l*p+f*x,c=c*p+d*x,u=u*p+g*x,h=h*p+_*x,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(n/2),h=a(s/2),f=l(i/2),d=l(n/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-n)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-n)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+n*c-s*l,this._y=n*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-n*a,this._w=o*u-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=n*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,u=l*i+a*t-s*n,h=l*n+s*i-o*t,f=-s*t-o*i-a*n;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new W,jl=new mi;class cr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ci.copy(e.boundingBox),Ci.applyMatrix4(e.matrixWorld),this.union(Ci);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)wn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(wn)}else n.boundingBox===null&&n.computeBoundingBox(),Ci.copy(n.boundingBox),Ci.applyMatrix4(e.matrixWorld),this.union(Ci)}const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),us.subVectors(this.max,br),Ri.subVectors(e.a,br),Li.subVectors(e.b,br),Pi.subVectors(e.c,br),kn.subVectors(Li,Ri),zn.subVectors(Pi,Li),ti.subVectors(Ri,Pi);let t=[0,-kn.z,kn.y,0,-zn.z,zn.y,0,-ti.z,ti.y,kn.z,0,-kn.x,zn.z,0,-zn.x,ti.z,0,-ti.x,-kn.y,kn.x,0,-zn.y,zn.x,0,-ti.y,ti.x,0];return!Ca(t,Ri,Li,Pi,us)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,Ri,Li,Pi,us))?!1:(hs.crossVectors(kn,zn),t=[hs.x,hs.y,hs.z],Ca(t,Ri,Li,Pi,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new W,new W,new W,new W,new W,new W,new W,new W],wn=new W,Ci=new cr,Ri=new W,Li=new W,Pi=new W,kn=new W,zn=new W,ti=new W,br=new W,us=new W,hs=new W,ni=new W;function Ca(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){ni.fromArray(r,s);const a=n.x*Math.abs(ni.x)+n.y*Math.abs(ni.y)+n.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=i.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sd=new cr,Er=new W,Ra=new W;class $r{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sd.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Er,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Ra)),this.expandByPoint(Er.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new W,La=new W,fs=new W,Gn=new W,Pa=new W,ds=new W,Ua=new W;class Uo{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){La.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(La);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fs),a=Gn.dot(this.direction),l=-Gn.dot(fs),c=Gn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(La).addScaledVector(fs,f),d}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),n=An.dot(An)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,n,s){Pa.subVectors(t,e),ds.subVectors(i,e),Ua.crossVectors(Pa,ds);let o=this.direction.dot(Ua),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,e);const l=a*this.direction.dot(ds.crossVectors(Gn,ds));if(l<0)return null;const c=a*this.direction.dot(Pa.cross(Gn));if(c<0||l+c>o)return null;const u=-a*Gn.dot(Ua);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,n,s,o,a,l,c,u,h,f,d,g,_,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c,u,h,f,d,g,_,p)}set(e,t,i,n,s,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ad,e,od)}lookAt(e,t,i){const n=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Hn.crossVectors(i,Gt),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Hn.crossVectors(i,Gt)),Hn.normalize(),ps.crossVectors(Gt,Hn),n[0]=Hn.x,n[4]=ps.x,n[8]=Gt.x,n[1]=Hn.y,n[5]=ps.y,n[9]=Gt.y,n[2]=Hn.z,n[6]=ps.z,n[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],y=i[3],v=i[7],x=i[11],M=i[15],w=n[0],T=n[4],F=n[8],E=n[12],S=n[1],G=n[5],U=n[9],L=n[13],I=n[2],B=n[6],X=n[10],H=n[14],j=n[3],V=n[7],k=n[11],A=n[15];return s[0]=o*w+a*S+l*I+c*j,s[4]=o*T+a*G+l*B+c*V,s[8]=o*F+a*U+l*X+c*k,s[12]=o*E+a*L+l*H+c*A,s[1]=u*w+h*S+f*I+d*j,s[5]=u*T+h*G+f*B+d*V,s[9]=u*F+h*U+f*X+d*k,s[13]=u*E+h*L+f*H+d*A,s[2]=g*w+_*S+p*I+m*j,s[6]=g*T+_*G+p*B+m*V,s[10]=g*F+_*U+p*X+m*k,s[14]=g*E+_*L+p*H+m*A,s[3]=y*w+v*S+x*I+M*j,s[7]=y*T+v*G+x*B+M*V,s[11]=y*F+v*U+x*X+M*k,s[15]=y*E+v*L+x*H+M*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*h-n*c*h-s*a*f+i*c*f+n*a*d-i*l*d)+_*(+t*l*d-t*c*f+s*o*f-n*o*d+n*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+m*(-n*a*u-t*l*h+t*a*f+n*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,v=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,x=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,M=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,w=t*y+i*v+n*x+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(_*f*s-h*p*s-_*n*d+i*p*d+h*n*m-i*f*m)*T,e[2]=(a*p*s-_*l*s+_*n*c-i*p*c-a*n*m+i*l*m)*T,e[3]=(h*l*s-a*f*s-h*n*c+i*f*c+a*n*d-i*l*d)*T,e[4]=v*T,e[5]=(u*p*s-g*f*s+g*n*d-t*p*d-u*n*m+t*f*m)*T,e[6]=(g*l*s-o*p*s-g*n*c+t*p*c+o*n*m-t*l*m)*T,e[7]=(o*f*s-u*l*s+u*n*c-t*f*c-o*n*d+t*l*d)*T,e[8]=x*T,e[9]=(g*h*s-u*_*s-g*i*d+t*_*d+u*i*m-t*h*m)*T,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*m+t*a*m)*T,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*T,e[12]=M*T,e[13]=(u*_*n-g*h*n+g*i*f-t*_*f-u*i*p+t*h*p)*T,e[14]=(g*a*n-o*_*n-g*i*l+t*_*l+o*i*p-t*a*p)*T,e[15]=(o*h*n-u*a*n+u*i*l-t*h*l-o*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,u*a+i,u*l-n*o,0,c*l-n*a,u*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,p=o*h,m=a*h,y=l*c,v=l*u,x=l*h,M=i.x,w=i.y,T=i.z;return n[0]=(1-(_+m))*M,n[1]=(d+x)*M,n[2]=(g-v)*M,n[3]=0,n[4]=(d-x)*w,n[5]=(1-(f+m))*w,n[6]=(p+y)*w,n[7]=0,n[8]=(g+v)*T,n[9]=(p-y)*T,n[10]=(1-(f+_))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Ui.set(n[0],n[1],n[2]).length();const o=Ui.set(n[4],n[5],n[6]).length(),a=Ui.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],rn.copy(this);const c=1/s,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=Dn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-n),h=(t+e)/(t-e),f=(i+n)/(i-n);let d,g;if(a===Dn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===js)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=Dn){const l=this.elements,c=1/(t-e),u=1/(i-n),h=1/(o-s),f=(t+e)*c,d=(i+n)*u;let g,_;if(a===Dn)g=(o+s)*h,_=-2*h;else if(a===js)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ui=new W,rn=new ot,ad=new W(0,0,0),od=new W(1,1,1),Hn=new W,ps=new W,Gt=new W,ql=new ot,Kl=new mi;class ia{constructor(e=0,t=0,i=0,n=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class Bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ld=0;const Jl=new W,Di=new mi,Cn=new ot,ms=new W,Tr=new W,cd=new W,ud=new mi,Zl=new W(1,0,0),Ql=new W(0,1,0),$l=new W(0,0,1),hd={type:"added"},fd={type:"removed"};class dt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new W,t=new ia,i=new mi,n=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ms.copy(e):ms.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Tr,ms,this.up):Cn.lookAt(ms,Tr,this.up),this.quaternion.setFromRotationMatrix(Cn),n&&(Cn.extractRotation(n.matrixWorld),Di.setFromRotationMatrix(Cn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}dt.DEFAULT_UP=new W(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new W,Rn=new W,Da=new W,Ln=new W,Ii=new W,Fi=new W,ec=new W,Ia=new W,Fa=new W,Oa=new W;let gs=!1;class on{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),sn.subVectors(e,t),n.cross(sn);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){sn.subVectors(n,t),Rn.subVectors(i,t),Da.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(Rn),l=sn.dot(Da),c=Rn.dot(Rn),u=Rn.dot(Da),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,i,n,s,o,a,l){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),this.getInterpolation(e,t,i,n,s,o,a,l)}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,Ln),l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l}static isFrontFacing(e,t,i,n){return sn.subVectors(i,t),Rn.subVectors(e,t),sn.cross(Rn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),sn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),on.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;Ii.subVectors(n,i),Fi.subVectors(s,i),Ia.subVectors(e,i);const l=Ii.dot(Ia),c=Fi.dot(Ia);if(l<=0&&c<=0)return t.copy(i);Fa.subVectors(e,n);const u=Ii.dot(Fa),h=Fi.dot(Fa);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ii,o);Oa.subVectors(e,s);const d=Ii.dot(Oa),g=Fi.dot(Oa);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Fi,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return ec.subVectors(s,n),a=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(ec,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(Ii,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let dd=0;class yi extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=tr,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Eu,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Na(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=nn.workingColorSpace){return this.r=e,this.g=t,this.b=i,nn.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=nn.workingColorSpace){if(e=Po(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Na(o,s,e+1/3),this.g=Na(o,s,e),this.b=Na(o,s,e-1/3)}return nn.toWorkingColorSpace(this,n),this}setStyle(e,t=rt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){const i=ku[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return nn.fromWorkingColorSpace(Et.copy(this),e),Math.round(_t(Et.r*255,0,255))*65536+Math.round(_t(Et.g*255,0,255))*256+Math.round(_t(Et.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nn.workingColorSpace){nn.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,n=Et.g,s=Et.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nn.workingColorSpace){return nn.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=rt){nn.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,n=Et.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=i,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(_s);const i=Fr(an.h,_s.h,t),n=Fr(an.s,_s.s,t),s=Fr(an.l,_s.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Et=new Xe;Xe.NAMES=ku;class es extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new W,vs=new Le;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vl,this.updateRange={offset:0,count:-1},this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class zu extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gu extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bt extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pd=0;const Kt=new ot,Ba=new dt,Oi=new W,Ht=new cr,wr=new cr,gt=new W;class Wt extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iu(e)?Gu:zu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ht.min,wr.min),Ht.expandByPoint(gt),gt.addVectors(Ht.max,wr.max),Ht.expandByPoint(gt)):(Ht.expandByPoint(wr.min),Ht.expandByPoint(wr.max))}Ht.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(e,c),gt.add(Oi)),n=Math.max(n,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<a;S++)c[S]=new W,u[S]=new W;const h=new W,f=new W,d=new W,g=new Le,_=new Le,p=new Le,m=new W,y=new W;function v(S,G,U){h.fromArray(n,S*3),f.fromArray(n,G*3),d.fromArray(n,U*3),g.fromArray(o,S*2),_.fromArray(o,G*2),p.fromArray(o,U*2),f.sub(h),d.sub(h),_.sub(g),p.sub(g);const L=1/(_.x*p.y-p.x*_.y);isFinite(L)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(L),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(L),c[S].add(m),c[G].add(m),c[U].add(m),u[S].add(y),u[G].add(y),u[U].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let S=0,G=x.length;S<G;++S){const U=x[S],L=U.start,I=U.count;for(let B=L,X=L+I;B<X;B+=3)v(i[B+0],i[B+1],i[B+2])}const M=new W,w=new W,T=new W,F=new W;function E(S){T.fromArray(s,S*3),F.copy(T);const G=c[S];M.copy(G),M.sub(T.multiplyScalar(T.dot(G))).normalize(),w.crossVectors(F,G);const L=w.dot(u[S])<0?-1:1;l[S*4]=M.x,l[S*4+1]=M.y,l[S*4+2]=M.z,l[S*4+3]=L}for(let S=0,G=x.length;S<G;++S){const U=x[S],L=U.start,I=U.count;for(let B=L,X=L+I;B<X;B+=3)E(i[B+0]),E(i[B+1]),E(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(n,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(n,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new ot,ii=new Uo,xs=new $r,nc=new W,Ni=new W,Bi=new W,ki=new W,ka=new W,ys=new W,Ss=new Le,Ms=new Le,bs=new Le,ic=new W,rc=new W,sc=new W,Es=new W,Ts=new W;class wt extends dt{constructor(e=new Wt,t=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ka.fromBufferAttribute(h,e),o?ys.addScaledVector(ka,u):ys.addScaledVector(ka.sub(t),u))}t.add(ys)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(s),ii.copy(e.ray).recast(e.near),!(xs.containsPoint(ii.origin)===!1&&(ii.intersectSphere(xs,nc)===null||ii.origin.distanceToSquared(nc)>(e.far-e.near)**2))&&(tc.copy(s).invert(),ii.copy(e.ray).applyMatrix4(tc),!(i.boundingBox!==null&&ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,M=v;x<M;x+=3){const w=a.getX(x),T=a.getX(x+1),F=a.getX(x+2);n=ws(this,m,e,i,c,u,h,w,T,F),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);n=ws(this,o,e,i,c,u,h,y,v,x),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,M=v;x<M;x+=3){const w=x,T=x+1,F=x+2;n=ws(this,m,e,i,c,u,h,w,T,F),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,x=p+2;n=ws(this,o,e,i,c,u,h,y,v,x),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function md(r,e,t,i,n,s,o,a){let l;if(e.side===Pt?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===Fn,a),l===null)return null;Ts.copy(a),Ts.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:r}}function ws(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,Ni),r.getVertexPosition(l,Bi),r.getVertexPosition(c,ki);const u=md(r,e,t,i,Ni,Bi,ki,Es);if(u){n&&(Ss.fromBufferAttribute(n,a),Ms.fromBufferAttribute(n,l),bs.fromBufferAttribute(n,c),u.uv=on.getInterpolation(Es,Ni,Bi,ki,Ss,Ms,bs,new Le)),s&&(Ss.fromBufferAttribute(s,a),Ms.fromBufferAttribute(s,l),bs.fromBufferAttribute(s,c),u.uv1=on.getInterpolation(Es,Ni,Bi,ki,Ss,Ms,bs,new Le),u.uv2=u.uv1),o&&(ic.fromBufferAttribute(o,a),rc.fromBufferAttribute(o,l),sc.fromBufferAttribute(o,c),u.normal=on.getInterpolation(Es,Ni,Bi,ki,ic,rc,sc,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new W,materialIndex:0};on.getNormal(Ni,Bi,ki,h.normal),u.face=h}return u}class Zn extends Wt{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function g(_,p,m,y,v,x,M,w,T,F,E){const S=x/T,G=M/F,U=x/2,L=M/2,I=w/2,B=T+1,X=F+1;let H=0,j=0;const V=new W;for(let k=0;k<X;k++){const A=k*G-L;for(let D=0;D<B;D++){const K=D*S-U;V[_]=K*y,V[p]=A*v,V[m]=I,c.push(V.x,V.y,V.z),V[_]=0,V[p]=0,V[m]=w>0?1:-1,u.push(V.x,V.y,V.z),h.push(D/T),h.push(1-k/F),H+=1}}for(let k=0;k<F;k++)for(let A=0;A<T;A++){const D=f+A+B*k,K=f+A+B*(k+1),Y=f+(A+1)+B*(k+1),q=f+(A+1)+B*k;l.push(D,K,q),l.push(K,Y,q),j+=6}a.addGroup(d,j,E),d+=j,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Rt(r){const e={};for(let t=0;t<r.length;t++){const i=or(r[t]);for(const n in i)e[n]=i[n]}return e}function gd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Hu(r){return r.getRenderTarget()===null?r.outputColorSpace:yn}const Vu={clone:or,merge:Rt};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=gd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wu extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends Wu{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Gi=1;class xd extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const n=new Jt(zi,Gi,e,t);n.layers=this.layers,this.add(n);const s=new Jt(zi,Gi,e,t);s.layers=this.layers,this.add(s);const o=new Jt(zi,Gi,e,t);o.layers=this.layers,this.add(o);const a=new Jt(zi,Gi,e,t);a.layers=this.layers,this.add(a);const l=new Jt(zi,Gi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(zi,Gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Xu extends Nt{constructor(e,t,i,n,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,i,n,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yd extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(Or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===hi?rt:fi),this.texture=new Xu(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Zn(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:jn});s.uniforms.tEquirect.value=t;const o=new wt(n,s),a=t.minFilter;return t.minFilter===Yr&&(t.minFilter=Ot),new xd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const za=new W,Sd=new W,Md=new Ze;class Wn{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=za.subVectors(i,t).cross(Sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(za),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Md.getNormalMatrix(e),n=this.coplanarPoint(za).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new $r,As=new W;class Do{constructor(e=new Wn,t=new Wn,i=new Wn,n=new Wn,s=new Wn,o=new Wn){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn){const i=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],g=n[9],_=n[10],p=n[11],m=n[12],y=n[13],v=n[14],x=n[15];if(i[0].setComponents(l-s,f-c,p-d,x-m).normalize(),i[1].setComponents(l+s,f+c,p+d,x+m).normalize(),i[2].setComponents(l+o,f+u,p+g,x+y).normalize(),i[3].setComponents(l-o,f-u,p-g,x-y).normalize(),i[4].setComponents(l-a,f-h,p-_,x-v).normalize(),t===Dn)i[5].setComponents(l+a,f+h,p+_,x+v).normalize();else if(t===js)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(As.x=n.normal.x>0?e.max.x:e.min.x,As.y=n.normal.y>0?e.max.y:e.min.y,As.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yu(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bd(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,u){const h=c.array,f=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;r.bindBuffer(h,c),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(r.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,n(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class ur extends Wt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*f-o;for(let v=0;v<c;v++){const x=v*h-s;g.push(x,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,x=y+c*(m+1),M=y+1+c*(m+1),w=y+1+c*m;d.push(v,x,w),d.push(x,M,w)}this.setIndex(d),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xd=`#define PI 3.141592653589793
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
} // validated`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jd=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cp=`#ifdef USE_GRADIENTMAP
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
}`,up=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
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
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,Mp=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
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
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Bp=`#ifdef USE_MORPHTARGETS
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
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wp=`#ifdef USE_NORMALMAP
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
#endif`,Xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Rm=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Om=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,zm=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Hm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Km=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,eg=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Ed,alphahash_pars_fragment:Td,alphamap_fragment:wd,alphamap_pars_fragment:Ad,alphatest_fragment:Cd,alphatest_pars_fragment:Rd,aomap_fragment:Ld,aomap_pars_fragment:Pd,begin_vertex:Ud,beginnormal_vertex:Dd,bsdfs:Id,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:kd,clipping_planes_vertex:zd,color_fragment:Gd,color_pars_fragment:Hd,color_pars_vertex:Vd,color_vertex:Wd,common:Xd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:jd,displacementmap_pars_vertex:qd,displacementmap_vertex:Kd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Zd,colorspace_fragment:Qd,colorspace_pars_fragment:$d,envmap_fragment:ep,envmap_common_pars_fragment:tp,envmap_pars_fragment:np,envmap_pars_vertex:ip,envmap_physical_pars_fragment:mp,envmap_vertex:rp,fog_vertex:sp,fog_pars_vertex:ap,fog_fragment:op,fog_pars_fragment:lp,gradientmap_pars_fragment:cp,lightmap_fragment:up,lightmap_pars_fragment:hp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:dp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:_p,lights_phong_fragment:vp,lights_phong_pars_fragment:xp,lights_physical_fragment:yp,lights_physical_pars_fragment:Sp,lights_fragment_begin:Mp,lights_fragment_maps:bp,lights_fragment_end:Ep,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Ap,logdepthbuf_vertex:Cp,map_fragment:Rp,map_pars_fragment:Lp,map_particle_fragment:Pp,map_particle_pars_fragment:Up,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Ip,morphcolor_vertex:Fp,morphnormal_vertex:Op,morphtarget_pars_vertex:Np,morphtarget_vertex:Bp,normal_fragment_begin:kp,normal_fragment_maps:zp,normal_pars_fragment:Gp,normal_pars_vertex:Hp,normal_vertex:Vp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:qp,opaque_fragment:Kp,packing:Jp,premultiplied_alpha_fragment:Zp,project_vertex:Qp,dithering_fragment:$p,dithering_pars_fragment:em,roughnessmap_fragment:tm,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:rm,shadowmap_vertex:sm,shadowmask_pars_fragment:am,skinbase_vertex:om,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:um,specularmap_fragment:hm,specularmap_pars_fragment:fm,tonemapping_fragment:dm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:_m,uv_pars_vertex:vm,uv_vertex:xm,worldpos_vertex:ym,background_vert:Sm,background_frag:Mm,backgroundCube_vert:bm,backgroundCube_frag:Em,cube_vert:Tm,cube_frag:wm,depth_vert:Am,depth_frag:Cm,distanceRGBA_vert:Rm,distanceRGBA_frag:Lm,equirect_vert:Pm,equirect_frag:Um,linedashed_vert:Dm,linedashed_frag:Im,meshbasic_vert:Fm,meshbasic_frag:Om,meshlambert_vert:Nm,meshlambert_frag:Bm,meshmatcap_vert:km,meshmatcap_frag:zm,meshnormal_vert:Gm,meshnormal_frag:Hm,meshphong_vert:Vm,meshphong_frag:Wm,meshphysical_vert:Xm,meshphysical_frag:Ym,meshtoon_vert:jm,meshtoon_frag:qm,points_vert:Km,points_frag:Jm,shadow_vert:Zm,shadow_frag:Qm,sprite_vert:$m,sprite_frag:eg},De={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},vn={basic:{uniforms:Rt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Rt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Rt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Rt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Rt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Rt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Rt([De.points,De.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Rt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Rt([De.common,De.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Rt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Rt([De.sprite,De.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Rt([De.common,De.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Rt([De.lights,De.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};vn.physical={uniforms:Rt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Cs={r:0,b:0,g:0};function tg(r,e,t,i,n,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(p,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const x=r.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ta)?(u===void 0&&(u=new wt(new Zn(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:or(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=v.colorSpace!==rt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new wt(new ur(2,2),new gi({name:"BackgroundMaterial",uniforms:or(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=v.colorSpace!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Cs,Hu(r)),i.buffers.color.setClear(Cs.r,Cs.g,Cs.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function ng(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(I,B,X,H,j){let V=!1;if(o){const k=_(H,X,B);c!==k&&(c=k,d(c.object)),V=m(I,H,X,j),V&&y(I,H,X,j)}else{const k=B.wireframe===!0;(c.geometry!==H.id||c.program!==X.id||c.wireframe!==k)&&(c.geometry=H.id,c.program=X.id,c.wireframe=k,V=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,F(I,B,X,H),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function f(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(I){return i.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,B,X){const H=X.wireframe===!0;let j=a[I.id];j===void 0&&(j={},a[I.id]=j);let V=j[B.id];V===void 0&&(V={},j[B.id]=V);let k=V[H];return k===void 0&&(k=p(f()),V[H]=k),k}function p(I){const B=[],X=[],H=[];for(let j=0;j<n;j++)B[j]=0,X[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:H,object:I,attributes:{},index:null}}function m(I,B,X,H){const j=c.attributes,V=B.attributes;let k=0;const A=X.getAttributes();for(const D in A)if(A[D].location>=0){const Y=j[D];let q=V[D];if(q===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),Y===void 0||Y.attribute!==q||q&&Y.data!==q.data)return!0;k++}return c.attributesNum!==k||c.index!==H}function y(I,B,X,H){const j={},V=B.attributes;let k=0;const A=X.getAttributes();for(const D in A)if(A[D].location>=0){let Y=V[D];Y===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));const q={};q.attribute=Y,Y&&Y.data&&(q.data=Y.data),j[D]=q,k++}c.attributes=j,c.attributesNum=k,c.index=H}function v(){const I=c.newAttributes;for(let B=0,X=I.length;B<X;B++)I[B]=0}function x(I){M(I,0)}function M(I,B){const X=c.newAttributes,H=c.enabledAttributes,j=c.attributeDivisors;X[I]=1,H[I]===0&&(r.enableVertexAttribArray(I),H[I]=1),j[I]!==B&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),j[I]=B)}function w(){const I=c.newAttributes,B=c.enabledAttributes;for(let X=0,H=B.length;X<H;X++)B[X]!==I[X]&&(r.disableVertexAttribArray(X),B[X]=0)}function T(I,B,X,H,j,V,k){k===!0?r.vertexAttribIPointer(I,B,X,j,V):r.vertexAttribPointer(I,B,X,H,j,V)}function F(I,B,X,H){if(i.isWebGL2===!1&&(I.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=H.attributes,V=X.getAttributes(),k=B.defaultAttributeValues;for(const A in V){const D=V[A];if(D.location>=0){let K=j[A];if(K===void 0&&(A==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),A==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const Y=K.normalized,q=K.itemSize,ce=t.get(K);if(ce===void 0)continue;const Q=ce.buffer,ie=ce.type,we=ce.bytesPerElement,Ie=i.isWebGL2===!0&&(ie===r.INT||ie===r.UNSIGNED_INT||K.gpuType===wu);if(K.isInterleavedBufferAttribute){const me=K.data,R=me.stride,xe=K.offset;if(me.isInstancedInterleavedBuffer){for(let $=0;$<D.locationSize;$++)M(D.location+$,me.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let $=0;$<D.locationSize;$++)x(D.location+$);r.bindBuffer(r.ARRAY_BUFFER,Q);for(let $=0;$<D.locationSize;$++)T(D.location+$,q/D.locationSize,ie,Y,R*we,(xe+q/D.locationSize*$)*we,Ie)}else{if(K.isInstancedBufferAttribute){for(let me=0;me<D.locationSize;me++)M(D.location+me,K.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<D.locationSize;me++)x(D.location+me);r.bindBuffer(r.ARRAY_BUFFER,Q);for(let me=0;me<D.locationSize;me++)T(D.location+me,q/D.locationSize,ie,Y,q*we,q/D.locationSize*me*we,Ie)}}else if(k!==void 0){const Y=k[A];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(D.location,Y);break;case 3:r.vertexAttrib3fv(D.location,Y);break;case 4:r.vertexAttrib4fv(D.location,Y);break;default:r.vertexAttrib1fv(D.location,Y)}}}}w()}function E(){U();for(const I in a){const B=a[I];for(const X in B){const H=B[X];for(const j in H)g(H[j].object),delete H[j];delete B[X]}delete a[I]}}function S(I){if(a[I.id]===void 0)return;const B=a[I.id];for(const X in B){const H=B[X];for(const j in H)g(H[j].object),delete H[j];delete B[X]}delete a[I.id]}function G(I){for(const B in a){const X=a[B];if(X[I.id]===void 0)continue;const H=X[I.id];for(const j in H)g(H[j].object),delete H[j];delete X[I.id]}}function U(){L(),u=!0,c!==l&&(c=l,d(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:x,disableUnusedAttributes:w}}function ig(r,e,t,i){const n=i.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(n)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function rg(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=o||e.has("OES_texture_float"),M=v&&x,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:w}}function sg(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new Wn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!n||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,v=y*4;let x=m.clippingState||null;l.value=x,x=u(g,f,v,d);for(let M=0;M!==v;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ag(r){let e=new WeakMap;function t(o,a){return a===so?o.mapping=rr:a===ao&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===so||a===ao)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yd(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Io extends Wu{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,ac=[.125,.215,.35,.446,.526,.582],oi=20,Ga=new Io,oc=new Xe;let Ha=null;const ai=(1+Math.sqrt(5))/2,Hi=1/ai,lc=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,ai,Hi),new W(0,ai,-Hi),new W(Hi,0,ai),new W(-Hi,0,ai),new W(ai,Hi,0),new W(-ai,Hi,0)];class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Ha=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:jr,format:un,colorSpace:yn,depthBuffer:!1},n=uc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=og(s)),this._blurMaterial=lg(s,e,t)}return n}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,i,n){const a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(oc),u.toneMapping=qn,u.autoClear=!1;const d=new es({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new wt(new Zn,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(oc),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Rs(n,y*v,m>2?v:0,v,v),u.setRenderTarget(n),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===rr||e.mapping===sr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ga)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=lc[(n-1)%lc.length];this._blur(e,n-1,n,s,o)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*oi-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):oi;p>oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${oi}`);const m=[];let y=0;for(let T=0;T<oi;++T){const F=T/_,E=Math.exp(-F*F/2);m.push(E),T===0?y+=E:T<p&&(y+=2*E)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[n],M=3*x*(n>v-Ji?n-v+Ji:0),w=4*(this._cubeSize-x);Rs(t,M,w,3*x,2*x),l.setRenderTarget(t),l.render(h,Ga)}}function og(r){const e=[],t=[],i=[];let n=r;const s=r-Ji+1+ac.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>r-Ji?l=ac[o-r+Ji-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),v=new Float32Array(p*g*d),x=new Float32Array(m*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,F=w>2?0:-1,E=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];y.set(E,_*g*w),v.set(f,p*g*w);const S=[w,w,w,w,w,w];x.set(S,m*g*w)}const M=new Wt;M.setAttribute("position",new hn(y,_)),M.setAttribute("uv",new hn(v,p)),M.setAttribute("faceIndex",new hn(x,m)),e.push(M),n>Ji&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uc(r,e,t){const i=new pi(r,e,t);return i.texture.mapping=ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function lg(r,e,t){const i=new Float32Array(oi),n=new W(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function hc(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function fc(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Fo(){return`

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
	`}function cg(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===so||l===ao,u=l===rr||l===sr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new cc(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&n(h)){t===null&&(t=new cc(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ug(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function hg(r,e,t,i){const n={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete n[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,x=y.length;v<x;v+=3){const M=y[v+0],w=y[v+1],T=y[v+2];f.push(M,w,w,T,T,M)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const M=v+0,w=v+1,T=v+2;f.push(M,w,w,T,T,M)}}else return;const p=new(Iu(f)?Gu:zu)(f,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function fg(r,e,t,i){const n=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){r.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let _,p;if(n)_=r,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function dg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function pg(r,e){return r[0]-e[0]}function mg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function gg(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let B=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var d=B;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let E=0;v===!0&&(E=1),x===!0&&(E=2),M===!0&&(E=3);let S=u.attributes.position.count*E,G=1;S>e.maxTextureSize&&(G=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const U=new Float32Array(S*G*4*_),L=new Nu(U,S,G,_);L.type=Yn,L.needsUpdate=!0;const I=E*4;for(let X=0;X<_;X++){const H=w[X],j=T[X],V=F[X],k=S*G*4*X;for(let A=0;A<H.count;A++){const D=A*I;v===!0&&(o.fromBufferAttribute(H,A),U[k+D+0]=o.x,U[k+D+1]=o.y,U[k+D+2]=o.z,U[k+D+3]=0),x===!0&&(o.fromBufferAttribute(j,A),U[k+D+4]=o.x,U[k+D+5]=o.y,U[k+D+6]=o.z,U[k+D+7]=0),M===!0&&(o.fromBufferAttribute(V,A),U[k+D+8]=o.x,U[k+D+9]=o.y,U[k+D+10]=o.z,U[k+D+11]=V.itemSize===4?o.w:1)}}p={count:_,texture:L,size:new Le(S,G)},s.set(u,p),u.addEventListener("dispose",B)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<g;x++){const M=_[x];M[0]=x,M[1]=f[x]}_.sort(mg);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(pg);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const M=a[x],w=M[0],T=M[1];w!==Number.MAX_SAFE_INTEGER&&T?(p&&u.getAttribute("morphTarget"+x)!==p[w]&&u.setAttribute("morphTarget"+x,p[w]),m&&u.getAttribute("morphNormal"+x)!==m[w]&&u.setAttribute("morphNormal"+x,m[w]),n[x]=T,y+=T):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),n[x]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function _g(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ju=new Nt,qu=new Nu,Ku=new rd,Ju=new Xu,dc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),_c=new Float32Array(4);function hr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=dc[n];if(s===void 0&&(s=new Float32Array(n),dc[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function pt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function mt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ra(r,e){let t=pc[e];t===void 0&&(t=new Int32Array(e),pc[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function vg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2fv(this.addr,e),mt(t,e)}}function yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;r.uniform3fv(this.addr,e),mt(t,e)}}function Sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4fv(this.addr,e),mt(t,e)}}function Mg(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;_c.set(i),r.uniformMatrix2fv(this.addr,!1,_c),mt(t,i)}}function bg(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;gc.set(i),r.uniformMatrix3fv(this.addr,!1,gc),mt(t,i)}}function Eg(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;mc.set(i),r.uniformMatrix4fv(this.addr,!1,mc),mt(t,i)}}function Tg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2iv(this.addr,e),mt(t,e)}}function Ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3iv(this.addr,e),mt(t,e)}}function Cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4iv(this.addr,e),mt(t,e)}}function Rg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2uiv(this.addr,e),mt(t,e)}}function Pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3uiv(this.addr,e),mt(t,e)}}function Ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4uiv(this.addr,e),mt(t,e)}}function Dg(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||ju,n)}function Ig(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ku,n)}function Fg(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ju,n)}function Og(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||qu,n)}function Ng(r){switch(r){case 5126:return vg;case 35664:return xg;case 35665:return yg;case 35666:return Sg;case 35674:return Mg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Cg;case 5125:return Rg;case 36294:return Lg;case 36295:return Pg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}function Bg(r,e){r.uniform1fv(this.addr,e)}function kg(r,e){const t=hr(e,this.size,2);r.uniform2fv(this.addr,t)}function zg(r,e){const t=hr(e,this.size,3);r.uniform3fv(this.addr,t)}function Gg(r,e){const t=hr(e,this.size,4);r.uniform4fv(this.addr,t)}function Hg(r,e){const t=hr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Vg(r,e){const t=hr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Wg(r,e){const t=hr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Xg(r,e){r.uniform1iv(this.addr,e)}function Yg(r,e){r.uniform2iv(this.addr,e)}function jg(r,e){r.uniform3iv(this.addr,e)}function qg(r,e){r.uniform4iv(this.addr,e)}function Kg(r,e){r.uniform1uiv(this.addr,e)}function Jg(r,e){r.uniform2uiv(this.addr,e)}function Zg(r,e){r.uniform3uiv(this.addr,e)}function Qg(r,e){r.uniform4uiv(this.addr,e)}function $g(r,e,t){const i=this.cache,n=e.length,s=ra(t,n);pt(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||ju,s[o])}function e_(r,e,t){const i=this.cache,n=e.length,s=ra(t,n);pt(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Ku,s[o])}function t_(r,e,t){const i=this.cache,n=e.length,s=ra(t,n);pt(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Ju,s[o])}function n_(r,e,t){const i=this.cache,n=e.length,s=ra(t,n);pt(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||qu,s[o])}function i_(r){switch(r){case 5126:return Bg;case 35664:return kg;case 35665:return zg;case 35666:return Gg;case 35674:return Hg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return Yg;case 35668:case 35672:return jg;case 35669:case 35673:return qg;case 5125:return Kg;case 36294:return Jg;case 36295:return Zg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}class r_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Ng(t.type)}}class s_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=i_(t.type)}}class a_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function vc(r,e){r.seq.push(e),r.map[e.id]=e}function o_(r,e,t){const i=r.name,n=i.length;for(Va.lastIndex=0;;){const s=Va.exec(i),o=Va.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){vc(t,c===void 0?new r_(a,r,e):new s_(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new a_(a),vc(t,h)),t=h}}}class Hs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);o_(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function xc(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let l_=0;function c_(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function u_(r){switch(r){case yn:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function yc(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+c_(r.getShaderSource(e),o)}else return n}function h_(r,e){const t=u_(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function f_(r,e){let t;switch(e){case lf:t="Linear";break;case cf:t="Reinhard";break;case uf:t="OptimizedCineon";break;case hf:t="ACESFilmic";break;case ff:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function d_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ur).join(`
`)}function p_(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function m_(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ur(r){return r!==""}function Sc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(r){return r.replace(g_,v_)}const __=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function v_(r,e){let t=Je[e];if(t===void 0){const i=__.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ho(t)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(r){return r.replace(x_,y_)}function y_(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ec(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function M_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case rr:case sr:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function E_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ea:e="ENVMAP_BLENDING_MULTIPLY";break;case af:e="ENVMAP_BLENDING_MIX";break;case of:e="ENVMAP_BLENDING_ADD";break}return e}function T_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function w_(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=S_(t),c=M_(t),u=b_(t),h=E_(t),f=T_(t),d=t.isWebGL2?"":d_(t),g=p_(s),_=n.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),p.length>0&&(p+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`)):(p=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),m=[d,Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Je.tonemapping_pars_fragment:"",t.toneMapping!==qn?f_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,h_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),o=ho(o),o=Sc(o,t),o=Mc(o,t),a=ho(a),a=Sc(a,t),a=Mc(a,t),o=bc(o),a=bc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+o,x=y+m+a,M=xc(n,n.VERTEX_SHADER,v),w=xc(n,n.FRAGMENT_SHADER,x);if(n.attachShader(_,M),n.attachShader(_,w),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_),r.debug.checkShaderErrors){const E=n.getProgramInfoLog(_).trim(),S=n.getShaderInfoLog(M).trim(),G=n.getShaderInfoLog(w).trim();let U=!0,L=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,M,w);else{const I=yc(n,M,"vertex"),B=yc(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+I+`
`+B)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(S===""||G==="")&&(L=!1);L&&(this.diagnostics={runnable:U,programLog:E,vertexShader:{log:S,prefix:p},fragmentShader:{log:G,prefix:m}})}n.deleteShader(M),n.deleteShader(w);let T;this.getUniforms=function(){return T===void 0&&(T=new Hs(n,_)),T};let F;return this.getAttributes=function(){return F===void 0&&(F=m_(n,_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}let A_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new R_(e),t.set(e,i)),i}}class R_{constructor(e){this.id=A_++,this.code=e,this.usedTimes=0}}function L_(r,e,t,i,n,s,o){const a=new Bu,l=new C_,c=[],u=n.isWebGL2,h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function p(E,S,G,U,L){const I=U.fog,B=L.geometry,X=E.isMeshStandardMaterial?U.environment:null,H=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),j=H&&H.mapping===ta?H.image.height:null,V=g[E.type];E.precision!==null&&(d=n.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const k=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,A=k!==void 0?k.length:0;let D=0;B.morphAttributes.position!==void 0&&(D=1),B.morphAttributes.normal!==void 0&&(D=2),B.morphAttributes.color!==void 0&&(D=3);let K,Y,q,ce;if(V){const Ye=vn[V];K=Ye.vertexShader,Y=Ye.fragmentShader}else K=E.vertexShader,Y=E.fragmentShader,l.update(E),q=l.getVertexShaderID(E),ce=l.getFragmentShaderID(E);const Q=r.getRenderTarget(),ie=L.isInstancedMesh===!0,we=!!E.map,Ie=!!E.matcap,me=!!H,R=!!E.aoMap,xe=!!E.lightMap,$=!!E.bumpMap,ue=!!E.normalMap,le=!!E.displacementMap,Pe=!!E.emissiveMap,ae=!!E.metalnessMap,ge=!!E.roughnessMap,be=E.anisotropy>0,re=E.clearcoat>0,Ue=E.iridescence>0,C=E.sheen>0,b=E.transmission>0,z=be&&!!E.anisotropyMap,Se=re&&!!E.clearcoatMap,ee=re&&!!E.clearcoatNormalMap,fe=re&&!!E.clearcoatRoughnessMap,Ae=Ue&&!!E.iridescenceMap,ve=Ue&&!!E.iridescenceThicknessMap,J=C&&!!E.sheenColorMap,O=C&&!!E.sheenRoughnessMap,se=!!E.specularMap,ye=!!E.specularColorMap,he=!!E.specularIntensityMap,Ee=b&&!!E.transmissionMap,Fe=b&&!!E.thicknessMap,Ge=!!E.gradientMap,N=!!E.alphaMap,_e=E.alphaTest>0,Z=!!E.alphaHash,Ce=!!E.extensions,Me=!!B.attributes.uv1,Oe=!!B.attributes.uv2,He=!!B.attributes.uv3;let Be=qn;return E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Be=r.toneMapping),{isWebGL2:u,shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:K,fragmentShader:Y,defines:E.defines,customVertexShaderID:q,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,instancing:ie,instancingColor:ie&&L.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:yn,map:we,matcap:Ie,envMap:me,envMapMode:me&&H.mapping,envMapCubeUVHeight:j,aoMap:R,lightMap:xe,bumpMap:$,normalMap:ue,displacementMap:f&&le,emissiveMap:Pe,normalMapObjectSpace:ue&&E.normalMapType===Ef,normalMapTangentSpace:ue&&E.normalMapType===Lo,metalnessMap:ae,roughnessMap:ge,anisotropy:be,anisotropyMap:z,clearcoat:re,clearcoatMap:Se,clearcoatNormalMap:ee,clearcoatRoughnessMap:fe,iridescence:Ue,iridescenceMap:Ae,iridescenceThicknessMap:ve,sheen:C,sheenColorMap:J,sheenRoughnessMap:O,specularMap:se,specularColorMap:ye,specularIntensityMap:he,transmission:b,transmissionMap:Ee,thicknessMap:Fe,gradientMap:Ge,opaque:E.transparent===!1&&E.blending===tr,alphaMap:N,alphaTest:_e,alphaHash:Z,combine:E.combine,mapUv:we&&_(E.map.channel),aoMapUv:R&&_(E.aoMap.channel),lightMapUv:xe&&_(E.lightMap.channel),bumpMapUv:$&&_(E.bumpMap.channel),normalMapUv:ue&&_(E.normalMap.channel),displacementMapUv:le&&_(E.displacementMap.channel),emissiveMapUv:Pe&&_(E.emissiveMap.channel),metalnessMapUv:ae&&_(E.metalnessMap.channel),roughnessMapUv:ge&&_(E.roughnessMap.channel),anisotropyMapUv:z&&_(E.anisotropyMap.channel),clearcoatMapUv:Se&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:J&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:O&&_(E.sheenRoughnessMap.channel),specularMapUv:se&&_(E.specularMap.channel),specularColorMapUv:ye&&_(E.specularColorMap.channel),specularIntensityMapUv:he&&_(E.specularIntensityMap.channel),transmissionMapUv:Ee&&_(E.transmissionMap.channel),thicknessMapUv:Fe&&_(E.thicknessMap.channel),alphaMapUv:N&&_(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ue||be),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:Oe,vertexUv3s:He,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(we||N),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:D,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,useLegacyLights:r._useLegacyLights,decodeVideoTexture:we&&E.map.isVideoTexture===!0&&E.map.colorSpace===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ln,flipSided:E.side===Pt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ce&&E.extensions.derivatives===!0,extensionFragDepth:Ce&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)S.push(G),S.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(y(S,E),v(S,E),S.push(r.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function y(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function x(E){const S=g[E.type];let G;if(S){const U=vn[S];G=Vu.clone(U.uniforms)}else G=E.uniforms;return G}function M(E,S){let G;for(let U=0,L=c.length;U<L;U++){const I=c[U];if(I.cacheKey===S){G=I,++G.usedTimes;break}}return G===void 0&&(G=new w_(r,S,E,s),c.push(G)),G}function w(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function T(E){l.remove(E)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:F}}function P_(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function U_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Tc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wc(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(h,f,d,g,_,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||U_),i.length>1&&i.sort(f||Tc),n.length>1&&n.sort(f||Tc)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:u,sort:c}}function D_(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new wc,r.set(i,[o])):n>=s.length?(o=new wc,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function I_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Xe};break;case"SpotLight":t={position:new W,direction:new W,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function F_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let O_=0;function N_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function B_(r,e){const t=new I_,i=F_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)n.probe.push(new W);const s=new W,o=new ot,a=new ot;function l(u,h){let f=0,d=0,g=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let _=0,p=0,m=0,y=0,v=0,x=0,M=0,w=0,T=0,F=0;u.sort(N_);const E=h===!0?Math.PI:1;for(let G=0,U=u.length;G<U;G++){const L=u[G],I=L.color,B=L.intensity,X=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=I.r*B*E,d+=I.g*B*E,g+=I.b*B*E;else if(L.isLightProbe)for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],B);else if(L.isDirectionalLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const V=L.shadow,k=i.get(L);k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[_]=k,n.directionalShadowMap[_]=H,n.directionalShadowMatrix[_]=L.shadow.matrix,x++}n.directional[_]=j,_++}else if(L.isSpotLight){const j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(I).multiplyScalar(B*E),j.distance=X,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[m]=j;const V=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,V.updateMatrices(L),L.castShadow&&F++),n.spotLightMatrix[m]=V.matrix,L.castShadow){const k=i.get(L);k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[m]=k,n.spotShadowMap[m]=H,w++}m++}else if(L.isRectAreaLight){const j=t.get(L);j.color.copy(I).multiplyScalar(B),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=j,y++}else if(L.isPointLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*E),j.distance=L.distance,j.decay=L.decay,L.castShadow){const V=L.shadow,k=i.get(L);k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=L.shadow.matrix,M++}n.point[p]=j,p++}else if(L.isHemisphereLight){const j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(B*E),j.groundColor.copy(L.groundColor).multiplyScalar(B*E),n.hemi[v]=j,v++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=g;const S=n.hash;(S.directionalLength!==_||S.pointLength!==p||S.spotLength!==m||S.rectAreaLength!==y||S.hemiLength!==v||S.numDirectionalShadows!==x||S.numPointShadows!==M||S.numSpotShadows!==w||S.numSpotMaps!==T)&&(n.directional.length=_,n.spot.length=m,n.rectArea.length=y,n.point.length=p,n.hemi.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+T-F,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=F,S.directionalLength=_,S.pointLength=p,S.spotLength=m,S.rectAreaLength=y,S.hemiLength=v,S.numDirectionalShadows=x,S.numPointShadows=M,S.numSpotShadows=w,S.numSpotMaps=T,n.version=O_++)}function c(u,h){let f=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const x=u[y];if(x.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(x.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(x.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const M=n.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:n}}function Ac(r,e){const t=new B_(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function o(h){i.push(h)}function a(h){n.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function k_(r,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ac(r,e),t.set(s,[l])):o>=a.length?(l=new Ac(r,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class Zu extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qu extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`;function H_(r,e,t){let i=new Do;const n=new Le,s=new Le,o=new ut,a=new Zu({depthPacking:Du}),l=new Qu,c={},u=t.maxTextureSize,h={[Fn]:Pt,[Pt]:Fn,[ln]:ln},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:z_,fragmentShader:G_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let m=this.type;this.render=function(M,w,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const F=r.getRenderTarget(),E=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),G=r.state;G.setBlending(jn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const U=m!==Un&&this.type===Un,L=m===Un&&this.type!==Un;for(let I=0,B=M.length;I<B;I++){const X=M[I],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const j=H.getFrameExtents();if(n.multiply(j),s.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/j.x),n.x=s.x*j.x,H.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/j.y),n.y=s.y*j.y,H.mapSize.y=s.y)),H.map===null||U===!0||L===!0){const k=this.type!==Un?{minFilter:Lt,magFilter:Lt}:{};H.map!==null&&H.map.dispose(),H.map=new pi(n.x,n.y,k),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const V=H.getViewportCount();for(let k=0;k<V;k++){const A=H.getViewport(k);o.set(s.x*A.x,s.y*A.y,s.x*A.z,s.y*A.w),G.viewport(o),H.updateMatrices(X,k),i=H.getFrustum(),x(w,T,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Un&&y(H,T),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(F,E,S)};function y(M,w){const T=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new pi(n.x,n.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,T,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,T,d,_,null)}function v(M,w,T,F){let E=null;const S=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(S!==void 0)E=S;else if(E=T.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=E.uuid,U=w.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let I=L[U];I===void 0&&(I=E.clone(),L[U]=I),E=I}if(E.visible=w.visible,E.wireframe=w.wireframe,F===Un?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=r.properties.get(E);G.light=T}return E}function x(M,w,T,F,E){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Un)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const U=e.update(M),L=M.material;if(Array.isArray(L)){const I=U.groups;for(let B=0,X=I.length;B<X;B++){const H=I[B],j=L[H.materialIndex];if(j&&j.visible){const V=v(M,j,F,E);r.renderBufferDirect(T,null,U,V,M,H)}}}else if(L.visible){const I=v(M,L,F,E);r.renderBufferDirect(T,null,U,I,M,null)}}const G=M.children;for(let U=0,L=G.length;U<L;U++)x(G[U],w,T,F,E)}}function V_(r,e,t){const i=t.isWebGL2;function n(){let N=!1;const _e=new ut;let Z=null;const Ce=new ut(0,0,0,0);return{setMask:function(Me){Z!==Me&&!N&&(r.colorMask(Me,Me,Me,Me),Z=Me)},setLocked:function(Me){N=Me},setClear:function(Me,Oe,He,Be,ze){ze===!0&&(Me*=Be,Oe*=Be,He*=Be),_e.set(Me,Oe,He,Be),Ce.equals(_e)===!1&&(r.clearColor(Me,Oe,He,Be),Ce.copy(_e))},reset:function(){N=!1,Z=null,Ce.set(-1,0,0,0)}}}function s(){let N=!1,_e=null,Z=null,Ce=null;return{setTest:function(Me){Me?Q(r.DEPTH_TEST):ie(r.DEPTH_TEST)},setMask:function(Me){_e!==Me&&!N&&(r.depthMask(Me),_e=Me)},setFunc:function(Me){if(Z!==Me){switch(Me){case Qh:r.depthFunc(r.NEVER);break;case $h:r.depthFunc(r.ALWAYS);break;case ef:r.depthFunc(r.LESS);break;case ro:r.depthFunc(r.LEQUAL);break;case tf:r.depthFunc(r.EQUAL);break;case nf:r.depthFunc(r.GEQUAL);break;case rf:r.depthFunc(r.GREATER);break;case sf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=Me}},setLocked:function(Me){N=Me},setClear:function(Me){Ce!==Me&&(r.clearDepth(Me),Ce=Me)},reset:function(){N=!1,_e=null,Z=null,Ce=null}}}function o(){let N=!1,_e=null,Z=null,Ce=null,Me=null,Oe=null,He=null,Be=null,ze=null;return{setTest:function(Ye){N||(Ye?Q(r.STENCIL_TEST):ie(r.STENCIL_TEST))},setMask:function(Ye){_e!==Ye&&!N&&(r.stencilMask(Ye),_e=Ye)},setFunc:function(Ye,tt,Qe){(Z!==Ye||Ce!==tt||Me!==Qe)&&(r.stencilFunc(Ye,tt,Qe),Z=Ye,Ce=tt,Me=Qe)},setOp:function(Ye,tt,Qe){(Oe!==Ye||He!==tt||Be!==Qe)&&(r.stencilOp(Ye,tt,Qe),Oe=Ye,He=tt,Be=Qe)},setLocked:function(Ye){N=Ye},setClear:function(Ye){ze!==Ye&&(r.clearStencil(Ye),ze=Ye)},reset:function(){N=!1,_e=null,Z=null,Ce=null,Me=null,Oe=null,He=null,Be=null,ze=null}}}const a=new n,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,x=null,M=null,w=null,T=null,F=null,E=!1,S=null,G=null,U=null,L=null,I=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=H>=2);let V=null,k={};const A=r.getParameter(r.SCISSOR_BOX),D=r.getParameter(r.VIEWPORT),K=new ut().fromArray(A),Y=new ut().fromArray(D);function q(N,_e,Z,Ce){const Me=new Uint8Array(4),Oe=r.createTexture();r.bindTexture(N,Oe),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<Z;He++)i&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(_e,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(_e+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return Oe}const ce={};ce[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ce[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(r.DEPTH_TEST),l.setFunc(ro),le(!1),Pe(hl),Q(r.CULL_FACE),$(jn);function Q(N){f[N]!==!0&&(r.enable(N),f[N]=!0)}function ie(N){f[N]!==!1&&(r.disable(N),f[N]=!1)}function we(N,_e){return d[N]!==_e?(r.bindFramebuffer(N,_e),d[N]=_e,i&&(N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=_e),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=_e)),!0):!1}function Ie(N,_e){let Z=_,Ce=!1;if(N)if(Z=g.get(_e),Z===void 0&&(Z=[],g.set(_e,Z)),N.isWebGLMultipleRenderTargets){const Me=N.texture;if(Z.length!==Me.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let Oe=0,He=Me.length;Oe<He;Oe++)Z[Oe]=r.COLOR_ATTACHMENT0+Oe;Z.length=Me.length,Ce=!0}}else Z[0]!==r.COLOR_ATTACHMENT0&&(Z[0]=r.COLOR_ATTACHMENT0,Ce=!0);else Z[0]!==r.BACK&&(Z[0]=r.BACK,Ce=!0);Ce&&(t.isWebGL2?r.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function me(N){return p!==N?(r.useProgram(N),p=N,!0):!1}const R={[Xi]:r.FUNC_ADD,[Gh]:r.FUNC_SUBTRACT,[Hh]:r.FUNC_REVERSE_SUBTRACT};if(i)R[ml]=r.MIN,R[gl]=r.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(R[ml]=N.MIN_EXT,R[gl]=N.MAX_EXT)}const xe={[Vh]:r.ZERO,[Wh]:r.ONE,[Xh]:r.SRC_COLOR,[bu]:r.SRC_ALPHA,[Zh]:r.SRC_ALPHA_SATURATE,[Kh]:r.DST_COLOR,[jh]:r.DST_ALPHA,[Yh]:r.ONE_MINUS_SRC_COLOR,[Eu]:r.ONE_MINUS_SRC_ALPHA,[Jh]:r.ONE_MINUS_DST_COLOR,[qh]:r.ONE_MINUS_DST_ALPHA};function $(N,_e,Z,Ce,Me,Oe,He,Be){if(N===jn){m===!0&&(ie(r.BLEND),m=!1);return}if(m===!1&&(Q(r.BLEND),m=!0),N!==zh){if(N!==y||Be!==E){if((v!==Xi||w!==Xi)&&(r.blendEquation(r.FUNC_ADD),v=Xi,w=Xi),Be)switch(N){case tr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fl:r.blendFunc(r.ONE,r.ONE);break;case dl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case tr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case dl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,M=null,T=null,F=null,y=N,E=Be}return}Me=Me||_e,Oe=Oe||Z,He=He||Ce,(_e!==v||Me!==w)&&(r.blendEquationSeparate(R[_e],R[Me]),v=_e,w=Me),(Z!==x||Ce!==M||Oe!==T||He!==F)&&(r.blendFuncSeparate(xe[Z],xe[Ce],xe[Oe],xe[He]),x=Z,M=Ce,T=Oe,F=He),y=N,E=!1}function ue(N,_e){N.side===ln?ie(r.CULL_FACE):Q(r.CULL_FACE);let Z=N.side===Pt;_e&&(Z=!Z),le(Z),N.blending===tr&&N.transparent===!1?$(jn):$(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Ce=N.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(N){S!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),S=N)}function Pe(N){N!==Nh?(Q(r.CULL_FACE),N!==G&&(N===hl?r.cullFace(r.BACK):N===Bh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ie(r.CULL_FACE),G=N}function ae(N){N!==U&&(X&&r.lineWidth(N),U=N)}function ge(N,_e,Z){N?(Q(r.POLYGON_OFFSET_FILL),(L!==_e||I!==Z)&&(r.polygonOffset(_e,Z),L=_e,I=Z)):ie(r.POLYGON_OFFSET_FILL)}function be(N){N?Q(r.SCISSOR_TEST):ie(r.SCISSOR_TEST)}function re(N){N===void 0&&(N=r.TEXTURE0+B-1),V!==N&&(r.activeTexture(N),V=N)}function Ue(N,_e,Z){Z===void 0&&(V===null?Z=r.TEXTURE0+B-1:Z=V);let Ce=k[Z];Ce===void 0&&(Ce={type:void 0,texture:void 0},k[Z]=Ce),(Ce.type!==N||Ce.texture!==_e)&&(V!==Z&&(r.activeTexture(Z),V=Z),r.bindTexture(N,_e||ce[N]),Ce.type=N,Ce.texture=_e)}function C(){const N=k[V];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(N){K.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function he(N){Y.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function Ee(N,_e){let Z=h.get(_e);Z===void 0&&(Z=new WeakMap,h.set(_e,Z));let Ce=Z.get(N);Ce===void 0&&(Ce=r.getUniformBlockIndex(_e,N.name),Z.set(N,Ce))}function Fe(N,_e){const Ce=h.get(_e).get(N);u.get(_e)!==Ce&&(r.uniformBlockBinding(_e,Ce,N.__bindingPointIndex),u.set(_e,Ce))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},V=null,k={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,x=null,M=null,w=null,T=null,F=null,E=!1,S=null,G=null,U=null,L=null,I=null,K.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Q,disable:ie,bindFramebuffer:we,drawBuffers:Ie,useProgram:me,setBlending:$,setMaterial:ue,setFlipSided:le,setCullFace:Pe,setLineWidth:ae,setPolygonOffset:ge,setScissorTest:be,activeTexture:re,bindTexture:Ue,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:O,texImage3D:se,updateUBOMapping:Ee,uniformBlockBinding:Fe,texStorage2D:ve,texStorage3D:J,texSubImage2D:Se,texSubImage3D:ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ae,scissor:ye,viewport:he,reset:Ge}}function W_(r,e,t,i,n,s,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,h=n.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return m?new OffscreenCanvas(C,b):Js("canvas")}function v(C,b,z,Se){let ee=1;if((C.width>Se||C.height>Se)&&(ee=Se/Math.max(C.width,C.height)),ee<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const fe=b?qs:Math.floor,Ae=fe(ee*C.width),ve=fe(ee*C.height);_===void 0&&(_=y(Ae,ve));const J=z?y(Ae,ve):_;return J.width=Ae,J.height=ve,J.getContext("2d").drawImage(C,0,0,Ae,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ae+"x"+ve+")."),J}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return uo(C.width)&&uo(C.height)}function M(C){return a?!1:C.wrapS!==cn||C.wrapT!==cn||C.minFilter!==Lt&&C.minFilter!==Ot}function w(C,b){return C.generateMipmaps&&b&&C.minFilter!==Lt&&C.minFilter!==Ot}function T(C){r.generateMipmap(C)}function F(C,b,z,Se,ee=!1){if(a===!1)return b;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=b;return b===r.RED&&(z===r.FLOAT&&(fe=r.R32F),z===r.HALF_FLOAT&&(fe=r.R16F),z===r.UNSIGNED_BYTE&&(fe=r.R8)),b===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(fe=r.R8UI),z===r.UNSIGNED_SHORT&&(fe=r.R16UI),z===r.UNSIGNED_INT&&(fe=r.R32UI),z===r.BYTE&&(fe=r.R8I),z===r.SHORT&&(fe=r.R16I),z===r.INT&&(fe=r.R32I)),b===r.RG&&(z===r.FLOAT&&(fe=r.RG32F),z===r.HALF_FLOAT&&(fe=r.RG16F),z===r.UNSIGNED_BYTE&&(fe=r.RG8)),b===r.RGBA&&(z===r.FLOAT&&(fe=r.RGBA32F),z===r.HALF_FLOAT&&(fe=r.RGBA16F),z===r.UNSIGNED_BYTE&&(fe=Se===rt&&ee===!1?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)),(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function E(C,b,z){return w(C,z)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==Ot?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function S(C){return C===Lt||C===_l||C===_a?r.NEAREST:r.LINEAR}function G(C){const b=C.target;b.removeEventListener("dispose",G),L(b),b.isVideoTexture&&g.delete(b)}function U(C){const b=C.target;b.removeEventListener("dispose",U),B(b)}function L(C){const b=i.get(C);if(b.__webglInit===void 0)return;const z=C.source,Se=p.get(z);if(Se){const ee=Se[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(C),Object.keys(Se).length===0&&p.delete(z)}i.remove(C)}function I(C){const b=i.get(C);r.deleteTexture(b.__webglTexture);const z=C.source,Se=p.get(z);delete Se[b.__cacheKey],o.memory.textures--}function B(C){const b=C.texture,z=i.get(C),Se=i.get(b);if(Se.__webglTexture!==void 0&&(r.deleteTexture(Se.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(z.__webglFramebuffer[ee]))for(let fe=0;fe<z.__webglFramebuffer[ee].length;fe++)r.deleteFramebuffer(z.__webglFramebuffer[ee][fe]);else r.deleteFramebuffer(z.__webglFramebuffer[ee]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[ee])}else{if(Array.isArray(z.__webglFramebuffer))for(let ee=0;ee<z.__webglFramebuffer.length;ee++)r.deleteFramebuffer(z.__webglFramebuffer[ee]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,fe=b.length;ee<fe;ee++){const Ae=i.get(b[ee]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(b[ee])}i.remove(b),i.remove(C)}let X=0;function H(){X=0}function j(){const C=X;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),X+=1,C}function V(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function k(C,b){const z=i.get(C);if(C.isVideoTexture&&re(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Se=C.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(z,C,b);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+b)}function A(C,b){const z=i.get(C);if(C.version>0&&z.__version!==C.version){we(z,C,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+b)}function D(C,b){const z=i.get(C);if(C.version>0&&z.__version!==C.version){we(z,C,b);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+b)}function K(C,b){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Ie(z,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+b)}const Y={[oo]:r.REPEAT,[cn]:r.CLAMP_TO_EDGE,[lo]:r.MIRRORED_REPEAT},q={[Lt]:r.NEAREST,[_l]:r.NEAREST_MIPMAP_NEAREST,[_a]:r.NEAREST_MIPMAP_LINEAR,[Ot]:r.LINEAR,[df]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},ce={[wf]:r.NEVER,[Df]:r.ALWAYS,[Af]:r.LESS,[Rf]:r.LEQUAL,[Cf]:r.EQUAL,[Uf]:r.GEQUAL,[Lf]:r.GREATER,[Pf]:r.NOTEQUAL};function Q(C,b,z){if(z?(r.texParameteri(C,r.TEXTURE_WRAP_S,Y[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Y[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Y[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,q[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,q[b.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==cn||b.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,S(b.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Lt&&b.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Se=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Lt||b.minFilter!==_a&&b.minFilter!==Yr||b.type===Yn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===jr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(r.texParameterf(C,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function ie(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",G));const Se=b.source;let ee=p.get(Se);ee===void 0&&(ee={},p.set(Se,ee));const fe=V(b);if(fe!==C.__cacheKey){ee[fe]===void 0&&(ee[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[fe].usedTimes++;const Ae=ee[C.__cacheKey];Ae!==void 0&&(ee[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&I(b)),C.__cacheKey=fe,C.__webglTexture=ee[fe].texture}return z}function we(C,b,z){let Se=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Se=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Se=r.TEXTURE_3D);const ee=ie(C,b),fe=b.source;t.bindTexture(Se,C.__webglTexture,r.TEXTURE0+z);const Ae=i.get(fe);if(fe.version!==Ae.__version||ee===!0){t.activeTexture(r.TEXTURE0+z),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ve=M(b)&&x(b.image)===!1;let J=v(b.image,ve,!1,u);J=Ue(b,J);const O=x(J)||a,se=s.convert(b.format,b.colorSpace);let ye=s.convert(b.type),he=F(b.internalFormat,se,ye,b.colorSpace,b.isVideoTexture);Q(Se,b,O);let Ee;const Fe=b.mipmaps,Ge=a&&b.isVideoTexture!==!0,N=Ae.__version===void 0||ee===!0,_e=E(b,J,O);if(b.isDepthTexture)he=r.DEPTH_COMPONENT,a?b.type===Yn?he=r.DEPTH_COMPONENT32F:b.type===Xn?he=r.DEPTH_COMPONENT24:b.type===ci?he=r.DEPTH24_STENCIL8:he=r.DEPTH_COMPONENT16:b.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ui&&he===r.DEPTH_COMPONENT&&b.type!==Ro&&b.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Xn,ye=s.convert(b.type)),b.format===ar&&he===r.DEPTH_COMPONENT&&(he=r.DEPTH_STENCIL,b.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ci,ye=s.convert(b.type))),N&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,he,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,he,J.width,J.height,0,se,ye,null));else if(b.isDataTexture)if(Fe.length>0&&O){Ge&&N&&t.texStorage2D(r.TEXTURE_2D,_e,he,Fe[0].width,Fe[0].height);for(let Z=0,Ce=Fe.length;Z<Ce;Z++)Ee=Fe[Z],Ge?t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,se,ye,Ee.data):t.texImage2D(r.TEXTURE_2D,Z,he,Ee.width,Ee.height,0,se,ye,Ee.data);b.generateMipmaps=!1}else Ge?(N&&t.texStorage2D(r.TEXTURE_2D,_e,he,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,se,ye,J.data)):t.texImage2D(r.TEXTURE_2D,0,he,J.width,J.height,0,se,ye,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&N&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,he,Fe[0].width,Fe[0].height,J.depth);for(let Z=0,Ce=Fe.length;Z<Ce;Z++)Ee=Fe[Z],b.format!==un?se!==null?Ge?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Ee.width,Ee.height,J.depth,se,Ee.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,he,Ee.width,Ee.height,J.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Ee.width,Ee.height,J.depth,se,ye,Ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,he,Ee.width,Ee.height,J.depth,0,se,ye,Ee.data)}else{Ge&&N&&t.texStorage2D(r.TEXTURE_2D,_e,he,Fe[0].width,Fe[0].height);for(let Z=0,Ce=Fe.length;Z<Ce;Z++)Ee=Fe[Z],b.format!==un?se!==null?Ge?t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,se,Ee.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,he,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Ee.width,Ee.height,se,ye,Ee.data):t.texImage2D(r.TEXTURE_2D,Z,he,Ee.width,Ee.height,0,se,ye,Ee.data)}else if(b.isDataArrayTexture)Ge?(N&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,he,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,ye,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,he,J.width,J.height,J.depth,0,se,ye,J.data);else if(b.isData3DTexture)Ge?(N&&t.texStorage3D(r.TEXTURE_3D,_e,he,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,ye,J.data)):t.texImage3D(r.TEXTURE_3D,0,he,J.width,J.height,J.depth,0,se,ye,J.data);else if(b.isFramebufferTexture){if(N)if(Ge)t.texStorage2D(r.TEXTURE_2D,_e,he,J.width,J.height);else{let Z=J.width,Ce=J.height;for(let Me=0;Me<_e;Me++)t.texImage2D(r.TEXTURE_2D,Me,he,Z,Ce,0,se,ye,null),Z>>=1,Ce>>=1}}else if(Fe.length>0&&O){Ge&&N&&t.texStorage2D(r.TEXTURE_2D,_e,he,Fe[0].width,Fe[0].height);for(let Z=0,Ce=Fe.length;Z<Ce;Z++)Ee=Fe[Z],Ge?t.texSubImage2D(r.TEXTURE_2D,Z,0,0,se,ye,Ee):t.texImage2D(r.TEXTURE_2D,Z,he,se,ye,Ee);b.generateMipmaps=!1}else Ge?(N&&t.texStorage2D(r.TEXTURE_2D,_e,he,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,ye,J)):t.texImage2D(r.TEXTURE_2D,0,he,se,ye,J);w(b,O)&&T(Se),Ae.__version=fe.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ie(C,b,z){if(b.image.length!==6)return;const Se=ie(C,b),ee=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+z);const fe=i.get(ee);if(ee.version!==fe.__version||Se===!0){t.activeTexture(r.TEXTURE0+z),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Ae=b.isCompressedTexture||b.image[0].isCompressedTexture,ve=b.image[0]&&b.image[0].isDataTexture,J=[];for(let Z=0;Z<6;Z++)!Ae&&!ve?J[Z]=v(b.image[Z],!1,!0,c):J[Z]=ve?b.image[Z].image:b.image[Z],J[Z]=Ue(b,J[Z]);const O=J[0],se=x(O)||a,ye=s.convert(b.format,b.colorSpace),he=s.convert(b.type),Ee=F(b.internalFormat,ye,he,b.colorSpace),Fe=a&&b.isVideoTexture!==!0,Ge=fe.__version===void 0||Se===!0;let N=E(b,O,se);Q(r.TEXTURE_CUBE_MAP,b,se);let _e;if(Ae){Fe&&Ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,N,Ee,O.width,O.height);for(let Z=0;Z<6;Z++){_e=J[Z].mipmaps;for(let Ce=0;Ce<_e.length;Ce++){const Me=_e[Ce];b.format!==un?ye!==null?Fe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce,Ee,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce,0,0,Me.width,Me.height,ye,he,Me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce,Ee,Me.width,Me.height,0,ye,he,Me.data)}}}else{_e=b.mipmaps,Fe&&Ge&&(_e.length>0&&N++,t.texStorage2D(r.TEXTURE_CUBE_MAP,N,Ee,J[0].width,J[0].height));for(let Z=0;Z<6;Z++)if(ve){Fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,J[Z].width,J[Z].height,ye,he,J[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ee,J[Z].width,J[Z].height,0,ye,he,J[Z].data);for(let Ce=0;Ce<_e.length;Ce++){const Oe=_e[Ce].image[Z].image;Fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce+1,0,0,Oe.width,Oe.height,ye,he,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce+1,Ee,Oe.width,Oe.height,0,ye,he,Oe.data)}}else{Fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ye,he,J[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ee,ye,he,J[Z]);for(let Ce=0;Ce<_e.length;Ce++){const Me=_e[Ce];Fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce+1,0,0,ye,he,Me.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce+1,Ee,ye,he,Me.image[Z])}}}w(b,se)&&T(r.TEXTURE_CUBE_MAP),fe.__version=ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function me(C,b,z,Se,ee,fe){const Ae=s.convert(z.format,z.colorSpace),ve=s.convert(z.type),J=F(z.internalFormat,Ae,ve,z.colorSpace);if(!i.get(b).__hasExternalTextures){const se=Math.max(1,b.width>>fe),ye=Math.max(1,b.height>>fe);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,fe,J,se,ye,b.depth,0,Ae,ve,null):t.texImage2D(ee,fe,J,se,ye,0,Ae,ve,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),be(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,ee,i.get(z).__webglTexture,0,ge(b)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Se,ee,i.get(z).__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function R(C,b,z){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let Se=r.DEPTH_COMPONENT16;if(z||be(b)){const ee=b.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Yn?Se=r.DEPTH_COMPONENT32F:ee.type===Xn&&(Se=r.DEPTH_COMPONENT24));const fe=ge(b);be(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,Se,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,Se,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,Se,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){const Se=ge(b);z&&be(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,r.DEPTH24_STENCIL8,b.width,b.height):be(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const Se=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0;ee<Se.length;ee++){const fe=Se[ee],Ae=s.convert(fe.format,fe.colorSpace),ve=s.convert(fe.type),J=F(fe.internalFormat,Ae,ve,fe.colorSpace),O=ge(b);z&&be(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,O,J,b.width,b.height):be(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O,J,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,J,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const Se=i.get(b.depthTexture).__webglTexture,ee=ge(b);if(b.depthTexture.format===ui)be(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0);else if(b.depthTexture.format===ar)be(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function $(C){const b=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");xe(b.__webglFramebuffer,C)}else if(z){b.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Se]),b.__webglDepthbuffer[Se]=r.createRenderbuffer(),R(b.__webglDepthbuffer[Se],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),R(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(C,b,z){const Se=i.get(C);b!==void 0&&me(Se.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&$(C)}function le(C){const b=C.texture,z=i.get(C),Se=i.get(b);C.addEventListener("dispose",U),C.isWebGLMultipleRenderTargets!==!0&&(Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture()),Se.__version=b.version,o.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,Ae=x(C)||a;if(ee){z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ve]=[];for(let J=0;J<b.mipmaps.length;J++)z.__webglFramebuffer[ve][J]=r.createFramebuffer()}else z.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ve=0;ve<b.mipmaps.length;ve++)z.__webglFramebuffer[ve]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(fe)if(n.drawBuffers){const ve=C.texture;for(let J=0,O=ve.length;J<O;J++){const se=i.get(ve[J]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&be(C)===!1){const ve=fe?b:[b];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<ve.length;J++){const O=ve[J];z.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const se=s.convert(O.format,O.colorSpace),ye=s.convert(O.type),he=F(O.internalFormat,se,ye,O.colorSpace,C.isXRRenderTarget===!0),Ee=ge(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,he,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,z.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),R(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),Q(r.TEXTURE_CUBE_MAP,b,Ae);for(let ve=0;ve<6;ve++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)me(z.__webglFramebuffer[ve][J],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,J);else me(z.__webglFramebuffer[ve],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);w(b,Ae)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const ve=C.texture;for(let J=0,O=ve.length;J<O;J++){const se=ve[J],ye=i.get(se);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),Q(r.TEXTURE_2D,se,Ae),me(z.__webglFramebuffer,C,se,r.COLOR_ATTACHMENT0+J,r.TEXTURE_2D,0),w(se,Ae)&&T(r.TEXTURE_2D)}t.unbindTexture()}else{let ve=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ve=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,Se.__webglTexture),Q(ve,b,Ae),a&&b.mipmaps&&b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)me(z.__webglFramebuffer[J],C,b,r.COLOR_ATTACHMENT0,ve,J);else me(z.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,ve,0);w(b,Ae)&&T(ve),t.unbindTexture()}C.depthBuffer&&$(C)}function Pe(C){const b=x(C)||a,z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Se=0,ee=z.length;Se<ee;Se++){const fe=z[Se];if(w(fe,b)){const Ae=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ve=i.get(fe).__webglTexture;t.bindTexture(Ae,ve),T(Ae),t.unbindTexture()}}}function ae(C){if(a&&C.samples>0&&be(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],z=C.width,Se=C.height;let ee=r.COLOR_BUFFER_BIT;const fe=[],Ae=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=i.get(C),J=C.isWebGLMultipleRenderTargets===!0;if(J)for(let O=0;O<b.length;O++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let O=0;O<b.length;O++){fe.push(r.COLOR_ATTACHMENT0+O),C.depthBuffer&&fe.push(Ae);const se=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(se===!1&&(C.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),J&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[O]),se===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ae]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ae])),J){const ye=i.get(b[O]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,z,Se,0,0,z,Se,ee,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let O=0;O<b.length;O++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,ve.__webglColorRenderbuffer[O]);const se=i.get(b[O]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function ge(C){return Math.min(h,C.samples)}function be(C){const b=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function re(C){const b=o.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function Ue(C,b){const z=C.colorSpace,Se=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===co||z!==yn&&z!==fi&&(z===rt||z===na?a===!1?e.has("EXT_sRGB")===!0&&Se===un?(C.format=co,C.minFilter=Ot,C.generateMipmaps=!1):b=Fu.sRGBToLinear(b):(Se!==un||ee!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}this.allocateTextureUnit=j,this.resetTextureUnits=H,this.setTexture2D=k,this.setTexture2DArray=A,this.setTexture3D=D,this.setTextureCube=K,this.rebindTextures=ue,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=me,this.useMultisampledRTT=be}const X_=0,ft=1;function Y_(r,e,t){const i=t.isWebGL2;function n(s,o=fi){let a;const l=o===rt||o===na?ft:X_;if(s===Kn)return r.UNSIGNED_BYTE;if(s===Au)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Cu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===pf)return r.BYTE;if(s===mf)return r.SHORT;if(s===Ro)return r.UNSIGNED_SHORT;if(s===wu)return r.INT;if(s===Xn)return r.UNSIGNED_INT;if(s===Yn)return r.FLOAT;if(s===jr)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===gf)return r.ALPHA;if(s===un)return r.RGBA;if(s===_f)return r.LUMINANCE;if(s===vf)return r.LUMINANCE_ALPHA;if(s===ui)return r.DEPTH_COMPONENT;if(s===ar)return r.DEPTH_STENCIL;if(s===co)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===xf)return r.RED;if(s===Ru)return r.RED_INTEGER;if(s===yf)return r.RG;if(s===Lu)return r.RG_INTEGER;if(s===Pu)return r.RGBA_INTEGER;if(s===va||s===xa||s===ya||s===Sa)if(l===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===va)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===va)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vl||s===xl||s===yl||s===Sl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ml||s===bl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ml)return l===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bl)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===El||s===Tl||s===wl||s===Al||s===Cl||s===Rl||s===Ll||s===Pl||s===Ul||s===Dl||s===Il||s===Fl||s===Ol||s===Nl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===El)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tl)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wl)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Al)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cl)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rl)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ll)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pl)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ul)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dl)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Il)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fl)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ol)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nl)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ma||s===Bl||s===kl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ma)return l===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Mf||s===zl||s===Gl||s===Hl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ma)return a.COMPRESSED_RED_RGTC1_EXT;if(s===zl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ci?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class j_ extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Ls=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const q_={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class K_ extends Nt{constructor(e,t,i,n,s,o,a,l,c,u){if(u=u!==void 0?u:ui,u!==ui&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ui&&(i=Xn),i===void 0&&u===ar&&(i=ci),super(null,n,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class J_ extends vi{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const y=[],v=[],x=new Jt;x.layers.enable(1),x.viewport=new ut;const M=new Jt;M.layers.enable(2),M.viewport=new ut;const w=[x,M],T=new j_;T.layers.enable(1),T.layers.enable(2);let F=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let D=y[A];return D===void 0&&(D=new Wa,y[A]=D),D.getTargetRaySpace()},this.getControllerGrip=function(A){let D=y[A];return D===void 0&&(D=new Wa,y[A]=D),D.getGripSpace()},this.getHand=function(A){let D=y[A];return D===void 0&&(D=new Wa,y[A]=D),D.getHandSpace()};function S(A){const D=v.indexOf(A.inputSource);if(D===-1)return;const K=y[D];K!==void 0&&(K.update(A.inputSource,A.frame,c||o),K.dispatchEvent({type:A.type,data:A.inputSource}))}function G(){n.removeEventListener("select",S),n.removeEventListener("selectstart",S),n.removeEventListener("selectend",S),n.removeEventListener("squeeze",S),n.removeEventListener("squeezestart",S),n.removeEventListener("squeezeend",S),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",U);for(let A=0;A<y.length;A++){const D=v[A];D!==null&&(v[A]=null,y[A].disconnect(D))}F=null,E=null,e.setRenderTarget(p),d=null,f=null,h=null,n=null,m=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){s=A,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){a=A,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(A){c=A},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(A){if(n=A,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",S),n.addEventListener("selectstart",S),n.addEventListener("selectend",S),n.addEventListener("squeeze",S),n.addEventListener("squeezestart",S),n.addEventListener("squeezeend",S),n.addEventListener("end",G),n.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const D={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,t,D),n.updateRenderState({baseLayer:d}),m=new pi(d.framebufferWidth,d.framebufferHeight,{format:un,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let D=null,K=null,Y=null;_.depth&&(Y=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=_.stencil?ar:ui,K=_.stencil?ci:Xn);const q={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:s};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(q),n.updateRenderState({layers:[f]}),m=new pi(f.textureWidth,f.textureHeight,{format:un,type:Kn,depthTexture:new K_(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ce=e.properties.get(m);ce.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),k.setContext(n),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(A){for(let D=0;D<A.removed.length;D++){const K=A.removed[D],Y=v.indexOf(K);Y>=0&&(v[Y]=null,y[Y].disconnect(K))}for(let D=0;D<A.added.length;D++){const K=A.added[D];let Y=v.indexOf(K);if(Y===-1){for(let ce=0;ce<y.length;ce++)if(ce>=v.length){v.push(K),Y=ce;break}else if(v[ce]===null){v[ce]=K,Y=ce;break}if(Y===-1)break}const q=y[Y];q&&q.connect(K)}}const L=new W,I=new W;function B(A,D,K){L.setFromMatrixPosition(D.matrixWorld),I.setFromMatrixPosition(K.matrixWorld);const Y=L.distanceTo(I),q=D.projectionMatrix.elements,ce=K.projectionMatrix.elements,Q=q[14]/(q[10]-1),ie=q[14]/(q[10]+1),we=(q[9]+1)/q[5],Ie=(q[9]-1)/q[5],me=(q[8]-1)/q[0],R=(ce[8]+1)/ce[0],xe=Q*me,$=Q*R,ue=Y/(-me+R),le=ue*-me;D.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(le),A.translateZ(ue),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const Pe=Q+ue,ae=ie+ue,ge=xe-le,be=$+(Y-le),re=we*ie/ae*Pe,Ue=Ie*ie/ae*Pe;A.projectionMatrix.makePerspective(ge,be,re,Ue,Pe,ae),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function X(A,D){D===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(D.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(n===null)return;T.near=M.near=x.near=A.near,T.far=M.far=x.far=A.far,(F!==T.near||E!==T.far)&&(n.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,E=T.far);const D=A.parent,K=T.cameras;X(T,D);for(let Y=0;Y<K.length;Y++)X(K[Y],D);K.length===2?B(T,x,M):T.projectionMatrix.copy(x.projectionMatrix),H(A,T,D)};function H(A,D,K){K===null?A.matrix.copy(D.matrixWorld):(A.matrix.copy(K.matrixWorld),A.matrix.invert(),A.matrix.multiply(D.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(D.projectionMatrix),A.projectionMatrixInverse.copy(D.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=qr*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(A){l=A,f!==null&&(f.fixedFoveation=A),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=A)};let j=null;function V(A,D){if(u=D.getViewerPose(c||o),g=D,u!==null){const K=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Y=!1;K.length!==T.cameras.length&&(T.cameras.length=0,Y=!0);for(let q=0;q<K.length;q++){const ce=K[q];let Q=null;if(d!==null)Q=d.getViewport(ce);else{const we=h.getViewSubImage(f,ce);Q=we.viewport,q===0&&(e.setRenderTargetTextures(m,we.colorTexture,f.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(m))}let ie=w[q];ie===void 0&&(ie=new Jt,ie.layers.enable(q),ie.viewport=new ut,w[q]=ie),ie.matrix.fromArray(ce.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Q.x,Q.y,Q.width,Q.height),q===0&&(T.matrix.copy(ie.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Y===!0&&T.cameras.push(ie)}}for(let K=0;K<y.length;K++){const Y=v[K],q=y[K];Y!==null&&q!==void 0&&q.update(Y,D,c||o)}j&&j(A,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}const k=new Yu;k.setAnimationLoop(V),this.setAnimationLoop=function(A){j=A},this.dispose=function(){}}}function Z_(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Hu(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Q_(r,e,t,i){let n={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=n[y.id];x===void 0&&(g(y),x=u(y),n[y.id]=x,y.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(y,M);const w=e.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function u(y){const v=h();y.__bindingPointIndex=v;const x=r.createBuffer(),M=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,M,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=n[y.id],x=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,T=x.length;w<T;w++){const F=x[w];if(d(F,w,M)===!0){const E=F.__offset,S=Array.isArray(F.value)?F.value:[F.value];let G=0;for(let U=0;U<S.length;U++){const L=S[U],I=_(L);typeof L=="number"?(F.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,E+G,F.__data)):L.isMatrix3?(F.__data[0]=L.elements[0],F.__data[1]=L.elements[1],F.__data[2]=L.elements[2],F.__data[3]=L.elements[0],F.__data[4]=L.elements[3],F.__data[5]=L.elements[4],F.__data[6]=L.elements[5],F.__data[7]=L.elements[0],F.__data[8]=L.elements[6],F.__data[9]=L.elements[7],F.__data[10]=L.elements[8],F.__data[11]=L.elements[0]):(L.toArray(F.__data,G),G+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,E,F.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,x){const M=y.value;if(x[v]===void 0){if(typeof M=="number")x[v]=M;else{const w=Array.isArray(M)?M:[M],T=[];for(let F=0;F<w.length;F++)T.push(w[F].clone());x[v]=T}return!0}else if(typeof M=="number"){if(x[v]!==M)return x[v]=M,!0}else{const w=Array.isArray(x[v])?x[v]:[x[v]],T=Array.isArray(M)?M:[M];for(let F=0;F<w.length;F++){const E=w[F];if(E.equals(T[F])===!1)return E.copy(T[F]),!0}}return!1}function g(y){const v=y.uniforms;let x=0;const M=16;let w=0;for(let T=0,F=v.length;T<F;T++){const E=v[T],S={boundary:0,storage:0},G=Array.isArray(E.value)?E.value:[E.value];for(let U=0,L=G.length;U<L;U++){const I=G[U],B=_(I);S.boundary+=B.boundary,S.storage+=B.storage}if(E.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,T>0){w=x%M;const U=M-w;w!==0&&U-S.boundary<0&&(x+=M-w,E.__offset=x)}x+=S.storage}return w=x%M,w>0&&(x+=M-w),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function m(){for(const y in n)r.deleteBuffer(n[y]);o=[],n={},s={}}return{bind:l,update:c,dispose:m}}class Oo{constructor(e={}){const{canvas:t=qf(),context:i=null,depth:n=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=qn,this.toneMappingExposure=1;const v=this;let x=!1,M=0,w=0,T=null,F=-1,E=null;const S=new ut,G=new ut;let U=null;const L=new Xe(0);let I=0,B=t.width,X=t.height,H=1,j=null,V=null;const k=new ut(0,0,B,X),A=new ut(0,0,B,X);let D=!1;const K=new Do;let Y=!1,q=!1,ce=null;const Q=new ot,ie=new Le,we=new W,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return T===null?H:1}let R=i;function xe(P,te){for(let pe=0;pe<P.length;pe++){const ne=P[pe],de=t.getContext(ne,te);if(de!==null)return de}return null}try{const P={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),R===null){const te=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&te.shift(),R=xe(te,P),R===null)throw xe(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let $,ue,le,Pe,ae,ge,be,re,Ue,C,b,z,Se,ee,fe,Ae,ve,J,O,se,ye,he,Ee,Fe;function Ge(){$=new ug(R),ue=new rg(R,$,e),$.init(ue),he=new Y_(R,$,ue),le=new V_(R,$,ue),Pe=new dg(R),ae=new P_,ge=new W_(R,$,le,ae,ue,he,Pe),be=new ag(v),re=new cg(v),Ue=new bd(R,ue),Ee=new ng(R,$,Ue,ue),C=new hg(R,Ue,Pe,Ee),b=new _g(R,C,Ue,Pe),O=new gg(R,ue,ge),Ae=new sg(ae),z=new L_(v,be,re,$,ue,Ee,Ae),Se=new Z_(v,ae),ee=new D_,fe=new k_($,ue),J=new tg(v,be,re,le,b,f,l),ve=new H_(v,b,ue),Fe=new Q_(R,Pe,ue,le),se=new ig(R,$,Pe,ue),ye=new fg(R,$,Pe,ue),Pe.programs=z.programs,v.capabilities=ue,v.extensions=$,v.properties=ae,v.renderLists=ee,v.shadowMap=ve,v.state=le,v.info=Pe}Ge();const N=new J_(v,R);this.xr=N,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=$.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=$.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(B,X,!1))},this.getSize=function(P){return P.set(B,X)},this.setSize=function(P,te,pe=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,X=te,t.width=Math.floor(P*H),t.height=Math.floor(te*H),pe===!0&&(t.style.width=P+"px",t.style.height=te+"px"),this.setViewport(0,0,P,te)},this.getDrawingBufferSize=function(P){return P.set(B*H,X*H).floor()},this.setDrawingBufferSize=function(P,te,pe){B=P,X=te,H=pe,t.width=Math.floor(P*pe),t.height=Math.floor(te*pe),this.setViewport(0,0,P,te)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(k)},this.setViewport=function(P,te,pe,ne){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,te,pe,ne),le.viewport(S.copy(k).multiplyScalar(H).floor())},this.getScissor=function(P){return P.copy(A)},this.setScissor=function(P,te,pe,ne){P.isVector4?A.set(P.x,P.y,P.z,P.w):A.set(P,te,pe,ne),le.scissor(G.copy(A).multiplyScalar(H).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(P){le.setScissorTest(D=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){V=P},this.getClearColor=function(P){return P.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(P=!0,te=!0,pe=!0){let ne=0;if(P){let de=!1;if(T!==null){const Ne=T.texture.format;de=Ne===Pu||Ne===Lu||Ne===Ru}if(de){const Ne=T.texture.type,ke=Ne===Kn||Ne===Xn||Ne===Ro||Ne===ci||Ne===Au||Ne===Cu,Ve=J.getClearColor(),We=J.getClearAlpha(),qe=Ve.r,Re=Ve.g,je=Ve.b;ke?(d[0]=qe,d[1]=Re,d[2]=je,d[3]=We,R.clearBufferuiv(R.COLOR,0,d)):(g[0]=qe,g[1]=Re,g[2]=je,g[3]=We,R.clearBufferiv(R.COLOR,0,g))}else ne|=R.COLOR_BUFFER_BIT}te&&(ne|=R.DEPTH_BUFFER_BIT),pe&&(ne|=R.STENCIL_BUFFER_BIT),R.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),ee.dispose(),fe.dispose(),ae.dispose(),be.dispose(),re.dispose(),b.dispose(),Ee.dispose(),Fe.dispose(),z.dispose(),N.dispose(),N.removeEventListener("sessionstart",Ye),N.removeEventListener("sessionend",tt),ce&&(ce.dispose(),ce=null),Qe.stop()};function _e(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const P=Pe.autoReset,te=ve.enabled,pe=ve.autoUpdate,ne=ve.needsUpdate,de=ve.type;Ge(),Pe.autoReset=P,ve.enabled=te,ve.autoUpdate=pe,ve.needsUpdate=ne,ve.type=de}function Ce(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Me(P){const te=P.target;te.removeEventListener("dispose",Me),Oe(te)}function Oe(P){He(P),ae.remove(P)}function He(P){const te=ae.get(P).programs;te!==void 0&&(te.forEach(function(pe){z.releaseProgram(pe)}),P.isShaderMaterial&&z.releaseShaderCache(P))}this.renderBufferDirect=function(P,te,pe,ne,de,Ne){te===null&&(te=Ie);const ke=de.isMesh&&de.matrixWorld.determinant()<0,Ve=xt(P,te,pe,ne,de);le.setMaterial(ne,ke);let We=pe.index,qe=1;if(ne.wireframe===!0){if(We=C.getWireframeAttribute(pe),We===void 0)return;qe=2}const Re=pe.drawRange,je=pe.attributes.position;let nt=Re.start*qe,$e=(Re.start+Re.count)*qe;Ne!==null&&(nt=Math.max(nt,Ne.start*qe),$e=Math.min($e,(Ne.start+Ne.count)*qe)),We!==null?(nt=Math.max(nt,0),$e=Math.min($e,We.count)):je!=null&&(nt=Math.max(nt,0),$e=Math.min($e,je.count));const yt=$e-nt;if(yt<0||yt===1/0)return;Ee.setup(de,ne,Ve,pe,We);let jt,it=se;if(We!==null&&(jt=Ue.get(We),it=ye,it.setIndex(jt)),de.isMesh)ne.wireframe===!0?(le.setLineWidth(ne.wireframeLinewidth*me()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(de.isLine){let Ke=ne.linewidth;Ke===void 0&&(Ke=1),le.setLineWidth(Ke*me()),de.isLineSegments?it.setMode(R.LINES):de.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else de.isPoints?it.setMode(R.POINTS):de.isSprite&&it.setMode(R.TRIANGLES);if(de.isInstancedMesh)it.renderInstances(nt,yt,de.count);else if(pe.isInstancedBufferGeometry){const Ke=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,On=Math.min(pe.instanceCount,Ke);it.renderInstances(nt,yt,On)}else it.render(nt,yt)},this.compile=function(P,te){function pe(ne,de,Ne){ne.transparent===!0&&ne.side===ln&&ne.forceSinglePass===!1?(ne.side=Pt,ne.needsUpdate=!0,Xt(ne,de,Ne),ne.side=Fn,ne.needsUpdate=!0,Xt(ne,de,Ne),ne.side=ln):Xt(ne,de,Ne)}p=fe.get(P),p.init(),y.push(p),P.traverseVisible(function(ne){ne.isLight&&ne.layers.test(te.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),p.setupLights(v._useLegacyLights),P.traverse(function(ne){const de=ne.material;if(de)if(Array.isArray(de))for(let Ne=0;Ne<de.length;Ne++){const ke=de[Ne];pe(ke,P,ne)}else pe(de,P,ne)}),y.pop(),p=null};let Be=null;function ze(P){Be&&Be(P)}function Ye(){Qe.stop()}function tt(){Qe.start()}const Qe=new Yu;Qe.setAnimationLoop(ze),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(P){Be=P,N.setAnimationLoop(P),P===null?Qe.stop():Qe.start()},N.addEventListener("sessionstart",Ye),N.addEventListener("sessionend",tt),this.render=function(P,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(te),te=N.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,te,T),p=fe.get(P,y.length),p.init(),y.push(p),Q.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),K.setFromProjectionMatrix(Q),q=this.localClippingEnabled,Y=Ae.init(this.clippingPlanes,q),_=ee.get(P,m.length),_.init(),m.push(_),ht(P,te,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,V),this.info.render.frame++,Y===!0&&Ae.beginShadows();const pe=p.state.shadowsArray;if(ve.render(pe,P,te),Y===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(_,P),p.setupLights(v._useLegacyLights),te.isArrayCamera){const ne=te.cameras;for(let de=0,Ne=ne.length;de<Ne;de++){const ke=ne[de];Ut(_,P,ke,ke.viewport)}}else Ut(_,P,te);T!==null&&(ge.updateMultisampleRenderTarget(T),ge.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(v,P,te),Ee.resetDefaultState(),F=-1,E=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ht(P,te,pe,ne){if(P.visible===!1)return;if(P.layers.test(te.layers)){if(P.isGroup)pe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(te);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||K.intersectsSprite(P)){ne&&we.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Q);const ke=b.update(P),Ve=P.material;Ve.visible&&_.push(P,ke,Ve,pe,we.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||K.intersectsObject(P))){const ke=b.update(P),Ve=P.material;if(ne&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),we.copy(P.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),we.copy(ke.boundingSphere.center)),we.applyMatrix4(P.matrixWorld).applyMatrix4(Q)),Array.isArray(Ve)){const We=ke.groups;for(let qe=0,Re=We.length;qe<Re;qe++){const je=We[qe],nt=Ve[je.materialIndex];nt&&nt.visible&&_.push(P,ke,nt,pe,we.z,je)}}else Ve.visible&&_.push(P,ke,Ve,pe,we.z,null)}}const Ne=P.children;for(let ke=0,Ve=Ne.length;ke<Ve;ke++)ht(Ne[ke],te,pe,ne)}function Ut(P,te,pe,ne){const de=P.opaque,Ne=P.transmissive,ke=P.transparent;p.setupLightsView(pe),Y===!0&&Ae.setGlobalState(v.clippingPlanes,pe),Ne.length>0&&pn(de,Ne,te,pe),ne&&le.viewport(S.copy(ne)),de.length>0&&Dt(de,te,pe),Ne.length>0&&Dt(Ne,te,pe),ke.length>0&&Dt(ke,te,pe),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function pn(P,te,pe,ne){const de=ue.isWebGL2;ce===null&&(ce=new pi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?jr:Kn,minFilter:Yr,samples:de?4:0})),v.getDrawingBufferSize(ie),de?ce.setSize(ie.x,ie.y):ce.setSize(qs(ie.x),qs(ie.y));const Ne=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(L),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const ke=v.toneMapping;v.toneMapping=qn,Dt(P,pe,ne),ge.updateMultisampleRenderTarget(ce),ge.updateRenderTargetMipmap(ce);let Ve=!1;for(let We=0,qe=te.length;We<qe;We++){const Re=te[We],je=Re.object,nt=Re.geometry,$e=Re.material,yt=Re.group;if($e.side===ln&&je.layers.test(ne.layers)){const jt=$e.side;$e.side=Pt,$e.needsUpdate=!0,Qt(je,pe,ne,nt,$e,yt),$e.side=jt,$e.needsUpdate=!0,Ve=!0}}Ve===!0&&(ge.updateMultisampleRenderTarget(ce),ge.updateRenderTargetMipmap(ce)),v.setRenderTarget(Ne),v.setClearColor(L,I),v.toneMapping=ke}function Dt(P,te,pe){const ne=te.isScene===!0?te.overrideMaterial:null;for(let de=0,Ne=P.length;de<Ne;de++){const ke=P[de],Ve=ke.object,We=ke.geometry,qe=ne===null?ke.material:ne,Re=ke.group;Ve.layers.test(pe.layers)&&Qt(Ve,te,pe,We,qe,Re)}}function Qt(P,te,pe,ne,de,Ne){P.onBeforeRender(v,te,pe,ne,de,Ne),P.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),de.onBeforeRender(v,te,pe,ne,P,Ne),de.transparent===!0&&de.side===ln&&de.forceSinglePass===!1?(de.side=Pt,de.needsUpdate=!0,v.renderBufferDirect(pe,te,ne,de,P,Ne),de.side=Fn,de.needsUpdate=!0,v.renderBufferDirect(pe,te,ne,de,P,Ne),de.side=ln):v.renderBufferDirect(pe,te,ne,de,P,Ne),P.onAfterRender(v,te,pe,ne,de,Ne)}function Xt(P,te,pe){te.isScene!==!0&&(te=Ie);const ne=ae.get(P),de=p.state.lights,Ne=p.state.shadowsArray,ke=de.state.version,Ve=z.getParameters(P,de.state,Ne,te,pe),We=z.getProgramCacheKey(Ve);let qe=ne.programs;ne.environment=P.isMeshStandardMaterial?te.environment:null,ne.fog=te.fog,ne.envMap=(P.isMeshStandardMaterial?re:be).get(P.envMap||ne.environment),qe===void 0&&(P.addEventListener("dispose",Me),qe=new Map,ne.programs=qe);let Re=qe.get(We);if(Re!==void 0){if(ne.currentProgram===Re&&ne.lightsStateVersion===ke)return Yt(P,Ve),Re}else Ve.uniforms=z.getUniforms(P),P.onBuild(pe,Ve,v),P.onBeforeCompile(Ve,v),Re=z.acquireProgram(Ve,We),qe.set(We,Re),ne.uniforms=Ve.uniforms;const je=ne.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(je.clippingPlanes=Ae.uniform),Yt(P,Ve),ne.needsLights=ns(P),ne.lightsStateVersion=ke,ne.needsLights&&(je.ambientLightColor.value=de.state.ambient,je.lightProbe.value=de.state.probe,je.directionalLights.value=de.state.directional,je.directionalLightShadows.value=de.state.directionalShadow,je.spotLights.value=de.state.spot,je.spotLightShadows.value=de.state.spotShadow,je.rectAreaLights.value=de.state.rectArea,je.ltc_1.value=de.state.rectAreaLTC1,je.ltc_2.value=de.state.rectAreaLTC2,je.pointLights.value=de.state.point,je.pointLightShadows.value=de.state.pointShadow,je.hemisphereLights.value=de.state.hemi,je.directionalShadowMap.value=de.state.directionalShadowMap,je.directionalShadowMatrix.value=de.state.directionalShadowMatrix,je.spotShadowMap.value=de.state.spotShadowMap,je.spotLightMatrix.value=de.state.spotLightMatrix,je.spotLightMap.value=de.state.spotLightMap,je.pointShadowMap.value=de.state.pointShadowMap,je.pointShadowMatrix.value=de.state.pointShadowMatrix);const nt=Re.getUniforms(),$e=Hs.seqWithValue(nt.seq,je);return ne.currentProgram=Re,ne.uniformsList=$e,Re}function Yt(P,te){const pe=ae.get(P);pe.outputColorSpace=te.outputColorSpace,pe.instancing=te.instancing,pe.instancingColor=te.instancingColor,pe.skinning=te.skinning,pe.morphTargets=te.morphTargets,pe.morphNormals=te.morphNormals,pe.morphColors=te.morphColors,pe.morphTargetsCount=te.morphTargetsCount,pe.numClippingPlanes=te.numClippingPlanes,pe.numIntersection=te.numClipIntersection,pe.vertexAlphas=te.vertexAlphas,pe.vertexTangents=te.vertexTangents,pe.toneMapping=te.toneMapping}function xt(P,te,pe,ne,de){te.isScene!==!0&&(te=Ie),ge.resetTextureUnits();const Ne=te.fog,ke=ne.isMeshStandardMaterial?te.environment:null,Ve=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:yn,We=(ne.isMeshStandardMaterial?re:be).get(ne.envMap||ke),qe=ne.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Re=!!pe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!pe.morphAttributes.position,nt=!!pe.morphAttributes.normal,$e=!!pe.morphAttributes.color;let yt=qn;ne.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(yt=v.toneMapping);const jt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,it=jt!==void 0?jt.length:0,Ke=ae.get(ne),On=p.state.lights;if(Y===!0&&(q===!0||P!==E)){const St=P===E&&ne.id===F;Ae.setState(ne,P,St)}let st=!1;ne.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==On.state.version||Ke.outputColorSpace!==Ve||de.isInstancedMesh&&Ke.instancing===!1||!de.isInstancedMesh&&Ke.instancing===!0||de.isSkinnedMesh&&Ke.skinning===!1||!de.isSkinnedMesh&&Ke.skinning===!0||de.isInstancedMesh&&Ke.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&Ke.instancingColor===!1&&de.instanceColor!==null||Ke.envMap!==We||ne.fog===!0&&Ke.fog!==Ne||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ae.numPlanes||Ke.numIntersection!==Ae.numIntersection)||Ke.vertexAlphas!==qe||Ke.vertexTangents!==Re||Ke.morphTargets!==je||Ke.morphNormals!==nt||Ke.morphColors!==$e||Ke.toneMapping!==yt||ue.isWebGL2===!0&&Ke.morphTargetsCount!==it)&&(st=!0):(st=!0,Ke.__version=ne.version);let qt=Ke.currentProgram;st===!0&&(qt=Xt(ne,te,de));let dr=!1,En=!1,Mi=!1;const lt=qt.getUniforms(),$t=Ke.uniforms;if(le.useProgram(qt.program)&&(dr=!0,En=!0,Mi=!0),ne.id!==F&&(F=ne.id,En=!0),dr||E!==P){lt.setValue(R,"projectionMatrix",P.projectionMatrix),lt.setValue(R,"viewMatrix",P.matrixWorldInverse);const St=lt.map.cameraPosition;St!==void 0&&St.setValue(R,we.setFromMatrixPosition(P.matrixWorld)),ue.logarithmicDepthBuffer&&lt.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&lt.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,En=!0,Mi=!0)}if(de.isSkinnedMesh){lt.setOptional(R,de,"bindMatrix"),lt.setOptional(R,de,"bindMatrixInverse");const St=de.skeleton;St&&(ue.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),lt.setValue(R,"boneTexture",St.boneTexture,ge),lt.setValue(R,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mn=pe.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0&&ue.isWebGL2===!0)&&O.update(de,pe,qt),(En||Ke.receiveShadow!==de.receiveShadow)&&(Ke.receiveShadow=de.receiveShadow,lt.setValue(R,"receiveShadow",de.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&($t.envMap.value=We,$t.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),En&&(lt.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&bn($t,Mi),Ne&&ne.fog===!0&&Se.refreshFogUniforms($t,Ne),Se.refreshMaterialUniforms($t,ne,H,X,ce),Hs.upload(R,Ke.uniformsList,$t,ge)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Hs.upload(R,Ke.uniformsList,$t,ge),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&lt.setValue(R,"center",de.center),lt.setValue(R,"modelViewMatrix",de.modelViewMatrix),lt.setValue(R,"normalMatrix",de.normalMatrix),lt.setValue(R,"modelMatrix",de.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const St=ne.uniformsGroups;for(let ei=0,pr=St.length;ei<pr;ei++)if(ue.isWebGL2){const kt=St[ei];Fe.update(kt,qt),Fe.bind(kt,qt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qt}function bn(P,te){P.ambientLightColor.needsUpdate=te,P.lightProbe.needsUpdate=te,P.directionalLights.needsUpdate=te,P.directionalLightShadows.needsUpdate=te,P.pointLights.needsUpdate=te,P.pointLightShadows.needsUpdate=te,P.spotLights.needsUpdate=te,P.spotLightShadows.needsUpdate=te,P.rectAreaLights.needsUpdate=te,P.hemisphereLights.needsUpdate=te}function ns(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,te,pe){ae.get(P.texture).__webglTexture=te,ae.get(P.depthTexture).__webglTexture=pe;const ne=ae.get(P);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=pe===void 0,ne.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,te){const pe=ae.get(P);pe.__webglFramebuffer=te,pe.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(P,te=0,pe=0){T=P,M=te,w=pe;let ne=!0,de=null,Ne=!1,ke=!1;if(P){const We=ae.get(P);We.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(R.FRAMEBUFFER,null),ne=!1):We.__webglFramebuffer===void 0?ge.setupRenderTarget(P):We.__hasExternalTextures&&ge.rebindTextures(P,ae.get(P.texture).__webglTexture,ae.get(P.depthTexture).__webglTexture);const qe=P.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ke=!0);const Re=ae.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Re[te])?de=Re[te][pe]:de=Re[te],Ne=!0):ue.isWebGL2&&P.samples>0&&ge.useMultisampledRTT(P)===!1?de=ae.get(P).__webglMultisampledFramebuffer:Array.isArray(Re)?de=Re[pe]:de=Re,S.copy(P.viewport),G.copy(P.scissor),U=P.scissorTest}else S.copy(k).multiplyScalar(H).floor(),G.copy(A).multiplyScalar(H).floor(),U=D;if(le.bindFramebuffer(R.FRAMEBUFFER,de)&&ue.drawBuffers&&ne&&le.drawBuffers(P,de),le.viewport(S),le.scissor(G),le.setScissorTest(U),Ne){const We=ae.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+te,We.__webglTexture,pe)}else if(ke){const We=ae.get(P.texture),qe=te||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,We.__webglTexture,pe||0,qe)}F=-1},this.readRenderTargetPixels=function(P,te,pe,ne,de,Ne,ke){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(Ve=Ve[ke]),Ve){le.bindFramebuffer(R.FRAMEBUFFER,Ve);try{const We=P.texture,qe=We.format,Re=We.type;if(qe!==un&&he.convert(qe)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Re===jr&&($.has("EXT_color_buffer_half_float")||ue.isWebGL2&&$.has("EXT_color_buffer_float"));if(Re!==Kn&&he.convert(Re)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Yn&&(ue.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=P.width-ne&&pe>=0&&pe<=P.height-de&&R.readPixels(te,pe,ne,de,he.convert(qe),he.convert(Re),Ne)}finally{const We=T!==null?ae.get(T).__webglFramebuffer:null;le.bindFramebuffer(R.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(P,te,pe=0){const ne=Math.pow(2,-pe),de=Math.floor(te.image.width*ne),Ne=Math.floor(te.image.height*ne);ge.setTexture2D(te,0),R.copyTexSubImage2D(R.TEXTURE_2D,pe,0,0,P.x,P.y,de,Ne),le.unbindTexture()},this.copyTextureToTexture=function(P,te,pe,ne=0){const de=te.image.width,Ne=te.image.height,ke=he.convert(pe.format),Ve=he.convert(pe.type);ge.setTexture2D(pe,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,pe.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pe.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,pe.unpackAlignment),te.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ne,P.x,P.y,de,Ne,ke,Ve,te.image.data):te.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ne,P.x,P.y,te.mipmaps[0].width,te.mipmaps[0].height,ke,te.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,ne,P.x,P.y,ke,Ve,te.image),ne===0&&pe.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(P,te,pe,ne,de=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=P.max.x-P.min.x+1,ke=P.max.y-P.min.y+1,Ve=P.max.z-P.min.z+1,We=he.convert(ne.format),qe=he.convert(ne.type);let Re;if(ne.isData3DTexture)ge.setTexture3D(ne,0),Re=R.TEXTURE_3D;else if(ne.isDataArrayTexture)ge.setTexture2DArray(ne,0),Re=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,ne.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,ne.unpackAlignment);const je=R.getParameter(R.UNPACK_ROW_LENGTH),nt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),$e=R.getParameter(R.UNPACK_SKIP_PIXELS),yt=R.getParameter(R.UNPACK_SKIP_ROWS),jt=R.getParameter(R.UNPACK_SKIP_IMAGES),it=pe.isCompressedTexture?pe.mipmaps[0]:pe.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,it.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,it.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,P.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,P.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,P.min.z),pe.isDataTexture||pe.isData3DTexture?R.texSubImage3D(Re,de,te.x,te.y,te.z,Ne,ke,Ve,We,qe,it.data):pe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Re,de,te.x,te.y,te.z,Ne,ke,Ve,We,it.data)):R.texSubImage3D(Re,de,te.x,te.y,te.z,Ne,ke,Ve,We,qe,it),R.pixelStorei(R.UNPACK_ROW_LENGTH,je),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,$e),R.pixelStorei(R.UNPACK_SKIP_ROWS,yt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,jt),de===0&&ne.generateMipmaps&&R.generateMipmap(Re),le.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?ge.setTextureCube(P,0):P.isData3DTexture?ge.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ge.setTexture2DArray(P,0):ge.setTexture2D(P,0),le.unbindTexture()},this.resetState=function(){M=0,w=0,T=null,le.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?hi:Uu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===hi?rt:yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $_ extends Oo{}$_.prototype.isWebGL1Renderer=!0;class No{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new No(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class $u extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ev extends hn{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class eh extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new W,Rc=new W,Lc=new ot,Xa=new Uo,Ps=new $r;class tv extends dt{constructor(e=new Wt,t=new eh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Cc.fromBufferAttribute(t,n-1),Rc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Cc.distanceTo(Rc);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(n),Ps.radius+=s,e.ray.intersectsSphere(Ps)===!1)return;Lc.copy(n).invert(),Xa.copy(e.ray).applyMatrix4(Lc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new W,u=new W,h=new W,f=new W,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=m,x=y-1;v<x;v+=d){const M=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,w),Xa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(f);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=m,x=y-1;v<x;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Xa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Pc=new W,Uc=new W;class nv extends tv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Pc.fromBufferAttribute(t,n),Uc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Pc.distanceTo(Uc);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);const u=i[n],f=i[n+1]-u,d=(o-u)/f;return(n+d)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),a=this.getPoint(s),l=t||(o.isVector2?new Le:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new W,n=[],s=[],o=[],a=new W,l=new ot;for(let d=0;d<=e;d++){const g=d/e;n[d]=this.getTangentAt(g,new W)}s[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_t(n[d-1].dot(n[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(n[d],s[d])}if(t===!0){let d=Math.acos(_t(s[0].dot(s[e]),-1,1));d/=e,n[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),o[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bo extends Mn{constructor(e=0,t=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new Le,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class iv extends Bo{constructor(e,t,i,n,s,o){super(e,t,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ko(){let r=0,e=0,t=0,i=0;function n(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,n(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+i*a}}}const Us=new W,Ya=new ko,ja=new ko,qa=new ko;class th extends Mn{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new W){const i=t,n=this.points,s=n.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=n[(a-1)%s]:(Us.subVectors(n[0],n[1]).add(n[0]),c=Us);const h=n[a%s],f=n[(a+1)%s];if(this.closed||a+2<s?u=n[(a+2)%s]:(Us.subVectors(n[s-1],n[s-2]).add(n[s-1]),u=Us),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Ya.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,p),ja.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,p),qa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ja.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),qa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Ya.calc(l),ja.calc(l),qa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dc(r,e,t,i,n){const s=(i-e)*.5,o=(n-t)*.5,a=r*r,l=r*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*r+t}function rv(r,e){const t=1-r;return t*t*e}function sv(r,e){return 2*(1-r)*r*e}function av(r,e){return r*r*e}function Nr(r,e,t,i){return rv(r,e)+sv(r,t)+av(r,i)}function ov(r,e){const t=1-r;return t*t*t*e}function lv(r,e){const t=1-r;return 3*t*t*r*e}function cv(r,e){return 3*(1-r)*r*r*e}function uv(r,e){return r*r*r*e}function Br(r,e,t,i,n){return ov(r,e)+lv(r,t)+cv(r,i)+uv(r,n)}class nh extends Mn{constructor(e=new Le,t=new Le,i=new Le,n=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Le){const i=t,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Br(e,n.x,s.x,o.x,a.x),Br(e,n.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hv extends Mn{constructor(e=new W,t=new W,i=new W,n=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new W){const i=t,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Br(e,n.x,s.x,o.x,a.x),Br(e,n.y,s.y,o.y,a.y),Br(e,n.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zo extends Mn{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fv extends Mn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ih extends Mn{constructor(e=new Le,t=new Le,i=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Le){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(Nr(e,n.x,s.x,o.x),Nr(e,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dv extends Mn{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(Nr(e,n.x,s.x,o.x),Nr(e,n.y,s.y,o.y),Nr(e,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rh extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const i=t,n=this.points,s=(n.length-1)*e,o=Math.floor(s),a=s-o,l=n[o===0?o:o-1],c=n[o],u=n[o>n.length-2?n.length-1:o+1],h=n[o>n.length-3?n.length-1:o+2];return i.set(Dc(a,l.x,c.x,u.x,h.x),Dc(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Le().fromArray(n))}return this}}var sh=Object.freeze({__proto__:null,ArcCurve:iv,CatmullRomCurve3:th,CubicBezierCurve:nh,CubicBezierCurve3:hv,EllipseCurve:Bo,LineCurve:zo,LineCurve3:fv,QuadraticBezierCurve:ih,QuadraticBezierCurve3:dv,SplineCurve:rh});class pv extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new zo(t,e))}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const o=n[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const o=s[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new sh[n.type]().fromJSON(n))}return this}}class Ic extends pv{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new zo(this.currentPoint.clone(),new Le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const s=new ih(this.currentPoint.clone(),new Le(e,t),new Le(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,o){const a=new nh(this.currentPoint.clone(),new Le(e,t),new Le(i,n),new Le(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new rh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,n,s,o),this}absarc(e,t,i,n,s,o){return this.absellipse(e,t,i,i,n,s,o),this}ellipse(e,t,i,n,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,n,s,o,a,l),this}absellipse(e,t,i,n,s,o,a,l){const c=new Bo(e,t,i,n,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ah extends Ic{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Ic().fromJSON(n))}return this}}const mv={triangulate:function(r,e,t=2){const i=e&&e.length,n=i?e[0]*t:r.length;let s=oh(r,0,n,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(i&&(s=yv(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let g=t;g<n;g+=t)h=r[g],f=r[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Kr(s,o,t,a,l,d,0),o}};function oh(r,e,t,i,n){let s,o;if(n===Pv(r,e,t,i)>0)for(s=e;s<t;s+=i)o=Fc(s,r[s],r[s+1],o);else for(s=t-i;s>=e;s-=i)o=Fc(s,r[s],r[s+1],o);return o&&sa(o,o.next)&&(Zr(o),o=o.next),o}function _i(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(sa(t,t.next)||at(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Kr(r,e,t,i,n,s,o){if(!r)return;!o&&s&&Tv(r,i,n,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?_v(r,i,n,s):gv(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Zr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=vv(_i(r),e,t),Kr(r,e,t,i,n,s,2)):o===2&&xv(r,e,t,i,n,s):Kr(_i(r),e,t,i,n,s,1);break}}}function gv(r){const e=r.prev,t=r,i=r.next;if(at(e,t,i)>=0)return!1;const n=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=n<s?n<o?n:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=n>s?n>o?n:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Zi(n,a,s,l,o,c,g.x,g.y)&&at(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _v(r,e,t,i){const n=r.prev,s=r,o=r.next;if(at(n,s,o)>=0)return!1;const a=n.x,l=s.x,c=o.x,u=n.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=fo(d,g,e,t,i),y=fo(_,p,e,t,i);let v=r.prevZ,x=r.nextZ;for(;v&&v.z>=m&&x&&x.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==n&&v!==o&&Zi(a,u,l,h,c,f,v.x,v.y)&&at(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==n&&x!==o&&Zi(a,u,l,h,c,f,x.x,x.y)&&at(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==n&&v!==o&&Zi(a,u,l,h,c,f,v.x,v.y)&&at(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==n&&x!==o&&Zi(a,u,l,h,c,f,x.x,x.y)&&at(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function vv(r,e,t){let i=r;do{const n=i.prev,s=i.next.next;!sa(n,s)&&lh(n,i,i.next,s)&&Jr(n,s)&&Jr(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Zr(i),Zr(i.next),i=r=s),i=i.next}while(i!==r);return _i(i)}function xv(r,e,t,i,n,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cv(o,a)){let l=ch(o,a);o=_i(o,o.next),l=_i(l,l.next),Kr(o,e,t,i,n,s,0),Kr(l,e,t,i,n,s,0);return}a=a.next}o=o.next}while(o!==r)}function yv(r,e,t,i){const n=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:r.length,c=oh(r,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Av(c));for(n.sort(Sv),s=0;s<n.length;s++)t=Mv(n[s],t);return t}function Sv(r,e){return r.x-e.x}function Mv(r,e){const t=bv(r,e);if(!t)return e;const i=ch(t,r);return _i(i,i.next),_i(t,t.next)}function bv(r,e){let t=e,i=-1/0,n;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,n=t.x<t.next.x?t:t.next,f===s))return n}t=t.next}while(t!==e);if(!n)return null;const a=n,l=n.x,c=n.y;let u=1/0,h;t=n;do s>=t.x&&t.x>=l&&s!==t.x&&Zi(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Jr(t,r)&&(h<u||h===u&&(t.x>n.x||t.x===n.x&&Ev(n,t)))&&(n=t,u=h)),t=t.next;while(t!==a);return n}function Ev(r,e){return at(r.prev,r,e.prev)<0&&at(e.next,r,r.next)<0}function Tv(r,e,t,i){let n=r;do n.z===0&&(n.z=fo(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,wv(n)}function wv(r){let e,t,i,n,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,a--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;t=i}s.nextZ=null,c*=2}while(o>1);return r}function fo(r,e,t,i,n){return r=(r-t)*n|0,e=(e-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Av(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Zi(r,e,t,i,n,s,o,a){return(n-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(n-o)*(i-a)}function Cv(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Rv(r,e)&&(Jr(r,e)&&Jr(e,r)&&Lv(r,e)&&(at(r.prev,r,e.prev)||at(r,e.prev,e))||sa(r,e)&&at(r.prev,r,r.next)>0&&at(e.prev,e,e.next)>0)}function at(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function sa(r,e){return r.x===e.x&&r.y===e.y}function lh(r,e,t,i){const n=Is(at(r,e,t)),s=Is(at(r,e,i)),o=Is(at(t,i,r)),a=Is(at(t,i,e));return!!(n!==s&&o!==a||n===0&&Ds(r,t,e)||s===0&&Ds(r,i,e)||o===0&&Ds(t,r,i)||a===0&&Ds(t,e,i))}function Ds(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Is(r){return r>0?1:r<0?-1:0}function Rv(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&lh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Jr(r,e){return at(r.prev,r,r.next)<0?at(r,e,r.next)>=0&&at(r,r.prev,e)>=0:at(r,e,r.prev)<0||at(r,r.next,e)<0}function Lv(r,e){let t=r,i=!1;const n=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&n<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function ch(r,e){const t=new po(r.i,r.x,r.y),i=new po(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Fc(r,e,t,i){const n=new po(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function po(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pv(r,e,t,i){let n=0;for(let s=e,o=t-i;s<t;s+=i)n+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return n}class kr{static area(e){const t=e.length;let i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return i*.5}static isClockWise(e){return kr.area(e)<0}static triangulateShape(e,t){const i=[],n=[],s=[];Oc(e),Nc(i,e);let o=e.length;t.forEach(Oc);for(let l=0;l<t.length;l++)n.push(o),o+=t[l].length,Nc(i,t[l]);const a=mv.triangulate(i,n);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Oc(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Nc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Go extends Wt{constructor(e=new ah([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Bt(n,3)),this.setAttribute("uv",new Bt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Uv;let v,x=!1,M,w,T,F;m&&(v=m.getSpacedPoints(u),x=!0,f=!1,M=m.computeFrenetFrames(u,!1),w=new W,T=new W,F=new W),f||(p=0,d=0,g=0,_=0);const E=a.extractPoints(c);let S=E.shape;const G=E.holes;if(!kr.isClockWise(S)){S=S.reverse();for(let R=0,xe=G.length;R<xe;R++){const $=G[R];kr.isClockWise($)&&(G[R]=$.reverse())}}const L=kr.triangulateShape(S,G),I=S;for(let R=0,xe=G.length;R<xe;R++){const $=G[R];S=S.concat($)}function B(R,xe,$){return xe||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(xe,$)}const X=S.length,H=L.length;function j(R,xe,$){let ue,le,Pe;const ae=R.x-xe.x,ge=R.y-xe.y,be=$.x-R.x,re=$.y-R.y,Ue=ae*ae+ge*ge,C=ae*re-ge*be;if(Math.abs(C)>Number.EPSILON){const b=Math.sqrt(Ue),z=Math.sqrt(be*be+re*re),Se=xe.x-ge/b,ee=xe.y+ae/b,fe=$.x-re/z,Ae=$.y+be/z,ve=((fe-Se)*re-(Ae-ee)*be)/(ae*re-ge*be);ue=Se+ae*ve-R.x,le=ee+ge*ve-R.y;const J=ue*ue+le*le;if(J<=2)return new Le(ue,le);Pe=Math.sqrt(J/2)}else{let b=!1;ae>Number.EPSILON?be>Number.EPSILON&&(b=!0):ae<-Number.EPSILON?be<-Number.EPSILON&&(b=!0):Math.sign(ge)===Math.sign(re)&&(b=!0),b?(ue=-ge,le=ae,Pe=Math.sqrt(Ue)):(ue=ae,le=ge,Pe=Math.sqrt(Ue/2))}return new Le(ue/Pe,le/Pe)}const V=[];for(let R=0,xe=I.length,$=xe-1,ue=R+1;R<xe;R++,$++,ue++)$===xe&&($=0),ue===xe&&(ue=0),V[R]=j(I[R],I[$],I[ue]);const k=[];let A,D=V.concat();for(let R=0,xe=G.length;R<xe;R++){const $=G[R];A=[];for(let ue=0,le=$.length,Pe=le-1,ae=ue+1;ue<le;ue++,Pe++,ae++)Pe===le&&(Pe=0),ae===le&&(ae=0),A[ue]=j($[ue],$[Pe],$[ae]);k.push(A),D=D.concat(A)}for(let R=0;R<p;R++){const xe=R/p,$=d*Math.cos(xe*Math.PI/2),ue=g*Math.sin(xe*Math.PI/2)+_;for(let le=0,Pe=I.length;le<Pe;le++){const ae=B(I[le],V[le],ue);Q(ae.x,ae.y,-$)}for(let le=0,Pe=G.length;le<Pe;le++){const ae=G[le];A=k[le];for(let ge=0,be=ae.length;ge<be;ge++){const re=B(ae[ge],A[ge],ue);Q(re.x,re.y,-$)}}}const K=g+_;for(let R=0;R<X;R++){const xe=f?B(S[R],D[R],K):S[R];x?(T.copy(M.normals[0]).multiplyScalar(xe.x),w.copy(M.binormals[0]).multiplyScalar(xe.y),F.copy(v[0]).add(T).add(w),Q(F.x,F.y,F.z)):Q(xe.x,xe.y,0)}for(let R=1;R<=u;R++)for(let xe=0;xe<X;xe++){const $=f?B(S[xe],D[xe],K):S[xe];x?(T.copy(M.normals[R]).multiplyScalar($.x),w.copy(M.binormals[R]).multiplyScalar($.y),F.copy(v[R]).add(T).add(w),Q(F.x,F.y,F.z)):Q($.x,$.y,h/u*R)}for(let R=p-1;R>=0;R--){const xe=R/p,$=d*Math.cos(xe*Math.PI/2),ue=g*Math.sin(xe*Math.PI/2)+_;for(let le=0,Pe=I.length;le<Pe;le++){const ae=B(I[le],V[le],ue);Q(ae.x,ae.y,h+$)}for(let le=0,Pe=G.length;le<Pe;le++){const ae=G[le];A=k[le];for(let ge=0,be=ae.length;ge<be;ge++){const re=B(ae[ge],A[ge],ue);x?Q(re.x,re.y+v[u-1].y,v[u-1].x+$):Q(re.x,re.y,h+$)}}}Y(),q();function Y(){const R=n.length/3;if(f){let xe=0,$=X*xe;for(let ue=0;ue<H;ue++){const le=L[ue];ie(le[2]+$,le[1]+$,le[0]+$)}xe=u+p*2,$=X*xe;for(let ue=0;ue<H;ue++){const le=L[ue];ie(le[0]+$,le[1]+$,le[2]+$)}}else{for(let xe=0;xe<H;xe++){const $=L[xe];ie($[2],$[1],$[0])}for(let xe=0;xe<H;xe++){const $=L[xe];ie($[0]+X*u,$[1]+X*u,$[2]+X*u)}}i.addGroup(R,n.length/3-R,0)}function q(){const R=n.length/3;let xe=0;ce(I,xe),xe+=I.length;for(let $=0,ue=G.length;$<ue;$++){const le=G[$];ce(le,xe),xe+=le.length}i.addGroup(R,n.length/3-R,1)}function ce(R,xe){let $=R.length;for(;--$>=0;){const ue=$;let le=$-1;le<0&&(le=R.length-1);for(let Pe=0,ae=u+p*2;Pe<ae;Pe++){const ge=X*Pe,be=X*(Pe+1),re=xe+ue+ge,Ue=xe+le+ge,C=xe+le+be,b=xe+ue+be;we(re,Ue,C,b)}}}function Q(R,xe,$){l.push(R),l.push(xe),l.push($)}function ie(R,xe,$){Ie(R),Ie(xe),Ie($);const ue=n.length/3,le=y.generateTopUV(i,n,ue-3,ue-2,ue-1);me(le[0]),me(le[1]),me(le[2])}function we(R,xe,$,ue){Ie(R),Ie(xe),Ie(ue),Ie(xe),Ie($),Ie(ue);const le=n.length/3,Pe=y.generateSideWallUV(i,n,le-6,le-3,le-2,le-1);me(Pe[0]),me(Pe[1]),me(Pe[3]),me(Pe[1]),me(Pe[2]),me(Pe[3])}function Ie(R){n.push(l[R*3+0]),n.push(l[R*3+1]),n.push(l[R*3+2])}function me(R){s.push(R.x),s.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Dv(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new sh[n.type]().fromJSON(n)),new Go(i,e.options)}}const Uv={generateTopUV:function(r,e,t,i,n){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[n*3],u=e[n*3+1];return[new Le(s,o),new Le(a,l),new Le(c,u)]},generateSideWallUV:function(r,e,t,i,n,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[n*3],d=e[n*3+1],g=e[n*3+2],_=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Le(o,1-l),new Le(c,1-h),new Le(f,1-g),new Le(_,1-m)]:[new Le(a,1-l),new Le(u,1-h),new Le(d,1-g),new Le(p,1-m)]}};function Dv(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){const s=r[i];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class uh extends yi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iv extends yi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hh extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Fv extends hh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ka=new ot,Bc=new W,kc=new W;class Ov{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),Ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nv extends Ov{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bv extends hh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Nv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kv extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class zc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zv extends nv{constructor(e=10,t=10,i=4473924,n=8947848){i=new Xe(i),n=new Xe(n);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===s?i:n;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new Wt;u.setAttribute("position",new Bt(l,3)),u.setAttribute("color",new Bt(c,3));const h=new eh({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);const Gc={type:"change"},Ja={type:"start"},Hc={type:"end"},Fs=new Uo,Vc=new Wn,Gv=Math.cos(70*Ks.DEG2RAD);class Hv extends vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",b),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gc),i.update(),s=n.NONE},this.update=function(){const O=new W,se=new mi().setFromUnitVectors(e.up,new W(0,1,0)),ye=se.clone().invert(),he=new W,Ee=new mi,Fe=new W,Ge=2*Math.PI;return function(_e=null){const Z=i.object.position;O.copy(Z).sub(i.target),O.applyQuaternion(se),a.setFromVector3(O),i.autoRotate&&s===n.NONE&&G(E(_e)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ce=i.minAzimuthAngle,Me=i.maxAzimuthAngle;isFinite(Ce)&&isFinite(Me)&&(Ce<-Math.PI?Ce+=Ge:Ce>Math.PI&&(Ce-=Ge),Me<-Math.PI?Me+=Ge:Me>Math.PI&&(Me-=Ge),Ce<=Me?a.theta=Math.max(Ce,Math.min(Me,a.theta)):a.theta=a.theta>(Ce+Me)/2?Math.max(Ce,a.theta):Math.min(Me,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&w||i.object.isOrthographicCamera?a.radius=V(a.radius):a.radius=V(a.radius*c),O.setFromSpherical(a),O.applyQuaternion(ye),Z.copy(i.target).add(O),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Oe=!1;if(i.zoomToCursor&&w){let He=null;if(i.object.isPerspectiveCamera){const Be=O.length();He=V(Be*c);const ze=Be-He;i.object.position.addScaledVector(x,ze),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Be=new W(M.x,M.y,0);Be.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Oe=!0;const ze=new W(M.x,M.y,0);ze.unproject(i.object),i.object.position.sub(ze).add(Be),i.object.updateMatrixWorld(),He=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;He!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(He).add(i.object.position):(Fs.origin.copy(i.object.position),Fs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Fs.direction))<Gv?e.lookAt(i.target):(Vc.setFromNormalAndCoplanarPoint(i.object.up,i.target),Fs.intersectPlane(Vc,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Oe=!0);return c=1,w=!1,Oe||he.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o||Fe.distanceToSquared(i.target)>0?(i.dispatchEvent(Gc),he.copy(i.object.position),Ee.copy(i.object.quaternion),Fe.copy(i.target),Oe=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",ae),i.domElement.removeEventListener("pointercancel",be),i.domElement.removeEventListener("wheel",C),i.domElement.removeEventListener("pointermove",ge),i.domElement.removeEventListener("pointerup",be),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",b),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=n.NONE;const o=1e-6,a=new zc,l=new zc;let c=1;const u=new W,h=new Le,f=new Le,d=new Le,g=new Le,_=new Le,p=new Le,m=new Le,y=new Le,v=new Le,x=new W,M=new Le;let w=!1;const T=[],F={};function E(O){return O!==null?2*Math.PI/60*i.autoRotateSpeed*O:2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function G(O){l.theta-=O}function U(O){l.phi-=O}const L=function(){const O=new W;return function(ye,he){O.setFromMatrixColumn(he,0),O.multiplyScalar(-ye),u.add(O)}}(),I=function(){const O=new W;return function(ye,he){i.screenSpacePanning===!0?O.setFromMatrixColumn(he,1):(O.setFromMatrixColumn(he,0),O.crossVectors(i.object.up,O)),O.multiplyScalar(ye),u.add(O)}}(),B=function(){const O=new W;return function(ye,he){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const Fe=i.object.position;O.copy(Fe).sub(i.target);let Ge=O.length();Ge*=Math.tan(i.object.fov/2*Math.PI/180),L(2*ye*Ge/Ee.clientHeight,i.object.matrix),I(2*he*Ge/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(L(ye*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),I(he*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(O){if(!i.zoomToCursor)return;w=!0;const se=i.domElement.getBoundingClientRect(),ye=O.clientX-se.left,he=O.clientY-se.top,Ee=se.width,Fe=se.height;M.x=ye/Ee*2-1,M.y=-(he/Fe)*2+1,x.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function V(O){return Math.max(i.minDistance,Math.min(i.maxDistance,O))}function k(O){h.set(O.clientX,O.clientY)}function A(O){j(O),m.set(O.clientX,O.clientY)}function D(O){g.set(O.clientX,O.clientY)}function K(O){f.set(O.clientX,O.clientY),d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const se=i.domElement;G(2*Math.PI*d.x/se.clientHeight),U(2*Math.PI*d.y/se.clientHeight),h.copy(f),i.update()}function Y(O){y.set(O.clientX,O.clientY),v.subVectors(y,m),v.y>0?X(S()):v.y<0&&H(S()),m.copy(y),i.update()}function q(O){_.set(O.clientX,O.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),B(p.x,p.y),g.copy(_),i.update()}function ce(O){j(O),O.deltaY<0?H(S()):O.deltaY>0&&X(S()),i.update()}function Q(O){let se=!1;switch(O.code){case i.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),se=!0;break}se&&(O.preventDefault(),i.update())}function ie(){if(T.length===1)h.set(T[0].pageX,T[0].pageY);else{const O=.5*(T[0].pageX+T[1].pageX),se=.5*(T[0].pageY+T[1].pageY);h.set(O,se)}}function we(){if(T.length===1)g.set(T[0].pageX,T[0].pageY);else{const O=.5*(T[0].pageX+T[1].pageX),se=.5*(T[0].pageY+T[1].pageY);g.set(O,se)}}function Ie(){const O=T[0].pageX-T[1].pageX,se=T[0].pageY-T[1].pageY,ye=Math.sqrt(O*O+se*se);m.set(0,ye)}function me(){i.enableZoom&&Ie(),i.enablePan&&we()}function R(){i.enableZoom&&Ie(),i.enableRotate&&ie()}function xe(O){if(T.length==1)f.set(O.pageX,O.pageY);else{const ye=J(O),he=.5*(O.pageX+ye.x),Ee=.5*(O.pageY+ye.y);f.set(he,Ee)}d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const se=i.domElement;G(2*Math.PI*d.x/se.clientHeight),U(2*Math.PI*d.y/se.clientHeight),h.copy(f)}function $(O){if(T.length===1)_.set(O.pageX,O.pageY);else{const se=J(O),ye=.5*(O.pageX+se.x),he=.5*(O.pageY+se.y);_.set(ye,he)}p.subVectors(_,g).multiplyScalar(i.panSpeed),B(p.x,p.y),g.copy(_)}function ue(O){const se=J(O),ye=O.pageX-se.x,he=O.pageY-se.y,Ee=Math.sqrt(ye*ye+he*he);y.set(0,Ee),v.set(0,Math.pow(y.y/m.y,i.zoomSpeed)),X(v.y),m.copy(y)}function le(O){i.enableZoom&&ue(O),i.enablePan&&$(O)}function Pe(O){i.enableZoom&&ue(O),i.enableRotate&&xe(O)}function ae(O){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",ge),i.domElement.addEventListener("pointerup",be)),fe(O),O.pointerType==="touch"?z(O):re(O))}function ge(O){i.enabled!==!1&&(O.pointerType==="touch"?Se(O):Ue(O))}function be(O){Ae(O),T.length===0&&(i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",ge),i.domElement.removeEventListener("pointerup",be)),i.dispatchEvent(Hc),s=n.NONE}function re(O){let se;switch(O.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Ti.DOLLY:if(i.enableZoom===!1)return;A(O),s=n.DOLLY;break;case Ti.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enablePan===!1)return;D(O),s=n.PAN}else{if(i.enableRotate===!1)return;k(O),s=n.ROTATE}break;case Ti.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enableRotate===!1)return;k(O),s=n.ROTATE}else{if(i.enablePan===!1)return;D(O),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Ja)}function Ue(O){switch(s){case n.ROTATE:if(i.enableRotate===!1)return;K(O);break;case n.DOLLY:if(i.enableZoom===!1)return;Y(O);break;case n.PAN:if(i.enablePan===!1)return;q(O);break}}function C(O){i.enabled===!1||i.enableZoom===!1||s!==n.NONE||(O.preventDefault(),i.dispatchEvent(Ja),ce(O),i.dispatchEvent(Hc))}function b(O){i.enabled===!1||i.enablePan===!1||Q(O)}function z(O){switch(ve(O),T.length){case 1:switch(i.touches.ONE){case wi.ROTATE:if(i.enableRotate===!1)return;ie(),s=n.TOUCH_ROTATE;break;case wi.PAN:if(i.enablePan===!1)return;we(),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(i.touches.TWO){case wi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;me(),s=n.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;R(),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Ja)}function Se(O){switch(ve(O),s){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;xe(O),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;$(O),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;le(O),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Pe(O),i.update();break;default:s=n.NONE}}function ee(O){i.enabled!==!1&&O.preventDefault()}function fe(O){T.push(O)}function Ae(O){delete F[O.pointerId];for(let se=0;se<T.length;se++)if(T[se].pointerId==O.pointerId){T.splice(se,1);return}}function ve(O){let se=F[O.pointerId];se===void 0&&(se=new Le,F[O.pointerId]=se),se.set(O.pageX,O.pageY)}function J(O){const se=O.pointerId===T[0].pointerId?T[1]:T[0];return F[se.pointerId]}i.domElement.addEventListener("contextmenu",ee),i.domElement.addEventListener("pointerdown",ae),i.domElement.addEventListener("pointercancel",be),i.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}function Vv(){var r=Object.create(null);function e(n,s){var o=n.id,a=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!r[o])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=r[f.id].value),f}),c=i("<"+a+">.init",c),u&&(u=i("<"+a+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),r[o]={id:o,value:h,getTransferables:u},s(h)}catch(f){f&&f.noLog||console.error(f),s(f)}}function t(n,s){var o,a=n.id,l=n.args;(!r[a]||typeof r[a].value!="function")&&s(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=r[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(h){return s(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){s(h)}function u(h){try{var f=r[a].getTransferables&&r[a].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),s(h,f)}catch(d){console.error(d),s(d)}}}function i(n,s){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+s+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(n){var s=n.data,o=s.messageId,a=s.action,l=s.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function Wv(r){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=r.dependencies,i=r.init;t=Array.isArray(t)?t.map(function(s){return s&&s._getInitResult?s._getInitResult():s}):[];var n=Promise.all(t).then(function(s){return i.apply(null,s)});return e._getInitResult=function(){return n},n},e}var fh=function(){var r=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),r=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return fh=function(){return r},r},Xv=0,Yv=0,Za=!1,zr=Object.create(null),Gr=Object.create(null),mo=Object.create(null);function fr(r){if((!r||typeof r.init!="function")&&!Za)throw new Error("requires `options.init` function");var e=r.dependencies,t=r.init,i=r.getTransferables,n=r.workerId;if(!fh())return Wv(r);n==null&&(n="#default");var s="workerModule"+ ++Xv,o=r.name||s,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Za=!0,c=fr({workerId:n,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+Vs(c)+`
)}`}),Za=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=Wc(n,"registerModule",l.workerModuleData);var h=function(){a=null,Gr[n].delete(h)};(Gr[n]||(Gr[n]=new Set)).add(h)}return a.then(function(f){var d=f.isCallable;if(d)return Wc(n,"callModule",{id:s,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:Vs(t),getTransferables:i&&Vs(i)},l}function jv(r){Gr[r]&&Gr[r].forEach(function(e){e()}),zr[r]&&(zr[r].terminate(),delete zr[r])}function Vs(r){var e=r.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function qv(r){var e=zr[r];if(!e){var t=Vs(Vv);e=zr[r]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+r.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,s=n.messageId,o=mo[s];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete mo[s],o(n)}}return e}function Wc(r,e,t){return new Promise(function(i,n){var s=++Yv;mo[s]=function(o){o.success?i(o.result):n(new Error("Error in worker "+e+" call: "+o.error))},qv(r).postMessage({messageId:s,action:e,data:t})})}function dh(){var r=function(e){function t(V,k,A,D,K,Y,q,ce){var Q=1-q;ce.x=Q*Q*V+2*Q*q*A+q*q*K,ce.y=Q*Q*k+2*Q*q*D+q*q*Y}function i(V,k,A,D,K,Y,q,ce,Q,ie){var we=1-Q;ie.x=we*we*we*V+3*we*we*Q*A+3*we*Q*Q*K+Q*Q*Q*q,ie.y=we*we*we*k+3*we*we*Q*D+3*we*Q*Q*Y+Q*Q*Q*ce}function n(V,k){for(var A=/([MLQCZ])([^MLQCZ]*)/g,D,K,Y,q,ce;D=A.exec(V);){var Q=D[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ie){return parseFloat(ie)});switch(D[1]){case"M":q=K=Q[0],ce=Y=Q[1];break;case"L":(Q[0]!==q||Q[1]!==ce)&&k("L",q,ce,q=Q[0],ce=Q[1]);break;case"Q":{k("Q",q,ce,q=Q[2],ce=Q[3],Q[0],Q[1]);break}case"C":{k("C",q,ce,q=Q[4],ce=Q[5],Q[0],Q[1],Q[2],Q[3]);break}case"Z":(q!==K||ce!==Y)&&k("L",q,ce,K,Y);break}}}function s(V,k,A){A===void 0&&(A=16);var D={x:0,y:0};n(V,function(K,Y,q,ce,Q,ie,we,Ie,me){switch(K){case"L":k(Y,q,ce,Q);break;case"Q":{for(var R=Y,xe=q,$=1;$<A;$++)t(Y,q,ie,we,ce,Q,$/(A-1),D),k(R,xe,D.x,D.y),R=D.x,xe=D.y;break}case"C":{for(var ue=Y,le=q,Pe=1;Pe<A;Pe++)i(Y,q,ie,we,Ie,me,ce,Q,Pe/(A-1),D),k(ue,le,D.x,D.y),ue=D.x,le=D.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(V,k){var A=V.getContext?V.getContext("webgl",c):V,D=l.get(A);if(!D){let ue=function(re){var Ue=Y[re];if(!Ue&&(Ue=Y[re]=A.getExtension(re),!Ue))throw new Error(re+" not supported");return Ue},le=function(re,Ue){var C=A.createShader(Ue);return A.shaderSource(C,re),A.compileShader(C),C},Pe=function(re,Ue,C,b){if(!q[re]){var z={},Se={},ee=A.createProgram();A.attachShader(ee,le(Ue,A.VERTEX_SHADER)),A.attachShader(ee,le(C,A.FRAGMENT_SHADER)),A.linkProgram(ee),q[re]={program:ee,transaction:function(Ae){A.useProgram(ee),Ae({setUniform:function(J,O){for(var se=[],ye=arguments.length-2;ye-- >0;)se[ye]=arguments[ye+2];var he=Se[O]||(Se[O]=A.getUniformLocation(ee,O));A["uniform"+J].apply(A,[he].concat(se))},setAttribute:function(J,O,se,ye,he){var Ee=z[J];Ee||(Ee=z[J]={buf:A.createBuffer(),loc:A.getAttribLocation(ee,J),data:null}),A.bindBuffer(A.ARRAY_BUFFER,Ee.buf),A.vertexAttribPointer(Ee.loc,O,A.FLOAT,!1,0,0),A.enableVertexAttribArray(Ee.loc),K?A.vertexAttribDivisor(Ee.loc,ye):ue("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ee.loc,ye),he!==Ee.data&&(A.bufferData(A.ARRAY_BUFFER,he,se),Ee.data=he)}})}}}q[re].transaction(b)},ae=function(re,Ue){Q++;try{A.activeTexture(A.TEXTURE0+Q);var C=ce[re];C||(C=ce[re]=A.createTexture(),A.bindTexture(A.TEXTURE_2D,C),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,A.NEAREST),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MAG_FILTER,A.NEAREST)),A.bindTexture(A.TEXTURE_2D,C),Ue(C,Q)}finally{Q--}},ge=function(re,Ue,C){var b=A.createFramebuffer();ie.push(b),A.bindFramebuffer(A.FRAMEBUFFER,b),A.activeTexture(A.TEXTURE0+Ue),A.bindTexture(A.TEXTURE_2D,re),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,re,0);try{C(b)}finally{A.deleteFramebuffer(b),A.bindFramebuffer(A.FRAMEBUFFER,ie[--ie.length-1]||null)}},be=function(){Y={},q={},ce={},Q=-1,ie.length=0};var we=ue,Ie=le,me=Pe,R=ae,xe=ge,$=be,K=typeof WebGL2RenderingContext<"u"&&A instanceof WebGL2RenderingContext,Y={},q={},ce={},Q=-1,ie=[];A.canvas.addEventListener("webglcontextlost",function(re){be(),re.preventDefault()},!1),l.set(A,D={gl:A,isWebGL2:K,getExtension:ue,withProgram:Pe,withTexture:ae,withTextureFramebuffer:ge,handleContextLoss:be})}k(D)}function h(V,k,A,D,K,Y,q,ce){q===void 0&&(q=15),ce===void 0&&(ce=null),u(V,function(Q){var ie=Q.gl,we=Q.withProgram,Ie=Q.withTexture;Ie("copy",function(me,R){ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,K,Y,0,ie.RGBA,ie.UNSIGNED_BYTE,k),we("copy",o,a,function(xe){var $=xe.setUniform,ue=xe.setAttribute;ue("aUV",2,ie.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),$("1i","image",R),ie.bindFramebuffer(ie.FRAMEBUFFER,ce||null),ie.disable(ie.BLEND),ie.colorMask(q&8,q&4,q&2,q&1),ie.viewport(A,D,K,Y),ie.scissor(A,D,K,Y),ie.drawArrays(ie.TRIANGLES,0,3)})})})}function f(V,k,A){var D=V.width,K=V.height;u(V,function(Y){var q=Y.gl,ce=new Uint8Array(D*K*4);q.readPixels(0,0,D,K,q.RGBA,q.UNSIGNED_BYTE,ce),V.width=k,V.height=A,h(q,ce,0,0,D,K)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(V,k,A,D,K,Y){Y===void 0&&(Y=1);var q=new Uint8Array(V*k),ce=D[2]-D[0],Q=D[3]-D[1],ie=[];s(A,function(ue,le,Pe,ae){ie.push({x1:ue,y1:le,x2:Pe,y2:ae,minX:Math.min(ue,Pe),minY:Math.min(le,ae),maxX:Math.max(ue,Pe),maxY:Math.max(le,ae)})}),ie.sort(function(ue,le){return ue.maxX-le.maxX});for(var we=0;we<V;we++)for(var Ie=0;Ie<k;Ie++){var me=xe(D[0]+ce*(we+.5)/V,D[1]+Q*(Ie+.5)/k),R=Math.pow(1-Math.abs(me)/K,Y)/2;me<0&&(R=1-R),R=Math.max(0,Math.min(255,Math.round(R*255))),q[Ie*V+we]=R}return q;function xe(ue,le){for(var Pe=1/0,ae=1/0,ge=ie.length;ge--;){var be=ie[ge];if(be.maxX+ae<=ue)break;if(ue+ae>be.minX&&le-ae<be.maxY&&le+ae>be.minY){var re=m(ue,le,be.x1,be.y1,be.x2,be.y2);re<Pe&&(Pe=re,ae=Math.sqrt(Pe))}}return $(ue,le)&&(ae=-ae),ae}function $(ue,le){for(var Pe=0,ae=ie.length;ae--;){var ge=ie[ae];if(ge.maxX<=ue)break;var be=ge.y1>le!=ge.y2>le&&ue<(ge.x2-ge.x1)*(le-ge.y1)/(ge.y2-ge.y1)+ge.x1;be&&(Pe+=ge.y1<ge.y2?1:-1)}return Pe!==0}}function _(V,k,A,D,K,Y,q,ce,Q,ie){Y===void 0&&(Y=1),ce===void 0&&(ce=0),Q===void 0&&(Q=0),ie===void 0&&(ie=0),p(V,k,A,D,K,Y,q,null,ce,Q,ie)}function p(V,k,A,D,K,Y,q,ce,Q,ie,we){Y===void 0&&(Y=1),Q===void 0&&(Q=0),ie===void 0&&(ie=0),we===void 0&&(we=0);for(var Ie=g(V,k,A,D,K,Y),me=new Uint8Array(Ie.length*4),R=0;R<Ie.length;R++)me[R*4+we]=Ie[R];h(q,me,Q,ie,V,k,1<<3-we,ce)}function m(V,k,A,D,K,Y){var q=K-A,ce=Y-D,Q=q*q+ce*ce,ie=Q?Math.max(0,Math.min(1,((V-A)*q+(k-D)*ce)/Q)):0,we=V-(A+ie*q),Ie=k-(D+ie*ce);return we*we+Ie*Ie}var y=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:p}),v="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",M="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),T=null,F=!1,E={},S=new WeakMap;function G(V){if(!F&&!B(V))throw new Error("WebGL generation not supported")}function U(V,k,A,D,K,Y,q){if(Y===void 0&&(Y=1),q===void 0&&(q=null),!q&&(q=T,!q)){var ce=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ce)throw new Error("OffscreenCanvas or DOM canvas not supported");q=T=ce.getContext("webgl",{depth:!1})}G(q);var Q=new Uint8Array(V*k*4);u(q,function(me){var R=me.gl,xe=me.withTexture,$=me.withTextureFramebuffer;xe("readable",function(ue,le){R.texImage2D(R.TEXTURE_2D,0,R.RGBA,V,k,0,R.RGBA,R.UNSIGNED_BYTE,null),$(ue,le,function(Pe){I(V,k,A,D,K,Y,R,Pe,0,0,0),R.readPixels(0,0,V,k,R.RGBA,R.UNSIGNED_BYTE,Q)})})});for(var ie=new Uint8Array(V*k),we=0,Ie=0;we<Q.length;we+=4)ie[Ie++]=Q[we];return ie}function L(V,k,A,D,K,Y,q,ce,Q,ie){Y===void 0&&(Y=1),ce===void 0&&(ce=0),Q===void 0&&(Q=0),ie===void 0&&(ie=0),I(V,k,A,D,K,Y,q,null,ce,Q,ie)}function I(V,k,A,D,K,Y,q,ce,Q,ie,we){Y===void 0&&(Y=1),Q===void 0&&(Q=0),ie===void 0&&(ie=0),we===void 0&&(we=0),G(q);var Ie=[];s(A,function(me,R,xe,$){Ie.push(me,R,xe,$)}),Ie=new Float32Array(Ie),u(q,function(me){var R=me.gl,xe=me.isWebGL2,$=me.getExtension,ue=me.withProgram,le=me.withTexture,Pe=me.withTextureFramebuffer,ae=me.handleContextLoss;if(le("rawDistances",function(ge,be){(V!==ge._lastWidth||k!==ge._lastHeight)&&R.texImage2D(R.TEXTURE_2D,0,R.RGBA,ge._lastWidth=V,ge._lastHeight=k,0,R.RGBA,R.UNSIGNED_BYTE,null),ue("main",v,x,function(re){var Ue=re.setAttribute,C=re.setUniform,b=!xe&&$("ANGLE_instanced_arrays"),z=!xe&&$("EXT_blend_minmax");Ue("aUV",2,R.STATIC_DRAW,0,w),Ue("aLineSegment",4,R.DYNAMIC_DRAW,1,Ie),C.apply(void 0,["4f","uGlyphBounds"].concat(D)),C("1f","uMaxDistance",K),C("1f","uExponent",Y),Pe(ge,be,function(Se){R.enable(R.BLEND),R.colorMask(!0,!0,!0,!0),R.viewport(0,0,V,k),R.scissor(0,0,V,k),R.blendFunc(R.ONE,R.ONE),R.blendEquationSeparate(R.FUNC_ADD,xe?R.MAX:z.MAX_EXT),R.clear(R.COLOR_BUFFER_BIT),xe?R.drawArraysInstanced(R.TRIANGLES,0,3,Ie.length/4):b.drawArraysInstancedANGLE(R.TRIANGLES,0,3,Ie.length/4)})}),ue("post",o,M,function(re){re.setAttribute("aUV",2,R.STATIC_DRAW,0,w),re.setUniform("1i","tex",be),R.bindFramebuffer(R.FRAMEBUFFER,ce),R.disable(R.BLEND),R.colorMask(we===0,we===1,we===2,we===3),R.viewport(Q,ie,V,k),R.scissor(Q,ie,V,k),R.drawArrays(R.TRIANGLES,0,3)})}),R.isContextLost())throw ae(),new Error("webgl context lost")})}function B(V){var k=!V||V===T?E:V.canvas||V,A=S.get(k);if(A===void 0){F=!0;var D=null;try{var K=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],Y=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,V);A=Y&&K.length===Y.length&&Y.every(function(q,ce){return q===K[ce]}),A||(D="bad trial run results",console.info(K,Y))}catch(q){A=!1,D=q.message}D&&console.warn("WebGL SDF generation not supported:",D),F=!1,S.set(k,A)}return A}var X=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:L,generateIntoFramebuffer:I,isSupported:B});function H(V,k,A,D,K,Y){K===void 0&&(K=Math.max(D[2]-D[0],D[3]-D[1])/2),Y===void 0&&(Y=1);try{return U.apply(X,arguments)}catch(q){return console.info("WebGL SDF generation failed, falling back to JS",q),g.apply(y,arguments)}}function j(V,k,A,D,K,Y,q,ce,Q,ie){K===void 0&&(K=Math.max(D[2]-D[0],D[3]-D[1])/2),Y===void 0&&(Y=1),ce===void 0&&(ce=0),Q===void 0&&(Q=0),ie===void 0&&(ie=0);try{return L.apply(X,arguments)}catch(we){return console.info("WebGL SDF generation failed, falling back to JS",we),_.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=H,e.generateIntoCanvas=j,e.javascript=y,e.pathToLineSegments=s,e.webgl=X,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return r}function Kv(){var r=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(ae,ge){i[ae]=1<<ge+1,n[i[ae]]=ae}),Object.freeze(i);var s=i.LRI|i.RLI|i.FSI,o=i.L|i.R|i.AL,a=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|s|i.PDI|l,u=null;function h(){if(!u){u=new Map;var ae=function(be){if(t.hasOwnProperty(be)){var re=0;t[be].split(",").forEach(function(Ue){var C=Ue.split("+"),b=C[0],z=C[1];b=parseInt(b,36),z=z?parseInt(z,36):0,u.set(re+=b,i[be]);for(var Se=0;Se<z;Se++)u.set(++re,i[be])})}};for(var ge in t)ae(ge)}}function f(ae){return h(),u.get(ae.codePointAt(0))||i.L}function d(ae){return n[f(ae)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(ae,ge){var be=36,re=0,Ue=new Map,C=ge&&new Map,b;return ae.split(",").forEach(function z(Se){if(Se.indexOf("+")!==-1)for(var ee=+Se;ee--;)z(b);else{b=Se;var fe=Se.split(">"),Ae=fe[0],ve=fe[1];Ae=String.fromCodePoint(re+=parseInt(Ae,be)),ve=String.fromCodePoint(re+=parseInt(ve,be)),Ue.set(Ae,ve),ge&&C.set(ve,Ae)}}),{map:Ue,reverseMap:C}}var p,m,y;function v(){if(!p){var ae=_(g.pairs,!0),ge=ae.map,be=ae.reverseMap;p=ge,m=be,y=_(g.canonical,!1).map}}function x(ae){return v(),p.get(ae)||null}function M(ae){return v(),m.get(ae)||null}function w(ae){return v(),y.get(ae)||null}var T=i.L,F=i.R,E=i.EN,S=i.ES,G=i.ET,U=i.AN,L=i.CS,I=i.B,B=i.S,X=i.ON,H=i.BN,j=i.NSM,V=i.AL,k=i.LRO,A=i.RLO,D=i.LRE,K=i.RLE,Y=i.PDF,q=i.LRI,ce=i.RLI,Q=i.FSI,ie=i.PDI;function we(ae,ge){for(var be=125,re=new Uint32Array(ae.length),Ue=0;Ue<ae.length;Ue++)re[Ue]=f(ae[Ue]);var C=new Map;function b(It,tn){var Ft=re[It];re[It]=tn,C.set(Ft,C.get(Ft)-1),Ft&a&&C.set(a,C.get(a)-1),C.set(tn,(C.get(tn)||0)+1),tn&a&&C.set(a,(C.get(a)||0)+1)}for(var z=new Uint8Array(ae.length),Se=new Map,ee=[],fe=null,Ae=0;Ae<ae.length;Ae++)fe||ee.push(fe={start:Ae,end:ae.length-1,level:ge==="rtl"?1:ge==="ltr"?0:cl(Ae,!1)}),re[Ae]&I&&(fe.end=Ae,fe=null);for(var ve=K|D|A|k|s|ie|Y|I,J=function(It){return It+(It&1?1:2)},O=function(It){return It+(It&1?2:1)},se=0;se<ee.length;se++){fe=ee[se];var ye=[{_level:fe.level,_override:0,_isolate:0}],he=void 0,Ee=0,Fe=0,Ge=0;C.clear();for(var N=fe.start;N<=fe.end;N++){var _e=re[N];if(he=ye[ye.length-1],C.set(_e,(C.get(_e)||0)+1),_e&a&&C.set(a,(C.get(a)||0)+1),_e&ve)if(_e&(K|D)){z[N]=he._level;var Z=(_e===K?O:J)(he._level);Z<=be&&!Ee&&!Fe?ye.push({_level:Z,_override:0,_isolate:0}):Ee||Fe++}else if(_e&(A|k)){z[N]=he._level;var Ce=(_e===A?O:J)(he._level);Ce<=be&&!Ee&&!Fe?ye.push({_level:Ce,_override:_e&A?F:T,_isolate:0}):Ee||Fe++}else if(_e&s){_e&Q&&(_e=cl(N+1,!0)===1?ce:q),z[N]=he._level,he._override&&b(N,he._override);var Me=(_e===ce?O:J)(he._level);Me<=be&&Ee===0&&Fe===0?(Ge++,ye.push({_level:Me,_override:0,_isolate:1,_isolInitIndex:N})):Ee++}else if(_e&ie){if(Ee>0)Ee--;else if(Ge>0){for(Fe=0;!ye[ye.length-1]._isolate;)ye.pop();var Oe=ye[ye.length-1]._isolInitIndex;Oe!=null&&(Se.set(Oe,N),Se.set(N,Oe)),ye.pop(),Ge--}he=ye[ye.length-1],z[N]=he._level,he._override&&b(N,he._override)}else _e&Y?(Ee===0&&(Fe>0?Fe--:!he._isolate&&ye.length>1&&(ye.pop(),he=ye[ye.length-1])),z[N]=he._level):_e&I&&(z[N]=fe.level);else z[N]=he._level,he._override&&_e!==H&&b(N,he._override)}for(var He=[],Be=null,ze=fe.start;ze<=fe.end;ze++){var Ye=re[ze];if(!(Ye&l)){var tt=z[ze],Qe=Ye&s,ht=Ye===ie;Be&&tt===Be._level?(Be._end=ze,Be._endsWithIsolInit=Qe):He.push(Be={_start:ze,_end:ze,_level:tt,_startsWithPDI:ht,_endsWithIsolInit:Qe})}}for(var Ut=[],pn=0;pn<He.length;pn++){var Dt=He[pn];if(!Dt._startsWithPDI||Dt._startsWithPDI&&!Se.has(Dt._start)){for(var Qt=[Be=Dt],Xt=void 0;Be&&Be._endsWithIsolInit&&(Xt=Se.get(Be._end))!=null;)for(var Yt=pn+1;Yt<He.length;Yt++)if(He[Yt]._start===Xt){Qt.push(Be=He[Yt]);break}for(var xt=[],bn=0;bn<Qt.length;bn++)for(var ns=Qt[bn],P=ns._start;P<=ns._end;P++)xt.push(P);for(var te=z[xt[0]],pe=fe.level,ne=xt[0]-1;ne>=0;ne--)if(!(re[ne]&l)){pe=z[ne];break}var de=xt[xt.length-1],Ne=z[de],ke=fe.level;if(!(re[de]&s)){for(var Ve=de+1;Ve<=fe.end;Ve++)if(!(re[Ve]&l)){ke=z[Ve];break}}Ut.push({_seqIndices:xt,_sosType:Math.max(pe,te)%2?F:T,_eosType:Math.max(ke,Ne)%2?F:T})}}for(var We=0;We<Ut.length;We++){var qe=Ut[We],Re=qe._seqIndices,je=qe._sosType,nt=qe._eosType,$e=z[Re[0]]&1?F:T;if(C.get(j))for(var yt=0;yt<Re.length;yt++){var jt=Re[yt];if(re[jt]&j){for(var it=je,Ke=yt-1;Ke>=0;Ke--)if(!(re[Re[Ke]]&l)){it=re[Re[Ke]];break}b(jt,it&(s|ie)?X:it)}}if(C.get(E))for(var On=0;On<Re.length;On++){var st=Re[On];if(re[st]&E)for(var qt=On-1;qt>=-1;qt--){var dr=qt===-1?je:re[Re[qt]];if(dr&o){dr===V&&b(st,U);break}}}if(C.get(V))for(var En=0;En<Re.length;En++){var Mi=Re[En];re[Mi]&V&&b(Mi,F)}if(C.get(S)||C.get(L))for(var lt=1;lt<Re.length-1;lt++){var $t=Re[lt];if(re[$t]&(S|L)){for(var mn=0,St=0,ei=lt-1;ei>=0&&(mn=re[Re[ei]],!!(mn&l));ei--);for(var pr=lt+1;pr<Re.length&&(St=re[Re[pr]],!!(St&l));pr++);mn===St&&(re[$t]===S?mn===E:mn&(E|U))&&b($t,mn)}}if(C.get(E))for(var kt=0;kt<Re.length;kt++){var Dh=Re[kt];if(re[Dh]&E){for(var is=kt-1;is>=0&&re[Re[is]]&(G|l);is--)b(Re[is],E);for(kt++;kt<Re.length&&re[Re[kt]]&(G|l|E);kt++)re[Re[kt]]!==E&&b(Re[kt],E)}}if(C.get(G)||C.get(S)||C.get(L))for(var mr=0;mr<Re.length;mr++){var Jo=Re[mr];if(re[Jo]&(G|S|L)){b(Jo,X);for(var rs=mr-1;rs>=0&&re[Re[rs]]&l;rs--)b(Re[rs],X);for(var ss=mr+1;ss<Re.length&&re[Re[ss]]&l;ss++)b(Re[ss],X)}}if(C.get(E))for(var oa=0,Zo=je;oa<Re.length;oa++){var Qo=Re[oa],la=re[Qo];la&E?Zo===T&&b(Qo,T):la&o&&(Zo=la)}if(C.get(a)){var gr=F|E|U,$o=gr|T,as=[];{for(var bi=[],Ei=0;Ei<Re.length;Ei++)if(re[Re[Ei]]&a){var _r=ae[Re[Ei]],el=void 0;if(x(_r)!==null)if(bi.length<63)bi.push({char:_r,seqIndex:Ei});else break;else if((el=M(_r))!==null)for(var vr=bi.length-1;vr>=0;vr--){var ca=bi[vr].char;if(ca===el||ca===M(w(_r))||x(w(ca))===_r){as.push([bi[vr].seqIndex,Ei]),bi.length=vr;break}}}as.sort(function(It,tn){return It[0]-tn[0]})}for(var ua=0;ua<as.length;ua++){for(var tl=as[ua],os=tl[0],ha=tl[1],nl=!1,en=0,fa=os+1;fa<ha;fa++){var il=Re[fa];if(re[il]&$o){nl=!0;var rl=re[il]&gr?F:T;if(rl===$e){en=rl;break}}}if(nl&&!en){en=je;for(var da=os-1;da>=0;da--){var sl=Re[da];if(re[sl]&$o){var al=re[sl]&gr?F:T;al!==$e?en=al:en=$e;break}}}if(en){if(re[Re[os]]=re[Re[ha]]=en,en!==$e){for(var xr=os+1;xr<Re.length;xr++)if(!(re[Re[xr]]&l)){f(ae[Re[xr]])&j&&(re[Re[xr]]=en);break}}if(en!==$e){for(var yr=ha+1;yr<Re.length;yr++)if(!(re[Re[yr]]&l)){f(ae[Re[yr]])&j&&(re[Re[yr]]=en);break}}}}for(var Nn=0;Nn<Re.length;Nn++)if(re[Re[Nn]]&a){for(var ol=Nn,pa=Nn,ma=je,Sr=Nn-1;Sr>=0;Sr--)if(re[Re[Sr]]&l)ol=Sr;else{ma=re[Re[Sr]]&gr?F:T;break}for(var ll=nt,Mr=Nn+1;Mr<Re.length;Mr++)if(re[Re[Mr]]&(a|l))pa=Mr;else{ll=re[Re[Mr]]&gr?F:T;break}for(var ga=ol;ga<=pa;ga++)re[Re[ga]]=ma===ll?ma:$e;Nn=pa}}}for(var zt=fe.start;zt<=fe.end;zt++){var Ih=z[zt],ls=re[zt];if(Ih&1?ls&(T|E|U)&&z[zt]++:ls&F?z[zt]++:ls&(U|E)&&(z[zt]+=2),ls&l&&(z[zt]=zt===0?fe.level:z[zt-1]),zt===fe.end||f(ae[zt])&(B|I))for(var cs=zt;cs>=0&&f(ae[cs])&c;cs--)z[cs]=fe.level}}return{levels:z,paragraphs:ee};function cl(It,tn){for(var Ft=It;Ft<ae.length;Ft++){var Bn=re[Ft];if(Bn&(F|V))return 1;if(Bn&(I|T)||tn&&Bn===ie)return 0;if(Bn&s){var ul=Fh(Ft);Ft=ul===-1?ae.length:ul}}return 0}function Fh(It){for(var tn=1,Ft=It+1;Ft<ae.length;Ft++){var Bn=re[Ft];if(Bn&I)break;if(Bn&ie){if(--tn===0)return Ft}else Bn&s&&tn++}return-1}}var Ie="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",me;function R(){if(!me){var ae=_(Ie,!0),ge=ae.map,be=ae.reverseMap;be.forEach(function(re,Ue){ge.set(Ue,re)}),me=ge}}function xe(ae){return R(),me.get(ae)||null}function $(ae,ge,be,re){var Ue=ae.length;be=Math.max(0,be==null?0:+be),re=Math.min(Ue-1,re==null?Ue-1:+re);for(var C=new Map,b=be;b<=re;b++)if(ge[b]&1){var z=xe(ae[b]);z!==null&&C.set(b,z)}return C}function ue(ae,ge,be,re){var Ue=ae.length;be=Math.max(0,be==null?0:+be),re=Math.min(Ue-1,re==null?Ue-1:+re);var C=[];return ge.paragraphs.forEach(function(b){var z=Math.max(be,b.start),Se=Math.min(re,b.end);if(z<Se){for(var ee=ge.levels.slice(z,Se+1),fe=Se;fe>=z&&f(ae[fe])&c;fe--)ee[fe]=b.level;for(var Ae=b.level,ve=1/0,J=0;J<ee.length;J++){var O=ee[J];O>Ae&&(Ae=O),O<ve&&(ve=O|1)}for(var se=Ae;se>=ve;se--)for(var ye=0;ye<ee.length;ye++)if(ee[ye]>=se){for(var he=ye;ye+1<ee.length&&ee[ye+1]>=se;)ye++;ye>he&&C.push([he+z,ye+z])}}}),C}function le(ae,ge,be,re){var Ue=Pe(ae,ge,be,re),C=[].concat(ae);return Ue.forEach(function(b,z){C[z]=(ge.levels[b]&1?xe(ae[b]):null)||ae[b]}),C.join("")}function Pe(ae,ge,be,re){for(var Ue=ue(ae,ge,be,re),C=[],b=0;b<ae.length;b++)C[b]=b;return Ue.forEach(function(z){for(var Se=z[0],ee=z[1],fe=C.slice(Se,ee+1),Ae=fe.length;Ae--;)C[ee-Ae]=fe[Ae]}),C}return e.closingToOpeningBracket=M,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=we,e.getMirroredCharacter=xe,e.getMirroredCharactersMap=$,e.getReorderSegments=ue,e.getReorderedIndices=Pe,e.getReorderedString=le,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return r}const ph=/\bvoid\s+main\s*\(\s*\)\s*{/g;function go(r){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let s=Je[n];return s?go(s):i}return r.replace(e,t)}const Mt=[];for(let r=0;r<256;r++)Mt[r]=(r<16?"0":"")+r.toString(16);function Jv(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[r&255]+Mt[r>>8&255]+Mt[r>>16&255]+Mt[r>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toUpperCase()}const si=Object.assign||function(){let r=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n])}return r},Zv=Date.now(),Xc=new WeakMap,Yc=new Map;let Qv=1e10;function _o(r,e){const t=n0(e);let i=Xc.get(r);if(i||Xc.set(r,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,s=function(c,u){r.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Yc[h];if(!f){const d=$v(this,c,e,t);f=Yc[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,si(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Zv}}),this[n]&&this[n](c)},o=function(){return a(e.chained?r:r.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:r}),Object.defineProperty(u,"id",{value:Qv++}),u.uuid=Jv(),u.uniforms=si({},c.uniforms,e.uniforms),u.defines=si({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=si({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return r.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return s},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return r.copy.call(this,c),!r.isShaderMaterial&&!r.isDerivedMaterial&&(si(this.extensions,c.extensions),si(this.defines,c.defines),si(this.uniforms,Vu.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new r.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=_o(r.isDerivedMaterial?r.getDepthMaterial():new Zu({depthPacking:Du}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=_o(r.isDerivedMaterial?r.getDistanceMaterial():new Qu,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),r.dispose.call(this)}}};return i[t]=o,new o}function $v(r,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:s,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=i;if(s=s||"",o=o||"",a=a||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=go(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=go(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(f){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(_.push(p),"")),h=`${f}
${_.join(`
`)}
${h}`}if(g){const _=`
uniform float ${g};
`;s=_+s,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,s=`${s}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,o=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,p,m,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,m))?p:`troika_${p}_${n}`),r.map&&r.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=jc(e,n,s,o,a),t=jc(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function jc(r,e,t,i,n){return(i||n||t)&&(r=r.replace(ph,`
${t}
void troikaOrigMain${e}() {`),r+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),r}function e0(r,e){return r==="uniforms"?void 0:typeof e=="function"?e.toString():e}let t0=0;const qc=new Map;function n0(r){const e=JSON.stringify(r,e0);let t=qc.get(e);return t==null&&qc.set(e,t=++t0),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function i0(){return typeof window>"u"&&(self.window=self),function(r){var e={parse:function(n){var s=e._bin,o=new Uint8Array(n);if(s.readASCII(o,0,4)=="ttcf"){var a=4;s.readUshort(o,a),a+=2,s.readUshort(o,a),a+=2;var l=s.readUint(o,a);a+=4;for(var c=[],u=0;u<l;u++){var h=s.readUint(o,a);a+=4,c.push(e._readFont(o,h))}return c}return[e._readFont(o,0)]},_readFont:function(n,s){var o=e._bin,a=s;o.readFixed(n,s),s+=4;var l=o.readUshort(n,s);s+=2,o.readUshort(n,s),s+=2,o.readUshort(n,s),s+=2,o.readUshort(n,s),s+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:n,_offset:a},h={},f=0;f<l;f++){var d=o.readASCII(n,s,4);s+=4,o.readUint(n,s),s+=4;var g=o.readUint(n,s);s+=4;var _=o.readUint(n,s);s+=4,h[d]={offset:g,length:_}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(n,h[p].offset,h[p].length,u))}return u},_tabOffset:function(n,s,o){for(var a=e._bin,l=a.readUshort(n,o+4),c=o+12,u=0;u<l;u++){var h=a.readASCII(n,c,4);c+=4,a.readUint(n,c),c+=4;var f=a.readUint(n,c);if(c+=4,a.readUint(n,c),c+=4,h==s)return f}return 0}};e._bin={readFixed:function(n,s){return(n[s]<<8|n[s+1])+(n[s+2]<<8|n[s+3])/65540},readF2dot14:function(n,s){return e._bin.readShort(n,s)/16384},readInt:function(n,s){return e._bin._view(n).getInt32(s)},readInt8:function(n,s){return e._bin._view(n).getInt8(s)},readShort:function(n,s){return e._bin._view(n).getInt16(s)},readUshort:function(n,s){return e._bin._view(n).getUint16(s)},readUshorts:function(n,s,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(n,s+2*l));return a},readUint:function(n,s){return e._bin._view(n).getUint32(s)},readUint64:function(n,s){return 4294967296*e._bin.readUint(n,s)+e._bin.readUint(n,s+4)},readASCII:function(n,s,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(n[s+l]);return a},readUnicode:function(n,s,o){for(var a="",l=0;l<o;l++){var c=n[s++]<<8|n[s++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,s,o){var a=e._bin._tdec;return a&&s==0&&o==n.length?a.decode(n):e._bin.readASCII(n,s,o)},readBytes:function(n,s,o){for(var a=[],l=0;l<o;l++)a.push(n[s+l]);return a},readASCIIArray:function(n,s,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(n[s+l]));return a},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,s,o,a,l){var c=e._bin,u={},h=s;c.readFixed(n,s),s+=4;var f=c.readUshort(n,s);s+=2;var d=c.readUshort(n,s);s+=2;var g=c.readUshort(n,s);return s+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,s,o){var a=e._bin,l=s,c=[],u=a.readUshort(n,s);s+=2;for(var h=0;h<u;h++){var f=a.readUshort(n,s);s+=2;var d=e._lctf.readLookupTable(n,l+f,o);c.push(d)}return c},e._lctf.readLookupTable=function(n,s,o){var a=e._bin,l=s,c={tabs:[]};c.ltype=a.readUshort(n,s),s+=2,c.flag=a.readUshort(n,s),s+=2;var u=a.readUshort(n,s);s+=2;for(var h=c.ltype,f=0;f<u;f++){var d=a.readUshort(n,s);s+=2;var g=o(n,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var s=0,o=0;o<32;o++)n>>>o&1&&s++;return s},e._lctf.readClassDef=function(n,s){var o=e._bin,a=[],l=o.readUshort(n,s);if(s+=2,l==1){var c=o.readUshort(n,s);s+=2;var u=o.readUshort(n,s);s+=2;for(var h=0;h<u;h++)a.push(c+h),a.push(c+h),a.push(o.readUshort(n,s)),s+=2}if(l==2){var f=o.readUshort(n,s);for(s+=2,h=0;h<f;h++)a.push(o.readUshort(n,s)),s+=2,a.push(o.readUshort(n,s)),s+=2,a.push(o.readUshort(n,s)),s+=2}return a},e._lctf.getInterval=function(n,s){for(var o=0;o<n.length;o+=3){var a=n[o],l=n[o+1];if(n[o+2],a<=s&&s<=l)return o}return-1},e._lctf.readCoverage=function(n,s){var o=e._bin,a={};a.fmt=o.readUshort(n,s),s+=2;var l=o.readUshort(n,s);return s+=2,a.fmt==1&&(a.tab=o.readUshorts(n,s,l)),a.fmt==2&&(a.tab=o.readUshorts(n,s,3*l)),a},e._lctf.coverageIndex=function(n,s){var o=n.tab;if(n.fmt==1)return o.indexOf(s);if(n.fmt==2){var a=e._lctf.getInterval(o,s);if(a!=-1)return o[a+2]+(s-o[a])}return-1},e._lctf.readFeatureList=function(n,s){var o=e._bin,a=s,l=[],c=o.readUshort(n,s);s+=2;for(var u=0;u<c;u++){var h=o.readASCII(n,s,4);s+=4;var f=o.readUshort(n,s);s+=2;var d=e._lctf.readFeatureTable(n,a+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,s){var o=e._bin,a=s,l={},c=o.readUshort(n,s);s+=2,c>0&&(l.featureParams=a+c);var u=o.readUshort(n,s);s+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(o.readUshort(n,s+2*h));return l},e._lctf.readScriptList=function(n,s){var o=e._bin,a=s,l={},c=o.readUshort(n,s);s+=2;for(var u=0;u<c;u++){var h=o.readASCII(n,s,4);s+=4;var f=o.readUshort(n,s);s+=2,l[h.trim()]=e._lctf.readScriptTable(n,a+f)}return l},e._lctf.readScriptTable=function(n,s){var o=e._bin,a=s,l={},c=o.readUshort(n,s);s+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,a+c));var u=o.readUshort(n,s);s+=2;for(var h=0;h<u;h++){var f=o.readASCII(n,s,4);s+=4;var d=o.readUshort(n,s);s+=2,l[f.trim()]=e._lctf.readLangSysTable(n,a+d)}return l},e._lctf.readLangSysTable=function(n,s){var o=e._bin,a={};o.readUshort(n,s),s+=2,a.reqFeature=o.readUshort(n,s),s+=2;var l=o.readUshort(n,s);return s+=2,a.features=o.readUshorts(n,s,l),a},e.CFF={},e.CFF.parse=function(n,s,o){var a=e._bin;(n=new Uint8Array(n.buffer,s,o))[s=0],n[++s],n[++s],n[++s],s++;var l=[];s=e.CFF.readIndex(n,s,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(n,s+l[u],l[u+1]-l[u]));s+=l[l.length-1];var h=[];s=e.CFF.readIndex(n,s,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,s+h[u],s+h[u+1]));s+=h[h.length-1];var d=f[0],g=[];s=e.CFF.readIndex(n,s,g);var _=[];for(u=0;u<g.length-1;u++)_.push(a.readASCII(n,s+g[u],g[u+1]-g[u]));if(s+=g[g.length-1],e.CFF.readSubrs(n,s,d),d.CharStrings){s=d.CharStrings,g=[],s=e.CFF.readIndex(n,s,g);var p=[];for(u=0;u<g.length-1;u++)p.push(a.readBytes(n,s+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){s=d.FDArray;var m=[];for(s=e.CFF.readIndex(n,s,m),d.FDArray=[],u=0;u<m.length-1;u++){var y=e.CFF.readDict(n,s+m[u],s+m[u+1]);e.CFF._readFDict(n,y,_),d.FDArray.push(y)}s+=m[m.length-1],s=d.FDSelect,d.FDSelect=[];var v=n[s];if(s++,v!=3)throw v;var x=a.readUshort(n,s);for(s+=2,u=0;u<x+1;u++)d.FDSelect.push(a.readUshort(n,s),n[s+2]),s+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,s,o){var a;for(var l in s.Private&&(a=s.Private[1],s.Private=e.CFF.readDict(n,a,a+s.Private[0]),s.Private.Subrs&&e.CFF.readSubrs(n,a+s.Private.Subrs,s.Private)),s)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(s[l]=o[s[l]-426+35])},e.CFF.readSubrs=function(n,s,o){var a=e._bin,l=[];s=e.CFF.readIndex(n,s,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var h=0;h<l.length-1;h++)o.Subrs.push(a.readBytes(n,s+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,s){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==s)return o;return-1},e.CFF.glyphBySE=function(n,s){return s<0||s>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[s])},e.CFF.readEncoding=function(n,s,o){e._bin;var a=[".notdef"],l=n[s];if(s++,l!=0)throw"error: unknown encoding format: "+l;var c=n[s];s++;for(var u=0;u<c;u++)a.push(n[s+u]);return a},e.CFF.readCharset=function(n,s,o){var a=e._bin,l=[".notdef"],c=n[s];if(s++,c==0)for(var u=0;u<o;u++){var h=a.readUshort(n,s);s+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){h=a.readUshort(n,s),s+=2;var f=0;for(c==1?(f=n[s],s++):(f=a.readUshort(n,s),s+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,s,o){var a=e._bin,l=a.readUshort(n,s)+1,c=n[s+=2];if(s++,c==1)for(var u=0;u<l;u++)o.push(n[s+u]);else if(c==2)for(u=0;u<l;u++)o.push(a.readUshort(n,s+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&a.readUint(n,s+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(s+=l*c)-1},e.CFF.getCharString=function(n,s,o){var a=e._bin,l=n[s],c=n[s+1];n[s+2],n[s+3],n[s+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=a.readShort(n,s+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=a.readInt(n,s+1)/65535,u=5),o.val=f??"o"+h,o.size=u},e.CFF.readCharString=function(n,s,o){for(var a=s+o,l=e._bin,c=[];s<a;){var u=n[s],h=n[s+1];n[s+2],n[s+3],n[s+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(n,s+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,s+1)/65535,f=5),c.push(g??"o"+d),s+=f}return c},e.CFF.readDict=function(n,s,o){for(var a=e._bin,l={},c=[];s<o;){var u=n[s],h=n[s+1];n[s+2],n[s+3],n[s+4];var f=1,d=null,g=null;if(u==28&&(g=a.readShort(n,s+1),f=3),u==29&&(g=a.readInt(n,s+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=a.readInt(n,s+1)/65535,f=5,"unknown number";if(u==30){var _=[];for(f=1;;){var p=n[s+f];f++;var m=p>>4,y=15&p;if(m!=15&&_.push(m),y!=15&&_.push(y),y==15)break}for(var v="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],M=0;M<_.length;M++)v+=x[_[M]];g=parseFloat(v)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),s+=f}return l},e.cmap={},e.cmap.parse=function(n,s,o){n=new Uint8Array(n.buffer,s,o),s=0;var a=e._bin,l={};a.readUshort(n,s),s+=2;var c=a.readUshort(n,s);s+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=a.readUshort(n,s);s+=2;var d=a.readUshort(n,s);s+=2;var g=a.readUint(n,s);s+=4;var _="p"+f+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var y=a.readUshort(n,g);y==0?m=e.cmap.parse0(n,g):y==4?m=e.cmap.parse4(n,g):y==6?m=e.cmap.parse6(n,g):y==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+y,f,d,g),l.tables.push(m)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=p}return l},e.cmap.parse0=function(n,s){var o=e._bin,a={};a.format=o.readUshort(n,s),s+=2;var l=o.readUshort(n,s);s+=2,o.readUshort(n,s),s+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(n[s+c]);return a},e.cmap.parse4=function(n,s){var o=e._bin,a=s,l={};l.format=o.readUshort(n,s),s+=2;var c=o.readUshort(n,s);s+=2,o.readUshort(n,s),s+=2;var u=o.readUshort(n,s);s+=2;var h=u/2;l.searchRange=o.readUshort(n,s),s+=2,l.entrySelector=o.readUshort(n,s),s+=2,l.rangeShift=o.readUshort(n,s),s+=2,l.endCount=o.readUshorts(n,s,h),s+=2*h,s+=2,l.startCount=o.readUshorts(n,s,h),s+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(o.readShort(n,s)),s+=2;for(l.idRangeOffset=o.readUshorts(n,s,h),s+=2*h,l.glyphIdArray=[];s<a+c;)l.glyphIdArray.push(o.readUshort(n,s)),s+=2;return l},e.cmap.parse6=function(n,s){var o=e._bin,a={};a.format=o.readUshort(n,s),s+=2,o.readUshort(n,s),s+=2,o.readUshort(n,s),s+=2,a.firstCode=o.readUshort(n,s),s+=2;var l=o.readUshort(n,s);s+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(n,s)),s+=2;return a},e.cmap.parse12=function(n,s){var o=e._bin,a={};a.format=o.readUshort(n,s),s+=2,s+=2,o.readUint(n,s),s+=4,o.readUint(n,s),s+=4;var l=o.readUint(n,s);s+=4,a.groups=[];for(var c=0;c<l;c++){var u=s+12*c,h=o.readUint(n,u+0),f=o.readUint(n,u+4),d=o.readUint(n,u+8);a.groups.push([h,f,d])}return a},e.glyf={},e.glyf.parse=function(n,s,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,s){var o=e._bin,a=n._data,l=e._tabOffset(a,"glyf",n._offset)+n.loca[s];if(n.loca[s]==n.loca[s+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,l)),l+=2;var h=o.readUshort(a,l);if(l+=2,a.length-l<h)return null;c.instructions=o.readBytes(a,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=a[l];if(l++,c.flags.push(d),(8&d)!=0){var g=a[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?a[l]:-a[l]),l++):m?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?a[l]:-a[l]),l++):m?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var y=0,v=0;for(u=0;u<f;u++)y+=c.xs[u],v+=c.ys[u],c.xs[u]=y,c.ys[u]=v}else{var x;c.parts=[];do{x=o.readUshort(a,l),l+=2;var M={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(M),M.glyphIndex=o.readUshort(a,l),l+=2,1&x){var w=o.readShort(a,l);l+=2;var T=o.readShort(a,l);l+=2}else w=o.readInt8(a,l),l++,T=o.readInt8(a,l),l++;2&x?(M.m.tx=w,M.m.ty=T):(M.p1=w,M.p2=T),8&x?(M.m.a=M.m.d=o.readF2dot14(a,l),l+=2):64&x?(M.m.a=o.readF2dot14(a,l),l+=2,M.m.d=o.readF2dot14(a,l),l+=2):128&x&&(M.m.a=o.readF2dot14(a,l),l+=2,M.m.b=o.readF2dot14(a,l),l+=2,M.m.c=o.readF2dot14(a,l),l+=2,M.m.d=o.readF2dot14(a,l),l+=2)}while(32&x);if(256&x){var F=o.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<F;u++)c.instr.push(a[l]),l++}}return c},e.GPOS={},e.GPOS.parse=function(n,s,o,a){return e._lctf.parse(n,s,o,a,e.GPOS.subt)},e.GPOS.subt=function(n,s,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,s==1||s==2||s==3||s==7||s==8&&u.fmt<=2){var h=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(s==1&&u.fmt==1){var f=l.readUshort(n,o);o+=2;var d=e._lctf.numOfOnes(f);f!=0&&(u.pos=e.GPOS.readValueRecord(n,o,f))}else if(s==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,o),o+=2;var g=l.readUshort(n,o);o+=2,d=e._lctf.numOfOnes(f);var _=e._lctf.numOfOnes(g);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,o);o+=2;for(var m=0;m<p;m++){var y=c+l.readUshort(n,o);o+=2;var v=l.readUshort(n,y);y+=2;for(var x=[],M=0;M<v;M++){var w=l.readUshort(n,y);y+=2,f!=0&&(U=e.GPOS.readValueRecord(n,y,f),y+=2*d),g!=0&&(L=e.GPOS.readValueRecord(n,y,g),y+=2*_),x.push({gid2:w,val1:U,val2:L})}u.pairsets.push(x)}}if(u.fmt==2){var T=l.readUshort(n,o);o+=2;var F=l.readUshort(n,o);o+=2;var E=l.readUshort(n,o);o+=2;var S=l.readUshort(n,o);for(o+=2,u.classDef1=e._lctf.readClassDef(n,c+T),u.classDef2=e._lctf.readClassDef(n,c+F),u.matrix=[],m=0;m<E;m++){var G=[];for(M=0;M<S;M++){var U=null,L=null;f!=0&&(U=e.GPOS.readValueRecord(n,o,f),o+=2*d),g!=0&&(L=e.GPOS.readValueRecord(n,o,g),o+=2*_),G.push({val1:U,val2:L})}u.matrix.push(G)}}}else{if(s==9&&u.fmt==1){var I=l.readUshort(n,o);o+=2;var B=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=I;else if(a.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(n,a.ltype,c+B)}console.debug("unsupported GPOS table LookupType",s,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,s,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(n,s):0),s+=1&o?2:0,l.push(2&o?a.readShort(n,s):0),s+=2&o?2:0,l.push(4&o?a.readShort(n,s):0),s+=4&o?2:0,l.push(8&o?a.readShort(n,s):0),s+=8&o?2:0,l},e.GSUB={},e.GSUB.parse=function(n,s,o,a){return e._lctf.parse(n,s,o,a,e.GSUB.subt)},e.GSUB.subt=function(n,s,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,s!=1&&s!=4&&s!=5&&s!=6)return null;if(s==1||s==4||s==5&&u.fmt<=2||s==6&&u.fmt<=2){var h=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(s==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,o),o+=2;else if(u.fmt==2){var f=l.readUshort(n,o);o+=2,u.newg=l.readUshorts(n,o,f),o+=2*u.newg.length}}else if(s==4){u.vals=[],f=l.readUshort(n,o),o+=2;for(var d=0;d<f;d++){var g=l.readUshort(n,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+g))}}else if(s==5&&u.fmt==2){if(u.fmt==2){var _=l.readUshort(n,o);o+=2,u.cDef=e._lctf.readClassDef(n,c+_),u.scset=[];var p=l.readUshort(n,o);for(o+=2,d=0;d<p;d++){var m=l.readUshort(n,o);o+=2,u.scset.push(m==0?null:e.GSUB.readSubClassSet(n,c+m))}}}else if(s==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,o),o+=2;for(var y=[],v=0;v<f;v++)y.push(e._lctf.readCoverage(n,c+l.readUshort(n,o+2*v)));o+=2*f,d==0&&(u.backCvg=y),d==1&&(u.inptCvg=y),d==2&&(u.ahedCvg=y)}f=l.readUshort(n,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,o,f)}}else{if(s==7&&u.fmt==1){var x=l.readUshort(n,o);o+=2;var M=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=x;else if(a.ltype!=x)throw"invalid extension substitution";return e.GSUB.subt(n,a.ltype,c+M)}console.debug("unsupported GSUB table LookupType",s,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,s){var o=e._bin.readUshort,a=s,l=[],c=o(n,s);s+=2;for(var u=0;u<c;u++){var h=o(n,s);s+=2,l.push(e.GSUB.readSubClassRule(n,a+h))}return l},e.GSUB.readSubClassRule=function(n,s){var o=e._bin.readUshort,a={},l=o(n,s),c=o(n,s+=2);s+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(o(n,s)),s+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(n,s,c),a},e.GSUB.readSubstLookupRecords=function(n,s,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(n,s),a(n,s+2)),s+=4;return l},e.GSUB.readChainSubClassSet=function(n,s){var o=e._bin,a=s,l=[],c=o.readUshort(n,s);s+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,s);s+=2,l.push(e.GSUB.readChainSubClassRule(n,a+h))}return l},e.GSUB.readChainSubClassRule=function(n,s){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(n,s);s+=2,c==1&&u--,a[l[c]]=o.readUshorts(n,s,u),s+=2*a[l[c]].length}return u=o.readUshort(n,s),s+=2,a.subst=o.readUshorts(n,s,2*u),s+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(n,s){var o=e._bin,a=s,l=[],c=o.readUshort(n,s);s+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,s);s+=2,l.push(e.GSUB.readLigature(n,a+h))}return l},e.GSUB.readLigature=function(n,s){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(n,s),s+=2;var l=o.readUshort(n,s);s+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(n,s)),s+=2;return a},e.head={},e.head.parse=function(n,s,o){var a=e._bin,l={};return a.readFixed(n,s),s+=4,l.fontRevision=a.readFixed(n,s),s+=4,a.readUint(n,s),s+=4,a.readUint(n,s),s+=4,l.flags=a.readUshort(n,s),s+=2,l.unitsPerEm=a.readUshort(n,s),s+=2,l.created=a.readUint64(n,s),s+=8,l.modified=a.readUint64(n,s),s+=8,l.xMin=a.readShort(n,s),s+=2,l.yMin=a.readShort(n,s),s+=2,l.xMax=a.readShort(n,s),s+=2,l.yMax=a.readShort(n,s),s+=2,l.macStyle=a.readUshort(n,s),s+=2,l.lowestRecPPEM=a.readUshort(n,s),s+=2,l.fontDirectionHint=a.readShort(n,s),s+=2,l.indexToLocFormat=a.readShort(n,s),s+=2,l.glyphDataFormat=a.readShort(n,s),s+=2,l},e.hhea={},e.hhea.parse=function(n,s,o){var a=e._bin,l={};return a.readFixed(n,s),s+=4,l.ascender=a.readShort(n,s),s+=2,l.descender=a.readShort(n,s),s+=2,l.lineGap=a.readShort(n,s),s+=2,l.advanceWidthMax=a.readUshort(n,s),s+=2,l.minLeftSideBearing=a.readShort(n,s),s+=2,l.minRightSideBearing=a.readShort(n,s),s+=2,l.xMaxExtent=a.readShort(n,s),s+=2,l.caretSlopeRise=a.readShort(n,s),s+=2,l.caretSlopeRun=a.readShort(n,s),s+=2,l.caretOffset=a.readShort(n,s),s+=2,s+=8,l.metricDataFormat=a.readShort(n,s),s+=2,l.numberOfHMetrics=a.readUshort(n,s),s+=2,l},e.hmtx={},e.hmtx.parse=function(n,s,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<a.maxp.numGlyphs;f++)f<a.hhea.numberOfHMetrics&&(u=l.readUshort(n,s),s+=2,h=l.readShort(n,s),s+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,s,o,a){var l=e._bin,c=l.readUshort(n,s);if(s+=2,c==1)return e.kern.parseV1(n,s-2,o,a);var u=l.readUshort(n,s);s+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){s+=2,o=l.readUshort(n,s),s+=2;var d=l.readUshort(n,s);s+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;s=e.kern.readFormat0(n,s,h)}return h},e.kern.parseV1=function(n,s,o,a){var l=e._bin;l.readFixed(n,s),s+=4;var c=l.readUint(n,s);s+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,s),s+=4;var f=l.readUshort(n,s);s+=2,l.readUshort(n,s),s+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;s=e.kern.readFormat0(n,s,u)}return u},e.kern.readFormat0=function(n,s,o){var a=e._bin,l=-1,c=a.readUshort(n,s);s+=2,a.readUshort(n,s),s+=2,a.readUshort(n,s),s+=2,a.readUshort(n,s),s+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,s);s+=2;var f=a.readUshort(n,s);s+=2;var d=a.readShort(n,s);s+=2,h!=l&&(o.glyph1.push(h),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return s},e.loca={},e.loca.parse=function(n,s,o,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,h=a.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,s+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,s+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,s,o){var a=e._bin,l={},c=a.readUint(n,s);return s+=4,l.numGlyphs=a.readUshort(n,s),s+=2,c==65536&&(l.maxPoints=a.readUshort(n,s),s+=2,l.maxContours=a.readUshort(n,s),s+=2,l.maxCompositePoints=a.readUshort(n,s),s+=2,l.maxCompositeContours=a.readUshort(n,s),s+=2,l.maxZones=a.readUshort(n,s),s+=2,l.maxTwilightPoints=a.readUshort(n,s),s+=2,l.maxStorage=a.readUshort(n,s),s+=2,l.maxFunctionDefs=a.readUshort(n,s),s+=2,l.maxInstructionDefs=a.readUshort(n,s),s+=2,l.maxStackElements=a.readUshort(n,s),s+=2,l.maxSizeOfInstructions=a.readUshort(n,s),s+=2,l.maxComponentElements=a.readUshort(n,s),s+=2,l.maxComponentDepth=a.readUshort(n,s),s+=2),l},e.name={},e.name.parse=function(n,s,o){var a=e._bin,l={};a.readUshort(n,s),s+=2;var c=a.readUshort(n,s);s+=2,a.readUshort(n,s);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=s+=2,d=0;d<c;d++){var g=a.readUshort(n,s);s+=2;var _=a.readUshort(n,s);s+=2;var p=a.readUshort(n,s);s+=2;var m=a.readUshort(n,s);s+=2;var y=a.readUshort(n,s);s+=2;var v=a.readUshort(n,s);s+=2;var x,M=h[m],w=f+12*c+v;if(g==0)x=a.readUnicode(n,w,y/2);else if(g==3&&_==0)x=a.readUnicode(n,w,y/2);else if(_==0)x=a.readASCII(n,w,y);else if(_==1)x=a.readUnicode(n,w,y/2);else if(_==3)x=a.readUnicode(n,w,y/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;x=a.readASCII(n,w,y),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var T="p"+g+","+p.toString(16);l[T]==null&&(l[T]={}),l[T][M!==void 0?M:m]=x,l[T]._lang=p}for(var F in l)if(l[F].postScriptName!=null&&l[F]._lang==1033)return l[F];for(var F in l)if(l[F].postScriptName!=null&&l[F]._lang==0)return l[F];for(var F in l)if(l[F].postScriptName!=null&&l[F]._lang==3084)return l[F];for(var F in l)if(l[F].postScriptName!=null)return l[F];for(var F in l){u=F;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,s,o){var a=e._bin.readUshort(n,s);s+=2;var l={};if(a==0)e["OS/2"].version0(n,s,l);else if(a==1)e["OS/2"].version1(n,s,l);else if(a==2||a==3||a==4)e["OS/2"].version2(n,s,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(n,s,l)}return l},e["OS/2"].version0=function(n,s,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(n,s),s+=2,o.usWeightClass=a.readUshort(n,s),s+=2,o.usWidthClass=a.readUshort(n,s),s+=2,o.fsType=a.readUshort(n,s),s+=2,o.ySubscriptXSize=a.readShort(n,s),s+=2,o.ySubscriptYSize=a.readShort(n,s),s+=2,o.ySubscriptXOffset=a.readShort(n,s),s+=2,o.ySubscriptYOffset=a.readShort(n,s),s+=2,o.ySuperscriptXSize=a.readShort(n,s),s+=2,o.ySuperscriptYSize=a.readShort(n,s),s+=2,o.ySuperscriptXOffset=a.readShort(n,s),s+=2,o.ySuperscriptYOffset=a.readShort(n,s),s+=2,o.yStrikeoutSize=a.readShort(n,s),s+=2,o.yStrikeoutPosition=a.readShort(n,s),s+=2,o.sFamilyClass=a.readShort(n,s),s+=2,o.panose=a.readBytes(n,s,10),s+=10,o.ulUnicodeRange1=a.readUint(n,s),s+=4,o.ulUnicodeRange2=a.readUint(n,s),s+=4,o.ulUnicodeRange3=a.readUint(n,s),s+=4,o.ulUnicodeRange4=a.readUint(n,s),s+=4,o.achVendID=[a.readInt8(n,s),a.readInt8(n,s+1),a.readInt8(n,s+2),a.readInt8(n,s+3)],s+=4,o.fsSelection=a.readUshort(n,s),s+=2,o.usFirstCharIndex=a.readUshort(n,s),s+=2,o.usLastCharIndex=a.readUshort(n,s),s+=2,o.sTypoAscender=a.readShort(n,s),s+=2,o.sTypoDescender=a.readShort(n,s),s+=2,o.sTypoLineGap=a.readShort(n,s),s+=2,o.usWinAscent=a.readUshort(n,s),s+=2,o.usWinDescent=a.readUshort(n,s),s+=2},e["OS/2"].version1=function(n,s,o){var a=e._bin;return s=e["OS/2"].version0(n,s,o),o.ulCodePageRange1=a.readUint(n,s),s+=4,o.ulCodePageRange2=a.readUint(n,s),s+=4},e["OS/2"].version2=function(n,s,o){var a=e._bin;return s=e["OS/2"].version1(n,s,o),o.sxHeight=a.readShort(n,s),s+=2,o.sCapHeight=a.readShort(n,s),s+=2,o.usDefault=a.readUshort(n,s),s+=2,o.usBreak=a.readUshort(n,s),s+=2,o.usMaxContext=a.readUshort(n,s),s+=2},e["OS/2"].version5=function(n,s,o){var a=e._bin;return s=e["OS/2"].version2(n,s,o),o.usLowerOpticalPointSize=a.readUshort(n,s),s+=2,o.usUpperOpticalPointSize=a.readUshort(n,s),s+=2},e.post={},e.post.parse=function(n,s,o){var a=e._bin,l={};return l.version=a.readFixed(n,s),s+=4,l.italicAngle=a.readFixed(n,s),s+=4,l.underlinePosition=a.readShort(n,s),s+=2,l.underlineThickness=a.readShort(n,s),s+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,s){var o=n.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return s>=l.map.length?0:l.map[s];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(s<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>s?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[s-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:s+l.idDelta[c])}if(l.format==12){if(s>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=s&&s<=h[1])return h[2]+(s-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,s){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[s]){var a=n.SVG.entries[s];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),n.SVG.entries[s]=a),a)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=s;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[s],l,c,u,o)}else n.glyf&&e.U._drawGlyf(s,n,o);return o},e.U._drawGlyf=function(n,s,o){var a=s.glyf[n];a==null&&(a=s.glyf[n]=e.glyf._parseGlyf(s,n)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,s,o))},e.U._simpleGlyph=function(n,s){for(var o=0;o<n.noc;o++){for(var a=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=a;c<=l;c++){var u=c==a?l:c-1,h=c==l?a:c+1,f=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[h],_=n.xs[c],p=n.ys[c];if(c==a)if(f){if(!d){e.U.P.moveTo(s,_,p);continue}e.U.P.moveTo(s,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(s,n.xs[u],n.ys[u]):e.U.P.moveTo(s,(n.xs[u]+_)/2,(n.ys[u]+p)/2);f?d&&e.U.P.lineTo(s,_,p):g?e.U.P.qcurveTo(s,_,p,n.xs[h],n.ys[h]):e.U.P.qcurveTo(s,_,p,(_+n.xs[h])/2,(p+n.ys[h])/2)}e.U.P.closePath(s)}},e.U._compoGlyph=function(n,s,o){for(var a=0;a<n.parts.length;a++){var l={cmds:[],crds:[]},c=n.parts[a];e.U._drawGlyf(c.glyphIndex,s,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];o.crds.push(f*u.a+d*u.b+u.tx),o.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)o.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,s){var o=e._lctf.getInterval(s,n);return o==-1?0:s[o+2]},e.U.getPairAdjustment=function(n,s,o){var a=!1;if(n.GPOS)for(var l=n.GPOS,c=l.lookupList,u=l.featureList,h=[],f=0;f<u.length;f++){var d=u[f];if(d.tag=="kern"){a=!0;for(var g=0;g<d.tab.length;g++)if(!h[d.tab[g]]){h[d.tab[g]]=!0;for(var _=c[d.tab[g]],p=0;p<_.tabs.length;p++)if(_.tabs[p]!=null){var m,y=_.tabs[p];if((!y.coverage||(m=e._lctf.coverageIndex(y.coverage,s))!=-1)&&_.ltype!=1){if(_.ltype==2){var v=null;if(y.fmt==1){var x=y.pairsets[m];for(f=0;f<x.length;f++)x[f].gid2==o&&(v=x[f])}else if(y.fmt==2){var M=e.U._getGlyphClass(s,y.classDef1),w=e.U._getGlyphClass(o,y.classDef2);v=y.matrix[M][w]}if(v){var T=0;return v.val1&&v.val1[2]&&(T+=v.val1[2]),v.val2&&v.val2[0]&&(T+=v.val2[0]),T}}}}}}}if(n.kern&&!a){var F=n.kern.glyph1.indexOf(s);if(F!=-1){var E=n.kern.rval[F].glyph2.indexOf(o);if(E!=-1)return n.kern.rval[F].vals[E]}}return 0},e.U._applySubs=function(n,s,o,a){for(var l=n.length-s-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,h=o.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[s]))!=-1){if(o.ltype==1)n[s],h.fmt==1?n[s]=n[s]+h.delta:n[s]=h.newg[u];else if(o.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],_=g.chain.length;if(!(_>l)){for(var p=!0,m=0,y=0;y<_;y++){for(;n[s+m+(1+y)]==-1;)m++;g.chain[y]!=n[s+m+(1+y)]&&(p=!1)}if(p){for(n[s]=g.nglyph,y=0;y<_+m;y++)n[s+y+1]=-1;break}}}else if(o.ltype==5&&h.fmt==2)for(var v=e._lctf.getInterval(h.cDef,n[s]),x=h.cDef[v+2],M=h.scset[x],w=0;w<M.length;w++){var T=M[w],F=T.input;if(!(F.length>l)){for(p=!0,y=0;y<F.length;y++){var E=e._lctf.getInterval(h.cDef,n[s+1+y]);if(v==-1&&h.cDef[E+2]!=F[y]){p=!1;break}}if(p){var S=T.substLookupRecords;for(d=0;d<S.length;d+=2)S[d],S[d+1]}}}else if(o.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,s-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,s)||!e.U._glsCovered(n,h.ahedCvg,s+h.inptCvg.length))continue;var G=h.lookupRec;for(w=0;w<G.length;w+=2){v=G[w];var U=a[G[w+1]];e.U._applySubs(n,s+v,U,a)}}}}},e.U._glsCovered=function(n,s,o){for(var a=0;a<s.length;a++)if(e._lctf.coverageIndex(s[a],n[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(n,s,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<s.length;c++){var u=s[c];if(u!=-1){for(var h=c<s.length-1&&s[c+1]!=-1?s[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)a.crds.push(f.crds[d]+l),a.crds.push(f.crds[d+1]);for(o&&a.cmds.push(o),d=0;d<f.cmds.length;d++)a.cmds.push(f.cmds[d]);o&&a.cmds.push("X"),l+=n.hmtx.aWidth[u],c<s.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return a},e.U.P={},e.U.P.moveTo=function(n,s,o){n.cmds.push("M"),n.crds.push(s,o)},e.U.P.lineTo=function(n,s,o){n.cmds.push("L"),n.crds.push(s,o)},e.U.P.curveTo=function(n,s,o,a,l,c,u){n.cmds.push("C"),n.crds.push(s,o,a,l,c,u)},e.U.P.qcurveTo=function(n,s,o,a,l){n.cmds.push("Q"),n.crds.push(s,o,a,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,s,o,a,l){for(var c=s.stack,u=s.nStems,h=s.haveWidth,f=s.width,d=s.open,g=0,_=s.x,p=s.y,m=0,y=0,v=0,x=0,M=0,w=0,T=0,F=0,E=0,S=0,G={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,G);var U=G.val;if(g+=G.size,U=="o1"||U=="o18")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o4")c.length>1&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o5")for(;c.length>0;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);else if(U=="o6"||U=="o7")for(var L=c.length,I=U=="o6",B=0;B<L;B++){var X=c.shift();I?_+=X:p+=X,I=!I,e.U.P.lineTo(l,_,p)}else if(U=="o8"||U=="o24"){L=c.length;for(var H=0;H+6<=L;)m=_+c.shift(),y=p+c.shift(),v=m+c.shift(),x=y+c.shift(),_=v+c.shift(),p=x+c.shift(),e.U.P.curveTo(l,m,y,v,x,_,p),H+=6;U=="o24"&&(_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(y=p,v=(m=_+c.shift())+c.shift(),S=x=y+c.shift(),w=x,F=p,_=(T=(M=(E=v+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,v,x,E,S),e.U.P.curveTo(l,M,w,T,F,_,p)),U=="o1235"&&(m=_+c.shift(),y=p+c.shift(),v=m+c.shift(),x=y+c.shift(),E=v+c.shift(),S=x+c.shift(),M=E+c.shift(),w=S+c.shift(),T=M+c.shift(),F=w+c.shift(),_=T+c.shift(),p=F+c.shift(),c.shift(),e.U.P.curveTo(l,m,y,v,x,E,S),e.U.P.curveTo(l,M,w,T,F,_,p)),U=="o1236"&&(m=_+c.shift(),y=p+c.shift(),v=m+c.shift(),S=x=y+c.shift(),w=x,T=(M=(E=v+c.shift())+c.shift())+c.shift(),F=w+c.shift(),_=T+c.shift(),e.U.P.curveTo(l,m,y,v,x,E,S),e.U.P.curveTo(l,M,w,T,F,_,p)),U=="o1237"&&(m=_+c.shift(),y=p+c.shift(),v=m+c.shift(),x=y+c.shift(),E=v+c.shift(),S=x+c.shift(),M=E+c.shift(),w=S+c.shift(),T=M+c.shift(),F=w+c.shift(),Math.abs(T-_)>Math.abs(F-p)?_=T+c.shift():p=F+c.shift(),e.U.P.curveTo(l,m,y,v,x,E,S),e.U.P.curveTo(l,M,w,T,F,_,p));else if(U=="o14"){if(c.length>0&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),c.length==4){var j=c.shift(),V=c.shift(),k=c.shift(),A=c.shift(),D=e.CFF.glyphBySE(o,k),K=e.CFF.glyphBySE(o,A);e.U._drawCFF(o.CharStrings[D],s,o,a,l),s.x=j,s.y=V,e.U._drawCFF(o.CharStrings[K],s,o,a,l)}d&&(e.U.P.closePath(l),d=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(U=="o21")c.length>2&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),p+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o22")c.length>1&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o25"){for(;c.length>6;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);m=_+c.shift(),y=p+c.shift(),v=m+c.shift(),x=y+c.shift(),_=v+c.shift(),p=x+c.shift(),e.U.P.curveTo(l,m,y,v,x,_,p)}else if(U=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)m=_,y=p+c.shift(),_=v=m+c.shift(),p=(x=y+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,v,x,_,p);else if(U=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)y=p,v=(m=_+c.shift())+c.shift(),x=y+c.shift(),_=v+c.shift(),p=x,e.U.P.curveTo(l,m,y,v,x,_,p);else if(U=="o10"||U=="o29"){var Y=U=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var q=c.pop(),ce=Y.Subrs[q+Y.Bias];s.x=_,s.y=p,s.nStems=u,s.haveWidth=h,s.width=f,s.open=d,e.U._drawCFF(ce,s,o,a,l),_=s.x,p=s.y,u=s.nStems,h=s.haveWidth,f=s.width,d=s.open}}else if(U=="o30"||U=="o31"){var Q=c.length,ie=(H=0,U=="o31");for(H+=Q-(L=-3&Q);H<L;)ie?(y=p,v=(m=_+c.shift())+c.shift(),p=(x=y+c.shift())+c.shift(),L-H==5?(_=v+c.shift(),H++):_=v,ie=!1):(m=_,y=p+c.shift(),v=m+c.shift(),x=y+c.shift(),_=v+c.shift(),L-H==5?(p=x+c.shift(),H++):p=x,ie=!0),e.U.P.curveTo(l,m,y,v,x,_,p),H+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,n),U;c.push(U)}}}s.x=_,s.y=p,s.nStems=u,s.haveWidth=h,s.width=f,s.open=d};var t=e,i={Typr:t};return r.Typr=t,r.default=i,Object.defineProperty(r,"__esModule",{value:!0}),r}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function r0(){return function(r){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),s=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(U,L){for(var I=new t(31),B=0;B<31;++B)I[B]=L+=1<<U[B-1];var X=new i(I[30]);for(B=1;B<30;++B)for(var H=I[B];H<I[B+1];++H)X[H]=H-I[B]<<5|B;return[I,X]},l=a(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=a(s,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(U,L,I){for(var B=U.length,X=0,H=new t(L);X<B;++X)++H[U[X]-1];var j,V=new t(L);for(X=0;X<L;++X)V[X]=V[X-1]+H[X-1]<<1;if(I){j=new t(1<<L);var k=15-L;for(X=0;X<B;++X)if(U[X])for(var A=X<<4|U[X],D=L-U[X],K=V[U[X]-1]++<<D,Y=K|(1<<D)-1;K<=Y;++K)j[f[K]>>>k]=A}else for(j=new t(B),X=0;X<B;++X)U[X]&&(j[X]=f[V[U[X]-1]++]>>>15-U[X]);return j},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var y=_(p,9,1),v=_(m,5,1),x=function(U){for(var L=U[0],I=1;I<U.length;++I)U[I]>L&&(L=U[I]);return L},M=function(U,L,I){var B=L/8|0;return(U[B]|U[B+1]<<8)>>(7&L)&I},w=function(U,L){var I=L/8|0;return(U[I]|U[I+1]<<8|U[I+2]<<16)>>(7&L)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],F=function(U,L,I){var B=new Error(L||T[U]);if(B.code=U,Error.captureStackTrace&&Error.captureStackTrace(B,F),!I)throw B;return B},E=function(U,L,I){var B=U.length;if(!B||I&&!I.l&&B<5)return L||new e(0);var X=!L||I,H=!I||I.i;I||(I={}),L||(L=new e(3*B));var j,V=function(he){var Ee=L.length;if(he>Ee){var Fe=new e(Math.max(2*Ee,he));Fe.set(L),L=Fe}},k=I.f||0,A=I.p||0,D=I.b||0,K=I.l,Y=I.d,q=I.m,ce=I.n,Q=8*B;do{if(!K){I.f=k=M(U,A,1);var ie=M(U,A+1,3);if(A+=3,!ie){var we=U[(be=((j=A)/8|0)+(7&j&&1)+4)-4]|U[be-3]<<8,Ie=be+we;if(Ie>B){H&&F(0);break}X&&V(D+we),L.set(U.subarray(be,Ie),D),I.b=D+=we,I.p=A=8*Ie;continue}if(ie==1)K=y,Y=v,q=9,ce=5;else if(ie==2){var me=M(U,A,31)+257,R=M(U,A+10,15)+4,xe=me+M(U,A+5,31)+1;A+=14;for(var $=new e(xe),ue=new e(19),le=0;le<R;++le)ue[o[le]]=M(U,A+3*le,7);A+=3*R;var Pe=x(ue),ae=(1<<Pe)-1,ge=_(ue,Pe,1);for(le=0;le<xe;){var be,re=ge[M(U,A,ae)];if(A+=15&re,(be=re>>>4)<16)$[le++]=be;else{var Ue=0,C=0;for(be==16?(C=3+M(U,A,3),A+=2,Ue=$[le-1]):be==17?(C=3+M(U,A,7),A+=3):be==18&&(C=11+M(U,A,127),A+=7);C--;)$[le++]=Ue}}var b=$.subarray(0,me),z=$.subarray(me);q=x(b),ce=x(z),K=_(b,q,1),Y=_(z,ce,1)}else F(1);if(A>Q){H&&F(0);break}}X&&V(D+131072);for(var Se=(1<<q)-1,ee=(1<<ce)-1,fe=A;;fe=A){var Ae=(Ue=K[w(U,A)&Se])>>>4;if((A+=15&Ue)>Q){H&&F(0);break}if(Ue||F(2),Ae<256)L[D++]=Ae;else{if(Ae==256){fe=A,K=null;break}var ve=Ae-254;if(Ae>264){var J=n[le=Ae-257];ve=M(U,A,(1<<J)-1)+c[le],A+=J}var O=Y[w(U,A)&ee],se=O>>>4;if(O||F(3),A+=15&O,z=h[se],se>3&&(J=s[se],z+=w(U,A)&(1<<J)-1,A+=J),A>Q){H&&F(0);break}X&&V(D+131072);for(var ye=D+ve;D<ye;D+=4)L[D]=L[D-z],L[D+1]=L[D+1-z],L[D+2]=L[D+2-z],L[D+3]=L[D+3-z];D=ye}}I.l=K,I.p=fe,I.b=D,K&&(k=1,I.m=q,I.d=Y,I.n=ce)}while(!k);return D==L.length?L:function(he,Ee,Fe){(Ee==null||Ee<0)&&(Ee=0),(Fe==null||Fe>he.length)&&(Fe=he.length);var Ge=new(he instanceof t?t:he instanceof i?i:e)(Fe-Ee);return Ge.set(he.subarray(Ee,Fe)),Ge}(L,0,D)},S=new e(0),G=typeof TextDecoder<"u"&&new TextDecoder;try{G.decode(S,{stream:!0})}catch{}return r.convert_streams=function(U){var L=new DataView(U),I=0;function B(){var me=L.getUint16(I);return I+=2,me}function X(){var me=L.getUint32(I);return I+=4,me}function H(me){we.setUint16(Ie,me),Ie+=2}function j(me){we.setUint32(Ie,me),Ie+=4}for(var V={signature:X(),flavor:X(),length:X(),numTables:B(),reserved:B(),totalSfntSize:X(),majorVersion:B(),minorVersion:B(),metaOffset:X(),metaLength:X(),metaOrigLength:X(),privOffset:X(),privLength:X()},k=0;Math.pow(2,k)<=V.numTables;)k++;k--;for(var A=16*Math.pow(2,k),D=16*V.numTables-A,K=12,Y=[],q=0;q<V.numTables;q++)Y.push({tag:X(),offset:X(),compLength:X(),origLength:X(),origChecksum:X()}),K+=16;var ce,Q=new Uint8Array(12+16*Y.length+Y.reduce(function(me,R){return me+R.origLength+4},0)),ie=Q.buffer,we=new DataView(ie),Ie=0;return j(V.flavor),H(V.numTables),H(A),H(k),H(D),Y.forEach(function(me){j(me.tag),j(me.origChecksum),j(K),j(me.origLength),me.outOffset=K,(K+=me.origLength)%4!=0&&(K+=4-K%4)}),Y.forEach(function(me){var R,xe=U.slice(me.offset,me.offset+me.compLength);if(me.compLength!=me.origLength){var $=new Uint8Array(me.origLength);R=new Uint8Array(xe,2),E(R,$)}else $=new Uint8Array(xe);Q.set($,me.outOffset);var ue=0;(K=me.outOffset+me.origLength)%4!=0&&(ue=4-K%4),Q.set(new Uint8Array(ue).buffer,me.outOffset+me.origLength),ce=K+ue}),ie.slice(0,ce)},Object.defineProperty(r,"__esModule",{value:!0}),r}({}).convert_streams}function s0(r,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,s=2,o=4,a=8,l=16,c=32;let u;function h(M){if(!u){const w={R:s,L:n,D:o,C:l,U:c,T:a};u=new Map;for(let T in i){let F=0;i[T].split(",").forEach(E=>{let[S,G]=E.split("+");S=parseInt(S,36),G=G?parseInt(G,36):0,u.set(F+=S,w[T]);for(let U=G;U--;)u.set(++F,w[T])})}}return u.get(M)||c}const f=1,d=2,g=3,_=4,p=[null,"isol","init","fina","medi"];function m(M){const w=new Uint8Array(M.length);let T=c,F=f,E=-1;for(let S=0;S<M.length;S++){const G=M.codePointAt(S);let U=h(G)|0,L=f;U&a||(T&(n|o|l)?U&(s|o|l)?(L=g,(F===f||F===g)&&w[E]++):U&(n|c)&&(F===d||F===_)&&w[E]--:T&(s|c)&&(F===d||F===_)&&w[E]--,F=w[S]=L,T=U,E=S,G>65535&&S++)}return w}function y(M,w){const T=[];for(let E=0;E<w.length;E++){const S=w.codePointAt(E);S>65535&&E++,T.push(r.U.codeToGlyph(M,S))}const F=M.GSUB;if(F){const{lookupList:E,featureList:S}=F;let G;const U=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,L=[];S.forEach(I=>{if(U.test(I.tag))for(let B=0;B<I.tab.length;B++){if(L[I.tab[B]])continue;L[I.tab[B]]=!0;const X=E[I.tab[B]],H=/^(isol|init|fina|medi)$/.test(I.tag);H&&!G&&(G=m(w));for(let j=0;j<T.length;j++)(!G||!H||p[G[j]]===I.tag)&&r.U._applySubs(T,j,X,E)}})}return T}function v(...M){for(let w=0;w<M.length;w++)if(typeof M[w]=="number")return M[w]}function x(M){const w=Object.create(null),T=M["OS/2"],F=M.hhea,E=M.head.unitsPerEm,S=v(T&&T.sTypoAscender,F&&F.ascender,E),G={unitsPerEm:E,ascender:S,descender:v(T&&T.sTypoDescender,F&&F.descender,0),capHeight:v(T&&T.sCapHeight,S),xHeight:v(T&&T.sxHeight,S),lineGap:v(T&&T.sTypoLineGap,F&&F.lineGap),supportsCodePoint(U){return r.U.codeToGlyph(M,U)>0},forEachGlyph(U,L,I,B){let X=0;const H=1/G.unitsPerEm*L,j=y(M,U);let V=0,k=-1;return j.forEach((A,D)=>{if(A!==-1){let K=w[A];if(!K){const{cmds:Y,crds:q}=r.U.glyphToPath(M,A);let ce="",Q=0;for(let R=0,xe=Y.length;R<xe;R++){const $=t[Y[R]];ce+=Y[R];for(let ue=1;ue<=$;ue++)ce+=(ue>1?",":"")+q[Q++]}let ie,we,Ie,me;if(q.length){ie=we=1/0,Ie=me=-1/0;for(let R=0,xe=q.length;R<xe;R+=2){let $=q[R],ue=q[R+1];$<ie&&(ie=$),ue<we&&(we=ue),$>Ie&&(Ie=$),ue>me&&(me=ue)}}else ie=Ie=we=me=0;K=w[A]={index:A,advanceWidth:M.hmtx.aWidth[A],xMin:ie,yMin:we,xMax:Ie,yMax:me,path:ce,pathCommandCount:Y.length}}k!==-1&&(X+=r.U.getPairAdjustment(M,k,A)*H),B.call(null,K,X,V),K.advanceWidth&&(X+=K.advanceWidth*H),I&&(X+=I*L),k=A}V+=U.codePointAt(V)>65535?2:1}),X}};return G}return function(w){const T=new Uint8Array(w,0,4),F=r._bin.readASCII(T,0,4);if(F==="wOFF")w=e(w);else if(F==="wOF2")throw new Error("woff2 fonts not supported");return x(r.parse(w)[0])}}const a0=fr({name:"Typr Font Parser",dependencies:[i0,r0,s0],init(r,e,t){const i=r(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.0 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function o0(){return function(r){var e=function(){this.buckets=new Map};e.prototype.add=function(v){var x=v>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&v))},e.prototype.has=function(v){var x=this.buckets.get(v>>5);return x!==void 0&&(x&1<<(31&v))!=0},e.prototype.serialize=function(){var v=[];return this.buckets.forEach(function(x,M){v.push((+M).toString(36)+":"+x.toString(36))}),v.join(",")},e.prototype.deserialize=function(v){var x=this;this.buckets.clear(),v.split(",").forEach(function(M){var w=M.split(":");x.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function s(v){var x=function(w){return w&n}(v).toString(16),M=function(w){return(w&n)+t-1}(v).toString(16);return"codepoint-index/plane"+(v>>16)+"/"+x+"-"+M+".json"}function o(v,x){var M=v&i,w=x.codePointAt(M/6|0);return((w=(w||48)-48)&1<<M%6)!=0}function a(v,x){var M;(M=v,M.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(T){return parseInt(T.trim(),16)})})).forEach(function(w){var T=w[0],F=w[1];F===void 0&&(F=T),x(T,F)})}function l(v,x){a(v,function(M,w){for(var T=M;T<=w;T++)x(T)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.0/packages/data";function d(v){var x=h.get(v);return x||(x=new e,l(v.ranges,function(M){return x.add(M)}),h.set(v,x)),x}var g,_=new Map;function p(v,x,M){return v[x]?x:v[M]?M:function(w){for(var T in w)return T}(v)}function m(v,x){var M=x;if(!v.includes(M)){M=1/0;for(var w=0;w<v.length;w++)Math.abs(v[w]-x)<Math.abs(M-x)&&(M=v[w])}return M}function y(v){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(x){g.add(x)})),g.has(v)}return r.CodePointSet=e,r.clearCache=function(){c={},u={}},r.getFontsForString=function(v,x){x===void 0&&(x={});var M=x.lang;M===void 0&&(M="en");var w=x.category;w===void 0&&(w="sans-serif");var T=x.style;T===void 0&&(T="normal");var F=x.weight;F===void 0&&(F=400);var E=(x.dataUrl||f).replace(/\/$/g,""),S=new Map,G=new Uint8Array(v.length),U={},L={},I=new Array(v.length),B=new Map,X=!1;function H(k){var A=_.get(k);return A||(A=fetch(E+"/"+k).then(function(D){if(!D.ok)throw new Error(D.statusText);return D.json().then(function(K){if(!Array.isArray(K)||K[0]!==1)throw new Error("Incorrect schema version; need 1, got "+K[0]);return K[1]})}).catch(function(D){if(E!==f)return X||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+E+'", trying default CDN. '+D.message),X=!0),E=f,_.delete(k),H(k);throw D}),_.set(k,A)),A}for(var j=function(k){var A=v.codePointAt(k),D=s(A);I[k]=D,c[D]||B.has(D)||B.set(D,H(D).then(function(K){c[D]=K})),A>65535&&(k++,V=k)},V=0;V<v.length;V++)j(V);return Promise.all(B.values()).then(function(){B.clear();for(var k=function(D){var K=v.codePointAt(D),Y=null,q=c[I[D]];e:for(var ce in q){var Q=L[ce];if(Q===void 0&&(Q=L[ce]=new RegExp(ce).test(M)),Q){for(var ie in q[ce])if(o(K,q[ce][ie])){Y=ie;break e}}}Y||(console.debug("No font coverage for U+"+K.toString(16)),Y="latin"),I[D]=Y,u[Y]||B.has(Y)||B.set(Y,H("font-meta/"+Y+".json").then(function(we){u[Y]=we})),K>65535&&(D++,A=D)},A=0;A<v.length;A++)k(A);return Promise.all(B.values())}).then(function(){for(var k,A=null,D=0;D<v.length;D++){var K=v.codePointAt(D);if(A&&(y(K)||d(A).has(K)))G[D]=G[D-1];else{A=u[I[D]];var Y=U[A.id];if(!Y){var q=A.typeforms,ce=p(q,w,"sans-serif"),Q=p(q[ce],T,"normal"),ie=m((k=q[ce])===null||k===void 0?void 0:k[Q],F);Y=U[A.id]=E+"/font-files/"+A.id+"/"+ce+"."+Q+"."+ie+".woff"}var we=S.get(Y);we==null&&(we=S.size,S.set(Y,we)),G[D]=we}K>65535&&(D++,G[D]=G[D-1])}return{fontUrls:Array.from(S.keys()),chars:G}})},Object.defineProperty(r,"__esModule",{value:!0}),r}({})}function l0(r,e){const t=Object.create(null),i=Object.create(null);function n(o,a){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=r(c.response);u.src=o,a(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function s(o,a){let l=t[o];l?a(l):i[o]?i[o].push(a):(i[o]=[a],n(o,c=>{c.src=o,t[o]=c,i[o].forEach(u=>u(c)),delete i[o]}))}return function(o,a,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(o.length),g=[];o.length||y();const _=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(x=>!x.lang||x.lang.test(l)).reverse(),c.length){let T=0;(function F(E=0){for(let S=E,G=o.length;S<G;S++){const U=o.codePointAt(S);if(T===1&&g[d[S-1]].supportsCodePoint(U)||/\s/.test(o[S]))d[S]=d[S-1],T===2&&(p[p.length-1][1]=S);else for(let L=d[S],I=c.length;L<=I;L++)if(L===I){const B=T===2?p[p.length-1]:p[p.length]=[S,S];B[1]=S,T=2}else{d[S]=L;const{src:B,unicodeRange:X}=c[L];if(!X||v(U,X)){const H=t[B];if(!H){s(B,()=>{F(S)});return}if(H.supportsCodePoint(U)){let j=_.get(H);typeof j!="number"&&(j=g.length,g.push(H),_.set(H,j)),d[S]=j,T=1;break}}}U>65535&&S+1<G&&(d[S+1]=d[S],S++,T===2&&(p[p.length-1][1]=S))}m()})()}else p.push([0,o.length-1]),m();function m(){if(p.length){const x=p.map(M=>o.substring(M[0],M[1]+1)).join(`
`);e.getFontsForString(x,{lang:l,style:u,weight:h,dataUrl:f}).then(({fontUrls:M,chars:w})=>{const T=g.length;let F=0;p.forEach(S=>{for(let G=0,U=S[1]-S[0];G<=U;G++)d[S[0]+G]=w[F++]+T;F++});let E=0;M.forEach((S,G)=>{s(S,U=>{g[G+T]=U,++E===M.length&&y()})})})}else y()}function y(){a({chars:d,fonts:g})}function v(x,M){for(let w=0;w<M.length;w++){const[T,F=T]=M[w];if(T<=x&&x<=F)return!0}return!1}}}const c0=fr({name:"FontResolver",dependencies:[l0,a0,o0],init(r,e,t){return r(e,t())}});function u0(r,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",s=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:_,fonts:p,style:m,weight:y,preResolvedFonts:v,unicodeFontsURL:x},M){const w=({chars:T,fonts:F})=>{let E,S;const G=[];for(let U=0;U<T.length;U++)T[U]!==S?(S=T[U],G.push(E={start:U,end:U,fontObj:F[T[U]]})):E.end=U;M(G)};v?w(v):r(g,w,{lang:_,fonts:p,style:m,weight:y,unicodeFontsURL:x})}function a({text:g="",font:_,lang:p="en",sdfGlyphSize:m=64,fontSize:y=400,fontWeight:v=1,fontStyle:x="normal",letterSpacing:M=0,lineHeight:w="normal",maxWidth:T=1/0,direction:F,textAlign:E="left",textIndent:S=0,whiteSpace:G="normal",overflowWrap:U="normal",anchorX:L=0,anchorY:I=0,metricsOnly:B=!1,unicodeFontsURL:X,preResolvedFonts:H=null,includeCaretPositions:j=!1,chunkedBoundsSize:V=8192,colorRanges:k=null},A){const D=h(),K={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,M=+M,T=+T,w=w||"normal",S=+S,o({text:g,lang:p,style:x,weight:v,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:X,preResolvedFonts:H},Y=>{K.fontLoad=h()-D;const q=isFinite(T);let ce=null,Q=null,ie=null,we=null,Ie=null,me=null,R=null,xe=null,$=0,ue=0,le=G!=="nowrap";const Pe=new Map,ae=h();let ge=S,be=0,re=new f;const Ue=[re];Y.forEach(ee=>{const{fontObj:fe}=ee,{ascender:Ae,descender:ve,unitsPerEm:J,lineGap:O,capHeight:se,xHeight:ye}=fe;let he=Pe.get(fe);if(!he){const _e=y/J,Z=w==="normal"?(Ae-ve+O)*_e:w*y,Ce=(Z-(Ae-ve)*_e)/2,Me=Math.min(Z,(Ae-ve)*_e),Oe=(Ae+ve)/2*_e+Me/2;he={index:Pe.size,src:fe.src,fontObj:fe,fontSizeMult:_e,unitsPerEm:J,ascender:Ae*_e,descender:ve*_e,capHeight:se*_e,xHeight:ye*_e,lineHeight:Z,baseline:-Ce-Ae*_e,caretTop:(Ae+ve)/2*_e+Me/2,caretBottom:Oe-Me},Pe.set(fe,he)}const{fontSizeMult:Ee}=he,Fe=g.slice(ee.start,ee.end+1);let Ge,N;fe.forEachGlyph(Fe,y,M,(_e,Z,Ce)=>{Z+=be,Ce+=ee.start,Ge=Z,N=_e;const Me=g.charAt(Ce),Oe=_e.advanceWidth*Ee,He=re.count;let Be;if("isEmpty"in _e||(_e.isWhitespace=!!Me&&new RegExp(n).test(Me),_e.canBreakAfter=!!Me&&s.test(Me),_e.isEmpty=_e.xMin===_e.xMax||_e.yMin===_e.yMax||i.test(Me)),!_e.isWhitespace&&!_e.isEmpty&&ue++,le&&q&&!_e.isWhitespace&&Z+Oe+ge>T&&He){if(re.glyphAt(He-1).glyphObj.canBreakAfter)Be=new f,ge=-Z;else for(let Ye=He;Ye--;)if(Ye===0&&U==="break-word"){Be=new f,ge=-Z;break}else if(re.glyphAt(Ye).glyphObj.canBreakAfter){Be=re.splitAt(Ye+1);const tt=Be.glyphAt(0).x;ge-=tt;for(let Qe=Be.count;Qe--;)Be.glyphAt(Qe).x-=tt;break}Be&&(re.isSoftWrapped=!0,re=Be,Ue.push(re),$=T)}let ze=re.glyphAt(re.count);ze.glyphObj=_e,ze.x=Z+ge,ze.width=Oe,ze.charIndex=Ce,ze.fontData=he,Me===`
`&&(re=new f,Ue.push(re),ge=-(Z+Oe+M*y)+S)}),be=Ge+N.advanceWidth*Ee+M*y});let C=0;Ue.forEach(ee=>{let fe=!0;for(let Ae=ee.count;Ae--;){const ve=ee.glyphAt(Ae);fe&&!ve.glyphObj.isWhitespace&&(ee.width=ve.x+ve.width,ee.width>$&&($=ee.width),fe=!1);let{lineHeight:J,capHeight:O,xHeight:se,baseline:ye}=ve.fontData;J>ee.lineHeight&&(ee.lineHeight=J);const he=ye-ee.baseline;he<0&&(ee.baseline+=he,ee.cap+=he,ee.ex+=he),ee.cap=Math.max(ee.cap,ee.baseline+O),ee.ex=Math.max(ee.ex,ee.baseline+se)}ee.baseline-=C,ee.cap-=C,ee.ex-=C,C+=ee.lineHeight});let b=0,z=0;if(L&&(typeof L=="number"?b=-L:typeof L=="string"&&(b=-$*(L==="left"?0:L==="center"?.5:L==="right"?1:c(L)))),I&&(typeof I=="number"?z=-I:typeof I=="string"&&(z=I==="top"?0:I==="top-baseline"?-Ue[0].baseline:I==="top-cap"?-Ue[0].cap:I==="top-ex"?-Ue[0].ex:I==="middle"?C/2:I==="bottom"?C:I==="bottom-baseline"?Ue[Ue.length-1].baseline:c(I)*C)),!B){const ee=e.getEmbeddingLevels(g,F);ce=new Uint16Array(ue),Q=new Uint8Array(ue),ie=new Float32Array(ue*2),we={},R=[1/0,1/0,-1/0,-1/0],xe=[],j&&(me=new Float32Array(g.length*4)),k&&(Ie=new Uint8Array(ue*3));let fe=0,Ae=-1,ve=-1,J,O;if(Ue.forEach((se,ye)=>{let{count:he,width:Ee}=se;if(he>0){let Fe=0;for(let Me=he;Me--&&se.glyphAt(Me).glyphObj.isWhitespace;)Fe++;let Ge=0,N=0;if(E==="center")Ge=($-Ee)/2;else if(E==="right")Ge=$-Ee;else if(E==="justify"&&se.isSoftWrapped){let Me=0;for(let Oe=he-Fe;Oe--;)se.glyphAt(Oe).glyphObj.isWhitespace&&Me++;N=($-Ee)/Me}if(N||Ge){let Me=0;for(let Oe=0;Oe<he;Oe++){let He=se.glyphAt(Oe);const Be=He.glyphObj;He.x+=Ge+Me,N!==0&&Be.isWhitespace&&Oe<he-Fe&&(Me+=N,He.width+=N)}}const _e=e.getReorderSegments(g,ee,se.glyphAt(0).charIndex,se.glyphAt(se.count-1).charIndex);for(let Me=0;Me<_e.length;Me++){const[Oe,He]=_e[Me];let Be=1/0,ze=-1/0;for(let Ye=0;Ye<he;Ye++)if(se.glyphAt(Ye).charIndex>=Oe){let tt=Ye,Qe=Ye;for(;Qe<he;Qe++){let ht=se.glyphAt(Qe);if(ht.charIndex>He)break;Qe<he-Fe&&(Be=Math.min(Be,ht.x),ze=Math.max(ze,ht.x+ht.width))}for(let ht=tt;ht<Qe;ht++){const Ut=se.glyphAt(ht);Ut.x=ze-(Ut.x+Ut.width-Be)}break}}let Z;const Ce=Me=>Z=Me;for(let Me=0;Me<he;Me++){const Oe=se.glyphAt(Me);Z=Oe.glyphObj;const He=Z.index,Be=ee.levels[Oe.charIndex]&1;if(Be){const ze=e.getMirroredCharacter(g[Oe.charIndex]);ze&&Oe.fontData.fontObj.forEachGlyph(ze,0,0,Ce)}if(j){const{charIndex:ze,fontData:Ye}=Oe,tt=Oe.x+b,Qe=Oe.x+Oe.width+b;me[ze*4]=Be?Qe:tt,me[ze*4+1]=Be?tt:Qe,me[ze*4+2]=se.baseline+Ye.caretBottom+z,me[ze*4+3]=se.baseline+Ye.caretTop+z;const ht=ze-Ae;ht>1&&u(me,Ae,ht),Ae=ze}if(k){const{charIndex:ze}=Oe;for(;ze>ve;)ve++,k.hasOwnProperty(ve)&&(O=k[ve])}if(!Z.isWhitespace&&!Z.isEmpty){const ze=fe++,{fontSizeMult:Ye,src:tt,index:Qe}=Oe.fontData,ht=we[tt]||(we[tt]={});ht[He]||(ht[He]={path:Z.path,pathBounds:[Z.xMin,Z.yMin,Z.xMax,Z.yMax]});const Ut=Oe.x+b,pn=se.baseline+z;ie[ze*2]=Ut,ie[ze*2+1]=pn;const Dt=Ut+Z.xMin*Ye,Qt=pn+Z.yMin*Ye,Xt=Ut+Z.xMax*Ye,Yt=pn+Z.yMax*Ye;Dt<R[0]&&(R[0]=Dt),Qt<R[1]&&(R[1]=Qt),Xt>R[2]&&(R[2]=Xt),Yt>R[3]&&(R[3]=Yt),ze%V===0&&(J={start:ze,end:ze,rect:[1/0,1/0,-1/0,-1/0]},xe.push(J)),J.end++;const xt=J.rect;if(Dt<xt[0]&&(xt[0]=Dt),Qt<xt[1]&&(xt[1]=Qt),Xt>xt[2]&&(xt[2]=Xt),Yt>xt[3]&&(xt[3]=Yt),ce[ze]=He,Q[ze]=Qe,k){const bn=ze*3;Ie[bn]=O>>16&255,Ie[bn+1]=O>>8&255,Ie[bn+2]=O&255}}}}}),me){const se=g.length-Ae;se>1&&u(me,Ae,se)}}const Se=[];Pe.forEach(({index:ee,src:fe,unitsPerEm:Ae,ascender:ve,descender:J,lineHeight:O,capHeight:se,xHeight:ye})=>{Se[ee]={src:fe,unitsPerEm:Ae,ascender:ve,descender:J,lineHeight:O,capHeight:se,xHeight:ye}}),K.typesetting=h()-ae,A({glyphIds:ce,glyphFontIndices:Q,glyphPositions:ie,glyphData:we,fontData:Se,caretPositions:me,glyphColors:Ie,chunkedBounds:xe,fontSize:y,topBaseline:z+Ue[0].baseline,blockBounds:[b,z-C,b+$,z],visibleBounds:R,timings:K})})}function l(g,_){a({...g,metricsOnly:!0},p=>{const[m,y,v,x]=p.blockBounds;_({width:v-m,height:x-y})})}function c(g){let _=g.match(/^([\d.]+)%$/),p=_?parseFloat(_[1]):NaN;return isNaN(p)?0:p/100}function u(g,_,p){const m=g[_*4],y=g[_*4+1],v=g[_*4+2],x=g[_*4+3],M=(y-m)/p;for(let w=0;w<p;w++){const T=(_+w)*4;g[T]=m+M*w,g[T+1]=m+M*(w+1),g[T+2]=v,g[T+3]=x}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=f.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new f;return _.data=this.data.splice(g*d.length),_}},f.flyweight=d.reduce((g,_,p,m)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+p]},set(y){this.data[this.index*d.length+p]=y}}),g),{data:null,index:0}),{typeset:a,measure:l}}const di=()=>(self.performance||Date).now(),aa=dh();let Kc;function h0(r,e,t,i,n,s,o,a,l,c,u=!0){return u?d0(r,e,t,i,n,s,o,a,l,c).then(null,h=>(Kc||(console.warn("WebGL SDF generation failed, falling back to JS",h),Kc=!0),Zc(r,e,t,i,n,s,o,a,l,c))):Zc(r,e,t,i,n,s,o,a,l,c)}const Ws=[],f0=5;let vo=0;function mh(){const r=di();for(;Ws.length&&di()-r<f0;)Ws.shift()();vo=Ws.length?setTimeout(mh,0):0}const d0=(...r)=>new Promise((e,t)=>{Ws.push(()=>{const i=di();try{aa.webgl.generateIntoCanvas(...r),e({timing:di()-i})}catch(n){t(n)}}),vo||(vo=setTimeout(mh,0))}),p0=4,m0=2e3,Jc={};let g0=0;function Zc(r,e,t,i,n,s,o,a,l,c){const u="TroikaTextSDFGenerator_JS_"+g0++%p0;let h=Jc[u];return h||(h=Jc[u]={workerModule:fr({name:u,workerId:u,dependencies:[dh,di],init(f,d){const g=f().javascript.generate;return function(..._){const p=d();return{textureData:g(..._),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(r,e,t,i,n,s).then(({textureData:f,timing:d})=>{const g=di(),_=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)_[p*4+c]=f[p];return aa.webglUtils.renderImageData(o,_,a,l,r,e,1<<3-c),d+=di()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{jv(u)},m0)),{timing:d}})}function _0(r){r._warm||(aa.webgl.isSupported(r),r._warm=!0)}const v0=aa.webglUtils.resizeWebGLCanvasWithoutClearing,ji={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},x0=new Xe;function Vi(){return(self.performance||Date).now()}const Qc=Object.create(null);function y0(r,e){r=M0({},r);const t=Vi(),{defaultFontURL:i}=ji,n=[];if(i&&n.push({label:"default",src:$c(i)}),r.font&&n.push({label:"user",src:$c(r.font)}),r.font=n,r.text=""+r.text,r.sdfGlyphSize=r.sdfGlyphSize||ji.sdfGlyphSize,r.unicodeFontsURL=r.unicodeFontsURL||ji.unicodeFontsURL,r.colorRanges!=null){let f={};for(let d in r.colorRanges)if(r.colorRanges.hasOwnProperty(d)){let g=r.colorRanges[d];typeof g!="number"&&(g=x0.set(g).getHex()),f[d]=g}r.colorRanges=f}Object.freeze(r);const{textureWidth:s,sdfExponent:o}=ji,{sdfGlyphSize:a}=r,l=s/a*4;let c=Qc[a];if(!c){const f=document.createElement("canvas");f.width=s,f.height=a*256/l,c=Qc[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new Nt(f,void 0,void 0,void 0,Ot,Ot),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,S0(c)}const{sdfTexture:u,sdfCanvas:h}=c;E0(r).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:p,fontSize:m,timings:y}=f,v=[],x=new Float32Array(d.length*4);let M=0,w=0;const T=Vi(),F=_.map(L=>{let I=c.glyphsByFont.get(L.src);return I||c.glyphsByFont.set(L.src,I=new Map),I});d.forEach((L,I)=>{const B=g[I],{src:X,unitsPerEm:H}=_[B];let j=F[B].get(L);if(!j){const{path:K,pathBounds:Y}=f.glyphData[X][L],q=Math.max(Y[2]-Y[0],Y[3]-Y[1])/a*(ji.sdfMargin*a+.5),ce=c.glyphCount++,Q=[Y[0]-q,Y[1]-q,Y[2]+q,Y[3]+q];F[B].set(L,j={path:K,atlasIndex:ce,sdfViewBox:Q}),v.push(j)}const{sdfViewBox:V}=j,k=p[w++],A=p[w++],D=m/H;x[M++]=k+V[0]*D,x[M++]=A+V[1]*D,x[M++]=k+V[2]*D,x[M++]=A+V[3]*D,d[I]=j.atlasIndex}),y.quads=(y.quads||0)+(Vi()-T);const E=Vi();y.sdf={};const S=h.height,G=Math.ceil(c.glyphCount/l),U=Math.pow(2,Math.ceil(Math.log2(G*a)));U>S&&(console.info(`Increasing SDF texture size ${S}->${U}`),v0(h,s,U),u.dispose()),Promise.all(v.map(L=>gh(L,c,r.gpuAccelerateSDF).then(({timing:I})=>{y.sdf[L.atlasIndex]=I}))).then(()=>{v.length&&!c.contextLost&&(_h(c),u.needsUpdate=!0),y.sdfTotal=Vi()-E,y.total=Vi()-t,e(Object.freeze({parameters:r,sdfTexture:u,sdfGlyphSize:a,sdfExponent:o,glyphBounds:x,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{c.contextLost||_0(h)})}function gh({path:r,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:s},o){if(s)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=ji,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(a/i)*i,f=Math.floor(u/(a/i))*i,d=e%4;return h0(i,i,r,t,c,l,n,h,f,d,o)}function S0(r){const e=r.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),r.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),r.contextLost=!1;const i=[];r.glyphsByFont.forEach(n=>{n.forEach(s=>{i.push(gh(s,r,!0))})}),Promise.all(i).then(()=>{_h(r),r.sdfTexture.needsUpdate=!0})})}function M0(r,e){for(let t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r}let Os;function $c(r){return Os||(Os=typeof document>"u"?{}:document.createElement("a")),Os.href=r,Os.href}function _h(r){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=r,{width:i,height:n}=e,s=r.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==i*n*4)&&(o=new Uint8Array(i*n*4),t.image={width:i,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),s.readPixels(0,0,i,n,s.RGBA,s.UNSIGNED_BYTE,o)}}const b0=fr({name:"Typesetter",dependencies:[u0,c0,Kv],init(r,e,t){return r(e,t())}}),E0=fr({name:"Typesetter",dependencies:[b0],init(r){return function(e){return new Promise(t=>{r.typeset(e,t)})}},getTransferables(r){const e=[];for(let t in r)r[t]&&r[t].buffer&&e.push(r[t].buffer);return e}}),eu={};function T0(r){let e=eu[r];if(!e){const t=new ur(1,1,r,r),i=t.clone(),n=t.attributes,s=i.attributes,o=new Wt,a=n.uv.count;for(let l=0;l<a;l++)s.position.array[l*3]*=-1,s.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{o.setAttribute(l,new Bt([...n[l].array,...s[l].array],n[l].itemSize))}),o.setIndex([...t.index.array,...i.index.array.map(l=>l+a)]),o.translate(.5,.5,0),e=eu[r]=o}return e}const w0="aTroikaGlyphBounds",tu="aTroikaGlyphIndex",A0="aTroikaGlyphColor";class C0 extends kv{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new $r,this.boundingBox=new cr}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Pt?t/2:0,e===ln?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=T0(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,s){Qa(this,w0,e,4),Qa(this,tu,t,1),Qa(this,A0,s,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:s,min:o,max:a,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,_=s((d+u)/h)!==s((g+u)/h)?-f:o(l(d)*f,l(g)*f),p=s((d-u)/h)!==s((g-u)/h)?f:a(l(d)*f,l(g)*f),m=s((d+n)/h)!==s((g+n)/h)?f*2:a(f-c(d)*f,f-c(g)*f);i.min.set(_,e[1],t<0?-m:0),i.max.set(p,e[3],t<0?0:m)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(tu).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let s=i[n].rect;if(s[1]<e.w&&s[3]>e.y&&s[0]<e.z&&s[2]>e.x)break}this.instanceCount=t}}function Qa(r,e,t,i){const n=r.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(r.setAttribute(e,new ev(t,i)),delete r._maxInstanceCount,r.dispose()):n&&r.deleteAttribute(e)}const R0=`
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
`,L0=`
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
`,P0=`
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
`,U0=`
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
`;function D0(r){const e=_o(r,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Le},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ut(0,0,0,0)},uTroikaClipRect:{value:new ut(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Le},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Xe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ze},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:R0,vertexTransform:L0,fragmentDefs:P0,fragmentColorTransform:U0,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(ph,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Ho=new es({color:16777215,side:ln,transparent:!0}),nu=8421504,iu=new ot,Ns=new W,$a=new W,Ar=[],I0=new W,eo="+x+y";function ru(r){return Array.isArray(r)?r[0]:r}let vh=()=>{const r=new wt(new ur(1,1),Ho);return vh=()=>r,r},xh=()=>{const r=new wt(new ur(1,1,32,1),Ho);return xh=()=>r,r};const F0={type:"syncstart"},O0={type:"synccomplete"},yh=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],N0=yh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Sh extends wt{constructor(){const e=new C0;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang="en",this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=nu,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=eo,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(F0),y0({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(O0),e&&e()})))}onBeforeRender(e,t,i,n,s,o){this.sync(),s.isTroikaTextMaterial&&this._prepareForRender(s),s._hadOwnSide=s.hasOwnProperty("side"),this.geometry.setSide(s._actualSide=s.side),s.side=Fn}onAfterRender(e,t,i,n,s,o){s._hadOwnSide?s.side=s._actualSide:delete s.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Ho.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=D0(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return ru(this.material).getDepthMaterial()}get customDistanceMaterial(){return ru(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:a,blockBounds:l}=n;i.uTroikaSDFTexture.value=a,i.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,g,_=0,p=0;if(t){let{outlineWidth:y,outlineOffsetX:v,outlineOffsetY:x,outlineBlur:M,outlineOpacity:w}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(M)||0),f=w,_=this._parsePercent(v)||0,p=this._parsePercent(x)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??nu),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaDistanceOffset.value=c,i.uTroikaPositionOffset.value.set(_,p),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)i.uTroikaClipRect.value.fromArray(m);else{const y=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const s=t?this.outlineColor||0:this.color;if(s==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new Xe;(s!==a._input||typeof s=="object")&&a.set(a._input=s)}let o=this.orientation||eo;if(o!==e._orientation){let a=i.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==eo&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;Ns.set(0,0,0)[u]=c==="-"?1:-1,$a.set(0,0,0)[f]=h==="-"?-1:1,iu.lookAt(I0,Ns.cross($a),$a),a.setFromMatrix4(iu)}else a.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Le){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Le){return Ns.copy(e),this.localPositionToTextCoords(this.worldToLocal(Ns),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const s=i.blockBounds,o=n?xh():vh(),a=o.geometry,{position:l,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let h=s[0]+c.getX(u)*(s[2]-s[0]);const f=s[1]+c.getY(u)*(s[3]-s[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,Ar.length=0,o.raycast(e,Ar);for(let u=0;u<Ar.length;u++)Ar[u].object=this,t.push(Ar[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,N0.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}yh.forEach(r=>{const e="_private_"+r;Object.defineProperty(Sh.prototype,r,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});var ir=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return this.None(r)},Out:function(r){return this.None(r)},InOut:function(r){return this.None(r)}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var e=1.70158;return r===1?1:r*r*((e+1)*r-e)},Out:function(r){var e=1.70158;return r===0?0:--r*r*((e+1)*r+e)+1},InOut:function(r){var e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}}),Bounce:Object.freeze({In:function(r){return 1-ir.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?ir.Bounce.In(r*2)*.5:ir.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(e){return Math.pow(e,r)},Out:function(e){return 1-Math.pow(1-e,r)},InOut:function(e){return e<.5?Math.pow(e*2,r)/2:(1-Math.pow(2-e*2,r))/2+.5}}}}),Qi=function(){return performance.now()},Mh=function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},r.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},r.prototype.update=function(e,t){e===void 0&&(e=Qi()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var n=0;n<i.length;n++){var s=this._tweens[i[n]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[i[n]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},r}(),li={Linear:function(r,e){var t=r.length-1,i=t*e,n=Math.floor(i),s=li.Utils.Linear;return e<0?s(r[0],r[1],i):e>1?s(r[t],r[t-1],t-i):s(r[n],r[n+1>t?t:n+1],i-n)},Bezier:function(r,e){for(var t=0,i=r.length-1,n=Math.pow,s=li.Utils.Bernstein,o=0;o<=i;o++)t+=n(1-e,i-o)*n(e,o)*r[o]*s(i,o);return t},CatmullRom:function(r,e){var t=r.length-1,i=t*e,n=Math.floor(i),s=li.Utils.CatmullRom;return r[0]===r[t]?(e<0&&(n=Math.floor(i=t*(1+e))),s(r[(n-1+t)%t],r[n],r[(n+1)%t],r[(n+2)%t],i-n)):e<0?r[0]-(s(r[0],r[0],r[1],r[1],-i)-r[0]):e>1?r[t]-(s(r[t],r[t],r[t-1],r[t-1],i-t)-r[t]):s(r[n?n-1:0],r[n],r[t<n+1?t:n+1],r[t<n+2?t:n+2],i-n)},Utils:{Linear:function(r,e,t){return(e-r)*t+r},Bernstein:function(r,e){var t=li.Utils.Factorial;return t(r)/t(e)/t(r-e)},Factorial:function(){var r=[1];return function(e){var t=1;if(r[e])return r[e];for(var i=e;i>1;i--)t*=i;return r[e]=t,t}}(),CatmullRom:function(r,e,t,i,n){var s=(t-r)*.5,o=(i-e)*.5,a=n*n,l=n*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*n+e}}},Vo=function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r}(),xo=new Mh,B0=function(){function r(e,t){t===void 0&&(t=xo),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ir.Linear.None,this._interpolationFunction=li.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Vo.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},r.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},r.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},r.prototype.start=function(e,t){if(e===void 0&&(e=Qi()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var n={};for(var s in this._valuesEnd)n[s]=this._valuesEnd[s];this._valuesEnd=n}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},r.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},r.prototype._setupProperties=function(e,t,i,n,s){for(var o in i){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(u){var h=i[o];if(h.length===0)continue;for(var f=[a],d=0,g=h.length;d<g;d+=1){var _=this._handleRelativeValue(a,h[d]);if(isNaN(_)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(_)}u&&(i[o]=f)}if((c==="object"||l)&&a&&!u){t[o]=l?[]:{};var p=a;for(var m in p)t[o][m]=p[m];n[o]=l?[]:{};var h=i[o];if(!this._isDynamic){var y={};for(var m in h)y[m]=h[m];i[o]=h=y}this._setupProperties(p,t[o],h,n[o],s)}else(typeof t[o]>"u"||s)&&(t[o]=a),l||(t[o]*=1),u?n[o]=i[o].slice().reverse():n[o]=t[o]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},r.prototype.pause=function(e){return e===void 0&&(e=Qi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},r.prototype.resume=function(e){return e===void 0&&(e=Qi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},r.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},r.prototype.group=function(e){return e===void 0&&(e=xo),this._group=e,this},r.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},r.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},r.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},r.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},r.prototype.easing=function(e){return e===void 0&&(e=ir.Linear.None),this._easingFunction=e,this},r.prototype.interpolation=function(e){return e===void 0&&(e=li.Linear),this._interpolationFunction=e,this},r.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},r.prototype.onStart=function(e){return this._onStartCallback=e,this},r.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},r.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},r.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},r.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},r.prototype.onStop=function(e){return this._onStopCallback=e,this},r.prototype.update=function(e,t){if(e===void 0&&(e=Qi()),t===void 0&&(t=!0),this._isPaused)return!0;var i,n,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),n=(e-this._startTime)/this._duration,n=this._duration===0||n>1?1:n;var o=this._easingFunction(n);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,n),n===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(e,t,i,n){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,n):typeof a=="object"&&a?this._updateProperties(e[s],o,a,n):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*n))}},r.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},r.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},r}(),k0="21.0.0",z0=Vo.nextId,Sn=xo,G0=Sn.getAll.bind(Sn),H0=Sn.removeAll.bind(Sn),V0=Sn.add.bind(Sn),W0=Sn.remove.bind(Sn),X0=Sn.update.bind(Sn),Wo={Easing:ir,Group:Mh,Interpolation:li,now:Qi,Sequence:Vo,nextId:z0,Tween:B0,VERSION:k0,getAll:G0,removeAll:H0,add:V0,remove:W0,update:X0};const In=11102230246251565e-32,Tt=134217729,Y0=(3+8*In)*In;function to(r,e,t,i,n){let s,o,a,l,c=e[0],u=i[0],h=0,f=0;u>c==u>-c?(s=c,c=e[++h]):(s=u,u=i[++f]);let d=0;if(h<r&&f<t)for(u>c==u>-c?(o=c+s,a=s-(o-c),c=e[++h]):(o=u+s,a=s-(o-u),u=i[++f]),s=o,a!==0&&(n[d++]=a);h<r&&f<t;)u>c==u>-c?(o=s+c,l=o-s,a=s-(o-l)+(c-l),c=e[++h]):(o=s+u,l=o-s,a=s-(o-l)+(u-l),u=i[++f]),s=o,a!==0&&(n[d++]=a);for(;h<r;)o=s+c,l=o-s,a=s-(o-l)+(c-l),c=e[++h],s=o,a!==0&&(n[d++]=a);for(;f<t;)o=s+u,l=o-s,a=s-(o-l)+(u-l),u=i[++f],s=o,a!==0&&(n[d++]=a);return(s!==0||d===0)&&(n[d++]=s),d}function j0(r,e){let t=e[0];for(let i=1;i<r;i++)t+=e[i];return t}function ts(r){return new Float64Array(r)}const q0=(3+16*In)*In,K0=(2+12*In)*In,J0=(9+64*In)*In*In,Wi=ts(4),su=ts(8),au=ts(12),ou=ts(16),At=ts(4);function Z0(r,e,t,i,n,s,o){let a,l,c,u,h,f,d,g,_,p,m,y,v,x,M,w,T,F;const E=r-n,S=t-n,G=e-s,U=i-s;x=E*U,f=Tt*E,d=f-(f-E),g=E-d,f=Tt*U,_=f-(f-U),p=U-_,M=g*p-(x-d*_-g*_-d*p),w=G*S,f=Tt*G,d=f-(f-G),g=G-d,f=Tt*S,_=f-(f-S),p=S-_,T=g*p-(w-d*_-g*_-d*p),m=M-T,h=M-m,Wi[0]=M-(m+h)+(h-T),y=x+m,h=y-x,v=x-(y-h)+(m-h),m=v-w,h=v-m,Wi[1]=v-(m+h)+(h-w),F=y+m,h=F-y,Wi[2]=y-(F-h)+(m-h),Wi[3]=F;let L=j0(4,Wi),I=K0*o;if(L>=I||-L>=I||(h=r-E,a=r-(E+h)+(h-n),h=t-S,c=t-(S+h)+(h-n),h=e-G,l=e-(G+h)+(h-s),h=i-U,u=i-(U+h)+(h-s),a===0&&l===0&&c===0&&u===0)||(I=J0*o+Y0*Math.abs(L),L+=E*u+U*a-(G*c+S*l),L>=I||-L>=I))return L;x=a*U,f=Tt*a,d=f-(f-a),g=a-d,f=Tt*U,_=f-(f-U),p=U-_,M=g*p-(x-d*_-g*_-d*p),w=l*S,f=Tt*l,d=f-(f-l),g=l-d,f=Tt*S,_=f-(f-S),p=S-_,T=g*p-(w-d*_-g*_-d*p),m=M-T,h=M-m,At[0]=M-(m+h)+(h-T),y=x+m,h=y-x,v=x-(y-h)+(m-h),m=v-w,h=v-m,At[1]=v-(m+h)+(h-w),F=y+m,h=F-y,At[2]=y-(F-h)+(m-h),At[3]=F;const B=to(4,Wi,4,At,su);x=E*u,f=Tt*E,d=f-(f-E),g=E-d,f=Tt*u,_=f-(f-u),p=u-_,M=g*p-(x-d*_-g*_-d*p),w=G*c,f=Tt*G,d=f-(f-G),g=G-d,f=Tt*c,_=f-(f-c),p=c-_,T=g*p-(w-d*_-g*_-d*p),m=M-T,h=M-m,At[0]=M-(m+h)+(h-T),y=x+m,h=y-x,v=x-(y-h)+(m-h),m=v-w,h=v-m,At[1]=v-(m+h)+(h-w),F=y+m,h=F-y,At[2]=y-(F-h)+(m-h),At[3]=F;const X=to(B,su,4,At,au);x=a*u,f=Tt*a,d=f-(f-a),g=a-d,f=Tt*u,_=f-(f-u),p=u-_,M=g*p-(x-d*_-g*_-d*p),w=l*c,f=Tt*l,d=f-(f-l),g=l-d,f=Tt*c,_=f-(f-c),p=c-_,T=g*p-(w-d*_-g*_-d*p),m=M-T,h=M-m,At[0]=M-(m+h)+(h-T),y=x+m,h=y-x,v=x-(y-h)+(m-h),m=v-w,h=v-m,At[1]=v-(m+h)+(h-w),F=y+m,h=F-y,At[2]=y-(F-h)+(m-h),At[3]=F;const H=to(X,au,4,At,ou);return ou[H-1]}function Bs(r,e,t,i,n,s){const o=(e-s)*(t-n),a=(r-n)*(i-s),l=o-a,c=Math.abs(o+a);return Math.abs(l)>=q0*c?l:-Z0(r,e,t,i,n,s,c)}const lu=Math.pow(2,-52),ks=new Uint32Array(512);class Xo{static from(e,t=nx,i=ix){const n=e.length,s=new Float64Array(n*2);for(let o=0;o<n;o++){const a=e[o];s[2*o]=t(a),s[2*o+1]=i(a)}return new Xo(s)}constructor(e){const t=e.length>>1;if(t>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;const i=Math.max(2*t-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.update()}update(){const{coords:e,_hullPrev:t,_hullNext:i,_hullTri:n,_hullHash:s}=this,o=e.length>>1;let a=1/0,l=1/0,c=-1/0,u=-1/0;for(let S=0;S<o;S++){const G=e[2*S],U=e[2*S+1];G<a&&(a=G),U<l&&(l=U),G>c&&(c=G),U>u&&(u=U),this._ids[S]=S}const h=(a+c)/2,f=(l+u)/2;let d=1/0,g,_,p;for(let S=0;S<o;S++){const G=no(h,f,e[2*S],e[2*S+1]);G<d&&(g=S,d=G)}const m=e[2*g],y=e[2*g+1];d=1/0;for(let S=0;S<o;S++){if(S===g)continue;const G=no(m,y,e[2*S],e[2*S+1]);G<d&&G>0&&(_=S,d=G)}let v=e[2*_],x=e[2*_+1],M=1/0;for(let S=0;S<o;S++){if(S===g||S===_)continue;const G=ex(m,y,v,x,e[2*S],e[2*S+1]);G<M&&(p=S,M=G)}let w=e[2*p],T=e[2*p+1];if(M===1/0){for(let U=0;U<o;U++)this._dists[U]=e[2*U]-e[0]||e[2*U+1]-e[1];$i(this._ids,this._dists,0,o-1);const S=new Uint32Array(o);let G=0;for(let U=0,L=-1/0;U<o;U++){const I=this._ids[U];this._dists[I]>L&&(S[G++]=I,L=this._dists[I])}this.hull=S.subarray(0,G),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(Bs(m,y,v,x,w,T)<0){const S=_,G=v,U=x;_=p,v=w,x=T,p=S,w=G,T=U}const F=tx(m,y,v,x,w,T);this._cx=F.x,this._cy=F.y;for(let S=0;S<o;S++)this._dists[S]=no(e[2*S],e[2*S+1],F.x,F.y);$i(this._ids,this._dists,0,o-1),this._hullStart=g;let E=3;i[g]=t[p]=_,i[_]=t[g]=p,i[p]=t[_]=g,n[g]=0,n[_]=1,n[p]=2,s.fill(-1),s[this._hashKey(m,y)]=g,s[this._hashKey(v,x)]=_,s[this._hashKey(w,T)]=p,this.trianglesLen=0,this._addTriangle(g,_,p,-1,-1,-1);for(let S=0,G,U;S<this._ids.length;S++){const L=this._ids[S],I=e[2*L],B=e[2*L+1];if(S>0&&Math.abs(I-G)<=lu&&Math.abs(B-U)<=lu||(G=I,U=B,L===g||L===_||L===p))continue;let X=0;for(let A=0,D=this._hashKey(I,B);A<this._hashSize&&(X=s[(D+A)%this._hashSize],!(X!==-1&&X!==i[X]));A++);X=t[X];let H=X,j;for(;j=i[H],Bs(I,B,e[2*H],e[2*H+1],e[2*j],e[2*j+1])>=0;)if(H=j,H===X){H=-1;break}if(H===-1)continue;let V=this._addTriangle(H,L,i[H],-1,-1,n[H]);n[L]=this._legalize(V+2),n[H]=V,E++;let k=i[H];for(;j=i[k],Bs(I,B,e[2*k],e[2*k+1],e[2*j],e[2*j+1])<0;)V=this._addTriangle(k,L,j,n[L],-1,n[k]),n[L]=this._legalize(V+2),i[k]=k,E--,k=j;if(H===X)for(;j=t[H],Bs(I,B,e[2*j],e[2*j+1],e[2*H],e[2*H+1])<0;)V=this._addTriangle(j,L,H,-1,n[H],n[j]),this._legalize(V+2),n[j]=V,i[H]=H,E--,H=j;this._hullStart=t[L]=H,i[H]=t[k]=L,i[L]=k,s[this._hashKey(I,B)]=L,s[this._hashKey(e[2*H],e[2*H+1])]=H}this.hull=new Uint32Array(E);for(let S=0,G=this._hullStart;S<E;S++)this.hull[S]=G,G=i[G];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(Q0(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:t,_halfedges:i,coords:n}=this;let s=0,o=0;for(;;){const a=i[e],l=e-e%3;if(o=l+(e+2)%3,a===-1){if(s===0)break;e=ks[--s];continue}const c=a-a%3,u=l+(e+1)%3,h=c+(a+2)%3,f=t[o],d=t[e],g=t[u],_=t[h];if($0(n[2*f],n[2*f+1],n[2*d],n[2*d+1],n[2*g],n[2*g+1],n[2*_],n[2*_+1])){t[e]=_,t[a]=f;const m=i[h];if(m===-1){let v=this._hullStart;do{if(this._hullTri[v]===h){this._hullTri[v]=e;break}v=this._hullPrev[v]}while(v!==this._hullStart)}this._link(e,m),this._link(a,i[o]),this._link(o,h);const y=c+(a+1)%3;s<ks.length&&(ks[s++]=y)}else{if(s===0)break;e=ks[--s]}}return o}_link(e,t){this._halfedges[e]=t,t!==-1&&(this._halfedges[t]=e)}_addTriangle(e,t,i,n,s,o){const a=this.trianglesLen;return this._triangles[a]=e,this._triangles[a+1]=t,this._triangles[a+2]=i,this._link(a,n),this._link(a+1,s),this._link(a+2,o),this.trianglesLen+=3,a}}function Q0(r,e){const t=r/(Math.abs(r)+Math.abs(e));return(e>0?3-t:1+t)/4}function no(r,e,t,i){const n=r-t,s=e-i;return n*n+s*s}function $0(r,e,t,i,n,s,o,a){const l=r-o,c=e-a,u=t-o,h=i-a,f=n-o,d=s-a,g=l*l+c*c,_=u*u+h*h,p=f*f+d*d;return l*(h*p-_*d)-c*(u*p-_*f)+g*(u*d-h*f)<0}function ex(r,e,t,i,n,s){const o=t-r,a=i-e,l=n-r,c=s-e,u=o*o+a*a,h=l*l+c*c,f=.5/(o*c-a*l),d=(c*u-a*h)*f,g=(o*h-l*u)*f;return d*d+g*g}function tx(r,e,t,i,n,s){const o=t-r,a=i-e,l=n-r,c=s-e,u=o*o+a*a,h=l*l+c*c,f=.5/(o*c-a*l),d=r+(c*u-a*h)*f,g=e+(o*h-l*u)*f;return{x:d,y:g}}function $i(r,e,t,i){if(i-t<=20)for(let n=t+1;n<=i;n++){const s=r[n],o=e[s];let a=n-1;for(;a>=t&&e[r[a]]>o;)r[a+1]=r[a--];r[a+1]=s}else{const n=t+i>>1;let s=t+1,o=i;Cr(r,n,s),e[r[t]]>e[r[i]]&&Cr(r,t,i),e[r[s]]>e[r[i]]&&Cr(r,s,i),e[r[t]]>e[r[s]]&&Cr(r,t,s);const a=r[s],l=e[a];for(;;){do s++;while(e[r[s]]<l);do o--;while(e[r[o]]>l);if(o<s)break;Cr(r,s,o)}r[t+1]=r[o],r[o]=a,i-s+1>=o-t?($i(r,e,s,i),$i(r,e,t,o-1)):($i(r,e,t,o-1),$i(r,e,s,i))}}function Cr(r,e,t){const i=r[e];r[e]=r[t],r[t]=i}function nx(r){return r[0]}function ix(r){return r[1]}function rx(r){if(r&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function er(r,e){var t=r.__state.conversionName.toString(),i=Math.round(r.r),n=Math.round(r.g),s=Math.round(r.b),o=r.a,a=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+i+","+n+","+s+")";if(t==="CSS_RGBA")return"rgba("+i+","+n+","+s+","+o+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+n+","+s+"]";if(t==="RGBA_ARRAY")return"["+i+","+n+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+n+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+n+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var cu=Array.prototype.forEach,Rr=Array.prototype.slice,Te={BREAK:{},extend:function(e){return this.each(Rr.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(n){this.isUndefined(t[n])||(e[n]=t[n])}).bind(this))},this),e},defaults:function(e){return this.each(Rr.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(n){this.isUndefined(e[n])&&(e[n]=t[n])}).bind(this))},this),e},compose:function(){var e=Rr.call(arguments);return function(){for(var t=Rr.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(cu&&e.forEach&&e.forEach===cu)e.forEach(t,i);else if(e.length===e.length+0){var n=void 0,s=void 0;for(n=0,s=e.length;n<s;n++)if(n in e&&t.call(i,e[n],n)===this.BREAK)return}else for(var o in e)if(t.call(i,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var n=void 0;return function(){var s=this,o=arguments;function a(){n=null,i||e.apply(s,o)}var l=i||!n;clearTimeout(n),n=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():Rr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},sx=[{litmus:Te.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:er},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:er},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:er},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:er}}},{litmus:Te.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Te.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Te.isObject,conversions:{RGBA_OBJ:{read:function(e){return Te.isNumber(e.r)&&Te.isNumber(e.g)&&Te.isNumber(e.b)&&Te.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Te.isNumber(e.r)&&Te.isNumber(e.g)&&Te.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Te.isNumber(e.h)&&Te.isNumber(e.s)&&Te.isNumber(e.v)&&Te.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Te.isNumber(e.h)&&Te.isNumber(e.s)&&Te.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Lr=void 0,zs=void 0,yo=function(){zs=!1;var e=arguments.length>1?Te.toArray(arguments):arguments[0];return Te.each(sx,function(t){if(t.litmus(e))return Te.each(t.conversions,function(i,n){if(Lr=i.read(e),zs===!1&&Lr!==!1)return zs=Lr,Lr.conversionName=n,Lr.conversion=i,Te.BREAK}),Te.BREAK}),zs},uu=void 0,Zs={hsv_to_rgb:function(e,t,i){var n=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=i*(1-t),a=i*(1-s*t),l=i*(1-(1-s)*t),c=[[i,l,o],[a,i,o],[o,i,l],[o,a,i],[l,o,i],[i,o,a]][n];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,i){var n=Math.min(e,t,i),s=Math.max(e,t,i),o=s-n,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-i)/o:t===s?a=2+(i-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,i){var n=this.hex_with_component(0,2,e);return n=this.hex_with_component(n,1,t),n=this.hex_with_component(n,0,i),n},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(uu=t*8)|e&~(255<<uu)}},ax=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},fn=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},dn=function(){function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}}(),Jn=function r(e,t,i){e===null&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(n===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,i)}else{if("value"in n)return n.value;var o=n.get;return o===void 0?void 0:o.call(i)}},Qn=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},$n=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},vt=function(){function r(){if(fn(this,r),this.__state=yo.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return dn(r,[{key:"toString",value:function(){return er(this)}},{key:"toHexString",value:function(){return er(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Yo(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(vt.recalculateRGB(this,e,t),this.__state[e])},set:function(n){this.__state.space!=="RGB"&&(vt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=n}})}function jo(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(vt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(vt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}vt.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=Zs.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")Te.extend(r.__state,Zs.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};vt.recalculateHSV=function(r){var e=Zs.rgb_to_hsv(r.r,r.g,r.b);Te.extend(r.__state,{s:e.s,v:e.v}),Te.isNaN(e.h)?Te.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};vt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Yo(vt.prototype,"r",2);Yo(vt.prototype,"g",1);Yo(vt.prototype,"b",0);jo(vt.prototype,"h");jo(vt.prototype,"s");jo(vt.prototype,"v");Object.defineProperty(vt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(vt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Zs.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Si=function(){function r(e,t){fn(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return dn(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),ox={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},bh={};Te.each(ox,function(r,e){Te.each(r,function(t){bh[t]=e})});var lx=/(\d+(\.\d+)?)px/;function gn(r){if(r==="0"||Te.isUndefined(r))return 0;var e=r.match(lx);return Te.isNull(e)?0:parseFloat(e[1])}var oe={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var n=i,s=t;Te.isUndefined(s)&&(s=!0),Te.isUndefined(n)&&(n=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),n&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,n){var s=i||{},o=bh[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;Te.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}Te.defaults(a,n),e.dispatchEvent(a)},bind:function(e,t,i,n){var s=n||!1;return e.addEventListener?e.addEventListener(t,i,s):e.attachEvent&&e.attachEvent("on"+t,i),oe},unbind:function(e,t,i,n){var s=n||!1;return e.removeEventListener?e.removeEventListener(t,i,s):e.detachEvent&&e.detachEvent("on"+t,i),oe},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return oe},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),n=i.indexOf(t);n!==-1&&(i.splice(n,1),e.className=i.join(" "))}else e.className=void 0;return oe},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return gn(t["border-left-width"])+gn(t["border-right-width"])+gn(t["padding-left"])+gn(t["padding-right"])+gn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return gn(t["border-top-width"])+gn(t["border-bottom-width"])+gn(t["padding-top"])+gn(t["padding-bottom"])+gn(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Eh=function(r){Qn(e,r);function e(t,i){fn(this,e);var n=$n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=n;n.__prev=n.getValue(),n.__checkbox=document.createElement("input"),n.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return oe.bind(n.__checkbox,"change",o,!1),n.domElement.appendChild(n.__checkbox),n.updateDisplay(),n}return dn(e,[{key:"setValue",value:function(i){var n=Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),n}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Si),cx=function(r){Qn(e,r);function e(t,i,n){fn(this,e);var s=$n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=n,a=s;if(s.__select=document.createElement("select"),Te.isArray(o)){var l={};Te.each(o,function(c){l[c]=c}),o=l}return Te.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),s.updateDisplay(),oe.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return dn(e,[{key:"setValue",value:function(i){var n=Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),n}},{key:"updateDisplay",value:function(){return oe.isActive(this.__select)?this:(this.__select.value=this.getValue(),Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Si),ux=function(r){Qn(e,r);function e(t,i){fn(this,e);var n=$n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=n;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return n.__input=document.createElement("input"),n.__input.setAttribute("type","text"),oe.bind(n.__input,"keyup",o),oe.bind(n.__input,"change",o),oe.bind(n.__input,"blur",a),oe.bind(n.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),n.updateDisplay(),n.domElement.appendChild(n.__input),n}return dn(e,[{key:"updateDisplay",value:function(){return oe.isActive(this.__input)||(this.__input.value=this.getValue()),Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Si);function hu(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Th=function(r){Qn(e,r);function e(t,i,n){fn(this,e);var s=$n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=n||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,Te.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=hu(s.__impliedStep),s}return dn(e,[{key:"setValue",value:function(i){var n=i;return this.__min!==void 0&&n<this.__min?n=this.__min:this.__max!==void 0&&n>this.__max&&(n=this.__max),this.__step!==void 0&&n%this.__step!==0&&(n=Math.round(n/this.__step)*this.__step),Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=hu(i),this}}]),e}(Si);function hx(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Qs=function(r){Qn(e,r);function e(t,i,n){fn(this,e);var s=$n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,n));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var g=parseFloat(o.__input.value);Te.isNaN(g)||o.setValue(g)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(g){var _=a-g.clientY;o.setValue(o.getValue()+_*o.__impliedStep),a=g.clientY}function f(){oe.unbind(window,"mousemove",h),oe.unbind(window,"mouseup",f),c()}function d(g){oe.bind(window,"mousemove",h),oe.bind(window,"mouseup",f),a=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),oe.bind(s.__input,"change",l),oe.bind(s.__input,"blur",u),oe.bind(s.__input,"mousedown",d),oe.bind(s.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return dn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():hx(this.getValue(),this.__precision),Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Th);function fu(r,e,t,i,n){return i+(n-i)*((r-e)/(t-e))}var So=function(r){Qn(e,r);function e(t,i,n,s,o){fn(this,e);var a=$n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:n,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),oe.bind(a.__background,"mousedown",c),oe.bind(a.__background,"touchstart",f),oe.addClass(a.__background,"slider"),oe.addClass(a.__foreground,"slider-fg");function c(_){document.activeElement.blur(),oe.bind(window,"mousemove",u),oe.bind(window,"mouseup",h),u(_)}function u(_){_.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(fu(_.clientX,p.left,p.right,l.__min,l.__max)),!1}function h(){oe.unbind(window,"mousemove",u),oe.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(_){_.touches.length===1&&(oe.bind(window,"touchmove",d),oe.bind(window,"touchend",g),d(_))}function d(_){var p=_.touches[0].clientX,m=l.__background.getBoundingClientRect();l.setValue(fu(p,m.left,m.right,l.__min,l.__max))}function g(){oe.unbind(window,"touchmove",d),oe.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return dn(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Th),wh=function(r){Qn(e,r);function e(t,i,n){fn(this,e);var s=$n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=n===void 0?"Fire":n,oe.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),oe.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return dn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Si),Mo=function(r){Qn(e,r);function e(t,i){fn(this,e);var n=$n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));n.__color=new vt(n.getValue()),n.__temp=new vt(0);var s=n;n.domElement=document.createElement("div"),oe.makeSelectable(n.domElement,!1),n.__selector=document.createElement("div"),n.__selector.className="selector",n.__saturation_field=document.createElement("div"),n.__saturation_field.className="saturation-field",n.__field_knob=document.createElement("div"),n.__field_knob.className="field-knob",n.__field_knob_border="2px solid ",n.__hue_knob=document.createElement("div"),n.__hue_knob.className="hue-knob",n.__hue_field=document.createElement("div"),n.__hue_field.className="hue-field",n.__input=document.createElement("input"),n.__input.type="text",n.__input_textShadow="0 1px 1px ",oe.bind(n.__input,"keydown",function(_){_.keyCode===13&&h.call(this)}),oe.bind(n.__input,"blur",h),oe.bind(n.__selector,"mousedown",function(){oe.addClass(this,"drag").bind(window,"mouseup",function(){oe.removeClass(s.__selector,"drag")})}),oe.bind(n.__selector,"touchstart",function(){oe.addClass(this,"drag").bind(window,"touchend",function(){oe.removeClass(s.__selector,"drag")})});var o=document.createElement("div");Te.extend(n.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Te.extend(n.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:n.__field_knob_border+(n.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Te.extend(n.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Te.extend(n.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Te.extend(o.style,{width:"100%",height:"100%",background:"none"}),du(o,"top","rgba(0,0,0,0)","#000"),Te.extend(n.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),dx(n.__hue_field),Te.extend(n.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:n.__input_textShadow+"rgba(0,0,0,0.7)"}),oe.bind(n.__saturation_field,"mousedown",a),oe.bind(n.__saturation_field,"touchstart",a),oe.bind(n.__field_knob,"mousedown",a),oe.bind(n.__field_knob,"touchstart",a),oe.bind(n.__hue_field,"mousedown",l),oe.bind(n.__hue_field,"touchstart",l);function a(_){d(_),oe.bind(window,"mousemove",d),oe.bind(window,"touchmove",d),oe.bind(window,"mouseup",c),oe.bind(window,"touchend",c)}function l(_){g(_),oe.bind(window,"mousemove",g),oe.bind(window,"touchmove",g),oe.bind(window,"mouseup",u),oe.bind(window,"touchend",u)}function c(){oe.unbind(window,"mousemove",d),oe.unbind(window,"touchmove",d),oe.unbind(window,"mouseup",c),oe.unbind(window,"touchend",c),f()}function u(){oe.unbind(window,"mousemove",g),oe.unbind(window,"touchmove",g),oe.unbind(window,"mouseup",u),oe.unbind(window,"touchend",u),f()}function h(){var _=yo(this.value);_!==!1?(s.__color.__state=_,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function f(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}n.__saturation_field.appendChild(o),n.__selector.appendChild(n.__field_knob),n.__selector.appendChild(n.__saturation_field),n.__selector.appendChild(n.__hue_field),n.__hue_field.appendChild(n.__hue_knob),n.domElement.appendChild(n.__input),n.domElement.appendChild(n.__selector),n.updateDisplay();function d(_){_.type.indexOf("touch")===-1&&_.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,y=m.clientX,v=m.clientY,x=(y-p.left)/(p.right-p.left),M=1-(v-p.top)/(p.bottom-p.top);return M>1?M=1:M<0&&(M=0),x>1?x=1:x<0&&(x=0),s.__color.v=M,s.__color.s=x,s.setValue(s.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var p=s.__hue_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,y=m.clientY,v=1-(y-p.top)/(p.bottom-p.top);return v>1?v=1:v<0&&(v=0),s.__color.h=v*360,s.setValue(s.__color.toOriginal()),!1}return n}return dn(e,[{key:"updateDisplay",value:function(){var i=yo(this.getValue());if(i!==!1){var n=!1;Te.each(vt.COMPONENTS,function(a){if(!Te.isUndefined(i[a])&&!Te.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return n=!0,{}},this),n&&Te.extend(this.__color.__state,i)}Te.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;Te.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,du(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Te.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Si),fx=["-moz-","-o-","-webkit-","-ms-",""];function du(r,e,t,i){r.style.background="",Te.each(fx,function(n){r.style.cssText+="background: "+n+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function dx(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var px={load:function(e,t){var i=t||document,n=i.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,i.getElementsByTagName("head")[0].appendChild(n)},inject:function(e,t){var i=t||document,n=document.createElement("style");n.type="text/css",n.innerHTML=e;var s=i.getElementsByTagName("head")[0];try{s.appendChild(n)}catch{}}},mx=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,gx=function(e,t){var i=e[t];return Te.isArray(arguments[2])||Te.isObject(arguments[2])?new cx(e,t,arguments[2]):Te.isNumber(i)?Te.isNumber(arguments[2])&&Te.isNumber(arguments[3])?Te.isNumber(arguments[4])?new So(e,t,arguments[2],arguments[3],arguments[4]):new So(e,t,arguments[2],arguments[3]):Te.isNumber(arguments[4])?new Qs(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Qs(e,t,{min:arguments[2],max:arguments[3]}):Te.isString(i)?new ux(e,t):Te.isFunction(i)?new wh(e,t,""):Te.isBoolean(i)?new Eh(e,t):null};function _x(r){setTimeout(r,1e3/60)}var vx=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||_x,xx=function(){function r(){fn(this,r),this.backgroundElement=document.createElement("div"),Te.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),oe.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Te.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;oe.bind(this.backgroundElement,"click",function(){e.hide()})}return dn(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Te.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function n(){t.domElement.style.display="none",t.backgroundElement.style.display="none",oe.unbind(t.domElement,"webkitTransitionEnd",n),oe.unbind(t.domElement,"transitionend",n),oe.unbind(t.domElement,"oTransitionEnd",n)};oe.bind(this.domElement,"webkitTransitionEnd",i),oe.bind(this.domElement,"transitionend",i),oe.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-oe.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-oe.getHeight(this.domElement)/2+"px"}}]),r}(),yx=rx(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);px.inject(yx);var pu="dg",mu=72,gu=20,Qr="Default",Dr=function(){try{return!!window.localStorage}catch{return!1}}(),Hr=void 0,_u=!0,qi=void 0,io=!1,Ah=[],et=function r(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),oe.addClass(this.domElement,pu),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=Te.defaults(i,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),i=Te.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),Te.isUndefined(i.load)?i.load={preset:Qr}:i.preset&&(i.load.preset=i.preset),Te.isUndefined(i.parent)&&i.hideable&&Ah.push(this),i.resizable=Te.isUndefined(i.parent)&&i.resizable,i.autoPlace&&Te.isUndefined(i.scrollable)&&(i.scrollable=!0);var n=Dr&&localStorage.getItem(Ki(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(f){t.parent?t.getRoot().preset=f:i.load.preset=f,Ex(this),t.revert()}},width:{get:function(){return i.width},set:function(f){i.width=f,To(t,f)}},name:{get:function(){return i.name},set:function(f){i.name=f,o&&(o.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(f){i.closed=f,i.closed?oe.addClass(t.__ul,r.CLASS_CLOSED):oe.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return n},set:function(f){Dr&&(n=f,f?oe.bind(window,"unload",s):oe.unbind(window,"unload",s),localStorage.setItem(Ki(t,"isLocal"),f))}}}),Te.isUndefined(i.parent)){if(this.closed=i.closed||!1,oe.addClass(this.domElement,r.CLASS_MAIN),oe.makeSelectable(this.domElement,!1),Dr&&n){t.useLocalStorage=!0;var a=localStorage.getItem(Ki(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,oe.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),i.closeOnTop?(oe.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(oe.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),oe.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);oe.addClass(l,"controller-name"),o=qo(t,l);var c=function(f){return f.preventDefault(),t.closed=!t.closed,!1};oe.addClass(this.__ul,r.CLASS_CLOSED),oe.addClass(o,"title"),oe.bind(o,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(Te.isUndefined(i.parent)&&(_u&&(qi=document.createElement("div"),oe.addClass(qi,pu),oe.addClass(qi,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(qi),_u=!1),qi.appendChild(this.domElement),oe.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||To(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},oe.bind(window,"resize",this.__resizeHandler),oe.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),oe.bind(this.__ul,"transitionend",this.__resizeHandler),oe.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&bx(this),s=function(){Dr&&localStorage.getItem(Ki(t,"isLocal"))==="true"&&localStorage.setItem(Ki(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,Te.defer(function(){h.width-=1})}i.parent||u()};et.toggleHide=function(){io=!io,Te.each(Ah,function(r){r.domElement.style.display=io?"none":""})};et.CLASS_AUTO_PLACE="a";et.CLASS_AUTO_PLACE_CONTAINER="ac";et.CLASS_MAIN="main";et.CLASS_CONTROLLER_ROW="cr";et.CLASS_TOO_TALL="taller-than-window";et.CLASS_CLOSED="closed";et.CLASS_CLOSE_BUTTON="close-button";et.CLASS_CLOSE_TOP="close-top";et.CLASS_CLOSE_BOTTOM="close-bottom";et.CLASS_DRAG="drag";et.DEFAULT_WIDTH=245;et.TEXT_CLOSED="Close Controls";et.TEXT_OPEN="Open Controls";et._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===mu||r.keyCode===mu)&&et.toggleHide()};oe.bind(window,"keydown",et._keydownHandler,!1);Te.extend(et.prototype,{add:function(e,t){return Vr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Vr(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Te.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&qi.removeChild(this.domElement);var e=this;Te.each(this.__folders,function(t){e.removeFolder(t)}),oe.unbind(window,"keydown",et._keydownHandler,!1),vu(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new et(t);this.__folders[e]=i;var n=qo(this,i.domElement);return oe.addClass(n,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],vu(e);var t=this;Te.each(e.__folders,function(i){e.removeFolder(i)}),Te.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=oe.getOffset(e.__ul).top,i=0;Te.each(e.__ul.childNodes,function(n){e.autoPlace&&n===e.__save_row||(i+=oe.getHeight(n))}),window.innerHeight-t-gu<i?(oe.addClass(e.domElement,et.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-gu+"px"):(oe.removeClass(e.domElement,et.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Te.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Te.debounce(function(){this.onResize()},50),remember:function(){if(Te.isUndefined(Hr)&&(Hr=new xx,Hr.domElement.innerHTML=mx),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Te.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Mx(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&To(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Gs(this)),e.folders={},Te.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Gs(this),bo(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Qr]=Gs(this,!0)),this.load.remembered[e]=Gs(this),this.preset=e,Eo(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Te.each(this.__controllers,function(t){this.getRoot().load.remembered?Ch(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Te.each(this.__folders,function(t){t.revert(t)}),e||bo(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Rh(this.__listening)},updateDisplay:function(){Te.each(this.__controllers,function(e){e.updateDisplay()}),Te.each(this.__folders,function(e){e.updateDisplay()})}});function qo(r,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?r.__ul.insertBefore(i,t):r.__ul.appendChild(i),r.onResize(),i}function vu(r){oe.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&oe.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function bo(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Sx(r,e,t){if(t.__li=e,t.__gui=r,Te.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Vr(r,t.object,t.property,{before:a,factoryArgs:[Te.toArray(arguments)]})}if(Te.isArray(o)||Te.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Vr(r,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof So){var i=new Qs(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Te.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=i[s];t[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(i,l),o.apply(t,l)}}),oe.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof Qs){var n=function(o){if(Te.isNumber(t.__min)&&Te.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Vr(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=Te.compose(n,t.min),t.max=Te.compose(n,t.max)}else t instanceof Eh?(oe.bind(e,"click",function(){oe.fakeEvent(t.__checkbox,"click")}),oe.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof wh?(oe.bind(e,"click",function(){oe.fakeEvent(t.__button,"click")}),oe.bind(e,"mouseover",function(){oe.addClass(t.__button,"hover")}),oe.bind(e,"mouseout",function(){oe.removeClass(t.__button,"hover")})):t instanceof Mo&&(oe.addClass(e,"color"),t.updateDisplay=Te.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=Te.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&bo(r.getRoot(),!0),s},t.setValue)}function Ch(r,e){var t=r.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var n=t.__rememberedObjectIndecesToControllers[i];if(n===void 0&&(n={},t.__rememberedObjectIndecesToControllers[i]=n),n[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[Qr])o=s[Qr];else return;if(o[i]&&o[i][e.property]!==void 0){var a=o[i][e.property];e.initialValue=a,e.setValue(a)}}}}function Vr(r,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var n=void 0;if(i.color)n=new Mo(e,t);else{var s=[e,t].concat(i.factoryArgs);n=gx.apply(r,s)}i.before instanceof Si&&(i.before=i.before.__li),Ch(r,n),oe.addClass(n.domElement,"c");var o=document.createElement("span");oe.addClass(o,"property-name"),o.innerHTML=n.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(n.domElement);var l=qo(r,a,i.before);return oe.addClass(l,et.CLASS_CONTROLLER_ROW),n instanceof Mo?oe.addClass(l,"color"):oe.addClass(l,ax(n.getValue())),Sx(r,l,n),r.__controllers.push(n),n}function Ki(r,e){return document.location.href+"."+e}function Eo(r,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,r.__preset_select.appendChild(i),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function xu(r,e){e.style.display=r.useLocalStorage?"block":"none"}function Mx(r){var e=r.__save_row=document.createElement("li");oe.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),oe.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",oe.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",oe.addClass(i,"button"),oe.addClass(i,"save");var n=document.createElement("span");n.innerHTML="New",oe.addClass(n,"button"),oe.addClass(n,"save-as");var s=document.createElement("span");s.innerHTML="Revert",oe.addClass(s,"button"),oe.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?Te.each(r.load.remembered,function(h,f){Eo(r,f,f===r.preset)}):Eo(r,Qr,!1),oe.bind(o,"change",function(){for(var h=0;h<r.__preset_select.length;h++)r.__preset_select[h].innerHTML=r.__preset_select[h].value;r.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(i),e.appendChild(n),e.appendChild(s),Dr){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Ki(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),xu(r,a),oe.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,xu(r,a)})}var u=document.getElementById("dg-new-constructor");oe.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Hr.hide()}),oe.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Hr.show(),u.focus(),u.select()}),oe.bind(i,"click",function(){r.save()}),oe.bind(n,"click",function(){var h=prompt("Enter a new preset name.");h&&r.saveAs(h)}),oe.bind(s,"click",function(){r.revert()})}function bx(r){var e=void 0;r.__resize_handle=document.createElement("div"),Te.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function i(){oe.removeClass(r.__closeButton,et.CLASS_DRAG),oe.unbind(window,"mousemove",t),oe.unbind(window,"mouseup",i)}function n(s){return s.preventDefault(),e=s.clientX,oe.addClass(r.__closeButton,et.CLASS_DRAG),oe.bind(window,"mousemove",t),oe.bind(window,"mouseup",i),!1}oe.bind(r.__resize_handle,"mousedown",n),oe.bind(r.__closeButton,"mousedown",n),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function To(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function Gs(r,e){var t={};return Te.each(r.__rememberedObjects,function(i,n){var s={},o=r.__rememberedObjectIndecesToControllers[n];Te.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[n]=s}),t}function Ex(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function Rh(r){r.length!==0&&vx.call(window,function(){Rh(r)}),Te.each(r,function(e){e.updateDisplay()})}var Tx=et,wo=0,Ko=0,Zt,Wr,Vt,Ao,_n,Vn,xn,Xs,yu,Xr,$s;class wx{constructor(e,t){this.speed=e,this.speed_override=t}}var lr=new wx(!1,10);let Lh={rand_vect:function(){let r=Math.random()*2*Math.PI;return{x:Math.cos(r),y:Math.sin(r)}},dot_prod_grid:function(r,e,t,i){let n,s={x:r-t,y:e-i};return this.gradients[[t,i]]?n=this.gradients[[t,i]]:(n=this.rand_vect(),this.gradients[[t,i]]=n),s.x*n.x+s.y*n.y},smootherstep:function(r){return 6*r**5-15*r**4+10*r**3},interp:function(r,e,t){return e+this.smootherstep(r)*(t-e)},seed:function(){this.gradients={},this.memory={}},get:function(r,e){if(this.memory.hasOwnProperty([r,e]))return this.memory[[r,e]];let t=Math.floor(r),i=Math.floor(e),n=this.dot_prod_grid(r,e,t,i),s=this.dot_prod_grid(r,e,t+1,i),o=this.dot_prod_grid(r,e,t,i+1),a=this.dot_prod_grid(r,e,t+1,i+1),l=this.interp(r-t,n,s),c=this.interp(r-t,o,a),u=this.interp(e-i,l,c);return this.memory[[r,e]]=u,u}};Lh.seed();function Ax(){Zt=new $u,Vt=new Jt(75,window.innerWidth/window.innerHeight,.1,1e4),Zt.fog=new No(3747402,.001),_n=new Oo({antialias:!0,alpha:!0}),_n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(_n.domElement),_n.setClearColor(3747402,1),Vt.position.set(0,5,-10),new Hv(Vt,_n.domElement);var r=document.querySelector("#statusText");r.addEventListener("click",function(){console.log("çlick"),Nx()});var e=new zv(10,10);Zt.add(e);var t=new Fv("yellow","crimson");Zt.add(t);var i=new Bv("white",10.5);i.position.set(1,1,1),Zt.add(i),Zt.add(Vt),console.log(_n.domElement),_n.domElement.style.position="absolute",_n.domElement.style.top="0",_n.domElement.style.left="0"}function Cx(){Vn=new Oo({antialias:!0,alpha:!0}),Vn.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Vn.domElement),Vn.setClearColor(0,0),Wr=new $u;let r=window.innerWidth,e=window.innerHeight;Ao=new Io(r/-2,r/2,e/2,e/-2,1,1e3),Wr.add(Ao),Vn.domElement.style.position="absolute",Vn.domElement.style.top="0",Vn.domElement.style.left="0";let t=new dt;Wr.add(t);let i=Pn("Power",new Xe(16777215),50.5,98,"center",14);yu=Pn("0",new Xe(16777215),55,93,"right",50);let n=Pn("W",new Xe(16777215),56,93.9,"left",14);t.add(i),t.add(yu),t.add(n);let s=Pn("Speed",new Xe(16777215),50.5+14,98,"center",14);Xr=Pn("20.0",new Xe(16777215),56+14,93,"right",50);let o=Pn("km/h",new Xe(16777215),57+14,93.9,"left",14);t.add(s),t.add(Xr),t.add(o);let a=Pn("Slope",new Xe(16777215),50.5+28,98,"center",14);$s=Pn("0",new Xe(16777215),56+28,93,"right",50);let l=Pn("%",new Xe(16777215),57+28,93.9,"left",14);t.add(a),t.add($s),t.add(l),t.position.x-=200}function Pn(r="new label",e=new Xe(16777215),t=50,i=50,n="left",s=32){let o=window.innerWidth,a=window.innerHeight;const l=new Sh;return l.color=e,l.text=r,l.anchorY="bottom",l.anchorX=n,l.fontSize=s,l.position.x=o/-2+o*(t/100),l.position.y=-(a/2)+a*(i/100),l.position.z=-10,l.fontWeight="bold",Wr.add(l),l.sync(),l}function Rx(){const r=new Zn(1,1,1),e=new uh({color:Ks.randInt(0,16777215)});xn=new wt(r,e),Zt.add(xn)}function Lx(){Ax(),Cx(),Dx("ispegui.gpx");const e=new Tx().addFolder("debug");e.add(lr,"speed",!1),e.add(lr,"speed_override",0),e.open()}Lx();Uh();function Px(r){const e=new th(r),t={steps:1024,bevelEnabled:!1,extrudePath:e},i=new ah([new Le(.6,-4.5),new Le(.6,4.5),new Le(.1,4.5),new Le(.1,-4.5)]),n=new Go(i,t);var s=new uh({color:7420606,specular:2236962,shininess:25,transparent:!0,opacity:.7});const o=new wt(n,s);console.log(o),Zt.add(o),Ix(e)}function Ux(r){var e={x:1e3,z:1e3},t=[];for(let a=0;a<r.length;a++){let l=r[a].x,c=r[a].z,u=r[a].y;t.push(new W(l,u,c));let h=6;t.push(new W(l-h,u-1,c)),t.push(new W(l+h,u-1,c)),t.push(new W(l,u-1,c-h)),t.push(new W(l,u-1,c+h));let f=l+Ks.randFloatSpread(e.x),d=c+Ks.randFloatSpread(e.z),g=u+Lh.get(l/e.x*5,c/e.z*5)*100,_=new W(f,g,d);Gx(_,r,50)==!1&&t.push(_)}var i=new Wt().setFromPoints(t),n=Xo.from(t.map(a=>[a.x,a.z])),s=[];for(let a=0;a<n.triangles.length;a++)s.push(n.triangles[a]);i.setIndex(s),i.computeVertexNormals();var o=new wt(i,new Iv({color:5965960,wireframe:!1}));Zt.add(o)}function Dx(r){const e=new XMLHttpRequest;e.open("GET",r,!0),e.onload=function(){if(e.status>=200&&e.status<400){const n=e.responseText,s=zx(n);var t=[];s.forEach(o=>{t.push(new W(o.x,o.z,o.y))});var i=t[t.length-1].y-t[0].y;console.log(t[t.length-1].y),console.log(t[0].y),console.log("elevation gain:"+i),Px(t),Ux(t)}else console.error("Error loading the file")},e.onerror=function(){console.error("Network error")},e.send()}function Ix(r){const t=r.getLength();console.log(t);for(let i=0;i<=1;i+=2/t){const n=r.getPointAt(i),s=new Zn(.1,.1,.1),o=new es({color:15793920}),a=new wt(s,o);a.position.set(n.x,n.y,n.z),Zt.add(a)}Xs=r,Ph=!0,Rx()}var Ph=!1;let Pr=0;function Fx(){Ys||(Ys=Date.now());const e=(Date.now()-Ys)/1e3,t=Xs.getPointAt(Pr);xn.position.copy(t);let i=Ko*(1e3/3600);lr.speed==!0&&(i=lr.speed_override*(1e3/3600));const n=i*e/Xs.getLength();Pr+=n,Pr>1&&(Pr=0),wo=Vx(Xs,Pr),$s.text=wo.toFixed(1),$s.sync(),Ox(xn)}let Ys=Date.now();function Ox(r){const e=Date.now();r.position.distanceTo(r.previousPosition||r.position),lr.speed==!0?Xr.text=lr.speed_override.toFixed(1):Xr.text=Ko.toFixed(1),Xr.sync(),Ys=e,r.previousPosition=r.position.clone()}function Nx(){ftmsSensor.connect().then(()=>ftmsSensor.startNotificationsIndoorBikeData().then(kx)).then(()=>setInterval(Bx,1e3)).catch(r=>{console.log(r)})}function Bx(){ftmsSensor.setSlope(wo)}function kx(r){r.addEventListener("characteristicvaluechanged",e=>{var t=ftmsSensor.parseIndoorBikeData(e.target.value);let i=Math.round(t.speedInKph);console.log(i+" &#x2764;"),Ko=t.speedInKph,wattLabel.text=t.power.toFixed(0),wattLabel.sync()})}function zx(r){const t=new DOMParser().parseFromString(r,"text/xml"),i=[],n=t.querySelectorAll("trkpt");let s=!1;const o=[];return n.forEach(a=>{const l=parseFloat(a.getAttribute("lat")),c=parseFloat(a.getAttribute("lon")),u=parseFloat(a.querySelector("ele").textContent);var h=Hx(l,c,u);s==!1&&(s=!0,o.x=h.x,o.y=h.y,o.z=h.z),h.x-=o.x,h.y-=o.y,h.z-=o.z;const f=new Zn(.5,.5,.5),d=new es({color:65280}),g=new wt(f,d);g.position.set(h.x,h.z,h.y),Zt.add(g),i.push(h)}),i}function Gx(r,e,t){for(const i of e)if((r.x-i.x)**2+(r.z-i.z)**2<t**2)return!0;return!1}function Hx(r,e,t){const n=r*Math.PI/180,o=6371e3*(e*Math.PI/180)*Math.cos(n),a=6371e3*n;return{x:o,z:t,y:a}}function Vx(r,e){r.getPointAt(e);const t=r.getTangentAt(e).normalize();return Math.atan2(t.y,t.length())*(180/Math.PI)}let Su=new W;function Uh(){if(requestAnimationFrame(Uh),Wo.update(),Ph==!0){xn.rotation.x+=.01,xn.rotation.y+=.01,Fx();const r=.1,e=xn.position.clone().sub(Su).normalize(),t=xn.position.clone().add(e.clone().multiplyScalar(-5));Vt.position.x+=(t.x-Vt.position.x)*r,Vt.position.y+=(t.y-Vt.position.y)*r,Vt.position.z+=(t.z-Vt.position.z)*r;const i=.2;Vt.position.y+=i;const n=xn.position.clone().add(e);Vt.lookAt(n),Su.copy(xn.position)}_n.render(Zt,Vt),Vn.render(Wr,Ao)}(function(){class r{constructor(){this.device=null,this.server=null,this._characteristics=new Map}connect(){return navigator.bluetooth.requestDevice({filters:[{services:["heart_rate"]}]}).then(t=>(this.device=t,t.gatt.connect())).then(t=>(this.server=t,t.getPrimaryService("heart_rate"))).then(t=>this._cacheCharacteristic(t,"heart_rate_measurement"))}startNotificationsHeartRateMeasurement(){return this._startNotifications("heart_rate_measurement")}stopNotificationsHeartRateMeasurement(){return this._stopNotifications("heart_rate_measurement")}parseHeartRate(t){t=t.buffer?t:new DataView(t);let i=t.getUint8(0),n=i&1,s={},o=1;n?(s.heartRate=t.getUint16(o,!0),o+=2):(s.heartRate=t.getUint8(o),o+=1);let a=i&2;if(i&4&&(s.contactDetected=!!a),i&8&&(s.energyExpended=t.getUint16(o,!0),o+=2),i&16){let h=[];for(;o+1<t.byteLength;o+=2)h.push(t.getUint16(o,!0));s.rrIntervals=h}return s}_cacheCharacteristic(t,i){return t.getCharacteristic(i).then(n=>{this._characteristics.set(i,n)})}_readCharacteristicValue(t){return this._characteristics.get(t).readValue().then(n=>(n=n.buffer?n:new DataView(n),n))}_writeCharacteristicValue(t,i){return this._characteristics.get(t).writeValue(i)}_startNotifications(t){let i=this._characteristics.get(t);return i.startNotifications().then(()=>i)}_stopNotifications(t){let i=this._characteristics.get(t);return i.stopNotifications().then(()=>i)}}window.heartRateSensor=new r})();(function(){class r{constructor(){this.device=null,this.server=null,this._characteristics=new Map,this.gotFeature=!1}connect(){return navigator.bluetooth.requestDevice({filters:[{services:["fitness_machine"]}]}).then(t=>(this.device=t,t.gatt.connect())).then(t=>(this.server=t,t.getPrimaryService("fitness_machine"))).then(t=>(console.log("a"),this._cacheCharacteristic(t,"fitness_machine_control_point"),this._cacheCharacteristic(t,"indoor_bike_data")))}startNotificationsIndoorBikeData(){return this._startNotifications("indoor_bike_data")}stopNotificationsIndoorBikeData(){return this._stopNotifications("indoor_bike_data")}setSlope(t){console.log("in set slope");let i=40,n=51,s=Math.floor(t/.01),o=new Uint8Array(new Uint16Array([s]).buffer),a=new Uint8Array([17,0,0,o[0],o[1],i,n]),l=this._characteristics.get("fitness_machine_control_point");console.log(l),l.writeValueWithResponse(a).then(()=>{console.log("write successfully")}).catch(c=>{console.log(c)})}parseIndoorBikeData(t){t=t.buffer?t:new DataView(t);let i=t.getUint16(0,!0),n={},s=2;return i&1||(n.speedInKph=t.getUint16(s,!0)*.01,s+=2),i&2&&(s+=2),i&4&&(s+=2),i&8&&(s+=2),i&16&&(s+=3),i&32&&(s+=2),i&64&&(n.power=t.getUint16(s,!0)),n}_cacheCharacteristic(t,i){return t.getCharacteristic(i).then(n=>{this._characteristics.set(i,n)})}_readCharacteristicValue(t){return this._characteristics.get(t).readValue().then(n=>(n=n.buffer?n:new DataView(n),n))}_writeCharacteristicValue(t,i){return this._characteristics.get(t).writeValue(i)}_startNotifications(t){let i=this._characteristics.get(t);return i.startNotifications().then(()=>i)}_stopNotifications(t){let i=this._characteristics.get(t);return i.stopNotifications().then(()=>i)}}window.ftmsSensor=new r})()});export default Wx();
