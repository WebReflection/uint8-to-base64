var uint8ToBase64=function(t){"use strict";const{fromCharCode:o}=String,r=t=>t.charCodeAt(0);return t.decode=t=>Uint8Array.from(atob(t),r),t.encode=t=>{const r=[];for(let e=0,{length:n}=t;e<n;e++)r.push(o(t[e]));return btoa(r.join(""))},t}({});
