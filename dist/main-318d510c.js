function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "html:root {\n  --body-font: \"Roboto Condensed\", sans-serif;\n  --header-font: \"Rubik Dirt\", cursive;\n  --root-font-size: 22px;\n  --layout-left-padding: 20px;\n  --taproot-header-button-stroke-width: 7px;\n  --primary-hue: 195;\n  --secondary-hue: calc(var(--primary-hue) + 180);\n  --primary-saturation: 70%;\n  --nav-hue: var(--primary-hue);\n  --color-primary-darkest: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    20%\n  );\n  --color-primary-dark: hsl(var(--primary-hue), var(--primary-saturation), 40%);\n  --color-primary: hsl(var(--primary-hue), var(--primary-saturation), 50%);\n  --color-primary-light: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    60%\n  );\n  --color-primary-lightest: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    80%\n  );\n\n  --color-secondary-darkest: hsl(\n    var(--secondary-hue),\n    var(--primary-saturation),\n    20%\n  );\n  --color-secondary-dark: hsl(\n    var(--secondary-hue),\n    var(--primary-saturation),\n    40%\n  );\n  --color-secondary: hsl(var(--secondary-hue), var(--primary-saturation), 50%);\n  --color-secondary-light: hsl(\n    var(--secondary-hue),\n    var(--primary-saturation),\n    60%\n  );\n  --color-secondary-lightest: hsl(\n    var(--secondary-hue),\n    var(--primary-saturation),\n    80%\n  );\n}\n";
styleInject(css_248z$1);

