

var baseUrl = (function (s) { return s.substring(0, s.length - 10); })(document.querySelector('script[src$="require.js"]').src);

require.config({
    baseUrl: baseUrl,
    packages: [
        {
            "name": "data",
            "location": baseUrl + "data",
            "main": "whatever"
        }]
});


var isAmdExample = !window.ko;

if (!isAmdExample) {
    define('knockout', [], window.ko);
    define('ko-grid-bundle', [], window['ko-grid-bundle']);
}
/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */
/*jslint */
/*global require: false, define: false, requirejs: false,
  window: false, clearInterval: false, document: false,
  self: false, setInterval: false */


define('domReady',[],function () {
    

    var isTop, testDiv, scrollIntervalId,
        isBrowser = typeof window !== "undefined" && window.document,
        isPageLoaded = !isBrowser,
        doc = isBrowser ? document : null,
        readyCalls = [];

    function runCallbacks(callbacks) {
        var i;
        for (i = 0; i < callbacks.length; i += 1) {
            callbacks[i](doc);
        }
    }

    function callReady() {
        var callbacks = readyCalls;

        if (isPageLoaded) {
            //Call the DOM ready callbacks
            if (callbacks.length) {
                readyCalls = [];
                runCallbacks(callbacks);
            }
        }
    }

    /**
     * Sets the page as loaded.
     */
    function pageLoaded() {
        if (!isPageLoaded) {
            isPageLoaded = true;
            if (scrollIntervalId) {
                clearInterval(scrollIntervalId);
            }

            callReady();
        }
    }

    if (isBrowser) {
        if (document.addEventListener) {
            //Standards. Hooray! Assumption here that if standards based,
            //it knows about DOMContentLoaded.
            document.addEventListener("DOMContentLoaded", pageLoaded, false);
            window.addEventListener("load", pageLoaded, false);
        } else if (window.attachEvent) {
            window.attachEvent("onload", pageLoaded);

            testDiv = document.createElement('div');
            try {
                isTop = window.frameElement === null;
            } catch (e) {}

            //DOMContentLoaded approximation that uses a doScroll, as found by
            //Diego Perini: http://javascript.nwbox.com/IEContentLoaded/,
            //but modified by other contributors, including jdalton
            if (testDiv.doScroll && isTop && window.external) {
                scrollIntervalId = setInterval(function () {
                    try {
                        testDiv.doScroll();
                        pageLoaded();
                    } catch (e) {}
                }, 30);
            }
        }

        //Check if document already complete, and if so, just trigger page load
        //listeners. Latest webkit browsers also use "interactive", and
        //will fire the onDOMContentLoaded before "interactive" but not after
        //entering "interactive" or "complete". More details:
        //http://dev.w3.org/html5/spec/the-end.html#the-end
        //http://stackoverflow.com/questions/3665561/document-readystate-of-interactive-vs-ondomcontentloaded
        //Hmm, this is more complicated on further use, see "firing too early"
        //bug: https://github.com/requirejs/domReady/issues/1
        //so removing the || document.readyState === "interactive" test.
        //There is still a window.onload binding that should get fired if
        //DOMContentLoaded is missed.
        if (document.readyState === "complete") {
            pageLoaded();
        }
    }

    /** START OF PUBLIC API **/

    /**
     * Registers a callback for DOM ready. If DOM is already ready, the
     * callback is called immediately.
     * @param {Function} callback
     */
    function domReady(callback) {
        if (isPageLoaded) {
            callback(doc);
        } else {
            readyCalls.push(callback);
        }
        return domReady;
    }

    domReady.version = '2.0.1';

    /**
     * Loader Plugin API method
     */
    domReady.load = function (name, req, onLoad, config) {
        if (config.isBuild) {
            onLoad(null);
        } else {
            domReady(onLoad);
        }
    };

    /** END OF PUBLIC API **/

    return domReady;
});

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.0.0
 */

