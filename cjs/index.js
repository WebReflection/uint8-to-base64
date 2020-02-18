'use strict';
const {fromCharCode} = String;

const encode = uint8array => btoa(fromCharCode.apply(null, uint8array));
exports.encode = encode;

const asCharCode = c => c.charCodeAt(0);

const decode = chars => Uint8Array.from(atob(chars), asCharCode);
exports.decode = decode;
