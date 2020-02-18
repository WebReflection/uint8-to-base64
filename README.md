# A safe Uint8Array to base64 string converter

[![Build Status](https://travis-ci.com/WebReflection/uint8-to-base64.svg?branch=master)](https://travis-ci.com/WebReflection/uint8-to-base64) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/uint8-to-base64/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/uint8-to-base64?branch=master)

<sup>**Social Media Photo by [Suzanne D. Williams](https://unsplash.com/@scw1217) on [Unsplash](https://unsplash.com/)**</sup>

Compatible with any binary data and every modern JS engine.

```js
import {encode, decode} from 'uint8-to-base64';
// const {encode, decode} = require('uint8-to-base64');

const utf8Binary = new Uint8Array(anyArrayBuffer);

// encode converts Uint8Array instances to utf-16 strings
const encoded = encode(utf8Binary);

// it's just like any other strings
console.log(encoded);

// decode converts utf-16 strings, encoded via this module,
// into their original Uint8Array representation
const decoded = decode(encoded);

console.assert(
  JSON.stringify([...utf8Binary]) ===
  JSON.stringify([...decoded]),
  'safe Uint8Array to utf-16 conversion'
);
```

**Please note** this module requires global `atob` and `btoa` in NodeJS, polyfilled in tests in here as such.

```js
global.btoa = str => Buffer.from(str).toString('base64');
global.atob = str => Buffer.from(str, 'base64').toString();
```

Looking for a drop in module that converts into utf-16 strings instead? Check [uint8-to-utf16](https://github.com/WebReflection/uint8-to-utf16#readme) out!
