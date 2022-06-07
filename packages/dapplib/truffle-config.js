require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember modify grace casino sword turtle'; 
let testAccounts = [
"0xd8d73f36f5ea81959dc8f985ebc14bde6686499c77cb75286b7ec9274871a829",
"0x86804c53c35a49edde5a97ff29a2ba22b58d3435343cc3798e26b751f1449a6e",
"0x2a837438f130f9de640e77e495868a55347799fd21e31fbd9229418e2c6eec4b",
"0xbd5ae67bd46186ba1434a9630723f01599e239460cd939ab949fc8d7d5e590c1",
"0x00080594a49c4c4ab0e904a7ac53ce06e441f753dd744be3bf6d8b19c06fc68d",
"0x8704f003977083a8ef433c6091ed082a2be47ccfaa4ffc8d70b65642297ce14d",
"0x7b1fa13be0caae6f7760927761d40f8862e42ea9e07138cd06450514b6a67266",
"0x2d16885c04022db0b8779aeb8a7fa16d7dd0bffb5381a92d0c570c05bf37007b",
"0xc057ed78b6a57058c8937fd5b9bcafe0d84677402fe50a42bc7ba61f9883f26c",
"0xa7bb32ffe30e6a17092cdfac28d5a9f4b7d449707ce9054d7a7b2cbf80ecb0bc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