var css_248z = "@charset \"UTF-8\";\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: var(--body-font);\n  font-size: var(--root-font-size);\n  color: var(--color-primary-darkest);\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n}\n\nsection.colors {\n  display: grid;\n  grid-template-columns: auto auto auto auto auto;\n}\nsection.colors div {\n  height: 50px;\n}\nsection.colors div:nth-child(1) {\n  background-color: var(--color-primary-darkest);\n}\nsection.colors div:nth-child(2) {\n  background-color: var(--color-primary-dark);\n}\nsection.colors div:nth-child(3) {\n  background-color: var(--color-primary);\n}\nsection.colors div:nth-child(4) {\n  background-color: var(--color-primary-light);\n}\nsection.colors div:nth-child(5) {\n  background-color: var(--color-primary-lightest);\n}\nsection.colors div:nth-child(6) {\n  background-color: var(--color-secondary-darkest);\n}\nsection.colors div:nth-child(7) {\n  background-color: var(--color-secondary-dark);\n}\nsection.colors div:nth-child(8) {\n  background-color: var(--color-secondary);\n}\nsection.colors div:nth-child(9) {\n  background-color: var(--color-secondary-light);\n}\nsection.colors div:nth-child(10) {\n  background-color: var(--color-secondary-lightest);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  color: var(--color-secondary-dark);\n  font-family: var(--header-font);\n  font-weight: lighter;\n}\n\na {\n  text-decoration: none;\n}\n\nsection.nav-links {\n  display: grid;\n  justify-items: right;\n  padding: 100px 20px;\n}\nsection.nav-links a {\n  font-family: var(--header-font);\n  font-size: 1.3em;\n  color: var(--color-secondary-light);\n  text-shadow: 1px 1px 0 var(--color-secondary-dark);\n  text-decoration: none;\n}\nsection.nav-links a:hover {\n  color: var(--color-secondary);\n  text-shadow: 2px 2px 0 var(--color-secondary-darkest);\n}\n\ndiv.layout {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}\ndiv.layout a.header-title {\n  display: inline-block;\n  text-decoration: none;\n}\ndiv.layout a.header-title h1 {\n  color: var(--color-secondary-dark);\n  margin: 0;\n  font-size: 1.75em;\n  line-height: var(--taproot-header-height);\n  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 500ms;\n}\ndiv.layout a.header-title:hover > h1 {\n  color: var(--color-secondary-darkest);\n}\ndiv.layout > main {\n  grid-row: 2;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 660px;\n}\ndiv.layout > main > p a,\ndiv.layout > main ul > li a,\ndiv.layout > main ol > li a,\ndiv.layout > main > h1 a,\ndiv.layout > main > h2 a,\ndiv.layout > main > h3 a,\ndiv.layout > main > h4 a,\ndiv.layout > main > h5 a {\n  font-weight: bold;\n  text-decoration: underline;\n  color: var(--color-secondary-medium);\n  transition: all ease-in;\n}\ndiv.layout > main > p a.header-anchor,\ndiv.layout > main ul > li a.header-anchor,\ndiv.layout > main ol > li a.header-anchor,\ndiv.layout > main > h1 a.header-anchor,\ndiv.layout > main > h2 a.header-anchor,\ndiv.layout > main > h3 a.header-anchor,\ndiv.layout > main > h4 a.header-anchor,\ndiv.layout > main > h5 a.header-anchor {\n  position: absolute;\n  left: -0.5em;\n  display: none;\n}\ndiv.layout > main > p a:hover,\ndiv.layout > main ul > li a:hover,\ndiv.layout > main ol > li a:hover,\ndiv.layout > main > h1 a:hover,\ndiv.layout > main > h2 a:hover,\ndiv.layout > main > h3 a:hover,\ndiv.layout > main > h4 a:hover,\ndiv.layout > main > h5 a:hover {\n  text-decoration: none;\n  color: var(--color-secondary-light);\n}\ndiv.layout > main > p:hover a.header-anchor,\ndiv.layout > main ul > li:hover a.header-anchor,\ndiv.layout > main ol > li:hover a.header-anchor,\ndiv.layout > main > h1:hover a.header-anchor,\ndiv.layout > main > h2:hover a.header-anchor,\ndiv.layout > main > h3:hover a.header-anchor,\ndiv.layout > main > h4:hover a.header-anchor,\ndiv.layout > main > h5:hover a.header-anchor {\n  display: inline;\n}\ndiv.layout > main > p,\ndiv.layout > main > h1,\ndiv.layout > main > h2,\ndiv.layout > main > h3,\ndiv.layout > main > h4,\ndiv.layout > main > h5,\ndiv.layout > main ul,\ndiv.layout > main ol {\n  padding: 0 15px;\n  position: relative;\n  text-rendering: optimizeLegibility;\n}\ndiv.layout > main > p,\ndiv.layout > main > h1,\ndiv.layout > main > h2,\ndiv.layout > main > h3,\ndiv.layout > main > h4,\ndiv.layout > main > h5 {\n  margin: 1.618em 0 0;\n}\ndiv.layout > main > h1:first-child {\n  margin: 15px 0 0;\n}\ndiv.layout > main ul,\ndiv.layout > main ol {\n  padding-left: 42px;\n}\ndiv.layout > main > blockquote {\n  font-size: 1.2em;\n  display: grid;\n  grid-template-columns: 1em auto 1em;\n  grid-template-rows: 1em auto 1em;\n  margin: 0;\n}\ndiv.layout > main > blockquote p {\n  grid-column: 2;\n  grid-row: 2;\n  display: block;\n  background-color: var(--color-secondary-light);\n  color: var(--color-primary);\n  z-index: 1;\n  margin: 0;\n  padding: 1em;\n  border-radius: 0.25em;\n  border: 2px dashed var(--color-secondary-medium);\n  font-weight: bold;\n  font-style: italic;\n}\ndiv.layout > main > blockquote::before, div.layout > main > blockquote::after {\n  font-size: 5em;\n  color: var(--color-primary);\n  z-index: 2;\n}\ndiv.layout > main > blockquote::before {\n  content: \"“\";\n  grid-column: 1;\n  grid-row: 1;\n  line-height: 1em;\n}\ndiv.layout > main > blockquote::after {\n  content: \"”\";\n  grid-column: 3;\n  grid-row: 3;\n  line-height: 0.25em;\n  justify-self: end;\n}\ndiv.layout > main > table {\n  border: 1px solid var(--color-primary);\n  margin: 15px;\n  border-collapse: collapse;\n}\ndiv.layout > main > table thead {\n  border-bottom: 1px solid var(--color-primary);\n}\ndiv.layout > main > table thead th {\n  border-right: 1px solid var(--color-primary);\n  padding: 5px;\n}\ndiv.layout > main > table tr {\n  border-bottom: 1px dotted var(--color-primary);\n}\ndiv.layout > main > table tr:last-child {\n  border-bottom: none;\n}\ndiv.layout > main > table td {\n  border-right: 1px dotted var(--color-primary);\n  vertical-align: top;\n  padding: 5px;\n}\ndiv.layout > main > table td:last-child {\n  border-right: none;\n}\ndiv.layout > footer {\n  background-color: var(--color-secondary-lightest);\n  border-top: 2px solid var(--color-secondary);\n  border-bottom: 3px solid var(--color-primary-dark);\n  text-align: center;\n  font-size: 0.8em;\n}\n\nbody.menu-open {\n  overflow: hidden;\n}";
styleInject(css_248z);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t));}return t}toString(){return this.cssText}}const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return (t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const l=window,d=l.trustedTypes,c=d?d.emptyScript:"",u=l.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:p};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s));})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s);}}static getPropertyDescriptor(t,e,i){return {get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t));}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t));}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return ((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s);}));})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}));}attributeChangedCallback(t,e,i){this._$AK(t,i);}_$EO(t,e,i=f){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null;}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:v;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null;}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek();}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i);}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(h=l.reactiveElementVersions)&&void 0!==h?h:l.reactiveElementVersions=[]).push("1.4.0");const y=window,C=y.trustedTypes,g=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,w="?"+k,x=`<${w}>`,$=document,S=(t="")=>$.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,O=/>/g,U=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),z=/'/g,j=/"/g,R=/^(?:script|style|textarea|title)$/i,T=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),N=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),H=new WeakMap,L=$.createTreeWalker($,129,null,!1),B=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=M;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,h=n.exec(i),null!==h);)d=n.lastIndex,n===M?"!--"===h[1]?n=E:void 0!==h[1]?n=O:void 0!==h[2]?(R.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=U):void 0!==h[3]&&(n=U):n===U?">"===h[0]?(n=null!=o?o:M,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?U:'"'===h[3]?j:z):n===j||n===z?n=U:n===E||n===O?n=M:(n=U,o=void 0);const c=n===U&&t[e+1].startsWith("/>")?" ":"";r+=n===M?i+x:l>=0?(s.push(a),i.slice(0,l)+"$lit$"+i.slice(l)+k+c):i+k+(-2===l?(s.push(void 0),e):c);}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==g?g.createHTML(a):a,s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[h,l]=B(t,e);if(this.el=G.createElement(h,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes);}for(;null!==(s=L.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(k)){const i=l[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(k),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?W:"@"===e[1]?Z:J});}else a.push({type:6,index:o});}for(const e of t)s.removeAttribute(e);}if(R.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),L.nextNode(),a.push({type:2,index:++o});s.append(t[e],S());}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:o});else {let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1;}o++;}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,s){var o,r,n,a;if(e===N)return e;let h=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const l=A(e)?void 0:e._$litDirective$;return (null==h?void 0:h.constructor)!==l&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===l?h=void 0:(h=new l(t),h._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[s]=h:i._$Cu=h),void 0!==h&&(e=I(t,h._$AS(t,e.values),h,s)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(i,!0);L.currentNode=o;let r=L.nextNode(),n=0,a=0,h=s[0];for(;void 0!==h;){if(n===h.index){let e;2===h.type?e=new q(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new F(r,this,t)),this.v.push(e),h=s[++a];}n!==(null==h?void 0:h.index)&&(r=L.nextNode(),n++);}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++;}}class q{constructor(t,e,i,s){var o;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=null===(o=null==s?void 0:s.isConnected)||void 0===o||o;}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),A(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>_(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t);}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}$(t){this._$AH!==P&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k($.createTextNode(t)),this._$AH=t;}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else {const t=new D(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t;}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new G(t)),e}O(t){_(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new q(this.S(S()),this.S(S()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s);}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e;}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t));}}class J{constructor(t,e,i,s,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=I(this,t,e,0),r=!A(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else {const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=I(this,s[i+n],e,n),a===N&&(a=this._$AH[n]),r||(r=!A(a)||a!==this._$AH[n]),a===P?t=P:t!==P&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a;}r&&!s&&this.P(t);}P(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class K extends J{constructor(){super(...arguments),this.type=3;}P(t){this.element[this.name]=t===P?void 0:t;}}const V=C?C.emptyScript:"";class W extends J{constructor(){super(...arguments),this.type=4;}P(t){t&&t!==P?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name);}}class Z extends J{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5;}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:P)===N)return;const s=this._$AH,o=t===P&&s!==P||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==P&&(s===P||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t);}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i;}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t);}}const Q=y.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,Y;null==Q||Q(G,q),(null!==(b=y.litHtmlVersions)&&void 0!==b?b:y.litHtmlVersions=[]).push("2.3.0");class tt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new q(e.insertBefore(S(),t),t,void 0,null!=i?i:{});}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return N}}tt.finalized=!0,tt._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return {kind:i,elements:s,finisher(e){customElements.define(t,e);}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(i){i.createProperty(e.key,t);}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ot(t){return function(t){return (e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t);})(t,e,i):st(t,e)}({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),t.type!==nt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const o=t.element.classList;this.nt.forEach((t=>{t in e||(o.remove(t),this.nt.delete(t));}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(o.add(t),this.nt.add(t)):(o.remove(t),this.nt.delete(t)));}return N}});function ht(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===i&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t));}}var lt=n`:root {
  --taproot-header-background: var(--color-primary-lightest);
  --taproot-header-border: 1px solid var(--color-secondary-darkest);
  --taproot-header-shadow: 0 0 1px var(--color-secondary-dark);
  --taproot-header-menu-background: var(--color-primary-dark);
  --taproot-header-button-closed-color: var(--color-primary-dark);
  --taproot-header-button-closed-hover-color: var(--color-primary-darkest);
  --taproot-header-button-open-color: var(--color-secondary-lightest);
  --taproot-header-button-open-hover-color: var(--color-secondary-light);
  --taproot-header-left-padding: var(--layout-left-padding);
  --taproot-header-button-stroke-width: 6px;
  --taproot-header-height: 60px;
}