(function(){function r(a,b){n[l]=a;n[l+1]=b;l+=2;2===l&&A()}function s(a){return"function"===typeof a}function F(){return function(){process.nextTick(t)}}function G(){var a=0,b=new B(t),c=document.createTextNode("");b.observe(c,{characterData:!0});return function(){c.data=a=++a%2}}function H(){var a=new MessageChannel;a.port1.onmessage=t;return function(){a.port2.postMessage(0)}}function I(){return function(){setTimeout(t,1)}}function t(){for(var a=0;a<l;a+=2)(0,n[a])(n[a+1]),n[a]=void 0,n[a+1]=void 0;
l=0}function p(){}function J(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function K(a,b,c){r(function(a){var e=!1,f=J(c,b,function(c){e||(e=!0,b!==c?q(a,c):m(a,c))},function(b){e||(e=!0,g(a,b))});!e&&f&&(e=!0,g(a,f))},a)}function L(a,b){1===b.a?m(a,b.b):2===a.a?g(a,b.b):u(b,void 0,function(b){q(a,b)},function(b){g(a,b)})}function q(a,b){if(a===b)g(a,new TypeError("You cannot resolve a promise with itself"));else if("function"===typeof b||"object"===typeof b&&null!==b)if(b.constructor===a.constructor)L(a,
b);else{var c;try{c=b.then}catch(d){v.error=d,c=v}c===v?g(a,v.error):void 0===c?m(a,b):s(c)?K(a,b,c):m(a,b)}else m(a,b)}function M(a){a.f&&a.f(a.b);x(a)}function m(a,b){void 0===a.a&&(a.b=b,a.a=1,0!==a.e.length&&r(x,a))}function g(a,b){void 0===a.a&&(a.a=2,a.b=b,r(M,a))}function u(a,b,c,d){var e=a.e,f=e.length;a.f=null;e[f]=b;e[f+1]=c;e[f+2]=d;0===f&&a.a&&r(x,a)}function x(a){var b=a.e,c=a.a;if(0!==b.length){for(var d,e,f=a.b,g=0;g<b.length;g+=3)d=b[g],e=b[g+c],d?C(c,d,e,f):e(f);a.e.length=0}}function D(){this.error=
null}function C(a,b,c,d){var e=s(c),f,k,h,l;if(e){try{f=c(d)}catch(n){y.error=n,f=y}f===y?(l=!0,k=f.error,f=null):h=!0;if(b===f){g(b,new TypeError("A promises callback cannot return that same promise."));return}}else f=d,h=!0;void 0===b.a&&(e&&h?q(b,f):l?g(b,k):1===a?m(b,f):2===a&&g(b,f))}function N(a,b){try{b(function(b){q(a,b)},function(b){g(a,b)})}catch(c){g(a,c)}}function k(a,b,c,d){this.n=a;this.c=new a(p,d);this.i=c;this.o(b)?(this.m=b,this.d=this.length=b.length,this.l(),0===this.length?m(this.c,
this.b):(this.length=this.length||0,this.k(),0===this.d&&m(this.c,this.b))):g(this.c,this.p())}function h(a){O++;this.b=this.a=void 0;this.e=[];if(p!==a){if(!s(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof h))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");N(this,a)}}var E=Array.isArray?Array.isArray:function(a){return"[object Array]"===
Object.prototype.toString.call(a)},l=0,w="undefined"!==typeof window?window:{},B=w.MutationObserver||w.WebKitMutationObserver,w="undefined"!==typeof Uint8ClampedArray&&"undefined"!==typeof importScripts&&"undefined"!==typeof MessageChannel,n=Array(1E3),A;A="undefined"!==typeof process&&"[object process]"==={}.toString.call(process)?F():B?G():w?H():I();var v=new D,y=new D;k.prototype.o=function(a){return E(a)};k.prototype.p=function(){return Error("Array Methods must be provided an Array")};k.prototype.l=
function(){this.b=Array(this.length)};k.prototype.k=function(){for(var a=this.length,b=this.c,c=this.m,d=0;void 0===b.a&&d<a;d++)this.j(c[d],d)};k.prototype.j=function(a,b){var c=this.n;"object"===typeof a&&null!==a?a.constructor===c&&void 0!==a.a?(a.f=null,this.g(a.a,b,a.b)):this.q(c.resolve(a),b):(this.d--,this.b[b]=this.h(a))};k.prototype.g=function(a,b,c){var d=this.c;void 0===d.a&&(this.d--,this.i&&2===a?g(d,c):this.b[b]=this.h(c));0===this.d&&m(d,this.b)};k.prototype.h=function(a){return a};
k.prototype.q=function(a,b){var c=this;u(a,void 0,function(a){c.g(1,b,a)},function(a){c.g(2,b,a)})};var O=0;h.all=function(a,b){return(new k(this,a,!0,b)).c};h.race=function(a,b){function c(a){q(e,a)}function d(a){g(e,a)}var e=new this(p,b);if(!E(a))return (g(e,new TypeError("You must pass an array to race.")), e);for(var f=a.length,h=0;void 0===e.a&&h<f;h++)u(this.resolve(a[h]),void 0,c,d);return e};h.resolve=function(a,b){if(a&&"object"===typeof a&&a.constructor===this)return a;var c=new this(p,b);
q(c,a);return c};h.reject=function(a,b){var c=new this(p,b);g(c,a);return c};h.prototype={constructor:h,then:function(a,b){var c=this.a;if(1===c&&!a||2===c&&!b)return this;var d=new this.constructor(p),e=this.b;if(c){var f=arguments[c-1];r(function(){C(c,d,f,e)})}else u(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}};var z={Promise:h,polyfill:function(){var a;a="undefined"!==typeof global?global:"undefined"!==typeof window&&window.document?window:self;"Promise"in a&&"resolve"in
a.Promise&&"reject"in a.Promise&&"all"in a.Promise&&"race"in a.Promise&&function(){var b;new a.Promise(function(a){b=a});return s(b)}()||(a.Promise=h)}};"function"===typeof define&&define.amd?define('es6-promise',[],function(){return z}):"undefined"!==typeof module&&module.exports?module.exports=z:"undefined"!==typeof this&&(this.ES6Promise=z)}).call(this);

/*!
 * Knockout JavaScript library v3.3.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(p){var y=this||(0,eval)("this"),w=y.document,M=y.navigator,u=y.jQuery,E=y.JSON;(function(p){"function"===typeof define&&define.amd?define('knockout',["exports","require"],p):"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?p(module.exports||exports):p(y.ko={})})(function(N,O){function J(a,d){return null===a||typeof a in Q?a===d:!1}function R(a,d){var c;return function(){c||(c=setTimeout(function(){c=p;a()},d))}}function S(a,d){var c;return function(){clearTimeout(c);
c=setTimeout(a,d)}}function K(b,d,c,e){a.d[b]={init:function(b,k,h,l,g){var m,x;a.w(function(){var q=a.a.c(k()),n=!c!==!q,r=!x;if(r||d||n!==m)r&&a.Z.oa()&&(x=a.a.la(a.e.childNodes(b),!0)),n?(r||a.e.T(b,a.a.la(x)),a.Ja(e?e(g,q):g,b)):a.e.ma(b),m=n},null,{q:b});return{controlsDescendantBindings:!0}}};a.h.ka[b]=!1;a.e.R[b]=!0}var a="undefined"!==typeof N?N:{};a.b=function(b,d){for(var c=b.split("."),e=a,f=0;f<c.length-1;f++)e=e[c[f]];e[c[c.length-1]]=d};a.D=function(a,d,c){a[d]=c};a.version="3.3.0";
a.b("version",a.version);a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function d(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function c(a,b){a.__proto__=b;return a}function e(b,c,g,d){var e=b[c].match(m)||[];a.a.o(g.match(m),function(b){a.a.ga(e,b,d)});b[c]=e.join(" ")}var f={__proto__:[]}instanceof Array,k={},h={};k[M&&/Firefox\/2/i.test(M.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];k.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
b(k,function(a,b){if(b.length)for(var c=0,g=b.length;c<g;c++)h[b[c]]=a});var l={propertychange:!0},g=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:p}(),m=/\S+/g;return{Bb:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],o:function(a,b){for(var c=0,g=a.length;c<g;c++)b(a[c],c)},m:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,
b);for(var c=0,g=a.length;c<g;c++)if(a[c]===b)return c;return-1},vb:function(a,b,c){for(var g=0,d=a.length;g<d;g++)if(b.call(c,a[g],g))return a[g];return null},ya:function(b,c){var g=a.a.m(b,c);0<g?b.splice(g,1):0===g&&b.shift()},wb:function(b){b=b||[];for(var c=[],g=0,d=b.length;g<d;g++)0>a.a.m(c,b[g])&&c.push(b[g]);return c},Ka:function(a,b){a=a||[];for(var c=[],g=0,d=a.length;g<d;g++)c.push(b(a[g],g));return c},xa:function(a,b){a=a||[];for(var c=[],g=0,d=a.length;g<d;g++)b(a[g],g)&&c.push(a[g]);
return c},ia:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,g=b.length;c<g;c++)a.push(b[c]);return a},ga:function(b,c,g){var d=a.a.m(a.a.cb(b),c);0>d?g&&b.push(c):g||b.splice(d,1)},za:f,extend:d,Fa:c,Ga:f?c:d,A:b,pa:function(a,b){if(!a)return a;var c={},g;for(g in a)a.hasOwnProperty(g)&&(c[g]=b(a[g],g,a));return c},Ra:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Jb:function(b){b=a.a.O(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),g=0,d=b.length;g<
d;g++)c.appendChild(a.S(b[g]));return c},la:function(b,c){for(var g=0,d=b.length,e=[];g<d;g++){var m=b[g].cloneNode(!0);e.push(c?a.S(m):m)}return e},T:function(b,c){a.a.Ra(b);if(c)for(var g=0,d=c.length;g<d;g++)b.appendChild(c[g])},Qb:function(b,c){var g=b.nodeType?[b]:b;if(0<g.length){for(var d=g[0],e=d.parentNode,m=0,f=c.length;m<f;m++)e.insertBefore(c[m],d);m=0;for(f=g.length;m<f;m++)a.removeNode(g[m])}},na:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==
b;)a.splice(0,1);if(1<a.length){var c=a[0],g=a[a.length-1];for(a.length=0;c!==g;)if(a.push(c),c=c.nextSibling,!c)return;a.push(g)}}return a},Sb:function(a,b){7>g?a.setAttribute("selected",b):a.selected=b},ib:function(a){return null===a||a===p?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Dc:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},jc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?
a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Qa:function(b){return a.a.jc(b,b.ownerDocument.documentElement)},tb:function(b){return!!a.a.vb(b,a.a.Qa)},v:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},n:function(b,c,d){var m=g&&l[c];if(!m&&u)u(b).bind(c,d);else if(m||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var e=function(a){d.call(b,a)},f="on"+c;b.attachEvent(f,e);a.a.C.fa(b,
function(){b.detachEvent(f,e)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,d,!1)},qa:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var g;"input"===a.a.v(b)&&b.type&&"click"==c.toLowerCase()?(g=b.type,g="checkbox"==g||"radio"==g):g=!1;if(u&&!g)u(b).trigger(c);else if("function"==typeof w.createEvent)if("function"==typeof b.dispatchEvent)g=w.createEvent(h[c]||"HTMLEvents"),g.initEvent(c,
!0,!0,y,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(g);else throw Error("The supplied element doesn't support dispatchEvent");else if(g&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.F(b)?b():b},cb:function(b){return a.F(b)?b.B():b},Ia:function(b,c,g){var d;c&&("object"===typeof b.classList?(d=b.classList[g?"add":"remove"],a.a.o(c.match(m),function(a){d.call(b.classList,a)})):"string"===
typeof b.className.baseVal?e(b.className,"baseVal",c,g):e(b,"className",c,g))},Ha:function(b,c){var g=a.a.c(c);if(null===g||g===p)g="";var d=a.e.firstChild(b);!d||3!=d.nodeType||a.e.nextSibling(d)?a.e.T(b,[b.ownerDocument.createTextNode(g)]):d.data=g;a.a.mc(b)},Rb:function(a,b){a.name=b;if(7>=g)try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},mc:function(a){9<=g&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},kc:function(a){if(g){var b=a.style.width;
a.style.width=0;a.style.width=b}},Bc:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var g=[],d=b;d<=c;d++)g.push(d);return g},O:function(a){for(var b=[],c=0,g=a.length;c<g;c++)b.push(a[c]);return b},Hc:6===g,Ic:7===g,M:g,Db:function(b,c){for(var g=a.a.O(b.getElementsByTagName("input")).concat(a.a.O(b.getElementsByTagName("textarea"))),d="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},m=[],e=g.length-1;0<=e;e--)d(g[e])&&m.push(g[e]);return m},yc:function(b){return"string"==
typeof b&&(b=a.a.ib(b))?E&&E.parse?E.parse(b):(new Function("return "+b))():null},jb:function(b,c,g){if(!E||!E.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");return E.stringify(a.a.c(b),c,g)},zc:function(c,g,d){d=d||{};var m=d.params||{},e=d.includeFields||this.Bb,f=c;if("object"==typeof c&&"form"===a.a.v(c))for(var f=c.action,
l=e.length-1;0<=l;l--)for(var k=a.a.Db(c,e[l]),h=k.length-1;0<=h;h--)m[k[h].name]=k[h].value;g=a.a.c(g);var s=w.createElement("form");s.style.display="none";s.action=f;s.method="post";for(var p in g)c=w.createElement("input"),c.type="hidden",c.name=p,c.value=a.a.jb(a.a.c(g[p])),s.appendChild(c);b(m,function(a,b){var c=w.createElement("input");c.type="hidden";c.name=a;c.value=b;s.appendChild(c)});w.body.appendChild(s);d.submitter?d.submitter(s):s.submit();setTimeout(function(){s.parentNode.removeChild(s)},
0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.o);a.b("utils.arrayFirst",a.a.vb);a.b("utils.arrayFilter",a.a.xa);a.b("utils.arrayGetDistinctValues",a.a.wb);a.b("utils.arrayIndexOf",a.a.m);a.b("utils.arrayMap",a.a.Ka);a.b("utils.arrayPushAll",a.a.ia);a.b("utils.arrayRemoveItem",a.a.ya);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Bb);a.b("utils.getFormFields",a.a.Db);a.b("utils.peekObservable",a.a.cb);a.b("utils.postJson",a.a.zc);a.b("utils.parseJson",a.a.yc);a.b("utils.registerEventHandler",
a.a.n);a.b("utils.stringifyJson",a.a.jb);a.b("utils.range",a.a.Bc);a.b("utils.toggleDomNodeCssClass",a.a.Ia);a.b("utils.triggerEvent",a.a.qa);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.A);a.b("utils.addOrRemoveItem",a.a.ga);a.b("utils.setTextContent",a.a.Ha);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var d=this;if(1===arguments.length)return function(){return d.apply(a,arguments)};var c=Array.prototype.slice.call(arguments,1);return function(){var e=
c.slice(0);e.push.apply(e,arguments);return d.apply(a,e)}});a.a.f=new function(){function a(b,k){var h=b[c];if(!h||"null"===h||!e[h]){if(!k)return p;h=b[c]="ko"+d++;e[h]={}}return e[h]}var d=0,c="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===p?p:e[d]},set:function(c,d,e){if(e!==p||a(c,!1)!==p)a(c,!0)[d]=e},clear:function(a){var b=a[c];return b?(delete e[b],a[c]=null,!0):!1},I:function(){return d++ +c}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);
a.a.C=new function(){function b(b,d){var e=a.a.f.get(b,c);e===p&&d&&(e=[],a.a.f.set(b,c,e));return e}function d(c){var e=b(c,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](c);a.a.f.clear(c);a.a.C.cleanExternalData(c);if(f[c.nodeType])for(e=c.firstChild;c=e;)e=c.nextSibling,8===c.nodeType&&d(c)}var c=a.a.f.I(),e={1:!0,8:!0,9:!0},f={1:!0,9:!0};return{fa:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},Pb:function(d,e){var f=b(d,!1);f&&(a.a.ya(f,
e),0==f.length&&a.a.f.set(d,c,p))},S:function(b){if(e[b.nodeType]&&(d(b),f[b.nodeType])){var c=[];a.a.ia(c,b.getElementsByTagName("*"));for(var l=0,g=c.length;l<g;l++)d(c[l])}return b},removeNode:function(b){a.S(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){u&&"function"==typeof u.cleanData&&u.cleanData([a])}}};a.S=a.a.C.S;a.removeNode=a.a.C.removeNode;a.b("cleanNode",a.S);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.C);a.b("utils.domNodeDisposal.addDisposeCallback",
a.a.C.fa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.C.Pb);(function(){a.a.ca=function(b,d){var c;if(u)if(u.parseHTML)c=u.parseHTML(b,d)||[];else{if((c=u.clean([b],d))&&c[0]){for(var e=c[0];e.parentNode&&11!==e.parentNode.nodeType;)e=e.parentNode;e.parentNode&&e.parentNode.removeChild(e)}}else{(e=d)||(e=w);c=e.parentWindow||e.defaultView||y;var f=a.a.ib(b).toLowerCase(),e=e.createElement("div"),f=f.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!f.indexOf("<tr")&&[2,"<table><tbody>",
"</tbody></table>"]||(!f.indexOf("<td")||!f.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""],k="ignored<div>"+f[1]+b+f[2]+"</div>";for("function"==typeof c.innerShiv?e.appendChild(c.innerShiv(k)):e.innerHTML=k;f[0]--;)e=e.lastChild;c=a.a.O(e.lastChild.childNodes)}return c};a.a.gb=function(b,d){a.a.Ra(b);d=a.a.c(d);if(null!==d&&d!==p)if("string"!=typeof d&&(d=d.toString()),u)u(b).html(d);else for(var c=a.a.ca(d,b.ownerDocument),e=0;e<c.length;e++)b.appendChild(c[e])}})();
a.b("utils.parseHtmlFragment",a.a.ca);a.b("utils.setHtml",a.a.gb);a.H=function(){function b(c,d){if(c)if(8==c.nodeType){var f=a.H.Lb(c.nodeValue);null!=f&&d.push({ic:c,wc:f})}else if(1==c.nodeType)for(var f=0,k=c.childNodes,h=k.length;f<h;f++)b(k[f],d)}var d={};return{$a:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);
d[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},Wb:function(a,b){var f=d[a];if(f===p)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete d[a]}},Xb:function(c,d){var f=[];b(c,f);for(var k=0,h=f.length;k<h;k++){var l=f[k].ic,g=[l];d&&a.a.ia(g,d);a.H.Wb(f[k].wc,g);l.nodeValue="";l.parentNode&&l.parentNode.removeChild(l)}},Lb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.H);
a.b("memoization.memoize",a.H.$a);a.b("memoization.unmemoize",a.H.Wb);a.b("memoization.parseMemoText",a.H.Lb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.H.Xb);a.Sa={throttle:function(b,d){b.throttleEvaluation=d;var c=null;return a.j({read:b,write:function(a){clearTimeout(c);c=setTimeout(function(){b(a)},d)}})},rateLimit:function(a,d){var c,e,f;"number"==typeof d?c=d:(c=d.timeout,e=d.method);f="notifyWhenChangesStop"==e?S:R;a.Za(function(a){return f(a,c)})},notify:function(a,d){a.equalityComparer=
"always"==d?null:J}};var Q={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Sa);a.Ub=function(b,d,c){this.da=b;this.La=d;this.hc=c;this.Gb=!1;a.D(this,"dispose",this.p)};a.Ub.prototype.p=function(){this.Gb=!0;this.hc()};a.Q=function(){a.a.Ga(this,a.Q.fn);this.G={};this.rb=1};var z={U:function(b,d,c){var e=this;c=c||"change";var f=new a.Ub(e,d?b.bind(d):b,function(){a.a.ya(e.G[c],f);e.ua&&e.ua(c)});e.ja&&e.ja(c);e.G[c]||(e.G[c]=[]);e.G[c].push(f);return f},notifySubscribers:function(b,
d){d=d||"change";"change"===d&&this.Yb();if(this.Ba(d))try{a.k.xb();for(var c=this.G[d].slice(0),e=0,f;f=c[e];++e)f.Gb||f.La(b)}finally{a.k.end()}},Aa:function(){return this.rb},pc:function(a){return this.Aa()!==a},Yb:function(){++this.rb},Za:function(b){var d=this,c=a.F(d),e,f,k;d.ta||(d.ta=d.notifySubscribers,d.notifySubscribers=function(a,b){b&&"change"!==b?"beforeChange"===b?d.pb(a):d.ta(a,b):d.qb(a)});var h=b(function(){c&&k===d&&(k=d());e=!1;d.Wa(f,k)&&d.ta(f=k)});d.qb=function(a){e=!0;k=a;
h()};d.pb=function(a){e||(f=a,d.ta(a,"beforeChange"))}},Ba:function(a){return this.G[a]&&this.G[a].length},nc:function(b){if(b)return this.G[b]&&this.G[b].length||0;var d=0;a.a.A(this.G,function(a,b){d+=b.length});return d},Wa:function(a,d){return!this.equalityComparer||!this.equalityComparer(a,d)},extend:function(b){var d=this;b&&a.a.A(b,function(b,e){var f=a.Sa[b];"function"==typeof f&&(d=f(d,e)||d)});return d}};a.D(z,"subscribe",z.U);a.D(z,"extend",z.extend);a.D(z,"getSubscriptionsCount",z.nc);
a.a.za&&a.a.Fa(z,Function.prototype);a.Q.fn=z;a.Hb=function(a){return null!=a&&"function"==typeof a.U&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.Q);a.b("isSubscribable",a.Hb);a.Z=a.k=function(){function b(a){c.push(e);e=a}function d(){e=c.pop()}var c=[],e,f=0;return{xb:b,end:d,Ob:function(b){if(e){if(!a.Hb(b))throw Error("Only subscribable things can act as dependencies");e.La(b,b.ac||(b.ac=++f))}},u:function(a,c,e){try{return b(),a.apply(c,e||[])}finally{d()}},oa:function(){if(e)return e.w.oa()},
Ca:function(){if(e)return e.Ca}}}();a.b("computedContext",a.Z);a.b("computedContext.getDependenciesCount",a.Z.oa);a.b("computedContext.isInitial",a.Z.Ca);a.b("computedContext.isSleeping",a.Z.Jc);a.b("ignoreDependencies",a.Gc=a.k.u);a.r=function(b){function d(){if(0<arguments.length)return d.Wa(c,arguments[0])&&(d.X(),c=arguments[0],d.W()),this;a.k.Ob(d);return c}var c=b;a.Q.call(d);a.a.Ga(d,a.r.fn);d.B=function(){return c};d.W=function(){d.notifySubscribers(c)};d.X=function(){d.notifySubscribers(c,
"beforeChange")};a.D(d,"peek",d.B);a.D(d,"valueHasMutated",d.W);a.D(d,"valueWillMutate",d.X);return d};a.r.fn={equalityComparer:J};var H=a.r.Ac="__ko_proto__";a.r.fn[H]=a.r;a.a.za&&a.a.Fa(a.r.fn,a.Q.fn);a.Ta=function(b,d){return null===b||b===p||b[H]===p?!1:b[H]===d?!0:a.Ta(b[H],d)};a.F=function(b){return a.Ta(b,a.r)};a.Da=function(b){return"function"==typeof b&&b[H]===a.r||"function"==typeof b&&b[H]===a.j&&b.qc?!0:!1};a.b("observable",a.r);a.b("isObservable",a.F);a.b("isWriteableObservable",a.Da);
a.b("isWritableObservable",a.Da);a.ba=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.r(b);a.a.Ga(b,a.ba.fn);return b.extend({trackArrayChanges:!0})};a.ba.fn={remove:function(b){for(var d=this.B(),c=[],e="function"!=typeof b||a.F(b)?function(a){return a===b}:b,f=0;f<d.length;f++){var k=d[f];e(k)&&(0===c.length&&this.X(),c.push(k),d.splice(f,1),f--)}c.length&&this.W();return c},
removeAll:function(b){if(b===p){var d=this.B(),c=d.slice(0);this.X();d.splice(0,d.length);this.W();return c}return b?this.remove(function(c){return 0<=a.a.m(b,c)}):[]},destroy:function(b){var d=this.B(),c="function"!=typeof b||a.F(b)?function(a){return a===b}:b;this.X();for(var e=d.length-1;0<=e;e--)c(d[e])&&(d[e]._destroy=!0);this.W()},destroyAll:function(b){return b===p?this.destroy(function(){return!0}):b?this.destroy(function(d){return 0<=a.a.m(b,d)}):[]},indexOf:function(b){var d=this();return a.a.m(d,
b)},replace:function(a,d){var c=this.indexOf(a);0<=c&&(this.X(),this.B()[c]=d,this.W())}};a.a.o("pop push reverse shift sort splice unshift".split(" "),function(b){a.ba.fn[b]=function(){var a=this.B();this.X();this.yb(a,b,arguments);a=a[b].apply(a,arguments);this.W();return a}});a.a.o(["slice"],function(b){a.ba.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.a.za&&a.a.Fa(a.ba.fn,a.r.fn);a.b("observableArray",a.ba);a.Sa.trackArrayChanges=function(b){function d(){if(!c){c=!0;var g=
b.notifySubscribers;b.notifySubscribers=function(a,b){b&&"change"!==b||++k;return g.apply(this,arguments)};var d=[].concat(b.B()||[]);e=null;f=b.U(function(c){c=[].concat(c||[]);if(b.Ba("arrayChange")){var g;if(!e||1<k)e=a.a.Ma(d,c,{sparse:!0});g=e}d=c;e=null;k=0;g&&g.length&&b.notifySubscribers(g,"arrayChange")})}}if(!b.yb){var c=!1,e=null,f,k=0,h=b.ja,l=b.ua;b.ja=function(a){h&&h.call(b,a);"arrayChange"===a&&d()};b.ua=function(a){l&&l.call(b,a);"arrayChange"!==a||b.Ba("arrayChange")||(f.p(),c=!1)};
b.yb=function(b,d,f){function l(a,b,c){return h[h.length]={status:a,value:b,index:c}}if(c&&!k){var h=[],r=b.length,v=f.length,t=0;switch(d){case "push":t=r;case "unshift":for(d=0;d<v;d++)l("added",f[d],t+d);break;case "pop":t=r-1;case "shift":r&&l("deleted",b[t],t);break;case "splice":d=Math.min(Math.max(0,0>f[0]?r+f[0]:f[0]),r);for(var r=1===v?r:Math.min(d+(f[1]||0),r),v=d+v-2,t=Math.max(r,v),G=[],A=[],p=2;d<t;++d,++p)d<r&&A.push(l("deleted",b[d],d)),d<v&&G.push(l("added",f[p],d));a.a.Cb(A,G);break;
default:return}e=h}}}};a.w=a.j=function(b,d,c){function e(a,b,c){if(I&&b===g)throw Error("A 'pure' computed must not be called recursively");B[a]=c;c.sa=F++;c.ea=b.Aa()}function f(){var a,b;for(a in B)if(B.hasOwnProperty(a)&&(b=B[a],b.da.pc(b.ea)))return!0}function k(){!s&&B&&a.a.A(B,function(a,b){b.p&&b.p()});B=null;F=0;G=!0;s=r=!1}function h(){var a=g.throttleEvaluation;a&&0<=a?(clearTimeout(z),z=setTimeout(function(){l(!0)},a)):g.nb?g.nb():l(!0)}function l(b){if(!v&&!G){if(y&&y()){if(!t){w();return}}else t=
!1;v=!0;try{var c=B,m=F,f=I?p:!F;a.k.xb({La:function(a,b){G||(m&&c[b]?(e(b,a,c[b]),delete c[b],--m):B[b]||e(b,a,s?{da:a}:a.U(h)))},w:g,Ca:f});B={};F=0;try{var l=d?A.call(d):A()}finally{a.k.end(),m&&!s&&a.a.A(c,function(a,b){b.p&&b.p()}),r=!1}g.Wa(n,l)&&(s||q(n,"beforeChange"),n=l,s?g.Yb():b&&q(n));f&&q(n,"awake")}finally{v=!1}F||w()}}function g(){if(0<arguments.length){if("function"===typeof C)C.apply(d,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}a.k.Ob(g);(r||s&&f())&&l();return n}function m(){(r&&!F||s&&f())&&l();return n}function x(){return r||0<F}function q(a,b){g.notifySubscribers(a,b)}var n,r=!0,v=!1,t=!1,G=!1,A=b,I=!1,s=!1;A&&"object"==typeof A?(c=A,A=c.read):(c=c||{},A||(A=c.read));if("function"!=typeof A)throw Error("Pass a function that returns the value of the ko.computed");var C=c.write,D=c.disposeWhenNodeIsRemoved||c.q||null,u=c.disposeWhen||c.Pa,y=u,w=k,B={},F=0,z=null;d||(d=c.owner);a.Q.call(g);a.a.Ga(g,a.j.fn);
g.B=m;g.oa=function(){return F};g.qc="function"===typeof C;g.p=function(){w()};g.$=x;var T=g.Za;g.Za=function(a){T.call(g,a);g.nb=function(){g.pb(n);r=!0;g.qb(g)}};c.pure?(s=I=!0,g.ja=function(b){if(!G&&s&&"change"==b){s=!1;if(r||f())B=null,F=0,r=!0,l();else{var c=[];a.a.A(B,function(a,b){c[b.sa]=a});a.a.o(c,function(a,b){var c=B[a],g=c.da.U(h);g.sa=b;g.ea=c.ea;B[a]=g})}G||q(n,"awake")}},g.ua=function(b){G||"change"!=b||g.Ba("change")||(a.a.A(B,function(a,b){b.p&&(B[a]={da:b.da,sa:b.sa,ea:b.ea},b.p())}),
s=!0,q(p,"asleep"))},g.bc=g.Aa,g.Aa=function(){s&&(r||f())&&l();return g.bc()}):c.deferEvaluation&&(g.ja=function(a){"change"!=a&&"beforeChange"!=a||m()});a.D(g,"peek",g.B);a.D(g,"dispose",g.p);a.D(g,"isActive",g.$);a.D(g,"getDependenciesCount",g.oa);D&&(t=!0,D.nodeType&&(y=function(){return!a.a.Qa(D)||u&&u()}));s||c.deferEvaluation||l();D&&x()&&D.nodeType&&(w=function(){a.a.C.Pb(D,w);k()},a.a.C.fa(D,w));return g};a.sc=function(b){return a.Ta(b,a.j)};z=a.r.Ac;a.j[z]=a.r;a.j.fn={equalityComparer:J};
a.j.fn[z]=a.j;a.a.za&&a.a.Fa(a.j.fn,a.Q.fn);a.b("dependentObservable",a.j);a.b("computed",a.j);a.b("isComputed",a.sc);a.Nb=function(b,d){if("function"===typeof b)return a.w(b,d,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.w(b,d)};a.b("pureComputed",a.Nb);(function(){function b(a,f,k){k=k||new c;a=f(a);if("object"!=typeof a||null===a||a===p||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};k.save(a,h);d(a,function(c){var g=
f(a[c]);switch(typeof g){case "boolean":case "number":case "string":case "function":h[c]=g;break;case "object":case "undefined":var d=k.get(g);h[c]=d!==p?d:b(g,f,k)}});return h}function d(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function c(){this.keys=[];this.mb=[]}a.Vb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.F(b)&&
10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Vb(b);return a.a.jb(b,c,d)};c.prototype={save:function(b,c){var d=a.a.m(this.keys,b);0<=d?this.mb[d]=c:(this.keys.push(b),this.mb.push(c))},get:function(b){b=a.a.m(this.keys,b);return 0<=b?this.mb[b]:p}}})();a.b("toJS",a.Vb);a.b("toJSON",a.toJSON);(function(){a.i={s:function(b){switch(a.a.v(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.ab):7>=a.a.M?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?
b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.i.s(b.options[b.selectedIndex]):p;default:return b.value}},Y:function(b,d,c){switch(a.a.v(b)){case "option":switch(typeof d){case "string":a.a.f.set(b,a.d.options.ab,p);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=d;break;default:a.a.f.set(b,a.d.options.ab,d),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof d?d:""}break;case "select":if(""===d||null===d)d=p;for(var e=-1,f=0,k=b.options.length,
h;f<k;++f)if(h=a.i.s(b.options[f]),h==d||""==h&&d===p){e=f;break}if(c||0<=e||d===p&&1<b.size)b.selectedIndex=e;break;default:if(null===d||d===p)d="";b.value=d}}}})();a.b("selectExtensions",a.i);a.b("selectExtensions.readValue",a.i.s);a.b("selectExtensions.writeValue",a.i.Y);a.h=function(){function b(b){b=a.a.ib(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),x,h=[],n=0;if(d){d.push(",");for(var r=0,v;v=d[r];++r){var t=v.charCodeAt(0);if(44===t){if(0>=n){c.push(x&&h.length?{key:x,
value:h.join("")}:{unknown:x||h.join("")});x=n=0;h=[];continue}}else if(58===t){if(!n&&!x&&1===h.length){x=h.pop();continue}}else 47===t&&r&&1<v.length?(t=d[r-1].match(f))&&!k[t[0]]&&(b=b.substr(b.indexOf(v)+1),d=b.match(e),d.push(","),r=-1,v="/"):40===t||123===t||91===t?++n:41===t||125===t||93===t?--n:x||h.length||34!==t&&39!==t||(v=v.slice(1,-1));h.push(v)}}return c}var d=["true","false","null","undefined"],c=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]",
"g"),f=/[\])"'A-Za-z0-9_$]+$/,k={"in":1,"return":1,"typeof":1},h={};return{ka:[],V:h,bb:b,Ea:function(e,g){function m(b,g){var e;if(!r){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(g=l.preprocess(g,b,m)))return;if(l=h[b])e=g,0<=a.a.m(d,e)?e=!1:(l=e.match(c),e=null===l?!1:l[1]?"Object("+l[1]+")"+l[2]:e),l=e;l&&k.push("'"+b+"':function(_z){"+e+"=_z}")}n&&(g="function(){return "+g+" }");f.push("'"+b+"':"+g)}g=g||{};var f=[],k=[],n=g.valueAccessors,r=g.bindingParams,v="string"===typeof e?b(e):e;
a.a.o(v,function(a){m(a.key||a.unknown,a.value)});k.length&&m("_ko_property_writers","{"+k.join(",")+" }");return f.join(",")},vc:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},ra:function(b,c,d,e,f){if(b&&a.F(b))!a.Da(b)||f&&b.B()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",a.h.ka);a.b("expressionRewriting.parseObjectLiteral",a.h.bb);a.b("expressionRewriting.preProcessBindings",
a.h.Ea);a.b("expressionRewriting._twoWayBindings",a.h.V);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.Ea);(function(){function b(a){return 8==a.nodeType&&k.test(f?a.text:a.nodeValue)}function d(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function c(a,c){for(var e=a,f=1,l=[];e=e.nextSibling;){if(d(e)&&(f--,0===f))return l;l.push(e);b(e)&&f++}if(!c)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,
b){var d=c(a,b);return d?0<d.length?d[d.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,k=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,l={ul:!0,ol:!0};a.e={R:{},childNodes:function(a){return b(a)?c(a):a.childNodes},ma:function(c){if(b(c)){c=a.e.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Ra(c)},T:function(c,d){if(b(c)){a.e.ma(c);for(var e=c.nextSibling,
f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],e)}else a.a.T(c,d)},Mb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},Fb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.e.Mb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||d(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&
d(a.nextSibling)?null:a.nextSibling},oc:b,Fc:function(a){return(a=(f?a.text:a.nodeValue).match(k))?a[1]:null},Kb:function(c){if(l[a.a.v(c)]){var m=c.firstChild;if(m){do if(1===m.nodeType){var f;f=m.firstChild;var h=null;if(f){do if(h)h.push(f);else if(b(f)){var k=e(f,!0);k?f=k:h=[f]}else d(f)&&(h=[f]);while(f=f.nextSibling)}if(f=h)for(h=m.nextSibling,k=0;k<f.length;k++)h?c.insertBefore(f[k],h):c.appendChild(f[k])}while(m=m.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",
a.e.R);a.b("virtualElements.emptyNode",a.e.ma);a.b("virtualElements.insertAfter",a.e.Fb);a.b("virtualElements.prepend",a.e.Mb);a.b("virtualElements.setDomNodeChildren",a.e.T);(function(){a.L=function(){this.ec={}};a.a.extend(a.L.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.e.oc(b);default:return!1}},getBindings:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,
d,b):null;return a.g.sb(c,b,d,!1)},getBindingAccessors:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,d,b,{valueAccessors:!0}):null;return a.g.sb(c,b,d,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.Fc(b);default:return null}},parseBindingsString:function(b,d,c,e){try{var f=this.ec,k=b+(e&&e.valueAccessors||""),h;if(!(h=f[k])){var l,g="with($context){with($data||{}){return{"+a.h.Ea(b,e)+"}}}";l=new Function("$context",
"$element",g);h=f[k]=l}return h(d,c)}catch(m){throw m.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+m.message,m;}}});a.L.instance=new a.L})();a.b("bindingProvider",a.L);(function(){function b(a){return function(){return a}}function d(a){return a()}function c(b){return a.a.pa(a.k.u(b),function(a,c){return function(){return b()[c]}})}function e(d,g,e){return"function"===typeof d?c(d.bind(null,g,e)):a.a.pa(d,b)}function f(a,b){return c(this.getBindings.bind(this,a,b))}function k(b,
c,d){var g,e=a.e.firstChild(c),f=a.L.instance,m=f.preprocessNode;if(m){for(;g=e;)e=a.e.nextSibling(g),m.call(f,g);e=a.e.firstChild(c)}for(;g=e;)e=a.e.nextSibling(g),h(b,g,d)}function h(b,c,d){var e=!0,f=1===c.nodeType;f&&a.e.Kb(c);if(f&&d||a.L.instance.nodeHasBindings(c))e=g(c,null,b,d).shouldBindDescendants;e&&!x[a.a.v(c)]&&k(b,c,!f)}function l(b){var c=[],d={},g=[];a.a.A(b,function I(e){if(!d[e]){var f=a.getBindingHandler(e);f&&(f.after&&(g.push(e),a.a.o(f.after,function(c){if(b[c]){if(-1!==a.a.m(g,
c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+g.join(", "));I(c)}}),g.length--),c.push({key:e,Eb:f}));d[e]=!0}});return c}function g(b,c,g,e){var m=a.a.f.get(b,q);if(!c){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,q,!0)}!m&&e&&a.Tb(b,g);var h;if(c&&"function"!==typeof c)h=c;else{var k=a.L.instance,x=k.getBindingAccessors||f,n=a.j(function(){(h=c?c(g,b):x.call(k,b,g))&&g.K&&g.K();return h},null,{q:b});
h&&n.$()||(n=null)}var u;if(h){var w=n?function(a){return function(){return d(n()[a])}}:function(a){return h[a]},y=function(){return a.a.pa(n?n():h,d)};y.get=function(a){return h[a]&&d(w(a))};y.has=function(a){return a in h};e=l(h);a.a.o(e,function(c){var d=c.Eb.init,e=c.Eb.update,f=c.key;if(8===b.nodeType&&!a.e.R[f])throw Error("The binding '"+f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.k.u(function(){var a=d(b,w(f),y,g.$data,g);if(a&&a.controlsDescendantBindings){if(u!==
p)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof e&&a.j(function(){e(b,w(f),y,g.$data,g)},null,{q:b})}catch(m){throw m.message='Unable to process binding "'+f+": "+h[f]+'"\nMessage: '+m.message,m;}})}return{shouldBindDescendants:u===p}}function m(b){return b&&b instanceof a.N?b:new a.N(b)}a.d={};var x={script:!0,textarea:!0};a.getBindingHandler=function(b){return a.d[b]};
a.N=function(b,c,d,g){var e=this,f="function"==typeof b&&!a.F(b),m,l=a.j(function(){var m=f?b():b,h=a.a.c(m);c?(c.K&&c.K(),a.a.extend(e,c),l&&(e.K=l)):(e.$parents=[],e.$root=h,e.ko=a);e.$rawData=m;e.$data=h;d&&(e[d]=h);g&&g(e,c,h);return e.$data},null,{Pa:function(){return m&&!a.a.tb(m)},q:!0});l.$()&&(e.K=l,l.equalityComparer=null,m=[],l.Zb=function(b){m.push(b);a.a.C.fa(b,function(b){a.a.ya(m,b);m.length||(l.p(),e.K=l=p)})})};a.N.prototype.createChildContext=function(b,c,d){return new a.N(b,this,
c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.N.prototype.extend=function(b){return new a.N(this.K||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var q=a.a.f.I(),n=a.a.f.I();a.Tb=function(b,c){if(2==arguments.length)a.a.f.set(b,n,c),c.K&&c.K.Zb(b);else return a.a.f.get(b,n)};a.va=function(b,c,d){1===b.nodeType&&a.e.Kb(b);return g(b,c,m(d),!0)};a.cc=function(b,
c,d){d=m(d);return a.va(b,e(c,d,b),d)};a.Ja=function(a,b){1!==b.nodeType&&8!==b.nodeType||k(m(a),b,!0)};a.ub=function(a,b){!u&&y.jQuery&&(u=y.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||y.document.body;h(m(a),b,!0)};a.Oa=function(b){switch(b.nodeType){case 1:case 8:var c=a.Tb(b);if(c)return c;if(b.parentNode)return a.Oa(b.parentNode)}return p};a.gc=function(b){return(b=a.Oa(b))?
b.$data:p};a.b("bindingHandlers",a.d);a.b("applyBindings",a.ub);a.b("applyBindingsToDescendants",a.Ja);a.b("applyBindingAccessorsToNode",a.va);a.b("applyBindingsToNode",a.cc);a.b("contextFor",a.Oa);a.b("dataFor",a.gc)})();(function(b){function d(d,e){var g=f.hasOwnProperty(d)?f[d]:b,m;g?g.U(e):(g=f[d]=new a.Q,g.U(e),c(d,function(a,b){var c=!(!b||!b.synchronous);k[d]={definition:a,tc:c};delete f[d];m||c?g.notifySubscribers(a):setTimeout(function(){g.notifySubscribers(a)},0)}),m=!0)}function c(a,b){e("getConfig",
[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,g,f){f||(f=a.g.loaders.slice(0));var k=f.shift();if(k){var q=k[c];if(q){var n=!1;if(q.apply(k,d.concat(function(a){n?g(null):null!==a?g(a):e(c,d,g,f)}))!==b&&(n=!0,!k.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,g,f)}else g(null)}var f={},k={};a.g={get:function(c,e){var g=k.hasOwnProperty(c)?k[c]:
b;g?g.tc?a.k.u(function(){e(g.definition)}):setTimeout(function(){e(g.definition)},0):d(c,e)},zb:function(a){delete k[a]},ob:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.zb)})();(function(){function b(b,c,d,e){function k(){0===--v&&e(h)}var h={},v=2,t=d.template;d=d.viewModel;t?f(c,t,function(c){a.g.ob("loadTemplate",[b,c],function(a){h.template=a;k()})}):k();d?f(c,d,function(c){a.g.ob("loadViewModel",[b,c],function(a){h[l]=a;k()})}):
k()}function d(a,b,c){if("function"===typeof b)c(function(a){return new b(a)});else if("function"===typeof b[l])c(b[l]);else if("instance"in b){var e=b.instance;c(function(){return e})}else"viewModel"in b?d(a,b.viewModel,c):a("Unknown viewModel value: "+b)}function c(b){switch(a.a.v(b)){case "script":return a.a.ca(b.text);case "textarea":return a.a.ca(b.value);case "template":if(e(b.content))return a.a.la(b.content.childNodes)}return a.a.la(b.childNodes)}function e(a){return y.DocumentFragment?a instanceof
DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?O||y.require?(O||y.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function k(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.g.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.Xa(b))throw Error("Component "+b+" is already registered");h[b]=c};a.g.Xa=function(a){return a in h};a.g.Ec=function(b){delete h[b];a.g.zb(b)};a.g.Ab={getConfig:function(a,
b){b(h.hasOwnProperty(a)?h[a]:null)},loadComponent:function(a,c,d){var e=k(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,d,f){b=k(b);if("string"===typeof d)f(a.a.ca(d));else if(d instanceof Array)f(d);else if(e(d))f(a.a.O(d.childNodes));else if(d.element)if(d=d.element,y.HTMLElement?d instanceof HTMLElement:d&&d.tagName&&1===d.nodeType)f(c(d));else if("string"===typeof d){var l=w.getElementById(d);l?f(c(l)):b("Cannot find element with ID "+d)}else b("Unknown element type: "+d);else b("Unknown template value: "+
d)},loadViewModel:function(a,b,c){d(k(a),b,c)}};var l="createViewModel";a.b("components.register",a.g.register);a.b("components.isRegistered",a.g.Xa);a.b("components.unregister",a.g.Ec);a.b("components.defaultLoader",a.g.Ab);a.g.loaders.push(a.g.Ab);a.g.$b=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=d.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.pa(f,function(d){return a.w(d,null,{q:b})}),k=a.a.pa(f,function(d){var e=d.B();return d.$()?a.w({read:function(){return a.a.c(d())},
write:a.Da(e)&&function(a){d()(a)},q:b}):e});k.hasOwnProperty("$raw")||(k.$raw=f);return k}return{$raw:{}}}a.g.getComponentNameForNode=function(b){b=a.a.v(b);return a.g.Xa(b)&&b};a.g.sb=function(c,d,f,k){if(1===d.nodeType){var h=a.g.getComponentNameForNode(d);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');var l={name:h,params:b(d,f)};c.component=k?function(){return l}:l}}return c};var d=new a.L;9>a.a.M&&(a.g.register=function(a){return function(b){w.createElement(b);
return a.apply(this,arguments)}}(a.g.register),w.createDocumentFragment=function(b){return function(){var d=b(),f=a.g.$b,k;for(k in f)f.hasOwnProperty(k)&&d.createElement(k);return d}}(w.createDocumentFragment))})();(function(b){function d(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.la(c);a.e.T(d,b)}function c(a,b,c,d){var e=a.createViewModel;return e?e.call(a,d,{element:b,templateNodes:c}):d}var e=0;a.d.component={init:function(f,k,h,l,g){function m(){var a=x&&
x.dispose;"function"===typeof a&&a.call(x);q=null}var x,q,n=a.a.O(a.e.childNodes(f));a.a.C.fa(f,m);a.w(function(){var l=a.a.c(k()),h,t;"string"===typeof l?h=l:(h=a.a.c(l.name),t=a.a.c(l.params));if(!h)throw Error("No component name specified");var p=q=++e;a.g.get(h,function(e){if(q===p){m();if(!e)throw Error("Unknown component '"+h+"'");d(h,e,f);var l=c(e,f,n,t);e=g.createChildContext(l,b,function(a){a.$component=l;a.$componentTemplateNodes=n});x=l;a.Ja(e,f)}})},null,{q:f});return{controlsDescendantBindings:!0}}};
a.e.R.component=!0})();var P={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,d){var c=a.a.c(d())||{};a.a.A(c,function(c,d){d=a.a.c(d);var k=!1===d||null===d||d===p;k&&b.removeAttribute(c);8>=a.a.M&&c in P?(c=P[c],k?b.removeAttribute(c):b[c]=d):k||b.setAttribute(c,d.toString());"name"===c&&a.a.Rb(b,k?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,d,c){function e(){var e=b.checked,f=x?k():e;if(!a.Z.Ca()&&(!l||e)){var h=a.k.u(d);g?m!==f?(e&&(a.a.ga(h,
f,!0),a.a.ga(h,m,!1)),m=f):a.a.ga(h,f,e):a.h.ra(h,c,"checked",f,!0)}}function f(){var c=a.a.c(d());b.checked=g?0<=a.a.m(c,k()):h?c:k()===c}var k=a.Nb(function(){return c.has("checkedValue")?a.a.c(c.get("checkedValue")):c.has("value")?a.a.c(c.get("value")):b.value}),h="checkbox"==b.type,l="radio"==b.type;if(h||l){var g=h&&a.a.c(d())instanceof Array,m=g?k():p,x=l||g;l&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.w(e,null,{q:b});a.a.n(b,"click",e);a.w(f,null,{q:b})}}};a.h.V.checked=!0;a.d.checkedValue=
{update:function(b,d){b.value=a.a.c(d())}}})();a.d.css={update:function(b,d){var c=a.a.c(d());null!==c&&"object"==typeof c?a.a.A(c,function(c,d){d=a.a.c(d);a.a.Ia(b,c,d)}):(c=String(c||""),a.a.Ia(b,b.__ko__cssValue,!1),b.__ko__cssValue=c,a.a.Ia(b,c,!0))}};a.d.enable={update:function(b,d){var c=a.a.c(d());c&&b.disabled?b.removeAttribute("disabled"):c||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,d){a.d.enable.update(b,function(){return!a.a.c(d())})}};a.d.event={init:function(b,d,c,
e,f){var k=d()||{};a.a.A(k,function(h){"string"==typeof h&&a.a.n(b,h,function(b){var g,m=d()[h];if(m){try{var k=a.a.O(arguments);e=f.$data;k.unshift(e);g=m.apply(e,k)}finally{!0!==g&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===c.get(h+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={Ib:function(b){return function(){var d=b(),c=a.a.cb(d);if(!c||"number"==typeof c.length)return{foreach:d,templateEngine:a.P.Va};a.a.c(d);return{foreach:c.data,as:c.as,
includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,beforeMove:c.beforeMove,afterMove:c.afterMove,templateEngine:a.P.Va}}},init:function(b,d){return a.d.template.init(b,a.d.foreach.Ib(d))},update:function(b,d,c,e,f){return a.d.template.update(b,a.d.foreach.Ib(d),c,e,f)}};a.h.ka.foreach=!1;a.e.R.foreach=!0;a.d.hasfocus={init:function(b,d,c){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(m){g=
f.body}e=g===b}f=d();a.h.ra(f,c,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),k=e.bind(null,!1);a.a.n(b,"focus",f);a.a.n(b,"focusin",f);a.a.n(b,"blur",k);a.a.n(b,"focusout",k)},update:function(b,d){var c=!!a.a.c(d());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===c||(c?b.focus():b.blur(),a.k.u(a.a.qa,null,[b,c?"focusin":"focusout"]))}};a.h.V.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.V.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},
update:function(b,d){a.a.gb(b,d())}};K("if");K("ifnot",!1,!0);K("with",!0,!1,function(a,d){return a.createChildContext(d)});var L={};a.d.options={init:function(b){if("select"!==a.a.v(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,d,c){function e(){return a.a.xa(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function k(d,e){if(r&&
m)a.i.Y(b,a.a.c(c.get("value")),!0);else if(n.length){var g=0<=a.a.m(n,a.i.s(e[0]));a.a.Sb(e[0],g);r&&!g&&a.k.u(a.a.qa,null,[b,"change"])}}var h=b.multiple,l=0!=b.length&&h?b.scrollTop:null,g=a.a.c(d()),m=c.get("valueAllowUnset")&&c.has("value"),x=c.get("optionsIncludeDestroyed");d={};var q,n=[];m||(h?n=a.a.Ka(e(),a.i.s):0<=b.selectedIndex&&n.push(a.i.s(b.options[b.selectedIndex])));g&&("undefined"==typeof g.length&&(g=[g]),q=a.a.xa(g,function(b){return x||b===p||null===b||!a.a.c(b._destroy)}),c.has("optionsCaption")&&
(g=a.a.c(c.get("optionsCaption")),null!==g&&g!==p&&q.unshift(L)));var r=!1;d.beforeRemove=function(a){b.removeChild(a)};g=k;c.has("optionsAfterRender")&&"function"==typeof c.get("optionsAfterRender")&&(g=function(b,d){k(0,d);a.k.u(c.get("optionsAfterRender"),null,[d[0],b!==L?b:p])});a.a.fb(b,q,function(d,e,g){g.length&&(n=!m&&g[0].selected?[a.i.s(g[0])]:[],r=!0);e=b.ownerDocument.createElement("option");d===L?(a.a.Ha(e,c.get("optionsCaption")),a.i.Y(e,p)):(g=f(d,c.get("optionsValue"),d),a.i.Y(e,a.a.c(g)),
d=f(d,c.get("optionsText"),g),a.a.Ha(e,d));return[e]},d,g);a.k.u(function(){m?a.i.Y(b,a.a.c(c.get("value")),!0):(h?n.length&&e().length<n.length:n.length&&0<=b.selectedIndex?a.i.s(b.options[b.selectedIndex])!==n[0]:n.length||0<=b.selectedIndex)&&a.a.qa(b,"change")});a.a.kc(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.d.options.ab=a.a.f.I();a.d.selectedOptions={after:["options","foreach"],init:function(b,d,c){a.a.n(b,"change",function(){var e=d(),f=[];a.a.o(b.getElementsByTagName("option"),
function(b){b.selected&&f.push(a.i.s(b))});a.h.ra(e,c,"selectedOptions",f)})},update:function(b,d){if("select"!=a.a.v(b))throw Error("values binding applies only to SELECT elements");var c=a.a.c(d());c&&"number"==typeof c.length&&a.a.o(b.getElementsByTagName("option"),function(b){var d=0<=a.a.m(c,a.i.s(b));a.a.Sb(b,d)})}};a.h.V.selectedOptions=!0;a.d.style={update:function(b,d){var c=a.a.c(d()||{});a.a.A(c,function(c,d){d=a.a.c(d);if(null===d||d===p||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,
d,c,e,f){if("function"!=typeof d())throw Error("The value for a submit binding must be a function");a.a.n(b,"submit",function(a){var c,e=d();try{c=e.call(f.$data,b)}finally{!0!==c&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,d){a.a.Ha(b,d())}};a.e.R.text=!0;(function(){if(y&&y.navigator)var b=function(a){if(a)return parseFloat(a[1])},d=y.opera&&y.opera.version&&parseInt(y.opera.version()),c=y.navigator.userAgent,
e=b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),f=b(c.match(/Firefox\/([^ ]*)/));if(10>a.a.M)var k=a.a.f.I(),h=a.a.f.I(),l=function(b){var c=this.activeElement;(c=c&&a.a.f.get(c,h))&&c(b)},g=function(b,c){var d=b.ownerDocument;a.a.f.get(d,k)||(a.a.f.set(d,k,!0),a.a.n(d,"selectionchange",l));a.a.f.set(b,h,c)};a.d.textInput={init:function(b,c,l){function h(c,d){a.a.n(b,c,d)}function k(){var d=a.a.c(c());if(null===d||d===p)d="";w!==p&&d===w?setTimeout(k,4):b.value!==d&&(u=d,b.value=d)}function v(){A||
(w=b.value,A=setTimeout(t,4))}function t(){clearTimeout(A);w=A=p;var d=b.value;u!==d&&(u=d,a.h.ra(c(),l,"textInput",d))}var u=b.value,A,w;10>a.a.M?(h("propertychange",function(a){"value"===a.propertyName&&t()}),8==a.a.M&&(h("keyup",t),h("keydown",t)),8<=a.a.M&&(g(b,t),h("dragend",v))):(h("input",t),5>e&&"textarea"===a.a.v(b)?(h("keydown",v),h("paste",v),h("cut",v)):11>d?h("keydown",v):4>f&&(h("DOMAutoComplete",t),h("dragdrop",t),h("drop",t)));h("change",t);a.w(k,null,{q:b})}};a.h.V.textInput=!0;a.d.textinput=
{preprocess:function(a,b,c){c("textInput",a)}}})();a.d.uniqueName={init:function(b,d){if(d()){var c="ko_unique_"+ ++a.d.uniqueName.fc;a.a.Rb(b,c)}}};a.d.uniqueName.fc=0;a.d.value={after:["options","foreach"],init:function(b,d,c){if("input"!=b.tagName.toLowerCase()||"checkbox"!=b.type&&"radio"!=b.type){var e=["change"],f=c.get("valueUpdate"),k=!1,h=null;f&&("string"==typeof f&&(f=[f]),a.a.ia(e,f),e=a.a.wb(e));var l=function(){h=null;k=!1;var e=d(),g=a.i.s(b);a.h.ra(e,c,"value",g)};!a.a.M||"input"!=
b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.m(e,"propertychange")||(a.a.n(b,"propertychange",function(){k=!0}),a.a.n(b,"focus",function(){k=!1}),a.a.n(b,"blur",function(){k&&l()}));a.a.o(e,function(c){var d=l;a.a.Dc(c,"after")&&(d=function(){h=a.i.s(b);setTimeout(l,0)},c=c.substring(5));a.a.n(b,c,d)});var g=function(){var e=a.a.c(d()),f=a.i.s(b);if(null!==h&&e===h)setTimeout(g,0);else if(e!==f)if("select"===a.a.v(b)){var l=c.get("valueAllowUnset"),
f=function(){a.i.Y(b,e,l)};f();l||e===a.i.s(b)?setTimeout(f,0):a.k.u(a.a.qa,null,[b,"change"])}else a.i.Y(b,e)};a.w(g,null,{q:b})}else a.va(b,{checkedValue:d})},update:function(){}};a.h.V.value=!0;a.d.visible={update:function(b,d){var c=a.a.c(d()),e="none"!=b.style.display;c&&!e?b.style.display="":!c&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(d,c,e,f,k){return a.d.event.init.call(this,d,function(){var a={};a[b]=c();return a},e,f,k)}}})("click");a.J=function(){};a.J.prototype.renderTemplateSource=
function(){throw Error("Override renderTemplateSource");};a.J.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.J.prototype.makeTemplateSource=function(b,d){if("string"==typeof b){d=d||w;var c=d.getElementById(b);if(!c)throw Error("Cannot find template with ID "+b);return new a.t.l(c)}if(1==b.nodeType||8==b.nodeType)return new a.t.ha(b);throw Error("Unknown template type: "+b);};a.J.prototype.renderTemplate=function(a,d,c,e){a=this.makeTemplateSource(a,
e);return this.renderTemplateSource(a,d,c,e)};a.J.prototype.isTemplateRewritten=function(a,d){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,d).data("isRewritten")};a.J.prototype.rewriteTemplate=function(a,d,c){a=this.makeTemplateSource(a,c);d=d(a.text());a.text(d);a.data("isRewritten",!0)};a.b("templateEngine",a.J);a.kb=function(){function b(b,c,d,h){b=a.h.bb(b);for(var l=a.h.ka,g=0;g<b.length;g++){var m=b[g].key;if(l.hasOwnProperty(m)){var x=l[m];if("function"===typeof x){if(m=
x(b[g].value))throw Error(m);}else if(!x)throw Error("This template engine does not support the '"+m+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.Ea(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var d=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,c=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{lc:function(b,
c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kb.xc(b,c)},d)},xc:function(a,f){return a.replace(d,function(a,c,d,e,m){return b(m,c,d,f)}).replace(c,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},dc:function(b,c){return a.H.$a(function(d,h){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.va(l,b,h)})}}}();a.b("__tr_ambtns",a.kb.dc);(function(){a.t={};a.t.l=function(a){this.l=a};a.t.l.prototype.text=function(){var b=a.a.v(this.l),b="script"===b?"text":
"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.l[b];var d=arguments[0];"innerHTML"===b?a.a.gb(this.l,d):this.l[b]=d};var b=a.a.f.I()+"_";a.t.l.prototype.data=function(c){if(1===arguments.length)return a.a.f.get(this.l,b+c);a.a.f.set(this.l,b+c,arguments[1])};var d=a.a.f.I();a.t.ha=function(a){this.l=a};a.t.ha.prototype=new a.t.l;a.t.ha.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.l,d)||{};b.lb===p&&b.Na&&(b.lb=b.Na.innerHTML);return b.lb}a.a.f.set(this.l,
d,{lb:arguments[0]})};a.t.l.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.l,d)||{}).Na;a.a.f.set(this.l,d,{Na:arguments[0]})};a.b("templateSources",a.t);a.b("templateSources.domElement",a.t.l);a.b("templateSources.anonymousTemplate",a.t.ha)})();(function(){function b(b,c,d){var e;for(c=a.e.nextSibling(c);b&&(e=b)!==c;)b=a.e.nextSibling(e),d(e,b)}function d(c,d){if(c.length){var e=c[0],f=c[c.length-1],h=e.parentNode,k=a.L.instance,r=k.preprocessNode;if(r){b(e,f,function(a,
b){var c=a.previousSibling,d=r.call(k,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.na(c,h))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.ub(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.H.Xb(b,[d])});a.a.na(c,h)}}function c(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,q){q=q||{};var n=(b&&c(b)||f||{}).ownerDocument,r=q.templateEngine||k;a.kb.lc(f,r,n);f=r.renderTemplate(f,h,q,n);if("number"!=
typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.e.T(b,f);n=!0;break;case "replaceNode":a.a.Qb(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(d(f,h),q.afterRender&&a.k.u(q.afterRender,null,[f,h.$data]));return f}function f(b,c,d){return a.F(b)?b():"function"===typeof b?b(c,d):b}var k;a.hb=function(b){if(b!=p&&!(b instanceof a.J))throw Error("templateEngine must inherit from ko.templateEngine");
k=b};a.eb=function(b,d,h,x,q){h=h||{};if((h.templateEngine||k)==p)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(x){var n=c(x);return a.j(function(){var k=d&&d instanceof a.N?d:new a.N(a.a.c(d)),p=f(b,k.$data,k),k=e(x,q,p,k,h);"replaceNode"==q&&(x=k,n=c(x))},null,{Pa:function(){return!n||!a.a.Qa(n)},q:n&&"replaceNode"==q?n.parentNode:n})}return a.H.$a(function(c){a.eb(b,d,h,c,"replaceNode")})};a.Cc=function(b,c,h,k,q){function n(a,b){d(b,v);h.afterRender&&
h.afterRender(b,a);v=null}function r(a,c){v=q.createChildContext(a,h.as,function(a){a.$index=c});var d=f(b,a,v);return e(null,"ignoreTargetNode",d,v,h)}var v;return a.j(function(){var b=a.a.c(c)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.xa(b,function(b){return h.includeDestroyed||b===p||null===b||!a.a.c(b._destroy)});a.k.u(a.a.fb,null,[k,b,r,h,n])},null,{q:k})};var h=a.a.f.I();a.d.template={init:function(b,c){var d=a.a.c(c());if("string"==typeof d||d.name)a.e.ma(b);else{if("nodes"in d){if(d=
d.nodes||[],a.F(d))throw Error('The "nodes" option must be a plain, non-observable array.');}else d=a.e.childNodes(b);d=a.a.Jb(d);(new a.t.ha(b)).nodes(d)}return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var k=c(),r;c=a.a.c(k);d=!0;e=null;"string"==typeof c?c={}:(k=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)),r=a.a.c(c.data));"foreach"in c?e=a.Cc(k||b,d&&c.foreach||[],c,b,f):d?(f="data"in c?f.createChildContext(r,c.as):f,e=a.eb(k||b,f,c,b)):a.e.ma(b);f=
e;(r=a.a.f.get(b,h))&&"function"==typeof r.p&&r.p();a.a.f.set(b,h,f&&f.$()?f:p)}};a.h.ka.template=function(b){b=a.h.bb(b);return 1==b.length&&b[0].unknown||a.h.vc(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.e.R.template=!0})();a.b("setTemplateEngine",a.hb);a.b("renderTemplate",a.eb);a.a.Cb=function(a,d,c){if(a.length&&d.length){var e,f,k,h,l;for(e=f=0;(!c||e<c)&&(h=a[f]);++f){for(k=0;l=d[k];++k)if(h.value===l.value){h.moved=l.index;l.moved=
h.index;d.splice(k,1);e=k=0;break}e+=k}}};a.a.Ma=function(){function b(b,c,e,f,k){var h=Math.min,l=Math.max,g=[],m,p=b.length,q,n=c.length,r=n-p||1,v=p+n+1,t,u,w;for(m=0;m<=p;m++)for(u=t,g.push(t=[]),w=h(n,m+r),q=l(0,m-1);q<=w;q++)t[q]=q?m?b[m-1]===c[q-1]?u[q-1]:h(u[q]||v,t[q-1]||v)+1:q+1:m+1;h=[];l=[];r=[];m=p;for(q=n;m||q;)n=g[m][q]-1,q&&n===g[m][q-1]?l.push(h[h.length]={status:e,value:c[--q],index:q}):m&&n===g[m-1][q]?r.push(h[h.length]={status:f,value:b[--m],index:m}):(--q,--m,k.sparse||h.push({status:"retained",
value:c[q]}));a.a.Cb(l,r,10*p);return h.reverse()}return function(a,c,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];c=c||[];return a.length<=c.length?b(a,c,"added","deleted",e):b(c,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Ma);(function(){function b(b,d,f,k,h){var l=[],g=a.j(function(){var g=d(f,h,a.a.na(l,b))||[];0<l.length&&(a.a.Qb(l,g),k&&a.k.u(k,null,[f,g,h]));l.length=0;a.a.ia(l,g)},null,{q:b,Pa:function(){return!a.a.tb(l)}});return{aa:l,j:g.$()?g:p}}var d=a.a.f.I();
a.a.fb=function(c,e,f,k,h){function l(b,d){s=u[d];t!==d&&(z[b]=s);s.Ua(t++);a.a.na(s.aa,c);r.push(s);y.push(s)}function g(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.o(c[d].aa,function(a){b(a,d,c[d].wa)})}e=e||[];k=k||{};var m=a.a.f.get(c,d)===p,u=a.a.f.get(c,d)||[],q=a.a.Ka(u,function(a){return a.wa}),n=a.a.Ma(q,e,k.dontLimitMoves),r=[],v=0,t=0,w=[],y=[];e=[];for(var z=[],q=[],s,C=0,D,E;D=n[C];C++)switch(E=D.moved,D.status){case "deleted":E===p&&(s=u[v],s.j&&s.j.p(),w.push.apply(w,a.a.na(s.aa,
c)),k.beforeRemove&&(e[C]=s,y.push(s)));v++;break;case "retained":l(C,v++);break;case "added":E!==p?l(C,E):(s={wa:D.value,Ua:a.r(t++)},r.push(s),y.push(s),m||(q[C]=s))}g(k.beforeMove,z);a.a.o(w,k.beforeRemove?a.S:a.removeNode);for(var C=0,m=a.e.firstChild(c),H;s=y[C];C++){s.aa||a.a.extend(s,b(c,f,s.wa,h,s.Ua));for(v=0;n=s.aa[v];m=n.nextSibling,H=n,v++)n!==m&&a.e.Fb(c,n,H);!s.rc&&h&&(h(s.wa,s.aa,s.Ua),s.rc=!0)}g(k.beforeRemove,e);g(k.afterMove,z);g(k.afterAdd,q);a.a.f.set(c,d,r)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",
a.a.fb);a.P=function(){this.allowTemplateRewriting=!1};a.P.prototype=new a.J;a.P.prototype.renderTemplateSource=function(b,d,c,e){if(d=(9>a.a.M?0:b.nodes)?b.nodes():null)return a.a.O(d.cloneNode(!0).childNodes);b=b.text();return a.a.ca(b,e)};a.P.Va=new a.P;a.hb(a.P.Va);a.b("nativeTemplateEngine",a.P);(function(){a.Ya=function(){var a=this.uc=function(){if(!u||!u.tmpl)return 0;try{if(0<=u.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,
e,f,k){k=k||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=u.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=u.extend({koBindingContext:e},f.templateOptions);e=u.tmpl(h,b,e);e.appendTo(k.createElement("div"));u.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(u.tmpl.tag.ko_code={open:"__.push($1 || '');"},u.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Ya.prototype=new a.J;var b=new a.Ya;0<b.uc&&a.hb(b);a.b("jqueryTmplTemplateEngine",a.Ya)})()})})();})();

/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function t(){var p,q,r,u;p=function(){var n;n=function(){function a(g,a){return Object.prototype.hasOwnProperty.call(g,a)}return{t:function(a,h){if(a===h)return!0;var f=!!h&&"function"===typeof h.valueOf;return!!a&&"function"===typeof a.valueOf&&f&&a.valueOf()===h.valueOf()},extend:function(a,h){Array.prototype.slice.call(arguments,1).forEach(function(f){for(var h=Object.keys(f),e=0,k=h.length;e<k;e++){var d=h[e],c=Object.getOwnPropertyDescriptor(f,d);void 0!==c&&c.enumerable&&Object.defineProperty(a,
d,c)}});return a},B:function(g,h){for(var f in g)a(g,f)&&h(f,g[f])},n:a,F:function(g,h){var f={},m;for(m in g)a(g,m)&&(f[m]=h(g[m],m,g));return f}}}();return function(a){return a}(function(a,g,h){return{d:a,b:g,k:h}}(function(a){function g(e){return e.filter(function(e,a,c){return c.lastIndexOf(e)===a})}function h(e,a){for(var d=e.length,c=-1,b=0;b<d;++b)if(a(e[b])){if(0<=c)throw Error("Multiple elements match the predicate.");c=b}return c}function f(e,a){return e&&"function"===typeof e.valueOf&&
a&&"function"===typeof a.valueOf?e.valueOf()<=a.valueOf()?e.valueOf()<a.valueOf()?-1:0:1:e<=a?e<a?-1:0:1}function m(a,k){var d=a.length,c=Array(d),b=Array(d),l;for(l=0;l<d;++l)c[l]=l,b[l]=a[l];l=a;a=b;b=l;c.sort(function(c,b){return k(a[c],a[b])||c-b});for(l=0;l<d;++l)b[l]=a[c[l]];return b}return{contains:function(a,k){return 0<=a.indexOf(k)},w:function(e){if(50<e.length){for(var k=e.length,d={},c,b=0;b<k;++b)if(c=e[b],"string"===typeof c)if(a.n(d,c))break;else d[c]=!0;else if(e.lastIndexOf(c)!==
b)break;if(!(b>=k)){for(var l=e.slice(0,b);b<k;++b)c=e[b],"string"===typeof c?a.n(d,c)||(d[c]=!0,l.push(c)):e.lastIndexOf(c)===b&&l.push(c);e=l}}else e=g(e);return e},A:function(a,k){return Array.prototype.concat.apply([],a.map(k))},H:function(a,k){var d=h(a,k);if(0>d)throw Error("None of the elements matches the predicate.");return a[d]},I:function(a,k){var d=h(a,k);return 0<=d?a[d]:null},J:function(a,k){var d=k||f;window.chrome?d=m(a,d):(a.sort(d),d=a);return d}}}(n),n,{u:function(a){return a.replace(/([A-Z])/g,
function(a){return"-"+a.toLowerCase()})},v:function(a){return a.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()})},format:function(a){var g=arguments;return a.replace(/{(\d+)}/g,function(a,f){var m=parseInt(f,10)+1;return typeof g.length<=m?a:g[m]})}}))}();q=function(n){return function(a,g){return n.b.extend(a,{get stringifyable(){return g()}})}}(p);r=function(n,a){function g(){return 0}function h(a,d){return"string"===typeof a&&"string"===typeof d?a.localeCompare(d):a<=d?a<d?-1:0:1}function f(a,
d){n.b.extend(a,{get onResultOf(){return this.h},get reverse(){return this.reverse},get callable(){return this.g}},{get h(){return function(c){return m(c,a)}},get reverse(){return function(){return d||e(a)}},get g(){return a}})}function m(e,d){function c(a,c){return d(e(a),e(c))}f(c);a(c,function(){return{type:"by-function-comparator","function":e.stringifyable,comparator:d.stringifyable}});return c}function e(e){function d(a,b){return-e(a,b)}f(d,e);a(d,function(){return{type:"reversed-comparator",
comparator:e.stringifyable}});return d}f(h);a(h,function(){return{type:"natural-comparator"}});f(g);a(g,function(){return{type:"indifferent-comparator"}});return{D:g,G:h}}(p,q);u=function(n,a){function g(a){n.b.extend(a,{get callable(){return this.g}},{get g(){return a}})}return{p:function(h){function f(a){return a[h]}g(f);a(f,function(){return{type:"property-accessor",propertyName:h}});return f}}}(p,q);p=function(n,a){function g(){return!0}function h(){return!1}function f(a,b){n.b.extend(a,{get and(){return this.f},
get negate(){return this.o},get onResultOf(){return this.h},get or(){return this.i},get callable(){return this.g}},{get f(){return function(b){return m([a,b])}},get o(){return function(){return b||k(a)}},get h(){return function(b){return e(b,a)}},get i(){return function(b){return d([a,b])}},get g(){return a}})}function m(c){function b(a){for(var b=0,d=c.length;b<d;++b)if(!c[b](a))return!1;return!0}if(!c.length)return g;f(b);a(b,function(){return{type:"and-predicate",components:c.map(function(a){return a.stringifyable})}});
return b}function e(c,b){function d(a){return b(c(a))}f(d);a(d,function(){return{type:"by-function-predicate","function":c.stringifyable,predicate:b.stringifyable}});return d}function k(c){function b(a){return!c(a)}f(b,c);a(b,function(){return{type:"negated-predicate",predicate:c.stringifyable}});return b}function d(c){function b(a){for(var b=0,d=c.length;b<d;++b)if(c[b](a))return!0;return!1}if(!c.length)return h;f(b);a(b,function(){return{type:"or-predicate",components:c.map(function(a){return a.stringifyable})}});
return b}f(h);a(h,function(){return{type:"always-false-predicate"}});f(g);a(g,function(){return{type:"always-true-predicate"}});return{r:h,s:g,f:m,C:function(c,b){function d(a){return c(a)}f(d);a(d,b);return d},i:d,q:function(c){function b(a){return c.test(a)}f(b);a(b,function(){return{type:"regular-expression-predicate",regularExpression:c.source,caseSensitive:!c.ignoreCase,multiline:c.multiline}});return b}}}(p,q);return function(n){return n}({comparators:{indifferent:r.D,natural:r.G},functions:{propertyAccessor:u.p},
predicates:{alwaysFalse:p.r,alwaysTrue:p.s,and:p.f,from:p.C,or:p.i,regularExpression:p.q},makeStringifyable:q,stringifyReplacer:function(n,a){return"function"===typeof a||"object"===typeof a?a.stringifyable||a:a}})}"function"===typeof define&&define.amd?define('stringifyable',[],t):window.stringifyable=t();


define('ko-grid-examples/data/generic-data-source-factory',['knockout', 'ko-data-source', 'stringifyable'], function (ko, dataSource, stringifyable) {
    var stringifyReplacer = function (key, value) {
        if (value === Number.POSITIVE_INFINITY)
            return 'Number.POSITIVE_INFINITY';

        return stringifyable.stringifyReplacer(key, value);
    };

    return function (args) {
        var idProperty = args.id || 'id';
        var observableProperties = args.observableProperties;
        var numericProperties = args.numericProperties || [];

        var idSelector = function (e) { return e[idProperty]; };
        var observableStateTransitioner = new dataSource.DefaultObservableStateTransitioner({observableProperties: observableProperties});

        var clientSideDatSourceFactory = function () {
            var observables = new dataSource.ObservableEntries(idSelector, observableStateTransitioner);
            var clientSideDataSource = new dataSource.ClientSideDataSource(idSelector, observables);

            args.entries().then(function (entries) {
                clientSideDataSource.addEntries(entries);
            });

            return clientSideDataSource;
        };

        clientSideDatSourceFactory.remote = function (options) {
            options = options || {};
            var io = options.io || {
                    logRequest: function (r) { window.console.log('Mock Server Request: ', r); },
                    logResponse: function (r) { window.console.log('Mock Server Response: ', r); }
                };

            var observables = new dataSource.ObservableEntries(idSelector, observableStateTransitioner);
            var querier = {
                issue: function (query) {
                    io.logRequest(JSON.stringify({
                        predicate: query.predicate,
                        comparator: query.comparator,
                        offset: query.offset,
                        limit: query.limit,
                    }, stringifyReplacer, '  '));

                    return args.entries().then(function (entries) {
                        return new Promise(function (resolve) {
                            window.setTimeout(function () {
                                var matching = entries.filter(query.predicate);
                                matching.sort(query.comparator);
                                var clipped = matching.slice(query.offset, query.offset + query.limit);

                                var result = {
                                    unfilteredSize: entries.length,
                                    filteredSize: matching.length,
                                    values: clipped
                                };

                                if (options.computeStatistics) {
                                    var statistics = {};
                                    numericProperties.forEach(function (p) {
                                        statistics[p] = {'minimum': Number.POSITIVE_INFINITY, 'maximum': Number.NEGATIVE_INFINITY, 'sum': 0}
                                    });
                                    matching.forEach(function (e) {
                                        numericProperties.forEach(function (p) {
                                            var propertyStatistics = statistics[p];
                                            var v = e[p];
                                            propertyStatistics['minimum'] = Math.min(propertyStatistics['minimum'], v);
                                            propertyStatistics['maximum'] = Math.max(propertyStatistics['maximum'], v);
                                            propertyStatistics['sum'] += v;
                                        });
                                    });

                                    result.statistics = statistics;
                                }

                                io.logResponse(JSON.stringify(result, stringifyReplacer, '  '));

                                result.values = dataSource.streams.streamArray(clipped);
                                resolve(result);
                            }, options.latency || 500);
                        });
                    });
                }
            };
            return new dataSource.ServerSideDataSource(idSelector, querier, observables);
        };

        return clientSideDatSourceFactory;
    };
});



define('ko-grid-examples/data/data-promiser',[],function () {
    return function (moduleSpec, mapper) {
        return function () {
            return new Promise(function (resolve, reject) {
                require([moduleSpec], function (data) {
                    resolve(data);
                }, reject);
            }).then(function (x) {
                    return mapper ? x.map(mapper) : x;
                });
        };
    };
});



define('ko-grid-examples/data/countries-by-population',['./generic-data-source-factory', './data-promiser'], function (genericDataSourceFactory, dataPromiser) {
    return genericDataSourceFactory({
        entries: dataPromiser('json!data/countries-by-population.json', function (e) {
            return {
                id: e.id,
                rank: e.rank,
                country: e.country,
                countryArticle: e.countryArticle,
                population: e.population,
                date: new Date(e.date),
                percentage: e.percentage
            };
        }),
        observableProperties: ['rank', 'country', 'country', 'countryArticle', 'population', 'date', 'percentage'],
        numericProperties: ['rank', 'population', 'percentage']
    });
});



define('ko-grid-examples/data/people',['./generic-data-source-factory', './data-promiser'], function (genericDataSourceFactory, dataPromiser) {
    return genericDataSourceFactory({
        entries: dataPromiser('json!data/people.json', function (e) {
            return {
                id: e.user.SSN,
                gender: e.user.gender,
                title: e.user.name.title,
                firstName: cap(e.user.name.first),
                lastName: cap(e.user.name.last),
                birthday: new Date((e.user.dob - e.user.dob % (24 * 60 * 60)) * 1000),
                pictures: e.user.picture,
                email: e.user.email,
                phone: e.user.phone
            };
        }),
        observableProperties: ['firstName', 'lastName', 'birthday', 'email', 'phone']
    });

    function cap(s) {
        return s[0].toUpperCase() + s.slice(1);
    }
});



define('ko-grid-examples/data/unicode-characters',['./generic-data-source-factory', './data-promiser'], function (genericDataSourceFactory, dataPromiser) {
    return genericDataSourceFactory({
        entries: dataPromiser('json!data/unicode-characters.json'),
        observableProperties: []
    });
});

/**
 * @license RequireJS text 2.0.5 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require: false, XMLHttpRequest: false, ActiveXObject: false,
  define: false, window: false, process: false, Packages: false,
  java: false, location: false */

define('text',['module'], function (module) {
    

    var text, fs,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = [],
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.5',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.indexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1, name.length);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node)) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback) {
            var file = fs.readFileSync(url, 'utf8');
            //Remove BOM (Byte Mark Order) from utf8 files if it is there.
            if (file.indexOf('\uFEFF') === 0) {
                file = file.substring(1);
            }
            callback(file);
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        errback(err);
                    } else {
                        callback(xhr.responseText);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                stringBuffer.append(line);

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    }

    return text;
});

/** @license
 * RequireJS plugin for loading JSON files
 * - depends on Text plugin and it was HEAVILY "inspired" by it as well.
 * Author: Miller Medeiros
 * Version: 0.3.2 (2013/08/17)
 * Released under the MIT license
 */
define('json',['text'], function(text){

    var CACHE_BUST_QUERY_PARAM = 'bust',
        CACHE_BUST_FLAG = '!bust',
        jsonParse = (typeof JSON !== 'undefined' && typeof JSON.parse === 'function')? JSON.parse : function(val){
            return eval('('+ val +')'); //quick and dirty
        },
        buildMap = {};

    function cacheBust(url){
        url = url.replace(CACHE_BUST_FLAG, '');
        url += (url.indexOf('?') < 0)? '?' : '&';
        return url + CACHE_BUST_QUERY_PARAM +'='+ Math.round(2147483647 * Math.random());
    }

    //API
    return {

        load : function(name, req, onLoad, config) {
            if ( config.isBuild && (config.inlineJSON === false || name.indexOf(CACHE_BUST_QUERY_PARAM +'=') !== -1) ) {
                //avoid inlining cache busted JSON or if inlineJSON:false
                onLoad(null);
            } else {
                text.get(req.toUrl(name), function(data){
                    if (config.isBuild) {
                        buildMap[name] = data;
                        onLoad(data);
                    } else {
                        onLoad(jsonParse(data));
                    }
                },
                    onLoad.error, {
                        accept: 'application/json'
                    }
                );
            }
        },

        normalize : function (name, normalize) {
            // used normalize to avoid caching references to a "cache busted" request
            if (name.indexOf(CACHE_BUST_FLAG) !== -1) {
                name = cacheBust(name);
            }
            // resolve any relative paths
            return normalize(name);
        },

        //write method based on RequireJS official text plugin by James Burke
        //https://github.com/jrburke/requirejs/blob/master/text.js
        write : function(pluginName, moduleName, write){
            if(moduleName in buildMap){
                var content = buildMap[moduleName];
                write('define("'+ pluginName +'!'+ moduleName +'", function(){ return '+ content +';});\n');
            }
        }

    };
});


define("json!dist/examples/examples.json", function(){ return [
  {
    "title": "Overview",
    "filename": "index.html"
  },
  {
    "title": "Sizing and Scrolling",
    "elements": [
      {
        "title": "Auto Height",
        "filename": "auto-height.html"
      },
      {
        "title": "Fixed Height",
        "filename": "fixed-height.html"
      },
      {
        "title": "Content Width",
        "filename": "content-width.html"
      },
      {
        "title": "Container Width",
        "filename": "container-width.html"
      }
    ]
  },
  {
    "title": "Column Scaling",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      },
      {
        "title": "Resize Detection",
        "filename": "resize-detection.html"
      }
    ]
  },
  {
    "title": "Column Resizing",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      }
    ]
  },
  {
    "title": "Sorting",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      }
    ]
  },
  {
    "title": "Filtering",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      }
    ]
  },
  {
    "title": "Selection",
    "elements": [
      {
        "title": "Single-Selection",
        "filename": "single.html"
      },
      {
        "title": "Multi-Selection",
        "filename": "multi.html"
      },
      {
        "title": "Master-Detail",
        "filename": "master-detail.html"
      }
    ]
  },
  {
    "title": "Editing",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      }
    ]
  },
  {
    "title": "Paging",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      },
      {
        "title": "Fit-Rows",
        "filename": "fit.html"
      }
    ]
  },
  {
    "title": "Virtualization",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      }
    ]
  },
  {
    "title": "Aggregation",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      },
      {
        "title": "Filtering",
        "filename": "filtering.html"
      }
    ]
  },
  {
    "title": "Full Screen",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      },
      {
        "title": "Column Scaling",
        "filename": "column-scaling.html"
      },
      {
        "title": "Column Resizing",
        "filename": "column-resizing.html"
      }
    ]
  },
  {
    "title": "Export",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      },
      {
        "title": "Filtering/Sorting",
        "filename": "filtering-sorting.html"
      }
    ]
  },
  {
    "title": "Links",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      }
    ]
  },
  {
    "title": "Remote Data Source",
    "elements": [
      {
        "title": "Basic Functionality",
        "filename": "basic.html"
      },
      {
        "title": "Virtualization",
        "filename": "virtualization.html"
      },
      {
        "title": "Aggregation",
        "filename": "aggregate.html"
      }
    ]
  },
  {
    "title": "Other Stuff",
    "elements": [
      {
        "title": "CSS Naked Day ready",
        "filename": "css-nudity.html"
      },
      {
        "title": "Large Data Sets",
        "filename": "large-datasets.html"
      },
      {
        "title": "Optional RequireJS Support",
        "filename": "no-requirejs.html"
      }
    ]
  }
];});



