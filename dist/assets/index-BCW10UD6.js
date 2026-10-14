(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const bs="170",cr={ROTATE:0,DOLLY:1,PAN:2},sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hc=0,Js=1,uc=2,ml=1,dc=2,ai=3,Ti=0,Tt=1,It=2,Mi=0,Fi=1,li=2,$s=3,Qs=4,pc=5,Ui=100,fc=101,mc=102,gc=103,_c=104,vc=200,xc=201,yc=202,Mc=203,Na=204,Ua=205,Sc=206,Tc=207,bc=208,Ec=209,wc=210,Ac=211,Rc=212,Cc=213,Pc=214,Ia=0,Oa=1,Fa=2,pr=3,za=4,Ba=5,Ha=6,ka=7,gl=0,Lc=1,Dc=2,Si=0,Nc=1,Uc=2,Ic=3,_l=4,Oc=5,Fc=6,zc=7,vl=300,fr=301,mr=302,Ga=303,Va=304,Gn=306,gr=1e3,Yt=1001,Wa=1002,Wt=1003,Bc=1004,en=1005,Zt=1006,Kn=1007,Oi=1008,ui=1009,xl=1010,yl=1011,Hr=1012,Es=1013,zi=1014,si=1015,qr=1016,ws=1017,As=1018,_r=1020,Ml=35902,Sl=1021,Tl=1022,Gt=1023,bl=1024,El=1025,hr=1026,vr=1027,wl=1028,Rs=1029,Al=1030,Cs=1031,Ps=1033,Pn=33776,Ln=33777,Dn=33778,Nn=33779,Xa=35840,ja=35841,qa=35842,Ya=35843,Za=36196,Ka=37492,Ja=37496,$a=37808,Qa=37809,es=37810,ts=37811,is=37812,rs=37813,ns=37814,as=37815,ss=37816,os=37817,ls=37818,cs=37819,hs=37820,us=37821,Un=36492,ds=36494,ps=36495,Rl=36283,fs=36284,ms=36285,gs=36286,Hc=3200,kc=3201,Cl=0,Gc=1,yi="",Ut="srgb",Mr="srgb-linear",Vn="linear",Ze="srgb",Xi=7680,eo=519,Vc=512,Wc=513,Xc=514,Pl=515,jc=516,qc=517,Yc=518,Zc=519,to=35044,io="300 es",oi=2e3,zn=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ro=1234567;const Ir=Math.PI/180,kr=180/Math.PI;function Gi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function Ls(r,e){return(r%e+e)%e}function Kc(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Jc(r,e,t){return r!==e?(t-r)/(e-r):0}function Or(r,e,t){return(1-t)*r+t*e}function $c(r,e,t,i){return Or(r,e,1-Math.exp(-t*i))}function Qc(r,e=1){return e-Math.abs(Ls(r,e*2)-e)}function eh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function th(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ih(r,e){return r+Math.floor(Math.random()*(e-r+1))}function rh(r,e){return r+Math.random()*(e-r)}function nh(r){return r*(.5-Math.random())}function ah(r){r!==void 0&&(ro=r);let e=ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sh(r){return r*Ir}function oh(r){return r*kr}function lh(r){return(r&r-1)===0&&r!==0}function ch(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function hh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function uh(r,e,t,i,n){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),d=a((e-i)/2),u=s((e-i)/2),p=a((i-e)/2),g=s((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ar(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ll={DEG2RAD:Ir,RAD2DEG:kr,generateUUID:Gi,clamp:mt,euclideanModulo:Ls,mapLinear:Kc,inverseLerp:Jc,lerp:Or,damp:$c,pingpong:Qc,smoothstep:eh,smootherstep:th,randInt:ih,randFloat:rh,randFloatSpread:nh,seededRandom:ah,degToRad:sh,radToDeg:oh,isPowerOfTwo:lh,ceilPowerOfTwo:ch,floorPowerOfTwo:hh,setQuaternionFromProperEuler:uh,normalize:Mt,denormalize:ar};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,i,n,a,s,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c)}set(e,t,i,n,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],E=n[1],T=n[4],x=n[7],I=n[2],P=n[5],R=n[8];return a[0]=s*_+o*E+l*I,a[3]=s*m+o*T+l*P,a[6]=s*f+o*x+l*R,a[1]=c*_+h*E+d*I,a[4]=c*m+h*T+d*P,a[7]=c*f+h*x+d*R,a[2]=u*_+p*E+g*I,a[5]=u*m+p*T+g*P,a[8]=u*f+p*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,u=o*l-h*a,p=c*a-s*l,g=t*d+i*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*s)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*a-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jn.makeScale(e,t)),this}rotate(e){return this.premultiply(Jn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jn=new Fe;function Dl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dh(){const r=Gr("canvas");return r.style.display="block",r}const no={};function Dr(r){r in no||(no[r]=!0,console.warn(r))}function ph(r,e,t){return new Promise(function(i,n){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function fh(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mh(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const We={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ze&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ze&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yi?Vn:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ci(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ur(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ao=[.64,.33,.3,.6,.15,.06],so=[.2126,.7152,.0722],oo=[.3127,.329],lo=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),co=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[Mr]:{primaries:ao,whitePoint:oo,transfer:Vn,toXYZ:lo,fromXYZ:co,luminanceCoefficients:so,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:ao,whitePoint:oo,transfer:Ze,toXYZ:lo,fromXYZ:co,luminanceCoefficients:so,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let ji;class gh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=Gr("canvas")),ji.width=e.width,ji.height=e.height;const i=ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=ci(a[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _h=0;class Nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push($n(n[s].image)):a.push($n(n[s]))}else a=$n(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function $n(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vh=0;class yt extends ki{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,i=Yt,n=Yt,a=Zt,s=Oi,o=Gt,l=ui,c=yt.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Gi(),this.name="",this.source=new Nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=vl;yt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,i=0,n=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],u=s[9],p=s[2],g=s[6],_=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,E=(d+1)/2,T=(_+1)/2,x=(l+h)/4,I=(c+p)/4,P=(u+g)/4;return f>E&&f>T?f<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(f),n=x/i,a=I/i):E>T?E<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(E),i=x/n,a=P/n):T<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(T),i=I/a,n=P/a),this.set(i,n,a,t),this}let m=Math.sqrt((g-u)*(g-u)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(c-p)/m,this.z=(h-l)/m,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xh extends ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new yt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends xh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ul extends yt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yh extends yt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,s,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=a[s+0],p=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*_,E=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const I=Math.sqrt(T),P=Math.atan2(I,f*E);m=Math.sin(m*P)/I,o=Math.sin(o*P)/I}const x=o*E;if(l=l*m+u*x,c=c*m+p*x,h=h*m+g*x,d=d*m+_*x,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,a,s){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=a[s],u=a[s+1],p=a[s+2],g=a[s+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(a/2),u=l(i/2),p=l(n/2),g=l(a/2);switch(s){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-n)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(a+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-n)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+n*c-a*l,this._y=n*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-n*o,this._w=s*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=s*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,i=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),h=2*(o*t-a*n),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*h,this.y=i+l*h+o*c-a*d,this.z=n+l*d+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qn.copy(this).projectOnVector(e),this.sub(Qn)}reflect(e){return this.sub(Qn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qn=new w,ho=new Xt;class Yr{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,zt):zt.fromBufferAttribute(a,s),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tn.copy(i.boundingBox)),tn.applyMatrix4(e.matrixWorld),this.union(tn)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),rn.subVectors(this.max,wr),qi.subVectors(e.a,wr),Yi.subVectors(e.b,wr),Zi.subVectors(e.c,wr),pi.subVectors(Yi,qi),fi.subVectors(Zi,Yi),Ai.subVectors(qi,Zi);let t=[0,-pi.z,pi.y,0,-fi.z,fi.y,0,-Ai.z,Ai.y,pi.z,0,-pi.x,fi.z,0,-fi.x,Ai.z,0,-Ai.x,-pi.y,pi.x,0,-fi.y,fi.x,0,-Ai.y,Ai.x,0];return!ea(t,qi,Yi,Zi,rn)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,qi,Yi,Zi,rn))?!1:(nn.crossVectors(pi,fi),t=[nn.x,nn.y,nn.z],ea(t,qi,Yi,Zi,rn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new w,new w,new w,new w,new w,new w,new w,new w],zt=new w,tn=new Yr,qi=new w,Yi=new w,Zi=new w,pi=new w,fi=new w,Ai=new w,wr=new w,rn=new w,nn=new w,Ri=new w;function ea(r,e,t,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){Ri.fromArray(r,a);const o=n.x*Math.abs(Ri.x)+n.y*Math.abs(Ri.y)+n.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),h=i.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Mh=new Yr,Ar=new w,ta=new w;class Zr{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Mh.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ar,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(ta)),this.expandByPoint(Ar.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new w,ia=new w,an=new w,mi=new w,ra=new w,sn=new w,na=new w;class Kr{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ia.copy(e).add(t).multiplyScalar(.5),an.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(ia);const a=e.distanceTo(t)*.5,s=-this.direction.dot(an),o=mi.dot(this.direction),l=-mi.dot(an),c=mi.lengthSq(),h=Math.abs(1-s*s);let d,u,p,g;if(h>0)if(d=s*l-o,u=s*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+s*u+2*o)+u*(s*d+u+2*l)+c}else u=a,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-s*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(s*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=s>0?-a:a,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(ia).addScaledVector(an,u),p}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),n=ti.dot(ti)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,n,a){ra.subVectors(t,e),sn.subVectors(i,e),na.crossVectors(ra,sn);let s=this.direction.dot(na),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(sn.crossVectors(mi,sn));if(l<0)return null;const c=o*this.direction.dot(ra.cross(mi));if(c<0||l+c>s)return null;const h=-o*mi.dot(na);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,i,n,a,s,o,l,c,h,d,u,p,g,_,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c,h,d,u,p,g,_,m)}set(e,t,i,n,a,s,o,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Ki.setFromMatrixColumn(e,0).length(),a=1/Ki.setFromMatrixColumn(e,1).length(),s=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=s*h,p=s*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-s*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*h,t[9]=_-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*h,p=s*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=s*l,p=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=s*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sh,e,Th)}lookAt(e,t,i){const n=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),gi.crossVectors(i,Rt),gi.lengthSq()===0&&(Math.abs(i.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),gi.crossVectors(i,Rt)),gi.normalize(),on.crossVectors(Rt,gi),n[0]=gi.x,n[4]=on.x,n[8]=Rt.x,n[1]=gi.y,n[5]=on.y,n[9]=Rt.y,n[2]=gi.z,n[6]=on.z,n[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],T=i[7],x=i[11],I=i[15],P=n[0],R=n[4],L=n[8],S=n[12],y=n[1],C=n[5],z=n[9],F=n[13],k=n[2],q=n[6],W=n[10],ee=n[14],V=n[3],ne=n[7],fe=n[11],Le=n[15];return a[0]=s*P+o*y+l*k+c*V,a[4]=s*R+o*C+l*q+c*ne,a[8]=s*L+o*z+l*W+c*fe,a[12]=s*S+o*F+l*ee+c*Le,a[1]=h*P+d*y+u*k+p*V,a[5]=h*R+d*C+u*q+p*ne,a[9]=h*L+d*z+u*W+p*fe,a[13]=h*S+d*F+u*ee+p*Le,a[2]=g*P+_*y+m*k+f*V,a[6]=g*R+_*C+m*q+f*ne,a[10]=g*L+_*z+m*W+f*fe,a[14]=g*S+_*F+m*ee+f*Le,a[3]=E*P+T*y+x*k+I*V,a[7]=E*R+T*C+x*q+I*ne,a[11]=E*L+T*z+x*W+I*fe,a[15]=E*S+T*F+x*ee+I*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+a*l*d-n*c*d-a*o*u+i*c*u+n*o*p-i*l*p)+_*(+t*l*p-t*c*u+a*s*u-n*s*p+n*c*h-a*l*h)+m*(+t*c*d-t*o*p-a*s*d+i*s*p+a*o*h-i*c*h)+f*(-n*o*h-t*l*d+t*o*u+n*s*d-i*s*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=d*m*c-_*u*c+_*l*p-o*m*p-d*l*f+o*u*f,T=g*u*c-h*m*c-g*l*p+s*m*p+h*l*f-s*u*f,x=h*_*c-g*d*c+g*o*p-s*_*p-h*o*f+s*d*f,I=g*d*l-h*_*l-g*o*u+s*_*u+h*o*m-s*d*m,P=t*E+i*T+n*x+a*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=E*R,e[1]=(_*u*a-d*m*a-_*n*p+i*m*p+d*n*f-i*u*f)*R,e[2]=(o*m*a-_*l*a+_*n*c-i*m*c-o*n*f+i*l*f)*R,e[3]=(d*l*a-o*u*a-d*n*c+i*u*c+o*n*p-i*l*p)*R,e[4]=T*R,e[5]=(h*m*a-g*u*a+g*n*p-t*m*p-h*n*f+t*u*f)*R,e[6]=(g*l*a-s*m*a-g*n*c+t*m*c+s*n*f-t*l*f)*R,e[7]=(s*u*a-h*l*a+h*n*c-t*u*c-s*n*p+t*l*p)*R,e[8]=x*R,e[9]=(g*d*a-h*_*a-g*i*p+t*_*p+h*i*f-t*d*f)*R,e[10]=(s*_*a-g*o*a+g*i*c-t*_*c-s*i*f+t*o*f)*R,e[11]=(h*o*a-s*d*a-h*i*c+t*d*c+s*i*p-t*o*p)*R,e[12]=I*R,e[13]=(h*_*n-g*d*n+g*i*u-t*_*u-h*i*m+t*d*m)*R,e[14]=(g*o*n-s*_*n-g*i*l+t*_*l+s*i*m-t*o*m)*R,e[15]=(s*d*n-h*o*n+h*i*l-t*d*l-s*i*u+t*o*u)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,d=o+o,u=a*c,p=a*h,g=a*d,_=s*h,m=s*d,f=o*d,E=l*c,T=l*h,x=l*d,I=i.x,P=i.y,R=i.z;return n[0]=(1-(_+f))*I,n[1]=(p+x)*I,n[2]=(g-T)*I,n[3]=0,n[4]=(p-x)*P,n[5]=(1-(u+f))*P,n[6]=(m+E)*P,n[7]=0,n[8]=(g+T)*R,n[9]=(m-E)*R,n[10]=(1-(u+_))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=Ki.set(n[0],n[1],n[2]).length();const s=Ki.set(n[4],n[5],n[6]).length(),o=Ki.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Bt.copy(this);const l=1/a,c=1/s,h=1/o;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=c,Bt.elements[5]*=c,Bt.elements[6]*=c,Bt.elements[8]*=h,Bt.elements[9]*=h,Bt.elements[10]*=h,t.setFromRotationMatrix(Bt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,n,a,s,o=oi){const l=this.elements,c=2*a/(t-e),h=2*a/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n);let p,g;if(o===oi)p=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===zn)p=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,s,o=oi){const l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(s-a),u=(t+e)*c,p=(i+n)*h;let g,_;if(o===oi)g=(s+a)*d,_=-2*d;else if(o===zn)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new w,Bt=new $e,Sh=new w(0,0,0),Th=new w(1,1,1),gi=new w,on=new w,Rt=new w,uo=new $e,po=new Xt;class Kt{constructor(e=0,t=0,i=0,n=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return po.setFromEuler(this),this.setFromQuaternion(po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class Ds{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bh=0;const fo=new w,Ji=new Xt,ii=new $e,ln=new w,Rr=new w,Eh=new w,wh=new Xt,mo=new w(1,0,0),go=new w(0,1,0),_o=new w(0,0,1),vo={type:"added"},Ah={type:"removed"},$i={type:"childadded",child:null},aa={type:"childremoved",child:null};class gt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new w,t=new Kt,i=new Xt,n=new w(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new $e},normalMatrix:{value:new Fe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(mo,e)}rotateY(e){return this.rotateOnAxis(go,e)}rotateZ(e){return this.rotateOnAxis(_o,e)}translateOnAxis(e,t){return fo.copy(e).applyQuaternion(this.quaternion),this.position.add(fo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mo,e)}translateY(e){return this.translateOnAxis(go,e)}translateZ(e){return this.translateOnAxis(_o,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ln.copy(e):ln.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Rr,ln,this.up):ii.lookAt(ln,Rr,this.up),this.quaternion.setFromRotationMatrix(ii),n&&(ii.extractRotation(n.matrixWorld),Ji.setFromRotationMatrix(ii),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vo),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ah),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vo),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,wh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),u=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}gt.DEFAULT_UP=new w(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new w,ri=new w,sa=new w,ni=new w,Qi=new w,er=new w,xo=new w,oa=new w,la=new w,ca=new w,ha=new Je,ua=new Je,da=new Je;class kt{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ht.subVectors(e,t),n.cross(Ht);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){Ht.subVectors(n,t),ri.subVectors(i,t),sa.subVectors(e,t);const s=Ht.dot(Ht),o=Ht.dot(ri),l=Ht.dot(sa),c=ri.dot(ri),h=ri.dot(sa),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(s*h-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,n,a,s,o,l){return this.getBarycoord(e,t,i,n,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ni.x),l.addScaledVector(s,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,t,i,n,a,s){return ha.setScalar(0),ua.setScalar(0),da.setScalar(0),ha.fromBufferAttribute(e,t),ua.fromBufferAttribute(e,i),da.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(ha,a.x),s.addScaledVector(ua,a.y),s.addScaledVector(da,a.z),s}static isFrontFacing(e,t,i,n){return Ht.subVectors(i,t),ri.subVectors(e,t),Ht.cross(ri).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Ht.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return kt.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let s,o;Qi.subVectors(n,i),er.subVectors(a,i),oa.subVectors(e,i);const l=Qi.dot(oa),c=er.dot(oa);if(l<=0&&c<=0)return t.copy(i);la.subVectors(e,n);const h=Qi.dot(la),d=er.dot(la);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(Qi,s);ca.subVectors(e,a);const p=Qi.dot(ca),g=er.dot(ca);if(g>=0&&p<=g)return t.copy(a);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(er,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return xo.subVectors(a,n),o=(d-h)/(d-h+(p-g)),t.copy(n).addScaledVector(xo,o);const f=1/(m+_+u);return s=_*f,o=u*f,t.copy(i).addScaledVector(Qi,s).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},cn={h:0,s:0,l:0};function pa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=We.workingColorSpace){if(e=Ls(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=pa(s,a,e+1/3),this.g=pa(s,a,e),this.b=pa(s,a,e-1/3)}return We.toWorkingColorSpace(this,n),this}setStyle(e,t=Ut){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=Il[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return We.fromWorkingColorSpace(xt.copy(this),e),Math.round(mt(xt.r*255,0,255))*65536+Math.round(mt(xt.g*255,0,255))*256+Math.round(mt(xt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,n=xt.g,a=xt.b,s=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(n-a)/d+(n<a?6:0);break;case n:l=(a-i)/d+2;break;case a:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Ut){We.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,n=xt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(cn);const i=Or(_i.h,cn.h,t),n=Or(_i.s,cn.s,t),a=Or(_i.l,cn.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Xe;Xe.NAMES=Il;let Rh=0;class Vi extends ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Gi(),this.name="",this.blending=Fi,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Ua,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vt extends Vi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new w,hn=new re;class wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=to,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXY(t,hn.x,hn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),n=Mt(n,this.array),a=Mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==to&&(e.usage=this.usage),e}}class Ol extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fl extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ch=0;const Nt=new $e,fa=new gt,tr=new w,Ct=new Yr,Cr=new Yr,ft=new w;class ut extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dl(e)?Fl:Ol)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Fe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new st(i,3))}else{for(let i=0,n=t.count;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];Ct.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const i=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Ct.min,Cr.min),Ct.expandByPoint(ft),ft.addVectors(Ct.max,Cr.max),Ct.expandByPoint(ft)):(Ct.expandByPoint(Cr.min),Ct.expandByPoint(Cr.max))}Ct.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)ft.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(ft));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ft.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(e,c),ft.add(tr)),n=Math.max(n,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new w,l[L]=new w;const c=new w,h=new w,d=new w,u=new re,p=new re,g=new re,_=new w,m=new w;function f(L,S,y){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,y),u.fromBufferAttribute(a,L),p.fromBufferAttribute(a,S),g.fromBufferAttribute(a,y),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[L].add(_),o[S].add(_),o[y].add(_),l[L].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,S=E.length;L<S;++L){const y=E[L],C=y.start,z=y.count;for(let F=C,k=C+z;F<k;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new w,x=new w,I=new w,P=new w;function R(L){I.fromBufferAttribute(n,L),P.copy(I);const S=o[L];T.copy(S),T.sub(I.multiplyScalar(I.dot(S))).normalize(),x.crossVectors(P,S);const y=x.dot(l[L])<0?-1:1;s.setXYZW(L,T.x,T.y,T.z,y)}for(let L=0,S=E.length;L<S;++L){const y=E[L],C=y.start,z=y.count;for(let F=C,k=C+z;F<k;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new w,a=new w,s=new w,o=new w,l=new w,c=new w,h=new w,d=new w;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new wt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ut,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yo=new $e,Ci=new Kr,un=new Zr,Mo=new w,dn=new w,pn=new w,fn=new w,ma=new w,mn=new w,So=new w,gn=new w;class et extends gt{constructor(e=new ut,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){mn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(ma.fromBufferAttribute(d,e),s?mn.addScaledVector(ma,h):mn.addScaledVector(ma.sub(t),h))}t.add(mn)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),un.copy(i.boundingSphere),un.applyMatrix4(a),Ci.copy(e.ray).recast(e.near),!(un.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(un,Mo)===null||Ci.origin.distanceToSquared(Mo)>(e.far-e.near)**2))&&(yo.copy(a).invert(),Ci.copy(e.ray).applyMatrix4(yo),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,i){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=s[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,I=T;x<I;x+=3){const P=o.getX(x),R=o.getX(x+1),L=o.getX(x+2);n=_n(this,f,e,i,c,h,d,P,R,L),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);n=_n(this,s,e,i,c,h,d,E,T,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=s[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,I=T;x<I;x+=3){const P=x,R=x+1,L=x+2;n=_n(this,f,e,i,c,h,d,P,R,L),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,T=m+1,x=m+2;n=_n(this,s,e,i,c,h,d,E,T,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Ph(r,e,t,i,n,a,s,o){let l;if(e.side===Tt?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,e.side===Ti,o),l===null)return null;gn.copy(o),gn.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(gn);return c<t.near||c>t.far?null:{distance:c,point:gn.clone(),object:r}}function _n(r,e,t,i,n,a,s,o,l,c){r.getVertexPosition(o,dn),r.getVertexPosition(l,pn),r.getVertexPosition(c,fn);const h=Ph(r,e,t,i,dn,pn,fn,So);if(h){const d=new w;kt.getBarycoord(So,dn,pn,fn,d),n&&(h.uv=kt.getInterpolatedAttribute(n,o,l,c,d,new re)),a&&(h.uv1=kt.getInterpolatedAttribute(a,o,l,c,d,new re)),s&&(h.normal=kt.getInterpolatedAttribute(s,o,l,c,d,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new w,materialIndex:0};kt.getNormal(dn,pn,fn,u.normal),h.face=u,h.barycoord=d}return h}class Jr extends ut{constructor(e=1,t=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,n,s,2),g("x","z","y",1,-1,e,i,-t,n,s,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function g(_,m,f,E,T,x,I,P,R,L,S){const y=x/R,C=I/L,z=x/2,F=I/2,k=P/2,q=R+1,W=L+1;let ee=0,V=0;const ne=new w;for(let fe=0;fe<W;fe++){const Le=fe*C-F;for(let ze=0;ze<q;ze++){const qe=ze*y-z;ne[_]=qe*E,ne[m]=Le*T,ne[f]=k,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[f]=P>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(ze/R),d.push(1-fe/L),ee+=1}}for(let fe=0;fe<L;fe++)for(let Le=0;Le<R;Le++){const ze=u+Le+q*fe,qe=u+Le+q*(fe+1),X=u+(Le+1)+q*(fe+1),te=u+(Le+1)+q*fe;l.push(ze,qe,te),l.push(qe,X,te),V+=6}o.addGroup(p,V,S),p+=V,u+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function St(r){const e={};for(let t=0;t<r.length;t++){const i=xr(r[t]);for(const n in i)e[n]=i[n]}return e}function Lh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function zl(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Dh={clone:xr,merge:St};var Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jt extends Vi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=Lh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bl extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new w,To=new re,bo=new re;class Pt extends Bl{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,To,bo),t.subVectors(bo,To)}setViewOffset(e,t,i,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class Ih extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Pt(ir,rr,e,t);n.layers=this.layers,this.add(n);const a=new Pt(ir,rr,e,t);a.layers=this.layers,this.add(a);const s=new Pt(ir,rr,e,t);s.layers=this.layers,this.add(s);const o=new Pt(ir,rr,e,t);o.layers=this.layers,this.add(o);const l=new Pt(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new Pt(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zn)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hl extends yt{constructor(e,t,i,n,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oh extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Hl(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Jr(5,5,5),a=new Jt({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:Mi});a.uniforms.tEquirect.value=t;const s=new et(n,a),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Zt),new Ih(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(a)}}const ga=new w,Fh=new w,zh=new Fe;class xi{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ga.subVectors(i,t).cross(Fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ga),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zh.getNormalMatrix(e),n=this.coplanarPoint(ga).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Zr,vn=new w;class Ns{constructor(e=new xi,t=new xi,i=new xi,n=new xi,a=new xi,s=new xi){this.planes=[e,t,i,n,a,s]}set(e,t,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){const i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],E=n[13],T=n[14],x=n[15];if(i[0].setComponents(l-a,u-c,m-p,x-f).normalize(),i[1].setComponents(l+a,u+c,m+p,x+f).normalize(),i[2].setComponents(l+s,u+h,m+g,x+E).normalize(),i[3].setComponents(l-s,u-h,m-g,x-E).normalize(),i[4].setComponents(l-o,u-d,m-_,x-T).normalize(),t===oi)i[5].setComponents(l+o,u+d,m+_,x+T).normalize();else if(t===zn)i[5].setComponents(o,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(vn.x=n.normal.x>0?e.max.x:e.min.x,vn.y=n.normal.y>0?e.max.y:e.min.y,vn.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(vn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kl(){let r=null,e=!1,t=null,i=null;function n(a,s){t(a,s),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Bh(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:s}}class Wn extends ut{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*u-s;for(let T=0;T<c;T++){const x=T*d-a;g.push(x,-E,0),_.push(0,0,1),m.push(T/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const T=E+c*f,x=E+c*(f+1),I=E+1+c*(f+1),P=E+1+c*f;p.push(T,x,P),p.push(x,I,P)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kh=`#ifdef USE_ALPHAHASH
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
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qh=`#ifdef USE_IRIDESCENCE
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
#endif`,eu=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cu=`#define PI 3.141592653589793
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
} // validated`,hu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,uu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",_u=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Au=`#ifdef USE_GRADIENTMAP
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
}`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Du=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Nu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Bu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zu=`#if defined( USE_POINTS_UV )
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
#endif`,Ku=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ld=`#ifdef USE_NORMALMAP
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
#endif`,cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rd=`#ifdef USE_SKINNING
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
#endif`,Cd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dd=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ud=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hd=`uniform sampler2D t2D;
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,jd=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Yd=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ep=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,tp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ip=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,np=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,sp=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,op=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,lp=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dp=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pp=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,fp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,mp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,gp=`uniform vec3 color;
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
}`,_p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,vp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,He={alphahash_fragment:Hh,alphahash_pars_fragment:kh,alphamap_fragment:Gh,alphamap_pars_fragment:Vh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:jh,aomap_pars_fragment:qh,batching_pars_vertex:Yh,batching_vertex:Zh,begin_vertex:Kh,beginnormal_vertex:Jh,bsdfs:$h,iridescence_fragment:Qh,bumpmap_pars_fragment:eu,clipping_planes_fragment:tu,clipping_planes_pars_fragment:iu,clipping_planes_pars_vertex:ru,clipping_planes_vertex:nu,color_fragment:au,color_pars_fragment:su,color_pars_vertex:ou,color_vertex:lu,common:cu,cube_uv_reflection_fragment:hu,defaultnormal_vertex:uu,displacementmap_pars_vertex:du,displacementmap_vertex:pu,emissivemap_fragment:fu,emissivemap_pars_fragment:mu,colorspace_fragment:gu,colorspace_pars_fragment:_u,envmap_fragment:vu,envmap_common_pars_fragment:xu,envmap_pars_fragment:yu,envmap_pars_vertex:Mu,envmap_physical_pars_fragment:Du,envmap_vertex:Su,fog_vertex:Tu,fog_pars_vertex:bu,fog_fragment:Eu,fog_pars_fragment:wu,gradientmap_pars_fragment:Au,lightmap_pars_fragment:Ru,lights_lambert_fragment:Cu,lights_lambert_pars_fragment:Pu,lights_pars_begin:Lu,lights_toon_fragment:Nu,lights_toon_pars_fragment:Uu,lights_phong_fragment:Iu,lights_phong_pars_fragment:Ou,lights_physical_fragment:Fu,lights_physical_pars_fragment:zu,lights_fragment_begin:Bu,lights_fragment_maps:Hu,lights_fragment_end:ku,logdepthbuf_fragment:Gu,logdepthbuf_pars_fragment:Vu,logdepthbuf_pars_vertex:Wu,logdepthbuf_vertex:Xu,map_fragment:ju,map_pars_fragment:qu,map_particle_fragment:Yu,map_particle_pars_fragment:Zu,metalnessmap_fragment:Ku,metalnessmap_pars_fragment:Ju,morphinstance_vertex:$u,morphcolor_vertex:Qu,morphnormal_vertex:ed,morphtarget_pars_vertex:td,morphtarget_vertex:id,normal_fragment_begin:rd,normal_fragment_maps:nd,normal_pars_fragment:ad,normal_pars_vertex:sd,normal_vertex:od,normalmap_pars_fragment:ld,clearcoat_normal_fragment_begin:cd,clearcoat_normal_fragment_maps:hd,clearcoat_pars_fragment:ud,iridescence_pars_fragment:dd,opaque_fragment:pd,packing:fd,premultiplied_alpha_fragment:md,project_vertex:gd,dithering_fragment:_d,dithering_pars_fragment:vd,roughnessmap_fragment:xd,roughnessmap_pars_fragment:yd,shadowmap_pars_fragment:Md,shadowmap_pars_vertex:Sd,shadowmap_vertex:Td,shadowmask_pars_fragment:bd,skinbase_vertex:Ed,skinning_pars_vertex:wd,skinning_vertex:Ad,skinnormal_vertex:Rd,specularmap_fragment:Cd,specularmap_pars_fragment:Pd,tonemapping_fragment:Ld,tonemapping_pars_fragment:Dd,transmission_fragment:Nd,transmission_pars_fragment:Ud,uv_pars_fragment:Id,uv_pars_vertex:Od,uv_vertex:Fd,worldpos_vertex:zd,background_vert:Bd,background_frag:Hd,backgroundCube_vert:kd,backgroundCube_frag:Gd,cube_vert:Vd,cube_frag:Wd,depth_vert:Xd,depth_frag:jd,distanceRGBA_vert:qd,distanceRGBA_frag:Yd,equirect_vert:Zd,equirect_frag:Kd,linedashed_vert:Jd,linedashed_frag:$d,meshbasic_vert:Qd,meshbasic_frag:ep,meshlambert_vert:tp,meshlambert_frag:ip,meshmatcap_vert:rp,meshmatcap_frag:np,meshnormal_vert:ap,meshnormal_frag:sp,meshphong_vert:op,meshphong_frag:lp,meshphysical_vert:cp,meshphysical_frag:hp,meshtoon_vert:up,meshtoon_frag:dp,points_vert:pp,points_frag:fp,shadow_vert:mp,shadow_frag:gp,sprite_vert:_p,sprite_frag:vp},le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},qt={basic:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:St([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:St([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:St([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:St([le.points,le.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:St([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:St([le.common,le.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:St([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:St([le.sprite,le.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:St([le.common,le.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:St([le.lights,le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};qt.physical={uniforms:St([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const xn={r:0,b:0,g:0},Li=new Kt,xp=new $e;function yp(r,e,t,i,n,a,s){const o=new Xe(0);let l=a===!0?0:1,c,h,d=null,u=0,p=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?t:e).get(T)),T}function _(E){let T=!1;const x=g(E);x===null?f(o,l):x&&x.isColor&&(f(x,1),T=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,T){const x=g(T);x&&(x.isCubeTexture||x.mapping===Gn)?(h===void 0&&(h=new et(new Jr(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:xr(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Li.copy(T.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xp.makeRotationFromEuler(Li)),h.material.toneMapped=We.getTransfer(x.colorSpace)!==Ze,(d!==x||u!==x.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new et(new Wn(2,2),new Jt({name:"BackgroundMaterial",uniforms:xr(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=We.getTransfer(x.colorSpace)!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,p=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,T){E.getRGB(xn,zl(r)),i.buffers.color.setClear(xn.r,xn.g,xn.b,T,s)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),l=T,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:_,addToRenderList:m}}function Mp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let a=n,s=!1;function o(y,C,z,F,k){let q=!1;const W=d(F,z,C);a!==W&&(a=W,c(a.object)),q=p(y,F,z,k),q&&g(y,F,z,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,x(y,C,z,F),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function d(y,C,z){const F=z.wireframe===!0;let k=i[y.id];k===void 0&&(k={},i[y.id]=k);let q=k[C.id];q===void 0&&(q={},k[C.id]=q);let W=q[F];return W===void 0&&(W=u(l()),q[F]=W),W}function u(y){const C=[],z=[],F=[];for(let k=0;k<t;k++)C[k]=0,z[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,C,z,F){const k=a.attributes,q=C.attributes;let W=0;const ee=z.getAttributes();for(const V in ee)if(ee[V].location>=0){const ne=k[V];let fe=q[V];if(fe===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),ne===void 0||ne.attribute!==fe||fe&&ne.data!==fe.data)return!0;W++}return a.attributesNum!==W||a.index!==F}function g(y,C,z,F){const k={},q=C.attributes;let W=0;const ee=z.getAttributes();for(const V in ee)if(ee[V].location>=0){let ne=q[V];ne===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor));const fe={};fe.attribute=ne,ne&&ne.data&&(fe.data=ne.data),k[V]=fe,W++}a.attributes=k,a.attributesNum=W,a.index=F}function _(){const y=a.newAttributes;for(let C=0,z=y.length;C<z;C++)y[C]=0}function m(y){f(y,0)}function f(y,C){const z=a.newAttributes,F=a.enabledAttributes,k=a.attributeDivisors;z[y]=1,F[y]===0&&(r.enableVertexAttribArray(y),F[y]=1),k[y]!==C&&(r.vertexAttribDivisor(y,C),k[y]=C)}function E(){const y=a.newAttributes,C=a.enabledAttributes;for(let z=0,F=C.length;z<F;z++)C[z]!==y[z]&&(r.disableVertexAttribArray(z),C[z]=0)}function T(y,C,z,F,k,q,W){W===!0?r.vertexAttribIPointer(y,C,z,k,q):r.vertexAttribPointer(y,C,z,F,k,q)}function x(y,C,z,F){_();const k=F.attributes,q=z.getAttributes(),W=C.defaultAttributeValues;for(const ee in q){const V=q[ee];if(V.location>=0){let ne=k[ee];if(ne===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ne!==void 0){const fe=ne.normalized,Le=ne.itemSize,ze=e.get(ne);if(ze===void 0)continue;const qe=ze.buffer,X=ze.type,te=ze.bytesPerElement,ge=X===r.INT||X===r.UNSIGNED_INT||ne.gpuType===Es;if(ne.isInterleavedBufferAttribute){const se=ne.data,Ce=se.stride,Ae=ne.offset;if(se.isInstancedInterleavedBuffer){for(let De=0;De<V.locationSize;De++)f(V.location+De,se.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let De=0;De<V.locationSize;De++)m(V.location+De);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let De=0;De<V.locationSize;De++)T(V.location+De,Le/V.locationSize,X,fe,Ce*te,(Ae+Le/V.locationSize*De)*te,ge)}else{if(ne.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)f(V.location+se,ne.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let se=0;se<V.locationSize;se++)T(V.location+se,Le/V.locationSize,X,fe,Le*te,Le/V.locationSize*se*te,ge)}}else if(W!==void 0){const fe=W[ee];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(V.location,fe);break;case 3:r.vertexAttrib3fv(V.location,fe);break;case 4:r.vertexAttrib4fv(V.location,fe);break;default:r.vertexAttrib1fv(V.location,fe)}}}}E()}function I(){L();for(const y in i){const C=i[y];for(const z in C){const F=C[z];for(const k in F)h(F[k].object),delete F[k];delete C[z]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const C=i[y.id];for(const z in C){const F=C[z];for(const k in F)h(F[k].object),delete F[k];delete C[z]}delete i[y.id]}function R(y){for(const C in i){const z=i[C];if(z[y.id]===void 0)continue;const F=z[y.id];for(const k in F)h(F[k].object),delete F[k];delete z[y.id]}}function L(){S(),s=!0,a!==n&&(a=n,c(a.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Sp(r,e,t){let i;function n(c){i=c}function a(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function s(c,h,d){d!==0&&(r.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let p=0;p<d;p++)u+=h[p];t.update(u,i,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tp(r,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){return!(R!==Gt&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ui&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==si&&!L)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:I,maxSamples:P}}function bp(r){const e=this;let t=null,i=0,n=!1,a=!1;const s=new xi,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||n;return n=u,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!n||g===null||g.length===0||a&&!m)a?h(null):c();else{const E=a?0:i,T=E*4;let x=f.clippingState||null;l.value=x,x=h(g,u,T,p);for(let I=0;I!==T;++I)x[I]=t[I];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,x=p;T!==_;++T,x+=4)s.copy(d[T]).applyMatrix4(E,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ep(r){let e=new WeakMap;function t(s,o){return o===Ga?s.mapping=fr:o===Va&&(s.mapping=mr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ga||o===Va)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Oh(l.height);return c.fromEquirectangularTexture(r,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Gl extends Bl{constructor(e=-1,t=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const or=4,Eo=[.125,.215,.35,.446,.526,.582],Ii=20,_a=new Gl,wo=new Xe;let va=null,xa=0,ya=0,Ma=!1;const Ni=(1+Math.sqrt(5))/2,nr=1/Ni,Ao=[new w(-Ni,nr,0),new w(Ni,nr,0),new w(-nr,0,Ni),new w(nr,0,Ni),new w(0,Ni,-nr),new w(0,Ni,nr),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Ro{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va,xa,ya),this._renderer.xr.enabled=Ma,e.scissorTest=!1,yn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:qr,format:Gt,colorSpace:Mr,depthBuffer:!1},n=Co(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wp(a)),this._blurMaterial=Ap(a,e,t)}return n}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,i,n){const a=new Pt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(wo),l.toneMapping=Si,l.autoClear=!1;const d=new Vt({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),u=new et(new Jr,d);let p=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(wo),p=!0);for(let _=0;_<6;_++){const m=_%3;m===0?(a.up.set(0,s[_],0),a.lookAt(o[_],0,0)):m===1?(a.up.set(0,0,s[_]),a.lookAt(0,o[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,o[_]));const f=this._cubeSize;yn(n,m*f,_>2?f:0,f,f),l.setRenderTarget(n),p&&l.render(u,a),l.render(e,a)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===fr||e.mapping===mr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Po());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new et(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;yn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,_a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Ao[(n-a-1)%Ao.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new et(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),_=a/g,m=isFinite(a)?1+Math.floor(h*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const f=[];let E=0;for(let R=0;R<Ii;++R){const L=R/_,S=Math.exp(-L*L/2);f.push(S),R===0?E+=S:R<m&&(E+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-i;const x=this._sizeLods[n],I=3*x*(n>T-or?n-T+or:0),P=4*(this._cubeSize-x);yn(t,I,P,3*x,2*x),l.setRenderTarget(t),l.render(d,_a)}}function wp(r){const e=[],t=[],i=[];let n=r;const a=r-or+1+Eo.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>r-or?l=Eo[s-r+or-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),T=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,L=P>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(S,_*g*P),T.set(u,m*g*P);const y=[P,P,P,P,P,P];x.set(y,f*g*P)}const I=new ut;I.setAttribute("position",new wt(E,_)),I.setAttribute("uv",new wt(T,m)),I.setAttribute("faceIndex",new wt(x,f)),e.push(I),n>or&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Co(r,e,t){const i=new Bi(r,e,t);return i.texture.mapping=Gn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yn(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Ap(r,e,t){const i=new Float32Array(Ii),n=new w(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Us(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Po(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Us(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Lo(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Us(){return`

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
	`}function Rp(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ga||l===Va,h=l===fr||l===mr;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Ro(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(t===null&&(t=new Ro(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Cp(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Dr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Pp(r,e,t,i){const n={},a=new WeakMap;function s(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}u.removeEventListener("dispose",s),delete n[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let T=0,x=E.length;T<x;T+=3){const I=E[T+0],P=E[T+1],R=E[T+2];u.push(I,P,P,R,R,I)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,x=E.length/3-1;T<x;T+=3){const I=T+0,P=T+1,R=T+2;u.push(I,P,P,R,R,I)}}else return;const m=new(Dl(u)?Fl:Ol)(u,1);m.version=_;const f=a.get(d);f&&e.remove(f),a.set(d,m)}function h(d){const u=a.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Lp(r,e,t){let i;function n(u){i=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,p){r.drawElements(i,p,a,u*s),t.update(p,i,1)}function c(u,p,g){g!==0&&(r.drawElementsInstanced(i,p,a,u*s,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,u,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];t.update(_,i,1)}function d(u,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/s,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,u,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];t.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Dp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Np(r,e,t){const i=new WeakMap,n=new Je;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let p=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let I=o.attributes.position.count*x,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*P*4*d),L=new Ul(R,I,P,d);L.type=si,L.needsUpdate=!0;const S=x*4;for(let y=0;y<d;y++){const C=f[y],z=E[y],F=T[y],k=I*P*4*y;for(let q=0;q<C.count;q++){const W=q*S;g===!0&&(n.fromBufferAttribute(C,q),R[k+W+0]=n.x,R[k+W+1]=n.y,R[k+W+2]=n.z,R[k+W+3]=0),_===!0&&(n.fromBufferAttribute(z,q),R[k+W+4]=n.x,R[k+W+5]=n.y,R[k+W+6]=n.z,R[k+W+7]=0),m===!0&&(n.fromBufferAttribute(F,q),R[k+W+8]=n.x,R[k+W+9]=n.y,R[k+W+10]=n.z,R[k+W+11]=F.itemSize===4?n.w:1)}}u={count:d,texture:L,size:new re(I,P)},i.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:a}}function Up(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Vl extends yt{constructor(e,t,i,n,a,s,o,l,c,h=hr){if(h!==hr&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===hr&&(i=zi),i===void 0&&h===vr&&(i=_r),super(null,n,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wl=new yt,Do=new Vl(1,1),Xl=new Ul,jl=new yh,ql=new Hl,No=[],Uo=[],Io=new Float32Array(16),Oo=new Float32Array(9),Fo=new Float32Array(4);function Sr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=No[n];if(a===void 0&&(a=new Float32Array(n),No[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function pt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Xn(r,e){let t=Uo[e];t===void 0&&(t=new Int32Array(e),Uo[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Ip(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),pt(t,e)}}function Fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),pt(t,e)}}function zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),pt(t,e)}}function Bp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Fo.set(i),r.uniformMatrix2fv(this.addr,!1,Fo),pt(t,i)}}function Hp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Oo.set(i),r.uniformMatrix3fv(this.addr,!1,Oo),pt(t,i)}}function kp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Io.set(i),r.uniformMatrix4fv(this.addr,!1,Io),pt(t,i)}}function Gp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2iv(this.addr,e),pt(t,e)}}function Wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3iv(this.addr,e),pt(t,e)}}function Xp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4iv(this.addr,e),pt(t,e)}}function jp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2uiv(this.addr,e),pt(t,e)}}function Yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3uiv(this.addr,e),pt(t,e)}}function Zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4uiv(this.addr,e),pt(t,e)}}function Kp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a;this.type===r.SAMPLER_2D_SHADOW?(Do.compareFunction=Pl,a=Do):a=Wl,t.setTexture2D(e||a,n)}function Jp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||jl,n)}function $p(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ql,n)}function Qp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Xl,n)}function ef(r){switch(r){case 5126:return Ip;case 35664:return Op;case 35665:return Fp;case 35666:return zp;case 35674:return Bp;case 35675:return Hp;case 35676:return kp;case 5124:case 35670:return Gp;case 35667:case 35671:return Vp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return jp;case 36294:return qp;case 36295:return Yp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Qp}}function tf(r,e){r.uniform1fv(this.addr,e)}function rf(r,e){const t=Sr(e,this.size,2);r.uniform2fv(this.addr,t)}function nf(r,e){const t=Sr(e,this.size,3);r.uniform3fv(this.addr,t)}function af(r,e){const t=Sr(e,this.size,4);r.uniform4fv(this.addr,t)}function sf(r,e){const t=Sr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function of(r,e){const t=Sr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lf(r,e){const t=Sr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cf(r,e){r.uniform1iv(this.addr,e)}function hf(r,e){r.uniform2iv(this.addr,e)}function uf(r,e){r.uniform3iv(this.addr,e)}function df(r,e){r.uniform4iv(this.addr,e)}function pf(r,e){r.uniform1uiv(this.addr,e)}function ff(r,e){r.uniform2uiv(this.addr,e)}function mf(r,e){r.uniform3uiv(this.addr,e)}function gf(r,e){r.uniform4uiv(this.addr,e)}function _f(r,e,t){const i=this.cache,n=e.length,a=Xn(t,n);dt(i,a)||(r.uniform1iv(this.addr,a),pt(i,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Wl,a[s])}function vf(r,e,t){const i=this.cache,n=e.length,a=Xn(t,n);dt(i,a)||(r.uniform1iv(this.addr,a),pt(i,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||jl,a[s])}function xf(r,e,t){const i=this.cache,n=e.length,a=Xn(t,n);dt(i,a)||(r.uniform1iv(this.addr,a),pt(i,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||ql,a[s])}function yf(r,e,t){const i=this.cache,n=e.length,a=Xn(t,n);dt(i,a)||(r.uniform1iv(this.addr,a),pt(i,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Xl,a[s])}function Mf(r){switch(r){case 5126:return tf;case 35664:return rf;case 35665:return nf;case 35666:return af;case 35674:return sf;case 35675:return of;case 35676:return lf;case 5124:case 35670:return cf;case 35667:case 35671:return hf;case 35668:case 35672:return uf;case 35669:case 35673:return df;case 5125:return pf;case 36294:return ff;case 36295:return mf;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return yf}}class Sf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ef(t.type)}}class Tf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mf(t.type)}}class bf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function zo(r,e){r.seq.push(e),r.map[e.id]=e}function Ef(r,e,t){const i=r.name,n=i.length;for(Sa.lastIndex=0;;){const a=Sa.exec(i),s=Sa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){zo(t,c===void 0?new Sf(o,r,e):new Tf(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new bf(o),zo(t,h)),t=h}}}class In{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);Ef(a,s,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function Bo(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const wf=37297;let Af=0;function Rf(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Ho=new Fe;function Cf(r){We._getMatrix(Ho,We.workingColorSpace,r);const e=`mat3( ${Ho.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case Vn:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ko(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+Rf(r.getShaderSource(e),s)}else return n}function Pf(r,e){const t=Cf(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lf(r,e){let t;switch(e){case Nc:t="Linear";break;case Uc:t="Reinhard";break;case Ic:t="Cineon";break;case _l:t="ACESFilmic";break;case Fc:t="AgX";break;case zc:t="Neutral";break;case Oc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mn=new w;function Df(){We.getLuminanceCoefficients(Mn);const r=Mn.x.toFixed(4),e=Mn.y.toFixed(4),t=Mn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Uf(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function If(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Nr(r){return r!==""}function Go(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Of=/^[ \t]*#include +<([\w\d./]+)>/gm;function _s(r){return r.replace(Of,zf)}const Ff=new Map;function zf(r,e){let t=He[e];if(t===void 0){const i=Ff.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _s(t)}const Bf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(r){return r.replace(Bf,Hf)}function Hf(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Xo(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Gf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fr:case mr:e="ENVMAP_TYPE_CUBE";break;case Gn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function Wf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gl:e="ENVMAP_BLENDING_MULTIPLY";break;case Lc:e="ENVMAP_BLENDING_MIX";break;case Dc:e="ENVMAP_BLENDING_ADD";break}return e}function Xf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jf(r,e,t,i){const n=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=kf(t),c=Gf(t),h=Vf(t),d=Wf(t),u=Xf(t),p=Nf(t),g=Uf(a),_=n.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nr).join(`
`),f.length>0&&(f+=`
`)):(m=[Xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),f=[Xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?He.tonemapping_pars_fragment:"",t.toneMapping!==Si?Lf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Pf("linearToOutputTexel",t.outputColorSpace),Df(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),s=_s(s),s=Go(s,t),s=Vo(s,t),o=_s(o),o=Go(o,t),o=Vo(o,t),s=Wo(s),o=Wo(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=E+m+s,x=E+f+o,I=Bo(n,n.VERTEX_SHADER,T),P=Bo(n,n.FRAGMENT_SHADER,x);n.attachShader(_,I),n.attachShader(_,P),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function R(C){if(r.debug.checkShaderErrors){const z=n.getProgramInfoLog(_).trim(),F=n.getShaderInfoLog(I).trim(),k=n.getShaderInfoLog(P).trim();let q=!0,W=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,I,P);else{const ee=ko(n,I,"vertex"),V=ko(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+ee+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||k==="")&&(W=!1);W&&(C.diagnostics={runnable:q,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:f}})}n.deleteShader(I),n.deleteShader(P),L=new In(n,_),S=If(n,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(_,wf)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Af++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=P,this}let qf=0;class Yf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Zf(e),t.set(e,i)),i}}class Zf{constructor(e){this.id=qf++,this.code=e,this.usedTimes=0}}function Kf(r,e,t,i,n,a,s){const o=new Ds,l=new Yf,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,z,F){const k=z.fog,q=F.geometry,W=S.isMeshStandardMaterial?z.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=ee&&ee.mapping===Gn?ee.image.height:null,ne=g[S.type];S.precision!==null&&(p=n.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Le=fe!==void 0?fe.length:0;let ze=0;q.morphAttributes.position!==void 0&&(ze=1),q.morphAttributes.normal!==void 0&&(ze=2),q.morphAttributes.color!==void 0&&(ze=3);let qe,X,te,ge;if(ne){const Ye=qt[ne];qe=Ye.vertexShader,X=Ye.fragmentShader}else qe=S.vertexShader,X=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const se=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),Ae=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,$=!!S.map,J=!!S.matcap,ae=!!ee,A=!!S.aoMap,de=!!S.lightMap,ve=!!S.bumpMap,ye=!!S.normalMap,he=!!S.displacementMap,Oe=!!S.emissiveMap,me=!!S.metalnessMap,b=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,Y=S.dispersion>0,K=S.iridescence>0,j=S.sheen>0,Te=S.transmission>0,ce=v&&!!S.anisotropyMap,xe=O&&!!S.clearcoatMap,ke=O&&!!S.clearcoatNormalMap,ie=O&&!!S.clearcoatRoughnessMap,Me=K&&!!S.iridescenceMap,Pe=K&&!!S.iridescenceThicknessMap,Ne=j&&!!S.sheenColorMap,Se=j&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,Be=!!S.specularColorMap,Qe=!!S.specularIntensityMap,N=Te&&!!S.transmissionMap,ue=Te&&!!S.thicknessMap,G=!!S.gradientMap,Z=!!S.alphaMap,pe=S.alphaTest>0,oe=!!S.alphaHash,Ve=!!S.extensions;let ot=Si;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ot=r.toneMapping);const _t={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:X,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&F.instanceColor!==null,instancingMorph:Ae&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Mr,alphaToCoverage:!!S.alphaToCoverage,map:$,matcap:J,envMap:ae,envMapMode:ae&&ee.mapping,envMapCubeUVHeight:V,aoMap:A,lightMap:de,bumpMap:ve,normalMap:ye,displacementMap:u&&he,emissiveMap:Oe,normalMapObjectSpace:ye&&S.normalMapType===Gc,normalMapTangentSpace:ye&&S.normalMapType===Cl,metalnessMap:me,roughnessMap:b,anisotropy:v,anisotropyMap:ce,clearcoat:O,clearcoatMap:xe,clearcoatNormalMap:ke,clearcoatRoughnessMap:ie,dispersion:Y,iridescence:K,iridescenceMap:Me,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:Ne,sheenRoughnessMap:Se,specularMap:Ge,specularColorMap:Be,specularIntensityMap:Qe,transmission:Te,transmissionMap:N,thicknessMap:ue,gradientMap:G,opaque:S.transparent===!1&&S.blending===Fi&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:pe,alphaHash:oe,combine:S.combine,mapUv:$&&_(S.map.channel),aoMapUv:A&&_(S.aoMap.channel),lightMapUv:de&&_(S.lightMap.channel),bumpMapUv:ve&&_(S.bumpMap.channel),normalMapUv:ye&&_(S.normalMap.channel),displacementMapUv:he&&_(S.displacementMap.channel),emissiveMapUv:Oe&&_(S.emissiveMap.channel),metalnessMapUv:me&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:ce&&_(S.anisotropyMap.channel),clearcoatMapUv:xe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ke&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(S.sheenRoughnessMap.channel),specularMapUv:Ge&&_(S.specularMap.channel),specularColorMapUv:Be&&_(S.specularColorMap.channel),specularIntensityMapUv:Qe&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:ue&&_(S.thicknessMap.channel),alphaMapUv:Z&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ye||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&($||Z),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ce,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:$&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===Ze,decodeVideoTextureEmissive:Oe&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===It,flipSided:S.side===Tt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(E(y,S),T(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function T(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const y=g[S.type];let C;if(y){const z=qt[y];C=Dh.clone(z.uniforms)}else C=S.uniforms;return C}function I(S,y){let C;for(let z=0,F=h.length;z<F;z++){const k=h[z];if(k.cacheKey===y){C=k,++C.usedTimes;break}}return C===void 0&&(C=new jf(r,y,S,a),h.push(C)),C}function P(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:I,releaseProgram:P,releaseShaderCache:R,programs:h,dispose:L}}function Jf(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function n(s,o,l){r.get(s)[o]=l}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function $f(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qo(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function s(d,u,p,g,_,m){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},r[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,u,p,g,_,m){const f=s(d,u,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(d,u,p,g,_,m){const f=s(d,u,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||$f),i.length>1&&i.sort(u||jo),n.length>1&&n.sort(u||jo)}function h(){for(let d=e,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function Qf(){let r=new WeakMap;function e(i,n){const a=r.get(i);let s;return a===void 0?(s=new qo,r.set(i,[s])):n>=a.length?(s=new qo,a.push(s)):s=a[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function em(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Xe};break;case"SpotLight":t={position:new w,direction:new w,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function tm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let im=0;function rm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function nm(r){const e=new em,t=tm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);const n=new w,a=new $e,s=new $e;function o(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,T=0,x=0,I=0,P=0,R=0;c.sort(rm);for(let S=0,y=c.length;S<y;S++){const C=c[S],z=C.color,F=C.intensity,k=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*F,d+=z.g*F,u+=z.b*F;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],F);R++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=C.shadow.matrix,E++}i.directional[p]=W,p++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(z).multiplyScalar(F),W.distance=k,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[_]=W;const ee=C.shadow;if(C.map&&(i.spotLightMap[I]=C.map,I++,ee.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[_]=ee.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=q,x++}_++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(z).multiplyScalar(F),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=W,m++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const ee=C.shadow,V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=C.shadow.matrix,T++}i.point[g]=W,g++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(F),W.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[f]=W,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==I||L.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=x+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=I,L.numLightProbes=R,i.version=im++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const T=c[f];if(T.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),d++}else if(T.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),s.identity(),a.copy(T.matrixWorld),a.premultiply(m),s.extractRotation(a),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(T.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),u++}else if(T.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Yo(r){const e=new nm(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function am(r){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new Yo(r),e.set(n,[o])):a>=s.length?(o=new Yo(r),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class sm extends Vi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class om extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cm=`uniform sampler2D shadow_pass;
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
}`;function hm(r,e,t){let i=new Ns;const n=new re,a=new re,s=new Je,o=new sm({depthPacking:kc}),l=new om,c={},h=t.maxTextureSize,d={[Ti]:Tt,[Tt]:Ti,[It]:It},u=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:lm,fragmentShader:cm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new ut;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new et(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let f=this.type;this.render=function(P,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Mi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=f!==ai&&this.type===ai,k=f===ai&&this.type!==ai;for(let q=0,W=P.length;q<W;q++){const ee=P[q],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const ne=V.getFrameExtents();if(n.multiply(ne),a.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/ne.x),n.x=a.x*ne.x,V.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/ne.y),n.y=a.y*ne.y,V.mapSize.y=a.y)),V.map===null||F===!0||k===!0){const Le=this.type!==ai?{minFilter:Wt,magFilter:Wt}:{};V.map!==null&&V.map.dispose(),V.map=new Bi(n.x,n.y,Le),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const fe=V.getViewportCount();for(let Le=0;Le<fe;Le++){const ze=V.getViewport(Le);s.set(a.x*ze.x,a.y*ze.y,a.x*ze.z,a.y*ze.w),z.viewport(s),V.updateMatrices(ee,Le),i=V.getFrustum(),x(R,L,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===ai&&E(V,L),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(S,y,C)};function E(P,R){const L=e.update(_);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Bi(n.x,n.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(R,null,L,u,_,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(R,null,L,p,_,null)}function T(P,R,L,S){let y=null;const C=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)y=C;else if(y=L.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=y.uuid,F=R.uuid;let k=c[z];k===void 0&&(k={},c[z]=k);let q=k[F];q===void 0&&(q=y.clone(),k[F]=q,R.addEventListener("dispose",I)),y=q}if(y.visible=R.visible,y.wireframe=R.wireframe,S===ai?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=r.properties.get(y);z.light=L}return y}function x(P,R,L,S,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===ai)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const z=e.update(P),F=P.material;if(Array.isArray(F)){const k=z.groups;for(let q=0,W=k.length;q<W;q++){const ee=k[q],V=F[ee.materialIndex];if(V&&V.visible){const ne=T(P,V,S,y);P.onBeforeShadow(r,P,R,L,z,ne,ee),r.renderBufferDirect(L,null,z,ne,P,ee),P.onAfterShadow(r,P,R,L,z,ne,ee)}}}else if(F.visible){const k=T(P,F,S,y);P.onBeforeShadow(r,P,R,L,z,k,null),r.renderBufferDirect(L,null,z,k,P,null),P.onAfterShadow(r,P,R,L,z,k,null)}}const C=P.children;for(let z=0,F=C.length;z<F;z++)x(C[z],R,L,S,y)}function I(P){P.target.removeEventListener("dispose",I);for(const R in c){const L=c[R],S=P.target.uuid;S in L&&(L[S].dispose(),delete L[S])}}}const um={[Ia]:Oa,[Fa]:Ha,[za]:ka,[pr]:Ba,[Oa]:Ia,[Ha]:Fa,[ka]:za,[Ba]:pr};function dm(r,e){function t(){let N=!1;const ue=new Je;let G=null;const Z=new Je(0,0,0,0);return{setMask:function(pe){G!==pe&&!N&&(r.colorMask(pe,pe,pe,pe),G=pe)},setLocked:function(pe){N=pe},setClear:function(pe,oe,Ve,ot,_t){_t===!0&&(pe*=ot,oe*=ot,Ve*=ot),ue.set(pe,oe,Ve,ot),Z.equals(ue)===!1&&(r.clearColor(pe,oe,Ve,ot),Z.copy(ue))},reset:function(){N=!1,G=null,Z.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,G=null,Z=null,pe=null;return{setReversed:function(oe){if(ue!==oe){const Ve=e.get("EXT_clip_control");ue?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const ot=pe;pe=null,this.setClear(ot)}ue=oe},getReversed:function(){return ue},setTest:function(oe){oe?se(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(oe){G!==oe&&!N&&(r.depthMask(oe),G=oe)},setFunc:function(oe){if(ue&&(oe=um[oe]),Z!==oe){switch(oe){case Ia:r.depthFunc(r.NEVER);break;case Oa:r.depthFunc(r.ALWAYS);break;case Fa:r.depthFunc(r.LESS);break;case pr:r.depthFunc(r.LEQUAL);break;case za:r.depthFunc(r.EQUAL);break;case Ba:r.depthFunc(r.GEQUAL);break;case Ha:r.depthFunc(r.GREATER);break;case ka:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=oe}},setLocked:function(oe){N=oe},setClear:function(oe){pe!==oe&&(ue&&(oe=1-oe),r.clearDepth(oe),pe=oe)},reset:function(){N=!1,G=null,Z=null,pe=null,ue=!1}}}function n(){let N=!1,ue=null,G=null,Z=null,pe=null,oe=null,Ve=null,ot=null,_t=null;return{setTest:function(Ye){N||(Ye?se(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(Ye){ue!==Ye&&!N&&(r.stencilMask(Ye),ue=Ye)},setFunc:function(Ye,Ot,Qt){(G!==Ye||Z!==Ot||pe!==Qt)&&(r.stencilFunc(Ye,Ot,Qt),G=Ye,Z=Ot,pe=Qt)},setOp:function(Ye,Ot,Qt){(oe!==Ye||Ve!==Ot||ot!==Qt)&&(r.stencilOp(Ye,Ot,Qt),oe=Ye,Ve=Ot,ot=Qt)},setLocked:function(Ye){N=Ye},setClear:function(Ye){_t!==Ye&&(r.clearStencil(Ye),_t=Ye)},reset:function(){N=!1,ue=null,G=null,Z=null,pe=null,oe=null,Ve=null,ot=null,_t=null}}}const a=new t,s=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,T=null,x=null,I=null,P=null,R=new Xe(0,0,0),L=0,S=!1,y=null,C=null,z=null,F=null,k=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ee>=2);let ne=null,fe={};const Le=r.getParameter(r.SCISSOR_BOX),ze=r.getParameter(r.VIEWPORT),qe=new Je().fromArray(Le),X=new Je().fromArray(ze);function te(N,ue,G,Z){const pe=new Uint8Array(4),oe=r.createTexture();r.bindTexture(N,oe),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ve=0;Ve<G;Ve++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(ue+Ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return oe}const ge={};ge[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(r.DEPTH_TEST),s.setFunc(pr),ve(!1),ye(Js),se(r.CULL_FACE),A(Mi);function se(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function Ce(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Ae(N,ue){return d[N]!==ue?(r.bindFramebuffer(N,ue),d[N]=ue,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ue),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function De(N,ue){let G=p,Z=!1;if(N){G=u.get(ue),G===void 0&&(G=[],u.set(ue,G));const pe=N.textures;if(G.length!==pe.length||G[0]!==r.COLOR_ATTACHMENT0){for(let oe=0,Ve=pe.length;oe<Ve;oe++)G[oe]=r.COLOR_ATTACHMENT0+oe;G.length=pe.length,Z=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,Z=!0);Z&&r.drawBuffers(G)}function $(N){return g!==N?(r.useProgram(N),g=N,!0):!1}const J={[Ui]:r.FUNC_ADD,[fc]:r.FUNC_SUBTRACT,[mc]:r.FUNC_REVERSE_SUBTRACT};J[gc]=r.MIN,J[_c]=r.MAX;const ae={[vc]:r.ZERO,[xc]:r.ONE,[yc]:r.SRC_COLOR,[Na]:r.SRC_ALPHA,[wc]:r.SRC_ALPHA_SATURATE,[bc]:r.DST_COLOR,[Sc]:r.DST_ALPHA,[Mc]:r.ONE_MINUS_SRC_COLOR,[Ua]:r.ONE_MINUS_SRC_ALPHA,[Ec]:r.ONE_MINUS_DST_COLOR,[Tc]:r.ONE_MINUS_DST_ALPHA,[Ac]:r.CONSTANT_COLOR,[Rc]:r.ONE_MINUS_CONSTANT_COLOR,[Cc]:r.CONSTANT_ALPHA,[Pc]:r.ONE_MINUS_CONSTANT_ALPHA};function A(N,ue,G,Z,pe,oe,Ve,ot,_t,Ye){if(N===Mi){_===!0&&(Ce(r.BLEND),_=!1);return}if(_===!1&&(se(r.BLEND),_=!0),N!==pc){if(N!==m||Ye!==S){if((f!==Ui||x!==Ui)&&(r.blendEquation(r.FUNC_ADD),f=Ui,x=Ui),Ye)switch(N){case Fi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case li:r.blendFunc(r.ONE,r.ONE);break;case $s:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qs:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Fi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case li:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $s:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qs:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,T=null,I=null,P=null,R.set(0,0,0),L=0,m=N,S=Ye}return}pe=pe||ue,oe=oe||G,Ve=Ve||Z,(ue!==f||pe!==x)&&(r.blendEquationSeparate(J[ue],J[pe]),f=ue,x=pe),(G!==E||Z!==T||oe!==I||Ve!==P)&&(r.blendFuncSeparate(ae[G],ae[Z],ae[oe],ae[Ve]),E=G,T=Z,I=oe,P=Ve),(ot.equals(R)===!1||_t!==L)&&(r.blendColor(ot.r,ot.g,ot.b,_t),R.copy(ot),L=_t),m=N,S=!1}function de(N,ue){N.side===It?Ce(r.CULL_FACE):se(r.CULL_FACE);let G=N.side===Tt;ue&&(G=!G),ve(G),N.blending===Fi&&N.transparent===!1?A(Mi):A(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),a.setMask(N.colorWrite);const Z=N.stencilWrite;o.setTest(Z),Z&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function ve(N){y!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),y=N)}function ye(N){N!==hc?(se(r.CULL_FACE),N!==C&&(N===Js?r.cullFace(r.BACK):N===uc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),C=N}function he(N){N!==z&&(W&&r.lineWidth(N),z=N)}function Oe(N,ue,G){N?(se(r.POLYGON_OFFSET_FILL),(F!==ue||k!==G)&&(r.polygonOffset(ue,G),F=ue,k=G)):Ce(r.POLYGON_OFFSET_FILL)}function me(N){N?se(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function b(N){N===void 0&&(N=r.TEXTURE0+q-1),ne!==N&&(r.activeTexture(N),ne=N)}function v(N,ue,G){G===void 0&&(ne===null?G=r.TEXTURE0+q-1:G=ne);let Z=fe[G];Z===void 0&&(Z={type:void 0,texture:void 0},fe[G]=Z),(Z.type!==N||Z.texture!==ue)&&(ne!==G&&(r.activeTexture(G),ne=G),r.bindTexture(N,ue||ge[N]),Z.type=N,Z.texture=ue)}function O(){const N=fe[ne];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){qe.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function Se(N){X.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),X.copy(N))}function Ge(N,ue){let G=c.get(ue);G===void 0&&(G=new WeakMap,c.set(ue,G));let Z=G.get(N);Z===void 0&&(Z=r.getUniformBlockIndex(ue,N.name),G.set(N,Z))}function Be(N,ue){const G=c.get(ue).get(N);l.get(ue)!==G&&(r.uniformBlockBinding(ue,G,N.__bindingPointIndex),l.set(ue,G))}function Qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,fe={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,T=null,x=null,I=null,P=null,R=new Xe(0,0,0),L=0,S=!1,y=null,C=null,z=null,F=null,k=null,qe.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:se,disable:Ce,bindFramebuffer:Ae,drawBuffers:De,useProgram:$,setBlending:A,setMaterial:de,setFlipSided:ve,setCullFace:ye,setLineWidth:he,setPolygonOffset:Oe,setScissorTest:me,activeTexture:b,bindTexture:v,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:Me,texImage3D:Pe,updateUBOMapping:Ge,uniformBlockBinding:Be,texStorage2D:ke,texStorage3D:ie,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:ce,compressedTexSubImage3D:xe,scissor:Ne,viewport:Se,reset:Qe}}function Zo(r,e,t,i){const n=pm(i);switch(t){case Sl:return r*e;case bl:return r*e;case El:return r*e*2;case wl:return r*e/n.components*n.byteLength;case Rs:return r*e/n.components*n.byteLength;case Al:return r*e*2/n.components*n.byteLength;case Cs:return r*e*2/n.components*n.byteLength;case Tl:return r*e*3/n.components*n.byteLength;case Gt:return r*e*4/n.components*n.byteLength;case Ps:return r*e*4/n.components*n.byteLength;case Pn:case Ln:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dn:case Nn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ja:case Ya:return Math.max(r,16)*Math.max(e,8)/4;case Xa:case qa:return Math.max(r,8)*Math.max(e,8)/2;case Za:case Ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case es:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ts:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case is:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case rs:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ns:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case as:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ss:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case os:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ls:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case cs:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hs:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case us:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Un:case ds:case ps:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Rl:case fs:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ms:case gs:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pm(r){switch(r){case ui:case xl:return{byteLength:1,components:1};case Hr:case yl:case qr:return{byteLength:2,components:1};case ws:case As:return{byteLength:2,components:4};case zi:case Es:case si:return{byteLength:4,components:1};case Ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function fm(r,e,t,i,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return p?new OffscreenCanvas(b,v):Gr("canvas")}function _(b,v,O){let Y=1;const K=me(b);if((K.width>O||K.height>O)&&(Y=O/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(Y*K.width),Te=Math.floor(Y*K.height);d===void 0&&(d=g(j,Te));const ce=v?g(j,Te):d;return ce.width=j,ce.height=Te,ce.getContext("2d").drawImage(b,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+Te+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){r.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(b,v,O,Y,K=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=v;if(v===r.RED&&(O===r.FLOAT&&(j=r.R32F),O===r.HALF_FLOAT&&(j=r.R16F),O===r.UNSIGNED_BYTE&&(j=r.R8)),v===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.R8UI),O===r.UNSIGNED_SHORT&&(j=r.R16UI),O===r.UNSIGNED_INT&&(j=r.R32UI),O===r.BYTE&&(j=r.R8I),O===r.SHORT&&(j=r.R16I),O===r.INT&&(j=r.R32I)),v===r.RG&&(O===r.FLOAT&&(j=r.RG32F),O===r.HALF_FLOAT&&(j=r.RG16F),O===r.UNSIGNED_BYTE&&(j=r.RG8)),v===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RG8UI),O===r.UNSIGNED_SHORT&&(j=r.RG16UI),O===r.UNSIGNED_INT&&(j=r.RG32UI),O===r.BYTE&&(j=r.RG8I),O===r.SHORT&&(j=r.RG16I),O===r.INT&&(j=r.RG32I)),v===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGB8UI),O===r.UNSIGNED_SHORT&&(j=r.RGB16UI),O===r.UNSIGNED_INT&&(j=r.RGB32UI),O===r.BYTE&&(j=r.RGB8I),O===r.SHORT&&(j=r.RGB16I),O===r.INT&&(j=r.RGB32I)),v===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),O===r.UNSIGNED_INT&&(j=r.RGBA32UI),O===r.BYTE&&(j=r.RGBA8I),O===r.SHORT&&(j=r.RGBA16I),O===r.INT&&(j=r.RGBA32I)),v===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),v===r.RGBA){const Te=K?Vn:We.getTransfer(Y);O===r.FLOAT&&(j=r.RGBA32F),O===r.HALF_FLOAT&&(j=r.RGBA16F),O===r.UNSIGNED_BYTE&&(j=Te===Ze?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(b,v){let O;return b?v===null||v===zi||v===_r?O=r.DEPTH24_STENCIL8:v===si?O=r.DEPTH32F_STENCIL8:v===Hr&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zi||v===_r?O=r.DEPTH_COMPONENT24:v===si?O=r.DEPTH_COMPONENT32F:v===Hr&&(O=r.DEPTH_COMPONENT16),O}function I(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Wt&&b.minFilter!==Zt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function P(b){const v=b.target;v.removeEventListener("dispose",P),L(v),v.isVideoTexture&&h.delete(v)}function R(b){const v=b.target;v.removeEventListener("dispose",R),y(v)}function L(b){const v=i.get(b);if(v.__webglInit===void 0)return;const O=b.source,Y=u.get(O);if(Y){const K=Y[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(b),Object.keys(Y).length===0&&u.delete(O)}i.remove(b)}function S(b){const v=i.get(b);r.deleteTexture(v.__webglTexture);const O=b.source,Y=u.get(O);delete Y[v.__cacheKey],s.memory.textures--}function y(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let K=0;K<v.__webglFramebuffer[Y].length;K++)r.deleteFramebuffer(v.__webglFramebuffer[Y][K]);else r.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)r.deleteFramebuffer(v.__webglFramebuffer[Y]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=b.textures;for(let Y=0,K=O.length;Y<K;Y++){const j=i.get(O[Y]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),s.memory.textures--),i.remove(O[Y])}i.remove(b)}let C=0;function z(){C=0}function F(){const b=C;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),C+=1,b}function k(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function q(b,v){const O=i.get(b);if(b.isVideoTexture&&he(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,b,v);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+v)}function W(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){X(O,b,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+v)}function ee(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){X(O,b,v);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+v)}function V(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){te(O,b,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+v)}const ne={[gr]:r.REPEAT,[Yt]:r.CLAMP_TO_EDGE,[Wa]:r.MIRRORED_REPEAT},fe={[Wt]:r.NEAREST,[Bc]:r.NEAREST_MIPMAP_NEAREST,[en]:r.NEAREST_MIPMAP_LINEAR,[Zt]:r.LINEAR,[Kn]:r.LINEAR_MIPMAP_NEAREST,[Oi]:r.LINEAR_MIPMAP_LINEAR},Le={[Vc]:r.NEVER,[Zc]:r.ALWAYS,[Wc]:r.LESS,[Pl]:r.LEQUAL,[Xc]:r.EQUAL,[Yc]:r.GEQUAL,[jc]:r.GREATER,[qc]:r.NOTEQUAL};function ze(b,v){if(v.type===si&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Zt||v.magFilter===Kn||v.magFilter===en||v.magFilter===Oi||v.minFilter===Zt||v.minFilter===Kn||v.minFilter===en||v.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,ne[v.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,ne[v.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,ne[v.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,fe[v.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,Le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Wt||v.minFilter!==en&&v.minFilter!==Oi||v.type===si&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function qe(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",P));const Y=v.source;let K=u.get(Y);K===void 0&&(K={},u.set(Y,K));const j=k(v);if(j!==b.__cacheKey){K[j]===void 0&&(K[j]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,O=!0),K[j].usedTimes++;const Te=K[b.__cacheKey];Te!==void 0&&(K[b.__cacheKey].usedTimes--,Te.usedTimes===0&&S(v)),b.__cacheKey=j,b.__webglTexture=K[j].texture}return O}function X(b,v,O){let Y=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=r.TEXTURE_3D);const K=qe(b,v),j=v.source;t.bindTexture(Y,b.__webglTexture,r.TEXTURE0+O);const Te=i.get(j);if(j.version!==Te.__version||K===!0){t.activeTexture(r.TEXTURE0+O);const ce=We.getPrimaries(We.workingColorSpace),xe=v.colorSpace===yi?null:We.getPrimaries(v.colorSpace),ke=v.colorSpace===yi||ce===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ie=_(v.image,!1,n.maxTextureSize);ie=Oe(v,ie);const Me=a.convert(v.format,v.colorSpace),Pe=a.convert(v.type);let Ne=T(v.internalFormat,Me,Pe,v.colorSpace,v.isVideoTexture);ze(Y,v);let Se;const Ge=v.mipmaps,Be=v.isVideoTexture!==!0,Qe=Te.__version===void 0||K===!0,N=j.dataReady,ue=I(v,ie);if(v.isDepthTexture)Ne=x(v.format===vr,v.type),Qe&&(Be?t.texStorage2D(r.TEXTURE_2D,1,Ne,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Ne,ie.width,ie.height,0,Me,Pe,null));else if(v.isDataTexture)if(Ge.length>0){Be&&Qe&&t.texStorage2D(r.TEXTURE_2D,ue,Ne,Ge[0].width,Ge[0].height);for(let G=0,Z=Ge.length;G<Z;G++)Se=Ge[G],Be?N&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,Se.width,Se.height,Me,Pe,Se.data):t.texImage2D(r.TEXTURE_2D,G,Ne,Se.width,Se.height,0,Me,Pe,Se.data);v.generateMipmaps=!1}else Be?(Qe&&t.texStorage2D(r.TEXTURE_2D,ue,Ne,ie.width,ie.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,Me,Pe,ie.data)):t.texImage2D(r.TEXTURE_2D,0,Ne,ie.width,ie.height,0,Me,Pe,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Ne,Ge[0].width,Ge[0].height,ie.depth);for(let G=0,Z=Ge.length;G<Z;G++)if(Se=Ge[G],v.format!==Gt)if(Me!==null)if(Be){if(N)if(v.layerUpdates.size>0){const pe=Zo(Se.width,Se.height,v.format,v.type);for(const oe of v.layerUpdates){const Ve=Se.data.subarray(oe*pe/Se.data.BYTES_PER_ELEMENT,(oe+1)*pe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,oe,Se.width,Se.height,1,Me,Ve)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,Se.width,Se.height,ie.depth,Me,Se.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,Ne,Se.width,Se.height,ie.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,Se.width,Se.height,ie.depth,Me,Pe,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,Ne,Se.width,Se.height,ie.depth,0,Me,Pe,Se.data)}else{Be&&Qe&&t.texStorage2D(r.TEXTURE_2D,ue,Ne,Ge[0].width,Ge[0].height);for(let G=0,Z=Ge.length;G<Z;G++)Se=Ge[G],v.format!==Gt?Me!==null?Be?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,G,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?N&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,Se.width,Se.height,Me,Pe,Se.data):t.texImage2D(r.TEXTURE_2D,G,Ne,Se.width,Se.height,0,Me,Pe,Se.data)}else if(v.isDataArrayTexture)if(Be){if(Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Ne,ie.width,ie.height,ie.depth),N)if(v.layerUpdates.size>0){const G=Zo(ie.width,ie.height,v.format,v.type);for(const Z of v.layerUpdates){const pe=ie.data.subarray(Z*G/ie.data.BYTES_PER_ELEMENT,(Z+1)*G/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,Me,Pe,pe)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Me,Pe,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,Me,Pe,ie.data);else if(v.isData3DTexture)Be?(Qe&&t.texStorage3D(r.TEXTURE_3D,ue,Ne,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Me,Pe,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,Me,Pe,ie.data);else if(v.isFramebufferTexture){if(Qe)if(Be)t.texStorage2D(r.TEXTURE_2D,ue,Ne,ie.width,ie.height);else{let G=ie.width,Z=ie.height;for(let pe=0;pe<ue;pe++)t.texImage2D(r.TEXTURE_2D,pe,Ne,G,Z,0,Me,Pe,null),G>>=1,Z>>=1}}else if(Ge.length>0){if(Be&&Qe){const G=me(Ge[0]);t.texStorage2D(r.TEXTURE_2D,ue,Ne,G.width,G.height)}for(let G=0,Z=Ge.length;G<Z;G++)Se=Ge[G],Be?N&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,Me,Pe,Se):t.texImage2D(r.TEXTURE_2D,G,Ne,Me,Pe,Se);v.generateMipmaps=!1}else if(Be){if(Qe){const G=me(ie);t.texStorage2D(r.TEXTURE_2D,ue,Ne,G.width,G.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Pe,ie)}else t.texImage2D(r.TEXTURE_2D,0,Ne,Me,Pe,ie);m(v)&&f(Y),Te.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function te(b,v,O){if(v.image.length!==6)return;const Y=qe(b,v),K=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+O);const j=i.get(K);if(K.version!==j.__version||Y===!0){t.activeTexture(r.TEXTURE0+O);const Te=We.getPrimaries(We.workingColorSpace),ce=v.colorSpace===yi?null:We.getPrimaries(v.colorSpace),xe=v.colorSpace===yi||Te===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ke=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let Z=0;Z<6;Z++)!ke&&!ie?Me[Z]=_(v.image[Z],!0,n.maxCubemapSize):Me[Z]=ie?v.image[Z].image:v.image[Z],Me[Z]=Oe(v,Me[Z]);const Pe=Me[0],Ne=a.convert(v.format,v.colorSpace),Se=a.convert(v.type),Ge=T(v.internalFormat,Ne,Se,v.colorSpace),Be=v.isVideoTexture!==!0,Qe=j.__version===void 0||Y===!0,N=K.dataReady;let ue=I(v,Pe);ze(r.TEXTURE_CUBE_MAP,v);let G;if(ke){Be&&Qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,Ge,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){G=Me[Z].mipmaps;for(let pe=0;pe<G.length;pe++){const oe=G[pe];v.format!==Gt?Ne!==null?Be?N&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,oe.width,oe.height,Ne,oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,Ge,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,oe.width,oe.height,Ne,Se,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,Ge,oe.width,oe.height,0,Ne,Se,oe.data)}}}else{if(G=v.mipmaps,Be&&Qe){G.length>0&&ue++;const Z=me(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,Ge,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){Be?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me[Z].width,Me[Z].height,Ne,Se,Me[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,Me[Z].width,Me[Z].height,0,Ne,Se,Me[Z].data);for(let pe=0;pe<G.length;pe++){const oe=G[pe].image[Z].image;Be?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,oe.width,oe.height,Ne,Se,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,Ge,oe.width,oe.height,0,Ne,Se,oe.data)}}else{Be?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ne,Se,Me[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,Ne,Se,Me[Z]);for(let pe=0;pe<G.length;pe++){const oe=G[pe];Be?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,Ne,Se,oe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,Ge,Ne,Se,oe.image[Z])}}}m(v)&&f(r.TEXTURE_CUBE_MAP),j.__version=K.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ge(b,v,O,Y,K,j){const Te=a.convert(O.format,O.colorSpace),ce=a.convert(O.type),xe=T(O.internalFormat,Te,ce,O.colorSpace),ke=i.get(v),ie=i.get(O);if(ie.__renderTarget=v,!ke.__hasExternalTextures){const Me=Math.max(1,v.width>>j),Pe=Math.max(1,v.height>>j);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,j,xe,Me,Pe,v.depth,0,Te,ce,null):t.texImage2D(K,j,xe,Me,Pe,0,Te,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),ye(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,K,ie.__webglTexture,0,ve(v)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,K,ie.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(b,v,O){if(r.bindRenderbuffer(r.RENDERBUFFER,b),v.depthBuffer){const Y=v.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,j=x(v.stencilBuffer,K),Te=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=ve(v);ye(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,j,v.width,v.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,j,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,j,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,b)}else{const Y=v.textures;for(let K=0;K<Y.length;K++){const j=Y[K],Te=a.convert(j.format,j.colorSpace),ce=a.convert(j.type),xe=T(j.internalFormat,Te,ce,j.colorSpace),ke=ve(v);O&&ye(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,xe,v.width,v.height):ye(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke,xe,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,xe,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(v.depthTexture);O.__renderTarget=v,(!O.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const Y=O.__webglTexture,K=ve(v);if(v.depthTexture.format===hr)ye(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0);else if(v.depthTexture.format===vr)ye(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ae(b){const v=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=Y}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ce(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=r.createRenderbuffer(),se(v.__webglDepthbuffer[Y],b,!1);else{const K=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),se(v.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,K)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(b,v,O){const Y=i.get(b);v!==void 0&&ge(Y.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ae(b)}function $(b){const v=b.texture,O=i.get(b),Y=i.get(v);b.addEventListener("dispose",R);const K=b.textures,j=b.isWebGLCubeRenderTarget===!0,Te=K.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=v.version,s.memory.textures++),j){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let xe=0;xe<v.mipmaps.length;xe++)O.__webglFramebuffer[ce][xe]=r.createFramebuffer()}else O.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)O.__webglFramebuffer[ce]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Te)for(let ce=0,xe=K.length;ce<xe;ce++){const ke=i.get(K[ce]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),s.memory.textures++)}if(b.samples>0&&ye(b)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){const xe=K[ce];O.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const ke=a.convert(xe.format,xe.colorSpace),ie=a.convert(xe.type),Me=T(xe.internalFormat,ke,ie,xe.colorSpace,b.isXRRenderTarget===!0),Pe=ve(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Me,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),se(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(r.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)ge(O.__webglFramebuffer[ce][xe],b,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe);else ge(O.__webglFramebuffer[ce],b,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ce=0,xe=K.length;ce<xe;ce++){const ke=K[ce],ie=i.get(ke);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),ze(r.TEXTURE_2D,ke),ge(O.__webglFramebuffer,b,ke,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),m(ke)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),ze(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)ge(O.__webglFramebuffer[xe],b,v,r.COLOR_ATTACHMENT0,ce,xe);else ge(O.__webglFramebuffer,b,v,r.COLOR_ATTACHMENT0,ce,0);m(v)&&f(ce),t.unbindTexture()}b.depthBuffer&&Ae(b)}function J(b){const v=b.textures;for(let O=0,Y=v.length;O<Y;O++){const K=v[O];if(m(K)){const j=E(b),Te=i.get(K).__webglTexture;t.bindTexture(j,Te),f(j),t.unbindTexture()}}}const ae=[],A=[];function de(b){if(b.samples>0){if(ye(b)===!1){const v=b.textures,O=b.width,Y=b.height;let K=r.COLOR_BUFFER_BIT;const j=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=i.get(b),ce=v.length>1;if(ce)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const ke=i.get(v[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ke,0)}r.blitFramebuffer(0,0,O,Y,0,0,O,Y,K,r.NEAREST),l===!0&&(ae.length=0,A.length=0,ae.push(r.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ae.push(j),A.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,A)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const ke=i.get(v[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function ve(b){return Math.min(n.maxSamples,b.samples)}function ye(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function he(b){const v=s.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Oe(b,v){const O=b.colorSpace,Y=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Mr&&O!==yi&&(We.getTransfer(O)===Ze?(Y!==Gt||K!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function me(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=De,this.setupRenderTarget=$,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ye}function mm(r,e){function t(i,n=yi){let a;const s=We.getTransfer(n);if(i===ui)return r.UNSIGNED_BYTE;if(i===ws)return r.UNSIGNED_SHORT_4_4_4_4;if(i===As)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Ml)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===xl)return r.BYTE;if(i===yl)return r.SHORT;if(i===Hr)return r.UNSIGNED_SHORT;if(i===Es)return r.INT;if(i===zi)return r.UNSIGNED_INT;if(i===si)return r.FLOAT;if(i===qr)return r.HALF_FLOAT;if(i===Sl)return r.ALPHA;if(i===Tl)return r.RGB;if(i===Gt)return r.RGBA;if(i===bl)return r.LUMINANCE;if(i===El)return r.LUMINANCE_ALPHA;if(i===hr)return r.DEPTH_COMPONENT;if(i===vr)return r.DEPTH_STENCIL;if(i===wl)return r.RED;if(i===Rs)return r.RED_INTEGER;if(i===Al)return r.RG;if(i===Cs)return r.RG_INTEGER;if(i===Ps)return r.RGBA_INTEGER;if(i===Pn||i===Ln||i===Dn||i===Nn)if(s===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Pn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ln)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Pn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ln)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xa||i===ja||i===qa||i===Ya)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Xa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ja)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===Ka||i===Ja)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Za||i===Ka)return s===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ja)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$a||i===Qa||i===es||i===ts||i===is||i===rs||i===ns||i===as||i===ss||i===os||i===ls||i===cs||i===hs||i===us)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===$a)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qa)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===es)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ts)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===is)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rs)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ns)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===as)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ss)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===os)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ls)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cs)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hs)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===us)return s===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Un||i===ds||i===ps)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Un)return s===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ds)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ps)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rl||i===fs||i===ms||i===gs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Un)return a.COMPRESSED_RED_RGTC1_EXT;if(i===fs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ms)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class gm extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _m={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new yt,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jt({vertexShader:vm,fragmentShader:xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new Wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mm extends ki{constructor(e,t){super();const i=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=new ym,m=t.getContextAttributes();let f=null,E=null;const T=[],x=[],I=new re;let P=null;const R=new Pt;R.viewport=new Je;const L=new Pt;L.viewport=new Je;const S=[R,L],y=new gm;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=T[X];return te===void 0&&(te=new Ta,T[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=T[X];return te===void 0&&(te=new Ta,T[X]=te),te.getGripSpace()},this.getHand=function(X){let te=T[X];return te===void 0&&(te=new Ta,T[X]=te),te.getHandSpace()};function F(X){const te=x.indexOf(X.inputSource);if(te===-1)return;const ge=T[te];ge!==void 0&&(ge.update(X.inputSource,X.frame,c||s),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",q);for(let X=0;X<T.length;X++){const te=x[X];te!==null&&(x[X]=null,T[X].disconnect(te))}C=null,z=null,_.reset(),e.setRenderTarget(f),p=null,u=null,d=null,n=null,E=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",k),n.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),n.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,t,te),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Bi(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ge=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?vr:hr,ge=m.stencil?_r:zi);const Ce={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:a};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Ce),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Bi(u.textureWidth,u.textureHeight,{format:Gt,type:ui,depthTexture:new Vl(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),qe.setContext(n),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(X){for(let te=0;te<X.removed.length;te++){const ge=X.removed[te],se=x.indexOf(ge);se>=0&&(x[se]=null,T[se].disconnect(ge))}for(let te=0;te<X.added.length;te++){const ge=X.added[te];let se=x.indexOf(ge);if(se===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=x.length){x.push(ge),se=Ae;break}else if(x[Ae]===null){x[Ae]=ge,se=Ae;break}if(se===-1)break}const Ce=T[se];Ce&&Ce.connect(ge)}}const W=new w,ee=new w;function V(X,te,ge){W.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(ge.matrixWorld);const se=W.distanceTo(ee),Ce=te.projectionMatrix.elements,Ae=ge.projectionMatrix.elements,De=Ce[14]/(Ce[10]-1),$=Ce[14]/(Ce[10]+1),J=(Ce[9]+1)/Ce[5],ae=(Ce[9]-1)/Ce[5],A=(Ce[8]-1)/Ce[0],de=(Ae[8]+1)/Ae[0],ve=De*A,ye=De*de,he=se/(-A+de),Oe=he*-A;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Oe),X.translateZ(he),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ce[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const me=De+he,b=$+he,v=ve-Oe,O=ye+(se-Oe),Y=J*$/b*me,K=ae*$/b*me;X.projectionMatrix.makePerspective(v,O,Y,K,me,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ne(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let te=X.near,ge=X.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),y.near=L.near=R.near=te,y.far=L.far=R.far=ge,(C!==y.near||z!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,z=y.far),R.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,y.layers.mask=R.layers.mask|L.layers.mask;const se=X.parent,Ce=y.cameras;ne(y,se);for(let Ae=0;Ae<Ce.length;Ae++)ne(Ce[Ae],se);Ce.length===2?V(y,R,L):y.projectionMatrix.copy(R.projectionMatrix),fe(X,y,se)};function fe(X,te,ge){ge===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=kr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Le=null;function ze(X,te){if(h=te.getViewerPose(c||s),g=te,h!==null){const ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let se=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let Ae=0;Ae<ge.length;Ae++){const De=ge[Ae];let $=null;if(p!==null)$=p.getViewport(De);else{const ae=d.getViewSubImage(u,De);$=ae.viewport,Ae===0&&(e.setRenderTargetTextures(E,ae.colorTexture,u.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(E))}let J=S[Ae];J===void 0&&(J=new Pt,J.layers.enable(Ae),J.viewport=new Je,S[Ae]=J),J.matrix.fromArray(De.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(De.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set($.x,$.y,$.width,$.height),Ae===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(J)}const Ce=n.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ae=d.getDepthInformation(ge[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,n.renderState)}}for(let ge=0;ge<T.length;ge++){const se=x[ge],Ce=T[ge];se!==null&&Ce!==void 0&&Ce.update(se,te,c||s)}Le&&Le(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const qe=new kl;qe.setAnimationLoop(ze),this.setAnimationLoop=function(X){Le=X},this.dispose=function(){}}}const Di=new Kt,Sm=new $e;function Tm(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,zl(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,E,T,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),_(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),T=E.envMap,x=E.envMapRotation;T&&(m.envMap.value=T,Di.copy(x),Di.x*=-1,Di.y*=-1,Di.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(Di)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function bm(r,e,t,i){let n={},a={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const x=T.program;i.uniformBlockBinding(E,x)}function c(E,T){let x=n[E.id];x===void 0&&(g(E),x=h(E),n[E.id]=x,E.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(E,I);const P=e.render.frame;a[E.id]!==P&&(u(E),a[E.id]=P)}function h(E){const T=d();E.__bindingPointIndex=T;const x=r.createBuffer(),I=E.__size,P=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,I,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,x),x}function d(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const T=n[E.id],x=E.uniforms,I=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let P=0,R=x.length;P<R;P++){const L=Array.isArray(x[P])?x[P]:[x[P]];for(let S=0,y=L.length;S<y;S++){const C=L[S];if(p(C,P,S,I)===!0){const z=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let q=0;q<F.length;q++){const W=F[q],ee=_(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,z+k,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,k),k+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(E,T,x,I){const P=E.value,R=T+"_"+x;if(I[R]===void 0)return typeof P=="number"||typeof P=="boolean"?I[R]=P:I[R]=P.clone(),!0;{const L=I[R];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return I[R]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function g(E){const T=E.uniforms;let x=0;const I=16;for(let R=0,L=T.length;R<L;R++){const S=Array.isArray(T[R])?T[R]:[T[R]];for(let y=0,C=S.length;y<C;y++){const z=S[y],F=Array.isArray(z.value)?z.value:[z.value];for(let k=0,q=F.length;k<q;k++){const W=F[k],ee=_(W),V=x%I,ne=V%ee.boundary,fe=V+ne;x+=ne,fe!==0&&I-fe<ee.storage&&(x+=I-fe),z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=ee.storage}}}const P=x%I;return P>0&&(x+=I-P),E.__size=x,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const x=s.indexOf(T.__bindingPointIndex);s.splice(x,1),r.deleteBuffer(n[T.id]),delete n[T.id],delete a[T.id]}function f(){for(const E in n)r.deleteBuffer(n[E]);s=[],n={},a={}}return{bind:l,update:c,dispose:f}}class Em{constructor(e={}){const{canvas:t=dh(),context:i=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=Si,this.toneMappingExposure=1;const x=this;let I=!1,P=0,R=0,L=null,S=-1,y=null;const C=new Je,z=new Je;let F=null;const k=new Xe(0);let q=0,W=t.width,ee=t.height,V=1,ne=null,fe=null;const Le=new Je(0,0,W,ee),ze=new Je(0,0,W,ee);let qe=!1;const X=new Ns;let te=!1,ge=!1;const se=new $e,Ce=new $e,Ae=new w,De=new Je,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function ae(){return L===null?V:1}let A=i;function de(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bs}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",oe,!1),A===null){const U="webgl2";if(A=de(U,M),A===null)throw de(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ve,ye,he,Oe,me,b,v,O,Y,K,j,Te,ce,xe,ke,ie,Me,Pe,Ne,Se,Ge,Be,Qe,N;function ue(){ve=new Cp(A),ve.init(),Be=new mm(A,ve),ye=new Tp(A,ve,e,Be),he=new dm(A,ve),ye.reverseDepthBuffer&&u&&he.buffers.depth.setReversed(!0),Oe=new Dp(A),me=new Jf,b=new fm(A,ve,he,me,ye,Be,Oe),v=new Ep(x),O=new Rp(x),Y=new Bh(A),Qe=new Mp(A,Y),K=new Pp(A,Y,Oe,Qe),j=new Up(A,K,Y,Oe),Ne=new Np(A,ye,b),ie=new bp(me),Te=new Kf(x,v,O,ve,ye,Qe,ie),ce=new Tm(x,me),xe=new Qf,ke=new am(ve),Pe=new yp(x,v,O,he,j,p,l),Me=new hm(x,j,ye),N=new bm(A,Oe,ye,he),Se=new Sp(A,ve,Oe),Ge=new Lp(A,ve,Oe),Oe.programs=Te.programs,x.capabilities=ye,x.extensions=ve,x.properties=me,x.renderLists=xe,x.shadowMap=Me,x.state=he,x.info=Oe}ue();const G=new Mm(x,A);this.xr=G,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(W,ee,!1))},this.getSize=function(M){return M.set(W,ee)},this.setSize=function(M,U,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,ee=U,t.width=Math.floor(M*V),t.height=Math.floor(U*V),B===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(W*V,ee*V).floor()},this.setDrawingBufferSize=function(M,U,B){W=M,ee=U,V=B,t.width=Math.floor(M*B),t.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(Le)},this.setViewport=function(M,U,B,H){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,U,B,H),he.viewport(C.copy(Le).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(ze)},this.setScissor=function(M,U,B,H){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,U,B,H),he.scissor(z.copy(ze).multiplyScalar(V).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(M){he.setScissorTest(qe=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(M=!0,U=!0,B=!0){let H=0;if(M){let D=!1;if(L!==null){const Q=L.texture.format;D=Q===Ps||Q===Cs||Q===Rs}if(D){const Q=L.texture.type,_e=Q===ui||Q===zi||Q===Hr||Q===_r||Q===ws||Q===As,be=Pe.getClearColor(),Ee=Pe.getClearAlpha(),Ue=be.r,Ie=be.g,Re=be.b;_e?(g[0]=Ue,g[1]=Ie,g[2]=Re,g[3]=Ee,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Ue,_[1]=Ie,_[2]=Re,_[3]=Ee,A.clearBufferiv(A.COLOR,0,_))}else H|=A.COLOR_BUFFER_BIT}U&&(H|=A.DEPTH_BUFFER_BIT),B&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),xe.dispose(),ke.dispose(),me.dispose(),v.dispose(),O.dispose(),j.dispose(),Qe.dispose(),N.dispose(),Te.dispose(),G.dispose(),G.removeEventListener("sessionstart",Vs),G.removeEventListener("sessionend",Ws),bi.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=Oe.autoReset,U=Me.enabled,B=Me.autoUpdate,H=Me.needsUpdate,D=Me.type;ue(),Oe.autoReset=M,Me.enabled=U,Me.autoUpdate=B,Me.needsUpdate=H,Me.type=D}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ve(M){const U=M.target;U.removeEventListener("dispose",Ve),ot(U)}function ot(M){_t(M),me.remove(M)}function _t(M){const U=me.get(M).programs;U!==void 0&&(U.forEach(function(B){Te.releaseProgram(B)}),M.isShaderMaterial&&Te.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,H,D,Q){U===null&&(U=$);const _e=D.isMesh&&D.matrixWorld.determinant()<0,be=oc(M,U,B,H,D);he.setMaterial(H,_e);let Ee=B.index,Ue=1;if(H.wireframe===!0){if(Ee=K.getWireframeAttribute(B),Ee===void 0)return;Ue=2}const Ie=B.drawRange,Re=B.attributes.position;let je=Ie.start*Ue,it=(Ie.start+Ie.count)*Ue;Q!==null&&(je=Math.max(je,Q.start*Ue),it=Math.min(it,(Q.start+Q.count)*Ue)),Ee!==null?(je=Math.max(je,0),it=Math.min(it,Ee.count)):Re!=null&&(je=Math.max(je,0),it=Math.min(it,Re.count));const rt=it-je;if(rt<0||rt===1/0)return;Qe.setup(D,H,be,B,Ee);let lt,nt=Se;if(Ee!==null&&(lt=Y.get(Ee),nt=Ge,nt.setIndex(lt)),D.isMesh)H.wireframe===!0?(he.setLineWidth(H.wireframeLinewidth*ae()),nt.setMode(A.LINES)):nt.setMode(A.TRIANGLES);else if(D.isLine){let we=H.linewidth;we===void 0&&(we=1),he.setLineWidth(we*ae()),D.isLineSegments?nt.setMode(A.LINES):D.isLineLoop?nt.setMode(A.LINE_LOOP):nt.setMode(A.LINE_STRIP)}else D.isPoints?nt.setMode(A.POINTS):D.isSprite&&nt.setMode(A.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)nt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))nt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const we=D._multiDrawStarts,Ei=D._multiDrawCounts,wi=D._multiDrawCount,Ft=Ee?Y.get(Ee).bytesPerElement:1,Wi=me.get(H).currentProgram.getUniforms();for(let At=0;At<wi;At++)Wi.setValue(A,"_gl_DrawID",At),nt.render(we[At]/Ft,Ei[At])}else if(D.isInstancedMesh)nt.renderInstances(je,rt,D.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ei=Math.min(B.instanceCount,we);nt.renderInstances(je,rt,Ei)}else nt.render(je,rt)};function Ye(M,U,B){M.transparent===!0&&M.side===It&&M.forceSinglePass===!1?(M.side=Tt,M.needsUpdate=!0,Qr(M,U,B),M.side=Ti,M.needsUpdate=!0,Qr(M,U,B),M.side=It):Qr(M,U,B)}this.compile=function(M,U,B=null){B===null&&(B=M),f=ke.get(B),f.init(U),T.push(f),B.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),M!==B&&M.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const H=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const Q=D.material;if(Q)if(Array.isArray(Q))for(let _e=0;_e<Q.length;_e++){const be=Q[_e];Ye(be,B,D),H.add(be)}else Ye(Q,B,D),H.add(Q)}),T.pop(),f=null,H},this.compileAsync=function(M,U,B=null){const H=this.compile(M,U,B);return new Promise(D=>{function Q(){if(H.forEach(function(_e){me.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){D(M);return}setTimeout(Q,10)}ve.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ot=null;function Qt(M){Ot&&Ot(M)}function Vs(){bi.stop()}function Ws(){bi.start()}const bi=new kl;bi.setAnimationLoop(Qt),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(M){Ot=M,G.setAnimationLoop(M),M===null?bi.stop():bi.start()},G.addEventListener("sessionstart",Vs),G.addEventListener("sessionend",Ws),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,L),f=ke.get(M,T.length),f.init(U),T.push(f),Ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Ce),ge=this.localClippingEnabled,te=ie.init(this.clippingPlanes,ge),m=xe.get(M,E.length),m.init(),E.push(m),G.enabled===!0&&G.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Zn(Q,U,-1/0,x.sortObjects)}Zn(M,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,fe),J=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,J&&Pe.addToRenderList(m,M),this.info.render.frame++,te===!0&&ie.beginShadows();const B=f.state.shadowsArray;Me.render(B,M,U),te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,D=m.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(D.length>0)for(let _e=0,be=Q.length;_e<be;_e++){const Ee=Q[_e];js(H,D,M,Ee)}J&&Pe.render(M);for(let _e=0,be=Q.length;_e<be;_e++){const Ee=Q[_e];Xs(m,M,Ee,Ee.viewport)}}else D.length>0&&js(H,D,M,U),J&&Pe.render(M),Xs(m,M,U);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(x,M,U),Qe.resetDefaultState(),S=-1,y=null,T.pop(),T.length>0?(f=T[T.length-1],te===!0&&ie.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Zn(M,U,B,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){H&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ce);const Q=j.update(M),_e=M.material;_e.visible&&m.push(M,Q,_e,B,De.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||X.intersectsObject(M))){const Q=j.update(M),_e=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),De.copy(Q.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(Ce)),Array.isArray(_e)){const be=Q.groups;for(let Ee=0,Ue=be.length;Ee<Ue;Ee++){const Ie=be[Ee],Re=_e[Ie.materialIndex];Re&&Re.visible&&m.push(M,Q,Re,B,De.z,Ie)}}else _e.visible&&m.push(M,Q,_e,B,De.z,null)}}const D=M.children;for(let Q=0,_e=D.length;Q<_e;Q++)Zn(D[Q],U,B,H)}function Xs(M,U,B,H){const D=M.opaque,Q=M.transmissive,_e=M.transparent;f.setupLightsView(B),te===!0&&ie.setGlobalState(x.clippingPlanes,B),H&&he.viewport(C.copy(H)),D.length>0&&$r(D,U,B),Q.length>0&&$r(Q,U,B),_e.length>0&&$r(_e,U,B),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function js(M,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Bi(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?qr:ui,minFilter:Oi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const D=f.state.transmissionRenderTarget[H.id],Q=H.viewport||C;D.setSize(Q.z,Q.w);const _e=x.getRenderTarget();x.setRenderTarget(D),x.getClearColor(k),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),J&&Pe.render(B);const be=x.toneMapping;x.toneMapping=Si;const Ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),te===!0&&ie.setGlobalState(x.clippingPlanes,H),$r(M,B,H),b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ie=0,Re=U.length;Ie<Re;Ie++){const je=U[Ie],it=je.object,rt=je.geometry,lt=je.material,nt=je.group;if(lt.side===It&&it.layers.test(H.layers)){const we=lt.side;lt.side=Tt,lt.needsUpdate=!0,qs(it,B,H,rt,lt,nt),lt.side=we,lt.needsUpdate=!0,Ue=!0}}Ue===!0&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D))}x.setRenderTarget(_e),x.setClearColor(k,q),Ee!==void 0&&(H.viewport=Ee),x.toneMapping=be}function $r(M,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let D=0,Q=M.length;D<Q;D++){const _e=M[D],be=_e.object,Ee=_e.geometry,Ue=H===null?_e.material:H,Ie=_e.group;be.layers.test(B.layers)&&qs(be,U,B,Ee,Ue,Ie)}}function qs(M,U,B,H,D,Q){M.onBeforeRender(x,U,B,H,D,Q),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(x,U,B,H,M,Q),D.transparent===!0&&D.side===It&&D.forceSinglePass===!1?(D.side=Tt,D.needsUpdate=!0,x.renderBufferDirect(B,U,H,D,M,Q),D.side=Ti,D.needsUpdate=!0,x.renderBufferDirect(B,U,H,D,M,Q),D.side=It):x.renderBufferDirect(B,U,H,D,M,Q),M.onAfterRender(x,U,B,H,D,Q)}function Qr(M,U,B){U.isScene!==!0&&(U=$);const H=me.get(M),D=f.state.lights,Q=f.state.shadowsArray,_e=D.state.version,be=Te.getParameters(M,D.state,Q,U,B),Ee=Te.getProgramCacheKey(be);let Ue=H.programs;H.environment=M.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(M.isMeshStandardMaterial?O:v).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",Ve),Ue=new Map,H.programs=Ue);let Ie=Ue.get(Ee);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===_e)return Zs(M,be),Ie}else be.uniforms=Te.getUniforms(M),M.onBeforeCompile(be,x),Ie=Te.acquireProgram(be,Ee),Ue.set(Ee,Ie),H.uniforms=be.uniforms;const Re=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=ie.uniform),Zs(M,be),H.needsLights=cc(M),H.lightsStateVersion=_e,H.needsLights&&(Re.ambientLightColor.value=D.state.ambient,Re.lightProbe.value=D.state.probe,Re.directionalLights.value=D.state.directional,Re.directionalLightShadows.value=D.state.directionalShadow,Re.spotLights.value=D.state.spot,Re.spotLightShadows.value=D.state.spotShadow,Re.rectAreaLights.value=D.state.rectArea,Re.ltc_1.value=D.state.rectAreaLTC1,Re.ltc_2.value=D.state.rectAreaLTC2,Re.pointLights.value=D.state.point,Re.pointLightShadows.value=D.state.pointShadow,Re.hemisphereLights.value=D.state.hemi,Re.directionalShadowMap.value=D.state.directionalShadowMap,Re.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Re.spotShadowMap.value=D.state.spotShadowMap,Re.spotLightMatrix.value=D.state.spotLightMatrix,Re.spotLightMap.value=D.state.spotLightMap,Re.pointShadowMap.value=D.state.pointShadowMap,Re.pointShadowMatrix.value=D.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function Ys(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=In.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Zs(M,U){const B=me.get(M);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function oc(M,U,B,H,D){U.isScene!==!0&&(U=$),b.resetTextureUnits();const Q=U.fog,_e=H.isMeshStandardMaterial?U.environment:null,be=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Mr,Ee=(H.isMeshStandardMaterial?O:v).get(H.envMap||_e),Ue=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!B.morphAttributes.position,je=!!B.morphAttributes.normal,it=!!B.morphAttributes.color;let rt=Si;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(rt=x.toneMapping);const lt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,nt=lt!==void 0?lt.length:0,we=me.get(H),Ei=f.state.lights;if(te===!0&&(ge===!0||M!==y)){const bt=M===y&&H.id===S;ie.setState(H,M,bt)}let wi=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ei.state.version||we.outputColorSpace!==be||D.isBatchedMesh&&we.batching===!1||!D.isBatchedMesh&&we.batching===!0||D.isBatchedMesh&&we.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&we.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&we.instancing===!1||!D.isInstancedMesh&&we.instancing===!0||D.isSkinnedMesh&&we.skinning===!1||!D.isSkinnedMesh&&we.skinning===!0||D.isInstancedMesh&&we.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&we.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&we.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&we.instancingMorph===!1&&D.morphTexture!==null||we.envMap!==Ee||H.fog===!0&&we.fog!==Q||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Ue||we.vertexTangents!==Ie||we.morphTargets!==Re||we.morphNormals!==je||we.morphColors!==it||we.toneMapping!==rt||we.morphTargetsCount!==nt)&&(wi=!0):(wi=!0,we.__version=H.version);let Ft=we.currentProgram;wi===!0&&(Ft=Qr(H,U,D));let Wi=!1,At=!1,Tr=!1;const tt=Ft.getUniforms(),jt=we.uniforms;if(he.useProgram(Ft.program)&&(Wi=!0,At=!0,Tr=!0),H.id!==S&&(S=H.id,At=!0),Wi||y!==M){he.buffers.depth.getReversed()?(se.copy(M.projectionMatrix),fh(se),mh(se),tt.setValue(A,"projectionMatrix",se)):tt.setValue(A,"projectionMatrix",M.projectionMatrix),tt.setValue(A,"viewMatrix",M.matrixWorldInverse);const bt=tt.map.cameraPosition;bt!==void 0&&bt.setValue(A,Ae.setFromMatrixPosition(M.matrixWorld)),ye.logarithmicDepthBuffer&&tt.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&tt.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,At=!0,Tr=!0)}if(D.isSkinnedMesh){tt.setOptional(A,D,"bindMatrix"),tt.setOptional(A,D,"bindMatrixInverse");const bt=D.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),tt.setValue(A,"boneTexture",bt.boneTexture,b))}D.isBatchedMesh&&(tt.setOptional(A,D,"batchingTexture"),tt.setValue(A,"batchingTexture",D._matricesTexture,b),tt.setOptional(A,D,"batchingIdTexture"),tt.setValue(A,"batchingIdTexture",D._indirectTexture,b),tt.setOptional(A,D,"batchingColorTexture"),D._colorsTexture!==null&&tt.setValue(A,"batchingColorTexture",D._colorsTexture,b));const br=B.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0)&&Ne.update(D,B,Ft),(At||we.receiveShadow!==D.receiveShadow)&&(we.receiveShadow=D.receiveShadow,tt.setValue(A,"receiveShadow",D.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(jt.envMap.value=Ee,jt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(jt.envMapIntensity.value=U.environmentIntensity),At&&(tt.setValue(A,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&lc(jt,Tr),Q&&H.fog===!0&&ce.refreshFogUniforms(jt,Q),ce.refreshMaterialUniforms(jt,H,V,ee,f.state.transmissionRenderTarget[M.id]),In.upload(A,Ys(we),jt,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(In.upload(A,Ys(we),jt,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&tt.setValue(A,"center",D.center),tt.setValue(A,"modelViewMatrix",D.modelViewMatrix),tt.setValue(A,"normalMatrix",D.normalMatrix),tt.setValue(A,"modelMatrix",D.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const bt=H.uniformsGroups;for(let Er=0,di=bt.length;Er<di;Er++){const Ks=bt[Er];N.update(Ks,Ft),N.bind(Ks,Ft)}}return Ft}function lc(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function cc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,U,B){me.get(M.texture).__webglTexture=U,me.get(M.depthTexture).__webglTexture=B;const H=me.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const B=me.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,B=0){L=M,P=U,R=B;let H=!0,D=null,Q=!1,_e=!1;if(M){const be=me.get(M);if(be.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(be.__webglFramebuffer===void 0)b.setupRenderTarget(M);else if(be.__hasExternalTextures)b.rebindTextures(M,me.get(M.texture).__webglTexture,me.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ie=M.depthTexture;if(be.__boundDepthTexture!==Ie){if(Ie!==null&&me.has(Ie)&&(M.width!==Ie.image.width||M.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(M)}}const Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);const Ue=me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?D=Ue[U][B]:D=Ue[U],Q=!0):M.samples>0&&b.useMultisampledRTT(M)===!1?D=me.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?D=Ue[B]:D=Ue,C.copy(M.viewport),z.copy(M.scissor),F=M.scissorTest}else C.copy(Le).multiplyScalar(V).floor(),z.copy(ze).multiplyScalar(V).floor(),F=qe;if(he.bindFramebuffer(A.FRAMEBUFFER,D)&&H&&he.drawBuffers(M,D),he.viewport(C),he.scissor(z),he.setScissorTest(F),Q){const be=me.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,B)}else if(_e){const be=me.get(M.texture),Ee=U||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,be.__webglTexture,B||0,Ee)}S=-1},this.readRenderTargetPixels=function(M,U,B,H,D,Q,_e){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){he.bindFramebuffer(A.FRAMEBUFFER,be);try{const Ee=M.texture,Ue=Ee.format,Ie=Ee.type;if(!ye.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&B>=0&&B<=M.height-D&&A.readPixels(U,B,H,D,Be.convert(Ue),Be.convert(Ie),Q)}finally{const Ee=L!==null?me.get(L).__webglFramebuffer:null;he.bindFramebuffer(A.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(M,U,B,H,D,Q,_e){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){const Ee=M.texture,Ue=Ee.format,Ie=Ee.type;if(!ye.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-H&&B>=0&&B<=M.height-D){he.bindFramebuffer(A.FRAMEBUFFER,be);const Re=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Re),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),A.readPixels(U,B,H,D,Be.convert(Ue),Be.convert(Ie),0);const je=L!==null?me.get(L).__webglFramebuffer:null;he.bindFramebuffer(A.FRAMEBUFFER,je);const it=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await ph(A,it,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Re),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(Re),A.deleteSync(it),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,B=0){M.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const H=Math.pow(2,-B),D=Math.floor(M.image.width*H),Q=Math.floor(M.image.height*H),_e=U!==null?U.x:0,be=U!==null?U.y:0;b.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,_e,be,D,Q),he.unbindTexture()},this.copyTextureToTexture=function(M,U,B=null,H=null,D=0){M.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],U=arguments[2],D=arguments[3]||0,B=null);let Q,_e,be,Ee,Ue,Ie,Re,je,it;const rt=M.isCompressedTexture?M.mipmaps[D]:M.image;B!==null?(Q=B.max.x-B.min.x,_e=B.max.y-B.min.y,be=B.isBox3?B.max.z-B.min.z:1,Ee=B.min.x,Ue=B.min.y,Ie=B.isBox3?B.min.z:0):(Q=rt.width,_e=rt.height,be=rt.depth||1,Ee=0,Ue=0,Ie=0),H!==null?(Re=H.x,je=H.y,it=H.z):(Re=0,je=0,it=0);const lt=Be.convert(U.format),nt=Be.convert(U.type);let we;U.isData3DTexture?(b.setTexture3D(U,0),we=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),we=A.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),we=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const Ei=A.getParameter(A.UNPACK_ROW_LENGTH),wi=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ft=A.getParameter(A.UNPACK_SKIP_PIXELS),Wi=A.getParameter(A.UNPACK_SKIP_ROWS),At=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,rt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,rt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ee),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ie);const Tr=M.isDataArrayTexture||M.isData3DTexture,tt=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const jt=me.get(M),br=me.get(U),bt=me.get(jt.__renderTarget),Er=me.get(br.__renderTarget);he.bindFramebuffer(A.READ_FRAMEBUFFER,bt.__webglFramebuffer),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let di=0;di<be;di++)Tr&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(M).__webglTexture,D,Ie+di),M.isDepthTexture?(tt&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(U).__webglTexture,D,it+di),A.blitFramebuffer(Ee,Ue,Q,_e,Re,je,Q,_e,A.DEPTH_BUFFER_BIT,A.NEAREST)):tt?A.copyTexSubImage3D(we,D,Re,je,it+di,Ee,Ue,Q,_e):A.copyTexSubImage2D(we,D,Re,je,it+di,Ee,Ue,Q,_e);he.bindFramebuffer(A.READ_FRAMEBUFFER,null),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else tt?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(we,D,Re,je,it,Q,_e,be,lt,nt,rt.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(we,D,Re,je,it,Q,_e,be,lt,rt.data):A.texSubImage3D(we,D,Re,je,it,Q,_e,be,lt,nt,rt):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,D,Re,je,Q,_e,lt,nt,rt.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,D,Re,je,rt.width,rt.height,lt,rt.data):A.texSubImage2D(A.TEXTURE_2D,D,Re,je,Q,_e,lt,nt,rt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ei),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,wi),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ft),A.pixelStorei(A.UNPACK_SKIP_ROWS,Wi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,At),D===0&&U.generateMipmaps&&A.generateMipmap(we),he.unbindTexture()},this.copyTextureToTexture3D=function(M,U,B=null,H=null,D=0){return M.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,M=arguments[2],U=arguments[3],D=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,B,H,D)},this.initRenderTarget=function(M){me.get(M).__webglFramebuffer===void 0&&b.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),he.unbindTexture()},this.resetState=function(){P=0,R=0,L=null,he.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class wm extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jn extends Vi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bn=new w,Hn=new w,Ko=new $e,Pr=new Kr,Sn=new Zr,ba=new w,Jo=new w;class vs extends gt{constructor(e=new ut,t=new jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)Bn.fromBufferAttribute(t,n-1),Hn.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Bn.distanceTo(Hn);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sn.copy(i.boundingSphere),Sn.applyMatrix4(n),Sn.radius+=a,e.ray.intersectsSphere(Sn)===!1)return;Ko.copy(n).invert(),Pr.copy(e.ray).applyMatrix4(Ko);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const u=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=u,_=p-1;g<_;g+=c){const m=h.getX(g),f=h.getX(g+1),E=Tn(this,e,Pr,l,m,f);E&&t.push(E)}if(this.isLineLoop){const g=h.getX(p-1),_=h.getX(u),m=Tn(this,e,Pr,l,g,_);m&&t.push(m)}}else{const u=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let g=u,_=p-1;g<_;g+=c){const m=Tn(this,e,Pr,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=Tn(this,e,Pr,l,p-1,u);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Tn(r,e,t,i,n,a){const s=r.geometry.attributes.position;if(Bn.fromBufferAttribute(s,n),Hn.fromBufferAttribute(s,a),t.distanceSqToSegment(Bn,Hn,ba,Jo)>i)return;ba.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo(ba);if(!(o<e.near||o>e.far))return{distance:o,point:Jo.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}class Yl extends Vi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $o=new $e,xs=new Kr,bn=new Zr,En=new w;class Am extends gt{constructor(e=new ut,t=new Yl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bn.copy(i.boundingSphere),bn.applyMatrix4(n),bn.radius+=a,e.ray.intersectsSphere(bn)===!1)return;$o.copy(n).invert(),xs.copy(e.ray).applyMatrix4($o);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let p=d,g=u;p<g;p++){const _=c.getX(p);En.fromBufferAttribute(h,_),Qo(En,_,l,n,e,t,this)}}else{const d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let p=d,g=u;p<g;p++)En.fromBufferAttribute(h,p),Qo(En,p,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Qo(r,e,t,i,n,a,s){const o=xs.distanceSqToPoint(r);if(o<t){const l=new w;xs.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class On extends yt{constructor(e,t,i,n,a,s,o,l,c){super(e,t,i,n,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $t{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(n),t.push(a),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-s,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===s)return n/(a-1);const h=i[n],d=i[n+1]-h,u=(s-h)/d;return(n+u)/(a-1)}getTangent(e,t){let i=e-1e-4,n=e+1e-4;i<0&&(i=0),n>1&&(n=1);const a=this.getPoint(i),s=this.getPoint(n),o=t||(a.isVector2?new re:new w);return o.copy(s).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new w,n=[],a=[],s=[],o=new w,l=new $e;for(let p=0;p<=e;p++){const g=p/e;n[p]=this.getTangentAt(g,new w)}a[0]=new w,s[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),s[0].crossVectors(n[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(mt(n[p-1].dot(n[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}s[p].crossVectors(n[p],a[p])}if(t===!0){let p=Math.acos(mt(a[0].dot(a[e]),-1,1));p/=e,n[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),s[g].crossVectors(n[g],a[g])}return{tangents:n,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Is extends $t{constructor(e=0,t=0,i=1,n=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const i=t,n=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(s?a=0:a=n),this.aClockwise===!0&&!s&&(a===n?a=-n:a=a-n);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rm extends Is{constructor(e,t,i,n,a,s){super(e,t,i,i,n,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Os(){let r=0,e=0,t=0,i=0;function n(a,s,o,l){r=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){n(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,h,d){let u=(s-a)/c-(o-a)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+d)+(l-o)/d;u*=h,p*=h,n(s,o,u,p)},calc:function(a){const s=a*a,o=s*a;return r+e*a+t*s+i*o}}}const wn=new w,Ea=new Os,wa=new Os,Aa=new Os;class Cm extends $t{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new w){const i=t,n=this.points,a=n.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%a]:(wn.subVectors(n[0],n[1]).add(n[0]),c=wn);const d=n[o%a],u=n[(o+1)%a];if(this.closed||o+2<a?h=n[(o+2)%a]:(wn.subVectors(n[a-1],n[a-2]).add(n[a-1]),h=wn),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ea.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),wa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),Aa.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ea.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),wa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Aa.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ea.calc(l),wa.calc(l),Aa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new w().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function el(r,e,t,i,n){const a=(i-e)*.5,s=(n-t)*.5,o=r*r,l=r*o;return(2*t-2*i+a+s)*l+(-3*t+3*i-2*a-s)*o+a*r+t}function Pm(r,e){const t=1-r;return t*t*e}function Lm(r,e){return 2*(1-r)*r*e}function Dm(r,e){return r*r*e}function Fr(r,e,t,i){return Pm(r,e)+Lm(r,t)+Dm(r,i)}function Nm(r,e){const t=1-r;return t*t*t*e}function Um(r,e){const t=1-r;return 3*t*t*r*e}function Im(r,e){return 3*(1-r)*r*r*e}function Om(r,e){return r*r*r*e}function zr(r,e,t,i,n){return Nm(r,e)+Um(r,t)+Im(r,i)+Om(r,n)}class Zl extends $t{constructor(e=new re,t=new re,i=new re,n=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new re){const i=t,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(zr(e,n.x,a.x,s.x,o.x),zr(e,n.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fm extends $t{constructor(e=new w,t=new w,i=new w,n=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new w){const i=t,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(zr(e,n.x,a.x,s.x,o.x),zr(e,n.y,a.y,s.y,o.y),zr(e,n.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kl extends $t{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zm extends $t{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jl extends $t{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){const i=t,n=this.v0,a=this.v1,s=this.v2;return i.set(Fr(e,n.x,a.x,s.x),Fr(e,n.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bm extends $t{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){const i=t,n=this.v0,a=this.v1,s=this.v2;return i.set(Fr(e,n.x,a.x,s.x),Fr(e,n.y,a.y,s.y),Fr(e,n.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $l extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const i=t,n=this.points,a=(n.length-1)*e,s=Math.floor(a),o=a-s,l=n[s===0?s:s-1],c=n[s],h=n[s>n.length-2?n.length-1:s+1],d=n[s>n.length-3?n.length-1:s+2];return i.set(el(o,l.x,c.x,h.x,d.x),el(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new re().fromArray(n))}return this}}var ys=Object.freeze({__proto__:null,ArcCurve:Rm,CatmullRomCurve3:Cm,CubicBezierCurve:Zl,CubicBezierCurve3:Fm,EllipseCurve:Is,LineCurve:Kl,LineCurve3:zm,QuadraticBezierCurve:Jl,QuadraticBezierCurve3:Bm,SplineCurve:$l});class Hm extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ys[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let a=0;for(;a<n.length;){if(n[a]>=i){const s=n[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,a=this.curves;n<a.length;n++){const s=a[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new ys[n.type]().fromJSON(n))}return this}}class tl extends Hm{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Kl(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const a=new Jl(this.currentPoint.clone(),new re(e,t),new re(i,n));return this.curves.push(a),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,a,s){const o=new Zl(this.currentPoint.clone(),new re(e,t),new re(i,n),new re(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new $l(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,a,s),this}absarc(e,t,i,n,a,s){return this.absellipse(e,t,i,i,n,a,s),this}ellipse(e,t,i,n,a,s,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,a,s,o,l),this}absellipse(e,t,i,n,a,s,o,l){const c=new Is(e,t,i,n,a,s,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yr extends ut{constructor(e=1,t=1,i=1,n=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=i/2;let f=0;E(),s===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(p,2));function E(){const x=new w,I=new w;let P=0;const R=(t-e)/i;for(let L=0;L<=a;L++){const S=[],y=L/a,C=y*(t-e)+e;for(let z=0;z<=n;z++){const F=z/n,k=F*l+o,q=Math.sin(k),W=Math.cos(k);I.x=C*q,I.y=-y*i+m,I.z=C*W,d.push(I.x,I.y,I.z),x.set(q,R,W).normalize(),u.push(x.x,x.y,x.z),p.push(F,1-y),S.push(g++)}_.push(S)}for(let L=0;L<n;L++)for(let S=0;S<a;S++){const y=_[S][L],C=_[S+1][L],z=_[S+1][L+1],F=_[S][L+1];(e>0||S!==0)&&(h.push(y,C,F),P+=3),(t>0||S!==a-1)&&(h.push(C,z,F),P+=3)}c.addGroup(f,P,0),f+=P}function T(x){const I=g,P=new re,R=new w;let L=0;const S=x===!0?e:t,y=x===!0?1:-1;for(let z=1;z<=n;z++)d.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;const C=g;for(let z=0;z<=n;z++){const F=z/n*l+o,k=Math.cos(F),q=Math.sin(F);R.x=S*q,R.y=m*y,R.z=S*k,d.push(R.x,R.y,R.z),u.push(0,y,0),P.x=k*.5+.5,P.y=q*.5*y+.5,p.push(P.x,P.y),g++}for(let z=0;z<n;z++){const F=I+z,k=C+z;x===!0?h.push(k,k+1,F):h.push(k+1,k,F),L+=3}c.addGroup(f,L,x===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kn extends yr{constructor(e=1,t=1,i=32,n=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,n,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new kn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ql extends tl{constructor(e){super(e),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new tl().fromJSON(n))}return this}}const km={triangulate:function(r,e,t=2){const i=e&&e.length,n=i?e[0]*t:r.length;let a=ec(r,0,n,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,c,h,d,u,p;if(i&&(a=jm(r,e,a,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let g=t;g<n;g+=t)d=r[g],u=r[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Vr(a,s,t,o,l,p,0),s}};function ec(r,e,t,i,n){let a,s;if(n===rg(r,e,t,i)>0)for(a=e;a<t;a+=i)s=il(a,r[a],r[a+1],s);else for(a=t-i;a>=e;a-=i)s=il(a,r[a],r[a+1],s);return s&&qn(s,s.next)&&(Xr(s),s=s.next),s}function Hi(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(qn(t,t.next)||at(t.prev,t,t.next)===0)){if(Xr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Vr(r,e,t,i,n,a,s){if(!r)return;!s&&a&&Jm(r,i,n,a);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,a?Vm(r,i,n,a):Gm(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Xr(r),r=c.next,o=c.next;continue}if(r=c,r===o){s?s===1?(r=Wm(Hi(r),e,t),Vr(r,e,t,i,n,a,2)):s===2&&Xm(r,e,t,i,n,a):Vr(Hi(r),e,t,i,n,a,1);break}}}function Gm(r){const e=r.prev,t=r,i=r.next;if(at(e,t,i)>=0)return!1;const n=e.x,a=t.x,s=i.x,o=e.y,l=t.y,c=i.y,h=n<a?n<s?n:s:a<s?a:s,d=o<l?o<c?o:c:l<c?l:c,u=n>a?n>s?n:s:a>s?a:s,p=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&lr(n,o,a,l,s,c,g.x,g.y)&&at(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vm(r,e,t,i){const n=r.prev,a=r,s=r.next;if(at(n,a,s)>=0)return!1;const o=n.x,l=a.x,c=s.x,h=n.y,d=a.y,u=s.y,p=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,_=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,f=Ms(p,g,e,t,i),E=Ms(_,m,e,t,i);let T=r.prevZ,x=r.nextZ;for(;T&&T.z>=f&&x&&x.z<=E;){if(T.x>=p&&T.x<=_&&T.y>=g&&T.y<=m&&T!==n&&T!==s&&lr(o,h,l,d,c,u,T.x,T.y)&&at(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==n&&x!==s&&lr(o,h,l,d,c,u,x.x,x.y)&&at(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=f;){if(T.x>=p&&T.x<=_&&T.y>=g&&T.y<=m&&T!==n&&T!==s&&lr(o,h,l,d,c,u,T.x,T.y)&&at(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=E;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==n&&x!==s&&lr(o,h,l,d,c,u,x.x,x.y)&&at(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Wm(r,e,t){let i=r;do{const n=i.prev,a=i.next.next;!qn(n,a)&&tc(n,i,i.next,a)&&Wr(n,a)&&Wr(a,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Xr(i),Xr(i.next),i=r=a),i=i.next}while(i!==r);return Hi(i)}function Xm(r,e,t,i,n,a){let s=r;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&eg(s,o)){let l=ic(s,o);s=Hi(s,s.next),l=Hi(l,l.next),Vr(s,e,t,i,n,a,0),Vr(l,e,t,i,n,a,0);return}o=o.next}s=s.next}while(s!==r)}function jm(r,e,t,i){const n=[];let a,s,o,l,c;for(a=0,s=e.length;a<s;a++)o=e[a]*i,l=a<s-1?e[a+1]*i:r.length,c=ec(r,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Qm(c));for(n.sort(qm),a=0;a<n.length;a++)t=Ym(n[a],t);return t}function qm(r,e){return r.x-e.x}function Ym(r,e){const t=Zm(r,e);if(!t)return e;const i=ic(t,r);return Hi(i,i.next),Hi(t,t.next)}function Zm(r,e){let t=e,i=-1/0,n;const a=r.x,s=r.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=a&&u>i&&(i=u,n=t.x<t.next.x?t:t.next,u===a))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let h=1/0,d;t=n;do a>=t.x&&t.x>=l&&a!==t.x&&lr(s<c?a:i,s,l,c,s<c?i:a,s,t.x,t.y)&&(d=Math.abs(s-t.y)/(a-t.x),Wr(t,r)&&(d<h||d===h&&(t.x>n.x||t.x===n.x&&Km(n,t)))&&(n=t,h=d)),t=t.next;while(t!==o);return n}function Km(r,e){return at(r.prev,r,e.prev)<0&&at(e.next,r,r.next)<0}function Jm(r,e,t,i){let n=r;do n.z===0&&(n.z=Ms(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,$m(n)}function $m(r){let e,t,i,n,a,s,o,l,c=1;do{for(t=r,r=null,a=null,s=0;t;){for(s++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:r=n,n.prevZ=a,a=n;t=i}a.nextZ=null,c*=2}while(s>1);return r}function Ms(r,e,t,i,n){return r=(r-t)*n|0,e=(e-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Qm(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function lr(r,e,t,i,n,a,s,o){return(n-s)*(e-o)>=(r-s)*(a-o)&&(r-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(n-s)*(i-o)}function eg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!tg(r,e)&&(Wr(r,e)&&Wr(e,r)&&ig(r,e)&&(at(r.prev,r,e.prev)||at(r,e.prev,e))||qn(r,e)&&at(r.prev,r,r.next)>0&&at(e.prev,e,e.next)>0)}function at(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function qn(r,e){return r.x===e.x&&r.y===e.y}function tc(r,e,t,i){const n=Rn(at(r,e,t)),a=Rn(at(r,e,i)),s=Rn(at(t,i,r)),o=Rn(at(t,i,e));return!!(n!==a&&s!==o||n===0&&An(r,t,e)||a===0&&An(r,i,e)||s===0&&An(t,r,i)||o===0&&An(t,e,i))}function An(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Rn(r){return r>0?1:r<0?-1:0}function tg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&tc(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Wr(r,e){return at(r.prev,r,r.next)<0?at(r,e,r.next)>=0&&at(r,r.prev,e)>=0:at(r,e,r.prev)<0||at(r,r.next,e)<0}function ig(r,e){let t=r,i=!1;const n=(r.x+e.x)/2,a=(r.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&n<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function ic(r,e){const t=new Ss(r.i,r.x,r.y),i=new Ss(e.i,e.x,e.y),n=r.next,a=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function il(r,e,t,i){const n=new Ss(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Xr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ss(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rg(r,e,t,i){let n=0;for(let a=e,s=t-i;a<t;a+=i)n+=(r[s]-r[a])*(r[a+1]+r[s+1]),s=a;return n}class Br{static area(e){const t=e.length;let i=0;for(let n=t-1,a=0;a<t;n=a++)i+=e[n].x*e[a].y-e[a].x*e[n].y;return i*.5}static isClockWise(e){return Br.area(e)<0}static triangulateShape(e,t){const i=[],n=[],a=[];rl(e),nl(i,e);let s=e.length;t.forEach(rl);for(let l=0;l<t.length;l++)n.push(s),s+=t[l].length,nl(i,t[l]);const o=km.triangulate(i,n);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function rl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function nl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Fs extends ut{constructor(e=new Ql([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new st(n,3)),this.setAttribute("uv",new st(a,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:ng;let T,x=!1,I,P,R,L;f&&(T=f.getSpacedPoints(h),x=!0,u=!1,I=f.computeFrenetFrames(h,!1),P=new w,R=new w,L=new w),u||(m=0,p=0,g=0,_=0);const S=o.extractPoints(c);let y=S.shape;const C=S.holes;if(!Br.isClockWise(y)){y=y.reverse();for(let $=0,J=C.length;$<J;$++){const ae=C[$];Br.isClockWise(ae)&&(C[$]=ae.reverse())}}const z=Br.triangulateShape(y,C),F=y;for(let $=0,J=C.length;$<J;$++){const ae=C[$];y=y.concat(ae)}function k($,J,ae){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(J,ae)}const q=y.length,W=z.length;function ee($,J,ae){let A,de,ve;const ye=$.x-J.x,he=$.y-J.y,Oe=ae.x-$.x,me=ae.y-$.y,b=ye*ye+he*he,v=ye*me-he*Oe;if(Math.abs(v)>Number.EPSILON){const O=Math.sqrt(b),Y=Math.sqrt(Oe*Oe+me*me),K=J.x-he/O,j=J.y+ye/O,Te=ae.x-me/Y,ce=ae.y+Oe/Y,xe=((Te-K)*me-(ce-j)*Oe)/(ye*me-he*Oe);A=K+ye*xe-$.x,de=j+he*xe-$.y;const ke=A*A+de*de;if(ke<=2)return new re(A,de);ve=Math.sqrt(ke/2)}else{let O=!1;ye>Number.EPSILON?Oe>Number.EPSILON&&(O=!0):ye<-Number.EPSILON?Oe<-Number.EPSILON&&(O=!0):Math.sign(he)===Math.sign(me)&&(O=!0),O?(A=-he,de=ye,ve=Math.sqrt(b)):(A=ye,de=he,ve=Math.sqrt(b/2))}return new re(A/ve,de/ve)}const V=[];for(let $=0,J=F.length,ae=J-1,A=$+1;$<J;$++,ae++,A++)ae===J&&(ae=0),A===J&&(A=0),V[$]=ee(F[$],F[ae],F[A]);const ne=[];let fe,Le=V.concat();for(let $=0,J=C.length;$<J;$++){const ae=C[$];fe=[];for(let A=0,de=ae.length,ve=de-1,ye=A+1;A<de;A++,ve++,ye++)ve===de&&(ve=0),ye===de&&(ye=0),fe[A]=ee(ae[A],ae[ve],ae[ye]);ne.push(fe),Le=Le.concat(fe)}for(let $=0;$<m;$++){const J=$/m,ae=p*Math.cos(J*Math.PI/2),A=g*Math.sin(J*Math.PI/2)+_;for(let de=0,ve=F.length;de<ve;de++){const ye=k(F[de],V[de],A);ge(ye.x,ye.y,-ae)}for(let de=0,ve=C.length;de<ve;de++){const ye=C[de];fe=ne[de];for(let he=0,Oe=ye.length;he<Oe;he++){const me=k(ye[he],fe[he],A);ge(me.x,me.y,-ae)}}}const ze=g+_;for(let $=0;$<q;$++){const J=u?k(y[$],Le[$],ze):y[$];x?(R.copy(I.normals[0]).multiplyScalar(J.x),P.copy(I.binormals[0]).multiplyScalar(J.y),L.copy(T[0]).add(R).add(P),ge(L.x,L.y,L.z)):ge(J.x,J.y,0)}for(let $=1;$<=h;$++)for(let J=0;J<q;J++){const ae=u?k(y[J],Le[J],ze):y[J];x?(R.copy(I.normals[$]).multiplyScalar(ae.x),P.copy(I.binormals[$]).multiplyScalar(ae.y),L.copy(T[$]).add(R).add(P),ge(L.x,L.y,L.z)):ge(ae.x,ae.y,d/h*$)}for(let $=m-1;$>=0;$--){const J=$/m,ae=p*Math.cos(J*Math.PI/2),A=g*Math.sin(J*Math.PI/2)+_;for(let de=0,ve=F.length;de<ve;de++){const ye=k(F[de],V[de],A);ge(ye.x,ye.y,d+ae)}for(let de=0,ve=C.length;de<ve;de++){const ye=C[de];fe=ne[de];for(let he=0,Oe=ye.length;he<Oe;he++){const me=k(ye[he],fe[he],A);x?ge(me.x,me.y+T[h-1].y,T[h-1].x+ae):ge(me.x,me.y,d+ae)}}}qe(),X();function qe(){const $=n.length/3;if(u){let J=0,ae=q*J;for(let A=0;A<W;A++){const de=z[A];se(de[2]+ae,de[1]+ae,de[0]+ae)}J=h+m*2,ae=q*J;for(let A=0;A<W;A++){const de=z[A];se(de[0]+ae,de[1]+ae,de[2]+ae)}}else{for(let J=0;J<W;J++){const ae=z[J];se(ae[2],ae[1],ae[0])}for(let J=0;J<W;J++){const ae=z[J];se(ae[0]+q*h,ae[1]+q*h,ae[2]+q*h)}}i.addGroup($,n.length/3-$,0)}function X(){const $=n.length/3;let J=0;te(F,J),J+=F.length;for(let ae=0,A=C.length;ae<A;ae++){const de=C[ae];te(de,J),J+=de.length}i.addGroup($,n.length/3-$,1)}function te($,J){let ae=$.length;for(;--ae>=0;){const A=ae;let de=ae-1;de<0&&(de=$.length-1);for(let ve=0,ye=h+m*2;ve<ye;ve++){const he=q*ve,Oe=q*(ve+1),me=J+A+he,b=J+de+he,v=J+de+Oe,O=J+A+Oe;Ce(me,b,v,O)}}}function ge($,J,ae){l.push($),l.push(J),l.push(ae)}function se($,J,ae){Ae($),Ae(J),Ae(ae);const A=n.length/3,de=E.generateTopUV(i,n,A-3,A-2,A-1);De(de[0]),De(de[1]),De(de[2])}function Ce($,J,ae,A){Ae($),Ae(J),Ae(A),Ae(J),Ae(ae),Ae(A);const de=n.length/3,ve=E.generateSideWallUV(i,n,de-6,de-3,de-2,de-1);De(ve[0]),De(ve[1]),De(ve[3]),De(ve[1]),De(ve[2]),De(ve[3])}function Ae($){n.push(l[$*3+0]),n.push(l[$*3+1]),n.push(l[$*3+2])}function De($){a.push($.x),a.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ag(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,s=e.shapes.length;a<s;a++){const o=t[e.shapes[a]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new ys[n.type]().fromJSON(n)),new Fs(i,e.options)}}const ng={generateTopUV:function(r,e,t,i,n){const a=e[t*3],s=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new re(a,s),new re(o,l),new re(c,h)]},generateSideWallUV:function(r,e,t,i,n,a){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[n*3],p=e[n*3+1],g=e[n*3+2],_=e[a*3],m=e[a*3+1],f=e[a*3+2];return Math.abs(o-h)<Math.abs(s-c)?[new re(s,1-l),new re(c,1-d),new re(u,1-g),new re(_,1-f)]:[new re(o,1-l),new re(h,1-d),new re(p,1-g),new re(m,1-f)]}};function ag(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){const a=r[i];t.shapes.push(a.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yn extends ut{constructor(e=.5,t=1,i=32,n=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/n,p=new w,g=new re;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){const f=a+m/i*s;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<n;_++){const m=_*(i+1);for(let f=0;f<i;f++){const E=f+m,T=E,x=E+i+1,I=E+i+2,P=E+1;o.push(T,x,P),o.push(x,I,P)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hi extends ut{constructor(e=1,t=32,i=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const h=[],d=new w,u=new w,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const E=[],T=f/i;let x=0;f===0&&s===0?x=.5/t:f===i&&l===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){const P=I/t;d.x=-e*Math.cos(n+P*a)*Math.sin(s+T*o),d.y=e*Math.cos(s+T*o),d.z=e*Math.sin(n+P*a)*Math.sin(s+T*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(P+x,1-T),E.push(c++)}h.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){const T=h[f][E+1],x=h[f][E],I=h[f+1][E],P=h[f+1][E+1];(f!==0||s>0)&&p.push(T,x,P),(f!==i-1||l<Math.PI)&&p.push(x,I,P)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zs extends ut{constructor(e=1,t=.4,i=12,n=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);const s=[],o=[],l=[],c=[],h=new w,d=new w,u=new w;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){const _=g/n*a,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){const _=(n+1)*p+g-1,m=(n+1)*(p-1)+g-1,f=(n+1)*(p-1)+g,E=(n+1)*p+g;s.push(_,m,E),s.push(m,f,E)}this.setIndex(s),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class dr extends Vi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sg extends jn{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const al={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class og{constructor(e,t,i){const n=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const lg=new og;class Bs{constructor(e){this.manager=e!==void 0?e:lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";class cg extends Bs{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=al.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Gr("img");function l(){h(),al.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(d){h(),n&&n(d),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class hg extends Bs{constructor(e){super(e)}load(e,t,i,n){const a=new yt,s=new cg(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,n),a}}class Hs extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ra=new $e,sl=new w,ol=new w;class rc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;sl.setFromMatrixPosition(e.matrixWorld),t.position.copy(sl),ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ol),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ll=new $e,Lr=new w,Ca=new w;class ug extends rc{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Lr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Lr),Ca.copy(i.position),Ca.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ca),i.updateMatrixWorld(),n.makeTranslation(-Lr.x,-Lr.y,-Lr.z),ll.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll)}}class nc extends Hs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ug}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dg extends rc{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pg extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new dg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fg extends Hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cl(){return performance.now()}const hl=new $e;class gg{constructor(e,t,i=0,n=1/0){this.ray=new Kr(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hl),this}intersectObject(e,t=!0,i=[]){return Ts(e,this,i,t),i.sort(ul),i}intersectObjects(e,t=!0,i=[]){for(let n=0,a=e.length;n<a;n++)Ts(e[n],this,i,t);return i.sort(ul),i}}function ul(r,e){return r.distance-e.distance}function Ts(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const a=r.children;for(let s=0,o=a.length;s<o;s++)Ts(a[s],e,t,!0)}}class dl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _g extends ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bs);const pl={type:"change"},ks={type:"start"},ac={type:"end"},Cn=new Kr,fl=new xi,vg=Math.cos(70*Ll.DEG2RAD),ht=new w,Et=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pa=1e-6;class xg extends _g{constructor(e,t=null){super(e,t),this.state=Ke.NONE,this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:sr.ROTATE,TWO:sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new Xt,this._lastTargetPosition=new w,this._quat=new Xt().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dl,this._sphericalDelta=new dl,this._scale=1,this._panOffset=new w,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new w,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Mg.bind(this),this._onPointerDown=yg.bind(this),this._onPointerUp=Sg.bind(this),this._onContextMenu=Cg.bind(this),this._onMouseWheel=Eg.bind(this),this._onKeyDown=wg.bind(this),this._onTouchStart=Ag.bind(this),this._onTouchMove=Rg.bind(this),this._onMouseDown=Tg.bind(this),this._onMouseMove=bg.bind(this),this._interceptControlDown=Pg.bind(this),this._interceptControlUp=Lg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pl),this.update(),this.state=Ke.NONE}update(e=null){const t=this.object.position;ht.copy(t).sub(this.target),ht.applyQuaternion(this._quat),this._spherical.setFromVector3(ht),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Et:i>Math.PI&&(i-=Et),n<-Math.PI?n+=Et:n>Math.PI&&(n-=Et),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(ht.setFromSpherical(this._spherical),ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=ht.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Cn.origin.copy(this.object.position),Cn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cn.direction))<vg?this.object.lookAt(this.target):(fl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cn.intersectPlane(fl,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Pa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pa||this._lastTargetPosition.distanceToSquared(this.target)>Pa?(this.dispatchEvent(pl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Et/60*this.autoRotateSpeed*e:Et/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ht.setFromMatrixColumn(t,0),ht.multiplyScalar(-e),this._panOffset.add(ht)}_panUp(e,t){this.screenSpacePanning===!0?ht.setFromMatrixColumn(t,1):(ht.setFromMatrixColumn(t,0),ht.crossVectors(this.object.up,ht)),ht.multiplyScalar(e),this._panOffset.add(ht)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;ht.copy(n).sub(this.target);let a=ht.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,a=t-i.top,s=i.width,o=i.height;this._mouse.x=n/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Et*this._rotateDelta.x/t.clientHeight),this._rotateUp(Et*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Et*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Et*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Et*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Et*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Et*this._rotateDelta.x/t.clientHeight),this._rotateUp(Et*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yg(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Mg(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Sg(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ac),this.state=Ke.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Tg(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ke.DOLLY;break;case cr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ke.ROTATE}break;case cr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(ks)}function bg(r){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Eg(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(r.preventDefault(),this.dispatchEvent(ks),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ac))}function wg(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function Ag(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case sr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ke.TOUCH_ROTATE;break;case sr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case sr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ke.TOUCH_DOLLY_PAN;break;case sr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(ks)}function Rg(r){switch(this._trackPointer(r),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ke.NONE}}function Cg(r){this.enabled!==!1&&r.preventDefault()}function Pg(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lg(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Gs=6371,La=[{id:"minuteman-3",name:"LGM-30G Minuteman III",country:"United States",type:"Silo-based ICBM",yieldKt:475,warheadName:"W87-1 RV",speedMach:23,rangeKm:13e3,apogeeKm:1120,defaultLaunch:{name:"Minot AFB, USA",lat:48.41,lon:-101.35},defaultTarget:{name:"Target Alpha",lat:55.75,lon:37.62},description:"The backbone of the US land-based nuclear triad. Carries single or multiple W78/W87 thermonuclear warheads at hypersonic re-entry speeds."},{id:"trident-2",name:"UGM-133A Trident II (D5)",country:"USA / UK",type:"Submarine-launched SLBM",yieldKt:455,warheadName:"W88 MIRV",speedMach:24,rangeKm:12e3,apogeeKm:1e3,defaultLaunch:{name:"North Atlantic SSBN Patrol",lat:58,lon:-25},defaultTarget:{name:"Strategic Command Center",lat:55.75,lon:37.62},description:"Primary sea-based strategic deterrence deployed on Ohio-class and Vanguard-class ballistic missile submarines with near-undetectable launch capability."},{id:"sarmat",name:'RS-28 Sarmat ("Satan II")',country:"Russia",type:"Heavy Silo-based ICBM",yieldKt:750,warheadName:"Avangard / MIRV",speedMach:20.7,rangeKm:18e3,apogeeKm:1350,defaultLaunch:{name:"Plesetsk Cosmodrome, RUS",lat:62.92,lon:40.57},defaultTarget:{name:"Norfolk Naval Base, USA",lat:36.94,lon:-76.3},description:"Super-heavy thermonuclear liquid-fueled ICBM capable of circumpolar trajectories over either South or North poles to evade missile defense shields."},{id:"topol-m",name:"RT-2PM2 Topol-M / RS-24 Yars",country:"Russia",type:"Road-Mobile ICBM",yieldKt:800,warheadName:"Single 800kt Thermonuclear",speedMach:22,rangeKm:11e3,apogeeKm:1050,defaultLaunch:{name:"Teykovo Missile Division, RUS",lat:56.88,lon:40.55},defaultTarget:{name:"Pentagon / Washington DC, USA",lat:38.87,lon:-77.05},description:"Road-mobile solid-propellant ICBM with rapid boost phase designed to minimize vulnerability to boost-phase interception."},{id:"df-41",name:"DF-41 (Dongfeng-41)",country:"China",type:"Road-Mobile / Silo ICBM",yieldKt:500,warheadName:"MIRV Warhead",speedMach:25,rangeKm:15e3,apogeeKm:1200,defaultLaunch:{name:"Shaanxi Base, CHN",lat:34.26,lon:108.94},defaultTarget:{name:"Los Angeles, USA",lat:34.05,lon:-118.24},description:"China’s fourth-generation solid-fuel road-mobile strategic missile capable of reaching any point in North America within 30 minutes."},{id:"m51",name:"M51 SLBM",country:"France",type:"Submarine-launched SLBM",yieldKt:150,warheadName:"TNO (Tête Nucléaire Océanique)",speedMach:25,rangeKm:1e4,apogeeKm:900,defaultLaunch:{name:"Bay of Biscay SSBN, FRA",lat:45,lon:-5},defaultTarget:{name:"Designated Target",lat:55.75,lon:37.62},description:"Submarine-launched missile of the Force Océanique Stratégique, carried on Triomphant-class nuclear ballistic submarines."},{id:"b83",name:"B83 Thermonuclear Bomb",country:"United States",type:"Strategic Gravity Bomb / ALCM",yieldKt:1200,warheadName:"Variable Yield 1.2 Mt",speedMach:2.2,rangeKm:3e3,apogeeKm:350,defaultLaunch:{name:"Whiteman AFB (B-2 Spirit), USA",lat:38.73,lon:-93.55},defaultTarget:{name:"Target Bravo",lat:55.75,lon:37.62},description:"The highest-yield nuclear weapon currently remaining in active service in the US arsenal (1.2 Megatons), designed for hardened bunker destruction."},{id:"tsar-bomba",name:"RDS-220 Tsar Bomba (Historic)",country:"USSR",type:"Super-Heavy Test Weapon",yieldKt:5e4,warheadName:"50 Megaton Hydrogen Bomb",speedMach:1.5,rangeKm:4e3,apogeeKm:250,defaultLaunch:{name:"Olenya Air Base, RUS",lat:68.15,lon:33.46},defaultTarget:{name:"Novaya Zemlya Test Site",lat:73.85,lon:54.5},description:"The most powerful nuclear weapon ever created and detonated in human history (October 30, 1961), with an explosive energy equivalent to 50 million tons of TNT."},{id:"little-boy",name:"Little Boy (Historic 1945)",country:"USA",type:"Gun-type Fission Bomb",yieldKt:15,warheadName:"U-235 Fission Weapon",speedMach:.5,rangeKm:1500,apogeeKm:50,defaultLaunch:{name:"Tinian Island, Marianas",lat:14.96,lon:145.62},defaultTarget:{name:"Hiroshima, Japan",lat:34.39,lon:132.45},description:"The first nuclear weapon used in warfare, with an explosive yield of approximately 15 kilotons."}],Da=[{name:"Washington D.C., USA",lat:38.9072,lon:-77.0369},{name:"New York City, USA",lat:40.7128,lon:-74.006},{name:"Los Angeles, USA",lat:34.0522,lon:-118.2437},{name:"Minot AFB, USA (ICBM Silos)",lat:48.4167,lon:-101.358},{name:"Whiteman AFB, USA (B-2 Base)",lat:38.7303,lon:-93.5478},{name:"London, United Kingdom",lat:51.5074,lon:-.1278},{name:"Paris, France",lat:48.8566,lon:2.3522},{name:"Berlin, Germany",lat:52.52,lon:13.405},{name:"Moscow, Russia",lat:55.7558,lon:37.6173},{name:"Plesetsk Cosmodrome, Russia",lat:62.9271,lon:40.5764},{name:"Novosibirsk, Russia",lat:55.0084,lon:82.9357},{name:"Beijing, China",lat:39.9042,lon:116.4074},{name:"Taiyuan Satellite Base, China",lat:38.8491,lon:111.608},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503},{name:"Seoul, South Korea",lat:37.5665,lon:126.978},{name:"Pyongyang, North Korea",lat:39.0392,lon:125.7625},{name:"New Delhi, India",lat:28.6139,lon:77.209},{name:"Islamabad, Pakistan",lat:33.6844,lon:73.0479},{name:"Tel Aviv, Israel",lat:32.0853,lon:34.7818},{name:"Tehran, Iran",lat:35.6892,lon:51.389},{name:"Sydney, Australia",lat:-33.8688,lon:151.2093}];function sc(r,e=!0){const t=Math.max(.1,r),i=(e?.075:.088)*Math.pow(t,.4),n=(e?.35:.28)*Math.pow(t,1/3),a=1.25*Math.pow(t,.19),s=Math.min(a,4.5),o=(e?.89:.64)*Math.pow(t,1/3),l=(e?.85:.67)*Math.pow(t,.41),c=(e?2.2:1.61)*Math.pow(t,1/3),h=Math.min(65,3.8*Math.pow(t,.25)),d=Math.min(95,2.8*Math.pow(t,.28)),u=e?0:.045*Math.pow(t,.3);return{yieldKt:t,isAirburst:e,zones:[{id:"fireball",name:"Fireball Zone",color:"#ffdd00",borderColor:"#ffff88",radiusKm:i,radiusMiles:i*.621371,areaSqKm:Math.PI*Math.pow(i,2),overpressurePsi:"> 100+ psi",description:"Vaporization point. Interior reaches tens of millions of degrees (hotter than the sun’s core). Anything inside is completely disintegrated.",visualHeight:1},{id:"heavy_blast",name:"Heavy Blast (20 psi)",color:"#ff2222",borderColor:"#ff5555",radiusKm:n,radiusMiles:n*.621371,areaSqKm:Math.PI*Math.pow(n,2),overpressurePsi:"20 psi",description:"Heavy concrete structures destroyed or severely collapsed. Fatalities approach 100%. Extreme hurricane-force winds in excess of 800 km/h.",visualHeight:.95},{id:"radiation",name:"Ionizing Radiation (500 rem)",color:"#22ff66",borderColor:"#66ff99",radiusKm:s,radiusMiles:s*.621371,areaSqKm:Math.PI*Math.pow(s,2),overpressurePsi:"Variable",description:"Lethal acute radiation dose (500 rem / 5 Sv). 50% to 90% mortality without immediate intensive medical treatment over several weeks.",visualHeight:.9},{id:"moderate_blast",name:"Moderate Blast (5 psi)",color:"#ff8800",borderColor:"#ffaa33",radiusKm:o,radiusMiles:o*.621371,areaSqKm:Math.PI*Math.pow(o,2),overpressurePsi:"5 psi",description:"Residential buildings collapse, widespread structural failure, universal fires, severe multi-system casualties.",visualHeight:.85},{id:"thermal",name:"Thermal Radiation (3rd-Degree Burns)",color:"#ff00aa",borderColor:"#ff55cc",radiusKm:l,radiusMiles:l*.621371,areaSqKm:Math.PI*Math.pow(l,2),overpressurePsi:"Thermal flux (8-10 cal/cm²)",description:"Full-thickness 3rd degree burns on exposed human skin across 360°. Spontaneous combustion of flammable structures and firestorms.",visualHeight:.8},{id:"light_blast",name:"Light Blast (1 psi)",color:"#3388ff",borderColor:"#77b5ff",radiusKm:c,radiusMiles:c*.621371,areaSqKm:Math.PI*Math.pow(c,2),overpressurePsi:"1 psi",description:"Glass windows shatter violently inwards. Flying shards cause severe lacerations and eye injuries over immense distances.",visualHeight:.75}],mushroomCloud:{heightKm:h,heightMiles:h*.621371,capDiameterKm:d,craterDiameterKm:u}}}function jr(r,e,t){const i=(90-r)*(Math.PI/180),n=(e+180)*(Math.PI/180),a=-(t*Math.sin(i)*Math.cos(n)),s=t*Math.sin(i)*Math.sin(n),o=t*Math.cos(i);return{x:a,y:o,z:s}}function Dg(r){const e=Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z),t=Math.acos(Math.max(-1,Math.min(1,r.y/e))),i=Math.atan2(r.z,-r.x),n=90-t*180/Math.PI;let a=i*180/Math.PI-180;return a<-180&&(a+=360),a>180&&(a-=360),{lat:n,lon:a}}function Ng(r,e,t,i){const n=Gs,a=(t-r)*Math.PI/180,s=(i-e)*Math.PI/180,o=Math.sin(a/2)*Math.sin(a/2)+Math.cos(r*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(s/2)*Math.sin(s/2),l=2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o));return n*l}const Lt=100,Ur=Lt/Gs;function Ug(){const r=document.createElement("canvas");r.width=2048,r.height=1024;const e=r.getContext("2d"),t=document.createElement("canvas");t.width=2048,t.height=1024;const i=t.getContext("2d"),n=document.createElement("canvas");n.width=2048,n.height=1024;const a=n.getContext("2d"),s=e.createLinearGradient(0,0,0,1024);s.addColorStop(0,"#0a1d37"),s.addColorStop(.2,"#0c274c"),s.addColorStop(.5,"#0b3564"),s.addColorStop(.8,"#0c274c"),s.addColorStop(1,"#0a1d37"),e.fillStyle=s,e.fillRect(0,0,2048,1024),i.fillStyle="#010204",i.fillRect(0,0,2048,1024),a.fillStyle="#99bbdd",a.fillRect(0,0,2048,1024);function o(x,I){const P=(x+180)/360*2048,R=(90-I)/180*1024;return{x:P,y:R}}function l(x,I="#1d3e23",P="#3c4e2a"){if(x.length<3)return;e.beginPath();const R=o(x[0][0],x[0][1]);e.moveTo(R.x,R.y);for(let S=1;S<x.length;S++){const y=o(x[S][0],x[S][1]);e.lineTo(y.x,y.y)}e.closePath();const L=e.createLinearGradient(0,0,0,1024);L.addColorStop(.2,I),L.addColorStop(.5,P),L.addColorStop(.8,I),e.fillStyle=L,e.fill(),e.strokeStyle="rgba(70, 120, 80, 0.4)",e.lineWidth=1.5,e.stroke(),a.beginPath(),a.moveTo(R.x,R.y);for(let S=1;S<x.length;S++){const y=o(x[S][0],x[S][1]);a.lineTo(y.x,y.y)}a.closePath(),a.fillStyle="#000000",a.fill()}const c=[[-168,65],[-160,71],[-130,70],[-95,74],[-75,75],[-60,60],[-65,45],[-75,35],[-80,25],[-90,21],[-80,9],[-77,8],[-83,10],[-90,15],[-105,20],[-110,30],[-124,38],[-125,49],[-135,57],[-160,56],[-168,65]],h=[[-77,8],[-60,10],[-50,0],[-35,-5],[-35,-12],[-40,-22],[-53,-33],[-65,-42],[-68,-55],[-75,-50],[-72,-40],[-71,-30],[-76,-14],[-81,-5],[-77,8]],d=[[-10,36],[0,42],[10,45],[20,40],[30,31],[35,32],[45,25],[55,25],[60,22],[70,20],[80,10],[90,22],[105,20],[108,12],[105,3],[115,5],[120,25],[122,38],[130,43],[140,55],[160,56],[175,65],[180,70],[-170,66],[180,70],[140,75],[100,77],[60,70],[30,71],[15,68],[5,60],[-5,58],[-9,43],[-10,36]],u=[[-17,32],[10,37],[25,32],[32,31],[43,12],[51,12],[40,-5],[35,-20],[28,-33],[18,-34],[12,-18],[9,4],[-15,12],[-17,21],[-17,32]],p=[[114,-22],[125,-15],[135,-12],[142,-11],[153,-28],[150,-37],[138,-35],[130,-32],[115,-34],[114,-22]],g=[[-55,60],[-40,60],[-20,70],[-20,80],[-45,83],[-60,76],[-55,60]],_=[[-180,-75],[180,-75],[180,-90],[-180,-90]];l(c,"#24482b","#485732"),l(h,"#1c4a22","#285526"),l(d,"#294c2b","#475330"),l(u,"#4f4b2a","#6a5a2e"),l(p,"#5a462b","#6d4f2b"),l(g,"#e2ecf5","#d0e0ed"),l(_,"#f0f5fc","#dbe7f5"),e.strokeStyle="rgba(60, 160, 220, 0.15)",e.lineWidth=1;for(let x=-80;x<=80;x+=20){const I=(90-x)/180*1024;e.beginPath(),e.moveTo(0,I),e.lineTo(2048,I),e.stroke()}for(let x=-180;x<=180;x+=30){const I=(x+180)/360*2048;e.beginPath(),e.moveTo(I,0),e.lineTo(I,1024),e.stroke()}const m=[{lon:-74,lat:40.7,r:24,count:80},{lon:-87.6,lat:41.8,r:20,count:60},{lon:-118.2,lat:34,r:25,count:70},{lon:-122.4,lat:37.7,r:18,count:50},{lon:-95.3,lat:29.7,r:18,count:45},{lon:2.3,lat:48.8,r:26,count:90},{lon:-.1,lat:51.5,r:25,count:80},{lon:13.4,lat:52.5,r:22,count:70},{lon:12.5,lat:41.9,r:18,count:50},{lon:37.6,lat:55.7,r:28,count:95},{lon:116.4,lat:39.9,r:30,count:110},{lon:121.4,lat:31.2,r:30,count:120},{lon:113.2,lat:23.1,r:28,count:100},{lon:139.7,lat:35.7,r:32,count:130},{lon:126.9,lat:37.5,r:22,count:80},{lon:77.2,lat:28.6,r:26,count:90},{lon:72.8,lat:19,r:24,count:80},{lon:55.3,lat:25.2,r:18,count:50},{lon:51.4,lat:35.7,r:20,count:60},{lon:-46.6,lat:-23.5,r:22,count:70},{lon:-58.4,lat:-34.6,r:18,count:50},{lon:151.2,lat:-33.8,r:16,count:45}];for(const x of m){const I=o(x.lon,x.lat);for(let P=0;P<x.count;P++){const R=Math.random()*Math.PI*2,L=Math.pow(Math.random(),1.5)*x.r,S=I.x+Math.cos(R)*L,y=I.y+Math.sin(R)*L,C=Math.random(),z=.8+Math.random()*1.6;i.fillStyle=C>.6?"#ffe49e":C>.3?"#f6b244":"#e67324",i.shadowColor="#ffbb44",i.shadowBlur=3,i.beginPath(),i.arc(S,y,z,0,Math.PI*2),i.fill()}}const f=new On(r),E=new On(t),T=new On(n);return{dayTexture:f,nightTexture:E,specTexture:T}}function Ig(r){const e=`
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,t=`
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vec3 viewDir = normalize(-vPosition);
      float intensity = pow(0.7 - dot(vNormal, viewDir), 2.8);
      vec3 atmosphereColor = vec3(0.25, 0.65, 1.0);
      gl_FragColor = vec4(atmosphereColor, intensity * 0.95);
    }
  `,i=new hi(r*1.04,64,64),n=new Jt({vertexShader:e,fragmentShader:t,blending:li,side:Tt,transparent:!0,depthWrite:!1});return new et(i,n)}function Og(r){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d");t.fillStyle="#000000",t.fillRect(0,0,1024,512);for(let s=0;s<450;s++){const o=Math.random()*1024,l=80+Math.random()*352,c=20+Math.random()*55,h=t.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,"rgba(255, 255, 255, 0.45)"),h.addColorStop(.5,"rgba(255, 255, 255, 0.2)"),h.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=h,t.beginPath(),t.arc(o,l,c,0,Math.PI*2),t.fill()}const i=new On(e);i.wrapS=gr,i.wrapT=Yt;const n=new hi(r*1.008,64,64),a=new dr({map:i,transparent:!0,opacity:.42,blending:Fi,depthWrite:!1});return new et(n,a)}class Fg{constructor(e){this.scene=e,this.radius=Lt,this.group=new Dt,this.scene.add(this.group);const{dayTexture:t,nightTexture:i,specTexture:n}=Ug();this.dayTexture=t,this.nightTexture=i,this.specTexture=n;const a=new hi(this.radius,128,128);this.earthMaterial=new Jt({uniforms:{dayTexture:{value:this.dayTexture},nightTexture:{value:this.nightTexture},specTexture:{value:this.specTexture},sunDirection:{value:new w(1,.3,.8).normalize()}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        void main() {
          vUv = uv;
          vNormal = normalize(mat3(modelMatrix) * normal);
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPosition, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D dayTexture;
        uniform sampler2D nightTexture;
        uniform sampler2D specTexture;
        uniform vec3 sunDirection;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        void main() {
          vec3 normal = normalize(vNormal);
          float sunDot = dot(normal, sunDirection);

          // Day / Night transition curve
          float dayFactor = smoothstep(-0.2, 0.25, sunDot);

          vec4 dayColor = texture2D(dayTexture, vUv);
          vec4 nightColor = texture2D(nightTexture, vUv);
          vec4 specColor = texture2D(specTexture, vUv);

          // Add ambient sunlit tone
          vec3 sunlitDay = dayColor.rgb * (max(0.12, sunDot) * 1.15 + 0.1);

          // Specular reflection for water
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          vec3 reflectDir = reflect(-sunDirection, normal);
          float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0) * specColor.r * 0.85;

          vec3 finalColor = mix(nightColor.rgb * 1.5, sunlitDay + vec3(spec * 0.8, spec * 0.9, spec), dayFactor);

          // Subtle atmospheric rim
          float rim = 1.0 - max(dot(viewDir, normal), 0.0);
          finalColor += vec3(0.1, 0.3, 0.6) * pow(rim, 3.5) * max(0.2, dayFactor);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `}),this.earthMesh=new et(a,this.earthMaterial),this.group.add(this.earthMesh),this.atmosphereMesh=Ig(this.radius),this.group.add(this.atmosphereMesh),this.cloudMesh=Og(this.radius),this.group.add(this.cloudMesh),this.pinsGroup=new Dt,this.group.add(this.pinsGroup),this.launchPin=this.createPin("#00f0ff","LAUNCH"),this.targetPin=this.createPin("#ff3333","TARGET"),this.pinsGroup.add(this.launchPin.mesh),this.pinsGroup.add(this.targetPin.mesh),this.loadHighResTextures()}loadHighResTextures(){const e=new hg;e.load("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",n=>{n.wrapS=gr,n.wrapT=Yt,this.earthMaterial.uniforms.dayTexture.value=n},void 0,()=>{}),e.load("https://unpkg.com/three-globe/example/img/earth-night.jpg",n=>{n.wrapS=gr,n.wrapT=Yt,this.earthMaterial.uniforms.nightTexture.value=n},void 0,()=>{})}createPin(e,t){const i=new Dt,n=new Yn(.8,1.4,32),a=new Vt({color:e,side:It,transparent:!0,opacity:.85}),s=new et(n,a);i.add(s);const o=new yr(.12,.12,5,8);o.translate(0,2.5,0);const l=new Vt({color:e,transparent:!0,opacity:.9}),c=new et(o,l);i.add(c);const h=new hi(.7,16,16);h.translate(0,5,0);const d=new Vt({color:e}),u=new et(h,d);return i.add(u),{mesh:i,ringMat:a,color:e,label:t}}updatePinPosition(e,t,i){const n=e==="launch"?this.launchPin:this.targetPin,a=jr(t,i,this.radius),s=new w(a.x,a.y,a.z);n.mesh.position.copy(s);const o=s.clone().normalize(),l=new w(0,1,0),c=new Xt().setFromUnitVectors(l,o);n.mesh.quaternion.copy(c),n.mesh.children[0].rotation.x=Math.PI/2}update(e){this.cloudMesh&&(this.cloudMesh.rotation.y+=e*.008);const t=performance.now()*.004;if(this.launchPin&&this.launchPin.ringMat){this.launchPin.ringMat.opacity=.5+.4*Math.sin(t);const i=1+.25*Math.sin(t);this.launchPin.mesh.children[0].scale.set(i,i,1)}if(this.targetPin&&this.targetPin.ringMat){this.targetPin.ringMat.opacity=.6+.4*Math.cos(t*1.5);const i=1+.3*Math.cos(t*1.5);this.targetPin.mesh.children[0].scale.set(i,i,1)}}}class zg{constructor(e){this.scene=e,this.group=new Dt,this.scene.add(this.group),this.progress=0,this.isFlying=!1,this.isDetonated=!1,this.speedMach=23,this.speedMultiplier=1,this.onDetonateCallback=null,this.launchLatLon={lat:48.41,lon:-101.35},this.targetLatLon={lat:55.75,lon:37.62},this.missileMesh=this.createMissileModel(),this.missileMesh.visible=!1,this.group.add(this.missileMesh),this.thrusterLight=new nc(16755234,3,20),this.missileMesh.add(this.thrusterLight),this.trajectoryCurveMesh=null,this.trailMaxPoints=120,this.trailPoints=[],this.trailLine=this.createTrailLine(),this.group.add(this.trailLine),this.recalculateTrajectory()}createMissileModel(){const e=new Dt,t=new yr(.35,.45,3.2,16),i=new dr({color:14540253,metalness:.6,roughness:.3}),n=new et(t,i);e.add(n);const a=new kn(.35,1.2,16);a.translate(0,2.2,0);const s=new dr({color:2236962,metalness:.8,roughness:.2}),o=new et(a,s);e.add(o);const l=new yr(.36,.36,.4,16);l.translate(0,1.2,0);const c=new Vt({color:16724736}),h=new et(l,c);e.add(h);const d=new Ql;d.moveTo(0,0),d.lineTo(.7,-.6),d.lineTo(.7,-1.2),d.lineTo(0,-1),d.closePath();const u={depth:.05,bevelEnabled:!1},p=new Fs(d,u),g=new dr({color:3355443});for(let f=0;f<4;f++){const E=new et(p,g);E.rotation.y=f*Math.PI/2,E.position.y=-.6,e.add(E)}const _=new kn(.35,1.8,12);_.translate(0,-2.5,0),_.rotateX(Math.PI);const m=new Vt({color:16755200,transparent:!0,opacity:.9,blending:li});return this.flameMesh=new et(_,m),e.add(this.flameMesh),e.scale.set(.7,.7,.7),e}createTrailLine(){const e=new ut,t=new Float32Array(this.trailMaxPoints*3),i=new Float32Array(this.trailMaxPoints*3);e.setAttribute("position",new wt(t,3)),e.setAttribute("color",new wt(i,3));const n=new jn({vertexColors:!0,transparent:!0,opacity:.85,blending:li,linewidth:2});return new vs(e,n)}setCoordinates(e,t){this.launchLatLon={...e},this.targetLatLon={...t},this.recalculateTrajectory()}recalculateTrajectory(){const e=jr(this.launchLatLon.lat,this.launchLatLon.lon,Lt),t=jr(this.targetLatLon.lat,this.targetLatLon.lon,Lt);this.vStart=new w(e.x,e.y,e.z),this.vEnd=new w(t.x,t.y,t.z),this.distanceKm=Ng(this.launchLatLon.lat,this.launchLatLon.lon,this.targetLatLon.lat,this.targetLatLon.lon);const i=Math.min(1450,Math.max(120,this.distanceKm*.12));this.apogeeUnits=i*Ur;const n=new w().crossVectors(this.vStart,this.vEnd).normalize();n.lengthSq()<.001&&n.set(0,1,0),this.flightAxis=n,this.totalAngle=this.vStart.angleTo(this.vEnd),this.updateTrajectoryCurveVisualization(),this.resetFlight()}updateTrajectoryCurveVisualization(){this.trajectoryCurveMesh&&(this.group.remove(this.trajectoryCurveMesh),this.trajectoryCurveMesh.geometry.dispose(),this.trajectoryCurveMesh.material.dispose());const e=100,t=[];for(let a=0;a<=e;a++){const s=a/e;t.push(this.getPositionAt(s))}const i=new ut().setFromPoints(t),n=new sg({color:61695,dashSize:1.5,gapSize:.8,transparent:!0,opacity:.65,blending:li});this.trajectoryCurveMesh=new vs(i,n),this.trajectoryCurveMesh.computeLineDistances(),this.group.add(this.trajectoryCurveMesh)}getPositionAt(e){const t=new Xt().setFromAxisAngle(this.flightAxis,this.totalAngle*e),i=this.vStart.clone().applyQuaternion(t),n=4*e*(1-e),a=this.apogeeUnits*n,s=Lt+a;return i.normalize().multiplyScalar(s)}launch(e){this.progress=0,this.isFlying=!0,this.isDetonated=!1,this.missileMesh.visible=!0,this.trailPoints=[],this.onDetonateCallback=e}resetFlight(){this.progress=0,this.isFlying=!1,this.isDetonated=!1,this.missileMesh.visible=!1,this.trailPoints=[],this.updateTrail()}setFlyProgress(e){this.progress=Math.max(0,Math.min(1,e));const t=this.getPositionAt(this.progress);this.missileMesh.position.copy(t),this.orientMissile(this.progress)}orientMissile(e){const t=Math.min(1,e+.005),i=this.getPositionAt(e),n=this.getPositionAt(t),a=new w().subVectors(n,i).normalize();if(a.lengthSq()>1e-4){const s=new w(0,1,0),o=new Xt().setFromUnitVectors(s,a);this.missileMesh.quaternion.copy(o)}}updateTrail(){const e=this.trailLine.geometry.attributes.position,t=this.trailLine.geometry.attributes.color,i=this.trailPoints.length;for(let n=0;n<this.trailMaxPoints;n++)if(n<i){const a=this.trailPoints[i-1-n];e.setXYZ(n,a.x,a.y,a.z);const s=1-n/this.trailMaxPoints;t.setXYZ(n,1,.4+.6*s,.2+.8*s)}else{const a=i>0?this.trailPoints[0]:this.vStart;e.setXYZ(n,a.x,a.y,a.z),t.setXYZ(n,0,0,0)}e.needsUpdate=!0,t.needsUpdate=!0,this.trailLine.geometry.setDrawRange(0,i)}update(e){if(!this.isFlying)return;const t=12*(Math.max(1500,this.distanceKm)/1e4),i=this.speedMach/23*this.speedMultiplier,n=1/Math.max(1,t)*i;if(this.progress+=n*e,this.flameMesh){const s=.8+.4*Math.sin(performance.now()*.05);this.flameMesh.scale.set(s,1+s*.3,s),this.thrusterLight.intensity=2.5*s}if(this.progress>=1){this.progress=1,this.isFlying=!1,this.isDetonated=!0,this.missileMesh.visible=!1,this.missileMesh.position.copy(this.vEnd),this.onDetonateCallback&&this.onDetonateCallback(this.targetLatLon);return}const a=this.getPositionAt(this.progress);this.missileMesh.position.copy(a),this.orientMissile(this.progress),this.trailPoints.push(a.clone()),this.trailPoints.length>this.trailMaxPoints&&this.trailPoints.shift(),this.updateTrail()}}class Bg{constructor(e){this.scene=e,this.group=new Dt,this.scene.add(this.group),this.isActive=!1,this.elapsedTime=0,this.timeScale=1,this.effectsData=null,this.flashLight=new nc(16777215,0,500),this.group.add(this.flashLight),this.ringsGroup=new Dt,this.group.add(this.ringsGroup),this.zoneMeshes=[],this.fireballMesh=this.createFireballMesh(),this.group.add(this.fireballMesh),this.shockwaveMesh=this.createShockwaveMesh(),this.group.add(this.shockwaveMesh),this.mushroomGroup=new Dt,this.group.add(this.mushroomGroup),this.createMushroomCloudStructure()}createFireballMesh(){const e=new hi(1,32,32),t=new Vt({color:16777215,transparent:!0,opacity:.95,blending:li}),i=new et(e,t);return i.visible=!1,i}createShockwaveMesh(){const e=new Yn(.8,1.2,64),t=new Vt({color:8969727,side:It,transparent:!0,opacity:.8,blending:li,depthWrite:!1}),i=new et(e,t);return i.visible=!1,i}createMushroomCloudStructure(){this.stemSpheres=[];const e=12;for(let s=0;s<e;s++){const o=new hi(.5,16,16),l=new dr({color:2232581,roughness:.9,transparent:!0,opacity:.85}),c=new et(o,l);this.stemSpheres.push(c),this.mushroomGroup.add(c)}const t=new zs(1.2,.6,16,32),i=new dr({color:2823433,roughness:.85,transparent:!0,opacity:.85});this.cloudCap=new et(t,i),this.cloudCap.rotation.x=Math.PI/2,this.mushroomGroup.add(this.cloudCap);const n=new hi(.8,16,16),a=new Vt({color:16733440,transparent:!0,opacity:.8,blending:li});this.cloudCore=new et(n,a),this.mushroomGroup.add(this.cloudCore),this.mushroomGroup.visible=!1}createSphericalGroundCircle(e,t,i,n,a=.05){const s=new Dt,o=t/Gs,l=Lt+a,c=e.clone().normalize();let h=new w(0,1,0).cross(c);h.lengthSq()<.001&&(h=new w(1,0,0).cross(c)),h.normalize();const d=new w().crossVectors(c,h).normalize(),u=96,p=[],g=[];p.push(e.x*(l/Lt),e.y*(l/Lt),e.z*(l/Lt));const _=Math.cos(o),m=Math.sin(o);for(let L=0;L<=u;L++){const S=L/u*Math.PI*2,y=Math.cos(S),C=Math.sin(S),z=c.x*_+(h.x*y+d.x*C)*m,F=c.y*_+(h.y*y+d.y*C)*m,k=c.z*_+(h.z*y+d.z*C)*m,q=new w(z,F,k).normalize().multiplyScalar(l);p.push(q.x,q.y,q.z),g.push(q)}const f=[];for(let L=1;L<=u;L++)f.push(0,L,L+1);const E=new ut;E.setAttribute("position",new st(p,3)),E.setIndex(f),E.computeVertexNormals();const T=new Vt({color:i,transparent:!0,opacity:.22,side:It,depthWrite:!1}),x=new et(E,T);s.add(x);const I=new ut().setFromPoints(g),P=new jn({color:n,transparent:!0,opacity:.9,linewidth:2,depthWrite:!1}),R=new vs(I,P);return s.add(R),{group:s,diskMesh:x,borderLine:R,theta:o,u:h,v:d,normal:c}}detonate(e,t,i=!0){this.isActive=!0,this.elapsedTime=0,this.yieldKt=t,this.isAirburst=i,this.targetLatLon=e,this.effectsData=sc(t,i);const n=jr(e.lat,e.lon,Lt);this.epicenter=new w(n.x,n.y,n.z),this.normal=this.epicenter.clone().normalize(),this.flashLight.position.copy(this.epicenter.clone().add(this.normal.clone().multiplyScalar(2))),this.flashLight.intensity=150,this.flashLight.color.setHex(16777215),this.fireballMaxUnits=this.effectsData.zones[0].radiusKm*Ur,this.fireballMesh.position.copy(this.epicenter.clone().add(this.normal.clone().multiplyScalar(this.fireballMaxUnits*.7))),this.fireballMesh.scale.set(.1,.1,.1),this.fireballMesh.material.opacity=1,this.fireballMesh.material.color.setHex(16777215),this.fireballMesh.visible=!0,this.shockwaveMesh.position.copy(this.epicenter.clone().add(this.normal.clone().multiplyScalar(.2)));const a=new w(0,0,1);this.shockwaveMesh.quaternion.setFromUnitVectors(a,this.normal),this.shockwaveMesh.scale.set(.1,.1,.1),this.shockwaveMesh.visible=!0,this.shockwaveMaxKm=this.effectsData.zones[5].radiusKm*1.3,this.cloudHeightUnits=this.effectsData.mushroomCloud.heightKm*Ur,this.cloudCapUnits=this.effectsData.mushroomCloud.capDiameterKm/2*Ur,this.mushroomGroup.position.copy(this.epicenter);const s=new Xt().setFromUnitVectors(new w(0,1,0),this.normal);return this.mushroomGroup.quaternion.copy(s),this.mushroomGroup.visible=!0,this.clearBlastRings(),this.effectsData.zones.forEach((o,l)=>{const c=.04+l*.02,h=this.createSphericalGroundCircle(this.epicenter,o.radiusKm,o.color,o.borderColor,c);h.zone=o,h.group.scale.set(.001,.001,.001),this.ringsGroup.add(h.group),this.zoneMeshes.push(h)}),this.effectsData}clearBlastRings(){for(;this.ringsGroup.children.length>0;){const e=this.ringsGroup.children[0];this.ringsGroup.remove(e),e.traverse&&e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}this.zoneMeshes=[]}reset(){this.isActive=!1,this.elapsedTime=0,this.flashLight.intensity=0,this.fireballMesh.visible=!1,this.shockwaveMesh.visible=!1,this.mushroomGroup.visible=!1,this.clearBlastRings()}update(e){if(!this.isActive)return;this.elapsedTime+=e*this.timeScale;const t=this.elapsedTime;if(t<.1)this.flashLight.intensity=250,this.flashLight.color.setHex(16777215);else if(t<1.5){const n=1-(t-.1)/1.4;this.flashLight.intensity=250*Math.pow(n,2),this.flashLight.color.setHex(16768426)}else this.flashLight.intensity=Math.max(0,15*(1-(t-1.5)/5)),this.flashLight.color.setHex(16729088);if(t<6){const n=t<1.2?Math.pow(t/1.2,.6):1,a=Ll.lerp(.1,this.fireballMaxUnits,n);if(this.fireballMesh.scale.set(a,a,a),t<.6)this.fireballMesh.material.color.setHex(16777215),this.fireballMesh.material.opacity=.98;else if(t<2)this.fireballMesh.material.color.setHex(16763955),this.fireballMesh.material.opacity=.9;else if(t<4)this.fireballMesh.material.color.setHex(16733440),this.fireballMesh.material.opacity=.75;else{const s=1-(t-4)/2;this.fireballMesh.material.color.setHex(3346693),this.fireballMesh.material.opacity=s*.6}}else this.fireballMesh.visible=!1;if(t<4.5){const n=Math.pow(t/4.5,.7),a=this.shockwaveMaxKm*Ur*n;this.shockwaveMesh.scale.set(a,a,1),this.shockwaveMesh.material.opacity=(1-n)*.85}else this.shockwaveMesh.visible=!1;const i=t/4.5*this.shockwaveMaxKm;if(this.zoneMeshes.forEach(n=>{if(i>=n.zone.radiusKm*.7){const a=Math.min(1,n.group.scale.x+e*3*this.timeScale);n.group.scale.set(a,a,a)}}),t>.3){const n=Math.min(1,Math.pow((t-.3)/8,.7)),a=this.cloudHeightUnits*n,s=this.cloudCapUnits*n,o=this.stemSpheres.length;for(let c=0;c<o;c++){const h=(c+1)/o,d=a*h,u=Math.max(.2,s*.35*(1-.3*Math.sin(h*Math.PI)));this.stemSpheres[c].position.set(Math.sin(t*1.5+c)*.1*u,d,Math.cos(t*1.5+c)*.1*u),this.stemSpheres[c].scale.set(u,u*1.2,u)}this.cloudCap.position.y=a,this.cloudCap.scale.set(s,s,s*.6),this.cloudCap.rotation.z+=e*.2*this.timeScale,this.cloudCore.position.y=a;const l=s*.5;this.cloudCore.scale.set(l,l*.6,l),this.cloudCore.material.opacity=Math.max(0,.8*(1-t/10))}}}class Hg{constructor(){this.ctx=null,this.isMuted=!1}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted}playLaunch(){if(this.isMuted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;this.ctx.createOscillator();const t=this.ctx.createGain(),i=this.ctx.createBiquadFilter(),n=this.ctx.sampleRate*2.5,a=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=a.getChannelData(0);for(let l=0;l<n;l++)s[l]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=a,i.type="lowpass",i.frequency.setValueAtTime(150,e),i.frequency.exponentialRampToValueAtTime(1200,e+1.2),i.frequency.exponentialRampToValueAtTime(300,e+2.5),t.gain.setValueAtTime(.01,e),t.gain.linearRampToValueAtTime(.35,e+.5),t.gain.exponentialRampToValueAtTime(.001,e+2.5),o.connect(i),i.connect(t),t.connect(this.ctx.destination),o.start(e),o.stop(e+2.5)}playDetonation(){if(this.isMuted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(40,e+.3),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.35);const n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(95,e),n.frequency.exponentialRampToValueAtTime(25,e+3),a.gain.setValueAtTime(.01,e),a.gain.linearRampToValueAtTime(.65,e+.08),a.gain.exponentialRampToValueAtTime(.001,e+4.5),n.connect(a),a.connect(this.ctx.destination),n.start(e),n.stop(e+4.5);const s=this.ctx.sampleRate*4,o=this.ctx.createBuffer(1,s,this.ctx.sampleRate),l=o.getChannelData(0);for(let u=0;u<s;u++)l[u]=Math.random()*2-1;const c=this.ctx.createBufferSource();c.buffer=o;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(200,e),h.frequency.linearRampToValueAtTime(80,e+3.5);const d=this.ctx.createGain();d.gain.setValueAtTime(.4,e),d.gain.exponentialRampToValueAtTime(.001,e+4),c.connect(h),h.connect(d),d.connect(this.ctx.destination),c.start(e),c.stop(e+4)}}const Fn=new Hg;class kg{constructor(e){this.app=e,this.pickingMode=null,this.initDOM()}initDOM(){const e=document.getElementById("app-hud");e.innerHTML=`
      <!-- Top Navigation & Status -->
      <header class="hud-header">
        <div class="hud-brand">
          <div class="defcon-badge">DEFCON 1</div>
          <div>
            <h1>THERMONUCLEAR BALLISTIC SIMULATOR</h1>
            <span class="hud-sub">PHYSICALLY SCALED GLASSTONE-DOLAN & NUKEMAP EFFECT RADIUS ENGINE</span>
          </div>
        </div>

        <div class="hud-top-controls">
          <!-- Timescale -->
          <div class="timescale-group">
            <span class="ctrl-label">TIMESCALE</span>
            <div class="timescale-btns">
              <button class="ts-btn" data-ts="0.1">0.1×</button>
              <button class="ts-btn" data-ts="0.5">0.5×</button>
              <button class="ts-btn active" data-ts="1">1×</button>
              <button class="ts-btn" data-ts="5">5×</button>
              <button class="ts-btn" data-ts="20">20×</button>
              <button class="ts-btn" data-ts="50">50×</button>
              <button class="ts-btn pause-btn" id="btn-pause">⏸</button>
            </div>
          </div>

          <!-- Audio & Fullscreen -->
          <button id="btn-audio" class="hud-btn-icon" title="Toggle Audio">🔊</button>
          <button id="btn-help" class="hud-btn-icon" title="Toggle Manual">ℹ️</button>
        </div>
      </header>

      <!-- Main Tactical Layout -->
      <div class="hud-body">
        <!-- Left Panel: Launch & Missile Config -->
        <aside class="hud-panel left-panel">
          <div class="panel-header">
            <h2>MISSILE CONFIGURATION</h2>
            <span class="status-indicator ready" id="system-status">STATUS: STANDBY</span>
          </div>

          <div class="panel-section">
            <label class="input-label" for="preset-select">WEAPON SYSTEM / MISSILE PRESET</label>
            <select id="preset-select" class="hud-select"></select>
            <p class="preset-desc" id="preset-description"></p>
          </div>

          <div class="panel-section">
            <div class="slider-header">
              <label class="input-label" for="yield-slider">EXPLOSIVE YIELD</label>
              <span class="value-readout" id="yield-readout">475 kt (0.48 Mt)</span>
            </div>
            <input type="range" id="yield-slider" class="hud-range" min="1" max="50000" step="1" value="475">
            <div class="burst-type-switch">
              <button class="burst-btn active" id="burst-air">OPTIMAL AIRBURST</button>
              <button class="burst-btn" id="burst-surface">SURFACE BURST</button>
            </div>
          </div>

          <div class="panel-section">
            <div class="slider-header">
              <label class="input-label" for="speed-slider">MISSILE FLY RATE / VELOCITY</label>
              <span class="value-readout" id="speed-readout">Mach 23 (~28,175 km/h)</span>
            </div>
            <input type="range" id="speed-slider" class="hud-range" min="1" max="50" step="1" value="23">
          </div>

          <div class="panel-section coordinates-box">
            <div class="coord-block">
              <div class="coord-title">
                <span>🚀 LAUNCH SPOT</span>
                <button class="pick-btn" id="pick-launch-btn">🎯 Click on Globe</button>
              </div>
              <select id="launch-preset-select" class="hud-select mini-select"></select>
              <div class="coord-inputs">
                <input type="number" id="launch-lat" class="coord-input" step="0.01" placeholder="Lat">
                <input type="number" id="launch-lon" class="coord-input" step="0.01" placeholder="Lon">
              </div>
            </div>

            <div class="coord-block">
              <div class="coord-title">
                <span>🎯 DETONATION / TARGET</span>
                <button class="pick-btn" id="pick-target-btn">🎯 Click on Globe</button>
              </div>
              <select id="target-preset-select" class="hud-select mini-select"></select>
              <div class="coord-inputs">
                <input type="number" id="target-lat" class="coord-input" step="0.01" placeholder="Lat">
                <input type="number" id="target-lon" class="coord-input" step="0.01" placeholder="Lon">
              </div>
            </div>
          </div>

          <!-- Flight Telemetry -->
          <div class="panel-section telemetry-box">
            <div class="telemetry-row">
              <span>GREAT-CIRCLE DISTANCE:</span>
              <strong id="tele-distance">0 km</strong>
            </div>
            <div class="telemetry-row">
              <span>ESTIMATED FLIGHT TIME:</span>
              <strong id="tele-time">0m 0s</strong>
            </div>
            <div class="telemetry-row">
              <span>EXOATMOSPHERIC APOGEE:</span>
              <strong id="tele-apogee">0 km</strong>
            </div>
            <div class="flight-progress-bar">
              <div class="progress-fill" id="flight-progress-fill"></div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="panel-actions">
            <button class="action-btn launch-btn" id="btn-launch">⚡ LAUNCH MISSILE</button>
            <button class="action-btn detonate-btn" id="btn-instant-detonate">💥 INSTANT DETONATION</button>
            <button class="action-btn reset-btn" id="btn-reset">↺ RESET</button>
          </div>
        </aside>

        <!-- Right Panel: Blast Damage Inspector & Physics Radii -->
        <aside class="hud-panel right-panel">
          <div class="panel-header">
            <h2>EFFECTIVE DAMAGE RADIUS</h2>
            <span class="hud-tag">GLASSTONE & NUKEMAP</span>
          </div>

          <div class="damage-summary-card">
            <div class="summary-stat">
              <span class="stat-label">EXPLOSIVE ENERGY</span>
              <strong class="stat-value" id="summary-yield">475 Kilotons</strong>
            </div>
            <div class="summary-stat">
              <span class="stat-label">TOTAL THERMAL AREA</span>
              <strong class="stat-value" id="summary-thermal-area">0 km²</strong>
            </div>
            <div class="summary-stat">
              <span class="stat-label">MUSHROOM TOP</span>
              <strong class="stat-value" id="summary-cloud-height">0 km</strong>
            </div>
          </div>

          <!-- Damage Zones Table -->
          <div class="zones-table-container">
            <table class="zones-table" id="zones-table">
              <thead>
                <tr>
                  <th>ZONE</th>
                  <th>RADIUS</th>
                  <th>AREA</th>
                  <th>EFFECT</th>
                </tr>
              </thead>
              <tbody id="zones-table-body"></tbody>
            </table>
          </div>

          <!-- Selected Zone Detail Card -->
          <div class="zone-detail-card" id="zone-detail-card">
            <h4 id="detail-zone-name">Fireball Zone</h4>
            <div class="detail-metric" id="detail-zone-metric">Radius: 0.85 km</div>
            <p id="detail-zone-desc">Vaporization point. Interior reaches millions of degrees.</p>
          </div>
        </aside>
      </div>

      <!-- Bottom Floating Camera Bar -->
      <nav class="hud-bottom-bar">
        <span class="cam-label">CAMERA:</span>
        <button class="cam-btn active" data-cam="orbit">🌐 Free Orbit</button>
        <button class="cam-btn" data-cam="missile">🚀 Follow Missile</button>
        <button class="cam-btn" data-cam="target">🎯 Target View</button>
        <button class="cam-btn" data-cam="blast">💥 Blast Overview</button>
      </nav>

      <!-- Picking instructions banner (hidden by default) -->
      <div class="pick-banner" id="pick-banner">
        CLICK ANYWHERE ON THE GLOBE TO SET COORDINATES
        <button id="cancel-pick-btn" class="cancel-pick-btn">Cancel</button>
      </div>
    `,this.bindEvents(),this.populatePresets(),this.updateDamageTable()}bindEvents(){document.getElementById("preset-select").addEventListener("change",u=>{const p=La.find(g=>g.id===u.target.value);p&&this.applyMissilePreset(p)}),document.getElementById("yield-slider").addEventListener("input",u=>{const p=parseInt(u.target.value,10);this.app.currentYieldKt=p,this.updateYieldReadout(p),this.updateDamageTable(),this.app.detonation.isActive&&this.app.detonation.detonate(this.app.targetLatLon,this.app.currentYieldKt,this.app.isAirburst)});const e=document.getElementById("burst-air"),t=document.getElementById("burst-surface");e.addEventListener("click",()=>{e.classList.add("active"),t.classList.remove("active"),this.app.isAirburst=!0,this.updateDamageTable(),this.app.detonation.isActive&&this.app.detonation.detonate(this.app.targetLatLon,this.app.currentYieldKt,!0)}),t.addEventListener("click",()=>{t.classList.add("active"),e.classList.remove("active"),this.app.isAirburst=!1,this.updateDamageTable(),this.app.detonation.isActive&&this.app.detonation.detonate(this.app.targetLatLon,this.app.currentYieldKt,!1)}),document.getElementById("speed-slider").addEventListener("input",u=>{const p=parseInt(u.target.value,10);this.app.missileSystem.speedMach=p;const g=Math.round(p*1225);document.getElementById("speed-readout").textContent=`Mach ${p} (~${g.toLocaleString()} km/h)`,this.updateTelemetry()});const i=document.querySelectorAll(".ts-btn:not(.pause-btn)");i.forEach(u=>{u.addEventListener("click",()=>{i.forEach(g=>g.classList.remove("active")),u.classList.add("active");const p=parseFloat(u.dataset.ts);this.app.setTimescale(p),document.getElementById("btn-pause").textContent="⏸"})});const n=document.getElementById("btn-pause");n.addEventListener("click",()=>{const u=this.app.togglePause();n.textContent=u?"▶":"⏸",n.classList.toggle("active",u)});const a=document.getElementById("btn-audio");a.addEventListener("click",()=>{const u=Fn.toggleMute();a.textContent=u?"🔇":"🔊",a.classList.toggle("muted",u)}),document.getElementById("btn-launch").addEventListener("click",()=>{this.app.launchMissile()}),document.getElementById("btn-instant-detonate").addEventListener("click",()=>{this.app.instantDetonation()}),document.getElementById("btn-reset").addEventListener("click",()=>{this.app.resetSimulation()}),document.getElementById("pick-launch-btn").addEventListener("click",()=>{this.startGlobePicking("launch")}),document.getElementById("pick-target-btn").addEventListener("click",()=>{this.startGlobePicking("target")}),document.getElementById("cancel-pick-btn").addEventListener("click",()=>{this.stopGlobePicking()});const s=document.getElementById("launch-lat"),o=document.getElementById("launch-lon"),l=document.getElementById("target-lat"),c=document.getElementById("target-lon"),h=()=>{const u={lat:parseFloat(s.value)||0,lon:parseFloat(o.value)||0},p={lat:parseFloat(l.value)||0,lon:parseFloat(c.value)||0};this.app.setLaunchAndTarget(u,p),this.updateTelemetry()};s.addEventListener("change",h),o.addEventListener("change",h),l.addEventListener("change",h),c.addEventListener("change",h),document.getElementById("launch-preset-select").addEventListener("change",u=>{const p=Da.find(g=>g.name===u.target.value);p&&(s.value=p.lat.toFixed(2),o.value=p.lon.toFixed(2),h())}),document.getElementById("target-preset-select").addEventListener("change",u=>{const p=Da.find(g=>g.name===u.target.value);p&&(l.value=p.lat.toFixed(2),c.value=p.lon.toFixed(2),h())});const d=document.querySelectorAll(".cam-btn");d.forEach(u=>{u.addEventListener("click",()=>{d.forEach(p=>p.classList.remove("active")),u.classList.add("active"),this.app.setCameraMode(u.dataset.cam)})})}populatePresets(){const e=document.getElementById("preset-select");e.innerHTML=La.map(a=>`
      <option value="${a.id}">${a.name} (${a.country} - ${a.yieldKt>=1e3?a.yieldKt/1e3+" Mt":a.yieldKt+" kt"})</option>
    `).join("");const t=document.getElementById("launch-preset-select"),i=document.getElementById("target-preset-select"),n='<option value="">-- Choose Preset Location --</option>'+Da.map(a=>`<option value="${a.name}">${a.name}</option>`).join("");t.innerHTML=n,i.innerHTML=n,this.applyMissilePreset(La[0])}applyMissilePreset(e){document.getElementById("preset-select").value=e.id,document.getElementById("preset-description").textContent=`${e.type} | ${e.warheadName}. ${e.description}`;const t=document.getElementById("yield-slider");t.value=e.yieldKt,this.app.currentYieldKt=e.yieldKt,this.updateYieldReadout(e.yieldKt);const i=document.getElementById("speed-slider");i.value=e.speedMach,this.app.missileSystem.speedMach=e.speedMach;const n=Math.round(e.speedMach*1225);document.getElementById("speed-readout").textContent=`Mach ${e.speedMach} (~${n.toLocaleString()} km/h)`,document.getElementById("launch-lat").value=e.defaultLaunch.lat.toFixed(2),document.getElementById("launch-lon").value=e.defaultLaunch.lon.toFixed(2),document.getElementById("target-lat").value=e.defaultTarget.lat.toFixed(2),document.getElementById("target-lon").value=e.defaultTarget.lon.toFixed(2),this.app.setLaunchAndTarget(e.defaultLaunch,e.defaultTarget),this.updateTelemetry(),this.updateDamageTable()}updateYieldReadout(e){const t=document.getElementById("yield-readout");e>=1e3?t.textContent=`${e.toLocaleString()} kt (${(e/1e3).toFixed(2)} Megatons)`:t.textContent=`${e} Kilotons`}updateTelemetry(){const e=Math.round(this.app.missileSystem.distanceKm),t=Math.round(e*.621371);document.getElementById("tele-distance").textContent=`${e.toLocaleString()} km (${t.toLocaleString()} mi)`;const i=this.app.missileSystem.speedMach*1225/3600,n=Math.round(e/i),a=Math.floor(n/60),s=n%60;document.getElementById("tele-time").textContent=`~${a}m ${s}s (real) / ~12s (sim)`;const o=Math.round(this.app.missileSystem.apogeeUnits/(100/6371));document.getElementById("tele-apogee").textContent=`${o.toLocaleString()} km (Exoatmospheric)`}updateDamageTable(){const e=sc(this.app.currentYieldKt,this.app.isAirburst),t=document.getElementById("zones-table-body");document.getElementById("summary-yield").textContent=e.yieldKt>=1e3?`${(e.yieldKt/1e3).toFixed(2)} Megatons`:`${e.yieldKt} Kilotons`;const i=e.zones.find(a=>a.id==="thermal");i&&(document.getElementById("summary-thermal-area").textContent=`${Math.round(i.areaSqKm).toLocaleString()} km²`),document.getElementById("summary-cloud-height").textContent=`${e.mushroomCloud.heightKm.toFixed(1)} km (${e.mushroomCloud.heightMiles.toFixed(1)} mi)`,t.innerHTML=e.zones.map((a,s)=>`
      <tr class="zone-row" data-zone-idx="${s}">
        <td>
          <span class="zone-color-dot" style="background:${a.color}; box-shadow: 0 0 8px ${a.color}"></span>
          <strong>${a.name}</strong>
        </td>
        <td>${a.radiusKm<1?(a.radiusKm*1e3).toFixed(0)+" m":a.radiusKm.toFixed(2)+" km"}</td>
        <td>${Math.round(a.areaSqKm).toLocaleString()} km²</td>
        <td><span class="zone-tag">${a.overpressurePsi}</span></td>
      </tr>
    `).join("");const n=t.querySelectorAll(".zone-row");n.forEach(a=>{a.addEventListener("click",()=>{n.forEach(o=>o.classList.remove("active")),a.classList.add("active");const s=parseInt(a.dataset.zoneIdx,10);this.showZoneDetail(e.zones[s])})}),e.zones.length>0&&this.showZoneDetail(e.zones[0])}showZoneDetail(e){document.getElementById("detail-zone-name").textContent=e.name,document.getElementById("detail-zone-name").style.color=e.color,document.getElementById("detail-zone-metric").textContent=`Radius: ${e.radiusKm.toFixed(2)} km (${e.radiusMiles.toFixed(2)} miles) | Area: ${Math.round(e.areaSqKm).toLocaleString()} km²`,document.getElementById("detail-zone-desc").textContent=`${e.description} (Pressure: ${e.overpressurePsi})`}startGlobePicking(e){this.pickingMode=e;const t=document.getElementById("pick-banner");t.classList.add("active"),t.innerHTML=`CLICK ON THE GLOBE TO SET <strong>${e.toUpperCase()}</strong> LOCATION <button id="cancel-pick-btn" class="cancel-pick-btn">Cancel</button>`,document.getElementById("cancel-pick-btn").addEventListener("click",()=>this.stopGlobePicking())}stopGlobePicking(){this.pickingMode=null,document.getElementById("pick-banner").classList.remove("active")}onGlobeClicked(e){this.pickingMode&&(this.pickingMode==="launch"?(document.getElementById("launch-lat").value=e.lat.toFixed(2),document.getElementById("launch-lon").value=e.lon.toFixed(2),this.app.setLaunchAndTarget(e,this.app.targetLatLon)):this.pickingMode==="target"&&(document.getElementById("target-lat").value=e.lat.toFixed(2),document.getElementById("target-lon").value=e.lon.toFixed(2),this.app.setLaunchAndTarget(this.app.launchLatLon,e)),this.updateTelemetry(),this.stopGlobePicking())}setStatus(e,t="ready"){const i=document.getElementById("system-status");i.textContent=`STATUS: ${e}`,i.className=`status-indicator ${t}`}updateProgress(e){const t=document.getElementById("flight-progress-fill");t&&(t.style.width=`${(e*100).toFixed(1)}%`)}}class Gg{constructor(){this.timescale=1,this.isPaused=!1,this.cameraMode="orbit",this.currentYieldKt=475,this.isAirburst=!0,this.launchLatLon={lat:48.41,lon:-101.35},this.targetLatLon={lat:55.75,lon:37.62},this.initThree(),this.initStarfield(),this.initSceneObjects(),this.initInteraction(),this.hud=new kg(this),this.setLaunchAndTarget(this.launchLatLon,this.targetLatLon),this.clock=new mg,this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}initThree(){const e=document.getElementById("canvas-container");this.scene=new wm,this.camera=new Pt(45,window.innerWidth/window.innerHeight,.5,2e3),this.camera.position.set(0,80,260),this.renderer=new Em({antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=_l,this.renderer.toneMappingExposure=1.1,e.appendChild(this.renderer.domElement),this.controls=new xg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=Lt+5,this.controls.maxDistance=600,this.controls.rotateSpeed=.8;const t=new fg(2241348,.6);this.scene.add(t),this.sunLight=new pg(16777215,2),this.sunLight.position.set(200,60,160),this.scene.add(this.sunLight),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}initStarfield(){const e=new ut,t=new Float32Array(3e3*3),i=new Float32Array(3e3*3);for(let a=0;a<3e3;a++){const s=800+Math.random()*400,o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);t[a*3]=s*Math.sin(l)*Math.cos(o),t[a*3+1]=s*Math.sin(l)*Math.sin(o),t[a*3+2]=s*Math.cos(l);const c=Math.random();c>.8?(i[a*3]=.7,i[a*3+1]=.9,i[a*3+2]=1):c>.6?(i[a*3]=1,i[a*3+1]=.8,i[a*3+2]=.6):(i[a*3]=1,i[a*3+1]=1,i[a*3+2]=1)}e.setAttribute("position",new wt(t,3)),e.setAttribute("color",new wt(i,3));const n=new Yl({size:1.5,vertexColors:!0,transparent:!0,opacity:.85});this.starfield=new Am(e,n),this.scene.add(this.starfield)}initSceneObjects(){this.earth=new Fg(this.scene),this.missileSystem=new zg(this.scene),this.detonation=new Bg(this.scene)}initInteraction(){this.raycaster=new gg,this.mouse=new re,this.renderer.domElement.addEventListener("click",e=>{if(!this.hud.pickingMode)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObject(this.earth.earthMesh);if(t.length>0){const i=t[0].point,n=Dg(i);this.hud.onGlobeClicked(n)}})}setLaunchAndTarget(e,t){this.launchLatLon={...e},this.targetLatLon={...t},this.earth.updatePinPosition("launch",e.lat,e.lon),this.earth.updatePinPosition("target",t.lat,t.lon),this.missileSystem.setCoordinates(e,t)}setTimescale(e){this.timescale=e,this.detonation.timeScale=e,this.missileSystem.speedMultiplier=e}togglePause(){return this.isPaused=!this.isPaused,this.isPaused}launchMissile(){this.detonation.reset(),this.hud.setStatus("MISSILE IN FLIGHT","flight"),Fn.playLaunch(),this.missileSystem.launch(e=>{this.onMissileImpact(e)}),this.cameraMode}onMissileImpact(e){this.hud.setStatus("NUCLEAR DETONATION","detonated"),Fn.playDetonation(),this.detonation.detonate(e,this.currentYieldKt,this.isAirburst),this.hud.updateDamageTable()}instantDetonation(){this.missileSystem.resetFlight(),this.hud.setStatus("IMMEDIATE DETONATION","detonated"),Fn.playDetonation(),this.detonation.detonate(this.targetLatLon,this.currentYieldKt,this.isAirburst),this.hud.updateDamageTable()}resetSimulation(){this.missileSystem.resetFlight(),this.detonation.reset(),this.hud.setStatus("STANDBY","ready"),this.hud.updateProgress(0)}setCameraMode(e){if(this.cameraMode=e,e==="orbit")this.controls.enabled=!0,this.controls.target.set(0,0,0);else if(e==="target"||e==="blast"){this.controls.enabled=!0;const t=jr(this.targetLatLon.lat,this.targetLatLon.lon,Lt),i=new w(t.x,t.y,t.z).normalize(),n=e==="blast"?60:35,a=i.clone().multiplyScalar(Lt+n);this.camera.position.copy(a),this.controls.target.set(t.x,t.y,t.z)}}updateCamera(){if(this.cameraMode==="missile"&&this.missileSystem.isFlying){this.controls.enabled=!1;const e=this.missileSystem.missileMesh.position,t=e.clone().normalize(),i=this.missileSystem.getPositionAt(Math.min(1,this.missileSystem.progress+.02)).clone().sub(e).normalize().clone().multiplyScalar(-15).add(t.clone().multiplyScalar(10)),n=e.clone().add(i);this.camera.position.lerp(n,.1),this.camera.lookAt(e)}}animate(){requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.1)*(this.isPaused?0:this.timescale);this.earth.update(e),this.missileSystem.update(e),this.missileSystem.isFlying&&this.hud.updateProgress(this.missileSystem.progress),this.detonation.update(e),this.updateCamera(),this.controls.enabled&&this.controls.update(),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{window.app=new Gg});
