export function encode(uint8array: Uint8Array): string;

export function decode(base64: string): Uint8Array;

declare const uint8ToBase64: {
  encode: typeof encode;
  decode: typeof decode;
};

export default uint8ToBase64; 