define('ko-grid-examples/example',['knockout', 'json!dist/examples/examples.json'], function (ko, examples) {
    var document = window.document;
    var createElement = function (tagName) {
        var element = window.document.createElement(tagName);
        Array.prototype.slice.call(arguments, 1).forEach(function (child) {
            element.appendChild(typeof child === 'string' ? createTextNode(child) : child);
        });
        return element;
    };
    var createTextNode = window.document.createTextNode.bind(window.document);

    function merge(a, b) {
        var result = {};
        Object.keys(a).forEach(function (k) { result[k] = a[k]; });
        Object.keys(b).forEach(function (k) { result[k] = b[k]; });
        return result;
    }

    function isCategory(element) {
        return !!element.elements;
    }

    function isSelected(example) {
        var pathname = window.location.pathname;
        return pathname.indexOf(example.path, pathname.length - example.path.length) >= 0;
    }

    function addPaths(prefix, elements) {
        return elements.map(function (element) {
            return isCategory(element)
                ? merge(element, {elements: addPaths(prefix + encodeURIComponent(element.title) + '/', element.elements)})
                : merge(element, {path: prefix + element.filename});
        });
    }

    examples = addPaths('', examples);

    ko.bindingHandlers.koGridExample = {
        init: function (element, valueAccessor) {
            var uriPrefix = valueAccessor();

            var navigation = createElement('nav');
            navigation.id = 'example-navigation';
            var heading = createElement('h2');
            navigation.appendChild(heading);
            heading.appendChild(createTextNode('Examples'));

            createCategoryBody(navigation, uriPrefix, examples);

            element.appendChild(navigation);
        },
        update: function () {}
    };

    function createCategoryBody(parent, uriPrefix, elements) {
        var navigationEntries = createElement('ul');
        navigationEntries.className = 'example-navigation-entries';

        elements.forEach(function (element) {
            var navigationEntry = createElement('li');
            navigationEntries.appendChild(navigationEntry);

            if (isCategory(element)) {
                var heading = createElement('h3');
                heading.appendChild(createTextNode(element.title));
                navigationEntry.appendChild(heading);

                createCategoryBody(navigationEntry, uriPrefix, element.elements);
            } else {
                navigationEntry.className = (isSelected(element) ? 'selected ' : '') + 'example-navigation-entry';

                var anchor = createElement('a');
                anchor.appendChild(createTextNode(element.title));
                anchor.href = uriPrefix + 'examples/' + element.path;

                navigationEntry.appendChild(anchor);
            }
        });

        parent.appendChild(navigationEntries);
    }

    var cranks = {
        'css-nudity': function (element) {
            var label = createElement('label');
            var checkbox = createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = false;

            label.appendChild(checkbox);
            label.appendChild(createTextNode(' CSS nudity'));

            element.appendChild(label);

            var affectedElements = Array.prototype.slice.call(document.head.querySelectorAll('.ko-grid-styles'));
            checkbox.addEventListener('change', function () {
                affectedElements.forEach(function (e) {
                    if (checkbox.checked)
                        document.head.removeChild(e);
                    else
                        document.head.appendChild(e);
                });
            });
        },
        'fixed-height': function (element) {
            var checkbox = createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = document.querySelector('.grid').classList.contains('fixed-height');

            var label = createElement('label',
                checkbox, ' ', createElement('code', '.fixed-height'));

            element.appendChild(label);

            checkbox.addEventListener('change', function () {
                if (checkbox.checked)
                    document.querySelector('.grid').classList.add('fixed-height');
                else
                    document.querySelector('.grid').classList.remove('fixed-height');
            });
        },
        'relayout': function (element) {
            var button = createElement('button', 'Recalculate Layout');
            element.appendChild(button);

            button.addEventListener('click', function () {
                ko.contextFor(document.querySelector('.ko-grid')).grid.layout.recalculate();
            });
        },
        'io': function (element, valueAccessor, allBindings, viewModel) {
            function createPre(title) {
                var titleElement = createElement('strong', title);
                var pre = createElement('pre');
                var container = createElement('div', titleElement, pre);

                container.style.position = 'relative';
                container.style.display = 'inline-block';
                container.style.boxSizing = 'border-box';
                container.style.width = '50%';
                container.style.height = '100%';
                container.style.padding = '.2em';
                pre.style.position = 'absolute';
                pre.style.top = '1.3em';
                pre.style.left = '.2em';
                pre.style.right = '.2em';
                pre.style.bottom = '0';

                return container;
            }

            var request = createPre('Request');
            var response = createPre('Response');
            var container = createElement('div', request, response);
            container.classList.add('vertically-resizable');
            container.style.minHeight = '5em';
            container.style.height = '10em';

            element.parentNode.insertBefore(container, element.nextSibling);

            ko.applyBindingsToNode(request.querySelector('pre'), {text: viewModel.io.lastRequest});
            ko.applyBindingsToNode(response.querySelector('pre'), {text: viewModel.io.lastResponse});

            var checkbox = createElement('input');
            checkbox.type = 'checkbox';

            var label = createElement('label', checkbox, ' Show Mock IO');

            element.appendChild(label);

            var updateIoVisibility = function () { container.style.display = checkbox.checked ? '' : 'none'; };
            checkbox.addEventListener('change', updateIoVisibility);
            updateIoVisibility();
        }
    };

    ko.bindingHandlers.koGridExampleCranks = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            element.classList.add('cranks');
            valueAccessor().forEach(function (crank) {
                cranks[crank](element, valueAccessor, allBindings, viewModel, bindingContext);
            });
        },
        update: function () {}
    };

    document.addEventListener('mousedown', function (e) {
        if (!e.target.classList.contains('vertically-resizable'))
            return;

        e.preventDefault();

        var element = e.target;
        var initialHeight = element.clientHeight;
        var initialMousePosition = e.pageY;
        var animationFrameRequest = 0;

        function onMouseMove(e2) {
            if (animationFrameRequest)
                window.cancelAnimationFrame(animationFrameRequest);
            animationFrameRequest = window.requestAnimationFrame(function () {
                element.style.height = (initialHeight + e2.pageY - initialMousePosition) + 'px';
            });
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});

/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
var A;
(function(X){"function"===typeof define&&define.amd?define('ko-grid-bundle',["require","knockout"],X):window["ko-grid-bundle"]=X(function(D,B){if(!Array.isArray(D)||1!==D.length||"string"!==typeof D[0]||"function"!==typeof B)throw Error("Assertion error.");var E=window.ko.bindingHandlers.grid.config=window.ko.bindingHandlers.grid.config||{};B(E[D[0]])},window.ko)})(function(X,D){var B,E,F,G,H,ca,I,J,K,da,Y,V,Z,Q,T,ea,fa,ga,ha,ia,ja,aa,ka,la,ma,na,oa,pa;B=function(){var y;y=function(){function v(u,n){return Object.prototype.hasOwnProperty.call(u,n)}
return{ve:function(u,n){if(u===n)return!0;var g=!!n&&"function"===typeof n.valueOf;return!!u&&"function"===typeof u.valueOf&&g&&u.valueOf()===n.valueOf()},extend:function(u,n){Array.prototype.slice.call(arguments,1).forEach(function(g){for(var p=Object.keys(g),d=0,q=p.length;d<q;d++){var h=p[d],e=Object.getOwnPropertyDescriptor(g,h);void 0!==e&&e.enumerable&&Object.defineProperty(u,h,e)}});return u},ea:function(u,n){for(var g in u)v(u,g)&&n(g,u[g])},w:v,rd:function(u,n){var g={},p;for(p in u)v(u,
p)&&(g[p]=n(u[p],p,u));return g}}}();return function(v){return v}(function(v,u,n){return{o:v,c:u,La:n}}(function(v){function u(d){return d.filter(function(d,h,e){return e.lastIndexOf(d)===h})}function n(d,q){for(var h=d.length,e=-1,a=0;a<h;++a)if(q(d[a])){if(0<=e)throw Error("Multiple elements match the predicate.");e=a}return e}function g(d,q){return d&&"function"===typeof d.valueOf&&q&&"function"===typeof q.valueOf?d.valueOf()<=q.valueOf()?d.valueOf()<q.valueOf()?-1:0:1:d<=q?d<q?-1:0:1}function p(d,
q){var h=d.length,e=Array(h),a=Array(h),r;for(r=0;r<h;++r)e[r]=r,a[r]=d[r];r=d;d=a;a=r;e.sort(function(a,m){return q(d[a],d[m])||a-m});for(r=0;r<h;++r)a[r]=d[e[r]];return a}return{contains:function(d,q){return 0<=d.indexOf(q)},ad:function(d){if(50<d.length){for(var q=d.length,h={},e,a=0;a<q;++a)if(e=d[a],"string"===typeof e)if(v.w(h,e))break;else h[e]=!0;else if(d.lastIndexOf(e)!==a)break;if(!(a>=q)){for(var r=d.slice(0,a);a<q;++a)e=d[a],"string"===typeof e?v.w(h,e)||(h[e]=!0,r.push(e)):d.lastIndexOf(e)===
a&&r.push(e);d=r}}else d=u(d);return d},lc:function(d,q){return Array.prototype.concat.apply([],d.map(q))},Gd:function(d,q){var h=n(d,q);if(0>h)throw Error("None of the elements matches the predicate.");return d[h]},Hb:function(d,q){var h=n(d,q);return 0<=h?d[h]:null},Ib:function(d,q){var h=q||g;window.chrome?h=p(d,h):(d.sort(h),h=d);return h}}}(y),y,{Wc:function(v){return v.replace(/([A-Z])/g,function(u){return"-"+u.toLowerCase()})},Xc:function(v){return v.replace(/-([a-z])/g,function(u){return u[1].toUpperCase()})},
format:function(v){var u=arguments;return v.replace(/{(\d+)}/g,function(n,g){var p=parseInt(g,10)+1;return typeof u.length<=p?n:u[p]})}}))}();E=function(y){return function(v){return v}(function(v){function u(p){var d={get length(){return this.length},contains:function(d){return 0<=this.hb(d)},filter:function(d){for(var h=this.length,e=[],a=0;a<h;++a){var r=this.get(a);d(r,a,this)&&e.push(r)}return new n(e)},forEach:function(d){for(var h=this.length,e=0;e<h;++e)d(this.get(e),e,this)},get:function(d){return this.get(d)},
map:function(d){for(var h=this.length,e=Array(h),a=0;a<h;++a)e[a]=d(this.get(a),a,this);return new n(e)},readOnly:function(){return new g(this)},reduce:function(d,h){var e=1<arguments.length,a=this.length;if(!e&&0===a)throw new TypeError("An empty list can not be reduced, specify an initial value.");for(var r=e?h:this.get(0),e=e?0:1;e<a;++e)r=d(r,this.get(e));return r},slice:function(d,h){var e=this.length;d=0>=arguments.length?0:0<=d?d:e+d;h=1>=arguments.length?e:0<=h?h:e+h;for(var e=h-d,a=Array(e),
r=0;r<e;++r)a[r]=this.get(d+r);return new n(a)},Aa:function(){for(var d=this.length,h=Array(d),e=0;e<d;++e)h[e]=this.get(e);return h},hb:function(d){for(var h=this.length,e=0;e<h;++e)if(this.get(e)===d)return e;return-1}};return v.c.extend(d,{get length(){return this.length},contains:d.contains,filter:d.filter,forEach:d.forEach,get:function(d){return this.get(d)},map:d.map,readOnly:d.readOnly,reduce:d.reduce,slice:d.slice,toArray:d.Aa,tryFirstIndexOf:d.hb},p)}function n(p){this.Tb=p}function g(p){this.Qa=
p}n.prototype=u({get length(){return this.Tb.length},get:function(p){return this.Tb[p]},Aa:function(){return this.Tb.slice()}});g.prototype=u({get length(){return this.Qa.length},get:function(p){return this.Qa.get(p)}});return{bb:function(p){return new n(p||[])},pd:u}}(y))}(B);F=function(y,v){return function(u){return u}(function(u,n){function g(a){if("string"!==typeof a)throw Error("Ids must be strings. (given: `"+a+"`, type: `"+typeof a+"`)");return a}function p(a,r){return u.c.w(a,g(r))?a[r]:-1}
function d(a,r){var d=p(a,r);if(0>d)throw Error("No element with id `"+r+"`.");return d}function q(a,d,e,m,c){if(m>=c)return m;var b=Math.floor((m+c)/2);return 0>d(e,a[b])?q(a,d,e,m,b):q(a,d,e,b+1,c)}function h(a,d,e,m,c){function b(c,b){var k=f.length,w=d.slice(c,b);f=f.concat(w);w.forEach(function(c){e[a(c)]=k;++k})}var f=[],k=0;m.forEach(function(a){b(k,a);k=a;c(f)});b(k,d.length);return f}function e(a){this.S=function(d){return g(a(d))};this.C=[];this.I={};this.V=null}e.prototype=n.pd({get length(){return this.C.length},
get:function(a){return this.C[a]},gd:function(a){return this.C[d(this.I,a)]},gf:function(a){a=p(this.I,a);return 0<=a?this.C[a]:null},clear:function(){this.C=[];this.I={}},contains:function(a){a=(0,this.S)(a);return 0<=p(this.I,a)},gc:function(a){return 0<=p(this.I,a)},removeAll:function(a){this.Ed(a.map(this.S))},Ed:function(a){if(a.length){var r=this.S,e=this.C,m=this.I;a=a.map(function(c){return d(m,c)+1});a.sort(function(c,b){return c-b});this.C=h(r,e,m,a,function(c){c=c.pop();c=r(c);delete m[c]})}},
Hd:function(a){var d=this.S,e=this.C,m=this.I;this.V=a;u.o.Ib(e,a);a=!1;for(var c=0;c<e.length;++c){var b=d(e[c]);a=a||m[b]!==c;m[b]=c}return a},Mb:function(a){if(this.V)throw Error("`updateAll` must not be called on a sorted `IndexedTable`. Use a combination of order-preserving `tryUpdateAll`, `removeAll` and `insertAll` instead.");if(a.length){var r=this.S,e=this.C,m=this.I;a.forEach(function(c){var b=d(m,r(c));e[b]=c})}},Kd:function(a){if(!this.V)throw Error("`tryUpdateAll` is designed for sorted `IndexedTable`s. For unsorted ones, use `updateAll` instead.");
if(!a.length)return[];var r=this.S,e=this.C,m=this.I,c=this.V,b=[];a.forEach(function(f){var a=d(m,r(f));0!==c(f,e[a])?b.push(f):e[a]=f});return b},qa:function(a){if(this.V)throw Error("`addAll` must not be called on an sorted `IndexedTable`. Use order-preserving `insertAll` instead.");if(a.length){var d=this.S,e=this.C,m=this.I;a.forEach(function(c){var b=d(c);if(u.c.w(m,b))throw Error("The list already contains an element with id `"+b+"`. Did you mean to call `updateAll`?.");m[b]=e.push(c)-1})}},
md:function(a){if(!this.V)throw Error("`insertAll` is designed for sorted `IndexedTable`s. For unsorted ones, use `addAll` instead.");if(a.length){var d=this.S,e=this.C,m=this.I,c=this.V;u.o.Ib(a,c);var b=0,f=[];a.forEach(function(a){a=q(e,c,a,b,e.length);f.push(a);b=a});b=0;this.C=h(d,e,m,f,function(c){var f=a[b],l=d(f),x=c.length;c.push(f);m[l]=x;++b})}}});return e}(v,y))}(E,B);G=function(y){var v,u,n;v=function(g){return function(p,d){return g.c.extend(p,{get stringifyable(){return d()}})}}(y);
u=function(g,p){function d(){return 0}function q(a,d){return"string"===typeof a&&"string"===typeof d?a.localeCompare(d):a<=d?a<d?-1:0:1}function h(d,h){g.c.extend(d,{get onResultOf(){return this.va},get reverse(){return this.reverse},get callable(){return this.Ua}},{get va(){return function(a){return e(a,d)}},get reverse(){return function(){return h||a(d)}},get Ua(){return d}})}function e(a,d){function m(c,b){return d(a(c),a(b))}h(m);p(m,function(){return{type:"by-function-comparator","function":a.stringifyable,
comparator:d.stringifyable}});return m}function a(a){function d(m,c){return-a(m,c)}h(d,a);p(d,function(){return{type:"reversed-comparator",comparator:a.stringifyable}});return d}h(q);p(q,function(){return{type:"natural-comparator"}});h(d);p(d,function(){return{type:"indifferent-comparator"}});return{ld:d,Pe:q}}(y,v);n=function(g,p){function d(d){g.c.extend(d,{get callable(){return this.Ua}},{get Ua(){return d}})}return{xc:function(g){function h(d){return d[g]}d(h);p(h,function(){return{type:"property-accessor",
propertyName:g}});return h}}}(y,v);y=function(g,p){function d(){return!0}function q(){return!1}function h(d,c){g.c.extend(d,{get and(){return this.Ga},get negate(){return this.td},get onResultOf(){return this.va},get or(){return this.Db},get callable(){return this.Ua}},{get Ga(){return function(c){return e([d,c])}},get td(){return function(){return c||r(d)}},get va(){return function(c){return a(c,d)}},get Db(){return function(c){return M([d,c])}},get Ua(){return d}})}function e(a){function c(c){for(var f=
0,k=a.length;f<k;++f)if(!a[f](c))return!1;return!0}if(!a.length)return d;h(c);p(c,function(){return{type:"and-predicate",components:a.map(function(c){return c.stringifyable})}});return c}function a(a,c){function b(f){return c(a(f))}h(b);p(b,function(){return{type:"by-function-predicate","function":a.stringifyable,predicate:c.stringifyable}});return b}function r(a){function c(c){return!a(c)}h(c,a);p(c,function(){return{type:"negated-predicate",predicate:a.stringifyable}});return c}function M(a){function c(c){for(var f=
0,k=a.length;f<k;++f)if(a[f](c))return!0;return!1}if(!a.length)return q;h(c);p(c,function(){return{type:"or-predicate",components:a.map(function(a){return a.stringifyable})}});return c}h(q);p(q,function(){return{type:"always-false-predicate"}});h(d);p(d,function(){return{type:"always-true-predicate"}});return{a:q,Qc:d,Ga:e,Ee:function(a,c){function b(c){return a(c)}h(b);p(b,c);return b},Db:M,Cd:function(a){function c(c){return a.test(c)}h(c);p(c,function(){return{type:"regular-expression-predicate",
regularExpression:a.source,caseSensitive:!a.ignoreCase,multiline:a.multiline}});return c}}}(y,v);return function(g){return g}({ca:u,Ja:n,v:y,qd:v,df:function(g,p){return"function"===typeof p||"object"===typeof p?p.stringifyable||p:p}})}(B);H=function(y,v,u,n,g){var p,d,q,h,e,a,r,M,m;p=function(){function a(c,f,k){this.Ta=c||[];this.ib=f||[];this.eb=k||[]}a.prototype={get size(){return this.Ta.length+this.ib.length+this.eb.length},get empty(){return!this.size},xa:function(a){this.empty||a(this)}};
return a}();d={};q=function(a,b,f,k,z){function l(l,b,t){this.pb=l;this.r=b||new f(l.Ra);this.ma=t||a.observable(new k);this.ac=a.observable(this.r.readOnly());this.Ea=null;this.D=a.pureComputed(function(){this.ac();this.Ea||(this.Ea=this.r.map(this.O.P));return this.Ea}.bind(this));this.D.subscribe(function(){return this.Ea=null}.bind(this),null,"asleep")}l.prototype={get Ra(){return this.pb.Ra},get O(){return this.pb.O},get values(){return this.ac},get fa(){return this.D},rb:function(a){this.Ea&&
(a.Ta.forEach(this.O.P),this.Ea=this.r.map(this.O.Ne),a.eb.forEach(this.O.N));this.ac.valueHasMutated()},Zb:function(){this.D&&this.r.forEach(this.O.N)},Ya:function(){this.pb.Ya();this.ob()},R:function(a){return new z.Ud(this,a)},ka:function(a){return new z.fe(this,a)},Tc:function(a,c){return new z.Od(this,a,c)}};return l}(g,n,y,p,d);h=function(a,b,f){function k(a,c,b,w){f.call(this,{Ra:a,O:c},b,w);this.Oa=w.subscribe(function(a){this.rb(a)}.bind(this))}k.prototype=b.c.extend({},f.prototype,{Ya:function(){},
dispose:function(){this.Oa.dispose();this.Zb()}});return k}(g,n,q);(function(a,b,f,k,d){function l(l,b){k.call(this,l);var t=a.observable(a.unwrap(b));this.ob=function(){return t(a.unwrap(b))};this.Na=a.computed(function(){t();var l=a.unwrap(b);t(l);var C=this.r.Aa(),l=this.pb.r.filter(l).Aa(),C=new f(l,[],C);this.r.clear();this.r.qa(l);this.rb(C);C.xa(this.ma)}.bind(this));this.Oa=l.ma.subscribe(function(l){var t;t=this.Ra;for(var k=this.r,W=a.unwrap(b),O=l.Ta.filter(W),d=[],z=l.eb.filter(W),x=0,
e=l.ib.length;x<e;x++){var m=l.ib[x],r=k.gc(t(m));W(m)?r?d.push(m):O.push(m):r&&z.push(m)}t=new f(O,d,z);t.empty||(this.r.removeAll(t.eb),this.r.Mb(t.ib),this.r.qa(t.Ta),this.rb(l),t.xa(this.ma))}.bind(this))}l.prototype=b.c.extend({},k.prototype,{dispose:function(){this.Na.dispose();this.Oa.dispose();this.Zb()}});return d.Ud=l})(g,n,p,q,d);(function(a,b,f,k){function d(l,b){f.call(this,l);this.r.qa(l.r.Aa());var k=a.observable(a.unwrap(b));this.ob=function(){return k(a.unwrap(b))};this.Na=a.computed(function(){k();
var l=a.unwrap(b);k(l);this.r.Hd(l)&&this.ma.valueHasMutated()}.bind(this));this.Oa=l.ma.subscribe(function(a){var c=this.r.Kd(a.ib);this.r.removeAll(a.eb.concat(c));this.r.md(a.Ta.concat(c));this.rb(a);this.ma.valueHasMutated()}.bind(this))}d.prototype=b.c.extend({},f.prototype,{R:function(){throw Error("Filtering a sorted view is not supported.");},ka:function(){throw Error("Sorting a sorted view is not supported.");},dispose:function(){this.Na.dispose();this.Oa.dispose();this.Zb()}});return k.fe=
d})(g,n,q,d);(function(a,b,f,k){function d(l,b,k){function t(){return{offset:a.unwrap(b),i:a.unwrap(k)}}var z=l.O;this.Vb=l;this.h=a.observable(f.bb());this.D=null;var C=l.Ra,N=a.observable(t());this.ob=function(){var a=N(),c=t();a.offset===c.offset&&a.i===c.i||N(c)};this.Na=a.computed(function(){l.ma();N();var a=t();N(a);var c=l.r,b=Math.min(c.length,a.offset),f=Math.min(c.length,b+a.i),a=this.h.peek(),c=c.slice(b,f);a:if(a.length!==c.length)b=!0;else{for(b=a.length-1;0<=b;--b)if(C(a.get(b))!==C(c.get(b))){b=
!0;break a}b=!1}b&&(this.h(c),this.D&&(this.D(this.h.peek().map(z.P)),a.forEach(z.N)))}.bind(this))}d.prototype={get values(){return this.h},get fa(){this.D||(this.D=a.observable(this.values().map(this.Vb.O.P)));return this.D},Ya:function(){this.Vb.Ya();this.ob()},R:function(){throw Error("Filtering a clipped view is not supported.");},ka:function(){throw Error("Sorting a clipped view is not supported.");},Tc:function(){throw Error("Clipping a clipped view is not supported.");},dispose:function(){this.Na.dispose();
this.D&&this.h().forEach(this.Vb.O.N)}};return k.Od=d})(g,n,u,d);e={ce:h};d=function(a){function b(a,c,b){this.k=a;this.a=b?function(a,f){var t=c(f);try{return a(t)}finally{b(t)}}:function(a,b){return a(c(b))}}b.prototype={forEach:function(a){this.k.forEach(this.a.bind(null,a))},map:function(a){return new b(this,a)},reduce:function(a,c){return this.k.reduce(function(c,b){return a(c,this.a(function(a){return a},b))}.bind(this),c)}};var f=b.prototype;a.c.extend(f,{forEach:f.forEach,map:f.map,reduce:f.reduce});
return b}(n);a=function(a,b,f){function k(){return 0}function d(){return!0}function l(a,c){this.m=a;this.a=c}function x(a){this.k=a;this.a=null}function w(a,c,b){this.m=a;this.Fe=c;this.Ge=b;this.dd=!1;this.Q=this.a=this.k=this.ic=null}function t(a,c,b,l){this.e=a||d;this.l=c||k;this.offset=b||0;this.i=l||0===l?l:Number.POSITIVE_INFINITY;this.ia=Math.max(this.e===d?t.a:t.Fc,this.l===k?t.a:t.Q,0===this.offset&&this.i===Number.POSITIVE_INFINITY?t.a:t.k)}function e(a,c,b){this.key=a;this.view=c;this.X=
1;this.a=b}l.prototype={vd:function(a){return new x(this.Cb(a))},Cb:function(a){return new w(this.m,this.a,a)},Id:function(a){return this.Y(a).then(function(a){return new f(a,this.m.P.bind(this.m),this.m.N.bind(this.m))}.bind(this))},wa:function(){throw Error("`"+this.constructor+"` does not implement `openView`.");},Y:function(){throw Error("`"+this.constructor+"` does not implement `streamValues`.");},dispose:function(){throw Error("`"+this.constructor+"` does not implement `dispose`.");}};l.prototype=
b.c.extend({},{openEntryView:l.prototype.vd,openOptionalEntryView:l.prototype.Cb,streamObservables:l.prototype.Id},l.prototype);x.prototype={get value(){return this.k.value},get observable(){this.a||(this.a=this.k.ga.subscribe(function(){throw Error("Illegal state: A non-optional view for this entry is still open.");}));return this.k.observable},dispose:function(){this.a&&this.a.dispose();this.k.dispose()}};x.prototype=b.c.extend({},{get value(){return this.value},get observable(){return this.observable},
dispose:x.prototype.dispose},x.prototype);w.prototype={Ha:function(){if(this.dd)throw Error("Illegal state: Entry view was already disposed.");},get value(){this.Ha();return this.ic=this.Fe(this.Ge)},get observable(){this.Ha();return(this.k||this.ga)&&this.k},get ga(){this.Ha();if(this.a)return this.a;var b=this.m.re(this.value);this.k=b();this.a=a.observable({present:!0,observable:this.k});this.Q=b.subscribe(function(a){this.a({present:!!a,observable:a})}.bind(this));return this.a},dispose:function(){this.Ha();
this.dd=!0;this.Q&&(this.Q.dispose(),this.m.N(this.ic),this.ic=this.k=this.a=this.Q=null)}};w.prototype=b.c.extend({},{get value(){return this.value},get observable(){return this.observable},get optionalObservable(){return this.ga},dispose:w.prototype.dispose},w.prototype);t.a=0;t.Fc=1;t.Q=2;t.k=3;t.fd=function(a){return new t(a.e,a.l,a.offset,a.i)};t.prototype={Xa:function(a){return this.ia===a.ia&&this.e===a.e&&this.l===a.l&&this.offset===a.offset&&this.i===a.i},Ad:function(){if(0>=this.ia)throw Error("Unsupported operation.");
var a=[null,this.e,this.l].slice(0,this.ia);return new (t.bind.apply(t,a))},Oc:function(){return 0===this.ia?[this]:this.Ad().Oc().concat([this])},ue:function(a){var c=[[this.e],[this.l],[this.offset,this.i]][this.ia-1];return(0,[function(a){return a.R},function(a){return a.ka},function(a){return a.Tc}][this.ia-1])(a).apply(a,c)}};e.prototype={P:function(){if(0>=this.X)throw Error("Assertion error: Reference count at `"+this.X+"`.");++this.X;return this},N:function(){0===--this.X&&this.a();return this}};
l.kb=t;l.Ec=e;return l}(g,n,d);r=function(a,b){function f(a){this.Qa=a}f.prototype={forEach:function(a){this.Qa.forEach(a)},map:function(a){return new b(this,a)},reduce:function(a,c){return Promise.resolve(this.Qa.reduce(a,c))}};var k=f.prototype;a.c.extend(k,{forEach:k.forEach,map:k.map,reduce:k.reduce});return f}(n,d);d=function(a){function b(a){this.Pa=!1;(a&&a.observableProperties||[]).forEach(function(a){this.Pa=this.Pa||{};this.Pa[a]=!0}.bind(this))}b.prototype={constructor:function(b){var k=
this.Pa;if(!k)return b;var d={};Object.keys(b).forEach(function(l){d[l]=k&&k[l]?a.observable(b[l]):b[l]});return d},updater:function(a,c){var b=this.Pa;if(!b)return a;Object.keys(c).filter(function(a){return b&&b[a]}).forEach(function(b){return a[b](c[b])});return a},destructor:function(){}};return b}(g);M=function(a,b,f){function k(b){this.observable=b;this.ga=a.observable(b);this.Bd=1}return function(a,c){function d(a){if("string"!==typeof a)throw t(a);if(b.c.w(C,a))return C[a];throw Error("No entry for id `"+
a+"`.");}function w(b){var f=a(b);if("string"!==typeof f)throw t(f);Object.prototype.hasOwnProperty.call(C,f)?(f=C[f],++f.Bd):(b=new k(c.constructor(b)),f=C[f]=b);return f}function t(a){throw Error("Illegal argument: Ids must be strings ('"+a+"' is of type '"+typeof a+"').");}function e(a){var b=a.observable;a.ga(null);a.observable=null;c.destructor(b)}c=c||new f;var C={};this.P=function(a){return w(a).observable};this.re=function(a){return w(a).ga};this.N=function(c){c=a(c);var b=d(c);0===--b.Bd&&
(e(b),delete C[c])};this.Ne=function(c){return d(a(c)).observable};this.zd=function(f){f.forEach(function(f){var t=a(f);b.c.w(C,t)&&(t=C[t],t.observable||(t.observable=c.constructor(f),t.ga(t.observable)))})};this.Nb=function(f){f.forEach(function(f){var t=a(f);b.c.w(C,t)&&c.updater(C[t].observable,f)})};this.Ue=function(a){b.c.ea(C,function(b,f){var t=a(b);t?f.observable?c.updater(f.observable,t):(f.observable=c.constructor(t),f.ga(f.observable)):e(f)})};this.Zc=function(a){b.c.ea(C,function(c,b){a(c)&&
e(b)})};this.dispose=function(){this.Zc(function(){return!0})}.bind(this)}}(g,n,d);v=function(a,b,f){function k(a,c,b,f){this.me=a;this.V=c;this.le=b;this.ke=f}k.prototype=b.c.extend({get predicate(){return this.e},get comparator(){return this.l},get offset(){return this.offset},get limit(){return this.i}},{get e(){return this.me},get l(){return this.V},get offset(){return this.le},get i(){return this.ke},normalize:function(){return new k(this.e||f.v.Qc,this.l||f.ca.ld,this.offset||0,this.i||0===
this.i?this.i:Number.POSITIVE_INFINITY)},Ac:function(){return new k(a.unwrap(this.e),a.unwrap(this.l),a.unwrap(this.offset),a.unwrap(this.i))},Xa:function(a){return this.e===a.e&&this.l===a.l&&this.offset===a.offset&&this.i===a.i}});return k}(g,n,v);v=function(a,b){function f(a,c,f){b.call(this,a,c,f)}var k={rc:function(a){return new b(this.e,this.l,this.offset,a)}};f.prototype=a.c.extend({},b.prototype,k,{limitedTo:k.rc});return f}(n,v);v=function(a,b){function f(a,c){b.call(this,a,c)}var k={tc:function(a){return new b(this.e,
this.l,a)}};f.prototype=a.c.extend({},b.prototype,k,{offsetBy:k.tc});return f}(n,v);v=function(a,b){function f(a){b.call(this,a)}var k={ka:function(a){return new b(this.e,a)}};f.prototype=a.c.extend({},b.prototype,k,{sortedBy:k.ka});return f}(n,v);v=function(a,b){function f(){b.call(this)}var k={R:function(a){return new b(a)}};f.prototype=a.c.extend({},b.prototype,k,{filteredBy:k.R});return f}(n,v);m=function(a,b){function f(){b.call(this)}f.prototype=a.c.extend({},b.prototype);return f}(n,v);v=function(){function c(a,
b){b=b||new t(a);var c=new w(a);l.call(this,b,function(a){return c.gd(a)});this.mb=a;this.m=b;this.h=c;this.Da=f.observable(new x);this.u=[];var k=new d.ce(this.mb,this.m,this.h,this.Da);this.ne=this.Gc(new l.kb,k);this.aa=f.pureComputed(function(){return k.values().length})}function b(a,b){this.a=a;this.Q=b;this.aa=f.pureComputed(function(){return a.values().length});this.k=f.pureComputed(function(){return(k.o.Hb(b,function(a){return a.key.ia===l.kb.Fc})||b[0]).view.values().length})}var f=g,k=n,
d=e,l=a,x=p,w=y,t=M;c.prototype={get size(){return this.aa},Gc:function(a,b){var c=new l.Ec(a,b,function(){return this.u.splice(this.u.indexOf(c),1)}.bind(this));this.u.push(c);return c},je:function(a){var b=k.o.Hb(this.u,function(b){return a.Xa(b.key)});if(b)return b.P();var c=a.Ad(),b=k.o.Gd(this.u,function(a){return c.Xa(a.key)}).view,b=a.ue(b);return this.Gc(a,b)},qe:function(a){this.h.qa(a);(new x(a)).xa(this.Da);this.m.zd(a)},se:function(a){var b=[],c=[];a.forEach(function(a){return(this.h.contains(a)?
c:b).push(a)}.bind(this));this.h.qa(b);this.h.Mb(c);(new x(b,c)).xa(this.Da);this.m.zd(b);this.m.Nb(c)},wa:function(a){a=(a||function(a){return a})(new m);a=l.kb.fd(a).Oc().map(function(a){return this.je(a)}.bind(this));var c=a[a.length-1].view;c.Ya();return new b(c,a)},Ve:function(a){this.h.removeAll(a);(new x([],[],a)).xa(this.Da);this.m.Zc(function(a){return!this.h.gc(a)}.bind(this))},Xe:function(a){var b=this.h.Aa();this.h.clear();this.h.qa(a);(new x(a,[],b)).xa(this.Da);this.m.Ue(function(a){return this.h.gf(a)}.bind(this))},
Y:function(a){a=this.wa(a);try{return Promise.resolve(new r(a.values.peek().slice()))}finally{a.dispose()}},Nb:function(a){this.h.Mb(a);(new x([],a)).xa(this.Da);this.m.Nb(a)},dispose:function(){this.ne.N();this.m.dispose();if(this.u.length){var a=this.u.length,b=this.u.reduce(function(a,b){return a+b.X},0);window.console.warn("Some views were not or are not yet disposed ("+a+" views, "+b+" references).")}}};c.prototype=k.c.extend({},l.prototype,{get size(){return this.size},addEntries:c.prototype.qe,
dispose:c.prototype.dispose,addOrUpdateEntries:c.prototype.se,openView:c.prototype.wa,removeEntries:c.prototype.Ve,replaceEntries:c.prototype.Xe,streamValues:c.prototype.Y,updateEntries:c.prototype.Nb},c.prototype);var L=f.pureComputed(function(){return!1});b.prototype={get Va(){return L},get da(){return this.k},get $a(){return f.pureComputed(function(){return{}})},get fa(){return this.a.fa},get size(){return this.aa},get values(){return this.a.values},dispose:function(){this.Q.forEach(function(a){a.N()})}};
b.prototype=k.c.extend({get dirty(){return this.Va},get filteredSize(){return this.da},get metadata(){return this.$a},get observables(){return this.fa},get size(){return this.size},get values(){return this.values},dispose:b.prototype.dispose},b.prototype);return c}({});q=function(){function c(a,b,c){c=c||new l(a);var k={};d.call(this,c,function(a){if(!e(k,a))throw Error("No known entry with id `"+a+"`.");return k[a].value});this.mb=a;this.m=c;this.Jc=b;this.h=k;this.aa=f.observable(0);this.ie=f.pureComputed(function(){return this.aa()}.bind(this));
this.u=[]}function b(a,b,c){function l(a){if(a.e!==p||a.l!==M)return!1;for(var b=0,c=h.length;b<c;++b){var f=g[b];if(h[b]<=a.offset&&f>=a.offset+a.i)return!0}return!1}function d(a,b){if(a.e!==p||a.l!==M){var c=a.e,f=a.l;r=[];h=[];g=[];p=c;M=f}var f=c=a.offset,t=c+a.i,l,k,w;k=l=0;for(w=h.length;l<w;++l){var e=h[k]=h[l],O=g[k]=g[l];f<=O&&t>=e?(f=Math.min(e,f),t=Math.max(O,t)):++k}h.length=g.length=k;h.push(f);g.push(t>=x().filteredSize?Number.POSITIVE_INFINITY:t);l=0;for(w=b.length;l<w;++l)r[c+l]=b[l];
window.console.log("Cache ranges:");l=0;for(w=h.length;l<w;++l)window.console.log("["+h[l]+", "+g[l]+"]")}var e=f.observable(!1),O=f.observable(!1),x=f.observable({unfilteredSize:a.size.peek(),filteredSize:0}),z=k.bb(),m=f.observable(),r=[],h=[],g=[],p=null,M=null,q=f.pureComputed(function(){if(e.peek())return e();var c=b.Ac().normalize();if(l(c))return m(r.slice(c.offset,c.offset+c.i));O(!0);e(!0);window.setTimeout(function(){if(!c.Xa(b.Ac().normalize()))return e(!1);a.Jc.issue(c).then(function(b){var f=
[];b.values.reduce(function(a,b){return f.push(b)});m(f);delete b.values;a.aa(b.unfilteredSize);x(b);d(c,f)}).then(function(){O(!1);e(!1)},function(){e(!1)})})}),n=f.pureComputed(function(){q();var b=m(),b=k.bb(b);u?(u=b.map(function(b){a.Hc(b);return a.m.P(b)}),z.forEach(function(b){a.Kc(b);a.m.N(b)})):(b.forEach(a.Hc.bind(a)),z.forEach(a.Kc.bind(a)));return z=b});this.h=n;var u=null;this.D=f.pureComputed(function(){n();u||(u=z.map(a.m.P));return u});this.D.subscribe(function(){return u=null},null,
"asleep");this.k=f.pureComputed(function(){return O()});this.Ha=f.pureComputed(function(){return x()});this.a=f.pureComputed(function(){return x().filteredSize});this.aa=f.pureComputed(function(){return n().length});this.Q=function(){q.dispose();c()}}var f=g,k=u,d=a,l=M,e=n.c.w;c.prototype={get size(){return this.ie},Hc:function(a){var b=this.mb(a);e(this.h,b)?(b=this.h[b],++b.X,b.value=a):this.h[b]={X:1,value:a}},Kc:function(a){a=this.mb(a);if(!e(this.h,a))throw Error("Assertion error: Value with id `"+
a+"` was expected to be referenced.");0===--this.h[a].X&&delete this.h[a]},wa:function(a){a=(a||function(a){return a})(new m);var c=d.kb.fd(a),f=n.o.Hb(this.u,function(a){return c.Xa(a.key)});if(f)return f.P().view;a=new b(this,a,function(){return l.N()});var l=new d.Ec(c,a,function(){return this.u.splice(this.u.indexOf(l),1)}.bind(this));this.u.push(l);return a},Y:function(a){a=(a||function(a){return a})(new m);return this.Jc.issue(a.Ac().normalize()).then(function(a){return a.values})},dispose:function(){this.m.dispose();
if(this.u.length){var a=this.u.length,b=this.u.reduce(function(a,b){return a+b.X},0);window.console.warn("Some views were not or are not yet disposed ("+a+" views, "+b+" references).")}}};c.prototype=n.c.extend({},d.prototype,{get size(){return this.size},dispose:c.prototype.dispose,openView:c.prototype.wa,streamValues:c.prototype.Y},c.prototype);b.prototype={get Va(){return this.k},get da(){return this.a},get $a(){return this.Ha},get fa(){return this.D},get size(){return this.aa},get values(){return this.h},
dispose:function(){this.Q()}};b.prototype=n.c.extend({},{get dirty(){return this.Va},get filteredSize(){return this.da},get metadata(){return this.$a},get observables(){return this.fa},get size(){return this.size},get values(){return this.values},dispose:b.prototype.dispose},b.prototype);return c}({});return function(a){return a}(function(a,b,f,k,d){return{ClientSideDataSource:a,DefaultObservableStateTransitioner:b,ObservableEntries:f,ServerSideDataSource:k,streams:d}}(v,d,M,q,function(a,b){return{streamArray:function(f){return new b(a.bb(f))}}}(u,
r)))}(F,G,E,B,D);ca=function(y,v,u,n,g,p){return function(d){return d}(function(d){function g(h,e){return d.bindingHandlers[h]={init:function(a,h,g,m,c){var b=(m=d.unwrap(h()))&&m.from||g.has("from")&&g.get("from"),f=m&&m.as||g.has("as")&&g.get("as")||"entry";g={};g[f]=d.observable(null);var k=a.innerHTML,z=c.extend(g),l=!1;a.innerHTML="";var x=null,w=d.computed(function(){var c=d.unwrap(h()),w=(c=(c=d.unwrap(c&&c.identifiedBy||c))&&b.Cb(c))&&c.observable,m=!!(e||c&&w);if(m)z[f](w),l||(a.innerHTML=
k,d.applyBindingsToDescendants(z,a));else if(l)for(;a.firstChild;)d.removeNode(a.firstChild);x&&x.dispose();x=c;l=m});d.utils.domNodeDisposal.addDisposeCallback(a,function(){w.dispose();x&&x.dispose()});return{controlsDescendantBindings:!0}}}}g("optionalEntry",!0);return g("entry",!1)}(p))}(F,G,E,B,H,D);I=function(){return function(y){return y}(function(){function y(n,g){return!!(n.compareDocumentPosition(g)&16)}var v=window.Element,u=v.prototype.webkitMatchesSelector||v.prototype.mozMatchesSelector||
v.prototype.msMatchesSelector||v.prototype.matches;return{$c:function(n,g){for(var p=0;g;){if(g===n)return p;g=g.parentNode;++p}throw Error("The given node is not part of the subtree.");},qc:function(n,g){return n===g||y(n,g)},cf:y,element:{fc:function(n,g){do{if(u.call(n,g))return n;n=n.parentElement}while(n);return null},matches:function(n,g){return u.call(n,g)}}}}())}();J=function(y){var v,u,n;v=function(){function g(d){this.length=function(){return d.length};this.get=function(h){return d[h]}}
function p(d){this.length=function(){return d.length()};this.get=function(h){return d.get(h)}}function d(d){this.length=function(){return d.length};this.get=function(h){return d.get(h)}}return{Je:function(q){if(Array.isArray(q))q=g;else a:switch(typeof q.length){case "function":q=p;break a;case "number":q=d;break a;default:throw Error("Unsupported type: The `forEach` value must be an array or a list with a `length` property or method.");}return q}}}();u=function(g){function p(d){if("function"===typeof d)return d;
if("string"===typeof d)return function(e){return e[d]};throw Error("A repeat-binding must specify and indexedBy of type string (property name) or function (custom selector).");}function d(d){g.cleanNode(d);window.setTimeout(function(){g.cleanNode(d)},1);var e=d.cloneNode(!0);e.removeAttribute("data-bind");"string"===typeof d.getAttribute("data-repeat-bind")&&(e.setAttribute("data-bind",d.getAttribute("data-repeat-bind")),e.removeAttribute("data-repeat-bind"));return e}var q=window.document;return function(h,
e){var a=h.getAttribute("data-bind");this.S=p(e.indexedBy);this.Le=e.as||"$item";this.Ie=e.at||"$index";this.te=!1!==e.allowElementRecycling;this.$e=e.beforeElementRecycling||function(){};this.Ze=e.afterElementRecycled||function(){};this.Pc=!0===e.allowDeviation;this.Ye=e.onDeviation||function(){};this.af=e.onSynchronization||function(){};this.parent=h.parentNode;this.Jb=q.createComment("[repeat("+a+")");this.jc=q.createComment("repeat("+a+")]");this.Ke=d(h);this.Ce=this.Jb}}(y);n=function(){function g(){this.qb=
0;this.W={}}g.prototype={add:function(g,d){if(Object.prototype.hasOwnProperty.call(this.W,g))throw Error("Key `"+g+"` is already taken.");++this.qb;this.W[g]=d},get:function(g){return this.W[g]},remove:function(g){if(!Object.prototype.hasOwnProperty.call(this.W,g))throw Error("No entry for key  `"+g+"` present.");delete this.W[g];--this.qb},clear:function(){this.W={};this.qb=0},get size(){return this.qb},forEach:function(g){for(var d in this.W)Object.prototype.hasOwnProperty.call(this.W,d)&&g(d,this.W[d])}};
return g}();n=function(g,p){function d(a,d){this.element=a;this.we=d}function q(a,d,e,m){this.index=a;this.item=d;this.id=e;this.xd=m}var h=window.requestAnimationFrame.bind(window),e=window.cancelAnimationFrame.bind(window);return function(a,r){function M(){m((new Date).getTime()+40)}function m(a){for(;c();)if(++S,(new Date).getTime()>a){N();v=h(M);return}f()}function c(){if(S<n.length()){var c=S,f=n.get(S),k=c?w(n.get(c-1)):null,e=w(f),x=U.get(e);if(x)if(x.element.style.display="",x.we[L](c),c=
R.get(e))R.remove(e),O.insertBefore(c,u.nextSibling),u=c;else{for(;x.element!==u.nextSibling;)l(u.nextSibling);u=x.element}else y.push(new q(c,f,e,k))}else if(P)if(y.length)a.te&&P.length?(e=P.pop(),x=y.shift(),c=g.contextFor(e),a.$e(e,c),e.style.display="",z(e,x.xd),c[t](x.item),c[L](x.index),a.Ze(e,c),U.add(x.id,new d(e,c))):(e=y.shift(),x=sa.cloneNode(!0),c={},c[L]=g.observable(e.index),c[t]=g.observable(e.item),c=r.extend(c),U.add(e.id,new d(x,c)),g.applyBindings(c,x),z(x,e.xd),++ba);else{for(;P.length;)g.removeNode(P.pop());
return}else b();return!0}function b(){P=[];for(var a=n.length()-y.length,a=ba-R.size-a;0<a;--a)l(u.nextSibling);R.forEach(function(a,b){U.remove(a);P.push(b)});R.clear()}function f(){for(var a=0;a<P.length;++a)g.removeNode(P[a]);ba=n.length();k();W()}function k(){S=0;P=R=y=u=null}function z(a,b){var c=(b?U.get(b).element:qa).nextSibling;O.insertBefore(a,c)}function l(a){R.add(w(g.contextFor(a)[t]()),a);a.style.display="none";O.insertBefore(a,ra)}function x(){if(v){e(v);v=null;for(var a=0;null!==P&&
a<P.length;++a){var b=P[a];U.add(w(g.contextFor(b)[t]()),new d(b,g.contextFor(b)))}k()}}var w=a.S,t=a.Le,L=a.Ie,C=a.Pc,N=a.Ye,W=a.af,O=a.parent,qa=a.Jb,ra=a.jc,sa=a.Ke,n=null,U=new p,ba=0,S=0,u=null,v=null,y=null,R=null,P=null;this.bf=function(b){x();S=0;u=a.Jb;y=[];R=new p;n=b;if(C)m((new Date).getTime()+15);else{for(;c();)++S;f()}};this.pe=x}}(y,n);return function(g){return g}(function(g,p,d,n){return g.bindingHandlers.indexedRepeat={init:function(h,e,a,r,M){e=e();a=new d(h,e);r=a.Ce;a.parent.replaceChild(a.jc,
h);a.parent.insertBefore(a.Jb,a.jc);var m=new n(a,M);a.Pc&&g.utils.domNodeDisposal.addDisposeCallback(r,function(){m.pe()});var c=e.forEach,b=p.Je(c());return{controlsDescendantBindings:!0,subscribable:g.computed(function(){var a=new b(c());g.ignoreDependencies(m.bf,m,[a])},null,{disposeWhenNodeIsRemoved:r})}}}}(y,v,u,n))}(D);K=function(y,v,u,n,g,p,d,q){var h,e;y=function(a,d){function e(a){var b={key:["char","charCode","key","keyCode"],mouse:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" ")},
b="altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp type view which".split(" ").concat(b[a.type.substr(0,3)]||[]).concat(b[a.type.substr(0,5)]||[]);this.k=a;this.a=a.defaultPrevented;b.forEach(function(b){return Object.defineProperty(this,b,{get:function(){return a[b]}})}.bind(this))}function m(a,b){this.nc=a;this.Fd=b}e.prototype={preventDefault:function(){this.a=!0;return this.k.preventDefault()},Fb:function(){this.a=!0},get defaultPrevented(){return this.a}};
e.prototype=a.c.extend({},{get defaultPrevented(){return this.defaultPrevented},preventDefault:e.prototype.preventDefault,preventApplicationButAllowBrowserDefault:e.prototype.Fb},e.prototype);return function(c){function b(b,c,l){function e(a){a=Array.prototype.slice.call(b.querySelectorAll(a)).filter(function(a){return d.qc(a,c.target)});return a.length?a[a.length-1]:void 0}var w=d.$c.bind(null,b),t=f.map(function(a){var c=a.Fd?e(a.Fd):b;return{nc:a.nc,match:c,depth:c?w(c):-1}}).filter(function(a){return!!a.match});
a.o.Ib(t,function(a,b){return b.depth-a.depth});t.forEach(function(a){a.nc.apply(b,l)})}c=c||function(a){return[a]};var f=[];this.ya=function(a,b){var c=1<arguments.length?a:void 0;b=1<arguments.length?b:a;f.push(new m(b,c));return{dispose:function(){b&&(f.splice(f.indexOf(b),1),b=null)}}};this.yc=function(a){return{hc:function(f){var l=d.element.fc(f.target,a);l&&(f=new e(f),b(l,f,c(f,l)))}}}}}(g,y);h=function(){var a=/^[a-z]+(-[a-z]+)*$/,d=/\x3c!--(?:(before|after):)?([a-z]+(-[a-z]+)*)--\x3e*/g;
return function(e){function m(a,d){d=d||function(a,b){return b+a};return function(k){var t=c(k,a);return{L:function(a,l){var k=l?a:null,e=(l=l?l:a)?k:null,w=l,k=d;e&&f(e,2);b(w);e=e?c(e,3)+w+c(e,4):w;k=k(t,e);z=z.replace(t,k)}}}}function c(a,b){function c(b){if(k[a]!==b)throw Error("Operation is not defined for placeholder `"+a+"`.");}if(!k[a])throw Error("Unknown placeholder id `"+a+"`.");var f="\x3c!--"+a+"--\x3e",d="\x3c!--before:"+a+"--\x3e",e="\x3c!--after:"+a+"--\x3e";switch(b){case 1:return c(1),
delete k[a],f;case 2:return c(1),f;case 3:return c(2),d;case 4:return c(2),e;case 5:case 6:return 1===k[a]?f:5===b?e:d}throw Error("Assertion error. Unkown operator: `"+b+"`");}function b(a){for(var b;b=d.exec(a);){var c=b[1],k="before"===c;b=b[2];if(c&&1!==(a.match(new RegExp((k?"after":"before")+":"+b,"g"))||[]).length)throw Error("Multiple or unmatched before-/after-placeholders for placeholder id `"+b+"`.");c&&!k||f(b,c?2:1)}}function f(b,c){if(!a.test(b))throw Error("Invalid placeholder id `"+
b+"`");if(k[b])throw Error("Placeholder id `"+b+"` is already taken.");k[b]=c}var k={},z=e;b(z);this.pc=m(2);this.dc=m(3);this.sb=m(4,function(a,b){return a+b});this.replace=function(a){return{Bc:m(1,function(a,b){return b})(a).L}};this.gb=function(a){return{append:m(5)(a).L,wc:m(6,function(a,b){return a+b})(a).L}};this.ye=function(){return z.replace(d,"")}}}();v=function(a,d,e){function m(a){return null===a?"":""+a}function c(b,c,k){this.id=this.id=k.id;this.property=this.G=k.property||this.id;this.userDefined=
this.Ob=!1!==k.Ob;this.ba=!k.hidden;(function(){return this.ba}).bind(this);this.visible=this.visible;this.label=this.label=a.observable(k.label);this.width=this.width=a.observable(k.width);this.widthInPixels=this.Ca=function(){var a=this.width();if("px"!==a.substr(-2))throw Error("The only currently supported column width values are absolute pixel lengths.");return parseInt(a.substring(0,a.length-2),10)}.bind(this);this.Ka=a.observableArray(k.headerClasses||k.classes||[]);this.Rc=a.observableArray(k.cellClasses||
k.classes||[]);this.ed=a.observableArray(k.footerClasses||k.classes||[]);this.headerClasses=this.Ka;this.cellClasses=this.Rc;this.footerClasses=this.ed;this.metadata=this.$a=c.columnMetadataSupplier?c.columnMetadataSupplier(b.xe,k):{};this.renderValue=this.za=c.cellValueRenderer?c.cellValueRenderer.bind(void 0,this):m;this.a=function(a){this.za=a(this.za)}.bind(this);this.Eb=function(a){a=this.Nc(a,{n:this.Yb,update:this.$b});if(!a||!a.n||!a.update)throw Error("The cell value binding must define an `init` as well as an `update` method.");
this.Yb=a.n;this.$b=a.update}.bind(this);this.Nc=function(a,b){var c=a(d.c.extend({n:b.n,update:b.update},{init:b.n,update:b.update}));return{n:c.n||c.init,update:c.update||c.update}};this.overrideValueRendering=this.a;this.overrideValueBinding=this.Eb}a.bindingHandlers.__gridColumn={init:function(){},update:function(a,c){var d=c();a.style.width=d.width()}};return{n:function(a){a.replace("columns").Bc(e)},g:function(b,f,d){function e(a){a=new c(d,f,a);f.columnInitializer&&f.columnInitializer(a);return a}
var l=[];this.all=this.all=a.observableArray(b.columns.map(e));this.byId=this.ra=function(a){var b=this.Jd(a);if(!b)throw Error("The column id `"+a+"` is undefined.");return b}.bind(this);this.tryById=this.Jd=function(a){var b=this.all().filter(function(b){return b.id===a});if(1<b.length)throw Error("Assertion error: Multiple columns with id `"+a+"`.");return b[0]}.bind(this);var m=a.observable(this.all().filter(function(a){return a.ba}));this.displayed=this.s=function(){return m()};this.show=function(a){this.fb(function(b){return b.ba||
b===a})}.bind(this);this.He=function(a){this.fb(function(b){return b.ba&&b!==a})}.bind(this);this.show=this.show;this.hide=this.He;this.reorder=this.We=function(a){var b=this.all().slice(),c=[];a.forEach(function(a){b.splice(b.indexOf(a),1);c.push(a)});if(b.length)throw Error("The new column order must contain all columns.");this.all(c);this.fb(function(a){return a.ba})}.bind(this);this.showOnlyThoseWhich=this.fb=function(a){var b=this.all();a=b.filter(a);b.forEach(function(a){a.ba=!1});a.forEach(function(a){a.ba=
!0});m(a)}.bind(this);this.combinedWidth=this.Vc=a.pureComputed(function(){for(var a=0,b=this.s(),c=0;c<b.length;++c)a+=b[c].Ca();return a}.bind(this));this.add=this.add=function(a){a=e({Ob:!1,id:"$"+a.id,label:a.label,hidden:a.hidden||!1,width:a.width});this.all.unshift(a);this.fb(function(a){return a.ba});return a}.bind(this);this.na=function(){l.forEach(function(a){a.dispose()})}}}}(q,g,'<colgroup class="ko-grid-colgroup">\n    <col class="ko-grid-col" data-bind="indexedRepeat: { forEach: columns.displayed, indexedBy: \'id\', as: \'column\' }" data-repeat-bind="__gridColumn: column()">\n</colgroup>');
u=function(a,d,e,m,c){function b(a){this.Z(function(b){b();this.Fa=a.element.querySelector(".ko-grid-tbody")}.bind(this));return function(){this.Fa=null}.bind(this)}function f(){var b=[],c={};this.rows=this.rows=c;c.s=a.observableArray([]);c.displayed=c.s;c.Wa=a.observable(!1).extend({uf:"always"});c.displayedSynchronized=c.Wa;c.__handleDisplayedRowsDeviate=function(){this.rows.Wa(!1)}.bind(this);c.__handleDisplayedRowsSynchronized=function(){this.rows.Wa(!0)}.bind(this);var f=this.view;c.__dirty=
f.Va;b.push(f.fa.subscribe(function(a){c.s(a)}));c.s(f.fa());var d=[];c.__classify=function(a){var b=d.map(function(b){return b(a)});return Array.prototype.concat.apply([],b)};c.oc=function(a){d.push(a)};c.installClassifier=c.oc;return function(){b.forEach(function(a){a.dispose()})}}function k(){function b(c,f){var d=a.contextFor(f),k=d.row(),d=d.column();return[c,k[d.G],k,d]}function c(a){return function(b){a.yc(".ko-grid-cell").hc(b);return!b.defaultPrevented}}var f=new m(b),d=new m(b),k=new m(b),
l=new m(b);this.Re=f.ya.bind(f);this.cb=d.ya.bind(d);this.uc=k.ya.bind(k);this.Qe=l.ya.bind(l);this["onCellMouseDown "]=this.Re;this["onCellClick "]=this.cb;this["onCellDoubleClick "]=this.uc;this["onCellContextMenu "]=this.Qe;this.Z(function(a){a();this.Fa.addEventListener("mousedown",c(f));this.Fa.addEventListener("click",c(d));this.Fa.addEventListener("dblclick",c(k));this.Fa.addEventListener("contextmenu",c(l))}.bind(this));return function(){}}function g(b){function c(a,b){for(var f=a.firstChild,
d=-1;f;){if(f.nodeType===C&&"TD"===f.tagName&&0<=(" "+f.className+" ").indexOf("td")&&++d===b)return f;f=f.nextSibling}throw Error("Column `"+b+"` does not exist.");}var f=function(a){for(var b=this.Fa.firstChild,c=-1;b;){if(b.nodeType===C&&"TR"===b.tagName&&0<=(" "+b.className+" ").indexOf("ko-grid-row")&&++c===a)return b;b=b.nextSibling}throw Error("Row `"+a+"` does not exist.");}.bind(this),k=0,e={};this.rows.__handleElementRecycling=function(a,b){m(a,b,function(a,b,c){a["__@__hijacked"]=null;
l(a,b,c)})};this.rows.__handleElementRecycled=function(a,b){m(a,b,function(a,b,c,f){f.element=a;f.zc=b;a["__@__hijacked"]=f;l(a,b,c);x(a,b,c)})};var m=function(c,f,l){if(k){var t=f.row();f=this.ua(a.unwrap(t[b.primaryKey]));d.c.w(e,f)&&e[f].forEach(function(a){var f=a.J,d=b.f.s().indexOf(f);l(c.children[d],t,f,a)})}}.bind(this);this.lookupCell=this.sc=function(m,g){function h(a){function b(){1===f.length?delete e[C]:f.splice(f.indexOf(c),1);--k;c.element["__@__hijacked"]===c&&(c.element["__@__hijacked"]=
null,l(c.element,c.zc,c.J),x(c.element,c.zc,c.J))}if(L["__@__hijacked"])throw Error("Illegal state: This cell is already hijacked.");a=g.Nc(a||function(a){return a},{n:g.Yb||w,update:g.$b||t});var c=L["__@__hijacked"]={element:L,zc:m,J:g,n:a.n,update:a.update},f=e[C]=e[C]||[];f.push(c);++k;l(L,m,g);x(L,m,g);return d.c.extend({Dd:b,dispose:b},{dispose:b,release:b})}var C=this.ua(a.unwrap(m[b.primaryKey])),N=this.rows.s().hb(m),z=b.f.s().indexOf(g),L=c(f(N),z);return d.c.extend({element:L,hd:h},{element:L,
hijack:h})}.bind(this);return function(){}}function l(b,c,f){for(var d=b["__@__hijacked"];b.firstChild;)a.removeNode(b.firstChild);(d&&d.n||f.Yb||w)(b,c,f)}function x(a,b,c){var f=b[c.G],d=a["__@__hijacked"],k=c.Rc.peek().join(" ");a.className="ko-grid-td ko-grid-cell "+k;(d&&d.update||c.$b||t)(a,f,b,c)}function w(a){a.insertBefore(N.createTextNode(""),a.firstChild)}function t(b,c,f,d){for(b=b.firstChild;b.nodeType!==h;)b=b.nextSibling;b.nodeValue=d.za(a.unwrap(c))}var h=window.Node.TEXT_NODE,C=window.Node.ELEMENT_NODE,
N=window.document;a.bindingHandlers.__gridRow={init:function(){},update:function(a,b){var c=b(),f=c.classify,d=c.row(),c=1===c.index()%2?["ko-grid-tr","ko-grid-row","alternate"]:["ko-grid-tr","ko-grid-row"],f=f(d);a.className=c.concat(f).join(" ")}};a.bindingHandlers.__gridCell={init:function(a,b){var c=b();l(a,c.row,c.column());return{controlsDescendantBindings:!0}},update:function(a,b){var c=b(),f=c.row(),c=c.column.peek();x(a,f,c)}};return{n:function(a){a.replace("body").Bc("body",c);a.gb("table").wc("<div class=\"ko-grid-load-indicator\" data-bind=\"style: { display: data.rows.__dirty() ? 'block' : 'none' }\">Loading&hellip;</div>")},
g:function(c,d,l){var t=[];this.source=c.dataSource;this.valueSelector=this.Ba=c.valueSelector||d.valueSelector||function(a){return a};this.observableValueSelector=this.ua=c.observableValueSelector||d.observableValueSelector||this.Ba;this.predicates=this.v=a.observableArray(c.filters||[]);this.predicate=this.e=a.pureComputed(function(){return e.v.Ga(this.v().map(a.unwrap))}.bind(this));this.comparator=this.l=a.observable(e.ca.ld);this.offset=this.offset=a.observable(0);this.limit=this.i=a.observable(Number.POSITIVE_INFINITY);
c=this.source.wa(function(a){return a.R(this.e).ka(this.l).tc(this.offset).rc(this.i)}.bind(this));t.push(c.dispose.bind(c));this.view=this.view=c;this.Sa=function(){};this.Z=function(a){var b=this.Sa;this.Sa=function(){a(b)}}.bind(this);t.push(b.call(this,l));t.push(f.call(this));t.push(k.call(this));t.push(g.call(this,l));this.na=function(){t.forEach(function(a){a()})}}}}(q,g,u,y,'<tbody class="ko-grid-tbody" data-bind="_gridWidth: columns.combinedWidth() + \'px\'">\n    <tr class="ko-grid-tr ko-grid-row"\n        data-bind="indexedRepeat: {\n            forEach: data.rows.displayed,\n            indexedBy: function(r) { return grid.data.observableValueSelector(ko.unwrap(r[grid.primaryKey])); },\n            as: \'row\',\n            at: \'rowIndex\',\n            beforeElementRecycling: data.rows.__handleElementRecycling,\n            afterElementRecycled: data.rows.__handleElementRecycled,\n            allowDeviation: true,\n            onDeviation: data.rows.__handleDisplayedRowsDeviate,\n            onSynchronization: data.rows.__handleDisplayedRowsSynchronized }"\n        data-repeat-bind="__gridRow: { classify: grid.data.rows.__classify, row: row, index: rowIndex }">\n\n        <td data-bind="indexedRepeat: { forEach: columns.displayed, indexedBy: \'id\', as: \'column\', allowElementRecycling: false }"\n            data-repeat-bind="__gridCell: { row: row, column: column }"></td>\n    </tr>\n</tbody>');
n=function(a,d,e,m){function c(b){this.id=this.id="column-header-"+b.id;this.element=this.element=a.observable(null);this.rowSpan=this.rowSpan=a.observable(1);this.columnSpan=this.sa=a.observable(1);this.label=this.label=b.label;this.column=this.J=b;this.columns=this.f=[b];this.Wb=function(a){this.rowSpan(a)}.bind(this)}function b(b){this.id=this.id="column-group-header-"+(b.id||"@__"+ ++w);this.element=this.element=a.observable(null);this.oe=b;this.rowSpan=this.rowSpan=a.observable(b.height);this.columnSpan=
this.sa=a.observable(1);this.label=this.label=a.observable(b.label);this.columns=this.f=[];this.Wb=function(a){this.f=[a];this.sa(1)}.bind(this)}function f(a){function b(a){a.ze.forEach(function(b){var f=c[b];if(!f)c[b]=a;else if(f!==a)throw Error("Column `"+b+"` is element of column group `"+f.label+"` as well as `"+a.label+"`.");});a.vb&&b(a.vb)}var c={};d.o.lc(a,k.bind(this,null)).forEach(function(a){b(a)});return c}function k(a,b){var c=g(b),f=b.elements.filter(function(a){return"string"!==typeof a}),
l=b.elements.filter(function(a){return"string"===typeof a}),c={id:b.id,label:b.label,vb:a,depth:a?a.depth+1:0,height:a?a.wd-c:1,wd:c,ze:l};return f.length?d.o.lc(f,k.bind(this,c)):c}function g(a){a=a.elements.filter(function(a){return"string"!==typeof a});return 1+Math.max.apply(Math,[0].concat(a.map(g)))}var l=window.document,x=window.Node,w=0;a.bindingHandlers.__gridHeader={init:function(b,c){var f=c()();f.element(b);a.utils.domNodeDisposal.addDisposeCallback(b,function(){f.element(null)});for(var d=
b.firstChild;d;){var k=d;k.nodeType===x.TEXT_NODE&&a.removeNode(k);d=d.nextSibling}b.insertBefore(l.createTextNode(""),b.firstChild);return{controlsDescendantBindings:!0}},update:function(a,b){var c=b()(),f=c.id.replace(/[\s]/g,"_");a.className=c.J?"ko-grid-th ko-grid-column-header "+f+" "+c.J.Ka().join(" "):"ko-grid-th ko-grid-column-group-header "+f;f=c.f.map(function(a){return a.Ca()}).reduce(function(a,b){return a+b})+"px";a.style.width=f;a.style.maxWidth=f;a.rowSpan=c.rowSpan();a.colSpan=c.sa();
for(f=a.firstChild;f.nodeType!==x.TEXT_NODE;)f=f.nextSibling;f.nodeValue=c.label()}};return{n:function(a){a.replace("head").Bc(m)},g:function(d,k,l){function m(a,c,f){if(!a)return[];if(c[a.depth]&&c[a.depth].oe===a){var d=a;do{var k=c[d.depth];k.f.push(f);k.sa(k.sa()+1);d=d.vb}while(d);return[]}c.length=a.depth;var d=m(a.vb,c,f),l=k=a.depth;a=g(x,new b(a));a.Wb(f);d[k]=c[l]=a;return d}function g(a,b){var c=b.id;return a[c]=a[c]||b}var w=f(d.columnGroups||[]),x={},h={},r=[];this.__rows=this.Xb=a.computed(function(){var b=
l.f.s(),f=0;b.forEach(function(a){a=w[a.id];f=Math.max(f,a?a.depth+a.wd:0)});r.length=f+1;for(var d=0;d<r.length;++d)r[d]=r[d]||a.observableArray(),r[d].__rowId="header-row-"+d,r[d].valueWillMutate(),r[d]().length=0;var k=[];b.forEach(function(a){var b=w[a.id],d=b?b.depth+b.height:0;k.length=d;var l=g(h,new c(a));l.Wb(f-d+1);r[d]().push(l);a=m(b,k,a);for(b=0;b<a.length;++b)a[b]&&r[b]().push(a[b])});r.forEach(function(a){a.valueHasMutated()});return r});this.all=this.all=a.computed(function(){var a=
[];this.Xb().forEach(function(b){Array.prototype.push.apply(a,b())});return a}.bind(this));this.forColumn=this.mc=function(a){a="column-header-"+a.id;if(!Object.prototype.hasOwnProperty.call(h,a))throw Error("Es existiert kein Header f\u00fcr die gegebene Spalte.");return h[a]};var z=new e(function(b,c){return[b,a.contextFor(c).header()]});this.__handleClick=function(a,b){z.yc(".ko-grid-column-header, .ko-grid-column-group-header").hc(b);return!b.defaultPrevented};this.ud=z.ya.bind(z);this.Ab=function(a,
b){function f(a,d){d instanceof c&&b.apply(this,arguments)}var d=1<arguments.length;b=d?b:a;z.ya.apply(z,d?[a,f]:[f])};this.onHeaderClick=this.ud;this.onColumnHeaderClick=this.Ab;this.na=function(){this.Xb.dispose();this.all.dispose()}.bind(this)}}}(q,g,y,'<thead class="ko-grid-thead" data-bind="_gridWidth: columns.combinedWidth() + \'px\'">\n    \x3c!--before:headers--\x3e\n    <tr class="ko-grid-tr ko-grid-headers"\n        data-bind="indexedRepeat: { forEach: headers.__rows, indexedBy: \'__rowId\', as: \'headerRow\' }"\n        data-repeat-bind="click: headers.__handleClick">\n\n        <th class="ko-grid-th"\n            data-bind="indexedRepeat: { forEach: headerRow(), indexedBy: \'id\', as: \'header\' }"\n            data-repeat-bind="__gridHeader: header"></th>\n    </tr>\n    \x3c!--after:headers--\x3e\n</thead>');
e=function(a,d,e,m,c){a=a.bindingHandlers.grid=a.bindingHandlers.grid||{};return a.core=a.core||{columns:d,data:e,headers:m,layout:c}}(q,v,u,n,function(a){function d(a,c,k,e){var l=a.element,g=l.querySelector(".ko-grid-table-scroller-padding"),w=l.querySelector(".ko-grid-table-scroller"),t=l.querySelector(".ko-grid-thead"),h=l.querySelector(".ko-grid-tfoot"),r=!1;return function(a){if(!r)try{c(r=!0);var b=w.scrollLeft;a&&a();k.forEach(function(a){a.call(l)});m(l,function(){g.style.borderTopWidth=
Math.max(t.clientHeight,0)+"px";g.style.borderBottomWidth=Math.max(h.clientHeight,0)+"px"});w.scrollLeft=b;e.forEach(function(a){a.call(l)})}finally{c(!1),r=!1}}}function e(a){a=a.element;var c=a.querySelector(".ko-grid-table-scroller"),d=a.querySelector(".ko-grid-thead"),m=a.querySelector(".ko-grid-tfoot");c.addEventListener("scroll",function(){var a=-c.scrollLeft+"px";d.style.left=a;m.style.left=a})}function m(a,f){if(a.offsetWidth&&a.offsetHeight)f();else{var d=a.parentNode,e=c.createComment("placeholder");
d.replaceChild(e,a);var l=a.style.position;a.style.position="absolute";a.style.visibility="hidden";c.body.appendChild(a);try{f()}finally{d.replaceChild(a,e),a.style.position=l,a.style.visibility="visible"}}}var c=window.document;return{n:function(){},g:function(b,f,k){function m(a){a&&a()}var l=a.observable(!1);this.recalculate=this.ja=function(a){m(a)};var g=a.computed(function(){l()||(k.f.s().forEach(function(a){a.width()}),m())}),w=[],t=[];this.ec=function(a){w.push(a)};this.tb=function(a){t.push(a)};
this.beforeRelayout=this.ec;this.afterRelayout=this.tb;this.Sa=function(){e.call(this,k);m=d(k,l,w,t);k.ha(m)}.bind(this);this.determineCellDimensions=this.wb=function(a){var b=c.createElement("div");b.className="ko-grid-td ko-grid-cell";b.appendChild("string"===typeof a?c.createTextNode(a):a);b.style.position="absolute";b.style.visibility="hidden";c.body.appendChild(b);try{return{width:b.offsetWidth,height:b.offsetHeight}}finally{c.body.removeChild(b)}};this.na=function(){g.dispose()}}}}(q));(function(a,
d){function e(a,c){if(d.c.w(b,a))throw Error("Extension id or alias already in use: `"+a+"`.");b[a]=c;c.Ub.push(a);return c}function m(a,b){this.yd=a;this.F=b.F||[];this.K=b.K||function(){};this.g=b.g;this.Ub=[]}var c=a.bindingHandlers.grid=a.bindingHandlers.grid||{},b=c.extensions=c.extensions||{};c.p=function(a,b){return e(a,new m(a,b))};c.yb=function(a){if(!d.c.w(b,a))throw Error("No known extension id or alias: `"+a+"`.");return b[a]};c.q=function(a,b){return e(a,c.yb(b))};c.Yc=function(a,b){var d=
c.yb(b);a.forEach(function(a){return e(a,d)});return d};m.prototype={get Me(){return this.Ub.slice()},cd:function(a,b){var c=this.Ic(a,function(a){throw Error("Conflicting configurations "+a.map(function(a){return"`"+a+"`"}).join(", ")+" (configuration: `"+b+"`).");});if(!c)throw Error("The extension `"+this.yd+"` must be configured (configuration: `"+b+"`)");return a[c]},ff:function(a){var b=this.Ic(a,function(a){throw Error("Conflicting binding values "+a.map(function(a){return"`"+a+"`"}).join(", ")+
".");});return a[b]},Ic:function(a,b){var c=this.Ub.filter(function(b){return d.c.w(a,b)});1<c.length&&b(c);return c[0]}};return b})(q,g);return function(a){return a}(function(a,d,g,m){function c(b,c){function d(){var a=w[b];c(a.Be,a.ef,a.De)}w[b]?d():a([b],function(a){function c(d){d=k.yb(d);var l=d.yd,w=d.cd(e,b);if(!g.o.contains(m,l)){if(g.o.contains(r,l))throw Error("Dependency-Cycle: .. -> "+r.join(" -> ")+" -> "+l+" -> ..");r.push(l);d.F.forEach(c);d.K(f,w,a);if(r.pop()!==l)throw Error("Assertion error.");
m.push(l)}}var f=new h('<div class="ko-grid">\n    \x3c!--before:grid--\x3e\n    <div class="ko-grid-table-container">\n        \x3c!--before:table--\x3e\n        <div class="ko-grid-table-scroller-padding">\n            <div class="ko-grid-table-scroller">\n                <table class="ko-grid-table" data-bind="_gridWidth: columns.combinedWidth() + \'px\'">\n                    \x3c!--columns--\x3e\n                    \x3c!--head--\x3e\n                    <tfoot class="ko-grid-tfoot" data-bind="_gridWidth: columns.combinedWidth() + \'px\'">\x3c!--tfoot--\x3e</tfoot>\n                    \x3c!--body--\x3e\n                </table>\n            </div>\n        </div>\n        \x3c!--after:table--\x3e\n    </div>\n    \x3c!--after:grid--\x3e\n</div>');
l.forEach(function(b){b.n(f,a)});var e=a.extensions,m=[],r=[];Object.keys(e).forEach(c);var z="ko-grid-template-"+b;x.a(z,f.ye());w[b]={Be:a,ef:z,De:m};d()})}function b(a,b){this.xe=b;this.primaryKey=this.primaryKey=b.primaryKey;this.rootElement=this.B=a;this.element=this.element=null;this.na=function(){};this.Z=function(){};this.ha=function(a){if(!this.Z)throw Error("Illegal state: postApplyBindings-callbacks have been called already.");var b=this.Z;this.Z=function(){b();a()}}.bind(this);var c=new m;
this.Bb=c.ya.bind(c);this["onKeyDown "]=this.Bb;a.addEventListener("keydown",function(a){c.yc(".ko-grid").hc(a);return!a.defaultPrevented})}var f=window.document,k=d.bindingHandlers.grid=d.bindingHandlers.grid||{},z=["columns","headers","data","layout"],l=z.map(function(a){return e[a]}),x=new d.nativeTemplateEngine;x.a=function(a,b){var c=f.createElement("script");c.id=a;c.type="text/html";c.text=b;f.querySelector("head").appendChild(c)};d.bindingHandlers.grid.init=function(a,f,l,m,w){function h(a){return"function"===
typeof a?a.apply(void 0,Array.prototype.slice.call(arguments,1)):a}var p=f(),n=p.config;c(n,function(c,f,l){var m=[],q=new b(a,p);d.utils.domNodeDisposal.addDisposeCallback(a,function(){q.na();m.forEach(function(a){a()})});g.c.ea(e,function(a,b){var d=new b.g(p,c,q);q[a]=d;q.f=q.columns;q.headers=q.headers;q.data=q.data;q.M=q.layout;"function"===typeof d.na&&m.push(d.na.bind(d))});var u=c.extensions,C=p.extensions||{},N=q.extensions=q.d={};for(l.forEach(function(a){a=k.yb(a);var b=a.ff(C)||{},d=h(a.cd(u,
n),b,p);if((!1!==d.enabled||!0===b.enabled)&&!1!==b.enabled){a.F.forEach(function(a){if(!N[a])throw Error("Dependency '"+a+"' was disabled.");});var f=new a.g(b,d,q,p,c);a.Me.forEach(function(a){N[a]=f});"function"===typeof f.dispose&&m.push(f.dispose.bind(f))}});a.firstChild;)d.removeNode(a.firstChild);l=w.createChildContext(q,"grid");d.renderTemplate(f,l,{templateEngine:x},a);var v=a.querySelector(".ko-grid");q.element=v;q.element=v;g.c.ea(u,function(a){v.className+=" with-"+g.La.Wc(a)});z.forEach(function(a){q[a].Sa&&
q[a].Sa()});q.Z();q.Z=null});return{controlsDescendantBindings:!0}};d.bindingHandlers.grid.update=function(){};var w={};d.bindingHandlers._gridWidth={init:function(){},update:function(a,b){var c=b();a.style.width=c;a.style.maxWidth=c}};return k}(X,q,g,y))}(I,F,G,E,B,H,J,D);da=function(y,v,u,n,g,p,d,q,h){return function(d){return d}(function(d,a,g){function h(a,c){return a.data.source.Y(function(b){return b.R(a.data.e)}).then(function(b){var d={count:0};c.forEach(function(a){d[a]={minimum:Number.POSITIVE_INFINITY,
maximum:Number.NEGATIVE_INFINITY,sum:0}});return b.reduce(function(b,e){++d.count;c.forEach(function(b){var c=d[b];b=a.data.Ba(e[b]);c.minimum=Math.min(c.minimum,b);c.maximum=Math.max(c.maximum,b);c.sum+=b});return b},d)})}d="ko-grid-aggregate".substr(0,-1).substr(0,-1);g.p(d,{K:function(a){a.gb("tfoot").wc("aggregates",'<tr class="ko-grid-tr ko-grid-aggregate-row" data-bind="indexedRepeat: {  forEach: extensions.aggregate.__aggregateRows,  indexedBy: \'id\',  as: \'aggregateRow\'}">  <td class="ko-grid-tf ko-grid-aggregate"    data-bind="indexedRepeat: {      forEach: columns.displayed,      indexedBy: \'id\',      as: \'column\'    }"    data-repeat-bind="      __gridAggregate: aggregateRow()[column().id],      _gridWidth: column().width()"></td></tr>')},
g:function(d,c,b){var f=a.observable([]);this.__aggregateRows=f;if(Array.isArray(d)){var e=[];d.forEach(function(a){Object.keys(a).forEach(function(a){a=b.f.ra(a).G;0>e.indexOf(a)&&e.push(a)})});var g=c.statisticsComputer||h,l=0,x=a.computed(function(){b.data.e();b.data.view.values();return g(b,e).then(function(a){var c=a.count;f(d.map(function(d){var f={id:""+ ++l};b.f.s().forEach(function(b){var l=b.id,e=b.G,k=d[l];if(k){if(c)if(e="average"===k?a[e].sum/c:a[e][k],1<=Math.abs(e))e=e.toLocaleString();
else var m=-Math.floor(Math.log(e)/Math.log(10)),e=e.toLocaleString(void 0,{maximumFractionDigits:m+1});else e="N/A";b={J:b,cc:k,value:e}}else b={J:b};f[l]=b});return f}));b.M.ja()})});this.dispose=function(){x.dispose()}}}});a.bindingHandlers.__gridAggregate={init:function(d){for(;d.firstChild;)a.removeNode(d.firstChild);d.appendChild(window.document.createTextNode(""));return{controlsDescendantBindings:!0}},update:function(a,c){var b=c();a.className=["ko-grid-tf ko-grid-aggregate"+(b.cc?" "+b.cc:
"")].concat(b.J.ed()).join(" ");a.firstChild.nodeValue=b.cc?b.value:""}};return g.q("aggregate",d)}({},h,p))}(I,G,F,E,B,K,H,J,D);Y=function(y,v,u,n,g,p,d,q,h){return function(d){return d}(function(d,a,g,h){var m=[38,37,39,40,9,13];h.p("ko-grid-cell-navigation",{K:function(a){a.dc("table").L('<textarea class="ko-grid-focus-parking" tabIndex="-1" style="position: absolute; z-index: 10; overflow: hidden; box-sizing: border-box; width: 1em; height: 1em; top: -3em; left: -3em; resize: none; border: none;"></textarea>')},
g:function(c,b,d){function e(a,b,c){c=!!c;var l=d.data.rows.s(),k=d.f.s();a=l.hb(q)+a;b=k.indexOf(p)+b;c&&0>b?(--a,b=k.length-1):c&&b>=k.length&&(a+=1,b=0);b=Math.max(0,Math.min(k.length-1,b));a=Math.max(0,Math.min(l.length-1,a));h(l.get(a),k[b])}function h(b,c){var e=d.data.sc(b,c);b===q&&c===p||l(b,c,e);if(!g.qc(d.B,window.document.activeElement)){var k=e.element.querySelector("input, select, textarea");k||(t.value=c.za(a.unwrap(b[c.G])),t.setSelectionRange(0,t.value.length),k=t);k.focus()}var k=
e.element,e=w.getBoundingClientRect(),m=k.getBoundingClientRect(),k=Math.min(0,m.left-e.left-7)||Math.max(0,m.right-e.right+7+(w.offsetWidth-w.clientWidth)),e=Math.min(0,m.top-e.top-7)||Math.max(0,m.bottom-e.bottom+7+(w.offsetHeight-w.clientHeight));w.scrollLeft+=k;w.scrollTop+=e}function l(a,b,c){n&&n.Dd();n=c.hd(function(c){return x.reduce(function(c,d){return d(a,b,c)||c},{n:function(a,b,d){var f=arguments;q=b;p=d;c.n.apply(this,f);a.classList.add("focused")},update:function(a){c.update.apply(this,
arguments);a.classList.add("focused")}})})}var x=[];this.onCellFocused=this.vc=function(a){return x.push(a)};var w=null,t=null,q=null,p=null,n=null;d.ha(function(){w=d.element.querySelector(".ko-grid-table-scroller");t=d.element.querySelector(".ko-grid-focus-parking")});d.data.cb(function(a,b,c,d){return h(c,d)});d.Bb(function(a){if(!(a.defaultPrevented||0>m.indexOf(a.keyCode))){a.preventDefault();var b=a.shiftKey?-1:1;switch(a.keyCode){case 38:return e(-1,0);case 37:return e(0,-1);case 39:return e(0,
1);case 40:return e(1,0);case 9:return e(0,b,!0);case 13:return e(b,0)}}})}});return h.q("cellNavigation","ko-grid-cell-navigation")}({},h,y,p))}(I,F,G,E,B,K,H,J,D);V=function(y,v,u,n,g,p){return function(d){return d}(function(d,g){g.p("ko-grid-column-sizing",{g:function(){this.isResizable=this.Za=function(d){return d.Ob}}});return g.q("columnSizing","ko-grid-column-sizing")}({},p))}(I,G,F,E,B,K,H,J,D);Z=function(y,v,u,n,g,p,d,q,h,e){return function(a){return a}(function(a,d,e,m){var c=window.document,
b=window.requestAnimationFrame.bind(window),f=window.cancelAnimationFrame.bind(window);m.p("ko-grid-column-resizing",{F:["ko-grid-column-sizing"],g:function(a,m,l){function g(a){a.forEach(function(a){!t[a.id]&&a.f.filter(h).length&&(t[a.id]=a.element.subscribe(function(a){if(a){var b=c.createElement("div");b.classList.add("ko-grid-column-resizer");a.appendChild(b)}}))})}var h=l.d["ko-grid-column-sizing"].Za,t={},p=l.headers.all.subscribe(g);g(l.headers.all());var q=!1;this.isResizeInProgress=this.nd=
function(){return q};l.B.addEventListener("mousedown",function(a){function k(){for(var a=p+y-v,a=Math.max(0,a-10*x.length),b=0;b<x.length;++b){var c=Math.round(n[b]*a);x[b].width(10+c+"px");a-=c}}function g(c){y=c.pageX;L&&f(L);L=b(k);a.preventDefault()}function m(){L&&f(L);c.removeEventListener("mousemove",g);c.removeEventListener("mouseup",m);c.body.removeChild(t);a.target.classList.remove("active");q=!1;l.M.ja()}if(e.element.matches(a.target,".ko-grid-column-resizer")){a.preventDefault();var t=
c.createElement("div");t.id="ko-grid-column-resize-in-progress";c.body.appendChild(t);a.target.classList.add("active");q=!0;for(var x=d.contextFor(a.target).header().f.filter(h),p=0,n=[],z=x.length-1;0<=z;--z){var u=x[z].Ca(),p=p+u;n.unshift(u/p)}var v=a.pageX,y=v,L=null;c.addEventListener("mousemove",g);c.addEventListener("mouseup",m)}},!0);l.B.addEventListener("click",function(a){e.element.matches(a.target,".ko-grid-column-resizer")&&a.preventDefault()},!0);this.dispose=function(){p.dispose();Object.keys(t).forEach(function(a){t[a].dispose()})}}});
return m.q("columnResizing","ko-grid-column-resizing")}({},e,y,h))}(I,G,F,E,B,V,H,J,K,D);Q=function(y,v,u,n,g,p,d,q,h){return function(d){return d}(function(d,a,g,h){h.p("ko-grid-view-modes",{g:function(d,c,b){d=function(a){return function(c,d){var e="string"===typeof c?[c]:g.o.ad(c),m=this.oa();e.forEach(function(b){if(g.o.contains(m,b)===a)throw Error("Mode `"+b+"` is already "+(a?"active":"inactive")+".");});b.M.ja(function(){this.oa.valueWillMutate();var c=b.element.classList;if(a)Array.prototype.push.apply(m,
e),c.add.apply(c,e);else{var k=m.filter(function(a){return!g.o.contains(e,a)});m.length=0;Array.prototype.push.apply(m,k);c.remove.apply(c,e)}m.sort();d&&d();this.oa.valueHasMutated()}.bind(this))}.bind(this)}.bind(this);this.oa=a.observableArray([]);this.kc=d(!0);this.od=d(!1);this.activeModes=this.oa;this.enver=this.kc;this.leave=this.od}});return h.q("viewModes","ko-grid-view-modes")}({},h,g,p))}(I,G,F,E,B,K,H,J,D);T=function(y,v,u,n,g,p,d,q,h){return function(d){return d}(function(d,a,g){function h(c,
b,d){function e(a){return b()+"."+a}var g={};this.read=function(a){return c.read(e(a))};this.a=function(a,b){return c.a(e(a),b)};this.bind=function(b,c){if(a.c.w(g,b))throw Error("The key `"+b+"` is already bound.");var e=c.subscribe(function(a){d()||this.a(b,a)}.bind(this)),k=g[b]={Lc:function(){var a=this.read(b);void 0===a?this.a(b,c()):c(a)}.bind(this),key:b,observable:c,dispose:function(){e.dispose();delete g[b]}};k.Lc();return k}.bind(this);this.Mc=function(){a.c.ea(g,function(a,b){b.Lc()})};
this.he=function(){a.c.ea(g,function(a,b){b.dispose();delete g[a]})}}function m(){this.read=function(a){a=window.localStorage.getItem(a);return null===a?void 0:JSON.parse(a)};this.a=function(a,b){void 0!==b&&window.localStorage.setItem(a,JSON.stringify(b))}}g.p("ko-grid-view-state-storage",{F:["ko-grid-view-modes"],g:function(c,b,d){var e=this,g="koGrid."+a.La.Xc(d.B.id);c=b.keyValueStore||new m;var l=!1;e.zb=new h(c,function(){return g},function(){return!1});e.ab=new h(c,function(){return g+"["+
d.d["ko-grid-view-modes"].oa().join(";")+"]"},function(){return l});var x=d.d["ko-grid-view-modes"].oa.subscribe(function(){l=!0},null,"beforeChange"),w=d.d["ko-grid-view-modes"].oa.subscribe(function(){l=!1;e.ab.Mc()});d.ha(function(){return[e.zb,e.ab].forEach(function(a){return a.Mc()})});e.dispose=function(){x.dispose();w.dispose();[e.zb,e.ab].forEach(function(a){return a.he()})}}});return g.q("viewStateStorage","ko-grid-view-state-storage")}({},g,h))}(I,G,F,E,B,Q,H,J,K,D);ea=function(y,v,u,n,
g,p,d,q,h,e,a,r,M){return function(a){return a}(function(a,c,b,d){d.p("ko-grid-column-scaling",{F:["ko-grid-view-state-storage","ko-grid-column-sizing"],g:function(a,d,f){function e(a){var c=0,d=0,k=0,g={};f.f.s().forEach(function(a){var b=p(a),f;b&&m(a)?(f=h()[a.id].width,d+=f):(f=a.Ca(),k+=b?0:f);c+=f;g[a.id]={width:f,ub:0}});if(c>=a)return g;var w=a-c,x=d||c-k;return b.c.rd(g,function(a,b){var c=f.f.ra(b);if(!p(c)||d&&!m(c))return a;c=Math.round(a.width/x*w);w-=c;x-=a.width;return{width:a.width,
ub:c}})}function g(a){a=e(a);b.c.ea(a,function(a,b){f.f.ra(a).width(b.width+b.ub+"px")});h(a)}function m(a){var b=h()[a.id];return b&&b.width+b.ub===a.Ca()}var h=c.observable({});f.d["ko-grid-view-state-storage"].ab.bind("borrowedPixels",h);var p=f.d["ko-grid-column-sizing"].Za;f.M.ec(function(){if(!f.d["ko-grid-column-resizing"]||!f.d["ko-grid-column-resizing"].nd()){var a=this.querySelector(".ko-grid-table-scroller").clientWidth,b=f.f.Vc(),c=0;f.f.s().forEach(function(a){c+=m(a)?h()[a.id].ub:0});
(a>b||a<b&&c)&&g(a)}})}});return d.q("columnScaling","ko-grid-column-scaling")}({},r,g,M))}(G,I,F,E,B,Z,T,H,J,V,Q,D,K);fa=function(y,v,u,n,g,p,d,q,h,e,a,r){return function(a){return a}(function(a,d,c){c.p("ko-grid-column-width-persistence",{F:["ko-grid-view-state-storage","ko-grid-column-sizing"],g:function(a,c,e){function g(a){return a.filter(function(a){return!d.c.w(w,a.key)}).forEach(function(a){w[a.key]=!0;h(a)&&l.bind("column["+a.id+"].width",a.width)})}var l=e.d["ko-grid-view-state-storage"].ab,
h=e.d["ko-grid-column-sizing"].Za,w={},t=e.f.all.subscribe(g);g(e.f.all());this.dispose=function(){t.dispose()}}});return c.q("columnWidthPersistence","ko-grid-column-width-persistence")}({},g,r))}(I,G,F,E,B,V,T,H,J,Q,D,K);ga=function(y,v,u,n,g,p,d,q,h,e){return function(a){return a}(function(a,d,e){function g(a){this.a=a}var c=[[37,40],[9,9],[13,13],[27,27],[16,16],[112,112],[114,123],[113,113]],b=c.length-1,f={dispose:function(){}};e.p("ko-grid-editing",{F:["ko-grid-cell-navigation"],g:function(a,
d,e){function h(){u=!0;n.style.top="0";n.style.left="0";n.style.right="0";n.style.bottom="0";n.style.width=""}var w=a.createEditor||d.createEditor||function(){return null},t=a.saveChange||d.saveChange||function(){return window.console.warn("No `saveChange` strategy provided.")},p=null,q=null,n=null,r=null,u=!1,v=f;e.data.uc(function(){r&&(h(),r.bc())});e.d["ko-grid-cell-navigation"].vc(function(a,d,k){v.dispose();v=f;if(a=w(a,d))return n=window.document.createElement("div"),n.style.position="absolute",
n.style.top="0",n.style.left="-8px",n.style.right="",n.style.bottom="0",n.style.width="7px",n.style.overflow="hidden",r=new g(a),a=r.element,n.appendChild(a),a.classList.add("ko-grid-editor"),a.style.boxSizing="border-box",a.style.width="100%",a.style.height="100%",u=!1,v=e.Bb(".ko-grid-editor",function(a){var d=a.keyCode,f;a:{f=u?4:0;for(var e=u?c.length:b;f<e;++f){var k=c[f];if(k[0]<=d&&k[1]>=d){f=!0;break a}}f=!1}if(!f){if(27===a.keyCode)a.preventDefault(),r.Rd(),u=!1,n.style.top="0",n.style.left=
"-8px",n.style.right="",n.style.bottom="0",n.style.width="7px",r.bc();else{if(!a.ctrlKey&&13===d||9===d){r.hf&&t(p,q,r.value);return}u||a.ctrlKey||a.altKey||h()}a.Fb()}}),{n:function(a,b,c){var d=arguments;p=b;q=c;k.n.apply(this,d);a.appendChild(n);u?r.focus():r.bc()},update:k.update}})}});g.prototype={get element(){return this.a.element},get value(){return this.a.value},set value(a){this.a.value=a},get hf(){return this.a.valueChanged},bc:function(){this.a.activate()},focus:function(){this.a.focus()},
Rd:function(){this.a.reset()}};return e.q(["editing"],"ko-grid-editing")}({},e,h))}(I,F,G,E,B,Y,H,J,K,D);ha=function(y,v,u,n,g,p){return function(d){return d}(function(d,g){function h(d){var g=d.f.s().filter(function(a){return!!a.G}),c=d.data.Ba;d.data.source.Y(function(a){return a.R(d.data.e).ka(d.data.l)}).then(function(a){return a.map(function(a){return"<tr>"+g.map(function(b){return"<td>"+c(a[b.G])+"</td>"}).join("")+"</tr>"}).reduce(function(a,b){return a+b},"")}).then(function(b){b=['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">  <head></head>  <body>    <table>      <thead>',
"        <tr>"+g.map(function(a){return"<th>"+a.label()+"</th>"}).join("")+"</tr>","      </thead>      <tbody>",b,"      </tbody>    </table>  </body></html>"].join("");(window.navigator.a?window.navigator.a.bind(window.navigator):function(a,b){var c=n.createObjectURL(a),d=e.createElement("a");d.href=c;d.download=b;var g=e.createEvent("MouseEvents");g.initEvent("click",!0,!0);d.dispatchEvent(g);window.setTimeout(function(){return n.revokeObjectURL(c)})})(new a([b],{type:"application/vnd.ms-excel;charset=utf-8"}),
"excel-export.xls")})}var e=window.document,a=window.Blob,n=window.URL;g.p("ko-grid-export",{F:["ko-grid-toolbar"],K:function(a){a.pc("left-toolbar").L(' <button class="ko-grid-toolbar-button ko-grid-excel-export">Excel Export</button> ')},g:function(a,d,c){c.B.addEventListener("click",function(a){a.target.classList.contains("ko-grid-excel-export")&&h(c)})}});return g.q("export","ko-grid-export")}({},p))}(I,G,F,E,B,K,H,J,D);ia=function(y,v,u,n,g,p,d,q,h,e,a){return function(a){return a}(function(a,
d,e,c,b){function f(a,b){function c(a){return"*"+a}var d=b.toLowerCase()!==b;return 0<=b.indexOf("*")?k(a,b,d):k(a,"*"+b.replace(/([A-Z])/g,c)+"*",d)}function k(a,b,c){b="^"+b.split("*").map(g).join(".*")+"$";var d=new RegExp(b,c?"":"i"),f=a.za;return e.v.Ee(function(a){return d.test(f(a))},function(){return e.v.Cd(d).stringifyable})}function g(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var l=e.v.Qc;c.p("ko-grid-filtering",{F:[],K:function(a){return a.sb("headers").L("filters",b)},g:function(a,
b,c){function k(a){var b=a.id;if(!g[b]){var e=d.observable("");c.d["ko-grid-view-state-storage"]&&c.d["ko-grid-view-state-storage"].zb.bind("filters["+b+"]",e);g[b]={text:e,e:d.pureComputed(function(){var b=e();return b.length?f(a,b):l})}}return g[b]}var g={};this.__forColumn=k;a=d.pureComputed(function(){var a=c.f.s().filter(function(a){return k(a).e()!==l}).map(function(a){return k(a).e().va(e.Ja.xc(a.G))});return e.v.Ga(a)});var h=b.Lb&&b.Lb.sf||300,n=b.Lb&&!1===b.Lb.enabled?a:a.extend({Lb:h}),
p=d.observable(!0);this.__applied=d.pureComputed(function(){p(p()||c.data.rows.Wa()&&!c.data.view.Va());return p()});c.data.v.push(d.pureComputed(function(){p(!1);return n()}));this.dispose=function(){n.dispose()}}});return c.q("filtering","ko-grid-filtering")}({},e,u,a,'<tr class="ko-grid-tr ko-grid-filter-row" data-bind="css: { applied: extensions.filtering.__applied }">\n    <td class="ko-grid-th ko-grid-filter-cell" data-bind="indexedRepeat: { forEach: columns.displayed, indexedBy: \'id\', as: \'column\' }" data-repeat-bind="if: column().userDefined">\n        <input class="ko-grid-filter" type="text" data-bind="value: extensions.filtering.__forColumn(column()).text, valueUpdate: [\'input\']"/>\n    </td>\n</tr>'))}(I,
F,G,E,B,T,H,J,Q,D,K);ja=function(y,v,u,n,g,p,d,q,h,e){return function(a){return a}(function(a,d,e){var g=window.document.documentElement;e.p("ko-grid-full-screen",{F:["ko-grid-toolbar","ko-grid-view-modes"],K:function(a){a.pc("left-toolbar").L(' <label class="ko-grid-toolbar-button ko-grid-full-screen-label" data-bind="css: { pressed: extensions.fullScreen.__state }">  <input type="checkbox" tabIndex="-1" class="ko-grid-full-screen-toggle" data-bind="checked: extensions.fullScreen.__state" />  Full Screen</label> ')},
g:function(a,b,f){var e=d.observable(!1);this.__state=e;this.kc=function(){return e(!0)};var h=f.B.classList.contains("fixed-height"),l=e.subscribe(function(a){a?(g.classList.add("contains-full-screen-element"),f.d["ko-grid-view-modes"].kc("full-screen",function(){f.B.classList.add("fixed-height")})):(g.classList.remove("contains-full-screen-element"),f.d["ko-grid-view-modes"].od("full-screen",function(){h||f.B.classList.remove("fixed-height")}))});this.dispose=function(){return l.dispose()}}});return e.Yc(["fullscreen",
"fullScreen"],"ko-grid-full-screen")}({},e,h))}(I,G,F,E,B,Q,H,J,K,D);aa=function(y,v,u,n,g,p,d,q,h){return function(d){return d}(function(d,a,g,h){function m(b,d,e){function g(){var a=n.querySelectorAll("tbody tr").length,b=n.clientHeight,a=Math.floor(b/(a||1))||p;q(m.clientHeight-(b-(b-b%a)));r(a)}function l(a){"fit"===a?e.element.classList.add("with-fitted-page-size"):e.element.classList.remove("with-fitted-page-size")}var h=c(b,d,["pageSize","desired"],["pageSize"]);b=c(b,d,["pageSize","maximum"])||
50;var m,n;e.ha(function(){m=e.element.querySelector(".ko-grid-table-scroller");n=e.element.querySelector(".ko-grid-table")});this.sd=this.maximumStepSize=a.observable(2);this.Gb=this.rowCount=a.pureComputed(function(){return e.data.view.da()});d={};d.ta=d.desired=a.observable(h);d.Oe=d.maximum=a.observable(b);d.pa=d.actual=a.pureComputed(function(){var a=this.A.ta();"fit"===a&&(a=Math.floor(q()/r()),a=Math.max(1,a));return Math.min(this.A.Oe(),a)}.bind(this));this.A=this.pageSize=d;this.T=this.pageIndex=
a.observable(0);this.Se=this.pageCount=a.pureComputed(function(){var a=Math.max(0,Math.floor((this.Gb()-1)/this.A.pa()));this.T(Math.min(this.T(),a));return a+1}.bind(this));var p=e.M.wb("|").height,q=a.observable(5*p),r=a.observable(p);e.M.tb(g);e.ha(function(){return e.data.rows.Wa.subscribe(function(a){a&&g()})});var u=this.T.subscribe(function(a){return e.data.offset(a*this.A.pa())}.bind(this)),v=this.A.pa.subscribe(function(a){e.data.offset(this.T()*a);e.data.i(a)}.bind(this));e.data.offset(this.T()*
this.A.pa());e.data.i(this.A.pa());var y=this.A.ta.subscribe(l);e.ha(function(){return l(this.A.ta())}.bind(this));this.dispose=function(){this.Gb.dispose();u.dispose();v.dispose();y.dispose()}.bind(this)}function c(a,c,d){for(var e=2;e<arguments.length;++e)for(var g=0;2>g;++g){var h=arguments[e].reduce(function(a,b){return a&&a[b]},arguments[g]);if(void 0!==h&&"object"!==typeof h)return h}}g.p("ko-grid-paging",{F:["ko-grid-toolbar"],K:function(a){return a.gb("right-toolbar").append("paging",h)},
g:m});m.prototype={get __adjacentPageIndizes(){return a.pureComputed(function(){for(var a=Math.max(0,this.T()-this.sd()),c=Math.min(this.Se()-1,this.T()+this.sd())-a+1,d=Array(c),e=0;e<c;++e)d[e]=a+e;return d}.bind(this))},get __message(){return a.pureComputed(function(){var a=this.T()*this.A.pa()+1,c=Math.min(this.Gb(),(this.T()+1)*this.A.pa());return a+"\u2013"+c+" of "+this.Gb()}.bind(this))},__handleClick:function(a,c){"BUTTON"===c.target.tagName&&this.T(parseInt(c.target.textContent,10)-1)}};
return g.q("paging","ko-grid-paging")}({},h,p,'\x3c!-- ko with: extensions.paging --\x3e\n<div class="ko-grid-paging" data-bind="if: pageCount() > 1, click: __handleClick">\n    <span data-bind="text: __message"></span>\n    <button class="ko-grid-toolbar-button ko-grid-paging-button" data-bind="visible: pageIndex() - maximumStepSize() > 0">1</button>\n    <span data-bind="visible: pageIndex() - maximumStepSize() > 1">&hellip;</span>\n    <button data-bind="indexedRepeat: {\n                forEach: __adjacentPageIndizes,\n                indexedBy: function(i) { return \'\' + i; },\n                as: \'i\'\n            }"\n            data-repeat-bind="text: i() + 1, css: {\n                \'pressed\': pageIndex() == i(),\n                \'ko-grid-toolbar-button\': true,\n                \'current-page\': pageIndex() == i(),\n                \'ko-grid-paging-button\': true\n            }">\n    </button>\n    <span data-bind="visible: pageIndex() + maximumStepSize() + 2 < pageCount()">&hellip;</span>\n    <button class="ko-grid-toolbar-button ko-grid-paging-button" tabIndex="-1" data-bind="visible: pageIndex() + maximumStepSize() + 1 < pageCount(), text: pageCount">?</button>\n</div>\n\x3c!-- /ko --\x3e\n'))}(I,
F,G,E,B,K,H,J,D);ka=function(y,v,u,n,g,p,d,q,h,e,a,r){return function(a){return a}(function(a,d,c,b){var e=window.document,g=window.requestAnimationFrame.bind(window),h=window.cancelAnimationFrame.bind(window);c.p("ko-grid-height-adjuster",{F:["ko-grid-view-state-storage"],K:function(a){return a.sb("grid").L("height-adjuster",b)},g:function(a,b,c){this.nb=c.B.classList.contains("fixed-height")?c.B.style.height:"auto";this.lb=void 0;this.la=d.observable(this.nb);var e=this.la.subscribe(function(a){var b=
c.d["ko-grid-paging"];"auto"===a?(c.B.classList.remove("fixed-height"),b&&"fit"===b.A.ta()&&(this.lb=b.A.ta(),b.A.ta(Number.POSITIVE_INFINITY))):this.lb&&(c.B.classList.add("fixed-height"),b.A.ta(this.lb),this.lb=void 0);c.B.style.height=a;c.M.ja()}.bind(this));c.d["ko-grid-view-state-storage"].zb.bind("height",this.la);this.dispose=function(){e.dispose()}}});d.bindingHandlers.__gridHeightAdjuster={init:function(a,b,c,d,m){var n=m.grid,p=b();b();a.addEventListener("click",function(a){return a.preventDefault()});
a.addEventListener("mousedown",function(a){function b(){p.la(Math.max(m,l+q-t)+"px")}function c(d){q=d.pageY;r&&h(r);r=g(b);a.preventDefault()}function d(){r&&h(r);e.removeEventListener("mousemove",c);e.removeEventListener("mouseup",d)}if("BUTTON"!==a.target.tagName){a.preventDefault();var l=n.element.offsetHeight,m=n.element.offsetHeight-n.element.querySelector(".ko-grid-table-scroller").offsetHeight+50,t=a.pageY,q=t,r=0;e.addEventListener("mousemove",c);e.addEventListener("mouseup",d)}})},update:function(){}};
d.bindingHandlers.__gridHeightResetter={init:function(a,b){var c=b();"auto"!==c.nb&&a.addEventListener("click",function(a){a.preventDefault();c.la(c.nb)})},update:function(a,b){var c=b(),d=c.nb;a.disabled="auto"===d||c.la()===d}};d.bindingHandlers.__gridHeightClearer={init:function(a,b){var c=b();a.addEventListener("click",function(a){a.preventDefault();c.la("auto")})},update:function(a,b){var c=b().la();a.disabled="auto"===c}};return c.q("heightAdjuster","ko-grid-height-adjuster")}({},a,r,'<div class="ko-grid-height-adjuster" data-bind="__gridHeightAdjuster: grid.extensions.heightAdjuster">\n    <div class="ko-grid-height-adjuster-buttons">\n        <button class="ko-grid-height-adjuster-button ko-grid-height-resetter" tabIndex="-1" data-bind="__gridHeightResetter: grid.extensions.heightAdjuster">Clear height</button>\n        <button class="ko-grid-height-adjuster-button ko-grid-height-clearer" tabIndex="-1" data-bind="__gridHeightClearer: grid.extensions.heightAdjuster">Reset height</button>\n    </div>\n</div>'))}(I,
F,G,E,B,aa,T,H,J,Q,D,K);la=function(y,v,u,n,g,p,d,q,h){return function(d){return d}(function(d,a,g){g.p("ko-grid-links",{g:function(d,e,c){Object.keys(d).forEach(function(b){var e=c.f.ra(b),g=d[b].uri,h=d[b].label,l="function"===typeof g?g:function(b){return c.data.ua(a.unwrap(b[g]))},m="function"===typeof h?h:function(b){return c.data.ua(a.unwrap(b[h||e.G]))};e.Eb(function(){return{n:function(a){var b=window.document.createElement("a");b.appendChild(window.document.createTextNode(""));a.appendChild(b)},
update:function(a,b,c){a.firstChild.firstChild.nodeValue=m(c);a.firstChild.href=l(c)}}})})}});return g.q("links","ko-grid-links")}({},h,p))}(I,G,F,E,B,K,H,J,D);ma=function(y,v,u,n,g,p){return function(d){return d}(function(d,g,h){var e=window.requestAnimationFrame.bind(window);window.cancelAnimationFrame.bind(window);h.p("ko-grid-resize-detection",{g:function(a,d,h){function m(){c||(c=e(function(){c=null;h.M.ja()}))}var c,b=(a=window.$)?a(g.element.fc(h.B,".ui-resizable")):{on:function(){},off:function(){}};
window.addEventListener("resize",m);b.on("resize resizestop",m);this.dispose=function(){window.removeEventListener("resize",m);b.off("resize resizestop",m)}}});return h.q("resizeDetection","ko-grid-resize-detection")}({},y,p))}(I,G,F,E,B,K,H,J,D);na=function(y,v,u,n,g,p,d,q,h){return function(d){return d}(function(d,a,g){function h(a){var c=window.document.createElement("input");c.className="ko-grid-selection-element";c.type=a?"checkbox":"radio";c.tabIndex=-1;return c}g.p("ko-grid-selection",{g:function(d,
c,b){function e(){q?(r={},l([])):b.data.source.Y(function(a){return a.R(b.data.e)}).then(function(a){return a.reduce(function(a,c){var d=b.data.Ba(c[u]);a.jd.push(d);a.e[d]=!0;return a},{jd:[],e:{}})}).then(function(a){r=a.e;l(a.jd)})}function g(c,d,e){c=b.data.ua(a.unwrap(e[u]));n||(r={},l().length=0);r[c]?(delete r[c],l.remove(c)):(r[c]=!0,l.push(c))}var n=!(!d.allowMultiSelection&&!c.allowMultiSelection);c=!(!d.evaluateRowClicks&&!c.evaluateRowClicks);var l=d.selectedEntriesIds||a.observableArray([]),
p=d.selectedEntryId||a.observable(null),q=!1;d=b.f.add({key:"selection",label:"",width:b.M.wb(h(n)).width+"px"});var t=b.headers.mc(d),r={},u=b.primaryKey;d.Eb(function(){return{n:function(a){a.appendChild(h(n))},update:function(a,c,d){l();a.firstChild.checked=!!r[b.data.Ba(d[u])]}}});var v=t.element.subscribe(function(a){if(n&&a){var b=h(!0);a.appendChild(b);a.addEventListener("click",function(b){b.target===a&&(b.preventDefault(),e())})}});b.headers.Ab(".ko-grid-selection-element",function(a){a.Fb();
e()});c?b.data.cb(g):b.data.cb(".ko-grid-selection-element",g);b.data.rows.oc(function(c){l();return r[b.data.ua(a.unwrap(c[u]))]?["selected"]:[]});var y=a.computed(function(){var a=l().length,c=b.data.view.da();p(a?l()[a-1]:null);q=!!a&&a===c;var d=t.element();if(d=d&&d.querySelector(".ko-grid-selection-element"))d.checked=q,d.tf=a>c});this.dispose=function(){v.dispose();y.dispose()}}});return g.q("selection","ko-grid-selection")}({},h,p))}(I,F,G,E,B,K,H,J,D);oa=function(y,v,u,n,g,p){return function(d){return d}(function(d,
g,h){g.p("ko-grid-sorting",{g:function(d,a,g){function n(a){a===c?(b="ascending"===b?"descending":"ascending",f=f.reverse()):(c&&c.Ka.removeAll(["ascending-order","descending-order"]),c=a,b="ascending",f=m(a));a.Ka(c.Ka().filter(function(a){return"ascending-order"!==a&&"descending-order"!==a}).concat(["ascending"===b?"ascending-order":"descending-order"]));g.data.l(f)}function m(a){function b(a){return(a=g.data.Ba(a[c]))&&"function"===typeof a.valueOf?a.valueOf():a}var c=a.G;h.qd(b,function(){return h.Ja.xc(a.G).stringifyable});
return h.ca.Pe.va(b)}var c,b,f;(d=d.initiallyBy)&&n(g.f.ra(d));g.headers.Ab(function(a,b){a.defaultPrevented||(a.preventDefault(),n(b.J))});var k=g.data.l.subscribe(function(a){c&&(a!==f&&(c.Ka.removeAll(["ascending-order","descending-order"]),c=b=f=null),g.M.ja())});this.dispose=function(){k.dispose()}}});return g.q("sorting","ko-grid-sorting")}({},p,v))}(I,G,F,E,B,K,H,J,D);pa=function(y,v,u,n,g,p){return function(d){return d}(function(d,g){g.p("ko-grid-toolbar",{K:function(d){d.gb("grid").append("toolbar",
'<div class="ko-grid-toolbar">  <div class="ko-grid-left-toolbar">\x3c!--left-toolbar--\x3e</div>  <div class="ko-grid-right-toolbar">\x3c!--right-toolbar--\x3e</div></div>')},g:function(){}});return g.q("toolbar","ko-grid-toolbar")}({},p))}(I,F,G,E,B,K,H,J,D);B=function(y,v,u,n,g,p,d,q,h){return function(d){return d}(function(d,a,g){g.p("ko-grid-virtualization",{K:function(a){a.dc("body").L('<tbody class="ko-grid-virtualization-before-spacer"><tr data-bind="style: { height: extensions.virtualization.__beforeHeight() + \'px\' }"><td></td></tr></tbody>');
a.sb("body").L('<tbody class="ko-grid-virtualization-after-spacer"><tr data-bind="style: { height: extensions.virtualization.__afterHeight() + \'px\' }"><td></td></tr></tbody>')},g:function(d,e,c){function b(){c.data.i(Math.ceil((n.clientHeight-1)/q)+2)}function f(){var a=n.scrollTop,b=n.getBoundingClientRect().top-p.getBoundingClientRect().bottom,b=Math.floor(b/q),b=Math.max(0,Math.min(c.data.view.da()-c.data.view.size()+2,c.data.offset()+b)),d=b&1;c.data.offset(b-d);h(a-d*q-a%q);g()}function g(){l(Math.max(0,
c.data.view.da()-c.data.offset()-c.data.i())*q)}var h=a.observable(0),l=a.observable(0);this.__beforeHeight=h;this.__afterHeight=l;var n,p;c.ha(function(){n=c.element.querySelector(".ko-grid-table-scroller");p=c.element.querySelector(".ko-grid-virtualization-before-spacer");c.element.querySelector(".ko-grid-virtualization-after-spacer");c.M.tb(b);c.data.view.da.subscribe(g);n.addEventListener("scroll",f)});var q=25}});return g.q("virtualization","ko-grid-virtualization")}({},h,p))}(I,F,G,E,B,K,H,
J,D);return function(y){return y}({dataSource:H,entry:ca,grid:K,extensions:{aggregate:da,cellNavigation:Y,columnResizing:Z,columnScaling:ea,columnSizing:V,columnWidthPersistence:fa,editing:ga,"export":ha,filtering:ia,fullScreen:ja,heightAdjuster:ka,links:la,paging:aa,resizeDetection:ma,selection:na,sorting:oa,toolbar:pa,viewModes:Q,viewStateStorage:T,virtualization:B}})});
define('ko-grid-examples/bootstrap',[
        'domReady',
        'es6-promise',
        'knockout',
        './data/countries-by-population',
        './data/people',
        './data/unicode-characters',
        './example',
        'ko-grid-bundle'
    ],
    function (domReady, es6promise, ko, countriesByPopulation, people, unicodeCharacters) {
        es6promise.polyfill();

        domReady(function () {
            var request = ko.observable('');
            var response = ko.observable('');

            ko.applyBindings({
                countriesByPopulation: countriesByPopulation,
                people: people,
                unicodeCharacters: unicodeCharacters,

                io: {
                    lastRequest: request,
                    lastResponse: response,
                    logRequest: function (r) { request(r); },
                    logResponse: function (r) { response(r); }
                }
            });
        });
    }
);

define('ko-grid-examples', ['ko-grid-examples/bootstrap'], function (main) { return main; });

//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {
    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = '2.9.0',
        // the global-scope this is NOT the global object in Node.js
        globalScope = (typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window)) ? global : this,
        oldGlobalMoment,
        round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for locale config files
        locales = {},

        // extra moment internal properties (plugins register props here)
        momentProperties = [],

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-', '15', '30']
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
            s: 45,  // seconds to minute
            m: 45,  // minutes to hour
            h: 22,  // hours to day
            d: 26,  // days to month
            M: 11   // months to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.localeData().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.localeData().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.localeData().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.localeData().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.localeData().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = this.utcOffset(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = this.utcOffset(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            x    : function () {
                return this.valueOf();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        deprecations = {},

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'],

        updateInProgress = false;

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error('Implement me');
        }
    }

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b);
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (firstTime) {
                printMsg(msg);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true;
        }
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.localeData().ordinal(func.call(this, a), period);
        };
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // thie is not supposed to happen
            return hour;
        }
    }

    /************************************
        Constructors
    ************************************/

    function Locale() {
    }

    // Moment prototype object
    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config);
        }
        copyConfig(this, config);
        this._d = new Date(+config._d);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            moment.updateOffset(this);
            updateInProgress = false;
        }
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = moment.localeData();

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = from._pf;
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this;
        };
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment._locale[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 24 ||
                    (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 ||
                                           m._a[SECOND] !== 0 ||
                                           m._a[MILLISECOND] !== 0)) ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0 &&
                    m._pf.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // Return a moment from input, that is local/utc/utcOffset equivalent to
    // model.
    function makeAs(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (moment.isMoment(input) || isDate(input) ?
                    +input : +moment(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            moment.updateOffset(res, false);
            return res;
        } else {
            return moment(input).local();
        }
    }

    /************************************
        Locale
    ************************************/


    extend(Locale.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _ordinalParseLenient.
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
        },

        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName, format, strict) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = moment.utc([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                    this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                    this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
                }
                if (!strict && !this._monthsParse[i]) {
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                    return i;
                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                    return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LTS : 'h:mm:ss A',
            LT : 'h:mm A',
            L : 'MM/DD/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY LT',
            LLLL : 'dddd, MMMM D, YYYY LT'
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },


        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom, now) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom, [now]) : output;
        },

        _relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },

        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },

        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace('%d', number);
        },
        _ordinal : '%d',
        _ordinalParse : /\d{1,2}/,

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        firstDayOfWeek : function () {
            return this._week.dow;
        },

        firstDayOfYear : function () {
            return this._week.doy;
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) {
                return parseTokenOneDigit;
            }
            /* falls through */
        case 'SS':
            if (strict) {
                return parseTokenTwoDigits;
            }
            /* falls through */
        case 'SSS':
            if (strict) {
                return parseTokenThreeDigits;
            }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return config._locale._meridiemParse;
        case 'x':
            return parseTokenOffsetMs;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
            return a;
        }
    }

    function utcOffsetFromString(string) {
        string = string || '';
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = config._locale.monthsParse(input, token, config._strict);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(
                            input.match(/\d{1,2}/)[0], 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._meridiem = input;
            // config._isPm = config._locale.isPM(input);
            break;
        // HOUR
        case 'h' : // fall through to hh
        case 'hh' :
            config._pf.bigHour = true;
            /* falls through */
        case 'H' : // fall through to HH
        case 'HH' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX OFFSET (MILLISECONDS)
        case 'x':
            config._d = new Date(toInt(input));
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = utcOffsetFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = config._locale.weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day || normalizedInput.date,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
            config._pf.bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR],
                config._meridiem);
        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be 'T' or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += 'Z';
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function makeDateFromInput(config) {
        var input = config._i, matched;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            dateFromConfig(config);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, locale) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = locale.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            years = round(duration.as('y')),

            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd', days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM', months] ||
                years === 1 && ['y'] || ['yy', years];

        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f,
            res;

        config._locale = config._locale || moment.localeData(config._l);

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (moment.isMoment(input)) {
            return new Moment(input, true);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        res = new Moment(config);
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    moment = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            diffRes;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function (threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold];
        }
        relativeTimeThresholds[threshold] = limit;
        return true;
    };

    moment.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        function (key, value) {
            return moment.locale(key, value);
        }
    );

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    moment.locale = function (key, values) {
        var data;
        if (key) {
            if (typeof(values) !== 'undefined') {
                data = moment.defineLocale(key, values);
            }
            else {
                data = moment.localeData(key);
            }

            if (data) {
                moment.duration._locale = moment._locale = data;
            }
        }

        return moment._locale._abbr;
    };

    moment.defineLocale = function (name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);

            // backwards compat for now: also set the locale
            moment.locale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    };

    moment.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        function (key) {
            return moment.localeData(key);
        }
    );

    // returns locale data
    moment.localeData = function (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return moment._locale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    moment.isDate = isDate;

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d - ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                if ('function' === typeof Date.prototype.toISOString) {
                    // native implementation is ~50x faster, use it when we can
                    return this.toDate().toISOString();
                } else {
                    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
                }
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {
            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function (keepLocalTime) {
            return this.utcOffset(0, keepLocalTime);
        },

        local : function (keepLocalTime) {
            if (this._isUTC) {
                this.utcOffset(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                    this.subtract(this._dateUtcOffset(), 'm');
                }
            }
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output);
        },

        add : createAdder(1, 'add'),

        subtract : createAdder(-1, 'subtract'),

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (that.utcOffset() - this.utcOffset()) * 6e4,
                anchor, diff, output, daysAdjust;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month' || units === 'quarter') {
                output = monthDiff(this, that);
                if (units === 'quarter') {
                    output = output / 3;
                } else if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = this - that;
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're locat/utc/offset
            // or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.localeData().calendar(format, this, moment(now)));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf : function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            if (units === undefined || units === 'millisecond') {
                return this;
            }
            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
        },

        isAfter: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this > +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return inputMs < +this.clone().startOf(units);
            }
        },

        isBefore: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this < +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return +this.clone().endOf(units) < inputMs;
            }
        },

        isBetween: function (from, to, units) {
            return this.isAfter(from, units) && this.isBefore(to, units);
        },

        isSame: function (input, units) {
            var inputMs;
            units = normalizeUnits(units || 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this === +input;
            } else {
                inputMs = +moment(input);
                return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
            }
        },

        min: deprecate(
                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        zone : deprecate(
                'moment().zone is deprecated, use moment().utcOffset instead. ' +
                'https://github.com/moment/moment/issues/1779',
                function (input, keepLocalTime) {
                    if (input != null) {
                        if (typeof input !== 'string') {
                            input = -input;
                        }

                        this.utcOffset(input, keepLocalTime);

                        return this;
                    } else {
                        return -this.utcOffset();
                    }
                }
        ),

        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        utcOffset : function (input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === 'string') {
                    input = utcOffsetFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._dateUtcOffset();
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.add(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(input - offset, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }

                return this;
            } else {
                return this._isUTC ? offset : this._dateUtcOffset();
            }
        },

        isLocal : function () {
            return !this._isUTC;
        },

        isUtcOffset : function () {
            return this._isUTC;
        },

        isUtc : function () {
            return this._isUTC && this._offset === 0;
        },

        zoneAbbr : function () {
            return this._isUTC ? 'UTC' : '';
        },

        zoneName : function () {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        },

        parseZone : function () {
            if (this._tzm) {
                this.utcOffset(this._tzm);
            } else if (typeof this._i === 'string') {
                this.utcOffset(utcOffsetFromString(this._i));
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).utcOffset();
            }

            return (this.utcOffset() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        week : function (input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            var unit;
            if (typeof units === 'object') {
                for (unit in units) {
                    this.set(unit, units[unit]);
                }
            }
            else {
                units = normalizeUnits(units);
                if (typeof this[units] === 'function') {
                    this[units](value);
                }
            }
            return this;
        },

        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
        locale : function (key) {
            var newLocaleData;

            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = moment.localeData(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        },

        lang : deprecate(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function (key) {
                if (key === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(key);
                }
            }
        ),

        localeData : function () {
            return this._locale;
        },

        _dateUtcOffset : function () {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return -Math.round(this._d.getTimezoneOffset() / 15) * 15;
        }

    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    // alias isUtc for dev-friendliness
    moment.fn.isUTC = moment.fn.isUtc;

    /************************************
        Duration Prototype
    ************************************/


    function daysToYears (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
    }

    function yearsToDays (years) {
        // years * 365 + absRound(years / 4) -
        //     absRound(years / 100) + absRound(years / 400);
        return years * 146097 / 400;
    }

    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years = 0;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);

            // Accurately convert days to years, assume start from year 0.
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));

            // 30 days to a month
            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
            days %= 30;

            // 12 months -> 1 year
            years += absRound(months / 12);
            months %= 12;

            data.days = days;
            data.months = months;
            data.years = years;
        },

        abs : function () {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);

            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);

            return this;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());

            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output);
            }

            return this.localeData().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            var days, months;
            units = normalizeUnits(units);

            if (units === 'month' || units === 'year') {
                days = this._days + this._milliseconds / 864e5;
                months = this._months + daysToYears(days) * 12;
                return units === 'month' ? months : months / 12;
            } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(yearsToDays(this._months / 12));
                switch (units) {
                    case 'week': return days / 7 + this._milliseconds / 6048e5;
                    case 'day': return days + this._milliseconds / 864e5;
                    case 'hour': return days * 24 + this._milliseconds / 36e5;
                    case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
                    case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                    default: throw new Error('Unknown unit ' + units);
                }
            }
        },

        lang : moment.fn.lang,
        locale : moment.fn.locale,

        toIsoString : deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead ' +
            '(notice the capitals)',
            function () {
                return this.toISOString();
            }
        ),

        toISOString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        },

        localeData : function () {
            return this._locale;
        },

        toJSON : function () {
            return this.toISOString();
        }
    });

    moment.duration.fn.toString = moment.duration.fn.toISOString;

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    for (i in unitMillisecondFactors) {
        if (hasOwnProp(unitMillisecondFactors, i)) {
            makeDurationGetter(i.toLowerCase());
        }
    }

    moment.duration.fn.asMilliseconds = function () {
        return this.as('ms');
    };
    moment.duration.fn.asSeconds = function () {
        return this.as('s');
    };
    moment.duration.fn.asMinutes = function () {
        return this.as('m');
    };
    moment.duration.fn.asHours = function () {
        return this.as('h');
    };
    moment.duration.fn.asDays = function () {
        return this.as('d');
    };
    moment.duration.fn.asWeeks = function () {
        return this.as('weeks');
    };
    moment.duration.fn.asMonths = function () {
        return this.as('M');
    };
    moment.duration.fn.asYears = function () {
        return this.as('y');
    };

    /************************************
        Default Locale
    ************************************/


    // Set default locale, other locale will inherit from English.
    moment.locale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LOCALES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    'Accessing Moment through the global scope is ' +
                    'deprecated, and will be removed in an upcoming ' +
                    'release.',
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === 'function' && define.amd) {
        define('moment',['require','exports','module'],function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);



define('configs/config-factory/default-cell-value-renderer',['moment'], function (moment) {
    function defaultCellValueRenderer(value) {
        if (value === undefined || value === null)
            return '';

        if (typeof value === 'object' && Object.getPrototypeOf(value).constructor === Date
            && !value.getUTCHours() && !value.getUTCMinutes() && !value.getUTCSeconds() && !value.getUTCMilliseconds())
            return moment(value).format(value.getUTCDate() === 1 ? value.getUTCMonth() === 0 ? 'YYYY' : 'MMMM YYYY' : 'MMMM D, YYYY');

        if (typeof value === 'number')
            if (Math.abs(value) >= 1)
                return value.toLocaleString();
            else {
                var firstNonZeroFractionDigit = -Math.floor(Math.log(value) / Math.log(10));
                return value.toLocaleString(undefined, {
                    maximumFractionDigits: firstNonZeroFractionDigit + 1
                });
            }

        return '' + value;
    }

    return defaultCellValueRenderer;
});



define('configs/config-factory/config-factory',['./default-cell-value-renderer'], function (defaultCellValueRenderer) {
    return {
        create: function (extensions) {
            return {
                cellValueRenderer: function (column, value) {
                    var rendered = defaultCellValueRenderer(value);
                    // TODO use column metadata
                    return column.id === 'percentage' ? rendered + ' %' : rendered;
                },
                extensions: extensions
            };
        }
    };
});

define('configs/config-factory', ['configs/config-factory/config-factory'], function (main) { return main; });



define('aggregation-basic-config/aggregation-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        aggregate: {}
    });
});

