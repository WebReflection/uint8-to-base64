const {encode, decode} = require('../cjs');

const even = new Uint8Array([0, 1, 2, 3]);
const odd = new Uint8Array([0, 1, 2]);

const evenEncoded = encode(even);
const oddEncoded = encode(odd);

const evenDecoded = decode(evenEncoded);
const oddDecoded = decode(oddEncoded);

console.assert(
  JSON.stringify([...evenDecoded]) === JSON.stringify([...even]),
  'even works'
);

console.assert(
  JSON.stringify([...oddDecoded]) === JSON.stringify([...odd]),
  'odd works'
);
