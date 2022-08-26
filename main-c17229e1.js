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

var css_248z$1 = "html:root {\n  --body-font: \"Roboto Condensed\", sans-serif;\n  --header-font: \"Lora\", serif;\n  --root-font-size: 22px;\n  --layout-left-padding: 20px;\n  --taproot-header-button-stroke-width: 7px;\n  --primary-hue: 195;\n  --secondary-hue: calc(var(--primary-hue) + 180);\n  --primary-saturation: 70%;\n  --nav-hue: var(--primary-hue);\n  --color-primary-darkest: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    20%\n  );\n  --color-primary-dark: hsl(var(--primary-hue), var(--primary-saturation), 40%);\n  --color-primary: hsl(var(--primary-hue), var(--primary-saturation), 50%);\n  --color-primary-light: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    60%\n  );\n  --color-primary-lightest: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    80%\n  );\n  --color-secondary-darkest: hsl(\n    var(--secondary-hue),\n    var(--primary-saturation),\n    20%\n  );\n  --color-secondary-dark: hsl(\n    var(--secondary-hue),\n    var(--primary-saturation),\n    40%\n  );\n  --color-secondary: hsl(var(--secondary-hue), var(--primary-saturation), 50%);\n  --color-secondary-light: hsl(\n    var(--secondary-hue),\n    var(--primary-saturation),\n    60%\n  );\n  --color-secondary-lightest: hsl(\n    var(--secondary-hue),\n    var(--primary-saturation),\n    80%\n  );\n  --split-flap-font-color: var(--color-primary-darkest);\n  --split-flap-font-weight: bold;\n  --split-flap-font-size: 25px;\n  --split-flap-font-family: \"Courier Prime\", monospace;\n  --split-flap-padding: 6px;\n  --split-flap-border-radius: 4px;\n  --split-flap-background: url(/assets/az-subtle.png)\n    var(--color-secondary-lightest);\n  --split-flap-separator: 1px solid var(--color-secondary-light);\n}\n@media (min-width: 500px) {\n  html:root {\n    --split-flap-font-size: 30px;\n  }\n}\n@media (min-width: 768px) {\n  html:root {\n    --split-flap-font-size: 50px;\n  }\n}\n@media (min-width: 1024px) {\n  html:root {\n    --split-flap-font-size: 70px;\n  }\n}";
styleInject(css_248z$1);

