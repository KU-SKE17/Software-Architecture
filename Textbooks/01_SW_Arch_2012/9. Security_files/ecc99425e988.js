window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&y[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+C.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+S.join(r+" ")+r).split(" "),c(i,t,n))}var u,l,f,d="2.6.2",m={},p=!0,h=t.documentElement,v="modernizr",g=t.createElement(v),y=g.style,b=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),E="Webkit Moz O ms",C=E.split(" "),S=E.toLowerCase().split(" "),w={svg:"http://www.w3.org/2000/svg"},x={},N=[],D=N.slice,F=function(e,n,r,o){var i,a,c,s,u=t.createElement("div"),l=t.body,f=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),u.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:f).innerHTML+=i,f.appendChild(u),l||(f.style.background="",f.style.overflow="hidden",s=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),a=n(u,e),l?u.parentNode.removeChild(u):(f.parentNode.removeChild(f),h.style.overflow=s),!!a},M=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},j={}.hasOwnProperty;f=o(j,"undefined")||o(j.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return j.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(D.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(D.call(arguments)))};return r}),x.flexbox=function(){return s("flexWrap")},x.flexboxlegacy=function(){return s("boxDirection")},x.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",b.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},x.websqldatabase=function(){return!!e.openDatabase},x.indexedDB=function(){return!!s("indexedDB",e)},x.history=function(){return!!e.history&&!!history.pushState},x.csscolumns=function(){return s("columnCount")},x.csstransforms=function(){return!!s("transform")},x.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},x.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},x.applicationcache=function(){return!!e.applicationCache},x.svg=function(){return!!t.createElementNS&&!!t.createElementNS(w.svg,"svg").createSVGRect},x.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==w.svg};for(var T in x)f(x,T)&&(l=T.toLowerCase(),m[l]=x[T](),N.push((m[l]?"":"no-")+l));return m.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof p&&p&&(h.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),g=u=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[p]];return t||(t={},h++,e[p]=h,v[h]=t),t}function i(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!d.test(e)?r.frag.appendChild(i):i}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function s(e){e||(e=t);var r=o(e);return g.shivCSS&&!u&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),l||c(e,r),e}var u,l,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",h=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=g,s(t)}(this,t),m._version=d,m._prefixes=b,m._domPrefixes=S,m._cssomPrefixes=C,m.mq=M,m.testProp=function(e){return a([e])},m.testAllProps=s,m.testStyles=F,m.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+N.join(" "):""),m}(this,this.document);