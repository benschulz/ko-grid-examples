

requirejs.config({baseUrl: '..'});


var isAmdExample = !window.ko;

if (!isAmdExample) {
    define('knockout', [], window.ko);
    define('ko-grid-bundle', [], window['ko-grid-bundle']);
}
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
(function(L){"function"===typeof define&&define.amd?define('ko-grid-bundle',["require","knockout"],L):window["ko-grid-bundle"]=L(function(w,z){if(!Array.isArray(w)||1!==w.length||"string"!==typeof w[0]||"function"!==typeof z)throw Error("Assertion error.");var E=window.ko.bindingHandlers.grid.config=window.ko.bindingHandlers.grid.config||{};z(E[w[0]])},window.ko)})(function(L,w){var z,E,I,J,K,Q,R;z=function(){return function(q){return q}(function(q,n,c,k){return{p:q,d:n,e:c,hc:k}}(function(){function q(c,k){return c&&
"function"===typeof c.valueOf&&k&&"function"===typeof k.valueOf?c.valueOf()<=k.valueOf()?c.valueOf()<k.valueOf()?-1:0:1:c<=k?c<k?-1:0:1}function n(c,k){var t=c.length,l=Array(t),x=Array(t),a;for(a=0;a<t;++a)l[a]=a,x[a]=c[a];a=c;c=x;x=a;l.sort(function(a,d){return k(c[a],c[d])||a-d});for(a=0;a<t;++a)x[a]=c[l[a]];return x}return{contains:function(c,k){return 0<=c.indexOf(k)},La:function(c,k){return Array.prototype.concat.apply([],c.map(k))},Aa:function(c,k){var t=k||q;window.chrome?t=n(c,t):(c.sort(t),
t=c);return t}}}(),function(){function q(n){return function(){return n}}return{Ec:q(!0),vc:q(!1),g:q(void 0),Ac:q(null),oc:q(0),tc:q,Na:function(n){return n}}}(),function(){function q(n,c){return Object.prototype.hasOwnProperty.call(n,c)}return{rc:function(n,c){return n===c||!(!n||"function"!==typeof n.valueOf||!c||"function"!==typeof c.valueOf||n.valueOf()!==c.valueOf())},extend:function(n){Array.prototype.slice.call(arguments,1).forEach(function(c){for(var k=Object.keys(c),t=0,l=k.length;t<l;t++){var x=
k[t],a=Object.getOwnPropertyDescriptor(c,x);void 0!==a&&a.enumerable&&Object.defineProperty(n,x,a)}});return n},ra:function(n,c){for(var k in n)q(n,k)&&c(k,n[k])},Z:q}}(),{wb:function(q){return q.replace(/([A-Z])/g,function(n){return"-"+n.toLowerCase()})},uc:function(q){return q.replace(/-([a-z])/g,function(n){return n[1].toUpperCase()})},format:function(q){var n=arguments;return q.replace(/{(\d+)}/g,function(c,k){var t=parseInt(k,10)+1;return typeof n.length<=t?c:n[t]})}}))}();E=function(q){return function(n){return n}(function(n){function c(l){var c=
{get length(){return this.length},contains:function(a){return 0<=this.$a(a)},filter:function(a){for(var r=[],d=0;d<this.length;++d){var e=this.get(d);a(e,d,this)&&r.push(e)}return new k(r)},forEach:function(a){for(var r=0,d=this.length;r<d;++r)a(this.get(r),r,this)},get:function(a){return this.get(a)},map:function(a){for(var r=Array(this.length),d=0;d<this.length;++d)r[d]=a(this.get(d),d,this);return new k(r)},readOnly:function(){return new t(this)},slice:function(a,r){var d=this.length;a=0>=arguments.length?
0:0<=a?a:d+a;r=1>=arguments.length?d:0<=r?r:d+r;for(var d=r-a,e=Array(d),g=0;g<d;++g)e[g]=this.get(a+g);return new k(e)},G:function(){var a=Array(this.length);this.forEach(function(r,d){a[d]=r});return a},$a:function(a){for(var r=0;r<this.length;++r)if(this.get(r)===a)return r;return-1}};return n.e.extend(c,{get length(){return this.length},contains:c.contains,filter:c.filter,forEach:c.forEach,get:function(a){return this.get(a)},map:c.map,readOnly:c.readOnly,slice:c.slice,toArray:c.G,tryFirstIndexOf:c.$a},
l)}function k(l){this.ga=l}function t(l){this.Ca=l}k.prototype=c({get length(){return this.ga.length},get:function(l){return this.ga[l]},G:function(){return this.ga.slice()}});t.prototype=c({get length(){return this.Ca.length},get:function(l){return this.Ca.get(l)}});return{Ub:function(l){return new k(l||[])},Qb:c}}(q))}(z);E=function(q,n,c,k){var t,l,x,a;t=function(){function a(r,e,g){this.K=r||[];this.R=e||[];this.P=g||[]}a.prototype={get size(){return this.K.length+this.R.length+this.P.length},
get empty(){return!this.size},v:function(a){this.empty||a(this)}};return a}();l={};x=function(a,d,e,g,f){function b(b,h,m){this.parent=b;this.a=h||new e(this.b);this.t=m||a.observable(new g);this.Ha=a.observable(this.a.readOnly());this.C=null}b.prototype={get b(){return this.parent.b},get m(){return this.parent.m},get O(){return this.Ha},get N(){this.C||(this.C=a.observable(this.a.map(this.m.U)));return this.C},get values(){return this.O},get xa(){return this.N},da:function(a){this.Ha.valueHasMutated();
this.C&&(a.K.forEach(this.m.U),this.C(this.a.map(this.m.Rb)),a.P.forEach(this.m.aa))},za:function(){this.C&&this.a.forEach(this.m.aa)},Y:function(a){return new f.fb(this,a)},$:function(a){return new f.gb(this,a)},W:function(a,e){return new f.eb(this,a,e)},dispose:function(){this.dispose()}};Object.defineProperty(b.prototype,"values",{enumerable:!0,get:function(){return this.O}});Object.defineProperty(b.prototype,"observables",{enumerable:!0,get:function(){return this.N}});b.prototype.filteredBy=b.prototype.Y;
b.prototype.orderedBy=b.prototype.$;b.prototype.clipped=b.prototype.W;return b}(k,c,q,t,l);a=function(a,d,e){function g(a,b,r,h){e.call(this,{b:a,m:b},r,h);this.M=h.subscribe(function(a){this.da(a)}.bind(this))}g.prototype=d.e.extend({},e.prototype,{dispose:function(){this.M.dispose();this.za()}});return g}(k,c,x);(function(a,d,e,g,f){function b(b,h){g.call(this,b);this.L=a.computed(function(){var m=this.a.G(),y=this.parent.a.filter(a.unwrap(h)).G(),m=new e(y,[],m);this.a.clear();this.a.J(y);this.da(m);
m.v(this.t)}.bind(this));this.M=b.t.subscribe(function(m){var y;y=this.b;for(var v=this.a,b=a.unwrap(h),f=m.K.filter(b),A=[],g=m.P.filter(b),u=0,d=m.R.length;u<d;u++){var l=m.R[u],t=v.vb(y(l));b(l)?t?A.push(l):f.push(l):t&&g.push(l)}y=new e(f,A,g);y.empty||(this.a.removeAll(y.P),this.a.ab(y.R),this.a.J(y.K),this.da(m),y.v(this.t))}.bind(this))}b.prototype=d.e.extend({},g.prototype,{dispose:function(){this.L.dispose();this.M.dispose();this.za()}});return f.fb=b})(k,c,t,x,l);(function(a,d,e,g){function f(b,
f){e.call(this,b);this.a.J(b.a.G());this.L=a.computed(function(){this.a.xb(a.unwrap(f))&&this.t.valueHasMutated()}.bind(this));this.M=b.t.subscribe(function(a){var m=this.a.kc(a.R);this.a.removeAll(a.P.concat(m));this.a.Kb(a.K.concat(m));this.da(a);this.t.valueHasMutated()}.bind(this))}f.prototype=d.e.extend({},e.prototype,{filteredBy:function(){throw Error("Filtering an ordered view is not supported.");},orderedBy:function(){throw Error("Ordering an ordered view is not supported.");},dispose:function(){this.L.dispose();
this.M.dispose();this.za()}});return g.gb=f})(k,c,x,l);(function(a,d,e,g){function f(b,f,h){var m=b.m;this.Da=m;this.H=a.observable(e.Ub());this.w=null;var y=b.b;this.L=a.computed(function(){b.t();var e=b.a,p=Math.min(e.length,a.unwrap(f)),g=Math.min(e.length,p+a.unwrap(h)),A=this.H.peek(),e=e.slice(p,g);a:if(A.length!==e.length)p=!0;else{for(p=A.length-1;0<=p;--p)if(y(A.get(p))!==y(e.get(p))){p=!0;break a}p=!1}p&&(this.H(e),this.w&&(this.w(this.H.peek().map(m.U)),A.forEach(m.aa)))}.bind(this))}f.prototype=
d.d.Na({get O(){return this.H},get N(){this.w||(this.w=a.observable(this.values().map(this.Da.U)));return this.w},get values(){return this.O},get xa(){return this.N},Y:function(){throw Error("Filtering a clipped view is not supported.");},$:function(){throw Error("Ordering a clipped view is not supported.");},W:function(){throw Error("Clipping a clipped view is not supported.");},dispose:function(){this.L.dispose();this.w&&this.H().forEach(this.Da.aa)}});Object.defineProperty(f.prototype,"values",
{enumerable:!0,get:function(){return this.O}});Object.defineProperty(f.prototype,"observables",{enumerable:!0,get:function(){return this.N}});f.prototype.filteredBy=f.prototype.Y;f.prototype.orderedBy=f.prototype.$;f.prototype.clipped=f.prototype.W;f.prototype.dispose=f.prototype.dispose;return g.eb=f})(k,c,n,l);return function(a){return a}(function(a,d,e){return{ClientSideDataSource:a,DefaultObservableStateTransitioner:d,ObservableEntries:e}}(function(a,d,e,g,f){return function(b,u){var h=new e(b),
m=a.observable(new f);this.openView=this.Qa=function(){return new g.hb(b,u,h,m)};this.addEntries=function(a){h.J(a);(new f(a)).v(m)};this.updateEntries=function(a){h.ab(a);(new f([],a)).v(m);u.bb(a)};this.addOrUpdateEntries=function(a){var e=[],b=[];a.forEach(function(a){(h.contains(a)?b:e).push()});(new f(e,b)).v(m)};this.removeEntries=function(a){h.removeAll(a);(new f([],[],a)).v(m)};this.replaceEntries=function(a){var e=h.G();h.clear();h.J(a);(new f(a,[],e)).v(m);u.bb(a)};this.dispose=function(){}}}(k,
c,q,{hb:a},t),function(a){return function(){var d={};Array.prototype.slice.call(arguments).forEach(function(a){d[a]=!0});this.constructor=function(e){var g={};Object.keys(e).forEach(function(f){g[f]=d[f]?e[f]:a.observable(e[f])});return g};this.cb=function(a,g){Object.keys(g).filter(function(a){return!d[a]}).forEach(function(f){a[f](g[f])});return a};this.yb=function(){}}}(k),function(a){function d(e){this.observable=e;this.$b=a.observable(e);this.Wa=1}return function(e,g){function f(a){var e=b(a);
if(!e)throw Error("Es existierte keine Referenz zum Objekt mit Id '"+a+"' oder es wurden bereits alle freigegeben.");return e}function b(a){if("string"!==typeof a)throw u(a);return Object.prototype.hasOwnProperty.call(h,a)?h[a]:null}function u(a){throw Error("Ids m\u00fcssen Strings sein. Unerwartete Id '"+a+"' des Typs '"+typeof a+"'.");}g=g||{constructor:function(e){var b={};Object.keys(e).forEach(function(h){b[h]=a.observable(e[h])});return b},cb:function(a,e){Object.keys(e).forEach(function(b){a[b](e[b])});
return a},yb:function(){}};var h={};this.U=function(a){var b=e(a);if("string"!==typeof b)throw u(b);Object.prototype.hasOwnProperty.call(h,b)?(b=h[b],++b.Wa):(a=new d(g.constructor(a)),b=h[b]=a);return b.observable};this.aa=function(a){a=e(a);0===--f(a).Wa&&delete h[a]};this.Fb=function(a){f(a).$b(null);delete h[a]};this.Rb=function(a){return f(e(a)).observable};this.lc=function(a,e){return e(f(a).observable)};this.fa=function(a,b){return this.lc(e(a),b)}.bind(this);this.nc=function(a,e){var h=b(a);
h&&e(h.observable)};this.mc=function(a,b){return this.nc(e(a),b)}.bind(this);this.bb=function(a){a.forEach(function(a){this.mc(a,function(e){g.cb(e,a)})}.bind(this))}.bind(this);this.dispose=function(){Object.keys(h).forEach(this.Fb)}.bind(this)}}(k)))}(function(q,n){return function(c){return c}(function(c,k){function t(a){if("string"!==typeof a)throw Error("Ids must be strings. (given: `"+a+"`, type: `"+typeof a+"`)");return a}function l(a,g){return c.e.Z(a,t(g))?a[g]:-1}function x(a,g){var f=l(a,
g);if(0>f)throw Error("Es existiert kein Eintrag mit Id '"+g+"'.");return f}function a(e,g,f,b,u){if(b>=u)return b;var h=Math.floor((b+u)/2);return 0>g(f,e[h])?a(e,g,f,b,h):a(e,g,f,h+1,u)}function r(a,g,f,b,u){function h(b,h){var d=m.length,A=g.slice(b,h);m=m.concat(A);A.forEach(function(b){f[a(b)]=d;++d})}var m=[],d=0;b.forEach(function(a){h(d,a);d=a;u(m)});h(d,g.length);return m}function d(a){this.b=function(g){return t(a(g))};this.elements=[];this.i={};this.u=null}d.prototype=k.Qb({get length(){return this.elements.length},
get:function(a){return this.elements[a]},wc:function(a){a=x(this.i,a);return this.elements[a]},clear:function(){this.elements=[];this.i={}},contains:function(a){a=(0,this.b)(a);return 0<=l(this.i,a)},vb:function(a){return 0<=l(this.i,a)},xb:function(a){var g=this.b,f=this.elements,b=this.i;this.u=a;c.p.Aa(f,a);a=!1;for(var d=0;d<f.length;++d){var h=g(f[d]);a=a||b[h]!==d;b[h]=d}return a},cc:function(a){if(a.length){var d=this.b,f=this.elements,b=this.i;a=a.map(function(a){return x(b,a)+1});a.sort(function(a,
b){return a-b});this.elements=r(d,f,b,a,function(a){a=a.pop();a=d(a);delete b[a]})}},removeAll:function(a){this.cc(a.map(this.b))},ab:function(a){if(this.u)throw Error("`updateAll` must not be called on an ordered `IndexedTable`. Use a combination of order-preserving `tryUpdateAll`, `removeAll` and `insertAll` instead.");if(a.length){var d=this.b,f=this.elements,b=this.i;a.forEach(function(a){var h=x(b,d(a));f[h]=a})}},kc:function(a){if(!this.u)throw Error("`tryUpdateAll` is designed for ordered `IndexedTable`s. For unordered ones, use `updateAll` instead.");
if(!a.length)return[];var d=this.b,f=this.elements,b=this.i,r=this.u,h=[];a.forEach(function(a){var e=x(b,d(a));0!==r(a,f[e])?h.push(a):f[e]=a});return h},J:function(a){if(this.u)throw Error("`addAll` must not be called on an ordered `IndexedTable`. Use order-preserving `insertAll` instead.");if(a.length){var d=this.b,f=this.elements,b=this.i;a.forEach(function(a){var h=d(a);if(c.e.Z(b,h))throw Error("The list already contains an element with id `"+h+"`. Did you mean to call `updateAll`?.");b[h]=
f.push(a)-1})}},Kb:function(d){if(!this.u)throw Error("`insertAll` is designed for ordered `IndexedTable`s. For unordered ones, use `addAll` instead.");if(d.length){var g=this.b,f=this.elements,b=this.i,l=this.u;c.p.Aa(d,l);var h=0,m=[];d.forEach(function(b){b=a(f,l,b,h,f.length);m.push(b);h=b});h=0;this.elements=r(g,f,b,m,function(a){var f=d[h],p=g(f),m=a.length;a.push(f);b[p]=m;++h})}}});return d}(n,q))}(E,z),E,z,w);I=function(){return function(q){return q}(function(){function q(t,l){var c=(" "+
t+" ").replace(" "+l+" "," ");return c.substring(" "===c[0]?1:0," "===c[c.length-1]?c.length-1:c.length)}function n(c,l){return!!(c.compareDocumentPosition(l)&16)}var c=window.Element,k=c.prototype.webkitMatchesSelector||c.prototype.mozMatchesSelector||c.prototype.msMatchesSelector;return{Ab:function(c,l){for(var k=0;l;){if(l===c)return k;l=l.parentNode;++k}throw Error("The given node is not part of the subtree.");},Mb:function(c,l){return c===l||n(c,l)},Dc:n,element:{sb:function(c,l){do{if(k.call(c,
l))return c;c=c.parentElement}while(c);return null},matches:function(c,l){return k.call(c,l)}},sc:{add:function(c,l){return q(c,l)+" "+l},yc:function(c,l){return 0<=(" "+c+" ").indexOf(" "+l+" ")},remove:q}}}())}();J=function(q){var n,c,k;n=function(){function c(a){this.length=function(){return a.length};this.get=function(c){return a[c]}}function l(a){this.length=function(){return a.length()};this.get=function(c){return a.get(c)}}function k(a){this.length=function(){return a.length};this.get=function(c){return a.get(c)}}
return{Ib:function(a){if(Array.isArray(a))a=c;else a:switch(typeof a.length){case "function":a=l;break a;case "number":a=k;break a;default:throw Error("Unsupported type: The `forEach` value must be an array or a list with a `length` property or method.");}return a}}}();c=function(c){function l(a){if("function"===typeof a)return a;if("string"===typeof a)return function(d){return d[a]};throw Error("A repeat-binding must specify and indexedBy of type string (property name) or function (custom selector).");
}function k(a){c.cleanNode(a);window.setTimeout(function(){c.cleanNode(a)},1);var d=a.cloneNode(!0);d.removeAttribute("data-bind");"string"===typeof a.getAttribute("data-repeat-bind")&&(d.setAttribute("data-bind",a.getAttribute("data-repeat-bind")),d.removeAttribute("data-repeat-bind"));return d}var a=window.document;return function(c,d){var e=c.getAttribute("data-bind");this.b=l(d.indexedBy);this.Ob=d.as||"$item";this.Hb=d.at||"$index";this.ob=!1!==d.allowElementRecycling;this.Ia=!0===d.allowDeviation;
this.ec=d.onDeviation||function(){};this.fc=d.onSynchronization||function(){};this.parent=c.parentNode;this.ca=a.createComment("[repeat("+e+")");this.pa=a.createComment("repeat("+e+")]");this.Nb=k(c);this.Bb=this.ca}}(q);k=function(){function c(){this.T=0;this.j={}}c.prototype={add:function(c,k){if(Object.prototype.hasOwnProperty.call(this.j,c))throw Error("Key `"+c+"` is already taken.");++this.T;this.j[c]=k},get:function(c){return this.j[c]},remove:function(c){if(!Object.prototype.hasOwnProperty.call(this.j,
c))throw Error("No entry for key  `"+c+"` present.");delete this.j[c];--this.T},clear:function(){this.j={};this.T=0},get size(){return this.T},forEach:function(c){for(var k in this.j)Object.prototype.hasOwnProperty.call(this.j,k)&&c(k,this.j[k])}};return c}();return function(c){return c}(function(c,l,k,a){return c.bindingHandlers.indexedRepeat={init:function(r,d,e,g,f){d=d();e=new k(r,d);g=e.Bb;e.parent.replaceChild(e.pa,r);e.parent.insertBefore(e.ca,e.pa);var b=new a(e,f);e.Ia&&c.utils.domNodeDisposal.addDisposeCallback(g,
function(){b.lb()});var u=d.forEach,h=l.Ib(u());return{controlsDescendantBindings:!0,subscribable:c.computed(function(){var a=new h(u());b.gc(a)},null,{disposeWhenNodeIsRemoved:g})}}}}(q,n,c,function(c,l){function k(a,c){this.element=a;this.qb=c}function a(a,c,d,b){this.index=a;this.item=c;this.id=d;this.Ua=b}var r=window.requestAnimationFrame,d=window.cancelAnimationFrame;return function(e,g){function f(){b((new Date).getTime()+40)}function b(a){for(;u();)if(++F,(new Date).getTime()>a){n();z=r(f);
return}m()}function u(){if(F<G.length()){var b=F,d=G.get(F),f=b?A(G.get(b-1)):null,m=A(d),v=H.get(m);if(v)if(v.element.style.display="",v.qb[N](b),b=C.get(m))C.remove(m),O.insertBefore(b,D.nextSibling),D=b;else{for(;v.element!==D.nextSibling;)S(D.nextSibling);D=v.element}else w.push(new a(b,d,m,f))}else if(B)if(w.length)e.ob&&B.length?(m=B.pop(),v=w.shift(),m.style.display="",p(m,v.Ua),b=c.contextFor(m),b[M](v.item),b[N](v.index),H.add(v.id,new k(m,b))):(m=w.shift(),v=U.cloneNode(!0),b={},b[N]=c.observable(m.index),
b[M]=c.observable(m.item),b=g.extend(b),H.add(m.id,new k(v,b)),c.applyBindings(b,v),p(v,m.Ua),++P);else return!1;else h();return!0}function h(){B=[];for(var a=G.length()-w.length,a=P-C.size-a;0<a;--a)S(D.nextSibling);C.forEach(function(a,b){H.remove(a);B.push(b)});C.clear()}function m(){for(var a=0;a<B.length;++a)c.removeNode(B[a]);P=G.length();v();q()}function y(){d(z);z=null;for(var a=0;null!==B&&a<B.length;++a){var b=B[a];H.add(A(c.contextFor(b)[M]()),new k(b,c.contextFor(b)))}v()}function v(){F=
0;B=C=w=D=null}function p(a,b){var c=(b?H.get(b).element:V).nextSibling;O.insertBefore(a,c)}function S(a){C.add(A(c.contextFor(a)[M]()),a);a.style.display="none";O.insertBefore(a,W)}var A=e.b,M=e.Ob,N=e.Hb,T=e.Ia,n=e.ec,q=e.fc,O=e.parent,V=e.ca,W=e.pa,U=e.Nb,G=null,H=new l,P=0,F=0,D=null,z=null,w=null,C=null,B=null;this.gc=function(a){z&&y();F=0;D=e.ca;w=[];C=new l;G=a;if(T)b((new Date).getTime()+15);else{for(;u();)++F;m()}};this.lb=y}}(q,k)))}(w);K=function(q,n,c,k){var t,l,x;t=function(){var a=
/^[a-z]+(-[a-z]+)*$/,c=/\x3c!--(?:(before|after):)?([a-z]+(-[a-z]+)*)--\x3e*/g;return function(d){function e(a,c){c=c||function(a,b){return b+a};return function(d){var p=g(d,a);return{ua:function(a,d){var m=d?a:null,e=(d=d?d:a)?m:null,v=d,m=c;e&&b(e,2);f(v);e=e?g(e,3)+v+g(e,4):v;m=m(p,e);h=h.replace(p,m)}}}}function g(a,b){function c(b){if(u[a]!==b)throw Error("Operation is not defined for placeholder `"+a+"`.");}if(!u[a])throw Error("Unknown placeholder id `"+a+"`.");var d="\x3c!--"+a+"--\x3e",h=
"\x3c!--before:"+a+"--\x3e",f="\x3c!--after:"+a+"--\x3e";switch(b){case 1:return c(1),delete u[a],d;case 2:return c(1),d;case 3:return c(2),h;case 4:return c(2),f;case 5:case 6:return 1===u[a]?"\x3c!--"+a+"--\x3e":5===b?f:h}throw Error("Assertion error. Unkown operator: `"+b+"`");}function f(a){for(var d;d=c.exec(a);){var h=d[1],f="before"===h;d=d[2];if(h&&1!==(a.match(new RegExp((f?"after":"before")+":"+d,"g"))||[]).length)throw Error("Multiple or unmatched before-/after-placeholders for placeholder id `"+
d+"`.");h&&!f||b(d,h?2:1)}}function b(b,c){if(!a.test(b))throw Error("Invalid placeholder id `"+b+"`");if(u[b])throw Error("Placeholder id `"+b+"` is already taken.");u[b]=c}var u={},h=d;f(h);this.replace=function(a){return{fa:e(1,function(a,b){return b})(a).ua}};this.jc=function(){return{append:e(5)("tfoot").ua,bc:e(6,function(a,b){return a+b})("tfoot").ua}};this.rb=function(){return h.replace(c,"")}}}();c=function(a,c,d){function e(a){return null===a?"":""+a}function g(c,b,d){this.id=this.id=d.id;
this.property=this.n=d.property||this.id;this.k=!d.hidden;this.visible=this.visible=function(){return this.k}.bind(this);this.label=this.label=a.observable(d.label);this.width=this.width=a.observable(d.width);this.widthInPixels=this.Ba=function(){var a=this.width();if("px"!==a.substr(-2))throw Error("The only currently supported column width values are absolute pixel lengths.");return parseInt(a.substring(0,a.length-2),10)}.bind(this);this.D=a.observableArray(d.headerClasses||d.classes||[]);this.Ja=
a.observableArray(d.cellClasses||d.classes||[]);this.Ma=a.observableArray(d.footerClasses||d.classes||[]);this.headerClasses=this.D;this.cellClasses=this.Ja;this.footerClasses=this.Ma;this.metadata=this.Tb=b.columnMetadataProvider?b.columnMetadataProvider(c,d):{};this.renderValue=this.ba=b.cellValueRenderer?b.cellValueRenderer.bind(void 0,this):e;this.ac=function(a){this.ba=a(this.ba)}.bind(this);this.Sa=function(a){a=a({l:this.B,update:this.Ga});if(!a||!a.l||!a.update)throw Error("The cell value binding must define an `init` as well as an `update` method.");
this.B=a.l;this.Ga=a.update}.bind(this);this.overrideValueRendering=this.ac;this.overrideValueBinding=this.Sa}a.bindingHandlers.__gridColumn={init:c.d.g,update:function(a,b){var d=b();a.style.width=d.width()}};return{l:function(a){a.replace("columns").fa(d)},h:function(d,b,c){function h(a){a=new g(c,b,a);b.columnInitializer&&b.columnInitializer(a);return a}var e=[];this.all=this.all=a.observableArray(d.columns.map(h));this.byId=this.V=function(a){var b=this.Za(a);if(!b)throw Error("The column id `"+
a+"` is already taken.");return b}.bind(this);this.tryById=this.Za=function(a){var b=this.all().filter(function(b){return b.id===a});if(1<b.length)throw Error("Assertion error: Multiple columns with id `"+a+"`.");return b[0]}.bind(this);var l=a.observable(this.all().filter(function(a){return a.k}));this.displayed=this.f=function(){return l()};this.show=function(a){this.Q(function(b){return b.k||b===a})}.bind(this);this.Gb=function(a){this.Q(function(b){return b.k&&b!==a})}.bind(this);this.show=this.show;
this.hide=this.Gb;this.reorder=this.dc=function(a){var b=this.all().slice(),d=[];a.forEach(function(a){b.splice(b.indexOf(a),1);d.push(a)});if(b.length)throw Error("The new column order must contain all columns.");this.all(d);this.Q(function(a){return a.k})}.bind(this);this.showOnlyThoseWhich=this.Q=function(a){var b=this.all();a=b.filter(a);b.forEach(function(a){a.k=!1});a.forEach(function(a){a.k=!0});l(a)}.bind(this);this._combinedWidthInPixels=this.Fa=a.computed(function(){for(var a=0,b=this.f(),
d=0;d<b.length;++d)a+=b[d].Ba();return a}.bind(this));e.push(this.Fa);this.add=this.add=function(a){a=h({id:"#"+a.id,label:a.label,hidden:a.hidden||!1,width:a.width});this.all.unshift(a);this.Q(function(a){return a.k});return a}.bind(this);this.o=function(){e.forEach(function(a){a.dispose()})}}}}(k,n,'<colgroup class="ko-grid-colgroup">\n    <col class="ko-grid-col" data-bind="indexedRepeat: { forEach: columns.displayed, indexedBy: \'id\', as: \'column\' }" data-repeat-bind="__gridColumn: column()">\n</colgroup>');
l=function(a,c){function d(d){var c=d.defaultPrevented;a.e.extend(this,d,{preventDefault:function(){c=!0;return d.preventDefault()},Bc:function(){c=!0},get defaultPrevented(){return c}})}function e(a,d){this.sa=a;this.Ya=d}return function(g){function f(d,e,f){function g(a){a=Array.prototype.slice.call(d.querySelectorAll(a)).filter(function(a){return c.Mb(a,e.target)});return a.length?a[a.length-1]:void 0}var l=c.Ab.bind(null,d),p=b.map(function(a){var b=a.Ya?g(a.Ya):d;return{sa:a.sa,match:b,depth:b?
l(b):-1}}).filter(function(a){return!!a.match});a.p.Aa(p,function(a,b){return b.depth-a.depth});p.forEach(function(a){a.sa.apply(d,f)})}g=g||function(a){return[a]};var b=[];this.F=function(a,d){var c=1<arguments.length?a:void 0;d=1<arguments.length?d:a;b.push(new e(d,c))};this.Xa=function(a){return{Ka:function(b){var e=c.element.sb(b.target,a);e&&(b=new d(b),f(e,b,g(b,e)))}}}}}(n,q);q=function(a,c,d,e){function g(a){this.Ea(function(b){b();this.A=a.ja.querySelector(".ko-grid-tbody")}.bind(this));
return function(){this.A=null}.bind(this)}function f(){var b=[],d=a.pureComputed(function(){var b=this.Ta().map(a.unwrap);return function(a){for(var d=0;d<b.length;d++)if(!b[d](a))return!1;return!0}}.bind(this)),c=a.pureComputed(function(){return this.s()}.bind(this)),e={};this.rows=this.rows=e;e.all=a.observableArray([]);e.qa=a.observableArray([]);e.filtered=e.qa;e.ya=a.observableArray([]);e.ordered=e.ya;e.f=a.observableArray([]);e.displayed=e.f;e.oa=a.observable(!1).extend({zc:"always"});e.displayedSynchronized=
e.oa;e.__handleDisplayedRowsDeviate=function(){this.rows.oa(!1)}.bind(this);e.__handleDisplayedRowsSynchronized=function(){this.rows.oa(!0)}.bind(this);this.ib(function(a){a();a=this.source.Qa();var f=a.Y(d),h=this.rows.qc=f.$(c),g=h.W(this.offset,this.Oa);b.push(a,f,h,g);b.push(a.values.subscribe(function(a){this.rows.all(a)}.bind(this)),f.values.subscribe(function(a){this.rows.qa(a)}.bind(this)),h.values.subscribe(function(a){this.rows.ya(a)}.bind(this)),g.xa.subscribe(function(a){this.rows.f(a)}.bind(this)));
e.all(a.values());e.qa(f.values());e.ya(h.values());e.f(g.xa())}.bind(this));var f=[];e.__classify=function(a){var b=f.map(function(b){return b(a)});return Array.prototype.concat.apply([],b)};e.Lb=function(a){f.push(a)};e.installClassifier=e.Lb;return function(){b.forEach(function(a){a.dispose()})}}function b(){function b(d,c){var e=a.contextFor(c),f=e.row(),e=e.column();return[d,f[e.n],f,e]}function e(a){return function(b){a.Xa(".ko-grid-cell").Ka(b);return!b.defaultPrevented}}var f=new d(b),h=new d(b),
g=new d(b),m=new d(b);this.Yb=f.F.bind(f);this.Vb=h.F.bind(h);this.Xb=g.F.bind(g);this.Wb=m.F.bind(m);this["onCellMouseDown "]=this.Yb;this["onCellClick "]=this.Vb;this["onCellDoubleClick "]=this.Xb;this["onCellContextMenu "]=this.Wb;this.Ea(function(a){a();this.A.addEventListener("mousedown",e(f));this.A.addEventListener("click",e(h));this.A.addEventListener("dblclick",e(g));this.A.addEventListener("contextmenu",e(m))}.bind(this));return c.d.g}function l(b){function d(a,b){for(var c=a.firstChild,
e=-1;c;){if(c.nodeType===m&&"TD"===c.tagName&&0<=(" "+c.className+" ").indexOf("td")&&++e===b)return c;c=c.nextSibling}throw Error("Column `"+b+"` does not exist.");}var e=function(a){for(var b=this.A.firstChild,d=-1;b;){if(b.nodeType===m&&"TR"===b.tagName&&0<=(" "+b.className+" ").indexOf("ko-grid-row")&&++d===a)return b;b=b.nextSibling}throw Error("Row `"+a+"` does not exist.");}.bind(this);this.lookupCell=this.Sb=function(c,f){var g=this.rows.f().indexOf(c),m=b.c.f().indexOf(f),p=d(e(g),m);return{element:p,
hijack:function(b){function d(){for(p.removeAttribute("data-hijacked");p.firstChild;)a.removeNode(p.firstChild);var b=a.contextFor(p).Cc();f.B?f.B(p,b,f):p.appendChild(v.createTextNode(""));h(p,b(),f)}if(p.hasAttribute("data-hijacked"))throw Error("Illegal state: This cell is already hijacked.");for(;p.firstChild;)a.removeNode(p.firstChild);p.className+=" "+b;p.setAttribute("data-hijacked","hijacked "+b);return{dispose:d,release:d}}}}.bind(this);return c.d.g}function h(b,d,c){var e=d[c.n],f=e&&a.unwrap(e),
h=b.getAttribute("data-hijacked"),g=c.Ja.peek().join(" ");b.className="ko-grid-td ko-grid-cell "+g+(h?" "+h:"");h||(c.B?c.Ga(b,e,d,c):b.lastChild.nodeValue=c.ba(f))}var m=window.Node.ELEMENT_NODE,k=c.d.oc,v=window.document,p={pc:k,l:function(a){a.replace("body").fa(e)},h:function(d,e,h){var p=[];this.source=d.dataSource;this.valueSelector=this.ea=d.valueSelector||e.valueSelector||c.d.Na;this.observableValueSelector=this.wa=d.observableValueSelector||e.observableValueSelector||this.ea;this.predicates=
this.Ta=a.observableArray(d.filters||[]);this.comparator=this.s=a.observable(k);this.offset=this.offset=a.observable(0);this.limit=this.Oa=a.observable(Number.POSITIVE_INFINITY);this.S=c.d.g;this.ib=function(a){var b=this.S;this.S=function(){a(b)}}.bind(this);this.I=c.d.g;this.Ea=function(a){var b=this.I;this.I=function(){a(b)}}.bind(this);p.push(g.call(this,h));p.push(f.call(this));p.push(b.call(this));p.push(l.call(this,h));this.o=function(){p.forEach(function(a){a()})}}.bind(this)};a.bindingHandlers.__gridRow=
{init:c.d.g,update:function(a,b){var d=b(),c=d.classify,e=d.row(),d=1===d.index()%2?["ko-grid-tr","ko-grid-row","alternate"]:["ko-grid-tr","ko-grid-row"],c=c(e);a.className=d.concat(c).join(" ")}};a.bindingHandlers.__gridCell={init:function(b,d){for(var c=d(),e=c.row,c=c.column,f=c();b.firstChild;)a.removeNode(b.firstChild);f.B?f.B(b,e,c):b.appendChild(v.createTextNode(""));return{controlsDescendantBindings:!0}},update:function(a,b){var d=b(),c=d.row(),d=d.column.peek();h(a,c,d)}};return p}(k,n,l,
'<tbody class="ko-grid-tbody" data-bind="_gridWidth: columns._combinedWidthInPixels() + \'px\'">\n    \x3c!--before:tbody--\x3e\n    <tr class="ko-grid-tr ko-grid-row"\n        data-bind="indexedRepeat: {\n            forEach: data.rows.displayed,\n            indexedBy: function(r) { return grid.data.observableValueSelector(ko.unwrap(r[grid.primaryKey])); },\n            as: \'row\',\n            at: \'rowIndex\',\n            allowDeviation: true,\n            onDeviation: data.rows.__handleDisplayedRowsDeviate,\n            onSynchronization: data.rows.__handleDisplayedRowsSynchronized }"\n        data-repeat-bind="__gridRow: { classify: grid.data.rows.__classify, row: row, index: rowIndex }">\n\n        <td data-bind="indexedRepeat: { forEach: columns.displayed, indexedBy: \'id\', as: \'column\', allowElementRecycling: false }"\n            data-repeat-bind="__gridCell: { row: row, column: column }"></td>\n    </tr>\n    \x3c!--after:tbody--\x3e\n</tbody>');
l=function(a,c,d,e){function g(b){this.id=this.id="column-header-"+b.id;this.element=this.element=a.observable(null);this.rowSpan=this.rowSpan=a.observable(1);this.columnSpan=this.r=a.observable(1);this.label=this.label=b.label;this.column=this.q=b;this.columns=this.c=[b];this.ha=function(a){this.rowSpan(a)}.bind(this)}function f(b){this.id=this.id="column-group-header-"+(b.id||"@__"+ ++k);this.element=this.element=a.observable(null);this.kb=b;this.rowSpan=this.rowSpan=a.observable(b.height);this.columnSpan=
this.r=a.observable(1);this.label=this.label=a.observable(b.label);this.columns=this.c=[];this.ha=function(a){this.c=[a];this.r(1)}.bind(this)}function b(a){function b(a){a.tb.forEach(function(b){var c=d[b];if(!c)d[b]=a;else if(c!==a)throw Error("Column `"+b+"` is element of column group `"+c.label+"` as well as `"+a.label+"`.");});a.X&&b(a.X)}var d={};c.p.La(a,l.bind(this,null)).forEach(function(a){b(a)});return d}function l(a,b){var d=h(b),e=b.elements.filter(function(a){return"string"!==typeof a}),
f=b.elements.filter(function(a){return"string"===typeof a}),d={id:b.id,label:b.label,X:a,depth:a?a.depth+1:0,height:a?a.Ra-d:1,Ra:d,tb:f};return e.length?c.p.La(e,l.bind(this,d)):d}function h(a){a=a.elements.filter(function(a){return"string"!==typeof a});return 1+Math.max.apply(Math,[0].concat(a.map(h)))}var m=window.document,k=0,v={l:function(a){a.replace("head").fa("headers",e)},h:function(c,e,h){function m(a,b,d){if(!a)return[];if(b[a.depth]&&b[a.depth].kb===a){var c=a;do{var e=b[c.depth];e.c.push(d);
e.r(e.r()+1);c=c.X}while(c);return[]}b.length=a.depth;var c=m(a.X,b,d),h=e=a.depth;a=l(v,new f(a));a.ha(d);c[e]=b[h]=a;return c}function l(a,b){var d=b.id;return a[d]=a[d]||b}var k=b(c.columnGroups||[]),v={},r={},u=[];this.__rows=this.ia=a.computed(function(){var b=h.c.f(),d=0;b.forEach(function(a){a=k[a.id];d=Math.max(d,a?a.depth+a.Ra:0)});u.length=d+1;for(var c=0;c<u.length;++c)u[c]=u[c]||a.observableArray(),u[c].__rowId="header-row-"+c,u[c].valueWillMutate(),u[c]().length=0;var e=[];b.forEach(function(a){var b=
k[a.id],c=b?b.depth+b.height:0;e.length=c;var f=l(r,new g(a));f.ha(d-c+1);u[c]().push(f);a=m(b,e,a);for(b=0;b<a.length;++b)a[b]&&u[b]().push(a[b])});u.forEach(function(a){a.valueHasMutated()});return u});this.all=this.all=a.computed(function(){var a=[];this.ia().forEach(function(b){Array.prototype.push.apply(a,b())});return a}.bind(this));this.forColumn=this.Eb=function(a){a="column-header-"+a.id;if(!Object.prototype.hasOwnProperty.call(r,a))throw Error("Es existiert kein Header f\u00fcr die gegebene Spalte.");
return r[a]};var n=new d(function(b,d){return[b,a.contextFor(d).header()]});this.__handleClick=function(a,b){n.Xa(".ko-grid-column-header, .ko-grid-column-group-header").Ka(b);return!b.defaultPrevented};this.Zb=n.F.bind(n);this.Pa=function(a,b){function d(a,c){var e=arguments;c instanceof g&&b.apply(this,e)}var c=1<arguments.length;b=c?b:a;n.F.apply(n,c?[a,d]:[d])};this.onHeaderClick=this.Zb;this.onColumnHeaderClick=this.Pa;this.o=function(){this.ia.dispose();this.all.dispose()}.bind(this)}.bind(this)};
a.bindingHandlers.__gridHeader={init:function(b,d){var c=d()();c.element(b);for(a.utils.domNodeDisposal.addDisposeCallback(b,function(){c.element(null)});b.firstChild;)a.removeNode(b.firstChild);b.appendChild(m.createTextNode(""));return{controlsDescendantBindings:!0}},update:function(a,b){var d=b()(),c=d.id.replace(/[\s]/g,"_");a.className=d.q?"ko-grid-th ko-grid-column-header "+c+" "+d.q.D().join(" "):"ko-grid-th ko-grid-column-group-header "+c;c=d.c.map(function(a){return a.Ba()}).reduce(function(a,
b){return a+b})+"px";a.style.width=c;a.style.maxWidth=c;a.rowSpan=d.rowSpan();a.colSpan=d.r();a.firstChild.nodeValue=d.label()}};return v}(k,n,l,'<thead class="ko-grid-thead" data-bind="_gridWidth: columns._combinedWidthInPixels() + \'px\'">\n    \x3c!--before:thead--\x3e\n    <tr class="ko-grid-tr ko-grid-headers"\n        data-bind="indexedRepeat: { forEach: headers.__rows, indexedBy: \'__rowId\', as: \'headerRow\' }"\n        data-repeat-bind="click: headers.__handleClick">\n\n        <th class="ko-grid-th"\n            data-bind="indexedRepeat: { forEach: headerRow(), indexedBy: \'id\', as: \'header\' }"\n            data-repeat-bind="__gridHeader: header"></th>\n    </tr>\n    \x3c!--after:thead--\x3e\n</thead>');
x=function(a,c,d,e,g){a=a.bindingHandlers.grid=a.bindingHandlers.grid||{};return a.core=a.core||{columns:c,data:d,headers:e,layout:g}}(k,c,q,l,function(a,c){function d(a,d,c,e){var f=a.ja.querySelector(".ko-grid"),l=f.querySelector(".ko-grid-table-scroller-padding"),k=f.querySelector(".ko-grid-table-scroller"),r=f.querySelector(".ko-grid-thead"),n=f.querySelector(".ko-grid-tfoot"),q=!1;return function(a){if(!q)try{d(q=!0);var b=k.scrollLeft;a&&a();c.forEach(function(a){a.call(f)});g(f,function(){l.style.borderTopWidth=
Math.max(r.clientHeight,0)+"px";l.style.borderBottomWidth=Math.max(n.clientHeight,0)+"px"});k.scrollLeft=b;e.forEach(function(a){a.call(f)})}finally{d(!1),q=!1}}}function e(a){a=a.ja.querySelector(".ko-grid");var d=a.querySelector(".ko-grid-table-scroller"),c=a.querySelector(".ko-grid-thead"),e=a.querySelector(".ko-grid-tfoot");d.addEventListener("scroll",function(){var a=-d.scrollLeft+"px";c.style.left=a;e.style.left=a})}function g(a,d){if(a.offsetParent)d();else{var c=a.parentNode,e=f.createComment("placeholder");
c.replaceChild(e,a);var g=a.style.position;a.style.position="absolute";a.style.visibility="hidden";f.body.appendChild(a);try{d()}finally{c.replaceChild(a,e),a.style.position=g,a.style.visibility="visible"}}}var f=window.document;return{l:c.d.g,h:function(b,c,h){function g(a){a&&a()}var l=a.observable(!1);this.recalculate=this.Va=function(a){g(a)};var k=a.computed(function(){l()||(h.c.f().forEach(function(a){a.width()}),g())}),p=[],r=[];this.pb=function(a){p.push(a)};this.nb=function(a){r.push(a)};
this.beforeRelayout=this.pb;this.afterRelayout=this.nb;this.I=function(){e.call(this,h);g=d(h,l,p,r);g()}.bind(this);this.determineCellDimensions=this.zb=function(a){var b=f.createElement("div");b.className="ko-grid-td ko-grid-cell";b.appendChild("string"===typeof a?f.createTextNode(a):a);b.style.position="absolute";b.style.visibility="hidden";f.body.appendChild(b);try{return{width:b.offsetWidth,height:b.offsetHeight}}finally{f.body.removeChild(b)}};this.o=function(){k.dispose()}}.bind(this)}}(k,
n));(function(a,c){function d(a,d){if(c.e.Z(f,a))throw Error("Extension id or alias already in use: `"+a+"`.");return f[a]=d}function e(a){this.na=a.na||[];this.ta=a.ta||c.d.g;this.h=a.h}var g=a.bindingHandlers.grid=a.bindingHandlers.grid||{},f=g.extensions=g.extensions||{};g.ma=function(a,c){d(a,new e(c))};g.va=function(a){if(!c.e.Z(f,a))throw Error("No known extension id or alias: `"+a+"`.");return f[a]};g.la=function(a,c){return d(a,g.va(c))};return f})(k,n);return function(a){return a}(function(a,
c,d){function e(c,e){function f(){var a=k[c];e(a.ub,a.ic,a.Db)}k[c]?f():a([c],function(a){function e(f){var h=b.va(f);if(!d.p.contains(p,f)){if(!h)throw Error("Extension  '"+f+"' is not defined/loaded.");if(d.p.contains(n,f))throw Error("Dependency-Cycle: .. -> "+n.join(" -> ")+" -> "+f+" -> ..");if(!l[f])throw Error("The extension '"+f+"' must be configured (configuration: '"+c+"')");n.push(f);h.na.forEach(e);h.ta(g,l[f],a);if(n.pop()!==f)throw Error("Assertion error.");p.push(f)}}var g=new t('<div class="ko-grid">\n    \x3c!--before:grid--\x3e\n    <div class="ko-grid-table-container">\n        \x3c!--before:table--\x3e\n        <div class="ko-grid-table-scroller-padding">\n            <div class="ko-grid-table-scroller">\n                <table class="ko-grid-table" data-bind="_gridWidth: columns._combinedWidthInPixels() + \'px\'">\n                    \x3c!--columns--\x3e\n                    \x3c!--head--\x3e\n                    <tfoot class="ko-grid-tfoot" data-bind="_gridWidth: columns._combinedWidthInPixels() + \'px\'">\x3c!--tfoot--\x3e</tfoot>\n                    \x3c!--body--\x3e\n                </table>\n            </div>\n        </div>\n        \x3c!--after:table--\x3e\n    </div>\n    \x3c!--after:grid--\x3e\n</div>');
h.forEach(function(b){b.l(g,a)});var l=a.extensions,p=[],n=[];d.e.ra(l,e);var r="grid-template-"+c;m.mb(r,g.rb());k[c]={ub:a,ic:r,Db:p};f()})}function g(a,b){this.elementId=this.Cb=a.id;this.primaryKey=this.primaryKey=b.primaryKey;this.ja=a;c.observableArray([]);this.o=d.d.g}var f=window.document,b=c.bindingHandlers.grid=c.bindingHandlers.grid||{},l=["columns","headers","data","layout"],h=l.map(function(a){return x[a]}),m=new c.nativeTemplateEngine;m.mb=function(a,b){var c=f.createElement("script");
c.id=a;c.type="text/html";c.text=b;f.querySelector("head").appendChild(c)};c.bindingHandlers.grid.init=function(a,f,h,k,n){var q=f();e(q.config,function(e,f,h){var k=[],p=new g(a,q);c.utils.domNodeDisposal.addDisposeCallback(a,function(){p.o();k.forEach(function(a){a()})});d.e.ra(x,function(a,b){var c=new b.h(q,e,p);p[a]=c;p.c=p.columns;p.headers=p.headers;p.data=p.data;p.Pb=p.layout;"function"===typeof c.o&&k.push(c.o.bind(c))});var t=e.extensions,y=q.extensions,A=p.extensions={};for(h.forEach(function(a){var c=
b.va(a),d=t[a],f=y?y[a]||{}:{};!1===d.enabled&&!0!==f.enabled||!1===f.enabled||(c.na.forEach(function(a){if(!A[a])throw Error("Dependency '"+a+"' was disabled.");}),c=new c.h(f,d,p,q,e),A[a]=c,"function"===typeof c.dispose&&k.push(c.dispose.bind(c)))});a.firstChild;)c.removeNode(a.firstChild);l.forEach(function(a){p[a].S&&p[a].S()});h=n.createChildContext(p,"grid");c.renderTemplate(f,h,{templateEngine:m},a);var w=a.querySelector(".ko-grid");d.e.ra(t,function(a){w.className+=" with-"+d.hc.wb(a)});
l.forEach(function(a){p[a].I&&p[a].I()})});return{controlsDescendantBindings:!0}};c.bindingHandlers.grid.update=d.d.g;var k={};c.bindingHandlers._gridWidth={init:d.d.g,update:function(a,b){var c=b();a.style.width=c;a.style.maxWidth=c}};return b}(L,k,n))}(I,z,J,w);Q=function(q,n,c,k,t){return function(c){return c}(function(c,k){k.ma("ko-grid-aggregate",{ta:function(a){a.jc().bc("aggregates",'<tr class="ko-grid-tr" data-bind="indexedRepeat: {  forEach: extensions.aggregate.__aggregateRows,  indexedBy: \'id\',  as: \'aggregateRow\'}">  <td class="ko-grid-tf ko-grid-aggregate"    data-bind="indexedRepeat: {      forEach: columns.displayed,      indexedBy: \'id\',      as: \'column\'    }"    data-repeat-bind="      __gridAggregate: aggregateRow()[column().id],      _gridWidth: column().width()"></td></tr>')},
h:function(a,k,d){var e=c.observable([]);this.__aggregateRows=e;if(Array.isArray(a)){var g=[];a.forEach(function(a){Object.keys(a).forEach(function(a){a=d.c.V(a).n;0>g.indexOf(a)&&g.push(a)})});var f=0,b=c.computed(function(){var b={},c=d.data.rows.all(),l=c.length;g.forEach(function(a){b[a]={minimum:Number.POSITIVE_INFINITY,maximum:Number.NEGATIVE_INFINITY,sum:0}});c.forEach(function(a){g.forEach(function(c){var e=b[c];c=d.data.ea(a[c]);e.minimum=Math.min(e.minimum,c);e.maximum=Math.max(e.maximum,
c);e.sum+=c})});e(a.map(function(a){var c={id:""+ ++f};d.c.f().forEach(function(d){var e=d.id,f=d.n,h=a[e];if(h){if(l)if(f="average"===h?b[f].sum/l:b[f][h],1<=Math.abs(f))f=f.toLocaleString();else var g=-Math.floor(Math.log(f)/Math.log(10)),f=f.toLocaleString(void 0,{maximumFractionDigits:g+1});else f="N/A";d={q:d,ka:h,value:f}}else d={q:d};c[e]=d});return c}))});this.dispose=function(){b.dispose()}}}});c.bindingHandlers.__gridAggregate={init:function(a){for(;a.firstChild;)c.removeNode(a.firstChild);
a.appendChild(window.document.createTextNode(""));return{controlsDescendantBindings:!0}},update:function(a,c){var d=c();a.className=["ko-grid-tf ko-grid-aggregate"+(d.ka?" "+d.ka:"")].concat(d.q.Ma()).join(" ");a.firstChild.nodeValue=d.ka?d.value:""}};return k.la("aggregate","ko-grid-aggregate")}(t,c))}(I,z,K,J,w);R=function(q,n,c,k,t){return function(c){return c}(function(c,k){k.ma("ko-grid-links",{h:function(a,k,d){Object.keys(a).forEach(function(e){var g=d.c.V(e),f=a[e].uri,b=a[e].label,k="function"===
typeof f?f:function(a){return d.data.wa(c.unwrap(a[f]))},h="function"===typeof b?b:function(a){return d.data.wa(c.unwrap(a[b||g.n]))};g.Sa(function(){return{l:function(a){var b=window.document.createElement("a");b.appendChild(window.document.createTextNode(""));a.appendChild(b)},update:function(a,b,c){a.firstChild.firstChild.nodeValue=h(c);a.firstChild.href=k(c)}}})})}});return k.la("links","ko-grid-links")}(t,c))}(I,z,K,J,w);z=function(q,n,c){return function(c){return c}(function(c){function n(c,
k){this.s=c;this.jb=k||new n(function(a,k){return c(k,a)},this)}n.prototype={reverse:function(){return this.jb}};c.ma("ko-grid-sorting",{h:function(c,k,a){function q(d){if(d===g)f="ascending"===f?"descending":"ascending",b=b.reverse();else{g&&g.D.removeAll(["ascending-order","descending-order"]);g=d;var k=c.xc;k?f="descending"===k?"descending":"ascending":f="ascending";b=new n(e(d));"descending"===f&&(b=b.reverse())}k=g.D().filter(function(a){return"ascending-order"!==a&&"descending-order"!==a});
k.push("ascending"===f?"ascending-order":"descending-order");d.D(k);a.data.s(b.s)}function d(b){return(b=a.data.ea(b))&&"function"===typeof b.valueOf?b.valueOf():b}function e(a){return function(b,c){var e=d(b[a.n]),f=d(c[a.n]);return null===e&&null===f?0:null===e?-1:null===f?1:"string"===typeof e&&"string"===typeof f?e.localeCompare(f):e<=f?e<f?-1:0:1}}var g,f,b;c.Jb&&q(a.c.V(c.Jb));a.headers.Pa(function(a,b){a.defaultPrevented||(a.preventDefault(),q(b.q))});var u=a.data.s.subscribe(function(c){g&&
(c!==b.s&&(g.D.removeAll(["ascending-order","descending-order"]),g=f=b=null),a.Pb.Va())});this.dispose=function(){u.dispose()}}});return c.la("sorting","ko-grid-sorting")}(c))}(I,z,K,J,w);return function(q){return q}({dataSource:E,grid:K,extensions:{aggregate:Q,links:R,sorting:z}})});

