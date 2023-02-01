// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import{factory as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-binomial@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function u(c,g,b){var v,x,y,P,w;if(!m(c))throw new TypeError(f("0Pa4o",c));if(!o(g))throw new TypeError(f("0Pa7L",g));if(arguments.length>2){if(!d(b))throw new TypeError(f("0Pa2h",b));if(v=i(b,1),p(v,"iter")){if(!l(v.iter))throw new TypeError(f("0Pa35","iter",v.iter))}else v.iter=a;y=h(c,g,v),void 0===v.prng&&!1!==v.copy&&(v.state=y.state)}else y=h(c,g),v={iter:a,state:y.state};return w=0,t(x={},"next",L),t(x,"return",G),v&&v.prng?(t(x,"seed",null),t(x,"seedLength",null),s(x,"state",n(null),r),t(x,"stateLength",null),t(x,"byteLength",null)):(e(x,"seed",R),e(x,"seedLength",E),s(x,"state",q,z),e(x,"stateLength",T),e(x,"byteLength",k)),t(x,"PRNG",y.PRNG),j&&t(x,j,N),x;function L(){return w+=1,P||w>v.iter?{done:!0}:{value:y(),done:!1}}function G(t){return P=!0,arguments.length?{value:t,done:!0}:{done:!0}}function N(){return u(c,g,v)}function R(){return y.PRNG.seed}function E(){return y.PRNG.seedLength}function T(){return y.PRNG.stateLength}function k(){return y.PRNG.byteLength}function q(){return y.PRNG.state}function z(t){y.PRNG.state=t}}export{u as default};
//# sourceMappingURL=index.mjs.map
