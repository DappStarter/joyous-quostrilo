require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy reward stick unveil inner nation force tennis'; 
let testAccounts = [
"0xa8ca43b3a86894ab22036f8557ca89c51763be912282e5990a784fe9562d82a5",
"0xb05f3b612155a8497daa5b2822a01e9d1e0b5bacc0c32973499f08459d387c96",
"0x69b7c51b2cfdd8f258245dbf0e95acab0f2b605117342a977fb677085760e6f9",
"0xaba90409d9e9be46e44f6ab2faaf02ce9709ca7b6b2389fa2daf555a0b387712",
"0xc27f9df34ce4617b53849bc1883b1149386b14a8dc5efdeb48399612b766c6f6",
"0x6b10269ae8f8c6df9314374805dc3bb5f531ad94498730e6932dcdb51714130e",
"0x2784e783d8fc062d7298bde3d86224fb39a0a08654fb17fa4ae376988bf20180",
"0xff28b8a817907c9c0a59936122eef5b86687f7b4577e2b2b425477827950964a",
"0xb2a8d866bdb6370c1fc4f68d02bba7ae1d588f5ba1ca556900f1ba41d0262271",
"0x5b9f35df7a2ad6bcf26b59fe43a8617987ede544733655d17bbc333ab662e584"
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
            version: '^0.5.11'
        }
    }
};
