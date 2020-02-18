const {fromCharCode} = String;

export const encode = uint8array => btoa(fromCharCode.apply(null, uint8array));

const asCharCode = c => c.charCodeAt(0);

export const decode = chars => Uint8Array.from(atob(chars), asCharCode);
