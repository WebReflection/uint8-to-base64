var uint8ToBase64 = (function (exports) {
	'use strict';

	var fromCharCode = String.fromCharCode;
	var encode = function encode(uint8array) {
	  return btoa(fromCharCode.apply(null, uint8array));
	};

	var asCharCode = function asCharCode(c) {
	  return c.charCodeAt(0);
	};

	var decode = function decode(chars) {
	  return Uint8Array.from(atob(chars), asCharCode);
	};

	exports.decode = decode;
	exports.encode = encode;

	return exports;

}({}));