define('aggregation-basic-config', ['aggregation-basic-config/aggregation-basic-config'], function (main) { return main; });



define('aggregation-filtering-config/aggregation-filtering-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        aggregate: {},
        filtering: {}
    });
});

define('aggregation-filtering-config', ['aggregation-filtering-config/aggregation-filtering-config'], function (main) { return main; });



define('column-resizing-basic-config/column-resizing-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        columnResizing: {},
        columnSizing: {}
    });
});

define('column-resizing-basic-config', ['column-resizing-basic-config/column-resizing-basic-config'], function (main) { return main; });



define('column-scaling-basic-config/column-scaling-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        columnScaling: {},
        columnSizing: {},
        viewModes: {},
        viewStateStorage: {}
    });
});

define('column-scaling-basic-config', ['column-scaling-basic-config/column-scaling-basic-config'], function (main) { return main; });



define('column-scaling-resize-detection-config/column-scaling-resize-detection-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        columnScaling: {},
        columnSizing: {},
        resizeDetection: {},
        viewModes: {},
        viewStateStorage: {}
    });
});

define('column-scaling-resize-detection-config', ['column-scaling-resize-detection-config/column-scaling-resize-detection-config'], function (main) { return main; });



define('css-nudity-config/css-nudity-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        aggregate: {},
        links: {}
    });
});

