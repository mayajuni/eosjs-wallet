const Eos = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    keyProvider: ['5JQBXN6FxToDa4ZVJXVpqz36HS5HrJTQMDJoqyvB1R3nD9XJt9F'],
};

// 바이트 기준
Eos(config).transaction(tr => {
    tr.buyrambytes({
        payer: 'zxcvbasdfg11',
        receiver: 'zxcvbasdfg11',
        bytes: 8192
    });
}).then(console.log).catch(console.error);

// EOS 기준
Eos(config).transaction(tr => {
    tr.buyram({
        payer: 'zxcvbasdfg11',
        receiver: 'zxcvbasdfg12',
        quant: '1.0000 EOS'
    });
}).then(console.log).catch(console.error);

// 판매
Eos(config).transaction(tr => {
    tr.sellram({
        account: 'zxcvbasdfg11',
        bytes: 50000
    });
}).then(console.log).catch(console.error);
