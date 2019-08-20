const Eos = require('eosjs');

const ecc = Eos.modules.ecc;

ecc.randomKey().then(privateKey => {
    const publicKey = ecc.privateToPublic(privateKey);
    console.log('publicKey: ', publicKey);
    console.log('privateKey: ', privateKey);
});

ecc.randomKey().then(privateKey => {
    const publicKey = ecc.privateToPublic(privateKey);
    console.log('publicKey: ', publicKey);
    console.log('privateKey: ', privateKey);
});