:host * {
  box-sizing: border-box;
}
:host header {
  overflow: hidden;
  padding: 0 var(--taproot-header-height) 0 var(--taproot-header-left-padding);
  height: var(--taproot-header-height);
  background: var(--taproot-header-background);
  border-bottom: var(--taproot-header-border);
  box-shadow: var(--taproot-header-shadow);
}
:host header nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  left: 100%;
  background: var(--taproot-header-menu-background);
  height: 100%;
  overflow-y: auto;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  opacity: 0;
  z-index: 100;
}
:host header nav.open {
  left: 0;
  opacity: 1;
}`;ht(lt);var dt=n`button {
  padding: 0;
  border: none;
  background: transparent;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  z-index: 101;
}

/**
  Fancy SVG menu stuff
  https://uxdesign.cc/the-menu-210bec7ad80c
  https://codepen.io/ainalem/pen/GeMqdP
  */
.plate {
  height: var(--taproot-header-height);
  width: var(--taproot-header-height);
}

.menu-button {
  filter: url(#animate-button);
}

.x {
  transform: scale(0);
  transition: transform 400ms;
}

.line {
  fill: none;
  stroke: var(--taproot-header-button-closed-color);
  stroke-width: var(--taproot-header-button-stroke-width);
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-origin: 50%;
  transition: stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms, transform 400ms 100ms, color cubic-bezier(0.075, 0.82, 0.165, 1) 500ms;
}

button:hover .line {
  stroke: var(--taproot-header-button-closed-hover-color);
}

.x .line {
  stroke-width: 5.5px;
}

.active .x {
  transform: scale(1);
  transition: transform 400ms 350ms, stroke cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
}

.active .x .line {
  stroke: var(--taproot-header-button-open-color);
  stroke-width: var(--taproot-header-button-stroke-width);
  transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 500ms;
}

button:hover .active .x .line {
  stroke: var(--taproot-header-button-open-hover-color);
}

svg {
  height: var(--taproot-header-height);
  width: var(--taproot-header-height);
  position: absolute;
  left: 0;
}

.line1 {
  stroke-dasharray: 21 201;
}

.line2 {
  stroke-dasharray: 21 201;
  transition-delay: 20ms;
}

.line3 {
  stroke-dasharray: 21 201;
  transition-delay: 40ms;
}

.line4 {
  stroke-dasharray: 21 201;
  transition-delay: 60ms;
}

.line5 {
  stroke-dasharray: 21 201;
  transition-delay: 80ms;
}

.line6 {
  stroke-dasharray: 21 201;
  transition-delay: 100ms;
}

.x {
  transition: transform 400ms 50ms;
}

.active .line {
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms;
}

.active .line1 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
}