define('css-nudity-config', ['css-nudity-config/css-nudity-config'], function (main) { return main; });



define('default-config/default-config',['configs/config-factory', 'ko-grid-bundle'], function (configFactory) {
    var config = configFactory.create({});

    // this is only relevant for the no-requirejs example
    var configs = window.ko
        ? window.ko.bindingHandlers.grid.config = window.ko.bindingHandlers.grid.config || {}
        : {};

    return configs['default-config'] = config;
});

define('default-config', ['default-config/default-config'], function (main) { return main; });



define('editing-basic-config/editing-basic-config',['knockout', 'configs/config-factory'], function (ko, configFactory) {
    return configFactory.create({
        cellNavigation: {},
        editing: function (_, gridBindingValue) {
            return {
                createEditor: function (row, column) {
                    var element = window.document.createElement('input');
                    element.type = 'text';
                    var originalValue = column.renderValue(ko.unwrap(row[column.property]));
                    element.value = originalValue;

                    return {
                        get element() {
                            return element;
                        },
                        get value() {
                            return element.value;
                        },
                        set value(newValue) {
                            element.value = newValue;
                        },
                        get valueChanged() {
                            return this.value !== originalValue;
                        },

                        activate: function () {
                            this.focus();
                            element.setSelectionRange(0, element.value.length);
                        },
                        focus: function () {
                            element.focus();
                        },
                        reset: function () {
                            this.value = originalValue;
                        }
                    };
                },
                saveChange: function (row, column, newValue) {
                    var updated = {};
                    Object.keys(row).forEach(function (k) {
                        updated[k] = ko.unwrap(row[k]);
                    });
                    updated[column.property] = newValue;
                    gridBindingValue.dataSource.updateEntries([updated]);
                }
            };
        }
    });
});