define('text',{});
define('json',{load: function(id){throw new Error("Dynamic load not allowed: " + id);}});

define("json!ko-grid-examples/data/countries-by-population/data.json", function(){ return [
  {
    "id": "1",
    "rank": 1,
    "country": "China‪",
    "countryArticle": "http://en.wikipedia.org/wiki/China",
    "population": 1368530000,
    "date": 1425427200000,
    "percentage": 18.9
  },
  {
    "id": "2",
    "rank": 2,
    "country": "India‪",
    "countryArticle": "http://en.wikipedia.org/wiki/India",
    "population": 1267740000,
    "date": 1425427200000,
    "percentage": 17.5
  },
  {
    "id": "3",
    "rank": 3,
    "country": "United States‪",
    "countryArticle": "http://en.wikipedia.org/wiki/United%20States",
    "population": 320516000,
    "date": 1425427200000,
    "percentage": 4.43
  },
  {
    "id": "4",
    "rank": 4,
    "country": "Indonesia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Indonesia",
    "population": 255461700,
    "date": 1435708800000,
    "percentage": 3.53
  },
  {
    "id": "5",
    "rank": 5,
    "country": "Brazil‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Brazil",
    "population": 203966000,
    "date": 1425427200000,
    "percentage": 2.82
  },
  {
    "id": "6",
    "rank": 6,
    "country": "Pakistan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Pakistan",
    "population": 189132000,
    "date": 1425427200000,
    "percentage": 2.62
  },
  {
    "id": "7",
    "rank": 7,
    "country": "Nigeria‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Nigeria",
    "population": 183523000,
    "date": 1435708800000,
    "percentage": 2.54
  },
  {
    "id": "8",
    "rank": 8,
    "country": "Bangladesh‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Bangladesh",
    "population": 157930000,
    "date": 1425427200000,
    "percentage": 2.18
  },
  {
    "id": "9",
    "rank": 9,
    "country": "Russia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Russia",
    "population": 146270033,
    "date": 1420070400000,
    "percentage": 2.02
  },
  {
    "id": "10",
    "rank": 10,
    "country": "Japan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Japan",
    "population": 126970000,
    "date": 1422748800000,
    "percentage": 1.76
  },
  {
    "id": "11",
    "rank": 11,
    "country": "Mexico‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Mexico",
    "population": 121005815,
    "date": 1435708800000,
    "percentage": 1.67
  },
  {
    "id": "12",
    "rank": 12,
    "country": "Philippines‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Philippines",
    "population": 101088500,
    "date": 1425427200000,
    "percentage": 1.4
  },
  {
    "id": "13",
    "rank": 13,
    "country": "Vietnam‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Vietnam",
    "population": 90730000,
    "date": 1404172800000,
    "percentage": 1.26
  },
  {
    "id": "14",
    "rank": 14,
    "country": "Ethiopia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Ethiopia",
    "population": 90076012,
    "date": 1435708800000,
    "percentage": 1.25
  },
  {
    "id": "15",
    "rank": 15,
    "country": "Egypt‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Egypt",
    "population": 88112000,
    "date": 1425427200000,
    "percentage": 1.22
  },
  {
    "id": "16",
    "rank": 16,
    "country": "Germany‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Germany",
    "population": 80925000,
    "date": 1404086400000,
    "percentage": 1.12
  },
  {
    "id": "17",
    "rank": 17,
    "country": "Iran‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Iran",
    "population": 78160300,
    "date": 1425427200000,
    "percentage": 1.08
  },
  {
    "id": "18",
    "rank": 18,
    "country": "Turkey‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Turkey",
    "population": 77695904,
    "date": 1419984000000,
    "percentage": 1.07
  },
  {
    "id": "19",
    "rank": 19,
    "country": "Democratic Republic of the Congo‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Democratic%20Republic%20of%20the%20Congo",
    "population": 71246000,
    "date": 1435708800000,
    "percentage": 0.99
  },
  {
    "id": "20",
    "rank": 20,
    "country": "France‪",
    "countryArticle": "http://en.wikipedia.org/wiki/France",
    "population": 66104000,
    "date": 1422748800000,
    "percentage": 0.91
  },
  {
    "id": "21",
    "rank": 21,
    "country": "Thailand‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Thailand",
    "population": 64871000,
    "date": 1404172800000,
    "percentage": 0.9
  },
  {
    "id": "22",
    "rank": 22,
    "country": "United Kingdom‪",
    "countryArticle": "http://en.wikipedia.org/wiki/United%20Kingdom",
    "population": 64105654,
    "date": 1372636800000,
    "percentage": 0.89
  },
  {
    "id": "23",
    "rank": 23,
    "country": "Italy‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Italy",
    "population": 60782309,
    "date": 1412035200000,
    "percentage": 0.84
  },
  {
    "id": "24",
    "rank": 24,
    "country": "South Africa‪",
    "countryArticle": "http://en.wikipedia.org/wiki/South%20Africa",
    "population": 54002000,
    "date": 1404172800000,
    "percentage": 0.75
  },
  {
    "id": "25",
    "rank": 25,
    "country": "Burma‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Burma",
    "population": 51419420,
    "date": 1396051200000,
    "percentage": 0.71
  },
  {
    "id": "26",
    "rank": 26,
    "country": "South Korea‪",
    "countryArticle": "http://en.wikipedia.org/wiki/South%20Korea",
    "population": 51342881,
    "date": 1420070400000,
    "percentage": 0.71
  },
  {
    "id": "27",
    "rank": 27,
    "country": "Colombia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Colombia",
    "population": 48022500,
    "date": 1425427200000,
    "percentage": 0.664
  },
  {
    "id": "28",
    "rank": 28,
    "country": "Tanzania‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Tanzania",
    "population": 47421786,
    "date": 1404172800000,
    "percentage": 0.66
  },
  {
    "id": "29",
    "rank": 29,
    "country": "Kenya‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Kenya",
    "population": 46749000,
    "date": 1435708800000,
    "percentage": 0.65
  },
  {
    "id": "30",
    "rank": 30,
    "country": "Spain‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Spain",
    "population": 46464053,
    "date": 1404172800000,
    "percentage": 0.64
  },
  {
    "id": "31",
    "rank": 31,
    "country": "Argentina‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Argentina",
    "population": 43131966,
    "date": 1435708800000,
    "percentage": 0.6
  },
  {
    "id": "32",
    "rank": 32,
    "country": "Ukraine‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Ukraine",
    "population": 42928900,
    "date": 1420070400000,
    "percentage": 0.59
  },
  {
    "id": "33",
    "rank": 33,
    "country": "Algeria‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Algeria",
    "population": 39500000,
    "date": 1420070400000,
    "percentage": 0.55
  },
  {
    "id": "34",
    "rank": 34,
    "country": "Poland‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Poland",
    "population": 38484000,
    "date": 1419984000000,
    "percentage": 0.53
  },
  {
    "id": "35",
    "rank": 35,
    "country": "Sudan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Sudan",
    "population": 38435252,
    "date": 1435708800000,
    "percentage": 0.53
  },
  {
    "id": "36",
    "rank": 36,
    "country": "Iraq‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Iraq",
    "population": 36004552,
    "date": 1404172800000,
    "percentage": 0.5
  },
  {
    "id": "37",
    "rank": 37,
    "country": "Canada‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Canada",
    "population": 35675834,
    "date": 1412121600000,
    "percentage": 0.49
  },
  {
    "id": "38",
    "rank": 38,
    "country": "Uganda‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Uganda",
    "population": 34856813,
    "date": 1409184000000,
    "percentage": 0.48
  },
  {
    "id": "39",
    "rank": 39,
    "country": "Morocco‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Morocco",
    "population": 33541200,
    "date": 1425427200000,
    "percentage": 0.464
  },
  {
    "id": "40",
    "rank": 40,
    "country": "Saudi Arabia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Saudi%20Arabia",
    "population": 31521418,
    "date": 1435708800000,
    "percentage": 0.44
  },
  {
    "id": "41",
    "rank": 41,
    "country": "Peru‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Peru",
    "population": 31151643,
    "date": 1435708800000,
    "percentage": 0.43
  },
  {
    "id": "42",
    "rank": 42,
    "country": "Venezuela‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Venezuela",
    "population": 30620404,
    "date": 1435708800000,
    "percentage": 0.42
  },
  {
    "id": "43",
    "rank": 43,
    "country": "Malaysia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Malaysia",
    "population": 30509900,
    "date": 1425427200000,
    "percentage": 0.422
  },
  {
    "id": "44",
    "rank": 44,
    "country": "Uzbekistan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Uzbekistan",
    "population": 30492800,
    "date": 1388534400000,
    "percentage": 0.42
  },
  {
    "id": "45",
    "rank": 45,
    "country": "Nepal‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Nepal",
    "population": 28037904,
    "date": 1435708800000,
    "percentage": 0.39
  },
  {
    "id": "46",
    "rank": 46,
    "country": "Ghana‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Ghana",
    "population": 27043093,
    "date": 1404172800000,
    "percentage": 0.37
  },
  {
    "id": "47",
    "rank": 47,
    "country": "Afghanistan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Afghanistan",
    "population": 26556800,
    "date": 1404172800000,
    "percentage": 0.37
  },
  {
    "id": "48",
    "rank": 48,
    "country": "Yemen‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Yemen",
    "population": 25956000,
    "date": 1404172800000,
    "percentage": 0.36
  },
  {
    "id": "49",
    "rank": 49,
    "country": "Mozambique‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Mozambique",
    "population": 25727911,
    "date": 1435708800000,
    "percentage": 0.36
  },
  {
    "id": "50",
    "rank": 50,
    "country": "North Korea‪",
    "countryArticle": "http://en.wikipedia.org/wiki/North%20Korea",
    "population": 25155000,
    "date": 1435708800000,
    "percentage": 0.35
  },
  {
    "id": "51",
    "rank": 51,
    "country": "Angola‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Angola",
    "population": 24383301,
    "date": 1400198400000,
    "percentage": 0.34
  },
  {
    "id": "52",
    "rank": 52,
    "country": "Australia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Australia",
    "population": 23764300,
    "date": 1425427200000,
    "percentage": 0.329
  },
  {
    "id": "53",
    "rank": 53,
    "country": "Taiwan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Taiwan",
    "population": 23440278,
    "date": 1422662400000,
    "percentage": 0.32
  },
  {
    "id": "54",
    "rank": 54,
    "country": "Syria‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Syria",
    "population": 23084325,
    "date": 1425427200000,
    "percentage": 0.32
  },
  {
    "id": "55",
    "rank": 55,
    "country": "Ivory Coast‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Ivory%20Coast",
    "population": 22671331,
    "date": 1400112000000,
    "percentage": 0.31
  },
  {
    "id": "56",
    "rank": 56,
    "country": "Madagascar‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Madagascar",
    "population": 21842167,
    "date": 1372636800000,
    "percentage": 0.3
  },
  {
    "id": "57",
    "rank": 57,
    "country": "Cameroon‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Cameroon",
    "population": 21143237,
    "date": 1372636800000,
    "percentage": 0.28
  },
  {
    "id": "58",
    "rank": 58,
    "country": "Sri Lanka‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Sri%20Lanka",
    "population": 20359439,
    "date": 1332115200000,
    "percentage": 0.28
  },
  {
    "id": "59",
    "rank": 59,
    "country": "Romania‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Romania",
    "population": 19942642,
    "date": 1388534400000,
    "percentage": 0.28
  },
  {
    "id": "60",
    "rank": 60,
    "country": "Niger‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Niger",
    "population": 19268000,
    "date": 1435708800000,
    "percentage": 0.27
  },
  {
    "id": "61",
    "rank": 61,
    "country": "Burkina Faso‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Burkina%20Faso",
    "population": 18450494,
    "date": 1435708800000,
    "percentage": 0.26
  },
  {
    "id": "62",
    "rank": 62,
    "country": "Chile‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Chile",
    "population": 18006407,
    "date": 1435708800000,
    "percentage": 0.25
  },
  {
    "id": "63",
    "rank": 63,
    "country": "Kazakhstan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Kazakhstan",
    "population": 17417500,
    "date": 1420070400000,
    "percentage": 0.24
  },
  {
    "id": "64",
    "rank": 64,
    "country": "Netherlands‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Netherlands",
    "population": 16892200,
    "date": 1425427200000,
    "percentage": 0.234
  },
  {
    "id": "65",
    "rank": 65,
    "country": "Malawi‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Malawi",
    "population": 16310431,
    "date": 1435708800000,
    "percentage": 0.23
  },
  {
    "id": "66",
    "rank": 66,
    "country": "Mali‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Mali",
    "population": 16259000,
    "date": 1435708800000,
    "percentage": 0.22
  },
  {
    "id": "67",
    "rank": 67,
    "country": "Ecuador‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Ecuador",
    "population": 15943800,
    "date": 1425427200000,
    "percentage": 0.22
  },
  {
    "id": "68",
    "rank": 68,
    "country": "Guatemala‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Guatemala",
    "population": 15806675,
    "date": 1404172800000,
    "percentage": 0.22
  },
  {
    "id": "69",
    "rank": 69,
    "country": "Zambia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Zambia",
    "population": 15473905,
    "date": 1435708800000,
    "percentage": 0.21
  },
  {
    "id": "70",
    "rank": 70,
    "country": "Cambodia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Cambodia",
    "population": 15405157,
    "date": 1435708800000,
    "percentage": 0.21
  },
  {
    "id": "71",
    "rank": 71,
    "country": "Chad‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Chad",
    "population": 13606000,
    "date": 1435708800000,
    "percentage": 0.19
  },
  {
    "id": "72",
    "rank": 72,
    "country": "Senegal‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Senegal",
    "population": 13508715,
    "date": 1384819200000,
    "percentage": 0.19
  },
  {
    "id": "73",
    "rank": 73,
    "country": "Zimbabwe‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Zimbabwe",
    "population": 13061239,
    "date": 1345161600000,
    "percentage": 0.18
  },
  {
    "id": "74",
    "rank": 74,
    "country": "South Sudan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/South%20Sudan",
    "population": 11892934,
    "date": 1435708800000,
    "percentage": 0.16
  },
  {
    "id": "75",
    "rank": 75,
    "country": "Bolivia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Bolivia",
    "population": 11410651,
    "date": 1435708800000,
    "percentage": 0.16
  },
  {
    "id": "76",
    "rank": 76,
    "country": "Belgium‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Belgium",
    "population": 11237160,
    "date": 1420070400000,
    "percentage": 0.16
  },
  {
    "id": "77",
    "rank": 77,
    "country": "Cuba‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Cuba",
    "population": 11210064,
    "date": 1388448000000,
    "percentage": 0.16
  },
  {
    "id": "78",
    "rank": 78,
    "country": "Somalia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Somalia",
    "population": 11123000,
    "date": 1435708800000,
    "percentage": 0.15
  },
  {
    "id": "79",
    "rank": 79,
    "country": "Rwanda‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Rwanda",
    "population": 10996891,
    "date": 1404172800000,
    "percentage": 0.15
  },
  {
    "id": "80",
    "rank": 80,
    "country": "Greece‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Greece",
    "population": 10992589,
    "date": 1388534400000,
    "percentage": 0.15
  },
  {
    "id": "81",
    "rank": 81,
    "country": "Tunisia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Tunisia",
    "population": 10982754,
    "date": 1398211200000,
    "percentage": 0.15
  },
  {
    "id": "82",
    "rank": 82,
    "country": "Haiti‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Haiti",
    "population": 10911819,
    "date": 1435708800000,
    "percentage": 0.15
  },
  {
    "id": "83",
    "rank": 83,
    "country": "Guinea‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Guinea",
    "population": 10628972,
    "date": 1396396800000,
    "percentage": 0.15
  },
  {
    "id": "84",
    "rank": 84,
    "country": "Czech Republic‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Czech%20Republic",
    "population": 10528477,
    "date": 1412035200000,
    "percentage": 0.15
  },
  {
    "id": "85",
    "rank": 85,
    "country": "Portugal‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Portugal",
    "population": 10477800,
    "date": 1388448000000,
    "percentage": 0.15
  },
  {
    "id": "86",
    "rank": 86,
    "country": "Dominican Republic‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Dominican%20Republic",
    "population": 10378267,
    "date": 1404172800000,
    "percentage": 0.14
  },
  {
    "id": "87",
    "rank": 87,
    "country": "Benin‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Benin",
    "population": 10315244,
    "date": 1435708800000,
    "percentage": 0.14
  },
  {
    "id": "88",
    "rank": 88,
    "country": "Hungary‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Hungary",
    "population": 9849000,
    "date": 1419984000000,
    "percentage": 0.14
  },
  {
    "id": "89",
    "rank": 89,
    "country": "Burundi‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Burundi",
    "population": 9823827,
    "date": 1435708800000,
    "percentage": 0.14
  },
  {
    "id": "90",
    "rank": 90,
    "country": "Sweden‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Sweden",
    "population": 9747355,
    "date": 1419984000000,
    "percentage": 0.13
  },
  {
    "id": "91",
    "rank": 91,
    "country": "Azerbaijan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Azerbaijan",
    "population": 9593000,
    "date": 1420070400000,
    "percentage": 0.13
  },
  {
    "id": "92",
    "rank": 92,
    "country": "United Arab Emirates‪",
    "countryArticle": "http://en.wikipedia.org/wiki/United%20Arab%20Emirates",
    "population": 9577000,
    "date": 1435708800000,
    "percentage": 0.13
  },
  {
    "id": "93",
    "rank": 93,
    "country": "Belarus‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Belarus",
    "population": 9481000,
    "date": 1420070400000,
    "percentage": 0.13
  },
  {
    "id": "94",
    "rank": 94,
    "country": "Honduras‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Honduras",
    "population": 8725111,
    "date": 1404172800000,
    "percentage": 0.12
  },
  {
    "id": "95",
    "rank": 95,
    "country": "Austria‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Austria",
    "population": 8579747,
    "date": 1420070400000,
    "percentage": 0.12
  },
  {
    "id": "96",
    "rank": 96,
    "country": "Tajikistan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Tajikistan",
    "population": 8354000,
    "date": 1420070400000,
    "percentage": 0.12
  },
  {
    "id": "97",
    "rank": 97,
    "country": "Israel‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Israel",
    "population": 8309400,
    "date": 1422662400000,
    "percentage": 0.11
  },
  {
    "id": "98",
    "rank": 98,
    "country": "Switzerland‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Switzerland",
    "population": 8211700,
    "date": 1412035200000,
    "percentage": 0.11
  },
  {
    "id": "99",
    "rank": 99,
    "country": "Papua New Guinea‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Papua%20New%20Guinea",
    "population": 7398500,
    "date": 1372636800000,
    "percentage": 0.102
  },
  {
    "id": "100",
    "rank": 100,
    "country": "Hong Kong (China)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Hong%20Kong%20(China)",
    "population": 7264100,
    "date": 1419984000000,
    "percentage": 0.1
  },
  {
    "id": "101",
    "rank": 101,
    "country": "Bulgaria‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Bulgaria",
    "population": 7245677,
    "date": 1388448000000,
    "percentage": 0.1
  },
  {
    "id": "102",
    "rank": 102,
    "country": "Togo‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Togo",
    "population": 7171000,
    "date": 1435708800000,
    "percentage": 0.099
  },
  {
    "id": "103",
    "rank": 103,
    "country": "Serbia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Serbia",
    "population": 7146759,
    "date": 1388534400000,
    "percentage": 0.099
  },
  {
    "id": "104",
    "rank": 104,
    "country": "Paraguay‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Paraguay",
    "population": 6893727,
    "date": 1388534400000,
    "percentage": 0.095
  },
  {
    "id": "105",
    "rank": 105,
    "country": "Laos‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Laos",
    "population": 6802000,
    "date": 1435708800000,
    "percentage": 0.094
  },
  {
    "id": "106",
    "rank": 106,
    "country": "Eritrea‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Eritrea",
    "population": 6738000,
    "date": 1435708800000,
    "percentage": 0.093
  },
  {
    "id": "107",
    "rank": 107,
    "country": "Jordan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Jordan",
    "population": 6697530,
    "date": 1425427200000,
    "percentage": 0.0927
  },
  {
    "id": "108",
    "rank": 108,
    "country": "El Salvador‪",
    "countryArticle": "http://en.wikipedia.org/wiki/El%20Salvador",
    "population": 6401240,
    "date": 1388534400000,
    "percentage": 0.089
  },
  {
    "id": "109",
    "rank": 109,
    "country": "Sierra Leone‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Sierra%20Leone",
    "population": 6319000,
    "date": 1435708800000,
    "percentage": 0.087
  },
  {
    "id": "110",
    "rank": 110,
    "country": "Libya‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Libya",
    "population": 6317000,
    "date": 1435708800000,
    "percentage": 0.087
  },
  {
    "id": "111",
    "rank": 111,
    "country": "Nicaragua‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Nicaragua",
    "population": 6134270,
    "date": 1356998400000,
    "percentage": 0.085
  },
  {
    "id": "112",
    "rank": 112,
    "country": "Kyrgyzstan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Kyrgyzstan",
    "population": 5895100,
    "date": 1420070400000,
    "percentage": 0.082
  },
  {
    "id": "113",
    "rank": 113,
    "country": "Denmark‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Denmark",
    "population": 5659715,
    "date": 1420070400000,
    "percentage": 0.078
  },
  {
    "id": "114",
    "rank": 114,
    "country": "Finland‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Finland",
    "population": 5475526,
    "date": 1422748800000,
    "percentage": 0.076
  },
  {
    "id": "115",
    "rank": 115,
    "country": "Singapore‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Singapore",
    "population": 5469700,
    "date": 1404172800000,
    "percentage": 0.076
  },
  {
    "id": "116",
    "rank": 116,
    "country": "Slovakia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Slovakia",
    "population": 5421034,
    "date": 1412035200000,
    "percentage": 0.075
  },
  {
    "id": "117",
    "rank": 117,
    "country": "Norway‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Norway",
    "population": 5165802,
    "date": 1420070400000,
    "percentage": 0.071
  },
  {
    "id": "118",
    "rank": 118,
    "country": "Central African Republic‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Central%20African%20Republic",
    "population": 4803000,
    "date": 1435708800000,
    "percentage": 0.066
  },
  {
    "id": "119",
    "rank": 119,
    "country": "Costa Rica‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Costa%20Rica",
    "population": 4773130,
    "date": 1404086400000,
    "percentage": 0.066
  },
  {
    "id": "120",
    "rank": 120,
    "country": "Turkmenistan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Turkmenistan",
    "population": 4751120,
    "date": 1356566400000,
    "percentage": 0.066
  },
  {
    "id": "121",
    "rank": 121,
    "country": "Republic of the Congo‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Republic%20of%20the%20Congo",
    "population": 4671000,
    "date": 1435708800000,
    "percentage": 0.065
  },
  {
    "id": "122",
    "rank": 122,
    "country": "Ireland‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Ireland",
    "population": 4609600,
    "date": 1396310400000,
    "percentage": 0.064
  },
  {
    "id": "123",
    "rank": 123,
    "country": "New Zealand‪",
    "countryArticle": "http://en.wikipedia.org/wiki/New%20Zealand",
    "population": 4565770,
    "date": 1425427200000,
    "percentage": 0.0632
  },
  {
    "id": "124",
    "rank": 124,
    "country": "Palestine‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Palestine",
    "population": 4550368,
    "date": 1404172800000,
    "percentage": 0.063
  },
  {
    "id": "125",
    "rank": 125,
    "country": "Liberia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Liberia",
    "population": 4503000,
    "date": 1435708800000,
    "percentage": 0.062
  },
  {
    "id": "126",
    "rank": 126,
    "country": "Georgia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Georgia",
    "population": 4490500,
    "date": 1388534400000,
    "percentage": 0.062
  },
  {
    "id": "127",
    "rank": 127,
    "country": "Croatia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Croatia",
    "population": 4267558,
    "date": 1341100800000,
    "percentage": 0.059
  },
  {
    "id": "128",
    "rank": 128,
    "country": "Oman‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Oman",
    "population": 4130593,
    "date": 1424217600000,
    "percentage": 0.057
  },
  {
    "id": "129",
    "rank": 129,
    "country": "Lebanon‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Lebanon",
    "population": 4104000,
    "date": 1341100800000,
    "percentage": 0.057
  },
  {
    "id": "130",
    "rank": 130,
    "country": "Bosnia and Herzegovina‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Bosnia%20and%20Herzegovina",
    "population": 3791622,
    "date": 1381795200000,
    "percentage": 0.052
  },
  {
    "id": "131",
    "rank": 131,
    "country": "Panama‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Panama",
    "population": 3713312,
    "date": 1404172800000,
    "percentage": 0.05
  },
  {
    "id": "132",
    "rank": 132,
    "country": "Moldova‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Moldova",
    "population": 3557600,
    "date": 1388534400000,
    "percentage": 0.049
  },
  {
    "id": "133",
    "rank": 133,
    "country": "Puerto Rico (U.S.)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Puerto%20Rico%20(U.S.)",
    "population": 3548397,
    "date": 1404172800000,
    "percentage": 0.049
  },
  {
    "id": "134",
    "rank": 134,
    "country": "Mauritania‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Mauritania",
    "population": 3545620,
    "date": 1404172800000,
    "percentage": 0.049
  },
  {
    "id": "135",
    "rank": 135,
    "country": "Uruguay‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Uruguay",
    "population": 3404189,
    "date": 1404086400000,
    "percentage": 0.047
  },
  {
    "id": "136",
    "rank": 136,
    "country": "Kuwait‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Kuwait",
    "population": 3268431,
    "date": 1341100800000,
    "percentage": 0.045
  },
  {
    "id": "137",
    "rank": 137,
    "country": "Armenia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Armenia",
    "population": 3013900,
    "date": 1412035200000,
    "percentage": 0.042
  },
  {
    "id": "138",
    "rank": 138,
    "country": "Mongolia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Mongolia",
    "population": 3000000,
    "date": 1422057600000,
    "percentage": 0.042
  },
  {
    "id": "139",
    "rank": 139,
    "country": "Lithuania‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Lithuania",
    "population": 2919306,
    "date": 1391212800000,
    "percentage": 0.04
  },
  {
    "id": "140",
    "rank": 140,
    "country": "Albania‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Albania",
    "population": 2893005,
    "date": 1420070400000,
    "percentage": 0.04
  },
  {
    "id": "141",
    "rank": 141,
    "country": "Jamaica‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Jamaica",
    "population": 2717991,
    "date": 1388448000000,
    "percentage": 0.038
  },
  {
    "id": "142",
    "rank": 142,
    "country": "Qatar‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Qatar",
    "population": 2224583,
    "date": 1422662400000,
    "percentage": 0.031
  },
  {
    "id": "143",
    "rank": 143,
    "country": "Lesotho‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Lesotho",
    "population": 2120000,
    "date": 1435708800000,
    "percentage": 0.029
  },
  {
    "id": "144",
    "rank": 144,
    "country": "Namibia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Namibia",
    "population": 2113077,
    "date": 1314489600000,
    "percentage": 0.029
  },
  {
    "id": "145",
    "rank": 145,
    "country": "Macedonia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Macedonia",
    "population": 2065769,
    "date": 1388448000000,
    "percentage": 0.029
  },
  {
    "id": "146",
    "rank": 146,
    "country": "Slovenia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Slovenia",
    "population": 2065835,
    "date": 1425427200000,
    "percentage": 0.029
  },
  {
    "id": "147",
    "rank": 147,
    "country": "Botswana‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Botswana",
    "population": 2024904,
    "date": 1313971200000,
    "percentage": 0.028
  },
  {
    "id": "148",
    "rank": 148,
    "country": "Latvia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Latvia",
    "population": 1986700,
    "date": 1422748800000,
    "percentage": 0.027
  },
  {
    "id": "149",
    "rank": 149,
    "country": "The Gambia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/The%20Gambia",
    "population": 1882450,
    "date": 1365984000000,
    "percentage": 0.026
  },
  {
    "id": "150",
    "rank": 150,
    "country": "Kosovo‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Kosovo",
    "population": 1816891,
    "date": 1388534400000,
    "percentage": 0.025
  },
  {
    "id": "151",
    "rank": 151,
    "country": "Guinea-Bissau‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Guinea-Bissau",
    "population": 1788000,
    "date": 1435708800000,
    "percentage": 0.025
  },
  {
    "id": "152",
    "rank": 152,
    "country": "Gabon‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Gabon",
    "population": 1751000,
    "date": 1435708800000,
    "percentage": 0.024
  },
  {
    "id": "153",
    "rank": 153,
    "country": "Equatorial Guinea‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Equatorial%20Guinea",
    "population": 1430000,
    "date": 1372636800000,
    "percentage": 0.02
  },
  {
    "id": "154",
    "rank": 154,
    "country": "Trinidad and Tobago‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Trinidad%20and%20Tobago",
    "population": 1328019,
    "date": 1294531200000,
    "percentage": 0.018
  },
  {
    "id": "155",
    "rank": 155,
    "country": "Bahrain‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Bahrain",
    "population": 1316500,
    "date": 1404172800000,
    "percentage": 0.018
  },
  {
    "id": "156",
    "rank": 156,
    "country": "Estonia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Estonia",
    "population": 1312252,
    "date": 1420070400000,
    "percentage": 0.018
  },
  {
    "id": "157",
    "rank": 157,
    "country": "Mauritius‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Mauritius",
    "population": 1261208,
    "date": 1404172800000,
    "percentage": 0.017
  },
  {
    "id": "158",
    "rank": 158,
    "country": "East Timor‪",
    "countryArticle": "http://en.wikipedia.org/wiki/East%20Timor",
    "population": 1212107,
    "date": 1404172800000,
    "percentage": 0.017
  },
  {
    "id": "159",
    "rank": 159,
    "country": "Swaziland‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Swaziland",
    "population": 1106189,
    "date": 1404172800000,
    "percentage": 0.015
  },
  {
    "id": "160",
    "rank": 160,
    "country": "Djibouti‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Djibouti",
    "population": 900000,
    "date": 1435708800000,
    "percentage": 0.012
  },
  {
    "id": "161",
    "rank": 161,
    "country": "Fiji‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Fiji",
    "population": 859178,
    "date": 1372636800000,
    "percentage": 0.0119
  },
  {
    "id": "162",
    "rank": 162,
    "country": "Cyprus‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Cyprus",
    "population": 858000,
    "date": 1388534400000,
    "percentage": 0.012
  },
  {
    "id": "163",
    "rank": 163,
    "country": "Réunion (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/R%C3%A9union%20(France)",
    "population": 844994,
    "date": 1388534400000,
    "percentage": 0.012
  },
  {
    "id": "164",
    "rank": 164,
    "country": "Comoros‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Comoros",
    "population": 763952,
    "date": 1404172800000,
    "percentage": 0.011
  },
  {
    "id": "165",
    "rank": 165,
    "country": "Bhutan‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Bhutan",
    "population": 757870,
    "date": 1425427200000,
    "percentage": 0.0105
  },
  {
    "id": "166",
    "rank": 166,
    "country": "Guyana‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Guyana",
    "population": 746900,
    "date": 1372636800000,
    "percentage": 0.01
  },
  {
    "id": "167",
    "rank": 167,
    "country": "Macau (China)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Macau%20(China)",
    "population": 631000,
    "date": 1412035200000,
    "percentage": 0.0087
  },
  {
    "id": "168",
    "rank": 168,
    "country": "Montenegro‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Montenegro",
    "population": 620029,
    "date": 1301616000000,
    "percentage": 0.0086
  },
  {
    "id": "169",
    "rank": 169,
    "country": "Western Sahara‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Western%20Sahara",
    "population": 604000,
    "date": 1435708800000,
    "percentage": 0.0084
  },
  {
    "id": "170",
    "rank": 170,
    "country": "Solomon Islands‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Solomon%20Islands",
    "population": 581344,
    "date": 1372636800000,
    "percentage": 0.008
  },
  {
    "id": "171",
    "rank": 171,
    "country": "Luxembourg‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Luxembourg",
    "population": 549700,
    "date": 1388448000000,
    "percentage": 0.0074
  },
  {
    "id": "172",
    "rank": 172,
    "country": "Suriname‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Suriname",
    "population": 534189,
    "date": 1344816000000,
    "percentage": 0.0074
  },
  {
    "id": "173",
    "rank": 173,
    "country": "Cape Verde‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Cape%20Verde",
    "population": 518467,
    "date": 1404172800000,
    "percentage": 0.0072
  },
  {
    "id": "174",
    "rank": 174,
    "country": "Transnistria‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Transnistria",
    "population": 505153,
    "date": 1388534400000,
    "percentage": 0.007
  },
  {
    "id": "175",
    "rank": 175,
    "country": "Malta‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Malta",
    "population": 425384,
    "date": 1388448000000,
    "percentage": 0.0059
  },
  {
    "id": "176",
    "rank": 176,
    "country": "Guadeloupe (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Guadeloupe%20(France)",
    "population": 405739,
    "date": 1356998400000,
    "percentage": 0.0056
  },
  {
    "id": "177",
    "rank": 177,
    "country": "Brunei‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Brunei",
    "population": 393372,
    "date": 1308528000000,
    "percentage": 0.0054
  },
  {
    "id": "178",
    "rank": 178,
    "country": "Martinique (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Martinique%20(France)",
    "population": 386486,
    "date": 1356998400000,
    "percentage": 0.0053
  },
  {
    "id": "179",
    "rank": 179,
    "country": "The Bahamas‪",
    "countryArticle": "http://en.wikipedia.org/wiki/The%20Bahamas",
    "population": 368390,
    "date": 1372636800000,
    "percentage": 0.0051
  },
  {
    "id": "180",
    "rank": 180,
    "country": "Belize‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Belize",
    "population": 349728,
    "date": 1372636800000,
    "percentage": 0.0048
  },
  {
    "id": "181",
    "rank": 181,
    "country": "Maldives‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Maldives",
    "population": 341256,
    "date": 1411171200000,
    "percentage": 0.0047
  },
  {
    "id": "182",
    "rank": 182,
    "country": "Iceland‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Iceland",
    "population": 329040,
    "date": 1419984000000,
    "percentage": 0.0046
  },
  {
    "id": "183",
    "rank": 183,
    "country": "Northern Cyprus‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Northern%20Cyprus",
    "population": 294906,
    "date": 1146355200000,
    "percentage": 0.004
  },
  {
    "id": "184",
    "rank": 184,
    "country": "Barbados‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Barbados",
    "population": 285000,
    "date": 1372636800000,
    "percentage": 0.0039
  },
  {
    "id": "185",
    "rank": 185,
    "country": "New Caledonia (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/New%20Caledonia%20(France)",
    "population": 268767,
    "date": 1409011200000,
    "percentage": 0.0037
  },
  {
    "id": "186",
    "rank": 186,
    "country": "French Polynesia (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/French%20Polynesia%20(France)",
    "population": 268270,
    "date": 1345593600000,
    "percentage": 0.0037
  },
  {
    "id": "187",
    "rank": 187,
    "country": "Vanuatu‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Vanuatu",
    "population": 264652,
    "date": 1372636800000,
    "percentage": 0.0037
  },
  {
    "id": "188",
    "rank": 188,
    "country": "Abkhazia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Abkhazia",
    "population": 240705,
    "date": 1293840000000,
    "percentage": 0.0033
  },
  {
    "id": "189",
    "rank": 189,
    "country": "French Guiana (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/French%20Guiana%20(France)",
    "population": 239648,
    "date": 1325376000000,
    "percentage": 0.0033
  },
  {
    "id": "190",
    "rank": 190,
    "country": "Mayotte (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Mayotte%20(France)",
    "population": 212645,
    "date": 1345507200000,
    "percentage": 0.0029
  },
  {
    "id": "191",
    "rank": 191,
    "country": "Samoa‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Samoa",
    "population": 187820,
    "date": 1320624000000,
    "percentage": 0.0026
  },
  {
    "id": "192",
    "rank": 192,
    "country": "São Tomé and Príncipe‪",
    "countryArticle": "http://en.wikipedia.org/wiki/S%C3%A3o%20Tom%C3%A9%20and%20Pr%C3%ADncipe",
    "population": 187356,
    "date": 1336867200000,
    "percentage": 0.0026
  },
  {
    "id": "193",
    "rank": 193,
    "country": "Saint Lucia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Saint%20Lucia",
    "population": 185000,
    "date": 1435708800000,
    "percentage": 0.0026
  },
  {
    "id": "194",
    "rank": 194,
    "country": "Guam (U.S.)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Guam%20(U.S.)",
    "population": 159358,
    "date": 1270080000000,
    "percentage": 0.0022
  },
  {
    "id": "195",
    "rank": 195,
    "country": "Curaçao (Netherlands)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Cura%C3%A7ao%20(Netherlands)",
    "population": 154843,
    "date": 1388534400000,
    "percentage": 0.0021
  },
  {
    "id": "196",
    "rank": 196,
    "country": "Saint Vincent and the Grenadines‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Saint%20Vincent%20and%20the%20Grenadines",
    "population": 109000,
    "date": 1435708800000,
    "percentage": 0.0015
  },
  {
    "id": "197",
    "rank": 197,
    "country": "Aruba (Netherlands)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Aruba%20(Netherlands)",
    "population": 107394,
    "date": 1414713600000,
    "percentage": 0.0015
  },
  {
    "id": "198",
    "rank": 198,
    "country": "Kiribati‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Kiribati",
    "population": 106461,
    "date": 1372636800000,
    "percentage": 0.0015
  },
  {
    "id": "199",
    "rank": 199,
    "country": "United States Virgin Islands (U.S.)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/United%20States%20Virgin%20Islands%20(U.S.)",
    "population": 106405,
    "date": 1270080000000,
    "percentage": 0.0015
  },
  {
    "id": "200",
    "rank": 200,
    "country": "Grenada‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Grenada",
    "population": 103328,
    "date": 1305158400000,
    "percentage": 0.0014
  },
  {
    "id": "201",
    "rank": 201,
    "country": "Tonga‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Tonga",
    "population": 103252,
    "date": 1322611200000,
    "percentage": 0.0014
  },
  {
    "id": "202",
    "rank": 202,
    "country": "Federated States of Micronesia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Federated%20States%20of%20Micronesia",
    "population": 101351,
    "date": 1372636800000,
    "percentage": 0.0014
  },
  {
    "id": "203",
    "rank": 203,
    "country": "Jersey (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Jersey%20(UK)",
    "population": 99000,
    "date": 1356912000000,
    "percentage": 0.0014
  },
  {
    "id": "204",
    "rank": 204,
    "country": "Seychelles‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Seychelles",
    "population": 89949,
    "date": 1372636800000,
    "percentage": 0.0012
  },
  {
    "id": "205",
    "rank": 205,
    "country": "Antigua and Barbuda‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Antigua%20and%20Barbuda",
    "population": 86295,
    "date": 1306454400000,
    "percentage": 0.0012
  },
  {
    "id": "206",
    "rank": 206,
    "country": "Isle of Man (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Isle%20of%20Man%20(UK)",
    "population": 84497,
    "date": 1301184000000,
    "percentage": 0.0012
  },
  {
    "id": "207",
    "rank": 207,
    "country": "Andorra‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Andorra",
    "population": 76949,
    "date": 1404172800000,
    "percentage": 0.0011
  },
  {
    "id": "208",
    "rank": 208,
    "country": "Dominica‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Dominica",
    "population": 71293,
    "date": 1305331200000,
    "percentage": 0.00099
  },
  {
    "id": "209",
    "rank": 209,
    "country": "Bermuda (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Bermuda%20(UK)",
    "population": 64237,
    "date": 1274313600000,
    "percentage": 0.00089
  },
  {
    "id": "210",
    "rank": 210,
    "country": "Guernsey (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Guernsey%20(UK)",
    "population": 63085,
    "date": 1333152000000,
    "percentage": 0.00087
  },
  {
    "id": "211",
    "rank": 211,
    "country": "Marshall Islands‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Marshall%20Islands",
    "population": 56086,
    "date": 1372636800000,
    "percentage": 0.00078
  },
  {
    "id": "212",
    "rank": 212,
    "country": "Greenland (Denmark)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Greenland%20(Denmark)",
    "population": 55984,
    "date": 1420070400000,
    "percentage": 0.00077
  },
  {
    "id": "213",
    "rank": 213,
    "country": "Cayman Islands (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Cayman%20Islands%20(UK)",
    "population": 55691,
    "date": 1356998400000,
    "percentage": 0.00077
  },
  {
    "id": "214",
    "rank": 214,
    "country": "American Samoa (U.S.)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/American%20Samoa%20(U.S.)",
    "population": 55519,
    "date": 1270080000000,
    "percentage": 0.00077
  },
  {
    "id": "215",
    "rank": 215,
    "country": "Saint Kitts and Nevis‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Saint%20Kitts%20and%20Nevis",
    "population": 55000,
    "date": 1435708800000,
    "percentage": 0.00076
  },
  {
    "id": "216",
    "rank": 216,
    "country": "Northern Mariana Islands (U.S.)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Northern%20Mariana%20Islands%20(U.S.)",
    "population": 53883,
    "date": 1270080000000,
    "percentage": 0.00075
  },
  {
    "id": "217",
    "rank": 217,
    "country": "South Ossetia‪",
    "countryArticle": "http://en.wikipedia.org/wiki/South%20Ossetia",
    "population": 51547,
    "date": 1356998400000,
    "percentage": 0.00071
  },
  {
    "id": "218",
    "rank": 218,
    "country": "Faroe Islands (Denmark)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Faroe%20Islands%20(Denmark)",
    "population": 48679,
    "date": 1417392000000,
    "percentage": 0.00067
  },
  {
    "id": "219",
    "rank": 219,
    "country": "Sint Maarten (Netherlands)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Sint%20Maarten%20(Netherlands)",
    "population": 37429,
    "date": 1262304000000,
    "percentage": 0.00052
  },
  {
    "id": "220",
    "rank": 220,
    "country": "Liechtenstein‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Liechtenstein",
    "population": 37132,
    "date": 1388448000000,
    "percentage": 0.00051
  },
  {
    "id": "221",
    "rank": 221,
    "country": "Monaco‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Monaco",
    "population": 36950,
    "date": 1388448000000,
    "percentage": 0.00051
  },
  {
    "id": "222",
    "rank": 222,
    "country": "Collectivity of Saint Martin (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Collectivity%20of%20Saint%20Martin%20(France)",
    "population": 35742,
    "date": 1325376000000,
    "percentage": 0.00049
  },
  {
    "id": "223",
    "rank": 223,
    "country": "San Marino‪",
    "countryArticle": "http://en.wikipedia.org/wiki/San%20Marino",
    "population": 32789,
    "date": 1419984000000,
    "percentage": 0.00045
  },
  {
    "id": "224",
    "rank": 224,
    "country": "Turks and Caicos Islands (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Turks%20and%20Caicos%20Islands%20(UK)",
    "population": 31458,
    "date": 1327449600000,
    "percentage": 0.00044
  },
  {
    "id": "225",
    "rank": 225,
    "country": "Gibraltar (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Gibraltar%20(UK)",
    "population": 30001,
    "date": 1356912000000,
    "percentage": 0.00042
  },
  {
    "id": "226",
    "rank": 226,
    "country": "Åland Islands (Finland)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/%C3%85land%20Islands%20(Finland)",
    "population": 28875,
    "date": 1412035200000,
    "percentage": 0.0004
  },
  {
    "id": "227",
    "rank": 227,
    "country": "British Virgin Islands (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/British%20Virgin%20Islands%20(UK)",
    "population": 28054,
    "date": 1278892800000,
    "percentage": 0.00039
  },
  {
    "id": "228",
    "rank": 228,
    "country": "Caribbean Netherlands (Netherlands)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Caribbean%20Netherlands%20(Netherlands)",
    "population": 23296,
    "date": 1356998400000,
    "percentage": 0.00032
  },
  {
    "id": "229",
    "rank": 229,
    "country": "Palau‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Palau",
    "population": 20901,
    "date": 1372636800000,
    "percentage": 0.00029
  },
  {
    "id": "230",
    "rank": 230,
    "country": "Cook Islands (New Zealand)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Cook%20Islands%20(New%20Zealand)",
    "population": 14974,
    "date": 1322697600000,
    "percentage": 0.00021
  },
  {
    "id": "231",
    "rank": 231,
    "country": "Anguilla (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Anguilla%20(UK)",
    "population": 13452,
    "date": 1305072000000,
    "percentage": 0.00019
  },
  {
    "id": "232",
    "rank": 232,
    "country": "Wallis and Futuna (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Wallis%20and%20Futuna%20(France)",
    "population": 13135,
    "date": 1372636800000,
    "percentage": 0.00018
  },
  {
    "id": "233",
    "rank": 233,
    "country": "Tuvalu‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Tuvalu",
    "population": 11323,
    "date": 1372636800000,
    "percentage": 0.00016
  },
  {
    "id": "234",
    "rank": 234,
    "country": "Nauru‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Nauru",
    "population": 10084,
    "date": 1319932800000,
    "percentage": 0.00014
  },
  {
    "id": "235",
    "rank": 235,
    "country": "Saint Barthélemy (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Saint%20Barth%C3%A9lemy%20(France)",
    "population": 9131,
    "date": 1325376000000,
    "percentage": 0.00013
  },
  {
    "id": "236",
    "rank": 236,
    "country": "Saint Pierre and Miquelon (France)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Saint%20Pierre%20and%20Miquelon%20(France)",
    "population": 6069,
    "date": 1325376000000,
    "percentage": 0.000084
  },
  {
    "id": "237",
    "rank": 237,
    "country": "Montserrat (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Montserrat%20(UK)",
    "population": 4922,
    "date": 1305158400000,
    "percentage": 0.000068
  },
  {
    "id": "238",
    "rank": 238,
    "country": "Saint Helena, Ascension and Tristan da Cunha (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Saint%20Helena%2C%20Ascension%20and%20Tristan%20da%20Cunha%20(UK)",
    "population": 4000,
    "date": 1435708800000,
    "percentage": 0.000055
  },
  {
    "id": "239",
    "rank": 239,
    "country": "Falkland Islands (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Falkland%20Islands%20(UK)",
    "population": 3000,
    "date": 1435708800000,
    "percentage": 0.000042
  },
  {
    "id": "240",
    "rank": 240,
    "country": "Svalbard and Jan Mayen (Norway)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Svalbard%20and%20Jan%20Mayen%20(Norway)",
    "population": 2562,
    "date": 1404172800000,
    "percentage": 0.000037
  },
  {
    "id": "241",
    "rank": 241,
    "country": "Norfolk Island (Australia)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Norfolk%20Island%20(Australia)",
    "population": 2302,
    "date": 1312848000000,
    "percentage": 0.000032
  },
  {
    "id": "242",
    "rank": 242,
    "country": "Christmas Island (Australia)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Christmas%20Island%20(Australia)",
    "population": 2072,
    "date": 1312848000000,
    "percentage": 0.000029
  },
  {
    "id": "243",
    "rank": 243,
    "country": "Niue (New Zealand)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Niue%20(New%20Zealand)",
    "population": 1613,
    "date": 1315612800000,
    "percentage": 0.000022
  },
  {
    "id": "244",
    "rank": 244,
    "country": "Tokelau (NZ)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Tokelau%20(NZ)",
    "population": 1411,
    "date": 1318896000000,
    "percentage": 0.00002
  },
  {
    "id": "245",
    "rank": 245,
    "country": "Vatican City‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Vatican%20City",
    "population": 839,
    "date": 1341100800000,
    "percentage": 0.000012
  },
  {
    "id": "246",
    "rank": 246,
    "country": "Cocos (Keeling) Islands (Australia)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Cocos%20(Keeling)%20Islands%20(Australia)",
    "population": 550,
    "date": 1312848000000,
    "percentage": 0.0000076
  },
  {
    "id": "247",
    "rank": 247,
    "country": "Pitcairn Islands (UK)‪",
    "countryArticle": "http://en.wikipedia.org/wiki/Pitcairn%20Islands%20(UK)",
    "population": 56,
    "date": 1356998400000,
    "percentage": 7.7e-7
  }
];});



