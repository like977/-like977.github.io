"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var precacheConfig=[["/404.html","05e5bd0f577f26f8a73d1f8b4300aa72"],["/Gallery/html.html","79cd85135cd09e1bc5fa176af19f185b"],["/Gallery/index.html","40c0478f9f4d21f864e97b7f135bdb86"],["/Gallery/pcbz.html","d147af9ec6ec0311a0c7186e606fa768"],["/Gallery/shipai.html","fb81146a5e48c4e1921e2c452225a9b6"],["/Gallery/wallpaper.html","23b0a9f1fc0ede12703e8a248530e947"],["/Gallery/wzbz.html","50c80e5f6b96fdf9b1920bf224d3400e"],["/about/index.html","c15ecc33d4095b5abef205c490e4ebee"],["/archives/2021/09/index.html","f1e7a71fe56222205ea316be7757f711"],["/archives/2021/index.html","557d26dac24e2deda64cd04bd0c48ff5"],["/archives/2022/04/index.html","ef90d275f2921c6e450259769cc092ec"],["/archives/2022/04/page/2/index.html","4c7dd9336dc77335b32c2155b93fdff1"],["/archives/2022/index.html","80b87d6c133d11b0c4650ecb3061fffd"],["/archives/2022/page/2/index.html","4b4d040c90b749c4a30fe91bfb1a94f5"],["/archives/index.html","177cbf1ffa9ea7a389dc16e4fc78e908"],["/archives/page/2/index.html","8079617a93f9b79fdae0a835c1f6d77d"],["/artitalk/index.html","1801725f80fa81ac992e7d33350a45c1"],["/atom.xml","ba08264dbd00fed834abeb266cc05a92"],["/bb/index.html","21a7d299e432120215e1f449accc7a14"],["/bber/index.html","bc729a8d07233d27bf0b4892af2b964a"],["/blog/0421/index.html","e774c08f82ef358b1547247f5ac5070c"],["/blog/0423/index.html","d6e5e9b7788d6438047e4f02da83145b"],["/blog/CSS笔记/index.html","7cee7d4790e087b62164b8a76fd77c22"],["/blog/Git 一键自动部署到GitHub/index.html","b9a8d1b7135ae0bf46e5c9ef30cb7e8c"],["/blog/Github Actions 实现每天定时刷微信步数/index.html","76f97fe3855e506214f1cde195f9ca71"],["/blog/Hexo 一键部署/index.html","a6e54b022d31dc82b0443837540f6341"],["/blog/Hexo 助手 v1.0 /index.html","2e56007baf712638a3e73845682f2b3b"],["/blog/Hexo 引用本地Html使用自定义页面/index.html","ff00fd7509112485a6fbbed73c4b3180"],["/blog/Picgo+Github+Typora 纵享丝滑！/index.html","f7ee29033108d72d292cda3b4fb8e214"],["/blog/Typora - 进阶/index.html","1ab8ffccc2a5d68521aa7569deb3509f"],["/blog/butterfly 魔改日志/index.html","b77c7ec22fce655fa4b3c02268c384ee"],["/blog/个人说明/index.html","3d01c9132e50883baeb3ba7a85703ce8"],["/blog/初级会计（一）- 实务基础/index.html","bb679a7b0ccf7d6f7b962bb946170ba9"],["/blog/测试/index.html","3aa224c2c759f40c70eb8487401f92ea"],["/blog/腾讯云函数（一）- 实现自动更新微信运动步数！/index.html","f66bae030a5183c911800104c18c9715"],["/blog/腾讯云函数（二） -/index.html","8ea9ed0a915aa56f11ba7d969afb1f97"],["/blog/被忽视的神器 - Microsoft edge/index.html","520d63bf611199bb8eeca62aca4ef9a0"],["/books/index.html","cfa316726958b1add1f38ffe119cae79"],["/categories/Github/index.html","e04ce7f8432223acf8080029496b72ac"],["/categories/Hexo/index.html","4381f975ad7e85355c8f728e9814069d"],["/categories/Python/index.html","660c2afbd042ad4baef8838cd29a94e7"],["/categories/Study/index.html","42e3cd08293812788eed7df7dbebf25d"],["/categories/Typora/Picgo/index.html","6e39c8d43bfd8b1cbfeaa0ccef0bcd68"],["/categories/Typora/index.html","3494f86e4bd65594673db2fd637d5309"],["/categories/index.html","0797d18461ba5181a8d45b431774fc1b"],["/css/1.css","7bbae3777c9b17e3a9feca977b0b5617"],["/css/custom.css","ffbf02397d1a97af1a5f809708b639d8"],["/css/custom/bber.css","9069126e607818eb25672c84f5ae1b34"],["/css/custom/copyright.css","134c496e16ae211d0aaec94645df414e"],["/css/custom/custom.css","0b5e3c9157733b79b02fb780f4399cf4"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/custom/home_bb.css","4f6895c98ccbd1a5659064421bb51bc5"],["/css/custom/twikoo_beautify.css","72b3edf0f8e306082d2ce73b734b2e99"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","325a2a0528ab007908738a0def136112"],["/css/modify.css","571ed3d486bfedc0de5832d7613445a2"],["/css/ssn.css","ac82e7b6c08da03297ce6315e7a907b5"],["/css/var.css","5fe62d070f48cf73e6bf1e37f45a8ad4"],["/games/index.html","9700b795ea70db766ef8f2159516d1d2"],["/gitcalendar/css/gitcalendar.css","2619feaf0db86ae61e628200bdfbb8fa"],["/gitcalendar/js/gitcalendar.js","62984251e17c83839cc90968a16608bb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/siteicon/README.html","955b531274004311477d6919d104a90c"],["/img/siteicon/android-chrome-144x144.png","5ee5f3f1598973e039d89167f638dd8d"],["/img/siteicon/android-chrome-192x192.png","4fea5d4b5998b92303bf091eddfa6546"],["/img/siteicon/android-chrome-256x256.png","a6ee9edcdaf02a81696b95bd80689d96"],["/img/siteicon/android-chrome-36x36.png","f364670ad97da2eb91aef16df7d5d94c"],["/img/siteicon/android-chrome-384x384.png","adc927618afba9ae9c1d44663fa87df1"],["/img/siteicon/android-chrome-48x48.png","67086f62494b168407d29f364f7ee7a5"],["/img/siteicon/android-chrome-512x512.png","5013494b63c67cf9d39b20b7cbd1229e"],["/img/siteicon/android-chrome-72x72.png","edeee3ed35d9b4d089c437e3803431f5"],["/img/siteicon/android-chrome-96x96.png","826c20dd3543f21564e4597454259991"],["/img/siteicon/apple-touch-icon.png","1aa51f909339d19c1442e3e788e17195"],["/img/siteicon/browserconfig.xml","59b1df03a6dc8ea31c500d1a71340b7b"],["/img/siteicon/favicon-16x16.png","5f2f2c3ffcc705be67f9049ded86166f"],["/img/siteicon/favicon-32x32.png","aba5956b20f7e25a4c2f3486348868fb"],["/img/siteicon/mstile-150x150.png","23d36506dc7fe1fe8d47ef11a4c64d6d"],["/img/siteicon/safari-pinned-tab.svg","d93a50fcb9f7b6bf57221d73c812249c"],["/index.html","6f6f17aeb7bcf2bcec5781167f9ea69f"],["/js/custom/custom.js","f721977c4a9c344d2eb05b3e395191a9"],["/js/custom/fixed_comment.js","62b96b40e2063b254fe6a5264b4196ce"],["/js/custom/heobber.js","9247a61c05d6d98d79e1aabea38450bf"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weather.js","ebf9ff0fe424b4749860918175d39df0"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","083825f80d33a01cf45e21c3e1e06c29"],["/liuyan/index.html","288a847bd830975f3e03fa5d06d6a7dc"],["/media/alipay.jpg","c956fabe67b5441a88923522e72bbb5c"],["/media/avatar.jpg","cae5a754df8d5b0e4aa5e4647a597b18"],["/media/bg.jpg","8843677c00e5a448f82e5d49b06b247b"],["/media/favicon.png","fb762187592876ced8e1d1a6fd63ef52"],["/media/page404.jpg","ca9f5e9f1572830853930ccaebbbce88"],["/media/top_img.jpg","76a9985c6b0230199858f84e139319d0"],["/media/touxiang.jpg","cae5a754df8d5b0e4aa5e4647a597b18"],["/media/wechat.jpg","d83677b68f6736e6f6ff1b15c7254472"],["/movies/index.html","5096495292b5ddfaa1ca4fc61549a58e"],["/music/index.html","e46700151fe5e0bbd5b8f60006584119"],["/page/2/index.html","e62465bfe0a6787000ade3858bfe83ef"],["/random/index.html","83db7dfc198d717512eee68c48dc669c"],["/search.xml","753f2e3b21566be76ec7dda68bc12945"],["/shijianxian/index.html","b0f032a2249234ed80273a40f5f248ae"],["/shuoshuo/index.html","78daf72348967c0b08eda7d25f774188"],["/sw-register.js","e4051ed7a62ef376c747ad7fbecb799f"],["/tags/Git/index.html","574bc8814a05361fc54850e75f70b4ba"],["/tags/Github-Actions/index.html","3bcab92b0a63a7b7c95232f9eeaeb756"],["/tags/Hexo/index.html","dd2fe8368767785475651c032d47478c"],["/tags/Html/index.html","da794c8f0f601e21d2a98df78599d7bc"],["/tags/Python/index.html","c4583e47fd3ea707bd31e6c73b209bda"],["/tags/Typora/index.html","ffb6510b74fe02f84128fc8feedf165f"],["/tags/bat/index.html","5682bf9be6c65cfcdd1f4224eedd540b"],["/tags/cmd/index.html","2457cfb16ab42be1794e33d1ec9d8164"],["/tags/index.html","f2106eae93bfb153a54d45040fdb6b15"],["/tags/云函数/index.html","ba4d84692a5808bcfdab466fd79416e7"],["/tags/初会/index.html","2baae4de59b9c11b9e87e56b483a279b"],["/tags/笔记/index.html","d63313bc2920c5511f5d6990f6c730ed"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){e=new URL(e);return r&&e.pathname.match(r)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,!1);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e&&0<e.length&&(firstRegister=0),e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){var e;if(!n.has(t))return e=new Request(t,{credentials:"same-origin"}),fetch(e).then(function(e){if(e.ok)return cleanResponse(e).then(function(e){return r.put(t,e)});throw new Error("Request for "+t+" returned a response with status "+e.status)})}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}).then(function(){if(!firstRegister)return self.clients.matchAll().then(function(e){e&&e.length&&e.forEach(function(e){e.postMessage("sw.update")})})}))}),self.addEventListener("fetch",function(t){var n,e,r;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function r(a,c,o){function i(n,e){if(!c[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(s)return s(n,!0);e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t=c[n]={exports:{}};a[n][0].call(t.exports,function(e){var t=a[n][1][e];return i(t||e)},t,t.exports,r,a,c,o)}return c[n].exports}for(var s="function"==typeof require&&require,e=0;e<o.length;e++)i(o[e]);return i}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t=(t=e&&e.cache?e.cache.name:t)||s.cache.name;return caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),t)return e;throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.")}var o,s=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||s.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||s.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,t,n){var r=e.url,a=n.maxAgeSeconds,c=n.maxEntries,e=n.name,o=Date.now();return i("Updating LRU order for "+r+". Max entries is "+c+", max age is "+a),f.getDb(e).then(function(e){return f.setTimestampForUrl(e,r,o)}).then(function(e){return f.expireEntries(e,c,a,o)}).then(function(e){i("Successfully updated IDB.");e=e.map(function(e){return t.delete(e)});return Promise.all(e).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,e=r,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){e=e.headers.get("date");if(e)if(new Date(e).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var a="sw-toolbox-",c=1,f="store",d="url",u="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:d}).createIndex(u,u,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return o=e,s=r,((i=t)?new Promise(function(e,t){var n=1e3*i,r=[],a=o.transaction(f,"readwrite"),c=a.objectStore(f);c.index(u).openCursor().onsuccess=function(e){var t,e=e.target.result;e&&s-n>e.value[u]&&(t=e.value[d],r.push(t),c.delete(t),e.continue())},a.oncomplete=function(){e(r)},a.onabort=t}):Promise.resolve([])).then(function(t){return i=e,((s=n)?new Promise(function(e,t){var r=[],n=i.transaction(f,"readwrite"),a=n.objectStore(f),c=a.index(u),o=c.count();c.count().onsuccess=function(){var n=o.result;s<n&&(c.openCursor().onsuccess=function(e){var t,e=e.target.result;e&&(t=e.value[d],r.push(t),a.delete(t),n-r.length>s&&e.continue())})},n.oncomplete=function(){e(r)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var i,s});var o,i,s}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){function r(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n}var a=new URL("./",self.location).pathname,c=e("path-to-regexp");r.prototype.makeHandler=function(e){var n,r;return this.regexp&&(n=this.regexp.exec(e),r={},this.keys.forEach(function(e,t){r[e.name]=n[t+1]})),function(e){return this.handler(e,r,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){function c(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;)new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next();return a}function a(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var o=e("./route"),i=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){r=r||{},a=t instanceof RegExp?RegExp:(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var n=new o(e,t,n,r),r=(this.routes.has(a)||this.routes.set(a,new Map),this.routes.get(a)),a=(r.has(e)||r.set(e,new Map),r.get(e)),r=n.regexp||n.fullUrlRegExp;a.has(r.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),a.set(r.source,n)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,n=n.pathname;return this._match(e,c(this.routes,r),n)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],a=a&&a.get(e.toLowerCase());if(a){a=c(a,n);if(0<a.length)return a[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(r,e,a){return a=a||{},o.debug("Strategy: cache first ["+r.url+"]",a),o.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var f=e("../helpers"),d=e("./cacheOnly");t.exports=function(o,i,s){return f.debug("Strategy: fastest ["+o.url+"]",s),new Promise(function(t,n){function e(e){e instanceof Response?t(e):c("No result returned")}var r=!1,a=[],c=function(e){a.push(e.toString()),r?n(new Error('Both cache and network failed: "'+a.join('", "')+'"')):r=!0};f.fetchAndCache(o.clone(),s).then(e,c),d(o,i,s).then(e,c)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var f=e("../options"),d=e("../helpers");t.exports=function(c,e,o){var i=(o=o||{}).successResponses||f.successResponses,s=o.networkTimeoutSeconds||f.networkTimeoutSeconds;return d.debug("Strategy: network first ["+c.url+"]",o),d.openCache(o).then(function(e){var t,n,r=[],a=(s&&(a=new Promise(function(r){t=setTimeout(function(){e.match(c).then(function(e){var t=o.cache||f.cache,n=Date.now(),t=t.maxAgeSeconds;d.isResponseFresh(e,t,n)&&r(e)})},1e3*s)}),r.push(a)),d.fetchAndCache(c,o).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw d.debug("Response was an HTTP error: "+e.statusText,o),n=e,new Error("Bad response")}).catch(function(t){return d.debug("Network or response error, fallback to cache ["+c.url+"]",o),e.match(c).then(function(e){if(e)return e;if(n)return n;throw t})}));return r.push(a),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),e=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",e.installListener),self.addEventListener("activate",e.activateListener),self.addEventListener("fetch",e.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function h(e,t){for(var n=[],r=0,a=0,c="",o=t&&t.delimiter||"/";null!=(u=y.exec(e));){var i,s,f,d,u,h=u[0],l=u[1],b=u.index;c+=e.slice(a,b),a=b+h.length,l?c+=l[1]:(b=e[a],h=u[2],l=u[3],i=u[4],s=u[5],f=u[6],d=u[7],c&&(n.push(c),c=""),u=u[2]||o,n.push({name:l||r++,prefix:h||"",delimiter:u,optional:"?"===f||"*"===f,repeat:"+"===f||"*"===f,partial:null!=h&&null!=b&&b!==h,asterisk:!!d,pattern:(l=i||s)?l.replace(/([=!:$\/()])/g,"\\$1"):d?".*":"[^"+p(u)+"]+?"}))}return a<e.length&&(c+=e.substr(a)),c&&n.push(c),n}function l(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(d){for(var u=new Array(d.length),e=0;e<d.length;e++)"object"==_typeof(d[e])&&(u[e]=new RegExp("^(?:"+d[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?l:encodeURIComponent,c=0;c<d.length;c++){var o=d[c];if("string"!=typeof o){var i,s=r[o.name];if(null==s){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(v(s)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(i=a(s[f]),!u[c].test(i))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(i)+"`");n+=(0===f?o.prefix:o.delimiter)+i}}else{if(i=o.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(s),!u[c].test(i))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+i+'"');n+=o.prefix+i}}else n+=o}return n}}function p(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function b(e,t){return e.keys=t,e}function m(e){return e.sensitive?"":"i"}function g(e,t,n){v(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var i,s,f=e[o];"string"==typeof f?c+=p(f):(i=p(f.prefix),s="(?:"+f.pattern+")",t.push(f),f.repeat&&(s+="(?:"+i+s+")*"),c+=s=f.optional?f.partial?i+"("+s+")?":"(?:"+i+"("+s+"))?":i+"("+s+")")}var d=p(n.delimiter||"/"),u=c.slice(-d.length)===d;return r||(c=(u?c.slice(0,-d.length):c)+"(?:"+d+"(?=$))?"),c+=a?"$":r&&u?"":"(?="+d+"|$)",b(new RegExp("^"+c,m(n)),t)}function x(e,t,n){if(v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp){var r=e,a=t,c=r.source.match(/\((?!\?)/g);if(c)for(var o=0;o<c.length;o++)a.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return b(r,a)}if(v(e)){for(var i=e,s=t,f=n,d=[],u=0;u<i.length;u++)d.push(x(i[u],s,f).source);return b(new RegExp("(?:"+d.join("|")+")",m(f)),s)}return r=t,g(h(e,t=n),r,t)}var v=e("isarray"),y=(t.exports=x,t.exports.parse=h,t.exports.compile=function(e,t){return r(h(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=g,new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g"))},{isarray:14}],16:[function(e,t,n){var r,a,c,o;c=Cache.prototype.addAll,(o=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(r=o[1],a=parseInt(o[2])),c&&(!o||"Firefox"===r&&46<=a||"Chrome"===r&&50<=a)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"unpkg.com"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn.jsdelivr.net"});