.active .line2 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
  transition-delay: 20ms;
}

.active .line3 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
  transition-delay: 40ms;
}

.active .line4 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
  transition-delay: 60ms;
}

.active .line5 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
  transition-delay: 80ms;
}

.active .line6 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
  transition-delay: 100ms;
}

.active .x {
  transition: transform 400ms 50ms;
}`;ht(dt);let ct=class extends tt{constructor(){super(...arguments),this.menuOpen=!1;}render(){const{menuOpen:t}=this,e={plate:!0,active:t};return T`
      <button @click=${this.toggleMenu}>
        <svg>
          <defs>
            <filter id="animate-button">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2.2"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                result="animate-button"
              />
              <feComposite
                in="SourceGraphic"
                in2="animate-button"
                operator="atop"
              />
            </filter>
          </defs>
        </svg>
        <div class=${at(e)}>
          <svg
            class="menu-button"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path
              class="line line1"
              d="M 50,35 H 30 C 30,35 20,33.951333 20,25 C 20,16.048667 30,15 30,15 C 38.261288,15 35.285955,25 40,25 C 44.714045,25 45.285955,15 50,15 C 54.714045,15 55.285955,25 60,25 C 64.714045,25 65.285955,15 70,15 C 74.714045,15 75.285955,25 80,25 C 84.714045,25 85.285955,15 90,15 C 94.714045,15 95.285955,25 100,25 C 104.71405,25 105.28595,15 110,15 C 114.71405,15 115.28595,25 120,25 C 124.71405,25 125.33898,15 130,15"
            />
            <path
              class="line line2"
              d="M 50,35 H 69.999999 C 69.999999,35 79.999999,36.048667 79.999999,45 C 79.999999,53.951333 69.999999,55 69.999999,55 C 61.738709,55 64.714049,45 59.999999,45 C 55.28596,45 54.71405,55 50,55 C 45.285955,55 44.714045,45 40,45 C 35.285955,45 34.714045,55 30,55 C 25.285955,55 24.714045,45 20,45 C 15.285955,45 14.714045,55 10,55 C 5.285955,55 4.714045,45 0,45 C -4.71405,45 -5.28595,55 -10,55 C -14.71405,55 -15.28595,45 -20,45 C -24.71405,45 -25.33898,55 -30,55"
            />
            <path
              class="line line3"
              d="M 50,50 H 30 C 30,50 20,48.95133 20,40 C 20,31.04867 30,30 30,30 C 38.261288,30 35.285955,40 40,40 C 44.714045,40 45.285955,30 50,30 C 54.714045,30 55.285955,40 60,40 C 64.714045,40 65.285955,30 70,30 C 74.714045,30 75.285955,40 80,40 C 84.714045,40 85.285955,30 90,30 C 94.714045,30 95.285955,40 100,40 C 104.71405,40 105.28595,30 110,30 C 114.71405,30 115.28595,40 120,40 C 124.71405,40 125.33898,30 130,30"
            />
            <path
              class="line line4"
              d="M 50,50 H 69.999999 C 69.999999,50 79.999999,51.04867 79.999999,60 C 79.999999,68.95133 69.999999,70 69.999999,70 C 61.738709,70 64.714049,60 59.999999,60 C 55.28596,60 54.71405,70 50,70 C 45.285955,70 44.714045,60 40,60 C 35.285955,60 34.714045,70 30,70 C 25.285955,70 24.714045,60 20,60 C 15.285955,60 14.714045,70 10,70 C 5.285955,70 4.714045,60 0,60 C -4.71405,60 -5.28595,70 -10,70 C -14.71405,70 -15.28595,60 -20,60 C -24.71405,60 -25.33898,70 -30,70"
            />
            <path
              class="line line5"
              d="M 50.000001,65 H 30.000001 C 30.000001,65 20.000001,63.95133 20.000001,55 C 20.000001,46.048664 30.000001,44.999997 30.000001,44.999997 C 38.261289,44.999997 35.285956,55 40.000001,55 C 44.714046,55 45.285956,44.999997 50.000001,44.999997 C 54.714046,44.999997 55.285956,55 60.000001,55 C 64.714046,55 65.285956,44.999997 70.000001,44.999997 C 74.714046,44.999997 75.285956,55 80.000001,55 C 84.714046,55 85.285956,44.999997 90.000001,44.999997 C 94.714046,44.999997 95.285956,55 99.999998,55 C 104.71405,55 105.28595,44.999997 110,44.999997 C 114.71405,44.999997 115.28595,55 120,55 C 124.71405,55 125.33898,44.999997 130,44.999997"
            />
            <path
              class="line line6"
              d="M 50.000001,65 H 70 C 70,65 80,66.04866 80,75 C 80,83.95133 70,85 70,85 C 61.73871,85 64.71405,75 60,75 C 55.285961,75 54.714051,85 50.000001,85 C 45.285956,85 44.714046,75 40.000001,75 C 35.285956,75 34.714046,85 30.000001,85 C 25.285956,85 24.714046,75 20.000001,75 C 15.285956,75 14.714046,85 10.000001,85 C 5.2859559,85 4.7140459,75 0,75 C -4.7140491,75 -5.2859491,85 -9.9999991,85 C -14.714049,85 -15.285949,75 -19.999999,75 C -24.714049,75 -25.338979,85 -29.999999,85"
            />
          </svg>
          <svg
            class="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path class="line" d="M 34,32 L 66,68" />
            <path class="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
      </button>
    `}toggleMenu(){this.menuOpen=!this.menuOpen;const t=this.menuOpen?"opened":"closed";this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}));}};ct.styles=dt,t([ot()],ct.prototype,"menuOpen",void 0),ct=t([it("menu-button")],ct);let ut=class extends tt{constructor(){super(...arguments),this.menuOpen=!1;}render(){const{menuOpen:t}=this;return T`
      <header>
        <slot name="site-name"></slot>

        <nav class=${at({open:t})}>
          <slot name="nav-links"></slot>
        </nav>

        <menu-button
          id="mobile-menu-button"
          @opened=${this.openNav}
          @closed=${this.closeNav}
        ></menu-button>
      </header>
    `}openNav(){this.menuOpen=!0,document.body.classList.add("menu-open");}closeNav(){this.menuOpen=!1,document.body.classList.remove("menu-open");}};ut.styles=lt,t([ot()],ut.prototype,"menuOpen",void 0),ut=t([it("site-header")],ut);
//# sourceMappingURL=main-318d510c.js.map