define('ko-grid-examples/data/countries-by-population/data-source-factory',['ko-data-source', 'json!./data.json'], function (dataSource, data) {
    return function () {
        var idSelector = function (e) { return e.id; };

        var observableStateTransitioner = new dataSource.DefaultObservableStateTransitioner(
            'id', 'rank', 'country', 'country', 'countryArticle', 'population', 'date', 'percentage');
        var observables = new dataSource.ObservableEntries(idSelector, observableStateTransitioner);
        var clientSideDataSource = new dataSource.ClientSideDataSource(idSelector, observables);

        clientSideDataSource.addEntries(data.map(function (e) {
            return {
                id: e.id,
                rank: e.rank,
                country: e.country,
                countryArticle: e.countryArticle,
                population: e.population,
                date: new Date(e.date),
                percentage: e.percentage
            };
        }));

        return clientSideDataSource;
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
        "title": "Content Width",
        "filename": "content-width.html"
      },
      {
        "title": "Container Width",
        "filename": "container-width.html"
      },
      {
        "title": "Auto Height",
        "filename": "auto-height.html"
      }
    ]
  },
  {
    "title": "Aggregation",
    "elements": [
      {
        "title": "Aggregation",
        "filename": "aggregation.html"
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
                        document.head.appendChild(e)
                })
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
        }
    };

    ko.bindingHandlers.koGridExampleCranks = {
        init: function (element, valueAccessor) {
            valueAccessor().forEach(function (crank) {
                cranks[crank](element);
            })
        },
        update: function () {}
    };
});

define('ko-grid-examples/bootstrap',['knockout', 'ko-grid-bundle', './data/countries-by-population/data-source-factory', './example'],
    function (ko, bundle, countriesByPopulation) {
        ko.applyBindings({
            countriesByPopulation: countriesByPopulation
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



define('ko-grid-sample-config',['moment', 'ko-grid-bundle'], function (moment) {
    function defaultCellValueRenderer(value) {
        if (value === null)
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

    var configs = window.ko
        ? window.ko.bindingHandlers.grid.config = window.ko.bindingHandlers.grid.config || {}
        : {};

    return configs['ko-grid-sample-config'] = {
        cellValueRenderer: function (column, value) {
            var rendered = defaultCellValueRenderer(value);
            return column.id === 'percentage' ? rendered + ' %' : rendered;
        },
        extensions: {
            aggregate: {},
            links: {},
            sorting: {}
        }
    };
});


require(["ko-grid-sample-config"]);


define('ko-grid', ['ko-grid-bundle'], function (bundle) { return bundle.grid;});
define('ko-data-source', ['ko-grid-bundle'], function (bundle) { return bundle.dataSource;});

require(['ko-grid-examples']);