define('editing-basic-config', ['editing-basic-config/editing-basic-config'], function (main) { return main; });



define('export-basic-config/export-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        export: {},
        toolbar: {}
    });
});

define('export-basic-config', ['export-basic-config/export-basic-config'], function (main) { return main; });



define('export-filtering-sorting-config/export-filtering-sorting-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        export: {},
        filtering: {},
        sorting: {},
        toolbar: {}
    });
});

define('export-filtering-sorting-config', ['export-filtering-sorting-config/export-filtering-sorting-config'], function (main) { return main; });



define('filtering-basic-config/filtering-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        filtering: {}
    });
});

define('filtering-basic-config', ['filtering-basic-config/filtering-basic-config'], function (main) { return main; });



define('full-screen-basic-config/full-screen-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        fullScreen: {},
        toolbar: {},
        viewModes: {}
    });
});

define('full-screen-basic-config', ['full-screen-basic-config/full-screen-basic-config'], function (main) { return main; });



define('full-screen-column-resizing-config/full-screen-column-resizing-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        columnResizing: {},
        columnScaling: {},
        columnSizing: {},
        columnWidthPersistence: {},
        fullScreen: {},
        resizeDetection: {},
        toolbar: {},
        viewModes: {},
        viewStateStorage: {}
    });
});

