"use strict";var precacheConfig=[["/drum-machine/index.html","82549c68c14136a82550116bd54e3490"],["/drum-machine/static/css/main.6695db08.css","ed8fe8a725026d1cd162ff60a0bb9266"],["/drum-machine/static/js/main.4fd0948f.js","26192ebd8c6c6d58dfc7de225f4a7bf3"],["/drum-machine/static/media/Cev_H2.abe03961.mp3","abe03961c7511cc994b64bcebc93b0f2"],["/drum-machine/static/media/Chord_1.d8544f3e.mp3","d8544f3e90cfa0d7ed4526b77e93408b"],["/drum-machine/static/media/Chord_2.3946f9fe.mp3","3946f9fe73921f85ce63735196183592"],["/drum-machine/static/media/Chord_3.074c0a82.mp3","074c0a828b1430e030a0b5cd55ae0b3a"],["/drum-machine/static/media/Dsc_Oh.5c9f8087.mp3","5c9f80876a2f7c9c7dd4dba4a1784f95"],["/drum-machine/static/media/Give_us_a_light.561c9a54.mp3","561c9a5450dd4aef32292a06f357d553"],["/drum-machine/static/media/Heater-1.b1cfea05.mp3","b1cfea05e9aeb27be5b041e40c1ca80f"],["/drum-machine/static/media/Heater-2.0d219666.mp3","0d219666c08f6037c2f4c6ccfa8c71bb"],["/drum-machine/static/media/Heater-3.632e8772.mp3","632e877262affcec87e77ef0a409969c"],["/drum-machine/static/media/Heater-4_1.d9de8a50.mp3","d9de8a500f2556463e3a3784274f1847"],["/drum-machine/static/media/Heater-6.3062daca.mp3","3062daca6b46c54601c994dcdda8ef6b"],["/drum-machine/static/media/Kick_n_Hat.200b4bd3.mp3","200b4bd34ad53416203739f8ab241e3b"],["/drum-machine/static/media/RP4_KICK_1.09fda256.mp3","09fda25678eb5321a1b3d456bda527e1"],["/drum-machine/static/media/punchy_kick_1.a6a991c5.mp3","a6a991c55f20e9c7a390e86a2d6e4491"],["/drum-machine/static/media/side_stick_1.123a99c7.mp3","123a99c7ed11a3254ac92032ffba1122"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/drum-machine/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});