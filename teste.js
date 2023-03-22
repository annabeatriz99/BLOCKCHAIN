const Block = require('./block.js');
const block = new Block('1234', '123456789ABCDE1', '123456789ABCDE123456', '100');
console.log(block.toString());
console.log(Block.genesis().toString());
const primeiroBloco= Block.mineBlock(Block.genesis(), '$600');
console.log(primeiroBloco.toString());