define('full-screen-column-resizing-config', ['full-screen-column-resizing-config/full-screen-column-resizing-config'], function (main) { return main; });



define('full-screen-column-scaling-config/full-screen-column-scaling-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        columnScaling: {},
        columnSizing: {},
        fullScreen: {},
        resizeDetection: {},
        toolbar: {},
        viewModes: {},
        viewStateStorage: {}
    });
});

define('full-screen-column-scaling-config', ['full-screen-column-scaling-config/full-screen-column-scaling-config'], function (main) { return main; });



define('large-data-set-config/large-data-set-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        columnSizing: {},
        columnScaling: {},
        filtering: {},
        resizeDetection: {},
        sorting: {},
        viewModes: {},
        viewStateStorage: {}
    });
});

define('large-data-set-config', ['large-data-set-config/large-data-set-config'], function (main) { return main; });



define('links-basic-config/links-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        links: {}
    });
});

define('links-basic-config', ['links-basic-config/links-basic-config'], function (main) { return main; });



define('paging-basic-config/paging-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        paging: {pageSize: 20},
        toolbar: {}
    });
});

define('paging-basic-config', ['paging-basic-config/paging-basic-config'], function (main) { return main; });



define('paging-fit-config/paging-fit-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        heightAdjuster: {},
        paging: {
            pageSize: 'fit'
        },
        resizeDetection: {},
        toolbar: {},
        viewModes: {},
        viewStateStorage: {}
    });
});

