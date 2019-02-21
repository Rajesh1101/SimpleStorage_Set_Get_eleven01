var HDWalletProvider = require("truffle-hdwallet-provider");
var Web3 = require("web3");

var RPC_ENDPOINT = "http://40.78.48.235:8083/api/node/rpc";
var MNEMONIC = "Place your Mnemonic from your MetaMask";

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*"
        },
    
    eleven01: {
        provider: function() {
            return new HDWalletProvider(MNEMONIC, RPC_ENDPOINT)
        },
        network_id: "*",
        gasPrice: 0,
        gas: 4500000,
    }  
}
}