var css_248z = "@charset \"UTF-8\";\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: var(--body-font);\n  font-size: var(--root-font-size);\n  color: var(--color-primary-darkest);\n}\n@media (min-width: 768px) {\n  html {\n    font-size: calc(var(--root-font-size) * 1.15);\n  }\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n}\n\nsection.colors {\n  display: grid;\n  grid-template-columns: auto auto auto auto auto;\n}\nsection.colors div {\n  height: 50px;\n}\nsection.colors div:nth-child(1) {\n  background-color: var(--color-primary-darkest);\n}\nsection.colors div:nth-child(2) {\n  background-color: var(--color-primary-dark);\n}\nsection.colors div:nth-child(3) {\n  background-color: var(--color-primary);\n}\nsection.colors div:nth-child(4) {\n  background-color: var(--color-primary-light);\n}\nsection.colors div:nth-child(5) {\n  background-color: var(--color-primary-lightest);\n}\nsection.colors div:nth-child(6) {\n  background-color: var(--color-secondary-darkest);\n}\nsection.colors div:nth-child(7) {\n  background-color: var(--color-secondary-dark);\n}\nsection.colors div:nth-child(8) {\n  background-color: var(--color-secondary);\n}\nsection.colors div:nth-child(9) {\n  background-color: var(--color-secondary-light);\n}\nsection.colors div:nth-child(10) {\n  background-color: var(--color-secondary-lightest);\n}\n\nsection.hero {\n  background: url(/assets/black-thread.png) var(--color-secondary);\n  min-height: calc(100vh - 60px);\n  display: grid;\n  text-align: center;\n  justify-content: center;\n  grid-template-rows: auto auto;\n  padding-bottom: 100px;\n}\nsection.hero h1 {\n  margin: 0;\n  color: var(--color-primary-light);\n  text-shadow: 2px 2px 2px var(--color-secondary-darkest);\n}\nsection.hero h1 {\n  align-self: flex-end;\n  font-size: 2.4em;\n}\n@media (min-width: 500px) {\n  section.hero h1 {\n    font-size: 2.8em;\n  }\n}\n@media (min-width: 768px) {\n  section.hero h1 {\n    font-size: 3.85em;\n  }\n}\n@media (min-width: 1024px) {\n  section.hero h1 {\n    font-size: 5.3em;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  color: var(--color-secondary-dark);\n  font-family: var(--header-font);\n  font-weight: lighter;\n}\n\na {\n  text-decoration: none;\n}\n\nsection.nav-links {\n  display: grid;\n  grid-template-columns: min-content auto;\n  justify-items: right;\n  padding: 50px 20px 20px;\n}\nsection.nav-links a {\n  grid-column: 2;\n  font-family: var(--header-font);\n  font-size: 2.2em;\n  color: var(--color-secondary-light);\n  text-shadow: 1px 1px 0 var(--color-secondary-dark);\n  text-decoration: none;\n  margin: 5px 0;\n}\nsection.nav-links a.home {\n  grid-column: 1;\n  grid-row: 1/span 99;\n  justify-self: left;\n  margin-top: -30px;\n}\nsection.nav-links a.home svg {\n  width: 120px;\n  height: 110px;\n}\nsection.nav-links a:hover {\n  color: var(--color-secondary);\n  text-shadow: 2px 2px 0 var(--color-secondary-darkest);\n}\n\na.logo svg {\n  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));\n}\na.logo svg .fill {\n  fill: var(--color-secondary-light);\n  stroke-width: 4px;\n  stroke: var(--color-primary-darkest);\n  transition: fill cubic-bezier(0.175, 0.885, 0.32, 1.275) 500ms;\n}\na.logo:hover svg .fill {\n  fill: var(--color-secondary);\n}\n\ndiv.layout {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}\ndiv.layout a.header-title {\n  display: inline-block;\n  text-decoration: none;\n  position: relative;\n}\ndiv.layout a.header-title svg {\n  height: 75px;\n  width: 90px;\n  position: inherit;\n}\ndiv.layout > main {\n  grid-row: 2;\n  margin: 0 auto;\n  padding: 1em 0 2em;\n  width: 100%;\n  max-width: 1024px;\n}\ndiv.layout > main.home {\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n}\ndiv.layout > main > p a,\ndiv.layout > main ul > li a,\ndiv.layout > main ol > li a,\ndiv.layout > main > h1 a,\ndiv.layout > main > h2 a,\ndiv.layout > main > h3 a,\ndiv.layout > main > h4 a,\ndiv.layout > main > h5 a {\n  font-weight: bold;\n  text-decoration: underline;\n  color: var(--color-secondary-medium);\n  transition: all ease-in;\n}\ndiv.layout > main > p a.header-anchor,\ndiv.layout > main ul > li a.header-anchor,\ndiv.layout > main ol > li a.header-anchor,\ndiv.layout > main > h1 a.header-anchor,\ndiv.layout > main > h2 a.header-anchor,\ndiv.layout > main > h3 a.header-anchor,\ndiv.layout > main > h4 a.header-anchor,\ndiv.layout > main > h5 a.header-anchor {\n  position: absolute;\n  left: -0.5em;\n  display: none;\n}\ndiv.layout > main > p a:hover,\ndiv.layout > main ul > li a:hover,\ndiv.layout > main ol > li a:hover,\ndiv.layout > main > h1 a:hover,\ndiv.layout > main > h2 a:hover,\ndiv.layout > main > h3 a:hover,\ndiv.layout > main > h4 a:hover,\ndiv.layout > main > h5 a:hover {\n  text-decoration: none;\n  color: var(--color-secondary-light);\n}\ndiv.layout > main > p:hover a.header-anchor,\ndiv.layout > main ul > li:hover a.header-anchor,\ndiv.layout > main ol > li:hover a.header-anchor,\ndiv.layout > main > h1:hover a.header-anchor,\ndiv.layout > main > h2:hover a.header-anchor,\ndiv.layout > main > h3:hover a.header-anchor,\ndiv.layout > main > h4:hover a.header-anchor,\ndiv.layout > main > h5:hover a.header-anchor {\n  display: inline;\n}\ndiv.layout > main > p,\ndiv.layout > main > h1,\ndiv.layout > main > h2,\ndiv.layout > main > h3,\ndiv.layout > main > h4,\ndiv.layout > main > h5,\ndiv.layout > main ul,\ndiv.layout > main ol {\n  padding: 0 15px;\n  position: relative;\n  text-rendering: optimizeLegibility;\n}\ndiv.layout > main > p,\ndiv.layout > main > h1,\ndiv.layout > main > h2,\ndiv.layout > main > h3,\ndiv.layout > main > h4,\ndiv.layout > main > h5 {\n  margin: 1.618em 0 0;\n}\ndiv.layout > main > h1:first-child {\n  margin: 15px 0 0;\n}\ndiv.layout > main ul,\ndiv.layout > main ol {\n  padding-left: 42px;\n}\ndiv.layout > main > blockquote {\n  font-size: 1.2em;\n  display: grid;\n  grid-template-columns: 1em auto 1em;\n  grid-template-rows: 1em auto 1em;\n  margin: 0;\n}\ndiv.layout > main > blockquote p {\n  grid-column: 2;\n  grid-row: 2;\n  display: block;\n  background-color: var(--color-secondary-light);\n  color: var(--color-primary);\n  z-index: 1;\n  margin: 0;\n  padding: 1em;\n  border-radius: 0.25em;\n  border: 2px dashed var(--color-secondary-medium);\n  font-weight: bold;\n  font-style: italic;\n}\ndiv.layout > main > blockquote::before, div.layout > main > blockquote::after {\n  font-size: 5em;\n  color: var(--color-primary);\n  z-index: 2;\n}\ndiv.layout > main > blockquote::before {\n  content: \"“\";\n  grid-column: 1;\n  grid-row: 1;\n  line-height: 1em;\n}\ndiv.layout > main > blockquote::after {\n  content: \"”\";\n  grid-column: 3;\n  grid-row: 3;\n  line-height: 0.25em;\n  justify-self: end;\n}\ndiv.layout > main > table {\n  border: 1px solid var(--color-primary);\n  margin: 15px;\n  border-collapse: collapse;\n}\ndiv.layout > main > table thead {\n  border-bottom: 1px solid var(--color-primary);\n}\ndiv.layout > main > table thead th {\n  border-right: 1px solid var(--color-primary);\n  padding: 5px;\n}\ndiv.layout > main > table tr {\n  border-bottom: 1px dotted var(--color-primary);\n}\ndiv.layout > main > table tr:last-child {\n  border-bottom: none;\n}\ndiv.layout > main > table td {\n  border-right: 1px dotted var(--color-primary);\n  vertical-align: top;\n  padding: 5px;\n}\ndiv.layout > main > table td:last-child {\n  border-right: none;\n}\ndiv.layout > footer {\n  background-color: var(--color-secondary-lightest);\n  border-top: 2px solid var(--color-secondary);\n  border-bottom: 3px solid var(--color-primary-dark);\n  text-align: center;\n  font-size: 0.8em;\n}\n\nbody.menu-open {\n  overflow: hidden;\n}";
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
function t$1(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e$1=window,i$1=e$1.ShadowRoot&&(void 0===e$1.ShadyCSS||e$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$1=Symbol(),o$1=new WeakMap;class n$1{constructor(t,e,i){if(this._$cssResult$=!0,i!==s$1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const e=this.t;if(i$1&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o$1.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o$1.set(e,t));}return t}toString(){return this.cssText}}const r$1=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n$1(i,t,s$1)},a$1=i$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return (t=>new n$1("string"==typeof t?t:t+"",void 0,s$1))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h$1;const l$1=window,d$1=l$1.trustedTypes,u$1=d$1?d$1.emptyScript:"",c$1=l$1.reactiveElementPolyfillSupport,v$1={toAttribute(t,e){switch(e){case Boolean:t=t?u$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},p$1=(t,e)=>e!==t&&(e==e||t==t),m$1={attribute:!0,type:String,converter:v$1,reflect:!1,hasChanged:p$1};class b$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s));})),t}static createProperty(t,e=m$1){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s);}}static getPropertyDescriptor(t,e,i){return {get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m$1}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a$1(t));}else void 0!==t&&e.push(a$1(t));return e}static _$Ep(t,e){const i=e.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t));}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return ((t,s)=>{i$1?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e$1.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s);}));})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}));}attributeChangedCallback(t,e,i){this._$AK(t,i);}_$EO(t,e,i=m$1){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:v$1).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null;}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:v$1;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null;}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p$1)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek();}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i);}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f$1;b$1.finalized=!0,b$1.elementProperties=new Map,b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},null==c$1||c$1({ReactiveElement:b$1}),(null!==(h$1=l$1.reactiveElementVersions)&&void 0!==h$1?h$1:l$1.reactiveElementVersions=[]).push("1.4.0");const y$1=window,C$1=y$1.trustedTypes,g$1=C$1?C$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,k$1=`lit$${(Math.random()+"").slice(9)}$`,w$1="?"+k$1,x$1=`<${w$1}>`,$$1=document,S$1=(t="")=>$$1.createComment(t),A$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_$1=Array.isArray,M$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E$1=/-->/g,O$1=/>/g,U$1=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),z$1=/'/g,j$1=/"/g,R$1=/^(?:script|style|textarea|title)$/i,T$1=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),N$1=Symbol.for("lit-noChange"),P$1=Symbol.for("lit-nothing"),H$1=new WeakMap,L$1=$$1.createTreeWalker($$1,129,null,!1),B$1=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=M$1;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,h=r.exec(i),null!==h);)d=r.lastIndex,r===M$1?"!--"===h[1]?r=E$1:void 0!==h[1]?r=O$1:void 0!==h[2]?(R$1.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=U$1):void 0!==h[3]&&(r=U$1):r===U$1?">"===h[0]?(r=null!=o?o:M$1,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?U$1:'"'===h[3]?j$1:z$1):r===j$1||r===z$1?r=U$1:r===E$1||r===O$1?r=M$1:(r=U$1,o=void 0);const u=r===U$1&&t[e+1].startsWith("/>")?" ":"";n+=r===M$1?i+x$1:l>=0?(s.push(a),i.slice(0,l)+"$lit$"+i.slice(l)+k$1+u):i+k$1+(-2===l?(s.push(void 0),e):u);}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==g$1?g$1.createHTML(a):a,s]};class G$1{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[h,l]=B$1(t,e);if(this.el=G$1.createElement(h,i),L$1.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes);}for(;null!==(s=L$1.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(k$1)){const i=l[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(k$1),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K$1:"?"===e[1]?W$1:"@"===e[1]?Z$1:J$1});}else a.push({type:6,index:o});}for(const e of t)s.removeAttribute(e);}if(R$1.test(s.tagName)){const t=s.textContent.split(k$1),e=t.length-1;if(e>0){s.textContent=C$1?C$1.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S$1()),L$1.nextNode(),a.push({type:2,index:++o});s.append(t[e],S$1());}}}else if(8===s.nodeType)if(s.data===w$1)a.push({type:2,index:o});else {let t=-1;for(;-1!==(t=s.data.indexOf(k$1,t+1));)a.push({type:7,index:o}),t+=k$1.length-1;}o++;}}static createElement(t,e){const i=$$1.createElement("template");return i.innerHTML=t,i}}function I$1(t,e,i=t,s){var o,n,r,a;if(e===N$1)return e;let h=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const l=A$1(e)?void 0:e._$litDirective$;return (null==h?void 0:h.constructor)!==l&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===l?h=void 0:(h=new l(t),h._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=h:i._$Cu=h),void 0!==h&&(e=I$1(t,h._$AS(t,e.values),h,s)),e}class D$1{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$$1).importNode(i,!0);L$1.currentNode=o;let n=L$1.nextNode(),r=0,a=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new q$1(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new F$1(n,this,t)),this.v.push(e),h=s[++a];}r!==(null==h?void 0:h.index)&&(n=L$1.nextNode(),r++);}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++;}}class q$1{constructor(t,e,i,s){var o;this.type=2,this._$AH=P$1,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=null===(o=null==s?void 0:s.isConnected)||void 0===o||o;}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I$1(this,t,e),A$1(t)?t===P$1||null==t||""===t?(this._$AH!==P$1&&this._$AR(),this._$AH=P$1):t!==this._$AH&&t!==N$1&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>_$1(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t);}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}$(t){this._$AH!==P$1&&A$1(this._$AH)?this._$AA.nextSibling.data=t:this.k($$1.createTextNode(t)),this._$AH=t;}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G$1.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else {const t=new D$1(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t;}}_$AC(t){let e=H$1.get(t.strings);return void 0===e&&H$1.set(t.strings,e=new G$1(t)),e}O(t){_$1(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new q$1(this.S(S$1()),this.S(S$1()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s);}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e;}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t));}}class J$1{constructor(t,e,i,s,o){this.type=1,this._$AH=P$1,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P$1;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=I$1(this,t,e,0),n=!A$1(t)||t!==this._$AH&&t!==N$1,n&&(this._$AH=t);else {const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=I$1(this,s[i+r],e,r),a===N$1&&(a=this._$AH[r]),n||(n=!A$1(a)||a!==this._$AH[r]),a===P$1?t=P$1:t!==P$1&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a;}n&&!s&&this.P(t);}P(t){t===P$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class K$1 extends J$1{constructor(){super(...arguments),this.type=3;}P(t){this.element[this.name]=t===P$1?void 0:t;}}const V$1=C$1?C$1.emptyScript:"";class W$1 extends J$1{constructor(){super(...arguments),this.type=4;}P(t){t&&t!==P$1?this.element.setAttribute(this.name,V$1):this.element.removeAttribute(this.name);}}class Z$1 extends J$1{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5;}_$AI(t,e=this){var i;if((t=null!==(i=I$1(this,t,e,0))&&void 0!==i?i:P$1)===N$1)return;const s=this._$AH,o=t===P$1&&s!==P$1||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==P$1&&(s===P$1||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t);}}class F$1{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i;}get _$AU(){return this._$AM._$AU}_$AI(t){I$1(this,t);}}const Q$1=y$1.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X$1,Y$1;null==Q$1||Q$1(G$1,q$1),(null!==(f$1=y$1.litHtmlVersions)&&void 0!==f$1?f$1:y$1.litHtmlVersions=[]).push("2.3.0");class tt$1 extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new q$1(e.insertBefore(S$1(),t),t,void 0,null!=i?i:{});}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return N$1}}tt$1.finalized=!0,tt$1._$litElement$=!0,null===(X$1=globalThis.litElementHydrateSupport)||void 0===X$1||X$1.call(globalThis,{LitElement:tt$1});const et$1=globalThis.litElementPolyfillSupport;null==et$1||et$1({LitElement:tt$1}),(null!==(Y$1=globalThis.litElementVersions)&&void 0!==Y$1?Y$1:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it$1=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return {kind:i,elements:s,finisher(e){customElements.define(t,e);}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,st$1=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(i){i.createProperty(e.key,t);}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ot$1(t){return function(t){return (e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t);})(t,e,i):st$1(t,e)}({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt$1;null===(nt$1=window.HTMLSlotElement)||void 0===nt$1||nt$1.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt$1=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),t.type!==rt$1||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const o=t.element.classList;this.nt.forEach((t=>{t in e||(o.remove(t),this.nt.delete(t));}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(o.add(t),this.nt.add(t)):(o.remove(t),this.nt.delete(t)));}return N$1}});function ht(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===i&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t));}}var lt=r$1`:root {
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
  overflow: visible;
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
}`;ht(lt);var dt=r$1`button.animated-mb {
  padding: 0;
  border: none;
  background: transparent;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  z-index: 101;
  /**
  Fancy SVG menu stuff
  https://uxdesign.cc/the-menu-210bec7ad80c
  https://codepen.io/ainalem/pen/GeMqdP
  */
}
button.animated-mb .plate {
  height: var(--taproot-header-height);
  width: var(--taproot-header-height);
}
button.animated-mb .menu-button {
  filter: url(#animate-button);
}
button.animated-mb .x {
  transform: scale(0);
  transition: transform 400ms;
}
button.animated-mb .line {
  fill: none;
  stroke: var(--taproot-header-button-closed-color);
  stroke-width: var(--taproot-header-button-stroke-width);
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-origin: 50%;
  transition: stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms, transform 400ms 100ms, color cubic-bezier(0.075, 0.82, 0.165, 1) 500ms;
}
button.animated-mb:hover .line {
  stroke: var(--taproot-header-button-closed-hover-color);
}
button.animated-mb .x .line {
  stroke-width: 5.5px;
}
button.animated-mb .active .x {
  transform: scale(1);
  transition: transform 400ms 350ms, stroke cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
}
button.animated-mb .active .x .line {
  stroke: var(--taproot-header-button-open-color);
  stroke-width: var(--taproot-header-button-stroke-width);
  transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 500ms;
}
button.animated-mb:hover .active .x .line {
  stroke: var(--taproot-header-button-open-hover-color);
}
button.animated-mb svg {
  height: var(--taproot-header-height);
  width: var(--taproot-header-height);
  position: absolute;
  left: 0;
}
button.animated-mb .line1 {
  stroke-dasharray: 21 201;
}
button.animated-mb .line2 {
  stroke-dasharray: 21 201;
  transition-delay: 20ms;
}
button.animated-mb .line3 {
  stroke-dasharray: 21 201;
  transition-delay: 40ms;
}
button.animated-mb .line4 {
  stroke-dasharray: 21 201;
  transition-delay: 60ms;
}
button.animated-mb .line5 {
  stroke-dasharray: 21 201;
  transition-delay: 80ms;
}
button.animated-mb .line6 {
  stroke-dasharray: 21 201;
  transition-delay: 100ms;
}
button.animated-mb .x {
  transition: transform 400ms 50ms;
}
button.animated-mb .active .line {
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms;
}
button.animated-mb .active .line1 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
}
button.animated-mb .active .line2 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
  transition-delay: 20ms;
}
button.animated-mb .active .line3 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
  transition-delay: 40ms;
}
button.animated-mb .active .line4 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
  transition-delay: 60ms;
}
button.animated-mb .active .line5 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
  transition-delay: 80ms;
}
button.animated-mb .active .line6 {
  stroke-dasharray: 5 201;
  stroke-dashoffset: -158px;
  transition-delay: 100ms;
}
button.animated-mb .active .x {
  transition: transform 400ms 50ms;
}`;ht(dt);let ut=class extends tt$1{constructor(){super(...arguments),this.menuOpen=!1,this.label="Open menu";}render(){const{menuOpen:t,label:e}=this,i={plate:!0,active:t};return T$1`
      <button class="animated-mb" @click=${this.toggleMenu} aria-label=${e}>
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
        <div class=${at(i)}>
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
    `}toggleMenu(){this.menuOpen=!this.menuOpen;const t=this.menuOpen?"opened":"closed";this.label=this.menuOpen?"Close menu":"Open menu",this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}));}};ut.styles=dt,t$1([ot$1()],ut.prototype,"menuOpen",void 0),t$1([ot$1()],ut.prototype,"label",void 0),ut=t$1([it$1("menu-button")],ut);let ct=class extends tt$1{constructor(){super(...arguments),this.menuOpen=!1;}render(){const{menuOpen:t}=this;return T$1`
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
    `}openNav(){this.menuOpen=!0,document.body.classList.add("menu-open");}closeNav(){this.menuOpen=!1,document.body.classList.remove("menu-open");}};ct.styles=lt,t$1([ot$1()],ct.prototype,"menuOpen",void 0),ct=t$1([it$1("site-header")],ct);

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
function t(t,i,s,e){var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,s,e);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new WeakMap;class n{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i;}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(i,t));}return t}toString(){return this.cssText}}const r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return (t=>new n("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const h=window,a=h.trustedTypes,d=a?a.emptyScript:"",c=h.reactiveElementPolyfillSupport,u={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},v=(t,i)=>i!==t&&(i==i||t==t),p={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:v};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=p){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(r(t));}else void 0!==t&&i.push(r(t));return i}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return ((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((s=>{const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,t.appendChild(e);}));})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=p){var e;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const n=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:u).toAttribute(i,s.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,o=e._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=e.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:u;this._$El=o,this[o]=n.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:f}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.4.0");const g=window,m=g.trustedTypes,y=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,S=`<${$}>`,k=document,x=(t="")=>k.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,M=/>/g,z=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,O=/"/g,R=/^(?:script|style|textarea|title)$/i,j=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),T=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),P=new WeakMap,I=k.createTreeWalker(k,129,null,!1),L=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=C;for(let i=0;i<s;i++){const s=t[i];let l,h,a=-1,d=0;for(;d<s.length&&(r.lastIndex=d,h=r.exec(s),null!==h);)d=r.lastIndex,r===C?"!--"===h[1]?r=E:void 0!==h[1]?r=M:void 0!==h[2]?(R.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=z):void 0!==h[3]&&(r=z):r===z?">"===h[0]?(r=null!=o?o:C,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?z:'"'===h[3]?O:U):r===O||r===U?r=z:r===E||r===M?r=C:(r=z,o=void 0);const c=r===z&&t[i+1].startsWith("/>")?" ":"";n+=r===C?s+S:a>=0?(e.push(l),s.slice(0,a)+"$lit$"+s.slice(a)+w+c):s+w+(-2===a?(e.push(void 0),i):c);}const l=n+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==y?y.createHTML(l):l,e]};class X{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[h,a]=L(t,i);if(this.el=X.createElement(h,s),I.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(e=I.nextNode())&&l.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(w)){const s=a[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(w),i=/([.?@])?(.*)/.exec(s);l.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?J:"?"===i[1]?W:"@"===i[1]?Y:H});}else l.push({type:6,index:o});}for(const i of t)e.removeAttribute(i);}if(R.test(e.tagName)){const t=e.textContent.split(w),i=t.length-1;if(i>0){e.textContent=m?m.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],x()),I.nextNode(),l.push({type:2,index:++o});e.append(t[i],x());}}}else if(8===e.nodeType)if(e.data===$)l.push({type:2,index:o});else {let t=-1;for(;-1!==(t=e.data.indexOf(w,t+1));)l.push({type:7,index:o}),t+=w.length-1;}o++;}}static createElement(t,i){const s=k.createElement("template");return s.innerHTML=t,s}}function D(t,i,s=t,e){var o,n,r,l;if(i===T)return i;let h=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const a=A(i)?void 0:i._$litDirective$;return (null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,e)),void 0!==e?(null!==(r=(l=s)._$Cl)&&void 0!==r?r:l._$Cl=[])[e]=h:s._$Cu=h),void 0!==h&&(i=D(t,h._$AS(t,i.values),h,e)),i}class Z{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:k).importNode(s,!0);I.currentNode=o;let n=I.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new B(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new q(n,this,t)),this.v.push(i),h=e[++l];}r!==(null==h?void 0:h.index)&&(n=I.nextNode(),r++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class B{constructor(t,i,s,e){var o;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=D(this,t,i),A(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>_(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t);}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}$(t){this._$AH!==N&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(k.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=X.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new Z(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=P.get(t.strings);return void 0===i&&P.set(t.strings,i=new X(t)),i}O(t){_(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new B(this.S(x()),this.S(x()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class H{constructor(t,i,s,e,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=N;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=D(this,t,i,0),n=!A(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=D(this,e[s+r],i,r),l===T&&(l=this._$AH[r]),n||(n=!A(l)||l!==this._$AH[r]),l===N?t=N:t!==N&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l;}n&&!e&&this.P(t);}P(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class J extends H{constructor(){super(...arguments),this.type=3;}P(t){this.element[this.name]=t===N?void 0:t;}}const K=m?m.emptyScript:"";class W extends H{constructor(){super(...arguments),this.type=4;}P(t){t&&t!==N?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name);}}class Y extends H{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=D(this,t,i,0))&&void 0!==s?s:N)===T)return;const e=this._$AH,o=t===N&&e!==N||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==N&&(e===N||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class q{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t);}}const V=g.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,G;null==V||V(X,B),(null!==(b=g.litHtmlVersions)&&void 0!==b?b:g.litHtmlVersions=[]).push("2.3.0");class Q extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new B(i.insertBefore(x(),t),t,void 0,null!=s?s:{});}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}Q.finalized=!0,Q._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s;}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){var i;if(super(t),t.type!==it||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var s,e;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(s=this.st)||void 0===s?void 0:s.has(t))&&this.nt.add(t);return this.render(i)}const o=t.element.classList;this.nt.forEach((t=>{t in i||(o.remove(t),this.nt.delete(t));}));for(const t in i){const s=!!i[t];s===this.nt.has(t)||(null===(e=this.st)||void 0===e?void 0:e.has(t))||(s?(o.add(t),this.nt.add(t)):(o.remove(t),this.nt.delete(t)));}return T}}),et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this));},finisher(s){s.createProperty(i.key,t);}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements;var nt=((t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new n(s,t,e)})`:root {
  --split-flap-font-color: black;
  --split-flap-font-weight: bold;
  --split-flap-font-size: 36px;
  --split-flap-font-family: monospace;
  --split-flap-padding: 6px;
  --split-flap-border-radius: 4px;
  --split-flap-background: white;
  --split-flap-separator: 1px solid #ccc;
}

