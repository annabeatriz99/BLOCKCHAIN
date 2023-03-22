const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestamp, lastHash, hash, data)
    
    { 
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;

    }

    toString(){
        return `Block =
                Timestamp = ${this.timestamp}
                lastHash =${this.lastHash.substring(0, 10)}
                hash = ${this.hash.substring(0, 10)}
                data = ${this.data} `;
    }
    static genesis(){
    return new this('Genesis time','-----------', 'AUGFDD1112357', [] );
    }
    static mineBlock(lastBlock, data){
        const timestamp = Data.now();
        const lastHash = lastBlock.hash;
        const hash = "a-fazer-hash";

        return new this(timestamp, lastHash, hash, data);

    }
    static hash(timestamp, lastHash, data) {
     return SHA2569(`${timestamp}${lastHash}${data}`).toString();

    }

}
module.exports = Block;