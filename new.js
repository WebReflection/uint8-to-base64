var uint8ToBase64=function(o){"use strict";const{fromCharCode:r}=String,t=o=>o.charCodeAt(0);return o.decode=o=>Uint8Array.from(atob(o),t),o.encode=o=>btoa(r.apply(null,o)),o}({});