define('paging-fit-config', ['paging-fit-config/paging-fit-config'], function (main) { return main; });



define('remote-aggregate-config/remote-aggregate-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        aggregate: {
            statisticsComputer: function (grid) {
                var view = grid.data.view;
                var viewStatistics = view.metadata().statistics || {};

                var statistics = {count: view.filteredSize()};
                Object.keys(viewStatistics).forEach(function (p) {
                    statistics[p] = viewStatistics[p];
                });

                return Promise.resolve(statistics);
            }
        },
        filtering: {}
    });
});

define('remote-aggregate-config', ['remote-aggregate-config/remote-aggregate-config'], function (main) { return main; });



define('remote-basic-config/remote-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        filtering: {},
        sorting: {}
    });
});

define('remote-basic-config', ['remote-basic-config/remote-basic-config'], function (main) { return main; });



define('remote-virtualization-config/remote-virtualization-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        filtering: {},
        sorting: {},
        virtualization: {}
    });
});

define('remote-virtualization-config', ['remote-virtualization-config/remote-virtualization-config'], function (main) { return main; });



define('selection-master-detail-config/selection-master-detail-config',['knockout', 'configs/config-factory'], function (ko, configFactory) {
    return configFactory.create({
        selection: {
            evaluateRowClicks: true
        }
    });
});

define('selection-master-detail-config', ['selection-master-detail-config/selection-master-detail-config'], function (main) { return main; });



define('selection-multi-config/selection-multi-config',['knockout', 'configs/config-factory'], function (ko, configFactory) {
    return configFactory.create({
        filtering: {},
        selection: {
            allowMultiSelection: true,
            evaluateRowClicks: true
        }
    });
});

define('selection-multi-config', ['selection-multi-config/selection-multi-config'], function (main) { return main; });



define('selection-single-config/selection-single-config',['knockout', 'configs/config-factory'], function (ko, configFactory) {
    return configFactory.create({
        selection: {
            evaluateRowClicks: true
        }
    });
});

define('selection-single-config', ['selection-single-config/selection-single-config'], function (main) { return main; });



define('sorting-basic-config/sorting-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        sorting: {}
    });
});

define('sorting-basic-config', ['sorting-basic-config/sorting-basic-config'], function (main) { return main; });



define('virtualization-basic-config/virtualization-basic-config',['configs/config-factory'], function (configFactory) {
    return configFactory.create({
        virtualization: {}
    });
});

define('virtualization-basic-config', ['virtualization-basic-config/virtualization-basic-config'], function (main) { return main; });


require(["aggregation-basic-config", "aggregation-filtering-config", "column-resizing-basic-config", "column-scaling-basic-config", "column-scaling-resize-detection-config", "css-nudity-config", "default-config", "editing-basic-config", "export-basic-config", "export-filtering-sorting-config", "filtering-basic-config", "full-screen-basic-config", "full-screen-column-resizing-config", "full-screen-column-scaling-config", "large-data-set-config", "links-basic-config", "paging-basic-config", "paging-fit-config", "remote-aggregate-config", "remote-basic-config", "remote-virtualization-config", "selection-master-detail-config", "selection-multi-config", "selection-single-config", "sorting-basic-config", "virtualization-basic-config", "configs/config-factory"]);


define('ko-grid', ['ko-grid-bundle'], function (bundle) { return bundle.grid;});
define('ko-data-source', ['ko-grid-bundle'], function (bundle) { return bundle.dataSource;});

require(['ko-grid-examples']);
