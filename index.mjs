// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-binomial@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function u(c,g,b){var v,x,y,P,w;if(!m(c))throw new TypeError(f("0Pa4o",c));if(!o(g))throw new TypeError(f("0Pa7L",g));if(arguments.length>2){if(!d(b))throw new TypeError(f("0Pa2h",b));if(v=i({},b),a(v,"iter")){if(!l(v.iter))throw new TypeError(f("0Pa35","iter",v.iter))}else v.iter=h;y=j(c,g,v),void 0===v.prng&&!1!==v.copy&&(v.state=y.state)}else y=j(c,g),v={iter:h,state:y.state};return w=0,e(x={},"next",L),e(x,"return",G),v&&v.prng?(e(x,"seed",null),e(x,"seedLength",null),s(x,"state",n(null),r),e(x,"stateLength",null),e(x,"byteLength",null)):(t(x,"seed",R),t(x,"seedLength",E),s(x,"state",q,z),t(x,"stateLength",T),t(x,"byteLength",k)),e(x,"PRNG",y.PRNG),p&&e(x,p,N),x;function L(){return w+=1,P||w>v.iter?{done:!0}:{value:y(),done:!1}}function G(e){return P=!0,arguments.length?{value:e,done:!0}:{done:!0}}function N(){return u(c,g,v)}function R(){return y.PRNG.seed}function E(){return y.PRNG.seedLength}function T(){return y.PRNG.stateLength}function k(){return y.PRNG.byteLength}function q(){return y.PRNG.state}function z(e){y.PRNG.state=e}}export{u as default};
//# sourceMappingURL=index.mjs.map