:host {
  display: block;
  width: min-content;
  font: var(--split-flap-font-weight) var(--split-flap-font-size)/var(--split-flap-font-size) var(--split-flap-font-family);
  color: var(--split-flap-font-color);
}
:host * {
  box-sizing: border-box;
}
:host section {
  width: min-content;
  display: grid;
}
:host section div.letter {
  grid-template-rows: 2;
  position: relative;
  display: grid;
  width: min-content;
}
:host section div.letter > div {
  grid-column: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 1.35em;
  margin: 2px;
  padding: var(--split-flap-padding);
  font-size: var(--split-flap-font-size);
  height: calc((var(--split-flap-font-size) + var(--split-flap-padding) * 2) / 2);
  overflow-y: clip;
  background: var(--split-flap-background);
}
:host section div.letter > div.top {
  grid-row: 1;
  margin-bottom: 0;
  border-bottom: var(--split-flap-separator);
  border-top-left-radius: var(--split-flap-border-radius);
  border-top-right-radius: var(--split-flap-border-radius);
}
:host section div.letter > div.blank, :host section div.letter > div.bottom, :host section div.letter > div.back {
  grid-row: 2;
  margin-top: 0;
  border-bottom-left-radius: var(--split-flap-border-radius);
  border-bottom-right-radius: var(--split-flap-border-radius);
}
:host section div.letter > div.blank {
  border-top: var(--split-flap-separator);
}
:host section div.letter > div.bottom, :host section div.letter > div.back {
  transform-origin: center top;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: transform ease-out 500ms;
}
:host section div.letter > div.bottom {
  position: relative;
  transform: rotateX(180deg);
}
:host section div.letter > div.bottom span {
  position: absolute;
  top: calc((var(--split-flap-font-size) - 2px) / -2);
}
:host section div.letter > div.back {
  transform: rotateX(180deg) rotateY(180deg) translateZ(0.5px);
}
:host section div.letter.revealed div.bottom {
  transform: rotateX(0deg);
}
:host section div.letter.revealed div.back {
  transform: rotateX(0deg) rotateY(180deg);
}`;!function(t,i){void 0===i&&(i={});var s=i.insertAt;if(t&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===s&&e.firstChild?e.insertBefore(o,e.firstChild):e.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t));}}(nt);let rt=class extends Q{constructor(){super(...arguments),this._message="Set Me",this._lines=[],this._ranDisplay=!1;}set message(t){this._message=t;let i=[];for(const s of [...t.toUpperCase()]){/\r|\n/.exec(s)?(this._lines.push(i),i=[]):i.push({Character:s,Revealed:" "==s});}if(this._lines.push(i),1==this._lines.length)return;const s=Math.max(...this._lines.map((t=>t.length)));for(const t of this._lines)if(t.length!=s)for(let i=0;i<=s-t.length;i++)t.push({Character:" ",Revealed:!0});}get message(){return this._message}render(){return j`
      <section>
        ${this._lines.map(((t,i)=>t.map((t=>{const s={revealed:t.Revealed};return j`
              <div
                style=${"grid-row: "+(i+1)}
                class="letter ${st(s)}"
              >
                <div class="top">
                  <span>${t.Character}</span>
                </div>
                <div class="blank"></div>
                <div class="bottom">
                  <span>${t.Character}</span>
                </div>
                <div class="back"></div>
              </div>
            `}))))}
      </section>
    `}updated(){if(this._ranDisplay)return;this._ranDisplay=!0;let t=300*Math.random()+200;for(const i of this._lines)for(const s of i)setTimeout((()=>{s.Revealed=!0,this.requestUpdate();}),t),t+=300*Math.random()+200;}};rt.styles=nt,t([function(t){return (i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t);})(t,i,s):et(t,i)}()],rt.prototype,"message",null),rt=t([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return {kind:s,elements:e,finisher(i){customElements.define(t,i);}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */)("split-flap")],rt);

window.onload = () => {
    document.body.classList.add("loaded");
};
//# sourceMappingURL=main-c17229e1.js.map
