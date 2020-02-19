'use strict';
const {fromCharCode} = String;

const encode = uint8array => {
  const output = [];
  for (let i = 0, {length} = uint8array; i < length; i++)
    output.push(fromCharCode(uint8array[i]));
  return btoa(output.join(''));
}
exports.encode = encode

const asCharCode = c => c.charCodeAt(0);

const decode = chars => Uint8Array.from(atob(chars), asCharCode);
exports.decode = decode;
