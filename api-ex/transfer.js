const Eos = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    keyProvider: ['5JQBXN6FxToDa4ZVJXVpqz36HS5HrJTQMDJoqyvB1R3nD9XJt9F'],
};

Eos(config).transfer('zxcvbasdfg11', 'zxcvbasdfg12', '50.0000 EOS', 'test transfer')
    .then(console.log).catch(console.error);

Eos(config).transaction(
    {
        actions: [
            {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                    actor: 'zxcvbasdfg11',
                    permission: 'active'
                }],
                data: {
                    from: 'zxcvbasdfg11',
                    to: 'zxcvbasdfg12',
                    quantity: '1.0000 EOS',
                    memo: 'test'
                }
            }
        ]
    }
).then(console.log).catch(console.error);

Eos(config).transaction('eosio.token', (coin) => {
    coin.transfer('zxcvbasdfg11', 'zxcvbasdfg12', '1.0000 EOS', 'test transfer');
}).then(console.log).catch(console.error);

Eos(config).contract('eosio.token')
    .then(coin => coin.transfer('zxcvbasdfg11', 'zxcvbasdfg12', '1.0000 EOS', 'test contract transfer'))
    .then(console.log).catch(console.error);
